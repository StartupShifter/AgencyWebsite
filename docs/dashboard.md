# Client dashboard

The authenticated client workspace is at `/dashboard`. The development-only `/dashboard/preview` uses the same interface with the browser’s existing preview session.

The shell fills the viewport with no exterior whitespace. A rounded content panel sits inside a dark frame that matches the sidebar, with an 8px frame on mobile and 12px on larger screens. The header and full-height sidebar stay stationary; only `dashboard-scroll-area` scrolls. Short viewports use a compact guide button so sidebar controls remain visible. Changing tabs returns the content area to the top.

Dashboard styling is scoped by `workspace-theme` in `components/dashboard/dashboard.css`, including portaled dialogs. It reuses the landing page's commerce emerald, white, mint, and sand tokens and DM Sans font. Sidebar selection uses a white surface with an emerald icon, with hover, press, and keyboard-focus feedback; brief topics use neutral selection surfaces, and journey stages use a white surface with an emerald border. Reduced-motion preferences disable dashboard transitions. Keep these overrides scoped so the landing and onboarding pages retain their own styling.

Next.js Cache Components and Partial Prefetching are enabled in `next.config.ts`. The development “Cache disabled” badge describes a request that bypassed caching (for example, a hard reload), rather than an application configuration setting. Normal navigation uses the configured caching behavior; live client data continues to come from authenticated Convex subscriptions.

The interface uses Tailwind and shared shadcn buttons, dialogs, and progress controls. `components/dashboard/` contains the shell, overview, brief, journey, resource, and engagement views. `lib/onboarding/dashboard.ts` derives the view model from the existing Convex query results; it does not write client or agency data.

- Overview: answered-question completion, missing/invalid/deferred counts, verified prerequisites, agency-recorded delivery progress, flagged follow-ups, compact topic shortcuts, and the next step. Start/Continue phase opens the project brief with the next unfinished phase selected. The next-step copy prefers the agency-managed `projects` record when one exists.
- Brief: phases from the client’s assigned adaptive questionnaire, each with its own completion bar and answered/missing/invalid/deferred counts. Question-level filters and search apply to both questions and saved answers. Each question has an exact edit/answer link, its saved response, and a clear status. Mobile uses a phase selector instead of the desktop phase list. Brief completion reaches 100% only when every visible question has a valid answer or an allowed not-applicable response; permitted help/unknown/deferred responses remain for later. Submission status is shown separately, and the existing submission rules still permit allowed follow-ups. Answered responses flagged for discussion also appear under Follow-ups.
- Journey: submission and agency verification of activation prerequisites, plus persisted delivery stages from `projectStages`. A `projects` record holds the current checkpoint, overall delivery percentage, next step, summary, and optional dates. Agency updates appear immediately because the dashboard reads Convex subscriptions.
- Resources: recorded asset readiness, content contact, HTTP/HTTPS links from the brief, and files uploaded through the workspace. File bytes live in Convex file storage; name, size, type, category, status, uploader, and note are stored in `documents` with the owning `authUserId`.
- Agreement: approved scope, exclusions, third-party costs, recorded fees, billing details, agreement verification, and advance verification. This is not a payment system.
- Updates: the persisted `projectActivity` timeline (brief started/submitted, engagement updates, stage changes, document events) with view links. Older records without a persisted timeline fall back to the saved brief/submission/engagement timestamps.

The backend now stores the dashboard’s agency-managed data, not just onboarding submission:

| Table | Purpose |
| --- | --- |
| `projects` | One delivery summary per client: name, summary, status, current stage, delivery percentage, next-step copy, dates. |
| `projectStages` | Ordered delivery stages with title, description, status, progress, dates, note, and visibility. Seeded once per client and editable by the agency. |
| `projectActivity` | Append-only client-visible timeline of brief, engagement, stage, and document events. |
| `documents` | Uploaded file metadata linked to Convex storage and the owning client. |
| `uploadIntents` | Short-lived, single-use tokens that bind an upload URL to the client who requested it. |

The agency can read and update these records with the internal Convex functions, which are not callable from the browser:

```sh
# One row per client: business, plan, selected modules, brief progress, delivery stage, documents.
bunx convex run workspace:listClients

# Every saved answer, engagement, project, stages, documents, and activity for one client.
bunx convex run workspace:getClient '{"authUserId":"<better-auth-user-id>"}'

# Create the project and six stages without overwriting agency edits.
bunx convex run projects:seedWorkspace '{"authUserId":"<better-auth-user-id>"}'

# Update the delivery checkpoint.
bunx convex run projects:upsertProject '{"project":{"authUserId":"<id>","name":"Client project","summary":"Short agency summary","status":"in-progress","currentStage":"design","progressPercent":45,"nextStepTitle":"Design review","nextStepDetail":"Review the first direction.","startDate":null,"targetDate":null,"updatedAt":0}}'

# Update one stage; project progress and current stage are recalculated.
bunx convex run projects:upsertStage '{"stage":{"authUserId":"<id>","stageId":"design","order":3,"title":"Design & feedback","description":"Design direction and review.","status":"in-progress","progress":50,"startedAt":null,"completedAt":null,"targetDate":null,"note":"First direction shared.","visible":true,"updatedAt":0}}'

# List or review uploaded files.
bunx convex run documents:listAll
bunx convex run documents:updateStatus '{"documentId":"<document-id>","status":"approved","description":"Checked and approved."}'
```

`upsertProject` and `upsertStage` log an activity entry automatically. Existing records are never replaced by `seedWorkspace`; it only fills missing project/stage rows and keeps brief/activation status aligned with submission and prerequisite verification. A stage marked `blocked` is left untouched by that automatic sync.

Dashboard views, brief phases, and filters use URL query parameters, so refresh and browser Back retain navigation. Opening an individual question uses `returnTo=brief&mode=question`; the primary action validates and saves that answer before returning to its phase. Start/Continue phase uses `mode=phase` to retain the guided flow. Save and return preserves unfinished input through the existing draft save path and returns to the current phase. Edits to a submitted brief reopen it through the existing backend rules.

The overview's **Export PDF report** downloads a locally generated PDF named for the business and export date. It includes a clickable report guide, PDF bookmarks, linked onboarding phase charts, answer coverage, separate onboarding/delivery rings, approved scope and exclusions, activation prerequisites, open follow-ups, visible delivery stages with notes/dates, a chronological activity timeline, and every current question with its type, status, readable saved answer, details, priority and validation issue. Earlier retained answers outside the current adaptive path appear in a separate appendix and do not count towards current completion. The report uses the client's assigned questionnaire version. Build status comes from the visible `build` stage; absent delivery records are explicitly unconfirmed. Individual requirement delivery percentages are not inferred from answer completion. A snapshot timestamp and saved/submitted/update dates establish freshness. The PDF library loads only when exporting; fonts are served locally, and no brief data is sent to another service. Preparation, success and retryable error states are announced accessibly; repeat clicks during generation are prevented. Empty workspaces can export a report showing missing answers and unrecorded delivery status.

Verification: `bun scripts/check-dashboard.ts`, `bun run check:project-report`, `bunx tsc --noEmit`, and `bun run test:onboarding-preview`. Pass an output directory to `bun scripts/check-project-report.ts <directory>` to write PDF samples for visual review, including empty, custom-questionnaire, and long-answer cases. Browser checks cover authenticated saved data, topic navigation/search, follow-up filtering, persisted journey stages, document upload/list/remove, empty resources/engagement, dialogs, export, and mobile layout.
