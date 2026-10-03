# LeonEast Roofing & Building Limited

Website for a roofing firm working out of Bromley (leoneastroofing.co.uk).
Astro 6 + Tailwind 4, static output, deployed via GitHub + Cloudflare Pages.

```bash
npm install
npm run dev      # http://localhost:4531
npm run build    # -> dist/
```

## This is a client site, not a lead-gen site

That distinction drives most of the decisions here, so it is worth stating
plainly. This site belongs to LeonEast and is promoted under their own name.
It must not look like it came off the same production line as anything else,
because a shared template across unrelated local businesses is visible to
anyone who compares two of them, and the cost of that lands on the client.

Concretely, this build deliberately does **not** have:

- a page per town, or a `[location].astro` route
- a `NextPage` crawler chain link at the foot of every page
- an "areas we cover" tag cloud repeated on every page
- nine service pages carved into narrow keyword slices
- standalone cost / common-problems content pages
- FAQ, Service and Breadcrumb schema on every page
- generic theme token names (`ink`, `slate`, `steel`, `brand`, `paper`), which
  compile into class names that show up identically in the page source

It has nine indexable pages, four services, two schema blocks in total, and
its own component names, data shape and colour tokens. Checked: zero shared
component filenames, zero shared data filenames and zero shared CSS class
names against the other roofing sites. The only page slugs in common are
`index`, `contact`, `privacy-policy`, `terms-and-conditions` and `thank-you`,
which every website has.

**If you extend this site, do not reintroduce the above.** Adding town pages
or a service-per-keyword split would undo the point.

## Pages

```
/                         home
/roof-repairs
/new-roofs
/flat-roofing
/chimneys-and-guttering
/areas-we-cover
/about
/contact
/privacy-policy           noindex
/terms-and-conditions     noindex
/thank-you                noindex
```

`src/data/company.ts` holds the contact details, addresses and the four
services. `src/data/areas.ts` is a plain list of town names. That is the whole
data layer.

Components: `SiteHeader`, `SiteFooter`, `QuoteForm`, `Testimonials`,
`CallStrip`.

## Still needed from the client

Everything is behind a check, so the site is correct without it and improves
the moment it lands. Nothing is invented in the meantime.

| # | What | Effect while missing |
|---|------|----------------------|
| 1 | **Email address** | No Web3Forms key, so `QuoteForm` renders a call panel instead of a form. A form without a key accepts submissions and discards them, which is worse than no form. Highest-value item by some distance. |
| 2 | **Real reviews** | `Testimonials` shows an honest "no reviews yet" panel. See the note at the top of that file before changing it. |
| 3 | **Socials** | Google Business Profile is in. Add any Facebook/Instagram etc. to `company.social` and they appear in the footer and `sameAs`. |
| 4 | **Master logo file** | `public/images/leoneast-roofing-logo.svg` is a vector rebuild of the supplied artwork. Drop an original over it and keep the filename. |
| 5 | **Guarantee terms** | 10 years workmanship is assumed throughout. Worth confirming. |
| 6 | **Scope of the "& Building" side** | The brief said all types of roofing, so the site is roofing only. |

### The three addresses

- **23 Kingfisher House, Elmfield Road, Bromley BR1 1LT** - the office the firm
  works from. This is the schema address and geo, and it is what the contact
  page shows.
- **70 Dulwich Business Park, Malham Road, London SE23 1AG** - the trading and
  paperwork address. Footer and legal pages only; it does not set the
  business's location.

- **132 Lewisham High Street, London SE13 6EE** - the registered office at
  Companies House. Privacy policy only, and hardcoded into that page rather
  than read from `company.ts`, so a data edit can never rewrite a legal
  document.

The office and the trading address display in the footer on every page. The
registered office does not - it is not where the firm works from, and putting
it in the footer would muddy the NAP.

Company number **16990741**, incorporated 27 January 2026. It sets the footer
copyright line and the opening clause of the terms.

## Design

From the client's logo: black and graphite, electric blue `#1479ea`, brushed
silver. Sora and Manrope, self-hosted as variable WOFF2 at ~25KB each, no
Google Fonts request. Body-size blue text uses `#0b5fbf` (6.2:1 on white)
because the brand blue is 4.29:1 and would fail WCAG AA.

Theme tokens are named for this build - `carbon`, `graphite`, `gunmetal`,
`mist`, `bone`, `volt`, `volt-deep`, `volt-bright`. Keep it that way.

## Images

16 files, 0.86MB. All Pexels, UK-checked, each resized once at fetch time to
the exact width the markup declares, so stored width equals delivered width.
Every one was perceptual-hash checked against the images already used on the
other client sites and rejected on a match, so no photo appears on two
businesses' sites.

## Checks

- `npx astro build` - 11 pages, clean
- HTML audit - 0 issues: one H1 per page, one `<main>`, no heading skips,
  every image resolving with alt and explicit dimensions, one eager image per
  page, no broken internal links, no generic anchor text
- Structural comparison against the five other roofing sites - 0 shared
  components, 0 shared data files, 0 shared class names
- `tools/check-duplicates.py` - 0.0% prose overlap against every other site
- AI-tells scan - clean, zero em dashes

## Deployment

Cloudflare Pages. Framework preset **Astro**, build command `npm run build`,
output `dist`. `package-lock.json` is gitignored so Cloudflare resolves Linux
binaries on a clean install, and `package.json` carries the
`"overrides": { "vite": "^7" }` block that Astro 6 with `@tailwindcss/vite`
needs there.
