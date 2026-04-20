# Precious Home Help — Release Notes

## v0.1.0 — 2026-04-18

### Phase 1: Scaffold

- Created Next.js 14 app with TypeScript, Tailwind CSS v4, and App Router
- Installed shadcn/ui components (Button, Input, Textarea, Select, Card, Dialog, Label)
- Installed project dependencies: resend, react-hook-form, zod, @hookform/resolvers, lucide-react, next-mdx-remote
- Configured fonts: Fraunces (serif display) + Inter (sans body) via next/font
- Set up warm premium color palette (sage green, warm cream, clay accents)
- Built responsive Nav with mobile hamburger menu and sticky CTA
- Built Footer with service area, license info, and navigation
- Built sticky mobile CTA ("Text (872) 235-9880")
- Created all page routes: Home, Services, Pricing, About, Book, Contact, Referral, Blog
- Home page includes all 8 sections: Hero, Trust band, Positioning statement, Services grid, Why Precious, Testimonials, Service area, Closing CTA
- Services page with 4 tiers fully detailed + "Why owner-operated matters" section
- Pricing page with $25/hr display and market positioning
- About page with placeholder for Precious's bio (TODO)
- Contact page with call, text, and service area info
- Referral page with 3-step "Refer a Neighbor" flow
- Blog index and post placeholder pages (MDX rendering in Phase 4)
- SEO: sitemap.ts, robots.ts, JSON-LD helper, per-page metadata
- Added .env.local.example with Resend config

## v0.1.1 — 2026-04-18

### Messaging pivot: personal + owner-operated focus

- Removed all eco-friendly, non-toxic, HEPA, and plant-based messaging across the entire site
- Repositioned around personal service, flexibility, and owner-operated consistency
- Updated hero: "Personal, thorough house cleaning for Chicago homes — by someone who actually cares"
- Replaced "Non-toxic by default" value prop with "Flexible to your needs"
- Repositioned "Health & Wellness Add-ons" tier as "Custom Add-ons" (pet care, organizing, laundry, flexible scheduling)
- Changed "Product Philosophy" section to "Why owner-operated matters"
- Updated all page metadata, descriptions, and blog content to match new positioning
- Updated SEO config and site description

## v0.1.2 — 2026-04-18

### Google Business Profile trust signals

- Added home-based business statement to footer for GBP reinstatement compliance
- Footer now reads: "Precious Home Help is a licensed, home-based cleaning service serving the South Side of Chicago."
- Added Google Business Forum reinstatement post draft (google_forum_post.md)

## v0.2.0 — 2026-04-18

### Request a Quote form (Phase 3)

- Built full quote request form on the /book page with fields for name, email, phone, service type, bedrooms, bathrooms, and free-text message
- Form uses react-hook-form + zod v4 for client-side validation with inline error messages
- Created API route at /api/quote that sends quote details to Precious via Resend email
- Success state shows confirmation message with phone fallback
- Loading state shows spinner while submitting
- Server errors display user-friendly message with phone number fallback
- Requires RESEND_API_KEY, QUOTE_RECIPIENT_EMAIL, and QUOTE_FROM_EMAIL env vars in Vercel

## v0.3.1 — 2026-04-19

### About page cleanup

- Removed the placeholder italic note ("[This section will be updated with Precious's personal story in her own words.]") from the About page so the page reads cleanly until Precious supplies her full bio

## v0.3.0 — 2026-04-19

### Brand refresh: logo, real photos, and new hourly rate

- Dropped hourly rate from $35 to $25 across pricing page, services page, layout metadata, SEO config, and CLAUDE.md
- Repainted the palette around Precious's logo colors: primary is now logo green (#2E8B3E) and accent is logo orange (#E07B39), replacing the sage/clay scheme
- Added Precious's circular logo to the Nav (left of the wordmark) and to the Footer "About" block
- Replaced the About page photo placeholder with Precious's actual profile photo
- Added a new "Homes Precious has cleaned" gallery section on the home page featuring kitchen, dining room, and laundry photos from a real client home
- Reworked the closing CTA banner to use the accent orange so both brand colors are represented on the home page
- Updated the pricing page market-positioning copy to frame the new $25/hr rate as neighbor-friendly without cutting corners
- Copied all assets into /public/images/site/ (logo.png, precious.jpg, kitchen.webp, dining-room.webp, laundry.webp)
