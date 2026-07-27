// =====================================================================
// OREGON TRIP DATA — Edit this file to fill in your trip details
// =====================================================================
// Every place needs a `coords: [lat, lng]` so it shows on the map.
// Grab coords by right-clicking any spot on google.com/maps and clicking
// the coordinate numbers at the top of the popup to copy them.
//
// For named places you can also set `mapsDest` to an address/place name.
// When present, the "Directions" button navigates to that exact place
// (more reliable than coords). If omitted, directions use the coords.
//
// Item types: "activity", "food", "lodging", "drive", "camp"
// Optional per-item fields: cost (number), miles (number for drives)
// =====================================================================

// Reusable meal-plan note for the camping days.
const MEAL_PLAN = "Breakfast & lunch on your own · Sign up to cook a group dinner (or eat out)";

const TRIP = {
  title: "The Oregon Coast Adventure",
  subtitle: "A family road trip — July 29 to August 6, 2026",
  family: "The Ellis Family Vacation",

  homeBase: {
    name: "Pocatello, ID",
    coords: [42.8713, -112.4455],
  },

  days: [
    // ---------------------------------------------------------------
    // DAY 1 — Wednesday, July 29, 2026
    // Drive: Pocatello, ID  →  Days Inn by Wyndham Burns (Burns, OR)
    // ---------------------------------------------------------------
    {
      day: 1,
      date: "Wednesday, July 29, 2026",
      title: "Hit the Road!",
      summary: "Leave Pocatello and drive to Burns, Oregon for the night.",
      food: "Eat out or packed food",
      items: [
        {
          type: "drive",
          name: "Drive: Pocatello, ID → Burns, OR",
          time: "All day",
          notes: "425 miles",
          miles: 425,
          coords: [43.5877, -119.0626],
          mapsDest: "Days Inn by Wyndham Burns, 577 West Monroe St, Burns, OR 97720",
        },
        {
          type: "lodging",
          name: "Days Inn by Wyndham Burns",
          time: "Overnight",
          notes: "577 West Monroe St, Burns, OR 97720. Travel night on the way TO camp. TODO: confirmation #, check-in time",
          coords: [43.5877, -119.0626],
          mapsDest: "Days Inn by Wyndham Burns, 577 West Monroe St, Burns, OR 97720",
        },
      ],
    },

    // ---------------------------------------------------------------
    // DAY 2 — Thursday, July 30, 2026
    // Drive: Burns  →  Harbor Vista County Campground (Florence, OR)
    // ---------------------------------------------------------------
    {
      day: 2,
      date: "Thursday, July 30, 2026",
      title: "Travel & Arrive at Florence",
      summary: "Drive to the Oregon Coast and set up camp at Harbor Vista.",
      food: MEAL_PLAN,
      items: [
        {
          type: "drive",
          name: "Drive: Burns → Florence, OR",
          time: "Morning – Afternoon",
          notes: "326 miles",
          miles: 326,
          coords: [44.0214, -124.1333],
          mapsDest: "Harbor Vista County Campground, 87658 Harbor Vista Rd, Florence, OR 97439",
        },
        {
          type: "camp",
          name: "Set Up Camp — Harbor Vista County Campground",
          time: "Afternoon",
          notes: "87658 Harbor Vista Rd, Florence, OR 97439. Home base for the next 7 nights. Dad has the list of who gets which campsite.",
          coords: [44.0214, -124.1333],
          mapsDest: "Harbor Vista County Campground, 87658 Harbor Vista Rd, Florence, OR 97439",
        },
      ],
    },

    // ---------------------------------------------------------------
    // DAY 3 — Friday, July 31, 2026  (based at Harbor Vista)
    // ---------------------------------------------------------------
    {
      day: 3,
      date: "Friday, July 31, 2026",
      title: "Outlet Stores",
      summary: "Shopping day at the Lincoln City Outlets up the coast.",
      food: MEAL_PLAN,
      items: [
        {
          type: "activity",
          name: "Outlet Stores (Lincoln City Outlets)",
          time: "Daytime",
          notes: "About 1.5 hr north. TODO: confirm which outlets.",
          coords: [44.9591, -124.0108],
          mapsDest: "Lincoln City Outlets, 1500 SE East Devils Lake Rd, Lincoln City, OR 97367",
        },
        {
          type: "activity",
          name: "Connie Hansen Garden Conservancy",
          time: "Daytime (optional)",
          notes: "Optional nearby stop while at the outlets — a free public garden in Lincoln City, open dawn to dusk. 1931 NW 33rd St, Lincoln City, OR 97367.",
          coords: [44.9786, -124.0156],
          mapsDest: "Connie Hansen Garden Conservancy, 1931 NW 33rd St, Lincoln City, OR 97367",
        },
        {
          type: "camp",
          name: "Overnight at Harbor Vista Campground",
          time: "Overnight",
          notes: "",
          coords: [44.0214, -124.1333],
        },
      ],
    },

    // ---------------------------------------------------------------
    // DAY 4 — Saturday, August 1, 2026
    // ---------------------------------------------------------------
    {
      day: 4,
      date: "Saturday, August 1, 2026",
      title: "Cape Perpetua",
      summary: "Cape Perpetua Scenic Area — whale watching, tide pools, and viewpoints.",
      food: MEAL_PLAN,
      items: [
        {
          type: "activity",
          name: "Cape Perpetua & Whale Watching",
          time: "Daytime",
          notes: "Whale watching, tide pools, and big viewpoints.",
          coords: [44.2809, -124.1086],
          mapsDest: "Cape Perpetua Scenic Area, Yachats, OR 97498",
        },
        {
          type: "camp",
          name: "Overnight at Harbor Vista Campground",
          time: "Overnight",
          notes: "",
          coords: [44.0214, -124.1333],
        },
      ],
    },

    // ---------------------------------------------------------------
    // DAY 5 — Sunday, August 2, 2026  →  HECETA HEAD (group day)
    // ---------------------------------------------------------------
    {
      day: 5,
      date: "Sunday, August 2, 2026",
      title: "Meetings, Hobbit Trail & Heceta Head",
      summary: "Meetings at 10am, then the Hobbit Trail and Heceta Head Lighthouse.",
      food: MEAL_PLAN,
      items: [
        {
          type: "activity",
          name: "Meetings",
          time: "10:00 AM",
          notes: "Sunday meetings at 10am before heading out for the day. 2705 Munsel Lake Rd, Florence, OR 97439.",
          coords: [44.0469, -124.0856],
          mapsDest: "2705 Munsel Lake Rd, Florence, OR 97439",
        },
        {
          type: "activity",
          name: "Hobbit Trail",
          time: "Daytime",
          notes: "Magical forest-to-beach hike just south of Heceta Head.",
          coords: [44.1440, -124.1225],
          mapsDest: "Hobbit Trail Trailhead, Florence, OR",
        },
        {
          type: "activity",
          name: "Heceta Head Lighthouse",
          time: "Daytime",
          notes: "No cost — just the hike up to see the lighthouse, not the paid museum / keeper's-house tour. Group send-off day — one family heads home this evening, around the little kids' bedtime.",
          cost: 0,
          coords: [44.1372, -124.1283],
          mapsDest: "Heceta Head Lighthouse, Florence, OR",
        },
        {
          type: "camp",
          name: "Overnight at Harbor Vista Campground",
          time: "Overnight",
          notes: "",
          coords: [44.0214, -124.1333],
        },
      ],
    },

    // ---------------------------------------------------------------
    // DAY 6 — Monday, August 3, 2026
    // ---------------------------------------------------------------
    {
      day: 6,
      date: "Monday, August 3, 2026",
      title: "Newport Aquarium",
      summary: "Day trip up the coast to the Oregon Coast Aquarium in Newport.",
      food: MEAL_PLAN,
      items: [
        {
          type: "activity",
          name: "Newport Aquarium (Oregon Coast Aquarium)",
          time: "Daytime",
          notes: "About 1 hr north of Florence. Admission charged.",
          coords: [44.6171, -124.0474],
          mapsDest: "Oregon Coast Aquarium, 2820 SE Ferry Slip Rd, Newport, OR 97365",
        },
        {
          type: "camp",
          name: "Overnight at Harbor Vista Campground",
          time: "Overnight",
          notes: "",
          coords: [44.0214, -124.1333],
        },
      ],
    },

    // ---------------------------------------------------------------
    // DAY 7 — Tuesday, August 4, 2026
    // ---------------------------------------------------------------
    {
      day: 7,
      date: "Tuesday, August 4, 2026",
      title: "Sea Lion Caves",
      summary: "Sea Lion Caves — America's largest sea cave. Possible alternative: Umpqua River Lighthouse.",
      food: MEAL_PLAN,
      items: [
        {
          type: "activity",
          name: "Sea Lion Caves",
          time: "Daytime",
          notes: "America's largest sea cave. Admission charged.",
          coords: [44.1219, -124.1281],
          mapsDest: "Sea Lion Caves, 91560 US-101, Florence, OR 97439",
        },
        {
          type: "activity",
          name: "Alternative: Umpqua River Lighthouse",
          time: "Daytime (optional)",
          notes: "Possible alternative to Sea Lion Caves — about 45 minutes south of Harbor Vista.",
          coords: [43.6624, -124.1976],
          mapsDest: "Umpqua River Lighthouse, 1020 Lighthouse Rd, Winchester Bay, OR 97467",
        },
        {
          type: "camp",
          name: "Overnight at Harbor Vista Campground",
          time: "Overnight (LAST night camping)",
          notes: "Last night at Harbor Vista — check out by 11am tomorrow, so pack up what you can tonight.",
          coords: [44.0214, -124.1333],
        },
      ],
    },

    // ---------------------------------------------------------------
    // DAY 8 — Wednesday, August 5, 2026
    // Check out of Harbor Vista by 11am, drive Florence → Burns, OR
    // ---------------------------------------------------------------
    {
      day: 8,
      date: "Wednesday, August 5, 2026",
      title: "Leave the Coast — Drive to Nampa",
      summary: "Break down camp, check out of Harbor Vista by 11am, and drive to Mel's house in Nampa, Idaho for the night. Long driving day — about 10–11 hours.",
      food: "Eat out or packed food",
      items: [
        {
          type: "camp",
          name: "Check out of Harbor Vista by 11:00 AM",
          time: "By 11:00 AM",
          notes: "Camp checkout is 11am — pack up and be out on time. This is the end of our stay on the coast.",
          coords: [44.0214, -124.1333],
        },
        {
          type: "drive",
          name: "Drive: Florence, OR → Nampa, ID",
          time: "Late morning – Evening",
          notes: "~520 miles (approximate) — roughly 10–11 hours of driving, east through Burns and Ontario. Leaving after the 11am checkout puts us at Mel's late, so plan meal/gas stops.",
          miles: 520,
          coords: [43.5186, -116.6442],
          mapsDest: "10049 Mallard Dr, Nampa, ID 83686",
        },
        {
          type: "lodging",
          name: "Mel's house",
          time: "Overnight",
          notes: "10049 Mallard Dr, Nampa, ID 83686. Staying at Mel's on the drive home (replaces the earlier plan of a second night at Days Inn Burns).",
          coords: [43.5186, -116.6442],
          mapsDest: "10049 Mallard Dr, Nampa, ID 83686",
        },
      ],
    },

    // ---------------------------------------------------------------
    // DAY 9 — Thursday, August 6, 2026
    // Drive: Burns, OR  →  Pocatello, ID (HOME)
    // ---------------------------------------------------------------
    {
      day: 9,
      date: "Thursday, August 6, 2026",
      title: "Home Sweet Home",
      summary: "Last leg of the drive — almost home!",
      food: "Eat out or packed food",
      items: [
        {
          type: "drive",
          name: "Drive: Nampa, ID → Pocatello, ID",
          time: "Most of the day",
          notes: "~260 miles (approximate) — about 4.5 hours, home by evening. Shorter than the old Burns route since we're starting from Mel's.",
          miles: 260,
          coords: [42.8713, -112.4455],
          mapsDest: "Pocatello, ID",
        },
      ],
    },
  ],

  // ===================================================================
  // WISH LIST — places we want to visit, no specific day picked yet.
  // These show on the map (★ pins) and in the "Places We Want to Visit"
  // section. When you decide a day, move it into that day's items above.
  // ===================================================================
  wishlist: [
    {
      type: "food",
      name: "Mo's Seafood & Chowder",
      notes: "On the plan — famous clam chowder. No longer assigned to arrival night (Trevor cooks Thu Jul 30). TODO: pick a night — Sat Aug 1 is our only eat-out night in Florence. Dad had offered to treat.",
      coords: [43.9686, -124.1018],
      mapsDest: "Mo's Seafood & Chowder, 1436 Bay St, Florence, OR 97439",
    },
    {
      type: "food",
      name: "Chicken Place (TBD)",
      notes: "TODO: get the name & address, then add it here.",
      coords: null,
    },
  ],

  // ===================================================================
  // BUDGET / COSTS — per-attraction ADMISSION PRICES by age tier (2026,
  // confirmed from official sites). These are individual ticket prices,
  // NOT group totals. Each attraction has a `prices` array of age tiers.
  // Camping is already booked & paid, so it's excluded; campsite receipts
  // usually cover Oregon state-park day-use parking.
  //   `prices`: [{ tier, price, ages }]  — set price "Free" for free tiers
  //   `toConfirm: true`               — flag a price to double-check at the gate
  //   `isAlternative: true`           — styled as an alternative option
  // ===================================================================
  budget: {
    groupSummary:
      "16 people — 8 adults, 1 age 17, 1 age 14, 3 kids under 8, two 2-year-olds, one 1-year-old · 3 vehicles",
    excludeNote:
      "Prices below are per-person admission (or per-vehicle parking), not totals. Camping is already booked & paid; campsite receipts usually cover Oregon state-park day-use parking.",

    attractions: [
      {
        name: "Oregon Coast Aquarium (Newport)",
        type: "activity",
        prices: [
          { tier: "Adult",  ages: "18–64", price: "$25.95", toConfirm: true },
          { tier: "Senior", ages: "65+",   price: "$19.95" },
          { tier: "Youth",  ages: "13–17", price: "$19.95" },
          { tier: "Child",  ages: "3–12",  price: "$15.95", toConfirm: true },
          { tier: "Under 3", ages: "0–2",  price: "Free" },
        ],
        note: "*Confirm prices at the gate — one source shows $24.95 adult / $14.95 child. AAA / military / group discounts may apply.",
      },
      {
        name: "Sea Lion Caves (Florence)",
        type: "activity",
        prices: [
          { tier: "Adult",  ages: "13+",  price: "$18" },
          { tier: "Senior", ages: "—",    price: "$17" },
          { tier: "Child",  ages: "5–12", price: "$12" },
          { tier: "Under 5", ages: "0–4", price: "Free" },
        ],
        note: "Parking is free. No cutoff age stated for the senior rate.",
      },
      {
        name: "Umpqua River Lighthouse (alt. to Sea Lion Caves)",
        type: "activity",
        isAlternative: true,
        prices: [
          { tier: "Adult",          ages: "18+",  price: "$8" },
          { tier: "Student / Child", ages: "5–17", price: "$4" },
          { tier: "Under 5",        ages: "0–4",  price: "Free" },
        ],
        note: "No senior tier — seniors pay the adult rate. About 45 min south of Harbor Vista.",
      },
      {
        name: "Cape Perpetua — parking",
        type: "drive",
        prices: [
          { tier: "Per vehicle", ages: "per day", price: "$5" },
        ],
        note: "Federal day-use fee — or covered by a NW Forest Pass / interagency pass.",
      },
      {
        name: "Heceta Head Lighthouse — parking",
        type: "drive",
        prices: [
          { tier: "Per vehicle", ages: "per day", price: "$10" },
        ],
        note: "Oregon State Parks day-use fee — or covered by a day-use permit.",
      },
      {
        name: "Hobbit Trail",
        type: "activity",
        prices: [
          { tier: "Everyone", ages: "all ages", price: "Free" },
        ],
        note: "Free trailhead parking (~10 spots); overflow at Heceta Head.",
      },
      {
        name: "Lincoln City Outlets",
        type: "activity",
        prices: [
          { tier: "Everyone", ages: "all ages", price: "Free" },
        ],
        note: "Grab the free VIP coupon book at Customer Service.",
      },
    ],

    tips: [
      "Toddlers are free everywhere (ages 0–2), and under-5 is free at Sea Lion Caves and Umpqua.",
      "Swapping Sea Lion Caves → Umpqua River Lighthouse is much cheaper per person (Adult $8 vs $18, Child $4 vs $12).",
      "The Aquarium has separate senior (65+) and youth (13–17) rates, plus AAA / military / group discounts — ask before you pay.",
      "Pay parking per-day rather than buying annual passes — we're only here a few days.",
      "Grab the free VIP coupon book at Lincoln City Outlets Customer Service.",
    ],

    // Optional source links shown as a small footnote.
    sources: [
      { label: "Sea Lion Caves", url: "https://www.sealioncaves.com/" },
      { label: "Umpqua River Lighthouse", url: "https://www.umpquavalleymuseums.org/umpqua-river-lighthouse/" },
      { label: "Cape Perpetua", url: "https://www.fs.usda.gov/recarea/siuslaw/recarea/?recid=42283" },
      { label: "Heceta Head Lighthouse", url: "https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=124" },
      { label: "Oregon Coast Aquarium", url: "https://aquarium.org/" },
      { label: "Lincoln City Outlets", url: "https://www.lincolncityoutlets.com/" },
    ],
  },

  // ===================================================================
  // WHO'S COOKING — one row per night of the trip. Each family handles
  // its own breakfast & lunch; sign up to cook (or mark eating out).
  // Just fill in `cook` with a name, or set `eatingOut: true`.
  // ===================================================================
  dinners: [
    { day: 1,  date: "Wed, Jul 29", place: "Days Inn, Burns, OR (en route to camp)", cook: null,  eatingOut: true  },
    { day: 2,  date: "Thu, Jul 30", place: "Harbor Vista — arrival night", cook: "Trevor", meal: "TBD — not decided yet", eatingOut: false },
    { day: 3,  date: "Fri, Jul 31", place: "Harbor Vista (outlet-stores day)", cook: "Mike & Mila", meal: "Sloppy Bobby's", eatingOut: false },
    { day: 4,  date: "Sat, Aug 1",  place: "Eating out — TBD",            cook: null, eatingOut: true },
    { day: 5,  date: "Sun, Aug 2",  place: "Harbor Vista",                 cook: "Ma & Pa", meal: "TBD — not decided yet", eatingOut: false },
    { day: 6,  date: "Mon, Aug 3",  place: "Eating out — aquarium day (Dad covers aquarium admission)", cook: null, eatingOut: true },
    { day: 7,  date: "Tue, Aug 4",  place: "Harbor Vista (LAST camping night)", cook: "Rick & Alicia", meal: "TBD — not decided yet", eatingOut: false },
    { day: 8,  date: "Wed, Aug 5",  place: "Mel's house (en route home) — eating out, spot TBD", cook: null,  eatingOut: true  },
  ],

  // ===================================================================
  // FAMILY GAMES — two multiple-choice quizzes for the campfire & car.
  //
  // Each game has a list of questions. A question looks like:
  //   {
  //     q: "The question text",
  //     choices: ["A", "B", "C", "D"],   // 2–4 options
  //     answer: 0,                         // index of the correct choice
  //     fact: "Optional fun fact shown after answering (can be omitted)",
  //   }
  //
  // COAST TRIVIA is filled in with facts about the places on our trip.
  // KNOW THE ELLISES starts empty — collect answers from family members
  // (see KNOW-THE-ELLISES-questions.md), then add them here the same way.
  // ===================================================================
  games: {
    coast: {
      title: "Oregon Coast Trivia",
      blurb: "How much do you know about the places we're visiting? Tap your answer!",
      questions: [
        {
          q: "Sea Lion Caves is the largest sea cave in which country?",
          choices: ["The United States", "Canada", "Mexico", "Iceland"],
          answer: 0,
          fact: "Sea Lion Caves near Florence is billed as America's largest sea cave — big enough to fit a 12-story building!",
        },
        {
          q: "What noisy animals lounge and swim inside Sea Lion Caves?",
          choices: ["Sea lions", "Penguins", "Polar bears", "Dolphins"],
          answer: 0,
          fact: "Steller sea lions haul out and bark inside the cave — you'll smell and hear them before you see them.",
        },
        {
          q: "The Oregon Coast Aquarium we're visiting is in which town?",
          choices: ["Newport", "Florence", "Portland", "Seaside"],
          answer: 0,
          fact: "It's about an hour north of our campground, right on Yaquina Bay in Newport.",
        },
        {
          q: "A famous movie orca once lived at the Oregon Coast Aquarium. Which whale?",
          choices: ["Keiko from 'Free Willy'", "Shamu", "Moby Dick", "Willy Wonka"],
          answer: 0,
          fact: "Keiko, the orca from 'Free Willy,' was rehabilitated at the aquarium from 1996 to 1998 before being released.",
        },
        {
          q: "Heceta Head Lighthouse is one of the brightest on the coast — how far out to sea can its light be seen?",
          choices: ["About 2 miles", "About 21 miles", "About 100 miles", "About 500 miles"],
          answer: 1,
          fact: "Its beam reaches roughly 21 miles out — it's often called the strongest light on the Oregon Coast.",
        },
        {
          q: "Why is the Hobbit Trail so magical to walk?",
          choices: ["It's a leafy green tunnel through the trees", "It's inside a cave", "It's a lava tube", "It's a subway"],
          answer: 0,
          fact: "The trail winds through a tunnel of salal and shore pine that opens onto the beach — very Middle-earth.",
        },
        {
          q: "What soup is Mo's in Florence famous for?",
          choices: ["Clam chowder", "Tomato soup", "Chicken noodle", "Pho"],
          answer: 0,
          fact: "Mo's has been serving its creamy clam chowder on the Oregon Coast since 1946.",
        },
        {
          q: "Our campground, Harbor Vista, looks out over the mouth of which river?",
          choices: ["The Siuslaw River", "The Columbia River", "The Mississippi River", "The Rogue River"],
          answer: 0,
          fact: "Harbor Vista sits above the north jetty where the Siuslaw River meets the Pacific.",
        },
        {
          q: "At Cape Perpetua, what giant animal might you spot swimming offshore?",
          choices: ["Gray whales", "Great white sharks", "Manatees", "Hippos"],
          answer: 0,
          fact: "Gray whales migrate past the Oregon Coast — Cape Perpetua's high viewpoints are a great place to watch for their spouts.",
        },
        {
          q: "Which of these critters would you actually find in a tide pool?",
          choices: ["Sea stars", "Lions", "Frogs", "Eagles"],
          answer: 0,
          fact: "Tide pools are full of sea stars, anemones, hermit crabs, and mussels — look but don't grab!",
        },
        {
          q: "Cape Perpetua has the highest viewpoint you can drive to on the coast. About how high above the ocean is it?",
          choices: ["About 80 feet", "About 800 feet", "About 8,000 feet", "About 80,000 feet"],
          answer: 1,
          fact: "The overlook sits around 800 feet up — on a clear day you can see 37 miles of coastline.",
        },
        {
          q: "Florence is famous for giant hills of what, perfect for dune buggies?",
          choices: ["Sand", "Snow", "Grass", "Gravel"],
          answer: 0,
          fact: "The Oregon Dunes near Florence are the largest expanse of coastal sand dunes in North America.",
        },
        {
          q: "What color are the gray whales that migrate past Oregon?",
          choices: ["Gray", "Bright pink", "Rainbow", "Neon green"],
          answer: 0,
          fact: "Gray whales are — you guessed it — gray, often mottled with white patches of barnacles.",
        },
        {
          q: "Heceta Head Lighthouse is said to be one of the most ________ in the country.",
          choices: ["Photographed lighthouses", "Haunted castles", "Tallest buildings", "Expensive hotels"],
          answer: 0,
          fact: "Perched on a cliff above a cove, Heceta Head is one of the most photographed lighthouses in the United States (some say it's a little haunted, too!).",
        },
      ],
    },

    ellises: {
      title: "How Well Do You Know the Ellises?",
      blurb: "Guess how each family member answered. Questions coming soon — the family's still filling these out!",
      questions: [
        // Fill these in once family members send back their answers.
        // Example format:
        // {
        //   q: "What is Grandpa Ellis's favorite ice cream flavor?",
        //   choices: ["Rocky Road", "Vanilla", "Mint chip", "Butter pecan"],
        //   answer: 2,
        //   fact: "He says mint chip reminds him of summers as a kid.",
        // },
      ],
    },
  },
};
