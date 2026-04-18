# Precious Home Help — Release Notes

## v0.1.0 — 2026-04-18

### Phase 1: Scaffold

- Created Next.js 14 app with TypeScript, Tailwind CSS v4, and App Router
- Installed shadcn/ui components (Button, Input, Textarea, Select, Card, Dialog, Label)
- Installed project dependencies: resend, react-hook-form, zod, @hookform/resolvers, lucide-react, next-mdx-remote
- Configured fonts: Fraunces (serif display) + Inter (sans body) via next/font
- Set up eco/premium color palette (sage green, warm cream, clay accents)
- Built responsive Nav with mobile hamburger menu and sticky CTA
- Built Footer with service area, license info, and navigation
- Built sticky mobile CTA ("Text (872) 235-9880")
- Created all page routes: Home, Services, Pricing, About, Book, Contact, Referral, Blog
- Home page includes all 8 sections: Hero, Trust band, Positioning statement, Services grid, Why Precious, Testimonials, Service area, Closing CTA
- Services page with 4 tiers fully detailed + Product Philosophy section
- Pricing page with $35/hr display and market positioning
- About page with placeholder for Precious's bio (TODO)
- Contact page with call, text, and service area info
- Referral page with 3-step "Refer a Neighbor" flow
- Blog index and post placeholder pages (MDX rendering in Phase 4)
- SEO: sitemap.ts, robots.ts, JSON-LD helper, per-page metadata
- Added .env.local.example with Resend config
