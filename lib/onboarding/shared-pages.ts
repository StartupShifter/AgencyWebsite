import type { Page } from "./types";

// Stable IDs and option values preserve saved client answers.
// Reviewable export: docs/onboarding-questions.json (bun run scripts/export-onboarding.ts).
export const SHARED_PAGES: Page[] = [
  {
    "id": "P01",
    "title": "Let's meet",
    "kind": "shared",
    "questions": [
      {
        "id": "P01.1",
        "label": "What name should we use for you?",
        "type": "text",
        "required": true,
        "allowStates": [],
        "help": "Use the name you normally use at work.",
        "why": "This helps us address you correctly in project conversations."
      },
      {
        "id": "P01.2",
        "label": "What is your business or brand called?",
        "type": "text",
        "required": true,
        "presets": [
          "Use my personal name",
          "Name not decided yet"
        ],
        "allowStates": [
          "unknown",
          "help"
        ],
        "help": "Use your public name; your legal billing name comes later.",
        "why": "We use this name in the brief and check it against your website and profiles."
      },
      {
        "id": "P01.3",
        "label": "Which email should we use for this project?",
        "type": "email",
        "required": true,
        "allowStates": [],
        "help": "Use an inbox you check regularly; a personal email is fine.",
        "why": "We use this address for project updates and questions that need your input."
      },
      {
        "id": "P01.4",
        "label": "What phone number should we use, if needed?",
        "type": "tel",
        "required": false,
        "requiredWhen": {
          "questionId": "P02.3",
          "includes": [
            "Phone"
          ]
        },
        "help": "Include the country code, for example +91; needed for phone or WhatsApp contact.",
        "why": "A reachable number lets us use a phone-based channel if you choose one."
      }
    ],
    "description": "Tell us who you are and the name we should use for your project."
  },
  {
    "id": "P02",
    "title": "How we should work with you",
    "kind": "shared",
    "questions": [
      {
        "id": "P02.1",
        "label": "What is your role in this project?",
        "type": "select",
        "required": true,
        "options": [
          "Owner/founder",
          "Employee/project lead",
          "Authorized representative",
          "Individual professional",
          "Other"
        ],
        "allowOther": true,
        "help": "Choose the role that best describes your involvement.",
        "why": "This helps us involve the right people in decisions; we ask about final approval separately.",
        "optionLabels": {
          "Owner/founder": "Business owner or founder",
          "Employee/project lead": "Team member leading the project",
          "Authorized representative": "Working on behalf of the business",
          "Individual professional": "Independent professional"
        }
      },
      {
        "id": "P02.2",
        "label": "Which country and time zone do you work in?",
        "type": "country-timezone",
        "required": true,
        "allowStates": [],
        "fields": [
          {
            "id": "country",
            "label": "Country or region",
            "required": true
          },
          {
            "id": "timezone",
            "label": "Timezone",
            "required": true
          }
        ],
        "help": "Check the suggested time zone; no home address is needed.",
        "why": "We use this to arrange reviews at suitable times."
      },
      {
        "id": "P02.3",
        "label": "How would you like to hear from us?",
        "type": "multi-select",
        "required": true,
        "options": [
          "Email",
          "Dashboard when available",
          "Phone",
          "Messaging/group",
          "Video meeting",
          "Other"
        ],
        "allowOther": true,
        "help": "Choose your preferred channels; add a language or contact window in a note.",
        "why": "We will confirm the channels we can support and use your preferences to plan communication.",
        "optionLabels": {
          "Dashboard when available": "Project workspace",
          "Messaging/group": "Messaging app or project group",
          "Video meeting": "Video call"
        }
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "P03",
    "title": "Your business at a glance",
    "kind": "shared",
    "questions": [
      {
        "id": "P03.1",
        "label": "What does your business do?",
        "type": "textarea",
        "required": true,
        "placeholder": "We sell refillable skincare to customers in India through our store and Instagram.",
        "help": "In two or three sentences, tell us what you sell, who it helps, and how.",
        "why": "This becomes the starting point for research, website content, and marketing direction."
      },
      {
        "id": "P03.2",
        "label": "Which industry are you in?",
        "type": "multi-select",
        "required": true,
        "options": [
          "Retail and ecommerce",
          "Professional services",
          "Health and wellbeing",
          "Education and learning",
          "Food and hospitality",
          "Manufacturing",
          "Construction and property",
          "Technology",
          "Creative and media",
          "Travel and events",
          "Nonprofit and community",
          "Internal business operations",
          "Other"
        ],
        "allowOther": true,
        "help": "Choose the closest match; add your niche if the categories are too broad.",
        "why": "Your industry helps us find relevant competitors and spot requirements to investigate."
      },
      {
        "id": "P03.3",
        "label": "Which description best fits your business today?",
        "type": "select",
        "required": true,
        "options": [
          "Idea/pre-launch",
          "Operating mainly offline",
          "Already online",
          "Expanding or improving",
          "Established internal team",
          "Other"
        ],
        "allowOther": true,
        "help": "Choose your current situation, rather than where you hope to be.",
        "why": "We adapt recommendations to what already exists and what still needs to be built.",
        "optionLabels": {
          "Idea/pre-launch": "We have not launched yet",
          "Operating mainly offline": "We sell mainly offline",
          "Already online": "We sell online and want to improve",
          "Expanding or improving": "We are expanding into new markets or channels",
          "Established internal team": "This project is for our internal team"
        },
        "optionDescriptions": {
          "Already online": "Improving your current online experience is the main goal.",
          "Expanding or improving": "Adding markets, channels, or a new line of business is the main goal."
        }
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "P04",
    "title": "What you offer",
    "kind": "shared",
    "questions": [
      {
        "id": "P04.1",
        "label": "What will this project help you sell or deliver?",
        "type": "multi-select",
        "required": true,
        "options": [
          "Physical goods",
          "Appointments",
          "Project-based services",
          "Digital products/courses",
          "Subscriptions/memberships",
          "Wholesale/B2B",
          "Marketplace connecting buyers and providers",
          "Internal operations",
          "Other",
          "Not decided"
        ],
        "allowOther": true,
        "help": "Choose every business model that applies to this project.",
        "why": "Your choices reveal relevant follow-up questions, such as delivery, bookings, or subscriptions.",
        "optionLabels": {
          "Physical goods": "Physical products",
          "Appointments": "Appointments or bookings",
          "Project-based services": "Services or custom projects",
          "Digital products/courses": "Digital products or courses",
          "Subscriptions/memberships": "Subscriptions or memberships",
          "Wholesale/B2B": "Wholesale or business sales",
          "Marketplace connecting buyers and providers": "A marketplace for buyers and sellers",
          "Internal operations": "An internal team process",
          "Not decided": "Help me choose a business model"
        }
      },
      {
        "id": "P04.2",
        "label": "Which products or services should we focus on first?",
        "type": "list",
        "required": true,
        "maxSelections": 3,
        "presets": [
          "Help me define this"
        ],
        "help": "Add up to three examples, with a catalog link if you have one.",
        "why": "These examples help us plan the first launch around the offers that matter most."
      },
      {
        "id": "P04.3",
        "label": "Where do you sell now, and where would you like to sell next?",
        "type": "two-lists",
        "required": true,
        "options": [
          "Local area",
          "Country/region",
          "Several countries",
          "Online audience",
          "Internal locations",
          "Undecided"
        ],
        "fields": [
          {
            "id": "now",
            "label": "Current markets",
            "required": true,
            "placeholder": "For example: India, mainly Mumbai and Pune"
          },
          {
            "id": "later",
            "label": "Planned markets",
            "placeholder": "For example: UAE next year, or not decided"
          }
        ],
        "help": "Name cities, regions, or countries; planned expansion can be undecided.",
        "why": "Markets affect language, currency, delivery, research, and the requirements we must verify."
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "P05",
    "title": "Who this is for",
    "kind": "shared",
    "questions": [
      {
        "id": "P05.1",
        "label": "Who is your main customer or user?",
        "type": "text",
        "required": true,
        "presets": [
          "Help us identify them"
        ],
        "help": "Describe their need, location, and buying situation; one useful group is enough.",
        "why": "We use this to shape navigation, product information, and marketing messages for the right people."
      },
      {
        "id": "P05.2",
        "label": "Does the person using your product also choose and pay for it?",
        "type": "select",
        "required": true,
        "options": [
          "Usually yes",
          "Different people",
          "No payment involved",
          "Not sure"
        ],
        "help": "If not, add the roles involved, such as a parent, manager, or purchasing team.",
        "why": "Different buyers and users may need different information, approvals, or account access.",
        "optionLabels": {
          "Usually yes": "Usually the same person",
          "Different people": "Different people decide, pay, or use it",
          "No payment involved": "There is no payment in this process",
          "Not sure": "I am not sure yet"
        }
      },
      {
        "id": "P05.3",
        "label": "What helps a customer decide to buy from you?",
        "type": "textarea",
        "required": false,
        "presets": [
          "No customers yet"
        ],
        "help": "Use one example of their need, concern, and reason for choosing or leaving.",
        "why": "Customer concerns guide product pages, FAQs, trust information, and follow-up messages."
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "P06",
    "title": "Why you are starting this project",
    "kind": "shared",
    "questions": [
      {
        "id": "P06.1",
        "label": "What made you start this project now?",
        "type": "textarea",
        "required": true,
        "help": "Describe the main problem, opportunity, or change behind this decision.",
        "why": "This tells us what needs attention first and what would make the project useful."
      },
      {
        "id": "P06.2",
        "label": "What are the three most important improvements you want?",
        "type": "multi-select",
        "required": true,
        "maxSelections": 3,
        "priority": true,
        "options": [
          "Online presence",
          "Sales",
          "Qualified inquiries",
          "Bookings",
          "Customer experience",
          "Time spent on manual work",
          "Errors",
          "Reporting",
          "Customer retention",
          "Staff adoption",
          "Other"
        ],
        "allowOther": true,
        "help": "Choose up to three, then mark the one that matters most.",
        "why": "Your priority helps us make trade-offs when time, budget, or capacity is limited.",
        "optionLabels": {
          "Online presence": "Help people find and understand us",
          "Sales": "Increase sales",
          "Qualified inquiries": "Get more suitable inquiries",
          "Bookings": "Get more bookings",
          "Customer experience": "Make buying or getting help easier",
          "Time spent on manual work": "Reduce manual work",
          "Errors": "Reduce mistakes",
          "Reporting": "Understand business performance",
          "Customer retention": "Bring customers back",
          "Staff adoption": "Help our team use the new process"
        }
      },
      {
        "id": "P06.3",
        "label": "What outcome would make this project worthwhile?",
        "type": "text",
        "required": true,
        "presets": [
          "Help us set a realistic target"
        ],
        "help": "Name a result and review date, or ask us to help set a target.",
        "why": "We compare this goal with your starting point before agreeing realistic success measures."
      },
      {
        "id": "P06.4",
        "label": "What starting numbers do you have for your main goal?",
        "type": "textarea",
        "required": false,
        "help": "Share one recent result with its date range and source; estimates are fine.",
        "why": "A starting point lets us compare progress fairly. Revenue is optional; a new business can say it has not launched.",
        "placeholder": "About 120 orders in October, from our store report; estimated.",
        "presets": [
          "Not launched yet",
          "We do not measure this yet",
          "Discuss privately"
        ]
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "P07",
    "title": "How things work today",
    "kind": "shared",
    "questions": [
      {
        "id": "P07.1",
        "label": "Which websites and public profiles belong to your business?",
        "type": "list",
        "required": false,
        "presets": [
          "We are not online yet"
        ],
        "help": "Add full links to your store, app, social pages, marketplaces, and review listings.",
        "why": "We use these sources to research your business and check consistency. Note which links are current; private reports can be shared through agreed access later.",
        "placeholder": "Instagram — https://www.instagram.com/yourbrand/",
        "maxSelections": 20
      },
      {
        "id": "P07.2",
        "label": "How does a typical order or request move through your business?",
        "type": "textarea",
        "required": true,
        "presets": [
          "Explain on a call"
        ],
        "placeholder": "Instagram message → WhatsApp order → payment link → spreadsheet → courier → follow-up",
        "help": "Describe one journey from first contact to delivery and follow-up.",
        "why": "We map the handoffs between people and tools before proposing changes. A new business can describe its intended process."
      },
      {
        "id": "P07.3",
        "label": "Where does that process get stuck or create extra work?",
        "type": "text",
        "required": true,
        "presets": [
          "No known problems yet"
        ],
        "help": "Give one example, including how often it happens or the time lost if known.",
        "why": "This helps us prioritize the cause of a problem and preserve the parts that already work."
      },
      {
        "id": "P07.4",
        "label": "Which tools does your team use to run the business?",
        "type": "list",
        "required": false,
        "help": "Name tools for sales, stock, delivery, accounting, support, and marketing.",
        "why": "We look for existing tools to retain and gaps between them before recommending new software.",
        "placeholder": "For example: Shopify for orders; a spreadsheet for stock",
        "presets": [
          "Mostly paper or spreadsheets",
          "No tools selected yet"
        ]
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "P08",
    "title": "What you want help with",
    "kind": "shared",
    "questions": [
      {
        "id": "P08.1",
        "label": "What would you like our help with?",
        "type": "multi-select",
        "required": true,
        "options": [
          "Research/design",
          "Website/store/application",
          "Social presence",
          "SEO and search visibility",
          "Email and WhatsApp marketing",
          "Campaigns/lead generation",
          "Customer handling",
          "Chatbot",
          "Task automation",
          "Inventory",
          "Shipping/order workflows",
          "Invoicing",
          "ERP/CRM or other connections",
          "Maintenance",
          "Performance/reporting",
          "Help me choose"
        ],
        "help": "Choose the areas you need help with; you do not need to know the solution.",
        "why": "We show relevant follow-ups and review requests against your agreement. Choices do not change your plan or price; Basic setup and Pro ongoing work have different boundaries.",
        "optionLabels": {
          "Research/design": "Business research and design",
          "Website/store/application": "Website, online store, or app",
          "Social presence": "Social media setup or improvements",
          "Campaigns/lead generation": "Marketing campaigns and customer growth",
          "Customer handling": "Customer support processes",
          "Chatbot": "A customer-facing chatbot",
          "Task automation": "Automate repeated tasks",
          "Inventory": "Stock and availability",
          "Shipping/order workflows": "Orders, delivery, and returns",
          "Invoicing": "Payments and invoices",
          "ERP/CRM or other connections": "Connect sales, stock, or business tools",
          "Maintenance": "Care and maintenance after launch",
          "Performance/reporting": "Measure and improve results",
          "Help me choose": "Help me choose priorities"
        },
        "exclusiveOptions": [
          "Help me choose"
        ],
        "optionDescriptions": {
          "Research/design": "Understand your market and plan the customer experience.",
          "Website/store/application": "Build or improve where customers browse, buy, or get help.",
          "SEO and search visibility": "Help people find your business through search.",
          "Email and WhatsApp marketing": "Plan messages, signup forms, and customer follow-up.",
          "Social presence": "Set up or improve your public social profiles and content direction.",
          "Campaigns/lead generation": "Plan promotions and acquisition; ongoing work depends on your plan.",
          "ERP/CRM or other connections": "Move information between the tools your team uses.",
          "Help me choose": "We will recommend priorities from the context you provide."
        }
      },
      {
        "id": "P08.2",
        "label": "What should customers or staff be able to do?",
        "type": "multi-select",
        "required": true,
        "options": [
          "Learn/contact",
          "Request a quote",
          "Buy",
          "Book",
          "Subscribe",
          "Download/access content",
          "Register/sign in",
          "Submit/approve/track work",
          "Connect as buyers and providers",
          "Other",
          "Need guidance"
        ],
        "allowOther": true,
        "help": "Choose the actions needed at launch, rather than every possible future feature.",
        "why": "These actions help us define the pages, steps, and connections the first version needs.",
        "optionLabels": {
          "Learn/contact": "Learn about us or contact us",
          "Buy": "Buy products",
          "Book": "Book a service or appointment",
          "Subscribe": "Start a subscription or membership",
          "Download/access content": "Download or access digital content",
          "Register/sign in": "Create an account or sign in",
          "Submit/approve/track work": "Submit, approve, or track work",
          "Connect as buyers and providers": "Connect buyers and sellers",
          "Need guidance": "Help me choose the main actions"
        },
        "exclusiveOptions": [
          "Need guidance"
        ]
      },
      {
        "id": "P08.3",
        "label": "What is essential for launch, and what can wait?",
        "type": "two-lists",
        "required": true,
        "fields": [
          {
            "id": "now",
            "label": "First launch priorities",
            "required": true
          },
          {
            "id": "later",
            "label": "Can wait"
          }
        ],
        "maxSelections": 3,
        "presets": [
          "Please recommend priorities"
        ],
        "help": "List up to three launch priorities, then add later ideas separately.",
        "why": "This keeps the first release focused. Add anything explicitly excluded so we can record that boundary."
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "P09",
    "title": "Your market and reasons to choose you",
    "kind": "shared",
    "questions": [
      {
        "id": "P09.1",
        "label": "What alternatives do your customers compare you with?",
        "type": "list",
        "required": false,
        "maxSelections": 3,
        "presets": [
          "Please research this"
        ],
        "help": "Add up to three competitor names or links; offline alternatives count too.",
        "why": "We compare offers, buying experiences, and messaging to find useful differences, rather than copy competitors."
      },
      {
        "id": "P09.2",
        "label": "Why do customers choose you?",
        "type": "textarea",
        "required": true,
        "help": "Separate strengths you can demonstrate today from ideas you want to develop.",
        "why": "We use supported differences in positioning and content; planned strengths need validation first."
      },
      {
        "id": "P09.3",
        "label": "What sources could help us understand your customers and market?",
        "type": "list",
        "required": false,
        "presets": [
          "None yet"
        ],
        "help": "Link reviews, research, seasonal demand, or redacted feedback; add the source and date.",
        "why": "Evidence helps us check assumptions. Public marketing use of reviews, images, or testimonials needs separate permission."
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "P10",
    "title": "Brand and content readiness",
    "kind": "shared",
    "questions": [
      {
        "id": "P10.1",
        "label": "Which brand and content materials do you have?",
        "type": "assets",
        "required": true,
        "options": [
          "Logo",
          "Colors/fonts",
          "Brand guide",
          "Photos/video",
          "Product/service information",
          "Website copy",
          "FAQs/policies",
          "Nothing yet",
          "Not sure"
        ],
        "help": "For each relevant item, choose ready, needs updating, or need help.",
        "why": "This shows what we can reuse and what may delay delivery. File production and licensing must match the agreed scope.",
        "optionLabels": {
          "Colors/fonts": "Brand colors and fonts",
          "Photos/video": "Photos and videos",
          "Product/service information": "Product or service details",
          "FAQs/policies": "Common questions and policies"
        }
      },
      {
        "id": "P10.2",
        "label": "How should your brand look and sound?",
        "type": "multi-select",
        "required": false,
        "options": [
          "Warm and approachable",
          "Clear and practical",
          "Professional and trusted",
          "Bold and energetic",
          "Calm and minimal",
          "Premium and refined",
          "Playful and creative",
          "Other"
        ],
        "allowOther": true,
        "help": "Choose up to three qualities; add a reference link and what you like about it.",
        "why": "We use this to guide design and writing consistently. Add styles or language to avoid.",
        "maxSelections": 3
      },
      {
        "id": "P10.3",
        "label": "Who can provide and approve your content?",
        "type": "text",
        "required": true,
        "presets": [
          "Use my project contact",
          "I need help"
        ],
        "help": "Name a person or role, or reuse your project contact.",
        "why": "We need a clear owner for product details, photos, copy, and approvals so missing content does not stall the build."
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "P11",
    "title": "Requirements we should know early",
    "kind": "shared",
    "questions": [
      {
        "id": "P11.1",
        "label": "Are there restrictions or approvals we should know about?",
        "type": "multi-select",
        "required": true,
        "options": [
          "None known",
          "Age restrictions",
          "Licenses/regulated services",
          "Restricted products",
          "Professional review",
          "Confidential work",
          "Contractual requirements",
          "Not sure",
          "Other"
        ],
        "allowOther": true,
        "help": "Choose what applies; a brief explanation is enough.",
        "why": "We flag requirements that may affect sales, advertising, or launch for review with the responsible person.",
        "optionLabels": {
          "Licenses/regulated services": "Licenses or regulated products/services",
          "Professional review": "Approval from a qualified reviewer",
          "Confidential work": "Confidential information or projects"
        }
      },
      {
        "id": "P11.2",
        "label": "What private information or account permissions will the project involve?",
        "type": "multi-select",
        "required": true,
        "options": [
          "Ordinary contact/order details",
          "Financial information",
          "Health or other sensitive records",
          "Information about minors",
          "Staff-only information",
          "Different user roles",
          "None",
          "Not sure"
        ],
        "help": "Choose categories only; never paste customer or employee records.",
        "why": "This helps us plan access and identify information-handling requirements to verify before implementation.",
        "optionLabels": {
          "Ordinary contact/order details": "Contact details and order history",
          "Staff-only information": "Information only staff should see",
          "Different user roles": "Different permissions for different people"
        }
      },
      {
        "id": "P11.3",
        "label": "What language or access needs should we plan for?",
        "type": "multi-select",
        "required": true,
        "options": [
          "Multiple languages",
          "Assistive technology",
          "Low digital confidence",
          "Mobile-only use",
          "Slow connections",
          "None known",
          "Needs assessment",
          "Other"
        ],
        "allowOther": true,
        "help": "Choose known needs; add specific languages, devices, or barriers in a note.",
        "why": "These inputs guide accessible design, translations, and mobile or slow-connection priorities.",
        "optionLabels": {
          "Assistive technology": "Screen readers or other access tools",
          "Low digital confidence": "Customers or staff who need simpler steps",
          "Mobile-only use": "People mainly using phones",
          "Needs assessment": "Help us identify access needs"
        }
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "P12",
    "title": "Timing and practical limits",
    "kind": "shared",
    "questions": [
      {
        "id": "P12.1",
        "label": "Is there a launch date or event we should plan around?",
        "type": "date",
        "required": true,
        "presets": [
          "Flexible",
          "Not decided"
        ],
        "help": "Choose a date, flexible, or not decided; add the reason if the date is fixed.",
        "why": "We use this to discuss dependencies and a realistic schedule; entering a date does not confirm it."
      },
      {
        "id": "P12.2",
        "label": "What budget limits should guide our recommendations?",
        "type": "budget",
        "required": false,
        "presets": [
          "Discuss privately",
          "Need an estimate"
        ],
        "fields": [
          {
            "id": "currency",
            "label": "Currency",
            "placeholder": "For example INR, USD, GBP"
          },
          {
            "id": "setup",
            "label": "Project / setup budget",
            "placeholder": "Amount or range"
          },
          {
            "id": "recurring",
            "label": "Recurring tools / support budget",
            "placeholder": "Amount or range per month"
          },
          {
            "id": "advertising",
            "label": "Monthly advertising budget, if relevant",
            "placeholder": "Amount or range"
          }
        ],
        "help": "Use a currency and ranges; separate setup, monthly tools/support, and monthly ads.",
        "why": "We use these limits to compare options. Your agreement sets agency fees; hosting, domains, ad spend, and other third-party charges are client-paid."
      },
      {
        "id": "P12.3",
        "label": "What could delay the work or your feedback?",
        "type": "multi-select",
        "required": true,
        "options": [
          "Staff capacity",
          "Supplier readiness",
          "Content",
          "Account access",
          "Approvals",
          "Seasonal peaks",
          "Existing contracts",
          "None known",
          "Other"
        ],
        "allowOther": true,
        "help": "Choose known constraints, such as content, access, staffing, or approvals.",
        "why": "We can plan around dependencies early instead of discovering them close to launch.",
        "optionLabels": {
          "Staff capacity": "Limited time or staff",
          "Supplier readiness": "Suppliers are not ready yet",
          "Seasonal peaks": "Busy seasons or events"
        }
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "P13",
    "title": "Decisions, reviews, and handover",
    "kind": "shared",
    "questions": [
      {
        "id": "P13.1",
        "label": "Who has final approval for the project?",
        "type": "text",
        "required": true,
        "presets": [
          "Use my project contact"
        ],
        "allowStates": [],
        "help": "Use your project contact, or name the approver for scope, design, content, and launch.",
        "why": "A clear decision owner helps avoid conflicting feedback; list separate approvers only where needed."
      },
      {
        "id": "P13.2",
        "label": "Who else should review the research and design?",
        "type": "list",
        "required": false,
        "help": "Name people or roles and who will combine their feedback.",
        "why": "This helps us plan reviews and hear from the people who will use or run the result."
      },
      {
        "id": "P13.3",
        "label": "Who will run things after launch?",
        "type": "multi-select",
        "required": true,
        "options": [
          "Me/my team",
          "Agency for agreed work",
          "Shared",
          "Need help deciding"
        ],
        "help": "Choose the responsible team; add training or handover needs in a note.",
        "why": "We plan ownership and handover around the agreed coverage. Selecting the agency does not add ongoing services.",
        "exclusiveOptions": [
          "Shared",
          "Need help deciding"
        ],
        "optionLabels": {
          "Me/my team": "Me or my team",
          "Agency for agreed work": "Starter Shifter for agreed tasks",
          "Shared": "Shared responsibilities to agree",
          "Need help deciding": "Help us decide ownership"
        }
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "P14",
    "title": "Your engagement details",
    "kind": "shared",
    "questions": [
      {
        "id": "P14.1",
        "label": "Does the recorded project agreement look right?",
        "type": "select",
        "required": true,
        "options": [
          "Matches my agreement",
          "Request a correction",
          "No agreement yet"
        ],
        "help": "Compare the scope, fees, currency, exclusions, and third-party costs with your agreement.",
        "why": "We flag differences for review. This answer does not sign a contract or verify a payment."
      },
      {
        "id": "P14.2",
        "label": "Which legal name and email should appear on your invoices?",
        "type": "budget",
        "required": true,
        "fields": [
          {
            "id": "legalName",
            "label": "Contracting person or legal name",
            "required": true
          },
          {
            "id": "billingEmail",
            "label": "Billing email",
            "type": "email",
            "required": true
          }
        ],
        "allowStates": [],
        "help": "Confirm the suggested details, or correct them.",
        "why": "These details support contracting and billing. Address and tax details are requested separately only when needed."
      },
      {
        "id": "P14.3",
        "label": "Do you need help with the agreement or advance payment?",
        "type": "textarea",
        "required": false,
        "help": "Describe the blocker without entering payment-card or bank details.",
        "why": "We can resolve administrative issues; verified contract and 40% advance status come from agency records."
      }
    ],
    "description": "Your approved proposal and contract provide the project summary. Selecting work in this form does not create an agreement or verify a payment."
  },
  {
    "id": "P15",
    "title": "Your workspace and remaining inputs",
    "kind": "shared",
    "questions": [
      {
        "id": "P15.1",
        "label": "Which email should have access to your client workspace?",
        "type": "email",
        "required": true,
        "allowStates": [],
        "help": "Keep your project email or enter a different address you control.",
        "why": "The address must be verified before access is granted; this form does not grant permissions."
      },
      {
        "id": "P15.2",
        "label": "Who else should join your project workspace or group?",
        "type": "list",
        "required": false,
        "fields": [
          {
            "id": "name",
            "label": "Name"
          },
          {
            "id": "email",
            "label": "Work email",
            "type": "email"
          },
          {
            "id": "role",
            "label": "Role"
          },
          {
            "id": "access",
            "label": "Requested access"
          }
        ],
        "help": "Add each person’s name, work email, role, and requested access.",
        "why": "This records your access request so we can check responsibilities before sending any invitations."
      },
      {
        "id": "P15.3",
        "label": "How would you like to share remaining files or account access?",
        "type": "select",
        "required": true,
        "options": [
          "Ready to share securely",
          "Colleague will provide",
          "Need instructions",
          "Discuss on a call",
          "No remaining inputs"
        ],
        "help": "Choose a sharing method; never enter passwords, one-time codes, or API keys.",
        "why": "We will arrange the appropriate sharing or role-based access process for the outstanding items."
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "P16",
    "title": "Review and submit",
    "kind": "shared",
    "questions": [
      {
        "id": "P16.4",
        "label": "How satisfied are you with this onboarding so far?",
        "type": "select",
        "required": false,
        "help": "Choose a rating if you wish; an honest answer will not affect your project.",
        "why": "Your feedback helps us improve onboarding. This is an optional experience rating, not approval of scope or a satisfaction guarantee.",
        "options": [
          "Very dissatisfied",
          "Dissatisfied",
          "Neither satisfied nor dissatisfied",
          "Satisfied",
          "Very satisfied"
        ],
        "feedback": true
      },
      {
        "id": "P16.5",
        "label": "What would make this onboarding easier?",
        "type": "textarea",
        "required": false,
        "help": "Mention a question, missing choice, or step that felt confusing or unnecessary.",
        "why": "We review this alongside your rating to decide what to change. Please leave out private customer details.",
        "presets": [
          "Nothing to add"
        ],
        "feedback": true
      },
      {
        "id": "P16.1",
        "label": "What else should we understand about your business or project?",
        "type": "textarea",
        "required": false,
        "help": "Add an important concern, missing requirement, or correction.",
        "why": "This catches context that did not fit earlier questions before we review the brief with you."
      },
      {
        "id": "P16.2",
        "label": "Are these details accurate, and are you allowed to share them?",
        "type": "checkbox",
        "required": true,
        "acknowledgement": "accuracy",
        "allowStates": [],
        "help": "Review your answers; keep estimates and unknowns clearly marked.",
        "why": "Your confirmation helps us distinguish supplied facts from research still needed. It does not approve project scope."
      },
      {
        "id": "P16.3",
        "label": "Have you read how we use your onboarding information?",
        "type": "checkbox",
        "required": true,
        "acknowledgement": "privacy",
        "allowStates": [],
        "help": "Read the onboarding privacy notice before confirming.",
        "why": "This acknowledgement covers project use of your information. Marketing permission is separate and is not required for workspace access."
      }
    ],
    "description": "Check your business, goals, selected work, responsibilities, and open items. You can edit each section before submitting. Submission saves your answers; workspace activation follows verified project prerequisites."
  }
];
