@AGENTS.md

# Precious Home Help — current state

> Read before touching. Update the moment an infra fact changes. Append to docs/SESSIONS.md each session. Lane: Client (friend's business).

## What this is

Personal, owner-operated house cleaning **marketing site** for Bukola Precious Agbenike in Chicago. Static marketing pages + direct contact CTAs (text + email — the quote form was replaced 2026-05-16 after a silent-success bug). Blog section removed. Testimonials on the home page (Hannah, Alyssa, Molly). v0.5.1.

### Business Info
- Owner: Bukola Precious Agbenike
- Phone: (872) 235-9880
- License: Chicago #306549
- Rate: $25/hour flat
- Service area: Hyde Park, Woodlawn, Bronzeville, surrounding Chicago neighborhoods

### Service Tiers
1. Essential Clean (Recurring)
2. Deep Sanctuary Clean
3. Eco-Move In/Out
4. Health & Wellness Add-ons

## Infrastructure

- Next.js (App Router) + TypeScript, Tailwind CSS v4 + shadcn/ui (Base UI primitives)
- Fonts: Fraunces (serif display) + Inter (sans body)
- No database, no auth — pure marketing site
- Hosting: Vercel. GitHub: `sendscott-del/precious-home-help`
- JSON-LD structured data wired up (was dormant, fixed 2026-05-17)

## Architecture snapshot

- `src/` layout; docs: `RELEASE_NOTES.md`, `USER_GUIDE.md`
- Contact = direct `sms:`/`mailto:` CTAs, NOT a form (form removed deliberately — don't reinstate without asking)
- Untracked local material (Google Business Profile appeal docs, `website pics/`, `.claude/`) lives in the working tree — leave uncommitted

## Rules for this repo

1. **Solo operator voice only** — no "our team" / "our cleaners" / "we'll send someone".
2. **Auto-update `RELEASE_NOTES.md` and `USER_GUIDE.md`** after every change.
3. TypeScript strict mode — no `any` unless justified.
4. Mobile-first responsive — 320px+ is first-class.
5. Accessibility — all images need alt, form inputs need labels, WCAG AA contrast.
6. Push after changes — Scott tests via Vercel preview deploys.
7. Client lane — the owner's business info above is the source of truth; confirm with Scott before changing rates, phone, or service copy.
8. Session docs: append a dated entry to `docs/SESSIONS.md` each session.

## Color Palette (from Precious's logo)

- Background: #FAF7F2 (warm off-white)
- Background-alt: #F2EDE3 (deeper cream)
- Foreground: #2B2B28 (charcoal)
- Primary: #2E8B3E (logo green — roof/house)
- Primary-hover: #1F6B2E (deeper green)
- Accent: #E07B39 (logo orange — hand/type)
- Accent-hover: #C96424 (deeper orange)
- Border: #E8E2D5 (warm stone)

## Gotchas

- The old quote form had a **silent-success bug** (submitted but did nothing visible) — that's why it's direct CTAs now.
- Base UI a11y warnings have bitten before (fixed 2026-05-17); check console after touching interactive components.
- There's an ongoing Google Business Profile reinstatement effort (untracked `GBP_Reinstatement_Plan.pdf`, `Google Appeal/`) — site changes may need to align with what was told to Google.
