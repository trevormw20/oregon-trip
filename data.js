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
  subtitle: "A family road trip — July 29 to August 7, 2026",
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
          notes: "577 West Monroe St, Burns, OR 97720. TODO: confirmation #, check-in time",
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
          time: "Overnight",
          notes: "",
          coords: [44.0214, -124.1333],
        },
      ],
    },

    // ---------------------------------------------------------------
    // DAY 8 — Wednesday, August 5, 2026  (last full day on the coast)
    // ---------------------------------------------------------------
    {
      day: 8,
      date: "Wednesday, August 5, 2026",
      title: "Last Coast Day",
      summary: "Last full day before the drive home. Pack up what you can.",
      food: MEAL_PLAN,
      items: [
        {
          type: "activity",
          name: "TODO — Pick from the wish list",
          time: "Daytime",
          notes: "",
          coords: [43.9826, -124.0998],
        },
        {
          type: "camp",
          name: "Overnight at Harbor Vista Campground",
          time: "Overnight (last night camping)",
          notes: "",
          coords: [44.0214, -124.1333],
        },
      ],
    },

    // ---------------------------------------------------------------
    // DAY 9 — Thursday, August 6, 2026
    // Drive back begins: Florence  →  Burns, OR (overnight stop)
    // ---------------------------------------------------------------
    {
      day: 9,
      date: "Thursday, August 6, 2026",
      title: "Drive Back Begins",
      summary: "Break down camp and start the drive home. Overnight on the way.",
      food: "Eat out or packed food",
      items: [
        {
          type: "drive",
          name: "Drive: Florence → Burns, OR",
          time: "Morning – Afternoon",
          notes: "326 miles",
          miles: 326,
          coords: [43.5877, -119.0626],
          mapsDest: "Burns, OR",
        },
        {
          type: "lodging",
          name: "Return Overnight Stop",
          time: "Overnight",
          notes: "TODO: confirm where you're staying — Days Inn Burns again, or somewhere else?",
          coords: [43.5877, -119.0626],
          mapsDest: "Days Inn by Wyndham Burns, 577 West Monroe St, Burns, OR 97720",
        },
      ],
    },

    // ---------------------------------------------------------------
    // DAY 10 — Friday, August 7, 2026
    // Drive: Burns, OR  →  Pocatello, ID (HOME)
    // ---------------------------------------------------------------
    {
      day: 10,
      date: "Friday, August 7, 2026",
      title: "Home Sweet Home",
      summary: "Last leg of the drive — almost home!",
      food: "Eat out or packed food",
      items: [
        {
          type: "drive",
          name: "Drive: Burns, OR → Pocatello, ID",
          time: "All day",
          notes: "425 miles — home by evening",
          miles: 425,
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
      notes: "On the plan — famous clam chowder. This is our group eat-out dinner one night (night TBD — see Who's Cooking). We could go more than once!",
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
    { day: 1,  date: "Wed, Jul 29", place: "Burns, OR (en route)",        cook: null,  eatingOut: true  },
    { day: 2,  date: "Thu, Jul 30", place: "Harbor Vista (arrival night)", cook: "Williams family", meal: "Taco soup", eatingOut: false },
    { day: 3,  date: "Fri, Jul 31", place: "Harbor Vista",                 cook: "TBD", eatingOut: false },
    { day: 4,  date: "Sat, Aug 1",  place: "Harbor Vista",                 cook: "TBD", eatingOut: false },
    { day: 5,  date: "Sun, Aug 2",  place: "Harbor Vista",                 cook: "TBD", eatingOut: false },
    { day: 6,  date: "Mon, Aug 3",  place: "Harbor Vista",                 cook: "TBD", eatingOut: false },
    { day: 7,  date: "Tue, Aug 4",  place: "Harbor Vista",                 cook: "TBD", eatingOut: false },
    { day: 8,  date: "Wed, Aug 5",  place: "Harbor Vista (last night)",    cook: "TBD", eatingOut: false },
    { day: 9,  date: "Thu, Aug 6",  place: "Burns, OR (en route home)",    cook: null,  eatingOut: true  },

    // Group eat-out dinner — Mo's, one of the camping nights. Night not yet
    // decided: to schedule it, set `day` + `date` (e.g. day: 5, date: "Sun, Aug 2"),
    // or fold it into one of the Harbor Vista nights above.
    {
      date: "Night TBD",
      place: "Mo's Seafood & Chowder (Florence)",
      address: "1436 Bay St, Florence, OR 97439",
      mapsDest: "Mo's Seafood & Chowder, 1436 Bay St, Florence, OR 97439",
      cook: null,
      eatingOut: true,
    },
  ],
};
