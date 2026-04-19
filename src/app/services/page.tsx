import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, Home, Truck, Heart, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Cleaning Services — Essential, Deep, Eco Move-Out",
  description:
    "Personal, thorough cleaning services in Chicago: recurring cleans, deep sanctuary cleans, move in/out, and custom add-ons. $25/hour.",
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
      "Specialized cleaning for property transitions, leaving the space spotless for whoever comes next.",
    includes: [
      "Full deep clean of all rooms",
      "Inside all cabinets, closets, and drawers",
      "Appliance interiors (oven, refrigerator, dishwasher)",
      "Thorough vacuuming including corners and edges",
      "Window cleaning (interior)",
      "Final walk-through to make sure nothing is missed",
    ],
    whoItsFor:
      "Renters, landlords, and homeowners preparing for a move in or out.",
  },
  {
    id: "wellness",
    icon: Heart,
    title: "Custom Add-ons",
    positioning:
      "Extra care tailored to your household — pets, kids, or anything else that needs special attention.",
    includes: [
      "Pet hair and dander focused treatment",
      "Extra attention to high-touch surfaces",
      "Organizing and tidying common areas",
      "Laundry folding or linen changes",
      "Flexible scheduling for your routine",
    ],
    whoItsFor:
      "Families with pets, children, or anyone who wants a little extra beyond the standard clean.",
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
            Every service is personally handled by Precious — same person,
            same standard, same attention to detail every time.
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
            <User className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
              Why owner-operated matters
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you book with Precious Home Help, you get Precious &mdash;
              every time. No rotating staff, no wondering who&rsquo;s showing
              up. Just one person who knows your home and your preferences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Have specific products you prefer? A particular way you like
              things done? Just say so. I&rsquo;m flexible and I pay attention
              to the details that matter to you.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom spacer for mobile sticky CTA */}
      <div className="h-16 md:hidden" />
    </>
  );
}
