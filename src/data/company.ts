// Company details, in one place.
//
// STILL NEEDED FROM THE CLIENT (see README):
//   - an email address, which is what unlocks the enquiry form
//   - any social profiles
//   - real customer reviews
//
// Nothing here is invented. Where a value is missing the template checks for
// it and leaves the section out rather than filling the gap with something
// plausible.

const googleBusinessProfile = "https://share.google/6ILzSdbwW4NKJkGPa";

export const company = {
  name: "LeonEast Roofing & Building Limited",
  short: "LeonEast",

  domain: "leoneastroofing.co.uk",
  url: "https://www.leoneastroofing.co.uk",

  phone: "07746 517099",
  phoneLink: "tel:+447746517099",
  email: "",

  town: "Bromley",
  county: "Greater London",

  // The office the business works from. Used on the contact page and in the
  // LocalBusiness listing.
  office: {
    line1: "23 Kingfisher House",
    line2: "Elmfield Road",
    town: "Bromley",
    postcode: "BR1 1LT",
  },

  // The trading and paperwork address. Shown in the footer alongside the
  // office, and named on the legal pages. Not the business's location.
  tradingAddress: {
    line1: "70 Dulwich Business Park",
    line2: "Malham Road",
    town: "London",
    postcode: "SE23 1AG",
  },

  // Centroid of BR1 1LT, checked against postcodes.io.
  latitude: 51.402,
  longitude: 0.0183,

  hours: "7.30am to 6pm, Monday to Saturday",

  guaranteeYears: 10,

  // Companies House, confirmed by the client. The registered office
  // (132 Lewisham High Street, London SE13 6EE) is deliberately NOT here -
  // it is hardcoded in the privacy policy, so editing this file can never
  // silently rewrite a legal document.
  companyNumber: "16990741",

  // Google Business Profile share link, supplied by the client. It resolves
  // to the "LeonEast Roofing & Building" listing (kgmid /g/11zxp69jsv). The
  // listing is a service-area business, so the embed shades the area covered
  // rather than pinning a street address.
  googleBusinessProfile,
  gbpEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38287.47395239877!2d0.028896!3d51.391167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa18e4dbb2e1fa227%3A0x129b4764c4502804!2sLeonEast%20Roofing%20%26%20Building!5e0!3m2!1sen!2s!4v1791529605608!5m2!1sen!2s",

  social: [
    { name: "Google Business Profile", url: googleBusinessProfile },
  ] as { name: string; url: string }[],

  // Generated at web3forms.com once an email address exists. While it is
  // empty the enquiry form is replaced by a call panel, so no enquiry can be
  // silently thrown away.
  formKey: "",
};

export const services = [
  { name: "Roof Repairs", href: "/roof-repairs" },
  { name: "New Roofs", href: "/new-roofs" },
  { name: "Flat Roofing", href: "/flat-roofing" },
  { name: "Chimneys & Guttering", href: "/chimneys-and-guttering" },
];

export function photo(name: string): string {
  return `/images/${name}.webp`;
}
