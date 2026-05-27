// =====================================================================
// OREGON TRIP DATA — Edit this file to fill in your trip details
// =====================================================================
// Every place needs a `coords: [lat, lng]` so it shows on the map and
// the "Open in Google Maps" buttons work. You can grab coords by
// right-clicking any location on google.com/maps and clicking the
// coordinate numbers at the top of the popup to copy them.
//
// Categories you can use for activities: "activity", "food", "lodging",
// "drive", "camp"
// =====================================================================

const TRIP = {
  title: "The Oregon Coast Adventure",
  subtitle: "A family road trip — July 30 to August 6, 2026",
  family: "The ___ Family",  // <-- put your family name here

  // Optional totals — auto-calculated below from each day's items.
  // You can override these manually if you want.
  budget: null,

  // The whole trip route, in order. Used for the overview map.
  homeBase: {
    name: "Pocatello, ID",
    coords: [42.8713, -112.4455],
  },

  days: [
    // ---------------------------------------------------------------
    // DAY 1 — Thursday, July 30, 2026
    // Drive: Pocatello, ID  →  Airbnb pit stop (somewhere between ID & OR)
    // ---------------------------------------------------------------
    {
      day: 1,
      date: "Thursday, July 30, 2026",
      title: "Hit the Road!",
      summary: "Leave Pocatello, drive west, sleep at the pit stop Airbnb.",
      items: [
        {
          type: "drive",
          name: "Drive: Pocatello → Pit Stop Airbnb",
          time: "Morning – Afternoon",
          notes: "TODO: how many hours, where exactly is the Airbnb?",
          coords: [43.6150, -116.2023],   // TODO: replace with actual Airbnb coords (currently Boise, ID as a guess)
          cost: 0,
        },
        {
          type: "lodging",
          name: "Pit Stop Airbnb",
          time: "Overnight",
          notes: "TODO: address, check-in time, host info, wifi password",
          coords: [43.6150, -116.2023],   // TODO: actual Airbnb coords
          cost: 0,                         // TODO: nightly price
        },
        {
          type: "food",
          name: "Dinner near Airbnb",
          time: "Evening",
          notes: "TODO: pick a restaurant",
          coords: [43.6150, -116.2023],
          cost: 0,
        },
      ],
    },

    // ---------------------------------------------------------------
    // DAY 2 — Friday, July 31, 2026
    // Drive: Airbnb  →  Oregon Coast (Cannon Beach / Seaside area)
    // ---------------------------------------------------------------
    {
      day: 2,
      date: "Friday, July 31, 2026",
      title: "We Made It to the Coast!",
      summary: "Long driving day. End at our coast hotel.",
      items: [
        {
          type: "drive",
          name: "Drive: Airbnb → Oregon Coast",
          time: "Morning – Late Afternoon",
          notes: "TODO: hours, planned stops along I-84",
          coords: [45.8918, -123.9615],   // Cannon Beach as default
          cost: 0,
        },
        {
          type: "lodging",
          name: "Coast Hotel (Night 1 of ?)",
          time: "Check-in",
          notes: "TODO: hotel name, address, confirmation #",
          coords: [45.8918, -123.9615],
          cost: 0,                         // TODO: per-night price
        },
        {
          type: "food",
          name: "First-Night Dinner",
          time: "Evening",
          notes: "TODO: pick a restaurant on the coast",
          coords: [45.8918, -123.9615],
          cost: 0,
        },
      ],
    },

    // ---------------------------------------------------------------
    // DAY 3 — Saturday, August 1, 2026
    // ---------------------------------------------------------------
    {
      day: 3,
      date: "Saturday, August 1, 2026",
      title: "Beach Day at Cannon Beach",
      summary: "Haystack Rock, tide pools, sandcastles.",
      items: [
        {
          type: "activity",
          name: "Haystack Rock & Tide Pools",
          time: "Morning (low tide is best)",
          notes: "TODO: check low tide time for Aug 1, 2026",
          coords: [45.8847, -123.9686],
          cost: 0,
        },
        {
          type: "food",
          name: "Lunch in Cannon Beach",
          time: "12:00 PM",
          notes: "TODO: restaurant",
          coords: [45.8918, -123.9615],
          cost: 0,
        },
        {
          type: "activity",
          name: "Ecola State Park",
          time: "Afternoon",
          notes: "Day-use fee may apply. Great viewpoints.",
          coords: [45.9213, -123.9760],
          cost: 0,
        },
        {
          type: "food",
          name: "Dinner",
          time: "Evening",
          notes: "TODO",
          coords: [45.8918, -123.9615],
          cost: 0,
        },
      ],
    },

    // ---------------------------------------------------------------
    // DAY 4 — Sunday, August 2, 2026
    // ---------------------------------------------------------------
    {
      day: 4,
      date: "Sunday, August 2, 2026",
      title: "Seaside & The Promenade",
      summary: "Drive up to Seaside, arcade, candy shops, beach.",
      items: [
        {
          type: "activity",
          name: "Seaside Promenade & Beach",
          time: "Morning",
          notes: "TODO: bikes? Carousel? Arcade?",
          coords: [45.9932, -123.9226],
          cost: 0,
        },
        {
          type: "food",
          name: "Lunch in Seaside",
          time: "12:00 PM",
          notes: "TODO",
          coords: [45.9932, -123.9226],
          cost: 0,
        },
        {
          type: "activity",
          name: "Afternoon Activity",
          time: "Afternoon",
          notes: "TODO: aquarium? mini golf? more beach?",
          coords: [45.9932, -123.9226],
          cost: 0,
        },
        {
          type: "food",
          name: "Dinner",
          time: "Evening",
          notes: "TODO",
          coords: [45.8918, -123.9615],
          cost: 0,
        },
      ],
    },

    // ---------------------------------------------------------------
    // DAY 5 — Monday, August 3, 2026
    // ---------------------------------------------------------------
    {
      day: 5,
      date: "Monday, August 3, 2026",
      title: "Scenic Drive Day",
      summary: "TODO: lighthouse? Astoria? Tillamook cheese factory?",
      items: [
        {
          type: "activity",
          name: "TODO — Morning Activity",
          time: "Morning",
          notes: "",
          coords: [45.8918, -123.9615],
          cost: 0,
        },
        {
          type: "food",
          name: "Lunch",
          time: "12:00 PM",
          notes: "TODO",
          coords: [45.8918, -123.9615],
          cost: 0,
        },
        {
          type: "activity",
          name: "TODO — Afternoon Activity",
          time: "Afternoon",
          notes: "",
          coords: [45.8918, -123.9615],
          cost: 0,
        },
      ],
    },

    // ---------------------------------------------------------------
    // DAY 6 — Tuesday, August 4, 2026  →  CAMPING NIGHT
    // ---------------------------------------------------------------
    {
      day: 6,
      date: "Tuesday, August 4, 2026",
      title: "Pack Up & Drive to Camp",
      summary: "Leave the hotel, drive to the campground, set up camp.",
      items: [
        {
          type: "drive",
          name: "Drive: Coast Hotel → Campground",
          time: "Morning",
          notes: "TODO: drive time",
          coords: [45.8918, -123.9615],   // TODO: campground coords
          cost: 0,
        },
        {
          type: "camp",
          name: "Campground (TODO: name)",
          time: "Check-in",
          notes: "TODO: site #, reservation confirmation, what to bring",
          coords: [45.8918, -123.9615],   // TODO: campground coords
          cost: 0,                         // TODO: per-night price
        },
        {
          type: "activity",
          name: "Set Up Camp & Campfire",
          time: "Afternoon – Evening",
          notes: "Firewood? S'mores supplies?",
          coords: [45.8918, -123.9615],
          cost: 0,
        },
      ],
    },

    // ---------------------------------------------------------------
    // DAY 7 — Wednesday, August 5, 2026
    // ---------------------------------------------------------------
    {
      day: 7,
      date: "Wednesday, August 5, 2026",
      title: "Camp Day",
      summary: "Hike, swim, explore. Second night at camp.",
      items: [
        {
          type: "activity",
          name: "TODO — Hike / Swim / Explore",
          time: "All day",
          notes: "",
          coords: [45.8918, -123.9615],
          cost: 0,
        },
        {
          type: "camp",
          name: "Second Night at Camp",
          time: "Overnight",
          notes: "",
          coords: [45.8918, -123.9615],
          cost: 0,
        },
      ],
    },

    // ---------------------------------------------------------------
    // DAY 8 — Thursday, August 6, 2026  →  LONG DRIVE HOME
    // ---------------------------------------------------------------
    {
      day: 8,
      date: "Thursday, August 6, 2026",
      title: "Heading Home",
      summary: "Pack up camp. Long drive back to Pocatello.",
      items: [
        {
          type: "drive",
          name: "Drive: Campground → Pocatello, ID",
          time: "All day",
          notes: "TODO: stops along the way, lunch spot",
          coords: [42.8713, -112.4455],
          cost: 0,
        },
        {
          type: "food",
          name: "Lunch on the Road",
          time: "12:00 PM",
          notes: "TODO",
          coords: [43.6150, -116.2023],
          cost: 0,
        },
      ],
    },
  ],
};
