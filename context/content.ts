/**
 * Starter Shifter — single source of truth for all customer-facing copy and
 * static data shown in the frontend.
 *
 * Every heading, paragraph, label, button, placeholder, navigation entry,
 * FAQ answer, plan, and project card lives here. To change what the site says
 * or the data it displays, edit this file only.
 *
 * Icons are referenced by string keys (e.g. "store"); the component maps a key
 * to its lucide-react icon so this file stays plain data with no React imports.
 */

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  status: string;
  url?: string;
};

/** A title rendered across two lines with an optional highlighted phrase. */
export type RichTitle = { lines: string[]; mark?: string };

/** A single line of navigation (header dropdown or footer column). */
export type NavItem = { icon: string; title: string; description: string; href: string };

export const content = {
  brand: {
    name: "Starter Shifter",
    nameLower: "starter shifter",
    nameFirst: "starter",
    nameSecond: "shifter",
    homeAriaLabel: "Starter Shifter home",
    tagline: "Your business, connected",
    footerNote: "From your first online store to the workflows behind it. Built around your business.",
    footerWorldwide: "Working with businesses worldwide.",
    footerSignature: "starter shifter",
  },

  common: {
    skipToContent: "Skip to content",
    backToHome: "Back to home",
    policyAwaitingApproval: "Policy awaiting approval",
    prepareProjectBrief: "Prepare a project brief",
    policyNavigationLabel: "Policy information",
    privacy: "Privacy",
    cookies: "Cookies",
    serviceTerms: "Service terms",
    exploreServices: "Explore our services",
    planYourProject: "Plan your project",
    supportAndCare: "Support & care",
    viewAllProducts: "View All Products",
    getStarted: "Get started",
    resourceNoteDefault: "Starter Shifter · Resources",
    openNavigation: "Open navigation",
    closeNavigation: "Close navigation",
    loadingPage: "Loading page",
    explorePrefix: "Explore ",
    illustrationSuffix: " illustration",
    loading: {
      site: "Loading Starter Shifter",
      signInOptions: "Loading sign-in options",
      onboardingInformation: "Loading your onboarding information",
      workspace: "Loading your workspace",
      projectBrief: "Loading your project brief",
    },
    opensInNewTab: "opens in a new tab",
  },

  metadata: {
    home: {
      title: "Starter Shifter — Your business, connected",
      description:
        "Ecommerce, creative direction, automation, and connected operations. Starter Shifter helps businesses build their next chapter online, with a scope shaped around their needs.",
    },
    about: {
      title: "About us — Starter Shifter",
      description:
        "Meet Starter Shifter, an agency helping businesses worldwide connect their websites, social presence, and operations through research, design, development, and automation.",
    },
    faq: {
      title: "FAQs — Starter Shifter",
      description:
        "Answers about Starter Shifter’s Basic and Pro plans, onboarding, delivery stages, websites, integrations, ongoing support, and how to start a project.",
    },
    howWeWork: {
      title: "How we work — Starter Shifter",
      description:
        "The delivery stages Starter Shifter uses from discovery and scope through design, build, launch, and ongoing support, including onboarding requirements and the first research handoff.",
    },
    products: {
      title: "Products & Templates — Starter Shifter",
      description:
        "Explore Starter Shifter’s websites, applications, and connected experiences. Concept previews are labelled separately from completed client work.",
    },
    support: {
      title: "Support & care — Starter Shifter",
      description:
        "How Starter Shifter handles maintenance, support, and ongoing improvement after launch, including Basic and Pro coverage boundaries.",
    },
    privacy: {
      title: "Privacy information — Starter Shifter",
    },
    cookies: {
      title: "Cookie information — Starter Shifter",
    },
    terms: {
      title: "Service terms information — Starter Shifter",
    },
    onboardingPrivacy: {
      title: "Your onboarding information — Starter Shifter",
    },
    login: {
      title: "Join us | Starter Shifter",
    },
    dashboard: {
      title: "Client workspace — Starter Shifter",
    },
    dashboardPreview: {
      title: "Your workspace — Starter Shifter",
    },
    onboarding: {
      title: "Your project brief — Starter Shifter",
    },
    onboardingPreview: {
      title: "Onboarding preview — Starter Shifter",
    },
  },

  navigation: {
    sections: [
      {
        label: "Services",
        items: [
          { icon: "store", title: "Ecommerce websites", description: "Storefronts shaped around how you sell.", href: "/services/ecommerce" },
          { icon: "megaphone", title: "Social & marketing", description: "SEO, email, and social presence, planned and delivered.", href: "/services/social-campaigns" },
          { icon: "messagesSquare", title: "Chatbots & automation", description: "Common questions answered, the rest routed.", href: "/services/chatbots-automation" },
          { icon: "package", title: "Inventory systems", description: "A clear, reliable view of your stock.", href: "/services/inventory" },
          { icon: "truck", title: "Shipping & orders", description: "Fewer manual steps between order and dispatch.", href: "/services/shipping-orders" },
          { icon: "database", title: "ERP & CRM integrations", description: "Your business tools, working together.", href: "/services/erp-crm-integrations" },
          { icon: "wrench", title: "Maintenance & support", description: "Ongoing technical care after launch.", href: "/services/maintenance-support" },
          { icon: "gauge", title: "Performance improvement", description: "Find and address the bottlenecks.", href: "/services/performance" },
          { icon: "penTool", title: "Research & creative direction", description: "Market insight and Figma design drafts.", href: "/services/research-creative-direction" },
          { icon: "presentation", title: "Presentations & planning", description: "A shared view of your project, early.", href: "/services/project-planning" },
        ],
        footer: {
          text: "Basic for $2,500 once. Pro for $2,500 plus $500/month.",
          linkLabel: "See pricing",
          href: "#pricing",
        },
      },
      {
        label: "Resources",
        items: [
          { icon: "route", title: "How we work", description: "Delivery stages from discovery to launch.", href: "/how-we-work" },
          { icon: "circleQuestionMark", title: "FAQs", description: "Common questions, answered plainly.", href: "/faq" },
          { icon: "folderOpen", title: "Products & Templates", description: "Explore our websites and applications.", href: "/products" },
          { icon: "lifeBuoy", title: "Support & care", description: "Help for projects after launch.", href: "/support" },
        ],
      },
    ] as { label: string; items: NavItem[]; footer?: { text: string; linkLabel: string; href: string } }[],
    directLinks: [
      { icon: "users", title: "About", description: "Who Starter Shifter is and how we work.", href: "/about" },
      { icon: "pricing", title: "Pricing", description: "Compare Basic setup and Pro ongoing support.", href: "/#pricing" },
    ] as NavItem[],
    cta: "Get started",
    mainNavigationLabel: "Main navigation",
    mobileNavigationLabel: "Mobile navigation",
  },

  footer: {
    ariaLabel: "Starter Shifter footer",
    socialProfilesLabel: "Social profiles",
    policyNote: "Policy status and current information.",
    navigation: [
      {
        key: "company",
        title: "Company",
        links: [
          ["About us", "/about"],
          ["How we work", "/how-we-work"],
          ["Products & Templates", "/products"],
          ["Plans & pricing", "/#pricing"],
        ],
      },
      {
        key: "services",
        title: "Services",
        links: [
          ["Web applications", "/#services"],
          ["Social media", "/#services"],
          ["AI workflows", "/#services"],
          ["Connected operations", "/#process"],
          ["Maintenance & growth", "/#pricing"],
        ],
      },
      {
        key: "resources",
        title: "Resources",
        links: [
          ["Client login", "/login"],
          ["How we work", "/how-we-work"],
          ["FAQs", "/faq"],
          ["Project brief", "/project-brief"],
          ["Support & care", "/support"],
        ],
      },
      {
        key: "information",
        title: "Information",
        links: [
          ["Privacy", "/policies/privacy"],
          ["Cookies", "/policies/cookies"],
          ["Service terms", "/policies/terms"],
        ],
      },
    ] as { key: string; title: string; links: [string, string][] }[],
  },

  landing: {
    hero: {
      eyebrow: "Your e‑commerce & digital growth agency",
      titleLines: ["Your next chapter", "starts with a better store."],
      description:
        "From your first online store to the systems behind it. We bring design, e‑commerce, and connected operations together, built around your business.",
      primaryCta: "Let’s build your store",
      secondaryCta: "Explore our services",
      note: "Your business. Your scope. Wherever you are.",
    },
    services: {
      kicker: "What we do",
      titleLines: ["Good on the outside.", "Connected on the inside."],
      intro:
        "Your online presence. Your social voice. The workflows behind it. Three connected services, shaped around your business.",
      cards: [
        {
          title: "Web application",
          text: "Websites and web applications, with design and development shaped around how your business works.",
          visual: "web",
        },
        {
          title: "Social media & marketing",
          text: "SEO management, email marketing, and social media across WhatsApp, LinkedIn, Pinterest, and more.",
          visual: "social",
        },
        {
          title: "AI workflow",
          text: "Connected tools, task automation, and customer chat flows that bring your team in when needed.",
          visual: "ai",
        },
      ] as { title: string; text: string; visual: "web" | "social" | "ai" }[],
      illustrationLabels: {
        web: "Explore the web application illustration",
        social: "Explore the social media illustration",
        ai: "Explore the AI workflow illustration",
      },
    },
    projects: {
      kicker: "Products & Templates",
      titleLines: ["A closer look at", "what we build."],
      intro:
        "Websites, applications, and connected experiences. Explore the collection, one screen at a time.",
      cta: "View All Products",
      showcaseLabel: "Project showcase",
    },
    process: {
      kicker: "How we bring you online",
      titleLines: ["From understanding your business", "to connecting it online."],
      intro:
        "Five stages of a connected digital presence. We agree which services your project needs, then build around that scope.",
      linkLabel: "Read the full delivery guide",
      steps: [
        {
          icon: "scanSearch",
          title: ["Research &", "direction"],
          description:
            "We get to know your business, study your market, and analyse the competition. Those insights shape the plan and an initial design direction for your review.",
          details: ["Business research", "Market analysis", "Competitor insights"],
          note: "Research depth and design deliverables are agreed for your project.",
          phase: "Understand",
          tone: "research",
        },
        {
          icon: "globe",
          title: ["Your business,", "built online"],
          description:
            "We design and build your website or web application on Shopify or WordPress, with WooCommerce when you need a store. The platform and features follow how your business works.",
          details: ["Shopify or WordPress", "Design & development", "Launch & handover"],
          note: "You supply business content, product details, account access, and approvals.",
          phase: "Build",
          tone: "build",
        },
        {
          icon: "messagesSquare",
          title: ["A social", "presence"],
          description:
            "We set up your digital marketing: SEO management, email marketing, and social media across WhatsApp, LinkedIn, Pinterest, and the other channels your business needs. The focus is making you easier to find and understand.",
          details: ["SEO management", "Email marketing", "WhatsApp, LinkedIn & Pinterest"],
          note: "Basic includes the full marketing setup — SEO, email, and social media — as one-time work. Pro adds lead generation and growth work, with no guaranteed lead volume.",
          phase: "Establish",
          tone: "social",
        },
        {
          icon: "network",
          title: ["AI that helps", "you respond"],
          description:
            "We set up chatbots for common customer questions and support workflows, connected to your social channels where supported. Conversations that need your team are handed over to a person.",
          details: ["Customer chatbots", "Supported social channels", "Human handoff"],
          note: "Channel access, approved FAQs, and software usage limits shape the setup.",
          phase: "Automate",
          tone: "automation",
        },
        {
          icon: "chartNoAxesCombined",
          title: ["Connected.", "Cared for."],
          description:
            "We maintain and improve the agreed systems, and connect supported business tools: ERP for operations and CRM for customer relationships. Shipping and invoice workflows can be part of those integrations.",
          details: ["Maintenance & performance", "ERP & CRM connections", "Shipping & invoicing"],
          note: "Integrations depend on third-party capabilities. Ongoing care is billed monthly; third-party charges are separate.",
          phase: "Connect & maintain",
          tone: "care",
        },
      ] as {
        icon: string;
        title: [string, string];
        description: string;
        details: string[];
        note: string;
        phase: string;
        tone: string;
      }[],
    },
    about: {
      kicker: "A little about us",
      titleLines: ["Your business online.", "Everything working together."],
      intro: "We’re Starter Shifter. Your website, social presence, and workflows, built to work together.",
      benefits: [
        { type: "research", title: "Clarity before you build", description: "Research that gives your next move direction." },
        { type: "integrations", title: "Your tools, connected", description: "Supported connections. Fewer manual steps." },
        { type: "website", title: "Your business, online", description: "A website or store shaped around you." },
        { type: "social", title: "A consistent social presence", description: "Your brand, carried into pages and templates." },
        { type: "automation", title: "Support with a human touch", description: "AI for the routine. Your team when it matters." },
        { type: "performance", title: "See what needs attention", description: "Find bottlenecks. Focus on better performance." },
      ] as { type: string; title: string; description: string }[],
      ctaTitleLines: ["Let’s make your", "next move digital."],
      ctaLabel: "Talk about your project",
    },
    pricing: {
      label: "Our plans",
      title: "Choose the support you need.",
      recommendedBadge: "Recommended",
      plans: [
        {
          id: "basic",
          name: "Basic plan",
          description: "The full build and digital marketing setup, delivered once.",
          price: "$2,500",
          payment: "One-time payment",
          billing: "Your application and marketing, built and handed over.",
          includes: "What’s included",
          features: [
            "Business, market & competitor research",
            "Figma design & creative direction",
            "Website or ecommerce application development",
            "SEO management",
            "Email marketing",
            "Social media marketing — WhatsApp, LinkedIn, Pinterest & more",
            "AI chatbot & customer-support automation setup",
            "Inventory, shipping & invoice workflow setup",
            "Supported ERP & CRM integrations",
            "Launch & handover",
          ],
          boundary:
            "One-time build and marketing setup. We don’t promise lead generation or run ongoing maintenance. You pay hosting, domains, ad spend, and payment fees.",
          action: "Get Basic plan",
          icon: "globe",
        },
        {
          id: "pro",
          name: "Pro plan",
          description: "Everything in Basic, plus a team to maintain and grow it.",
          price: "$2,500",
          payment: "One-time setup",
          monthly: "$500",
          monthlyPeriod: "/ month",
          billing: "for maintenance & lead generation",
          includes: "Everything in Basic, plus",
          features: [
            "Ongoing maintenance & technical support",
            "Performance enhancement & monitoring",
            "Lead generation & campaign management",
            "Keeping SEO & marketing current",
            "Business growth strategy & planning",
            "Customer enquiries & client handling",
            "Chatbot & automation management",
            "Ongoing workflow & integration upkeep",
          ],
          boundary:
            "We actively run lead generation and help your business grow. Lead volumes aren’t guaranteed — if an approach isn’t working, we restructure and test others. Advertising spend is separate.",
          action: "Get Pro plan",
          icon: "handshake",
        },
      ] as {
        id: string;
        name: string;
        description: string;
        price: string;
        payment: string;
        billing: string;
        monthly?: string;
        monthlyPeriod?: string;
        includes: string;
        features: string[];
        boundary: string;
        action: string;
        icon: string;
      }[],
      terms:
        "Deliverables, quantities, supported tools, and monthly coverage are agreed before work begins. You provide business content, account access, and approvals. Hosting, domains, software, licenses, usage fees, ad spend, and payment or shipping charges are paid by you and are separate from agency fees. Additional services outside the three groups are quoted separately.",
      footerLink: "See what ongoing support covers",
    },
    faq: {
      kicker: "A little more clarity",
      titleLines: ["Good questions.", "Clear answers."],
      intro:
        "Every business starts somewhere different. Here’s what to know before we start together.",
      linkLabel: "Browse all FAQs",
      questions: [
        {
          id: "services",
          question: "What exactly is included?",
          answer:
            "Basic covers the full build and the digital marketing setup as one-time work: your website or ecommerce application, SEO management, email marketing, and social media marketing across WhatsApp, LinkedIn, Pinterest, and other channels as your requirements need. Pro adds everything in Basic, plus $500 per month for ongoing maintenance, performance, and lead generation. Services outside these three areas are quoted separately.",
        },
        {
          id: "price",
          question: "What’s the difference between Basic and Pro?",
          answer:
            "Basic is $2,500 one-time and delivers the full application build and marketing setup, then hands it over. Pro is $2,500 for the same setup plus $500 per month for ongoing maintenance, performance enhancement, and lead generation. Basic does not include lead generation or ongoing maintenance. Lead volumes aren’t guaranteed in either plan.",
        },
        {
          id: "costs",
          question: "Are there extra or hidden fees?",
          answer:
            "Hosting, domains, ad spend, payment fees, and other third-party expenses are paid by you, not included in the agency fee. If you need services beyond the three areas we cover, or work outside the agreed scope, that is quoted separately.",
        },
        {
          id: "getting-started",
          question: "What do you need from us to get started?",
          answer:
            "A signed contract, a 40% advance, and your company and project details. You then complete onboarding and provide any additional information or documents through your dashboard — including catalogs and product images so we can build accurate mockups.",
        },
        {
          id: "timeline",
          question: "How long will our project take?",
          answer:
            "The first handoff of research and a Figma design draft is targeted within a maximum of 3–4 days after onboarding is complete. After that we schedule two Google Meet calls each week to share progress and updates until your application is built and handed over.",
        },
        {
          id: "integrations",
          question: "Can you connect the tools we already use?",
          answer:
            "We offer integrations between stores, inventory, shipping, and business systems such as ERP and CRM tools. We review your exact systems, available access, and platform limitations before confirming compatibility and the work involved.",
        },
        {
          id: "support",
          question: "Can you help after launch?",
          answer:
            "Yes. Pro includes $500 per month for ongoing maintenance and support: we enhance performance, keep your SEO and marketing current, and work toward better sales. Basic is one-time, but every one-time client is still supported for the full first month from onboarding — we handle requested changes and bug fixes. After that month, if you're not continuing with Pro, further help is quoted based on the issue and services you need.",
        },
        {
          id: "ownership",
          question: "Who owns the website and accounts after handover?",
          answer:
            "You do. After handover you manage the website, its accounts, and its content. We don’t require you to continue with our services unless you want ongoing support.",
        },
        {
          id: "results",
          question: "Do you guarantee leads or sales?",
          answer:
            "We can’t promise a specific number, because results depend mostly on the market. What Pro clients get is active, ongoing lead generation: we work to bring in leads and sales, and if one approach isn’t working, we restructure it and test other approaches to find what fits your business.",
        },
      ] as { id: string; question: string; answer: string }[],
    },
    contact: {
      intro: "Your next chapter",
      titleLines: ["Let’s make your", "next move."],
      description:
        "A better online store, a stronger social presence, or connected workflows. Start with what your business needs.",
      cta: "Plan your project",
      dialogTitle: "Tell us what you have in mind.",
      dialogDescriptionWithEmail:
        "Create a short project brief, then open it in your email app to send to us.",
      dialogDescriptionWithoutEmail:
        "Put your ideas into a short brief you can download and share. This form saves a file to your device; it does not send an enquiry.",
      secondaryLink: "Explore our services",
    },
  },

  pages: {
    about: {
      eyebrow: "About Starter Shifter",
      note: "Working with businesses worldwide",
      titleLines: ["Your business.", "Its next chapter"],
      titleMark: "online.",
      lede:
        "We’re Starter Shifter, an agency helping businesses bring their products and operations online. We connect the website your customers see with the tools and workflows behind it.",
      primaryCta: "Tell us about your business",
      secondaryCta: "Explore our plans",
      facts: [
        { label: "Focus", value: "Web, social & AI workflows" },
        { label: "Reach", value: "Businesses worldwide" },
        { label: "Ways to work", value: "Basic setup or Pro support" },
      ],
      statementEyebrow: "The short version",
      statementTitle:
        "We connect the website your customers see with the workflows your team relies on.",
      statementParagraphs: [
        "We work with businesses worldwide, across industries. Whether you’re establishing an online presence or improving an existing setup, the starting point is your business and what it needs.",
        "Our approach brings research, design, development, and supported integrations into one agreed plan, so each part has a clear purpose.",
      ],
      workLabel: "What we do",
      workTitleLines: ["Three areas.", "One connected plan."],
      workAside:
        "Three areas of work, shaped around the way your business sells, communicates, and operates.",
      workLink: "Explore our services",
      services: [
        {
          icon: "globe",
          title: "Web applications",
          description:
            "Websites and ecommerce stores shaped around your products and customers. We bring research, creative direction, and development together on Shopify or WordPress with WooCommerce, with the platform and features agreed for your project.",
          tags: ["Shopify", "WordPress + WooCommerce", "Design & build"],
        },
        {
          icon: "megaphone",
          title: "Social media & digital marketing",
          description:
            "SEO management, email marketing, and social media marketing across WhatsApp, LinkedIn, Pinterest, and other channels as your requirements need. For Pro engagements, we also agree the ongoing campaigns and lead generation your business needs.",
          tags: ["SEO", "Email marketing", "WhatsApp, LinkedIn & Pinterest"],
        },
        {
          icon: "network",
          title: "AI workflows",
          description:
            "Chatbots and supported automations that help answer common questions, route enquiries, and reduce repetitive work. We can connect agreed inventory, shipping, invoicing, and business tools where the platforms support it.",
          tags: ["Chatbots", "Customer support", "Supported integrations"],
        },
      ] as { icon: string; title: string; description: string; tags: string[] }[],
      processLabel: "How we work",
      processTitleLines: ["Research first.", "A clear path forward."],
      processIntro:
        "Your knowledge of the business and our research guide the work. Shared decisions keep the design, build, and handover aligned.",
      gateLabel: "Before work begins",
      gateItems: ["Signed contract", "40% advance", "Company & project details"],
      steps: [
        {
          title: "Understand your business",
          description:
            "We discuss your goals, products, customers, and existing systems, then agree the deliverables, responsibilities, timeline, and costs.",
        },
        {
          title: "Find a shared direction",
          description:
            "Company, market, and competitor research informs a basic Figma design draft. You review the direction and share feedback before we move into the agreed build and connected workflows.",
        },
        {
          title: "Build, launch, and plan what follows",
          description:
            "We implement and test the selected website and workflows, with your content, account access, and approvals. Handover and any ongoing maintenance or growth work follow the coverage agreed for your plan.",
        },
      ] as { title: string; description: string }[],
      scopeLabel: "Working together",
      scopeTitleLines: ["Clear scope.", "Shared expectations."],
      scopeIntro:
        "Before work begins, we define the selected services, what you provide, and what sits outside agency fees.",
      scope: [
        {
          label: "What you receive",
          description:
            "Basic covers the full application build plus digital marketing — SEO management, email marketing, and social media marketing — as one-time work. Pro adds ongoing maintenance, performance enhancement, and lead generation.",
        },
        {
          label: "What you provide",
          description:
            "Agreed content, business information, product catalogs and images, account access, and approvals. Timelines depend on these inputs and on third-party platform approvals.",
        },
        {
          label: "Kept separate",
          description:
            "Platform subscriptions, hosting, domains, paid apps, usage charges, ad spend, and payment fees are paid by you, separate from agency fees.",
        },
      ] as { label: string; description: string }[],
      scopeCta: "Compare Basic and Pro",
      scopeFooter:
        "Deliverables, quantities, supported tools, revisions, and support coverage are agreed before work begins.",
    },

    faq: {
      eyebrow: "Resources / FAQs",
      note: "The details, answered plainly",
      titleLines: ["Good questions.", "Clear answers."],
      titleMark: "Clear answers.",
      description:
        "The practical details about scope, pricing, timelines, integrations, and support — written the way we’d explain them in a first conversation.",
      facts: [
        { label: "Plans", value: "Basic & Pro" },
        { label: "Onboarding", value: "Contract, advance & details" },
        { label: "Coverage", value: "Agreed per project" },
      ],
      sectionIndex: "01",
      sectionLabel: "Common questions",
      sectionTitleLines: ["Straight answers,", "without the small print."],
      sectionIntro:
        "If your question isn’t here, start a project brief and tell us what you’re trying to solve. We’ll answer directly.",
      jumpTo: "Jump to",
      categoriesLabel: "FAQ categories",
      groups: [
        {
          id: "faq-plans",
          label: "Plans & scope",
          questions: [
            {
              question: "What is Starter Shifter?",
              answer:
                "Starter Shifter is an agency that helps businesses bring their products and operations online. We work across websites and ecommerce applications, social presence, chatbots and automation, integrations, and the systems behind them. Clients can be based anywhere, and each scope is shaped around the business.",
            },
            {
              question: "What’s the difference between Basic and Pro?",
              answer:
                "Basic is $2,500 one-time. It covers the full application build plus the digital marketing setup: research and design, website or ecommerce application development, SEO management, email marketing, and social media marketing across WhatsApp, LinkedIn, Pinterest, and other channels as required, plus chatbot and automation setup, supported operational integrations, and launch. You manage lead generation and ongoing work after handover. Pro is $2,500 for the same setup plus $500 per month for ongoing maintenance, performance enhancement, lead generation, and keeping SEO and marketing current. Deliverables and coverage are agreed in advance; lead volumes aren’t guaranteed, and third-party costs such as hosting, domains, ad spend, and payment fees are paid by you.",
            },
            {
              question: "Can we choose only part of a plan?",
              answer:
                "Yes. Basic and Pro are starting points for the most common scopes. If you need a smaller, larger, or different engagement, we can discuss a tailored scope. The selected work, price, timeline, and responsibilities are agreed before work begins.",
            },
            {
              question: "Are there costs beyond the plan price?",
              answer:
                "Yes. Hosting, domains, ad spend, payment processing fees, and other third-party expenses are paid by you, separate from agency fees. Platform subscriptions, themes, apps, plugins and licenses, ERP, CRM, chatbot and other software subscriptions, usage charges, asset licensing, and shipping or fulfillment charges are also your responsibility. Services outside the three areas we cover, or work outside the agreed scope, are quoted separately.",
            },
            {
              question: "Do you guarantee leads, sales, or growth?",
              answer:
                "We can’t promise a specific number of leads or sales — results depend mostly on the market and factors outside our control. What we do promise for Pro is the work itself: we actively run lead generation and help your business grow, and if one approach isn’t producing results we restructure it and test other approaches to find what fits. We’ll be working on it with you, not just handing you a setup.",
            },
            {
              question: "How does payment work?",
              answer:
                "Onboarding follows a signed shared contract and a 40% advance, along with your company and project details. Remaining payment timing and other commercial terms are set out in your contract. Basic is a one-time fee; Pro combines a setup fee with a monthly charge. Other payment or legal terms are agreed individually.",
            },
          ],
        },
        {
          id: "faq-process",
          label: "Process & timing",
          questions: [
            {
              question: "What do you need from us to get started?",
              answer:
                "A signed shared contract, a 40% advance, and your company and project details. Depending on the scope, we may also need product information, brand assets, access to existing tools, policies, tax and shipping rules, and a contact who can review and approve work.",
            },
            {
              question: "How long will our project take?",
              answer:
                "The first handoff of research and a Figma design draft is targeted within a maximum of 3–4 days after onboarding is complete. The full build then depends on the scope, technical requirements, content readiness, third-party approvals, and review cycles. We schedule two Google Meet calls each week to share progress, and we agree milestones and timing in your proposal.",
            },
            {
              question: "What is the intended early handoff?",
              answer:
                "After the signed contract, 40% advance, and company/project details are complete, we target a first handoff within 3–4 days of company, market, and competitor research plus a basic Figma design draft with variants. The exact clock start, research depth, number of variants, and revision allowance are confirmed for your project. The handoff is a direction-setting step, not the completed website or all integrations.",
            },
            {
              question: "How do revisions work?",
              answer:
                "You review the agreed work at the decision points in your scope and share consolidated feedback. The revision allowance is agreed before work begins. If a request changes the agreed scope or adds new work, we define the extra work, price, and timeline before proceeding.",
            },
            {
              question: "What happens if our content or access is late?",
              answer:
                "Timelines depend on the inputs we agree. If content, account access, approvals, or third-party responses arrive late, the schedule may shift. We flag the dependency and agree a revised plan rather than silently absorbing the delay.",
            },
          ],
        },
        {
          id: "faq-build",
          label: "Websites & integrations",
          questions: [
            {
              question: "Which platforms do you build on?",
              answer:
                "We build websites and ecommerce applications on Shopify or WordPress, using WooCommerce when a store is needed. If another platform or website builder might fit better, we review support and feasibility before committing. The platform approach is confirmed in your proposal.",
            },
            {
              question: "Can you redesign or migrate an existing site?",
              answer:
                "We can discuss a redesign or migration, but it is not automatically included in Basic or Pro. We first review the current site, content, products, integrations, and redirects. The migration scope, risks, and price are agreed separately.",
            },
            {
              question: "Can you connect the tools we already use?",
              answer:
                "We offer integrations between stores, inventory, shipping, invoicing, and business systems such as ERP and CRM tools. Compatibility depends on the exact systems, versions, access, APIs, and platform limits. We review those before confirming what can be connected and what the work involves.",
            },
            {
              question: "Do you build native mobile apps?",
              answer:
                "Our confirmed work is websites and web applications. If you’re considering a native mobile app, raise it early so we can confirm whether it fits the engagement. It is not assumed to be part of a website or ecommerce build.",
            },
            {
              question: "Can you set up chatbots and social automation?",
              answer:
                "Yes, as an agreed setup. We design the use cases, connect supported channels, use approved knowledge sources, set boundaries, and arrange a human handoff where needed. Exact channel support, conversation volume, permissions, and usage costs are confirmed during feasibility. We don’t promise fully autonomous support or every social network.",
            },
          ],
        },
        {
          id: "faq-after-launch",
          label: "After launch",
          questions: [
            {
              question: "Can you help after launch?",
              answer:
                "Yes. Pro includes ongoing maintenance and support for $500 per month in addition to its $2,500 setup fee. We enhance performance, keep your SEO and marketing current, and work toward better sales. Basic is a one-time setup, but every one-time client is still supported for the full first month from onboarding — we handle requested changes and bug fixes. After that first month, if you’re not continuing with Pro, further help is quoted based on the issue and services you need.",
            },
            {
              question: "What does maintenance cover?",
              answer:
                "Typical coverage can include routine checks, applicable updates and compatibility checks, bug fixes, monitoring, backup and recovery tasks where agreed, and support handling. The exact list depends on your systems and the coverage you purchase. New features and work outside that coverage need their own scope.",
            },
            {
              question: "Do you offer 24/7 support or a guaranteed response time?",
              answer:
                "We don’t publish a universal 24/7 or response-time promise. Support hours, channels, capacity, response targets, and escalation are agreed in your support scope. If you need a specific service level, raise it before the engagement so we can confirm whether it can be met.",
            },
            {
              question: "Who owns the website and accounts after handover?",
              answer:
                "You do. After handover you manage the website, its accounts, and its content. We don’t require you to continue with our services unless you want ongoing support. Platform accounts, licenses, and third-party services may remain subject to their own terms.",
            },
            {
              question: "Can you run our ads and lead generation?",
              answer:
                "Pro includes agency-managed lead generation and campaign work within the agreed scope. Basic excludes agency-run lead generation. We work actively to bring in leads and sales, and if an approach isn’t working we restructure and test others. Advertising spend is always paid by you, separate from agency fees, and lead volumes aren’t guaranteed — results depend on the market. Channels, campaign scope, content quantities, and reporting cadence are agreed in advance.",
            },
          ],
        },
        {
          id: "faq-working",
          label: "Working together",
          questions: [
            {
              question: "How do we start a project?",
              answer:
                "Start with a project brief on this site. We use it to understand your business and goals, then discuss the right scope. If it’s a fit, you receive a proposal with deliverables, exclusions, pricing, timeline, and responsibilities. Work begins after the signed contract, 40% advance, and project details.",
            },
            {
              question: "Do you work with businesses outside your country?",
              answer:
                "Yes. Starter Shifter works with businesses worldwide. We don’t claim local legal, tax, or platform coverage in every market, so requirements specific to your jurisdiction are confirmed for your project.",
            },
            {
              question: "How do you handle our information?",
              answer: {
                before:
                  "We use the details you share to understand your business and prepare or deliver the agreed services. We don’t sell your brief or share it with other businesses for their own use. Our ",
                linkLabel: "privacy information",
                linkHref: "/policies/privacy",
                after:
                  " explains the current project brief and client portal, and identifies what is still awaiting approval.",
              },
            },
            {
              question: "What if we’re not sure what we need?",
              answer:
                "That’s a normal starting point. Share the business problem and what’s already in place. We can help identify the smallest sensible scope, including whether research or a discovery step should come first. You don’t need to choose a plan before the first conversation.",
            },
            {
              question: "Is the project brief a contract or quote?",
              answer:
                "No. The project brief is a starting point for discussion. It doesn’t create an agreement, reserve time, or set a price. A proposal and signed contract define the scope and commercial terms.",
            },
          ],
        },
      ] as {
        id: string;
        label: string;
        questions: {
          question: string;
          answer: string | { before: string; linkLabel: string; linkHref: string; after: string };
        }[];
      }[],
    },

    howWeWork: {
      eyebrow: "Resources / How we work",
      note: "Delivery, explained plainly",
      titleLines: ["A clear path from first conversation to"],
      titleMark: "ongoing care.",
      description:
        "Every project is different, but the way we move through it is not. These are the stages we use to understand your business, agree the scope, build the work, and support what comes next.",
      facts: [
        { label: "Starting point", value: "Contract, 40% advance & details" },
        { label: "First handoff", value: "Research & Figma direction" },
        { label: "Ways to work", value: "Basic setup or Pro support" },
      ],
      prerequisitesTitleLines: ["Onboarding starts when", "the foundations are clear."],
      prerequisitesLabel: "The starting point",
      prerequisitesIntro:
        "Onboarding follows three prerequisites. They protect both sides: the scope is understood, the commitment is real, and we have enough context to begin useful work.",
      prerequisites: [
        {
          icon: "fileSignature",
          title: "A signed shared contract",
          description:
            "The contract records the agreed scope, responsibilities, and commercial terms. Work begins only after it is signed.",
        },
        {
          icon: "creditCard",
          title: "A 40% advance",
          description:
            "The advance confirms the engagement and lets us reserve delivery time. Remaining payment terms are set out in your contract.",
        },
        {
          icon: "building",
          title: "Company & project details",
          description:
            "We need enough context about your business, goals, and existing setup to begin research and onboarding.",
        },
      ] as { icon: string; title: string; description: string }[],
      prerequisitesFootNote:
        "Before payment, your proposal sets out the selected services, deliverables, exclusions, timeline, responsibilities, and costs. Further work needs an explicit decision on scope, price, and timeline.",
      stagesTitleLines: ["Eight stages, shaped around", "the work you actually need."],
      stagesLabel: "The delivery path",
      stagesIntro:
        "These stages describe how we operate. Your proposal confirms which ones apply, what is included, and what completion looks like for your project.",
      stages: [
        {
          title: "Discovery & qualification",
          description:
            "We discuss your goals, current systems, constraints, and what success would look like. The aim is to understand the problem before proposing a build.",
          bring: "Goals, existing setup, decision-makers",
          output: "A discovery summary or a recommended next step",
        },
        {
          title: "Scope & proposal",
          description:
            "We define the deliverables, exclusions, platform approach, pricing, timeline, and responsibilities in a written proposal.",
          bring: "Access to system details and timely feasibility answers",
          output: "A proposal you can review and approve",
        },
        {
          title: "Agreement & onboarding",
          description:
            "Once the contract is signed, the advance is received, and your project details are complete, onboarding begins and we start the agreed work.",
          bring: "Signed contract, 40% advance, company details",
          output: "An active project and a shared starting point",
        },
        {
          title: "Initial research & Figma draft",
          description:
            "We present company, market, and competitor research alongside a basic Figma design draft with variants for you to review.",
          bring: "Feedback on the direction and any agreed revisions",
          output: "A selected design direction to take into implementation",
        },
        {
          title: "Design & implementation",
          description:
            "We build the agreed website, application, campaigns, or integrations. Platform capabilities and third-party response times shape what is possible.",
          bring: "Content, product data, account access, approvals",
          output: "The agreed work, built and ready for review",
        },
        {
          title: "Testing & client review",
          description:
            "We check the agreed functionality and document issues. You test the business flows that matter and confirm acceptance or a bounded revision list.",
          bring: "Test accounts, representative data, feedback",
          output: "A tested build and a clear list of remaining items",
        },
        {
          title: "Launch & handover",
          description:
            "We deploy or activate the approved work and transfer the agreed documentation, access, and training.",
          bring: "Launch approval and readiness of domains and accounts",
          output: "Live work and an agreed handover",
        },
        {
          title: "Ongoing support & improvement",
          description:
            "If you have purchased ongoing coverage, we maintain, manage, report on, or improve the agreed systems. Basic does not include ongoing management.",
          bring: "Contacts, decisions, and recurring inputs",
          output: "The ongoing work defined in your support scope",
        },
      ] as { title: string; description: string; bring: string; output: string }[],
      youBring: "You bring",
      output: "Output",
      stagesFootNote:
        "Defect correction, maintenance, and new feature development are different categories of work. Each is handled under the scope that applies to it, rather than assumed to be included.",
      handoffTitleLines: ["A shared direction,", "before we build."],
      handoffLabel: "The first handoff",
      handoffIntro:
        "The early handoff is intended to give you something concrete to react to: research that informs the plan and a design draft with options.",
      handoffCards: [
        {
          title: "Company, market & competitor research",
          description:
            "We study your business, the segment you operate in, and the alternatives your customers may consider. The findings shape the plan and the design direction.",
        },
        {
          title: "A basic Figma design draft",
          description:
            "The draft presents variants for your review, so you can choose a direction and give focused feedback before implementation.",
        },
        {
          title: "A decision point, not a finished build",
          description:
            "You select a direction and request the agreed revisions. The implementation that follows is a separate stage with its own review and approval points.",
        },
        {
          title: "What it does not promise",
          description:
            "This handoff is not the completed website, all assets, or all integrations. Research depth and design scope match the time and information available.",
        },
      ] as { title: string; description: string }[],
      handoffNote:
        "The stated intention is a first handoff within a maximum of 3–4 days after the signed contract, 40% advance, and complete company/project details. During the build we schedule two Google Meet calls each week to share progress. The precise clock start, research depth, variant count, and revision allowance are confirmed in your proposal.",
      workingTitleLines: ["Clear responsibilities.", "Fewer surprises."],
      workingLabel: "Working together",
      workingIntro:
        "A good engagement is not only about what we build. It is also about who supplies what, who approves it, and which costs sit outside the agency fee.",
      workingTogether: [
        {
          icon: "clipboardCheck",
          title: "What you provide",
          items: [
            "Your full company and project details, completed during onboarding",
            "Business content, product data, catalogs, and product images",
            "Account access and technical contacts",
            "Policies, tax rules, shipping details, and approvals",
            "A decision-maker for reviews and sign-off",
          ],
        },
        {
          icon: "code",
          title: "What we manage",
          items: [
            "The agreed research, design, and implementation",
            "Supported integrations and testing",
            "Launch, documentation, and handover",
            "Any separately purchased ongoing work",
          ],
        },
        {
          icon: "shieldCheck",
          title: "Kept separate",
          items: [
            "Hosting, domains, themes, apps, and licenses",
            "ERP, CRM, chatbot, and other software subscriptions",
            "Payment processing, usage, and shipping charges",
            "Advertising spend and third-party asset licensing",
          ],
        },
      ] as { icon: string; title: string; items: string[] }[],
      workingFootNoteBefore:
        "Deliverables, quantities, supported tools, revision limits, and support capacity are agreed before work begins. See ",
      workingFootNoteLink: "Support & care",
      workingFootNoteAfter: " for how ongoing coverage is handled.",
    },

    products: {
      eyebrow: "Resources / Products & Templates",
      note: "Websites, applications & systems",
      titleLines: ["A closer look at", "what we build."],
      titleMark: "build.",
      description:
        "Websites, applications, and connected experiences. Explore the collection, the categories of work behind it, and how we label the difference between a concept and completed client work.",
      facts: [
        { label: "Focus", value: "Websites, applications & systems" },
        { label: "Collection", value: "Concept previews" },
        { label: "Evidence policy", value: "Approved work only" },
      ],
      workTitleLines: ["Three areas.", "One connected experience."],
      workLabel: "The work",
      workIntro:
        "Most projects touch more than one area. A store may need an operations view; a support flow may need a website and a CRM connection behind it.",
      buildAreas: [
        {
          icon: "store",
          title: "Websites & ecommerce",
          description:
            "Storefronts and business websites shaped around how you sell, with catalog, checkout, and content built on an agreed platform.",
          tags: ["Shopify", "WordPress + WooCommerce", "Design & build"],
        },
        {
          icon: "layoutTemplate",
          title: "Web applications & operations",
          description:
            "Internal tools and customer-facing applications that bring orders, inventory, and connected business systems into clearer workflows.",
          tags: ["Dashboards", "Workflows", "ERP & CRM connections"],
        },
        {
          icon: "bot",
          title: "AI & automation experiences",
          description:
            "Chatbots, support flows, and supported automations that answer common questions, route enquiries, and reduce repetitive work.",
          tags: ["Chatbots", "Human handoff", "Supported integrations"],
        },
      ] as { icon: string; title: string; description: string; tags: string[] }[],
      collectionTitleLines: ["Concepts today.", "Evidence as it’s approved."],
      collectionLabel: "The collection",
      collectionIntroWithPreviews:
        "The collection currently shows design concepts. These are illustrative previews; completed project details and screenshots will appear only when supplied and approved.",
      collectionIntroWithoutPreviews:
        "Explore the collection of websites, applications, and connected experiences.",
      visitProject: "Visit project",
      collectionFootNote:
        "Concept previews illustrate a direction; they are not client results or published case studies. We don’t publish client names, logos, testimonials, or metrics without permission and verification.",
    },

    support: {
      eyebrow: "Resources / Support & care",
      note: "Help after launch",
      titleLines: ["Support that keeps", "the work working."],
      titleMark: "working.",
      description:
        "Launch is a milestone, not the finish line. Here’s how ongoing care, maintenance, and improvement work after your project goes live — and what sits outside an agreed support scope.",
      facts: [
        { label: "Basic", value: "One-time setup" },
        { label: "Pro", value: "$2,500 + $500/month" },
        { label: "Coverage", value: "Agreed per project" },
      ],
      actionCta: "Plan your project",
      actionSecondary: "Sign in to your workspace",
      plans: [
        {
          name: "Basic",
          price: "$2,500",
          payment: "One-time setup",
          description:
            "The full build and digital marketing setup, delivered once and handed over. Basic does not include ongoing management.",
          items: [
            "The full application build and launch",
            "SEO management, email marketing, and social media marketing",
            "Chatbot and automation setup",
            "Handover of agreed access and documentation",
            "First-month support for changes and bug fixes",
          ],
        },
        {
          name: "Pro",
          price: "$2,500",
          payment: "Setup + $500 / month",
          description:
            "The Basic foundation plus ongoing maintenance, performance enhancement, lead generation, and keeping SEO and marketing current.",
          items: [
            "Ongoing maintenance and technical support",
            "Performance enhancement and monitoring",
            "Lead generation and campaign management",
            "Keeping SEO and marketing current",
            "Chatbot and workflow upkeep",
          ],
        },
      ] as { name: string; price: string; payment: string; description: string; items: string[] }[],
      waysTitleLines: ["Two ways to keep", "things moving."],
      waysLabel: "After launch",
      waysIntro:
        "Basic is a one-time build. Pro adds an ongoing relationship. Neither plan means unlimited work; the covered systems, capacity, and cadence are agreed in advance.",
      waysFootNote:
        "Pro’s monthly charge covers the agreed ongoing work, including active lead generation — where an approach isn’t producing results, we restructure and test others. Advertising spend, third-party subscriptions, and usage charges are paid by you. Lead volumes and growth results are not guaranteed.",
      coverageTitleLines: ["The work behind", "“keeping it running.”"],
      coverageLabel: "Coverage",
      coverageIntro:
        "Support can mean different things depending on the systems involved. These are the areas we can cover when they are written into your support scope.",
      coverage: [
        {
          icon: "wrench",
          title: "Maintenance & updates",
          description:
            "Routine checks, applicable updates, and compatibility checks for the agreed systems. The exact cadence is set in your support scope.",
        },
        {
          icon: "checkCircle",
          title: "Bug fixes",
          description:
            "Correction of defects in the agreed build. A defect is different from a new feature or a change to the agreed scope.",
        },
        {
          icon: "gauge",
          title: "Performance",
          description:
            "Monitoring and agreed improvements to speed, reliability, or the workflows covered by your plan. Targets are project-specific.",
        },
        {
          icon: "database",
          title: "Integrations & data",
          description:
            "Upkeep of supported ERP, CRM, inventory, shipping, and invoice connections, including agreed monitoring and error handling.",
        },
        {
          icon: "refresh",
          title: "Backup & recovery",
          description:
            "Backup and recovery tasks where agreed and supported by the platform. Responsibilities and recovery expectations are documented.",
        },
        {
          icon: "messagesSquare",
          title: "Support handling",
          description:
            "A clear route for questions and issues, with triage, agreed response targets, and escalation for the systems in scope.",
        },
      ] as { icon: string; title: string; description: string }[],
      coverageFootNote:
        "The exact list depends on your platform mix, integrations, and purchased coverage. Maintenance, defect correction, and new feature development are handled as different categories of work.",
      requestTitleLines: ["A clear route", "to a real answer."],
      requestLabel: "When something needs attention",
      requestStepLabel: "Request",
      requestIntro:
        "Support works best when the request is specific and reaches the agreed place. Here’s the shape of a useful request.",
      requestSteps: [
        {
          title: "Use the agreed channel",
          description:
            "Send the request through the support channel confirmed for your project, so it reaches the right place and can be tracked.",
        },
        {
          title: "Include the useful detail",
          description:
            "Describe what happened, where it happened, what you expected, and any steps to reproduce it. Screenshots or links help.",
        },
        {
          title: "We triage and respond",
          description:
            "We confirm whether it is a defect, maintenance, or new work, then agree the next step. Work outside the scope gets its own quote.",
        },
      ] as { title: string; description: string }[],
      upFrontTitle: "What we agree up front",
      upFrontDescription:
        "Support hours, channels, capacity, response targets, and escalation are confirmed in your support scope. We don’t publish a universal 24/7 or response-time promise.",
      requestNote:
        "If you already work with us, use the support channel agreed for your project. If you are not sure which channel applies, ask your usual project contact before sending sensitive details.",
      boundariesTitleLines: ["What sits outside", "an agreed scope."],
      boundariesLabel: "Boundaries",
      boundariesIntro:
        "Knowing what is not included is as useful as knowing what is. These items are quoted separately rather than absorbed into routine support.",
      separateLabel: "Separate",
      boundaries: [
        {
          title: "New features & redesigns",
          description:
            "New functionality, structural changes, migrations, and redesigns are separate from routine maintenance. They need their own scope, price, and timeline.",
        },
        {
          title: "Third-party costs",
          description:
            "Hosting, domains, themes, apps, licenses, software subscriptions, usage charges, ad spend, and payment or shipping fees are paid by you, separate from agency fees.",
        },
        {
          title: "Work without a support scope",
          description:
            "Basic is a one-time setup with first-month support for requested changes and bug fixes. After that month, if you aren’t continuing with Pro, further help is quoted based on the issue and services you need.",
        },
      ] as { title: string; description: string }[],
      boundariesFootNoteBefore:
        "Deliverables, capacity, response targets, and covered systems are confirmed before work begins. See ",
      boundariesLinkOneLabel: "how we work",
      boundariesLinkOneHref: "/how-we-work",
      boundariesFootNoteMiddle: " or read the ",
      boundariesLinkTwoLabel: "support FAQs",
      boundariesLinkTwoHref: "/faq#faq-after-launch",
      boundariesFootNoteAfter: ".",
    },

    policies: {
      privacy: {
        title: "Privacy information.",
        description:
          "Starter Shifter’s full privacy policy is awaiting approval. The information below describes the current project brief feature; it is not a complete privacy policy.",
        sections: [
          {
            heading: "Your project brief",
            paragraph:
              "Your brief is saved to your client account so you can pause, return, and update your answers. It is not shared with other client accounts. Uploaded project files are stored with your workspace and are available to you and Starter Shifter. You can remove your own uploaded files from the workspace.",
          },
          {
            heading: "Client accounts and onboarding",
            paragraphBefore:
              "Your client account lets you save your project information and return to it later. Its separate ",
            linkLabel: "onboarding privacy information",
            linkHref: "/policies/onboarding-privacy",
            paragraphAfter:
              " explains how project details are used. You accept that notice before starting the questions.",
          },
          {
            heading: "Further information",
            paragraph:
              "Information about hosting data, any future enquiry service, retention, and privacy requests will be added when the full policy and contact details are approved.",
          },
        ],
      },
      cookies: {
        title: "Cookie information.",
        description:
          "The cookie policy is awaiting approval. A complete notice will be added after the live hosting environment and any tracking tools have been reviewed.",
        sections: [
          {
            heading: "Current website features",
            paragraph:
              "No optional analytics or advertising integration is configured in this website. The current project brief feature creates a local download without submitting your details.",
          },
          {
            heading: "Future changes",
            paragraph:
              "If analytics, advertising, or other optional tracking features are introduced, this information will need to be updated for the actual tools and data involved.",
          },
        ],
      },
      terms: {
        title: "Service terms information.",
        description:
          "Full service terms are awaiting approval. This page summarizes confirmed engagement information; each project requires an agreed scope and a signed contract.",
        sections: [
          {
            heading: "Before onboarding",
            paragraph:
              "Onboarding follows a signed contract, a 40% advance, and the company and project details needed to begin. Deliverables, supported tools, timeline, client responsibilities, and ongoing coverage are agreed for each engagement.",
          },
          {
            heading: "Setup and ongoing work",
            paragraph:
              "Basic is a $2,500 one-time fee covering the full application build and digital marketing setup (SEO management, email marketing, and social media marketing). Pro adds $500 per month for ongoing maintenance, performance enhancement, and lead generation. Neither plan establishes unlimited work, guaranteed lead volumes, or guaranteed business results.",
          },
          {
            heading: "Third-party costs",
            paragraph:
              "Hosting, domains, advertising spend, payment processing fees, platform subscriptions, paid themes and plugins, software usage, licensing, and shipping charges are paid by you, separate from agency fees. Services outside the three service areas are quoted separately.",
          },
          {
            heading: "Terms still to be published",
            paragraph:
              "Remaining payment, tax, cancellation, refund, ownership, licensing, and support terms will be published once approved. Confirm these details in your project agreement before proceeding.",
          },
        ],
      },
      onboardingPrivacy: {
        title: "Your information, with a purpose.",
        shareHeading: "What you share with us",
        shareParagraph:
          "Your contact details, business description, customers and markets, project goals, and the services you would like help with. You can also share business examples and links to materials that help us understand your project. If you upload project files through your workspace, we store the file and its details with your project.",
        useHeading: "How we use it",
        useParagraphs: [
          "We use your answers to prepare and review your project brief, research your business, plan a design direction, and deliver the work agreed with you. Your progress is saved so you can return, make changes, and check your answers before sending your brief to our team. Uploaded files are used to review and deliver the project you have shared them for.",
          "Sending a brief does not sign an agreement or confirm a payment. Your agreement sets out the services, fees, and responsibilities for your project.",
        ],
        responsibilityHeading: "Who looks after your information",
        responsibilityParagraphAfter:
          "You can access your own brief through your account. Other client accounts cannot access it. Our portal uses service providers to support account sign-in and information storage; Starter Shifter is responsible for managing your project information.",
        noticeHeading: "Your onboarding notice",
        keepingHeading: "Keeping your details and answering your questions",
        contactPrefix: "For questions or requests about your information, contact ",
        pausedHeading: "Before you begin",
        pausedParagraphs: [
          "Onboarding is temporarily paused. You can review this information again when onboarding reopens.",
          "The development preview lets you try the journey with example business details. Its sample answers and progress are saved separately and can be restored in the same browser.",
        ],
        safeHeading: "Share business context, safely",
        safeParagraphAfter:
          "Remove private details from any examples you share. If your project needs account access later, our team will arrange it with you separately.",
      },
    },
  },

  auth: {
    heading: "Join us.",
    subheading: "New here or returning? Continue to your client workspace.",
    socialGroupLabel: "Continue with a social account",
    providers: {
      google: "Google",
      facebook: "Facebook",
    },
    connecting: "Connecting…",
    continueWith: "Continue with ",
    socialHelpBoth:
      "Google and Facebook sign-in are coming soon. You can use email for now.",
    socialHelpOneSuffix: " sign-in is coming soon.",
    or: "or",
    continueWithEmail: "Continue with email",
    workspaceNote: "Share your business brief and follow your project in one place.",
    privacyNoteBefore: "Read how we use your account and project details in our ",
    privacyNoteLink: "privacy information",
    connectError: "We couldn’t connect your account. Try again or continue with email.",
    socialSignInError:
      "Social sign-in was unsuccessful. Try again or continue with email.",
    emailViewLabel: "Email account access",
    backToOptions: "Back to all sign-in options",
    emailModeLabel: "Email account access",
    signIn: "Sign in",
    createAccount: "Create account",
    createAccountEmailLabel: "Create an account with email",
    signInEmailLabel: "Sign in with email",
    emailLabel: "Email address",
    emailPlaceholder: "you@business.com",
    passwordLabel: "Password",
    passwordPlaceholderCreate: "Create a strong password",
    passwordPlaceholderSignin: "Enter your password",
    showPassword: "Show password",
    hidePassword: "Hide password",
    yourNameLabel: "Your name",
    yourNamePlaceholder: "Alex Morgan",
    keepMeSignedIn: "Keep me signed in",
    passwordHint: "Use at least 12 characters for your password.",
    creatingAccount: "Creating your account…",
    signingIn: "Signing in…",
    enterNameError: "Please enter your name.",
    tooManyAttemptsError: "Too many attempts. Please wait a moment and try again.",
    createAccountError:
      "We couldn’t create your account. Try signing in or use another email.",
    signInError: "We couldn’t sign you in. Check your email and password.",
    connectRetryError: "We couldn’t connect. Please try again in a moment.",
    shell: {
      storyTag: "Your business, connected",
      storyHeading: "Start your journey.",
      storyDescription: "A few simple steps to bring your business into focus.",
      journeyLabel: "Your workspace journey",
      steps: ["Create your account", "Tell us about your business", "Shape your next chapter"],
      formPanelLabel: "Join Starter Shifter",
      backToWebsite: "Back to website",
      copyrightPrefix: "© ",
      accountPoliciesLabel: "Account policies",
    },
  },

  dashboard: {
    viewNames: {
      overview: "Overview",
      brief: "Project brief",
      journey: "Project journey",
      resources: "Brand & resources",
      agreement: "Agreement & billing",
    } as Record<string, string>,
    updates: {
      title: "Updates & follow-ups",
      description: "Your latest saved progress and details to revisit.",
      empty: "Start your project brief to see your updates here.",
      openQuestionsPrefix: "Open questions (",
      openQuestionsSuffix: ")",
      revisitDefault: "Revisit this answer with your agency.",
      noFollowups: "No follow-ups flagged in your brief.",
      viewProjectJourney: "View project journey",
      updateBrief: "Update my brief",
      startBrief: "Start my brief",
    },
    shell: {
      skipToDashboard: "Skip to dashboard",
      closeNavigation: "Close navigation",
      workspaceNavigationLabel: "Workspace navigation",
      clientWorkspace: "Client workspace",
      littleGuidance: "A little guidance?",
      littleGuidanceDesc: "Every next step, explained.",
      workspaceGuide: "Workspace guide",
      developmentPreview: "Development preview",
      signingOut: "Signing out…",
      signOut: "Sign out",
      workspace: "Workspace",
      searchLabel: "Search your project brief",
      searchPlaceholder: "Search your brief…",
      viewUpdatesLabel: "View workspace updates",
      openProfileLabel: "Open your profile",
      yourAccount: "Your account",
      dashboardContentLabel: "Dashboard tab content",
      footerBrand: "Starter Shifter · Your business, connected.",
      projectPrivacy: "Project privacy",
      connecting: "Connecting",
      connectedWorkspace: "Connected workspace",
      guideTitle: "Your workspace guide",
      guideDescription: "Keep your project moving, one step at a time.",
      guideParagraphs: [
        { strong: "Project brief", text: " holds every answer you have saved. Choose a topic to review it or return to onboarding to make changes." },
        { strong: "Project journey", text: " shows your submission and verified prerequisites. Delivery stages become relevant after activation and follow your agreed scope." },
        { strong: "Agreement & billing", text: " shows the agency’s recorded scope, fees, agreement, and advance verification." },
        { strong: "", text: "Use “Discuss with us” in your brief to flag anything you need help with. Your flags appear in the dashboard’s action center." },
      ],
      exploreMyBrief: "Explore my brief",
      profileTitle: "Your profile",
      profilePreviewDesc: "Your saved preview workspace",
      profileDesc: "Your client workspace",
      nameLabel: "Name",
      notProvided: "Not provided yet",
      businessLabel: "Business",
      viewContactDetails: "View contact details",
      loadingBusinessName: "Your project workspace",
    },
    overview: {
      topicSections: [
        { key: "business", label: "Business", ids: ["P01", "P02", "P03", "P04", "P05"], color: "var(--commerce-deep)" },
        { key: "goals", label: "Goals", ids: ["P06", "P07", "P08", "P09"], color: "#439574" },
        { key: "requirements", label: "Requirements", ids: ["P10", "P11", "P12"], color: "var(--commerce-mint)" },
        { key: "confirmation", label: "Confirmation", ids: ["P13", "P14", "P15", "P16"], color: "#b4ae97" },
      ],
      eyebrow: "A little clarity. A lot of possibility.",
      welcomeBack: "Welcome back",
      projectAtAGlance: "Your project, at a glance. Everything you need to move forward.",
      viewProjectBrief: "View project brief",
      preparingPdf: "Preparing PDF…",
      exportPdf: "Export PDF report",
      pdfError: "The PDF could not be created. Please try exporting again.",
      pdfDownloaded: "Your PDF is ready. Check your browser downloads.",
      pdfPreparing: "Adding your answers, charts, and project updates.",
      pdfIdle: "Answers, requirements, and delivery progress.",
      yourProjectBrief: "Your project brief",
      phasesComplete: "Phases complete",
      submittedForReview: "Submitted for review",
      continueWhereLeftOff: "Continue where you left off",
      storyStartsHere: "Your story starts here",
      projectReadiness: "Project readiness",
      prerequisitesVerified: "Prerequisites verified",
      prerequisitesBefore: "Prerequisites before activation",
      projectDelivery: "Project delivery",
      awaitingProjectUpdate: "Awaiting project update",
      latestProgress: "Latest progress from your agency",
      deliveryProgressHere: "Your agency’s delivery progress appears here",
      openQuestions: "Open questions",
      workThroughThese: "Let’s work through these",
      noFollowups: "No follow-ups flagged",
      detailsToRevisit: "Details to revisit together",
      clearerPicture: "A clearer picture of your project",
      briefBreakdown: "Your brief completion, broken down by topic.",
      questionsComplete: "of questions complete",
      completionByCategory: "Question completion by category",
      insideYourBrief: "Inside your brief",
      viewAll: "View all",
      detailsOrganized: "Your details, organized. Open a topic to take a closer look.",
      answersRecorded: "answers recorded",
      readyForInput: "Ready for your input",
      complete: "Complete",
      yourNextStep: "Your next step",
      reviewProjectBrief: "Review project brief",
      completeProjectBrief: "Complete project brief",
      viewNextSteps: "View next steps",
      beforeWeBegin: "Before we begin",
      viewAllPrereqsLabel: "View all activation prerequisites",
      verified: "Verified",
      inProgress: "In progress",
      pending: "Pending",
      workspaceReadyForYou: "Your workspace is ready for you",
      startBriefToSee: "Start your brief to see your saved details and progress here.",
      viewJourney: "View journey",
      nextStepFallbacks: {
        oneSmallPhase: "One small phase at a time.",
        readyNextChapter: "Ready for your next chapter.",
        getReady: "Let’s get your project ready.",
        answerUpToFive:
          "Answer up to five questions, then return here. You can pause between every phase.",
        briefVerified:
          "Your brief and prerequisites are verified. Your agency can now arrange the agreed next steps.",
        confirmRemaining: "Your agency will confirm the remaining prerequisites.",
      },
    },
    journey: {
      title: "One step closer, every day.",
      description:
        "A clear view of your project’s preparation and the delivery journey ahead.",
      currentCheckpoint: "Current checkpoint",
      yourProject: "Your project",
      targetDate: "Target date: ",
      deliveryComplete: "delivery complete",
      preparationStagesComplete: "preparation stages complete",
      fallbackStages: [
        {
          id: "brief",
          title: "Your project brief",
          description:
            "Share your business, goals, content, and requirements. Your answers help shape the project discussion.",
        },
        {
          id: "activation",
          title: "Agreement & activation",
          description:
            "Your agency verifies the contact details, signed agreement, 40% advance, and project dependencies before activation.",
        },
        {
          id: "research",
          title: "Research & direction",
          description:
            "Business, market, and competitor research establishes the direction. Timing and deliverables follow your agreed project scope.",
        },
        {
          id: "design",
          title: "Design & feedback",
          description:
            "Explore the agreed design work, review drafts, and share feedback. The number of variants and revisions follows your agreement.",
        },
        {
          id: "build",
          title: "Build & connect",
          description:
            "The agreed website, content, workflows, and supported connections take shape. Selected requirements are confirmed in the project scope.",
        },
        {
          id: "handoff",
          title: "Review & handoff",
          description:
            "Review the agreed deliverables and prepare for handoff. Launch requirements and ongoing support depend on your engagement.",
        },
      ],
      statusUpcoming: "Upcoming",
      statusComplete: "Complete",
      statusInProgress: "In progress",
      statusVerified: "Verified",
      statusNeedsVerification: "Needs verification",
      statusUpNext: "Up next",
      stageProgress: "Stage progress",
      reviewBrief: "Review brief",
      continueBrief: "Continue brief",
      viewAllPending: "View all pending verification items",
      noDeliveryUpdate:
        "No delivery update has been recorded for this stage. Your agency will confirm the applicable work and timing after activation.",
      workspaceActivity: "Workspace activity",
      activityEmpty:
        "Your saved progress and submission updates will appear here once you start your brief.",
      activityFootNote:
        "These are your latest saved records. Delivery dates and completion are confirmed separately by your agency.",
    },
    resources: {
      title: "The pieces of your brand.",
      description:
        "See the content readiness and reference links you shared in your project brief.",
      updateResources: "Update resources",
      brandContentReadiness: "Brand & content readiness",
      assetStatuses: "The asset statuses you recorded during onboarding.",
      gatherStartingPoints: "Let’s gather your starting points.",
      gatherStartingPointsDesc:
        "Add your logo, photos, copy, and content readiness to your brief. Final files can be shared securely with your agency.",
      contentContact: "Content contact",
      yourSharedLinks: "Your shared links",
      sharedLinksDesc: "Website, folder, and reference links from your answers.",
      opensNewTab: "Opens in a new tab",
      noLinksYet:
        "No reference links shared yet. You can add them while updating your brief.",
      secureShare:
        "Share files and access using your agreed secure method. Account passwords do not belong in your project brief.",
      projectFiles: "Project files",
      projectFilesDesc:
        "Upload logos, copy, photos, or reference documents. Each file is stored with your workspace and is visible to your agency.",
      file: "file",
      files: "files",
      previewNote:
        "Document sharing becomes available in an authenticated client workspace.",
      noteForAgency: "Note for your agency",
      notePlaceholder: "Optional context for this upload",
      category: "Category",
      chooseFilesLabel: "Choose files to upload",
      uploading: "Uploading…",
      chooseFiles: "Choose files",
      fileTypesHint: "PDF, image, Office, text, CSV, JSON, or ZIP · up to ",
      uploadError: "The upload could not be saved. Please try again.",
      removeConfirm: "Remove this file from your workspace?",
      removeError: "The file could not be removed. Please try again.",
      needsUpdate: "Needs update",
      noFilesYet: "No files uploaded yet.",
    },
    agreement: {
      title: "Clear scope. Shared expectations.",
      description:
        "Your agency’s confirmed engagement record, fees, and verification status.",
      yourEngagement: "Your engagement",
      setupFee: "Setup fee",
      asRecorded: "As recorded in your engagement",
      ongoingFee: "Ongoing fee",
      notRecorded: "Not recorded",
      perMonth: "Per month, according to agreed scope",
      ongoingFollows: "Ongoing work follows your agreement",
      whatsIncluded: "What’s included",
      exclusionsThirdParty: "Exclusions & third-party costs",
      seeExclusions: "See your agreement for exclusions.",
      verificationBilling: "Verification & billing",
      signedAgreement: "Signed agreement",
      fortyPercentAdvance: "40% advance",
      billingName: "Billing name",
      billingEmail: "Billing email",
      paymentStatusNote:
        "Payment status reflects agency verification. This workspace does not collect payments.",
      agreementComesNext: "Your agreement comes next.",
      agreementComesNextDesc:
        "Once your agency records your engagement, you’ll see the approved scope, fees, billing details, and verification status here.",
      agreementAwaiting: "Agreement awaiting confirmation",
      advanceAwaiting: "40% advance awaiting verification",
    },
    brief: {
      title: "Your project brief",
      description:
        "Review your onboarding progress, check the answers you’ve shared, and fill in any missing details.",
      progressLabel: "Your brief progress",
      everyDetailCovered: "Every detail is covered",
      briefTakingShape: "Your brief is taking shape",
      questionsAnswered: "questions answered",
      phasesComplete: "phases complete",
      submittedToAgency: "Submitted to your agency",
      draftNotSubmitted: "Draft · Not submitted",
      reviewAndSend: "Review and send",
      updateReopens:
        "You can update any answer. Changes reopen your brief for review and submission.",
      completeSubmit:
        "Your answers are complete. Review and submit your brief to finish onboarding.",
      completionNote:
        "Completion counts answered and not-applicable questions. Details saved for later remain open; you can still discuss them with your agency.",
      percentComplete: "of questions complete",
      statusComplete: "Complete",
      percentCompleteSuffix: "complete",
      filterLabel: "Filter brief questions",
      filters: [
        { id: "all", label: "All questions" },
        { id: "remaining", label: "To complete" },
        { id: "follow-ups", label: "Follow-ups" },
        { id: "answered", label: "Answered" },
      ] as { id: string; label: string }[],
      searchLabel: "Search questions and answers",
      searchPlaceholder: "Search questions or answers",
      onboardingPhases: "Onboarding phases",
      shown: "shown",
      chooseAPhase: "Choose a phase",
      noMatchingPhases: "No matching phases",
      phase: "PHASE",
      of: "OF",
      complete: "Complete",
      answered: "answered",
      notAnswered: "not answered",
      needAttention: "need attention",
      forLater: "for later",
      pickUpWhereLeft: "Pick up where you left off.",
      readyToRevisit: "Ready to revisit the details saved for later?",
      continuePhase: "Continue phase",
      startPhase: "Start phase",
      showingPrefix: "Showing ",
      showingOfSuffix: " questions in this phase",
      question: "Question",
      followUpRequested: "Follow-up requested",
      notApplicable: "Not applicable",
      noAnswerYet: "No answer provided yet.",
      yourSavedAnswer: "Your saved answer",
      checkAnswerDefault: "Please check this answer before finishing the phase.",
      editAnswer: "Edit answer",
      checkAnswer: "Check answer",
      answerNow: "Answer now",
      updateNote:
        "Open a question to update it. Your saved answer will be prefilled, and you can return to this phase after saving.",
      noMatchingQuestions: "No matching questions",
      noUnansweredQuestions: "No unanswered questions",
      noDetailsForLater: "No details saved for later",
      noQuestionsToShow: "No questions to show",
      tryAnotherSearch: "Try another search or clear the filters to see your brief.",
      chooseAnotherFilter: "Choose another filter to review the rest of your brief.",
      showAllQuestions: "Show all questions",
      noPhasesMatch: "No phases match this filter.",
      forLaterSuffix: "for later",
      statusLabels: {
        answered: "Answered",
        pending: "Not answered",
        later: "For later",
        attention: "Needs attention",
        review: "Review",
      } as Record<string, string>,
    },
    phases: {
      savedSuffix: " saved. Review your progress below.",
      yourOnboarding: "YOUR ONBOARDING",
      completeTitle: "Your project brief is complete.",
      incompleteTitle: "Let’s complete your project brief.",
      completeSubmitted:
        "Your answers have been submitted. You can review or update any detail in your brief.",
      completeNotSubmitted:
        "Every question has an answer. Review your brief and send it to your agency when you’re ready.",
      incomplete:
        "See what you’ve shared, find the details still needed, and finish one phase at a time.",
      reviewProjectBrief: "Review project brief",
      reviewAndSendBrief: "Review and send brief",
      continuePhase: "Continue phase",
      startPhase: "Start phase",
      phasePrefix: "Phase ",
      briefCompletion: "Brief completion",
      answeredSuffix: " answered",
      notAnswered: "not answered",
      needAttention: "need attention",
      forLater: "for later",
      phasesComplete: "phases complete",
      laterStaysVisible: "Details marked for later stay visible until you resolve them.",
      answersSavedAsYouGo: "Your answers are saved as you go. You can pause at any time.",
      viewAllPhases: "View all phases",
      briefCompletionLabel: "Project brief completion",
    },
  },

  onboarding: {
    privacyCopy: {
      purpose:
        "Starter Shifter uses the details you share to understand your business, prepare your project, and deliver the services you agree with us.",
      responsibility:
        "Your project information is managed by Starter Shifter. We do not sell your details or share your brief with other businesses for their own use.",
      safeSharing:
        "Business information and examples are enough. Please leave out passwords, payment details, and private information about your customers or team.",
    },
    welcome: {
      storyLabel: "Your next chapter starts here",
      storyTitleLines: ["Big ideas.", "Small steps."],
      storyFooterLines: ["You bring the story.", "We’ll help connect the dots."],
      greeting: "Welcome to Starter Shifter.",
      greetingNamePrefix: "Welcome, ",
      heading: "Let’s get to know your business.",
      descriptionPrefix:
        "Tell us about your business, one question at a time. Your current route has ",
      descriptionSuffix:
        " short phases, with up to five questions each. Relevant follow-ups may appear as you choose the work you need.",
      promises: [
        "Estimates are welcome. Ask for help when you need it.",
        "Continue smoothly from one phase to the next",
        "Save, take a break, come back anytime",
      ],
      consentBefore: "I’ve read the ",
      consentLink: "privacy information",
      consentAfter:
        " and agree to Starter Shifter using my details to prepare and deliver my project.",
      saving: "Saving…",
      begin: "Let’s begin",
      paused:
        "Onboarding is temporarily paused. Please return when it reopens.",
      tryPreview: "Try the preview",
      previewOnly: "Preview only. Please use example details.",
      serviceTerms: "Service terms",
    },
    journeyArtwork: {
      scenes: [
        { icon: "store", title: "Your business", subtitle: "Made of good ideas & real people", tag: "Nice to meet you" },
        { icon: "compass", title: "Your direction", subtitle: "A little clarity. A lot of possibility.", tag: "Think big" },
        { icon: "fingerprint", title: "Your signature", subtitle: "The details that make it yours", tag: "Make your mark" },
        { icon: "layers", title: "Your toolkit", subtitle: "Connecting the pieces of your project", tag: "Piece by piece" },
        { icon: "partyPopper", title: "Your next chapter", subtitle: "A brief we can build on, together", tag: "Coming together" },
      ],
      tagline: "A little more you",
    },
    wizard: {
      sessionEnded: "Your session has ended.",
      signInAgain: "Sign in again",
      reloadOnboarding: "Reload onboarding",
      previewBanner:
        "Preview mode. Use example business details. Your progress is saved for your next visit.",
      customizedBanner:
        "Your agency prepared this questionnaire for your project. Please review any newly requested details.",
      oneQuestionAtATime: "One question at a time",
      saveAndReturn: "Save and return to brief",
      saveAndExit: "Save and exit",
      phaseReview: "Phase review",
      questionOf: "Question ",
      of: " of ",
      reviewYourAnswers: "Review your answers",
      answerBeforeFinish: "You can answer this before you finish.",
      phaseSavedSuffix: " saved. Let’s keep going.",
      beforeNextPhase: "Before the next phase",
      fewDetailsForLater: "A few details for later",
      phaseReady: "This phase is ready",
      answeredPrefix: "You’ve answered ",
      answeredSuffix: " of ",
      answeredOfQuestions: " questions in this phase. ",
      fillNowOrFlag:
        "You can fill in these details now, or keep them flagged for your final review.",
      changesSavedContinue:
        "Your changes are saved. Continue whenever you’re ready.",
      answerNow: "Answer now",
      back: "Back",
      continueWithForLaterPrefix: "Continue with ",
      continueWithForLaterSuffix: " for later",
      continueToNextPhase: "Continue to next phase",
      reviewTitle: "Here’s your project brief. How does it look?",
      remainingPrereqs: "Remaining project prerequisites",
      prereqsNote:
        "These are checked against agency records. No invitations are sent from this form.",
      reviewHelp:
        "Check your answers below. You can edit any topic before the final confirmations.",
      previewPrivacyHelp:
        "Review how your example answers are used in this preview before confirming.",
      addProjectTopic: "Something else? Add a project topic",
      topicsAutoHelp:
        "Your answers select relevant topics automatically. Add a workflow here if we missed it.",
      searchTopicsLabel: "Search project topics",
      searchTopicsPlaceholder: "Search topics…",
      selectedByAnswers: "selected by your answers",
      previouslyAnswered: "Previously answered topics",
      previouslyAnsweredHelp:
        "These answers stay saved outside your current route. Restore a topic or remove its answers.",
      restoreTopic: "Restore topic",
      removeSavedAnswers: "Remove saved answers",
      routeNotePrefix: " project-specific topics selected. Your progress adapts as you choose.",
      backToMyReview: "Back to my review",
      retrySaving: "Retry saving",
      saveAndReturnToBrief: "Save and return to brief",
      backToPhaseReview: "Back to phase review",
      saveAndOpenDashboard: "Save and open dashboard",
      submitOnboarding: "Submit onboarding details",
      looksGood: "Looks good",
      skipForNow: "Skip for now",
      continue: "Continue",
      pauseAnytime: "Pause anytime with Save and exit.",
      phaseOf: "Phase ",
      phaseOfSuffix: " of ",
      encouragement: {
        checkTogether: "Let’s check this answer together. The detail below will help.",
        briefComingTogether:
          "Your brief is coming together. Take a look before the final confirmations.",
        flagForGuidance: "We’ll flag this for guidance. You can keep going.",
        keepOpen: "That’s okay. We’ll keep this as an open question.",
        gotIt: "Got it! Continue whenever you’re ready.",
        startWithYou: "Let’s start with you. A short answer is all we need.",
        multiSelect: "You can choose more than one. Pick what fits your project.",
        select: "Choose the option that feels right for you.",
        optional: "This one is optional. You can come back to it later.",
        oneSmallStep: "One small step at a time. A little context is enough.",
      },
      saveStates: {
        allSaved: "All changes saved",
        readyToSave: "Ready to save",
        saving: "Saving…",
        unsaved: "Unsaved changes",
        notSaved: "Changes not saved — retry below",
      },
      errors: {
        saveFailed:
          "We couldn’t save your latest changes. Keep this page open and try again.",
        draftMissing: "Your draft session is missing. Reload this page to reconnect.",
        unableToSave: "Unable to save.",
        unableToSaveAnswer: "Unable to save this answer.",
        unableToSavePhase: "Unable to save this phase.",
        unableToSubmit: "Unable to submit.",
        unableToSaveAgreement: "Unable to save your agreement. Please try again.",
        attentionBeforeSubmit:
          "A few answers still need your attention before submission.",
        loadQuestionnaire:
          "We could not load your assigned questionnaire. Reload to try again, or contact the agency if the problem continues.",
      },
      engagementSummary: {
        noneHeading: "No approved engagement recorded yet",
        noneBody:
          "Your project agreement, scope, fees, and billing record will appear here once the agency records them. You can still submit a brief for review.",
        noneMeta: "Agreement: awaiting confirmation · 40% advance: awaiting verification",
        approvedSuffix: " · Approved project record",
        setupPrefix: "Setup: ",
        recurringPrefix: " · Recurring: ",
        perMonthSuffix: " / month",
        scopePrefix: "Scope: ",
        exclusionsPrefix: "Exclusions: ",
        seeAgreement: "See your agreement",
        thirdPartyPrefix: "Third-party costs: ",
        agreementPrefix: "Agreement: ",
        verified: "Verified",
        awaitingConfirmation: "Awaiting confirmation",
        advancePrefix: " · 40% advance: ",
        awaitingVerification: "Awaiting verification",
      },
      reviewSummary: {
        groups: [
          { key: "business", title: "Business and contact", ids: ["P01", "P02", "P03", "P04", "P05"] },
          { key: "goals", title: "Goals and current process", ids: ["P06", "P07", "P09"] },
          { key: "work", title: "Selected work and requirements", ids: ["P08", "P10", "P11", "P12"] },
          { key: "responsibilities", title: "Responsibilities and engagement", ids: ["P13", "P14", "P15"] },
          { key: "notes", title: "Final notes and onboarding feedback", ids: ["P16"] },
        ] as { key: string; title: string; ids: string[] }[],
        additionalTitle: "Additional project details",
        topicsToReview: " topics to review",
        edit: "Edit",
        editBrief: "Edit brief",
        openQuestions: "Open questions and follow-ups",
        noFollowups:
          "No follow-up flags recorded. Optional unanswered details can be supplied later.",
      },
    },
    progress: {
      railLabel: "Onboarding progress",
      yourProjectBrief: "Your project brief",
      phasePrefix: "Phase ",
      phaseOfSuffix: " of ",
      answeredPercentSuffix: " answered",
      answeredLabel: "Answered questions",
      answeredValueText: "answered, ",
      forLaterValueText: " for later, ",
      pendingValueText: " pending out of ",
      questionsValueText: " questions",
      answered: "answered",
      forLater: "for later",
      pending: "pending",
      yourPhases: "Your phases",
      phaseNavLabel: "Phases and questions",
      questionsInPhase: "Questions in this phase",
      selectToRevisit: "Select a question to revisit it.",
      review: "Review",
      reviewYourAnswers: "Review your answers",
      currentQuestionSuffix: ", current question",
      legendAnswered: "Answered",
      legendForLater: "For later",
      legendPending: "Pending",
      railNote: "Your phases adapt to your project. You can revisit any question.",
      currentPhaseLabel: "Current phase",
    },
    privacyNotice: {
      ariaLabel: "How we use your information",
      heading: "Your information has a purpose.",
      howWeCare: "How we care for your details",
      previewNote:
        "This is a preview. Your sample answers are saved so you can try the journey and return to it in this browser. Use example business details.",
      retentionPrefix: "How long we keep your details: ",
      contactPrefix: "Questions about your information? ",
      paused:
        "Onboarding is temporarily paused. Please review the current privacy information when it reopens.",
      navLabel: "Onboarding information",
      privacyInformation: "Privacy information",
      serviceTerms: "Service terms",
    },
    portal: {
      myWorkspace: "My workspace",
      signingOut: "Signing out…",
      signOut: "Sign out",
      yourProjectWorkspace: "Your project workspace",
      clientPortal: "Starter Shifter client portal",
      signOutError: "Unable to sign out. Please try again.",
      saveProgressError: "Unable to save your progress. Please try again.",
      unableToSaveProgress: "Unable to save your progress.",
    },
    questionField: {
      answerNow: "Answer now",
      notSureYet: "Not sure yet",
      notApplicable: "Not applicable",
      provideLater: "Provide later",
      requestHelp: "Request help",
      preferNotToAnswer: "Prefer not to answer",
      required: "Required",
      optional: "Optional",
      setEachStatus: "Set each item’s status",
      chooseOne: "Choose one",
      chooseUpToPrefix: "Choose up to ",
      chooseAll: "Choose all that apply",
      chooseUpToSuffix: ".",
      pickWhatFits: "Pick what fits best. You can add context below.",
      shortAnswer: "A short answer is all we need. You can add more detail later.",
      everydayWords: "Everyday words are perfect. A few sentences are enough.",
      shareWhatYouKnow: "Share what you know. You can ask for guidance below.",
      skipIfPrefer: "Skip this if you prefer to provide it later.",
      whyWeAsk: "Why we ask",
      savedChoicePrefix: "Your saved choice: ",
      savedChoiceSuffix:
        ". These choices were removed from the updated form. Your answer is retained; review the available choices before confirming.",
      confirmAccuracy: "I confirm these details and my authority to share them.",
      confirmPrivacy: "I have reviewed the onboarding privacy information.",
      yesIConfirm: "Yes, I confirm",
      requiredSuffix: " (required)",
      optionalSuffix: " (optional)",
      chooseStatus: "Choose status",
      nothingYet: "Nothing yet",
      notSure: "Not sure",
      ready: "Ready",
      needsUpdating: "Needs updating",
      needHelp: "Need help",
      searchOptionsPrefix: "Search options for ",
      searchOptionsPlaceholder: "Search options…",
      noMatchingChoices: "No matching choices. Try another word or clear your search.",
      somethingElse: "Something else",
      addOwnOption: "Add your own option or explain",
      countryOrRegion: "Country or region",
      searchCountry: "Search or enter a country / region",
      timezone: "Timezone",
      searchTimezone: "Search a timezone, e.g. Asia/Kolkata",
      forFirstLaunch: "For the first launch",
      canWaitUntilLater: "Can wait until later",
      chooseOptionOrDescribe: "Choose an option or describe below",
      startWithUpToThree: "Start with up to three priorities",
      ideasForFuture: "Ideas for a future phase",
      chooseApprox: "Choose an approximate value",
      enterExact: "Enter an exact value instead",
      fewSentences: "A few sentences are enough",
      oneExampleOrLink: "One example or document link",
      remove: "Remove",
      addAnother: "+ Add another",
      quickAnswersLabel: "Quick answers",
      yourFirstPriority: "Your first priority",
      chooseMainPriority: "Choose your main priority",
      notSureSeeOther: "Not sure? See other ways to answer",
      changeAnswerSuffix: " · Change answer",
      addContactNote: "Add a contact, owner, or follow-up note",
      addNoteLink: "Add a short note or link (optional)",
      notePlaceholder:
        "A document link, clarification, colleague’s name, or availability",
      workspaceMemberPrefix: "Workspace member ",
      chooseAccess: "Choose requested access",
      viewProject: "View project",
      reviewAndComment: "Review and comment",
      supplyInputs: "Supply project inputs",
      needGuidance: "Need guidance",
      removeMember: "Remove member",
      addAnotherPerson: "+ Add another person",
      quickChoicesPrefix: "Quick choices for ",
      countries: [
        "Australia",
        "Bangladesh",
        "Brazil",
        "Canada",
        "China",
        "France",
        "Germany",
        "India",
        "Indonesia",
        "Ireland",
        "Italy",
        "Japan",
        "Kenya",
        "Malaysia",
        "Mexico",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nigeria",
        "Pakistan",
        "Philippines",
        "Saudi Arabia",
        "Singapore",
        "South Africa",
        "Spain",
        "Sri Lanka",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
      ],
    },
    previewPending: [
      "Verify the project or workspace contact email when you create your client account.",
      "Agree the project scope and complete the signed agreement.",
      "Have the agency verify the 40% advance against your agreed invoice.",
    ],
  },

  projectBrief: {
    serviceOptions: [
      "Ecommerce & websites",
      "Research & design",
      "Marketing & campaigns",
      "Automation & integrations",
      "Maintenance & performance",
    ],
    headerLine: "Starter Shifter — Project brief",
    nameLabel: "Your name",
    emailLabel: "Email",
    companyLabel: "Company (optional)",
    timingLabel: "Timing (optional)",
    timingPlaceholder: "For example, before a launch date",
    servicesLegend: "What could we help with?",
    servicesDescription: "Select any that fit, or leave this open.",
    goalsLabel: "What would you like to make possible?",
    goalsPlaceholder:
      "Tell us about your business, what you need, and the outcome you have in mind.",
    currentSetupLabel: "What is already in place? (optional)",
    currentSetupDescription:
      "An existing website, store, social pages, or business tools.",
    currentSetupPlaceholder:
      "Share the systems, platforms, or accounts you already use.",
    openEmailDraft: "Open email draft",
    downloadBrief: "Download project brief",
    emailDraftReady:
      "Your email draft is ready to open. Review it in your email app and send when you're ready.",
    downloadReady:
      "Your project brief is ready in your downloads. Nothing has been sent to Starter Shifter.",
    briefFields: {
      name: "Name: ",
      email: "Email: ",
      company: "Company: ",
      services: "Services: ",
      timing: "Timing: ",
      notSpecified: "Not specified",
      exploreOptions: "Let's explore the options",
      projectGoals: "Project goals:",
      alreadyInPlace: "What is already in place:",
      disclaimer:
        "This brief is a starting point for discussion, not an agreed scope or quote.",
    },
    emailSubjectPrefix: "Project enquiry — ",
    downloadFileName: "starter-shifter-project-brief.txt",
  },

  projects: [
    {
      id: "storefront-concept",
      title: "Storefront concept",
      category: "Ecommerce",
      description:
        "An illustrative storefront layout with a product collection and a clear path to shopping.",
      image: "/projects/storefront-concept.svg",
      imageAlt: "Concept storefront with a green hero and illustrated everyday bags",
      status: "Concept preview",
    },
    {
      id: "workspace-concept",
      title: "Operations workspace concept",
      category: "Web application",
      description:
        "An illustrative workspace bringing orders, inventory, and dispatch tasks into one view.",
      image: "/projects/workspace-concept.svg",
      imageAlt: "Concept operations dashboard showing an order table and workflow panels",
      status: "Concept preview",
    },
    {
      id: "studio-concept",
      title: "Creative website concept",
      category: "Website design",
      description:
        "An illustrative editorial website with bold typography and a focused collection of work.",
      image: "/projects/studio-concept.svg",
      imageAlt: "Concept creative website with large type and abstract sculptural artwork",
      status: "Concept preview",
    },
    {
      id: "support-concept",
      title: "Customer support concept",
      category: "AI workflow",
      description:
        "An illustrative support interface for conversations, common questions, and team handoffs.",
      image: "/projects/support-concept.svg",
      imageAlt: "Concept support workspace with a conversation list and customer chat",
      status: "Concept preview",
    },
  ] as Project[],

  shared: {
    /** Delivery-stage status labels (client journey). */
    deliveryStageStatusLabels: {
      upcoming: "Upcoming",
      "in-progress": "In progress",
      complete: "Complete",
      blocked: "Needs attention",
    } as Record<string, string>,
    /** Default delivery stages seeded per client; the agency edits them in the database. */
    defaultDeliveryStages: [
      {
        stageId: "brief",
        title: "Your project brief",
        description:
          "Share your business, goals, content, and requirements. Your answers help shape the project discussion.",
      },
      {
        stageId: "activation",
        title: "Agreement & activation",
        description:
          "Your agency verifies the contact details, signed agreement, 40% advance, and project dependencies before activation.",
      },
      {
        stageId: "research",
        title: "Research & direction",
        description:
          "Business, market, and competitor research establishes the direction. Timing and deliverables follow your agreed project scope.",
      },
      {
        stageId: "design",
        title: "Design & feedback",
        description:
          "Explore the agreed design work, review drafts, and share feedback. The number of variants and revisions follows your agreement.",
      },
      {
        stageId: "build",
        title: "Build & connect",
        description:
          "The agreed website, content, workflows, and supported connections take shape. Selected requirements are confirmed in the project scope.",
      },
      {
        stageId: "handoff",
        title: "Review & handoff",
        description:
          "Review the agreed deliverables and prepare for handoff. Launch requirements and ongoing support depend on your engagement.",
      },
    ] as { stageId: string; title: string; description: string }[],
    /** Document upload categories (client workspace). */
    documentCategories: [
      "Brand assets",
      "Content & copy",
      "Documents",
      "Technical",
      "Other",
    ] as const,
    /** Workspace navigation labels. */
    workspaceViewNames: {
      overview: "Overview",
      brief: "Project brief",
      journey: "Project journey",
      resources: "Brand & resources",
      agreement: "Agreement & billing",
    } as Record<string, string>,
    /** Question status labels (onboarding + brief). */
    questionStatusLabels: {
      answered: "Answered",
      later: "For later",
      pending: "Not answered",
      attention: "Needs attention",
      review: "Review",
    } as Record<string, string>,
    /** Answer-state labels (onboarding engine + fields). */
    answerStateLabels: {
      answered: "Answer now",
      unknown: "Not sure yet",
      "not-applicable": "Not applicable",
      deferred: "Provide later",
      help: "Discuss with us",
    } as Record<string, string>,
    /** Onboarding dashboard prerequisite labels. */
    prerequisites: {
      briefLabel: "Project brief",
      briefSubmitted: "Your brief has been submitted.",
      briefDetail: "Complete and submit your project details.",
      identityLabel: "Contact verification",
      identityDetail: "Your project and workspace contact emails.",
      agreementLabel: "Signed agreement",
      agreementDetail: "Confirm the scope with your agency.",
      advanceLabel: "40% advance",
      advanceDetail: "Agency verification against your agreed invoice.",
      responsiblePrefix: "Responsible: ",
    },
    /** Onboarding dashboard derived activity labels. */
    activity: {
      briefSaved: "Project brief saved",
      briefSubmitted: "Brief submitted",
      briefSubmittedDetail: "Your project details are ready for review",
      engagementUpdated: "Engagement record updated",
      engagementUpdatedDetail: "Scope and prerequisites recorded",
    },
    /** Asset readiness status labels. */
    assetStatusLabels: {
      ready: "Ready",
      "needs-updating": "Needs updating",
      "needs-help": "Needs help",
      "not-available": "Not available",
      recorded: "Recorded in brief",
    } as Record<string, string>,
    /** Business name / description fallbacks in the workspace. */
    workspaceFallback: {
      businessName: "Your next chapter",
      description:
        "A dedicated space for your business, your brief, and everything that comes next.",
      personalNameOption: "Use my personal name",
    },
    /** formatAnswer fallback. */
    notAnswered: "Not answered",
    confirmed: "Confirmed",
    notConfirmed: "Not confirmed",
    firstPriorityPrefix: "First priority: ",
  },
};

/** The full shape of the site content. Translation dictionaries extend this. */
export type Content = typeof content;

export const hasConceptPreviews = (content.projects as Project[]).some(
  (project) => project.status === "Concept preview",
);
