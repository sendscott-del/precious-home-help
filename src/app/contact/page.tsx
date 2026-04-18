import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Precious Home Help. Call, text, or email for personal house cleaning in Chicago.",
};

export default function ContactPage() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
        <div className="max-w-xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground text-center mb-4">
            Get in touch
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            I&rsquo;d love to hear from you. Reach out however is easiest.
          </p>

          <div className="space-y-6">
            <a
              href="tel:8722359880"
              className="flex items-center gap-4 bg-background-alt rounded-xl p-5 border border-border hover:border-primary/30 transition-colors"
            >
              <Phone className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Call</p>
                <p className="text-muted-foreground">(872) 235-9880</p>
              </div>
            </a>

            <a
              href="sms:8722359880"
              className="flex items-center gap-4 bg-background-alt rounded-xl p-5 border border-border hover:border-primary/30 transition-colors"
            >
              <MessageCircle className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Text</p>
                <p className="text-muted-foreground">(872) 235-9880</p>
              </div>
            </a>

            {/* TODO: Get Precious's email address */}
            <div className="flex items-center gap-4 bg-background-alt rounded-xl p-5 border border-border">
              <Mail className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Email</p>
                <p className="text-muted-foreground italic text-sm">
                  Email address coming soon
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-background-alt rounded-xl p-5 border border-border">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Service area</p>
                <p className="text-muted-foreground">
                  Hyde Park, Woodlawn, Bronzeville, and surrounding Chicago
                  neighborhoods
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-background-alt rounded-xl p-5 border border-border">
              <Clock className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">Response time</p>
                <p className="text-muted-foreground">
                  I typically reply within one business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spacer for mobile sticky CTA */}
      <div className="h-16 md:hidden" />
    </section>
  );
}
