/**
 * Oregon Trip — Family Notes backend (Google Apps Script)
 * ------------------------------------------------------------------
 * Stores the family's shared notes in a Google Sheet so everyone sees
 * the same list. The dashboard (app.js) reads/writes through this web
 * app. Setup steps are in NOTES-SETUP.md.
 *
 * Sheet layout (auto-created): a tab named "Notes" with columns:
 *   id | kind | text | author | createdAt
 * "kind" is either "schedule" or "questions".
 */

var SHEET_NAME = 'Notes';
var HEADERS = ['id', 'kind', 'text', 'author', 'createdAt'];

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(HEADERS);
  } else if (sh.getLastRow() === 0) {
    sh.appendRow(HEADERS);
  }
  return sh;
}

// Read the whole sheet into { schedule: [...], questions: [...] }, newest first.
function readAll_() {
  var sh = getSheet_();
  var values = sh.getDataRange().getValues();
  var out = { schedule: [], questions: [] };
  for (var i = 1; i < values.length; i++) {
    var row = values[i];
    var id = row[0];
    if (!id) continue;
    var kind = String(row[1]);
    if (kind !== 'schedule' && kind !== 'questions') continue;
    out[kind].push({
      id: String(id),
      text: String(row[2]),
      author: row[3] ? String(row[3]) : null,
      createdAt: row[4] ? new Date(row[4]).toISOString() : new Date().toISOString(),
    });
  }
  var newestFirst = function (a, b) { return new Date(b.createdAt) - new Date(a.createdAt); };
  out.schedule.sort(newestFirst);
  out.questions.sort(newestFirst);
  return out;
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// GET → return every note.
function doGet() {
  return json_(readAll_());
}

// POST → { action: "add", kind, note } or { action: "delete", kind, id }.
// Returns the full updated list so the client can re-render.
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000); // avoid clobbering when two people write at once
  try {
    var body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    var action = body.action;
    var sh = getSheet_();

    if (action === 'add' && body.note) {
      var n = body.note;
      sh.appendRow([
        String(n.id || ('n_' + new Date().getTime())),
        String(body.kind || 'schedule'),
        String(n.text || ''),
        n.author ? String(n.author) : '',
        n.createdAt ? String(n.createdAt) : new Date().toISOString(),
      ]);
    } else if (action === 'delete' && body.id) {
      var values = sh.getDataRange().getValues();
      // Walk bottom-up so deleting rows doesn't shift the ones we haven't checked.
      for (var i = values.length - 1; i >= 1; i--) {
        if (String(values[i][0]) === String(body.id)) {
          sh.deleteRow(i + 1); // +1: sheet rows are 1-based
        }
      }
    }

    return json_(readAll_());
  } catch (err) {
    return json_({ schedule: [], questions: [], error: String(err) });
  } finally {
    lock.releaseLock();
  }
}
