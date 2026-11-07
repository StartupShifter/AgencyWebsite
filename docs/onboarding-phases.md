# Onboarding phases and complete question map

The brief is divided into short phases of **at most five questions**. After a phase is completed, the client returns to the dashboard to see progress and choose the next phase. The original question wording, stable IDs, conditional workflows, answer validation, and saved drafts remain the source of truth.

## Phase counts

| Route | Core phases | Workflow phases | Total phases | Question library covered |
| --- | ---: | ---: | ---: | ---: |
| Core route without selected workflows | 11 | 0 | 11 | 49 |
| Personalized route | 11 | 0–16 | 11–27 | 49 plus active workflow questions |
| Canonical all-workflows reference below | 11 | 16 | 27 | All 127: 49 core and 78 workflow questions |

The 11 core phases have explicit question assignments in [phases.ts](../lib/onboarding/phases.ts). The first eight precede workflow details; the last three cover people, billing, workspace, and review. Each core phase contains four or five questions. The final review screen is an extra summary step, not an additional question.

Workflow phases are conditional, not a requirement to complete the entire library. The route derives relevant workflows from client answers and explicitly added topics. Only active, visible M-series questions enter those phases. For `n` active workflow questions, there are `ceil(n / 5)` balanced phases, with zero phases when `n = 0`; each contains at most five questions. The complete library has 78 workflow questions across M01–M26, producing 16 phases when every workflow is selected.

The table and numbered mapping below use the canonical all-selected call `getOnboardingPhases({}, MODULE_PAGES.map(page => page.id))`. This is a coverage reference, not the route shown to every client. A personalized route omits irrelevant workflows and rebalances the remaining workflow questions. Its workflow phase numbers, boundaries, and the displayed numbers of the last three core phases can therefore differ from this reference. Stable P/M question IDs and saved answers do not change; answers retained for inactive workflows do not block completion.

## Completion and privacy

A phase finishes when every visible question in it has a valid answer or an explicitly permitted follow-up state. Optional questions are not silently treated as complete: the client can choose “Provide later” through “Skip for now,” or another available state such as “Not sure yet,” “Not applicable,” or “Discuss with us.” Available states depend on the question; required contact details and acknowledgements still require their actual valid values. Unanswered or invalid items keep the phase unfinished.

The welcome privacy acknowledgement remains a prerequisite before questions open. It saves P16.3 against the current notice version, so that answer may already be complete when the client reaches the final phase. Paused collection or a changed notice still invokes the existing privacy checks; this phase mapping does not bypass them. P16.2 requires the separate accuracy acknowledgement. Completing a phase saves progress; final submission and workspace readiness retain their existing validation and verified-prerequisite checks.

## Complete canonical mapping

Question text is reproduced from [shared-pages.ts](../lib/onboarding/shared-pages.ts) and [module-pages.ts](../lib/onboarding/module-pages.ts). Each of the 127 stable IDs appears once below.

### Phase 1: Meet your project team

Core phase; 5 questions. Phase ID: `meet`.

| ID | Topic | Exact question |
| --- | --- | --- |
| P01.1 | Let's meet | What is your full name? |
| P01.2 | Let's meet | What is your company, organization, or professional name? |
| P01.3 | Let's meet | Which email address should we use for your project? |
| P01.4 | Let's meet | What phone number can we contact you on? |
| P02.1 | How we should work with you | What is your role in this project? |

### Phase 2: Your business at a glance

Core phase; 5 questions. Phase ID: `business`.

| ID | Topic | Exact question |
| --- | --- | --- |
| P02.2 | How we should work with you | Where are you based? |
| P02.3 | How we should work with you | How would you prefer us to communicate? |
| P03.1 | Your business at a glance | In a few sentences, what does your business or organization do? |
| P03.2 | Your business at a glance | Which industry or field best describes your work? |
| P03.3 | Your business at a glance | What stage is the business at? |

### Phase 3: Your offer and audience

Core phase; 5 questions. Phase ID: `audience`.

| ID | Topic | Exact question |
| --- | --- | --- |
| P04.1 | What you offer | What do you provide, and how do people receive it? |
| P04.2 | What you offer | What are the main products, services, or activities we should focus on first? |
| P04.3 | What you offer | Where do you currently serve people, and where do you want to serve them next? |
| P05.1 | Who this is for | Who is the main customer or user we should prioritize? |
| P05.2 | Who this is for | Is the person using your offer also the person choosing and paying for it? |

### Phase 4: Your goals

Core phase; 4 questions. Phase ID: `goals`.

| ID | Topic | Exact question |
| --- | --- | --- |
| P05.3 | Who this is for | What usually makes someone need your offer, and what makes them hesitate? |
| P06.1 | Why you are starting this project | Why do you want Starter Shifter's help now? |
| P06.2 | Why you are starting this project | What would you most like this project to improve? |
| P06.3 | Why you are starting this project | What result would make this project worthwhile to you? |

### Phase 5: How things work today

Core phase; 4 questions. Phase ID: `workflow`.

| ID | Topic | Exact question |
| --- | --- | --- |
| P07.1 | How things work today | Where can we see your current business online? |
| P07.2 | How things work today | How does one typical customer request or internal task move from start to finish? |
| P07.3 | How things work today | Where does that process take the most effort or go wrong? |
| P08.1 | What you want help with | Which parts of the business should this project help with? |

### Phase 6: Your launch priorities

Core phase; 5 questions. Phase ID: `priorities`.

| ID | Topic | Exact question |
| --- | --- | --- |
| P08.2 | What you want help with | What should people be able to do when this is ready? |
| P08.3 | What you want help with | What must be ready for the first launch, and what can wait? |
| P09.1 | Your market and reasons to choose you | Who or what would people choose if they did not choose you? |
| P09.2 | Your market and reasons to choose you | Why do people choose you, or why do you hope they will? |
| P09.3 | Your market and reasons to choose you | What evidence or insights could help us understand your market and customers? |

### Phase 7: Your brand and requirements

Core phase; 5 questions. Phase ID: `brand`.

| ID | Topic | Exact question |
| --- | --- | --- |
| P10.1 | Brand and content readiness | What brand and business content do you already have? |
| P10.2 | Brand and content readiness | How should your business feel and sound to people? |
| P10.3 | Brand and content readiness | Who can supply or approve the content we will need? |
| P11.1 | Requirements we should know early | Do your products, services, or users have any special restrictions or approval requirements? |
| P11.2 | Requirements we should know early | Will the project handle private information or different levels of access? |

### Phase 8: Your launch plan

Core phase; 4 questions. Phase ID: `launch`.

| ID | Topic | Exact question |
| --- | --- | --- |
| P11.3 | Requirements we should know early | Are there language, accessibility, device, or connectivity needs we should design around? |
| P12.1 | Timing and practical limits | Is there a target launch date or event we should plan around? |
| P12.2 | Timing and practical limits | What investment limits should guide our recommendations? |
| P12.3 | Timing and practical limits | What could affect your ability to launch or respond to us? |

### Phase 9: Project details 1

Conditional workflow phase; 5 questions. Phase ID: `service-M01.1`.

| ID | Topic | Exact question |
| --- | --- | --- |
| M01.1 | Your website's job | Are we creating something new, improving what you have, or replacing it? |
| M01.2 | Your website's job | What information or features must visitors find before taking the main action you selected? |
| M01.3 | Your website's job | Do you have a platform preference or an existing platform we must keep? |
| M02.1 | Website ownership and content | Do you already own the domain and website/hosting accounts? |
| M02.2 | Website ownership and content | Which pages or content must be ready at launch? |

### Phase 10: Project details 2

Conditional workflow phase; 5 questions. Phase ID: `service-M02.3`.

| ID | Topic | Exact question |
| --- | --- | --- |
| M02.3 | Website ownership and content | What needs preserving from your existing online presence? |
| M03.1 | Product catalog | Approximately how many products and variations should launch first? |
| M03.2 | Product catalog | What must customers choose or provide for a product? |
| M03.3 | Product catalog | Where are the current product details, prices, and images kept? |
| M04.1 | Stock and availability | Where do you track stock or availability today? |

### Phase 11: Project details 3

Conditional workflow phase; 5 questions. Phase ID: `service-M04.2`.

| ID | Topic | Exact question |
| --- | --- | --- |
| M04.2 | Stock and availability | Which locations and sales channels share that stock? |
| M04.3 | Stock and availability | What should happen when availability changes or counts disagree? |
| M05.1 | Delivery, pickup, and returns | How do orders reach customers, and where can you deliver? |
| M05.2 | Delivery, pickup, and returns | Which providers and delivery rules do you already use? |
| M05.3 | Delivery, pickup, and returns | Who handles dispatch problems, returns, exchanges, and refunds? |

### Phase 12: Project details 4

Conditional workflow phase; 5 questions. Phase ID: `service-M06.1`.

| ID | Topic | Exact question |
| --- | --- | --- |
| M06.1 | Supplier-made or personalized products | Which suppliers produce or send your products? |
| M06.2 | Supplier-made or personalized products | What must be approved before an order enters production? |
| M06.3 | Supplier-made or personalized products | Who handles supplier failures or remakes, and when must the supplier be paid? |
| M07.1 | Bookings and appointments | What can people book, and what limits availability? |
| M07.2 | Bookings and appointments | How should a booking be confirmed? |

### Phase 13: Project details 5

Conditional workflow phase; 5 questions. Phase ID: `service-M07.3`.

| ID | Topic | Exact question |
| --- | --- | --- |
| M07.3 | Bookings and appointments | What should happen if someone reschedules, cancels, or does not attend? |
| M08.1 | Quotes, projects, and B2B buying | What information do you need to decide whether an inquiry is a good fit? |
| M08.2 | Quotes, projects, and B2B buying | How does an inquiry become an approved order or project? |
| M08.3 | Quotes, projects, and B2B buying | Are there customer-specific prices or purchasing rules? |
| M09.1 | Digital products and learning | What digital content will people receive, and how is it delivered? |

### Phase 14: Project details 6

Conditional workflow phase; 5 questions. Phase ID: `service-M09.2`.

| ID | Topic | Exact question |
| --- | --- | --- |
| M09.2 | Digital products and learning | What controls who can access or use it? |
| M09.3 | Digital products and learning | What should happen after access is granted? |
| M10.1 | Subscriptions and memberships | What recurring value does each membership or subscription provide? |
| M10.2 | Subscriptions and memberships | How should trials, renewals, upgrades, or failed payments work? |
| M10.3 | Subscriptions and memberships | What happens when someone pauses or cancels? |

### Phase 15: Project details 7

Conditional workflow phase; 5 questions. Phase ID: `service-M11.1`.

| ID | Topic | Exact question |
| --- | --- | --- |
| M11.1 | Marketplaces and multiple providers | Which groups use the platform, and what does each group need to do? |
| M11.2 | Marketplaces and multiple providers | How are providers approved and transactions allocated? |
| M11.3 | Marketplaces and multiple providers | Who collects money, pays providers, and resolves disputes? |
| M12.1 | Internal team workflows | Which repeated staff task should we improve first? |
| M12.2 | Internal team workflows | Who should submit, approve, edit, and view that work? |

### Phase 16: Project details 8

Conditional workflow phase; 5 questions. Phase ID: `service-M12.3`.

| ID | Topic | Exact question |
| --- | --- | --- |
| M12.3 | Internal team workflows | What would help the team adopt the new process? |
| M13.1 | Customer payments and invoicing | How should your customers pay, and in which currencies? |
| M13.2 | Customer payments and invoicing | Do you already have payment and accounting providers? |
| M13.3 | Customer payments and invoicing | What approved pricing, tax, invoice, and refund rules must the flow follow? |
| M14.1 | Your social presence | Which social channels should we set up or improve first? |

### Phase 17: Project details 9

Conditional workflow phase; 5 questions. Phase ID: `service-M14.2`.

| ID | Topic | Exact question |
| --- | --- | --- |
| M14.2 | Your social presence | What should your social content help people understand or do? |
| M14.3 | Your social presence | Who will create, approve, and publish content? |
| M15.1 | Campaign and growth priorities | Which offer and audience should a campaign focus on first? |
| M15.2 | Campaign and growth priorities | How do people currently find you, and what has worked or failed? |
| M15.3 | Campaign and growth priorities | What limits should guide campaign spending and promotions? |

### Phase 18: Project details 10

Conditional workflow phase; 5 questions. Phase ID: `service-M16.1`.

| ID | Topic | Exact question |
| --- | --- | --- |
| M16.1 | Lead follow-up and repeat business | What makes an inquiry a qualified lead for your business? |
| M16.2 | Lead follow-up and repeat business | What should happen when a lead arrives? |
| M16.3 | Lead follow-up and repeat business | What should bring people back after the first sale or interaction? |
| M17.1 | Human customer handling | Which customer conversations need help, and approximately how many arrive? |
| M17.2 | Human customer handling | What may the agency handle, and what requires your approval? |

### Phase 19: Project details 11

Conditional workflow phase; 5 questions. Phase ID: `service-M17.3`.

| ID | Topic | Exact question |
| --- | --- | --- |
| M17.3 | Human customer handling | Who takes over urgent, sensitive, or unresolved cases? |
| M18.1 | Chatbot purpose and knowledge | Where should a chatbot help, and which three questions or tasks should it handle first? |
| M18.2 | Chatbot purpose and knowledge | Which information can it rely on for accurate answers? |
| M18.3 | Chatbot purpose and knowledge | What language and tone should it use? |
| M19.1 | Chatbot actions and human handoff | Should it only answer questions, or also take actions? |

### Phase 20: Project details 12

Conditional workflow phase; 5 questions. Phase ID: `service-M19.2`.

| ID | Topic | Exact question |
| --- | --- | --- |
| M19.2 | Chatbot actions and human handoff | What must it never decide or do without a person? |
| M19.3 | Chatbot actions and human handoff | When should it hand over, and who should receive the conversation? |
| M20.1 | Automation and connected tools | Which repetitive task or information transfer should happen automatically? |
| M20.2 | Automation and connected tools | Which tools need to be involved? |
| M20.3 | Automation and connected tools | What should trigger the process, and what result should it produce? |

### Phase 21: Project details 13

Conditional workflow phase; 5 questions. Phase ID: `service-M21.1`.

| ID | Topic | Exact question |
| --- | --- | --- |
| M21.1 | Data rules and failed workflows | What information needs to move between the tools, and how quickly? |
| M21.2 | Data rules and failed workflows | Which system should be trusted if records disagree? |
| M21.3 | Data rules and failed workflows | Who should be alerted when something fails, and how can work continue? |
| M22.1 | Moving existing data or systems | What information or content needs to move, and from where? |
| M22.2 | Moving existing data or systems | What problems already exist in that information? |

### Phase 22: Project details 14

Conditional workflow phase; 5 questions. Phase ID: `service-M22.3`.

| ID | Topic | Exact question |
| --- | --- | --- |
| M22.3 | Moving existing data or systems | What must keep working while the move happens? |
| M23.1 | Measurement and performance | What do you currently measure, and where are those reports? |
| M23.2 | Measurement and performance | What is the current starting point for your main goal? |
| M23.3 | Measurement and performance | What should a useful report help you decide? |
| M24.1 | Ongoing care and recovery | Which systems and recurring tasks need ongoing help? |

### Phase 23: Project details 15

Conditional workflow phase; 4 questions. Phase ID: `service-M24.2`.

| ID | Topic | Exact question |
| --- | --- | --- |
| M24.2 | Ongoing care and recovery | What interruptions would affect your business most? |
| M24.3 | Ongoing care and recovery | Who should receive alerts and approve maintenance or extra work? |
| M25.1 | Information access and protection | Which roles should be allowed to see or change private information? |
| M25.2 | Information access and protection | Are there requirements for where information is stored, how long it is kept, or when it is deleted? |

### Phase 24: Project details 16

Conditional workflow phase; 4 questions. Phase ID: `service-M25.3`.

| ID | Topic | Exact question |
| --- | --- | --- |
| M25.3 | Information access and protection | Who can confirm these requirements and help with incidents or access removal? |
| M26.1 | Policies and approvals for your business | Which approved policies or industry requirements must the project follow? |
| M26.2 | Policies and approvals for your business | Who will supply and approve missing policy text, required disclosures, or permissions? |
| M26.3 | Policies and approvals for your business | Is there any requirement that could restrict a sale, launch, campaign, or data flow? |

### Phase 25: People and agreement

Core phase; 4 questions. Phase ID: `people`.

| ID | Topic | Exact question |
| --- | --- | --- |
| P13.1 | Decisions, reviews, and handover | Who gives final approval for scope, design, content, and launch? |
| P13.2 | Decisions, reviews, and handover | Who should help review the first research and design direction? |
| P13.3 | Decisions, reviews, and handover | Who will run the website, customer work, and connected systems after launch? |
| P14.1 | Your engagement details | Does this project summary match what you agreed with us? |

### Phase 26: Billing and workspace

Core phase; 4 questions. Phase ID: `workspace`.

| ID | Topic | Exact question |
| --- | --- | --- |
| P14.2 | Your engagement details | Are the contracting and billing details correct? |
| P14.3 | Your engagement details | Is anything preventing you from completing the agreement or advance payment? |
| P15.1 | Your workspace and remaining inputs | Should we use your project email for your client dashboard invitation? |
| P15.2 | Your workspace and remaining inputs | Who else should be invited to your project workspace or onboarding group? |

### Phase 27: Review and send

Core phase; 4 questions. Phase ID: `final`.

| ID | Topic | Exact question |
| --- | --- | --- |
| P15.3 | Your workspace and remaining inputs | How would you like to provide the remaining files or account access? |
| P16.1 | Review and submit | Is there anything else we should understand before we begin? |
| P16.2 | Review and submit | Are these details accurate to the best of your knowledge, and are you authorized to share them for this project? |
| P16.3 | Review and submit | Have you reviewed how your onboarding information will be used? |
