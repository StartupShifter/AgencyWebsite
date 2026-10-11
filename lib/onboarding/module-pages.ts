import type { Page } from "./types";

// Stable source IDs and verbatim question wording from onboarding.md.
// A module requirement applies only while that module is in the client’s route.
export const MODULE_PAGES: Page[] = [
  {
    "id": "M01",
    "title": "Your website's job",
    "kind": "module",
    "questions": [
      {
        "id": "M01.1",
        "label": "Are we creating something new, improving what you have, or replacing it?",
        "type": "select",
        "required": true,
        "options": [
          "Create something new",
          "Improve what we have",
          "Replace what we have",
          "Please recommend"
        ],
        "help": "We can reuse the existing website link you shared earlier."
      },
      {
        "id": "M01.2",
        "label": "What information or features must visitors find before taking the main action you selected?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "Offer details",
          "Pricing",
          "Examples",
          "FAQs",
          "Location",
          "Search/filtering",
          "Contact",
          "Account",
          "Status tracking",
          "Need guidance"
        ]
      },
      {
        "id": "M01.3",
        "label": "Do you have a platform preference or an existing platform we must keep?",
        "type": "select",
        "required": false,
        "allowOther": true,
        "options": [
          "Shopify",
          "WordPress/WooCommerce",
          "Another platform",
          "No preference"
        ],
        "help": "Add the plan name or any reason we must keep a platform, if known."
      }
    ],
    "description": "Share what you know. You can provide details later or ask us to help."
  },
  {
    "id": "M02",
    "title": "Website ownership and content",
    "kind": "module",
    "questions": [
      {
        "id": "M02.1",
        "label": "Do you already own the domain and website/hosting accounts?",
        "type": "select",
        "required": true,
        "options": [
          "Owned and accessible",
          "Owned but access uncertain",
          "Managed by someone else",
          "Need to create",
          "Not sure"
        ],
        "help": "Add the provider and account owner if known. Never share passwords or credentials here."
      },
      {
        "id": "M02.2",
        "label": "Which pages or content must be ready at launch?",
        "type": "list",
        "required": true,
        "placeholder": "For example: Home — ready, Services — needs writing",
        "help": "Add your priority launch pages or a link to an existing sitemap. Mark content as ready, needs writing, or needs review.",
        "presets": [
          "Please recommend"
        ]
      },
      {
        "id": "M02.3",
        "label": "What needs preserving from your existing online presence?",
        "type": "multi-select",
        "required": false,
        "allowOther": true,
        "options": [
          "Domain",
          "URLs/search traffic",
          "Branding",
          "Content",
          "Customer access",
          "Integrations",
          "Nothing",
          "Not sure"
        ],
        "help": "Add anything important to preserve. Content or data that needs moving can be discussed in the migration step."
      }
    ],
    "description": "Share what you know. You can provide details later or ask us to help."
  },
  {
    "id": "M03",
    "title": "Product catalog",
    "kind": "module",
    "questions": [
      {
        "id": "M03.1",
        "label": "Approximately how many products and variations should launch first?",
        "type": "select",
        "required": true,
        "allowOther": true,
        "options": [
          "1–10",
          "11–50",
          "51–100",
          "101–500",
          "501–1,000",
          "More than 1,000",
          "Not sure"
        ],
        "help": "Count products and variations for your first launch. Variations might be size, color, material, or configuration."
      },
      {
        "id": "M03.2",
        "label": "What must customers choose or provide for a product?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "Variant",
          "Quantity",
          "Bundle",
          "Measurements",
          "Text/image personalization",
          "Approval",
          "Nothing"
        ],
        "help": "You can add one example after choosing the relevant options."
      },
      {
        "id": "M03.3",
        "label": "Where are the current product details, prices, and images kept?",
        "type": "assets",
        "required": true,
        "help": "Share the current catalog link, document link, or tool name. A full catalog can follow later; use only redacted examples.",
        "presets": [
          "Not prepared yet",
          "A colleague will provide this"
        ]
      }
    ],
    "description": "Share what you know. You can provide details later or ask us to help."
  },
  {
    "id": "M04",
    "title": "Stock and availability",
    "kind": "module",
    "questions": [
      {
        "id": "M04.1",
        "label": "Where do you track stock or availability today?",
        "type": "select",
        "required": true,
        "allowOther": true,
        "options": [
          "Spreadsheet",
          "Inventory system",
          "Supplier feeds",
          "Physical records",
          "Not tracked",
          "Another process"
        ],
        "help": "Add the tool name and the person who keeps the source up to date, if known."
      },
      {
        "id": "M04.2",
        "label": "Which locations and sales channels share that stock?",
        "type": "list",
        "required": true,
        "placeholder": "For example: 2 stores and an online shop",
        "help": "An approximate location count and your main sales channels are enough. Mention reservations, batches/expiry, or serial numbers only if relevant."
      },
      {
        "id": "M04.3",
        "label": "What should happen when availability changes or counts disagree?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "Stop sales",
          "Allow backorders",
          "Waitlist",
          "Reorder alert",
          "Manual review",
          "Not sure"
        ],
        "help": "Add who checks exceptions if known. Detailed stock rules can follow later."
      }
    ],
    "description": "Share what you know. You can provide details later or ask us to help."
  },
  {
    "id": "M05",
    "title": "Delivery, pickup, and returns",
    "kind": "module",
    "questions": [
      {
        "id": "M05.1",
        "label": "How do orders reach customers, and where can you deliver?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "Courier",
          "Own delivery",
          "Pickup",
          "Supplier dispatch",
          "Undecided"
        ],
        "help": "Add your delivery areas and any excluded regions."
      },
      {
        "id": "M05.2",
        "label": "Which providers and delivery rules do you already use?",
        "type": "textarea",
        "required": false,
        "help": "An existing document link is welcome. Include providers, rates, packaging constraints, processing time, tracking, and exceptions only if known.",
        "presets": [
          "Please help define this"
        ]
      },
      {
        "id": "M05.3",
        "label": "Who handles dispatch problems, returns, exchanges, and refunds?",
        "type": "textarea",
        "required": true,
        "help": "Name the responsible person or team and link or summarize your policy. Add who pays return or replacement costs if known.",
        "presets": [
          "Policy not ready"
        ]
      }
    ],
    "description": "Share what you know. You can provide details later or ask us to help."
  },
  {
    "id": "M06",
    "title": "Supplier-made or personalized products",
    "kind": "module",
    "questions": [
      {
        "id": "M06.1",
        "label": "Which suppliers produce or send your products?",
        "type": "list",
        "required": true,
        "placeholder": "Supplier or production team — name or link",
        "help": "Add supplier names or links and whether they are selected or still being considered. Include your own production team if relevant.",
        "presets": [
          "Suppliers not selected yet"
        ]
      },
      {
        "id": "M06.2",
        "label": "What must be approved before an order enters production?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "Artwork",
          "Customization",
          "Sample quality",
          "Size/variant availability",
          "Customer proof",
          "Nothing"
        ],
        "help": "Add whether the quality and timing have already been tested."
      },
      {
        "id": "M06.3",
        "label": "Who handles supplier failures or remakes, and when must the supplier be paid?",
        "type": "textarea",
        "required": false,
        "help": "Add who handles failed production or incorrect personalization, production deadlines, and any payment-before-payout constraints, if known.",
        "presets": [
          "Not sure yet"
        ]
      }
    ],
    "description": "Share what you know. You can provide details later or ask us to help."
  },
  {
    "id": "M07",
    "title": "Bookings and appointments",
    "kind": "module",
    "questions": [
      {
        "id": "M07.1",
        "label": "What can people book, and what limits availability?",
        "type": "textarea",
        "required": true,
        "placeholder": "For example: 30-minute online consultations with one adviser",
        "help": "Start with one service or an existing schedule link. Mention duration, staff or resource, location or online delivery, and capacity if known.",
        "presets": [
          "Help us define availability"
        ]
      },
      {
        "id": "M07.2",
        "label": "How should a booking be confirmed?",
        "type": "select",
        "required": true,
        "options": [
          "Instant",
          "Staff approval",
          "Consultation first",
          "Waitlist",
          "Not sure"
        ],
        "help": "Optionally add your calendar and any information needed before booking."
      },
      {
        "id": "M07.3",
        "label": "What should happen if someone reschedules, cancels, or does not attend?",
        "type": "textarea",
        "required": true,
        "help": "Link or summarize your policy. Mention deposits and reminders if relevant.",
        "presets": [
          "Help us define the process"
        ]
      }
    ],
    "description": "Share what you know. You can provide details later or ask us to help."
  },
  {
    "id": "M08",
    "title": "Quotes, projects, and B2B buying",
    "kind": "module",
    "questions": [
      {
        "id": "M08.1",
        "label": "What information do you need to decide whether an inquiry is a good fit?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "Location",
          "Type of work",
          "Quantity",
          "Budget range",
          "Target date"
        ],
        "help": "Choose the information needed to qualify a request. You may also share a sample inquiry form link."
      },
      {
        "id": "M08.2",
        "label": "How does an inquiry become an approved order or project?",
        "type": "textarea",
        "required": true,
        "placeholder": "Inquiry → quote → approval → project delivery",
        "help": "A short description or existing template link is enough. Include quotes, approvers, contracts or purchase orders, milestones, and handoffs where relevant.",
        "presets": [
          "Help us define the process"
        ]
      },
      {
        "id": "M08.3",
        "label": "Are there customer-specific prices or purchasing rules?",
        "type": "multi-select",
        "required": false,
        "allowOther": true,
        "options": [
          "Negotiated prices",
          "Minimum quantities",
          "Trade accounts",
          "Payment terms",
          "Repeat ordering",
          "None"
        ]
      }
    ],
    "description": "Share what you know. You can provide details later or ask us to help."
  },
  {
    "id": "M09",
    "title": "Digital products and learning",
    "kind": "module",
    "questions": [
      {
        "id": "M09.1",
        "label": "What digital content will people receive, and how is it delivered?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "Download",
          "Account access",
          "Course",
          "Live session",
          "License"
        ],
        "help": "Add the format and how people receive it, if already decided."
      },
      {
        "id": "M09.2",
        "label": "What controls who can access or use it?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "Access duration",
          "Licenses",
          "Seat limits",
          "Prerequisites",
          "Not decided"
        ],
        "help": "Choose the controls you need and add any known limits."
      },
      {
        "id": "M09.3",
        "label": "What should happen after access is granted?",
        "type": "multi-select",
        "required": false,
        "allowOther": true,
        "options": [
          "Progress tracking",
          "Assessments",
          "Certificates",
          "Updates",
          "Support",
          "Expiry/revocation",
          "None"
        ]
      }
    ],
    "description": "Share what you know. You can provide details later or ask us to help."
  },
  {
    "id": "M10",
    "title": "Subscriptions and memberships",
    "kind": "module",
    "questions": [
      {
        "id": "M10.1",
        "label": "What recurring value does each membership or subscription provide?",
        "type": "textarea",
        "required": true,
        "help": "Tell us the ongoing benefit people receive, or share an existing offer link. Add tiers and billing intervals only if defined.",
        "presets": [
          "Help us define the offer"
        ]
      },
      {
        "id": "M10.2",
        "label": "How should trials, renewals, upgrades, or failed payments work?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "Free trial",
          "Paid trial",
          "Automatic renewal",
          "Renewal reminder",
          "Upgrade or downgrade",
          "Retry failed payments",
          "Pause access after failed payment",
          "Need guidance"
        ],
        "help": "These are choices to discuss. Add your existing rules or preferred behavior; never share payment credentials."
      },
      {
        "id": "M10.3",
        "label": "What happens when someone pauses or cancels?",
        "type": "textarea",
        "required": true,
        "help": "Link or summarize your policy. Mention when access ends, outstanding deliveries, refunds, and known reasons people leave.",
        "presets": [
          "Help us define the policy"
        ]
      }
    ],
    "description": "Share what you know. You can provide details later or ask us to help."
  },
  {
    "id": "M11",
    "title": "Marketplaces and multiple providers",
    "kind": "module",
    "questions": [
      {
        "id": "M11.1",
        "label": "Which groups use the platform, and what does each group need to do?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "Buyers",
          "Sellers",
          "Service providers",
          "Reviewers",
          "Administrators"
        ],
        "help": "Add what each selected group needs to do."
      },
      {
        "id": "M11.2",
        "label": "How are providers approved and transactions allocated?",
        "type": "textarea",
        "required": true,
        "help": "Include provider quality checks and who supplies the product or performs the service.",
        "presets": [
          "Help us define the process"
        ]
      },
      {
        "id": "M11.3",
        "label": "Who collects money, pays providers, and resolves disputes?",
        "type": "textarea",
        "required": true,
        "help": "Describe money collection, provider payouts, commissions, refunds, and dispute ownership only where relevant.",
        "presets": [
          "Not decided"
        ]
      }
    ],
    "description": "Share what you know. You can provide details later or ask us to help."
  },
  {
    "id": "M12",
    "title": "Internal team workflows",
    "kind": "module",
    "questions": [
      {
        "id": "M12.1",
        "label": "Which repeated staff task should we improve first?",
        "type": "textarea",
        "required": true,
        "help": "Build on the workflow you already described. Add frequency or time spent only if known.",
        "presets": [
          "Help us choose the priority task"
        ]
      },
      {
        "id": "M12.2",
        "label": "Who should submit, approve, edit, and view that work?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "Employees",
          "Managers",
          "Project leads",
          "External partners",
          "Administrators"
        ],
        "help": "For each relevant role, add whether they submit, approve, edit, or view work. Mention exceptions and a history of changes if needed."
      },
      {
        "id": "M12.3",
        "label": "What would help the team adopt the new process?",
        "type": "multi-select",
        "required": false,
        "allowOther": true,
        "options": [
          "Training",
          "Simpler mobile access",
          "Existing sign-in",
          "Gradual rollout",
          "Parallel running"
        ]
      }
    ],
    "description": "Share what you know. You can provide details later or ask us to help."
  },
  {
    "id": "M13",
    "title": "Customer payments and invoicing",
    "kind": "module",
    "questions": [
      {
        "id": "M13.1",
        "label": "How should your customers pay, and in which currencies?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "Online payment",
          "Bank transfer",
          "Invoice",
          "Deposit/balance",
          "Cash/pay on delivery",
          "No payment in this flow",
          "Not sure"
        ],
        "help": "Add the currencies your customers should use. This concerns your customer payments, separate from paying Starter Shifter."
      },
      {
        "id": "M13.2",
        "label": "Do you already have payment and accounting providers?",
        "type": "list",
        "required": false,
        "help": "Add provider names and whether the accounts are approved, if known. Mention any invoicing connection. Never share bank or card credentials.",
        "presets": [
          "No providers yet"
        ]
      },
      {
        "id": "M13.3",
        "label": "What approved pricing, tax, invoice, and refund rules must the flow follow?",
        "type": "assets",
        "required": true,
        "help": "Link the approved rules or name the person who will confirm pricing, taxes, invoices, and refunds.",
        "presets": [
          "Needs review"
        ]
      }
    ],
    "description": "Share what you know. You can provide details later or ask us to help."
  },
  {
    "id": "M14",
    "title": "Your social presence",
    "kind": "module",
    "questions": [
      {
        "id": "M14.1",
        "label": "Which social channels should we set up or improve first?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "maxSelections": 3,
        "options": [
          "Instagram",
          "Facebook",
          "LinkedIn",
          "YouTube",
          "TikTok",
          "Pinterest",
          "X",
          "Need guidance"
        ],
        "help": "Choose up to three priorities. Add existing handles, account owner, and access status without sharing logins."
      },
      {
        "id": "M14.2",
        "label": "What should your social content help people understand or do?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "Understand services",
          "See products",
          "Trust expertise",
          "Inquire",
          "Book",
          "Buy",
          "Return"
        ]
      },
      {
        "id": "M14.3",
        "label": "Who will create, approve, and publish content?",
        "type": "select",
        "required": true,
        "options": [
          "Client",
          "Agency where agreed",
          "Shared",
          "Undecided"
        ],
        "help": "Optionally add available formats and your preferred cadence. Ongoing content production depends on the agreed scope."
      }
    ],
    "description": "Share what you know. You can provide details later or ask us to help."
  },
  {
    "id": "M15",
    "title": "Campaign and growth priorities",
    "kind": "module",
    "questions": [
      {
        "id": "M15.1",
        "label": "Which offer and audience should a campaign focus on first?",
        "type": "textarea",
        "required": true,
        "help": "Use the offer, audience, and goals already shared. Add only the narrower first campaign priority.",
        "presets": [
          "Help us choose the campaign priority"
        ]
      },
      {
        "id": "M15.2",
        "label": "How do people currently find you, and what has worked or failed?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "Search",
          "Social",
          "Ads",
          "Referrals",
          "Partnerships",
          "Repeat customers",
          "Offline",
          "No history"
        ],
        "help": "Optionally add what worked or failed and an existing results link."
      },
      {
        "id": "M15.3",
        "label": "What limits should guide campaign spending and promotions?",
        "type": "budget",
        "required": true,
        "fields": [{ "id": "currency", "label": "Currency", "required": true, "placeholder": "For example INR, USD, GBP" }, { "id": "advertising", "label": "Campaign spending limit", "required": true, "placeholder": "Amount or range" }],
        "help": "Use an amount or range with a currency. Add margin, discounts, and approval limits if known. Advertising spend is separate from agency fees.",
        "presets": [
          "Discuss first",
          "Use the advertising budget already shared"
        ]
      }
    ],
    "description": "Share what you know. You can provide details later or ask us to help."
  },
  {
    "id": "M16",
    "title": "Lead follow-up and repeat business",
    "kind": "module",
    "questions": [
      {
        "id": "M16.1",
        "label": "What makes an inquiry a qualified lead for your business?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "Service area",
          "Need",
          "Budget",
          "Timing",
          "Company type"
        ],
        "help": "Choose the qualifying criteria and add any limits or cases you cannot serve."
      },
      {
        "id": "M16.2",
        "label": "What should happen when a lead arrives?",
        "type": "textarea",
        "required": true,
        "help": "Name the owner, destination system, preferred follow-up timing, current capacity, and any appointment or sales handoff.",
        "presets": [
          "Help us define follow-up"
        ]
      },
      {
        "id": "M16.3",
        "label": "What should bring people back after the first sale or interaction?",
        "type": "textarea",
        "required": false,
        "help": "Include recurring needs, repeat offers, cancellation reasons, or existing approved communication preferences.",
        "presets": [
          "Help us identify a repeat offer"
        ]
      }
    ],
    "description": "Share what you know. You can provide details later or ask us to help."
  },
  {
    "id": "M17",
    "title": "Human customer handling",
    "kind": "module",
    "questions": [
      {
        "id": "M17.1",
        "label": "Which customer conversations need help, and approximately how many arrive?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "Email",
          "Phone",
          "Messaging",
          "Social messages",
          "Website chat",
          "Dashboard"
        ],
        "help": "Add the conversation types, approximate volume, and peak periods if known. “Not measured” is a valid answer.",
        "presets": [
          "Not measured"
        ]
      },
      {
        "id": "M17.2",
        "label": "What may the agency handle, and what requires your approval?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "FAQs",
          "Qualifying inquiries",
          "Booking",
          "Status updates",
          "Complaints",
          "Refunds",
          "Exceptions"
        ],
        "help": "Add which tasks require your approval and any limits before work begins."
      },
      {
        "id": "M17.3",
        "label": "Who takes over urgent, sensitive, or unresolved cases?",
        "type": "textarea",
        "required": true,
        "help": "Name the escalation person or role and availability. Requested coverage will be compared with the agreed contract.",
        "presets": [
          "Need to appoint a contact"
        ]
      }
    ],
    "description": "Share what you know. You can provide details later or ask us to help."
  },
  {
    "id": "M18",
    "title": "Chatbot purpose and knowledge",
    "kind": "module",
    "questions": [
      {
        "id": "M18.1",
        "label": "Where should a chatbot help, and which three questions or tasks should it handle first?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "Website",
          "Online store",
          "Facebook",
          "Instagram",
          "Messaging",
          "Client dashboard"
        ],
        "help": "Add up to three priority questions or tasks. Channel access and capabilities will be checked for the agreed scope."
      },
      {
        "id": "M18.2",
        "label": "Which information can it rely on for accurate answers?",
        "type": "assets",
        "required": true,
        "help": "Share approved FAQs, policies, catalog, or document links. Name who keeps the information current.",
        "presets": [
          "Needs preparing"
        ]
      },
      {
        "id": "M18.3",
        "label": "What language and tone should it use?",
        "type": "multi-select",
        "required": false,
        "allowOther": true,
        "options": [
          "Use the language and tone already shared",
          "Friendly",
          "Professional",
          "Clear and concise",
          "Warm",
          "Formal"
        ],
        "help": "Add customer languages or tone differences only if they differ from the earlier answers."
      }
    ],
    "description": "Share what you know. You can provide details later or ask us to help."
  },
  {
    "id": "M19",
    "title": "Chatbot actions and human handoff",
    "kind": "module",
    "questions": [
      {
        "id": "M19.1",
        "label": "Should it only answer questions, or also take actions?",
        "type": "select",
        "required": true,
        "allowOther": true,
        "options": [
          "Answer only",
          "Collect inquiries",
          "Suggest/book appointments",
          "Check status",
          "Other"
        ],
        "help": "Account and live-data actions need verified permissions and an agreed scope."
      },
      {
        "id": "M19.2",
        "label": "What must it never decide or do without a person?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "Discounts/refunds",
          "Binding quotes",
          "Sensitive advice",
          "Account changes",
          "Unknown answers",
          "Complaints"
        ],
        "help": "Choose what needs human review and add any other boundaries."
      },
      {
        "id": "M19.3",
        "label": "When should it hand over, and who should receive the conversation?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "Uncertain answers",
          "Failed actions",
          "Unavailable staff",
          "Urgent or sensitive cases",
          "Customer requests a person"
        ],
        "help": "Add who receives the conversation and any desired volume or usage-cost limit."
      }
    ],
    "description": "Share what you know. You can provide details later or ask us to help."
  },
  {
    "id": "M20",
    "title": "Automation and connected tools",
    "kind": "module",
    "questions": [
      {
        "id": "M20.1",
        "label": "Which repetitive task or information transfer should happen automatically?",
        "type": "textarea",
        "required": true,
        "placeholder": "When a quote is accepted, create an invoice.",
        "help": "Start with one priority from your current workflow.",
        "presets": [
          "Help us choose the first automation"
        ]
      },
      {
        "id": "M20.2",
        "label": "Which tools need to be involved?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "Spreadsheets",
          "CRM",
          "ERP",
          "Accounting",
          "Shipping",
          "Inventory",
          "Custom tools",
          "Not sure"
        ],
        "help": "Add tool names, versions, or plans if known."
      },
      {
        "id": "M20.3",
        "label": "What should trigger the process, and what result should it produce?",
        "type": "two-lists",
        "required": true,
        "fields": [
          {
            "id": "trigger",
            "required": true,
            "label": "When this happens",
            "placeholder": "For example: A quote is accepted"
          },
          {
            "id": "result",
            "required": true,
            "label": "This should happen next",
            "placeholder": "For example: Create an invoice"
          }
        ],
        "help": "Describe the trigger and expected result in plain language. Add approximate frequency or record volume only if known.",
        "presets": [
          "Need guidance"
        ]
      }
    ],
    "description": "Share what you know. You can provide details later or ask us to help."
  },
  {
    "id": "M21",
    "title": "Data rules and failed workflows",
    "kind": "module",
    "questions": [
      {
        "id": "M21.1",
        "label": "What information needs to move between the tools, and how quickly?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "Customer information",
          "Orders",
          "Stock",
          "Invoices",
          "Files",
          "Other records"
        ],
        "help": "Add how quickly information should move: instant, scheduled, manual, or undecided. Mention one-way or both ways if known."
      },
      {
        "id": "M21.2",
        "label": "Which system should be trusted if records disagree?",
        "type": "textarea",
        "required": true,
        "help": "Name the trusted system for important customer, order, stock, or invoice records only where relevant.",
        "presets": [
          "Need help deciding"
        ]
      },
      {
        "id": "M21.3",
        "label": "Who should be alerted when something fails, and how can work continue?",
        "type": "textarea",
        "required": true,
        "help": "Name the person who should receive alerts and how the team can continue manually. You may add a technical contact or public documentation link.",
        "presets": [
          "Help us define a fallback"
        ]
      }
    ],
    "description": "Share what you know. You can provide details later or ask us to help."
  },
  {
    "id": "M22",
    "title": "Moving existing data or systems",
    "kind": "module",
    "questions": [
      {
        "id": "M22.1",
        "label": "What information or content needs to move, and from where?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "Website content",
          "Product catalog",
          "Customer records",
          "Order history",
          "Booking history",
          "Files",
          "System settings"
        ],
        "help": "Add where each item comes from, approximate volume if known, and links to redacted examples only."
      },
      {
        "id": "M22.2",
        "label": "What problems already exist in that information?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "Duplicates",
          "Missing details",
          "Outdated records",
          "Inconsistent formats",
          "Access/export limits",
          "None known",
          "Not sure"
        ],
        "help": "Add who can approve cleanup."
      },
      {
        "id": "M22.3",
        "label": "What must keep working while the move happens?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "Important URLs",
          "Live orders",
          "Live bookings",
          "Customer access",
          "Connected systems",
          "Backups and rollback"
        ],
        "help": "Add acceptable interruption and who will verify the result."
      }
    ],
    "description": "Share what you know. You can provide details later or ask us to help."
  },
  {
    "id": "M23",
    "title": "Measurement and performance",
    "kind": "module",
    "questions": [
      {
        "id": "M23.1",
        "label": "What do you currently measure, and where are those reports?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "Visits",
          "Inquiries",
          "Bookings",
          "Sales",
          "Conversion",
          "Repeat business",
          "Response time",
          "Task time",
          "Errors",
          "System speed",
          "Nothing yet"
        ],
        "help": "Add existing report links if available. You do not need to disclose revenue."
      },
      {
        "id": "M23.2",
        "label": "What is the current starting point for your main goal?",
        "type": "text",
        "required": false,
        "placeholder": "For example: Approximately 20 inquiries per month, from our CRM",
        "help": "Add a metric, period, and source if available. Label estimates. We will use the goal you already shared.",
        "presets": [
          "Baseline needed"
        ]
      },
      {
        "id": "M23.3",
        "label": "What should a useful report help you decide?",
        "type": "textarea",
        "required": false,
        "help": "Add what decisions the report should support, the recipient, and preferred cadence. Mention any known slow or failing user task.",
        "presets": [
          "Help us decide what to measure"
        ]
      }
    ],
    "description": "Share what you know. You can provide details later or ask us to help."
  },
  {
    "id": "M24",
    "title": "Ongoing care and recovery",
    "kind": "module",
    "questions": [
      {
        "id": "M24.1",
        "label": "Which systems and recurring tasks need ongoing help?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "Updates",
          "Bug fixes",
          "Backups",
          "Integration monitoring",
          "Content changes",
          "Chatbot updates",
          "Performance"
        ],
        "help": "Choose what you need help with; recurring work follows the agreed scope."
      },
      {
        "id": "M24.2",
        "label": "What interruptions would affect your business most?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "Website or store unavailable",
          "Payments unavailable",
          "Bookings unavailable",
          "Lost or delayed data",
          "Connected systems unavailable"
        ],
        "help": "Add critical operating periods, acceptable disruption or data loss, and preferred response needs if known. These are requirements to discuss."
      },
      {
        "id": "M24.3",
        "label": "Who should receive alerts and approve maintenance or extra work?",
        "type": "textarea",
        "required": true,
        "help": "Reuse an existing contact or name the responsible person or role. Optionally add an update window and who maintains tool subscriptions.",
        "presets": [
          "Use the primary project contact",
          "Need to appoint a contact"
        ]
      }
    ],
    "description": "Share what you know. You can provide details later or ask us to help."
  },
  {
    "id": "M25",
    "title": "Information access and protection",
    "kind": "module",
    "questions": [
      {
        "id": "M25.1",
        "label": "Which roles should be allowed to see or change private information?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "Project owner",
          "Employees",
          "Managers",
          "Customers",
          "External providers",
          "Agency for agreed work"
        ],
        "help": "Add what each role may see or change. Use roles and categories, without private records."
      },
      {
        "id": "M25.2",
        "label": "Are there requirements for where information is stored, how long it is kept, or when it is deleted?",
        "type": "assets",
        "required": true,
        "help": "Link an existing policy or name a responsible contact. Mention storage locations, retention, deletion, and AI or third-party processing restrictions where relevant.",
        "presets": [
          "Needs review",
          "No requirements known"
        ]
      },
      {
        "id": "M25.3",
        "label": "Who can confirm these requirements and help with incidents or access removal?",
        "type": "textarea",
        "required": true,
        "help": "Name the responsible person or team. You may link an existing security requirements document. Do not upload sensitive datasets.",
        "presets": [
          "Use the primary project contact",
          "Need to appoint a responsible contact"
        ]
      }
    ],
    "description": "Share what you know. You can provide details later or ask us to help."
  },
  {
    "id": "M26",
    "title": "Policies and approvals for your business",
    "kind": "module",
    "questions": [
      {
        "id": "M26.1",
        "label": "Which approved policies or industry requirements must the project follow?",
        "type": "multi-select",
        "required": true,
        "allowOther": true,
        "options": [
          "Customer terms",
          "Privacy",
          "Cookies/tracking",
          "Returns/cancellation",
          "Accessibility",
          "Licenses",
          "Advertising/claims",
          "Needs review"
        ],
        "help": "Add links to approved policies or requirements where available."
      },
      {
        "id": "M26.2",
        "label": "Who will supply and approve missing policy text, required disclosures, or permissions?",
        "type": "textarea",
        "required": true,
        "help": "Name who supplies and approves policies, disclosures, and permissions. Include commercial rights for images, testimonials, designs, and other supplied assets.",
        "presets": [
          "Need to arrange"
        ]
      },
      {
        "id": "M26.3",
        "label": "Is there any requirement that could restrict a sale, launch, campaign, or data flow?",
        "type": "textarea",
        "required": true,
        "help": "Mention any restriction related to your markets, special requirements, sales, launch, campaigns, or data flow.",
        "presets": [
          "None known",
          "Needs specialist review"
        ]
      }
    ],
    "description": "Share what you know. You can provide details later or ask us to help."
  }
];

// Agency-facing routing reference; do not render its notes as question copy.
export const MODULE_ROUTING = [
  {
    "trigger": "Public website, online store, or web application",
    "pages": [
      "M01",
      "M02"
    ],
    "notes": "M01–M02"
  },
  {
    "trigger": "Selling/listing physical products, with or without online payment",
    "pages": [
      "M03"
    ],
    "notes": "M03"
  },
  {
    "trigger": "Shipping, pickup, local delivery, supplier dispatch, or returns",
    "pages": [
      "M05"
    ],
    "notes": "M05"
  },
  {
    "trigger": "Print on demand, made-to-order, personalization, or dropshipping",
    "pages": [
      "M06",
      "M03",
      "M05"
    ],
    "notes": "M06; also M03 and M05; M04 only if stock/availability management is relevant",
    "conditionalPages": [
      "M04"
    ]
  },
  {
    "trigger": "Appointments, consultations, events, or reservable capacity",
    "pages": [
      "M07"
    ],
    "notes": "M07"
  },
  {
    "trigger": "Project-based services, quote requests, or business procurement",
    "pages": [
      "M08"
    ],
    "notes": "M08"
  },
  {
    "trigger": "Digital products, courses, or gated content",
    "pages": [
      "M09"
    ],
    "notes": "M09"
  },
  {
    "trigger": "Recurring subscriptions or memberships",
    "pages": [
      "M10"
    ],
    "notes": "M10"
  },
  {
    "trigger": "Internal employee or partner workflows",
    "pages": [
      "M12"
    ],
    "notes": "M12"
  },
  {
    "trigger": "Collecting payments or generating invoices, online or offline",
    "pages": [
      "M13"
    ],
    "notes": "M13"
  },
  {
    "trigger": "Social account/page setup, templates, or management",
    "pages": [
      "M14"
    ],
    "notes": "M14"
  },
  {
    "trigger": "Campaigns, lead generation, acquisition, or retention work",
    "pages": [
      "M15",
      "M16"
    ],
    "notes": "M15–M16"
  },
  {
    "trigger": "Agency-managed customer handling or support workflow changes",
    "pages": [
      "M17"
    ],
    "notes": "M17"
  },
  {
    "trigger": "Chatbot or AI-assisted customer interactions",
    "pages": [
      "M18",
      "M19"
    ],
    "notes": "M18–M19; M17 if human-support responsibilities also need defining",
    "conditionalPages": [
      "M17"
    ]
  },
  {
    "trigger": "Repetitive task automation, ERP/CRM, or other system connections",
    "pages": [
      "M20",
      "M21"
    ],
    "notes": "M20–M21"
  },
  {
    "trigger": "Performance, analytics, or management reporting in scope",
    "pages": [
      "M23"
    ],
    "notes": "M23"
  },
  {
    "trigger": "Ongoing maintenance or support requested or contracted",
    "pages": [
      "M24"
    ],
    "notes": "M24"
  },
  {
    "trigger": "Restrictions, sensitive data, special permissions, policies, or uncertainty identified on P11",
    "pages": [
      "M25",
      "M26",
      "M26"
    ],
    "notes": "M25–M26; M26 also for public transaction/user-account flows requiring client policies"
  },
  {
    "trigger": "16. Support, retention, repeat use",
    "pages": [
      "M05",
      "M10",
      "M16",
      "M17",
      "M18",
      "M19"
    ],
    "notes": "M05, M10, M16–M19"
  },
  {
    "trigger": "17. Data, reporting, integrations",
    "pages": [
      "M20",
      "M21",
      "M22",
      "M23"
    ],
    "notes": "M20–M23"
  },
  {
    "trigger": "18. Platform and technical feasibility",
    "pages": [
      "M01",
      "M02",
      "M18",
      "M19",
      "M20",
      "M21",
      "M22"
    ],
    "notes": "M01–M02, M18–M22; agency verifies capability after intake"
  }
] as const;
