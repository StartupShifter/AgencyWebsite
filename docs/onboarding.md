# Client onboarding implementation

The question library implements all 42 topics and 127 stable question IDs from the repository's `../onboarding.md`. The route contains P01–P12, relevant M01–M26 modules, then P13–P16. Clients complete only their actual route. Changes retain answers to inactive modules; those answers do not block submission.

## Client flow

The landing header links to `/signup` and `/login`. Better Auth creates the client session and continues to `/onboarding`. The wizard prefills the account's name/email, suggests timezone, and reuses the project email and contact for billing and workspace details. `/dashboard` shows the saved brief, open questions, agency engagement record, and outstanding project prerequisites. Both routes validate the live session on the server and through authenticated Convex subscriptions.

The welcome page is a minimal single column: a short introduction, a checkbox linked to privacy information, and Continue. The previous story panel, illustrations, numbered explainer, reassurance badges, and expandable help are removed. Service terms remain available as a quiet link. Continue requires explicit acknowledgement and saves the current-version P16.3 answer before showing any questions; a failed save keeps the client on the introduction with a retryable error. Returning drafts with a valid current-version acknowledgement resume directly. The header shows the saved business name and account name when available. There is no portal footer.

The guided interface presents one visible question at a time with a compact SVG companion based on the brand’s upward arrow. Its face responds to answers and review; hover effects respect reduced-motion preferences. Back and Continue sit within the question panel, with save status beside the progress heading. Native radio and checkbox cards have illustrative icons and selected states. All topics remains available for navigation, and a dedicated editable review precedes the final confirmations.

Progress counts valid answers and explicit follow-up states on the current route; untouched optional questions do not count. Continuing past an empty optional question records “Provide later.” The total adapts when selections add or remove modules. Drafts store the owning page ID and exact question or review step in Convex; returning resumes at that step. Older drafts resume at the first unanswered or invalid visible question on the saved page. The standalone mascot is in `public/mascot/shift.svg`.

The shared renderer supports radio and checkbox cards, searchable selections, country/timezone suggestions, asset status dropdowns, product-count bands, structured budgets, date selection with flexible/not-decided choices, repeatable lists and workspace members, short answers, and quick-answer presets. Unknown, deferred, guidance, and not-applicable states are stored separately. The final review has editable topic groups. Requested invitations and access preferences are records only; the form does not send invitations or grant permissions.

Drafts autosave after a short pause. Continue, Back, topic navigation, and Save and exit wait for the current draft to save. Failed saves show an error and retry control; the browser warns before closing with unsaved answers. Draft records store questionnaire version, notice version, stable IDs, explicit module additions, last page and question, update time, and submission time. A changed answer returns a submitted record to draft for resubmission; navigation alone preserves its submitted state.

## Privacy prerequisite

The portal uses the owner-confirmed project-use notice in `lib/onboarding/privacy-copy.ts`, with a stable revision, by default. A client must explicitly check the welcome checkbox; Continue saves P16.3 with that revision before opening the questions. Missing optional agency contact or retention settings do not disable the checkbox or block this flow.

Convex environment settings can override the default:

- `ONBOARDING_PRIVACY_APPROVED=false` explicitly pauses collection; unset or `true` enables the current notice.
- `ONBOARDING_PRIVACY_TEXT` and `ONBOARDING_PRIVACY_VERSION` specify a custom notice and its stable revision. A custom text requires a version.
- `ONBOARDING_PRIVACY_CONTACT` and `ONBOARDING_PRIVACY_RETENTION` add confirmed contact and retention information when available. Unconfirmed details are not invented or shown as empty fields.

These settings belong to Convex, not `NEXT_PUBLIC_` frontend values. Changing the notice version requires a fresh acknowledgement; stale notices cannot save or submit. `/onboarding/preview` is development-only and stores sample drafts separately without changing live privacy settings. The onboarding notice describes project-use consent; the full site privacy policy remains a separate document.

## Database and ownership

The app uses its own Convex deployment, separate from the administrator-only app. `convex/schema.ts` declares `onboarding` and `engagements`, each indexed by the Better Auth component user ID. Public onboarding operations derive that ID from the authenticated session; they do not accept a user ID from clients. `saveDraft` validates question IDs, answer shapes, route IDs, length limits, and the approved notice version. `submit` validates required answers only on the active route, including consent and priorities.

Development preview drafts use the separate `onboardingPreviewDrafts` table, indexed by a random UUID browser session from the official Convex session helpers. Only the session key is kept in localStorage; answers, modules, exact question position, and submission state live in Convex and restore after refresh. Preview endpoints require a local `SITE_URL`, validate answer shapes and active-route navigation, and expose no public listing or deletion operation. Finishing validates the full route, marks the saved brief submitted, and opens `/dashboard/preview`. The development dashboard reads the same browser-session draft from Convex and shows progress, submitted status, the answer summary, and follow-ups. My workspace and Save and exit also open this dashboard. Returning to a submitted brief opens its review so answers can be updated. The preview dashboard renders the not-found boundary in production; `/dashboard` continues to require the authenticated client session.

`engagements` contains approved plan/scope, exact currency and fees, exclusions, third-party costs, billing details, verified evidence references, verified email addresses, and project-specific critical dependencies. The questionnaire does not infer an agreement from the public pricing section or client checkboxes.

`onboarding:recordEngagement` is an **internal mutation** for trusted agency tooling/CLI. Its `engagement` argument must match `engagementValidator` in `convex/onboardingValidators.ts`. Record actual evidence in `signedAgreementRef`, `advancePaymentRef`, and `identityVerificationRef`; include the exact verified project/workspace addresses in `verifiedEmails`. Only mark dependency rows verified after checking the required input. A verified Better Auth email can establish that same address; it does not verify a different invitation email entered on P15.

Draft and submitted are stored questionnaire statuses. The dashboard separately computes Awaiting prerequisites and Ready for client workspace. Readiness requires submitted current-version answers, approved current-version privacy information, exact verified project/workspace contact addresses, a signed agreement, a verified 40% advance, and all recorded critical dependencies. Self-reported agreement/payment answers cannot satisfy those checks. The agency still arranges the agreed onboarding group, research/design work, and delivery stages.

No cloud credentials were available locally. Development uses the independent local deployment on API port 3220 and HTTP port 3221. Connect a hosted deployment and configure its environment before publishing. The supplied Convex MCP was used for official existing-project integration guidance; deployment and live verification used the Convex CLI against this local backend.

## Verification

Run from `next-app` with the backend and Next.js running:

```sh
bun run scripts/check-onboarding.ts
bun run scripts/check-guided-onboarding.ts
bun run test:auth
bun run test:onboarding
bun run test:onboarding-preview
bunx tsc --noEmit
bun run lint
bun run build
```

The library check compares every page/question against the source and covers conditional routing, inactive answers, malformed shapes, required contact/billing/priorities, and privacy acknowledgement. The local-only integration suite creates disposable clients, checks ownership and persistence, temporarily configures test-only privacy values, checks submission/activation/revocation, then deletes fixtures and restores all previous settings. The preview integration suite independently verifies browser-session isolation, all 127 answer values, exact cursor restoration, invalid payload rejection, and submission/edit transitions without changing privacy settings. Both suites refuse hosted deployments. OAuth requires real Google/Facebook credentials and interactive provider verification.
