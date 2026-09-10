// Single source of truth for NAP, schema and site-wide figures.
//
// OUTSTANDING - client still to supply (see README.md for the full list):
//   - Companies House number and registered office address for LeonEast
//     Roofing & Building Limited. Until `companyNumber` is set the footer and
//     the privacy policy use neutral wording rather than printing an
//     unverified number, and the privacy policy names no registered office.
//   - An email address. `email` is empty until then, which switches the
//     footer, contact page and schema over to phone-only, and means the
//     Web3Forms key below is still a placeholder.
//   - Google Business Profile URL and any social profiles (see `socials`).
//   - Real customer reviews to replace the written-up ones in Reviews.astro.
//   - A trading address, if they ever want one published.
//
// DELIBERATELY NOT SET: a jobs-completed headline figure, a materials
// guarantee length, or any accreditation. None has been supplied, and
// invented numbers and fake trade-body badges are worse than none at all.
// StatsBar and Guarantee are both written to work without them.

export const business = {
  name: "LeonEast Roofing & Building Limited",
  shortName: "LeonEast",
  owners: "the LeonEast team",

  domain: "leoneastroofing.co.uk",
  url: "https://www.leoneastroofing.co.uk",

  // Supplied by client
  phone: "07746 517099",
  phoneHref: "tel:+447746517099",
  // TODO(client): no email supplied yet. Everything that renders an email
  // address checks this string first, so leaving it empty is safe.
  email: "",

  // Core service area
  location: "Orpington",
  region: "Greater London",
  country: "GB",
  serviceAreaLabel:
    "Covering Orpington and the BR postcodes around it - Petts Wood, Chislehurst, Bromley, the Crays, Chelsfield, Farnborough, West Wickham, Beckenham, Biggin Hill, and over the borough line into Sidcup and Swanley",

  // TODO(client): no trading address supplied. Everything address-shaped is
  // behind this flag, and the LocalBusiness schema falls back to an
  // areaServed-only listing, which is what Google expects from a business
  // that works out of vans rather than a shopfront.
  address: {
    street: "",
    locality: "Orpington",
    region: "Greater London",
    postcode: "",
  },

  // Centroid of BR6 0JA, Orpington ward, verified against postcodes.io.
  geo: {
    latitude: 51.3748,
    longitude: 0.0973,
  },
  serviceRadiusKm: 14,

  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "07:30",
    closes: "18:00",
  },

  workmanshipGuaranteeYears: 10,

  // TODO(client): company number and registered office from Companies House.
  // `hasCompanyDetails` in Layout.astro keys off companyNumber being non-empty.
  companyNumber: "",
  registeredOffice: "",

  services: [
    "Roof Repairs",
    "Emergency Roof Repairs",
    "Storm Damage Repairs",
    "Roof Leak Repairs",
    "New Roofs & Re-Roofing",
    "Flat Roofing",
    "Tiling & Slating",
    "Chimney Repairs",
    "Guttering, Fascias & Soffits",
  ],

  // Feeds `sameAs` in the RoofingContractor schema and the footer icon row so
  // the two can never drift apart. Store canonical profile URLs only - no
  // `?s=` share params, no `#` fragments.
  // STILL OUTSTANDING: everything. For a local roofing firm the Google
  // Business Profile is worth more than every social profile put together,
  // so it is the one to chase first.
  socials: [] as { name: string; url: string }[],

  // TODO(client): generate a real Web3Forms access key once an email address
  // exists - submit it at web3forms.com and confirm the verification email.
  // While this is empty ContactForm.astro renders a call-us panel instead of
  // a form that would silently throw submissions away.
  web3formsAccessKey: "",

  get sameAs(): string[] {
    return this.socials.map((s) => s.url);
  },
};

// Local image helper. Every image on this site lives in the repo at
// public/images/ as a pre-compressed WebP, served by Cloudflare Pages - no
// external image host, nothing re-billed monthly. The `w` argument is
// accepted for call-site compatibility but the files are already stored at
// the width they render at, so it is ignored.
export function img(name: string, _w = 900): string {
  return `/images/${name}.webp`;
}
