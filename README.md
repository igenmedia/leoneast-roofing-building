# LeonEast Roofing & Building Limited

SEO lead-generation site for a roofing contractor covering Orpington and the
surrounding BR postcodes (leoneastroofing.co.uk). Astro 6 + Tailwind 4, static
output, deployed via GitHub + Cloudflare Pages.

Built 10 September 2026.

```bash
npm install
npm run dev      # http://localhost:4531
npm run build    # -> dist/
```

## Still needed from the client

Everything below is behind a flag in `src/data/business.ts`, so the site is
complete and correct without it and improves the moment each item lands. None
of it is invented in the meantime.

| # | What | Why it matters | Where it goes |
|---|------|----------------|---------------|
| 1 | **Email address** | Without one there is no Web3Forms key, so `ContactForm.astro` renders a call-us panel instead of a form. This is the single highest-value missing item. | `business.email`, then generate a key at web3forms.com and set `business.web3formsAccessKey` |
| 2 | **Companies House number + registered office** | Footer currently says only "a limited company registered in England and Wales". Required properly in the privacy policy. | `business.companyNumber`, `business.registeredOffice`, plus hardcode the office into `privacy-policy.astro` |
| 3 | **Google Business Profile URL** | Worth more than every social profile combined for a local trade. Feeds `sameAs` in the RoofingContractor schema. | `business.socials` |
| 4 | **Real customer reviews** | See the note at the top of `Reviews.astro` before touching this. | `Reviews.astro` |
| 5 | **Master logo file** | `public/images/leoneast-roofing-logo.svg` is a vector rebuild of the supplied artwork. If an original AI/EPS/SVG exists, drop it in over that file and keep the filename. | `public/images/` |
| 6 | **Guarantee terms** | 10 years workmanship is currently assumed. Confirm, and confirm whether any materials guarantee should be named. | `business.workmanshipGuaranteeYears` |
| 7 | **Social profiles** | Footer icon row and `sameAs` both render from one array and hide themselves when it is empty. | `business.socials` |
| 8 | **Trading address**, if they ever want one published | Everything address-shaped is behind `hasAddress`. Schema currently emits an areaServed-only listing, which is right for a van-based business. | `business.address` |
| 9 | **Insurance certificate** | The site states public liability cover is in place. Worth having the certificate on file. | - |
| 10 | **Scope of the "& Building" side** | The brief said "all types of roofing", so the site is roofing-only. If they want extensions, brickwork or general building represented, that is a further set of service pages. | `src/data/services.ts` |

## Structure

30 pages:

- Homepage, 9 service pages, cost guide, common roof problems, contact,
  blog index + 2 posts, thank-you, privacy policy, terms
- 11 location pages via `[location].astro` + `locations.ts` / `locationPages.ts`

Content lives in `src/data/`, not in the page files:

| File | Holds |
|------|-------|
| `business.ts` | NAP, geo, guarantee, schema inputs, and every client-supplied flag |
| `locations.ts` | Per-town facts: council, postcode, planning constraint, housing stock, exposure |
| `locationPages.ts` | Per-town prose, attractions, FAQs, cost bands |
| `services.ts` | All nine service pages |
| `pageChain.ts` | The "Next" link at the foot of every page, so a crawler can walk the whole site |

## Design

Taken from the client's logo: black and graphite surfaces, electric blue
`#1479ea`, brushed silver. Deliberately the only dark-dominant build in the
portfolio - the other roofing sites are navy/orange, graphite/clay, pine/mint
and oxblood/gold. Fonts are Sora and Manrope, self-hosted as variable WOFF2
(~25KB each), no Google Fonts CDN request.

Body-size blue text uses `--color-brand-dark` (`#0b5fbf`, 6.2:1 on white)
rather than the brand blue, which lands just under WCAG AA at 4.29:1.

## The local angle

Every fact below was verified against a primary source, not assumed:

- **Planning.** The London Borough of Bromley has 47 conservation areas and 13
  Areas of Special Residential Character under Policy 44 of its Local Plan
  (Petts Wood, The Knoll, Park Langley, Bickley among them). Its March 2022
  Article 4 directions withdrew upward-extension permitted development rights
  across 16 areas in parts of eleven wards. A separate direction removes roof
  alteration rights in places.
- **Three authorities.** Almost everything in a BR postcode is Bromley, but
  Sidcup is Bexley and Swanley (BR8) is Sevenoaks District Council in Kent.
  Biggin Hill is TN16 and feels entirely Kentish but is Bromley. The location
  pages lead on this because getting it wrong reads as an out-of-town firm.
- **Climate.** Bromley averages ~729mm of rain a year against a UK figure
  nearer 1,150mm, sheltered by the North Downs. The site's argument is that
  dry does not mean kind: faults stay hidden for years, then all announce
  themselves in one storm.
- **Storms.** The Great Storm of 16 October 1987 gusted to ~130mph with west
  Kent and Sevenoaks among the worst hit; Storm Eunice repeated it in
  February 2022.
- **Geology.** Chalk dip slope of the North Downs at Orpington and south,
  capped with clay-with-flints, carrying solution features around Orpington
  and Biggin Hill. London Clay north and west towards Beckenham, which shrinks
  and swells seasonally - the reason Beckenham generates the chimney work.
- **Housing.** Interwar boom peaking in the 1920s-30s after the 1904 railway
  improvements (Crofton, Poverest, Goddington, Ramsden); the 1930s Petts Wood
  garden suburb by Basil Scruby and Leonard Culliford, with hung tiles and
  half-timbered gables; postwar concrete-tiled estates through the Cray valley
  and Swanley; handmade Kentish peg tiles in the villages at Chelsfield, Downe
  and Cudham.
- **Elevation.** Orpington ~50m, Biggin Hill ~180m on the ridge. Drives the
  mechanical-fixing argument on the high-ground pages.

## Images

116 WebP in `public/images/`, all Pexels, all UK-checked. Each is resized once
at fetch time to the exact width the markup declares - stored width equals
delivered width, so nothing is stored larger than it is served. Hero under
100KB, section under 80KB, card under 50KB; 6.5MB total.

Every image was perceptual-hash checked against all 7,033 images already used
across the other client sites in this project and rejected on a match, per the
cross-site footprint rule. Fetch script:
`scratchpad/fetch_images.py` (session-scoped - recreate from the pattern in
the shared CLAUDE.md if it is needed again).

## Checks run before commit

- `npx astro build` - 30 pages, clean
- `tools/check-duplicates.py` vs every other site in the project - **0.0%**
  worst overlap. The single 8-word match is an FAQ question phrasing
  ("Do I need planning permission to re-roof my house?") against Mansfield.
- HTML audit - 0 issues across 30 pages: one H1 each, every non-homepage H1
  wrapped in `<a href="/">`, one `<main>`, no heading-level skips, every image
  has alt + explicit width/height, one eager image per page, no generic or
  bare-URL anchor text, every `target="_blank"` has `rel="noopener"`, no
  broken internal links, no missing image files
- 132 JSON-LD blocks, 0 parse errors (WebSite, RoofingContractor, FAQPage,
  BreadcrumbList, Service, Article)
- No preloaded image that the page does not render
- `humanize-writing` pass - see below

## Humanize pass

House style is deliberately unlike the other roofing sites: warm, second
person, explanatory, longer sentences, calm rather than clipped. Scan result
across all copy: zero em dashes, zero emoji, zero Tier 1 AI vocabulary after
edits, three Tier 2 hits of which two were false positives ("upstands as",
"compelling grounds" - the latter is UK GDPR Article 21 wording and stays).

Two changes applied: "a seamless resin and glass laminate" -> "one continuous
resin and glass laminate"; "on the same journey" -> "running the same clock".

Sentence rhythm in the largest prose file: mean 31.9 words, stdev 16.0 - high
variance, not metronomic.

## Deployment

Cloudflare Pages. Framework preset **Astro**, build command `npm run build`,
output directory `dist`. `package-lock.json` is gitignored so Cloudflare
resolves Linux binaries on a clean install, and `package.json` carries the
`"overrides": { "vite": "^7" }` block the Astro 6 + `@tailwindcss/vite`
combination needs there.
