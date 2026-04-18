import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, Home, Truck, Heart, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Cleaning Services — Essential, Deep, Eco Move-Out",
  description:
    "Explore eco-friendly cleaning services in Chicago: recurring cleans, deep sanctuary cleans, move in/out, and health & wellness add-ons. $35/hour.",
};

const services = [
  {
    id: "essential",
    icon: Sparkles,
    title: "Essential Clean (Recurring)",
    positioning: "Keep your home consistently fresh with regular maintenance cleaning.",
    includes: [
      "Dusting all accessible surfaces",
      "Vacuuming carpets and rugs",
      "Mopping hard floors",
      "Surface sanitization (counters, sinks, fixtures)",
      "Bathroom cleaning and disinfection",
      "Kitchen wipe-down (stovetop, counters, exterior of appliances)",
      "Trash removal",
    ],
    whoItsFor:
      "Busy households that want a clean baseline without thinking about it.",
  },
  {
    id: "deep",
    icon: Home,
    title: "Deep Sanctuary Clean",
    positioning:
      "A comprehensive, high-detail clean that reaches the places regular cleaning misses.",
    includes: [
      "Everything in the Essential Clean",
      "Baseboards and crown molding",
      "Behind and under appliances",
      "Inside cabinets and drawers (upon request)",
      "Light fixtures and ceiling fans",
      "Window sills and tracks",
      "Door frames and switch plates",
    ],
    whoItsFor:
      "Homes that haven\u2019t had a deep clean in a while, or anyone who wants a fresh start.",
  },
  {
    id: "move",
    icon: Truck,
    title: "Eco-Move In/Out",
    positioning:
      "Specialized cleaning for property transitions, focusing on allergen removal and non-toxic residues.",
    includes: [
      "Full deep clean of all rooms",
      "Inside all cabinets, closets, and drawers",
      "Appliance interiors (oven, refrigerator, dishwasher)",
      "Allergen-focused vacuuming with HEPA filtration",
      "Non-toxic product use for safe residue levels",
      "Window cleaning (interior)",
    ],
    whoItsFor:
      "Renters, landlords, and homeowners preparing for a move in or out.",
  },
  {
    id: "wellness",
    icon: Heart,
    title: "Health & Wellness Add-ons",
    positioning:
      "Extra care for households with allergies, young children, or pets.",
    includes: [
      "HEPA-filter vacuuming for fine particulates",
      "Plant-based disinfection of high-touch surfaces",
      "Pet hair and dander focused treatment",
      "Hypoallergenic product options",
      "Air quality-conscious cleaning techniques",
    ],
    whoItsFor:
      "Families with pets, children, allergies, or anyone who wants the healthiest possible home environment.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-background">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground text-center mb-4">
            Cleaning services
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Every service uses plant-based, non-toxic products by default. Your
            home gets genuinely clean without the chemical residue.
          </p>

          <div className="space-y-16">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24 bg-background-alt rounded-2xl p-8 md:p-12 border border-border"
              >
                <div className="flex items-start gap-4 mb-6">
                  <service.icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                      {service.title}
                    </h2>
                    <p className="mt-1 text-muted-foreground">
                      {service.positioning}
                    </p>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-[2fr_1fr] md:gap-12">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                      What&rsquo;s included
                    </h3>
                    <ul className="space-y-2">
                      {service.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <span className="text-primary mt-1.5 text-xs">&#9679;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 md:mt-0">
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                      Who it&rsquo;s for
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.whoItsFor}
                    </p>
                    <Button
                      render={<Link href="/book" />}
                      className="mt-6 bg-primary hover:bg-primary-hover text-primary-foreground rounded-lg"
                    >
                      Request a Quote
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="bg-background-alt border-t border-border">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <Leaf className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
              Product philosophy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I use plant-based, non-toxic cleaning products by default. They
              work just as well without leaving chemical residues in your home.
              Your kids, pets, and HVAC system will notice the difference.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Prefer your own supplies? That&rsquo;s fine too. I&rsquo;ll use
              them &mdash; and I&rsquo;ll tell you honestly if they aren&rsquo;t
              up to the job.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom spacer for mobile sticky CTA */}
      <div className="h-16 md:hidden" />
    </>
  );
}
