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
      title: "Explore Florence",
      summary: "First full day on the coast. Pick something from the wish list!",
      food: MEAL_PLAN,
      items: [
        {
          type: "activity",
          name: "TODO — Pick from the wish list",
          time: "Daytime",
          notes: "See \"Places We Want to Visit\" below and claim one for today.",
          coords: [43.9826, -124.0998],
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
      title: "Coast Day",
      summary: "Pick something from the wish list!",
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
      title: "Heceta Head Lighthouse",
      summary: "Group day at Heceta Head Lighthouse.",
      food: MEAL_PLAN,
      items: [
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
      title: "Coast Day",
      summary: "Pick something from the wish list!",
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
      title: "Coast Day",
      summary: "Pick something from the wish list!",
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
      type: "activity",
      name: "Sea Lion Caves",
      notes: "America's largest sea cave. Admission charged. TODO: pick a day.",
      coords: [44.1219, -124.1281],
      mapsDest: "Sea Lion Caves, 91560 US-101, Florence, OR 97439",
    },
    {
      type: "activity",
      name: "Cape Perpetua & Whale Watching",
      notes: "Whale watching, tide pools, and big viewpoints. TODO: pick a day.",
      coords: [44.2809, -124.1086],
      mapsDest: "Cape Perpetua Scenic Area, Yachats, OR 97498",
    },
    {
      type: "activity",
      name: "Newport Aquarium (Oregon Coast Aquarium)",
      notes: "About 1 hr north of Florence. Admission charged. TODO: pick a day.",
      coords: [44.6171, -124.0474],
      mapsDest: "Oregon Coast Aquarium, 2820 SE Ferry Slip Rd, Newport, OR 97365",
    },
    {
      type: "activity",
      name: "Outlet Stores (Lincoln City Outlets)",
      notes: "About 1.5 hr north. TODO: confirm which outlets + pick a day.",
      coords: [44.9591, -124.0108],
      mapsDest: "Lincoln City Outlets, 1500 SE East Devils Lake Rd, Lincoln City, OR 97367",
    },
    {
      type: "activity",
      name: "Hobbit Trail",
      notes: "Magical forest-to-beach hike just south of Heceta Head. TODO: pick a day.",
      coords: [44.1440, -124.1225],
      mapsDest: "Hobbit Trail Trailhead, Florence, OR",
    },
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
};
