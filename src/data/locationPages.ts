// Page content for the /{town} location pages. One entry per town, keyed by
// the same slug as src/data/locations.ts - LocationPage.astro joins the two so
// that council and planning facts live once, in locations.ts, and the prose
// lives here.
//
// RULE ZERO applies to every line. Nothing here is shared with any other site
// in the project, and nothing repeats sentences from this site's own homepage
// or service pages either. Each town leads on whatever genuinely dominates
// its roofs rather than on a template with the name swapped:
//   Petts Wood      - a 1930s garden suburb and its hung tiles
//   Chislehurst     - height, heritage and heavy tree cover
//   Orpington       - a whole town roofed in one decade, all failing in step
//   St Mary Cray    - postwar estate roofs all ageing in step
//   Chelsfield      - two villages, peg tiles and private estate covenants
//   Farnborough     - the Crofton hip-mortar belt
//   West Wickham    - the climb towards the Kent border and what wind does
//   Beckenham       - London Clay, seasonal movement and chimneys
//   Biggin Hill     - 180 metres up on the ridge, and wind as the constant
//   Sidcup          - Bexley, not Bromley, and mile after mile of 1930s hips
//   Swanley         - Kent, not London, and concrete tiles on untreated batten
//
// Attraction facts are limited to well-established claims - Chislehurst
// Caves, the William Willett memorial, Down House at Downe, the RAF chapel at
// Biggin Hill, Lullingstone Roman Villa, the Beckenham bandstand. Attraction
// images are honest stock scenes and the alt text describes what the image
// actually shows rather than pretending to be the named place.

export interface LocationAttraction {
  name: string;
  text: string;
  publicId: string;
  alt: string;
  mapLink: string;
}

export interface LocationPageData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h2: string;
  h3: string;
  intro: string;
  heroPublicId: string;
  heroAlt: string;
  about: { p1: string; p2: string; publicId: string; alt: string };
  /** Four services this town calls on most, with town-specific one-liners. */
  featured: { name: string; href: string; text: string }[];
  benefitsHeading: string;
  benefitsIntro: string;
  /** Exactly five - the grid is five across on desktop. */
  benefits: { title: string; text: string }[];
  insight: string;
  attractions: LocationAttraction[];
  mapQuery: string;
  costText: string;
  faqs: { question: string; answer: string }[];
  finalH: string;
  finalP: string;
}

const maps = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const locationPages: LocationPageData[] = [
  // ----------------------------------------------------------- PETTS WOOD --
  {
    slug: "petts-wood",
    name: "Petts Wood",
    metaTitle: "Roofers Petts Wood | LeonEast Roofing & Building",
    metaDescription:
      "Roofers in Petts Wood who understand a 1930s garden suburb - hung tiles, half-timbered gables and Article 4 rules. Free survey, fixed price, 10 year guarantee.",
    h2: "Does your roofer know what tile hanging actually is?",
    h3: "Repairs, re-covers and roofline work on Petts Wood's garden suburb housing, ten minutes from the Bromley office",
    intro:
      "Petts Wood is one of the most coherent pieces of 1930s planning in outer London, and it is also one of the trickier places to roof properly. The estate was built to a deliberate style - half-timbered gables, steep pitches, leaded lights and clay tiles hung down the upper walls - and that last feature catches out a great many roofers, because tile hanging is a wall covering that behaves like a roof and fails like one too. We work here constantly, we know what is behind those elevations, and we know which streets sit inside the Area of Special Residential Character where the council takes a close interest in anything that changes how a house looks.",
    heroPublicId: "petts-wood-tile-hung-gable-house",
    heroAlt: "Half-timbered gable and hung clay tiles on the upper storey of a 1930s house",
    about: {
      p1: "Petts Wood exists because of a railway station and one developer's ambition. Basil Scruby bought the land in the 1920s and, working largely with the architect Leonard Culliford, laid out a garden suburb rather than a speculative estate - curved tree-lined avenues, generous plots, and a consistent Arts and Crafts-influenced style that still reads as a single design nearly a century later. Almost all of it went up in the 1930s, which is why the housing is so uniform and why its roofs are all reaching the same milestones at the same time.",
      p2: "That consistency is exactly what the London Borough of Bromley protects here. Petts Wood and The Knoll are both Areas of Special Residential Character under Policy 44 of the Local Plan, and the Petts Wood and Knoll ward is among those where the council's Article 4 direction has removed the automatic right to extend upwards. In practice a straightforward repair is unaffected, but anything that alters the roof line - a dormer, a change of covering, a loft conversion that breaks the ridge - becomes a planning question rather than a builder's decision.",
      publicId: "tree-lined-suburban-avenue-1930s-houses",
      alt: "A tree-lined residential avenue of 1930s houses with tiled roofs and gables",
    },
    featured: [
      {
        name: "Tiling & Slating",
        href: "/tiling-and-slating",
        text: "Hung tiles on the gables and elevations, plain clay tiles on the slopes, and matching the estate's original patterns rather than fitting whatever is available.",
      },
      {
        name: "Roof Leak Repairs",
        href: "/roof-leak-repairs",
        text: "The junctions between hung tiling, timber framing and the roof slope are where Petts Wood leaks start, and they hide the water's route beautifully.",
      },
      {
        name: "Guttering, Fascias & Soffits",
        href: "/guttering-fascias-and-soffits",
        text: "Mature street trees on every avenue mean gutters that fill by November and fascias that pay for it a few winters later.",
      },
      {
        name: "New Roofs & Re-Roofing",
        href: "/new-roofs",
        text: "Ninety-year-old battens and original felt, on an estate where the replacement has to look right from the pavement as well as work.",
      },
    ],
    benefitsHeading: "Why Petts Wood houses need a particular kind of roofer",
    benefitsIntro:
      "This is not ordinary 1930s suburbia. The detailing that makes the estate attractive is also what makes it awkward, and the five points below are what we actually think about before quoting here.",
    benefits: [
      {
        title: "Tile hanging is its own skill",
        text: "It relies on battens and nails buried inside the elevation, so there is nothing to see from the ground until a whole panel lets go at once. It needs stripping back and refixing properly, not face-nailing.",
      },
      {
        title: "The estate was built in one go",
        text: "Which means the fixings across every street are the same age. When your neighbour loses a panel of hung tiles, it is a reasonable forecast rather than a coincidence.",
      },
      {
        title: "Matching matters more here",
        text: "On a road where every house shares a design, a wrong tile is obvious from the pavement forever. We source to match and show you the sample on the roof before ordering.",
      },
      {
        title: "We know the Article 4 position",
        text: "Petts Wood and Knoll is one of the wards where upward extension rights have been withdrawn. We will tell you on the survey whether your job touches that, and when it does not.",
      },
      {
        title: "Ten minutes away",
        text: "Our office is in Bromley, so Petts Wood is a short run rather than a scheduling problem. It shows most in emergencies, and in how easily we can come back if something wants a second look.",
      },
    ],
    insight:
      "Nearly every Petts Wood job that turns out bigger than expected starts the same way - a homeowner points at the roof, and the actual problem is in the hung tiling on the gable beside it.",
    attractions: [
      {
        name: "Petts Wood & Hawkwood",
        text: "Several hundred acres of woodland and open farmland in the care of the National Trust, running right up to the edge of the housing. It is the reason the estate feels rural despite being twenty minutes from central London by train.",
        publicId: "english-woodland-path-trees-sunlight",
        alt: "A footpath running through mature English woodland in dappled sunlight",
        mapLink: maps("Petts Wood and Hawkwood National Trust"),
      },
      {
        name: "The William Willett Memorial",
        text: "A sundial in the woods commemorating the builder who campaigned for daylight saving time. He lived nearby, and the memorial is permanently set to British Summer Time, which is a joke that has been running since 1927.",
        publicId: "stone-sundial-memorial-woodland-clearing",
        alt: "A stone sundial memorial standing in a woodland clearing",
        mapLink: maps("William Willett Memorial Petts Wood"),
      },
      {
        name: "Jubilee Country Park",
        text: "Sixty-odd acres of meadow, hedgerow and woodland between Petts Wood and Bickley, managed for wildlife rather than mown into a park. Good for a proper walk without leaving the BR postcodes.",
        publicId: "wildflower-meadow-countryside-park-summer",
        alt: "A wildflower meadow with hedgerows and trees on a summer afternoon",
        mapLink: maps("Jubilee Country Park Petts Wood"),
      },
    ],
    mapQuery: "Petts Wood, Orpington, London",
    costText:
      "Refixing a slipped panel of hung tiles on a gable typically runs £450 to £1,200 depending on the area and the access. Ordinary tile repairs on the main slopes are £180 to £450. Rebedding hips and ridges on one of the larger estate houses is £600 to £1,400. A full re-roof here is generally £9,000 to £16,000 - above the borough average, because these roofs have more gables, more valleys and more hung tiling than a standard semi, and because matching the estate's materials costs more than not bothering.",
    faqs: [
      {
        question: "Do I need planning permission for roof work in Petts Wood?",
        answer:
          "For a like-for-like repair, no. For anything that changes how the house looks, quite possibly. Petts Wood and The Knoll are both Areas of Special Residential Character under Policy 44 of the Bromley Local Plan, and the Petts Wood and Knoll ward is one of the areas covered by the council's Article 4 direction withdrawing permitted development rights for upward extensions. That means a dormer or a loft conversion that alters the roof line needs an application to the London Borough of Bromley rather than falling under permitted development. Replacing broken tiles with matching tiles does not.",
      },
      {
        question: "What is tile hanging and why does it keep failing?",
        answer:
          "It is a covering of clay tiles hung on battens down a wall rather than a roof, used across the Petts Wood estate on gables and upper storeys for its Arts and Crafts look. It fails because the battens and nails holding it are inside the elevation where nobody ever inspects them, so ninety years of weather works on them completely unseen. The first symptom is usually a panel of tiles slipping all at once, which is alarming but rarely dangerous if it is dealt with promptly.",
      },
      {
        question: "Can you match the original estate tiles?",
        answer:
          "In most cases yes. The estate used a fairly narrow range of clay tiles and reclaimed stock in those patterns is obtainable, though it sometimes takes a few days. Given how consistent these streets look, we would always rather wait for the right tile than fit a close approximation you will be looking at for the next fifty years.",
      },
      {
        question: "How quickly can you get to Petts Wood?",
        answer:
          "About ten minutes from our office in Bromley, so it is one of the quicker calls we make. Free surveys are usually within two to four working days, and if water is actively coming in we will treat it as an emergency and get there the same day where the weather allows.",
      },
    ],
    finalH: "Book a free roof survey in Petts Wood",
    finalP:
      "Half an hour, no charge, and you will know exactly what is happening on your roof and in your gables - photographed, explained in plain English, and priced only if something genuinely needs doing.",
  },

  // --------------------------------------------------------- CHISLEHURST --
  {
    slug: "chislehurst",
    name: "Chislehurst",
    metaTitle: "Roofers Chislehurst | LeonEast Roofing & Building",
    metaDescription:
      "Roofers in Chislehurst for Victorian slate, ornamental ridgework and conservation area repairs. Proper access, matching materials, 10 year written guarantee.",
    h2: "Is your roof taller and older than most roofers are set up for?",
    h3: "Slate, ornamental ridgework and conservation repairs on Chislehurst's Victorian and Edwardian houses",
    intro:
      "Chislehurst has some of the finest housing in the borough and some of the most demanding roofs. The big Victorian and Edwardian villas around the commons are three storeys with steep pitches, natural slate, ornamental ridge tiles and finials, and mature trees dropping onto them from every direction. None of that is difficult exactly, but all of it takes proper access, materials that match, and a willingness to repair detail rather than strip it off. Several of Bromley's 47 conservation areas are here, so on many streets the council expects exactly that.",
    heroPublicId: "chislehurst-victorian-slate-roof-villa",
    heroAlt: "Steeply pitched slate roof with decorative ridge tiles on a large Victorian house",
    about: {
      p1: "Chislehurst kept its identity in a way most of south east London did not. The commons were never built on, the old village around the church and the Tiger's Head survives, and the Victorian expansion added large detached villas around the open ground rather than filling it in with terraces. The result is a town that still reads as Kent rather than London, with a housing stock skewed heavily towards the substantial and the old.",
      p2: "For a roofer that means three things. The roofs are tall, which changes how the work is accessed and priced. They are largely natural slate, which is a different discipline from tiling. And a good many of them stand in conservation areas, where the London Borough of Bromley expects repairs to put back the same material and the same profile - so a decision to swap ornamental ridge tiles for plain ones is not a decision that is yours to make. The Chislehurst ward is also partly covered by the council's Article 4 direction on upward extensions.",
      publicId: "large-victorian-house-mature-trees-garden",
      alt: "A large Victorian detached house surrounded by mature trees",
    },
    featured: [
      {
        name: "Tiling & Slating",
        href: "/tiling-and-slating",
        text: "Nail fatigue is what ends a Welsh slate roof, not the slate. Strip, sort the sound slates and re-lay on new fixings is usually the answer here.",
      },
      {
        name: "Chimney Repairs",
        href: "/chimney-repairs",
        text: "Tall stacks on tall houses, most of them still on their original mortar, and several of them still connected to working fireplaces.",
      },
      {
        name: "Guttering, Fascias & Soffits",
        href: "/guttering-fascias-and-soffits",
        text: "Original cast iron on many of these houses, worth repairing and repainting rather than swapping for plastic that looks wrong on the street.",
      },
      {
        name: "Roof Leak Repairs",
        href: "/roof-leak-repairs",
        text: "Valleys packed with leaf litter, slipped slates and century-old flashings - three ways in, all of them quiet until they are not.",
      },
    ],
    benefitsHeading: "What Chislehurst roofs need that ordinary ones do not",
    benefitsIntro:
      "Height, age, heritage and trees, all at once. These are the five things that genuinely change how we approach a job in this part of the borough.",
    benefits: [
      {
        title: "Access priced honestly",
        text: "A three-storey slate roof cannot be worked from a ladder. Scaffolding is a real cost and it will be its own line on your quote rather than being folded quietly into the total.",
      },
      {
        title: "Slating done as slating",
        text: "Slate is holed and hung, not nailed like a tile, and head lap is set for the pitch and the exposure. It is a separate trade and it shows immediately when someone treats it as tiling.",
      },
      {
        title: "Detail repaired, not removed",
        text: "Crested ridges, finials and decorative bargeboards get quoted away by firms who would rather not deal with them. On a conservation street they are often precisely what is protected.",
      },
      {
        title: "Gutters as a maintenance item",
        text: "Mature oak and beech overhanging a valley will fill it in one autumn. Regular clearing here is not fussiness, it is the cheapest roofing you will ever pay for.",
      },
      {
        title: "We check the conservation position first",
        text: "Several of Bromley's 47 conservation areas fall in Chislehurst. We will tell you whether your street is in one before you commit to anything that changes the roof's appearance.",
      },
    ],
    insight:
      "On a Chislehurst slate roof the slates themselves are usually the healthiest thing up there. It is almost always the nails that have given up, and that changes the whole shape of the quote.",
    attractions: [
      {
        name: "Chislehurst Caves",
        text: "Twenty-odd miles of hand-dug chalk and flint tunnels beneath the town, used over the centuries for mining and, during the Second World War, as an air raid shelter for thousands of people. Guided tours by lamplight run most days.",
        publicId: "underground-chalk-tunnel-cave-passage",
        alt: "A lamp-lit underground tunnel cut through pale chalk rock",
        mapLink: maps("Chislehurst Caves"),
      },
      {
        name: "Scadbury Park",
        text: "A nature reserve of ancient woodland and meadow on the site of a medieval moated manor, whose ruins are still visible. Three hundred acres of it, and remarkably quiet for somewhere inside the M25.",
        publicId: "ancient-woodland-nature-reserve-footpath",
        alt: "A path through ancient woodland with old oak trees and undergrowth",
        mapLink: maps("Scadbury Park Nature Reserve Chislehurst"),
      },
      {
        name: "Chislehurst Commons",
        text: "Around 180 acres of common land right through the middle of the town, protected since the nineteenth century and still grazed in living memory. It is the single biggest reason Chislehurst looks the way it does.",
        publicId: "open-common-grassland-oak-trees-england",
        alt: "Open common land with grass, gorse and scattered oak trees",
        mapLink: maps("Chislehurst Common"),
      },
    ],
    mapQuery: "Chislehurst, Kent",
    costText:
      "Refixing slipped slates is £200 to £450 where a tower will reach and more where it will not. Stripping and re-laying a single slope in its own reclaimed slate runs £2,500 to £5,500. Renewing a chimney flashing in lead on one of the taller houses is £600 to £1,200, largely because of access. Full re-slating a substantial Chislehurst house is generally £14,000 to £28,000 including scaffolding - a wide range, because these roofs vary enormously in size, pitch and complexity.",
    faqs: [
      {
        question: "Is my Chislehurst street in a conservation area?",
        answer:
          "It may well be. The London Borough of Bromley has 47 conservation areas and several of them are in and around Chislehurst, particularly near the commons and the older village core. The council publishes the boundaries, and it is worth checking before planning any work that changes the roof's appearance. A like-for-like repair - the same slate, the same profile, the same ridge - is maintenance and needs no consent even inside a conservation area.",
      },
      {
        question: "My slates keep slipping. Does that mean a whole new roof?",
        answer:
          "Usually not a new roof, but often more than another patch. Welsh slate lasts well over a century; the nails holding it do not. When slates start slipping in different places across the same slope, the fixings have reached the end as a batch. The economical answer is generally to strip that slope, keep the sound slates - normally eighty per cent or more of them - and re-lay them on new battens with new fixings. That costs a fraction of buying all new slate.",
      },
      {
        question: "Can you match ornamental ridge tiles and finials?",
        answer:
          "Usually, through salvage. Victorian crested ridge tiles and terracotta finials come up regularly in reclamation yards, and some patterns are still made new. It takes longer than fitting a plain ridge and costs more, and on a conservation street it is generally what the council expects. We will show you what we have found before anything is ordered.",
      },
      {
        question: "Why do you always mention the gutters here?",
        answer:
          "Because Chislehurst's tree cover is the biggest single cause of avoidable roof damage in the area. Oak and beech overhanging a valley or a gutter will fill it in one season, the water then backs up under the slates or over the fascia, and after a few winters you are paying for timber repairs rather than a gutter clear. Once a year in late autumn is the sensible rhythm and it costs very little.",
      },
    ],
    finalH: "Book a free roof survey in Chislehurst",
    finalP:
      "We will get properly up there, photograph the slate, the ridges, the flashings and the valleys, and tell you honestly whether you are looking at a repair, a re-lay or nothing at all this year.",
  },

  // ----------------------------------------------------------- ORPINGTON --
  {
    slug: "orpington",
    name: "Orpington",
    metaTitle: "Roofers Orpington | LeonEast Roofing & Building",
    metaDescription:
      "Roofers in Orpington covering Crofton, Poverest and Goddington. Hip mortar, 1930s clay tile repairs and full re-roofs. Free survey and a 10 year guarantee.",
    h2: "Is your roof the same age as every other roof on the road?",
    h3: "Roofing across Orpington, Crofton, Poverest, Goddington and Ramsden - fifteen minutes from the Bromley office",
    intro:
      "Orpington is the most uniform patch we work on, and that is genuinely good news if you own a roof here. The town went up in one enormous push through the 1920s and 30s, street after street of bay-fronted semis built to the same details by builders working to the same conventions. Ninety years on they are producing the same faults in the same order, which means we can usually tell you what we expect to find before the ladder comes off the van. It also means that when your neighbour has scaffolding up, it is worth a look at your own.",
    heroPublicId: "orpington-rooftops-interwar-semis",
    heroAlt: "Rooftops of interwar semi-detached houses across a residential street in Orpington",
    about: {
      p1:
        "Orpington was a Kentish village with a name recorded as far back as 1038, and it stayed one for the best part of nine hundred years. The railway arrived in 1868 and the station improvements of 1904 changed everything - within two decades the farmland west and south of the high street had been laid out as Crofton, Poverest and Goddington, and the population went up several times over. The River Cray still rises in Priory Gardens, which is about the only bit of the old village that has not been built around.",
      p2:
        "For a roofer, the interesting thing is that all of that happened in one short window. The estates share a covering, a pitch, a hip detail and a nailing pattern, so the failures arrive in waves rather than at random. The postwar decades added the Cray valley estates to the north under concrete interlocking tiles, and there are older properties scattered along the original high street - but the overwhelming majority of the roofs we look at in BR5 and BR6 are hipped, clay-tiled and about ninety years old.",
      publicId: "orpington-victorian-terraces-older-housing",
      alt: "Older brick terraced houses with slate roofs and chimney stacks",
    },
    featured: [
      {
        name: "Roof Repairs",
        href: "/roof-repairs",
        text: "Rebedding and repointing hips and ridges, which is more than a third of everything we do in this postcode.",
      },
      {
        name: "Tiling & Slating",
        href: "/tiling-and-slating",
        text: "Matching 1930s machine-made clay tiles, which the estates used in a small enough range that reclaimed stock is easy to find.",
      },
      {
        name: "New Roofs & Re-Roofing",
        href: "/new-roofs",
        text: "When the hips have been rebedded twice and the original felt has torn, the arithmetic stops favouring another repair.",
      },
      {
        name: "Guttering, Fascias & Soffits",
        href: "/guttering-fascias-and-soffits",
        text: "Original timber roofline on a great many of these houses, and a lot of it capped over rather than replaced in the nineties.",
      },
    ],
    benefitsHeading: "What a town built in one decade means for your roof",
    benefitsIntro:
      "Uniformity cuts both ways. It makes the problems predictable and the materials easy to match, and it means they all arrive at once. Five things worth knowing.",
    benefits: [
      {
        title: "We know what is up there already",
        text: "Give us the road and we can usually name the covering, the hip detail and the likely fault before we arrive. The survey then confirms rather than discovers, which shows up as a quote you can rely on.",
      },
      {
        title: "Hip mortar, caught early",
        text: "The dominant fault on hipped interwar roofs and much cheaper to deal with before tiles start moving. A single hip is a few hundred pounds; a hip that has shed three tiles is not.",
      },
      {
        title: "Matching is straightforward here",
        text: "Thousands of houses share a narrow range of clay tiles, so reclaimed stock is plentiful. A repair on an Orpington semi should be invisible from the pavement, and ours are.",
      },
      {
        title: "Less planning to worry about than the neighbours",
        text: "Crofton, Poverest and Goddington sit outside the conservation areas and outside the Article 4 zones. Most work here needs no consent at all, and we will say so rather than making it sound complicated.",
      },
      {
        title: "Fifteen minutes from the office",
        text: "Straight down the A21 or through Bickley. Close enough that an emergency is a same-day call and coming back to check something is never a problem worth charging for.",
      },
    ],
    insight:
      "Give us an Orpington road name and we can usually name the fault before we see the house. That is not intuition - it is one builder solving the same problem the same way five hundred times in a row.",
    attractions: [
      {
        name: "Priory Gardens",
        text: "Formal gardens and ponds beside the medieval Priory, right off the high street. The River Cray rises in the grounds, which makes this the reason there was a village here in the first place.",
        publicId: "town-park-lake-trees-benches-england",
        alt: "A pond fringed with trees and grass in a formal public garden",
        mapLink: maps("Priory Gardens Orpington"),
      },
      {
        name: "Crofton Roman Villa",
        text: "The remains of a Roman villa preserved under a cover building next to the station, with around ten rooms and the underfloor heating still visible. Occupied for roughly three hundred years, and found in the 1920s during the building boom.",
        publicId: "roman-villa-excavated-remains-foundations",
        alt: "Excavated Roman foundations and floor remains preserved at an archaeological site",
        mapLink: maps("Crofton Roman Villa Orpington"),
      },
      {
        name: "Goddington Park",
        text: "A large stretch of open parkland and playing fields on the eastern edge of the town, with the old Goddington House at one end. Good for a long walk without getting in the car.",
        publicId: "open-parkland-playing-fields-path-trees",
        alt: "Open parkland with playing fields, a path and mature trees along the boundary",
        mapLink: maps("Goddington Park Orpington"),
      },
    ],
    mapQuery: "Orpington, London",
    costText:
      "Rebedding a single hip is £350 to £650, and doing all four hips plus the ridge on a standard Orpington semi runs £900 to £1,600 - comfortably the job we quote most often here. Converting to a mechanically fixed dry system is £1,300 to £2,400 and ends the mortar cycle for good. Individual tile repairs are £180 to £420. A full re-roof with new treated battens, breathable membrane and matched tiles is £7,500 to £13,000 including scaffolding.",
    faqs: [
      {
        question: "Do I need planning permission for roof work in Orpington?",
        answer:
          "For a like-for-like repair, no, and that covers nearly everything we do here. Orpington is also less encumbered than much of the borough - Crofton, Poverest and Goddington sit outside the London Borough of Bromley's conservation areas and outside the Article 4 zones that removed upward-extension rights elsewhere. It tightens at the edges, around the old village core at Farnborough, the church end of St Mary Cray, and out towards Chelsfield. If your plans change the roof line rather than repair it, check the council's Article 4 map first.",
      },
      {
        question: "Why does the mortar on my hips keep cracking?",
        answer:
          "Because mortar is rigid and a roof is not. Timber moves with temperature and humidity, tiles expand and contract, and decades of that movement works on a brittle material until it gives. Mortar realistically lasts forty to sixty years and the Orpington estates were built in the 1930s, so every mortar-bedded hip in the town is overdue rather than unlucky. That is why you see so much scaffolding on these roads at once.",
      },
      {
        question: "Can you match the tiles on a Crofton semi?",
        answer:
          "Almost always. The estates used a small number of machine-made clay tile patterns and reclaimed stock is widely available through salvage. On a street where every house shares a roof, we would rather take an extra few days sourcing the right tile than fit something approximate that you will notice every time you park outside.",
      },
      {
        question: "How quickly can you get to Orpington from Bromley?",
        answer:
          "About fifteen minutes, straight down the A21 or through Bickley. Free surveys are normally within two to four working days. If water is actively coming in, say so when you ring and we will treat it as an emergency instead - that usually means a temporary make-safe the same day where the weather allows.",
      },
    ],
    finalH: "Book a free roof survey in Orpington",
    finalP:
      "If your hips have started shedding mortar, or a neighbour's scaffolding has made you wonder about your own, the survey costs nothing and takes half an hour. Photographs, a written verdict, and a fixed price only if something genuinely needs doing.",
  },
  // -------------------------------------------------------- ST MARY CRAY --
  {
    slug: "st-mary-cray",
    name: "St Mary Cray",
    metaTitle: "Roofers St Mary Cray | LeonEast Roofing & Building",
    metaDescription:
      "Roofers in St Mary Cray and the Crays. Postwar concrete tile roofs, batten failure and honest repair-or-replace advice. Free survey and a 10 year guarantee.",
    h2: "Are your neighbours all having their roofs done at once?",
    h3: "Concrete tile repairs, re-roofing and roofline work across St Mary Cray, St Paul's Cray and the Ramsden estate",
    intro:
      "The Cray valley was rebuilt on a large scale after the war, and the roofs that went on then are all reaching the end at roughly the same time. If it feels as though half your street has had scaffolding up in the last three years, that is not coincidence and it is not a sales pitch - it is what happens when several hundred houses are roofed in the same few years with the same materials. The useful consequence is that we already know what is likely to be under your tiles. The useful question is whether yours needs doing yet, and we are happy to tell you when it does not.",
    heroPublicId: "st-mary-cray-concrete-tile-roofs-estate",
    heroAlt: "Rows of postwar houses with concrete interlocking tile roofs",
    about: {
      p1: "St Mary Cray is a great deal older than it looks. It was a working village on the River Cray long before Orpington amounted to much, with paper mills along the water and a high street that was the commercial centre of the whole area. The church and a scatter of genuinely old buildings survive, and the older core has conservation cover, but the industry has gone and most of what stands now went up in the decades after the war.",
      p2: "That postwar rebuilding is the roofing story here. The estates through St Mary Cray, St Paul's Cray and Ramsden were roofed in concrete interlocking tiles, which were cheap, quick and perfectly reasonable at the time. Sixty-odd years on, those tiles have generally lost their surface coating, gone porous and put on weight - and underneath them the battens were frequently untreated softwood, which is a combination that eventually forces the issue.",
      publicId: "postwar-council-estate-houses-tiled-roofs",
      alt: "Postwar estate housing with uniform tiled roofs along a residential street",
    },
    featured: [
      {
        name: "New Roofs & Re-Roofing",
        href: "/new-roofs",
        text: "The main event around here. Full strip, new treated battens, breathable membrane and a covering chosen to match what the road already looks like.",
      },
      {
        name: "Roof Repairs",
        href: "/roof-repairs",
        text: "Plenty of Cray roofs have good years left in them. We will say so and do the repair rather than talk you into a re-roof you do not need yet.",
      },
      {
        name: "Guttering, Fascias & Soffits",
        href: "/guttering-fascias-and-soffits",
        text: "Original timber roofline on a lot of these houses, and where it has been capped over rather than replaced there is usually a surprise behind it.",
      },
      {
        name: "Flat Roofing",
        href: "/flat-roofing",
        text: "Estate garages, porches and the light industrial units along the valley floor, most of them still on ageing felt.",
      },
    ],
    benefitsHeading: "What sixty-year-old concrete tiles actually mean for you",
    benefitsIntro:
      "This is the most straightforward roofing situation on our patch and also the one most open to being oversold. Here is how we handle it.",
    benefits: [
      {
        title: "We will tell you if it can wait",
        text: "A tired concrete roof is not an emergency. If yours has five good years left, that is what the survey will say, and you can budget for the work rather than being rushed into it.",
      },
      {
        title: "The battens are the real question",
        text: "Untreated softwood battens are common on postwar estates and they are why a re-roof here is a strip rather than an overlay. We check them and photograph them.",
      },
      {
        title: "Matching the road, not just the house",
        text: "On a street of identical houses a mismatched covering is very visible. We will show you what the neighbours have used and what is available that matches.",
      },
      {
        title: "No overlaying, ever",
        text: "Laying new tiles on top of old is quicker and cheaper and it buries every existing problem while adding load the structure was never designed for. We do not offer it.",
      },
      {
        title: "Fifteen minutes from the office",
        text: "The Crays are effectively next door to us. That means fast surveys, fast emergency response, and no travel loading buried in the price.",
      },
    ],
    insight:
      "When one house on a Cray estate road needs re-roofing, we usually end up quoting three more on the same street within the year. Nobody planned it that way - they were all just built in the same summer.",
    attractions: [
      {
        name: "Hoblingwell Wood",
        text: "A large area of woodland and open recreation ground on the eastern edge, with sports pitches, paths and enough tree cover to forget the A224 is nearby.",
        publicId: "woodland-recreation-ground-path-green-space",
        alt: "A path leading into woodland beside an open recreation ground",
        mapLink: maps("Hoblingwell Wood Recreation Ground Orpington"),
      },
      {
        name: "St Mary the Virgin Church",
        text: "The building the village is named for, parts of it medieval, standing beside the river at the old end of the high street. A reminder that the Crays were here centuries before the estates were.",
        publicId: "medieval-english-parish-church-flint-tower",
        alt: "A medieval English parish church with a flint tower and churchyard",
        mapLink: maps("St Mary the Virgin Church St Mary Cray"),
      },
      {
        name: "Poverest Park",
        text: "A neighbourhood park with playing fields, a play area and a good stretch of open grass, tucked between the estates and the railway. Unfussy and well used.",
        publicId: "neighbourhood-park-grass-play-area-trees",
        alt: "A local park with open grass, mature trees and a childrens play area",
        mapLink: maps("Poverest Park Orpington"),
      },
    ],
    mapQuery: "St Mary Cray, Orpington, London",
    costText:
      "Replacing broken concrete tiles is £180 to £400, though on a covering that has started delaminating generally it is money better saved. Rebedding a ridge run is £350 to £900. Full roofline replacement is £1,400 to £2,800 on a typical estate house. A full re-roof with new treated battens, breathable membrane and new tiles runs £6,500 to £11,000 here, which is at the lower end of the borough range because these roofs are mostly simple gabled shapes with few valleys or dormers.",
    faqs: [
      {
        question: "How long do concrete roof tiles last?",
        answer:
          "Forty to sixty years in practice. The tile has a surface coating that eventually erodes, after which it becomes porous, absorbs water, gains weight and starts breaking up at the nose. Most of the Cray estate roofs were laid in the fifties and sixties, which puts them right at the end of that window now. That is why so many are being done at once, and it is not a coincidence anyone is manufacturing.",
      },
      {
        question: "Can I just have the broken tiles replaced?",
        answer:
          "If the covering as a whole is still sound, absolutely, and we would recommend it. If the tiles are flaking and crumbling across the whole roof, replacing individual ones is spending money on a covering that will produce another three next winter. We will photograph a sample area so you can see for yourself which situation you are in, and we are perfectly happy to be the ones telling you it can wait.",
      },
      {
        question: "Why do the battens matter so much?",
        answer:
          "Because they are what everything else is nailed to. Postwar estate roofs were frequently battened with untreated softwood, which after sixty years may be split, soft, or simply unable to hold a nail. New tiles fixed to failing battens is a job that has to be done twice. It is also why we strip a roof rather than overlaying it - you cannot inspect a batten you have covered up.",
      },
      {
        question: "Do you offer any discount if several neighbours go together?",
        answer:
          "Yes, and on these streets it comes up regularly. The saving is genuine rather than a gimmick - scaffolding, deliveries and disposal all cost less per house when the houses are adjacent, and we pass that on. Talk to us as a group and we will price it as a group.",
      },
    ],
    finalH: "Book a free roof survey in St Mary Cray",
    finalP:
      "We are fifteen minutes up the road, the survey costs nothing, and if the honest answer is that your roof has a few more years in it, that is the answer you will get in writing.",
  },

  // ---------------------------------------------------------- CHELSFIELD --
  {
    slug: "chelsfield",
    name: "Chelsfield",
    metaTitle: "Roofers Chelsfield | LeonEast Roofing & Building",
    metaDescription:
      "Roofers in Chelsfield and Chelsfield Park - handmade peg tiles, large 1930s estate houses and Article 4 rules. Free survey, matched materials, 10 year guarantee.",
    h2: "Village peg tiles or a large estate roof - which Chelsfield are you?",
    h3: "Roofing for Chelsfield village, Chelsfield Park and the lanes out towards Pratts Bottom and Well Hill",
    intro:
      "There are two Chelsfields and they need quite different roofers. The village proper, on the far side of the railway, is genuinely old Kent - cottages and farm buildings on the edge of the Green Belt, some still under handmade clay peg tiles that were hung by hand two centuries ago. Chelsfield Park, on the other side, is a leafy 1930s private estate of large detached houses on generous plots, with big complicated roofs and its own set of covenants on top of the council's rules. We work in both, and we are straight about the fact that they are not the same job.",
    heroPublicId: "chelsfield-kentish-peg-tile-cottage-roof",
    heroAlt: "Old handmade clay peg tiles on the steep roof of a rural Kentish cottage",
    about: {
      p1: "Chelsfield was a Kentish farming parish long before it was anything to do with London, and the village around St Martin of Tours still looks the part - a church with medieval fabric, old cottages, and open country immediately beyond. The railway arrived in the 1860s and the station, confusingly, ended up nearly a mile from the village it was named after, which is how the second Chelsfield came to exist.",
      p2: "Chelsfield Park was laid out between the wars as a private estate of substantial detached houses on wooded plots, and it still runs on its own covenants as well as the council's planning rules - which catch homeowners out rather more often than the planning ones do. On the council side, Chelsfield and Pratts Bottom is one of the wards where Bromley's Article 4 direction has withdrawn permitted development rights for upward extensions, and the old village core is a conservation area.",
      publicId: "large-detached-house-wooded-plot-estate",
      alt: "A large detached house with a complex tiled roof set among mature trees",
    },
    featured: [
      {
        name: "Tiling & Slating",
        href: "/tiling-and-slating",
        text: "Handmade peg tiles on the village properties, laid steep and hung the traditional way. Reclaimed pegs are obtainable but they take time to source.",
      },
      {
        name: "Roof Repairs",
        href: "/roof-repairs",
        text: "Large estate roofs with hips, valleys and dormers - more surface, more junctions, and more places for a fault to hide than a standard semi.",
      },
      {
        name: "New Roofs & Re-Roofing",
        href: "/new-roofs",
        text: "Interwar roofs on big plots, where the covering has to satisfy the estate covenants as well as you and the council.",
      },
      {
        name: "Storm Damage Repairs",
        href: "/storm-damage-repairs",
        text: "Higher, more exposed ground than the town, with heavy tree cover. This is where the wind and the branches do their work.",
      },
    ],
    benefitsHeading: "Two Chelsfields, two sets of problems",
    benefitsIntro:
      "The village and the park are three quarters of a mile apart and roofed in entirely different traditions. These five points cover both.",
    benefits: [
      {
        title: "Peg tiles handled as peg tiles",
        text: "Small, handmade, brittle and irregular, laid at a steep pitch on a traditional gauge. They are not interchangeable with modern plain tiles and not every firm around here will take them on.",
      },
      {
        title: "Complex roofs surveyed properly",
        text: "A Chelsfield Park roof can have four hips, three valleys and a dormer. That is not harder work exactly, but it is a great deal more to inspect, and a quick look from the drive will miss most of it.",
      },
      {
        title: "We read the covenants too",
        text: "The estate's private covenants can restrict materials and appearance independently of the council. Finding that out afterwards is expensive, so we ask about it at the survey.",
      },
      {
        title: "Exposure taken into account",
        text: "You are on the edge of the Downs here, with more wind and much more tree cover than the streets down in Bromley. Mechanically fixed ridges and clipped verges earn their keep on this ground.",
      },
      {
        title: "Article 4 checked before you plan anything",
        text: "Chelsfield and Pratts Bottom is one of the wards where upward extension rights have been removed. If your plans touch the roof line, that is worth knowing at the start.",
      },
    ],
    insight:
      "Sourcing reclaimed Kentish pegs for a Chelsfield cottage takes us longer than laying them. We would still rather wait the week than put modern plain tiles on a two hundred year old roof.",
    attractions: [
      {
        name: "St Martin of Tours Church",
        text: "The parish church at the heart of the old village, with fabric going back to the twelfth century and a churchyard that has been in use ever since. It is the clearest evidence that Chelsfield long predates the railway.",
        publicId: "old-village-church-yew-trees-churchyard",
        alt: "An old stone village church with yew trees in the churchyard",
        mapLink: maps("St Martin of Tours Church Chelsfield"),
      },
      {
        name: "The Cudham and Downe footpaths",
        text: "Chelsfield sits at the top of a network of Green Belt footpaths running south and west through some of the quietest countryside inside the M25, towards Cudham, Downe and the Darwin landscape.",
        publicId: "countryside-footpath-stile-fields-hedgerow",
        alt: "A footpath crossing farmland with a stile and hedgerows",
        mapLink: maps("Cudham Circular Walk Kent"),
      },
      {
        name: "Chelsfield Lakes",
        text: "A golf centre and driving range on the edge of the village with open views south towards the Downs, and a course that makes good use of the sloping ground.",
        publicId: "golf-course-fairway-trees-rolling-landscape",
        alt: "A golf course fairway with mature trees and rolling countryside beyond",
        mapLink: maps("Chelsfield Lakes Golf Centre"),
      },
    ],
    mapQuery: "Chelsfield, Orpington, Kent",
    costText:
      "Repairs on a standard tiled roof here are £200 to £500. Peg tile work costs more, both in sourcing and in labour - allow £400 to £1,100 for a patch repair on a village cottage, and expect a lead time on the tiles. Re-roofing a large Chelsfield Park house typically runs £12,000 to £24,000 depending on the number of hips, valleys and dormers, and re-covering a village cottage in reclaimed pegs is priced individually because no two of them are the same.",
    faqs: [
      {
        question: "Can you work on a listed building or in the conservation area?",
        answer:
          "Yes. The old village core is a conservation area and there are listed buildings within it, and both bring restrictions on what can be changed. Straightforward like-for-like repair is generally maintenance and needs no consent, but listed building consent is a separate regime from planning permission and applies to a great deal more than people expect. We will tell you what we think applies and recommend you confirm it with the London Borough of Bromley before work starts.",
      },
      {
        question: "What are Kentish peg tiles?",
        answer:
          "Small handmade clay tiles, traditionally hung on oak pegs pushed through holes at the head rather than nailed, and laid at a steep pitch with a tight gauge. They are the traditional roof covering of this part of Kent and you will still find them on the older properties around Chelsfield, Downe and Cudham. They are brittle, irregular and slow to work with, and the reclaimed stock costs considerably more than modern tiles - but nothing else looks right on a building that old.",
      },
      {
        question: "Do the Chelsfield Park covenants affect roofing work?",
        answer:
          "They can. Private estate covenants sit alongside the council's planning rules rather than instead of them, and they sometimes restrict materials, colours or alterations in ways the council would not. They are enforced by the estate rather than the local authority, so the council's permitted development guidance will not tell you about them. It is worth checking your deeds before committing to a change of covering, and we will raise it at the survey.",
      },
      {
        question: "Is Chelsfield more exposed to storm damage than Bromley?",
        answer:
          "Noticeably, yes. The ground climbs as you move south towards the Downs, the tree cover is much heavier, and there is far less shelter from surrounding buildings. We see more wind-lifted ridge tiles and more branch damage per house out here than in the town, which is why we generally recommend mechanically fixed ridge systems rather than relying on mortar.",
      },
    ],
    finalH: "Book a free roof survey in Chelsfield",
    finalP:
      "Village cottage or estate house, the survey is the same offer - we get properly up there, photograph everything, and give you a written verdict and a fixed price with no obligation attached.",
  },

  // --------------------------------------------------------- FARNBOROUGH --
  {
    slug: "farnborough",
    name: "Farnborough",
    metaTitle: "Roofers Farnborough Kent | LeonEast Roofing & Building",
    metaDescription:
      "Roofers in Farnborough, Crofton and Locksbottom. Hip and ridge mortar, 1930s clay tile repairs and full re-roofs. Free survey, fixed price, 10 year guarantee.",
    h2: "Has the mortar along your hips started letting go?",
    h3: "Roofing across Farnborough village, the Crofton estates and out towards Locksbottom and Green Street Green",
    intro:
      "If we had to name one repair that defines this postcode, it would be hip mortar. Crofton went up almost entirely in the 1930s, thousands of houses with hipped clay tile roofs finished the way everybody finished them then - hip and ridge tiles bedded in sand and cement. Mortar has a working life of perhaps forty to sixty years, and it has now had ninety. So it cracks, it lets go in sections, and the tile it was holding is one gust away from the garden. It is a straightforward job when caught early and an expensive one when it is not.",
    heroPublicId: "farnborough-crofton-hipped-tiled-roof",
    heroAlt: "A hipped clay tile roof with mortar-bedded hip tiles on a 1930s house",
    about: {
      p1: "Farnborough is a Kentish village that London reached and then went around. The High Street still has its old cottages, its pubs and its conservation area, and it looks very much like what it was - a stop on the road to Sevenoaks. Then the 1930s arrived and covered the fields at Crofton with bay-fronted semis, and the postwar decades filled in towards Locksbottom, where the hospital now sits.",
      p2: "That leaves a service area with a small, protected old core and a very large, very consistent interwar surround. The consistency is the useful part: those Crofton roofs were built within a few years of each other, to the same details, in the same materials, by builders working to the same conventions. Ninety years later they are producing the same faults on the same timetable, and we can generally tell a homeowner what we expect to find before we have got the ladder off the van.",
      publicId: "1930s-bay-fronted-semi-detached-houses",
      alt: "Bay-fronted 1930s semi-detached houses with hipped clay tile roofs",
    },
    featured: [
      {
        name: "Roof Repairs",
        href: "/roof-repairs",
        text: "Rebedding and repointing hips and ridges, which is far and away the most common job we do in this postcode.",
      },
      {
        name: "Tiling & Slating",
        href: "/tiling-and-slating",
        text: "Matching 1930s machine-made clay tiles across Crofton, and handmade pegs on the older High Street properties.",
      },
      {
        name: "Guttering, Fascias & Soffits",
        href: "/guttering-fascias-and-soffits",
        text: "Original timber roofline on many of the interwar houses, and a good deal of it capped over rather than replaced at some point in the nineties.",
      },
      {
        name: "New Roofs & Re-Roofing",
        href: "/new-roofs",
        text: "When the hips have been done twice and the felt has gone, the sums usually stop favouring another repair.",
      },
    ],
    benefitsHeading: "The Crofton hip-mortar belt, and how we deal with it",
    benefitsIntro:
      "Thousands of houses, one dominant fault, and a decision to make about how to fix it for good. These are the five things worth knowing.",
    benefits: [
      {
        title: "Caught early it is a small job",
        text: "Rebedding a hip while the tiles are all still there is straightforward. Waiting until three have come off adds sourcing, and waiting until water has got in adds a great deal more.",
      },
      {
        title: "Dry systems are an option worth hearing",
        text: "Mechanically fixed dry hip and ridge does not depend on mortar and does not fail the way mortar does. It costs more up front and it ends the cycle, and we will set out both sides.",
      },
      {
        title: "Mortar mixed properly when we do use it",
        text: "The right mix, the right bedding, and hips clipped as well as bedded where the exposure calls for it. A great deal of the mortar failure we see was poorly mixed to begin with.",
      },
      {
        title: "Matching tiles is easy here",
        text: "Crofton used a narrow range of machine-made clay tiles, and reclaimed stock is readily available. A repair on these roofs should be invisible from the street, and ours are.",
      },
      {
        title: "Twelve minutes from the office",
        text: "This is our closest patch after the Crays. Quick surveys, quick call-outs, and no travel cost buried in the quote.",
      },
    ],
    insight:
      "More than a third of the repairs we carry out in the Farnborough and Crofton postcode are hip or ridge mortar. It is the single most predictable roofing fault on our whole patch.",
    attractions: [
      {
        name: "High Elms Country Park",
        text: "Around 250 acres of woodland, meadow and formal garden on the site of a Victorian estate, with a nature centre and a golf course. The chalk grassland here is genuinely rich and it is managed for it.",
        publicId: "country-park-woodland-meadow-parkland-path",
        alt: "A path through parkland with woodland on one side and open meadow on the other",
        mapLink: maps("High Elms Country Park Farnborough Kent"),
      },
      {
        name: "Down House, Downe",
        text: "Charles Darwin's home for forty years, where he wrote On the Origin of Species, now looked after by English Heritage. The house, the study and the sand walk he paced daily are all open, and it is barely two miles from Farnborough.",
        publicId: "georgian-country-house-english-garden-lawn",
        alt: "A white Georgian country house behind a lawn and garden borders",
        mapLink: maps("Down House Downe Kent English Heritage"),
      },
      {
        name: "Farnborough High Street",
        text: "The old village street, a conservation area, with several centuries of building in a few hundred yards and a couple of pubs that have been there for most of it. Worth a slow walk if you have only ever driven past.",
        publicId: "old-english-village-high-street-cottages",
        alt: "An old village high street lined with tiled cottages and shopfronts",
        mapLink: maps("Farnborough Village High Street Orpington"),
      },
    ],
    mapQuery: "Farnborough, Orpington, Kent",
    costText:
      "Rebedding and repointing a single hip is £350 to £650. Doing all four hips and the ridge on a typical Crofton semi runs £900 to £1,600, which is the job we quote most often in this postcode. Converting to a mechanically fixed dry ridge and hip system is £1,300 to £2,400 and removes the problem permanently. Individual tile repairs are £180 to £420, and a full re-roof on a standard Crofton house is £7,500 to £13,000 including scaffolding.",
    faqs: [
      {
        question: "Why does the mortar on my hips keep cracking?",
        answer:
          "Because mortar is rigid and a roof is not. Timber moves with temperature and humidity, tiles expand and contract, and over decades that movement works on a brittle material until it cracks. Sand and cement also shrinks slightly as it cures. Every mortar-bedded hip in Crofton is running the same clock. They were laid in the 1930s, mortar realistically gives forty to sixty years, so they are all overdue rather than unlucky.",
      },
      {
        question: "Is a dry ridge system better than mortar?",
        answer:
          "Mechanically, yes. Dry systems clamp the ridge and hip tiles down with fixings and a sealed union rather than relying on a bed of mortar, so they do not crack, and they allow ventilation at the ridge which most older roofs badly need. They cost more up front. The main reason to stay with mortar is appearance in a conservation area, which around here means the High Street rather than the Crofton estates.",
      },
      {
        question: "Can you match the tiles on a Crofton semi?",
        answer:
          "Almost always. The estates used a small number of machine-made clay tile patterns and reclaimed stock is widely available. On a street where every house shares a roof, we would rather take an extra few days sourcing the correct tile than fit something approximate that you will notice every time you park.",
      },
      {
        question: "Do you cover Locksbottom and Green Street Green?",
        answer:
          "Yes, along with Keston, Downe, Cudham and Pratts Bottom. All of it is fifteen minutes or so from the office, and it is some of the most regular work we do.",
      },
    ],
    finalH: "Book a free roof survey in Farnborough",
    finalP:
      "If your hips have started shedding mortar, we will tell you how far along they are, what it costs to put right, and whether it is worth ending the cycle with a dry system instead.",
  },

  // -------------------------------------------------------- WEST WICKHAM --
  {
    slug: "west-wickham",
    name: "West Wickham",
    metaTitle: "Roofers West Wickham | LeonEast Roofing & Building",
    metaDescription:
      "Roofers in West Wickham and Coney Hall. Wind-exposed ridges, 1930s tiled roofs and sun-baked felt. Free survey, fixed written price, 10 year guarantee.",
    h2: "Does your roof get weather the rest of the borough sleeps through?",
    h3: "Roofing across West Wickham, Coney Hall and the rising ground towards the Kent border",
    intro:
      "West Wickham climbs. From the station the land rises steadily south and east towards Coney Hall and the county boundary, and by the time you reach the top of that slope you are getting a noticeably rougher time of it than the streets below. Roofs up there lose ridge tiles in gales that the lower half of the town barely registers, and their long south-facing slopes take a serious amount of sun through a dry summer. Both matter when we are specifying a repair, and both are why we look at where a house sits before we look at what it is made of.",
    heroPublicId: "west-wickham-gabled-tiled-roof-suburban",
    heroAlt: "Gabled and hipped tiled roofs on interwar houses along a suburban road",
    about: {
      p1: "West Wickham was a small village until the railway arrived, and then it filled in rapidly - first along the Croydon Road between the wars, then out to Coney Hall, which was laid out in the 1930s on land that had been farmland a few years earlier. The result is unusually consistent housing: broad semis and detached houses from a narrow band of years, with hipped and gabled clay tile roofs, on generous plots.",
      p2: "The other thing that shapes this area is the topography. West Wickham sits on rising ground at the edge of the North Downs, and Coney Hall in particular is high, open and much less sheltered than the older streets nearer the station. Hayes and Coney Hall is also one of the wards named in the London Borough of Bromley's Article 4 direction withdrawing permitted development rights for upward extensions, and there is conservation cover around the older core near the parish church.",
      publicId: "hilltop-suburban-street-open-sky-rooftops",
      alt: "A suburban street on high ground with rooftops against an open sky",
    },
    featured: [
      {
        name: "Storm Damage Repairs",
        href: "/storm-damage-repairs",
        text: "Wind is the recurring theme on the high ground here. Ridge tiles, verges and anything not mechanically fixed are what goes first.",
      },
      {
        name: "Roof Repairs",
        href: "/roof-repairs",
        text: "The interwar standards - mortar-bedded hips, slipped tiles, flashings past their best - across a very consistent set of houses.",
      },
      {
        name: "Flat Roofing",
        href: "/flat-roofing",
        text: "Extensions and garages whose felt has been baked on a south-facing aspect for twenty summers, which is exactly how felt ends.",
      },
      {
        name: "New Roofs & Re-Roofing",
        href: "/new-roofs",
        text: "Where a re-roof is due, this is ground that justifies dry ridge, clipped verges and proper mechanical fixing throughout.",
      },
    ],
    benefitsHeading: "Roofing on the high side of the borough",
    benefitsIntro:
      "Exposure changes what a roof needs, and it is the single most common thing a generic quote ignores. Five points that actually apply here.",
    benefits: [
      {
        title: "We fix mechanically on exposed sites",
        text: "Mortar-bedded ridges are a liability up at Coney Hall. Dry ridge systems and clipped verges cost a little more and they stay where you put them.",
      },
      {
        title: "Sun damage taken seriously",
        text: "A long south-facing slope in one of the sunniest parts of the country ages faster than a north one. Felt underlay and flat-roof coverings both feel it, and both fail earlier than the averages suggest.",
      },
      {
        title: "Verges checked as standard",
        text: "Wind gets under a roof at its edges rather than in the middle. The verge is where damage starts on exposed ground, and it is the part most surveys glance at.",
      },
      {
        title: "Consistent housing, predictable faults",
        text: "Coney Hall and the Croydon Road streets went up in a narrow window, so we know what is likely underneath before we lift a tile.",
      },
      {
        title: "Article 4 checked before roof-line plans",
        text: "Hayes and Coney Hall is one of the wards covered by the borough's Article 4 direction on upward extensions. It matters for dormers and conversions, not for repairs.",
      },
    ],
    insight:
      "Two houses on the same West Wickham road, one near the station and one at the top of Coney Hall, will not need the same roof specification. The one at the top loses ridge tiles the other one never does.",
    attractions: [
      {
        name: "Wickham Court",
        text: "A fifteenth century fortified manor house beside the parish church, brick-built with corner turrets and now part of a school. It is a genuine survival from long before the suburb grew around it.",
        publicId: "tudor-brick-manor-house-turrets",
        alt: "A red brick Tudor manor house with corner turrets and mullioned windows",
        mapLink: maps("Wickham Court West Wickham"),
      },
      {
        name: "Spring Park Wood",
        text: "Ancient woodland on the Croydon border, part of a chain of green space running along the top of the ridge. Bluebells in spring and proper woodland the rest of the year.",
        publicId: "bluebell-woodland-spring-english-forest",
        alt: "Bluebells flowering across the floor of an English woodland in spring",
        mapLink: maps("Spring Park Wood West Wickham"),
      },
      {
        name: "Coney Hall Recreation Ground",
        text: "Open playing fields on the high ground with long views south towards the Downs, and a good reminder of how much higher this end of the town sits than the station.",
        publicId: "hilltop-playing-fields-view-countryside",
        alt: "Open playing fields on high ground with a distant view over countryside",
        mapLink: maps("Coney Hall Recreation Ground West Wickham"),
      },
    ],
    mapQuery: "West Wickham, Kent",
    costText:
      "Refixing wind-lifted ridge tiles is £350 to £800 depending on the length of the run. Converting a ridge to a mechanically fixed dry system is £900 to £1,800 and is generally the better buy on the exposed streets. Re-forming a verge with dry verge units is £450 to £1,100. Flat roof re-covers on an extension are £1,600 to £2,900 in EPDM, and a full re-roof on a typical West Wickham semi is £7,500 to £13,500.",
    faqs: [
      {
        question: "Why does my roof lose tiles when my neighbours' do not?",
        answer:
          "Usually position and fixing rather than bad luck. Wind does not push tiles off, it creates suction as it accelerates over the ridge and around the edges of a roof, and that suction is much stronger on exposed, elevated sites and at the corners and verges. A house at the top of Coney Hall with a mortar-bedded ridge is simply more vulnerable than one lower down with the same roof. Mechanical fixing is the answer.",
      },
      {
        question: "Do I need planning permission in West Wickham?",
        answer:
          "Not for repairs. Hayes and Coney Hall is one of the wards partly covered by the London Borough of Bromley's Article 4 direction removing permitted development rights for upward extensions, and there is conservation cover near the parish church, so anything that changes the roof's shape or appearance is worth checking against the council's Article 4 map first. Replacing damaged tiles with matching tiles is maintenance and is unaffected wherever you are.",
      },
      {
        question: "Is a dry ridge really worth the extra cost here?",
        answer:
          "On the high ground, we think so. Mortar cracks and lets go, and on an exposed site it does it sooner and the consequences are worse. A dry ridge is mechanically fixed, ventilated and effectively maintenance-free, and it typically adds a few hundred pounds to a job you are already paying access for. Lower down the hill it is more of a judgement call and we will say so.",
      },
      {
        question: "My extension roof has gone brittle. Is that normal?",
        answer:
          "For old bitumen felt on a sunny aspect, yes. This is one of the driest and sunniest corners of the country, and a dark felt roof in full sun gets far hotter than the air temperature, over and over, all summer. The bitumen hardens, loses flexibility and eventually cracks - usually at the upstands and edges where it also has to absorb movement. It is the main reason we tend to recommend EPDM around here, because rubber stays flexible through that heat.",
      },
    ],
    finalH: "Book a free roof survey in West Wickham",
    finalP:
      "We will look at where your house sits as well as what it is made of, and specify accordingly - because a roof at the top of Coney Hall is not working in the same conditions as one by the station.",
  },

  // ----------------------------------------------------------- BECKENHAM --
  {
    slug: "beckenham",
    name: "Beckenham",
    metaTitle: "Roofers Beckenham | LeonEast Roofing & Building",
    metaDescription:
      "Roofers in Beckenham and Park Langley. Chimney and flashing work on London Clay, Victorian slate and converted-house flat roofs. Free survey, 10 year guarantee.",
    h2: "Is the damp on your chimney breast back for the third year running?",
    h3: "Chimneys, flashings, slate and flat roofs across Beckenham, Park Langley, Eden Park and Clock House",
    intro:
      "Beckenham generates more chimney work for us than anywhere else we cover, and the reason is under the ground rather than on the roof. This is the London Clay end of the patch, and clay shrinks through a dry summer and swells again over winter. The movement is small but it never stops, and a chimney stack is a tall, heavy, rigid thing standing on a roof that is quietly shifting beneath it. Joints open, flaunching cracks, flashings pull away from the brickwork - and the damp shows up on a bedroom wall a floor below, where nobody thinks to look for a roof problem.",
    heroPublicId: "beckenham-victorian-house-chimney-stacks",
    heroAlt: "Tall brick chimney stacks rising above the slate roof of a Victorian house",
    about: {
      p1: "Beckenham grew as a comfortable Victorian and Edwardian suburb and it still shows. There are substantial villas on the roads out of the town centre, the planned Edwardian and interwar streets of Park Langley and Eden Park, long runs of 1930s semis, and a large stock of houses that were converted into flats during the twentieth century - which is why there are so many flat-roofed rear additions here.",
      p2: "It is also one of the more heavily designated parts of the borough. Park Langley is an Area of Special Residential Character under Policy 44 of the Bromley Local Plan, there is conservation cover in several places, and the Copers Cope, Clock House and Kelsey and Eden Park wards are all named in the council's Article 4 direction withdrawing permitted development rights for upward extensions. For repairs none of that bites. For anything that changes the roof line, all of it might.",
      publicId: "edwardian-villa-street-slate-roofs-bay-windows",
      alt: "Edwardian villas with bay windows and slate roofs along a residential street",
    },
    featured: [
      {
        name: "Chimney Repairs",
        href: "/chimney-repairs",
        text: "The signature job here - lead flashings replacing cracked cement fillets, repointing in the right mortar, and flaunching renewed while the access is up.",
      },
      {
        name: "Roof Leak Repairs",
        href: "/roof-leak-repairs",
        text: "Chimney damp is the most misdiagnosed leak there is. We trace it properly rather than assuming, because sometimes the stack is innocent.",
      },
      {
        name: "Flat Roofing",
        href: "/flat-roofing",
        text: "Rear additions on converted houses, many of them still on original felt and several of them serving more than one flat.",
      },
      {
        name: "Tiling & Slating",
        href: "/tiling-and-slating",
        text: "Victorian and Edwardian slate on the older streets, generally sound stone on failing nails, which changes what the sensible repair is.",
      },
    ],
    benefitsHeading: "Roofing on ground that moves",
    benefitsIntro:
      "Seasonal clay movement is a genuine engineering factor here, not a talking point. These are the five ways it changes what we do.",
    benefits: [
      {
        title: "Lead, not cement fillets",
        text: "A rigid cement fillet on a stack that moves seasonally will crack. Lead flexes with it and lasts decades. It costs more and it is the whole difference between a repair and a repeat visit.",
      },
      {
        title: "The right mortar for the brick",
        text: "Hard modern cement on soft Victorian brick traps moisture and pushes the decay into the bricks. On older stacks we use a lime-based mix, because the building requires it.",
      },
      {
        title: "Flaunching done at the same visit",
        text: "The sloped bed holding the pots is the most exposed part of the house. Renewing it while the scaffold is already up costs a fraction of doing it as its own job later.",
      },
      {
        title: "Leaks traced, not assumed",
        text: "A damp chimney breast can be ingress at the top, condensation in an unventilated flue, or salts in an old lining. Three problems, three different fixes, and only one of them is roofing.",
      },
      {
        title: "Shared roofs handled carefully",
        text: "Converted houses mean shared structures and shared responsibilities. We will set out plainly which parts of a roof serve which flat, which helps a great deal with the freeholder conversation.",
      },
    ],
    insight:
      "The most common thing we take off a Beckenham chimney is a cracked cement fillet somebody fitted in the eighties instead of lead. It is also the most common thing we find water coming through.",
    attractions: [
      {
        name: "Kelsey Park",
        text: "A Victorian landscaped park of lakes, streams and mature specimen trees, with a heronry that has been established for many years. Thirty-odd acres, and one of the prettiest parks in south east London.",
        publicId: "victorian-park-lake-waterfowl-mature-trees",
        alt: "A lake with waterfowl surrounded by mature trees in a landscaped Victorian park",
        mapLink: maps("Kelsey Park Beckenham"),
      },
      {
        name: "Beckenham Place Park",
        text: "Over two hundred acres of parkland, ancient woodland and a Georgian mansion, extensively restored in recent years with a swimming lake added. Easily the biggest green space in this corner of the borough.",
        publicId: "georgian-mansion-parkland-open-grass",
        alt: "A Georgian mansion standing above open parkland and grass",
        mapLink: maps("Beckenham Place Park"),
      },
      {
        name: "The Croydon Road Bandstand",
        text: "The bandstand in the Recreation Ground where David Bowie ran his Beckenham Arts Lab and played the free festival in August 1969. It was restored some years back and there is an annual event to mark it.",
        publicId: "victorian-park-bandstand-ornate-ironwork",
        alt: "An ornate Victorian iron bandstand in a public park",
        mapLink: maps("Croydon Road Recreation Ground Bandstand Beckenham"),
      },
    ],
    mapQuery: "Beckenham, Kent",
    costText:
      "Renewing a lead flashing on a standard stack is £450 to £950, and £600 to £1,200 on the taller Victorian houses where access costs more. Repointing a stack above the roof line is £600 to £1,500. New flaunching with the pots rebedded is £350 to £700, much less again if done alongside other work. Removing a redundant stack to below the roof line and making the covering good is £900 to £2,000. Flat roof re-covers on a rear addition run £1,700 to £3,200.",
    faqs: [
      {
        question: "Why does Beckenham have so many chimney problems?",
        answer:
          "The ground. This is the London Clay side of the borough rather than the chalk, and clay shrinks in dry weather and swells again when it is wet. That seasonal movement is small but constant, and it puts strain on any tall rigid structure standing on the roof. Over decades it opens mortar joints, cracks the flaunching and pulls flashings away from the brickwork. Combine that with a great many stacks that had their lead replaced with cement at some point and you get the pattern we see.",
      },
      {
        question: "My chimney breast is damp but the roof looks fine. What is going on?",
        answer:
          "Most likely water is entering at the top of the stack - through cracked flaunching, open joints or a damaged pot - and running down inside the flue before coming through the plaster lower down. But it can also be condensation in a cold unventilated flue, or hygroscopic salts left in an old lining drawing moisture from the air. Each has a completely different remedy, which is why we look inside as well as up before recommending anything.",
      },
      {
        question: "Can you work on a converted house where I only own one flat?",
        answer:
          "Yes, and it comes up a lot here. The practical issue is usually not the roofing but who is responsible for what. We will survey the whole roof, set out clearly which parts serve which part of the building, and provide a written report you can take to the freeholder or the management company. That document tends to be more useful than the quote in the first instance.",
      },
      {
        question: "Is Park Langley subject to extra rules?",
        answer:
          "Yes. Park Langley is one of the borough's 13 Areas of Special Residential Character under Policy 44 of the Bromley Local Plan, which means development is expected to respect the established character and not exceed existing building heights. The Copers Cope and Kelsey and Eden Park wards are also covered in part by the Article 4 direction on upward extensions. None of that affects a like-for-like repair, but it very much affects a dormer or a loft conversion.",
      },
    ],
    finalH: "Book a free roof survey in Beckenham",
    finalP:
      "If the damp has come back more than once, the survey is worth having. We will establish whether it is ingress, condensation or salts before anybody spends money on the wrong remedy.",
  },

  // ---------------------------------------------------------- BIGGIN HILL --
  {
    slug: "biggin-hill",
    name: "Biggin Hill",
    metaTitle: "Roofers Biggin Hill | LeonEast Roofing & Building",
    metaDescription:
      "Roofers in Biggin Hill, Downe and Cudham. Wind-exposed ridge-top roofs needing mechanical fixing, not mortar and hope. Free survey and a 10 year guarantee.",
    h2: "Is your roof taking weather that Bromley never sees?",
    h3: "Roofing on the North Downs ridge - Biggin Hill, Leaves Green, Downe and Cudham",
    intro:
      "Biggin Hill sits at around 180 metres on the North Downs ridge, which makes it the highest ground we cover by a considerable margin and a genuinely different place to own a roof. Seven miles down the hill in Orpington a windy afternoon is a windy afternoon. Up here the same weather system is getting under ridge tiles, lifting verges and peeling the edges off flat roofs. Anything that relies on mortar or on friction to stay put is living on borrowed time, and we specify accordingly - mechanically fixed ridges, clipped verges, properly fastened edge trim.",
    heroPublicId: "biggin-hill-exposed-ridge-roofs-open-sky",
    heroAlt: "Houses on exposed high ground with tiled roofs beneath a wide open sky",
    about: {
      p1: "Biggin Hill grew in an unusual way. It began as scattered smallholdings and plotland development along the top of the ridge, then the airfield arrived and with it a great deal more housing, and the postwar decades filled in the rest. The result is a settlement with almost no architectural consistency - interwar bungalows and chalets next to sixties estates next to individually built detached houses on large plots.",
      p2: "What everything here has in common is the exposure. There is very little between the ridge and the weather, and no surrounding town to break the wind. It is also, despite the TN postcode and the thoroughly Kentish feel, part of the London Borough of Bromley for planning - which surprises a lot of people and occasionally means someone has spent an evening reading Sevenoaks District Council's guidance by mistake. Much of the surrounding land is Green Belt.",
      publicId: "north-downs-ridge-open-landscape-view",
      alt: "Open high ground on the North Downs with a long view across the countryside",
    },
    featured: [
      {
        name: "Storm Damage Repairs",
        href: "/storm-damage-repairs",
        text: "The most common reason we come up the hill. Ridges, verges and flat-roof edges, in that order.",
      },
      {
        name: "Roof Repairs",
        href: "/roof-repairs",
        text: "Repairs specified for exposure rather than for an average site, which usually means more mechanical fixing than a standard quote allows for.",
      },
      {
        name: "Flat Roofing",
        href: "/flat-roofing",
        text: "Bungalows, chalets and extensions with a lot of flat roof between them, and edge detail that has to be genuinely well fastened up here.",
      },
      {
        name: "Emergency Roof Repairs",
        href: "/emergency-roof-repairs",
        text: "When a gale goes through, this is where it does its work. Make-safe first, documented for the insurer, permanent repair once it is calm.",
      },
    ],
    benefitsHeading: "Roofing 180 metres up",
    benefitsIntro:
      "Exposure is the single fact that governs every job on this ridge. Five ways it changes what we specify.",
    benefits: [
      {
        title: "Mechanical fixing throughout",
        text: "Dry ridge, dry verge, clips on the perimeter tiles. Mortar bedding is not a specification we would recommend on this ground, whatever it costs to do it properly.",
      },
      {
        title: "Edges and verges get the attention",
        text: "Wind uplift is strongest at the corners and edges of a roof, not in the middle. That is where we survey hardest and where we spend the specification.",
      },
      {
        title: "Flat roof trim genuinely fastened",
        text: "A flat roof fails at its edge when the trim lifts, and up here it will find any trim that was only stuck down. Mechanically fixed drip and edge trim as standard.",
      },
      {
        title: "You are Bromley, not Sevenoaks",
        text: "A TN postcode and a Kent address, but the London Borough of Bromley for planning. Worth knowing before you spend an evening on the wrong council's website.",
      },
      {
        title: "We come to you properly equipped",
        text: "It is twenty-odd minutes up the hill from Bromley. We turn up with what the job needs rather than making two trips, because a second visit up here costs everyone time.",
      },
    ],
    insight:
      "We have never yet been called to a Biggin Hill roof that lost a mortar-bedded ridge tile and only lost one. Once the wind is under the run it takes several, and it usually comes back for the rest.",
    attractions: [
      {
        name: "Biggin Hill Memorial Museum",
        text: "The museum beside St George's RAF Chapel of Remembrance, telling the story of the airfield's role in the Battle of Britain. The chapel itself, rebuilt in 1951, remains a working memorial.",
        publicId: "raf-memorial-chapel-stained-glass-window",
        alt: "Stained glass windows inside a small memorial chapel",
        mapLink: maps("Biggin Hill Memorial Museum"),
      },
      {
        name: "Downe and the Darwin landscape",
        text: "The village of Downe sits just along the ridge, with Down House, Charles Darwin's home of forty years, and the surrounding fields and woods he used as an outdoor laboratory. English Heritage look after the house.",
        publicId: "english-village-lane-flint-cottages-kent",
        alt: "A quiet village lane lined with flint and brick cottages",
        mapLink: maps("Downe Village Kent Down House"),
      },
      {
        name: "Cudham Valley",
        text: "A deep dry valley cutting into the chalk south of Biggin Hill, with footpaths, ancient woodland and some of the most genuinely rural country anywhere inside the M25.",
        publicId: "chalk-downland-valley-fields-woodland-kent",
        alt: "A dry chalk valley with fields and woodland on the North Downs",
        mapLink: maps("Cudham Valley Kent"),
      },
    ],
    mapQuery: "Biggin Hill, Kent",
    costText:
      "Refixing a wind-damaged ridge run is £400 to £900. Converting to a mechanically fixed dry ridge is £900 to £1,900 and is what we would generally advise on this ground. Dry verge units along a gable are £450 to £1,100. Flat roof re-covers with properly fastened edge trim are £1,700 to £3,000 in EPDM. A full re-roof on a typical Biggin Hill house is £8,000 to £15,000, and the specification will carry more mechanical fixing than the same house lower down would need.",
    faqs: [
      {
        question: "Which council covers Biggin Hill?",
        answer:
          "The London Borough of Bromley, despite the TN16 postcode and the fact that it feels entirely like Kent. This catches people out regularly. Sevenoaks District Council covers Swanley and the Kent side of the boundary, but Biggin Hill, Downe, Cudham and Leaves Green are all Bromley for planning, building control and conservation purposes.",
      },
      {
        question: "Why do you always recommend dry ridge up here?",
        answer:
          "Because mortar fails and wind finds it. At 180 metres on an open ridge there is no shelter, and uplift is far stronger than on a sheltered suburban street. A mortar-bedded ridge relies on a brittle material to resist that, and once the first tile goes the wind gets under the run and takes more. A dry system is clamped down mechanically, it does not crack, and it ventilates the ridge at the same time.",
      },
      {
        question: "Does the Green Belt affect roofing work?",
        answer:
          "Not for repairs. Green Belt policy is concerned with development that adds volume or changes the openness of the land, so it bites hard on extensions and outbuildings and not at all on replacing tiles or renewing a flashing. If you are planning a loft conversion or a dormer, it is worth a conversation with the London Borough of Bromley first.",
      },
      {
        question: "Is it worth having a survey if nothing has come off yet?",
        answer:
          "On this ground, yes - more so than lower down. Most of the wind damage we attend up here starts with something that was already slightly loose. A survey that finds a cracked hip or a lifting verge in September is a few hundred pounds; the same fault found by a February gale usually is not.",
      },
    ],
    finalH: "Book a free roof survey in Biggin Hill",
    finalP:
      "We will check the ridges, the verges and every edge on the roof, because on this ground that is where it starts. Photographs and a written verdict, no charge and no obligation.",
  },

  // -------------------------------------------------------------- SIDCUP --
  {
    slug: "sidcup",
    name: "Sidcup",
    metaTitle: "Roofers Sidcup | LeonEast Roofing & Building",
    metaDescription:
      "Roofers in Sidcup, Albany Park and Blackfen. 1930s hipped clay tile roofs, hip mortar and sagging uPVC guttering. Free survey and a 10 year written guarantee.",
    h2: "Does your street have a hundred identical roofs on it?",
    h3: "Roofing across Sidcup, Albany Park, Lamorbey and Blackfen - and yes, we know you are Bexley, not Bromley",
    intro:
      "Sidcup is one of the purest stretches of interwar suburbia in south east London. Ribbon after ribbon of 1930s semis went up along the bypass and the roads off it, and they were built to the same details with the same materials in the same handful of years. That makes the roofing here wonderfully predictable, which is genuinely good news: the faults arrive in a known order, the tiles are easy to match, and we can usually tell you what we expect to find before we have unloaded. It also means that when your neighbour has scaffolding up, it is worth a look at your own.",
    heroPublicId: "sidcup-1930s-hipped-roofs-suburban-street",
    heroAlt: "A long street of 1930s semi-detached houses with matching hipped tile roofs",
    about: {
      p1: "Sidcup expanded enormously between the wars. The old village around the High Street was already there, but the arrival of the Sidcup bypass and improved rail links turned the surrounding farmland into estate after estate of bay-fronted semis through the 1920s and 30s - Albany Park, Blackfen, Lamorbey and everything between. Postwar infill and some sixties flats followed, but the interwar stock is what defines the place.",
      p2: "The other thing worth stating plainly is that Sidcup is in the London Borough of Bexley, not Bromley. The BR and DA postcodes do not follow the borough boundary tidily, and we have lost count of the Sidcup homeowners who have read Bromley's Article 4 guidance and assumed it applied to them. It does not. Bexley has its own conservation areas and its own directions, and its planning department is the one that matters for your house.",
      publicId: "interwar-semi-detached-houses-bay-windows-street",
      alt: "Interwar semi-detached houses with bay windows and matching tiled roofs",
    },
    featured: [
      {
        name: "Roof Repairs",
        href: "/roof-repairs",
        text: "Hip and ridge mortar, slipped tiles and tired flashings - the standard interwar sequence, arriving on schedule across the whole town.",
      },
      {
        name: "Tiling & Slating",
        href: "/tiling-and-slating",
        text: "Original sand-faced clay tiles delaminating at the nose, and reclaimed matching stock that is easy to source because so many roofs share it.",
      },
      {
        name: "Guttering, Fascias & Soffits",
        href: "/guttering-fascias-and-soffits",
        text: "Cast iron replaced with cheap uPVC in the eighties across half the town, and a great deal of it now sagging between brackets.",
      },
      {
        name: "New Roofs & Re-Roofing",
        href: "/new-roofs",
        text: "Ninety-year-old battens and original felt on roofs that have had the hips done twice. At that point the sums change.",
      },
    ],
    benefitsHeading: "The advantage of a town built all at once",
    benefitsIntro:
      "Uniform housing is a gift to a roofer who works it regularly. These are the five ways it works in your favour.",
    benefits: [
      {
        title: "Accurate quotes, fewer surprises",
        text: "When we know the era, the covering and the detailing before we arrive, the survey confirms rather than discovers. That shows up as a quote you can rely on.",
      },
      {
        title: "Tiles that are easy to match",
        text: "Thousands of houses share a small range of clay tiles, so reclaimed stock is plentiful. A Sidcup repair should be invisible from the pavement.",
      },
      {
        title: "Hip mortar caught early",
        text: "The dominant fault on hipped interwar roofs, and much cheaper to deal with before the tiles start moving rather than after.",
      },
      {
        title: "Honest advice on eighties guttering",
        text: "A lot of Sidcup's cast iron was swapped for thin uPVC decades ago and is now sagging. Replacing it properly, sized for the roof, is usually money well spent.",
      },
      {
        title: "We know you are Bexley",
        text: "Different planning authority, different conservation areas, different Article 4 position. We will point you at the right council rather than the nearest one.",
      },
    ],
    insight:
      "On Sidcup's interwar streets we can usually name the fault from the road. It is not intuition, it is that the same builder solved the same problem the same way five hundred times in a row.",
    attractions: [
      {
        name: "Foots Cray Meadows",
        text: "A large stretch of open meadow and woodland along the River Cray, with the Five Arch Bridge at its centre - an eighteenth century landscape feature from the old Foots Cray Place estate.",
        publicId: "river-meadow-stone-bridge-parkland",
        alt: "A stone bridge crossing a river through open meadow and parkland",
        mapLink: maps("Foots Cray Meadows Five Arch Bridge Sidcup"),
      },
      {
        name: "Lamorbey Park",
        text: "Parkland, a lake and mature trees around the old Lamorbey House, now part of a college campus. A pleasant and largely unhurried piece of green space in the middle of the suburb.",
        publicId: "parkland-lake-willow-trees-quiet-path",
        alt: "A quiet lake fringed with willow trees and a path through parkland",
        mapLink: maps("Lamorbey Park Sidcup"),
      },
      {
        name: "Sidcup Place",
        text: "An eighteenth century house set in its own grounds just off the High Street, now a pub and restaurant, with gardens open to walk through. An unexpected survival at the centre of a very twentieth-century town.",
        publicId: "georgian-house-gardens-lawn-terrace",
        alt: "A Georgian house with formal gardens and a lawn in front",
        mapLink: maps("Sidcup Place Sidcup"),
      },
    ],
    mapQuery: "Sidcup, London",
    costText:
      "Individual tile repairs run £180 to £420. Rebedding the hips and ridge on a standard Sidcup semi is £900 to £1,600, and converting to a mechanically fixed dry system is £1,300 to £2,400. Replacing sagging uPVC guttering is £25 to £45 per metre, and a full roofline replacement is £1,400 to £3,000. A complete re-roof with new treated battens and breathable membrane runs £7,000 to £13,000 including scaffolding.",
    faqs: [
      {
        question: "Which council do I go to for planning in Sidcup?",
        answer:
          "The London Borough of Bexley. This trips people up constantly, because Sidcup sits right against the Bromley boundary and shares a lot of its character with the BR postcodes next door. Bromley's Article 4 directions and its Areas of Special Residential Character have no application here at all. Bexley has its own conservation areas and its own planning policies, and its planning and building control team is the one to contact.",
      },
      {
        question: "Why does everyone's hip mortar fail at the same time?",
        answer:
          "Because it was all laid at the same time. Sidcup's interwar estates went up over a handful of years, and hip and ridge tiles were universally bedded in sand and cement. Mortar realistically gives forty to sixty years before it cracks and lets go, so on a roof built in 1934 it is now well past due. The uniformity that makes the streets look good is the same thing that makes the maintenance arrive in waves.",
      },
      {
        question: "Should I replace the uPVC guttering somebody fitted in the eighties?",
        answer:
          "If it is sagging between brackets or overflowing in heavy rain, yes. A lot of the early uPVC that replaced cast iron around here was thin, under-bracketed and sometimes undersized for the roof it was draining. Replacing it properly - correct section, correct bracket spacing, enough outlets for the roof area - usually fixes an overflow problem that people have simply learned to live with.",
      },
      {
        question: "How far is Sidcup from your base?",
        answer:
          "About eighteen minutes from the Bromley office, out through Chislehurst. It is a regular part of our week rather than an outlying job, and there is no travel loading in the price.",
      },
    ],
    finalH: "Book a free roof survey in Sidcup",
    finalP:
      "We know these roofs well enough to half-diagnose them from the road, and we will still get up there and confirm it properly before quoting a penny.",
  },

  // ------------------------------------------------------------- SWANLEY --
  {
    slug: "swanley",
    name: "Swanley",
    metaTitle: "Roofers Swanley | LeonEast Roofing & Building",
    metaDescription:
      "Roofers in Swanley, Hextable and Crockenhill. Concrete tile roofs on ageing untreated battens, plus commercial flat roofing. Free survey, 10 year guarantee.",
    h2: "Are the tiles the problem, or is it what they are nailed to?",
    h3: "Roofing across Swanley, Swanley Village, Hextable and Crockenhill - Kent, not London",
    intro:
      "Swanley has a BR postcode and a London feel, but it is Kent - Sevenoaks District Council, a genuine Green Belt boundary on three sides, and a set of planning rules that has nothing to do with Bromley's. On the roofs, the defining story is the postwar expansion. Substantial estates went up here through the fifties and sixties under concrete interlocking tiles, and those tiles are now sixty-odd years old. But on a Swanley re-roof the tiles are frequently not the main issue. The battens underneath them are, because a great many were untreated softwood and have not aged nearly as gracefully.",
    heroPublicId: "swanley-concrete-tiled-roofs-postwar-housing",
    heroAlt: "Postwar housing with concrete interlocking tile roofs under a grey sky",
    about: {
      p1: "Swanley grew up around the railway junction and then expanded hard in the decades after the war, when large estates were laid out to house people moving out of London. The older settlement at Swanley Village survives a mile or so north, along with Hextable and Crockenhill, and there is a good deal of light industrial and commercial property near the station and the bypass with flat roofs of its own.",
      p2: "The planning position is worth stating clearly because the postcode misleads people. Swanley is in Sevenoaks District Council's area, in Kent, not in Greater London. Bromley's Article 4 directions and its Areas of Special Residential Character do not apply here, and neither do its conservation area designations - Sevenoaks maintains its own. The Green Belt boundary around the town is real and it constrains anything that changes a building's volume, though not repairs.",
      publicId: "kent-town-housing-estate-rooftops-view",
      alt: "Rooftops of a Kent town housing estate seen from higher ground",
    },
    featured: [
      {
        name: "New Roofs & Re-Roofing",
        href: "/new-roofs",
        text: "The core work here. Full strip, batten inspection, new treated battens and breathable membrane, and a covering matched to the street.",
      },
      {
        name: "Roof Repairs",
        href: "/roof-repairs",
        text: "Plenty of Swanley roofs are still serviceable. We will say so and repair them rather than converting every survey into a re-roof quote.",
      },
      {
        name: "Flat Roofing",
        href: "/flat-roofing",
        text: "Commercial and light industrial flat roofs near the station and the bypass, plus the usual extensions and garages.",
      },
      {
        name: "Guttering, Fascias & Soffits",
        href: "/guttering-fascias-and-soffits",
        text: "Estate roofline reaching the end of its second life, and a lot of capped-over fascia hiding what is behind it.",
      },
    ],
    benefitsHeading: "Why we always talk about battens in Swanley",
    benefitsIntro:
      "It is the least visible part of a roof and the part that most often decides whether a repair is worth doing. Five things worth knowing before you get quotes.",
    benefits: [
      {
        title: "Untreated softwood was normal here",
        text: "Postwar estate roofs were frequently battened with untreated timber. Sixty years on it may be split, soft or simply unable to hold a nail, which changes everything about the right repair.",
      },
      {
        title: "You cannot inspect what you have covered",
        text: "This is why we strip rather than overlay. Laying a new covering on top of the old one buries the battens along with everything else that is wrong under there.",
      },
      {
        title: "Weight is a real consideration",
        text: "A porous sixty-year-old concrete tile is considerably heavier wet than it was new, and it has been sitting on that timber the whole time. It is part of why these roofs reach the end together.",
      },
      {
        title: "We photograph the timber",
        text: "Once the covering is off you get pictures of what is underneath, good or bad. It is the only moment anyone can see what they are paying for, and we make sure you do.",
      },
      {
        title: "Sevenoaks, not Bromley",
        text: "Different council, different conservation list, no Bromley Article 4. We will point you at the right authority, which is not the one your postcode suggests.",
      },
    ],
    insight:
      "On a Swanley re-roof we would say the battens turn out to be the bigger job about half the time. Homeowners are almost always surprised, because the battens are the one part nobody has ever seen.",
    attractions: [
      {
        name: "Swanley Park",
        text: "Around sixty acres of open parkland with a boating lake, a miniature railway and a paddling pool that generations of local children have grown up with. It is the town's main green space and it is well kept.",
        publicId: "town-park-boating-lake-summer-families",
        alt: "A boating lake in a town park with grass and trees around it",
        mapLink: maps("Swanley Park Swanley Kent"),
      },
      {
        name: "Lullingstone Roman Villa",
        text: "One of the best preserved Roman villas in Britain, a few miles down the Darent valley at Eynsford, with remarkable mosaic floors and an early Christian house-church. English Heritage look after it.",
        publicId: "roman-mosaic-floor-archaeological-site",
        alt: "A patterned Roman mosaic floor preserved at an archaeological site",
        mapLink: maps("Lullingstone Roman Villa Eynsford"),
      },
      {
        name: "Hextable Gardens",
        text: "Formal gardens and open space on the site of the old Hextable horticultural college, with a heritage centre telling the story of the area's market gardening and glasshouse industry.",
        publicId: "formal-gardens-flower-beds-hedges-village",
        alt: "Formal gardens with flower beds, clipped hedges and lawns",
        mapLink: maps("Hextable Gardens Hextable Kent"),
      },
    ],
    mapQuery: "Swanley, Kent",
    costText:
      "Concrete tile repairs are £180 to £400, though on a covering that is generally delaminating the money is usually better kept. Rebedding a ridge run is £350 to £900. A full re-roof with new treated battens, breathable membrane and new tiles runs £6,500 to £11,500 on a typical estate house. Where the original battens turn out to be sound - which does happen - the figure comes down. Commercial and light industrial flat roofing is priced by area and access, and we survey those individually.",
    faqs: [
      {
        question: "Which council covers Swanley?",
        answer:
          "Sevenoaks District Council, in Kent. The BR8 postcode makes people assume it is Bromley or at least London, and it is neither. That means Bromley's Article 4 directions, its 47 conservation areas and its 13 Areas of Special Residential Character have no bearing on your property. Sevenoaks has its own planning policies and conservation designations, and there is a Green Belt boundary around much of the town.",
      },
      {
        question: "How can you tell if the battens need replacing?",
        answer:
          "Properly, only by stripping the covering and looking - which is one of the main reasons we never overlay a roof. There are indicators beforehand: tiles that will not hold a nail when refixed, visible sagging between rafters, and a house of the right age with no record of previous work. On a survey we will tell you how likely we think it is and price for both outcomes, so that if the timber turns out to be sound you pay less rather than the same.",
      },
      {
        question: "Do you do commercial flat roofs as well as houses?",
        answer:
          "Yes. There is a fair amount of light industrial and commercial property around the station and the bypass, and flat roofing on those buildings is a regular part of our work. Access, out-of-hours working and keeping a business trading during the job all get factored in, and we survey and quote them individually rather than from a rate card.",
      },
      {
        question: "Is Swanley within your normal area?",
        answer:
          "Yes - about twenty minutes from the Bromley office, straight out along the A20. Swanley Village, Hextable and Crockenhill are all comfortably within our patch and there is no travel surcharge on any of them.",
      },
    ],
    finalH: "Book a free roof survey in Swanley",
    finalP:
      "We will tell you the state of the tiles, our honest expectation of the battens underneath, and what each outcome costs - so that whichever way it goes, the number does not move once we have started.",
  },
];

export function getLocationPage(slug: string): LocationPageData {
  const p = locationPages.find((x) => x.slug === slug);
  if (!p) throw new Error(`Unknown location slug: ${slug}`);
  return p;
}
