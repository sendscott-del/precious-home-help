import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, ShieldCheck, UserCheck, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Transparent $35/hr Cleaning Pricing in Chicago",
  description:
    "Simple hourly pricing for personal house cleaning in Chicago. $35/hour for all services — no surprise minimums or hidden fees.",
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-background">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Simple, honest, hourly.
          </h1>
          <div className="mt-8 mb-4">
            <span className="font-serif text-6xl md:text-8xl font-semibold text-primary">
              $35
            </span>
            <span className="text-2xl md:text-3xl text-muted-foreground ml-2">
              / hour
            </span>
          </div>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            One flat rate for every cleaning service. No surprise minimums, no
            upcharges for rooms with more corners than others.
          </p>
        </div>
      </section>

      <section className="bg-background-alt border-y border-border">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Why hourly?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                It means I can do the job right instead of rushing to hit a
                fixed-rate clock. You pay for thoroughness, not speed.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                How I estimate
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Tell me about your home &mdash; size, pets, frequency &mdash;
                and I&rsquo;ll give you a realistic time range before we start.
                No surprises.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Where I sit in the market
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Franchises charge $200&ndash;$400 per visit. Independent
                cleaners run $25&ndash;$40/hour with wildly different quality. I
                sit in the middle, on purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust block */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-sm font-medium text-foreground">Licensed</span>
              <span className="text-xs text-muted-foreground">
                Chicago License #306549
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="w-8 h-8 text-primary" />
              <span className="text-sm font-medium text-foreground">Insured</span>
              <span className="text-xs text-muted-foreground">
                Fully covered liability
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <UserCheck className="w-8 h-8 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Background-checked
              </span>
              <span className="text-xs text-muted-foreground">
                Verified and clear
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Award className="w-8 h-8 text-primary" />
              <span className="text-sm font-medium text-foreground">
                100% Satisfaction Guarantee
              </span>
              <span className="text-xs text-muted-foreground">
                Not happy? I&rsquo;ll make it right
              </span>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              render={<Link href="/book" />}
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-lg px-8 text-base"
            >
              Request a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Bottom spacer for mobile sticky CTA */}
      <div className="h-16 md:hidden" />
    </>
  );
}
