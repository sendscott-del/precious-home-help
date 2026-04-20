import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Shield,
  ShieldCheck,
  UserCheck,
  Award,
  Sliders,
  SprayCan,
  User,
  Sparkles,
  Heart,
  Home,
  Truck,
} from "lucide-react";

const gallery = [
  {
    src: "/images/site/kitchen.webp",
    alt: "Spotless kitchen cleaned by Precious — gleaming counters and polished appliances",
    label: "Kitchen",
  },
  {
    src: "/images/site/dining-room.webp",
    alt: "Tidy, dusted dining room set for the family — cleaned by Precious",
    label: "Dining room",
  },
  {
    src: "/images/site/laundry.webp",
    alt: "Freshly organized laundry room cleaned by Precious",
    label: "Laundry",
  },
];

const services = [
  {
    icon: Sparkles,
    title: "Essential Clean (Recurring)",
    description:
      "Standard maintenance including dusting, vacuuming, mopping, and surface sanitization.",
    href: "/services#essential",
  },
  {
    icon: Home,
    title: "Deep Sanctuary Clean",
    description:
      "High-detail cleaning including baseboards, behind appliances, and inside cabinets.",
    href: "/services#deep",
  },
  {
    icon: Truck,
    title: "Eco-Move In/Out",
    description:
      "Specialized cleaning for property transitions, leaving the space spotless for whoever comes next.",
    href: "/services#move",
  },
  {
    icon: Heart,
    title: "Health & Wellness Add-ons",
    description:
      "Extra attention for homes with pets or children — tailored to your household\u2019s needs.",
    href: "/services#wellness",
  },
];

const whyPrecious = [
  {
    icon: Sliders,
    title: "Flexible to your needs.",
    description:
      "Every home is different. I adapt my approach to what your household actually needs.",
  },
  {
    icon: SprayCan,
    title: "Product flexibility.",
    description:
      "Prefer your own supplies? Great. I\u2019ll also tell you honestly if they aren\u2019t up to the job.",
  },
  {
    icon: User,
    title: "Just me, every time.",
    description:
      "The business is operated solely by the owner. You get the same person, the same standard, the same eye for detail every visit.",
  },
];

const testimonials = [
  {
    name: "Liesl",
    location: "Hyde Park",
    quote:
      "Precious is trustworthy, hardworking, and reliable. She makes our busy lives so much easier!",
  },
  {
    name: "Lillie",
    location: "Woodlawn",
    quote:
      "Precious is highly reliable, flexible, and kind, and was a huge help to us in managing the demanding logistics of our routine.",
  },
  {
    name: "Scott",
    location: "Hyde Park",
    quote:
      "Our house is immaculately clean. We love working with Precious.",
  },
  {
    name: "Miranda",
    location: "Hyde Park",
    quote:
      "Precious keeps our life on track. After a long day, it is such a relief to come home to a clean house.",
  },
  {
    name: "Angela",
    location: "Hyde Park",
    quote:
      "Precious has been with our family for over 3 years and has drastically improved the quality of our daily living. She is reliable, trustworthy, and incredibly helpful in keeping our home tidy and clean. We appreciate all that she has done for us and highly recommend her services to other families looking for frequent upkeep of their homes.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-foreground">
              Personal, thorough house cleaning for Chicago homes — by
              someone who actually cares.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              One person, one standard, every time — the kind of personal care
              a franchise can&apos;t offer. Serving Hyde Park, Woodlawn,
              Bronzeville, and nearby neighborhoods.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                render={<Link href="/book" />}
                size="lg"
                className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-lg px-8 text-base"
              >
                Request a Quote
              </Button>
              <Button
                render={<Link href="/pricing" />}
                variant="outline"
                size="lg"
                className="rounded-lg px-8 text-base border-border text-foreground hover:bg-background-alt"
              >
                How pricing works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust band */}
      <section className="bg-background-alt border-y border-border">
        <div className="mx-auto max-w-[1200px] px-6 py-5">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Licensed</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-primary" />
              <span>Background-checked</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              <span>100% Satisfaction Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning statement */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20 text-center">
          <p className="mx-auto max-w-2xl text-xl md:text-2xl font-serif leading-relaxed text-foreground">
            &ldquo;I&rsquo;m Precious. I clean Chicago homes the way I&rsquo;d
            clean my own&thinsp;&mdash;&thinsp;one home at a time, with the kind
            of care you just don&rsquo;t get from a franchise.&rdquo;
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Bukola Precious Agbenike, Owner
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-background-alt">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
            Cleaning services for every need
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-background rounded-xl p-6 border border-border shadow-[0_1px_3px_rgba(43,43,40,0.06),0_4px_12px_rgba(43,43,40,0.04)]"
              >
                <service.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="text-sm font-medium text-primary hover:text-primary-hover transition-colors"
                >
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Precious */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
            Why Precious?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {whyPrecious.map((item) => (
              <div key={item.title} className="text-center md:text-left">
                <item.icon className="w-8 h-8 text-primary mb-4 mx-auto md:mx-0" />
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery — Precious's actual work */}
      <section className="bg-background-alt border-y border-border">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-4">
            Homes Precious has cleaned
          </h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            Real rooms from real clients &mdash; the standard I bring to every
            visit.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((photo) => (
              <figure
                key={photo.src}
                className="relative overflow-hidden rounded-2xl border border-border bg-background aspect-[4/3]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <figcaption className="absolute bottom-3 left-3 bg-background/85 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-full border border-border">
                  {photo.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
            What clients say
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="bg-background-alt rounded-xl p-6 border border-border"
              >
                <p className="text-foreground leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-4 text-sm text-muted-foreground">
                  &mdash; {t.name}, {t.location}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="bg-background-alt border-t border-border">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Serving South Side Chicago
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Hyde Park &middot; Woodlawn &middot; Bronzeville &middot; and
            surrounding neighborhoods
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-background-alt">
        <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
          <div className="bg-accent rounded-2xl p-10 md:p-16 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-accent-foreground mb-4">
              Ready for a home that feels as clean as it looks?
            </h2>
            <p className="text-accent-foreground/90 mb-8 text-lg max-w-lg mx-auto">
              Get a personalized quote in minutes. No obligations, no pressure.
            </p>
            <Button
              render={<Link href="/book" />}
              size="lg"
              className="bg-background text-foreground hover:bg-background-alt rounded-lg px-8 text-base"
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
