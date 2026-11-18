import type { Page } from "./types";

// Stable IDs and option values preserve saved client answers.
// Reviewable export: docs/onboarding-questions.json (bun run scripts/export-onboarding.ts).
export const MODULE_PAGES: Page[] = [
  {
    "id": "M01",
    "title": "Your website's job",
    "kind": "module",
    "questions": [
      {
        "id": "M01.1",
        "label": "Are we building a new site or changing an existing one?",
        "type": "select",
        "required": true,
        "options": [
          "Create something new",
          "Improve what we have",
          "Replace what we have",
          "Please recommend"
        ],
        "help": "Choose the closest match; we will reuse the links you already shared.",
        "why": "A new build, improvement, or replacement needs a different plan for content, access, and continuity."
      },
      {
        "id": "M01.2",
        "label": "What do visitors need before they can take the main action?",
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
        ],
        "help": "Choose the information or tools that help them decide and continue.",
        "why": "This shapes page content and navigation around the customer’s task.",
        "optionLabels": {
          "Offer details": "Product or service details",
          "Examples": "Examples or customer proof",
          "FAQs": "Answers to common questions",
          "Location": "Location or service area",
          "Search/filtering": "Search and product filters",
          "Account": "Customer account",
          "Status tracking": "Order or request status"
        },
        "exclusiveOptions": [
          "Need guidance"
        ]
      },
      {
        "id": "M01.3",
        "label": "Is there a website platform we should use or keep?",
        "type": "select",
        "required": false,
        "allowOther": true,
        "options": [
          "Shopify",
          "WordPress/WooCommerce",
          "Another platform",
          "No preference"
        ],
        "help": "Choose a preference, or ask for a recommendation; add the current plan if known.",
        "why": "We check fit, existing investments, and platform limits before recommending a solution."
      },
      {
        "id": "M01.4",
        "label": "Which task is hardest for customers on your current site?",
        "type": "textarea",
        "required": false,
        "help": "Give one example or page link, including the device if known.",
        "why": "A real problem helps us prioritize the redesign and define a task to check before launch.",
        "presets": [
          "No existing site",
          "We need help investigating"
        ]
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "M02",
    "title": "Website ownership and content",
    "kind": "module",
    "questions": [
      {
        "id": "M02.1",
        "label": "Who controls your domain, website, and hosting accounts?",
        "type": "select",
        "required": true,
        "options": [
          "Owned and accessible",
          "Owned but access uncertain",
          "Managed by someone else",
          "Need to create",
          "Not sure"
        ],
        "help": "Name the provider and owner if known; do not share login details.",
        "why": "Account ownership and access can affect setup, migration, and handover.",
        "optionLabels": {
          "Owned and accessible": "We own the accounts and can access them",
          "Owned but access uncertain": "We own them but need to check access",
          "Managed by someone else": "Someone else manages them",
          "Need to create": "We need new accounts"
        }
      },
      {
        "id": "M02.2",
        "label": "Which pages or content need to be ready for launch?",
        "type": "list",
        "required": true,
        "placeholder": "For example: Home — ready, Services — needs writing",
        "help": "List priorities or link an existing page list; mark content ready or needing work.",
        "presets": [
          "Please recommend"
        ],
        "why": "This defines the launch content and who needs to prepare it."
      },
      {
        "id": "M02.3",
        "label": "What should we keep from your current website?",
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
        "help": "Choose what matters; add important URLs or connections in a note.",
        "why": "We identify migration needs and protect useful content, search visibility, and customer access.",
        "optionLabels": {
          "URLs/search traffic": "Important page links and search visibility",
          "Customer access": "Customer accounts and sign-in",
          "Integrations": "Connections to other tools"
        }
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "M03",
    "title": "Product catalog",
    "kind": "module",
    "questions": [
      {
        "id": "M03.1",
        "label": "How large is your first product catalog?",
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
        "help": "Choose a band for products; note the separate variation count if known.",
        "why": "Ten products with many sizes can involve more setup than ten simple items; rough counts help estimate the work."
      },
      {
        "id": "M03.2",
        "label": "What choices must a customer make for a product?",
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
        "help": "Choose what applies, then add one example if helpful.",
        "why": "Product choices affect the catalog structure, pricing, fulfillment, and checkout.",
        "optionLabels": {
          "Variant": "Size, color, or another version",
          "Bundle": "A bundle or product set",
          "Measurements": "Custom measurements",
          "Text/image personalization": "Personalized text or images",
          "Approval": "A proof or design approval",
          "Nothing": "No choices beyond the product itself"
        },
        "optionDescriptions": {
          "Variant": "For example, a shirt available in several sizes and colors.",
          "Text/image personalization": "For example, a name or uploaded design printed on a product."
        }
      },
      {
        "id": "M03.3",
        "label": "Where are your product details, prices, and images kept?",
        "type": "assets",
        "required": true,
        "help": "Name the tool or link a catalog; a small redacted example is enough.",
        "presets": [
          "Not prepared yet",
          "A colleague will provide this"
        ],
        "why": "We check data readiness, missing details, image rights, and import needs before building the catalog."
      },
      {
        "id": "M03.4",
        "label": "Which products matter most commercially?",
        "type": "textarea",
        "required": false,
        "help": "Name best sellers or priorities; share price ranges and margin limits only if comfortable.",
        "why": "This helps us prioritize products and avoid promotions that are unsuitable for your costs or supply.",
        "presets": [
          "No sales history yet",
          "Discuss privately"
        ]
      },
      {
        "id": "M03.5",
        "label": "How should customers find the right product?",
        "type": "multi-select",
        "required": false,
        "help": "Choose useful browsing methods; add important product facts in a note.",
        "why": "Your catalog structure and search filters should reflect how people choose, not just how stock is stored.",
        "options": [
          "Browse by category",
          "Search by name or product code",
          "Filter by size, color, or material",
          "Compare specifications",
          "Find compatible products or parts",
          "Get help choosing",
          "Not sure"
        ],
        "allowOther": true
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "M04",
    "title": "Stock and availability",
    "kind": "module",
    "questions": [
      {
        "id": "M04.1",
        "label": "Where do you keep stock counts today?",
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
        "help": "Choose the main source; add its name and who updates it.",
        "why": "We need a trusted stock source before designing synchronization or availability rules.",
        "optionLabels": {
          "Inventory system": "Stock management software",
          "Supplier feeds": "Stock updates from suppliers",
          "Physical records": "Paper or in-store records",
          "Not tracked": "We do not track stock yet"
        }
      },
      {
        "id": "M04.2",
        "label": "Which locations and sales channels use the same stock?",
        "type": "list",
        "required": true,
        "placeholder": "For example: 2 stores and an online shop",
        "help": "List your main warehouses, stores, website, and marketplaces.",
        "why": "Shared stock needs rules to reduce overselling; note batches, expiry, or serial numbers only if relevant."
      },
      {
        "id": "M04.3",
        "label": "What should happen when an item is unavailable?",
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
        "help": "Choose the behaviors you need; add an exception owner if known.",
        "why": "We use this to plan availability messages, backorders, and staff checks.",
        "optionLabels": {
          "Stop sales": "Show sold out and stop orders",
          "Allow backorders": "Accept orders for later delivery",
          "Waitlist": "Let customers join a waitlist",
          "Reorder alert": "Alert the team to restock",
          "Manual review": "Ask a person to check"
        }
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "M05",
    "title": "Delivery, pickup, and returns",
    "kind": "module",
    "questions": [
      {
        "id": "M05.1",
        "label": "How will orders reach customers?",
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
        "help": "Choose delivery methods; add countries or regions you serve and any exclusions.",
        "why": "Delivery methods and areas determine the shipping and pickup choices customers see.",
        "optionLabels": {
          "Courier": "Courier or postal delivery",
          "Own delivery": "Our own delivery team",
          "Pickup": "Customer pickup",
          "Supplier dispatch": "Supplier ships directly"
        }
      },
      {
        "id": "M05.2",
        "label": "What delivery providers and rules do you use?",
        "type": "textarea",
        "required": false,
        "help": "Link your rules or name providers, charges, processing times, and tracking needs.",
        "presets": [
          "Please help define this"
        ],
        "why": "We use these details to check checkout rates and fulfillment connections, including packaging or cross-border constraints."
      },
      {
        "id": "M05.3",
        "label": "Who handles delivery issues, returns, and refunds?",
        "type": "textarea",
        "required": true,
        "help": "Name the team and link or summarize your returns policy.",
        "presets": [
          "Policy not ready"
        ],
        "why": "Clear ownership and rules help us plan customer messages and exception handling; include return costs if known."
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "M06",
    "title": "Supplier-made or personalized products",
    "kind": "module",
    "questions": [
      {
        "id": "M06.1",
        "label": "Who makes or dispatches your supplier-made products?",
        "type": "list",
        "required": true,
        "placeholder": "Supplier or production team — name or link",
        "help": "Name suppliers or your production team; label undecided suppliers as options.",
        "presets": [
          "Suppliers not selected yet"
        ],
        "why": "We need to verify production and dispatch capabilities before connecting the order flow."
      },
      {
        "id": "M06.2",
        "label": "What needs approval before production starts?",
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
        "help": "Choose the checks needed before an order is made.",
        "why": "These checks can prevent incorrect or unapproved orders reaching production; note whether samples and timing are tested.",
        "optionLabels": {
          "Customer proof": "Customer approval of a preview",
          "Size/variant availability": "Availability of the selected version",
          "Artwork": "Artwork or design",
          "Customization": "Personalization details",
          "Sample quality": "Quality of a sample"
        }
      },
      {
        "id": "M06.3",
        "label": "How do you handle supplier failures and supplier payments?",
        "type": "textarea",
        "required": false,
        "help": "Give the responsible person and key remake, deadline, or payment rules.",
        "presets": [
          "Not sure yet"
        ],
        "why": "Supplier timing and upfront costs may affect promises, order status, and cash flow."
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "M07",
    "title": "Bookings and appointments",
    "kind": "module",
    "questions": [
      {
        "id": "M07.1",
        "label": "What can customers book?",
        "type": "textarea",
        "required": true,
        "placeholder": "For example: 30-minute online consultations with one adviser",
        "help": "Give one service example with duration, location, staff, and capacity if known.",
        "presets": [
          "Help us define availability"
        ],
        "why": "These limits determine available time slots and booking rules."
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
        "help": "Choose the main approach; add your calendar tool if you have one.",
        "why": "This determines when we reserve capacity and notify the customer.",
        "optionLabels": {
          "Instant": "Confirm immediately",
          "Staff approval": "Confirm after staff approval",
          "Consultation first": "Arrange a consultation first",
          "Waitlist": "Add to a waitlist"
        }
      },
      {
        "id": "M07.3",
        "label": "What are your rescheduling, cancellation, and no-show rules?",
        "type": "textarea",
        "required": true,
        "help": "Link a policy or summarize it; mention deposits and reminders if relevant.",
        "presets": [
          "Help us define the process"
        ],
        "why": "We need these rules for booking messages, payment requirements, and changes to availability."
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "M08",
    "title": "Quotes, projects, and B2B buying",
    "kind": "module",
    "questions": [
      {
        "id": "M08.1",
        "label": "What do you need to know before accepting an inquiry?",
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
        "help": "Choose the details that help you assess fit.",
        "why": "We keep inquiry forms focused on information your team actually uses."
      },
      {
        "id": "M08.2",
        "label": "How does an inquiry become an approved order?",
        "type": "textarea",
        "required": true,
        "placeholder": "Inquiry → quote → approval → project delivery",
        "help": "Describe the steps or link a quote or order template.",
        "presets": [
          "Help us define the process"
        ],
        "why": "Quotes, purchase orders, approvals, and handoffs shape the sales workflow."
      },
      {
        "id": "M08.3",
        "label": "Do business customers have special buying rules?",
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
        ],
        "help": "Choose existing rules such as trade pricing, minimum quantities, or payment terms.",
        "why": "These rules may require different accounts, prices, approvals, or checkout behavior.",
        "optionLabels": {
          "Negotiated prices": "Prices agreed for each customer",
          "Minimum quantities": "Minimum order quantities",
          "Trade accounts": "Approved business accounts",
          "Payment terms": "Pay later on agreed terms",
          "Repeat ordering": "Reorder previous purchases"
        }
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "M09",
    "title": "Digital products and learning",
    "kind": "module",
    "questions": [
      {
        "id": "M09.1",
        "label": "How will customers receive your digital content?",
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
        "help": "Choose delivery methods; add the file or content format if known.",
        "why": "Delivery format affects hosting, access, and purchase confirmation.",
        "optionLabels": {
          "Download": "File download",
          "Account access": "Access through an account",
          "Live session": "Live online session",
          "License": "Licensed content or software"
        }
      },
      {
        "id": "M09.2",
        "label": "What limits access to the digital content?",
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
        "help": "Choose relevant limits and add any known duration, seat, or license rules.",
        "why": "We use these rules to plan who gets access and when it ends.",
        "optionLabels": {
          "Access duration": "Time-limited access",
          "Seat limits": "Limit on people or devices",
          "Prerequisites": "Requirements before joining",
          "Licenses": "License or permitted-use rules"
        }
      },
      {
        "id": "M09.3",
        "label": "What support or features are needed after access starts?",
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
        ],
        "help": "Choose only what your offer needs.",
        "why": "Learning, updates, support, and expiry require different follow-up workflows.",
        "optionLabels": {
          "Expiry/revocation": "End or remove access"
        }
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "M10",
    "title": "Subscriptions and memberships",
    "kind": "module",
    "questions": [
      {
        "id": "M10.1",
        "label": "What does a subscription or membership include?",
        "type": "textarea",
        "required": true,
        "help": "Summarize the ongoing benefit; link existing tiers and billing periods if available.",
        "presets": [
          "Help us define the offer"
        ],
        "why": "The recurring offer determines delivery, access, and billing requirements."
      },
      {
        "id": "M10.2",
        "label": "Which subscription billing behaviors do you need?",
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
        "help": "Choose trial, renewal, plan-change, and failed-payment behaviors to discuss.",
        "why": "We check these against your policies and provider capabilities before implementation.",
        "optionLabels": {
          "Pause access after failed payment": "Pause access if payment fails"
        },
        "exclusiveOptions": [
          "Need guidance"
        ]
      },
      {
        "id": "M10.3",
        "label": "What happens when a customer pauses or cancels?",
        "type": "textarea",
        "required": true,
        "help": "Link your rules or explain when access or deliveries end and whether refunds apply.",
        "presets": [
          "Help us define the policy"
        ],
        "why": "Cancellation behavior affects billing, fulfillment, and customer messages."
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "M11",
    "title": "Marketplaces and multiple providers",
    "kind": "module",
    "questions": [
      {
        "id": "M11.1",
        "label": "Which groups will use the marketplace?",
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
        "help": "Choose the groups and add the main task each needs to do.",
        "why": "Each group may need different permissions and screens."
      },
      {
        "id": "M11.2",
        "label": "How are providers approved and assigned work or orders?",
        "type": "textarea",
        "required": true,
        "help": "Describe selection, quality checks, and who supplies or performs the work.",
        "presets": [
          "Help us define the process"
        ],
        "why": "This defines onboarding, matching, and operational responsibilities."
      },
      {
        "id": "M11.3",
        "label": "Who collects money, pays providers, and resolves disputes?",
        "type": "textarea",
        "required": true,
        "help": "Describe commissions, payouts, refunds, and ownership where relevant.",
        "presets": [
          "Not decided"
        ],
        "why": "The money flow affects provider feasibility and responsibilities that need specialist review."
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "M12",
    "title": "Internal team workflows",
    "kind": "module",
    "questions": [
      {
        "id": "M12.1",
        "label": "Which repeated team task should we improve first?",
        "type": "textarea",
        "required": true,
        "help": "Reuse your earlier workflow; add frequency or time spent if known.",
        "presets": [
          "Help us choose the priority task"
        ],
        "why": "We choose a useful first improvement and a baseline for checking its effect."
      },
      {
        "id": "M12.2",
        "label": "Which team roles need to submit, approve, edit, or view work?",
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
        "help": "Choose roles and explain what each can do.",
        "why": "Permissions and approval steps need to reflect how the team actually works."
      },
      {
        "id": "M12.3",
        "label": "What would help your team use the new process?",
        "type": "multi-select",
        "required": false,
        "allowOther": true,
        "options": [
          "Training",
          "Simpler mobile access",
          "Existing sign-in",
          "Gradual rollout",
          "Parallel running"
        ],
        "help": "Choose support such as training, mobile access, or a gradual rollout.",
        "why": "A workable rollout matters as much as the tool itself for team adoption.",
        "optionLabels": {
          "Existing sign-in": "Use our current sign-in",
          "Parallel running": "Keep the old process during a trial"
        }
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "M13",
    "title": "Customer payments and invoicing",
    "kind": "module",
    "questions": [
      {
        "id": "M13.1",
        "label": "How should customers pay you?",
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
        "help": "Choose methods; add customer currencies in a note.",
        "why": "This concerns customer payments, separate from your agency fees, and helps us check provider coverage.",
        "optionLabels": {
          "Online payment": "Online card, wallet, or local payment",
          "Invoice": "Pay an invoice",
          "Deposit/balance": "Deposit now, balance later",
          "Cash/pay on delivery": "Cash or payment on delivery"
        }
      },
      {
        "id": "M13.2",
        "label": "Which payment and accounting providers do you use?",
        "type": "list",
        "required": false,
        "help": "Name providers and whether accounts are approved; never share bank or card credentials.",
        "presets": [
          "No providers yet"
        ],
        "why": "Provider readiness and supported connections affect payment setup and reconciliation."
      },
      {
        "id": "M13.3",
        "label": "Which approved pricing, tax, invoice, and refund rules apply?",
        "type": "assets",
        "required": true,
        "help": "Link the rules or name the person who will confirm them.",
        "presets": [
          "Needs review"
        ],
        "why": "Checkout and invoices must reflect approved business rules; we do not infer tax treatment from a country alone."
      },
      {
        "id": "M13.4",
        "label": "What does your customer need at checkout?",
        "type": "multi-select",
        "required": false,
        "help": "Choose business needs; we will check platform and payment-provider support.",
        "why": "Checkout requirements affect conversion, account design, and the steps we need to test before launch.",
        "options": [
          "Buy without creating an account",
          "Use a saved customer account",
          "Use a fast wallet payment",
          "Enter company or tax details",
          "Add a discount or gift card",
          "Choose pickup or delivery",
          "Help me choose"
        ],
        "allowOther": true,
        "exclusiveOptions": [
          "Help me choose"
        ]
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "M14",
    "title": "Your social presence",
    "kind": "module",
    "questions": [
      {
        "id": "M14.1",
        "label": "Which social channels matter most for this project?",
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
          "WhatsApp",
          "Need guidance"
        ],
        "help": "Choose up to three; reuse earlier profile links and note any missing access.",
        "why": "We focus setup or improvements on relevant channels and verify account ownership separately.",
        "exclusiveOptions": [
          "Need guidance"
        ]
      },
      {
        "id": "M14.2",
        "label": "What should social content help customers do?",
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
        ],
        "help": "Choose the main actions or messages to support.",
        "why": "This connects content choices to business goals rather than posting without a purpose.",
        "optionLabels": {
          "Understand services": "Understand what we offer",
          "See products": "Discover products",
          "Trust expertise": "Build confidence in our expertise",
          "Inquire": "Ask about a purchase or service",
          "Return": "Come back or buy again"
        }
      },
      {
        "id": "M14.3",
        "label": "Who will create, approve, and publish social content?",
        "type": "select",
        "required": true,
        "options": [
          "Client",
          "Agency where agreed",
          "Shared",
          "Undecided"
        ],
        "help": "Choose the working arrangement; add available formats or capacity in a note.",
        "why": "We plan responsibilities and approvals around the agreement; ongoing production needs defined coverage.",
        "optionLabels": {
          "Client": "Our team",
          "Agency where agreed": "Starter Shifter, for agreed work",
          "Shared": "Our team and Starter Shifter together"
        }
      },
      {
        "id": "M14.4",
        "label": "Which social content has brought useful results?",
        "type": "textarea",
        "required": false,
        "help": "Link one useful post or redacted report and say what happened and when.",
        "why": "We distinguish attention from inquiries or sales and learn which topics and formats are worth testing.",
        "presets": [
          "No results measured yet",
          "No social pages yet"
        ]
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "M15",
    "title": "Campaign and growth priorities",
    "kind": "module",
    "questions": [
      {
        "id": "M15.1",
        "label": "Which offer and audience should marketing focus on first?",
        "type": "textarea",
        "required": true,
        "help": "Build on your earlier answers; name the first offer and customer group.",
        "presets": [
          "Help us choose the campaign priority"
        ],
        "why": "A clear starting point helps us connect campaigns, landing pages, and follow-up."
      },
      {
        "id": "M15.2",
        "label": "How do customers currently find you?",
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
          "Email or messaging",
          "No history"
        ],
        "help": "Choose current sources; add one thing that worked or failed with a dated results link.",
        "why": "We use past evidence to decide what to retain, test, or investigate rather than guess channel performance.",
        "optionLabels": {
          "Search": "Search engines",
          "Social": "Unpaid social posts",
          "Ads": "Paid advertising",
          "Offline": "Offline activity or events",
          "No history": "We have not started marketing yet"
        }
      },
      {
        "id": "M15.3",
        "label": "What spending and promotion limits should marketing follow?",
        "type": "budget",
        "required": true,
        "fields": [
          {
            "id": "currency",
            "label": "Currency",
            "required": true,
            "placeholder": "For example INR, USD, GBP"
          },
          {
            "id": "advertising",
            "label": "Campaign spending limit",
            "required": true,
            "placeholder": "Amount or range"
          }
        ],
        "help": "Confirm the monthly ad budget already shared; add only promotion limits or changes.",
        "presets": [
          "Discuss first",
          "Use the advertising budget already shared"
        ],
        "why": "We reuse your project budget and check commercial limits. Ad spend is client-paid; requests do not authorize campaign spending."
      },
      {
        "id": "M15.4",
        "label": "Which searches should help people find your business?",
        "type": "textarea",
        "required": false,
        "help": "Give a few phrases a customer might use, or link important search pages.",
        "why": "We use your language as a research starting point, then verify search demand and intent; rankings are not guaranteed.",
        "presets": [
          "Please research this"
        ]
      },
      {
        "id": "M15.5",
        "label": "Which marketing accounts and materials can we build on?",
        "type": "list",
        "required": false,
        "help": "Name tools or assets and who manages them; add access status without logins.",
        "why": "We check analytics, search, ads, email, and creative readiness before planning connections or campaigns.",
        "placeholder": "For example: Google Search Console — our team owns it; access needs checking",
        "presets": [
          "No marketing accounts yet",
          "Need help checking ownership"
        ]
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "M16",
    "title": "Lead follow-up and repeat business",
    "kind": "module",
    "questions": [
      {
        "id": "M16.1",
        "label": "What makes an inquiry a good fit for your business?",
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
        "help": "Choose criteria and add any customers or requests you cannot serve.",
        "why": "We use this to distinguish useful inquiries from volume alone.",
        "optionLabels": {
          "Need": "A need we can help with",
          "Timing": "A suitable buying timeline",
          "Company type": "A suitable business type"
        }
      },
      {
        "id": "M16.2",
        "label": "Who follows up when a new inquiry arrives?",
        "type": "textarea",
        "required": true,
        "help": "Name the owner, destination tool, usual response time, and daily capacity.",
        "presets": [
          "Help us define follow-up"
        ],
        "why": "A campaign needs a workable handoff so inquiries receive timely follow-up."
      },
      {
        "id": "M16.3",
        "label": "What encourages customers to buy or use your service again?",
        "type": "textarea",
        "required": false,
        "help": "Describe repeat needs, offers, or reasons people stop returning.",
        "presets": [
          "Help us identify a repeat offer"
        ],
        "why": "We use this to plan useful retention messages rather than send promotions without a reason."
      },
      {
        "id": "M16.4",
        "label": "How have people agreed to receive your marketing messages?",
        "type": "textarea",
        "required": false,
        "help": "Describe signup sources, channels, and where preferences or opt-outs are recorded.",
        "why": "We need to verify permissions and channel requirements before using a list. Do not upload subscriber details here.",
        "presets": [
          "No contact list yet",
          "Permission needs review"
        ]
      },
      {
        "id": "M16.5",
        "label": "Which customer messages would be most useful?",
        "type": "multi-select",
        "required": false,
        "help": "Choose up to three priorities based on customer needs.",
        "why": "We use this to plan email or messaging flows, timing, and ownership; implementation depends on scope and verified permissions.",
        "options": [
          "Welcome after signup",
          "Help after an unfinished checkout",
          "Product or service education",
          "After-purchase guidance",
          "Review request",
          "Reorder or renewal reminder",
          "Bring inactive customers back",
          "Help me choose"
        ],
        "maxSelections": 3,
        "allowOther": true,
        "exclusiveOptions": [
          "Help me choose"
        ]
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "M17",
    "title": "Human customer handling",
    "kind": "module",
    "questions": [
      {
        "id": "M17.1",
        "label": "Where do customer questions arrive?",
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
        "help": "Choose channels; add rough weekly volume and common topics if known.",
        "presets": [
          "Not measured"
        ],
        "why": "Volume and channel mix help define staffing, coverage, and workflow needs.",
        "optionLabels": {
          "Messaging": "Messaging apps such as WhatsApp",
          "Dashboard": "Customer portal or workspace"
        }
      },
      {
        "id": "M17.2",
        "label": "Which conversations should the agency help handle?",
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
        "help": "Choose tasks and note what needs your approval.",
        "why": "We clarify responsibilities and authority limits against the agreed scope before handling customers.",
        "optionLabels": {
          "FAQs": "Common questions",
          "Qualifying inquiries": "Checking whether inquiries are a good fit",
          "Exceptions": "Unusual cases"
        }
      },
      {
        "id": "M17.3",
        "label": "Who takes over urgent or unresolved customer issues?",
        "type": "textarea",
        "required": true,
        "help": "Name a person or role and their availability.",
        "presets": [
          "Need to appoint a contact"
        ],
        "why": "We need a clear escalation path for complaints, sensitive issues, and exceptions; no coverage hours are assumed."
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "M18",
    "title": "Chatbot purpose and knowledge",
    "kind": "module",
    "questions": [
      {
        "id": "M18.1",
        "label": "Where should the chatbot help customers?",
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
        "help": "Choose channels and add up to three priority questions or tasks.",
        "why": "We check channel capabilities and access before agreeing what the chatbot can do.",
        "optionLabels": {
          "Messaging": "Messaging apps such as WhatsApp"
        }
      },
      {
        "id": "M18.2",
        "label": "Which approved information can the chatbot use?",
        "type": "assets",
        "required": true,
        "help": "Link FAQs, policies, or catalog pages and name who keeps them updated.",
        "presets": [
          "Needs preparing"
        ],
        "why": "Reliable sources reduce unsupported answers; private datasets should use an agreed secure process."
      },
      {
        "id": "M18.3",
        "label": "What language and tone should the chatbot use?",
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
        "help": "Reuse earlier brand preferences unless customer conversations need something different.",
        "why": "This keeps chatbot responses consistent with your brand and customers’ language needs.",
        "exclusiveOptions": [
          "Use the language and tone already shared"
        ]
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "M19",
    "title": "Chatbot actions and human handoff",
    "kind": "module",
    "questions": [
      {
        "id": "M19.1",
        "label": "What is the chatbot’s main job?",
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
        "help": "Choose the main job; add other requested actions in a note.",
        "why": "Action-taking needs verified access and feasibility checks before it enters the scope.",
        "optionLabels": {
          "Answer only": "Answer questions only",
          "Collect inquiries": "Collect details for a person to follow up",
          "Suggest/book appointments": "Help customers book",
          "Check status": "Look up an order or request status"
        }
      },
      {
        "id": "M19.2",
        "label": "What should always need a person’s approval?",
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
        "help": "Choose decisions or situations the chatbot should not handle on its own.",
        "why": "We use these boundaries to define permissions and human review.",
        "optionLabels": {
          "Binding quotes": "Final prices or binding quotes",
          "Sensitive advice": "Sensitive or regulated advice",
          "Unknown answers": "Questions it cannot answer reliably",
          "Discounts/refunds": "Discounts or refunds",
          "Account changes": "Changes to a customer account"
        }
      },
      {
        "id": "M19.3",
        "label": "When should the chatbot hand a conversation to a person?",
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
        "help": "Choose handoff situations and name the receiving team in a note.",
        "why": "We plan escalation and what happens when staff are unavailable; add any usage-cost limit if known."
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "M20",
    "title": "Automation and connected tools",
    "kind": "module",
    "questions": [
      {
        "id": "M20.1",
        "label": "Which repeated task should happen automatically?",
        "type": "textarea",
        "required": true,
        "placeholder": "When a quote is accepted, create an invoice.",
        "help": "Start with one task from the workflow you already described.",
        "presets": [
          "Help us choose the first automation"
        ],
        "why": "A focused first automation makes it easier to verify value and avoid automating a broken process."
      },
      {
        "id": "M20.2",
        "label": "Which tools need to work together?",
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
        "help": "Choose tool types and add product names or plans if known.",
        "why": "We verify connectors, permissions, and platform limits before promising a connection.",
        "optionLabels": {
          "CRM": "Customer and sales management tools",
          "ERP": "Tools for wider business operations",
          "Custom tools": "Custom or in-house tools"
        }
      },
      {
        "id": "M20.3",
        "label": "What starts the automation, and what should happen next?",
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
        "help": "Give one trigger and one expected result in everyday words.",
        "presets": [
          "Need guidance"
        ],
        "why": "This defines the first workflow to validate; add frequency or volume only if known."
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "M21",
    "title": "Data rules and failed workflows",
    "kind": "module",
    "questions": [
      {
        "id": "M21.1",
        "label": "What information should move between tools?",
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
        "help": "Choose records; add timing and whether information moves one way or both.",
        "why": "Record types, direction, and timing determine connection requirements.",
        "optionLabels": {
          "Stock": "Stock counts and availability"
        }
      },
      {
        "id": "M21.2",
        "label": "Which tool has the correct record when tools disagree?",
        "type": "textarea",
        "required": true,
        "help": "Name the trusted source for customers, orders, stock, or invoices where relevant.",
        "presets": [
          "Need help deciding"
        ],
        "why": "A trusted source prevents updates from overwriting the wrong information."
      },
      {
        "id": "M21.3",
        "label": "What should happen if the connection fails?",
        "type": "textarea",
        "required": true,
        "help": "Name the alert recipient and how staff can continue manually.",
        "presets": [
          "Help us define a fallback"
        ],
        "why": "We plan recovery and exception handling alongside the normal workflow."
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "M22",
    "title": "Moving existing data or systems",
    "kind": "module",
    "questions": [
      {
        "id": "M22.1",
        "label": "What needs to move from your old tools or website?",
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
        "help": "Choose the information; name each source and rough volume if known.",
        "why": "We assess export access, migration work, and what needs verification before moving live data.",
        "optionLabels": {
          "System settings": "Settings in the current tools"
        }
      },
      {
        "id": "M22.2",
        "label": "What problems are already present in that information?",
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
        "help": "Choose known issues and name who can approve cleanup.",
        "why": "We avoid carrying known errors into the new system or changing records without an owner.",
        "optionLabels": {
          "Access/export limits": "Difficulty accessing or exporting records"
        }
      },
      {
        "id": "M22.3",
        "label": "What must stay available during the move?",
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
        "help": "Choose critical services; add acceptable interruption and who can check the result.",
        "why": "We plan redirects, continuity, backups, and rollback around these priorities before switching.",
        "optionLabels": {
          "Important URLs": "Important page links and search visibility",
          "Backups and rollback": "Backups and a way to switch back"
        }
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "M23",
    "title": "Measurement and performance",
    "kind": "module",
    "questions": [
      {
        "id": "M23.1",
        "label": "Which business or website results do you track today?",
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
          "Nothing yet",
          "Not sure"
        ],
        "help": "Choose measures and add a report link or tool name if available.",
        "why": "We check what evidence exists before proposing reporting or new tracking.",
        "optionLabels": {
          "Visits": "Website visits",
          "Conversion": "Visits that lead to a purchase or inquiry",
          "Repeat business": "Returning customers",
          "Task time": "Time spent on a task",
          "System speed": "Website or tool speed"
        }
      },
      {
        "id": "M23.2",
        "label": "What starting numbers do you already have for your main goal?",
        "type": "text",
        "required": false,
        "placeholder": "For example: Approximately 20 inquiries per month, from our CRM",
        "help": "Reuse your earlier baseline; add only new detail with dates and a source.",
        "presets": [
          "Baseline needed"
        ],
        "why": "Comparable starting numbers help assess progress; estimates are welcome and revenue is optional."
      },
      {
        "id": "M23.3",
        "label": "What decisions should your reports help you make?",
        "type": "textarea",
        "required": false,
        "help": "Name the decision, report reader, and useful review frequency.",
        "presets": [
          "Help us decide what to measure"
        ],
        "why": "We focus reporting on actions your team can take, rather than collect metrics without a purpose."
      },
      {
        "id": "M23.4",
        "label": "Where do people stop before completing a purchase or request?",
        "type": "textarea",
        "required": false,
        "help": "Share a recent step-by-step report or an example; include dates and the source.",
        "why": "We use the same period and definitions to locate drop-off. Unknown steps become measurement work, not guessed conversion rates.",
        "placeholder": "For example: October store report — 2,000 visits, 90 checkout starts, 30 orders.",
        "presets": [
          "We do not track the steps yet"
        ]
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "M24",
    "title": "Ongoing care and recovery",
    "kind": "module",
    "questions": [
      {
        "id": "M24.1",
        "label": "Which recurring tasks need support after launch?",
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
        "help": "Choose the tasks you want help with.",
        "why": "We compare requests with the agreed coverage; maintenance and new feature work need clear limits.",
        "optionLabels": {
          "Integration monitoring": "Checking connections between tools"
        }
      },
      {
        "id": "M24.2",
        "label": "Which service interruptions would hurt your business most?",
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
        "help": "Choose critical failures; add busy periods and recovery needs if known.",
        "why": "These priorities guide a support discussion; they do not create response-time or recovery guarantees."
      },
      {
        "id": "M24.3",
        "label": "Who should receive alerts and approve maintenance work?",
        "type": "textarea",
        "required": true,
        "help": "Reuse a contact or name a responsible role; add a suitable update window.",
        "presets": [
          "Use the primary project contact",
          "Need to appoint a contact"
        ],
        "why": "We need an owner for access, subscriptions, and approval of disruptive or extra work."
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "M25",
    "title": "Information access and protection",
    "kind": "module",
    "questions": [
      {
        "id": "M25.1",
        "label": "Who should be able to see or change private information?",
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
        "help": "Choose roles and describe their access; do not provide real private records.",
        "why": "We use these boundaries to plan permissions for staff, customers, and providers.",
        "optionLabels": {
          "Agency for agreed work": "Starter Shifter, only for agreed work"
        }
      },
      {
        "id": "M25.2",
        "label": "What storage, retention, or deletion requirements do you have?",
        "type": "assets",
        "required": true,
        "help": "Link a policy or name a contact; add AI or third-party processing limits if relevant.",
        "presets": [
          "Needs review",
          "No requirements known"
        ],
        "why": "These requirements can affect tool selection and data flows and need confirmation by the responsible person."
      },
      {
        "id": "M25.3",
        "label": "Who can confirm data requirements and handle access or incident questions?",
        "type": "textarea",
        "required": true,
        "help": "Name the responsible person or team; link an existing requirements document if available.",
        "presets": [
          "Use the primary project contact",
          "Need to appoint a responsible contact"
        ],
        "why": "A clear owner helps us verify requirements and arrange access removal or incident escalation."
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  },
  {
    "id": "M26",
    "title": "Policies and approvals for your business",
    "kind": "module",
    "questions": [
      {
        "id": "M26.1",
        "label": "Which approved policies must the project follow?",
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
        "help": "Choose policy areas and link current approved versions if available.",
        "why": "We identify missing text, disclosures, and review needs before launch or campaign setup.",
        "optionLabels": {
          "Cookies/tracking": "Cookies and marketing tracking",
          "Advertising/claims": "Advertising and product claims",
          "Returns/cancellation": "Returns, refunds, and cancellations",
          "Privacy": "Use and protection of personal information",
          "Licenses": "Licenses or industry permissions",
          "Accessibility": "Accessibility requirements"
        }
      },
      {
        "id": "M26.2",
        "label": "Who will provide and approve missing policies or permissions?",
        "type": "textarea",
        "required": true,
        "help": "Name an owner for policy text and rights to supplied images, designs, and testimonials.",
        "presets": [
          "Need to arrange"
        ],
        "why": "We need approved text and usage rights; providing a file alone does not establish permission to publish it."
      },
      {
        "id": "M26.3",
        "label": "Could any requirement prevent a sale, campaign, launch, or data transfer?",
        "type": "textarea",
        "required": true,
        "help": "Describe known restrictions or name the person who should review them.",
        "presets": [
          "None known",
          "Needs specialist review"
        ],
        "why": "This helps us identify a blocking dependency before committing to a proposed implementation."
      }
    ],
    "description": "Answer what you know. Estimates are welcome; you can ask for help or return later."
  }
];

// Agency-facing routing reference; runtime routing lives in questionnaire.ts.
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
