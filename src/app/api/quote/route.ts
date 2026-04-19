import { Resend } from "resend";
import { z } from "zod/v4";

const schema = z.object({
  name: z.string().min(1),
  email: z.email(),
  phone: z.string().min(7),
  service: z.enum([
    "Essential Clean (Recurring)",
    "Deep Sanctuary Clean",
    "Eco-Move In/Out",
    "Custom Add-ons",
    "Not sure yet",
  ]),
  bedrooms: z.string().optional(),
  bathrooms: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const result = schema.safeParse(body);
  if (!result.success) {
    return Response.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  const data = result.data;

  const apiKey = process.env.RESEND_API_KEY;
  const recipientEmail = process.env.QUOTE_RECIPIENT_EMAIL;
  const fromEmail = process.env.QUOTE_FROM_EMAIL;

  if (!apiKey || !recipientEmail || !fromEmail) {
    console.error("Missing RESEND_API_KEY, QUOTE_RECIPIENT_EMAIL, or QUOTE_FROM_EMAIL env vars");
    return Response.json({ error: "Server configuration error" }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Service: ${data.service}`,
    data.bedrooms ? `Bedrooms: ${data.bedrooms}` : null,
    data.bathrooms ? `Bathrooms: ${data.bathrooms}` : null,
    data.message ? `\nMessage:\n${data.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      replyTo: data.email,
      subject: `New Quote Request from ${data.name}`,
      text: `New quote request from your website:\n\n${lines}`,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return Response.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
