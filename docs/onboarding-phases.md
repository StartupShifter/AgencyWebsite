# Onboarding phases and complete question map

This is the initial bootstrap map. Live client versions supply their own immutable phase definitions from the backend; see [versioning](onboarding-versioning.md).

The revised library has 141 questions across 42 topics: 53 shared questions and 88 conditional workflow questions. All original 127 IDs are retained. See [the audit](onboarding-review.md) for question-level rationale and research. The route is continuous; finishing a phase saves and continues. Save and exit opens the dashboard.

| Route | Core phases | Workflow phases | Total phases | Questions |
| --- | ---: | ---: | ---: | ---: |
| Core only | 12 | 0 | 12 | 53 |
| Personalized | 12 | 0–18 | 12–30 | 53 plus active workflow questions |
| Every workflow (coverage reference) | 12 | 18 | 30 | 141 |

Each phase has at most five questions. Workflow phases are balanced from visible, active questions; boundaries and displayed numbers adapt to the route. The first eight core phases precede workflow details. The remaining four cover people, workspace, optional experience feedback, and review. A separate review step is not a question. Phase and question IDs are stable; inactive answers remain stored without blocking submission.

A phase completes with valid answers or explicitly permitted follow-up states. Optional questions can use Skip for now. Required contact details and acknowledgements still require valid values. Welcome saves the current privacy acknowledgement before opening the questions; final accuracy confirmation is separate. Submission and workspace activation retain the existing verified-prerequisite checks.

The following all-workflows map is a coverage reference, not the mandatory client journey. It is derived from getOnboardingPhases({}, MODULE_PAGES.map(page => page.id)). Runtime definitions live in [shared-pages.ts](../lib/onboarding/shared-pages.ts), [module-pages.ts](../lib/onboarding/module-pages.ts), and [phases.ts](../lib/onboarding/phases.ts).

## Phase 1: Meet your project team

Shared phase; 5 questions. Phase ID: meet.

| ID | Topic | Question |
| --- | --- | --- |
| P01.1 | Let's meet | What name should we use for you? |
| P01.2 | Let's meet | What is your business or brand called? |
| P01.3 | Let's meet | Which email should we use for this project? |
| P01.4 | Let's meet | What phone number should we use, if needed? |
| P02.1 | How we should work with you | What is your role in this project? |

## Phase 2: Your business at a glance

Shared phase; 5 questions. Phase ID: business.

| ID | Topic | Question |
| --- | --- | --- |
| P02.2 | How we should work with you | Which country and time zone do you work in? |
| P02.3 | How we should work with you | How would you like to hear from us? |
| P03.1 | Your business at a glance | What does your business do? |
| P03.2 | Your business at a glance | Which industry are you in? |
| P03.3 | Your business at a glance | Which description best fits your business today? |

## Phase 3: Your offer and audience

Shared phase; 5 questions. Phase ID: audience.

| ID | Topic | Question |
| --- | --- | --- |
| P04.1 | What you offer | What will this project help you sell or deliver? |
| P04.2 | What you offer | Which products or services should we focus on first? |
| P04.3 | What you offer | Where do you sell now, and where would you like to sell next? |
| P05.1 | Who this is for | Who is your main customer or user? |
| P05.2 | Who this is for | Does the person using your product also choose and pay for it? |

## Phase 4: Your goals

Shared phase; 5 questions. Phase ID: goals.

| ID | Topic | Question |
| --- | --- | --- |
| P05.3 | Who this is for | What helps a customer decide to buy from you? |
| P06.1 | Why you are starting this project | What made you start this project now? |
| P06.2 | Why you are starting this project | What are the three most important improvements you want? |
| P06.3 | Why you are starting this project | What outcome would make this project worthwhile? |
| P06.4 | Why you are starting this project | What starting numbers do you have for your main goal? |

## Phase 5: How things work today

Shared phase; 5 questions. Phase ID: workflow.

| ID | Topic | Question |
| --- | --- | --- |
| P07.1 | How things work today | Which websites and public profiles belong to your business? |
| P07.2 | How things work today | How does a typical order or request move through your business? |
| P07.3 | How things work today | Where does that process get stuck or create extra work? |
| P07.4 | How things work today | Which tools does your team use to run the business? |
| P08.1 | What you want help with | What would you like our help with? |

## Phase 6: Your launch priorities

Shared phase; 5 questions. Phase ID: priorities.

| ID | Topic | Question |
| --- | --- | --- |
| P08.2 | What you want help with | What should customers or staff be able to do? |
| P08.3 | What you want help with | What is essential for launch, and what can wait? |
| P09.1 | Your market and reasons to choose you | What alternatives do your customers compare you with? |
| P09.2 | Your market and reasons to choose you | Why do customers choose you? |
| P09.3 | Your market and reasons to choose you | What sources could help us understand your customers and market? |

## Phase 7: Your brand and requirements

Shared phase; 5 questions. Phase ID: brand.

| ID | Topic | Question |
| --- | --- | --- |
| P10.1 | Brand and content readiness | Which brand and content materials do you have? |
| P10.2 | Brand and content readiness | How should your brand look and sound? |
| P10.3 | Brand and content readiness | Who can provide and approve your content? |
| P11.1 | Requirements we should know early | Are there restrictions or approvals we should know about? |
| P11.2 | Requirements we should know early | What private information or account permissions will the project involve? |

## Phase 8: Your launch plan

Shared phase; 4 questions. Phase ID: launch.

| ID | Topic | Question |
| --- | --- | --- |
| P11.3 | Requirements we should know early | What language or access needs should we plan for? |
| P12.1 | Timing and practical limits | Is there a launch date or event we should plan around? |
| P12.2 | Timing and practical limits | What budget limits should guide our recommendations? |
| P12.3 | Timing and practical limits | What could delay the work or your feedback? |

## Phase 9: Project details 1

Conditional workflow phase; 5 questions. Phase ID: service-M01.1.

| ID | Topic | Question |
| --- | --- | --- |
| M01.1 | Your website's job | Are we building a new site or changing an existing one? |
| M01.2 | Your website's job | What do visitors need before they can take the main action? |
| M01.3 | Your website's job | Is there a website platform we should use or keep? |
| M01.4 | Your website's job | Which task is hardest for customers on your current site? |
| M02.1 | Website ownership and content | Who controls your domain, website, and hosting accounts? |

## Phase 10: Project details 2

Conditional workflow phase; 5 questions. Phase ID: service-M02.2.

| ID | Topic | Question |
| --- | --- | --- |
| M02.2 | Website ownership and content | Which pages or content need to be ready for launch? |
| M02.3 | Website ownership and content | What should we keep from your current website? |
| M03.1 | Product catalog | How large is your first product catalog? |
| M03.2 | Product catalog | What choices must a customer make for a product? |
| M03.3 | Product catalog | Where are your product details, prices, and images kept? |

## Phase 11: Project details 3

Conditional workflow phase; 5 questions. Phase ID: service-M03.4.

| ID | Topic | Question |
| --- | --- | --- |
| M03.4 | Product catalog | Which products matter most commercially? |
| M03.5 | Product catalog | How should customers find the right product? |
| M04.1 | Stock and availability | Where do you keep stock counts today? |
| M04.2 | Stock and availability | Which locations and sales channels use the same stock? |
| M04.3 | Stock and availability | What should happen when an item is unavailable? |

## Phase 12: Project details 4

Conditional workflow phase; 5 questions. Phase ID: service-M05.1.

| ID | Topic | Question |
| --- | --- | --- |
| M05.1 | Delivery, pickup, and returns | How will orders reach customers? |
| M05.2 | Delivery, pickup, and returns | What delivery providers and rules do you use? |
| M05.3 | Delivery, pickup, and returns | Who handles delivery issues, returns, and refunds? |
| M06.1 | Supplier-made or personalized products | Who makes or dispatches your supplier-made products? |
| M06.2 | Supplier-made or personalized products | What needs approval before production starts? |

## Phase 13: Project details 5

Conditional workflow phase; 5 questions. Phase ID: service-M06.3.

| ID | Topic | Question |
| --- | --- | --- |
| M06.3 | Supplier-made or personalized products | How do you handle supplier failures and supplier payments? |
| M07.1 | Bookings and appointments | What can customers book? |
| M07.2 | Bookings and appointments | How should a booking be confirmed? |
| M07.3 | Bookings and appointments | What are your rescheduling, cancellation, and no-show rules? |
| M08.1 | Quotes, projects, and B2B buying | What do you need to know before accepting an inquiry? |

## Phase 14: Project details 6

Conditional workflow phase; 5 questions. Phase ID: service-M08.2.

| ID | Topic | Question |
| --- | --- | --- |
| M08.2 | Quotes, projects, and B2B buying | How does an inquiry become an approved order? |
| M08.3 | Quotes, projects, and B2B buying | Do business customers have special buying rules? |
| M09.1 | Digital products and learning | How will customers receive your digital content? |
| M09.2 | Digital products and learning | What limits access to the digital content? |
| M09.3 | Digital products and learning | What support or features are needed after access starts? |

## Phase 15: Project details 7

Conditional workflow phase; 5 questions. Phase ID: service-M10.1.

| ID | Topic | Question |
| --- | --- | --- |
| M10.1 | Subscriptions and memberships | What does a subscription or membership include? |
| M10.2 | Subscriptions and memberships | Which subscription billing behaviors do you need? |
| M10.3 | Subscriptions and memberships | What happens when a customer pauses or cancels? |
| M11.1 | Marketplaces and multiple providers | Which groups will use the marketplace? |
| M11.2 | Marketplaces and multiple providers | How are providers approved and assigned work or orders? |

## Phase 16: Project details 8

Conditional workflow phase; 5 questions. Phase ID: service-M11.3.

| ID | Topic | Question |
| --- | --- | --- |
| M11.3 | Marketplaces and multiple providers | Who collects money, pays providers, and resolves disputes? |
| M12.1 | Internal team workflows | Which repeated team task should we improve first? |
| M12.2 | Internal team workflows | Which team roles need to submit, approve, edit, or view work? |
| M12.3 | Internal team workflows | What would help your team use the new process? |
| M13.1 | Customer payments and invoicing | How should customers pay you? |

## Phase 17: Project details 9

Conditional workflow phase; 5 questions. Phase ID: service-M13.2.

| ID | Topic | Question |
| --- | --- | --- |
| M13.2 | Customer payments and invoicing | Which payment and accounting providers do you use? |
| M13.3 | Customer payments and invoicing | Which approved pricing, tax, invoice, and refund rules apply? |
| M13.4 | Customer payments and invoicing | What does your customer need at checkout? |
| M14.1 | Your social presence | Which social channels matter most for this project? |
| M14.2 | Your social presence | What should social content help customers do? |

## Phase 18: Project details 10

Conditional workflow phase; 5 questions. Phase ID: service-M14.3.

| ID | Topic | Question |
| --- | --- | --- |
| M14.3 | Your social presence | Who will create, approve, and publish social content? |
| M14.4 | Your social presence | Which social content has brought useful results? |
| M15.1 | Campaign and growth priorities | Which offer and audience should marketing focus on first? |
| M15.2 | Campaign and growth priorities | How do customers currently find you? |
| M15.3 | Campaign and growth priorities | What spending and promotion limits should marketing follow? |

## Phase 19: Project details 11

Conditional workflow phase; 5 questions. Phase ID: service-M15.4.

| ID | Topic | Question |
| --- | --- | --- |
| M15.4 | Campaign and growth priorities | Which searches should help people find your business? |
| M15.5 | Campaign and growth priorities | Which marketing accounts and materials can we build on? |
| M16.1 | Lead follow-up and repeat business | What makes an inquiry a good fit for your business? |
| M16.2 | Lead follow-up and repeat business | Who follows up when a new inquiry arrives? |
| M16.3 | Lead follow-up and repeat business | What encourages customers to buy or use your service again? |

## Phase 20: Project details 12

Conditional workflow phase; 5 questions. Phase ID: service-M16.4.

| ID | Topic | Question |
| --- | --- | --- |
| M16.4 | Lead follow-up and repeat business | How have people agreed to receive your marketing messages? |
| M16.5 | Lead follow-up and repeat business | Which customer messages would be most useful? |
| M17.1 | Human customer handling | Where do customer questions arrive? |
| M17.2 | Human customer handling | Which conversations should the agency help handle? |
| M17.3 | Human customer handling | Who takes over urgent or unresolved customer issues? |

## Phase 21: Project details 13

Conditional workflow phase; 5 questions. Phase ID: service-M18.1.

| ID | Topic | Question |
| --- | --- | --- |
| M18.1 | Chatbot purpose and knowledge | Where should the chatbot help customers? |
| M18.2 | Chatbot purpose and knowledge | Which approved information can the chatbot use? |
| M18.3 | Chatbot purpose and knowledge | What language and tone should the chatbot use? |
| M19.1 | Chatbot actions and human handoff | What is the chatbot’s main job? |
| M19.2 | Chatbot actions and human handoff | What should always need a person’s approval? |

## Phase 22: Project details 14

Conditional workflow phase; 5 questions. Phase ID: service-M19.3.

| ID | Topic | Question |
| --- | --- | --- |
| M19.3 | Chatbot actions and human handoff | When should the chatbot hand a conversation to a person? |
| M20.1 | Automation and connected tools | Which repeated task should happen automatically? |
| M20.2 | Automation and connected tools | Which tools need to work together? |
| M20.3 | Automation and connected tools | What starts the automation, and what should happen next? |
| M21.1 | Data rules and failed workflows | What information should move between tools? |

## Phase 23: Project details 15

Conditional workflow phase; 5 questions. Phase ID: service-M21.2.

| ID | Topic | Question |
| --- | --- | --- |
| M21.2 | Data rules and failed workflows | Which tool has the correct record when tools disagree? |
| M21.3 | Data rules and failed workflows | What should happen if the connection fails? |
| M22.1 | Moving existing data or systems | What needs to move from your old tools or website? |
| M22.2 | Moving existing data or systems | What problems are already present in that information? |
| M22.3 | Moving existing data or systems | What must stay available during the move? |

## Phase 24: Project details 16

Conditional workflow phase; 5 questions. Phase ID: service-M23.1.

| ID | Topic | Question |
| --- | --- | --- |
| M23.1 | Measurement and performance | Which business or website results do you track today? |
| M23.2 | Measurement and performance | What starting numbers do you already have for your main goal? |
| M23.3 | Measurement and performance | What decisions should your reports help you make? |
| M23.4 | Measurement and performance | Where do people stop before completing a purchase or request? |
| M24.1 | Ongoing care and recovery | Which recurring tasks need support after launch? |

## Phase 25: Project details 17

Conditional workflow phase; 4 questions. Phase ID: service-M24.2.

| ID | Topic | Question |
| --- | --- | --- |
| M24.2 | Ongoing care and recovery | Which service interruptions would hurt your business most? |
| M24.3 | Ongoing care and recovery | Who should receive alerts and approve maintenance work? |
| M25.1 | Information access and protection | Who should be able to see or change private information? |
| M25.2 | Information access and protection | What storage, retention, or deletion requirements do you have? |

## Phase 26: Project details 18

Conditional workflow phase; 4 questions. Phase ID: service-M25.3.

| ID | Topic | Question |
| --- | --- | --- |
| M25.3 | Information access and protection | Who can confirm data requirements and handle access or incident questions? |
| M26.1 | Policies and approvals for your business | Which approved policies must the project follow? |
| M26.2 | Policies and approvals for your business | Who will provide and approve missing policies or permissions? |
| M26.3 | Policies and approvals for your business | Could any requirement prevent a sale, campaign, launch, or data transfer? |

## Phase 27: People and agreement

Shared phase; 4 questions. Phase ID: people.

| ID | Topic | Question |
| --- | --- | --- |
| P13.1 | Decisions, reviews, and handover | Who has final approval for the project? |
| P13.2 | Decisions, reviews, and handover | Who else should review the research and design? |
| P13.3 | Decisions, reviews, and handover | Who will run things after launch? |
| P14.1 | Your engagement details | Does the recorded project agreement look right? |

## Phase 28: Billing and workspace

Shared phase; 5 questions. Phase ID: workspace.

| ID | Topic | Question |
| --- | --- | --- |
| P14.2 | Your engagement details | Which legal name and email should appear on your invoices? |
| P14.3 | Your engagement details | Do you need help with the agreement or advance payment? |
| P15.1 | Your workspace and remaining inputs | Which email should have access to your client workspace? |
| P15.2 | Your workspace and remaining inputs | Who else should join your project workspace or group? |
| P15.3 | Your workspace and remaining inputs | How would you like to share remaining files or account access? |

## Phase 29: Your onboarding experience

Shared phase; 2 questions. Phase ID: feedback.

| ID | Topic | Question |
| --- | --- | --- |
| P16.4 | Review and submit | How satisfied are you with this onboarding so far? |
| P16.5 | Review and submit | What would make this onboarding easier? |

## Phase 30: Review and send

Shared phase; 3 questions. Phase ID: final.

| ID | Topic | Question |
| --- | --- | --- |
| P16.1 | Review and submit | What else should we understand about your business or project? |
| P16.2 | Review and submit | Are these details accurate, and are you allowed to share them? |
| P16.3 | Review and submit | Have you read how we use your onboarding information? |

Includes the separate editable review before accuracy confirmation.
