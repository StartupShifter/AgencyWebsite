import type { Page, Question } from "./types";

const q = (id: string, label: string, type: Question["type"], required: boolean, extra: Partial<Question> = {}): Question => ({ id, label, type, required, ...extra });
const p = (id: string, title: string, questions: Question[], description?: string): Page => ({ id, title, kind: "shared", questions, ...(description ? { description } : {}) });

/** Wording and stable IDs come from the project's onboarding.md specification. */
export const SHARED_PAGES: Page[] = [
  p("P01", "Let's meet", [
    q("P01.1", "What is your full name?", "text", true, { allowStates: [], help: "Use your full name as you normally write it, in any language." }),
    q("P01.2", "What is your company, organization, or professional name?", "text", true, { presets: ["Use my personal name", "Name not decided yet"], allowStates: ["unknown", "help"] }),
    q("P01.3", "Which email address should we use for your project?", "email", true, { allowStates: [], help: "A personal email is fine. We will use this address for project communication." }),
    q("P01.4", "What phone number can we contact you on?", "tel", false, { requiredWhen: { questionId: "P02.3", includes: ["Phone"] }, help: "Include your country calling code, for example +91. A reachable number is needed if you choose phone or a phone-based messaging service." }),
  ], "Tell us who you are and the name we should use for your project."),
  p("P02", "How we should work with you", [
    q("P02.1", "What is your role in this project?", "select", true, { options: ["Owner/founder", "Employee/project lead", "Authorized representative", "Individual professional", "Other"], allowOther: true }),
    q("P02.2", "Where are you based?", "country-timezone", true, { allowStates: [], fields: [{ id: "country", label: "Country or region", required: true }, { id: "timezone", label: "Timezone", required: true }], help: "No home address is needed. Check the suggested timezone and change it if needed." }),
    q("P02.3", "How would you prefer us to communicate?", "multi-select", true, { options: ["Email", "Dashboard when available", "Phone", "Messaging/group", "Video meeting", "Other"], allowOther: true, help: "We will confirm available channels with you. You can add your preferred language and contact window." }),
  ]),
  p("P03", "Your business at a glance", [
    q("P03.1", "In a few sentences, what does your business or organization do?", "textarea", true, { placeholder: "We repair equipment for local businesses and want customers to request service online." }),
    q("P03.2", "Which industry or field best describes your work?", "multi-select", true, { options: ["Retail and ecommerce", "Professional services", "Health and wellbeing", "Education and learning", "Food and hospitality", "Manufacturing", "Construction and property", "Technology", "Creative and media", "Travel and events", "Nonprofit and community", "Internal business operations", "Other"], allowOther: true, help: "Choose more than one if needed, or describe your field and niche." }),
    q("P03.3", "What stage is the business at?", "select", true, { options: ["Idea/pre-launch", "Operating mainly offline", "Already online", "Expanding or improving", "Established internal team", "Other"], allowOther: true }),
  ]),
  p("P04", "What you offer", [
    q("P04.1", "What do you provide, and how do people receive it?", "multi-select", true, { options: ["Physical goods", "Appointments", "Project-based services", "Digital products/courses", "Subscriptions/memberships", "Wholesale/B2B", "Marketplace connecting buyers and providers", "Internal operations", "Other", "Not decided"], allowOther: true, help: "Choose every model relevant to this project. This helps us show the right questions." }),
    q("P04.2", "What are the main products, services, or activities we should focus on first?", "list", true, { maxSelections: 3, presets: ["Help me define this"], help: "Start with up to three examples, or share a catalog or document link. Detailed records can follow later." }),
    q("P04.3", "Where do you currently serve people, and where do you want to serve them next?", "two-lists", true, { options: ["Local area", "Country/region", "Several countries", "Online audience", "Internal locations", "Undecided"], fields: [{ id: "now", label: "Current markets", required: true }, { id: "later", label: "Planned markets" }], help: "Describe current and planned markets separately. It is fine if expansion is undecided." }),
  ]),
  p("P05", "Who this is for", [
    q("P05.1", "Who is the main customer or user we should prioritize?", "text", true, { presets: ["Help us identify them"], help: "Describe their main need or situation. Internal tools can prioritize employees or partners." }),
    q("P05.2", "Is the person using your offer also the person choosing and paying for it?", "select", true, { options: ["Usually yes", "Different people", "No payment involved", "Not sure"], help: "If they are different, add the roles—for example buyer, user, manager, or purchasing team." }),
    q("P05.3", "What usually makes someone need your offer, and what makes them hesitate?", "textarea", false, { presets: ["No customers yet"], help: "One recent customer example is enough." }),
  ]),
  p("P06", "Why you are starting this project", [
    q("P06.1", "Why do you want Starter Shifter's help now?", "textarea", true, { help: "Tell us what prompted the project and the main problem with your current situation." }),
    q("P06.2", "What would you most like this project to improve?", "multi-select", true, { maxSelections: 3, priority: true, options: ["Online presence", "Sales", "Qualified inquiries", "Bookings", "Customer experience", "Time spent on manual work", "Errors", "Reporting", "Customer retention", "Staff adoption", "Other"], allowOther: true, help: "Choose up to three improvements, then mark your first priority." }),
    q("P06.3", "What result would make this project worthwhile to you?", "text", true, { presets: ["Help us set a realistic target"], help: "Add a measurable outcome and review date if you know them. Your target is a starting point to discuss." }),
  ]),
  p("P07", "How things work today", [
    q("P07.1", "Where can we see your current business online?", "list", false, { presets: ["We are not online yet"], help: "Website, store, social profiles, marketplace, directory listing, or demo links are welcome." }),
    q("P07.2", "How does one typical customer request or internal task move from start to finish?", "textarea", true, { presets: ["Explain on a call"], placeholder: "Inquiry → quote → approval → delivery → payment", help: "Describe one example or share a document link. A new business can describe its intended process." }),
    q("P07.3", "Where does that process take the most effort or go wrong?", "text", true, { presets: ["No known problems yet"], help: "You can add anything you have tried that should be retained or avoided." }),
  ]),
  p("P08", "What you want help with", [
    q("P08.1", "Which parts of the business should this project help with?", "multi-select", true, { options: ["Research/design", "Website/store/application", "Social presence", "Campaigns/lead generation", "Customer handling", "Chatbot", "Task automation", "Inventory", "Shipping/order workflows", "Invoicing", "ERP/CRM or other connections", "Maintenance", "Performance/reporting", "Help me choose"], help: "Choose the work you need. Requests will be reviewed against your agreed scope; selections do not change your plan or price." }),
    q("P08.2", "What should people be able to do when this is ready?", "multi-select", true, { options: ["Learn/contact", "Request a quote", "Buy", "Book", "Subscribe", "Download/access content", "Register/sign in", "Submit/approve/track work", "Connect as buyers and providers", "Other", "Need guidance"], allowOther: true }),
    q("P08.3", "What must be ready for the first launch, and what can wait?", "two-lists", true, { fields: [{ id: "now", label: "First launch priorities", required: true }, { id: "later", label: "Can wait" }], maxSelections: 3, presets: ["Please recommend priorities"], help: "Start with up to three launch priorities. You can also note anything explicitly excluded." }),
  ]),
  p("P09", "Your market and reasons to choose you", [
    q("P09.1", "Who or what would people choose if they did not choose you?", "list", false, { maxSelections: 3, presets: ["Please research this"], help: "Up to three competitors, marketplaces, manual alternatives, or doing nothing. Names or links are enough." }),
    q("P09.2", "Why do people choose you, or why do you hope they will?", "textarea", true, { help: "Tell us which strengths exist today and which differences you are planning." }),
    q("P09.3", "What evidence or insights could help us understand your market and customers?", "list", false, { presets: ["None yet"], help: "Share links to reviews, redacted feedback, research, sales patterns, seasonal demand, or support themes. Note the source, date, and permission for public proof where known. Do not share raw private records." }),
  ]),
  p("P10", "Brand and content readiness", [
    q("P10.1", "What brand and business content do you already have?", "assets", true, { options: ["Logo", "Colors/fonts", "Brand guide", "Photos/video", "Product/service information", "Website copy", "FAQs/policies", "Nothing yet", "Not sure"], help: "Mark each asset as ready, needs updating, or needs help. Final files can be shared securely later." }),
    q("P10.2", "How should your business feel and sound to people?", "multi-select", false, { options: ["Warm and approachable", "Clear and practical", "Professional and trusted", "Bold and energetic", "Calm and minimal", "Premium and refined", "Playful and creative", "Other"], allowOther: true, help: "Add language preferences, styles to avoid, or up to two reference links and what you like about them." }),
    q("P10.3", "Who can supply or approve the content we will need?", "text", true, { presets: ["Use my project contact", "I need help"], help: "Use an existing contact or give a person or role. A shared folder link and expected availability are optional. Content production and licensing need an agreed scope." }),
  ]),
  p("P11", "Requirements we should know early", [
    q("P11.1", "Do your products, services, or users have any special restrictions or approval requirements?", "multi-select", true, { options: ["None known", "Age restrictions", "Licenses/regulated services", "Restricted products", "Professional review", "Confidential work", "Contractual requirements", "Not sure", "Other"], allowOther: true, help: "Add a short description where useful. Do not share sensitive records." }),
    q("P11.2", "Will the project handle private information or different levels of access?", "multi-select", true, { options: ["Ordinary contact/order details", "Financial information", "Health or other sensitive records", "Information about minors", "Staff-only information", "Different user roles", "None", "Not sure"], help: "Select categories only. Do not upload customer, patient, or employee records." }),
    q("P11.3", "Are there language, accessibility, device, or connectivity needs we should design around?", "multi-select", true, { options: ["Multiple languages", "Assistive technology", "Low digital confidence", "Mobile-only use", "Slow connections", "None known", "Needs assessment", "Other"], allowOther: true, help: "You can add the languages, devices, or specific needs you already know." }),
  ]),
  p("P12", "Timing and practical limits", [
    q("P12.1", "Is there a target launch date or event we should plan around?", "date", true, { presets: ["Flexible", "Not decided"], help: "If the date is fixed, add the reason or event. This records your request; timing will be agreed with you." }),
    q("P12.2", "What investment limits should guide our recommendations?", "budget", false, { presets: ["Discuss privately", "Need an estimate"], fields: [{ id: "currency", label: "Currency", placeholder: "For example INR, USD, GBP" }, { id: "setup", label: "Project / setup budget", placeholder: "Amount or range" }, { id: "recurring", label: "Recurring tools / support budget", placeholder: "Amount or range per month" }, { id: "advertising", label: "Advertising budget, if relevant", placeholder: "Amount or range" }], help: "Use an amount or range and a currency. Keep project fees, tools/support, and advertising separate. Agreed charges come from your project records." }),
    q("P12.3", "What could affect your ability to launch or respond to us?", "multi-select", true, { options: ["Staff capacity", "Supplier readiness", "Content", "Account access", "Approvals", "Seasonal peaks", "Existing contracts", "None known", "Other"], allowOther: true }),
  ]),
  p("P13", "Decisions, reviews, and handover", [
    q("P13.1", "Who gives final approval for scope, design, content, and launch?", "text", true, { presets: ["Use my project contact"], allowStates: [], help: "One final approver can cover all areas. Only add separate approvers where needed, with their role and email." }),
    q("P13.2", "Who should help review the first research and design direction?", "list", false, { help: "People or roles and availability are enough. Tell us who will consolidate feedback and any preferred review format." }),
    q("P13.3", "Who will run the website, customer work, and connected systems after launch?", "multi-select", true, { options: ["Me/my team", "Agency for agreed work", "Shared", "Need help deciding"], help: "You can add training needs and your preferred handover format." }),
  ]),
  p("P14", "Your engagement details", [
    q("P14.1", "Does this project summary match what you agreed with us?", "select", true, { options: ["Matches my agreement", "Request a correction", "No agreement yet"], help: "Review the summary from your approved agreement, including scope, currency, setup/recurring fees, exclusions, and separate third-party costs. If an agreement is missing, we will arrange a review." }),
    q("P14.2", "Are the contracting and billing details correct?", "budget", true, { fields: [{ id: "legalName", label: "Contracting person or legal name", required: true }, { id: "billingEmail", label: "Billing email", type: "email", required: true }], allowStates: [], help: "Confirm the recorded details or correct them. If no billing record exists, give a person/legal name and billing email. Address and tax details will be requested only when needed for your contract or invoice." }),
    q("P14.3", "Is anything preventing you from completing the agreement or advance payment?", "textarea", false, { help: "Actual contract and payment status comes from agency records. Do not enter payment-card details here." }),
  ], "Your approved proposal and contract provide the project summary. Selecting work in this form does not create an agreement or verify a payment."),
  p("P15", "Your workspace and remaining inputs", [
    q("P15.1", "Should we use your project email for your client dashboard invitation?", "email", true, { allowStates: [], help: "Confirm the project email shown here, or enter another email. The chosen address must be verified before access is granted." }),
    q("P15.2", "Who else should be invited to your project workspace or onboarding group?", "list", false, { fields: [{ id: "name", label: "Name" }, { id: "email", label: "Work email", type: "email" }, { id: "role", label: "Role" }, { id: "access", label: "Requested access" }], help: "Add one person at a time with their name, work email, role, and requested access. Completing this form does not send invitations." }),
    q("P15.3", "How would you like to provide the remaining files or account access?", "select", true, { options: ["Ready to share securely", "Colleague will provide", "Need instructions", "Discuss on a call", "No remaining inputs"], help: "We will show recorded missing items in your workspace. Add an owner and date only if known. Never enter passwords, one-time codes, or API secrets here." }),
  ]),
  p("P16", "Review and submit", [
    q("P16.1", "Is there anything else we should understand before we begin?", "textarea", false, { help: "Add any preferences, concerns, or requirements not covered elsewhere." }),
    q("P16.2", "Are these details accurate to the best of your knowledge, and are you authorized to share them for this project?", "checkbox", true, { acknowledgement: "accuracy", allowStates: [], help: "Review the summary and correct anything you need to. Keep estimates and unknowns clearly marked." }),
    q("P16.3", "Have you reviewed how your onboarding information will be used?", "checkbox", true, { acknowledgement: "privacy", allowStates: [], help: "Read the approved onboarding privacy information before acknowledging it. Marketing permission is separate and is not required for dashboard access." }),
  ], "Check your business, goals, selected work, responsibilities, and open items. You can edit each section before submitting. Submission saves your answers; workspace activation follows verified project prerequisites."),
];
