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
          notes: "Sunday meetings at 10am before heading out for the day.",
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
          notes: "No cost. Group send-off day — one family heads home this evening, around the little kids' bedtime.",
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
      notes: "On the plan — famous clam chowder. We could go more than once!",
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
  // BUDGET / COSTS — per-attraction group cost breakdown (2026).
  // All figures are GROUP totals for our party. Edit the age-tier
  // counts here if the group or plans change. Camping is already
  // booked & paid, so it's excluded; campsite receipts usually cover
  // Oregon state-park day-use parking.
  // ===================================================================
  budget: {
    groupSummary:
      "16 people — 8 adults, 1 age 17, 1 age 14, 3 kids under 8, two 2-year-olds, one 1-year-old · 3 vehicles",
    excludeNote:
      "Camping is already booked & paid, so it's left out below. Campsite receipts usually cover Oregon state-park day-use parking.",

    // Each attraction's group cost. `cost` is the headline group total
    // used in the scenario math; `altCost` is an optional discounted/
    // alternate figure shown alongside.
    attractions: [
      {
        name: "Oregon Coast Aquarium (Newport)",
        type: "activity",
        cost: 295.35,
        costLabel: "$295.35 walk-up",
        altLabel: "≈ $266 with 10% discount",
        who: "Adult $25.95 ×8 · Youth 13–17 $19.95 ×2 · Child 3–12 $15.95 ×3 · free 0–2 ×3",
        note: "10% AAA / military / one-card discount ≈ $266. The 15+ group rate is quote-only — call ahead, could be cheaper.",
      },
      {
        name: "Sea Lion Caves (Florence)",
        type: "activity",
        cost: 216,
        costLabel: "$216",
        who: "Adult 13+ $18 ×10 · Child 5–12 $12 ×3 · free 0–4",
        note: "No youth rate here, so the teens pay the adult price.",
      },
      {
        name: "Umpqua River Lighthouse (alt. to Sea Lion Caves)",
        type: "activity",
        cost: 84,
        costLabel: "$84",
        who: "Adult $8 ×8 · Child/Student 5–17 $4 ×5 · free 0–4",
        note: "Swapping Sea Lion Caves → Umpqua saves ≈ $132. About 45 min south of Harbor Vista.",
        isAlternative: true,
      },
      {
        name: "Cape Perpetua — parking (federal)",
        type: "drive",
        cost: 15,
        costLabel: "$15",
        who: "$5 / vehicle ×3",
        note: "Federal day-use site, so the state-park campsite receipt does NOT cover it.",
      },
      {
        name: "Heceta Head — parking (state)",
        type: "drive",
        cost: 0,
        costLabel: "Likely $0",
        altLabel: "worst case $15",
        who: "$5 / vehicle ×3 if not covered",
        note: "State-park day-use — campsite receipt usually covers it. Worst case $15.",
      },
      {
        name: "Hobbit Trail",
        type: "activity",
        cost: 0,
        costLabel: "Free",
        who: "Roadside trailhead, no fee",
        note: "",
      },
      {
        name: "Lincoln City Outlets",
        type: "activity",
        cost: 0,
        costLabel: "Free",
        who: "Shopping — no admission",
        note: "Grab the free VIP \"Insider Savings\" coupon book at customer service.",
      },
    ],

    // Two whole-trip scenarios. `total` is the expected group cost;
    // `max` is the worst case (e.g. if Heceta parking isn't covered).
    scenarios: [
      {
        label: "As planned (Sea Lion Caves)",
        total: 497,
        max: 512,
        note: "Up to ≈ $512 if the Heceta Head parking isn't covered.",
      },
      {
        label: "Swap to Umpqua River Lighthouse",
        total: 365,
        max: 380,
        note: "Up to ≈ $380 worst case — about $130 cheaper than the plan above.",
        best: true,
      },
    ],

    tips: [
      "Toddlers are free everywhere (ages 0–2), and under-5 is free at Sea Lion Caves and Umpqua.",
      "Take the Aquarium's 10% AAA/military/one-card discount, and call ahead for the 15+ group rate — it could be cheaper.",
      "Swapping Sea Lion Caves for Umpqua River Lighthouse saves the group about $130.",
      "Pay parking per-day, not with annual passes — we're only here a few days.",
      "Grab the free VIP \"Insider Savings\" coupon book at Lincoln City Outlets customer service.",
    ],
  },
};
