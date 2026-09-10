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
  location: "Bromley",
  region: "Greater London",
  country: "GB",
  serviceAreaLabel:
    "Covering Bromley and the BR postcodes around it - Beckenham, Petts Wood, Chislehurst, West Wickham, Orpington, the Crays, Farnborough, Chelsfield, Biggin Hill, and over the borough line into Sidcup and Swanley",

  // Operational address - drives the contact page and the LocalBusiness
  // schema, because schema should say where the business actually is. The
  // Dulwich office is the trading/paperwork address; it still appears in the
  // footer and on the legal pages but does not set the business's location.
  address: {
    street: "23 Kingfisher House, Elmfield Road",
    locality: "Bromley",
    region: "Greater London",
    postcode: "BR1 1LT",
  },

  // Both client addresses, shown together at the foot of every page. The
  // first is the trading/paperwork address, the second is the Bromley office
  // the business works out of. Only the Bromley one goes into schema, so the
  // NAP stays single and consistent.
  addresses: [
    ["70 Dulwich Business Park", "Malham Road", "London", "SE23 1AG", "England"],
    ["23 Kingfisher House", "Elmfield Road", "Bromley", "BR1 1LT", "England"],
  ],

  // Centroid of BR1 1LT, verified against postcodes.io - the same place as
  // the address above, because schema `geo` and schema `address` have to
  // agree or the record contradicts itself. Where the firm works is carried
  // by `areaServed`, which lists Bromley and all eleven towns around it.
  geo: {
    latitude: 51.402,
    longitude: 0.0183,
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
