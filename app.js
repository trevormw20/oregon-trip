// =====================================================================
// Oregon Trip Dashboard — app logic
// =====================================================================

// ----- Icons + colors for each item type -----
const TYPE_META = {
  activity: { emoji: "🎉", color: "#ff6b6b", label: "Activity" },
  food:     { emoji: "🍔", color: "#ffa94d", label: "Food" },
  lodging:  { emoji: "🏨", color: "#4dabf7", label: "Lodging" },
  camp:     { emoji: "⛺", color: "#37b24d", label: "Camping" },
  drive:    { emoji: "🚗", color: "#9775fa", label: "Drive" },
};

// ----- Google Maps deep-link helpers -----
function gmapsSearchUrl([lat, lng]) {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
}

function gmapsDirectionsUrl([lat, lng]) {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;
}

// Best directions URL for an item: prefer a named place/address (exact),
// fall back to coordinates.
function directionsUrlFor(item) {
  if (item.mapsDest) {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(item.mapsDest)}&travelmode=driving`;
  }
  if (item.coords) return gmapsDirectionsUrl(item.coords);
  return null;
}

// ----- Money formatter -----
function money(n) {
  if (!n || n === 0) return "—";
  return "$" + Number(n).toLocaleString("en-US", { maximumFractionDigits: 0 });
}

// =====================================================================
// CURRENT-DAY DETECTION — auto-select today's tab from the device date
// =====================================================================
let todayIndex = -1; // index of the trip day matching the device's date, or -1

function dateOnly(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

// Parse a trip day's date string ("Sunday, August 2, 2026") to local midnight.
function parseTripDate(dateStr) {
  const part = dateStr.includes(",")
    ? dateStr.split(",").slice(1).join(",").trim()
    : dateStr;
  const d = new Date(part);
  return isNaN(d) ? null : dateOnly(d);
}

// Pure: given "now", decide which day to show + whether today is in range.
function computeDayInfo(now) {
  const today = dateOnly(now);
  const dates = TRIP.days.map(d => parseTripDate(d.date));
  const first = dates[0];
  const last = dates[dates.length - 1];

  const exact = dates.findIndex(d => d && d.getTime() === today.getTime());
  if (exact >= 0) {
    return { status: "during", initialIndex: exact, todayIndex: exact };
  }
  if (first && today.getTime() < first.getTime()) {
    const daysUntil = Math.round((first.getTime() - today.getTime()) / 86400000);
    return { status: "before", initialIndex: 0, todayIndex: -1, daysUntil };
  }
  if (last && today.getTime() > last.getTime()) {
    return { status: "after", initialIndex: dates.length - 1, todayIndex: -1 };
  }
  // Inside the span but no exact match (non-consecutive dates) — show the most
  // recent day that has already started; no "Today" badge in that gap.
  let idx = 0;
  dates.forEach((d, i) => { if (d && d.getTime() <= today.getTime()) idx = i; });
  return { status: "during", initialIndex: idx, todayIndex: -1 };
}

// Apply the computed info: set the active + today day and a small status note.
function pickInitialDay(now) {
  const info = computeDayInfo(now || new Date());
  activeDayIndex = info.initialIndex;
  todayIndex = info.todayIndex;

  let note = "";
  if (info.status === "before") {
    note = `🧳 Trip starts in ${info.daysUntil} day${info.daysUntil === 1 ? "" : "s"} — showing Day 1.`;
  } else if (info.status === "after") {
    note = "🎉 Trip complete — welcome back! Showing the last day.";
  } else if (info.todayIndex >= 0) {
    note = `📍 Today is Day ${TRIP.days[info.todayIndex].day}.`;
  }
  const el = document.getElementById("trip-status");
  if (el) el.textContent = note;
  return info;
}

// =====================================================================
// HEADER
// =====================================================================
function renderHeader() {
  document.getElementById("trip-title").textContent = TRIP.title;
  document.getElementById("trip-subtitle").textContent = TRIP.subtitle;
  document.getElementById("trip-family").textContent = TRIP.family;
}

// =====================================================================
// STATS
// =====================================================================
function renderStats() {
  const totalDays = TRIP.days.length;

  let totalMiles = 0;
  let activityCount = 0;
  let campNights = 0;
  for (const d of TRIP.days) {
    for (const it of d.items) {
      totalMiles += Number(it.miles || 0);
      if (it.type === "activity") activityCount++;
      if (it.type === "camp") campNights++;
    }
  }

  const stats = [
    { icon: "📅", label: "Days",            value: totalDays },
    { icon: "🚗", label: "Round-Trip Miles", value: totalMiles > 0 ? totalMiles.toLocaleString("en-US") : "TBD" },
    { icon: "⛺", label: "Nights Camping",   value: campNights },
    { icon: "🎢", label: "Activities",       value: activityCount },
  ];

  document.getElementById("stats").innerHTML = stats.map(s => `
    <div class="stat-card">
      <span class="stat-icon">${s.icon}</span>
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join("");
}

// =====================================================================
// DAY TABS
// =====================================================================
let activeDayIndex = 0;

function renderTabs() {
  const tabs = TRIP.days.map((d, i) => `
    <button class="day-tab ${i === activeDayIndex ? "active" : ""}${i === todayIndex ? " today" : ""}" data-i="${i}">
      ${i === todayIndex ? `<span class="today-badge">Today</span>` : ""}
      <span class="day-num">Day ${d.day}</span>
      <span class="day-tab-when">${shortDate(d.date)} · ${weekdayFromDate(d.date)}</span>
    </button>
  `).join("");
  document.getElementById("day-tabs").innerHTML = tabs;

  document.querySelectorAll(".day-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      activeDayIndex = Number(btn.dataset.i);
      renderTabs();
      renderDayDetail();
    });
  });

  // Keep the selected day visible in the horizontal scroller (phones)
  const activeBtn = document.querySelector(".day-tab.active");
  if (activeBtn && activeBtn.scrollIntoView) {
    activeBtn.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }
}

function shortDate(dateStr) {
  // e.g. "Thursday, July 30, 2026"  ->  "Jul 30"
  const m = dateStr.match(/([A-Za-z]+) (\d+),/);
  if (!m) return "";
  return `${m[1].slice(0, 3)} ${m[2]}`;
}

// Derive the weekday from the actual date so it's always correct,
// even if someone edits the date in data.js. Drops any weekday already
// written at the start of the string and recomputes from the real date.
function weekdayFromDate(dateStr) {
  const datePart = dateStr.includes(",")
    ? dateStr.split(",").slice(1).join(",").trim() // "August 2, 2026"
    : dateStr;
  const d = new Date(datePart);
  if (isNaN(d)) return "";
  return d.toLocaleDateString("en-US", { weekday: "long" });
}

// =====================================================================
// DAY DETAIL
// =====================================================================
function renderDayDetail() {
  const day = TRIP.days[activeDayIndex];
  const el = document.getElementById("day-detail-body");
  if (!el) return;
  const isToday = activeDayIndex === todayIndex;

  // Keep the collapsible header label in sync with the selected day,
  // so the right day shows even when the section is collapsed.
  const titleEl = document.getElementById("day-detail-title");
  if (titleEl) {
    titleEl.textContent = `Day ${day.day} · ${weekdayFromDate(day.date)}`;
  }

  const itemsHtml = day.items.map(item => {
    const meta = TYPE_META[item.type] || TYPE_META.activity;
    const dirUrl = directionsUrlFor(item);
    const showCost = Number(item.cost) > 0;
    return `
      <div class="item ${item.type}">
        <div class="item-icon" title="${meta.label}">${meta.emoji}</div>
        <div class="item-body">
          <h3>${escapeHtml(item.name)}</h3>
          ${item.time ? `<p class="item-time">⏰ ${escapeHtml(item.time)}</p>` : ""}
          ${item.notes ? `<p class="item-notes">${escapeHtml(item.notes)}</p>` : ""}
        </div>
        <div class="item-actions">
          ${showCost ? `<span class="item-cost">${money(item.cost)}</span>` : ""}
          ${dirUrl ? `
            <a class="maps-btn"
               href="${dirUrl}"
               target="_blank" rel="noopener">
               🧭 Directions
            </a>` : ""}
        </div>
      </div>
    `;
  }).join("");

  const foodHtml = (day.food && day.food !== "TODO")
    ? `<p class="day-food">🍴 <strong>Food:</strong> ${escapeHtml(day.food)}</p>`
    : "";

  el.innerHTML = `
    <h2>Day ${day.day} · ${weekdayFromDate(day.date)}: ${escapeHtml(day.title)}${isToday ? ` <span class="today-badge inline">Today</span>` : ""}</h2>
    <p class="day-date">${escapeHtml(day.date)}</p>
    ${day.summary ? `<p class="day-summary">${escapeHtml(day.summary)}</p>` : ""}
    ${foodHtml}
    ${itemsHtml}
  `;
}

// =====================================================================
// WISH LIST — places to visit, no day picked yet
// =====================================================================
function renderWishlist() {
  const grid = document.getElementById("wishlist-grid");
  const list = TRIP.wishlist || [];
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = `<p class="wishlist-empty">Nothing on the wish list yet.</p>`;
    return;
  }

  grid.innerHTML = list.map(place => {
    const meta = TYPE_META[place.type] || TYPE_META.activity;
    const dirUrl = directionsUrlFor(place);
    return `
      <div class="wish-card ${place.type}">
        <div class="wish-icon">${meta.emoji}</div>
        <div class="wish-body">
          <h3>${escapeHtml(place.name)}</h3>
          ${place.notes ? `<p class="wish-notes">${escapeHtml(place.notes)}</p>` : ""}
        </div>
        ${dirUrl ? `
          <a class="maps-btn" href="${dirUrl}" target="_blank" rel="noopener">🧭 Directions</a>
        ` : `<span class="wish-noloc">📍 location TBD</span>`}
      </div>
    `;
  }).join("");
}

// =====================================================================
// WHO'S COOKING — dinner sign-up, one row per night of the trip
// =====================================================================
function renderDinners() {
  const el = document.getElementById("cooking-section-body");
  const list = TRIP.dinners || [];
  if (!el) return;

  const rows = list.map(d => {
    const cookLabel = d.eatingOut
      ? `🍽️ Eating out`
      : (d.cook && d.cook !== "TBD"
          ? `👩‍🍳 ${escapeHtml(d.cook)}${d.meal ? ` — <span class="cook-meal">${escapeHtml(d.meal)}</span>` : ""}`
          : `<span class="cook-tbd">Sign up — TBD</span>`);

    // "Night" cell: show the day number when scheduled, else just the date
    // (e.g. "Night TBD") so an unscheduled eat-out night still reads clearly.
    const whenHtml = (d.day != null)
      ? `<span class="cook-day">Day ${d.day}</span>${d.date ? `<span class="cook-date">${escapeHtml(d.date)}</span>` : ""}`
      : `<span class="cook-day">${escapeHtml(d.date || "Night TBD")}</span>`;

    // "Where" cell: place name, optional address line, optional Directions link
    const dirUrl = directionsUrlFor(d);
    const placeHtml = `
      ${escapeHtml(d.place || "")}
      ${d.address ? `<span class="cook-addr">${escapeHtml(d.address)}</span>` : ""}
      ${dirUrl ? `<a class="maps-btn cook-dir" href="${dirUrl}" target="_blank" rel="noopener">🧭 Directions</a>` : ""}
    `;

    return `
      <div class="cook-row ${d.eatingOut ? "out" : ""}">
        <div class="cook-when">${whenHtml}</div>
        <div class="cook-place">${placeHtml}</div>
        <div class="cook-who">${cookLabel}</div>
      </div>
    `;
  }).join("");

  el.innerHTML = `
    <p class="cooking-help">
      Each family handles its own breakfast &amp; lunch. Sign up to cook one
      group dinner — or mark a night as eating out.
    </p>
    <div class="cook-list">
      <div class="cook-row head">
        <div class="cook-when">Night</div>
        <div class="cook-place">Where</div>
        <div class="cook-who">Cook</div>
      </div>
      ${rows}
    </div>
  `;
}

// =====================================================================
// BUDGET / COSTS — per-attraction admission prices by age tier (no totals)
// =====================================================================
function renderBudget() {
  const el = document.getElementById("budget-section-body");
  const b = TRIP.budget;
  if (!el || !b) return;

  const isFreePrice = (p) => /^free$/i.test(String(p).trim());

  const rows = (b.attractions || []).map(a => {
    const meta = TYPE_META[a.type] || TYPE_META.activity;
    const prices = a.prices || [];

    const tiers = prices.map(p => {
      const free = isFreePrice(p.price);
      return `
        <li class="price-tier">
          <span class="tier-name">${escapeHtml(p.tier)}${p.ages ? ` <span class="tier-ages">${escapeHtml(p.ages)}</span>` : ""}</span>
          <span class="tier-price ${free ? "free" : ""}">${escapeHtml(p.price)}${p.toConfirm ? "*" : ""}</span>
        </li>
      `;
    }).join("");

    return `
      <div class="budget-row ${a.isAlternative ? "alt" : ""}">
        <div class="budget-row-head">
          <span class="budget-emoji">${meta.emoji}</span>
          <p class="budget-name">${escapeHtml(a.name)}</p>
        </div>
        <ul class="price-list">${tiers}</ul>
        ${a.note ? `<p class="budget-note">${escapeHtml(a.note)}</p>` : ""}
      </div>
    `;
  }).join("");

  const tips = (b.tips || []).map(t => `<li>${escapeHtml(t)}</li>`).join("");

  const sources = (b.sources || []).map(s =>
    `<a href="${encodeURI(s.url)}" target="_blank" rel="noopener">${escapeHtml(s.label)}</a>`
  ).join(" · ");

  el.innerHTML = `
    ${b.groupSummary ? `<p class="budget-group">👨‍👩‍👧‍👦 ${escapeHtml(b.groupSummary)}</p>` : ""}
    ${b.excludeNote ? `<p class="budget-exclude">⛺ ${escapeHtml(b.excludeNote)}</p>` : ""}

    <div class="budget-list">${rows}</div>

    ${tips ? `
      <div class="budget-tips">
        <h3>💡 Money-Saving Tips</h3>
        <ul>${tips}</ul>
      </div>` : ""}

    ${sources ? `<p class="budget-sources">Prices from official sites: ${sources}</p>` : ""}
  `;
}

// =====================================================================
// MAP — Leaflet
// =====================================================================
let map = null;
let mapBounds = []; // remembered for invalidateSize/fitBounds when the map is revealed

function renderMap() {
  // Collect all locations (home base + every item that has coords)
  const allPoints = [];

  allPoints.push({
    type: "home",
    coords: TRIP.homeBase.coords,
    name: `Home Base: ${TRIP.homeBase.name}`,
    dayLabel: "Start & End",
    notes: "Where the journey begins and ends.",
  });

  TRIP.days.forEach((day) => {
    day.items.forEach((item, itemIdx) => {
      if (!item.coords) return;
      allPoints.push({
        type: item.type,
        coords: item.coords,
        name: item.name,
        dayLabel: `Day ${day.day} — ${day.title}`,
        notes: item.notes || "",
        cost: item.cost,
        mapsDest: item.mapsDest,
      });
    });
  });

  // Wish-list places (no day picked yet) — flagged so they get a ★ badge
  (TRIP.wishlist || []).forEach(place => {
    if (!place.coords) return;
    allPoints.push({
      type: place.type,
      coords: place.coords,
      name: place.name,
      dayLabel: "⭐ Wish list — no day picked yet",
      notes: place.notes || "",
      mapsDest: place.mapsDest,
      isWish: true,
    });
  });

  // Initialize Leaflet map
  map = L.map("map", { scrollWheelZoom: false });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(map);

  // Add a marker for every point
  const bounds = [];
  allPoints.forEach(pt => {
    const meta = pt.type === "home"
      ? { emoji: "🏠", color: "#212529", label: "Home Base" }
      : TYPE_META[pt.type] || TYPE_META.activity;

    const icon = L.divIcon({
      className: "",
      html: `
        <div class="trip-marker ${pt.isWish ? "wish" : ""}" style="background:${meta.color}">
          <div class="trip-marker-inner">${meta.emoji}</div>
          ${pt.isWish ? `<span class="wish-badge">★</span>` : ""}
        </div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -28],
    });

    const popupHtml = `
      <div>
        <p class="popup-title">${escapeHtml(pt.name)}</p>
        <p class="popup-meta">${escapeHtml(pt.dayLabel)}</p>
        ${pt.notes ? `<p class="popup-notes">${escapeHtml(pt.notes)}</p>` : ""}
        ${pt.cost ? `<p class="popup-notes"><strong>${money(pt.cost)}</strong></p>` : ""}
        <a class="popup-btn"
           href="${directionsUrlFor(pt) || gmapsDirectionsUrl(pt.coords)}"
           target="_blank" rel="noopener">
           🧭 Open in Google Maps
        </a>
      </div>
    `;

    L.marker(pt.coords, { icon })
      .addTo(map)
      .bindPopup(popupHtml);

    bounds.push(pt.coords);
  });

  // Draw a soft polyline tracing the trip route (in order)
  const routeCoords = [TRIP.homeBase.coords];
  TRIP.days.forEach(day => {
    day.items.forEach(item => {
      if (item.coords) routeCoords.push(item.coords);
    });
  });
  routeCoords.push(TRIP.homeBase.coords); // return home

  L.polyline(routeCoords, {
    color: "#ff6b6b",
    weight: 3,
    opacity: 0.5,
    dashArray: "8, 8",
  }).addTo(map);

  // Fit map to show everything
  mapBounds = bounds;
  if (bounds.length > 0) {
    map.fitBounds(bounds, { padding: [40, 40] });
  } else {
    map.setView([44.5, -120], 6);
  }
}

// =====================================================================
// FAMILY NOTES — schedule changes + family questions
// =====================================================================
// Notes live in localStorage (per browser). Export/Import lets the
// family share notes via a JSON file committed to the GitHub repo.

const NOTES_STORAGE_KEY  = "oregon-trip-notes-v1";
const AUTHOR_STORAGE_KEY = "oregon-trip-note-author";

function loadNotes() {
  try {
    const raw = localStorage.getItem(NOTES_STORAGE_KEY);
    if (!raw) return { schedule: [], questions: [] };
    const parsed = JSON.parse(raw);
    return {
      schedule:  Array.isArray(parsed.schedule)  ? parsed.schedule  : [],
      questions: Array.isArray(parsed.questions) ? parsed.questions : [],
    };
  } catch (e) {
    console.warn("Could not load notes:", e);
    return { schedule: [], questions: [] };
  }
}

function saveNotes(notes) {
  localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
}

function formatNoteDate(iso) {
  const d = new Date(iso);
  if (isNaN(d)) return "";
  return d.toLocaleString("en-US", {
    month: "short", day: "numeric",
    hour: "numeric", minute: "2-digit",
  });
}

function renderNoteList(kind) {
  const notes = loadNotes();
  const list  = notes[kind] || [];
  const el    = document.getElementById(`notes-${kind}`);
  el.innerHTML = list.map(n => `
    <li class="note-item ${kind}" data-id="${n.id}">
      <div>
        <p class="note-text">${escapeHtml(n.text)}</p>
        <p class="note-meta">
          ${n.author ? `<span class="note-author">${escapeHtml(n.author)}</span> · ` : ""}
          ${formatNoteDate(n.createdAt)}
        </p>
      </div>
      <button class="delete-note-btn" title="Delete" aria-label="Delete note">✕</button>
    </li>
  `).join("");

  el.querySelectorAll(".delete-note-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.closest(".note-item").dataset.id;
      const all = loadNotes();
      all[kind] = all[kind].filter(n => n.id !== id);
      saveNotes(all);
      renderNoteList(kind);
    });
  });
}

function addNote(kind, text) {
  if (!text || !text.trim()) return;
  const all = loadNotes();
  const author = document.getElementById("note-author").value.trim();
  all[kind].unshift({
    id: "n_" + Date.now() + "_" + Math.random().toString(36).slice(2, 7),
    text: text.trim(),
    author: author || null,
    createdAt: new Date().toISOString(),
  });
  saveNotes(all);
  renderNoteList(kind);
}

// On first visit (no notes saved yet), seed from the repo's
// oregon-trip-notes.json so everyone starts with the shared notes.
// Works on the hosted site; silently skipped if the file can't be fetched.
async function maybeSeedNotes() {
  if (localStorage.getItem(NOTES_STORAGE_KEY)) return;
  try {
    const res = await fetch("oregon-trip-notes.json", { cache: "no-store" });
    if (!res.ok) return;
    const data = await res.json();
    const seed = {
      schedule:  Array.isArray(data.schedule)  ? data.schedule  : [],
      questions: Array.isArray(data.questions) ? data.questions : [],
    };
    if (seed.schedule.length || seed.questions.length) {
      saveNotes(seed);
    }
  } catch (e) {
    /* file:// or offline — ignore, start with empty notes */
  }
}

function setupNotes() {
  // Restore author name across sessions
  const authorInput = document.getElementById("note-author");
  const savedAuthor = localStorage.getItem(AUTHOR_STORAGE_KEY) || "";
  authorInput.value = savedAuthor;
  authorInput.addEventListener("input", () => {
    localStorage.setItem(AUTHOR_STORAGE_KEY, authorInput.value);
  });

  // Add-note forms
  document.querySelectorAll(".note-add-form").forEach(form => {
    const kind = form.dataset.kind;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const ta = form.querySelector("textarea");
      addNote(kind, ta.value);
      ta.value = "";
      ta.focus();
    });
  });

  // Export → download JSON
  document.getElementById("export-notes").addEventListener("click", () => {
    const notes = loadNotes();
    const payload = {
      _meta: {
        trip: TRIP.title,
        exportedAt: new Date().toISOString(),
        version: 1,
      },
      ...notes,
    };
    const blob = new Blob(
      [JSON.stringify(payload, null, 2)],
      { type: "application/json" },
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "oregon-trip-notes.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  // Import → load JSON file
  const fileInput = document.getElementById("import-file");
  document.getElementById("import-notes").addEventListener("click", () => fileInput.click());
  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const parsed = JSON.parse(ev.target.result);
        const incoming = {
          schedule:  Array.isArray(parsed.schedule)  ? parsed.schedule  : [],
          questions: Array.isArray(parsed.questions) ? parsed.questions : [],
        };
        const choice = confirm(
          `Found ${incoming.schedule.length} schedule note(s) and ` +
          `${incoming.questions.length} question(s).\n\n` +
          `Click OK to MERGE with your existing notes.\n` +
          `Click Cancel to REPLACE your existing notes.`
        );
        let merged;
        if (choice) {
          const current = loadNotes();
          merged = {
            schedule:  mergeById(current.schedule,  incoming.schedule),
            questions: mergeById(current.questions, incoming.questions),
          };
        } else {
          merged = incoming;
        }
        saveNotes(merged);
        renderNoteList("schedule");
        renderNoteList("questions");
      } catch (err) {
        alert("Could not read that file. Make sure it's the JSON from Export Notes.");
        console.error(err);
      }
    };
    reader.readAsText(file);
    fileInput.value = ""; // reset so the same file can be re-picked
  });
}

function mergeById(a, b) {
  const byId = new Map();
  for (const n of [...a, ...b]) byId.set(n.id, n);
  return [...byId.values()].sort(
    (x, y) => new Date(y.createdAt) - new Date(x.createdAt)
  );
}

// =====================================================================
// UTIL
// =====================================================================
function escapeHtml(str) {
  if (str == null) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// =====================================================================
// COLLAPSIBLE SECTIONS — tappable headers, state remembered per device
// =====================================================================
const COLLAPSE_KEY = "oregonTrip.collapsed";

// First-time defaults (true = start collapsed). Keep the top of the page
// useful on a phone; collapse the longer reference sections by default.
// Once the user toggles a section, their choice is what's remembered.
const COLLAPSE_DEFAULTS = {
  "day-detail":       false,
  "wishlist-section": false,
  "cooking-section":  false,
  "budget-section":   true,
  "notes-section":    true,
  "map-section":      true,
};

function loadCollapsed() {
  try {
    const raw = localStorage.getItem(COLLAPSE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return (parsed && typeof parsed === "object") ? parsed : {};
  } catch (e) {
    return {};
  }
}

function saveCollapsed(state) {
  try {
    localStorage.setItem(COLLAPSE_KEY, JSON.stringify(state));
  } catch (e) {
    /* storage full / disabled — ignore */
  }
}

function applyCollapse(section, head, chevron, collapsed) {
  section.classList.toggle("collapsed", collapsed);
  if (head) head.setAttribute("aria-expanded", String(!collapsed));
  if (chevron) chevron.textContent = collapsed ? "▸" : "▾";
}

// Leaflet renders tiles wrong if its container was hidden/zero-size when
// created. Refresh size (and re-fit) once the map section is revealed.
function refreshMap() {
  if (!map) return;
  setTimeout(() => {
    map.invalidateSize();
    if (mapBounds && mapBounds.length) {
      map.fitBounds(mapBounds, { padding: [40, 40] });
    }
  }, 60);
}

function setupCollapsibles() {
  const saved = loadCollapsed();

  document.querySelectorAll(".sec-head").forEach(head => {
    const id = head.dataset.section;
    const section = document.getElementById(id);
    if (!section) return;
    const chevron = head.querySelector(".sec-chevron");

    // Saved state wins; otherwise fall back to the first-time default.
    const collapsed = (id in saved) ? !!saved[id] : !!COLLAPSE_DEFAULTS[id];
    applyCollapse(section, head, chevron, collapsed);

    head.addEventListener("click", () => {
      const nowCollapsed = !section.classList.contains("collapsed");
      applyCollapse(section, head, chevron, nowCollapsed);
      const state = loadCollapsed();
      state[id] = nowCollapsed;
      saveCollapsed(state);
      if (id === "map-section" && !nowCollapsed) refreshMap();
    });
  });
}

// Quick-nav still jumps to each section; if the target is collapsed, expand
// it (visually) so the content is visible on arrival. Doesn't overwrite the
// saved preference — only deliberate header taps do that.
function setupQuickNav() {
  document.querySelectorAll(".quick-nav a").forEach(link => {
    link.addEventListener("click", () => {
      const id = (link.getAttribute("href") || "").slice(1);
      const section = document.getElementById(id);
      if (section && section.classList.contains("collapsed")) {
        const head = section.querySelector(".sec-head");
        const chevron = head && head.querySelector(".sec-chevron");
        applyCollapse(section, head, chevron, false);
        if (id === "map-section") refreshMap();
      }
    });
  });
}

// =====================================================================
// BOOT
// =====================================================================
document.addEventListener("DOMContentLoaded", async () => {
  renderHeader();
  renderStats();
  pickInitialDay();            // auto-select today's day (or sensible default)
  renderTabs();
  renderDayDetail();
  renderWishlist();
  renderDinners();
  renderBudget();
  await maybeSeedNotes();
  setupNotes();
  renderNoteList("schedule");
  renderNoteList("questions");
  renderMap();
  setupCollapsibles();         // after renderMap so the map var exists
  setupQuickNav();
});
