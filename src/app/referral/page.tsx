import type { Metadata } from "next";
import { Gift, UserPlus, CalendarCheck, Percent } from "lucide-react";

export const metadata: Metadata = {
  title: "Refer a Neighbor — Save 15%",
  description:
    "Refer a neighbor to Precious Home Help. You both get 15% off your next cleaning.",
};

const steps = [
  {
    icon: UserPlus,
    title: "You refer",
    description:
      "Text Precious your neighbor\u2019s name and address at (872) 235-9880.",
  },
  {
    icon: CalendarCheck,
    title: "They book",
    description: "Your neighbor schedules their first cleaning.",
  },
  {
    icon: Percent,
    title: "You both save",
    description:
      "Both of you get 15% off your next clean. Simple as that.",
  },
];

export default function ReferralPage() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <Gift className="w-12 h-12 text-primary mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Refer a neighbor. You both save 15%.
          </h1>
          <p className="text-lg text-muted-foreground mb-16">
            Good cleaning is worth sharing. When you refer a neighbor, both of
            you get 15% off your next cleaning.
          </p>

          <div className="grid gap-8 md:grid-cols-3 text-center">
            {steps.map((step, index) => (
              <div key={step.title}>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground mb-1">
                  Step {index + 1}
                </p>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12">
            <h2 className="font-serif text-2xl font-semibold text-primary-foreground mb-3">
              Ready to refer?
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Text Precious the neighbor&rsquo;s name and address.
            </p>
            <a
              href="sms:8722359880"
              className="inline-flex items-center gap-2 bg-background text-foreground font-medium rounded-lg px-6 py-3 hover:bg-background-alt transition-colors"
            >
              Text (872) 235-9880
            </a>
          </div>
        </div>
      </div>

      {/* Bottom spacer for mobile sticky CTA */}
      <div className="h-16 md:hidden" />
    </section>
  );
}
