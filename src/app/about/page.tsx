import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, ShieldCheck, UserCheck, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About Precious",
  description:
    "Meet Bukola Precious Agbenike — owner and sole operator of Precious Home Help, a personal cleaning service in Chicago.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-background">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
          <div className="max-w-2xl mx-auto">
            {/* TODO: Add Precious's photo here with next/image once we have the optimized image */}
            <div className="w-48 h-48 rounded-2xl bg-background-alt border border-border mx-auto mb-8 flex items-center justify-center">
              <span className="text-sm text-muted-foreground">Photo</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground text-center mb-8">
              About Precious
            </h1>

            {/* TODO: replace with Precious's actual bio, written in her voice */}
            <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed space-y-4">
              <p>
                Hi, I&rsquo;m Precious. I started Precious Home Help because I
                believe everyone deserves a clean, well-cared-for home &mdash;
                with the personal attention that bigger services just can&rsquo;t provide.
              </p>
              <p className="text-sm text-accent italic">
                [This section will be updated with Precious&rsquo;s personal
                story in her own words.]
              </p>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3 bg-background-alt rounded-xl p-4 border border-border">
                <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Licensed</p>
                  <p className="text-xs text-muted-foreground">
                    Chicago Business License #306549
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-background-alt rounded-xl p-4 border border-border">
                <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Insured</p>
                  <p className="text-xs text-muted-foreground">
                    Full liability coverage
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-background-alt rounded-xl p-4 border border-border">
                <UserCheck className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Background-checked
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Verified and clear
                  </p>
                </div>
              </div>
            </div>

            {/* Service area */}
            <div className="mt-12 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-primary" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Neighborhoods served
                </h2>
              </div>
              <p className="text-muted-foreground">
                Hyde Park &middot; Woodlawn &middot; Bronzeville &middot; and
                surrounding Chicago neighborhoods
              </p>
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
        </div>
      </section>

      {/* Bottom spacer for mobile sticky CTA */}
      <div className="h-16 md:hidden" />
    </>
  );
}
