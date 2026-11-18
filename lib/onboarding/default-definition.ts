import type { QuestionnaireDefinition } from "./types";
import { SHARED_PAGES } from "./shared-pages";
import { MODULE_PAGES } from "./module-pages";

/** One-time database bootstrap, fixtures and offline export only. */
export const DEFAULT_DEFINITION: QuestionnaireDefinition = {
  pages: [...SHARED_PAGES.filter(page => Number(page.id.slice(1)) <= 12), ...MODULE_PAGES, ...SHARED_PAGES.filter(page => Number(page.id.slice(1)) >= 13)],
  phases: [
  {
    "id": "meet",
    "title": "Meet your project team",
    "questionIds": [
      "P01.1",
      "P01.2",
      "P01.3",
      "P01.4",
      "P02.1"
    ],
    "placement": "before-modules"
  },
  {
    "id": "business",
    "title": "Your business at a glance",
    "questionIds": [
      "P02.2",
      "P02.3",
      "P03.1",
      "P03.2",
      "P03.3"
    ],
    "placement": "before-modules"
  },
  {
    "id": "audience",
    "title": "Your offer and audience",
    "questionIds": [
      "P04.1",
      "P04.2",
      "P04.3",
      "P05.1",
      "P05.2"
    ],
    "placement": "before-modules"
  },
  {
    "id": "goals",
    "title": "Your goals",
    "questionIds": [
      "P05.3",
      "P06.1",
      "P06.2",
      "P06.3",
      "P06.4"
    ],
    "placement": "before-modules"
  },
  {
    "id": "workflow",
    "title": "How things work today",
    "questionIds": [
      "P07.1",
      "P07.2",
      "P07.3",
      "P07.4",
      "P08.1"
    ],
    "placement": "before-modules"
  },
  {
    "id": "priorities",
    "title": "Your launch priorities",
    "questionIds": [
      "P08.2",
      "P08.3",
      "P09.1",
      "P09.2",
      "P09.3"
    ],
    "placement": "before-modules"
  },
  {
    "id": "brand",
    "title": "Your brand and requirements",
    "questionIds": [
      "P10.1",
      "P10.2",
      "P10.3",
      "P11.1",
      "P11.2"
    ],
    "placement": "before-modules"
  },
  {
    "id": "launch",
    "title": "Your launch plan",
    "questionIds": [
      "P11.3",
      "P12.1",
      "P12.2",
      "P12.3"
    ],
    "placement": "before-modules"
  },
  {
    "id": "people",
    "title": "People and agreement",
    "questionIds": [
      "P13.1",
      "P13.2",
      "P13.3",
      "P14.1"
    ],
    "placement": "after-modules"
  },
  {
    "id": "workspace",
    "title": "Billing and workspace",
    "questionIds": [
      "P14.2",
      "P14.3",
      "P15.1",
      "P15.2",
      "P15.3"
    ],
    "placement": "after-modules"
  },
  {
    "id": "feedback",
    "title": "Your onboarding experience",
    "questionIds": [
      "P16.4",
      "P16.5"
    ],
    "placement": "after-modules"
  },
  {
    "id": "final",
    "title": "Review and send",
    "questionIds": [
      "P16.1",
      "P16.2",
      "P16.3"
    ],
    "placement": "after-modules"
  }
],
  rules: [
  {
    "id": "website",
    "all": [
      {
        "questionId": "P08.1",
        "includes": [
          "Website/store/application"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M01",
      "M02"
    ]
  },
  {
    "id": "goods",
    "all": [
      {
        "questionId": "P04.1",
        "includes": [
          "Physical goods"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M03"
    ]
  },
  {
    "id": "stock",
    "all": [
      {
        "questionId": "P08.1",
        "includes": [
          "Inventory"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M04"
    ]
  },
  {
    "id": "delivery",
    "all": [
      {
        "questionId": "P08.1",
        "includes": [
          "Shipping/order workflows"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M05"
    ]
  },
  {
    "id": "bookings",
    "all": [
      {
        "questionId": "P04.1",
        "includes": [
          "Appointments"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M07"
    ]
  },
  {
    "id": "booking-action",
    "all": [
      {
        "questionId": "P08.2",
        "includes": [
          "Book"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M07"
    ]
  },
  {
    "id": "services",
    "all": [
      {
        "questionId": "P04.1",
        "includes": [
          "Project-based services",
          "Wholesale/B2B"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M08"
    ]
  },
  {
    "id": "quote",
    "all": [
      {
        "questionId": "P08.2",
        "includes": [
          "Request a quote"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M08"
    ]
  },
  {
    "id": "digital",
    "all": [
      {
        "questionId": "P04.1",
        "includes": [
          "Digital products/courses"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M09"
    ]
  },
  {
    "id": "digital-action",
    "all": [
      {
        "questionId": "P08.2",
        "includes": [
          "Download/access content"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M09"
    ]
  },
  {
    "id": "membership",
    "all": [
      {
        "questionId": "P04.1",
        "includes": [
          "Subscriptions/memberships"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M10"
    ]
  },
  {
    "id": "subscribe",
    "all": [
      {
        "questionId": "P08.2",
        "includes": [
          "Subscribe"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M10"
    ]
  },
  {
    "id": "marketplace",
    "all": [
      {
        "questionId": "P04.1",
        "includes": [
          "Marketplace connecting buyers and providers"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M11"
    ]
  },
  {
    "id": "market-action",
    "all": [
      {
        "questionId": "P08.2",
        "includes": [
          "Connect as buyers and providers"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M11"
    ]
  },
  {
    "id": "internal",
    "all": [
      {
        "questionId": "P04.1",
        "includes": [
          "Internal operations"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M12"
    ]
  },
  {
    "id": "internal-action",
    "all": [
      {
        "questionId": "P08.2",
        "includes": [
          "Submit/approve/track work"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M12"
    ]
  },
  {
    "id": "invoices",
    "all": [
      {
        "questionId": "P08.1",
        "includes": [
          "Invoicing"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M13"
    ]
  },
  {
    "id": "payments",
    "all": [
      {
        "questionId": "P08.2",
        "includes": [
          "Buy",
          "Subscribe"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M13"
    ]
  },
  {
    "id": "social",
    "all": [
      {
        "questionId": "P08.1",
        "includes": [
          "Social presence"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M14"
    ]
  },
  {
    "id": "campaigns",
    "all": [
      {
        "questionId": "P08.1",
        "includes": [
          "Campaigns/lead generation"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M15",
      "M16"
    ]
  },
  {
    "id": "seo",
    "all": [
      {
        "questionId": "P08.1",
        "includes": [
          "SEO and search visibility"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M15"
    ]
  },
  {
    "id": "email",
    "all": [
      {
        "questionId": "P08.1",
        "includes": [
          "Email and WhatsApp marketing"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M16"
    ]
  },
  {
    "id": "support",
    "all": [
      {
        "questionId": "P08.1",
        "includes": [
          "Customer handling"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M17"
    ]
  },
  {
    "id": "chat",
    "all": [
      {
        "questionId": "P08.1",
        "includes": [
          "Chatbot"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M18",
      "M19"
    ]
  },
  {
    "id": "automation",
    "all": [
      {
        "questionId": "P08.1",
        "includes": [
          "Task automation",
          "ERP/CRM or other connections"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M20",
      "M21"
    ]
  },
  {
    "id": "measurement",
    "all": [
      {
        "questionId": "P08.1",
        "includes": [
          "Performance/reporting"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M23"
    ]
  },
  {
    "id": "care",
    "all": [
      {
        "questionId": "P08.1",
        "includes": [
          "Maintenance"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M24"
    ]
  },
  {
    "id": "commerce-ops",
    "all": [
      {
        "moduleId": "M03"
      },
      {
        "questionId": "P08.2",
        "includes": [
          "Buy"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M04",
      "M05"
    ]
  },
  {
    "id": "measure-sales-marketing",
    "all": [],
    "any": [
      {
        "questionId": "P08.2",
        "includes": [
          "Buy"
        ]
      },
      {
        "moduleId": "M14"
      },
      {
        "moduleId": "M15"
      },
      {
        "moduleId": "M16"
      }
    ],
    "modules": [
      "M23"
    ]
  },
  {
    "id": "marketing-policies",
    "all": [],
    "any": [
      {
        "moduleId": "M14"
      },
      {
        "moduleId": "M15"
      },
      {
        "moduleId": "M16"
      }
    ],
    "modules": [
      "M26"
    ]
  },
  {
    "id": "special-requirements",
    "all": [],
    "any": [
      {
        "questionId": "P11.1",
        "except": [
          "None known",
          "None"
        ]
      },
      {
        "questionId": "P11.1",
        "states": [
          "unknown",
          "help"
        ]
      },
      {
        "questionId": "P11.2",
        "includes": [
          "Financial information",
          "Health or other sensitive records",
          "Information about minors",
          "Staff-only information",
          "Different user roles",
          "Not sure"
        ]
      },
      {
        "questionId": "P11.2",
        "states": [
          "unknown",
          "help"
        ]
      },
      {
        "questionId": "P11.3",
        "includes": [
          "Needs assessment"
        ]
      },
      {
        "questionId": "P11.3",
        "states": [
          "unknown",
          "help"
        ]
      }
    ],
    "modules": [
      "M25",
      "M26"
    ]
  },
  {
    "id": "transaction-policies",
    "all": [
      {
        "questionId": "P08.2",
        "includes": [
          "Buy",
          "Book",
          "Subscribe",
          "Download/access content",
          "Register/sign in",
          "Connect as buyers and providers"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M26"
    ]
  },
  {
    "id": "supplier-model",
    "all": [],
    "any": [
      {
        "questionId": "P04.1",
        "textIncludes": [
          "print on demand",
          "print-on-demand",
          "made to order",
          "made-to-order",
          "personalization",
          "personalisation",
          "dropship"
        ]
      },
      {
        "questionId": "P04.2",
        "textIncludes": [
          "print on demand",
          "print-on-demand",
          "made to order",
          "made-to-order",
          "personalization",
          "personalisation",
          "dropship"
        ]
      }
    ],
    "modules": [
      "M06"
    ]
  },
  {
    "id": "personalization",
    "all": [
      {
        "moduleId": "M03"
      },
      {
        "questionId": "M03.2",
        "includes": [
          "Text/image personalization"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M06"
    ]
  },
  {
    "id": "production-ops",
    "all": [
      {
        "moduleId": "M06"
      }
    ],
    "any": [],
    "modules": [
      "M03",
      "M05"
    ]
  },
  {
    "id": "booking-money",
    "all": [
      {
        "moduleId": "M07"
      },
      {
        "questionId": "M07.3",
        "textIncludes": [
          "deposit",
          "payment",
          "collect money",
          "collecting money",
          "charge",
          "paid",
          "refund"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M13"
    ]
  },
  {
    "id": "migration",
    "all": [
      {
        "moduleId": "M02"
      },
      {
        "questionId": "M02.3",
        "includes": [
          "URLs/search traffic",
          "Content",
          "Customer access",
          "Integrations"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M22"
    ]
  },
  {
    "id": "replacement",
    "all": [
      {
        "moduleId": "M02"
      },
      {
        "questionId": "M01.1",
        "includes": [
          "Replace what we have",
          "Replacing it",
          "Replacing what you have",
          "Replace an existing site"
        ]
      },
      {
        "questionId": "P07.1",
        "textIncludes": [
          "https://",
          "http://"
        ]
      }
    ],
    "any": [],
    "modules": [
      "M22"
    ]
  }
]
};
