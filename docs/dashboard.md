# Client dashboard

The authenticated client workspace is at `/dashboard`. The development-only `/dashboard/preview` uses the same interface with the browser’s existing preview session.

The shell fills the viewport with no exterior whitespace. A rounded content panel sits inside a dark frame that matches the sidebar, with an 8px frame on mobile and 12px on larger screens. The header and full-height sidebar stay stationary; only `dashboard-scroll-area` scrolls. Short viewports use a compact guide button so sidebar controls remain visible. Changing tabs returns the content area to the top.

Next.js Cache Components and Partial Prefetching are enabled in `next.config.ts`. The development “Cache disabled” badge describes a request that bypassed caching (for example, a hard reload), rather than an application configuration setting. Normal navigation uses the configured caching behavior; live client data continues to come from authenticated Convex subscriptions.

The interface uses Tailwind and shared shadcn buttons, dialogs, and progress controls. `components/dashboard/` contains the shell, overview, brief, journey, resource, and engagement views. `lib/onboarding/dashboard.ts` derives the view model from the existing Convex query results; it does not write client or agency data.

- Overview: question completion, verified prerequisites, selected requirement modules, flagged follow-ups, compact topic shortcuts, and the next step.
- Brief: all visible questions from the current adaptive route, saved answers, text search, completion/follow-up filters, and an edit link to onboarding. Mobile uses a topic selector instead of the desktop topic list.
- Journey: submission and agency verification of activation prerequisites, plus a selectable outline of upcoming delivery stages.
- Resources: recorded asset readiness, content contact, and HTTP/HTTPS links from the brief. This is not a file-upload system.
- Agreement: approved scope, exclusions, third-party costs, recorded fees, billing details, agreement verification, and advance verification. This is not a payment system.
- Updates: the latest saved brief, last submission, and engagement timestamps, with topic links for follow-ups. This is not a historical audit log.

Only submission and activation progress are currently stored in the backend. Research, design, build, and handoff are displayed as upcoming stages; no completion, delivery dates, or invented progress is shown. To support agency-managed delivery updates later, add authenticated delivery records and an agency editing flow.

Brief export downloads a JSON document with topic labels, readable answers, and saved/submission timestamps. It does not send the brief to another service.

Verification: `bun scripts/check-dashboard.ts`, `bunx tsc --noEmit`, and `bun run test:onboarding-preview`. Browser checks cover authenticated saved data, topic navigation/search, follow-up filtering, journey selection, empty resources/engagement, dialogs, export, and mobile layout.
