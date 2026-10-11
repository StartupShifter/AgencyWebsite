# Client onboarding implementation

The question library implements all 42 topics and 127 stable question IDs from the repository's `../onboarding.md`. The route contains P01–P12, relevant M01–M26 modules, then P13–P16. Clients complete only their actual route. Changes retain answers to inactive modules; those answers do not block submission.

## Client flow

The landing header links to `/signup` and `/login`. Better Auth creates the client session and continues to `/onboarding`. The wizard prefills the account's name/email, suggests timezone, and reuses the project email and contact for billing and workspace details. `/dashboard` shows the saved brief, open questions, agency engagement record, and outstanding project prerequisites. Both routes validate the live session on the server and through authenticated Convex subscriptions.

The shared renderer supports radio and checkbox cards, searchable selections, country/timezone suggestions, asset status dropdowns, product-count bands, structured budgets, date selection with flexible/not-decided choices, repeatable lists and workspace members, short answers, and quick-answer presets. Unknown, deferred, guidance, and not-applicable states are stored separately. The final review has editable topic groups. Requested invitations and access preferences are records only; the form does not send invitations or grant permissions.

Drafts autosave after a short pause. Continue, Back, topic navigation, and Save and exit wait for the current draft to save. Failed saves show an error and retry control; the browser warns before closing with unsaved answers. Draft records store questionnaire version, notice version, stable IDs, explicit module additions, last page, update time, and submission time. A changed answer returns a submitted record to draft for resubmission; navigation alone preserves its submitted state.

## Privacy prerequisite

The source questionnaire explicitly requires approved privacy information before live collection. The older `/policies/privacy` text describes only the local-download contact feature, so the portal has a separate `/policies/onboarding-privacy` notice. Live answer storage and submission remain gated until the actual notice is approved and all these Convex environment variables are present:

- `ONBOARDING_PRIVACY_APPROVED=true`
- `ONBOARDING_PRIVACY_VERSION` — a stable approved revision
- `ONBOARDING_PRIVACY_TEXT` — approved collection, use, storage, and access information
- `ONBOARDING_PRIVACY_CONTACT` — approved privacy-request contact
- `ONBOARDING_PRIVACY_RETENTION` — approved retention/deletion information

These are configured on Convex, not as `NEXT_PUBLIC_` frontend values. A new notice version clears the existing client acknowledgement for review; stale notices cannot submit. `/onboarding/preview` is available only under `next dev` and keeps sample answers in memory, with no database writes. It returns 404 in production. Account signup remains operational while onboarding collection is gated; approve full account/privacy disclosures before public release as well.

## Database and ownership

The app uses its own Convex deployment, separate from the administrator-only app. `convex/schema.ts` declares `onboarding` and `engagements`, each indexed by the Better Auth component user ID. Public onboarding operations derive that ID from the authenticated session; they do not accept a user ID from clients. `saveDraft` validates question IDs, answer shapes, route IDs, length limits, and the approved notice version. `submit` validates required answers only on the active route, including consent and priorities.

`engagements` contains approved plan/scope, exact currency and fees, exclusions, third-party costs, billing details, verified evidence references, verified email addresses, and project-specific critical dependencies. The questionnaire does not infer an agreement from the public pricing section or client checkboxes.

`onboarding:recordEngagement` is an **internal mutation** for trusted agency tooling/CLI. Its `engagement` argument must match `engagementValidator` in `convex/onboardingValidators.ts`. Record actual evidence in `signedAgreementRef`, `advancePaymentRef`, and `identityVerificationRef`; include the exact verified project/workspace addresses in `verifiedEmails`. Only mark dependency rows verified after checking the required input. A verified Better Auth email can establish that same address; it does not verify a different invitation email entered on P15.

Draft and submitted are stored questionnaire statuses. The dashboard separately computes Awaiting prerequisites and Ready for client workspace. Readiness requires submitted current-version answers, approved current-version privacy information, exact verified project/workspace contact addresses, a signed agreement, a verified 40% advance, and all recorded critical dependencies. Self-reported agreement/payment answers cannot satisfy those checks. The agency still arranges the agreed onboarding group, research/design work, and delivery stages.

No cloud credentials were available locally. Development uses the independent local deployment on API port 3220 and HTTP port 3221. Connect a hosted deployment and configure its environment before publishing. The supplied Convex MCP was used for official existing-project integration guidance; deployment and live verification used the Convex CLI against this local backend.

## Verification

Run from `next-app` with the backend and Next.js running:

```sh
bun run scripts/check-onboarding.ts
bun run test:auth
bun run test:onboarding
bunx tsc --noEmit
bun run lint
bun run build
```

The library check compares every page/question against the source and covers conditional routing, inactive answers, malformed shapes, required contact/billing/priorities, and privacy acknowledgement. The local-only integration suite creates disposable clients, checks ownership and persistence, temporarily configures test-only privacy values, checks submission/activation/revocation, then deletes fixtures and restores all previous settings. It refuses hosted deployments. OAuth requires real Google/Facebook credentials and interactive provider verification.
