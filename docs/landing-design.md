# Starter Shifter landing page

Implementation notes, not additional company policy. Business copy remains governed by company-context.md and services.md.

## Project showcase (2026-10-11)

The owner requested an infinite project showcase immediately after “What we do,” with a “View All Products” link to `/products`. The implementation uses a large featured browser preview over a continuously moving ribbon, with previous, next, and pause controls. Motion pauses during hover/focus, outside the viewport, in hidden tabs, and for reduced-motion preferences. The Products page lists the same collection; featured previews link to their corresponding entries.

The showcase follows the same section shell, gutters, spacing, and left-aligned heading layout as “What we do.” Its description and “View All Products” button sit on the right at desktop widths and stack below the heading on mobile. The ribbon stays inside the section's content width and fades into white at both edges. Plain white space, a single fine preview outline, and restrained shadows replace the original dotted backdrop, dashed rails, and double frames.

`lib/projects.ts` is the shared catalog. Current entries and `public/projects/` SVGs are explicitly labeled **Concept previews**, not portfolio evidence. Replace them with approved completed-project names, descriptions, local screenshots, and optional live URLs before presenting them as proof of work. Set each verified entry's status to `Completed project`; the concept notices disappear when no concepts remain. No completed-project examples have been supplied for this request yet.

## Visual direction

The latest supplied reference inspires a centered hero with a rounded emerald-to-mint background, white typography, translucent stepped forms, and three layered commerce illustrations. The hero fills the available viewport width with a 12px gap on each side at every breakpoint and no maximum width. The center shows a concept storefront with an original SVG tote; the supporting panels show catalog organization and an order workflow. These are service illustrations, not client work, a live store, or performance evidence. The header logo and CTA use the same emerald accent. Lower-page layouts and business terms are preserved.

| Role                       | Token                | Value   |
| -------------------------- | -------------------- | ------- |
| Page                       | background           | #ffffff |
| Text / primary button      | foreground / primary | #20221c |
| Highlight                  | accent               | #d5fa43 |
| Muted surface              | secondary            | #eaece3 |
| Supporting text            | muted-foreground     | #616458 |
| Olive illustration surface | surface-olive        | #e9eddc |

DM Sans is used throughout; Geist Mono remains available for monospace UI. Hero-specific tokens are commerce-deep (#075c3f), commerce-green (#08734f), commerce-mint (#9ed9b8), commerce-white (#ffffff), commerce-ink (#233e32), and commerce-soft (#edf5ef). The type hierarchy, section gutters, responsive breakpoints, and semantic tokens live in app/globals.css. The hero adapts at 1000px, 760px, and 480px; small phones show the central storefront without the side panels. Other page sections stack at 760px. Reduced motion disables smooth scrolling and transitions.

## Component structure

Directly after “What we do,” the process section presents five ordered cards: research, website/application development, social presence, AI customer-support automation, and maintenance/performance/integrations. Rounded surfaces progress from commerce ink and emerald to mint and pale green. Native CSS sticky positioning lets successive cards slide over the previous cards, leaving narrow inset edges visible; the entire deck releases at the end of its list. Fine-pointer hover lifts each card by 6px. No animation dependency, scroll interception, or client-side scroll state is needed. Component-prefixed selectors in `process-section.css` follow the existing service-card stylesheet approach; the project's custom CSS loader did not provide CSS Module class exports during verification. Mobile uses narrower offsets and single-column copy; reduced motion and viewports up to 740px tall use a static readable list. The onboarding prerequisites remain below the cards. The About section follows the process.

The service section uses three owner-confirmed groups: Web application, Social media, and AI workflow. Original monochrome SVG line illustrations depict browser layers, social posts, and connected workflow nodes. The blocks use fine dividers, concise descriptions, and no tags or scope footnote. Hover subtly separates the layers; click, tap, or keyboard activation toggles a slightly expanded state. A second activation or Escape resets it. Layout uses the shared Tailwind map; scoped animation classes in `service-card.css` handle motion. Reduced motion keeps the fixed SVG projections and disables movement. The page background is pure white.

- app/page.tsx composes the page without embedding section designs.
- components/landing/ contains the header, hero, service illustrations, about, process, pricing, FAQ, contact flow, brand, and footer.
- components/ui/ contains the shared shadcn primitives. Button has a marketing size and lime, emerald, and white hero variants; Badge has a service variant.
- The current hero illustrations are responsive HTML/SVG in components/landing/hero-section.tsx and require no raster image download. public/images/connected-commerce.webp is the retained earlier hero asset (approximately 112 KB). Small service diagrams are code-native, decorative graphics with readable service descriptions alongside.

## About section reference (2026-10-11)

The owner supplied a seven-card reference and requested service-focused illustrations without divider lines. Their refinement requests minimal, monochrome SVGs matching the “What we do” section, less text, more reactive artwork, and no visible demo buttons or selectors. The section retains the staggered three-column composition, with a single pale neutral card surface and a charcoal contact card. Each service has one short explanation.

Hovering any service card activates its illustration: research sheets separate under a magnifier; website layers unfold; social post frames spread; connected nodes lift and pass a short signal; replies and human handoff become visible; and a performance curve reveals a finding. These are illustrative service concepts, not live integrations or client results. There are no labelled chips, view selectors, or playback controls. The artwork itself is the accessible interaction surface: keyboard focus reveals the same state immediately, and touch users can tap the illustration. Reduced motion removes animated offsets and signal motion.

`about-section.tsx` keeps the introduction server-rendered; `about-benefits.tsx` contains the SVGs and shared interaction wrapper. Component-prefixed rules live in `about-section.css`, following the existing section stylesheet pattern. Cards adapt to two columns on tablets and one column on phones. The short scope note retains agreed deliverables, supported-tool limits, plan-dependent ongoing care, and separate third-party costs.

## Contact flow

No public contact address was available when implemented. ContactSection accepts an optional contactEmail prop. Without it, the accessible project brief dialog downloads a local text file and explicitly says no enquiry has been sent. With it, submission opens an email draft for the visitor to review and send. There is no backend submission, database storage, or email service.

## Content boundaries

Pricing now shows owner-approved Basic ($1,000 one-time) and Pro ($2,000 setup plus $500/month maintenance). Basic covers digitalization and post templates; Pro adds ongoing support, lead generation, client handling, and growth strategy. Exact deliverables and monthly coverage are agreed, with third-party costs separate and no guaranteed lead volumes. No delivery deadlines, invented case studies, or testimonials are published.

## Pricing reference (2026-10-11)

The owner supplied a two-plan pricing reference. The section follows its centered heading, pale rounded shared frame, unfilled Basic card and white Pro card, checklist inclusions, dark pill buttons, and rounded gradient help panel. DM Sans and existing emerald/mint/charcoal tokens match the application. Both plans expose their inclusions; Pro explicitly inherits Basic. Payment-type copy replaces the monthly/annual toggle because no annual offer was confirmed. Brand/phone icons replace an unverified staff portrait. The help link uses the existing contact flow without claiming a booking integration. At 600px and below the cards stack; focus states, 46px links, and reduced-motion behavior are included. Component-prefixed styles live in `components/landing/pricing-section.css`.

## Earlier image provenance (retained asset)

Generated with the built-in imagegen tool. The source remains at /Users/lakshay/.codex/generated_images/01a12647-266b-7790-8514-11aab2542310/exec-32f43485-4c89-4795-9989-efc9d06d4311.png. The project consumes only the workspace WebP file above.

Final generation prompt:

> Create a premium 3D editorial illustration for a digital agency website hero, square 1024x1024 composition. A beautifully composed physical miniature of connected ecommerce and business operations: central slim ivory desktop monitor with a simple storefront interface with lime green header and three neutral abstract product tiles; beside it a small upright tablet showing a clean inventory checklist; in foreground two warm cardboard shipping boxes one with a lime shipping label, a small ivory chat bubble with three charcoal dots, and three connected small rounded ceramic tiles bearing simple dark pictograms of a shopping bag, network integration and lightning bolt. All arranged on low rounded warm travertine plinths at varied heights. Sophisticated tactile matte materials, softly rounded edges, accurate geometry, warm gray-beige seamless studio background #dedcd3, acid lime #d4fa43 accents, charcoal #191b16 accents, off-white ceramic, natural cardboard. Art directed soft sunlight from upper left, realistic soft shadows, front three-quarter view, medium camera distance. Visual density concentrated in middle and lower half, leave the top 18 percent relatively empty for HTML service badge overlays. No plants, no shoes, no skincare, no humans, no brand logos, no floating random shapes, no gradients as decoration, no text or letters. This is an illustrative concept of agency services, not a screenshot. High-end editorial CGI, restrained and crisp.
