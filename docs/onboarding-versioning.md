# Backend-managed onboarding questionnaires

Implemented 2026-11-18. This supersedes the earlier compile-time questionnaire and global version-upgrade behavior. The question rewrite is already in the application; its revised 141-question library is now the initial published database version for new clients. Existing v1 briefs have their original 127-question definition preserved.

## Editing from the admin dashboard

Open **Client workspace → Manage onboarding questionnaires**, or `/dashboard/questionnaires` in the separate `admin` app. The page and its API require the existing live admin session, approved email, and stored administrator role.

1. Select **New clients** to edit the global starting questionnaire, or choose a particular portal client for a client-only change. The list comes from the client portal backend and includes pinned clients who have not saved answers yet; it is paginated.
2. Use **Questions** to edit wording, help, why explanations, placeholders, choices/display labels, choice explanations, selection limits, quick answers, structured fields, optional/required states, and conditional questions. Add a business phase or workflow, add questions below an existing question, or remove questions. Core phases stay within five questions. Workflow phases are balanced automatically.
3. Use **Routing & phases** to change workflow rules and phase titles. Rule conditions use stable saved values, not display labels. Empty all/any lists mean the selected workflows apply to everyone; otherwise all conditions must match and at least one any-condition must match when that group is present. Inactive or hidden workflow answers do not activate other workflows.
4. **Save draft** persists editor work without changing what any client sees. Other admins' saves are checked by revision number, so a stale editor cannot overwrite a newer draft.
5. Review the client copy preview and publish with a reason. The confirmation states exactly who receives the release. Editing is disabled while saving/publishing. Unsaved edits block the editor's scope/back controls and trigger a browser unload warning. **Discard draft** returns to the published source. **Export JSON** downloads the current backend editor snapshot, clearly marked as published or draft.

A field's stable ID is its identity. Keep saved option values when only improving wording; edit display labels instead. If removing a referenced question or workflow, repair its routing/conditions before saving. Supported answer types are the existing renderer's text, choices, structured details, lists, assets, dates, ranges, and confirmations; adding an entirely new control type still requires code.

The contact name/email and final accuracy/privacy confirmations are system fields. Their labels/help can be edited, but their identity, required type, and direct-answer safeguards cannot be removed. A repeating workspace-member list retains its known field IDs. Semantic and structural backend validation reject unsupported or internally inconsistent definitions.

## Who receives a release

| Action | New entrants | Started or submitted clients | Selected client |
| --- | --- | --- | --- |
| Save a global editor draft | No change | No change | No change |
| Publish global version | Latest release when first opening onboarding/workspace | Keep their immutable assigned snapshot, answers, saved position and submission status | No special treatment |
| Apply a published global version to selected clients | No change | Only explicitly selected clients move; answers are carried forward and their briefs reopen for review | Selected clients receive the published global format |
| Save a client-only editor draft | No change | No change | No change until publication |
| Publish client-only version | No change | Other clients keep their assignments | Receives a new private snapshot; existing answers remain prefilled; removed answers are retained; brief returns to draft for review |

Assignment happens atomically before interaction on the first onboarding/workspace visit. Thus a client who has opened onboarding but not answered yet also keeps that version. An account that has never opened the portal has no assignment and receives the published version on first entry. A global release does not invalidate a prior submission or revoke workspace readiness. Privacy-notice revisions remain a separate existing policy mechanism.

Client-only changes begin from that client's assigned snapshot, not from the latest global questionnaire. Publication archives the complete previous answer set and its version/status before altering active answers. Saved responses are carried forward by stable question ID even when wording, hints, options or requirements change. Newly added questions are unanswered. Deleted questions leave the active brief but remain in history and in an indexed retained-answer table; reintroducing the same question ID restores the saved response. A control or structured-field change incompatible with a saved response is rejected atomically: keep the old control or add a new question with a new ID. The revised brief requires a new accuracy confirmation. The previous submission timestamp is archived and cleared from the active draft. Other clients and the global default remain untouched.

After publishing globally, choose **Apply published version to existing clients**. Its checkbox dropdown supports search, individual selection, and **Select all eligible clients**, across all paginated portal assignments. Confirm the count and reason. Applying a global format replaces any private customization for those clients; unselected clients stay untouched. The UI sends bounded batches of ten. Each batch is atomic and idempotent; if a later batch fails, completed clients are reported and remaining clients stay selected. A selected client's assignment must still match the version shown during selection, and unpublished client drafts must first be published or discarded. New global releases published during the rollout do not change its explicitly chosen version.

Every client save/submit and admin answer/workflow edit sends the assigned version as a concurrency token. The backend resolves the authenticated client's assignment itself and rejects an older browser's write after an explicit client-specific release. Clients cannot choose their own version, send someone else's user ID, or call internal editor functions.

## Database and rendering

| Table | Purpose |
| --- | --- |
| `questionnaireVersions` | Immutable published global or client-only definition, version key, parent version, title, actor, date and release reason |
| `questionnaireSettings` | Single active global starting-version pointer |
| `questionnaireAssignments` | One pinned version per client or preview session |
| `questionnaireDrafts` | Saved editor draft per global/client scope with optimistic revision and base-version checks |
| `questionnaireRetainedAnswers` | Last saved response for a removed stable question, indexed per client/question; restored when that question returns |
| `questionnaireHistory` | Complete prior client answer set, version, submission status, date, actor and reason for targeted changes |

The definition includes all pages, questions, choices, display metadata, hints, fields, conditions, phase assignments and declarative routing rules. The authenticated `onboarding:getMine` response supplies the assigned definition. Previews use `onboardingPreview:getQuestionnaire`. The wizard, review, dashboard, progress helpers, summaries and server validation all use that definition through the seed-free engine. No questionnaire content is compiled into the client form bundle.

`shared-pages.ts`, `module-pages.ts`, `default-definition.ts` and `docs/onboarding-questions.json` are bootstrap fixtures/offline reference material, not the live editing path. Editing them does not mutate a published database version. `scripts/export-onboarding.ts` exports the bootstrap reference; use the admin editor's export for current database content. `convex/legacyQuestionnaire.json` preserves the original v1 snapshot for migration.

Versions are never edited in place by the management API. Publishing adds a row and changes only the appropriate pointer. Deleted questions are not physically removed from old version rows. History and version records contain confidential project information and are available only through trusted backend/admin access; they are not public listings.

## Connecting the separate admin and client apps

Both apps now use the same Convex deployment, including Better Auth, onboarding, questionnaire versions, project records and admin roles. The admin questionnaire editor uses a narrow server-to-server bridge to that same deployment. The admin route fails closed if its bridge URL differs from the workspace HTTP Actions URL; it cannot silently edit a different local database. Credentials stay server-side.

Set on the **client portal Convex backend**:

- `QUESTIONNAIRE_ADMIN_TOKEN`: a securely generated shared credential of at least 32 characters.

Set on the **admin Next.js server** (never `NEXT_PUBLIC_`):

- `CLIENT_PORTAL_CONVEX_SITE_URL`: the client backend's HTTP Actions origin (`.convex.site`; local setup uses port 3221).
- `QUESTIONNAIRE_ADMIN_TOKEN`: the same credential.

The browser calls the same-origin admin `/api/questionnaires` POST route. That route checks the live administrator and request origin, supplies the verified actor itself, and forwards a fixed operation to `/questionnaire-admin` on the client backend. The Convex HTTP action verifies the secret and dispatches only to internal questionnaire functions with strict validators. Responses are not cached. Secrets never appear in browser requests or responses. Rotate both server values together.

The shared cloud **development** deployment and both private local app configurations were aligned and verified on 2026-11-18. The bridge returns the current 141-question definition successfully. Production remains a separate rollout; configure its corresponding settings explicitly.

## Initial rollout and preserving existing clients

Deploy the new portal backend/schema first, then run the internal `questionnaireAdmin:bootstrap` mutation once on that deployment. It creates the two preserved baseline definitions only if missing, initializes the default only if no active pointer exists, and schedules a bounded, paginated assignment backfill. Re-running it does not replace published content or existing assignments. Deploy the updated client and admin frontends after initialization.

Backfill and first-use assignment use each existing draft's saved version. An unknown historical version fails closed rather than silently substituting the latest questionnaire; restore its genuine historical definition before allowing edits. The supplied migration supports the repository's v1 and revised v2 baselines. Preview drafts follow the same saved-version rule.

After rollout, use database drafts and publishing for changes. Do not bump a source constant or redeploy a rewritten seed to update existing clients.

## Verification

```sh
# Client app / local backend
bun run scripts/check-onboarding.ts
bun run scripts/check-guided-onboarding.ts
bun run scripts/check-onboarding-phases.ts
bun run scripts/check-dashboard.ts
bun run scripts/check-question-fields.tsx
bun run scripts/check-questionnaire-definition.ts
bun run test:onboarding-preview
bun run test:onboarding
bun run test:questionnaires
bunx tsc --noEmit
bun run lint
bun run build

# Separate admin app
bun test scripts/questionnaire-proxy.test.mjs
bunx tsc --noEmit
bunx eslint components/admin/questionnaire-*.tsx lib/questionnaire app/api/questionnaires app/dashboard/questionnaires
bun run build
```

`test:questionnaires` runs only against the anonymous local baseline backend, refuses an existing global editor draft, and refuses a non-baseline active release. It creates disposable clients, verifies real authentication/HTTP/database boundaries, tests global publication versus old completed/started/legacy clients, checks a new required question and routing, verifies targeted add/edit/remove with prefilled answers plus full response archives and stale-write rejection, then restores the prior global pointer and removes only its fixture records. It also authenticates a disposable administrator, compares both dashboards' complete definitions and answers, corrects a database-added question through the admin API, checks new workflow IDs, verifies incompatible-control rollback, bulk selected-client migration, repeated-batch safety, and restoration of previously removed responses. The admin allowlist is restored after the run. The suite accepts an explicitly supplied self-hosted local environment to avoid touching the apps' cloud configuration. The admin proxy unit tests mock the existing admin-session provider to check authorization, same-origin enforcement, server-supplied actor, secret handling and fail-closed configuration. They do not authenticate against the owner's hosted admin account.

Both builds, local persistence/integration checks, definition/phase/field checks, admin proxy tests, and changed-file lint pass. Full client lint has only pre-existing generated-file warnings. Full admin lint still reports the pre-existing `set-state-in-effect` errors in its untouched carousel/mobile hook. The browser correctly redirects unauthenticated access to `/dashboard/questionnaires` to `/login`. Follow-up authenticated browser QA passed with disposable accounts: draft save/publication, prefilled client answers after wording edits, persistence through sign-out/sign-in, the same answer in both dashboards, Select all/deselection, and a successful selected-client rollout. An account-switching login race discovered in that run was fixed in both password forms by loading a fresh authenticated document. Responsive/mobile visual acceptance remains separate.

## Keeping the repositories aligned

`next-app/convex` is the canonical backend source. The mirrored `admin/convex` functions and `lib/onboarding` engine must match; either repository currently has enough functions to replace the shared deployment if pushed. Run `bun run check:shared-backend` before pushing from either checkout. With both private `.env.local` files available, `bun run check:shared-backend --environment` additionally checks both public backend URLs and the questionnaire bridge destination without printing credentials. Avoid running competing backend watchers from divergent checkouts.

See [the cross-repository audit](onboarding-integration-audit.md) for the inspected flow, fixes and remaining limits.
