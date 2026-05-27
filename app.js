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

// ----- Money formatter -----
function money(n) {
  if (!n || n === 0) return "—";
  return "$" + Number(n).toLocaleString("en-US", { maximumFractionDigits: 0 });
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

  let totalCost = 0;
  let activityCount = 0;
  let mealCount = 0;
  for (const d of TRIP.days) {
    for (const it of d.items) {
      totalCost += Number(it.cost || 0);
      if (it.type === "activity") activityCount++;
      if (it.type === "food") mealCount++;
    }
  }

  const stats = [
    { icon: "📅", label: "Days",        value: totalDays },
    { icon: "🎢", label: "Activities",  value: activityCount },
    { icon: "🍽️", label: "Meals Out",   value: mealCount },
    { icon: "💰", label: "Total Cost",  value: totalCost > 0 ? money(totalCost) : "TBD" },
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
    <button class="day-tab ${i === activeDayIndex ? "active" : ""}" data-i="${i}">
      <span class="day-num">Day ${d.day}</span>
      ${shortDate(d.date)}
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
}

function shortDate(dateStr) {
  // e.g. "Thursday, July 30, 2026"  ->  "Jul 30"
  const m = dateStr.match(/([A-Za-z]+) (\d+),/);
  if (!m) return "";
  return `${m[1].slice(0, 3)} ${m[2]}`;
}

// =====================================================================
// DAY DETAIL
// =====================================================================
function renderDayDetail() {
  const day = TRIP.days[activeDayIndex];
  const el = document.getElementById("day-detail");

  const itemsHtml = day.items.map(item => {
    const meta = TYPE_META[item.type] || TYPE_META.activity;
    const costClass = item.cost > 0 ? "" : "zero";
    return `
      <div class="item ${item.type}">
        <div class="item-icon" title="${meta.label}">${meta.emoji}</div>
        <div class="item-body">
          <h3>${escapeHtml(item.name)}</h3>
          ${item.time ? `<p class="item-time">⏰ ${escapeHtml(item.time)}</p>` : ""}
          ${item.notes ? `<p class="item-notes">${escapeHtml(item.notes)}</p>` : ""}
        </div>
        <div class="item-actions">
          <span class="item-cost ${costClass}">${money(item.cost)}</span>
          ${item.coords ? `
            <a class="maps-btn"
               href="${gmapsDirectionsUrl(item.coords)}"
               target="_blank" rel="noopener">
               🧭 Directions
            </a>` : ""}
        </div>
      </div>
    `;
  }).join("");

  el.innerHTML = `
    <h2>Day ${day.day}: ${escapeHtml(day.title)}</h2>
    <p class="day-date">${escapeHtml(day.date)}</p>
    <p class="day-summary">${escapeHtml(day.summary)}</p>
    ${itemsHtml}
  `;
}

// =====================================================================
// MAP — Leaflet
// =====================================================================
let map = null;

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
      });
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
        <div class="trip-marker" style="background:${meta.color}">
          <div class="trip-marker-inner">${meta.emoji}</div>
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
           href="${gmapsDirectionsUrl(pt.coords)}"
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
// BOOT
// =====================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderStats();
  renderTabs();
  renderDayDetail();
  setupNotes();
  renderNoteList("schedule");
  renderNoteList("questions");
  renderMap();
});
