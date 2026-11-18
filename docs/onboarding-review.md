# Onboarding questionnaire review — 2026-11-18

> Runtime architecture update: [backend versioning and admin editing](onboarding-versioning.md) supersedes the compile-time implementation details in this dated review. Existing clients retain their assigned versions.

Status: **Implemented questionnaire revision**, with **Proposed** process improvements explicitly separated below. This is internal operating guidance, not a new service agreement or a legal review.

## Verdict

The original 127-question library was broad enough for initial discovery, but its size did not establish completeness. It already covered company context, customers, competitors, public links, workflows, accounts, policies, and handover. Calling all of it outdated would be inaccurate. The problems were vague prompts, unexplained technical choices, important details buried in optional notes, missing marketing inputs, and routing that let ecommerce clients miss fulfillment or measurement topics.

No questionnaire is sufficient for every ecommerce business. Client answers are starting evidence. The agency still needs to review source material, clarify contradictions, verify account access and platform capabilities, and agree scope and acceptance criteria. A marketplace, regulated catalog, cross-border operation, or complex subscription business needs specialist follow-up.

The revision keeps all 127 original IDs and choice values, reviews every original question, and adds 14 optional questions. The library now has **141 questions: 53 shared and 88 conditional workflow questions across 42 topics**. These are library counts, not a target form length or a requirement for every client. The core route has 12 phases; selecting every workflow produces 30 phases. Each phase has at most five questions. Larger numbers alone are not a UX improvement: pilot the actual routes and remove questions that do not inform a decision.

## Application and code findings

| Area inspected | Observed behavior | Implication |
| --- | --- | --- |
| `app/`, landing components, pricing and service docs | Next.js 16.4.5 public site, authentication pages, private onboarding/dashboard, development-only previews. Owner-approved Basic/Pro setup and ongoing boundaries are in repository docs. | Discovery requests must not silently become agreed services. Older README/AGENTS descriptions calling this only a starter are stale descriptions of application maturity. |
| `lib/auth-*`, Convex auth integration, guarded routes | Better Auth sessions and Convex-backed authenticated data; no anonymous production brief. | Onboarding is a client portal, not a public lead form. Prefilled identity and verified access are separate from questionnaire preferences. |
| `shared-pages.ts`, `module-pages.ts`, questionnaire routing | Runtime questions lived in TypeScript. The supplied JSON was an export and omitted some validation properties. | Editing JSON alone would not update the form. Both are now synchronized, including allowed states and acknowledgements, using `scripts/export-onboarding.ts`. |
| `question-field.tsx` | Native radio/checkbox choices, structured fields, lists, presets, optional notes, searchable long lists. | Preserve controls and stable values; add human-readable labels and short explanations rather than replace them with decorative interactions. |
| Wizard, phases, guided flow, progress and journey helpers | One question at a time, phased navigation, valid-answer versus follow-up counts, review, save-and-exit, autosave and save retry. | Good foundations already exist. Their presence is not evidence that clients find a long route easy. |
| `convex/onboarding*`, draft validation, schema | Drafts store typed answers by question ID, questionnaire version, notice version, active modules, and exact question position. Validation is derived from the shared library. | New IDs require the backend library update as well as the frontend. Existing values survive this revision; older submissions require current-version review under the existing version policy. |
| Dashboard, summaries, documents and delivery | Brief answers, open items, verified engagement prerequisites, files, project stages, and activity are available. | The agency can follow up on unknowns. A completed brief does not establish signed scope, payment, account access, or launch readiness. |
| Checks and scripts | Library, route, phase, dashboard, preview persistence and authenticated integration checks already exist. | Updated the obsolete exact-wording check against the parent `onboarding.md`; current JSON/runtime parity plus original ID checks now protect this revision. |

This is an onboarding-focused architecture and content review, not a complete security, accessibility, or production deployment audit of every dependency or UI primitive.

## What other agencies and guidance actually show

These are public examples, not a representative survey of agencies. Public forms do not reveal their completion rates or whether clients are satisfied.

| Source | Observed practice | Application here |
| --- | --- | --- |
| [Caffeinated Marketing: public website questionnaire](https://caffeinatedmarketing.com.au/website-questionnaire/) | Collects profitable services, buying concerns, content and approval responsibilities, with practical examples and an invitation to seek help. | Ask for commercial priorities and give examples; allow a discussion when information is unavailable. Do not copy unrelated requests for addresses or registrations into every project. |
| [AgencyAnalytics: social client questionnaire](https://agencyanalytics.com/blog/social-media-client-onboarding-questionnaire) | Groups business overview, goals, audience, content, account access, and expectations; discusses how performance will be tracked. | Give marketing its own route and connect channel choices to business outcomes, evidence, and ownership. It is a vendor guide, not proof that a specific length improves completion. |
| [GOV.UK: question pages](https://design-system.service.gov.uk/patterns/question-pages/) | Recommends clear question purpose, valid uncertainty responses, reusing supplied information, and testing one question per page. | Preserve the focused form, keep hints short, and put longer decision context in a disclosure. The sidebar remains an existing pattern to test; it is not fully endorsed by this guidance. |
| [GOV.UK: form structure](https://www.gov.uk/service-manual/design/form-structure) | A question protocol identifies need, use, audience, and verification for each input. | Every revised question has a `why` statement; the verification handoff below identifies how the agency checks it. |
| [Shopify: behavior reports](https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports) | Separates visits, cart additions, checkout and purchase sessions. | Ask for the stage, period, definition, and source before diagnosing conversion. Orders and purchasing sessions are not interchangeable. |
| [Google Search Central: site moves](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) | Describes URL mapping, redirects, indexing checks, and monitoring during a move. | Preserve important page links and search evidence; an existing site replacement needs a migration review. |
| [Shopify: collecting contact information](https://help.shopify.com/en/manual/promoting-marketing/create-marketing/customer-contact-information) | Distinguishes contact information from email/SMS marketing opt-in. | Ask where permission and opt-outs are recorded. A customer list alone is not evidence of channel permission; verify relevant market and platform rules. |

Sources accessed 2026-11-18. Wording in this questionnaire is tailored to Starter Shifter; no external template is reproduced wholesale.

## Changes implemented

- Short, plain questions and answering hints across all 127 existing questions, plus a separate `why` explanation for all 141.
- `optionLabels` separates client wording from persisted values. For example, `ERP/CRM or other connections` displays as “Connect sales, stock, or business tools.” Old values still route correctly.
- `optionDescriptions` provides small explanations for ambiguous service and catalog choices. The search matches visible labels and explanations.
- “Other” is a single choice; its text field appears only when selected. It obeys selection limits. Exclusive guidance/none choices cannot coexist with specific choices; a guidance choice stays available when a selection limit is reached.
- Public source requests explicitly include website/store/app, social profiles, marketplace pages, and review listings. Clients can label each link and mark whether it is current. No credentials or raw customer records are requested.
- Customer pain points now ask for a real example and, if known, frequency or time lost. Baseline and result prompts request a date range and source and accept estimates or no history.
- Added separate SEO and email/WhatsApp marketing service choices, plus WhatsApp among social channels. Buying physical goods automatically includes stock and delivery. Buying or selecting marketing includes measurement; marketing includes policy review.
- Market fields use market-specific examples rather than the generic launch-priority placeholder.
- Added optional, balanced satisfaction and open-comment questions before final review. Negative feedback is a valid answer and does not block a project. This is “so far” feedback, not a post-submission or whole-engagement score.
- The final review includes final notes and experience feedback, which the old review grouping omitted with the rest of P16. Question-aware summaries show the same option labels clients selected.
- JSON export now includes validation metadata, is reproducible, and is checked against runtime definitions. Questionnaire revision is `2026-11-18.v2`; privacy notice content/version is unchanged.

## How to use answers to build the ecommerce and marketing plan

| Decision | Inputs | Agency verification and resulting artifact |
| --- | --- | --- |
| Positioning and customer priorities | P03–P05, P09, P07.1 | Review public sources and competitor offers; separate owner claims, dated evidence, and hypotheses in a research brief. Ask what is missing or outdated before turning material into public copy. |
| Current performance and realistic goals | P06.2–P06.4, M14.4, M15.2, M23 | Request view-only reports or redacted exports through agreed access. Record metric definition, period, channel, market/currency where relevant, and whether measured or estimated; compare equivalent periods and seasonal demand. Define a baseline and review plan. |
| Workflow changes | P07.2–P07.4, M04–M06, M12, M20–M21 | Walk through one real, redacted order with the staff who do the work. Record owner, trigger, tool, delay, exception, fallback and expected result. Draw the current and proposed process; do not automate a process simply because it was requested. |
| Catalog and checkout | M01–M05, M08–M13 | Inspect sample product data and key customer tasks; verify platform/provider features, shipping zones and rates, availability, business purchasing rules, language/currency needs, and policy owners. Agree test orders and acceptance criteria before launch. |
| SEO and migration | P07.1, P09, M02.3, M15.4, M22 | Audit current pages/search evidence, map important URLs, verify redirects and indexing settings, and prioritize useful content. Do not ask the client to invent keyword search volumes or promise unchanged rankings. |
| Social, email, messaging and acquisition | M14–M16, P10, P12.2, M26 | Review dated channel results and approved assets; confirm contact permissions, account control, spending approver, fulfillment capacity, offer economics and follow-up ownership. Produce a channel/offer/message/landing-page/follow-up plan within agreed scope. |
| Handover and ongoing ownership | P13–P15, M24–M26 | Confirm owners, verified access and critical dependencies; record handover/training and exactly what work remains client-run or agency-run. A checkbox is not a contract extension. |

A source link is a research lead, not verified truth. Public pages cannot establish profit, attribution, internal bottlenecks, or marketing permissions. Date every verification and record contradictions and a follow-up owner. Do not claim to have researched a client company merely because its URLs were collected. Do not send supplied private material to third-party AI tools without the agreed processing permissions.

## Proposed process improvements beyond this revision

1. **Short intake, then focused discovery.** Pilot a core business/context session followed by only agreed service details. Retain save/resume. Billing, account invitations, and access fulfillment should be administrative tasks once the agency record is available. This revision preserves the existing full core flow; a shorter stage-gated intake is not implemented.
2. **Prefill with review.** With appropriate access, prepare a draft company fact sheet from supplied public sources, marking source/date and asking the owner to confirm. Do not scrape private pages or silently overwrite client answers. Automated URL research and prefilling are not implemented.
3. **Use a follow-up owner and due date.** Convert unknowns into a small action list tied to project decisions. Do not block on a metric that can be measured later; do block a launch on a verified critical dependency. Structured action tracking is not added by these question changes.
4. **Check the brief on a call.** Reconcile goals, baseline, scope, owner responsibilities, commercial limits, customer journey, and launch acceptance criteria. Link verified evidence to the plan.
5. **Test actual routes.** Include a first-time seller, an established store migration, a B2B seller, an offline business, and an SEO/email/social engagement on phone and desktop. Ask participants to explain what each selected option means and why the question is being asked. Use their language to revise confusing choices.
6. **Revisit advanced inputs when relevant.** Complex tax/duty handling, product safety, subscription rules, catalog compatibility, accessibility, data residence, and supplier contracts need appropriate specialist follow-up. The broad library is not a universal compliance checklist.

## How to verify satisfaction and usefulness

Implemented now: P16.4 uses five balanced, fully labeled choices from very dissatisfied through neutral to very satisfied. P16.5 asks what would make onboarding easier. Both can be skipped without creating a project follow-up. Existing answer-level help and pause controls remain available; they are not satisfaction measurements.

[GOV.UK satisfaction guidance](https://www.gov.uk/service-manual/measuring-success/measuring-user-satisfaction) recommends feedback at multiple points, including people who leave. Completion and satisfaction are distinct measures. [GOV.UK completion guidance](https://www.gov.uk/service-manual/measuring-success/measuring-completion-rate) supports explicit start/completion definitions. The following instrumentation is **Proposed**, not installed or already measured:

| Measure | Definition | How to interpret it |
| --- | --- | --- |
| Satisfaction | Positive responses (satisfied or very satisfied) / answered ratings, with raw distribution and response count | Publish internally with questionnaire version and route. Track the response rate and neutral/negative answers; never count missing ratings as satisfied. |
| Feedback response rate | Respondents with an actual answered rating / unique people reaching the feedback question | A high score from a small, selective group is weak evidence. This in-flow denominator differs from all submitted clients. |
| Completion | Unique briefs submitted within an agreed observation window / unique briefs that started business questions in that cohort | Exclude previews and fixtures. Count each brief once, separate changes/resubmissions, and keep paused/revisited drafts distinct from confirmed abandonment. |
| Question friction | Validation failures, help/unknown states, backtracks, and optional skips by stable question ID | Investigate clusters; “not measured yet” may be honest data, not confusing UX. Record events without answer text. |
| Active effort | Median active time and distribution by route/device, excluding idle gaps and later resume sessions | Do not call `updatedAt - createdAt` active completion time or make an untested duration promise. |
| Save reliability | Failed saves and successful retries / save attempts | Save problems can look like question abandonment. Correlate with the relevant step, not private input. |
| Discovery usefulness | Briefs needing clarification on a launch-critical decision / briefs reviewed; research team records reason | A fast form that leaves the team guessing is not successful discovery. |
| Content clarity | Observed ability to paraphrase the question and choose a suitable option in moderated testing | Combine observations with ratings; staff opinion alone is not evidence of client comprehension. |

Add an optional “Was this clear?”/issue-report control during the flow and a short post-submit feedback opportunity, rather than repeat a survey after every phase. Offer appropriate help to paused clients through the agreed project contact process; no automated follow-up messages are enabled here. Do not use keystroke capture, answer content in analytics, or session replay to diagnose friction.

Create a versioned baseline first. Compare comparable routes and cohorts before/after changes; show sample sizes and do not claim causation or an industry benchmark from a handful of responses. Agree improvement targets after the pilot, rather than invent a universal acceptable number of questions or a guaranteed completion rate.

## Every original question reviewed

All original topics are retained because each supports a project decision. The table records the original wording, revised wording, and the decision it supports; the JSON contains the corresponding answer hint and options. This is an editorial and coverage review, not verification that a future client's answer is factually true.

### P01 — Let's meet

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| P01.1 | What is your full name? | What name should we use for you? | This helps us address you correctly in project conversations. |
| P01.2 | What is your company, organization, or professional name? | What is your business or brand called? | We use this name in the brief and check it against your website and profiles. |
| P01.3 | Which email address should we use for your project? | Which email should we use for this project? | We use this address for project updates and questions that need your input. |
| P01.4 | What phone number can we contact you on? | What phone number should we use, if needed? | A reachable number lets us use a phone-based channel if you choose one. |

### P02 — How we should work with you

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| P02.1 | What is your role in this project? | What is your role in this project? | This helps us involve the right people in decisions; we ask about final approval separately. |
| P02.2 | Where are you based? | Which country and time zone do you work in? | We use this to arrange reviews at suitable times. |
| P02.3 | How would you prefer us to communicate? | How would you like to hear from us? | We will confirm the channels we can support and use your preferences to plan communication. |

### P03 — Your business at a glance

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| P03.1 | In a few sentences, what does your business or organization do? | What does your business do? | This becomes the starting point for research, website content, and marketing direction. |
| P03.2 | Which industry or field best describes your work? | Which industry are you in? | Your industry helps us find relevant competitors and spot requirements to investigate. |
| P03.3 | What stage is the business at? | Which description best fits your business today? | We adapt recommendations to what already exists and what still needs to be built. |

### P04 — What you offer

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| P04.1 | What do you provide, and how do people receive it? | What will this project help you sell or deliver? | Your choices reveal relevant follow-up questions, such as delivery, bookings, or subscriptions. |
| P04.2 | What are the main products, services, or activities we should focus on first? | Which products or services should we focus on first? | These examples help us plan the first launch around the offers that matter most. |
| P04.3 | Where do you currently serve people, and where do you want to serve them next? | Where do you sell now, and where would you like to sell next? | Markets affect language, currency, delivery, research, and the requirements we must verify. |

### P05 — Who this is for

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| P05.1 | Who is the main customer or user we should prioritize? | Who is your main customer or user? | We use this to shape navigation, product information, and marketing messages for the right people. |
| P05.2 | Is the person using your offer also the person choosing and paying for it? | Does the person using your product also choose and pay for it? | Different buyers and users may need different information, approvals, or account access. |
| P05.3 | What usually makes someone need your offer, and what makes them hesitate? | What helps a customer decide to buy from you? | Customer concerns guide product pages, FAQs, trust information, and follow-up messages. |

### P06 — Why you are starting this project

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| P06.1 | Why do you want Starter Shifter's help now? | What made you start this project now? | This tells us what needs attention first and what would make the project useful. |
| P06.2 | What would you most like this project to improve? | What are the three most important improvements you want? | Your priority helps us make trade-offs when time, budget, or capacity is limited. |
| P06.3 | What result would make this project worthwhile to you? | What outcome would make this project worthwhile? | We compare this goal with your starting point before agreeing realistic success measures. |

### P07 — How things work today

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| P07.1 | Where can we see your current business online? | Which websites and public profiles belong to your business? | We use these sources to research your business and check consistency. Note which links are current; private reports can be shared through agreed access later. |
| P07.2 | How does one typical customer request or internal task move from start to finish? | How does a typical order or request move through your business? | We map the handoffs between people and tools before proposing changes. A new business can describe its intended process. |
| P07.3 | Where does that process take the most effort or go wrong? | Where does that process get stuck or create extra work? | This helps us prioritize the cause of a problem and preserve the parts that already work. |

### P08 — What you want help with

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| P08.1 | Which parts of the business should this project help with? | What would you like our help with? | We show relevant follow-ups and review requests against your agreement. Choices do not change your plan or price; Basic setup and Pro ongoing work have different boundaries. |
| P08.2 | What should people be able to do when this is ready? | What should customers or staff be able to do? | These actions help us define the pages, steps, and connections the first version needs. |
| P08.3 | What must be ready for the first launch, and what can wait? | What is essential for launch, and what can wait? | This keeps the first release focused. Add anything explicitly excluded so we can record that boundary. |

### P09 — Your market and reasons to choose you

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| P09.1 | Who or what would people choose if they did not choose you? | What alternatives do your customers compare you with? | We compare offers, buying experiences, and messaging to find useful differences, rather than copy competitors. |
| P09.2 | Why do people choose you, or why do you hope they will? | Why do customers choose you? | We use supported differences in positioning and content; planned strengths need validation first. |
| P09.3 | What evidence or insights could help us understand your market and customers? | What sources could help us understand your customers and market? | Evidence helps us check assumptions. Public marketing use of reviews, images, or testimonials needs separate permission. |

### P10 — Brand and content readiness

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| P10.1 | What brand and business content do you already have? | Which brand and content materials do you have? | This shows what we can reuse and what may delay delivery. File production and licensing must match the agreed scope. |
| P10.2 | How should your business feel and sound to people? | How should your brand look and sound? | We use this to guide design and writing consistently. Add styles or language to avoid. |
| P10.3 | Who can supply or approve the content we will need? | Who can provide and approve your content? | We need a clear owner for product details, photos, copy, and approvals so missing content does not stall the build. |

### P11 — Requirements we should know early

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| P11.1 | Do your products, services, or users have any special restrictions or approval requirements? | Are there restrictions or approvals we should know about? | We flag requirements that may affect sales, advertising, or launch for review with the responsible person. |
| P11.2 | Will the project handle private information or different levels of access? | What private information or account permissions will the project involve? | This helps us plan access and identify information-handling requirements to verify before implementation. |
| P11.3 | Are there language, accessibility, device, or connectivity needs we should design around? | What language or access needs should we plan for? | These inputs guide accessible design, translations, and mobile or slow-connection priorities. |

### P12 — Timing and practical limits

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| P12.1 | Is there a target launch date or event we should plan around? | Is there a launch date or event we should plan around? | We use this to discuss dependencies and a realistic schedule; entering a date does not confirm it. |
| P12.2 | What investment limits should guide our recommendations? | What budget limits should guide our recommendations? | We use these limits to compare options. Your agreement sets agency fees; hosting, domains, ad spend, and other third-party charges are client-paid. |
| P12.3 | What could affect your ability to launch or respond to us? | What could delay the work or your feedback? | We can plan around dependencies early instead of discovering them close to launch. |

### P13 — Decisions, reviews, and handover

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| P13.1 | Who gives final approval for scope, design, content, and launch? | Who has final approval for the project? | A clear decision owner helps avoid conflicting feedback; list separate approvers only where needed. |
| P13.2 | Who should help review the first research and design direction? | Who else should review the research and design? | This helps us plan reviews and hear from the people who will use or run the result. |
| P13.3 | Who will run the website, customer work, and connected systems after launch? | Who will run things after launch? | We plan ownership and handover around the agreed coverage. Selecting the agency does not add ongoing services. |

### P14 — Your engagement details

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| P14.1 | Does this project summary match what you agreed with us? | Does the recorded project agreement look right? | We flag differences for review. This answer does not sign a contract or verify a payment. |
| P14.2 | Are the contracting and billing details correct? | Which legal name and email should appear on your invoices? | These details support contracting and billing. Address and tax details are requested separately only when needed. |
| P14.3 | Is anything preventing you from completing the agreement or advance payment? | Do you need help with the agreement or advance payment? | We can resolve administrative issues; verified contract and 40% advance status come from agency records. |

### P15 — Your workspace and remaining inputs

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| P15.1 | Should we use your project email for your client dashboard invitation? | Which email should have access to your client workspace? | The address must be verified before access is granted; this form does not grant permissions. |
| P15.2 | Who else should be invited to your project workspace or onboarding group? | Who else should join your project workspace or group? | This records your access request so we can check responsibilities before sending any invitations. |
| P15.3 | How would you like to provide the remaining files or account access? | How would you like to share remaining files or account access? | We will arrange the appropriate sharing or role-based access process for the outstanding items. |

### P16 — Review and submit

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| P16.1 | Is there anything else we should understand before we begin? | What else should we understand about your business or project? | This catches context that did not fit earlier questions before we review the brief with you. |
| P16.2 | Are these details accurate to the best of your knowledge, and are you authorized to share them for this project? | Are these details accurate, and are you allowed to share them? | Your confirmation helps us distinguish supplied facts from research still needed. It does not approve project scope. |
| P16.3 | Have you reviewed how your onboarding information will be used? | Have you read how we use your onboarding information? | This acknowledgement covers project use of your information. Marketing permission is separate and is not required for workspace access. |

### M01 — Your website's job

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| M01.1 | Are we creating something new, improving what you have, or replacing it? | Are we building a new site or changing an existing one? | A new build, improvement, or replacement needs a different plan for content, access, and continuity. |
| M01.2 | What information or features must visitors find before taking the main action you selected? | What do visitors need before they can take the main action? | This shapes page content and navigation around the customer’s task. |
| M01.3 | Do you have a platform preference or an existing platform we must keep? | Is there a website platform we should use or keep? | We check fit, existing investments, and platform limits before recommending a solution. |

### M02 — Website ownership and content

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| M02.1 | Do you already own the domain and website/hosting accounts? | Who controls your domain, website, and hosting accounts? | Account ownership and access can affect setup, migration, and handover. |
| M02.2 | Which pages or content must be ready at launch? | Which pages or content need to be ready for launch? | This defines the launch content and who needs to prepare it. |
| M02.3 | What needs preserving from your existing online presence? | What should we keep from your current website? | We identify migration needs and protect useful content, search visibility, and customer access. |

### M03 — Product catalog

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| M03.1 | Approximately how many products and variations should launch first? | How large is your first product catalog? | Ten products with many sizes can involve more setup than ten simple items; rough counts help estimate the work. |
| M03.2 | What must customers choose or provide for a product? | What choices must a customer make for a product? | Product choices affect the catalog structure, pricing, fulfillment, and checkout. |
| M03.3 | Where are the current product details, prices, and images kept? | Where are your product details, prices, and images kept? | We check data readiness, missing details, image rights, and import needs before building the catalog. |

### M04 — Stock and availability

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| M04.1 | Where do you track stock or availability today? | Where do you keep stock counts today? | We need a trusted stock source before designing synchronization or availability rules. |
| M04.2 | Which locations and sales channels share that stock? | Which locations and sales channels use the same stock? | Shared stock needs rules to reduce overselling; note batches, expiry, or serial numbers only if relevant. |
| M04.3 | What should happen when availability changes or counts disagree? | What should happen when an item is unavailable? | We use this to plan availability messages, backorders, and staff checks. |

### M05 — Delivery, pickup, and returns

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| M05.1 | How do orders reach customers, and where can you deliver? | How will orders reach customers? | Delivery methods and areas determine the shipping and pickup choices customers see. |
| M05.2 | Which providers and delivery rules do you already use? | What delivery providers and rules do you use? | We use these details to check checkout rates and fulfillment connections, including packaging or cross-border constraints. |
| M05.3 | Who handles dispatch problems, returns, exchanges, and refunds? | Who handles delivery issues, returns, and refunds? | Clear ownership and rules help us plan customer messages and exception handling; include return costs if known. |

### M06 — Supplier-made or personalized products

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| M06.1 | Which suppliers produce or send your products? | Who makes or dispatches your supplier-made products? | We need to verify production and dispatch capabilities before connecting the order flow. |
| M06.2 | What must be approved before an order enters production? | What needs approval before production starts? | These checks can prevent incorrect or unapproved orders reaching production; note whether samples and timing are tested. |
| M06.3 | Who handles supplier failures or remakes, and when must the supplier be paid? | How do you handle supplier failures and supplier payments? | Supplier timing and upfront costs may affect promises, order status, and cash flow. |

### M07 — Bookings and appointments

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| M07.1 | What can people book, and what limits availability? | What can customers book? | These limits determine available time slots and booking rules. |
| M07.2 | How should a booking be confirmed? | How should a booking be confirmed? | This determines when we reserve capacity and notify the customer. |
| M07.3 | What should happen if someone reschedules, cancels, or does not attend? | What are your rescheduling, cancellation, and no-show rules? | We need these rules for booking messages, payment requirements, and changes to availability. |

### M08 — Quotes, projects, and B2B buying

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| M08.1 | What information do you need to decide whether an inquiry is a good fit? | What do you need to know before accepting an inquiry? | We keep inquiry forms focused on information your team actually uses. |
| M08.2 | How does an inquiry become an approved order or project? | How does an inquiry become an approved order? | Quotes, purchase orders, approvals, and handoffs shape the sales workflow. |
| M08.3 | Are there customer-specific prices or purchasing rules? | Do business customers have special buying rules? | These rules may require different accounts, prices, approvals, or checkout behavior. |

### M09 — Digital products and learning

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| M09.1 | What digital content will people receive, and how is it delivered? | How will customers receive your digital content? | Delivery format affects hosting, access, and purchase confirmation. |
| M09.2 | What controls who can access or use it? | What limits access to the digital content? | We use these rules to plan who gets access and when it ends. |
| M09.3 | What should happen after access is granted? | What support or features are needed after access starts? | Learning, updates, support, and expiry require different follow-up workflows. |

### M10 — Subscriptions and memberships

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| M10.1 | What recurring value does each membership or subscription provide? | What does a subscription or membership include? | The recurring offer determines delivery, access, and billing requirements. |
| M10.2 | How should trials, renewals, upgrades, or failed payments work? | Which subscription billing behaviors do you need? | We check these against your policies and provider capabilities before implementation. |
| M10.3 | What happens when someone pauses or cancels? | What happens when a customer pauses or cancels? | Cancellation behavior affects billing, fulfillment, and customer messages. |

### M11 — Marketplaces and multiple providers

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| M11.1 | Which groups use the platform, and what does each group need to do? | Which groups will use the marketplace? | Each group may need different permissions and screens. |
| M11.2 | How are providers approved and transactions allocated? | How are providers approved and assigned work or orders? | This defines onboarding, matching, and operational responsibilities. |
| M11.3 | Who collects money, pays providers, and resolves disputes? | Who collects money, pays providers, and resolves disputes? | The money flow affects provider feasibility and responsibilities that need specialist review. |

### M12 — Internal team workflows

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| M12.1 | Which repeated staff task should we improve first? | Which repeated team task should we improve first? | We choose a useful first improvement and a baseline for checking its effect. |
| M12.2 | Who should submit, approve, edit, and view that work? | Which team roles need to submit, approve, edit, or view work? | Permissions and approval steps need to reflect how the team actually works. |
| M12.3 | What would help the team adopt the new process? | What would help your team use the new process? | A workable rollout matters as much as the tool itself for team adoption. |

### M13 — Customer payments and invoicing

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| M13.1 | How should your customers pay, and in which currencies? | How should customers pay you? | This concerns customer payments, separate from your agency fees, and helps us check provider coverage. |
| M13.2 | Do you already have payment and accounting providers? | Which payment and accounting providers do you use? | Provider readiness and supported connections affect payment setup and reconciliation. |
| M13.3 | What approved pricing, tax, invoice, and refund rules must the flow follow? | Which approved pricing, tax, invoice, and refund rules apply? | Checkout and invoices must reflect approved business rules; we do not infer tax treatment from a country alone. |

### M14 — Your social presence

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| M14.1 | Which social channels should we set up or improve first? | Which social channels matter most for this project? | We focus setup or improvements on relevant channels and verify account ownership separately. |
| M14.2 | What should your social content help people understand or do? | What should social content help customers do? | This connects content choices to business goals rather than posting without a purpose. |
| M14.3 | Who will create, approve, and publish content? | Who will create, approve, and publish social content? | We plan responsibilities and approvals around the agreement; ongoing production needs defined coverage. |

### M15 — Campaign and growth priorities

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| M15.1 | Which offer and audience should a campaign focus on first? | Which offer and audience should marketing focus on first? | A clear starting point helps us connect campaigns, landing pages, and follow-up. |
| M15.2 | How do people currently find you, and what has worked or failed? | How do customers currently find you? | We use past evidence to decide what to retain, test, or investigate rather than guess channel performance. |
| M15.3 | What limits should guide campaign spending and promotions? | What spending and promotion limits should marketing follow? | We reuse your project budget and check commercial limits. Ad spend is client-paid; requests do not authorize campaign spending. |

### M16 — Lead follow-up and repeat business

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| M16.1 | What makes an inquiry a qualified lead for your business? | What makes an inquiry a good fit for your business? | We use this to distinguish useful inquiries from volume alone. |
| M16.2 | What should happen when a lead arrives? | Who follows up when a new inquiry arrives? | A campaign needs a workable handoff so inquiries receive timely follow-up. |
| M16.3 | What should bring people back after the first sale or interaction? | What encourages customers to buy or use your service again? | We use this to plan useful retention messages rather than send promotions without a reason. |

### M17 — Human customer handling

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| M17.1 | Which customer conversations need help, and approximately how many arrive? | Where do customer questions arrive? | Volume and channel mix help define staffing, coverage, and workflow needs. |
| M17.2 | What may the agency handle, and what requires your approval? | Which conversations should the agency help handle? | We clarify responsibilities and authority limits against the agreed scope before handling customers. |
| M17.3 | Who takes over urgent, sensitive, or unresolved cases? | Who takes over urgent or unresolved customer issues? | We need a clear escalation path for complaints, sensitive issues, and exceptions; no coverage hours are assumed. |

### M18 — Chatbot purpose and knowledge

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| M18.1 | Where should a chatbot help, and which three questions or tasks should it handle first? | Where should the chatbot help customers? | We check channel capabilities and access before agreeing what the chatbot can do. |
| M18.2 | Which information can it rely on for accurate answers? | Which approved information can the chatbot use? | Reliable sources reduce unsupported answers; private datasets should use an agreed secure process. |
| M18.3 | What language and tone should it use? | What language and tone should the chatbot use? | This keeps chatbot responses consistent with your brand and customers’ language needs. |

### M19 — Chatbot actions and human handoff

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| M19.1 | Should it only answer questions, or also take actions? | What is the chatbot’s main job? | Action-taking needs verified access and feasibility checks before it enters the scope. |
| M19.2 | What must it never decide or do without a person? | What should always need a person’s approval? | We use these boundaries to define permissions and human review. |
| M19.3 | When should it hand over, and who should receive the conversation? | When should the chatbot hand a conversation to a person? | We plan escalation and what happens when staff are unavailable; add any usage-cost limit if known. |

### M20 — Automation and connected tools

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| M20.1 | Which repetitive task or information transfer should happen automatically? | Which repeated task should happen automatically? | A focused first automation makes it easier to verify value and avoid automating a broken process. |
| M20.2 | Which tools need to be involved? | Which tools need to work together? | We verify connectors, permissions, and platform limits before promising a connection. |
| M20.3 | What should trigger the process, and what result should it produce? | What starts the automation, and what should happen next? | This defines the first workflow to validate; add frequency or volume only if known. |

### M21 — Data rules and failed workflows

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| M21.1 | What information needs to move between the tools, and how quickly? | What information should move between tools? | Record types, direction, and timing determine connection requirements. |
| M21.2 | Which system should be trusted if records disagree? | Which tool has the correct record when tools disagree? | A trusted source prevents updates from overwriting the wrong information. |
| M21.3 | Who should be alerted when something fails, and how can work continue? | What should happen if the connection fails? | We plan recovery and exception handling alongside the normal workflow. |

### M22 — Moving existing data or systems

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| M22.1 | What information or content needs to move, and from where? | What needs to move from your old tools or website? | We assess export access, migration work, and what needs verification before moving live data. |
| M22.2 | What problems already exist in that information? | What problems are already present in that information? | We avoid carrying known errors into the new system or changing records without an owner. |
| M22.3 | What must keep working while the move happens? | What must stay available during the move? | We plan redirects, continuity, backups, and rollback around these priorities before switching. |

### M23 — Measurement and performance

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| M23.1 | What do you currently measure, and where are those reports? | Which business or website results do you track today? | We check what evidence exists before proposing reporting or new tracking. |
| M23.2 | What is the current starting point for your main goal? | What starting numbers do you already have for your main goal? | Comparable starting numbers help assess progress; estimates are welcome and revenue is optional. |
| M23.3 | What should a useful report help you decide? | What decisions should your reports help you make? | We focus reporting on actions your team can take, rather than collect metrics without a purpose. |

### M24 — Ongoing care and recovery

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| M24.1 | Which systems and recurring tasks need ongoing help? | Which recurring tasks need support after launch? | We compare requests with the agreed coverage; maintenance and new feature work need clear limits. |
| M24.2 | What interruptions would affect your business most? | Which service interruptions would hurt your business most? | These priorities guide a support discussion; they do not create response-time or recovery guarantees. |
| M24.3 | Who should receive alerts and approve maintenance or extra work? | Who should receive alerts and approve maintenance work? | We need an owner for access, subscriptions, and approval of disruptive or extra work. |

### M25 — Information access and protection

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| M25.1 | Which roles should be allowed to see or change private information? | Who should be able to see or change private information? | We use these boundaries to plan permissions for staff, customers, and providers. |
| M25.2 | Are there requirements for where information is stored, how long it is kept, or when it is deleted? | What storage, retention, or deletion requirements do you have? | These requirements can affect tool selection and data flows and need confirmation by the responsible person. |
| M25.3 | Who can confirm these requirements and help with incidents or access removal? | Who can confirm data requirements and handle access or incident questions? | A clear owner helps us verify requirements and arrange access removal or incident escalation. |

### M26 — Policies and approvals for your business

| ID | Original question | Revised question | Why retain / clarify it |
| --- | --- | --- | --- |
| M26.1 | Which approved policies or industry requirements must the project follow? | Which approved policies must the project follow? | We identify missing text, disclosures, and review needs before launch or campaign setup. |
| M26.2 | Who will supply and approve missing policy text, required disclosures, or permissions? | Who will provide and approve missing policies or permissions? | We need approved text and usage rights; providing a file alone does not establish permission to publish it. |
| M26.3 | Is there any requirement that could restrict a sale, launch, campaign, or data flow? | Could any requirement prevent a sale, campaign, launch, or data transfer? | This helps us identify a blocking dependency before committing to a proposed implementation. |

## Added questions

All additions are optional; the agency can follow up where their answers affect a decision.

| ID | Question | Decision supported |
| --- | --- | --- |
| P06.4 | What starting numbers do you have for your main goal? | A starting point lets us compare progress fairly. Revenue is optional; a new business can say it has not launched. |
| P07.4 | Which tools does your team use to run the business? | We look for existing tools to retain and gaps between them before recommending new software. |
| P16.4 | How satisfied are you with this onboarding so far? | Your feedback helps us improve onboarding. This is an optional experience rating, not approval of scope or a satisfaction guarantee. |
| P16.5 | What would make this onboarding easier? | We review this alongside your rating to decide what to change. Please leave out private customer details. |
| M01.4 | Which task is hardest for customers on your current site? | A real problem helps us prioritize the redesign and define a task to check before launch. |
| M03.4 | Which products matter most commercially? | This helps us prioritize products and avoid promotions that are unsuitable for your costs or supply. |
| M03.5 | How should customers find the right product? | Your catalog structure and search filters should reflect how people choose, not just how stock is stored. |
| M13.4 | What does your customer need at checkout? | Checkout requirements affect conversion, account design, and the steps we need to test before launch. |
| M14.4 | Which social content has brought useful results? | We distinguish attention from inquiries or sales and learn which topics and formats are worth testing. |
| M15.4 | Which searches should help people find your business? | We use your language as a research starting point, then verify search demand and intent; rankings are not guaranteed. |
| M15.5 | Which marketing accounts and materials can we build on? | We check analytics, search, ads, email, and creative readiness before planning connections or campaigns. |
| M16.4 | How have people agreed to receive your marketing messages? | We need to verify permissions and channel requirements before using a list. Do not upload subscriber details here. |
| M16.5 | Which customer messages would be most useful? | We use this to plan email or messaging flows, timing, and ownership; implementation depends on scope and verified permissions. |
| M23.4 | Where do people stop before completing a purchase or request? | We use the same period and definitions to locate drop-off. Unknown steps become measurement work, not guessed conversion rates. |

## Verification record

Automated checks cover JSON/runtime parity including validation metadata, all original IDs, option metadata, routing, exclusive choices, negative feedback, optional satisfaction, saved positions, five-question phase limits, dashboards, and server-rendered labels/controls. Production build and lint passed (four existing generated-file lint warnings). Local preview and authenticated integration checks passed, including all 141 saved answers, isolation, submission/edit transitions, versioned privacy, verified prerequisites, and document access. The local backend was updated with the revised library; no hosted backend was deployed.

A live browser inspection was attempted, but the computer-use tool reported “The browser access host is unavailable.” Server-rendered component checks do not replace interactive or responsive visual testing. No real client satisfaction data, completion baseline, or before/after improvement has been measured. No production deployment or real-client messages were sent.
