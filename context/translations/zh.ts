import type { TranslationDictionary } from "../i18n";

/** Chinese (Simplified) localization. */
export const zh: TranslationDictionary = {
  brand: {
    homeAriaLabel: "Starter Shifter 首页",
    tagline: "连接您的业务",
    footerNote: "从您的第一家在线商店到其背后的工作流程。围绕您的业务而构建。",
    footerWorldwide: "我们与全球各地的企业合作。",
  },

  common: {
    skipToContent: "跳到内容",
    backToHome: "返回首页",
    policyAwaitingApproval: "政策待批准",
    prepareProjectBrief: "准备项目简报",
    policyNavigationLabel: "政策信息",
    privacy: "隐私",
    cookies: "Cookie",
    serviceTerms: "服务条款",
    exploreServices: "了解我们的服务",
    planYourProject: "规划您的项目",
    supportAndCare: "支持与关怀",
    viewAllProducts: "查看全部产品",
    getStarted: "开始使用",
    resourceNoteDefault: "Starter Shifter · 资源",
    openNavigation: "打开导航",
    closeNavigation: "关闭导航",
    loadingPage: "正在加载页面",
    explorePrefix: "探索 ",
    illustrationSuffix: " 插图",
    loading: {
      site: "正在加载 Starter Shifter",
      signInOptions: "正在加载登录选项",
      onboardingInformation: "正在加载您的入职信息",
      workspace: "正在加载您的工作区",
      projectBrief: "正在加载您的项目简报",
    },
    opensInNewTab: "在新标签页中打开",
  },

  metadata: {
    home: {
      title: "Starter Shifter — 连接您的业务",
      description:
        "电子商务、创意指导、自动化与互联运营。Starter Shifter 帮助企业在线上开启新篇章，服务范围围绕其需求量身定制。",
    },
    about: {
      title: "关于我们 — Starter Shifter",
      description:
        "了解 Starter Shifter，一家通过研究、设计、开发与自动化，帮助全球企业连接其网站、社交形象与运营的机构。",
    },
    faq: {
      title: "常见问题 — Starter Shifter",
      description:
        "关于 Starter Shifter 的 Basic 与 Pro 套餐、入职、交付阶段、网站、集成、持续支持以及如何启动项目的解答。",
    },
    howWeWork: {
      title: "我们的工作方式 — Starter Shifter",
      description:
        "Starter Shifter 从发现与范围界定到设计、构建、上线与持续支持的交付阶段，包括入职要求与首次研究交接。",
    },
    products: {
      title: "产品与模板 — Starter Shifter",
      description:
        "探索 Starter Shifter 的网站、应用与互联体验。概念预览与已完成的客户项目分开标注。",
    },
    support: {
      title: "支持与关怀 — Starter Shifter",
      description:
        "Starter Shifter 如何在上线后处理维护、支持与持续改进，包括 Basic 与 Pro 的覆盖边界。",
    },
    privacy: { title: "隐私信息 — Starter Shifter" },
    cookies: { title: "Cookie 信息 — Starter Shifter" },
    terms: { title: "服务条款信息 — Starter Shifter" },
    onboardingPrivacy: { title: "您的入职信息 — Starter Shifter" },
    login: { title: "加入我们 | Starter Shifter" },
    dashboard: { title: "客户工作区 — Starter Shifter" },
    dashboardPreview: { title: "您的工作区 — Starter Shifter" },
    onboarding: { title: "您的项目简报 — Starter Shifter" },
    onboardingPreview: { title: "入职预览 — Starter Shifter" },
  },

  navigation: {
    sections: [
      {
        label: "服务",
        items: [
          { title: "电子商务网站", description: "围绕您的销售方式打造的店面。", href: "/services/ecommerce" },
          { title: "社交与营销", description: "SEO、邮件与社交形象，规划并交付。", href: "/services/social-campaigns" },
          { title: "聊天机器人与自动化", description: "常见问题得到解答，其余问题被转接。", href: "/services/chatbots-automation" },
          { title: "库存系统", description: "清晰、可靠的库存视图。", href: "/services/inventory" },
          { title: "配送与订单", description: "订单与发货之间的手动步骤更少。", href: "/services/shipping-orders" },
          { title: "ERP 与 CRM 集成", description: "您的业务工具，协同工作。", href: "/services/erp-crm-integrations" },
          { title: "维护与支持", description: "上线后的持续技术支持。", href: "/services/maintenance-support" },
          { title: "性能优化", description: "发现并解决瓶颈问题。", href: "/services/performance" },
          { title: "研究与创意指导", description: "市场洞察与 Figma 设计草案。", href: "/services/research-creative-direction" },
          { title: "演示与规划", description: "尽早共享项目全景视图。", href: "/services/project-planning" },
        ],
        footer: {
          text: "Basic 一次性 $2,500。Pro 为 $2,500 加 $500/月。",
          linkLabel: "查看定价",
          href: "#pricing",
        },
      },
      {
        label: "资源",
        items: [
          { title: "我们的工作方式", description: "从发现到上线的交付阶段。", href: "/how-we-work" },
          { title: "常见问题", description: "常见问题，通俗解答。", href: "/faq" },
          { title: "产品与模板", description: "探索我们的网站与应用。", href: "/products" },
          { title: "支持与关怀", description: "为上线后的项目提供帮助。", href: "/support" },
        ],
      },
    ],
    directLinks: [
      { title: "关于我们", description: "Starter Shifter 是谁以及我们如何工作。", href: "/about" },
      { title: "定价", description: "比较 Basic 搭建与 Pro 持续支持。", href: "/#pricing" },
    ],
    cta: "开始使用",
    mainNavigationLabel: "主导航",
    mobileNavigationLabel: "移动端导航",
  },

  footer: {
    ariaLabel: "Starter Shifter 页脚",
    socialProfilesLabel: "社交主页",
    policyNote: "政策状态与当前信息。",
    navigation: [
      {
        key: "company",
        title: "公司",
        links: [
          ["关于我们", "/about"],
          ["我们的工作方式", "/how-we-work"],
          ["产品与模板", "/products"],
          ["套餐与定价", "/#pricing"],
        ],
      },
      {
        key: "services",
        title: "服务",
        links: [
          ["Web 应用", "/#services"],
          ["社交媒体", "/#services"],
          ["AI 工作流", "/#services"],
          ["互联运营", "/#process"],
          ["维护与增长", "/#pricing"],
        ],
      },
      {
        key: "resources",
        title: "资源",
        links: [
          ["客户登录", "/login"],
          ["我们的工作方式", "/how-we-work"],
          ["常见问题", "/faq"],
          ["项目简报", "/project-brief"],
          ["支持与关怀", "/support"],
        ],
      },
      {
        key: "information",
        title: "信息",
        links: [
          ["隐私", "/policies/privacy"],
          ["Cookie", "/policies/cookies"],
          ["服务条款", "/policies/terms"],
        ],
      },
    ],
  },

  landing: {
    hero: {
      eyebrow: "您的电商与数字增长机构",
      titleLines: ["您的下一个篇章", "从一个更好的商店开始。"],
      description:
        "从您的第一家在线商店到其背后的系统。我们将设计、电商与互联运营融为一体，围绕您的业务而构建。",
      primaryCta: "让我们构建您的商店",
      secondaryCta: "了解我们的服务",
      note: "您的业务。您的范围。无论您身在何处。",
    },
    services: {
      kicker: "我们做什么",
      titleLines: ["外在优秀。", "内在互联。"],
      intro:
        "您的线上形象。您的社交声音。其背后的工作流程。三项互联服务，围绕您的业务而打造。",
      cards: [
        { title: "Web 应用", text: "网站与 Web 应用，其设计与开发围绕您业务的运作方式而打造。" },
        { title: "社交媒体与营销", text: "SEO 管理、邮件营销，以及覆盖 WhatsApp、LinkedIn、Pinterest 等平台的社交媒体。" },
        { title: "AI 工作流", text: "互联工具、任务自动化与客户聊天流程，在需要时让您的团队介入。" },
      ],
      illustrationLabels: {
        web: "探索 Web 应用插图",
        social: "探索社交媒体插图",
        ai: "探索 AI 工作流插图",
      },
    },
    projects: {
      kicker: "产品与模板",
      titleLines: ["进一步了解", "我们构建的内容。"],
      intro:
        "网站、应用与互联体验。逐一探索整个作品集。",
      cta: "查看全部产品",
      showcaseLabel: "项目展示",
    },
    process: {
      kicker: "我们如何让您上线",
      titleLines: ["从理解您的业务", "到将其连接到线上。"],
      intro:
        "互联数字形象的五个阶段。我们商定您的项目所需的服务，然后围绕该范围进行构建。",
      linkLabel: "阅读完整交付指南",
      steps: [
        {
          title: ["研究与", "方向"],
          description:
            "我们了解您的业务，研究您的市场，并分析竞争对手。这些洞察塑造计划与供您审阅的初步设计方向。",
          details: ["业务研究", "市场分析", "竞品洞察"],
          note: "研究深度与设计交付物已为您的项目商定。",
          phase: "理解",
        },
        {
          title: ["您的业务，", "在线上构建"],
          description:
            "我们在 Shopify 或 WordPress 上设计并构建您的网站或 Web 应用，在需要商店时使用 WooCommerce。平台与功能遵循您业务的运作方式。",
          details: ["Shopify 或 WordPress", "设计与开发", "上线与交接"],
          note: "您提供业务内容、产品详情、账户访问权限与审批。",
          phase: "构建",
        },
        {
          title: ["一个社交", "形象"],
          description:
            "我们搭建您的数字营销：SEO 管理、邮件营销，以及覆盖 WhatsApp、LinkedIn、Pinterest 与您业务所需其他渠道的社交媒体。重点是让您更容易被找到和理解。",
          details: ["SEO 管理", "邮件营销", "WhatsApp、LinkedIn 与 Pinterest"],
          note: "Basic 包含完整的营销搭建——SEO、邮件与社交媒体——作为一次性工作。Pro 增加潜在客户获取与增长工作，但不保证潜在客户数量。",
          phase: "确立",
        },
        {
          title: ["帮助您", "回应的 AI"],
          description:
            "我们为客户常见问题与支持工作流配置聊天机器人，并在受支持的社交渠道上连接。需要您团队的对话将转交给人工处理。",
          details: ["客户聊天机器人", "受支持的社交渠道", "人工接管"],
          note: "渠道访问权限、已批准的常见问题与软件使用限制塑造该配置。",
          phase: "自动化",
        },
        {
          title: ["互联。", "被关怀。"],
          description:
            "我们维护并改进已商定的系统，并连接受支持的业务工具：用于运营的 ERP 与用于客户关系的 CRM。配送与发票工作流可以成为这些集成的一部分。",
          details: ["维护与性能", "ERP 与 CRM 连接", "配送与开票"],
          note: "集成取决于第三方能力。持续关怀按月计费；第三方费用另计。",
          phase: "连接与维护",
        },
      ],
    },
    about: {
      kicker: "关于我们的一些情况",
      titleLines: ["您的业务在线。", "一切协同运作。"],
      intro: "我们是 Starter Shifter。您的网站、社交形象与工作流，为协同运作而构建。",
      benefits: [
        { title: "构建之前先清晰", description: "为您的下一步指明方向的研究。" },
        { title: "您的工具，互联", description: "受支持的连接。更少的手动步骤。" },
        { title: "您的业务，在线", description: "围绕您而打造的网站或商店。" },
        { title: "一致的社交形象", description: "您的品牌，融入页面与模板。" },
        { title: "富有人情味的支持", description: "AI 处理日常事务。关键时刻由您的团队出面。" },
        { title: "看清需要关注之处", description: "发现瓶颈。专注于更好的性能。" },
      ],
      ctaTitleLines: ["让您的", "下一步数字化。"],
      ctaLabel: "谈谈您的项目",
    },
    pricing: {
      label: "我们的套餐",
      title: "选择您需要的支持。",
      recommendedBadge: "推荐",
      plans: [
        {
          name: "Basic 套餐",
          description: "完整的构建与数字营销搭建，一次性交付。",
          price: "$2,500",
          payment: "一次性付款",
          billing: "您的应用与营销，构建完成并交接。",
          includes: "包含内容",
          features: [
            "业务、市场与竞品研究",
            "Figma 设计与创意指导",
            "网站或电商应用开发",
            "SEO 管理",
            "邮件营销",
            "社交媒体营销——WhatsApp、LinkedIn、Pinterest 及更多",
            "AI 聊天机器人与客户支持自动化搭建",
            "库存、配送与发票工作流搭建",
            "受支持的 ERP 与 CRM 集成",
            "上线与交接",
          ],
          boundary:
            "一次性构建与营销搭建。我们不承诺潜在客户获取，也不进行持续维护。您需支付托管、域名、广告支出与支付费用。",
          action: "选择 Basic 套餐",
        },
        {
          name: "Pro 套餐",
          description: "包含 Basic 的全部内容，外加一支团队来维护并推动其增长。",
          price: "$2,500",
          payment: "一次性搭建",
          monthly: "$500",
          monthlyPeriod: "/ 月",
          billing: "用于维护与潜在客户获取",
          includes: "包含 Basic 的全部内容，外加",
          features: [
            "持续维护与技术支持",
            "性能增强与监控",
            "潜在客户获取与活动管理",
            "保持 SEO 与营销与时俱进",
            "业务增长战略与规划",
            "客户咨询与客户处理",
            "聊天机器人与自动化管理",
            "持续的工作流与集成维护",
          ],
          boundary:
            "我们积极进行潜在客户获取并帮助您的业务增长。潜在客户数量不保证——如果某种方式无效，我们会重构并测试其他方式。广告支出另计。",
          action: "选择 Pro 套餐",
        },
      ],
      terms:
        "交付物、数量、受支持的工具与月度覆盖范围在工作开始前商定。您提供业务内容、账户访问权限与审批。托管、域名、软件、许可证、使用费、广告支出以及支付或配送费用由您支付，且与机构费用分开。三个组之外的附加服务另行报价。",
      footerLink: "了解持续支持涵盖的内容",
    },
    faq: {
      kicker: "更多清晰度",
      titleLines: ["好问题。", "清晰解答。"],
      intro: "每家企业起点不同。以下是我们开始合作前需要了解的内容。",
      linkLabel: "浏览全部常见问题",
      questions: [
        {
          question: "具体包含哪些内容？",
          answer:
            "Basic 作为一次性工作涵盖完整构建与数字营销搭建：您的网站或电商应用、SEO 管理、邮件营销，以及覆盖 WhatsApp、LinkedIn、Pinterest 及按您需求的其他渠道的社交媒体营销。Pro 在 Basic 的全部内容之上，每月增加 $500，用于持续维护、性能与潜在客户获取。这三个领域之外的服务另行报价。",
        },
        {
          question: "Basic 与 Pro 有什么区别？",
          answer:
            "Basic 为 $2,500 一次性费用，交付完整的应用构建与营销搭建，然后交接。Pro 为 $2,500 进行相同搭建，另加每月 $500 用于持续维护、性能增强与潜在客户获取。Basic 不包含潜在客户获取或持续维护。两个套餐均不保证潜在客户数量。",
        },
        {
          question: "是否有额外或隐藏费用？",
          answer:
            "托管、域名、广告支出、支付费用与其他第三方费用由您支付，不包含在机构费用中。如果您需要三个覆盖领域之外的服务，或超出已商定范围的工作，将另行报价。",
        },
        {
          question: "开始之前您需要我们提供什么？",
          answer:
            "签署合同、40% 预付款，以及您的公司与项目详情。然后您完成入职，并通过仪表板提供任何额外信息或文件——包括目录与产品图片，以便我们构建准确的模型。",
        },
        {
          question: "我们的项目需要多长时间？",
          answer:
            "研究首次交接与 Figma 设计草案的目标是在入职完成后最多 3–4 天内完成。之后我们每周安排两次 Google Meet 通话，分享进展与更新，直到您的应用构建完成并交接。",
        },
        {
          question: "您能连接我们已在使用的工具吗？",
          answer:
            "我们提供商店、库存、配送与业务系统（如 ERP 与 CRM 工具）之间的集成。在确认兼容性与涉及的工作之前，我们会审查您的确切系统、可用访问权限与平台限制。",
        },
        {
          question: "上线后您能提供帮助吗？",
          answer:
            "可以。Pro 包含每月 $500 用于持续维护与支持：我们增强性能，让您的 SEO 与营销保持最新，并努力实现更好的销售。Basic 为一次性服务，但每位一次性客户在入职后的头一个月内仍得到支持——我们处理请求的更改与错误修复。该月之后，如果您不继续使用 Pro，进一步的帮助将根据问题与所需服务报价。",
        },
        {
          question: "交接后网站与账户归谁所有？",
          answer:
            "归您所有。交接后，您管理网站、其账户与内容。除非您希望获得持续支持，我们不要求您继续使用我们的服务。",
        },
        {
          question: "您是否保证潜在客户或销售？",
          answer:
            "我们无法承诺具体数字，因为结果主要取决于市场。Pro 客户获得的是积极、持续的潜在客户获取：我们努力引入潜在客户与销售，如果某种方式无效，我们会重构并测试其他方式，以找到适合您业务的方法。",
        },
      ],
    },
    contact: {
      intro: "您的下一个篇章",
      titleLines: ["让我们实现您的", "下一步。"],
      description:
        "更好的在线商店、更强的社交形象，或互联的工作流。从您业务所需之处开始。",
      cta: "规划您的项目",
      dialogTitle: "告诉我们您的想法。",
      dialogDescriptionWithEmail:
        "创建一份简短的项目简报，然后在您的邮件应用中打开以发送给我们。",
      dialogDescriptionWithoutEmail:
        "将您的想法写成一份可下载分享的简短简报。此表单会将文件保存到您的设备；不会发送咨询。",
      secondaryLink: "了解我们的服务",
    },
  },

  pages: {
    about: {
      eyebrow: "关于 Starter Shifter",
      note: "与全球各地的企业合作",
      titleLines: ["您的业务。", "它的下一个篇章"],
      titleMark: "在线。",
      lede:
        "我们是 Starter Shifter，一家帮助企业将产品与运营上线的机构。我们连接客户看到的网站与其背后的工具和工作流。",
      primaryCta: "向我们介绍您的业务",
      secondaryCta: "了解我们的套餐",
      facts: [
        { label: "专注", value: "Web、社交与 AI 工作流" },
        { label: "覆盖", value: "全球各地的企业" },
        { label: "合作方式", value: "Basic 搭建或 Pro 支持" },
      ],
      statementEyebrow: "简短版本",
      statementTitle:
        "我们连接客户看到的网站与您团队所依赖的工作流。",
      statementParagraphs: [
        "我们与全球各行业的企业合作。无论您是建立线上形象还是改进现有设置，起点都是您的业务及其需求。",
        "我们的方法将研究、设计、开发与受支持的集成纳入一个已商定的计划，让每个部分都有明确的目的。",
      ],
      workLabel: "我们做什么",
      workTitleLines: ["三个领域。", "一个互联的计划。"],
      workAside:
        "三个工作领域，围绕您业务销售、沟通与运营的方式而打造。",
      workLink: "了解我们的服务",
      services: [
        {
          title: "Web 应用",
          description:
            "围绕您的产品与客户打造的网站与电商商店。我们在 Shopify 或 WordPress 及 WooCommerce 上结合研究、创意指导与开发，平台与功能已为您的项目商定。",
          tags: ["Shopify", "WordPress + WooCommerce", "设计与构建"],
        },
        {
          title: "社交媒体与数字营销",
          description:
            "SEO 管理、邮件营销，以及覆盖 WhatsApp、LinkedIn、Pinterest 及按您需求的其他渠道的社交媒体营销。对于 Pro 项目，我们还会商定您业务所需的持续活动与潜在客户获取。",
          tags: ["SEO", "邮件营销", "WhatsApp、LinkedIn 与 Pinterest"],
        },
        {
          title: "AI 工作流",
          description:
            "聊天机器人与受支持的自动化，帮助回答常见问题、转接咨询并减少重复工作。在平台支持的情况下，我们可以连接已商定的库存、配送、开票与业务工具。",
          tags: ["聊天机器人", "客户支持", "受支持的集成"],
        },
      ],
      processLabel: "我们的工作方式",
      processTitleLines: ["先研究。", "清晰的前进路径。"],
      processIntro:
        "您对业务的了解与我们的研究指导工作。共同决策让设计、构建与交接保持一致。",
      gateLabel: "工作开始之前",
      gateItems: ["签署合同", "40% 预付款", "公司与项目详情"],
      steps: [
        {
          title: "理解您的业务",
          description:
            "我们讨论您的目标、产品、客户与现有系统，然后商定交付物、责任、时间线与成本。",
        },
        {
          title: "找到共同方向",
          description:
            "公司、市场与竞品研究形成基础的 Figma 设计草案。您审阅方向并分享反馈，之后我们进入已商定的构建与互联工作流。",
        },
        {
          title: "构建、上线并规划后续",
          description:
            "我们实现并测试选定的网站与工作流，以及您的内容、账户访问权限与审批。交接与任何持续维护或增长工作遵循为您的套餐商定的覆盖范围。",
        },
      ],
      scopeLabel: "携手合作",
      scopeTitleLines: ["清晰范围。", "共同期望。"],
      scopeIntro:
        "工作开始前，我们明确所选服务、您提供的内容，以及机构费用之外的部分。",
      scope: [
        {
          label: "您获得的内容",
          description:
            "Basic 作为一次性工作涵盖完整的应用构建加数字营销——SEO 管理、邮件营销与社交媒体营销。Pro 增加持续维护、性能增强与潜在客户获取。",
        },
        {
          label: "您提供的内容",
          description:
            "已商定的内容、业务信息、产品目录与图片、账户访问权限与审批。时间线取决于这些输入以及第三方平台的审批。",
        },
        {
          label: "另计的项",
          description:
            "平台订阅、托管、域名、付费应用、使用费、广告支出与支付费用由您支付，与机构费用分开。",
        },
      ],
      scopeCta: "比较 Basic 与 Pro",
      scopeFooter:
        "交付物、数量、受支持的工具、修订与支持覆盖范围在工作开始前商定。",
    },

    faq: {
      eyebrow: "资源 / 常见问题",
      note: "细节，通俗解答",
      titleLines: ["好问题。", "清晰解答。"],
      titleMark: "清晰解答。",
      description:
        "关于范围、定价、时间线、集成与支持的实用细节——以我们在首次对话中解释的方式书写。",
      facts: [
        { label: "套餐", value: "Basic 与 Pro" },
        { label: "入职", value: "合同、预付款与详情" },
        { label: "覆盖", value: "按项目商定" },
      ],
      sectionIndex: "01",
      sectionLabel: "常见问题",
      sectionTitleLines: ["直截了当的解答，", "没有小字条款。"],
      sectionIntro:
        "如果您的问题不在此处，请启动一份项目简报，告诉我们您想解决的问题。我们会直接回答。",
      jumpTo: "跳转到",
      categoriesLabel: "常见问题分类",
      groups: [
        {
          id: "faq-plans",
          label: "套餐与范围",
          questions: [
            {
              question: "Starter Shifter 是什么？",
              answer:
                "Starter Shifter 是一家帮助企业将产品与运营上线的机构。我们涉及网站与电商应用、社交形象、聊天机器人与自动化、集成，以及其背后的系统。客户可以位于任何地方，每个范围都围绕业务而打造。",
            },
            {
              question: "Basic 与 Pro 有什么区别？",
              answer:
                "Basic 为 $2,500 一次性费用。它涵盖完整的应用构建加数字营销搭建：研究与设计、网站或电商应用开发、SEO 管理、邮件营销，以及覆盖 WhatsApp、LinkedIn、Pinterest 及按需求的其他渠道的社交媒体营销，另加聊天机器人与自动化搭建、受支持的运营集成与上线。交接后您自行管理潜在客户获取与持续工作。Pro 为 $2,500 进行相同搭建，另加每月 $500 用于持续维护、性能增强、潜在客户获取以及保持 SEO 与营销与时俱进。交付物与覆盖范围提前商定；潜在客户数量不保证，且托管、域名、广告支出与支付费用等第三方成本由您支付。",
            },
            {
              question: "我们可以只选择套餐的一部分吗？",
              answer:
                "可以。Basic 与 Pro 是最常见范围的起点。如果您需要更小、更大或不同的合作，我们可以讨论量身定制的范围。所选工作、价格、时间线与责任在工作开始前商定。",
            },
            {
              question: "套餐价格之外还有其他成本吗？",
              answer:
                "有。托管、域名、广告支出、支付处理费用与其他第三方费用由您支付，与机构费用分开。平台订阅、主题、应用、插件与许可证，ERP、CRM、聊天机器人及其他软件订阅，使用费、素材许可以及配送或履约费用也由您承担。三个覆盖领域之外的服务，或超出已商定范围的工作，另行报价。",
            },
            {
              question: "您是否保证潜在客户、销售或增长？",
              answer:
                "我们无法承诺具体的潜在客户或销售数量——结果主要取决于市场与我们无法控制的因素。对于 Pro，我们承诺的是工作本身：我们积极进行潜在客户获取并帮助您的业务增长，如果某种方式没有成效，我们会重构并测试其他方式以找到适合的方法。我们将与您一起推进，而不仅仅是交给您一套配置。",
            },
            {
              question: "付款如何运作？",
              answer:
                "入职以签署的共同合同与 40% 预付款为前提，并附您的公司与项目详情。剩余付款时间与其他商业条款在您的合同中约定。Basic 为一次性费用；Pro 结合搭建费与月度费用。其他付款或法律条款单独商定。",
            },
          ],
        },
        {
          id: "faq-process",
          label: "流程与时间",
          questions: [
            {
              question: "开始之前您需要我们提供什么？",
              answer:
                "签署的共同合同、40% 预付款，以及您的公司与项目详情。根据范围，我们可能还需要产品信息、品牌素材、现有工具的访问权限、政策、税务与配送规则，以及能够审阅并批准工作的联系人。",
            },
            {
              question: "我们的项目需要多长时间？",
              answer:
                "研究首次交接与 Figma 设计草案的目标是在入职完成后最多 3–4 天内完成。完整构建随后取决于范围、技术要求、内容就绪情况、第三方审批与审阅周期。我们每周安排两次 Google Meet 通话分享进展，并在提案中商定里程碑与时间。",
            },
            {
              question: "预期的早期交接是什么？",
              answer:
                "在签署合同、40% 预付款与公司/项目详情完成后，我们目标在 3–4 天内完成首次交接，包括公司、市场与竞品研究，以及带变体的基础 Figma 设计草案。确切的时间起算点、研究深度、变体数量与修订额度为您的项目确认。交接是确定方向的一步，不是完成后的网站或全部集成。",
            },
            {
              question: "修订如何运作？",
              answer:
                "您在范围内的决策点审阅已商定的工作，并分享汇总反馈。修订额度在工作开始前商定。如果某项请求更改了已商定范围或新增工作，我们会在继续之前明确额外工作、价格与时间线。",
            },
            {
              question: "如果我们的内容或访问权限延迟了会怎样？",
              answer:
                "时间线取决于我们商定的输入。如果内容、账户访问权限、审批或第三方回复延迟，日程可能调整。我们会标明该依赖并商定修订后的计划，而不是默默吸收延误。",
            },
          ],
        },
        {
          id: "faq-build",
          label: "网站与集成",
          questions: [
            {
              question: "您在哪些平台上构建？",
              answer:
                "我们在 Shopify 或 WordPress 上构建网站与电商应用，在需要商店时使用 WooCommerce。如果其他平台或网站构建器可能更合适，我们会在承诺前审查支持与可行性。平台方案在您的提案中确认。",
            },
            {
              question: "您能重新设计或迁移现有网站吗？",
              answer:
                "我们可以讨论重新设计或迁移，但它不会自动包含在 Basic 或 Pro 中。我们首先审查当前网站、内容、产品、集成与重定向。迁移范围、风险与价格另行商定。",
            },
            {
              question: "您能连接我们已在使用的工具吗？",
              answer:
                "我们提供商店、库存、配送、开票与业务系统（如 ERP 与 CRM 工具）之间的集成。兼容性取决于确切系统、版本、访问权限、API 与平台限制。我们在确认可连接内容与涉及工作之前审查这些。",
            },
            {
              question: "您构建原生移动应用吗？",
              answer:
                "我们已确认的工作是网站与 Web 应用。如果您考虑原生移动应用，请尽早提出，以便我们确认它是否适合该合作。它不会被视为网站或电商构建的一部分。",
            },
            {
              question: "您能搭建聊天机器人与社交自动化吗？",
              answer:
                "可以，作为已商定的配置。我们设计用例、连接受支持的渠道、使用经批准的知识来源、设定边界，并在需要时安排人工接管。确切的渠道支持、对话量、权限与使用成本在可行性阶段确认。我们不承诺完全自主的支持，也不承诺覆盖所有社交网络。",
            },
          ],
        },
        {
          id: "faq-after-launch",
          label: "上线之后",
          questions: [
            {
              question: "上线后您能提供帮助吗？",
              answer:
                "可以。Pro 在 $2,500 搭建费之外，每月另含 $500 用于持续维护与支持。我们增强性能，让您的 SEO 与营销保持最新，并努力实现更好的销售。Basic 为一次性搭建，但每位一次性客户在入职后的头一个月内仍得到支持——我们处理请求的更改与错误修复。头一个月后，如果您不继续使用 Pro，进一步的帮助将根据问题与所需服务报价。",
            },
            {
              question: "维护涵盖什么？",
              answer:
                "典型覆盖可包括例行检查、适用的更新与兼容性检查、错误修复、监控、按商定的备份与恢复任务，以及支持处理。确切列表取决于您的系统与所购买的覆盖范围。新功能与覆盖范围之外的工作需要自己的范围。",
            },
            {
              question: "您提供 7×24 支持或保证的响应时间吗？",
              answer:
                "我们不发布通用的 7×24 或响应时间承诺。支持时段、渠道、容量、响应目标与升级机制在您的支持范围中商定。如果您需要特定的服务水平，请在合作前提出，以便我们确认能否满足。",
            },
            {
              question: "交接后网站与账户归谁所有？",
              answer:
                "归您所有。交接后，您管理网站、其账户与内容。除非您希望获得持续支持，我们不要求您继续使用我们的服务。平台账户、许可证与第三方服务可能仍受其自身条款约束。",
            },
            {
              question: "您能运营我们的广告与潜在客户获取吗？",
              answer:
                "Pro 在商定范围内包含机构管理的潜在客户获取与活动工作。Basic 不包含机构运营的潜在客户获取。我们积极努力引入潜在客户与销售，如果某种方式无效，我们会重构并测试其他方式。广告支出始终由您支付，与机构费用分开，且潜在客户数量不保证——结果取决于市场。渠道、活动范围、内容数量与报告频率提前商定。",
            },
          ],
        },
        {
          id: "faq-working",
          label: "携手合作",
          questions: [
            {
              question: "我们如何启动项目？",
              answer:
                "从本站的项目简报开始。我们用它来了解您的业务与目标，然后讨论合适的范围。如果合适，您会收到一份包含交付物、排除项、定价、时间线与责任的提案。工作在签署合同、40% 预付款与项目详情完成后开始。",
            },
            {
              question: "您与贵国以外的企业合作吗？",
              answer:
                "合作。Starter Shifter 与全球各地的企业合作。我们不声称在每个市场都具备本地法律、税务或平台覆盖，因此针对您辖区的特定要求会为您的项目确认。",
            },
            {
              question: "您如何处理我们的信息？",
              answer: {
                before:
                  "我们使用您分享的详情来了解您的业务并准备或交付已商定的服务。我们不会出售您的简报，也不会与其他企业分享用于其自身用途。我们的 ",
                linkLabel: "隐私信息",
                linkHref: "/policies/privacy",
                after:
                  " 说明了当前的项目简报与客户门户，并标明哪些内容仍在等待批准。",
              },
            },
            {
              question: "如果我们不确定需要什么怎么办？",
              answer:
                "这是正常的起点。分享业务问题与现有情况。我们可以帮助确定最小的合理范围，包括是否应先进行研究或发现步骤。您无需在首次对话前选择套餐。",
            },
            {
              question: "项目简报是合同或报价吗？",
              answer:
                "不是。项目简报是讨论的起点。它不构成协议、不预留时间，也不设定价格。提案与签署的合同定义范围与商业条款。",
            },
          ],
        },
      ],
    },

    howWeWork: {
      eyebrow: "资源 / 我们的工作方式",
      note: "交付，通俗解释",
      titleLines: ["从首次对话到的一条清晰路径"],
      titleMark: "持续关怀。",
      description:
        "每个项目各不相同，但我们推进的方式不变。这些是我们用来理解您的业务、商定范围、构建工作并支持后续事宜的阶段。",
      facts: [
        { label: "起点", value: "合同、40% 预付款与详情" },
        { label: "首次交接", value: "研究与 Figma 方向" },
        { label: "合作方式", value: "Basic 搭建或 Pro 支持" },
      ],
      prerequisitesTitleLines: ["当基础清晰时", "入职开始。"],
      prerequisitesLabel: "起点",
      prerequisitesIntro:
        "入职以三个前提为条件。它们保护双方：范围被理解、承诺真实，且我们有足够的背景来开始有效工作。",
      prerequisites: [
        {
          title: "签署的共同合同",
          description:
            "合同记录已商定的范围、责任与商业条款。工作仅在签署后开始。",
        },
        {
          title: "40% 预付款",
          description:
            "预付款确认合作并让我们预留交付时间。剩余付款条款在您的合同中约定。",
        },
        {
          title: "公司与项目详情",
          description:
            "我们需要关于您业务、目标与现有设置的足够背景，才能开始研究与入职。",
        },
      ],
      prerequisitesFootNote:
        "付款之前，您的提案说明所选服务、交付物、排除项、时间线、责任与成本。进一步工作需要就范围、价格与时间线做出明确决定。",
      stagesTitleLines: ["八个阶段，围绕", "您真正需要的工作而打造。"],
      stagesLabel: "交付路径",
      stagesIntro:
        "这些阶段描述我们的运作方式。您的提案确认哪些适用、包含什么，以及完成对您的项目意味着什么。",
      stages: [
        {
          title: "发现与资格确认",
          description:
            "我们讨论您的目标、当前系统、限制以及成功会是什么样子。目的是在提出构建方案之前理解问题。",
          bring: "目标、现有设置、决策者",
          output: "一份发现摘要或建议的下一步",
        },
        {
          title: "范围与提案",
          description:
            "我们在书面提案中定义交付物、排除项、平台方案、定价、时间线与责任。",
          bring: "系统详情的访问权限与及时的可行性答复",
          output: "一份您可以审阅并批准的提案",
        },
        {
          title: "协议与入职",
          description:
            "合同签署、预付款收到且项目详情完成后，入职开始，我们启动已商定的工作。",
          bring: "签署合同、40% 预付款、公司详情",
          output: "一个活跃的项目与共同的起点",
        },
        {
          title: "初步研究与 Figma 草案",
          description:
            "我们展示公司、市场与竞品研究，以及带变体的基础 Figma 设计草案供您审阅。",
          bring: "关于方向的反馈与任何已商定的修订",
          output: "一个选定的设计方向，进入实现阶段",
        },
        {
          title: "设计与实现",
          description:
            "我们构建已商定的网站、应用、活动或集成。平台能力与第三方响应时间决定可实现的可能。",
          bring: "内容、产品数据、账户访问权限、审批",
          output: "已商定的工作，构建完成并准备审阅",
        },
        {
          title: "测试与客户审阅",
          description:
            "我们检查已商定的功能并记录问题。您测试重要的业务流程，并确认验收或有边界的修订清单。",
          bring: "测试账户、代表性数据、反馈",
          output: "经过测试的构建与清晰的剩余事项清单",
        },
        {
          title: "上线与交接",
          description:
            "我们部署或激活已批准的工作，并转移已商定的文档、访问权限与培训。",
          bring: "上线批准以及域名与账户的就绪状态",
          output: "已上线的工作与已商定的交接",
        },
        {
          title: "持续支持与改进",
          description:
            "如果您购买了持续覆盖，我们维护、管理、报告或改进已商定的系统。Basic 不包含持续管理。",
          bring: "联系人、决策与周期性输入",
          output: "您的支持范围中定义的持续工作",
        },
      ],
      youBring: "您提供",
      output: "产出",
      stagesFootNote:
        "缺陷修复、维护与新功能开发是不同类别的工作。每类按其适用的范围处理，而非假定包含在内。",
      handoffTitleLines: ["构建之前，", "一个共同的方向。"],
      handoffLabel: "首次交接",
      handoffIntro:
        "早期交接旨在给您一些具体可回应之物：为计划提供依据的研究，以及带选项的设计草案。",
      handoffCards: [
        {
          title: "公司、市场与竞品研究",
          description:
            "我们研究您的业务、您所处的细分市场，以及您的客户可能考虑的替代方案。研究发现塑造计划与设计方向。",
        },
        {
          title: "基础 Figma 设计草案",
          description:
            "草案展示供您审阅的变体，让您可以在实现之前选择方向并给出有针对性的反馈。",
        },
        {
          title: "一个决策点，而非完成后的构建",
          description:
            "您选择方向并请求已商定的修订。随后的实现是一个独立阶段，有自己的审阅与批准点。",
        },
        {
          title: "它不承诺什么",
          description:
            "此交接不是完成后的网站、全部素材或全部集成。研究深度与设计范围与可用时间及信息相匹配。",
        },
      ],
      handoffNote:
        "所述意图是在签署合同、40% 预付款与完整的公司/项目详情后，最多 3–4 天内完成首次交接。在构建期间，我们每周安排两次 Google Meet 通话分享进展。确切的时间起算点、研究深度、变体数量与修订额度在您的提案中确认。",
      workingTitleLines: ["清晰的责任。", "更少的意外。"],
      workingLabel: "携手合作",
      workingIntro:
        "良好的合作不仅关乎我们构建什么。它还关乎谁提供什么、谁批准，以及哪些成本不属于机构费用。",
      workingTogether: [
        {
          title: "您提供的内容",
          items: [
            "您完整的公司与项目详情，在入职期间完成",
            "业务内容、产品数据、目录与产品图片",
            "账户访问权限与技术联系人",
            "政策、税务规则、配送详情与审批",
            "负责审阅与签收的决策者",
          ],
        },
        {
          title: "我们管理的内容",
          items: [
            "已商定的研究、设计与实现",
            "受支持的集成与测试",
            "上线、文档与交接",
            "任何单独购买的持续工作",
          ],
        },
        {
          title: "另计的项",
          items: [
            "托管、域名、主题、应用与许可证",
            "ERP、CRM、聊天机器人及其他软件订阅",
            "支付处理、使用与配送费用",
            "广告支出与第三方素材许可",
          ],
        },
      ],
      workingFootNoteBefore:
        "交付物、数量、受支持的工具、修订上限与支持容量在工作开始前商定。请参阅 ",
      workingFootNoteLink: "支持与关怀",
      workingFootNoteAfter: " 了解持续覆盖的处理方式。",
    },

    products: {
      eyebrow: "资源 / 产品与模板",
      note: "网站、应用与系统",
      titleLines: ["进一步了解", "我们构建的内容。"],
      titleMark: "构建。",
      description:
        "网站、应用与互联体验。探索作品集、其背后的工作类别，以及我们如何标注概念与已完成客户项目之间的区别。",
      facts: [
        { label: "专注", value: "网站、应用与系统" },
        { label: "作品集", value: "概念预览" },
        { label: "证据政策", value: "仅已批准的工作" },
      ],
      workTitleLines: ["三个领域。", "一个互联的体验。"],
      workLabel: "工作",
      workIntro:
        "大多数项目涉及不止一个领域。商店可能需要运营视图；支持流程背后可能需要网站与 CRM 连接。",
      buildAreas: [
        {
          title: "网站与电商",
          description:
            "围绕您销售方式打造的店面与业务网站，目录、结账与内容构建在已商定的平台上。",
          tags: ["Shopify", "WordPress + WooCommerce", "设计与构建"],
        },
        {
          title: "Web 应用与运营",
          description:
            "将订单、库存与互联业务系统转化为更清晰工作流的内部工具与面向客户的应用。",
          tags: ["仪表板", "工作流", "ERP 与 CRM 连接"],
        },
        {
          title: "AI 与自动化体验",
          description:
            "回答常见问题、转接咨询并减少重复工作的聊天机器人、支持流程与受支持的自动化。",
          tags: ["聊天机器人", "人工接管", "受支持的集成"],
        },
      ],
      collectionTitleLines: ["今日的概念。", "获批后的证据。"],
      collectionLabel: "作品集",
      collectionIntroWithPreviews:
        "作品集目前展示设计概念。这些是说明性预览；已完成项目的详情与截图仅在提供并获批准后才会显示。",
      collectionIntroWithoutPreviews:
        "探索网站、应用与互联体验的作品集。",
      visitProject: "访问项目",
      collectionFootNote:
        "概念预览说明一个方向；它们不是客户成果或已发布的案例研究。未经许可与核实，我们不发布客户名称、徽标、证言或指标。",
    },

    support: {
      eyebrow: "资源 / 支持与关怀",
      note: "上线后的帮助",
      titleLines: ["让工作", "持续运转的支持。"],
      titleMark: "持续运转。",
      description:
        "上线是一个里程碑，而非终点。以下是项目上线后持续关怀、维护与改进的运作方式——以及已商定支持范围之外的内容。",
      facts: [
        { label: "Basic", value: "一次性搭建" },
        { label: "Pro", value: "$2,500 + $500/月" },
        { label: "覆盖", value: "按项目商定" },
      ],
      actionCta: "规划您的项目",
      actionSecondary: "登录您的工作区",
      plans: [
        {
          name: "Basic",
          price: "$2,500",
          payment: "一次性搭建",
          description:
            "完整的构建与数字营销搭建，一次性交付并交接。Basic 不包含持续管理。",
          items: [
            "完整的应用构建与上线",
            "SEO 管理、邮件营销与社交媒体营销",
            "聊天机器人与自动化搭建",
            "已商定访问权限与文档的交接",
            "首月支持，处理更改与错误修复",
          ],
        },
        {
          name: "Pro",
          price: "$2,500",
          payment: "搭建 + $500 / 月",
          description:
            "Basic 基础加上持续维护、性能增强、潜在客户获取，以及保持 SEO 与营销与时俱进。",
          items: [
            "持续维护与技术支持",
            "性能增强与监控",
            "潜在客户获取与活动管理",
            "保持 SEO 与营销与时俱进",
            "聊天机器人与工作流维护",
          ],
        },
      ],
      waysTitleLines: ["让一切", "持续推进的两种方式。"],
      waysLabel: "上线之后",
      waysIntro:
        "Basic 是一次性构建。Pro 增加持续关系。两个套餐都不意味着无限工作；覆盖的系统、容量与节奏提前商定。",
      waysFootNote:
        "Pro 的月度费用涵盖已商定的持续工作，包括积极的潜在客户获取——当某种方式没有成效时，我们会重构并测试其他方式。广告支出、第三方订阅与使用费由您支付。潜在客户数量与增长结果不保证。",
      coverageTitleLines: ["“让它持续运转”", "背后的工作。"],
      coverageLabel: "覆盖",
      coverageIntro:
        "支持因涉及的系统而异。以下是当写入您的支持范围时，我们可以覆盖的领域。",
      coverage: [
        {
          title: "维护与更新",
          description:
            "对已商定系统进行例行检查、适用更新与兼容性检查。确切节奏在您的支持范围中设定。",
        },
        {
          title: "错误修复",
          description:
            "修复已商定构建中的缺陷。缺陷不同于新功能或已商定范围的变更。",
        },
        {
          title: "性能",
          description:
            "对您套餐覆盖的速度、可靠性或工作流进行监控与已商定的改进。目标因项目而异。",
        },
        {
          title: "集成与数据",
          description:
            "维护受支持的 ERP、CRM、库存、配送与发票连接，包括已商定的监控与错误处理。",
        },
        {
          title: "备份与恢复",
          description:
            "在平台约定并支持的情况下执行备份与恢复任务。责任与恢复预期已记录在案。",
        },
        {
          title: "支持处理",
          description:
            "为问题与事项提供清晰途径，包括分流、已商定的响应目标与范围内系统的升级机制。",
        },
      ],
      coverageFootNote:
        "确切列表取决于您的平台组合、集成与所购买的覆盖范围。维护、缺陷修复与新功能开发作为不同类别的工作处理。",
      requestTitleLines: ["通往真实解答的", "清晰途径。"],
      requestLabel: "当某些事项需要关注时",
      requestStepLabel: "请求",
      requestIntro:
        "当请求具体且到达约定地点时，支持效果最佳。以下是有用请求的形态。",
      requestSteps: [
        {
          title: "使用已商定的渠道",
          description:
            "通过为您的项目确认的支持渠道发送请求，使其到达正确地点并可被追踪。",
        },
        {
          title: "包含有用的细节",
          description:
            "描述发生了什么、在哪里发生、您期望什么，以及复现步骤。截图或链接会有所帮助。",
        },
        {
          title: "我们分流并回应",
          description:
            "我们确认它是缺陷、维护还是新工作，然后商定下一步。范围之外的工作获得自己的报价。",
        },
      ],
      upFrontTitle: "我们提前商定的内容",
      upFrontDescription:
        "支持时段、渠道、容量、响应目标与升级机制在您的支持范围中确认。我们不发布通用的 7×24 或响应时间承诺。",
      requestNote:
        "如果您已与我们合作，请使用为您的项目商定的支持渠道。如果您不确定适用哪个渠道，请在发送敏感详情前询问您通常的项目联系人。",
      boundariesTitleLines: ["已商定范围", "之外的内容。"],
      boundariesLabel: "边界",
      boundariesIntro:
        "了解不包含什么与了解包含什么同样有用。以下项目另行报价，而非纳入日常支持。",
      separateLabel: "另计",
      boundaries: [
        {
          title: "新功能与重新设计",
          description:
            "新功能、结构变更、迁移与重新设计独立于日常维护。它们需要自己的范围、价格与时间线。",
        },
        {
          title: "第三方成本",
          description:
            "托管、域名、主题、应用、许可证、软件订阅、使用费、广告支出以及支付或配送费用由您支付，与机构费用分开。",
        },
        {
          title: "没有支持范围的工作",
          description:
            "Basic 是一次性搭建，含首月对请求更改与错误修复的支持。该月之后，如果您不继续使用 Pro，进一步的帮助将根据问题与所需服务报价。",
        },
      ],
      boundariesFootNoteBefore:
        "交付物、容量、响应目标与覆盖系统在工作开始前确认。请参阅 ",
      boundariesLinkOneLabel: "我们的工作方式",
      boundariesLinkOneHref: "/how-we-work",
      boundariesFootNoteMiddle: " 或阅读 ",
      boundariesLinkTwoLabel: "支持常见问题",
      boundariesLinkTwoHref: "/faq#faq-after-launch",
      boundariesFootNoteAfter: "。",
    },

    policies: {
      privacy: {
        title: "隐私信息。",
        description:
          "Starter Shifter 的完整隐私政策正在等待批准。以下信息描述当前的项目简报功能；它并非完整的隐私政策。",
        sections: [
          {
            heading: "您的项目简报",
            paragraph:
              "您的简报保存到您的客户账户，以便您暂停、返回并更新答案。它不会与其他客户账户共享。上传的项目文件与您的工作区一起存储，可供您与 Starter Shifter 使用。您可以从工作区删除自己上传的文件。",
          },
          {
            heading: "客户账户与入职",
            paragraphBefore:
              "您的客户账户让您可以保存项目信息并稍后返回。其独立的 ",
            linkLabel: "入职隐私信息",
            linkHref: "/policies/onboarding-privacy",
            paragraphAfter:
              " 说明了项目详情的使用方式。您在开始答题前接受该通知。",
          },
          {
            heading: "进一步信息",
            paragraph:
              "关于数据托管、任何未来的咨询服务、保留与隐私请求的信息，将在完整政策与联系方式获批后添加。",
          },
        ],
      },
      cookies: {
        title: "Cookie 信息。",
        description:
          "Cookie 政策正在等待批准。在审查生产托管环境与任何跟踪工具后，将添加完整通知。",
        sections: [
          {
            heading: "当前网站功能",
            paragraph:
              "本网站未配置任何可选的分析或广告集成。当前项目简报功能会创建本地下载，不会提交您的详情。",
          },
          {
            heading: "未来变更",
            paragraph:
              "如果引入分析、广告或其他可选跟踪功能，此信息将需要针对实际涉及的工具与数据进行更新。",
          },
        ],
      },
      terms: {
        title: "服务条款信息。",
        description:
          "完整服务条款正在等待批准。本页总结已确认的合作信息；每个项目都需要商定的范围与签署的合同。",
        sections: [
          {
            heading: "入职之前",
            paragraph:
              "入职以签署合同、40% 预付款以及开始所需的公司与项目详情为前提。交付物、受支持的工具、时间线、客户责任与持续覆盖为每次合作商定。",
          },
          {
            heading: "搭建与持续工作",
            paragraph:
              "Basic 为 $2,500 一次性费用，涵盖完整的应用构建与数字营销搭建（SEO 管理、邮件营销与社交媒体营销）。Pro 每月另加 $500，用于持续维护、性能增强与潜在客户获取。两个套餐均不构成无限工作、保证的潜在客户数量或保证的业务结果。",
          },
          {
            heading: "第三方成本",
            paragraph:
              "托管、域名、广告支出、支付处理费用、平台订阅、付费主题与插件、软件使用、许可与配送费用由您支付，与机构费用分开。三个服务领域之外的服务另行报价。",
          },
          {
            heading: "尚待发布的条款",
            paragraph:
              "其余付款、税务、取消、退款、所有权、许可与支持条款将在获批后发布。请在继续之前于您的项目协议中确认这些详情。",
          },
        ],
      },
      onboardingPrivacy: {
        title: "您的信息，有其用途。",
        shareHeading: "您与我们分享的内容",
        shareParagraph:
          "您的联系方式、业务描述、客户与市场、项目目标，以及您希望获得帮助的服务。您也可以分享业务示例与有助于我们理解项目的资料链接。如果您通过工作区上传项目文件，我们会将该文件及其详情与您的项目一起存储。",
        useHeading: "我们如何使用它",
        useParagraphs: [
          "我们使用您的答案来准备并审阅您的项目简报、研究您的业务、规划设计方向并交付与您商定的工作。您的进度会被保存，以便您可以在将简报发送给团队之前返回、更改并检查答案。上传的文件用于审阅并交付您为其分享的项目。",
          "发送简报并不签署协议或确认付款。您的协议规定了项目的服务、费用与责任。",
        ],
        responsibilityHeading: "谁负责您的信息",
        responsibilityParagraphAfter:
          "您可以通过账户访问自己的简报。其他客户账户无法访问它。我们的门户使用服务提供商来支持账户登录与信息存储；Starter Shifter 负责管理您的项目信息。",
        noticeHeading: "您的入职通知",
        keepingHeading: "保留您的详情并回答您的问题",
        contactPrefix: "如对您的信息有疑问或请求，请联系 ",
        pausedHeading: "开始之前",
        pausedParagraphs: [
          "入职暂时暂停。入职重新开放后，您可以再次查看此信息。",
          "开发预览让您可以使用示例业务详情尝试整个流程。其示例答案与进度单独保存，并可在同一浏览器中恢复。",
        ],
        safeHeading: "安全地分享业务背景",
        safeParagraphAfter:
          "从您分享的示例中删除私人详情。如果您的项目稍后需要账户访问权限，我们的团队会与您单独安排。",
      },
    },
  },

  auth: {
    heading: "加入我们。",
    subheading: "新用户还是老用户？继续前往您的客户工作区。",
    socialGroupLabel: "使用社交账户继续",
    providers: { google: "Google", facebook: "Facebook" },
    connecting: "正在连接…",
    continueWith: "继续使用 ",
    socialHelpBoth: "Google 与 Facebook 登录即将推出。您目前可以使用邮箱。",
    socialHelpOneSuffix: " 登录即将推出。",
    or: "或",
    continueWithEmail: "使用邮箱继续",
    workspaceNote: "在一个地方分享您的业务简报并跟进您的项目。",
    privacyNoteBefore: "阅读我们如何使用您的账户与项目详情，请参阅我们的 ",
    privacyNoteLink: "隐私信息",
    connectError: "我们无法连接您的账户。请重试或使用邮箱继续。",
    socialSignInError: "社交登录失败。请重试或使用邮箱继续。",
    emailViewLabel: "邮箱账户访问",
    backToOptions: "返回所有登录选项",
    emailModeLabel: "邮箱账户访问",
    signIn: "登录",
    createAccount: "创建账户",
    createAccountEmailLabel: "使用邮箱创建账户",
    signInEmailLabel: "使用邮箱登录",
    emailLabel: "邮箱地址",
    emailPlaceholder: "you@business.com",
    passwordLabel: "密码",
    passwordPlaceholderCreate: "创建一个强密码",
    passwordPlaceholderSignin: "输入您的密码",
    showPassword: "显示密码",
    hidePassword: "隐藏密码",
    yourNameLabel: "您的姓名",
    yourNamePlaceholder: "Alex Morgan",
    keepMeSignedIn: "保持登录状态",
    passwordHint: "密码请使用至少 12 个字符。",
    creatingAccount: "正在创建您的账户…",
    signingIn: "正在登录…",
    enterNameError: "请输入您的姓名。",
    tooManyAttemptsError: "尝试次数过多。请稍候再试。",
    createAccountError: "我们无法创建您的账户。请尝试登录或使用其他邮箱。",
    signInError: "我们无法让您登录。请检查您的邮箱与密码。",
    connectRetryError: "我们无法连接。请稍后重试。",
    shell: {
      storyTag: "连接您的业务",
      storyHeading: "开始您的旅程。",
      storyDescription: "几个简单步骤，让您的业务聚焦。",
      journeyLabel: "您的工作区旅程",
      steps: ["创建您的账户", "向我们介绍您的业务", "塑造您的下一个篇章"],
      formPanelLabel: "加入 Starter Shifter",
      backToWebsite: "返回网站",
      copyrightPrefix: "© ",
      accountPoliciesLabel: "账户政策",
    },
  },

  dashboard: {
    viewNames: {
      overview: "概览",
      brief: "项目简报",
      journey: "项目旅程",
      resources: "品牌与资源",
      agreement: "协议与账单",
    },
    updates: {
      title: "更新与后续",
      description: "您最近保存的进度与需重新审视的详情。",
      empty: "开始您的项目简报，即可在此查看更新。",
      openQuestionsPrefix: "待解决问题（",
      openQuestionsSuffix: "）",
      revisitDefault: "与您的机构重新审视此答案。",
      noFollowups: "简报中未标记任何后续事项。",
      viewProjectJourney: "查看项目旅程",
      updateBrief: "更新我的简报",
      startBrief: "开始我的简报",
    },
    shell: {
      skipToDashboard: "跳到仪表板",
      closeNavigation: "关闭导航",
      workspaceNavigationLabel: "工作区导航",
      clientWorkspace: "客户工作区",
      littleGuidance: "需要一点指引？",
      littleGuidanceDesc: "每一步，都为您解释。",
      workspaceGuide: "工作区指南",
      developmentPreview: "开发预览",
      signingOut: "正在退出…",
      signOut: "退出",
      workspace: "工作区",
      searchLabel: "搜索您的项目简报",
      searchPlaceholder: "搜索您的简报…",
      viewUpdatesLabel: "查看工作区更新",
      openProfileLabel: "打开您的个人资料",
      yourAccount: "您的账户",
      dashboardContentLabel: "仪表板标签页内容",
      footerBrand: "Starter Shifter · 连接您的业务。",
      projectPrivacy: "项目隐私",
      connecting: "正在连接",
      connectedWorkspace: "已连接的工作区",
      guideTitle: "您的工作区指南",
      guideDescription: "让您的项目逐步推进。",
      guideParagraphs: [
        { strong: "项目简报", text: " 保存您保存的每一个答案。选择一个主题进行审阅，或返回入职进行更改。" },
        { strong: "项目旅程", text: " 显示您的提交与已核实的先决条件。交付阶段在激活后变得相关，并遵循您已商定的范围。" },
        { strong: "协议与账单", text: " 显示机构记录的范围、费用、协议与预付款核实情况。" },
        { strong: "", text: "在简报中使用“与我们讨论”来标记任何您需要帮助的事项。您的标记会出现在仪表板的行动中心。" },
      ],
      exploreMyBrief: "探索我的简报",
      profileTitle: "您的个人资料",
      profilePreviewDesc: "您已保存的预览工作区",
      profileDesc: "您的客户工作区",
      nameLabel: "姓名",
      notProvided: "尚未提供",
      businessLabel: "业务",
      viewContactDetails: "查看联系方式",
      loadingBusinessName: "您的项目工作区",
    },
    overview: {
      topicSections: [
        { label: "业务", color: "var(--commerce-deep)" },
        { label: "目标", color: "#439574" },
        { label: "需求", color: "var(--commerce-mint)" },
        { label: "确认", color: "#b4ae97" },
      ],
      eyebrow: "一点清晰。很多可能。",
      welcomeBack: "欢迎回来",
      projectAtAGlance: "您的项目，一目了然。推进所需的一切。",
      viewProjectBrief: "查看项目简报",
      preparingPdf: "正在准备 PDF…",
      exportPdf: "导出 PDF 报告",
      pdfError: "无法创建 PDF。请重新尝试导出。",
      pdfDownloaded: "您的 PDF 已就绪。请查看浏览器下载。",
      pdfPreparing: "正在添加您的答案、图表与项目更新。",
      pdfIdle: "答案、需求与交付进度。",
      yourProjectBrief: "您的项目简报",
      phasesComplete: "阶段已完成",
      submittedForReview: "已提交审阅",
      continueWhereLeftOff: "从上次中断处继续",
      storyStartsHere: "您的故事从这里开始",
      projectReadiness: "项目就绪度",
      prerequisitesVerified: "先决条件已核实",
      prerequisitesBefore: "激活前的先决条件",
      projectDelivery: "项目交付",
      awaitingProjectUpdate: "等待项目更新",
      latestProgress: "来自您机构的最新进展",
      deliveryProgressHere: "您机构的交付进度显示在此处",
      openQuestions: "待解决问题",
      workThroughThese: "让我们逐一解决这些",
      noFollowups: "未标记后续事项",
      detailsToRevisit: "需共同重新审视的详情",
      clearerPicture: "更清晰地了解您的项目",
      briefBreakdown: "您的简报完成度，按主题细分。",
      questionsComplete: "的问题已完成",
      completionByCategory: "按类别的答题完成度",
      insideYourBrief: "简报内部",
      viewAll: "查看全部",
      detailsOrganized: "您的详情，井然有序。打开一个主题以仔细查看。",
      answersRecorded: "条答案已记录",
      readyForInput: "等待您的输入",
      complete: "已完成",
      yourNextStep: "您的下一步",
      reviewProjectBrief: "审阅项目简报",
      completeProjectBrief: "完成项目简报",
      viewNextSteps: "查看后续步骤",
      beforeWeBegin: "开始之前",
      viewAllPrereqsLabel: "查看所有激活先决条件",
      verified: "已核实",
      inProgress: "进行中",
      pending: "待处理",
      workspaceReadyForYou: "您的工作区已为您就绪",
      startBriefToSee: "开始您的简报，即可在此查看已保存的详情与进度。",
      viewJourney: "查看旅程",
      nextStepFallbacks: {
        oneSmallPhase: "一次一个小阶段。",
        readyNextChapter: "为您的下一个篇章做好准备。",
        getReady: "让您的项目准备就绪。",
        answerUpToFive:
          "最多回答五个问题，然后返回此处。您可以在每个阶段之间暂停。",
        briefVerified:
          "您的简报与先决条件已核实。您的机构现在可以安排已商定的后续步骤。",
        confirmRemaining: "您的机构将确认剩余的先决条件。",
      },
    },
    journey: {
      title: "每天更近一步。",
      description: "清晰了解您的项目准备情况与即将到来的交付旅程。",
      currentCheckpoint: "当前检查点",
      yourProject: "您的项目",
      targetDate: "目标日期：",
      deliveryComplete: "交付完成",
      preparationStagesComplete: "准备阶段完成",
      fallbackStages: [
        { title: "您的项目简报", description: "分享您的业务、目标、内容与需求。您的答案有助于塑造项目讨论。" },
        { title: "协议与激活", description: "您的机构在激活前核实联系方式、签署的协议、40% 预付款与项目依赖。" },
        { title: "研究与方向", description: "业务、市场与竞品研究确定方向。时间与交付物遵循您已商定的项目范围。" },
        { title: "设计与反馈", description: "探索已商定的设计工作，审阅草案并分享反馈。变体与修订数量遵循您的协议。" },
        { title: "构建与连接", description: "已商定的网站、内容、工作流与受支持的连接逐步成形。所选需求在项目范围中确认。" },
        { title: "审阅与交接", description: "审阅已商定的交付物并为交接做准备。上线要求与持续支持取决于您的合作方式。" },
      ],
      statusUpcoming: "即将到来",
      statusComplete: "已完成",
      statusInProgress: "进行中",
      statusVerified: "已核实",
      statusNeedsVerification: "需要核实",
      statusUpNext: "下一个",
      stageProgress: "阶段进度",
      reviewBrief: "审阅简报",
      continueBrief: "继续简报",
      viewAllPending: "查看所有待核实的项目",
      noDeliveryUpdate:
        "此阶段尚未记录交付更新。您的机构将在激活后确认适用的工作与时间。",
      workspaceActivity: "工作区动态",
      activityEmpty:
        "您开始简报后，保存的进度与提交更新将显示在此处。",
      activityFootNote:
        "这些是您最近的保存记录。交付日期与完成情况由您的机构单独确认。",
    },
    resources: {
      title: "您品牌的各个部分。",
      description: "查看您在项目简报中分享的内容就绪情况与参考链接。",
      updateResources: "更新资源",
      brandContentReadiness: "品牌与内容就绪度",
      assetStatuses: "您在入职期间记录的素材状态。",
      gatherStartingPoints: "让我们收集您的起点。",
      gatherStartingPointsDesc:
        "将您的徽标、照片、文案与内容就绪情况添加到简报中。最终文件可以与您的机构安全共享。",
      contentContact: "内容联系人",
      yourSharedLinks: "您分享的链接",
      sharedLinksDesc: "来自您答案的网站、文件夹与参考链接。",
      opensNewTab: "在新标签页中打开",
      noLinksYet: "尚未分享任何参考链接。您可以在更新简报时添加。",
      secureShare:
        "使用已商定的安全方式分享文件与访问权限。账户密码不应出现在项目简报中。",
      projectFiles: "项目文件",
      projectFilesDesc:
        "上传徽标、文案、照片或参考文档。每个文件都与您的工作区一起存储，并对您的机构可见。",
      file: "文件",
      files: "文件",
      previewNote: "文档分享在已认证的客户工作区中可用。",
      noteForAgency: "给您的机构的备注",
      notePlaceholder: "此上传的可选背景",
      category: "类别",
      chooseFilesLabel: "选择要上传的文件",
      uploading: "正在上传…",
      chooseFiles: "选择文件",
      fileTypesHint: "PDF、图片、Office、文本、CSV、JSON 或 ZIP · 最多 ",
      uploadError: "无法保存上传。请重试。",
      removeConfirm: "从您的工作区移除此文件？",
      removeError: "无法移除该文件。请重试。",
      needsUpdate: "需要更新",
      noFilesYet: "尚未上传任何文件。",
    },
    agreement: {
      title: "清晰范围。共同期望。",
      description: "您机构已确认的合作记录、费用与核实状态。",
      yourEngagement: "您的合作",
      setupFee: "搭建费",
      asRecorded: "按您的合作记录",
      ongoingFee: "持续费用",
      notRecorded: "未记录",
      perMonth: "每月，根据已商定范围",
      ongoingFollows: "持续工作遵循您的协议",
      whatsIncluded: "包含内容",
      exclusionsThirdParty: "排除项与第三方成本",
      seeExclusions: "请参阅您的协议了解排除项。",
      verificationBilling: "核实与账单",
      signedAgreement: "签署的协议",
      fortyPercentAdvance: "40% 预付款",
      billingName: "账单姓名",
      billingEmail: "账单邮箱",
      paymentStatusNote:
        "付款状态反映机构核实情况。此工作区不收取付款。",
      agreementComesNext: "您的协议随后而来。",
      agreementComesNextDesc:
        "一旦您的机构记录您的合作，您将在此看到已批准的范围、费用、账单详情与核实状态。",
      agreementAwaiting: "协议等待确认",
      advanceAwaiting: "40% 预付款等待核实",
    },
    brief: {
      title: "您的项目简报",
      description:
        "审阅您的入职进度，检查您已分享的答案，并填写任何缺失的详情。",
      progressLabel: "您的简报进度",
      everyDetailCovered: "每个细节都已覆盖",
      briefTakingShape: "您的简报正在成形",
      questionsAnswered: "个问题已回答",
      phasesComplete: "个阶段已完成",
      submittedToAgency: "已提交给您的机构",
      draftNotSubmitted: "草稿 · 未提交",
      reviewAndSend: "审阅并发送",
      updateReopens:
        "您可以更新任何答案。更改会重新开放您的简报以进行审阅与提交。",
      completeSubmit:
        "您的答案已完整。审阅并提交您的简报以完成入职。",
      completionNote:
        "完成度计入已回答与不适用的题目。留待稍后处理的详情保持开放；您仍可与您的机构讨论。",
      percentComplete: "的问题已完成",
      statusComplete: "已完成",
      percentCompleteSuffix: "完成",
      filterLabel: "筛选简报题目",
      filters: [
        { label: "全部题目" },
        { label: "待完成" },
        { label: "后续事项" },
        { label: "已回答" },
      ],
      searchLabel: "搜索题目与答案",
      searchPlaceholder: "搜索题目或答案",
      onboardingPhases: "入职阶段",
      shown: "已显示",
      chooseAPhase: "选择一个阶段",
      noMatchingPhases: "没有匹配的阶段",
      phase: "阶段",
      of: "/",
      complete: "已完成",
      answered: "已回答",
      notAnswered: "未回答",
      needAttention: "需要关注",
      forLater: "留待稍后",
      pickUpWhereLeft: "从上次中断处继续。",
      readyToRevisit: "准备好重新审视留待稍后的详情了吗？",
      continuePhase: "继续阶段",
      startPhase: "开始阶段",
      showingPrefix: "显示 ",
      showingOfSuffix: " 个此阶段题目",
      question: "题目",
      followUpRequested: "已请求后续",
      notApplicable: "不适用",
      noAnswerYet: "尚未提供答案。",
      yourSavedAnswer: "您保存的答案",
      checkAnswerDefault: "完成此阶段前请检查此答案。",
      editAnswer: "编辑答案",
      checkAnswer: "检查答案",
      answerNow: "立即回答",
      updateNote:
        "打开题目即可更新。您保存的答案会被预填，保存后您可以返回此阶段。",
      noMatchingQuestions: "没有匹配的题目",
      noUnansweredQuestions: "没有未回答的题目",
      noDetailsForLater: "没有留待稍后处理的详情",
      noQuestionsToShow: "没有可显示的题目",
      tryAnotherSearch: "请尝试其他搜索，或清除筛选以查看您的简报。",
      chooseAnotherFilter: "请选择其他筛选以审阅简报的其余部分。",
      showAllQuestions: "显示全部题目",
      noPhasesMatch: "没有阶段匹配此筛选。",
      forLaterSuffix: "留待稍后",
      statusLabels: {
        answered: "已回答",
        pending: "未回答",
        later: "留待稍后",
        attention: "需要关注",
        review: "审阅",
      },
    },
    phases: {
      savedSuffix: " 已保存。请在下方审阅您的进度。",
      yourOnboarding: "您的入职",
      completeTitle: "您的项目简报已完成。",
      incompleteTitle: "让我们完成您的项目简报。",
      completeSubmitted:
        "您的答案已提交。您可以在简报中审阅或更新任何详情。",
      completeNotSubmitted:
        "每个题目都有答案。请审阅您的简报，并在准备好时发送给您的机构。",
      incomplete: "查看您已分享的内容，找出仍需要的详情，并一次完成一个阶段。",
      reviewProjectBrief: "审阅项目简报",
      reviewAndSendBrief: "审阅并发送简报",
      continuePhase: "继续阶段",
      startPhase: "开始阶段",
      phasePrefix: "阶段 ",
      briefCompletion: "简报完成度",
      answeredSuffix: " 已回答",
      notAnswered: "未回答",
      needAttention: "需要关注",
      forLater: "留待稍后",
      phasesComplete: "个阶段已完成",
      laterStaysVisible: "标记为留待稍后的详情会保持可见，直到您解决它们。",
      answersSavedAsYouGo: "您的答案会随时保存。您可以随时暂停。",
      viewAllPhases: "查看所有阶段",
      briefCompletionLabel: "项目简报完成度",
    },
  },

  onboarding: {
    privacyCopy: {
      purpose:
        "Starter Shifter 使用您分享的详情来了解您的业务、准备您的项目，并交付您与我们商定的服务。",
      responsibility:
        "您的项目信息由 Starter Shifter 管理。我们不会出售您的详情，也不会与其他企业分享您的简报用于其自身用途。",
      safeSharing:
        "业务信息与示例即可。请勿包含密码、付款详情以及有关客户或团队的私人信息。",
    },
    welcome: {
      storyLabel: "您的下一个篇章从这里开始",
      storyTitleLines: ["宏大的想法。", "小小的步伐。"],
      storyFooterLines: ["您带来故事。", "我们将帮您串联起来。"],
      greeting: "欢迎来到 Starter Shifter。",
      greetingNamePrefix: "欢迎，",
      heading: "让我们了解您的业务。",
      descriptionPrefix:
        "一次一个问题，向我们介绍您的业务。您当前的路径有 ",
      descriptionSuffix:
        " 个简短阶段，每个最多五个问题。相关后续问题可能会随着您选择所需的工作而出现。",
      promises: [
        "欢迎估算。需要时请寻求帮助。",
        "从一个阶段顺利过渡到下一个",
        "保存、休息、随时回来",
      ],
      consentBefore: "我已阅读 ",
      consentLink: "隐私信息",
      consentAfter:
        " 并同意 Starter Shifter 使用我的详情来准备并交付我的项目。",
      saving: "正在保存…",
      begin: "开始吧",
      paused: "入职暂时暂停。请在重新开放后再来。",
      tryPreview: "尝试预览",
      previewOnly: "仅限预览。请使用示例详情。",
      serviceTerms: "服务条款",
    },
    journeyArtwork: {
      scenes: [
        { title: "您的业务", subtitle: "由好点子与真实的人组成", tag: "很高兴认识您" },
        { title: "您的方向", subtitle: "一点清晰。很多可能。", tag: "大胆思考" },
        { title: "您的印记", subtitle: "让它独一无二的细节", tag: "留下您的印记" },
        { title: "您的工具箱", subtitle: "连接您项目的各个部分", tag: "逐步拼合" },
        { title: "您的下一个篇章", subtitle: "一份我们可以共同构建的简报", tag: "汇聚成型" },
      ],
      tagline: "多一点您的本色",
    },
    wizard: {
      sessionEnded: "您的会话已结束。",
      signInAgain: "重新登录",
      reloadOnboarding: "重新加载入职",
      previewBanner:
        "预览模式。请使用示例业务详情。您的进度会为下次访问而保存。",
      customizedBanner:
        "您的机构为您的项目准备了此问卷。请审阅任何新请求的详情。",
      oneQuestionAtATime: "一次一个问题",
      saveAndReturn: "保存并返回简报",
      saveAndExit: "保存并退出",
      phaseReview: "阶段审阅",
      questionOf: "题目 ",
      of: " / ",
      reviewYourAnswers: "审阅您的答案",
      answerBeforeFinish: "您可以在结束前回答此项。",
      phaseSavedSuffix: " 已保存。让我们继续。",
      beforeNextPhase: "进入下一阶段之前",
      fewDetailsForLater: "留待稍后的几项详情",
      phaseReady: "此阶段已就绪",
      answeredPrefix: "您已回答 ",
      answeredSuffix: " / ",
      answeredOfQuestions: " 个此阶段题目。 ",
      fillNowOrFlag:
        "您现在可以填写这些详情，或将它们标记留待最终审阅。",
      changesSavedContinue: "您的更改已保存。准备好后随时继续。",
      answerNow: "立即回答",
      back: "返回",
      continueWithForLaterPrefix: "继续，保留 ",
      continueWithForLaterSuffix: " 项待稍后",
      continueToNextPhase: "进入下一阶段",
      reviewTitle: "这是您的项目简报。看起来如何？",
      remainingPrereqs: "剩余的项目先决条件",
      prereqsNote: "这些会对照机构记录进行核实。此表单不会发送任何邀请。",
      reviewHelp: "请在下方检查您的答案。您可以在最终确认前编辑任何主题。",
      previewPrivacyHelp:
        "请在确认前审阅此预览如何使用您的示例答案。",
      addProjectTopic: "还有其他内容？添加一个项目主题",
      topicsAutoHelp:
        "您的答案会自动选择相关主题。如果我们遗漏了某个工作流，请在此添加。",
      searchTopicsLabel: "搜索项目主题",
      searchTopicsPlaceholder: "搜索主题…",
      selectedByAnswers: "由您的答案选中",
      previouslyAnswered: "先前已回答的主题",
      previouslyAnsweredHelp:
        "这些答案会保存在您当前路径之外。恢复某个主题或移除其答案。",
      restoreTopic: "恢复主题",
      removeSavedAnswers: "移除已保存的答案",
      routeNotePrefix: " 个针对项目的主题已选中。您的进度会随您的选择而调整。",
      backToMyReview: "返回我的审阅",
      retrySaving: "重试保存",
      saveAndReturnToBrief: "保存并返回简报",
      backToPhaseReview: "返回阶段审阅",
      saveAndOpenDashboard: "保存并打开仪表板",
      submitOnboarding: "提交入职详情",
      looksGood: "看起来不错",
      skipForNow: "暂时跳过",
      continue: "继续",
      pauseAnytime: "随时可通过“保存并退出”暂停。",
      phaseOf: "阶段 ",
      phaseOfSuffix: " / ",
      encouragement: {
        checkTogether: "让我们一起检查此答案。下方详情会有所帮助。",
        briefComingTogether: "您的简报正在成形。请在最终确认前查看一下。",
        flagForGuidance: "我们会将其标记以寻求指导。您可以继续。",
        keepOpen: "没关系。我们会将其保留为待解决问题。",
        gotIt: "明白了！准备好后随时继续。",
        startWithYou: "让我们从您开始。简短回答即可。",
        multiSelect: "您可以多选。选择适合您项目的选项。",
        select: "选择适合您的选项。",
        optional: "此项为可选。您可以稍后再回来处理。",
        oneSmallStep: "一次一小步。一点背景就足够了。",
      },
      saveStates: {
        allSaved: "所有更改已保存",
        readyToSave: "可保存",
        saving: "正在保存…",
        unsaved: "未保存的更改",
        notSaved: "更改未保存——请在下方重试",
      },
      errors: {
        saveFailed: "我们无法保存您的最新更改。请保持此页面打开并重试。",
        draftMissing: "您的草稿会话缺失。请重新加载此页面以重新连接。",
        unableToSave: "无法保存。",
        unableToSaveAnswer: "无法保存此答案。",
        unableToSavePhase: "无法保存此阶段。",
        unableToSubmit: "无法提交。",
        unableToSaveAgreement: "无法保存您的协议。请重试。",
        attentionBeforeSubmit: "提交前仍有几项答案需要您关注。",
        loadQuestionnaire:
          "我们无法加载分配给您的问卷。请重新加载重试，若问题持续请联系机构。",
      },
      engagementSummary: {
        noneHeading: "尚未记录已批准的合作",
        noneBody:
          "您的项目协议、范围、费用与账单记录将在机构记录后显示于此。您仍可提交简报以供审阅。",
        noneMeta: "协议：等待确认 · 40% 预付款：等待核实",
        approvedSuffix: " · 已批准的项目记录",
        setupPrefix: "搭建：",
        recurringPrefix: " · 持续：",
        perMonthSuffix: " / 月",
        scopePrefix: "范围：",
        exclusionsPrefix: "排除项：",
        seeAgreement: "查看您的协议",
        thirdPartyPrefix: "第三方成本：",
        agreementPrefix: "协议：",
        verified: "已核实",
        awaitingConfirmation: "等待确认",
        advancePrefix: " · 40% 预付款：",
        awaitingVerification: "等待核实",
      },
      reviewSummary: {
        groups: [
          { title: "业务与联系方式" },
          { title: "目标与当前流程" },
          { title: "所选工作与需求" },
          { title: "责任与合作" },
          { title: "最终备注与入职反馈" },
        ],
        additionalTitle: "其他项目详情",
        topicsToReview: " 个主题待审阅",
        edit: "编辑",
        editBrief: "编辑简报",
        openQuestions: "待解决问题与后续事项",
        noFollowups:
          "未记录任何后续标记。可选未答详情可稍后补充。",
      },
    },
    progress: {
      railLabel: "入职进度",
      yourProjectBrief: "您的项目简报",
      phasePrefix: "阶段 ",
      phaseOfSuffix: " / ",
      answeredPercentSuffix: " 已回答",
      answeredLabel: "已回答的题目",
      answeredValueText: "已回答，",
      forLaterValueText: " 留待稍后，",
      pendingValueText: " 待处理，共 ",
      questionsValueText: " 个题目",
      answered: "已回答",
      forLater: "留待稍后",
      pending: "待处理",
      yourPhases: "您的阶段",
      phaseNavLabel: "阶段与题目",
      questionsInPhase: "此阶段的题目",
      selectToRevisit: "选择一个题目以重新查看。",
      review: "审阅",
      reviewYourAnswers: "审阅您的答案",
      currentQuestionSuffix: "，当前题目",
      legendAnswered: "已回答",
      legendForLater: "留待稍后",
      legendPending: "待处理",
      railNote: "您的阶段会随项目调整。您可以重新查看任何题目。",
      currentPhaseLabel: "当前阶段",
    },
    privacyNotice: {
      ariaLabel: "我们如何使用您的信息",
      heading: "您的信息有其用途。",
      howWeCare: "我们如何妥善处理您的详情",
      previewNote:
        "这是预览。您的示例答案会被保存，以便您在此浏览器中尝试并返回该流程。请使用示例业务详情。",
      retentionPrefix: "我们保留您详情的时长：",
      contactPrefix: "对您的信息有疑问？",
      paused:
        "入职暂时暂停。请在重新开放后审阅当前的隐私信息。",
      navLabel: "入职信息",
      privacyInformation: "隐私信息",
      serviceTerms: "服务条款",
    },
    portal: {
      myWorkspace: "我的工作区",
      signingOut: "正在退出…",
      signOut: "退出",
      yourProjectWorkspace: "您的项目工作区",
      clientPortal: "Starter Shifter 客户门户",
      signOutError: "无法退出。请重试。",
      saveProgressError: "无法保存您的进度。请重试。",
      unableToSaveProgress: "无法保存您的进度。",
    },
    questionField: {
      answerNow: "立即回答",
      notSureYet: "暂不确定",
      notApplicable: "不适用",
      provideLater: "稍后提供",
      requestHelp: "请求帮助",
      preferNotToAnswer: "不愿回答",
      required: "必填",
      optional: "可选",
      setEachStatus: "设置每项的状态",
      chooseOne: "选择一项",
      chooseUpToPrefix: "最多选择 ",
      chooseAll: "选择所有适用项",
      chooseUpToSuffix: "。",
      pickWhatFits: "选择最合适的选项。您可以在下方添加背景。",
      shortAnswer: "简短回答即可。您可以稍后补充更多细节。",
      everydayWords: "日常用语即可。几句话就够了。",
      shareWhatYouKnow: "分享您所知道的。您可以在下方请求指导。",
      skipIfPrefer: "如果您想稍后提供，可跳过此项。",
      whyWeAsk: "我们为何询问",
      savedChoicePrefix: "您保存的选择：",
      savedChoiceSuffix:
        "。这些选项已从更新后的表单中移除。您的答案已保留；请在确认前审阅可用选项。",
      confirmAccuracy: "我确认这些详情以及我分享它们的权限。",
      confirmPrivacy: "我已审阅入职隐私信息。",
      yesIConfirm: "是的，我确认",
      requiredSuffix: "（必填）",
      optionalSuffix: "（可选）",
      chooseStatus: "选择状态",
      nothingYet: "暂无",
      notSure: "不确定",
      ready: "就绪",
      needsUpdating: "需要更新",
      needHelp: "需要帮助",
      searchOptionsPrefix: "搜索选项：",
      searchOptionsPlaceholder: "搜索选项…",
      noMatchingChoices: "没有匹配的选项。请尝试其他词或清除搜索。",
      somethingElse: "其他",
      addOwnOption: "添加您自己的选项或说明",
      countryOrRegion: "国家或地区",
      searchCountry: "搜索或输入国家/地区",
      timezone: "时区",
      searchTimezone: "搜索时区，例如 Asia/Shanghai",
      forFirstLaunch: "用于首次上线",
      canWaitUntilLater: "可稍后再做",
      chooseOptionOrDescribe: "选择一项或在下方描述",
      startWithUpToThree: "从最多三个优先事项开始",
      ideasForFuture: "未来阶段的想法",
      chooseApprox: "选择近似值",
      enterExact: "改为输入精确值",
      fewSentences: "几句话就够了",
      oneExampleOrLink: "一个示例或文档链接",
      remove: "移除",
      addAnother: "+ 添加另一个",
      quickAnswersLabel: "快速回答",
      yourFirstPriority: "您的第一优先级",
      chooseMainPriority: "选择您的主要优先级",
      notSureSeeOther: "不确定？查看其他回答方式",
      changeAnswerSuffix: " · 更改答案",
      addContactNote: "添加联系人、负责人或后续备注",
      addNoteLink: "添加简短备注或链接（可选）",
      notePlaceholder: "文档链接、澄清说明、同事姓名或可联系时间",
      workspaceMemberPrefix: "工作区成员 ",
      chooseAccess: "选择请求的访问权限",
      viewProject: "查看项目",
      reviewAndComment: "审阅并评论",
      supplyInputs: "提供项目输入",
      needGuidance: "需要指导",
      removeMember: "移除成员",
      addAnotherPerson: "+ 添加另一个人",
      quickChoicesPrefix: "快速选项：",
      countries: [
        "澳大利亚", "孟加拉国", "巴西", "加拿大", "中国", "法国", "德国",
        "印度", "印度尼西亚", "爱尔兰", "意大利", "日本", "肯尼亚", "马来西亚", "墨西哥",
        "尼泊尔", "荷兰", "新西兰", "尼日利亚", "巴基斯坦", "菲律宾",
        "沙特阿拉伯", "新加坡", "南非", "西班牙", "斯里兰卡",
        "阿拉伯联合酋长国", "英国", "美国",
      ],
    },
    previewPending: [
      "创建客户账户时，请核实项目或工作区的联系邮箱。",
      "商定项目范围并完成签署协议。",
      "让机构对照您已商定的发票核实 40% 预付款。",
    ],
  },

  projectBrief: {
    serviceOptions: [
      "电商与网站",
      "研究与设计",
      "营销与活动",
      "自动化与集成",
      "维护与性能",
    ],
    headerLine: "Starter Shifter — 项目简报",
    nameLabel: "您的姓名",
    emailLabel: "邮箱",
    companyLabel: "公司（可选）",
    timingLabel: "时间（可选）",
    timingPlaceholder: "例如，在某个上线日期之前",
    servicesLegend: "我们可以帮您做些什么？",
    servicesDescription: "选择任何合适的项，或保持开放。",
    goalsLabel: "您希望实现什么？",
    goalsPlaceholder: "向我们介绍您的业务、您的需求，以及您设想的结果。",
    currentSetupLabel: "现有基础是什么？（可选）",
    currentSetupDescription: "现有网站、商店、社交页面或业务工具。",
    currentSetupPlaceholder: "分享您已在使用的系统、平台或账户。",
    openEmailDraft: "打开邮件草稿",
    downloadBrief: "下载项目简报",
    emailDraftReady:
      "您的邮件草稿已准备好打开。请在邮件应用中审阅，并在准备好时发送。",
    downloadReady:
      "您的项目简报已在下载中就绪。尚未向 Starter Shifter 发送任何内容。",
    briefFields: {
      name: "姓名：",
      email: "邮箱：",
      company: "公司：",
      services: "服务：",
      timing: "时间：",
      notSpecified: "未指定",
      exploreOptions: "让我们探索各种选项",
      projectGoals: "项目目标：",
      alreadyInPlace: "现有基础：",
      disclaimer: "此简报是讨论的起点，而非已商定的范围或报价。",
    },
    emailSubjectPrefix: "项目咨询 — ",
    downloadFileName: "starter-shifter-project-brief.txt",
  },

  projects: [
    {
      title: "店面概念",
      category: "电商",
      description: "带产品系列与清晰购物路径的说明性店面布局。",
      imageAlt: "带绿色主视觉与日常包袋插图的概念店面",
      status: "概念预览",
    },
    {
      title: "运营工作区概念",
      category: "Web 应用",
      description: "将订单、库存与发货任务汇集到单一视图的说明性工作区。",
      imageAlt: "显示订单表格与工作流面板的概念运营仪表板",
      status: "概念预览",
    },
    {
      title: "创意网站概念",
      category: "网站设计",
      description: "带醒目字体与精选作品集的说明性编辑式网站。",
      imageAlt: "带大号字体与抽象雕塑艺术品的概念创意网站",
      status: "概念预览",
    },
    {
      title: "客户支持概念",
      category: "AI 工作流",
      description: "用于会话、常见问题与团队接管的说明性支持界面。",
      imageAlt: "带会话列表与客户聊天的概念支持工作区",
      status: "概念预览",
    },
  ],

  shared: {
    deliveryStageStatusLabels: {
      upcoming: "即将到来",
      "in-progress": "进行中",
      complete: "已完成",
      blocked: "需要关注",
    },
    defaultDeliveryStages: [
      { title: "您的项目简报", description: "分享您的业务、目标、内容与需求。您的答案有助于塑造项目讨论。" },
      { title: "协议与激活", description: "您的机构在激活前核实联系方式、签署的协议、40% 预付款与项目依赖。" },
      { title: "研究与方向", description: "业务、市场与竞品研究确定方向。时间与交付物遵循您已商定的项目范围。" },
      { title: "设计与反馈", description: "探索已商定的设计工作，审阅草案并分享反馈。变体与修订数量遵循您的协议。" },
      { title: "构建与连接", description: "已商定的网站、内容、工作流与受支持的连接逐步成形。所选需求在项目范围中确认。" },
      { title: "审阅与交接", description: "审阅已商定的交付物并为交接做准备。上线要求与持续支持取决于您的合作方式。" },
    ],
    workspaceViewNames: {
      overview: "概览",
      brief: "项目简报",
      journey: "项目旅程",
      resources: "品牌与资源",
      agreement: "协议与账单",
    },
    questionStatusLabels: {
      answered: "已回答",
      later: "留待稍后",
      pending: "未回答",
      attention: "需要关注",
      review: "审阅",
    },
    answerStateLabels: {
      answered: "立即回答",
      unknown: "暂不确定",
      "not-applicable": "不适用",
      deferred: "稍后提供",
      help: "与我们讨论",
    },
    prerequisites: {
      briefLabel: "项目简报",
      briefSubmitted: "您的简报已提交。",
      briefDetail: "完成并提交您的项目详情。",
      identityLabel: "联系方式核实",
      identityDetail: "您的项目与工作区联系邮箱。",
      agreementLabel: "签署的协议",
      agreementDetail: "与您的机构确认范围。",
      advanceLabel: "40% 预付款",
      advanceDetail: "机构对照您已商定的发票进行核实。",
      responsiblePrefix: "负责人：",
    },
    activity: {
      briefSaved: "项目简报已保存",
      briefSubmitted: "简报已提交",
      briefSubmittedDetail: "您的项目详情已可供审阅",
      engagementUpdated: "合作记录已更新",
      engagementUpdatedDetail: "范围与先决条件已记录",
    },
    assetStatusLabels: {
      ready: "就绪",
      "needs-updating": "需要更新",
      "needs-help": "需要帮助",
      "not-available": "不可用",
      recorded: "已记录在简报中",
    },
    workspaceFallback: {
      businessName: "您的下一个篇章",
      description: "为您的业务、您的简报以及后续一切而设的专属空间。",
    },
    notAnswered: "未回答",
    confirmed: "已确认",
    notConfirmed: "未确认",
    firstPriorityPrefix: "第一优先级：",
  },
};
