<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Agency website agent router

This repository is currently a Next.js starter, not a published description of the agency. The owner's confirmed business context is in the docs below. Treat those docs as internal guidance, not website copy, a proposal, or a service agreement.

| When working on… | Read first |
| --- | --- |
| Company facts, positioning, site structure, service pricing, or delivery process | [docs/company-context.md](docs/company-context.md) |
| Any service page, scope, deliverable, integration, or support claim | [docs/services.md](docs/services.md) |
| Unresolved business decisions or owner answers | [docs/questions.md](docs/questions.md) |
| Application setup and scripts | [README.md](README.md), [package.json](package.json), and the relevant guide in `node_modules/next/dist/docs/` before writing code |
| UI components or styling | [components.json](components.json), `components/ui/`, `app/globals.css`, and the relevant `.agents/skills/` guidance when applicable |

## Codebase map

- `app/page.tsx` is the starter home page; `app/layout.tsx` owns metadata and the root layout; `app/globals.css` holds Tailwind and theme tokens.
- `components/ui/` contains UI components; `hooks/` and `lib/` contain shared helpers. `public/` has starter assets.
- Root `components.json` is the shadcn UI configuration. Keep it at the root; do not use it for company facts or create a competing `docs/components.json`.
- `package.json` provides `dev`, `build`, `start`, and `lint` scripts. Run relevant checks after code changes. This documentation update does not change application code.

## Working rules

- Preserve confirmed company facts and distinguish **Confirmed**, **Proposed**, **TBD**, and **Conflict**. Existing placeholder content and unverified site claims are not business evidence.
- Write clear, specific, client-friendly copy tied to practical needs. Explain technical terms. State the agreed service scope, limits, client responsibilities, third-party charges, and dependencies explicitly. Starter Shifter has no preset packages; do not say “we handle everything.”
- The owner gave a $1,000 default one-time reference price and a 40% advance requirement; read [docs/company-context.md](docs/company-context.md) for their limits before using either. Do not invent other prices, guarantees, clients, testimonials, results, certifications, partnerships, awards, or statistics. Keep unresolved terms as questions, not published promises.
- Keep credentials, tokens, passwords, private client data, and confidential account details out of these files. Update the docs when the owner explicitly changes an offering or policy.
