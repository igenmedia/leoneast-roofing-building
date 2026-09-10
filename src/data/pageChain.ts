// Drives the "Next" link at the foot of every page so that a reader - and a
// crawler - can walk the whole site without going back to the navigation.
export const pageChain = [
  { slug: "/", label: "Roofers In Bromley" },
  { slug: "/roof-repairs", label: "Roof Repairs" },
  { slug: "/emergency-roof-repairs", label: "Emergency Roof Repairs" },
  { slug: "/storm-damage-repairs", label: "Storm Damage Repairs" },
  { slug: "/roof-leak-repairs", label: "Roof Leak Repairs" },
  { slug: "/new-roofs", label: "New Roofs & Re-Roofing" },
  { slug: "/flat-roofing", label: "Flat Roofing" },
  { slug: "/tiling-and-slating", label: "Tiling & Slating" },
  { slug: "/chimney-repairs", label: "Chimney Repairs" },
  { slug: "/guttering-fascias-and-soffits", label: "Guttering, Fascias & Soffits" },
  { slug: "/common-roof-problems", label: "Common Roof Problems" },
  { slug: "/roof-repair-cost", label: "Roof Repair Cost Guide" },
  { slug: "/petts-wood", label: "Roofers In Petts Wood" },
  { slug: "/chislehurst", label: "Roofers In Chislehurst" },
  { slug: "/orpington", label: "Roofers In Orpington" },
  { slug: "/st-mary-cray", label: "Roofers In St Mary Cray" },
  { slug: "/chelsfield", label: "Roofers In Chelsfield" },
  { slug: "/farnborough", label: "Roofers In Farnborough" },
  { slug: "/west-wickham", label: "Roofers In West Wickham" },
  { slug: "/beckenham", label: "Roofers In Beckenham" },
  { slug: "/biggin-hill", label: "Roofers In Biggin Hill" },
  { slug: "/sidcup", label: "Roofers In Sidcup" },
  { slug: "/swanley", label: "Roofers In Swanley" },
  { slug: "/blog", label: "Roofing Advice" },
  { slug: "/contact", label: "Contact Us" },
];

export function getNextPage(currentSlug: string) {
  const index = pageChain.findIndex((p) => p.slug === currentSlug);
  return pageChain[(index + 1) % pageChain.length];
}
