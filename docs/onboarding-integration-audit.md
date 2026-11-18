# Client and admin onboarding integration audit

Reviewed and updated 2026-11-18 across the sibling `next-app` and `admin` repositories. Existing uncommitted work was retained. The configured environment is the shared `webAgency` cloud development deployment; production was not deployed.

## Verified data flow

1. Better Auth identifies the client. First entry atomically creates a `questionnaireAssignments` record, resolving a preserved historical version for existing briefs or the active global version for new entrants.
2. `onboarding:getMine` returns the assigned immutable definition and saved answers. The wizard, phase engine, question controls, review and client dashboard derive their content from that definition. Pages include question IDs, types, options and display labels, hints, conditions, workflows and phase membership.
3. Client draft saves and submissions validate the assigned version and authenticated ownership. Answers live in the shared `onboarding` table; subscriptions deliver updates to both apps.
4. `clients:getClient` returns that same assigned definition with the same answer set to authorized administrators. Admin brief phases, workflow pickers, progress and open items use the definition rather than seed fixtures. Answer and workflow mutations require the displayed version and validate questions against that client's snapshot.
5. The admin editor checks the live admin session, stored role, email allowlist and same-origin request. Its server-only bridge authenticates to internal questionnaire functions on the same database. A mismatched bridge destination fails closed.
6. Editor drafts are separate from immutable releases. Global publication changes only the starting pointer; existing completed and in-progress clients retain their definition, responses and status.
7. A client-specific release starts from that client's snapshot. A separate checkbox rollout explicitly applies a published global snapshot to selected existing clients, including Select all. It replaces private customizations only for the selected recipients.
8. Targeted migration archives the previous brief, carries saved answers by stable ID, retains removed responses, restores reintroduced responses, and reopens a changed brief for review. The accuracy confirmation is renewed. Incompatible control changes fail atomically rather than erase responses. Stale browser and admin writes are rejected.

## Gaps corrected

| Finding | Change |
| --- | --- |
| Both apps used the same cloud backend but the questionnaire bridge pointed at a local backend | Aligned the private server configuration, installed the matching server credential on the development backend, verified a successful read, and added a mismatch guard |
| Admin brief helpers, progress, open items and answer/workflow mutations still used compile-time question fixtures | Passed the assigned definition through the admin query, phase rendering, workflow picker and mutations |
| Any wording change removed the active saved answer | Preserved values by stable ID, independently of presentation changes |
| Removed answers could not be prefilled when a question returned | Added an indexed retained-answer store alongside complete historical snapshots |
| No multi-client global update selection | Added a searchable checkbox dropdown and Select all, with explicit version, recipient count, reason, optimistic checks and bounded idempotent batches |
| Uppercasing custom workflow IDs silently removed newly created workflows | Kept database IDs intact and rejected workflows absent from the assigned definition |
| Admin mutations accepted unknown question IDs within a known page and had no version guard | Validated exact question identity, answer shape, protected client confirmations/contact fields and assigned version |
| Separate backend copies could drift and replace each other's deployed functions | Added `check:shared-backend` to compare backend and onboarding engine sources, optionally validating both private app connections |

## Verification and limits

- Both Next.js production builds and TypeScript checks passed.
- Onboarding, guided navigation, phase, dashboard, field-render and definition checks passed, including backend-added admin questions/workflows and removed-choice visibility.
- Local integration used real Better Auth sessions, the actual HTTP management bridge and actual Convex persistence. It covered completed, started, legacy and new clients; admin/client data equality; dynamic required questions; admin answer/workflow updates; authorization; global isolation; individual changes; incompatible-control rollback; bulk opt-in; retained/restored answers; history; stale writes; and idempotent retries. Fixtures and the temporary admin role/allowlist were cleaned up.
- Proxy tests covered same-origin enforcement, live admin access, server-supplied actor, secret handling, missing configuration and mismatched databases.
- The configured cloud bridge returned its current 141-question snapshot. No global release or real client reassignment was made for testing. At inspection, this development database had no saved onboarding briefs or client assignments; integration behavior was therefore verified with disposable local fixtures.
- Changed files pass lint. Full admin lint has existing errors in `components/ui/carousel.tsx` and `hooks/use-mobile.ts`. Full client lint has existing generated-file warnings.
- Follow-up authenticated browser QA passed for a disposable admin and two disposable clients: admin login, draft save, client-only publication, changed wording with a prefilled answer, client answer edits, persistence across sign-in, the same answer in both dashboards, Select all and individual deselection, and successful selected-client rollout. The unchecked client retained its private submitted form. Responsive/mobile acceptance testing remains separate.
- Existing aggregate admin list queries still read multiple full workspace tables. This is a pre-existing scaling limit, separate from the bounded questionnaire rollout path; pagination of those operations views remains future work.
- Select all operates on all fetched portal assignments. An account that has never entered the portal has no pinned assignment and will receive the current global starting version on first entry.
- A multi-batch rollout can partially succeed. Each batch is transactional; completed recipients are reported and remaining recipients stay selected. Retrying a completed batch does not duplicate archives.

Operational instructions and version semantics: [onboarding-versioning.md](onboarding-versioning.md).

## Follow-up browser QA

The owner requested credential discovery and hands-on testing. The database contained the original admin and client identities with credential-provider password hashes; plaintext passwords were not present. No existing password was changed or recovered. Temporary administrator/client accounts were provisioned for the test, and the allowlist was restored afterward. The global questionnaire pointer and original user accounts were preserved.

Browser account switching exposed a real authentication handoff race: a client-side navigation could reuse the preceding Convex provider/token while the next account's session was settling, causing `ensureQuestionnaire` to fail and the wizard to retain an error until reload. Both password login forms now perform a full document navigation after successful authentication, so the provider initializes from the newly issued session. A successful questionnaire-assignment retry also clears an earlier error. A repeated client sign-out/sign-in and client-to-admin account switch passed without manual reload, and the previously edited response remained prefilled.
