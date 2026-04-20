"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between h-20 md:h-24">
        <Link
          href="/"
          className="flex items-center gap-3 font-serif text-xl font-semibold text-foreground tracking-tight"
        >
          <Image
            src="/images/site/logo.png"
            alt="Precious Home Help logo"
            width={144}
            height={144}
            priority
            className="h-14 w-14 md:h-16 md:w-16"
          />
          <span className="hidden sm:inline">Precious Home Help</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-250"
            >
              {link.label}
            </Link>
          ))}
          <Button render={<Link href="/book" />} className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-lg px-5">
            Request a Quote
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 pb-6">
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button render={<Link href="/book" onClick={() => setMobileOpen(false)} />} className="w-full bg-primary hover:bg-primary-hover text-primary-foreground rounded-lg mt-2">
              Request a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
