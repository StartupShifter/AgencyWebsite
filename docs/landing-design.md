# Starter Shifter landing page

Implementation notes, not additional company policy. Business copy remains governed by company-context.md and services.md.

## Visual direction

The latest supplied reference inspires a centered hero with a rounded emerald-to-mint background, white typography, translucent stepped forms, and three layered commerce illustrations. The hero fills the available viewport width with a 12px gap on each side at every breakpoint and no maximum width. The center shows a concept storefront with an original SVG tote; the supporting panels show catalog organization and an order workflow. These are service illustrations, not client work, a live store, or performance evidence. The header logo and CTA use the same emerald accent. Lower-page layouts and business terms are preserved.

| Role                       | Token                | Value   |
| -------------------------- | -------------------- | ------- |
| Page                       | background           | #f7f7f2 |
| Text / primary button      | foreground / primary | #20221c |
| Highlight                  | accent               | #d5fa43 |
| Muted surface              | secondary            | #eaece3 |
| Supporting text            | muted-foreground     | #616458 |
| Olive illustration surface | surface-olive        | #e9eddc |

DM Sans is used throughout; Geist Mono remains available for monospace UI. Hero-specific tokens are commerce-deep (#075c3f), commerce-green (#08734f), commerce-mint (#9ed9b8), commerce-white (#ffffff), commerce-ink (#233e32), and commerce-soft (#edf5ef). The type hierarchy, section gutters, responsive breakpoints, and semantic tokens live in app/globals.css. The hero adapts at 1000px, 760px, and 480px; small phones show the central storefront without the side panels. Other page sections stack at 760px. Reduced motion disables smooth scrolling and transitions.

## Component structure

- app/page.tsx composes the page without embedding section designs.
- components/landing/ contains the header, hero, service illustrations, about, process, pricing, FAQ, contact flow, brand, and footer.
- components/ui/ contains the shared shadcn primitives. Button has a marketing size and lime, emerald, and white hero variants; Badge has a service variant.
- The current hero illustrations are responsive HTML/SVG in components/landing/hero-section.tsx and require no raster image download. public/images/connected-commerce.webp is the retained earlier hero asset (approximately 112 KB). Small service diagrams are code-native, decorative graphics with readable service descriptions alongside.

## Contact flow

No public contact address was available when implemented. ContactSection accepts an optional contactEmail prop. Without it, the accessible project brief dialog downloads a local text file and explicitly says no enquiry has been sent. With it, submission opens an email draft for the visitor to review and send. There is no backend submission, database storage, or email service.

## Content boundaries

Pricing shows the confirmed $1,000 default reference, adjustable up or down by scope, with currency and final quote agreed individually. Monthly coverage and third-party costs remain separate. No fixed packages, delivery deadlines, invented case studies, or testimonials are published.

## Earlier image provenance (retained asset)

Generated with the built-in imagegen tool. The source remains at /Users/lakshay/.codex/generated_images/01a12647-266b-7790-8514-11aab2542310/exec-32f43485-4c89-4795-9989-efc9d06d4311.png. The project consumes only the workspace WebP file above.

Final generation prompt:

> Create a premium 3D editorial illustration for a digital agency website hero, square 1024x1024 composition. A beautifully composed physical miniature of connected ecommerce and business operations: central slim ivory desktop monitor with a simple storefront interface with lime green header and three neutral abstract product tiles; beside it a small upright tablet showing a clean inventory checklist; in foreground two warm cardboard shipping boxes one with a lime shipping label, a small ivory chat bubble with three charcoal dots, and three connected small rounded ceramic tiles bearing simple dark pictograms of a shopping bag, network integration and lightning bolt. All arranged on low rounded warm travertine plinths at varied heights. Sophisticated tactile matte materials, softly rounded edges, accurate geometry, warm gray-beige seamless studio background #dedcd3, acid lime #d4fa43 accents, charcoal #191b16 accents, off-white ceramic, natural cardboard. Art directed soft sunlight from upper left, realistic soft shadows, front three-quarter view, medium camera distance. Visual density concentrated in middle and lower half, leave the top 18 percent relatively empty for HTML service badge overlays. No plants, no shoes, no skincare, no humans, no brand logos, no floating random shapes, no gradients as decoration, no text or letters. This is an illustrative concept of agency services, not a screenshot. High-end editorial CGI, restrained and crisp.
