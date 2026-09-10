// Service-area dictionary. One entry per town with a page at /{slug} - the
// prose for those pages lives in locationPages.ts, keyed by the same slug, so
// the council and planning facts stay in one place and cannot drift.
//
// Three planning authorities meet on this patch and the boundary is not where
// people assume. Almost everything in a BR postcode is the London Borough of
// Bromley, but Sidcup answers to Bexley and Swanley - a BR8 postcode - is not
// in London at all: it is Sevenoaks District Council in Kent. Getting that
// wrong on a planning answer is the fastest way to look like an out-of-town
// firm.
//
// The Bromley facts below are verified against the council's own pages, not
// guessed:
//   - 47 conservation areas across the borough.
//   - 13 Areas of Special Residential Character (Policy 44 of the Bromley
//     Local Plan) - Petts Wood, The Knoll, Park Langley and Bickley among
//     them. This is a Bromley-specific designation and separate from
//     conservation area status.
//   - Article 4 directions withdrawing permitted development rights for
//     upward extensions across 16 areas, in parts of the Bickley, Bromley
//     Common and Keston, Bromley Town, Chelsfield and Pratts Bottom,
//     Chislehurst, Clock House, Copers Cope, Hayes and Coney Hall, Kelsey
//     and Eden Park, Petts Wood and Knoll, and Shortlands wards. A separate
//     Article 4 removes roof alteration rights in places.
//
// The geology is the other thing that shapes this file, and Bromley sits
// almost exactly on the join. South and east - Orpington, Farnborough,
// Chelsfield, Biggin Hill - is the chalk dip slope of the North Downs,
// capped in places with clay-with-flints and carrying solution features,
// natural voids that cause very localised settlement. North and west -
// Beckenham, Clock House, the Penge edge - is London Clay, which shrinks
// through a dry summer and swells again over winter, opening joints at
// chimney stacks and pulling flashings away from brickwork. Which side of
// town a house sits on changes what fails on it.

export interface Town {
  name: string;
  slug: string;
  postcode: string;
  council: string;
  councilUrl: string;
  /** A real planning or heritage constraint worth naming on the page. */
  planningNote: string;
  /** Honest description of the housing stock and what it is roofed in. */
  stock: string;
  /** Real roads, estates or neighbourhoods that can be referenced in copy. */
  hoods: string[];
  /** Why roofs there need attention. Ground truth, not invention. */
  exposure: string;
  driveTime: string;
}

const BROMLEY = "London Borough of Bromley";
const BROMLEY_URL = "https://www.bromley.gov.uk/PermittedDevelopment";
const BEXLEY = "London Borough of Bexley";
const BEXLEY_URL = "https://www.bexley.gov.uk/services/planning-and-building-control";
const SEVENOAKS = "Sevenoaks District Council";
const SEVENOAKS_URL = "https://www.sevenoaks.gov.uk/planning";

export const locations: Town[] = [
  {
    name: "Petts Wood",
    slug: "petts-wood",
    postcode: "BR5",
    council: BROMLEY,
    councilUrl: BROMLEY_URL,
    planningNote:
      "One of the most tightly held streetscapes in the borough. Petts Wood and The Knoll are both Areas of Special Residential Character under Policy 44 of the Bromley Local Plan, and the Petts Wood and Knoll ward is one of the areas where the council's Article 4 direction has removed the right to extend upwards without permission. A roof that changes the outline of the house is a planning conversation here, not a weekend job.",
    stock:
      "A 1930s garden suburb built as a single idea rather than a patchwork. Basil Scruby's development, much of it drawn by Leonard Culliford, gave the estate half-timbered gables, hung clay tiles down the upper walls, leaded lights and steep pitches - and gave every roofer since a puzzle, because those hung tiles are a wall covering that behaves like a roof.",
    hoods: ["The Knoll", "Woodhurst Avenue", "Birchwood Road", "Chatsworth Avenue"],
    exposure:
      "Hung tiles and deep gables are the weak points. Tile hanging relies on battens and nails buried inside the elevation, so when they finally give up there is nothing to see from the ground until a whole panel slips at once. The estate was built in one push in the thirties, so the fixings are all reaching the same age at the same time.",
    driveTime: "about 10 minutes",
  },
  {
    name: "Chislehurst",
    slug: "chislehurst",
    postcode: "BR7",
    council: BROMLEY,
    councilUrl: BROMLEY_URL,
    planningNote:
      "Chislehurst holds several of Bromley's 47 conservation areas, and the Chislehurst ward is covered in part by the Article 4 direction on upward extensions. On the protected streets the council expects a repair to put back what was there - the same tile, the same slate, the same ridge profile - and a change of material is an application rather than a decision you get to make on the scaffold.",
    stock:
      "Big Victorian and Edwardian villas around the commons, a scatter of genuinely old cottages near the church and the Tiger's Head, and interwar detached houses filling the roads between. Natural slate on the tall Victorian roofs, plain clay tiles on much of the rest, and a lot of ornamental ridge and finial work that most firms would rather remove than match.",
    hoods: ["Chislehurst Common", "Royal Parade", "Camden Park Road", "Bickley border"],
    exposure:
      "Height and tree cover. These are steep three-storey roofs under mature oak and beech, which means gutters that silt up every autumn, valleys that hold leaf litter through the winter, and slate that has been fixed with the same nails since the 1880s. Access is half the job and pricing it honestly is the other half.",
    driveTime: "about 10 minutes",
  },
  {
    name: "Orpington",
    slug: "orpington",
    postcode: "BR5 & BR6",
    council: BROMLEY,
    councilUrl: BROMLEY_URL,
    planningNote:
      "The town itself carries less designation than its neighbours - the great interwar estates at Crofton, Poverest and Goddington sit outside both the conservation areas and the Article 4 zones, so most work here needs no consent at all. That changes at the edges: the old village core at Farnborough, the church end of St Mary Cray, and anything out towards Chelsfield, where the council's Article 4 direction on upward extensions does apply.",
    stock:
      "A Kentish village that the railway turned into a commuter town. Building peaked hard through the 1920s and 30s after the station improvements of 1904, which is why Crofton, Poverest, Goddington and Ramsden run to street after street of bay-fronted semis with hipped clay tile roofs. Postwar estates fill the Cray valley to the north, and there are older properties scattered along the original high street.",
    hoods: ["Crofton", "Poverest", "Goddington", "Ramsden"],
    exposure:
      "Uniformity is the story. Thousands of roofs went up within a few years of each other, with the same mortar-bedded hips and ridges and the same nailing pattern, and ninety years on they are all reaching the same point together. Hip mortar is far and away the most common thing we are called out to in the BR6 postcode.",
    driveTime: "about 15 minutes",
  },
  {
    name: "St Mary Cray",
    slug: "st-mary-cray",
    postcode: "BR5",
    council: BROMLEY,
    councilUrl: BROMLEY_URL,
    planningNote:
      "The old high street and the church end have conservation cover, and there are listed buildings along the river. The postwar estates that make up most of the area have no such constraint, which means repairs there are practical questions - matching a discontinued concrete tile, or working out whether one more patch is worth it - rather than planning ones.",
    stock:
      "An old paper-milling village on the River Cray that was rebuilt around its industry, then rebuilt again after the war. Some genuinely old cottages near the church, then wide runs of council-built housing from the fifties and sixties roofed in the concrete interlocking tiles of the period, plus light-industrial flat roofs along the valley floor.",
    hoods: ["High Street", "Poverest", "Ramsden Estate", "Derry Downs"],
    exposure:
      "Streets that were built together are failing together. The concrete tiles laid across the Cray estates in the fifties and sixties are past sixty years now, and concrete tiles do not fail politely - they delaminate, shed their surface, and get heavy with water. When one house on a road needs work, the neighbours usually do too.",
    driveTime: "about 15 minutes",
  },
  {
    name: "Chelsfield",
    slug: "chelsfield",
    postcode: "BR6",
    council: BROMLEY,
    councilUrl: BROMLEY_URL,
    planningNote:
      "Chelsfield and Pratts Bottom is one of the wards where Bromley's Article 4 direction has removed upward-extension rights, and the old village around the church is conservation area. Chelsfield Park, the interwar private estate on the other side of the railway, carries its own covenants on top of the council's rules - which catch people out more often than the planning ones do.",
    stock:
      "Two Chelsfields. The village proper is genuine Kentish - old cottages and farm buildings, some still under handmade clay peg tiles, on the edge of the Green Belt. Chelsfield Park is a leafy 1930s estate of large detached houses on generous plots, and the newer streets by the station are postwar.",
    hoods: ["Chelsfield Village", "Chelsfield Park", "Well Hill", "Pratts Bottom"],
    exposure:
      "This is where our patch stops being London and starts being the North Downs. The ground is higher, the tree cover heavier and the wind considerably less polite than it is in the town. Peg-tiled village roofs need someone who has handled peg tiles before, and the big Chelsfield Park roofs need proper access before anyone can say what is wrong with them.",
    driveTime: "about 18 minutes",
  },
  {
    name: "Farnborough",
    slug: "farnborough",
    postcode: "BR6",
    council: BROMLEY,
    councilUrl: BROMLEY_URL,
    planningNote:
      "The old High Street is a conservation area and holds several listed buildings, so anything visible from the street there is expected to go back the way it came. The Crofton and Locksbottom sides are unconstrained, and that is where most of the borough's Article 4 talk stops being relevant.",
    stock:
      "A Kentish village high street that London grew up to and then around. Old tiled and slated cottages along the High Street, the great 1930s expansion across Crofton with its bay windows, tiled porches and hipped roofs, and modern housing filling in towards Locksbottom and the hospital.",
    hoods: ["Farnborough High Street", "Crofton", "Locksbottom", "Green Street Green"],
    exposure:
      "Crofton is the story here. Thousands of houses went up in the same decade with the same hipped clay-tile roofs, the same mortar bedding on the hips and ridges, and the same nails. Ninety years on, hip mortar is the single most common thing we are called out to in this postcode - it cracks, it lets go, and it takes a tile with it.",
    driveTime: "about 12 minutes",
  },
  {
    name: "West Wickham",
    slug: "west-wickham",
    postcode: "BR4",
    council: BROMLEY,
    councilUrl: BROMLEY_URL,
    planningNote:
      "Hayes and Coney Hall is one of the wards covered in part by Bromley's Article 4 direction on upward extensions, and there is conservation area cover around the older core near the church. Most of the interwar streets sit outside both, so ordinary repair work needs no permission - but it is worth checking the council's Article 4 map before anyone plans a dormer.",
    stock:
      "Almost entirely interwar and postwar suburbia, and unusually consistent for it: broad semis and detached houses from the 1930s expansion along the Croydon Road and Coney Hall, with hipped and gabled clay tile roofs, plus a scatter of older buildings around the parish church.",
    hoods: ["Coney Hall", "Wickham Court", "Layhams Road", "Corkscrew Hill"],
    exposure:
      "The land climbs steadily towards Coney Hall and the Kent border, and the top of that rise catches weather that the sheltered streets below never feel. Roofs up there lose ridge tiles in gales that the rest of the borough sleeps through, and the long southern-facing slopes bake hard in a dry summer, which is what finally kills tired felt underlay.",
    driveTime: "about 12 minutes",
  },
  {
    name: "Beckenham",
    slug: "beckenham",
    postcode: "BR3",
    council: BROMLEY,
    councilUrl: BROMLEY_URL,
    planningNote:
      "Beckenham carries more designation than most of the borough. Park Langley is an Area of Special Residential Character under Policy 44, there is conservation cover in several places around the town, and the Copers Cope, Clock House and Kelsey and Eden Park wards are all named in the Article 4 direction on upward extensions.",
    stock:
      "Grand Victorian and Edwardian villas on the roads out of the town centre, the planned Edwardian and interwar streets of Park Langley and Eden Park, long runs of 1930s semis, and a substantial stock of converted houses and mansion blocks - which means a lot of flat-roofed rear additions and a lot of shared roofs.",
    hoods: ["Park Langley", "Eden Park", "Clock House", "Kelsey Park"],
    exposure:
      "This is the London Clay end of our patch, not the chalk, and the difference shows up in the roof line. Clay shrinks in a dry summer and swells again in winter, and over decades that movement opens joints at chimney stacks, cracks flaunching and pulls flashings away from brickwork. Beckenham gets more chimney work out of us than anywhere else we cover.",
    driveTime: "about 8 minutes",
  },
  {
    name: "Biggin Hill",
    slug: "biggin-hill",
    postcode: "TN16",
    council: BROMLEY,
    councilUrl: BROMLEY_URL,
    planningNote:
      "A TN postcode and a Kent feel, but firmly the London Borough of Bromley for planning - which surprises people, and occasionally means a homeowner has spent a week reading the wrong council's guidance. Much of the surrounding land is Green Belt, so anything that adds volume is scrutinised, though like-for-like roof repair is not.",
    stock:
      "A ridge-top settlement that grew from smallholdings and plotlands into a proper town, so the housing is unusually mixed: interwar bungalows and chalets, postwar and sixties estates, individually built detached houses on big plots, and a fair number of buildings connected with the airfield.",
    hoods: ["Main Road", "Leaves Green", "Downe", "Cudham"],
    exposure:
      "The highest ground we cover, at around 180 metres on the North Downs ridge, and it is a different climate from Orpington seven miles down the hill. Wind is the constant - exposed ridges, no shelter, and gusts that lift ridge tiles and strip felt off flat roofs while the rest of the borough records a breezy afternoon. Roofs up here need mechanically fixed ridges, not mortar and hope.",
    driveTime: "about 20 minutes",
  },
  {
    name: "Sidcup",
    slug: "sidcup",
    postcode: "DA14 & DA15",
    council: BEXLEY,
    councilUrl: BEXLEY_URL,
    planningNote:
      "Sidcup is Bexley, not Bromley, and Bexley's designations and Article 4 directions are its own - Bromley's upward-extension direction does not apply here, and the conservation areas are listed by a different authority. Worth saying plainly, because the postcode boundary and the borough boundary do not line up and plenty of Sidcup homeowners have been sent to the wrong planning portal.",
    stock:
      "One of the purest stretches of interwar suburbia in south east London. Ribbon after ribbon of 1930s semis went up along the Sidcup bypass and the roads off it, nearly all with hipped clay-tile roofs and bay windows, with postwar infill, some sixties flats, and the older village core around the High Street.",
    hoods: ["Sidcup High Street", "Albany Park", "Lamorbey", "Blackfen"],
    exposure:
      "Mile after mile of houses built in the same few years to the same detail, which makes the failures wonderfully predictable: mortar-bedded hips letting go, original sand-faced clay tiles delaminating at the nose, and cast-iron gutters that were replaced with cheap uPVC in the eighties and are now sagging between brackets.",
    driveTime: "about 18 minutes",
  },
  {
    name: "Swanley",
    slug: "swanley",
    postcode: "BR8",
    council: SEVENOAKS,
    councilUrl: SEVENOAKS_URL,
    planningNote:
      "A BR postcode that is not in London. Swanley is Sevenoaks District Council in Kent, which means different planning policies, a different conservation area list and no Bromley Article 4 direction. It also means a genuine Green Belt boundary on three sides, which constrains anything that changes a building's volume far more than it constrains a repair.",
    stock:
      "A railway town that expanded hard in the postwar decades. Substantial estates of fifties and sixties housing under concrete interlocking tiles, interwar and older properties around Swanley Village and Hextable, light industrial and commercial flat roofs near the station and the bypass, and newer development on the edges.",
    hoods: ["Swanley Village", "Hextable", "Crockenhill", "White Oak"],
    exposure:
      "Concrete tile country, and the tiles are all hitting the same age. A sixty-year-old concrete interlocking tile has usually lost its surface coating, gone porous, and put on real weight - which is a problem for the original softwood battens underneath it, most of which were never treated. On a Swanley re-roof the battens are the job as often as the tiles are.",
    driveTime: "about 20 minutes",
  },
];
