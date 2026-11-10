# Client dashboard

The authenticated client workspace is at `/dashboard`. The development-only `/dashboard/preview` uses the same interface with the browser’s existing preview session.

The shell fills the viewport with no exterior whitespace. A rounded content panel sits inside a dark frame that matches the sidebar, with an 8px frame on mobile and 12px on larger screens. The header and full-height sidebar stay stationary; only `dashboard-scroll-area` scrolls. Short viewports use a compact guide button so sidebar controls remain visible. Changing tabs returns the content area to the top.

Dashboard styling is scoped by `workspace-theme` in `components/dashboard/dashboard.css`, including portaled dialogs. It reuses the landing page's commerce emerald, white, mint, and sand tokens and DM Sans font. Sidebar selection uses a white surface with an emerald icon, with hover, press, and keyboard-focus feedback; brief topics use neutral selection surfaces, and journey stages use a white surface with an emerald border. Reduced-motion preferences disable dashboard transitions. Keep these overrides scoped so the landing and onboarding pages retain their own styling.

Next.js Cache Components and Partial Prefetching are enabled in `next.config.ts`. The development “Cache disabled” badge describes a request that bypassed caching (for example, a hard reload), rather than an application configuration setting. Normal navigation uses the configured caching behavior; live client data continues to come from authenticated Convex subscriptions.

The interface uses Tailwind and shared shadcn buttons, dialogs, and progress controls. `components/dashboard/` contains the shell, overview, brief, journey, resource, and engagement views. `lib/onboarding/dashboard.ts` derives the view model from the existing Convex query results; it does not write client or agency data.

- Overview: question completion, verified prerequisites, selected requirement modules, flagged follow-ups, compact topic shortcuts, and the next step. The next-step copy prefers the agency-managed `projects` record when one exists.
- Brief: all visible questions from the current adaptive route, saved answers, text search, completion/follow-up filters, and an edit link to onboarding. Mobile uses a topic selector instead of the desktop topic list.
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

Brief export downloads a JSON document with topic labels, readable answers, and saved/submission timestamps. It does not send the brief to another service.

Verification: `bun scripts/check-dashboard.ts`, `bunx tsc --noEmit`, and `bun run test:onboarding-preview`. Browser checks cover authenticated saved data, topic navigation/search, follow-up filtering, persisted journey stages, document upload/list/remove, empty resources/engagement, dialogs, export, and mobile layout.
