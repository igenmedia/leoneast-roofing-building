// Every service page is driven from this file through ServicePage.astro.
//
// HOUSE STYLE for this site - deliberately not the style of any other roofing
// site in this portfolio. Warm, second-person and explanatory. Name the part,
// say what it is for, then say how it fails and what that costs. Longer
// sentences than the clipped register used elsewhere; very few fragments.
// Calm rather than chummy. Spaced hyphens, never em dashes.
//
// THE LOCAL SPINE running through all nine services, verified rather than
// invented:
//   - Orpington sits on the chalk dip slope of the North Downs, capped in
//     places with clay-with-flints. North and west towards Beckenham it is
//     London Clay, which shrinks and swells seasonally and moves chimney
//     stacks with it.
//   - This is one of the driest corners of Britain. Bromley averages around
//     729mm of rain a year against a UK average nearer 1,150mm, because the
//     North Downs shelter it. Dry does not mean kind: it means faults stay
//     hidden for years and then all announce themselves in the same storm.
//   - And the storms, when they come, come off the Channel and hit this
//     corner hardest. The Great Storm of 16 October 1987 gusted to 130mph
//     with west Kent and Sevenoaks among the worst hit; Storm Eunice did it
//     again in February 2022.
//   - The housing went up in one enormous interwar push after the railway
//     improvements of 1904, with building peaking through the 1920s and 30s -
//     Crofton, Poverest, Goddington, Ramsden - plus the 1930s garden suburb
//     at Petts Wood, postwar estates through the Cray valley on concrete
//     interlocking tiles, and genuinely old Kentish villages under handmade
//     peg tiles at Chelsfield, Downe and the Farnborough High Street end.
//   - Planning: the London Borough of Bromley has 47 conservation areas, 13
//     Areas of Special Residential Character under Policy 44 of its Local
//     Plan, and Article 4 directions withdrawing upward-extension permitted
//     development rights across 16 areas in eleven named wards, plus a
//     separate direction removing roof alteration rights in places.
//   - Bromley is the largest London borough by area and among the greenest,
//     which is lovely to live in and hard on gutters and valleys every
//     autumn.

export interface ServiceData {
  slug: string;
  serviceName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  h2: string;
  h3: string;
  /** Basename of a WebP in public/images/ - see img() in business.ts. */
  heroPublicId: string;
  heroAlt: string;
  intro: string;
  /** Pull-quote framed as our own experience, never as external research. */
  insight: string;
  /** Sign-to-story pairs - what you have spotted, and what it tends to mean. */
  symptoms: { sign: string; cause: string }[];
  benefits: { title: string; text: string }[];
  /** Ties the service to the chalk, the dry climate, or the housing eras. */
  localAngle: { h: string; p: string; publicId: string; alt: string };
  whatToLook: { h: string; p: string }[];
  comparison: {
    header: string;
    intro: string;
    proLabel: string;
    altLabel: string;
    rows: { label: string; pro: string; alt: string }[];
  };
  teaser: { h: string; p: string; publicId: string; alt: string; ctaText: string; ctaHref: string };
  costText: string;
  faqs: { question: string; answer: string }[];
  related?: { href: string; label: string }[];
}

export const services: ServiceData[] = [
  // ------------------------------------------------------- roof repairs --
  {
    slug: "/roof-repairs",
    serviceName: "Roof Repairs",
    metaTitle: "Roof Repairs In Orpington | LeonEast Roofing & Building",
    metaDescription:
      "Roof repairs in Orpington and across the BR postcodes. Free survey, photographs of what we find, a fixed written price and a 10 year workmanship guarantee.",
    h1: "Roof Repairs In Orpington",
    h2: "Has something up there stopped doing its job?",
    h3: "Tiles, slates, flashings, valleys and ridges put right on Orpington's interwar semis, village cottages and estate housing",
    heroPublicId: "roof-repairs-orpington-tiled-roof",
    heroAlt: "Clay tiled roof and brick gable of a 1930s semi-detached house in Orpington",
    intro:
      "Most roofs do not fail all at once. They give way in one small place - a slipped tile, a length of cracked mortar along a hip, a flashing that has lifted a few millimetres away from the chimney - and then they carry on looking perfectly respectable from the pavement while water finds its way in behind. That is why so many Orpington homeowners discover a roof problem through a ceiling rather than through the roof. We survey before we quote, we photograph what we find so that you can see it for yourself, and we tell you honestly whether you are looking at a morning's work or the beginning of something bigger.",
    insight:
      "Roughly half the roofs we are called to in Orpington need one afternoon of work and nothing more. The trouble is that nobody can tell which half from the ground.",
    symptoms: [
      {
        sign: "A tile lying in the flower bed",
        cause:
          "On the interwar streets around Crofton and Goddington the tiles were nailed only every fourth or fifth course, which was normal practice at the time and worked well for about eighty years. The rest simply hang on their nibs. Once one goes, the tiles above it lose their restraint, so a single tile on the lawn is worth a look rather than a shrug.",
      },
      {
        sign: "Crumbling grey mortar along the ridge or the hips",
        cause:
          "This is the most common repair on our books, and Farnborough and Crofton produce more of it than anywhere else we work. Those thousands of 1930s hipped roofs were finished with mortar-bedded hip and ridge tiles, and mortar has a working life of forty to sixty years. When it goes, the tile it was holding is only friction away from the garden.",
      },
      {
        sign: "A dark, damp-looking patch on the ceiling",
        cause:
          "Water almost never enters directly above the stain. It gets in at a fault, runs along the top of a rafter or across the loft insulation, and drops through at the first place it can. Tracing the route back to the entry point is the actual skill in roof repair, and it is the step that gets skipped when a repair fails twice.",
      },
      {
        sign: "Gutters overflowing at one particular corner",
        cause:
          "Sometimes a blockage, but often the gutter has dropped between brackets and is holding water where it should be moving it. Left alone it soaks the fascia behind, then the rafter feet, and a fifty pound clip job quietly turns into a roofline replacement.",
      },
    ],
    benefits: [
      {
        title: "We show you the fault before we price it",
        text: "You will get photographs of the actual defect, taken from the roof, before any figure is discussed. If you want to compare quotes afterwards, those photographs will save the next firm the diagnosis - and you will know whether they are describing the same problem.",
      },
      {
        title: "Repair where repair is honest",
        text: "A roof with thirty years of life left in it does not need replacing because one hip has failed. We will tell you when a repair is the sensible answer, and we will tell you just as plainly when patching a roof for the fourth time is money thrown at a problem that needs solving properly.",
      },
      {
        title: "Materials that match what is already there",
        text: "Bromley has 47 conservation areas and a great deal of housing built to a consistent pattern, so a mismatched tile is visible from the street for the next fifty years. We source to match - including the sand-faced clay and the older concrete profiles that have long since gone out of production.",
      },
      {
        title: "One price, written down, itemised",
        text: "Materials, labour and access appear on separate lines so that you can see where the money goes. Scaffolding in particular is worth understanding, because it is often the largest single item and it is the one most likely to appear as a surprise on somebody else's invoice.",
      },
      {
        title: "Scaffold or tower, chosen properly",
        text: "Not every repair needs a full scaffold, and not every repair is safe from a ladder. We make that call on the survey and explain it, because getting it wrong in either direction costs you - either in unnecessary hire charges or in a job that has to stop halfway.",
      },
      {
        title: "Ten years in writing",
        text: "Every repair carries a written ten year workmanship guarantee. That is a document you keep, not a promise made on a doorstep, and it stays valid if you sell the house.",
      },
    ],
    localAngle: {
      h: "Why Orpington roofs fail so quietly",
      p: "Bromley is one of the driest places in Britain. The North Downs shelter this corner of London, and the borough records something like 729mm of rain in an average year against a national figure nearer 1,150mm. You would think that made life easy for a roof, and in one sense it does. What it actually does is change the way roofs fail here. A defect that would flood a kitchen in Cumbria inside a fortnight can sit quietly above an Orpington bedroom for two or three years, wetting the end of a rafter a little each month and doing all its damage out of sight. Then a proper storm arrives - and this corner of the country gets those too, as anyone who remembers the night of 16 October 1987 will tell you - and every quiet fault on the street announces itself in the same few hours. It is the reason we take small stains seriously. Around here the size of the mark on your ceiling tells you almost nothing about the age of the problem behind it.",
      publicId: "storm-clouds-over-suburban-rooftops-orpington",
      alt: "Heavy grey storm clouds building over the rooftops of a suburban street",
    },
    whatToLook: [
      {
        h: "Did they go up, or did they look from the ground?",
        p: "A roof cannot be diagnosed with binoculars. Anyone quoting for a repair should have been on the roof or on a tower, and should be able to show you photographs of the defect they are proposing to fix. If the quote arrived after a survey conducted entirely from the driveway, it is a guess with a price attached.",
      },
      {
        h: "Is the access priced separately and explained?",
        p: "Scaffolding is frequently the biggest line on a roofing invoice and it is the one people are least prepared for. Ask what access is included, how long it stays up, and who is paying if the job overruns. A firm that itemises this without being asked is a firm that has nothing to hide in it.",
      },
      {
        h: "What happens if it leaks again?",
        p: "Ask for the guarantee in writing before you agree to anything, and read what it actually covers. A ten year workmanship guarantee means the labour is warranted for ten years. It is a different thing from a manufacturer's material warranty, and a firm worth using will happily explain the difference rather than blurring it.",
      },
    ],
    comparison: {
      header: "Repair the roof, or replace it?",
      intro:
        "This is the question behind most of the calls we take, and the honest answer depends on how much of the roof is still doing its job. Here is how we weigh it up on an Orpington house, so that you can weigh it up too.",
      proLabel: "Repair makes sense when",
      altLabel: "Replacement makes sense when",
      rows: [
        {
          label: "The tiles themselves",
          pro: "Sound, with a good surface, and only a handful displaced or cracked. Most 1930s clay tiles around Crofton still have decades left in them once they are refixed.",
          alt: "Delaminating, flaking or crumbling at the nose across the whole slope. Once concrete tiles start shedding their surface they get porous and heavy, and there is no fixing that.",
        },
        {
          label: "The battens underneath",
          pro: "Firm and holding a nail. If a tile can be renailed and stays where you put it, the timber beneath is doing its job.",
          alt: "Soft, split or untreated and past sixty. Postwar battens on the Cray and Swanley estates were often untreated softwood, and no amount of tile work compensates for a batten that will not hold.",
        },
        {
          label: "The felt or underlay",
          pro: "Intact where you can see it from the loft, even if it has gone brittle at the eaves. A sagging but continuous felt is still a second line of defence.",
          alt: "Torn, missing, or shredded into strips between every rafter - a very common sight in lofts that have not been looked at since the seventies.",
        },
        {
          label: "How often you have paid for this",
          pro: "First or second repair in a decade, in different places each time. That is a roof ageing normally.",
          alt: "Third or fourth call-out in three years, in a new spot each time. At that point you are paying for a replacement in instalments and getting no guarantee at the end of it.",
        },
        {
          label: "What you plan to do with the house",
          pro: "Staying put, or selling in the next year or two with the repair documented and guaranteed.",
          alt: "Planning a loft conversion, solar panels, or anything that means disturbing the covering anyway. Doing it twice costs far more than doing it once.",
        },
        {
          label: "Rough cost on a typical Orpington semi",
          pro: "£180 to £900 for most single-fault repairs, including access where a tower will do.",
          alt: "£7,000 to £14,000 for a full re-roof with new battens, breathable membrane and scaffolding, depending on the size and pitch.",
        },
      ],
    },
    teaser: {
      h: "Not sure what you are looking at?",
      p: "We have written up the faults that come up again and again on this patch - the mortar-bedded hips of the Crofton semis, the hung tiles on the Petts Wood gables, the sixties concrete tiles through the Cray valley, the chimney flashings that move with the London Clay over towards Beckenham. There are photographs of each one and a plain description of what it does if it is left. It is worth ten minutes before you ring anybody, including us.",
      publicId: "damaged-roof-tiles-close-up-orpington",
      alt: "Close view of cracked and displaced roof tiles on an older pitched roof",
      ctaText: "Read the common roof problems guide",
      ctaHref: "/common-roof-problems",
    },
    costText:
      "A single slipped or cracked tile refixed from a tower is usually £180 to £320. Rebedding and repointing a hip or a ridge runs from about £350 for a short run to £1,200 for a full hipped roof on a large 1930s semi. A chimney flashing replaced in lead is typically £450 to £950. Where a full scaffold is needed, allow £800 to £1,600 on top for a standard two-storey house, and expect that figure to be a separate line on your quote rather than folded invisibly into the total.",
    faqs: [
      {
        question: "Do I need planning permission for a roof repair in Orpington?",
        answer:
          "For a like-for-like repair, no. Replacing damaged tiles with matching tiles, rebedding a ridge or renewing a flashing is maintenance and needs no consent anywhere in the borough. It changes if the work alters the roof's shape or appearance: the London Borough of Bromley has 47 conservation areas, 13 Areas of Special Residential Character under Policy 44 of its Local Plan, and Article 4 directions that have removed permitted development rights for upward extensions across 16 areas, including parts of the Petts Wood and Knoll, Chislehurst and Chelsfield and Pratts Bottom wards. If your job involves a dormer, a change of covering or anything that alters the outline, check with the council first. We will tell you on the survey if we think it applies to you.",
      },
      {
        question: "How quickly can you come out?",
        answer:
          "We are based in Orpington itself, so most of the BR postcodes are a ten to twenty minute drive. A free survey is usually within two to four working days. If water is actively coming in, say so when you call and we will treat it as an emergency rather than a survey - that means a temporary make-safe within hours where we can, and the permanent repair booked afterwards.",
      },
      {
        question: "Will you tell me if I do not need the work?",
        answer:
          "Yes, and it happens regularly. A surprising number of ceiling stains turn out to be condensation in a poorly ventilated loft rather than a leak, and a surprising number of worried calls turn out to be a roof that has fifteen good years left in it. You get the finding in writing either way, and there is no charge for the survey that produced it.",
      },
      {
        question: "Can you match tiles on an older Orpington house?",
        answer:
          "Usually, yes. The interwar streets around Crofton, Poverest and Goddington used a fairly small range of clay tiles, and reclaimed stock is available for most of them. Handmade Kentish peg tiles on the older village properties at Chelsfield and Farnborough are also obtainable, though they take longer to source and cost more. Some 1960s and 70s concrete profiles have been discontinued entirely, and in those cases we will show you the closest available match before ordering anything.",
      },
      {
        question: "Do you work on flat roofs as well as pitched?",
        answer:
          "Yes. Flat roofing is a genuinely different trade with different materials and different failure modes, and it has its own page on this site. Between them, the rear additions, garage roofs and dormer tops around Orpington account for a large share of the leaks we are called to.",
      },
      {
        question: "What does the ten year guarantee actually cover?",
        answer:
          "Our workmanship, in writing, for ten years from the date of completion. If water finds its way back through something we repaired, we return and put it right at no cost. It does not cover a separate new fault elsewhere on the roof, and it is not the same thing as a manufacturer's warranty on the materials, which runs on its own terms. We will hand you both documents at the end of the job.",
      },
    ],
    related: [
      { href: "/roof-leak-repairs", label: "Roof leak repairs" },
      { href: "/new-roofs", label: "New roofs and re-roofing" },
      { href: "/roof-repair-cost", label: "What roof work costs" },
    ],
  },

  // --------------------------------------------------------- emergency --
  {
    slug: "/emergency-roof-repairs",
    serviceName: "Emergency Roof Repairs",
    metaTitle: "Emergency Roof Repairs Orpington | LeonEast Roofing",
    metaDescription:
      "Emergency roof repairs across Orpington and the BR postcodes. Rapid make-safe to stop water coming in, photographed for your insurer, permanent repair after.",
    h1: "Emergency Roof Repairs In Orpington",
    h2: "Is water coming in right now?",
    h3: "Rapid make-safe across Orpington and the surrounding BR postcodes, with the permanent repair booked once the weather allows",
    heroPublicId: "emergency-roof-repair-orpington-storm-damage",
    heroAlt: "Rain running off a damaged pitched roof during a heavy storm",
    intro:
      "An emergency roof job has two halves and they should never be confused with each other. The first is stopping the water, which usually means a temporary covering fitted quickly and safely, often in conditions nobody would choose to work in. The second is the proper repair, which needs daylight, dry weather and the right materials, and which is very rarely a good idea to attempt in the middle of a gale. We are straight about that split when you call. You will be told what we can safely do today, what has to wait, and what each part is going to cost - before anybody climbs anything.",
    insight:
      "The most expensive part of a roofing emergency is almost never the roof. It is the ceiling, the carpet and the plaster underneath it, and every hour the water keeps running adds to that bill.",
    symptoms: [
      {
        sign: "Water actively dripping into a room",
        cause:
          "Turn the electrics off at the consumer unit if water is anywhere near a light fitting or a socket, move what you can, and put a bucket under it. If the ceiling is bulging, a small hole made deliberately at the lowest point will let it drain in one place instead of bringing the whole board down. Then ring us.",
      },
      {
        sign: "Tiles or slates in the garden after a gale",
        cause:
          "The gap they left is now the weak point, and the wind that took the first one is perfectly capable of getting under its neighbours. This is worth treating urgently even if nothing is coming in yet, because the second night of weather usually costs more than the first.",
      },
      {
        sign: "A section of ridge or flashing hanging loose",
        cause:
          "This is a safety problem before it is a roofing one. Anything loose at height above a path, a driveway or a neighbour's garden needs making safe the same day, and the area beneath it kept clear until it is.",
      },
      {
        sign: "A flat roof that has ponded and split",
        cause:
          "Ageing felt goes brittle after a run of hot dry weather, then tears when the water sits on it. The tear is often small and hard to find, but the volume of water a flat roof can deliver through it is not small at all - which is why flat-roof emergencies do so much internal damage so quickly.",
      },
    ],
    benefits: [
      {
        title: "Local, so we can actually get there",
        text: "We work out of Orpington and cover the BR postcodes around it. Most of our patch is inside twenty minutes, which matters far more in an emergency than any promise about response times made by a firm that turns out to be dispatching from another county.",
      },
      {
        title: "Make-safe first, quote second",
        text: "When water is coming in, the priority is stopping it. We will fit a temporary covering, get the situation stable and then talk about the permanent repair properly - rather than asking you to make a five thousand pound decision while your landing carpet is soaking.",
      },
      {
        title: "Photographed for your insurer",
        text: "Storm damage claims live or die on evidence. We photograph the damage before we touch it, again after the make-safe, and once more at completion, and we will write the description in the language loss adjusters expect to read.",
      },
      {
        title: "Honest about the weather",
        text: "There are nights when going up is not safe and no reputable roofer will do it. We will tell you that plainly, tell you what to do inside in the meantime, and be there at first light. A firm that promises to fix a tiled roof at two in the morning in a gale is promising something it should not.",
      },
      {
        title: "The temporary cover is charged as temporary",
        text: "A make-safe is a distinct, modestly priced job, and the cost of it comes off the permanent repair if you go ahead with us. Nobody here is incentivised to turn a bad night into a large contract.",
      },
      {
        title: "The permanent repair carries the full guarantee",
        text: "The temporary covering is exactly that. When the proper repair is done it carries the same written ten year workmanship guarantee as any other job we complete.",
      },
    ],
    localAngle: {
      h: "This corner of the country gets the storms",
      p: "It is easy to think of Orpington as sheltered, and in terms of ordinary rainfall it genuinely is. But sheltered from drizzle is not the same as sheltered from wind, and the serious Atlantic and Channel storms that reach southern England have a habit of hitting exactly this stretch of the north Kent and south London border hardest. The Great Storm of 16 October 1987 is the one everybody remembers: gusts around 130mph, eighteen people killed, something like fifteen million trees brought down, and west Kent and Sevenoaks among the very worst affected places in the country. Storm Eunice did a smaller version of the same thing in February 2022. The pattern we see afterwards is always the same. It is not usually the sound roofs that fail. It is the ones that were already carrying a cracked hip or a tired flashing, quietly, for years - and the storm simply found them all on the same night.",
      publicId: "wind-damaged-roof-after-storm-kent",
      alt: "Roof tiles displaced and timber exposed on a house after a severe windstorm",
    },
    whatToLook: [
      {
        h: "Are they actually local, or is it a call centre?",
        p: "A great many 'emergency roofer' numbers route to a national booking service which then subcontracts to whoever is available. You end up paying a referral margin and waiting longer. Ask where the person who will turn up is based, and be wary of any answer that is not a place you recognise.",
      },
      {
        h: "Will they put the price in writing before starting?",
        p: "Emergency work is exactly where overcharging happens, because the customer is stressed and the alternative is water. Insist on a figure for the make-safe before any work begins, even if it is a range. Anyone unwilling to give one is telling you something useful.",
      },
      {
        h: "Do they document it for the insurance claim?",
        p: "If the cause was storm damage, your insurer will want dated photographs and a clear description of what failed and why. A roofer who does this as standard is worth a great deal more than the difference in their quote, because a rejected claim costs far more than a call-out.",
      },
    ],
    comparison: {
      header: "The make-safe and the repair are different jobs",
      intro:
        "Confusing the two is how people end up paying emergency rates for ordinary work, or accepting a tarpaulin as though it were a finished repair. Here is what each one is actually for.",
      proLabel: "Temporary make-safe",
      altLabel: "Permanent repair",
      rows: [
        {
          label: "What it is",
          pro: "A weatherproof covering, usually reinforced sheeting properly battened down, or a lead or fibre patch on a small opening.",
          alt: "Matching tiles, slates or membrane put back to the original specification, with the underlying cause dealt with.",
        },
        {
          label: "How long it takes",
          pro: "An hour or two, sometimes less, and it can be done in weather that would stop the real work.",
          alt: "Half a day to several days, depending on scale and on whether scaffolding and materials need arranging.",
        },
        {
          label: "How long it lasts",
          pro: "Weeks, not years. It is designed to hold while you sort out the claim and the repair, and it should be checked if it is up for more than a month.",
          alt: "Decades, when done properly - and covered by the written ten year workmanship guarantee.",
        },
        {
          label: "Typical cost",
          pro: "£180 to £600 depending on access, area and time of day. Deducted from the permanent repair if we do that too.",
          alt: "From a few hundred pounds for a small defect to several thousand for significant storm damage with scaffolding.",
        },
        {
          label: "What your insurer thinks",
          pro: "Policies generally require you to prevent further damage, so a prompt make-safe is usually recoverable and always looked on well.",
          alt: "Assessed on the claim. Photographs from before the make-safe are what establish that the damage was storm-caused rather than wear.",
        },
        {
          label: "Safe in bad weather?",
          pro: "Sometimes, with the right access. There are still nights when the answer has to be no.",
          alt: "No. Bedding mortar, dressing lead and laying membrane all need dry, still conditions to be done to a standard worth guaranteeing.",
        },
      ],
    },
    teaser: {
      h: "When it was the wind that did it",
      p: "Storm damage has its own rules - what insurers count as a storm, what they treat as pre-existing wear, and what evidence makes the difference between a paid claim and a rejected one. We have set all of that out on a separate page, along with what we do differently on a job that is going through a claim rather than being paid for directly.",
      publicId: "storm-damaged-roof-repair-scaffolding",
      alt: "Scaffolding erected around a house roof undergoing repair after storm damage",
      ctaText: "See how we handle storm damage",
      ctaHref: "/storm-damage-repairs",
    },
    costText:
      "A temporary make-safe on a standard two-storey house in Orpington is typically £180 to £600, depending on how much covering is needed, how the roof can be reached, and whether it is a weekday morning or a Sunday night. That figure comes off the permanent repair if we carry it out. The repair itself is then priced like any other job, from a couple of hundred pounds for a handful of tiles to several thousand where a slope has been stripped by wind and needs scaffolding.",
    faqs: [
      {
        question: "Do you charge extra for evenings and weekends?",
        answer:
          "There is an out-of-hours element on genuine emergency call-outs, and we tell you what it is on the phone before we set off rather than adding it to the invoice afterwards. Ordinary surveys and booked repairs are charged the same whatever day they fall on.",
      },
      {
        question: "Will my insurance cover this?",
        answer:
          "Most buildings policies cover storm damage, and most define a storm by wind speed - commonly gusts above about 55mph, though it varies by insurer, so it is worth reading your own wording. What they generally do not cover is gradual wear, which is why documenting the state of the roof before the make-safe matters so much. We photograph everything and describe it in the terms adjusters expect. Report the claim as soon as you can, and keep every receipt including ours.",
      },
      {
        question: "Can you come out in the middle of the night?",
        answer:
          "We will always answer the phone and talk you through what to do inside straight away. Whether we can safely work at height depends entirely on the conditions. In high winds or lightning the honest answer is no, and any firm telling you otherwise is either not coming or not being careful. In those cases we will be with you as soon as it is light and safe.",
      },
      {
        question: "What should I do before you arrive?",
        answer:
          "Turn off the electricity to any circuit near the water. Move furniture, rugs and anything valuable out of the way, and put down buckets and towels. If a ceiling is sagging and holding water, piercing it deliberately at the lowest point with something long will let it drain in one controlled place rather than collapsing. Then take photographs of everything - your insurer will want them.",
      },
      {
        question: "How far do you travel for emergencies?",
        answer:
          "Orpington and the surrounding BR postcodes are our core patch, so Petts Wood, the Crays, Chelsfield, Farnborough and Chislehurst are all a few minutes away. We also cover Bromley, Beckenham, West Wickham, Biggin Hill, Sidcup and Swanley. Further than that and you are better served by someone closer, and we will say so.",
      },
    ],
    related: [
      { href: "/storm-damage-repairs", label: "Storm damage repairs" },
      { href: "/roof-leak-repairs", label: "Roof leak repairs" },
      { href: "/flat-roofing", label: "Flat roofing" },
    ],
  },

  // ------------------------------------------------------------- storm --
  {
    slug: "/storm-damage-repairs",
    serviceName: "Storm Damage Repairs",
    metaTitle: "Storm Damage Roof Repairs In Orpington | LeonEast Roofing",
    metaDescription:
      "Storm damage roof repairs in Orpington. Damage photographed and documented for your insurer, make-safe the same day where possible, permanent repair guaranteed.",
    h1: "Storm Damage Roof Repairs In Orpington",
    h2: "Did the wind take something off your roof?",
    h3: "Damage assessed, documented for your insurer and repaired properly - across Orpington, the Downs villages and the whole BR area",
    heroPublicId: "storm-damage-roof-repairs-orpington",
    heroAlt: "Bare roof timbers and displaced tiles on a house damaged by high winds",
    intro:
      "Storm damage is the one kind of roof work where the paperwork matters nearly as much as the workmanship. Insurers pay for damage caused by a storm and decline damage caused by wear, and the difference between those two verdicts is usually decided by photographs taken in the first day or two. So we do this job in a particular order: assess and photograph, make safe, document properly, then repair. Homeowners around Orpington who have been through a rejected claim tend to appreciate why. Those who have not are often surprised how much difference the sequence makes.",
    insight:
      "Nearly every storm claim we see refused is refused for the same reason - there was no record of what the roof looked like before somebody climbed up and started fixing it.",
    symptoms: [
      {
        sign: "Ridge tiles gone or shifted along the line",
        cause:
          "Mortar-bedded ridges are the classic wind casualty across this borough, and the exposed high ground at Biggin Hill, Coney Hall and the top of West Wickham loses them in gales that barely register down in the town. Once one goes the wind gets under the run, so the second gale usually takes several more.",
      },
      {
        sign: "A whole area of slipped or missing tiles",
        cause:
          "Wind does not lift tiles by pushing on them. It creates suction as it accelerates over the ridge and around the edges of the roof, which is why damage clusters at ridges, verges and hips rather than in the middle of a slope. That pattern is also useful evidence that wind, not age, was responsible.",
      },
      {
        sign: "Lead flashing peeled back from the chimney",
        cause:
          "Flashing that was already slightly loose becomes a sail in a gale. Once it is lifted, water runs straight down the outside of the flue and into the house, and the stain usually appears a floor below where the water actually got in.",
      },
      {
        sign: "A fence panel down and a suspiciously quiet roof",
        cause:
          "Worth mentioning because it is so often overlooked. If the wind was strong enough to flatten fencing, it was strong enough to move things on the roof. A great many storm claims are made months late because nobody thought to look up while they were clearing up.",
      },
    ],
    benefits: [
      {
        title: "Documented the way insurers want it",
        text: "Dated photographs of the damage before anything is touched, a written description of the failure mechanism, and further photographs after the make-safe and at completion. This is the single most useful thing a roofer can do for you on a storm job and it costs you nothing extra.",
      },
      {
        title: "Same-day make-safe wherever the weather allows",
        text: "Stopping further water ingress is usually a condition of your policy as well as being obviously sensible. We prioritise it, price it separately, and offset it against the repair.",
      },
      {
        title: "We will tell you if it is not a claim",
        text: "Sometimes the damage is genuinely wear, and putting in a claim will cost you your excess and your no-claims position for nothing. We would rather say so and do the repair at a fair price than help you waste a claim.",
      },
      {
        title: "Whole-roof check, not just the obvious hole",
        text: "Wind damage rarely comes in ones. Where one ridge tile has gone we check the whole run, the verges, the hips and the flashings, because finding the second and third fault now is far cheaper than finding them in the next storm.",
      },
      {
        title: "Matching materials, not whatever is on the van",
        text: "A storm repair that leaves three bright new tiles in the middle of a weathered roof is a permanent advertisement for a rushed job. We source to match, and on the older Kentish properties towards Chelsfield and Downe that occasionally means waiting a few days for the right reclaimed peg tiles.",
      },
      {
        title: "Guaranteed for ten years in writing",
        text: "The permanent repair carries the same written ten year workmanship guarantee as everything else we do, whether the insurer is paying or you are.",
      },
    ],
    localAngle: {
      h: "Wind behaves differently at the top of the Downs",
      p: "Our patch climbs a long way. Orpington town sits at around 50 metres, the ground rises steadily south and west through Farnborough and Green Street Green, and by the time you reach the ridge at Biggin Hill you are close to 180 metres with almost nothing between you and the weather. That difference is not academic. A gale that produces a breezy afternoon in the Cray valley can be stripping ridge tiles and lifting flat-roof coverings up on the ridge at the same moment, and the roofs up there need detailing that reflects it - mechanically fixed dry ridge systems rather than mortar, clips at the verges, proper edge trim on flat roofs. When we survey a house at Biggin Hill, Cudham or Coney Hall we are looking at a different set of risks from the same house in Petts Wood, and we specify accordingly.",
      publicId: "high-winds-trees-bending-storm-north-downs",
      alt: "Trees bending in strong winds on high open ground during a storm",
    },
    whatToLook: [
      {
        h: "Did they photograph before they touched anything?",
        p: "This is the question that decides your claim. Once a roofer has started work, the evidence of what caused the damage is gone. Any firm that goes straight up a ladder with tools in hand, before a camera has come out, is putting your claim at risk without meaning to.",
      },
      {
        h: "Will they talk to your insurer directly?",
        p: "Not every roofer will, and it is a fair amount of unpaid administration. But a firm that will describe the damage in writing to a loss adjuster, and stand behind that description, saves you an enormous amount of back and forth.",
      },
      {
        h: "Are they pushing you towards a claim?",
        p: "Be careful with anyone who tells you to claim before they have properly assessed the damage, or who offers to cover your excess. Both are warning signs. A straightforward repair paid for directly is often cheaper overall than a claim once the excess and the premium increase are counted.",
      },
    ],
    comparison: {
      header: "Claiming on insurance, or paying directly",
      intro:
        "There is no universal right answer, and any roofer who gives you one without knowing the numbers is guessing. These are the factors that actually decide it.",
      proLabel: "Go through the insurer",
      altLabel: "Pay for it yourself",
      rows: [
        {
          label: "Scale of the damage",
          pro: "Significant - a stripped slope, structural timber exposed, several thousand pounds of work.",
          alt: "Modest - a few tiles, a ridge run, a flashing. Often less than or barely above the excess.",
        },
        {
          label: "Your excess",
          pro: "Low relative to the repair, so there is real money to recover.",
          alt: "£250 to £500 on a £600 repair leaves very little worth claiming for.",
        },
        {
          label: "Evidence available",
          pro: "Clear storm event, dated photographs, obvious wind-pattern damage at ridges and verges.",
          alt: "Ambiguous cause, or damage that a surveyor could reasonably call wear and tear.",
        },
        {
          label: "Effect on your premium",
          pro: "Worth accepting when the sum recovered is large.",
          alt: "A claim stays on your record for years and lifts renewals. On a small job it can cost more over time than the repair did.",
        },
        {
          label: "How fast it happens",
          pro: "Slower. Adjusters, approved contractors and authorisations all take time, though the make-safe should not wait for any of it.",
          alt: "Immediate. We can survey, quote and book without anyone's authorisation but yours.",
        },
        {
          label: "Who chooses the roofer",
          pro: "Often the insurer's panel, though you are generally entitled to use your own contractor - ask, because it is not always volunteered.",
          alt: "Entirely you.",
        },
      ],
    },
    teaser: {
      h: "If water is coming in right now",
      p: "Storm assessment and documentation is the considered half of this work. The urgent half is stopping water getting into the house tonight, and that has its own page - what we can safely do in bad weather, what has to wait for daylight, what a make-safe costs and what you should be doing indoors while you wait for us.",
      publicId: "emergency-tarpaulin-covering-damaged-roof",
      alt: "Temporary sheeting fixed over a damaged section of roof after a storm",
      ctaText: "Emergency roof repairs",
      ctaHref: "/emergency-roof-repairs",
    },
    costText:
      "Storm work varies more than any other kind of roofing because the damage does. Replacing a handful of wind-lifted tiles and rebedding a short ridge run is generally £350 to £900. Re-forming a stripped verge with new lead or dry-verge units runs £500 to £1,400. Where a slope has lost a significant area of covering and needs scaffolding, £2,500 to £6,000 is the usual bracket. Every quote separates the make-safe, the access and the repair so that your insurer can see exactly what they are being asked to pay for.",
    faqs: [
      {
        question: "What wind speed counts as a storm for insurance?",
        answer:
          "Most UK insurers define it by gust speed, commonly around 55mph or above, though some use rainfall or snow depth as alternative triggers and the wording differs between policies. Check your own schedule. The Met Office publishes named storm records and regional wind data, and quoting the date and the recorded gust in your claim is a straightforward way to establish that the trigger was met.",
      },
      {
        question: "How soon do I need to report storm damage?",
        answer:
          "As soon as you reasonably can. Most policies require prompt notification and require you to take reasonable steps to prevent further damage, which is exactly what a make-safe is. Leaving it weeks gives the insurer a legitimate argument that the additional damage was avoidable, and it also makes the original cause harder to prove.",
      },
      {
        question: "Can I use my own roofer rather than the insurer's?",
        answer:
          "In most cases yes, though insurers do not always mention it. You may need to get the quote approved before work starts, and if your figure is higher than their panel contractor's they may only pay their rate. Ask the question directly when you report the claim.",
      },
      {
        question: "Is Orpington actually prone to storm damage?",
        answer:
          "More than its reputation suggests. This is a dry part of the country in terms of rainfall, but the south east corner takes the brunt of the serious wind events that reach England - the Great Storm of October 1987 gusted to around 130mph and hit west Kent and Sevenoaks about as hard as anywhere, and Storm Eunice in February 2022 caused widespread damage across the same ground. The exposed high land at Biggin Hill, Downe and Coney Hall sees noticeably more of it than the sheltered valley streets.",
      },
      {
        question: "You are up on the roof anyway - will you check the rest of it?",
        answer:
          "Always, and we include it in the report. Wind damage clusters at ridges, hips and verges, so if one has gone the others deserve inspection. If we find further faults we will photograph them and price them separately, and you can decide whether to include them in the claim or leave them.",
      },
    ],
    related: [
      { href: "/emergency-roof-repairs", label: "Emergency roof repairs" },
      { href: "/roof-repairs", label: "General roof repairs" },
      { href: "/chimney-repairs", label: "Chimney repairs" },
    ],
  },

  // -------------------------------------------------------------- leaks --
  {
    slug: "/roof-leak-repairs",
    serviceName: "Roof Leak Repairs",
    metaTitle: "Roof Leak Repairs In Orpington | LeonEast Roofing",
    metaDescription:
      "Roof leak repairs in Orpington. We trace the leak to where the water actually gets in, show you the photograph, and fix it there. Free survey, 10 year guarantee.",
    h1: "Roof Leak Repairs In Orpington",
    h2: "Is there a stain on the ceiling that keeps coming back?",
    h3: "Leaks traced to their real entry point across Orpington's semis, cottages, conversions and flat-roofed extensions",
    heroPublicId: "roof-leak-repairs-orpington-wet-roof",
    heroAlt: "Rainwater running across the tiles and valley of an older pitched roof",
    intro:
      "The single most useful thing to understand about a roof leak is that water travels. It gets in at a fault, runs along the top of a rafter or across the loft insulation, and emerges at the first point where gravity lets it through - which can easily be three or four metres from where it started. That is why a repair directly above the stain so often fails, and why the same ceiling gets patched three times by three different firms. Finding the actual entry point takes a proper survey of both the roof and the loft, and sometimes a controlled water test. We do not quote until we can point at the fault in a photograph.",
    insight:
      "When a leak repair fails, it is nearly always because someone fixed the ceiling's address rather than the water's.",
    symptoms: [
      {
        sign: "A stain that only appears after heavy rain",
        cause:
          "This part of London gets modest total rainfall but an increasing share of it arrives in short intense bursts. A hairline in a flashing or a single lifted tile will shrug off drizzle for months and then let water in during twenty minutes of proper downpour. The long gaps between appearances are exactly why these faults survive for years.",
      },
      {
        sign: "Damp on a chimney breast, sometimes downstairs",
        cause:
          "Chimney flashings and back gutters fail long before the stack itself does. Water runs down the outside of the flue inside the wall and surfaces a floor or two below the point of entry, which makes chimney leaks the most commonly misdiagnosed of all. Over on the London Clay towards Beckenham, seasonal ground movement makes it more common still.",
      },
      {
        sign: "A mark on a loft conversion ceiling",
        cause:
          "The most awkward leak we deal with. A converted loft leaves almost no void between tile and plasterboard, so water shows up quickly but its route is completely hidden. It usually enters at a dormer cheek junction or at the new valley the conversion created, which are the two details most often rushed.",
      },
      {
        sign: "Damp only in cold weather, with no rain involved",
        cause:
          "Very often this is not a leak at all. It is condensation from a loft that has been over-insulated at the eaves and starved of ventilation, so moist air from the house cannot escape and condenses on cold felt. The fix is airflow, not roofing, and we will tell you so rather than sell you a repair you do not need.",
      },
    ],
    benefits: [
      {
        title: "We find it before we price it",
        text: "The survey covers the roof from above and the loft from within, and where the source is genuinely ambiguous we will run a controlled hose test to prove it. You see the entry point photographed before any figure is mentioned.",
      },
      {
        title: "Comfortable with converted lofts",
        text: "Dormer cheeks, hidden valleys, compressed insulation and no crawl space change how a leak behaves and how it has to be found. Orpington has a great many loft conversions and we have traced water through a great many of them.",
      },
      {
        title: "Condensation ruled in or out first",
        text: "A meaningful share of the damp we are called to is ventilation, not water ingress. Establishing which is which costs nothing on our survey and saves people from paying for the wrong trade entirely.",
      },
      {
        title: "Small jobs priced as small jobs",
        text: "A great many leaks come down to one tile, one flashing or one morning's work. When that is genuinely the fix, that is genuinely the quote. Nobody here is paid a commission for turning a small leak into a large contract.",
      },
      {
        title: "We check what the water has already done",
        text: "Timber that has been damp for a couple of years needs looking at, and insulation that has been wet is no longer insulating. Stopping the water is the job; telling you what it has already cost you is part of doing that job honestly.",
      },
      {
        title: "Ten year written guarantee",
        text: "If water comes back through anything we have repaired, we come back too, at no cost and without an argument, for ten years.",
      },
    ],
    localAngle: {
      h: "Dry weather is why our leaks hide for so long",
      p: "Bromley sits in the rain shadow of the North Downs and records roughly 729mm of rain a year, well under the UK average of something like 1,150mm. It sounds like an advantage, and for the fabric of a building it broadly is. But it produces a very particular kind of leak. Instead of a fault announcing itself in the first wet week, it wets a rafter end slightly a dozen times a year and does its damage across seasons rather than days. By the time a stain appears on a bedroom ceiling in Crofton or Goddington, the timber above it has often been intermittently damp for two or three years. That is why we always look at the loft as well as the roof, and why we tell people that a small mark deserves a survey rather than a pot of stain-block. The mark is the last symptom to arrive, not the first.",
      publicId: "loft-interior-roof-timbers-underlay",
      alt: "Inside a loft space showing rafters, underlay and insulation between the joists",
    },
    whatToLook: [
      {
        h: "Can they show you the entry point?",
        p: "This is the whole trade in one question. A roofer who has found your leak can photograph it. A roofer who is guessing will describe an area rather than a defect, and will use words like 'around the chimney' rather than 'this cracked cement fillet, here'.",
      },
      {
        h: "Did they look inside the loft?",
        p: "The evidence of where water has been running lives on the underside of the roof - dark tracks down rafters, tide marks on felt, damp insulation. A survey that never opened the loft hatch has skipped the half of the job where leaks are actually solved.",
      },
      {
        h: "Have they ruled out condensation?",
        p: "A responsible roofer checks the loft ventilation before selling you a repair, because a good proportion of winter damp is condensation. If nobody has mentioned the word, ask - it is the difference between a £200 vent installation and a wasted £900.",
      },
    ],
    comparison: {
      header: "Tracing the leak against patching the ceiling",
      intro:
        "Both approaches get quoted for the same symptom. The difference in what you get for the money is considerable, and it only becomes obvious the third time the stain comes back.",
      proLabel: "Proper leak trace",
      altLabel: "Patch above the stain",
      rows: [
        {
          label: "What gets inspected",
          pro: "Roof surface, flashings, valleys and the loft interior, plus a water test where the route is unclear.",
          alt: "The area of tiles directly above the mark on the ceiling, usually from a ladder.",
        },
        {
          label: "What gets repaired",
          pro: "The actual entry point, wherever on the roof it turns out to be.",
          alt: "Whatever looked plausible nearby, frequently sealed over with mastic or roofing cement.",
        },
        {
          label: "How long it holds",
          pro: "Permanently, because the water no longer has a way in.",
          alt: "Until the sealant shrinks or cracks, which in a run of hot dry weather can be a single summer.",
        },
        {
          label: "What it costs first time",
          pro: "£220 to £850 for most single-fault leaks including the survey.",
          alt: "£120 to £250, which is genuinely cheaper, once.",
        },
        {
          label: "What it costs by year three",
          pro: "Nothing further, and it is covered by the guarantee.",
          alt: "Three call-outs, three lots of ceiling repair and decorating, and timber that has stayed wet throughout.",
        },
        {
          label: "Effect on the timber above",
          pro: "Dries out and stays dry once the water stops.",
          alt: "Continues to be wetted, which over a few years is how rafter ends and wall plates begin to rot.",
        },
      ],
    },
    teaser: {
      h: "Chimneys are the usual suspect",
      p: "If we had to bet on the source of an unexplained leak in an Orpington house, we would bet on the chimney - the flashings around it, the mortar fillet that so often replaced proper lead, or the flaunching at the top. Stacks on the clay ground over towards Beckenham move seasonally, which opens the joints faster still. There is a full page on how we deal with them.",
      publicId: "chimney-stack-lead-flashing-repair",
      alt: "Brick chimney stack with lead flashing where it meets the tiled roof slope",
      ctaText: "Chimney repairs and flashings",
      ctaHref: "/chimney-repairs",
    },
    costText:
      "Most single-fault leaks in Orpington come in between £220 and £850 once the survey, the access and the repair are counted. A cracked or slipped tile refixed is at the bottom of that range. Renewing a chimney flashing in lead sits in the middle, typically £450 to £950. Rebuilding a failed valley is the expensive end, £900 to £2,200 depending on length and whether the boards beneath have suffered. Where the survey shows condensation rather than ingress, the answer is usually £150 to £400 of ventilation work and no roofing at all.",
    faqs: [
      {
        question: "How do you find a leak you cannot see?",
        answer:
          "By working the problem from both sides. From inside the loft we follow the water tracks back up the rafters and across the underlay to their highest point, which narrows the search considerably. From outside we inspect that zone in detail. Where it is still ambiguous we run a controlled hose test, wetting small sections in sequence with someone watching inside, until the water shows. It is methodical rather than clever, and it works.",
      },
      {
        question: "Why did my last repair not fix it?",
        answer:
          "Almost always because the repair was made where the stain was rather than where the water was getting in. Water can travel several metres along a rafter before it drops. The second most common reason is that mastic or roofing cement was smeared over a defect instead of the defect being properly repaired - that buys a year or two and then cracks, usually after a hot dry spell.",
      },
      {
        question: "Could my damp problem be condensation rather than a leak?",
        answer:
          "Quite possibly. If the damp appears in cold weather rather than after rain, is spread evenly rather than concentrated, or shows as droplets on the underside of the felt, condensation is the likely cause. It has become more common since lofts started being heavily insulated, because insulation stuffed into the eaves blocks the airflow the roof needs. We check for it as standard and the fix is ventilation, not roofing.",
      },
      {
        question: "Will you repair a leak on a loft conversion?",
        answer:
          "Yes, and they are a large part of what we do around here. Conversions introduce new junctions - dormer cheeks, new valleys, flat dormer tops meeting the main slope - and those junctions are where conversion leaks nearly always begin. The tight space makes tracing harder but not impossible, and we will explain exactly what has to be opened up before we start rather than after.",
      },
      {
        question: "Do I need to be at home for the survey?",
        answer:
          "For a leak, yes, ideally - we need access to the loft and to see the affected ceiling from inside. Allow around forty minutes. You will get the photographs and the findings the same day, and there is no charge whether or not you go ahead with the repair.",
      },
    ],
    related: [
      { href: "/roof-repairs", label: "General roof repairs" },
      { href: "/flat-roofing", label: "Flat roofing" },
      { href: "/common-roof-problems", label: "Common roof problems" },
    ],
  },

  // ---------------------------------------------------------- new roofs --
  {
    slug: "/new-roofs",
    serviceName: "New Roofs & Re-Roofing",
    metaTitle: "New Roofs & Re-Roofing In Orpington | LeonEast Roofing",
    metaDescription:
      "New roofs and full re-roofing in Orpington. Stripped back to the rafters, new treated battens, breathable membrane and matching tiles. Fixed price, 10 year guarantee.",
    h1: "New Roofs & Re-Roofing In Orpington",
    h2: "Has your roof reached the end rather than had a bad year?",
    h3: "Full strip and re-cover on Orpington's interwar semis, postwar estate housing and older village properties",
    heroPublicId: "new-roof-reroofing-orpington-tiles",
    heroAlt: "Newly laid clay roof tiles on the pitched roof of a house",
    intro:
      "A re-roof is the largest single piece of maintenance most houses ever have, and it is worth understanding what you are buying. The tiles are the visible part and usually the least of it. What actually determines whether a roof lasts twenty years or sixty is the timber beneath - the battens, the membrane, the eaves detail, the ventilation - and none of that is visible once the job is finished. That is precisely why it is the part cheap quotes economise on. We price the whole system, explain each layer, and invite you to look at the roof once it is stripped and before it is covered, which is the only moment you will ever be able to see what you paid for.",
    insight:
      "Two re-roofing quotes on the same Orpington semi can differ by four thousand pounds, and the difference is almost never the tiles. It is the battens, the membrane and whether the scaffolding was included honestly.",
    symptoms: [
      {
        sign: "You have paid for three or four repairs in a few years",
        cause:
          "Individual faults appearing in new places is how a covering announces that it has reached the end as a system rather than in one spot. At that point each repair buys less time than the last, and you are effectively paying for a new roof in instalments while getting no guarantee at the end of it.",
      },
      {
        sign: "The tiles are flaking, crumbling or losing their surface",
        cause:
          "Concrete interlocking tiles, which cover most of the postwar estate housing through the Cray valley and out towards Swanley, have a surface coating that eventually wears away. Once it goes the tile becomes porous, gains weight when wet and starts breaking up at the nose. Nothing can be done for a tile in that condition.",
      },
      {
        sign: "You can see daylight through the felt from the loft",
        cause:
          "Bitumen felt goes brittle with age and heat and eventually tears into strips between the rafters. It was the roof's second line of defence and it has stopped being one. On its own this is not urgent, but combined with a tired covering it makes the case for doing the job properly rather than continuing to patch.",
      },
      {
        sign: "Sagging or dipping along the ridge or between rafters",
        cause:
          "This needs looking at promptly. It can be as simple as failed battens, but it can also mean rot in the rafter feet or wall plate, or a structural problem from an old alteration. It is one of the few roofing symptoms where waiting to see what happens is genuinely the wrong choice.",
      },
    ],
    benefits: [
      {
        title: "Full strip, so we can see what we are working on",
        text: "We take the covering back to the rafters. Overlaying a new roof on top of an old one is quicker and cheaper, and it hides every problem underneath while adding load the structure was never designed to carry. We do not do it.",
      },
      {
        title: "Treated battens, correctly graded",
        text: "Battens are the cheapest component in a roof and the one most often downgraded to win a quote. Untreated or undersized battens are exactly why so many postwar roofs around the Crays and Swanley need doing again after forty years. Ours are graded and treated, and you are welcome to inspect them.",
      },
      {
        title: "Breathable membrane and real ventilation",
        text: "Modern breathable underlay lets moisture out of the roof space instead of trapping it, which matters enormously in a house that has since been heavily insulated. We detail the eaves and ridge ventilation to suit the actual roof rather than fitting whatever is standard.",
      },
      {
        title: "Dry ridge and dry verge where it is the better answer",
        text: "Mechanically fixed ridge and verge systems do not depend on mortar and do not fail the way mortar does. On exposed ground - Biggin Hill, Coney Hall, the top of West Wickham - we would generally recommend them. On a conservation street where appearance is controlled, traditional bedding may be the right call instead, and we will say which and why.",
      },
      {
        title: "Matching the street, not just the house",
        text: "In an Area of Special Residential Character or a conservation area, and frankly on any consistent 1930s road, the roof needs to sit properly among its neighbours. We will show you samples on the roof in daylight before ordering, because tiles never look the same in a yard as they do at height.",
      },
      {
        title: "One fixed price, and a date",
        text: "Materials, labour, scaffolding, skip and disposal all itemised, with a start date and a realistic duration. A standard semi is generally four to seven working days depending on weather and complexity.",
      },
    ],
    localAngle: {
      h: "Orpington built its roofs in three big waves",
      p: "The railway improvements of 1904 turned a Kentish village into a commuter town, and house building peaked hard through the 1920s and 30s - which is why Crofton, Poverest, Goddington and Ramsden are largely one continuous run of bay-fronted semis with hipped clay tile roofs. Petts Wood went up in the same decade as a planned garden suburb, with hung tiles and half-timbered gables that behave quite differently. Then the postwar decades filled the Cray valley and Swanley with estate housing under concrete interlocking tiles. Each wave is now reaching the end of a predictable life at more or less the same moment, street by street. That is genuinely useful when we are pricing a re-roof, because we already know what is likely to be under the tiles on your road before we lift the first one - and it is why we can usually tell you on the survey whether the battens are going to be a pleasant surprise or an expensive one.",
      publicId: "1930s-semi-detached-houses-street-orpington",
      alt: "A row of 1930s semi-detached houses with hipped tiled roofs on a suburban street",
    },
    whatToLook: [
      {
        h: "Does the quote say what the battens are?",
        p: "It should specify graded, treated battens to the current British Standard, with a size. A quote that says 'new battens' and nothing else is leaving itself room. This is the single most reliable way to tell a proper re-roofing quote from a cheap one.",
      },
      {
        h: "Is the scaffolding in the price, and for how long?",
        p: "Scaffold hire is typically £900 to £1,800 on a semi and is charged by the period. Find out whether it is included, what happens if bad weather extends the job, and who pays for the extension. Ambiguity here is where re-roofing budgets go wrong.",
      },
      {
        h: "Can you see the roof once it is stripped?",
        p: "Ask to be shown the bare rafters before the new membrane goes on. Any firm doing the job properly will be pleased to show you, because it is the best possible demonstration of what you are paying for. Reluctance at this point tells you a great deal.",
      },
    ],
    comparison: {
      header: "Clay, concrete or slate on an Orpington roof",
      intro:
        "The right covering depends on what the house is, what the street looks like and how long you intend to be there. These are the trade-offs as they actually apply around here.",
      proLabel: "Clay tiles",
      altLabel: "Concrete tiles",
      rows: [
        {
          label: "How long they last",
          pro: "Sixty to a hundred years and often more. Plenty of 1930s clay tiles around Crofton are perfectly serviceable today and get reused.",
          alt: "Forty to sixty years. The postwar estate roofs through the Crays are reaching that point now, which is why so many are being done.",
        },
        {
          label: "How they age",
          pro: "They weather and mellow. A clay roof generally looks better at forty than at four.",
          alt: "The surface coating erodes, colour fades unevenly and the tile becomes porous. Concrete rarely improves with age.",
        },
        {
          label: "Weight on the structure",
          pro: "Lighter, which matters on older roofs and on anything with a history of alteration.",
          alt: "Heavier, and heavier still once porous and wet. Occasionally a genuine structural consideration on an older property.",
        },
        {
          label: "Cost of materials",
          pro: "Higher, commonly 30 to 60 per cent more than the concrete equivalent.",
          alt: "The economical choice, and a large part of why postwar housing used it in the first place.",
        },
        {
          label: "In a conservation area or ASRC",
          pro: "Usually what the council expects to see, particularly on older properties and in the Downs villages.",
          alt: "Frequently refused on protected streets, and rarely a good visual match on a pre-war house.",
        },
        {
          label: "Best suited to",
          pro: "Interwar and older houses, protected streets, and anyone intending to stay put and do the job once.",
          alt: "Postwar estate housing where it matches the neighbours, and situations where budget is the deciding factor.",
        },
      ],
    },
    teaser: {
      h: "What a re-roof actually costs",
      p: "We have set out full figures on the cost page - a broken-down price for a standard Orpington semi, what a hipped roof adds over a gabled one, what scaffolding runs to, and the handful of things found under the tiles that legitimately change a price mid-job. Knowing all of that before you collect quotes makes comparing them very much easier.",
      publicId: "roofers-working-on-new-roof-scaffolding",
      alt: "Roofers laying battens and membrane on a stripped roof from scaffolding",
      ctaText: "See the full cost guide",
      ctaHref: "/roof-repair-cost",
    },
    costText:
      "A full strip and re-cover on a typical three-bedroom Orpington semi generally lands between £7,000 and £14,000, including scaffolding, new treated battens, breathable membrane, disposal and the tiles themselves. A hipped roof costs more than a gabled one of the same footprint because there is more cutting and more ridge and hip work. Natural slate pushes the top of that range considerably higher. Detached houses and anything with dormers, valleys or multiple levels are priced individually, because on those roofs an average figure is close to meaningless.",
    faqs: [
      {
        question: "How long does a re-roof take?",
        answer:
          "A standard semi is usually four to seven working days from the scaffold going up to it coming down. A detached house with hips and dormers is more like seven to twelve. Weather is the main variable - we will not strip a roof we cannot get covered again the same day, so a wet fortnight genuinely does extend things. You get a realistic duration on the quote, not an optimistic one.",
      },
      {
        question: "Do I need planning permission to re-roof my house?",
        answer:
          "Not for a like-for-like replacement in the same material, anywhere in the borough - that is repair and maintenance. Permission comes into it if you change the material or the appearance, or alter the shape. That is much more likely to bite in one of Bromley's 47 conservation areas or 13 Areas of Special Residential Character, and the council has Article 4 directions covering upward extensions in 16 areas across eleven wards. Building regulations are separate from planning and generally do apply to a full re-roof, particularly around insulation and structure. We will tell you which applies to your house before you commit to anything.",
      },
      {
        question: "Can I stay in the house while the work is done?",
        answer:
          "Yes, almost always. It is noisy during the day and there will be scaffolding across your windows, but the house stays weatherproof throughout - we never leave a roof open overnight. You will want to move anything precious out of the loft, because dust gets everywhere once the old felt comes off.",
      },
      {
        question: "Will you reuse my existing tiles?",
        answer:
          "Where they are sound, often yes, and on an older clay roof it can be well worth it - reclaimed tiles from the same roof match perfectly and reduce the material cost. Expect to lose ten to twenty per cent to breakage during stripping, and to buy in the difference. Concrete tiles that have started to delaminate are not worth reusing and we will say so.",
      },
      {
        question: "What might change the price once you have started?",
        answer:
          "Only what is genuinely hidden under the covering, and there are really three things: rotten rafter feet or wall plate, a chimney in worse condition than it looked from below, and structural alterations from a previous conversion that were never done properly. We flag all three as possibilities on the quote with indicative costs, so that if we do find one it is a conversation rather than an ambush.",
      },
      {
        question: "Do you offer any guarantee on a new roof?",
        answer:
          "Ten years on our workmanship, in writing, plus whatever the manufacturer offers on the tiles and membrane - which on most modern systems is considerably longer. You get both documents at completion, along with the photographs taken at each stage of the job.",
      },
    ],
    related: [
      { href: "/tiling-and-slating", label: "Tiling and slating" },
      { href: "/roof-repair-cost", label: "Roof and re-roofing costs" },
      { href: "/flat-roofing", label: "Flat roofing" },
    ],
  },

  // -------------------------------------------------------- flat roofs --
  {
    slug: "/flat-roofing",
    serviceName: "Flat Roofing",
    metaTitle: "Flat Roofing In Orpington | EPDM, GRP & Felt | LeonEast",
    metaDescription:
      "Flat roofing in Orpington - EPDM rubber, GRP fibreglass and high performance felt on extensions, dormers and garages. Free survey and a 10 year guarantee.",
    h1: "Flat Roofing In Orpington",
    h2: "Is the flat roof on your extension past its best?",
    h3: "EPDM, GRP and torch-on felt on rear additions, dormers, garages and porches across the BR postcodes",
    heroPublicId: "flat-roofing-orpington-extension",
    heroAlt: "A modern flat roof on a single storey rear extension of a house",
    intro:
      "Flat roofing is a genuinely separate trade from tiling, with different materials, different failure modes and different skills, and a firm that treats it as a sideline usually shows it. It also causes a disproportionate share of the leaks we attend, because a flat roof has no pitch to shed water in a hurry and therefore no tolerance for a poorly made joint. The good news is that the materials available now are far better than the three-layer felt that covers most of the older extensions around Orpington. A properly installed EPDM or fibreglass roof should outlast the extension's second kitchen.",
    insight:
      "Ninety per cent of the flat roof failures we see start at an edge, an upstand or an outlet. Almost none of them start in the middle, which is the part everyone looks at.",
    symptoms: [
      {
        sign: "Water sitting on the roof days after rain",
        cause:
          "Ponding means the fall is inadequate or the deck has sagged. Standing water is not immediately fatal but it accelerates everything - it works at any weakness, adds load, and in winter it freezes and expands inside any small split it finds. A flat roof should be laid to a fall for exactly this reason.",
      },
      {
        sign: "Blisters or bubbles in the surface",
        cause:
          "Moisture trapped beneath the covering turns to vapour in the sun and lifts it. Very common on older felt roofs after the sort of hot, dry spells this part of the country now gets regularly. A blister is not yet a leak, but it is a covering that has lost its bond and is on a timetable.",
      },
      {
        sign: "Cracks around the edges or where the roof meets a wall",
        cause:
          "The upstand - where the flat roof turns up against brickwork - is the single most common failure point, because it is the detail that takes the most movement and the most careless workmanship. Mineral felt goes brittle here first, and mastic smeared over it is a repair with a twelve month life.",
      },
      {
        sign: "A damp patch on the ceiling below the extension",
        cause:
          "On a flat roof the water tends to appear reasonably close to where it entered, which is at least helpful. What is less helpful is that the deck and insulation between can hold a great deal of water before any of it shows, so by the time you see a stain the timber above has usually been wet for a while.",
      },
    ],
    benefits: [
      {
        title: "The right system for the actual roof",
        text: "EPDM, GRP and torch-on felt each suit different situations, and anyone who only ever fits one of them will recommend it for everything. We will explain which we would use on your roof and why, including where the cheapest option is genuinely the sensible one.",
      },
      {
        title: "Falls corrected, not covered over",
        text: "If water has been ponding, laying a new covering over the same flat deck simply reproduces the problem in a newer material. Where the fall is wrong we build it right with tapered insulation or firrings, and we will show you the levels.",
      },
      {
        title: "Edges, upstands and outlets detailed properly",
        text: "This is where flat roofs fail and it is where the time goes. Trims mechanically fixed, upstands taken high enough and terminated correctly, outlets sized for the area they drain. It is unglamorous and it is the entire difference between fifteen years and thirty.",
      },
      {
        title: "The deck inspected before anything covers it",
        text: "We lift the old covering and look at the boards. Wet chipboard from the seventies has no business being under a new roof, and finding it after the covering is on helps nobody. If it needs replacing we will tell you at that point, with a photograph.",
      },
      {
        title: "Insulation upgraded while it is open",
        text: "A flat roof is only ever opened up every few decades, so it is much the best moment to improve it. Bringing the insulation up to current standards costs relatively little as part of the same job and makes a noticeable difference to a room that has always been cold in winter and hot in July.",
      },
      {
        title: "Ten years on our workmanship",
        text: "Plus the manufacturer's own guarantee on the membrane, which on a quality EPDM or GRP system typically runs to twenty years or more. Both handed over in writing at completion.",
      },
    ],
    localAngle: {
      h: "Why Orpington's dry summers are hard on flat roofs",
      p: "This is one of the sunniest and driest corners of the country, and while that suits a tiled roof it is genuinely tough on a flat one. A dark felt roof in full sun can reach surface temperatures far above the air temperature, and it does that repeatedly, all summer, year after year. Bitumen responds by losing its volatiles, going hard and eventually cracking, and it tends to do so at exactly the points that also have to absorb movement - the upstands and the edges. Then the first serious autumn downpour finds every crack at once. It is why so many of our flat roof emergencies cluster in September and October rather than in midwinter, and it is a strong argument for EPDM around here: rubber stays flexible through the heat in a way that ageing felt simply does not.",
      publicId: "flat-roof-membrane-detail-upstand",
      alt: "Detail of a flat roof membrane turned up against a brick wall at an upstand",
    },
    whatToLook: [
      {
        h: "Which system are they proposing, and why that one?",
        p: "There should be a reason specific to your roof - its size, its shape, whether it is walked on, how many penetrations it has, whether there is a complicated junction with the house. 'It's what we always use' is not a reason, it is a habit.",
      },
      {
        h: "Are they fixing the fall or just recovering?",
        p: "If the roof has been ponding, ask directly what they intend to do about it. A new covering laid on the same inadequate fall will pond exactly as before. Correcting it costs more and is usually worth every penny.",
      },
      {
        h: "What does the guarantee actually cover?",
        p: "Flat roofing has two guarantees - the manufacturer's on the material and the installer's on the workmanship - and material warranties are often void unless installed by an approved fitter. Ask for both in writing, and check whether the material one survives if the installer disappears.",
      },
    ],
    comparison: {
      header: "EPDM against fibreglass, in practice",
      intro:
        "These are the two systems we fit most, and the choice between them comes down to the shape of the roof and how it is going to be used rather than to one being simply better.",
      proLabel: "EPDM rubber",
      altLabel: "GRP fibreglass",
      rows: [
        {
          label: "Realistic lifespan",
          pro: "Thirty to fifty years. It is a single sheet of rubber with very few joints to fail.",
          alt: "Twenty five to thirty years. One continuous resin and glass laminate, cured in place.",
        },
        {
          label: "How it copes with heat",
          pro: "Stays flexible through the temperature swings, which is its strongest argument in this part of the country.",
          alt: "Rigid once cured. Sound, but it relies on the deck beneath being stable and properly detailed at movement joints.",
        },
        {
          label: "Simple rectangular roofs",
          pro: "Ideal - one sheet, minimal jointing, quick and clean to install.",
          alt: "Perfectly good, though there is little benefit over EPDM on a plain rectangle.",
        },
        {
          label: "Complicated shapes and penetrations",
          pro: "Workable but needs more jointing and detailing around every obstruction.",
          alt: "Better. Being laid wet, it forms itself around awkward shapes, pipes and upstands as one continuous skin.",
        },
        {
          label: "Being walked on",
          pro: "Fine for occasional maintenance access. A walkway layer is advisable for regular use.",
          alt: "Hard-wearing, and the better choice for a balcony or any roof that gets genuine foot traffic.",
        },
        {
          label: "Weather needed to install",
          pro: "Tolerant. It can go down in most conditions short of actual rain.",
          alt: "Fussy. The resin needs dry conditions and a reasonable temperature to cure properly, which can mean waiting.",
        },
        {
          label: "Typical cost per square metre",
          pro: "£90 to £130 supplied and fitted, including tear-off and disposal.",
          alt: "£110 to £160 supplied and fitted. Higher labour content, so complexity moves the figure more.",
        },
      ],
    },
    teaser: {
      h: "Dormers are flat roofs in disguise",
      p: "The top of a dormer is a small flat roof in an awkward position, and around Orpington - where a great many lofts have been converted - it is one of the commonest sources of a mystery leak. The junction where the dormer's flat top meets the main tiled slope has to be right, and on a hurried conversion it very often was not. We deal with both sides of that junction.",
      publicId: "dormer-window-flat-roof-loft-conversion",
      alt: "A flat-roofed dormer window projecting from a tiled pitched roof",
      ctaText: "How we trace conversion leaks",
      ctaHref: "/roof-leak-repairs",
    },
    costText:
      "A typical single-storey rear extension roof of around 15 square metres runs to roughly £1,600 to £2,400 in EPDM, or £1,900 to £2,900 in GRP, both including stripping the old covering and disposing of it. A single garage at around 18 square metres is £1,800 to £2,800. Replacing a wet or failed deck adds £25 to £45 per square metre, and upgrading the insulation while the roof is open typically adds £400 to £900 for an extension of that size - which is usually money very well spent.",
    faqs: [
      {
        question: "How long should a flat roof last?",
        answer:
          "It depends entirely on the system. The old three-layer bitumen felt found on most extensions built before the 1990s realistically managed fifteen to twenty years, which is why so many are failing now. Modern high performance torch-on felt gets twenty to twenty five. GRP fibreglass is good for twenty five to thirty, and a well-installed EPDM membrane should see thirty to fifty. In every case the detailing at the edges matters more than the material in the middle.",
      },
      {
        question: "Can you repair a flat roof or does it need replacing?",
        answer:
          "A localised split, a lifted edge trim or a failed outlet can absolutely be repaired, and if the rest of the covering is sound that is what we will recommend. What does not work is patching a covering that has reached the end of its life - once felt has gone brittle across the whole area, each patch simply moves the failure a metre to the left. We will tell you honestly which situation you are in, with photographs.",
      },
      {
        question: "Do I need building regulations approval for a flat roof?",
        answer:
          "If you are replacing more than half the area of the roof, building regulations generally apply and the roof usually has to be brought up to current insulation standards as part of the work. A straightforward repair does not trigger it. It is worth knowing before you get quotes, because a quote that ignores the insulation requirement is not comparable with one that includes it.",
      },
      {
        question: "Why does my flat roof hold water after rain?",
        answer:
          "Because the fall is insufficient or the deck has deflected. A flat roof is not actually flat - it should be laid to a fall of at least 1 in 80 so water runs off. Older extensions around here were frequently built with a nominal fall that has since been lost as the timbers settled. We correct it with tapered insulation or new firrings rather than laying a new covering over the same problem.",
      },
      {
        question: "Can I put solar panels or a roof terrace on it?",
        answer:
          "Sometimes, but it is a structural question before it is a roofing one. Neither should be added without knowing what the deck and joists were designed to carry, and a terrace also needs a walkable surface and proper edge protection. If that is the plan, tell us at the survey and we will specify the roof accordingly and tell you whether a structural engineer needs to look at it.",
      },
    ],
    related: [
      { href: "/roof-leak-repairs", label: "Roof leak repairs" },
      { href: "/guttering-fascias-and-soffits", label: "Guttering and roofline" },
      { href: "/roof-repair-cost", label: "Costs explained" },
    ],
  },

  // ------------------------------------------------------ tiling/slate --
  {
    slug: "/tiling-and-slating",
    serviceName: "Tiling & Slating",
    metaTitle: "Roof Tiling & Slating In Orpington | LeonEast Roofing",
    metaDescription:
      "Roof tiling and slating in Orpington - clay, concrete, natural slate and Kentish peg tiles matched and laid properly. Free survey, fixed price, 10 year guarantee.",
    h1: "Roof Tiling & Slating In Orpington",
    h2: "Does your roof need work that has to look right as well as be right?",
    h3: "Clay, concrete, natural slate and handmade peg tiles, matched to the house and laid to last",
    heroPublicId: "roof-tiling-slating-orpington-clay-tiles",
    heroAlt: "Rows of weathered clay roof tiles seen close up on a pitched roof",
    intro:
      "Around Orpington you will find four quite different roof coverings within a couple of miles of each other, and each one wants handling in its own way. Machine-made clay tiles cover the interwar streets. Concrete interlocking tiles cover the postwar estates. Natural slate turns up on the Victorian and Edwardian houses towards Chislehurst and Beckenham. And out in the Kentish villages there are still handmade peg tiles that have been on the same roof for two hundred years. Getting a repair or a re-cover to look right means knowing which is which, sourcing to match, and laying it the way that covering expects to be laid.",
    insight:
      "The difference between a repair that disappears and one you can spot from the pavement is almost always sourcing, not skill. Finding the right tile takes longer than fitting it.",
    symptoms: [
      {
        sign: "Three bright new tiles in the middle of a weathered roof",
        cause:
          "Somebody used the nearest available match rather than the right one. It cannot be undone without redoing the work, and on a consistent 1930s road it stands out for as long as the roof lasts. It is the most common evidence of a rushed repair that we come across.",
      },
      {
        sign: "Slates slipping one or two at a time",
        cause:
          "Classic nail fatigue, and it is what eventually happens to every slate roof. The slates are fine - Welsh slate outlives everybody - but the iron or steel nails holding them corrode and snap. Once it starts across a slope, individual refixing is a losing battle and the answer is usually a strip and re-lay of the sound slates.",
      },
      {
        sign: "Tiles lifting or rattling in the wind",
        cause:
          "Insufficient nailing, which was normal historic practice, plus decades of exposure. Current guidance calls for far more mechanical fixing than 1930s builders used, and on the exposed ground towards Biggin Hill and Coney Hall that gap between old practice and modern standards is exactly where wind damage happens.",
      },
      {
        sign: "Moss growing thickly across the north slope",
        cause:
          "Cosmetic to begin with, and this borough's tree cover means almost every north-facing slope has some. It becomes a real problem when it holds moisture against the tile through winter frosts, and when it washes down and blocks the gutters. Worth clearing carefully - never with a pressure washer, which strips the tile surface and takes years off the roof.",
      },
    ],
    benefits: [
      {
        title: "We source to match, even when it is slow",
        text: "Reclaimed clay tiles, discontinued concrete profiles, second-hand Welsh slate and handmade Kentish pegs are all obtainable if you know where to look and are prepared to wait a few days. We would rather tell you the job starts on Thursday than start on Monday with the wrong tile.",
      },
      {
        title: "Peg tiles handled as peg tiles",
        text: "The older properties out towards Chelsfield, Downe and the Farnborough High Street end still carry handmade peg tiles, hung on oak pegs or nails at a steep pitch. They are laid differently, they break differently and they are not interchangeable with anything modern. Not every firm around here will take them on.",
      },
      {
        title: "Slate work done as slate work",
        text: "Slating is its own discipline - holed and hung, not nailed like a tile, with proper head lap set for the pitch and the exposure. Repairs using tingles are a legitimate technique when done well and a bodge when done badly, and we will explain which we are proposing.",
      },
      {
        title: "Fixed to current standards, not 1935 practice",
        text: "Modern fixing specifications call for considerably more nailing and clipping than the original builders used, and on exposed sites the difference is what keeps a roof on. We fix to the current standard as a matter of course, and it is itemised on the quote.",
      },
      {
        title: "Careful moss and debris removal",
        text: "By hand and with soft brushes, gutters cleared, and no pressure washer anywhere near your tiles. Pressure washing a clay or concrete tile removes its surface and takes years off it, and it is genuinely one of the most damaging things done to roofs in this country.",
      },
      {
        title: "Ten year written workmanship guarantee",
        text: "On tiling, slating, repairs and re-covers alike, handed over as a document at completion along with the photographs from each stage.",
      },
    ],
    localAngle: {
      h: "Four roof coverings within three miles",
      p: "It is unusual to find this much variety in one service area, and it comes from Orpington having been several things in quick succession. The Kentish villages at Chelsfield, Downe and Cudham were here long before London arrived, and some still wear handmade clay peg tiles on steep pitches. The Victorian and Edwardian expansion out towards Chislehurst and Beckenham brought Welsh slate in on the railways. The great interwar boom of the 1920s and 30s covered Crofton, Poverest and Goddington in machine-made clay tiles, mostly hipped, mostly mortar-bedded. Then the postwar decades filled the Cray valley and Swanley with concrete interlocking tiles. A roofer working this patch needs all four in their hands, and needs to know that a technique which is correct on one is wrong on the next.",
      publicId: "natural-slate-roof-victorian-house",
      alt: "Natural slate roof and brick chimney on a Victorian house",
    },
    whatToLook: [
      {
        h: "Can they show you the tile before it goes on?",
        p: "Ask to see a sample on the roof, in daylight, against the existing covering. Tiles look completely different in a yard, in a photograph and at height. Any firm that would rather not do this is not confident in the match.",
      },
      {
        h: "How are they fixing it?",
        p: "There is a right answer for every pitch and exposure, and it is written down in the British Standard. A roofer should be able to tell you how many nails or clips per tile they are using and why, particularly on the exposed high ground in this borough.",
      },
      {
        h: "What are they doing about the moss?",
        p: "If the answer involves a pressure washer, find someone else. It strips the surface off clay and concrete tiles, forces water under the laps, and is responsible for a great deal of the premature tile failure we are called to look at.",
      },
    ],
    comparison: {
      header: "Natural slate against clay tile",
      intro:
        "Both turn up on this patch and both are excellent. Which is right for a given house is usually settled by what is already there and what the street looks like, but the practical differences are worth knowing.",
      proLabel: "Natural slate",
      altLabel: "Clay tile",
      rows: [
        {
          label: "How long it lasts",
          pro: "The slate itself, eighty to a hundred and fifty years. It is nearly always the nails that fail first, not the slate.",
          alt: "Sixty to a hundred years. Plenty of Orpington's 1930s clay is still perfectly sound today.",
        },
        {
          label: "Minimum pitch",
          pro: "Works down to about 20 degrees with the right head lap, so it suits shallower Victorian roofs.",
          alt: "Generally wants 35 degrees or more for plain tiles, which is why the interwar roofs here are as steep as they are.",
        },
        {
          label: "Weight",
          pro: "Moderate, and lighter than most concrete. Rarely a structural problem on a roof designed for it.",
          alt: "Similar to slate for plain tiles. Both are lighter than aged, porous concrete.",
        },
        {
          label: "Repairability",
          pro: "Individual slates can be replaced, though it needs a tingle or a cut nail and a certain amount of care.",
          alt: "Very straightforward. A single tile lifts out and a matching one goes in, which is why most of our small repairs are on tile.",
        },
        {
          label: "Cost to supply and fit",
          pro: "£110 to £190 per square metre. Welsh slate sits at the top of that; imported slate is cheaper but quality varies considerably.",
          alt: "£75 to £130 per square metre for machine-made clay. Handmade peg tiles are considerably more.",
        },
        {
          label: "Where you find it around here",
          pro: "Victorian and Edwardian houses towards Chislehurst, Beckenham and the older parts of Bromley.",
          alt: "The interwar streets - Crofton, Poverest, Goddington, Petts Wood - and the Kentish villages in handmade form.",
        },
      ],
    },
    teaser: {
      h: "When the whole covering has had enough",
      p: "Tiling and slating repairs make sense while the covering as a whole is sound. Once the tiles themselves are breaking up, or the battens beneath will not hold a nail, the sensible money goes on doing the roof properly rather than on another patch. The re-roofing page sets out how we judge that line and what a full strip and re-cover involves.",
      publicId: "stripped-roof-battens-membrane-reroof",
      alt: "A roof stripped back to new battens and breathable membrane during re-roofing",
      ctaText: "New roofs and re-roofing",
      ctaHref: "/new-roofs",
    },
    costText:
      "Replacing a handful of broken or slipped tiles is generally £180 to £450 including access. Refixing a slipped slate with a tingle sits in the same bracket. Stripping and re-laying a single slope in reclaimed slate runs £2,500 to £5,500 depending on size and how much of the original stock survives the strip. Re-covering in new clay tile is £75 to £130 per square metre supplied and fitted; natural slate is £110 to £190. Careful hand moss removal with the gutters cleared is £250 to £600 for a standard semi.",
    faqs: [
      {
        question: "Can you match the tiles on my 1930s house?",
        answer:
          "In almost all cases, yes. The interwar streets around Crofton, Poverest and Goddington used a relatively small range of machine-made clay tiles, and reclaimed stock in those patterns is readily available through salvage yards. It occasionally takes a few days to source the right one, which we would always rather do than fit something close-but-not-quite that you will look at for the next fifty years.",
      },
      {
        question: "What are Kentish peg tiles and do you work with them?",
        answer:
          "They are small handmade clay tiles, traditionally hung on oak pegs through holes at the head rather than nailed, and laid at a steep pitch. You will find them on the older properties in the villages around here - Chelsfield, Downe, Cudham and parts of Farnborough High Street. They are brittle, they are irregular, and they are not interchangeable with modern plain tiles. We do work with them, and reclaimed pegs are obtainable, though both the sourcing and the labour cost more than standard tiling.",
      },
      {
        question: "My slates keep slipping. Does the whole roof need doing?",
        answer:
          "Not necessarily, but the pattern matters. One or two slates over a few years is normal ageing and worth refixing individually. Several a year, in different places across the same slope, means the nails have reached the end as a batch - and once nail fatigue is general, individual repairs stop being economical. The usual answer then is to strip the slope, keep the sound slates, and re-lay them on new battens with new fixings, which is considerably cheaper than buying all new slate.",
      },
      {
        question: "Should I have the moss cleaned off my roof?",
        answer:
          "Usually yes, but only by hand. Bromley is one of the greenest London boroughs and north-facing slopes here grow moss readily. Left alone it holds moisture against the tile through winter frosts and washes into the gutters. Cleared by hand with soft brushes it is a straightforward job. Cleared with a pressure washer, it will take the surface off your tiles and years off the roof, and no reputable roofer will do it that way.",
      },
      {
        question: "Are dry ridge and dry verge systems better than mortar?",
        answer:
          "Mechanically, yes - they are fixed rather than bedded, they do not crack with movement, and they allow ventilation at the ridge. On the exposed high ground at Biggin Hill, Coney Hall and the top of West Wickham we would generally recommend them. The exception is where appearance is controlled, in a conservation area or one of the borough's Areas of Special Residential Character, where traditional bedding may be what the council expects to see. We will tell you which applies to your street.",
      },
    ],
    related: [
      { href: "/new-roofs", label: "New roofs and re-roofing" },
      { href: "/roof-repairs", label: "Roof repairs" },
      { href: "/common-roof-problems", label: "Common roof problems" },
    ],
  },

  // ----------------------------------------------------------- chimney --
  {
    slug: "/chimney-repairs",
    serviceName: "Chimney Repairs",
    metaTitle: "Chimney Repairs In Orpington | LeonEast Roofing",
    metaDescription:
      "Chimney repairs in Orpington - lead flashings, repointing, flaunching, rebuilds and removals. The most misdiagnosed leak on any roof. Free survey, 10 year guarantee.",
    h1: "Chimney Repairs In Orpington",
    h2: "Is the damp in your house actually coming from the stack?",
    h3: "Flashings, repointing, flaunching, rebuilds and removals across Orpington and the surrounding boroughs",
    heroPublicId: "chimney-repairs-orpington-brick-stack",
    heroAlt: "Brick chimney stack rising above a tiled roof against a grey sky",
    intro:
      "If we had to name the most commonly misdiagnosed source of damp in a house, it would be the chimney - and it is not close. A stack stands proud of the roof on all four sides, takes weather from every direction, is held together by mortar that is often a century old, and connects to the roof through a lead detail that plenty of builders replaced with a smear of sand and cement at some point in the 1980s. Water that gets in there runs down inside the flue or the brickwork and appears on a wall a floor or two below, which is why so many people spend money on the wrong wall entirely.",
    insight:
      "When somebody rings us about damp on a chimney breast that two other trades have already looked at, the fault is at the top of the stack more often than not.",
    symptoms: [
      {
        sign: "A damp patch on the chimney breast in a bedroom",
        cause:
          "The classic sign, and it usually means water is getting in at the top - failed flaunching, open joints in the brickwork, or a cracked pot - and running down inside the flue until it finds a way through the plaster. The stain often appears well below the roof line, which is what sends people looking in the wrong place.",
      },
      {
        sign: "A cement fillet cracked away from the brickwork",
        cause:
          "A great many stacks around here had their lead flashings replaced with a triangular fillet of sand and cement, because it is quicker and cheaper. Cement is rigid, the stack and roof move independently, and the fillet always cracks in the end. It is one of the most reliable leak sources we find.",
      },
      {
        sign: "Crumbling or missing mortar between the bricks",
        cause:
          "Stacks weather far faster than walls because they are exposed on all sides and have no roof of their own. Once the pointing has eroded, wind-driven rain goes straight into the brickwork. On a stack that also gets flue gases and condensation from inside, the decay accelerates.",
      },
      {
        sign: "White staining or salts on the brickwork",
        cause:
          "Efflorescence - salts carried out of the masonry by water moving through it. It is not damaging in itself but it is proof that water is passing through the brickwork rather than running off it, which means the stack needs attention before frost gets into the same water.",
      },
    ],
    benefits: [
      {
        title: "Lead, properly dressed, not cement",
        text: "Flashings should be lead, of the right code, dressed into the brickwork and wedged into a raked-out joint. It flexes with the movement between the stack and the roof, which cement cannot. It also lasts several decades rather than a handful of years.",
      },
      {
        title: "Repointed in the right mortar",
        text: "The mix matters. Modern hard cement mortar on soft old brickwork traps moisture and pushes the decay into the bricks themselves, which is far more expensive to put right. On older stacks around the villages we use a softer lime-based mix, as the brick requires.",
      },
      {
        title: "Flaunching renewed while we are up there",
        text: "The sloped mortar bed that holds the pots is the most exposed square metre on your house and it cracks with age. Renewing it is inexpensive when the access is already paid for and a nuisance when it is not, so we always price it as part of the same visit.",
      },
      {
        title: "Honest about removal",
        text: "If the chimney is redundant, taking it down to below the roof line and tiling over can be the sensible economic answer, and we will say so. It is also irreversible and it changes the look of the house, so we will set out both sides rather than steering you.",
      },
      {
        title: "Capped correctly if it is out of use",
        text: "An unused flue still needs to breathe, or it will sweat and bring damp into the room below. Capping means a vented cowl and a vent left at the bottom, not a slab of concrete over the top. Getting this wrong causes damp in a great many houses.",
      },
      {
        title: "Ten year written guarantee",
        text: "On flashings, pointing, flaunching and rebuilds alike. Handed over as a document, with photographs of the work from beginning to end.",
      },
    ],
    localAngle: {
      h: "Clay ground moves, and chimneys feel it first",
      p: "Our patch sits across two quite different subsoils, and it makes a real difference to chimney work. Orpington itself and the ground rising south of it is on the chalk dip slope of the North Downs, which is comparatively stable - though the chalk does carry solution features, natural voids that occasionally cause very localised settlement around Orpington and Biggin Hill. Head north and west towards Beckenham, Penge and the lower ground and you are on London Clay, which shrinks in a dry summer and swells again through winter. That seasonal movement is small but it is relentless, and a chimney stack is a tall, rigid, heavy thing bolted to a roof that is moving underneath it. The joints open, the flaunching cracks, the flashings pull away from the brickwork. We get noticeably more chimney work out of Beckenham and the clay side than out of the chalk villages, and the difference is the ground, not the builders.",
      publicId: "chimney-stack-repointing-mortar-work",
      alt: "A brick chimney being repointed with fresh mortar between the courses",
    },
    whatToLook: [
      {
        h: "Are they proposing lead or cement?",
        p: "If a quote says the flashing will be sealed, filleted or rendered in cement, that is a repair with a life measured in a few years. Lead flashing costs more and lasts decades. On a job that needs scaffolding anyway, choosing cement to save a couple of hundred pounds is a poor trade.",
      },
      {
        h: "What mortar mix will they use?",
        p: "A roofer who has thought about it will mention lime for older, softer brickwork and a cement-based mix for harder modern brick. One who intends to use the same mix on everything has not considered the building, and hard mortar on soft brick causes real damage over time.",
      },
      {
        h: "Have they looked inside as well as up?",
        p: "Chimney damp can be ingress from above, condensation in an unventilated flue, or salts drawn out of an old flue lining by a previously blocked-up fireplace. These have completely different remedies. A survey that only looked at the roof cannot tell you which one you have.",
      },
    ],
    comparison: {
      header: "Repair the stack, or take it down",
      intro:
        "Once a chimney is no longer used for anything, this becomes a genuine financial question rather than an obvious one. Here is how it tends to weigh up on a house around here.",
      proLabel: "Repair and keep it",
      altLabel: "Remove to below the roof line",
      rows: [
        {
          label: "Upfront cost",
          pro: "£450 to £2,500 for flashings, repointing and flaunching. A full rebuild above the roof line is £1,800 to £3,500.",
          alt: "£900 to £2,000 including making good the roof, plus more if the breast is removed internally.",
        },
        {
          label: "Future maintenance",
          pro: "Repointing again in perhaps thirty years, flaunching sooner. It remains a maintenance item indefinitely.",
          alt: "None. It stops being part of your roof entirely.",
        },
        {
          label: "Effect on the house",
          pro: "Keeps the option of an open fire or a stove, and keeps the roof line as designed.",
          alt: "Removes that option permanently, and on a symmetrical pair of semis it can look distinctly odd from the street.",
        },
        {
          label: "Effect on value",
          pro: "A working fireplace is a genuine selling point in this part of the market, particularly on period property.",
          alt: "Neutral to slightly negative on older houses, generally neutral on postwar ones.",
        },
        {
          label: "Planning considerations",
          pro: "None for repair. Like-for-like maintenance needs no consent anywhere in the borough.",
          alt: "Worth checking in a conservation area or an Area of Special Residential Character, where the roofscape may be part of what is protected.",
        },
        {
          label: "Usually the right answer when",
          pro: "The chimney is used, the house is period, or it is one of a matched pair with next door.",
          alt: "The flue has been redundant for decades, the stack is in poor condition, and it has already leaked more than once.",
        },
      ],
    },
    teaser: {
      h: "Chimney damp is often a leak that started elsewhere",
      p: "Not every damp chimney breast is a chimney problem. Water from a failed valley, a slipped tile above the stack or a blocked gutter can all end up running down the same brickwork. That is why our leak work always starts with tracing rather than assuming, and why we will look at the whole roof before recommending you spend money on the stack.",
      publicId: "roofer-inspecting-chimney-flashing",
      alt: "A roofer inspecting the lead flashing where a chimney meets the roof slope",
      ctaText: "How we trace roof leaks",
      ctaHref: "/roof-leak-repairs",
    },
    costText:
      "Renewing a lead flashing around a standard stack is typically £450 to £950 depending on access and the number of sides. Repointing a stack above the roof line runs £600 to £1,500. Renewing the flaunching and rebedding the pots is £350 to £700, and much cheaper again if done at the same time as other work. A full rebuild above the roof line is £1,800 to £3,500, and removal to below the roof line with the covering made good is £900 to £2,000. Access is the swing factor on all of these, which is why we quote it separately.",
    faqs: [
      {
        question: "Why is my chimney breast damp when the roof looks fine?",
        answer:
          "Because a chimney has three quite different ways of getting wet and only one of them is a roof fault. Water can enter at the top through cracked flaunching or open joints and run down inside the flue. Moist air can condense inside a cold unventilated flue. Or hygroscopic salts left in an old flue lining by decades of burning can draw moisture out of the air. Each has a different remedy, so establishing which one you have is the first job - and it is why we look inside as well as up.",
      },
      {
        question: "How long does lead flashing last?",
        answer:
          "Properly dressed lead of the right code will comfortably see forty to sixty years, and often longer. The cement fillet that so often replaced it during the eighties and nineties manages perhaps five to ten before it cracks away from the brickwork. If your stack currently has a cement fillet, that is very likely where your water is coming from.",
      },
      {
        question: "Can you remove a chimney I no longer use?",
        answer:
          "Yes. The usual approach is to take it down to below the roof line and make the covering good over the top, which is straightforward and leaves no trace from inside. Removing the breast inside the house as well is a bigger job and a structural one, since the breast may be carrying load and the stack in the loft needs proper support. We will explain what is involved and be honest about whether you will regret losing the fireplace.",
      },
      {
        question: "Do I need scaffolding for chimney work?",
        answer:
          "Usually, yes. Working safely on a stack means being able to stand and work at ridge height on all the sides that need attention, and that is not something a ladder allows. Chimney access scaffolds are a well-established item and cost less than a full elevation scaffold. It will be a separate line on your quote so you can see exactly what it is.",
      },
      {
        question: "My chimney is capped and the room below is damp. Why?",
        answer:
          "Almost certainly because it was capped without ventilation. A disused flue still needs air moving through it, or moisture accumulates inside the cold masonry and comes through into the room. The correct method is a vented cowl or capping unit at the top and an airbrick or vent at the bottom, and retro-fitting the missing half of that is usually a modest job with a very noticeable result.",
      },
    ],
    related: [
      { href: "/roof-leak-repairs", label: "Roof leak repairs" },
      { href: "/roof-repairs", label: "Roof repairs" },
      { href: "/storm-damage-repairs", label: "Storm damage repairs" },
    ],
  },

  // ------------------------------------------------------ roofline/gut --
  {
    slug: "/guttering-fascias-and-soffits",
    serviceName: "Guttering, Fascias & Soffits",
    metaTitle: "Guttering, Fascias & Soffits In Orpington | LeonEast Roofing",
    metaDescription:
      "Guttering, fascias and soffits in Orpington. Blocked, sagging and leaking gutters cleared or replaced, rotten roofline renewed. Free survey and a 10 year guarantee.",
    h1: "Guttering, Fascias & Soffits In Orpington",
    h2: "Is water going down the wall instead of down the pipe?",
    h3: "Gutters, downpipes, fascias, soffits and bargeboards across Orpington and the tree-lined streets around it",
    heroPublicId: "guttering-fascias-soffits-orpington",
    heroAlt: "White uPVC guttering and fascia along the eaves of a house roof",
    intro:
      "The roofline is the least interesting part of a house and one of the most consequential. A gutter that overflows at one corner does not stay a gutter problem for long: the water soaks the fascia, the fascia rots, the rafter ends behind it follow, and what began as a fifty pound bracket becomes several thousand pounds of timber work. Bromley is among the greenest London boroughs and this is a borough of mature street trees, so gutters here fill faster than most. Getting up there once a year is genuinely one of the highest-value things a homeowner around Orpington can do.",
    insight:
      "The cheapest roofing job we ever do is clearing a gutter. The most annoying is replacing the rafter feet that rotted because nobody did.",
    symptoms: [
      {
        sign: "A waterfall over the front edge in heavy rain",
        cause:
          "Either a blockage or a gutter that has dropped between its brackets and is now holding water rather than moving it. Both are cheap to fix and both do expensive damage if left, because the water is landing on the fascia and the wall below rather than going down the pipe.",
      },
      {
        sign: "A green or dark streak down the brickwork",
        cause:
          "A joint or a downpipe has been leaking for long enough to grow algae on the wall. It also means that section of wall has been repeatedly saturated, which in an older solid-brick house is a route to internal damp on the same wall.",
      },
      {
        sign: "Fascia board soft, flaking or visibly rotten",
        cause:
          "Timber fascias were standard until the eighties and they rot from behind, where you cannot see it, once water has been running down them for a few years. By the time the paint is flaking the board underneath has usually gone, and the question becomes whether the rafter ends behind it have gone too.",
      },
      {
        sign: "Birds getting in under the eaves",
        cause:
          "A gap in the soffit, generally where a rotten board has broken away. Beyond the noise and the mess, birds and squirrels will make short work of loft insulation and occasionally of wiring. Nesting birds are legally protected while in use, so timing the repair matters.",
      },
    ],
    benefits: [
      {
        title: "We look at where the water goes, not just the gutter",
        text: "A gutter that is clear at the top can still fail if the downpipe is blocked or the gully at the bottom is silted up. We follow the whole route to the drain, because clearing the top and leaving the bottom simply moves the overflow.",
      },
      {
        title: "The fascia checked before it is covered",
        text: "Capping over a rotten fascia with uPVC is a common shortcut and it hides the problem rather than solving it. We take the old board off and look at the rafter ends behind it, and we photograph what we find whether the news is good or not.",
      },
      {
        title: "Cast iron kept where it is worth keeping",
        text: "On period houses in the conservation areas around Chislehurst and Beckenham, original cast iron guttering is part of what the street looks like and is often repairable. We would rather repair and repaint it than talk you into plastic that will look wrong for the next thirty years.",
      },
      {
        title: "Sized for the roof it is draining",
        text: "Standard 112mm half-round guttering is not enough for every roof. A large or steep slope, or one facing a long run to a single downpipe, needs deeper section or an extra outlet. Undersized guttering is why some houses overflow every single time it rains hard.",
      },
      {
        title: "Ventilated soffits, because lofts need air",
        text: "Modern soffits should be vented, and where a loft has been heavily insulated that ventilation is what stops condensation forming on the underside of the roof. Fitting solid soffits to an insulated loft causes damp that then gets blamed on the roof.",
      },
      {
        title: "Ten years in writing",
        text: "On replacement roofline and guttering work alike, along with the manufacturer's guarantee on the materials.",
      },
    ],
    localAngle: {
      h: "A green borough is hard on gutters",
      p: "Bromley is the largest of the London boroughs by area and among the most heavily wooded, which is a large part of why people move here and a genuine nuisance every October. The mature street trees through Petts Wood, Chislehurst, Beckenham and the older parts of Orpington drop enough leaf litter to fill a gutter in a single autumn, and on north-facing slopes that mixes with moss washed off the tiles into a dense mat that water simply cannot get past. What follows is predictable: the gutter overflows onto the fascia, the fascia stays wet through the winter, and after a few years the rafter feet behind it start to go. We clear a great many gutters in this borough and it is consistently the cheapest way to avoid the most expensive kind of roof repair. Once a year in late autumn, after the leaves are down, is the sensible rhythm around here.",
      publicId: "blocked-gutter-leaves-autumn-roof",
      alt: "A roof gutter filled with fallen autumn leaves and debris",
    },
    whatToLook: [
      {
        h: "Are they taking the old fascia off, or capping over it?",
        p: "Capping means fixing new uPVC over the existing timber. It is quicker and cheaper and it seals a rotten board in behind a new one, along with whatever is happening to the rafter ends. Ask explicitly which they are doing, because the two jobs look identical when finished and are not remotely the same.",
      },
      {
        h: "Have they checked the rafter ends?",
        p: "The whole point of replacing a rotten fascia is that something made it rot. If nobody has looked at the timber it was fixed to, the new board is going onto the same problem. A proper quote will either confirm the rafter feet are sound or price for repairing them.",
      },
      {
        h: "Is the guttering the right size for your roof?",
        p: "If your gutters have always overflowed in heavy rain, replacing like for like will produce a house that still overflows in heavy rain. A roofer worth using will work out the roof area and the outlet spacing rather than fitting whatever came off.",
      },
    ],
    comparison: {
      header: "uPVC roofline against timber and cast iron",
      intro:
        "There is a straightforward answer for most postwar houses and a more interesting one for period property. Both are set out here.",
      proLabel: "uPVC",
      altLabel: "Timber and cast iron",
      rows: [
        {
          label: "Maintenance",
          pro: "An occasional wash. No painting, ever, which is the main reason it took over.",
          alt: "Repainting every five years or so, and cast iron needs the rust caught before it takes hold.",
        },
        {
          label: "How long it lasts",
          pro: "Twenty five to thirty five years. White stays looking reasonable; some coloured finishes fade unevenly.",
          alt: "Cast iron outlives everybody if it is painted - there is plenty of Victorian guttering still working around Chislehurst. Timber fascias want twenty five years or so.",
        },
        {
          label: "Cost",
          pro: "£45 to £75 per metre for guttering, fascia and soffit supplied and fitted.",
          alt: "Cast iron is £120 to £200 per metre new. Repairing and repainting existing cast iron is far cheaper than replacing it.",
        },
        {
          label: "On a period house",
          pro: "Frequently looks wrong. Plastic ogee mouldings do not read the same as cast iron from the street.",
          alt: "Correct, and in a conservation area it may be effectively expected. It is part of the character the designation protects.",
        },
        {
          label: "Repairability",
          pro: "Sections and clips are cheap and universally available. A damaged length is a quick swap.",
          alt: "Cast iron can be repaired, rebolted and repainted almost indefinitely, but it needs someone who is willing to do it.",
        },
        {
          label: "Usually right for",
          pro: "Interwar and postwar housing, which is the great majority of what we work on around Orpington.",
          alt: "Victorian and Edwardian property, conservation areas, and anywhere the original is still sound.",
        },
      ],
    },
    teaser: {
      h: "Gutters are usually where the leak story begins",
      p: "A surprising share of the internal damp we investigate turns out to have started with a gutter rather than with the roof covering. Water overflowing at the eaves gets behind the fascia, wets the rafter feet and the top of the wall, and produces damp inside that looks for all the world like a roof leak. Our leak surveys always start at the gutter line for exactly that reason.",
      publicId: "downpipe-rainwater-gully-brick-wall",
      alt: "Rainwater downpipe running down a brick wall to a drainage gully",
      ctaText: "How we trace roof leaks",
      ctaHref: "/roof-leak-repairs",
    },
    costText:
      "Clearing the gutters and downpipes on a standard Orpington semi is £90 to £180, and it is the single best value job on this website. Replacing a run of guttering is £25 to £45 per metre in uPVC. Full roofline replacement - guttering, fascias and soffits together - runs £1,400 to £3,200 on a typical semi depending on the length and the access. Repairing rotten rafter ends discovered behind an old fascia adds £40 to £90 per rafter, and we will always show you a photograph before doing it.",
    faqs: [
      {
        question: "How often should gutters be cleared around here?",
        answer:
          "Once a year for most houses, in late autumn once the leaves are down. Twice a year if you have mature trees directly overhanging, which on plenty of streets in Petts Wood, Chislehurst and Beckenham you do. It is a small job that prevents a large one, and it is worth booking rather than remembering.",
      },
      {
        question: "Can you just replace the gutter and leave the fascia?",
        answer:
          "If the fascia is sound, absolutely, and it will save you a substantial amount. The catch is that a gutter which has been overflowing for years has usually been wetting the fascia behind it for the same years. We will check the board properly before recommending it, because fitting new guttering onto a rotten fascia means doing the whole thing again shortly afterwards.",
      },
      {
        question: "What is capping over, and why do you avoid it?",
        answer:
          "Capping means fixing a new uPVC fascia straight over the existing timber one rather than removing it. It is quicker, it is cheaper, and it seals a decaying board and any rot in the rafter ends behind a new watertight cover, where it continues quietly. We remove the old board and look at what is behind it. If the timber is sound, that is what the photographs will show, and the job is straightforward.",
      },
      {
        question: "There are birds nesting in my soffit. Can you fix it now?",
        answer:
          "Not while the nest is active. Nesting birds and their nests are legally protected while in use, and that applies to house sparrows and starlings under the eaves as much as anything else. We will make a temporary repair to keep the weather out where we can, and come back to do the job properly once the nest is finished with - usually from late summer.",
      },
      {
        question: "Should I keep the cast iron guttering on my Victorian house?",
        answer:
          "If it is still sound, yes. Cast iron lasts more or less indefinitely provided it is painted, and there is plenty of Victorian guttering still working perfectly well around Chislehurst and Beckenham. It can be rebolted, repaired and repainted for considerably less than replacement, and on a period house in a conservation area it looks right in a way plastic does not. We will tell you honestly if it has gone too far.",
      },
    ],
    related: [
      { href: "/roof-leak-repairs", label: "Roof leak repairs" },
      { href: "/roof-repairs", label: "Roof repairs" },
      { href: "/common-roof-problems", label: "Common roof problems" },
    ],
  },
];

export function getService(slug: string): ServiceData {
  const s = services.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service slug: ${slug}`);
  return s;
}
