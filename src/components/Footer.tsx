import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/referral", label: "Referral Program" },
];

export function Footer() {
  return (
    <footer className="bg-background-alt border-t border-border">
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/images/site/logo.png"
                alt="Precious Home Help logo"
                width={144}
                height={144}
                className="h-16 w-16"
              />
              <h3 className="font-serif text-lg font-semibold text-foreground">
                Precious Home Help
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Personal, owner-operated house cleaning for Chicago&apos;s
              Hyde Park, Woodlawn, Bronzeville, and surrounding neighborhoods.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Service area & license */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Service Area
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Hyde Park &middot; Woodlawn &middot; Bronzeville &middot; and
              surrounding Chicago neighborhoods
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Precious Home Help is a licensed, home-based cleaning
              service serving the South Side of Chicago.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Chicago Business License #306549
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              <a
                href="tel:8722359880"
                className="hover:text-foreground transition-colors"
              >
                (872) 235-9880
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Precious Home Help. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
