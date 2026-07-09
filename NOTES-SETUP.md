# Shared Family Notes — Google Sheet setup

By default, Family Notes save only in each person's own browser. Follow these
one-time steps to make them **shared**: everyone's notes save to one Google
Sheet, and the dashboard refreshes to show the same list for the whole family.

You only need to do this **once** (any one family member sets it up).

---

## 1. Create the Google Sheet

1. Go to <https://sheets.google.com> and create a **blank** spreadsheet.
2. Name it something like `Oregon Trip Notes`.
   (You don't need to add any columns — the script creates them for you.)

## 2. Add the script

1. In the sheet, click **Extensions → Apps Script**.
2. Delete whatever code is in the editor.
3. Open `google-apps-script.gs` from this project, copy **all** of it, and
   paste it into the Apps Script editor.
4. Click the **Save** icon (💾).

## 3. Deploy it as a web app

1. Click **Deploy → New deployment**.
2. Click the gear ⚙ next to "Select type" and pick **Web app**.
3. Set:
   - **Description:** `Oregon trip notes` (anything)
   - **Execute as:** **Me**
   - **Who has access:** **Anyone**
4. Click **Deploy**.
5. Google will ask you to **authorize** — click through and allow it.
   (It's your own script writing to your own sheet.)
6. Copy the **Web app URL**. It ends in `/exec` and looks like:
   `https://script.google.com/macros/s/AKfy...long.../exec`

## 4. Connect the dashboard

Open `app.js`, find this line near the top of the notes section:

```js
const NOTES_SYNC_URL =
  (typeof window !== "undefined" && window.NOTES_SYNC_URL) ||
  ""; // <-- paste your Google Apps Script /exec URL here
```

Paste your `/exec` URL between the quotes:

```js
  "https://script.google.com/macros/s/AKfy...long.../exec";
```

Save and commit/push. Done! 🎉

---

## How it works / good to know

- Everyone who opens the dashboard now reads and writes the **same sheet**.
  New notes appear for everyone within ~20 seconds (and when you switch back
  to the tab).
- Notes still cache on each device, so they show even if you're offline; the
  little status line under the buttons tells you if you're synced or offline.
- **Export/Import** still work as a manual backup of the notes.
- "Who has access: Anyone" means anyone with the long `/exec` URL can read/add
  notes. That's fine for a family trip list (no logins to juggle). Don't post
  the URL publicly. To revoke access later, delete the deployment in Apps
  Script (Deploy → Manage deployments).

## If you change the script later

Editing the code isn't enough — you must **re-deploy**:
Deploy → Manage deployments → ✏ edit → Version: **New version** → Deploy.
The `/exec` URL stays the same.
