# Training Studio

A modern weekly training scheduler for classes, teachers and rooms. Version 2 consolidates the original `try`, `attempt` and `chat` implementations into one interface and a shared scheduling engine.

## What is included

- Light responsive dashboard, raised timetable cards, gradient buttons, subtle 3D transforms, loading states, reduced-motion support and mobile navigation.
- Class, teacher and room timetable views. Click to assign, edit or lock a session; drag to move it. Touch and keyboard users can make the same changes through the edit dialog.
- Full-academy generation in a Web Worker. Required checks cover class/teacher/room clashes, qualifications, availability, daily/weekly teacher loads, room type/capacity, breaks and subject demand.
- Best-effort preferences for balanced days, fewer instructor gaps, early subjects and adjacent double periods. The bounded multi-pass greedy planner is not a complete constraint solver; an incomplete result does not prove infeasibility. Results include unfilled requirements and explanations and must be reviewed before application.
- Locked periods survive regeneration. Invalid locks stop generation without replacing the existing draft.
- Teacher profiles and recurring availability, classes and curriculum, room management, class promotion and editable course completion.
- Weekly drafts, publishing, copying, deletion, history and activity logs. Published weeks store a snapshot of their rules and records so later curriculum/profile changes do not rewrite history. Unpublishing returns the week to current rules, which may reveal conflicts.
- Automatic saving, 30-step undo/redo and explicit save-error recovery. Server writes use optimistic revisions to prevent silent overwrites.
- JSON backup/restore, original-record migration, Excel/CSV record import with preview, a downloadable import template, Excel timetable export, print layouts and PDF through the browser print dialog.
- Workload, utilization, unfilled-demand and conflict reports.
- Absence planner with validated replacement previews. Optional server-side AI converts natural-language absence requests into the same reviewed workflow. It does not make unrestricted changes or apply anything automatically.
- Server accounts with administrator and teacher roles, hashed passwords, HttpOnly sessions, 3-day expiry, revocation, rate-limited login and same-origin write checks. Teachers receive only their published sessions and cannot modify workspace records through the API.

## Run the shared workspace

Requires Node.js **24 or later**. SQLite is supplied by Node; no separate database service is required.

```bash
npm ci
cp .env.example .env
# Edit .env: choose ADMIN_EMAIL and a unique ADMIN_PASSWORD of at least 12 characters.
npm start
```

Open `http://localhost:3000`. The first start creates an administrator from the environment. Later starts preserve existing accounts and passwords. Change passwords through Accounts, not by editing the bootstrap environment variables.

Keep `DATA_DIR` on a persistent disk. Back up the SQLite database with a SQLite-aware backup method (or shut down cleanly before copying all database files). JSON backups preserve application records but do not include account passwords or sessions. Production hosting needs HTTPS; set `COOKIE_SECURE=true` behind the HTTPS reverse proxy. Do not serve the repository root with a generic static server because it contains backend/configuration files.

The starter records shown on a fresh workspace are clearly illustrative training data. Import the original repository records through **Import & export → Original project data**, or add your academy records manually.

### Optional AI

Set `AI_API_URL` to the complete HTTPS chat-completions endpoint, plus `AI_API_KEY` and `AI_MODEL` on the server. It must accept the OpenAI-compatible `messages` format and return `choices[0].message.content`. Only instructor IDs/names, day names and the typed request are sent to that configured provider. Keys never reach the browser. Without these settings the structured absence planner remains fully available and the natural-language control is disabled.

### Static/local edition

```bash
npm run build
```

Host **only `dist/`** at the origin root over HTTPS. This edition stores data in that browser's localStorage and labels itself **Local workspace**. It has no shared accounts, server database or AI provider connection. Clearing browser storage removes local data, so export backups. The included Netlify configuration builds this edition; Node hosting with `npm start` is required for shared accounts and storage. Legacy `/try.html` and `/attempt.html` links redirect to the unified app.

## Workflow

1. Configure working days, time slots and breaks under Scheduling rules.
2. Add teachers with exact subject qualifications, workload limits and availability.
3. Add rooms with capacities and types. Add classes and subject requirements.
4. Generate a week, inspect the proposal and unfilled explanations, then apply it.
5. Edit or drag sessions; lock sessions that must remain. Resolve conflicts before publishing.
6. Publish to make each teacher's assigned sessions visible in their account.
7. Copy prior weeks as drafts and update course progress only after lessons have actually been taught.

Weekly subject demand is capped by remaining course periods. Planned sessions do not automatically count as completed teaching. Availability is recurring; the absence planner changes the selected week only. Working-day order can change only when the saved timetable history is empty, to prevent shifting existing days. Period count, duration and breaks are configurable. Published snapshots retain their original layout.

Referenced teachers, classes, rooms and subjects cannot be deleted until their saved sessions are removed. Promotion changes term metadata while preserving curriculum/progress; update the next term's subjects explicitly. A partially filled timetable can be published after the administrator confirms the unfilled count, but a timetable with hard conflicts cannot.

## Imports and migration

Download the Excel template in the app. Supported sheet names are `Teachers`, `Classes`, `Subjects` and `Rooms`. CSV imports use the same column names with a record type selected in the dialog. Teacher subject names use `|` separators. Imports add records and reject duplicate names; they never silently replace existing records. Limits: 4 MB per file, 500 rows per sheet, 150 records per entity type, 30 subjects per class and 104 saved weeks.

The original curriculum and instructor/class records are retained in `public/legacy-data.json`. The old HTML-based schedules cannot be mapped safely to the new data model, so migration imports records only and explains the missing pieces before applying. Original class sizes default to 30 and weekly targets are estimated over 12 weeks; review them. Missing curriculum and teacher qualification mismatches are not fabricated. Original implementation/media remain available in Git history.

## Verification

```bash
npm test
npm run check
npm run build
```

Tests exercise full timetable constraints, locked sessions, impossible demand, generation idempotency, course limits, replacement eligibility, backup validation and published snapshots. Server integration tests exercise authentication, role restrictions, cross-origin rejection, revision conflicts, persistent storage and session revocation.

No browser/visual or mobile-device test has been run as part of this change. The UI includes responsive layouts, keyboard-focus styles, native dialogs, a click alternative to drag-and-drop, reduced-motion handling and print styles.

## Structure

- `public/`: browser UI and migration data; the only public application directory.
- `shared/engine.js`: pure scheduling rules, generator and validation, shared by worker/server/tests.
- `server.js`: HTTP API, SQLite persistence and account/session handling.
- `tests/`: scheduling and server integration checks.
- `scripts/build.js`: creates the standalone static edition in `dist/`.

No React or external animation framework is required. The existing vanilla JavaScript stack is retained and reorganized into modules, with ExcelJS used for spreadsheet files.
