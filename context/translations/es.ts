import type { TranslationDictionary } from "../i18n";

/** Spanish (Español) localization. */
export const es: TranslationDictionary = {
  brand: {
    homeAriaLabel: "Inicio de Starter Shifter",
    tagline: "Tu negocio, conectado",
    footerNote: "Desde tu primera tienda online hasta los flujos de trabajo que la respaldan. Construido alrededor de tu negocio.",
    footerWorldwide: "Trabajamos con negocios de todo el mundo.",
  },

  common: {
    skipToContent: "Saltar al contenido",
    backToHome: "Volver al inicio",
    policyAwaitingApproval: "Política pendiente de aprobación",
    prepareProjectBrief: "Prepara un resumen de proyecto",
    policyNavigationLabel: "Información de políticas",
    privacy: "Privacidad",
    cookies: "Cookies",
    serviceTerms: "Términos del servicio",
    exploreServices: "Explora nuestros servicios",
    planYourProject: "Planifica tu proyecto",
    supportAndCare: "Soporte y atención",
    viewAllProducts: "Ver todos los productos",
    getStarted: "Empezar",
    resourceNoteDefault: "Starter Shifter · Recursos",
    openNavigation: "Abrir navegación",
    closeNavigation: "Cerrar navegación",
    loadingPage: "Cargando página",
    explorePrefix: "Explorar ",
    illustrationSuffix: " ilustración",
    loading: {
      site: "Cargando Starter Shifter",
      signInOptions: "Cargando opciones de acceso",
      onboardingInformation: "Cargando tu información de incorporación",
      workspace: "Cargando tu espacio de trabajo",
      projectBrief: "Cargando tu resumen de proyecto",
    },
    opensInNewTab: "se abre en una pestaña nueva",
  },

  metadata: {
    home: {
      title: "Starter Shifter — Tu negocio, conectado",
      description:
        "Ecommerce, dirección creativa, automatización y operaciones conectadas. Starter Shifter ayuda a los negocios a construir su siguiente capítulo online, con un alcance definido según sus necesidades.",
    },
    about: {
      title: "Sobre nosotros — Starter Shifter",
      description:
        "Conoce Starter Shifter, una agencia que ayuda a negocios de todo el mundo a conectar sus sitios web, presencia social y operaciones mediante investigación, diseño, desarrollo y automatización.",
    },
    faq: {
      title: "Preguntas frecuentes — Starter Shifter",
      description:
        "Respuestas sobre los planes Basic y Pro de Starter Shifter, la incorporación, las etapas de entrega, los sitios web, las integraciones, el soporte continuo y cómo empezar un proyecto.",
    },
    howWeWork: {
      title: "Cómo trabajamos — Starter Shifter",
      description:
        "Las etapas de entrega que usa Starter Shifter, desde el descubrimiento y el alcance hasta el diseño, la construcción, el lanzamiento y el soporte continuo, incluidos los requisitos de incorporación y la primera entrega de investigación.",
    },
    products: {
      title: "Productos y plantillas — Starter Shifter",
      description:
        "Explora los sitios web, aplicaciones y experiencias conectadas de Starter Shifter. Las vistas previas de concepto se etiquetan por separado del trabajo completado de clientes.",
    },
    support: {
      title: "Soporte y atención — Starter Shifter",
      description:
        "Cómo gestiona Starter Shifter el mantenimiento, el soporte y la mejora continua tras el lanzamiento, incluidos los límites de cobertura de Basic y Pro.",
    },
    privacy: { title: "Información de privacidad — Starter Shifter" },
    cookies: { title: "Información de cookies — Starter Shifter" },
    terms: { title: "Información de términos del servicio — Starter Shifter" },
    onboardingPrivacy: { title: "Tu información de incorporación — Starter Shifter" },
    login: { title: "Únete | Starter Shifter" },
    dashboard: { title: "Espacio de trabajo del cliente — Starter Shifter" },
    dashboardPreview: { title: "Tu espacio de trabajo — Starter Shifter" },
    onboarding: { title: "Tu resumen de proyecto — Starter Shifter" },
    onboardingPreview: { title: "Vista previa de incorporación — Starter Shifter" },
  },

  navigation: {
    sections: [
      {
        label: "Servicios",
        items: [
          { title: "Sitios web de ecommerce", description: "Tiendas online diseñadas según cómo vendes.", href: "/services/ecommerce" },
          { title: "Social y marketing", description: "SEO, email y presencia social, planificados y entregados.", href: "/services/social-campaigns" },
          { title: "Chatbots y automatización", description: "Preguntas frecuentes respondidas; el resto se deriva.", href: "/services/chatbots-automation" },
          { title: "Sistemas de inventario", description: "Una vista clara y fiable de tu stock.", href: "/services/inventory" },
          { title: "Envíos y pedidos", description: "Menos pasos manuales entre el pedido y el envío.", href: "/services/shipping-orders" },
          { title: "Integraciones ERP y CRM", description: "Tus herramientas de negocio, trabajando juntas.", href: "/services/erp-crm-integrations" },
          { title: "Mantenimiento y soporte", description: "Atención técnica continua tras el lanzamiento.", href: "/services/maintenance-support" },
          { title: "Mejora del rendimiento", description: "Encuentra y resuelve los cuellos de botella.", href: "/services/performance" },
          { title: "Investigación y dirección creativa", description: "Perspectiva de mercado y borradores de diseño en Figma.", href: "/services/research-creative-direction" },
          { title: "Presentaciones y planificación", description: "Una vista compartida de tu proyecto, desde el principio.", href: "/services/project-planning" },
        ],
        footer: {
          text: "Basic por $2.500 una sola vez. Pro por $2.500 más $500/mes.",
          linkLabel: "Ver precios",
          href: "#pricing",
        },
      },
      {
        label: "Recursos",
        items: [
          { title: "Cómo trabajamos", description: "Etapas de entrega, del descubrimiento al lanzamiento.", href: "/how-we-work" },
          { title: "Preguntas frecuentes", description: "Preguntas comunes, respondidas con claridad.", href: "/faq" },
          { title: "Productos y plantillas", description: "Explora nuestros sitios web y aplicaciones.", href: "/products" },
          { title: "Soporte y atención", description: "Ayuda para proyectos tras el lanzamiento.", href: "/support" },
        ],
      },
    ],
    directLinks: [
      { title: "Sobre nosotros", description: "Quién es Starter Shifter y cómo trabajamos.", href: "/about" },
      { title: "Precios", description: "Compara la configuración Basic y el soporte continuo Pro.", href: "/#pricing" },
    ],
    cta: "Empezar",
    mainNavigationLabel: "Navegación principal",
    mobileNavigationLabel: "Navegación móvil",
  },

  footer: {
    ariaLabel: "Pie de página de Starter Shifter",
    socialProfilesLabel: "Perfiles sociales",
    policyNote: "Estado de las políticas e información actual.",
    navigation: [
      {
        key: "company",
        title: "Empresa",
        links: [
          ["Sobre nosotros", "/about"],
          ["Cómo trabajamos", "/how-we-work"],
          ["Productos y plantillas", "/products"],
          ["Planes y precios", "/#pricing"],
        ],
      },
      {
        key: "services",
        title: "Servicios",
        links: [
          ["Aplicaciones web", "/#services"],
          ["Redes sociales", "/#services"],
          ["Flujos de trabajo con IA", "/#services"],
          ["Operaciones conectadas", "/#process"],
          ["Mantenimiento y crecimiento", "/#pricing"],
        ],
      },
      {
        key: "resources",
        title: "Recursos",
        links: [
          ["Acceso de cliente", "/login"],
          ["Cómo trabajamos", "/how-we-work"],
          ["Preguntas frecuentes", "/faq"],
          ["Resumen de proyecto", "/project-brief"],
          ["Soporte y atención", "/support"],
        ],
      },
      {
        key: "information",
        title: "Información",
        links: [
          ["Privacidad", "/policies/privacy"],
          ["Cookies", "/policies/cookies"],
          ["Términos del servicio", "/policies/terms"],
        ],
      },
    ],
  },

  landing: {
    hero: {
      eyebrow: "Tu agencia de ecommerce y crecimiento digital",
      titleLines: ["Tu próximo capítulo", "empieza con una mejor tienda."],
      description:
        "Desde tu primera tienda online hasta los sistemas que la respaldan. Unimos diseño, ecommerce y operaciones conectadas, construido alrededor de tu negocio.",
      primaryCta: "Construyamos tu tienda",
      secondaryCta: "Explora nuestros servicios",
      note: "Tu negocio. Tu alcance. Dondequiera que estés.",
    },
    services: {
      kicker: "Qué hacemos",
      titleLines: ["Bien por fuera.", "Conectado por dentro."],
      intro:
        "Tu presencia online. Tu voz social. Los flujos de trabajo que la respaldan. Tres servicios conectados, diseñados alrededor de tu negocio.",
      cards: [
        { title: "Aplicación web", text: "Sitios web y aplicaciones web, con diseño y desarrollo definidos según cómo funciona tu negocio." },
        { title: "Redes sociales y marketing", text: "Gestión de SEO, email marketing y redes sociales en WhatsApp, LinkedIn, Pinterest y más." },
        { title: "Flujo de trabajo con IA", text: "Herramientas conectadas, automatización de tareas y flujos de chat con clientes que incorporan a tu equipo cuando hace falta." },
      ],
      illustrationLabels: {
        web: "Explorar la ilustración de aplicación web",
        social: "Explorar la ilustración de redes sociales",
        ai: "Explorar la ilustración del flujo de trabajo con IA",
      },
    },
    projects: {
      kicker: "Productos y plantillas",
      titleLines: ["Una mirada más cercana", "a lo que construimos."],
      intro:
        "Sitios web, aplicaciones y experiencias conectadas. Explora la colección, una pantalla a la vez.",
      cta: "Ver todos los productos",
      showcaseLabel: "Vitrina de proyectos",
    },
    process: {
      kicker: "Cómo te llevamos a estar online",
      titleLines: ["De entender tu negocio", "a conectarlo online."],
      intro:
        "Cinco etapas de una presencia digital conectada. Acordamos qué servicios necesita tu proyecto y construimos alrededor de ese alcance.",
      linkLabel: "Leer la guía de entrega completa",
      steps: [
        {
          title: ["Investigación y", "dirección"],
          description:
            "Conocemos tu negocio, estudiamos tu mercado y analizamos a la competencia. Esas perspectivas definen el plan y una dirección de diseño inicial para tu revisión.",
          details: ["Investigación de negocio", "Análisis de mercado", "Perspectivas de la competencia"],
          note: "La profundidad de la investigación y los entregables de diseño se acuerdan para tu proyecto.",
          phase: "Entender",
        },
        {
          title: ["Tu negocio,", "construido online"],
          description:
            "Diseñamos y construimos tu sitio web o aplicación web en Shopify o WordPress, con WooCommerce cuando necesitas una tienda. La plataforma y las funciones siguen cómo funciona tu negocio.",
          details: ["Shopify o WordPress", "Diseño y desarrollo", "Lanzamiento y entrega"],
          note: "Tú aportas el contenido de negocio, los detalles de producto, el acceso a cuentas y las aprobaciones.",
          phase: "Construir",
        },
        {
          title: ["Una presencia", "social"],
          description:
            "Configuramos tu marketing digital: gestión de SEO, email marketing y redes sociales en WhatsApp, LinkedIn, Pinterest y los demás canales que tu negocio necesite. El objetivo es que te encuentren y te entiendan más fácilmente.",
          details: ["Gestión de SEO", "Email marketing", "WhatsApp, LinkedIn y Pinterest"],
          note: "Basic incluye la configuración completa de marketing — SEO, email y redes sociales — como trabajo único. Pro añade generación de leads y trabajo de crecimiento, sin volumen de leads garantizado.",
          phase: "Establecer",
        },
        {
          title: ["IA que te ayuda", "a responder"],
          description:
            "Configuramos chatbots para las preguntas frecuentes de los clientes y flujos de soporte, conectados a tus canales sociales cuando es posible. Las conversaciones que necesitan a tu equipo se pasan a una persona.",
          details: ["Chatbots para clientes", "Canales sociales compatibles", "Traspaso a una persona"],
          note: "El acceso a canales, las preguntas aprobadas y los límites de uso del software definen la configuración.",
          phase: "Automatizar",
        },
        {
          title: ["Conectado.", "Cuidado."],
          description:
            "Mantenemos y mejoramos los sistemas acordados, y conectamos herramientas de negocio compatibles: ERP para operaciones y CRM para relaciones con clientes. Los flujos de envío y facturación pueden formar parte de esas integraciones.",
          details: ["Mantenimiento y rendimiento", "Conexiones ERP y CRM", "Envíos y facturación"],
          note: "Las integraciones dependen de las capacidades de terceros. El cuidado continuo se factura mensualmente; los costes de terceros van aparte.",
          phase: "Conectar y mantener",
        },
      ],
    },
    about: {
      kicker: "Un poco sobre nosotros",
      titleLines: ["Tu negocio online.", "Todo funcionando junto."],
      intro: "Somos Starter Shifter. Tu sitio web, tu presencia social y tus flujos de trabajo, construidos para funcionar juntos.",
      benefits: [
        { title: "Claridad antes de construir", description: "Investigación que da dirección a tu próximo paso." },
        { title: "Tus herramientas, conectadas", description: "Conexiones compatibles. Menos pasos manuales." },
        { title: "Tu negocio, online", description: "Un sitio web o una tienda diseñados alrededor de ti." },
        { title: "Una presencia social coherente", description: "Tu marca, llevada a páginas y plantillas." },
        { title: "Soporte con toque humano", description: "IA para lo rutinario. Tu equipo cuando importa." },
        { title: "Ver qué necesita atención", description: "Encuentra los cuellos de botella. Céntrate en un mejor rendimiento." },
      ],
      ctaTitleLines: ["Hagamos tu", "próximo paso digital."],
      ctaLabel: "Habla de tu proyecto",
    },
    pricing: {
      label: "Nuestros planes",
      title: "Elige el soporte que necesitas.",
      recommendedBadge: "Recomendado",
      plans: [
        {
          name: "Plan Basic",
          description: "La construcción completa y la configuración de marketing digital, entregadas una sola vez.",
          price: "$2.500",
          payment: "Pago único",
          billing: "Tu aplicación y tu marketing, construidos y entregados.",
          includes: "Qué incluye",
          features: [
            "Investigación de negocio, mercado y competencia",
            "Diseño en Figma y dirección creativa",
            "Desarrollo de sitio web o aplicación de ecommerce",
            "Gestión de SEO",
            "Email marketing",
            "Marketing en redes sociales — WhatsApp, LinkedIn, Pinterest y más",
            "Configuración de chatbot con IA y automatización de soporte",
            "Configuración de flujos de inventario, envío y facturación",
            "Integraciones ERP y CRM compatibles",
            "Lanzamiento y entrega",
          ],
          boundary:
            "Construcción y configuración de marketing de una sola vez. No prometemos generación de leads ni mantenimiento continuo. Tú pagas el hosting, los dominios, la inversión publicitaria y las comisiones de pago.",
          action: "Obtener el plan Basic",
        },
        {
          name: "Plan Pro",
          description: "Todo lo de Basic, más un equipo que lo mantiene y lo hace crecer.",
          price: "$2.500",
          payment: "Configuración única",
          monthly: "$500",
          monthlyPeriod: "/ mes",
          billing: "para mantenimiento y generación de leads",
          includes: "Todo lo de Basic, más",
          features: [
            "Mantenimiento y soporte técnico continuo",
            "Mejora y monitorización del rendimiento",
            "Generación de leads y gestión de campañas",
            "Mantener el SEO y el marketing al día",
            "Estrategia y planificación de crecimiento del negocio",
            "Atención y gestión de consultas de clientes",
            "Gestión de chatbot y automatización",
            "Mantenimiento continuo de flujos e integraciones",
          ],
          boundary:
            "Gestionamos activamente la generación de leads y ayudamos a crecer tu negocio. Los volúmenes de leads no están garantizados — si un enfoque no funciona, lo reestructuramos y probamos otros. La inversión publicitaria va aparte.",
          action: "Obtener el plan Pro",
        },
      ],
      terms:
        "Los entregables, las cantidades, las herramientas compatibles y la cobertura mensual se acuerdan antes de empezar. Tú aportas el contenido de negocio, el acceso a cuentas y las aprobaciones. El hosting, los dominios, el software, las licencias, las tarifas de uso, la inversión publicitaria y los cargos de pago o envío los pagas tú y van aparte de los honorarios de la agencia. Los servicios adicionales fuera de los tres grupos se cotizan por separado.",
      footerLink: "Ver qué cubre el soporte continuo",
    },
    faq: {
      kicker: "Un poco más de claridad",
      titleLines: ["Buenas preguntas.", "Respuestas claras."],
      intro: "Cada negocio empieza en un lugar distinto. Esto es lo que conviene saber antes de empezar juntos.",
      linkLabel: "Ver todas las preguntas frecuentes",
      questions: [
        {
          question: "¿Qué incluye exactamente?",
          answer:
            "Basic cubre la construcción completa y la configuración de marketing digital como trabajo único: tu sitio web o aplicación de ecommerce, gestión de SEO, email marketing y marketing en redes sociales en WhatsApp, LinkedIn, Pinterest y otros canales según tus necesidades. Pro añade todo lo de Basic, más $500 al mes por mantenimiento continuo, rendimiento y generación de leads. Los servicios fuera de estas tres áreas se cotizan por separado.",
        },
        {
          question: "¿Cuál es la diferencia entre Basic y Pro?",
          answer:
            "Basic cuesta $2.500 una sola vez y entrega la construcción completa de la aplicación y la configuración de marketing, y luego se traspasa. Pro cuesta $2.500 por la misma configuración más $500 al mes por mantenimiento continuo, mejora del rendimiento y generación de leads. Basic no incluye generación de leads ni mantenimiento continuo. Los volúmenes de leads no están garantizados en ninguno de los dos planes.",
        },
        {
          question: "¿Hay tarifas extra u ocultas?",
          answer:
            "El hosting, los dominios, la inversión publicitaria, las comisiones de pago y otros gastos de terceros los pagas tú, no están incluidos en los honorarios de la agencia. Si necesitas servicios fuera de las tres áreas que cubrimos, o trabajo fuera del alcance acordado, se cotiza por separado.",
        },
        {
          question: "¿Qué necesitáis de nosotros para empezar?",
          answer:
            "Un contrato firmado, un anticipo del 40% y los datos de tu empresa y proyecto. Después completas la incorporación y aportas cualquier información o documento adicional a través de tu panel — incluidos catálogos e imágenes de producto para que podamos crear maquetas precisas.",
        },
        {
          question: "¿Cuánto tardará nuestro proyecto?",
          answer:
            "La primera entrega de investigación y un borrador de diseño en Figma se prevé en un máximo de 3–4 días tras completar la incorporación. Después programamos dos videollamadas de Google Meet por semana para compartir el progreso y las novedades hasta que tu aplicación esté construida y entregada.",
        },
        {
          question: "¿Podéis conectar las herramientas que ya usamos?",
          answer:
            "Ofrecemos integraciones entre tiendas, inventario, envíos y sistemas de negocio como herramientas ERP y CRM. Revisamos tus sistemas exactos, el acceso disponible y las limitaciones de la plataforma antes de confirmar la compatibilidad y el trabajo implicado.",
        },
        {
          question: "¿Podéis ayudar después del lanzamiento?",
          answer:
            "Sí. Pro incluye $500 al mes por mantenimiento y soporte continuos: mejoramos el rendimiento, mantenemos tu SEO y marketing al día y trabajamos para lograr mejores ventas. Basic es de pago único, pero todo cliente de pago único sigue recibiendo soporte durante el primer mes completo desde la incorporación — gestionamos los cambios solicitados y las correcciones de errores. Después de ese mes, si no continúas con Pro, la ayuda adicional se cotiza según el problema y los servicios que necesites.",
        },
        {
          question: "¿Quién es el propietario del sitio web y las cuentas tras la entrega?",
          answer:
            "Tú. Tras la entrega gestionas el sitio web, sus cuentas y su contenido. No te obligamos a continuar con nuestros servicios a menos que quieras soporte continuo.",
        },
        {
          question: "¿Garantizáis leads o ventas?",
          answer:
            "No podemos prometer una cifra concreta, porque los resultados dependen sobre todo del mercado. Lo que obtienen los clientes de Pro es generación de leads activa y continua: trabajamos para conseguir leads y ventas, y si un enfoque no funciona, lo reestructuramos y probamos otros para encontrar lo que encaja con tu negocio.",
        },
      ],
    },
    contact: {
      intro: "Tu próximo capítulo",
      titleLines: ["Hagamos tu", "próximo paso."],
      description:
        "Una mejor tienda online, una presencia social más fuerte o flujos de trabajo conectados. Empieza con lo que tu negocio necesita.",
      cta: "Planifica tu proyecto",
      dialogTitle: "Cuéntanos qué tienes en mente.",
      dialogDescriptionWithEmail:
        "Crea un resumen de proyecto breve y ábrelo en tu aplicación de correo para enviárnoslo.",
      dialogDescriptionWithoutEmail:
        "Plasma tus ideas en un resumen breve que puedes descargar y compartir. Este formulario guarda un archivo en tu dispositivo; no envía una consulta.",
      secondaryLink: "Explora nuestros servicios",
    },
  },

  pages: {
    about: {
      eyebrow: "Sobre Starter Shifter",
      note: "Trabajamos con negocios de todo el mundo",
      titleLines: ["Tu negocio.", "Su próximo capítulo"],
      titleMark: "online.",
      lede:
        "Somos Starter Shifter, una agencia que ayuda a los negocios a llevar sus productos y operaciones a internet. Conectamos el sitio web que ven tus clientes con las herramientas y los flujos de trabajo que hay detrás.",
      primaryCta: "Cuéntanos sobre tu negocio",
      secondaryCta: "Explora nuestros planes",
      facts: [
        { label: "Enfoque", value: "Web, social y flujos de trabajo con IA" },
        { label: "Alcance", value: "Negocios de todo el mundo" },
        { label: "Formas de trabajar", value: "Configuración Basic o soporte Pro" },
      ],
      statementEyebrow: "La versión corta",
      statementTitle:
        "Conectamos el sitio web que ven tus clientes con los flujos de trabajo en los que confía tu equipo.",
      statementParagraphs: [
        "Trabajamos con negocios de todo el mundo, en distintos sectores. Tanto si vas a establecer una presencia online como si vas a mejorar una configuración existente, el punto de partida es tu negocio y lo que necesita.",
        "Nuestro enfoque reúne investigación, diseño, desarrollo e integraciones compatibles en un único plan acordado, de modo que cada parte tiene un propósito claro.",
      ],
      workLabel: "Qué hacemos",
      workTitleLines: ["Tres áreas.", "Un plan conectado."],
      workAside:
        "Tres áreas de trabajo, definidas según la forma en que tu negocio vende, se comunica y opera.",
      workLink: "Explora nuestros servicios",
      services: [
        {
          title: "Aplicaciones web",
          description:
            "Sitios web y tiendas de ecommerce diseñados alrededor de tus productos y clientes. Reunimos investigación, dirección creativa y desarrollo en Shopify o WordPress con WooCommerce, con la plataforma y las funciones acordadas para tu proyecto.",
          tags: ["Shopify", "WordPress + WooCommerce", "Diseño y construcción"],
        },
        {
          title: "Redes sociales y marketing digital",
          description:
            "Gestión de SEO, email marketing y marketing en redes sociales en WhatsApp, LinkedIn, Pinterest y otros canales según tus necesidades. Para proyectos Pro, también acordamos las campañas y la generación de leads que tu negocio necesita.",
          tags: ["SEO", "Email marketing", "WhatsApp, LinkedIn y Pinterest"],
        },
        {
          title: "Flujos de trabajo con IA",
          description:
            "Chatbots y automatizaciones compatibles que ayudan a responder preguntas comunes, dirigir consultas y reducir el trabajo repetitivo. Podemos conectar inventario, envíos, facturación y herramientas de negocio acordadas cuando las plataformas lo permitan.",
          tags: ["Chatbots", "Soporte al cliente", "Integraciones compatibles"],
        },
      ],
      processLabel: "Cómo trabajamos",
      processTitleLines: ["Primero investigar.", "Un camino claro."],
      processIntro:
        "Tu conocimiento del negocio y nuestra investigación guían el trabajo. Las decisiones compartidas mantienen alineados el diseño, la construcción y la entrega.",
      gateLabel: "Antes de empezar",
      gateItems: ["Contrato firmado", "Anticipo del 40%", "Datos de empresa y proyecto"],
      steps: [
        {
          title: "Entender tu negocio",
          description:
            "Hablamos de tus objetivos, productos, clientes y sistemas existentes, y luego acordamos los entregables, las responsabilidades, el calendario y los costes.",
        },
        {
          title: "Encontrar una dirección compartida",
          description:
            "La investigación de empresa, mercado y competencia alimenta un borrador básico de diseño en Figma. Revisas la dirección y compartes comentarios antes de pasar a la construcción y los flujos conectados acordados.",
        },
        {
          title: "Construir, lanzar y planificar lo siguiente",
          description:
            "Implementamos y probamos el sitio web y los flujos seleccionados, con tu contenido, acceso a cuentas y aprobaciones. La entrega y cualquier mantenimiento o crecimiento posterior siguen la cobertura acordada para tu plan.",
        },
      ],
      scopeLabel: "Trabajar juntos",
      scopeTitleLines: ["Alcance claro.", "Expectativas compartidas."],
      scopeIntro:
        "Antes de empezar, definimos los servicios seleccionados, lo que aportas tú y lo que queda fuera de los honorarios de la agencia.",
      scope: [
        {
          label: "Qué recibes",
          description:
            "Basic cubre la construcción completa de la aplicación más el marketing digital — gestión de SEO, email marketing y marketing en redes sociales — como trabajo único. Pro añade mantenimiento continuo, mejora del rendimiento y generación de leads.",
        },
        {
          label: "Qué aportas tú",
          description:
            "Contenido acordado, información de negocio, catálogos e imágenes de producto, acceso a cuentas y aprobaciones. Los plazos dependen de estos elementos y de las aprobaciones de plataformas de terceros.",
        },
        {
          label: "Se mantiene aparte",
          description:
            "Las suscripciones de plataforma, el hosting, los dominios, las apps de pago, las tarifas de uso, la inversión publicitaria y las comisiones de pago los pagas tú, aparte de los honorarios de la agencia.",
        },
      ],
      scopeCta: "Comparar Basic y Pro",
      scopeFooter:
        "Los entregables, las cantidades, las herramientas compatibles, las revisiones y la cobertura de soporte se acuerdan antes de empezar.",
    },

    faq: {
      eyebrow: "Recursos / Preguntas frecuentes",
      note: "Los detalles, respondidos con claridad",
      titleLines: ["Buenas preguntas.", "Respuestas claras."],
      titleMark: "Respuestas claras.",
      description:
        "Los detalles prácticos sobre alcance, precios, plazos, integraciones y soporte — escritos tal y como los explicaríamos en una primera conversación.",
      facts: [
        { label: "Planes", value: "Basic y Pro" },
        { label: "Incorporación", value: "Contrato, anticipo y datos" },
        { label: "Cobertura", value: "Acordada por proyecto" },
      ],
      sectionIndex: "01",
      sectionLabel: "Preguntas comunes",
      sectionTitleLines: ["Respuestas directas,", "sin letra pequeña."],
      sectionIntro:
        "Si tu pregunta no está aquí, empieza un resumen de proyecto y cuéntanos qué intentas resolver. Te responderemos directamente.",
      jumpTo: "Ir a",
      categoriesLabel: "Categorías de preguntas frecuentes",
      groups: [
        {
          id: "faq-plans",
          label: "Planes y alcance",
          questions: [
            {
              question: "¿Qué es Starter Shifter?",
              answer:
                "Starter Shifter es una agencia que ayuda a los negocios a llevar sus productos y operaciones a internet. Trabajamos en sitios web y aplicaciones de ecommerce, presencia social, chatbots y automatización, integraciones y los sistemas que hay detrás. Los clientes pueden estar en cualquier lugar, y cada alcance se define alrededor del negocio.",
            },
            {
              question: "¿Cuál es la diferencia entre Basic y Pro?",
              answer:
                "Basic cuesta $2.500 una sola vez. Cubre la construcción completa de la aplicación más la configuración de marketing digital: investigación y diseño, desarrollo de sitio web o aplicación de ecommerce, gestión de SEO, email marketing y marketing en redes sociales en WhatsApp, LinkedIn, Pinterest y otros canales según se requiera, además de la configuración de chatbot y automatización, integraciones operativas compatibles y el lanzamiento. Tú gestionas la generación de leads y el trabajo continuo tras la entrega. Pro cuesta $2.500 por la misma configuración más $500 al mes por mantenimiento continuo, mejora del rendimiento, generación de leads y mantener el SEO y el marketing al día. Los entregables y la cobertura se acuerdan por adelantado; los volúmenes de leads no están garantizados y los costes de terceros como hosting, dominios, inversión publicitaria y comisiones de pago los pagas tú.",
            },
            {
              question: "¿Podemos elegir solo una parte de un plan?",
              answer:
                "Sí. Basic y Pro son puntos de partida para los alcances más comunes. Si necesitas un proyecto más pequeño, más grande o distinto, podemos hablar de un alcance a medida. El trabajo, el precio, el calendario y las responsabilidades seleccionados se acuerdan antes de empezar.",
            },
            {
              question: "¿Hay costes más allá del precio del plan?",
              answer:
                "Sí. El hosting, los dominios, la inversión publicitaria, las comisiones de procesamiento de pagos y otros gastos de terceros los pagas tú, aparte de los honorarios de la agencia. Las suscripciones de plataforma, los temas, las apps, los plugins y licencias, las suscripciones de ERP, CRM, chatbot y otro software, las tarifas de uso, la licencia de recursos y los cargos de envío o cumplimiento también son tu responsabilidad. Los servicios fuera de las tres áreas que cubrimos, o el trabajo fuera del alcance acordado, se cotizan por separado.",
            },
            {
              question: "¿Garantizáis leads, ventas o crecimiento?",
              answer:
                "No podemos prometer un número concreto de leads o ventas — los resultados dependen sobre todo del mercado y de factores fuera de nuestro control. Lo que sí prometemos para Pro es el trabajo en sí: gestionamos activamente la generación de leads y ayudamos a crecer tu negocio, y si un enfoque no da resultados, lo reestructuramos y probamos otros para encontrar lo que encaja. Trabajaremos en ello contigo, no solo te entregaremos una configuración.",
            },
            {
              question: "¿Cómo funciona el pago?",
              answer:
                "La incorporación sigue a un contrato compartido firmado y a un anticipo del 40%, junto con los datos de tu empresa y proyecto. El calendario del pago restante y otros términos comerciales se establecen en tu contrato. Basic es una tarifa única; Pro combina una tarifa de configuración con un cargo mensual. Otros términos de pago o legales se acuerdan individualmente.",
            },
          ],
        },
        {
          id: "faq-process",
          label: "Proceso y plazos",
          questions: [
            {
              question: "¿Qué necesitáis de nosotros para empezar?",
              answer:
                "Un contrato compartido firmado, un anticipo del 40% y los datos de tu empresa y proyecto. Según el alcance, también podemos necesitar información de producto, recursos de marca, acceso a herramientas existentes, políticas, reglas fiscales y de envío, y una persona de contacto que pueda revisar y aprobar el trabajo.",
            },
            {
              question: "¿Cuánto tardará nuestro proyecto?",
              answer:
                "La primera entrega de investigación y un borrador de diseño en Figma se prevé en un máximo de 3–4 días tras completar la incorporación. La construcción completa depende después del alcance, los requisitos técnicos, la disponibilidad del contenido, las aprobaciones de terceros y los ciclos de revisión. Programamos dos videollamadas de Google Meet por semana para compartir el progreso, y acordamos los hitos y el calendario en tu propuesta.",
            },
            {
              question: "¿Cuál es la primera entrega prevista?",
              answer:
                "Tras el contrato firmado, el anticipo del 40% y los datos de empresa/proyecto completos, prevemos una primera entrega en 3–4 días con investigación de empresa, mercado y competencia, más un borrador básico de diseño en Figma con variantes. El inicio exacto del plazo, la profundidad de la investigación, el número de variantes y el margen de revisiones se confirman para tu proyecto. La entrega es un paso para fijar la dirección, no el sitio web terminado ni todas las integraciones.",
            },
            {
              question: "¿Cómo funcionan las revisiones?",
              answer:
                "Revisas el trabajo acordado en los puntos de decisión de tu alcance y compartes comentarios consolidados. El margen de revisiones se acuerda antes de empezar. Si una solicitud cambia el alcance acordado o añade trabajo nuevo, definimos el trabajo extra, el precio y el calendario antes de continuar.",
            },
            {
              question: "¿Qué pasa si nuestro contenido o acceso llega tarde?",
              answer:
                "Los plazos dependen de los elementos que acordemos. Si el contenido, el acceso a cuentas, las aprobaciones o las respuestas de terceros llegan tarde, el calendario puede cambiar. Señalamos la dependencia y acordamos un plan revisado en lugar de absorber el retraso en silencio.",
            },
          ],
        },
        {
          id: "faq-build",
          label: "Sitios web e integraciones",
          questions: [
            {
              question: "¿Sobre qué plataformas construís?",
              answer:
                "Construimos sitios web y aplicaciones de ecommerce en Shopify o WordPress, usando WooCommerce cuando se necesita una tienda. Si otra plataforma o creador de sitios encajara mejor, revisamos el soporte y la viabilidad antes de comprometernos. El enfoque de plataforma se confirma en tu propuesta.",
            },
            {
              question: "¿Podéis rediseñar o migrar un sitio existente?",
              answer:
                "Podemos hablar de un rediseño o una migración, pero no se incluye automáticamente en Basic o Pro. Primero revisamos el sitio, el contenido, los productos, las integraciones y las redirecciones actuales. El alcance, los riesgos y el precio de la migración se acuerdan por separado.",
            },
            {
              question: "¿Podéis conectar las herramientas que ya usamos?",
              answer:
                "Ofrecemos integraciones entre tiendas, inventario, envíos, facturación y sistemas de negocio como herramientas ERP y CRM. La compatibilidad depende de los sistemas, versiones, accesos, APIs y límites de plataforma exactos. Los revisamos antes de confirmar qué se puede conectar y qué implica el trabajo.",
            },
            {
              question: "¿Construís aplicaciones móviles nativas?",
              answer:
                "Nuestro trabajo confirmado son sitios web y aplicaciones web. Si estás pensando en una app móvil nativa, plantéalo pronto para que podamos confirmar si encaja en el proyecto. No se asume que forme parte de una construcción web o de ecommerce.",
            },
            {
              question: "¿Podéis configurar chatbots y automatización social?",
              answer:
                "Sí, como configuración acordada. Diseñamos los casos de uso, conectamos los canales compatibles, usamos fuentes de conocimiento aprobadas, fijamos límites y organizamos un traspaso a una persona cuando hace falta. El soporte exacto de canales, el volumen de conversaciones, los permisos y los costes de uso se confirman durante la viabilidad. No prometemos soporte totalmente autónomo ni todos los canales sociales.",
            },
          ],
        },
        {
          id: "faq-after-launch",
          label: "Tras el lanzamiento",
          questions: [
            {
              question: "¿Podéis ayudar después del lanzamiento?",
              answer:
                "Sí. Pro incluye mantenimiento y soporte continuos por $500 al mes, además de su tarifa de configuración de $2.500. Mejoramos el rendimiento, mantenemos tu SEO y marketing al día y trabajamos para lograr mejores ventas. Basic es una configuración única, pero todo cliente de pago único sigue recibiendo soporte durante el primer mes completo desde la incorporación — gestionamos los cambios solicitados y las correcciones de errores. Después de ese primer mes, si no continúas con Pro, la ayuda adicional se cotiza según el problema y los servicios que necesites.",
            },
            {
              question: "¿Qué cubre el mantenimiento?",
              answer:
                "La cobertura típica puede incluir comprobaciones rutinarias, actualizaciones aplicables y comprobaciones de compatibilidad, correcciones de errores, monitorización, tareas de copia de seguridad y recuperación cuando se acuerden, y gestión de soporte. La lista exacta depende de tus sistemas y de la cobertura que contrates. Las funciones nuevas y el trabajo fuera de esa cobertura necesitan su propio alcance.",
            },
            {
              question: "¿Ofrecéis soporte 24/7 o un tiempo de respuesta garantizado?",
              answer:
                "No publicamos una promesa universal de 24/7 ni de tiempo de respuesta. Los horarios, canales, capacidad, objetivos de respuesta y escalado se acuerdan en tu alcance de soporte. Si necesitas un nivel de servicio concreto, plantéalo antes del proyecto para que podamos confirmar si se puede cumplir.",
            },
            {
              question: "¿Quién es el propietario del sitio web y las cuentas tras la entrega?",
              answer:
                "Tú. Tras la entrega gestionas el sitio web, sus cuentas y su contenido. No te obligamos a continuar con nuestros servicios a menos que quieras soporte continuo. Las cuentas de plataforma, las licencias y los servicios de terceros pueden seguir sujetos a sus propios términos.",
            },
            {
              question: "¿Podéis gestionar nuestros anuncios y la generación de leads?",
              answer:
                "Pro incluye generación de leads y trabajo de campaña gestionados por la agencia dentro del alcance acordado. Basic excluye la generación de leads gestionada por la agencia. Trabajamos activamente para conseguir leads y ventas, y si un enfoque no funciona, lo reestructuramos y probamos otros. La inversión publicitaria siempre la pagas tú, aparte de los honorarios de la agencia, y los volúmenes de leads no están garantizados — los resultados dependen del mercado. Los canales, el alcance de campaña, las cantidades de contenido y la frecuencia de informes se acuerdan por adelantado.",
            },
          ],
        },
        {
          id: "faq-working",
          label: "Trabajar juntos",
          questions: [
            {
              question: "¿Cómo empezamos un proyecto?",
              answer:
                "Empieza con un resumen de proyecto en este sitio. Lo usamos para entender tu negocio y tus objetivos, y luego hablamos del alcance adecuado. Si encaja, recibes una propuesta con entregables, exclusiones, precios, calendario y responsabilidades. El trabajo empieza tras el contrato firmado, el anticipo del 40% y los datos del proyecto.",
            },
            {
              question: "¿Trabajáis con negocios fuera de vuestro país?",
              answer:
                "Sí. Starter Shifter trabaja con negocios de todo el mundo. No afirmamos tener cobertura legal, fiscal o de plataforma local en todos los mercados, por lo que los requisitos específicos de tu jurisdicción se confirman para tu proyecto.",
            },
            {
              question: "¿Cómo gestionáis nuestra información?",
              answer: {
                before:
                  "Usamos los datos que compartes para entender tu negocio y preparar o entregar los servicios acordados. No vendemos tu resumen ni lo compartimos con otros negocios para su propio uso. Nuestra ",
                linkLabel: "información de privacidad",
                linkHref: "/policies/privacy",
                after:
                  " explica el resumen de proyecto y el portal de cliente actuales, e identifica qué sigue pendiente de aprobación.",
              },
            },
            {
              question: "¿Y si no estamos seguros de lo que necesitamos?",
              answer:
                "Es un punto de partida normal. Comparte el problema de negocio y lo que ya hay en marcha. Podemos ayudarte a identificar el alcance más pequeño y sensato, incluido si la investigación o un paso de descubrimiento debería ir primero. No necesitas elegir un plan antes de la primera conversación.",
            },
            {
              question: "¿El resumen de proyecto es un contrato o un presupuesto?",
              answer:
                "No. El resumen de proyecto es un punto de partida para la conversación. No crea un acuerdo, no reserva tiempo ni fija un precio. Una propuesta y un contrato firmado definen el alcance y los términos comerciales.",
            },
          ],
        },
      ],
    },

    howWeWork: {
      eyebrow: "Recursos / Cómo trabajamos",
      note: "La entrega, explicada con claridad",
      titleLines: ["Un camino claro desde la primera conversación hasta"],
      titleMark: "el cuidado continuo.",
      description:
        "Cada proyecto es distinto, pero la forma de avanzar por él no. Estas son las etapas que usamos para entender tu negocio, acordar el alcance, construir el trabajo y dar soporte a lo que viene después.",
      facts: [
        { label: "Punto de partida", value: "Contrato, anticipo del 40% y datos" },
        { label: "Primera entrega", value: "Investigación y dirección en Figma" },
        { label: "Formas de trabajar", value: "Configuración Basic o soporte Pro" },
      ],
      prerequisitesTitleLines: ["La incorporación empieza cuando", "las bases están claras."],
      prerequisitesLabel: "El punto de partida",
      prerequisitesIntro:
        "La incorporación sigue tres requisitos previos. Protegen a ambas partes: el alcance se entiende, el compromiso es real y tenemos suficiente contexto para empezar un trabajo útil.",
      prerequisites: [
        {
          title: "Un contrato compartido firmado",
          description:
            "El contrato registra el alcance, las responsabilidades y los términos comerciales acordados. El trabajo solo empieza después de firmarlo.",
        },
        {
          title: "Un anticipo del 40%",
          description:
            "El anticipo confirma el proyecto y nos permite reservar tiempo de entrega. Los términos del pago restante se establecen en tu contrato.",
        },
        {
          title: "Datos de empresa y proyecto",
          description:
            "Necesitamos suficiente contexto sobre tu negocio, objetivos y configuración existente para empezar la investigación y la incorporación.",
        },
      ],
      prerequisitesFootNote:
        "Antes del pago, tu propuesta establece los servicios seleccionados, los entregables, las exclusiones, el calendario, las responsabilidades y los costes. El trabajo adicional necesita una decisión explícita sobre alcance, precio y calendario.",
      stagesTitleLines: ["Ocho etapas, definidas según", "el trabajo que realmente necesitas."],
      stagesLabel: "El camino de entrega",
      stagesIntro:
        "Estas etapas describen cómo operamos. Tu propuesta confirma cuáles aplican, qué incluyen y cómo es la finalización para tu proyecto.",
      stages: [
        {
          title: "Descubrimiento y cualificación",
          description:
            "Hablamos de tus objetivos, sistemas actuales, limitaciones y cómo sería el éxito. El objetivo es entender el problema antes de proponer una construcción.",
          bring: "Objetivos, configuración existente, responsables de decisión",
          output: "Un resumen de descubrimiento o un siguiente paso recomendado",
        },
        {
          title: "Alcance y propuesta",
          description:
            "Definimos los entregables, las exclusiones, el enfoque de plataforma, los precios, el calendario y las responsabilidades en una propuesta escrita.",
          bring: "Acceso a los detalles del sistema y respuestas de viabilidad a tiempo",
          output: "Una propuesta que puedes revisar y aprobar",
        },
        {
          title: "Acuerdo e incorporación",
          description:
            "Una vez firmado el contrato, recibido el anticipo y completados los datos de tu proyecto, empieza la incorporación y comenzamos el trabajo acordado.",
          bring: "Contrato firmado, anticipo del 40%, datos de empresa",
          output: "Un proyecto activo y un punto de partida compartido",
        },
        {
          title: "Investigación inicial y borrador en Figma",
          description:
            "Presentamos investigación de empresa, mercado y competencia junto a un borrador básico de diseño en Figma con variantes para que lo revises.",
          bring: "Comentarios sobre la dirección y las revisiones acordadas",
          output: "Una dirección de diseño seleccionada para llevar a la implementación",
        },
        {
          title: "Diseño e implementación",
          description:
            "Construimos el sitio web, la aplicación, las campañas o las integraciones acordadas. Las capacidades de la plataforma y los tiempos de respuesta de terceros definen lo posible.",
          bring: "Contenido, datos de producto, acceso a cuentas, aprobaciones",
          output: "El trabajo acordado, construido y listo para revisar",
        },
        {
          title: "Pruebas y revisión del cliente",
          description:
            "Comprobamos la funcionalidad acordada y documentamos los problemas. Tú pruebas los flujos de negocio que importan y confirmas la aceptación o una lista de revisiones acotada.",
          bring: "Cuentas de prueba, datos representativos, comentarios",
          output: "Una construcción probada y una lista clara de elementos restantes",
        },
        {
          title: "Lanzamiento y entrega",
          description:
            "Desplegamos o activamos el trabajo aprobado y transferimos la documentación, el acceso y la formación acordados.",
          bring: "Aprobación del lanzamiento y disponibilidad de dominios y cuentas",
          output: "Trabajo en producción y una entrega acordada",
        },
        {
          title: "Soporte y mejora continuos",
          description:
            "Si has contratado cobertura continua, mantenemos, gestionamos, informamos sobre o mejoramos los sistemas acordados. Basic no incluye gestión continua.",
          bring: "Contactos, decisiones y aportaciones recurrentes",
          output: "El trabajo continuo definido en tu alcance de soporte",
        },
      ],
      youBring: "Tú aportas",
      output: "Resultado",
      stagesFootNote:
        "La corrección de defectos, el mantenimiento y el desarrollo de nuevas funciones son categorías de trabajo distintas. Cada una se gestiona bajo el alcance que le corresponde, en lugar de asumirse incluida.",
      handoffTitleLines: ["Una dirección compartida,", "antes de construir."],
      handoffLabel: "La primera entrega",
      handoffIntro:
        "La entrega inicial pretende darte algo concreto a lo que reaccionar: investigación que alimenta el plan y un borrador de diseño con opciones.",
      handoffCards: [
        {
          title: "Investigación de empresa, mercado y competencia",
          description:
            "Estudiamos tu negocio, el segmento en el que operas y las alternativas que tus clientes pueden considerar. Los hallazgos definen el plan y la dirección de diseño.",
        },
        {
          title: "Un borrador básico de diseño en Figma",
          description:
            "El borrador presenta variantes para tu revisión, de modo que puedas elegir una dirección y dar comentarios enfocados antes de la implementación.",
        },
        {
          title: "Un punto de decisión, no una construcción terminada",
          description:
            "Seleccionas una dirección y solicitas las revisiones acordadas. La implementación que sigue es una etapa aparte con sus propios puntos de revisión y aprobación.",
        },
        {
          title: "Lo que no promete",
          description:
            "Esta entrega no es el sitio web terminado, ni todos los recursos, ni todas las integraciones. La profundidad de la investigación y el alcance del diseño coinciden con el tiempo y la información disponibles.",
        },
      ],
      handoffNote:
        "La intención declarada es una primera entrega en un máximo de 3–4 días tras el contrato firmado, el anticipo del 40% y los datos de empresa/proyecto completos. Durante la construcción programamos dos videollamadas de Google Meet por semana para compartir el progreso. El inicio exacto del plazo, la profundidad de la investigación, el número de variantes y el margen de revisiones se confirman en tu propuesta.",
      workingTitleLines: ["Responsabilidades claras.", "Menos sorpresas."],
      workingLabel: "Trabajar juntos",
      workingIntro:
        "Un buen proyecto no trata solo de lo que construimos. También trata de quién aporta qué, quién lo aprueba y qué costes quedan fuera de los honorarios de la agencia.",
      workingTogether: [
        {
          title: "Qué aportas tú",
          items: [
            "Los datos completos de tu empresa y proyecto, completados durante la incorporación",
            "Contenido de negocio, datos de producto, catálogos e imágenes de producto",
            "Acceso a cuentas y contactos técnicos",
            "Políticas, reglas fiscales, detalles de envío y aprobaciones",
            "Una persona de decisión para revisiones y aprobación final",
          ],
        },
        {
          title: "Qué gestionamos nosotros",
          items: [
            "La investigación, el diseño y la implementación acordados",
            "Las integraciones y pruebas compatibles",
            "El lanzamiento, la documentación y la entrega",
            "Cualquier trabajo continuo contratado por separado",
          ],
        },
        {
          title: "Se mantiene aparte",
          items: [
            "Hosting, dominios, temas, apps y licencias",
            "Suscripciones de ERP, CRM, chatbot y otro software",
            "Procesamiento de pagos, uso y cargos de envío",
            "Inversión publicitaria y licencia de recursos de terceros",
          ],
        },
      ],
      workingFootNoteBefore:
        "Los entregables, las cantidades, las herramientas compatibles, los límites de revisión y la capacidad de soporte se acuerdan antes de empezar. Consulta ",
      workingFootNoteLink: "Soporte y atención",
      workingFootNoteAfter: " para saber cómo se gestiona la cobertura continua.",
    },

    products: {
      eyebrow: "Recursos / Productos y plantillas",
      note: "Sitios web, aplicaciones y sistemas",
      titleLines: ["Una mirada más cercana", "a lo que construimos."],
      titleMark: "construimos.",
      description:
        "Sitios web, aplicaciones y experiencias conectadas. Explora la colección, las categorías de trabajo que hay detrás y cómo etiquetamos la diferencia entre un concepto y el trabajo completado de un cliente.",
      facts: [
        { label: "Enfoque", value: "Sitios web, aplicaciones y sistemas" },
        { label: "Colección", value: "Vistas previas de concepto" },
        { label: "Política de evidencia", value: "Solo trabajo aprobado" },
      ],
      workTitleLines: ["Tres áreas.", "Una experiencia conectada."],
      workLabel: "El trabajo",
      workIntro:
        "La mayoría de los proyectos tocan más de un área. Una tienda puede necesitar una vista de operaciones; un flujo de soporte puede necesitar un sitio web y una conexión CRM detrás.",
      buildAreas: [
        {
          title: "Sitios web y ecommerce",
          description:
            "Tiendas y sitios web de negocio diseñados según cómo vendes, con catálogo, pago y contenido construidos sobre una plataforma acordada.",
          tags: ["Shopify", "WordPress + WooCommerce", "Diseño y construcción"],
        },
        {
          title: "Aplicaciones web y operaciones",
          description:
            "Herramientas internas y aplicaciones para clientes que convierten pedidos, inventario y sistemas de negocio conectados en flujos de trabajo más claros.",
          tags: ["Paneles", "Flujos de trabajo", "Conexiones ERP y CRM"],
        },
        {
          title: "Experiencias de IA y automatización",
          description:
            "Chatbots, flujos de soporte y automatizaciones compatibles que responden preguntas comunes, dirigen consultas y reducen el trabajo repetitivo.",
          tags: ["Chatbots", "Traspaso a una persona", "Integraciones compatibles"],
        },
      ],
      collectionTitleLines: ["Conceptos hoy.", "Evidencia según se apruebe."],
      collectionLabel: "La colección",
      collectionIntroWithPreviews:
        "La colección muestra actualmente conceptos de diseño. Son vistas previas ilustrativas; los detalles y las capturas de proyectos completados aparecerán solo cuando se aporten y se aprueben.",
      collectionIntroWithoutPreviews:
        "Explora la colección de sitios web, aplicaciones y experiencias conectadas.",
      visitProject: "Visitar proyecto",
      collectionFootNote:
        "Las vistas previas de concepto ilustran una dirección; no son resultados de clientes ni casos de estudio publicados. No publicamos nombres de clientes, logotipos, testimonios ni métricas sin permiso y verificación.",
    },

    support: {
      eyebrow: "Recursos / Soporte y atención",
      note: "Ayuda tras el lanzamiento",
      titleLines: ["Un soporte que mantiene", "el trabajo funcionando."],
      titleMark: "funcionando.",
      description:
        "El lanzamiento es un hito, no la meta. Así funcionan la atención, el mantenimiento y la mejora continuos después de que tu proyecto esté en producción — y qué queda fuera de un alcance de soporte acordado.",
      facts: [
        { label: "Basic", value: "Configuración única" },
        { label: "Pro", value: "$2.500 + $500/mes" },
        { label: "Cobertura", value: "Acordada por proyecto" },
      ],
      actionCta: "Planifica tu proyecto",
      actionSecondary: "Entra en tu espacio de trabajo",
      plans: [
        {
          name: "Basic",
          price: "$2.500",
          payment: "Configuración única",
          description:
            "La construcción completa y la configuración de marketing digital, entregadas una vez y traspasadas. Basic no incluye gestión continua.",
          items: [
            "La construcción completa de la aplicación y el lanzamiento",
            "Gestión de SEO, email marketing y marketing en redes sociales",
            "Configuración de chatbot y automatización",
            "Entrega del acceso y la documentación acordados",
            "Soporte del primer mes para cambios y correcciones de errores",
          ],
        },
        {
          name: "Pro",
          price: "$2.500",
          payment: "Configuración + $500 / mes",
          description:
            "La base de Basic más mantenimiento continuo, mejora del rendimiento, generación de leads y mantener el SEO y el marketing al día.",
          items: [
            "Mantenimiento y soporte técnico continuos",
            "Mejora y monitorización del rendimiento",
            "Generación de leads y gestión de campañas",
            "Mantener el SEO y el marketing al día",
            "Mantenimiento de chatbot y flujos de trabajo",
          ],
        },
      ],
      waysTitleLines: ["Dos formas de mantener", "las cosas en movimiento."],
      waysLabel: "Tras el lanzamiento",
      waysIntro:
        "Basic es una construcción de una sola vez. Pro añade una relación continua. Ninguno de los dos planes significa trabajo ilimitado; los sistemas cubiertos, la capacidad y la cadencia se acuerdan por adelantado.",
      waysFootNote:
        "El cargo mensual de Pro cubre el trabajo continuo acordado, incluida la generación activa de leads — cuando un enfoque no da resultados, lo reestructuramos y probamos otros. La inversión publicitaria, las suscripciones de terceros y las tarifas de uso las pagas tú. Los volúmenes de leads y los resultados de crecimiento no están garantizados.",
      coverageTitleLines: ["El trabajo detrás", "de “mantenerlo funcionando”."],
      coverageLabel: "Cobertura",
      coverageIntro:
        "El soporte puede significar cosas distintas según los sistemas implicados. Estas son las áreas que podemos cubrir cuando se incluyen en tu alcance de soporte.",
      coverage: [
        {
          title: "Mantenimiento y actualizaciones",
          description:
            "Comprobaciones rutinarias, actualizaciones aplicables y comprobaciones de compatibilidad para los sistemas acordados. La cadencia exacta se fija en tu alcance de soporte.",
        },
        {
          title: "Correcciones de errores",
          description:
            "Corrección de defectos en la construcción acordada. Un defecto es distinto de una función nueva o de un cambio en el alcance acordado.",
        },
        {
          title: "Rendimiento",
          description:
            "Monitorización y mejoras acordadas de velocidad, fiabilidad o de los flujos de trabajo cubiertos por tu plan. Los objetivos son específicos de cada proyecto.",
        },
        {
          title: "Integraciones y datos",
          description:
            "Mantenimiento de las conexiones compatibles de ERP, CRM, inventario, envíos y facturación, incluidas la monitorización y la gestión de errores acordadas.",
        },
        {
          title: "Copia de seguridad y recuperación",
          description:
            "Tareas de copia de seguridad y recuperación cuando se acuerden y la plataforma lo permita. Las responsabilidades y las expectativas de recuperación se documentan.",
        },
        {
          title: "Gestión de soporte",
          description:
            "Una vía clara para preguntas y problemas, con clasificación, objetivos de respuesta acordados y escalado para los sistemas en el alcance.",
        },
      ],
      coverageFootNote:
        "La lista exacta depende de tu combinación de plataformas, integraciones y cobertura contratada. El mantenimiento, la corrección de defectos y el desarrollo de nuevas funciones se gestionan como categorías de trabajo distintas.",
      requestTitleLines: ["Una vía clara", "hacia una respuesta real."],
      requestLabel: "Cuando algo necesita atención",
      requestStepLabel: "Solicitud",
      requestIntro:
        "El soporte funciona mejor cuando la solicitud es específica y llega al lugar acordado. Esta es la forma de una solicitud útil.",
      requestSteps: [
        {
          title: "Usa el canal acordado",
          description:
            "Envía la solicitud por el canal de soporte confirmado para tu proyecto, para que llegue al lugar correcto y pueda rastrearse.",
        },
        {
          title: "Incluye el detalle útil",
          description:
            "Describe qué pasó, dónde pasó, qué esperabas y los pasos para reproducirlo. Las capturas o los enlaces ayudan.",
        },
        {
          title: "Clasificamos y respondemos",
          description:
            "Confirmamos si es un defecto, mantenimiento o trabajo nuevo, y luego acordamos el siguiente paso. El trabajo fuera del alcance recibe su propio presupuesto.",
        },
      ],
      upFrontTitle: "Qué acordamos por adelantado",
      upFrontDescription:
        "Los horarios, canales, capacidad, objetivos de respuesta y escalado se confirman en tu alcance de soporte. No publicamos una promesa universal de 24/7 ni de tiempo de respuesta.",
      requestNote:
        "Si ya trabajas con nosotros, usa el canal de soporte acordado para tu proyecto. Si no sabes qué canal aplica, pregunta a tu contacto habitual del proyecto antes de enviar información sensible.",
      boundariesTitleLines: ["Qué queda fuera", "de un alcance acordado."],
      boundariesLabel: "Límites",
      boundariesIntro:
        "Saber qué no está incluido es tan útil como saber qué sí lo está. Estos elementos se cotizan por separado en lugar de absorberse en el soporte rutinario.",
      separateLabel: "Aparte",
      boundaries: [
        {
          title: "Nuevas funciones y rediseños",
          description:
            "La funcionalidad nueva, los cambios estructurales, las migraciones y los rediseños son aparte del mantenimiento rutinario. Necesitan su propio alcance, precio y calendario.",
        },
        {
          title: "Costes de terceros",
          description:
            "El hosting, los dominios, los temas, las apps, las licencias, las suscripciones de software, las tarifas de uso, la inversión publicitaria y las comisiones de pago o envío los pagas tú, aparte de los honorarios de la agencia.",
        },
        {
          title: "Trabajo sin alcance de soporte",
          description:
            "Basic es una configuración única con soporte del primer mes para cambios solicitados y correcciones de errores. Después de ese mes, si no continúas con Pro, la ayuda adicional se cotiza según el problema y los servicios que necesites.",
        },
      ],
      boundariesFootNoteBefore:
        "Los entregables, la capacidad, los objetivos de respuesta y los sistemas cubiertos se confirman antes de empezar. Consulta ",
      boundariesLinkOneLabel: "cómo trabajamos",
      boundariesLinkOneHref: "/how-we-work",
      boundariesFootNoteMiddle: " o lee las ",
      boundariesLinkTwoLabel: "preguntas frecuentes de soporte",
      boundariesLinkTwoHref: "/faq#faq-after-launch",
      boundariesFootNoteAfter: ".",
    },

    policies: {
      privacy: {
        title: "Información de privacidad.",
        description:
          "La política de privacidad completa de Starter Shifter está pendiente de aprobación. La información siguiente describe la función actual de resumen de proyecto; no es una política de privacidad completa.",
        sections: [
          {
            heading: "Tu resumen de proyecto",
            paragraph:
              "Tu resumen se guarda en tu cuenta de cliente para que puedas pausar, volver y actualizar tus respuestas. No se comparte con otras cuentas de cliente. Los archivos de proyecto subidos se almacenan con tu espacio de trabajo y están disponibles para ti y para Starter Shifter. Puedes eliminar tus propios archivos subidos del espacio de trabajo.",
          },
          {
            heading: "Cuentas de cliente e incorporación",
            paragraphBefore:
              "Tu cuenta de cliente te permite guardar la información de tu proyecto y volver a ella más tarde. Su ",
            linkLabel: "información de privacidad de incorporación",
            linkHref: "/policies/onboarding-privacy",
            paragraphAfter:
              " explica cómo se usan los datos del proyecto. Aceptas ese aviso antes de empezar las preguntas.",
          },
          {
            heading: "Más información",
            paragraph:
              "La información sobre el alojamiento de datos, cualquier futuro servicio de consultas, la retención y las solicitudes de privacidad se añadirá cuando se aprueben la política completa y los datos de contacto.",
          },
        ],
      },
      cookies: {
        title: "Información de cookies.",
        description:
          "La política de cookies está pendiente de aprobación. Se añadirá un aviso completo tras revisar el entorno de alojamiento en producción y cualquier herramienta de seguimiento.",
        sections: [
          {
            heading: "Funciones actuales del sitio web",
            paragraph:
              "No hay ninguna integración opcional de analítica o publicidad configurada en este sitio web. La función actual de resumen de proyecto crea una descarga local sin enviar tus datos.",
          },
          {
            heading: "Cambios futuros",
            paragraph:
              "Si se introducen funciones de analítica, publicidad u otro seguimiento opcional, esta información deberá actualizarse para las herramientas y los datos reales implicados.",
          },
        ],
      },
      terms: {
        title: "Información de términos del servicio.",
        description:
          "Los términos completos del servicio están pendientes de aprobación. Esta página resume la información de contratación confirmada; cada proyecto requiere un alcance acordado y un contrato firmado.",
        sections: [
          {
            heading: "Antes de la incorporación",
            paragraph:
              "La incorporación sigue a un contrato firmado, un anticipo del 40% y los datos de empresa y proyecto necesarios para empezar. Los entregables, las herramientas compatibles, el calendario, las responsabilidades del cliente y la cobertura continua se acuerdan para cada proyecto.",
          },
          {
            heading: "Configuración y trabajo continuo",
            paragraph:
              "Basic es una tarifa única de $2.500 que cubre la construcción completa de la aplicación y la configuración de marketing digital (gestión de SEO, email marketing y marketing en redes sociales). Pro añade $500 al mes por mantenimiento continuo, mejora del rendimiento y generación de leads. Ninguno de los dos planes establece trabajo ilimitado, volúmenes de leads garantizados ni resultados de negocio garantizados.",
          },
          {
            heading: "Costes de terceros",
            paragraph:
              "El hosting, los dominios, la inversión publicitaria, las comisiones de procesamiento de pagos, las suscripciones de plataforma, los temas y plugins de pago, el uso de software, las licencias y los cargos de envío los pagas tú, aparte de los honorarios de la agencia. Los servicios fuera de las tres áreas de servicio se cotizan por separado.",
          },
          {
            heading: "Términos aún por publicar",
            paragraph:
              "Los términos restantes de pago, impuestos, cancelación, reembolso, propiedad, licencia y soporte se publicarán una vez aprobados. Confirma estos detalles en tu acuerdo de proyecto antes de continuar.",
          },
        ],
      },
      onboardingPrivacy: {
        title: "Tu información, con un propósito.",
        shareHeading: "Qué compartes con nosotros",
        shareParagraph:
          "Tus datos de contacto, la descripción de tu negocio, tus clientes y mercados, los objetivos del proyecto y los servicios con los que quieres ayuda. También puedes compartir ejemplos de negocio y enlaces a materiales que nos ayuden a entender tu proyecto. Si subes archivos de proyecto a través de tu espacio de trabajo, almacenamos el archivo y sus detalles con tu proyecto.",
        useHeading: "Cómo lo usamos",
        useParagraphs: [
          "Usamos tus respuestas para preparar y revisar tu resumen de proyecto, investigar tu negocio, planificar una dirección de diseño y entregar el trabajo acordado contigo. Tu progreso se guarda para que puedas volver, hacer cambios y comprobar tus respuestas antes de enviar tu resumen a nuestro equipo. Los archivos subidos se usan para revisar y entregar el proyecto para el que los compartiste.",
          "Enviar un resumen no firma un acuerdo ni confirma un pago. Tu acuerdo establece los servicios, las tarifas y las responsabilidades de tu proyecto.",
        ],
        responsibilityHeading: "Quién cuida tu información",
        responsibilityParagraphAfter:
          "Puedes acceder a tu propio resumen a través de tu cuenta. Otras cuentas de cliente no pueden acceder a él. Nuestro portal usa proveedores de servicios para el acceso a la cuenta y el almacenamiento de información; Starter Shifter es responsable de gestionar la información de tu proyecto.",
        noticeHeading: "Tu aviso de incorporación",
        keepingHeading: "Conservar tus datos y responder tus preguntas",
        contactPrefix: "Para preguntas o solicitudes sobre tu información, contacta con ",
        pausedHeading: "Antes de empezar",
        pausedParagraphs: [
          "La incorporación está temporalmente en pausa. Puedes volver a revisar esta información cuando se reabra.",
          "La vista previa de desarrollo te permite probar el recorrido con datos de negocio de ejemplo. Sus respuestas y progreso de ejemplo se guardan por separado y pueden restaurarse en el mismo navegador.",
        ],
        safeHeading: "Comparte contexto de negocio, con seguridad",
        safeParagraphAfter:
          "Elimina los datos privados de cualquier ejemplo que compartas. Si tu proyecto necesita acceso a cuentas más adelante, nuestro equipo lo organizará contigo por separado.",
      },
    },
  },

  auth: {
    heading: "Únete.",
    subheading: "¿Nuevo por aquí o ya tienes cuenta? Continúa a tu espacio de trabajo de cliente.",
    socialGroupLabel: "Continúa con una cuenta social",
    providers: { google: "Google", facebook: "Facebook" },
    connecting: "Conectando…",
    continueWith: "Continuar con ",
    socialHelpBoth: "El acceso con Google y Facebook llegará pronto. Por ahora puedes usar el email.",
    socialHelpOneSuffix: " llegará pronto.",
    or: "o",
    continueWithEmail: "Continuar con email",
    workspaceNote: "Comparte tu resumen de negocio y sigue tu proyecto en un solo lugar.",
    privacyNoteBefore: "Lee cómo usamos tu cuenta y los datos del proyecto en nuestra ",
    privacyNoteLink: "información de privacidad",
    connectError: "No pudimos conectar tu cuenta. Inténtalo de nuevo o continúa con email.",
    socialSignInError: "El acceso social no funcionó. Inténtalo de nuevo o continúa con email.",
    emailViewLabel: "Acceso a la cuenta con email",
    backToOptions: "Volver a todas las opciones de acceso",
    emailModeLabel: "Acceso a la cuenta con email",
    signIn: "Iniciar sesión",
    createAccount: "Crear cuenta",
    createAccountEmailLabel: "Crear una cuenta con email",
    signInEmailLabel: "Iniciar sesión con email",
    emailLabel: "Dirección de email",
    emailPlaceholder: "tu@negocio.com",
    passwordLabel: "Contraseña",
    passwordPlaceholderCreate: "Crea una contraseña segura",
    passwordPlaceholderSignin: "Introduce tu contraseña",
    showPassword: "Mostrar contraseña",
    hidePassword: "Ocultar contraseña",
    yourNameLabel: "Tu nombre",
    yourNamePlaceholder: "Alex Morgan",
    keepMeSignedIn: "Mantener mi sesión iniciada",
    passwordHint: "Usa al menos 12 caracteres para tu contraseña.",
    creatingAccount: "Creando tu cuenta…",
    signingIn: "Iniciando sesión…",
    enterNameError: "Introduce tu nombre.",
    tooManyAttemptsError: "Demasiados intentos. Espera un momento y vuelve a intentarlo.",
    createAccountError: "No pudimos crear tu cuenta. Prueba a iniciar sesión o usa otro email.",
    signInError: "No pudimos iniciar sesión. Comprueba tu email y tu contraseña.",
    connectRetryError: "No pudimos conectar. Vuelve a intentarlo en un momento.",
    shell: {
      storyTag: "Tu negocio, conectado",
      storyHeading: "Empieza tu camino.",
      storyDescription: "Unos pocos pasos sencillos para enfocar tu negocio.",
      journeyLabel: "El recorrido de tu espacio de trabajo",
      steps: ["Crea tu cuenta", "Cuéntanos sobre tu negocio", "Da forma a tu próximo capítulo"],
      formPanelLabel: "Únete a Starter Shifter",
      backToWebsite: "Volver al sitio web",
      copyrightPrefix: "© ",
      accountPoliciesLabel: "Políticas de la cuenta",
    },
  },

  dashboard: {
    viewNames: {
      overview: "Resumen",
      brief: "Resumen de proyecto",
      journey: "Recorrido del proyecto",
      resources: "Marca y recursos",
      agreement: "Acuerdo y facturación",
    },
    updates: {
      title: "Novedades y seguimientos",
      description: "Tu último progreso guardado y los detalles que revisar.",
      empty: "Empieza tu resumen de proyecto para ver tus novedades aquí.",
      openQuestionsPrefix: "Preguntas abiertas (",
      openQuestionsSuffix: ")",
      revisitDefault: "Revisa esta respuesta con tu agencia.",
      noFollowups: "No hay seguimientos marcados en tu resumen.",
      viewProjectJourney: "Ver el recorrido del proyecto",
      updateBrief: "Actualizar mi resumen",
      startBrief: "Empezar mi resumen",
    },
    shell: {
      skipToDashboard: "Saltar al panel",
      closeNavigation: "Cerrar navegación",
      workspaceNavigationLabel: "Navegación del espacio de trabajo",
      clientWorkspace: "Espacio de trabajo del cliente",
      littleGuidance: "¿Un poco de orientación?",
      littleGuidanceDesc: "Cada siguiente paso, explicado.",
      workspaceGuide: "Guía del espacio de trabajo",
      developmentPreview: "Vista previa de desarrollo",
      signingOut: "Cerrando sesión…",
      signOut: "Cerrar sesión",
      workspace: "Espacio de trabajo",
      searchLabel: "Buscar en tu resumen de proyecto",
      searchPlaceholder: "Buscar en tu resumen…",
      viewUpdatesLabel: "Ver novedades del espacio de trabajo",
      openProfileLabel: "Abrir tu perfil",
      yourAccount: "Tu cuenta",
      dashboardContentLabel: "Contenido de la pestaña del panel",
      footerBrand: "Starter Shifter · Tu negocio, conectado.",
      projectPrivacy: "Privacidad del proyecto",
      connecting: "Conectando",
      connectedWorkspace: "Espacio de trabajo conectado",
      guideTitle: "Tu guía del espacio de trabajo",
      guideDescription: "Mantén tu proyecto en marcha, paso a paso.",
      guideParagraphs: [
        { strong: "Resumen de proyecto", text: " guarda cada respuesta que has guardado. Elige un tema para revisarlo o vuelve a la incorporación para hacer cambios." },
        { strong: "Recorrido del proyecto", text: " muestra tu envío y los requisitos verificados. Las etapas de entrega se activan después de la activación y siguen tu alcance acordado." },
        { strong: "Acuerdo y facturación", text: " muestra el alcance, las tarifas, el acuerdo y la verificación del anticipo registrados por la agencia." },
        { strong: "", text: "Usa “Hablar con nosotros” en tu resumen para marcar cualquier cosa con la que necesites ayuda. Tus marcas aparecen en el centro de acciones del panel." },
      ],
      exploreMyBrief: "Explorar mi resumen",
      profileTitle: "Tu perfil",
      profilePreviewDesc: "Tu espacio de trabajo de vista previa guardado",
      profileDesc: "Tu espacio de trabajo de cliente",
      nameLabel: "Nombre",
      notProvided: "Aún no proporcionado",
      businessLabel: "Negocio",
      viewContactDetails: "Ver datos de contacto",
      loadingBusinessName: "Tu espacio de trabajo de proyecto",
    },
    overview: {
      topicSections: [
        { label: "Negocio", color: "var(--commerce-deep)" },
        { label: "Objetivos", color: "#439574" },
        { label: "Requisitos", color: "var(--commerce-mint)" },
        { label: "Confirmación", color: "#b4ae97" },
      ],
      eyebrow: "Un poco de claridad. Mucha posibilidad.",
      welcomeBack: "Bienvenido de nuevo",
      projectAtAGlance: "Tu proyecto, de un vistazo. Todo lo que necesitas para avanzar.",
      viewProjectBrief: "Ver el resumen de proyecto",
      preparingPdf: "Preparando PDF…",
      exportPdf: "Exportar informe PDF",
      pdfError: "No se pudo crear el PDF. Intenta exportarlo de nuevo.",
      pdfDownloaded: "Tu PDF está listo. Revisa las descargas de tu navegador.",
      pdfPreparing: "Añadiendo tus respuestas, gráficos y novedades del proyecto.",
      pdfIdle: "Respuestas, requisitos y progreso de entrega.",
      yourProjectBrief: "Tu resumen de proyecto",
      phasesComplete: "Fases completadas",
      submittedForReview: "Enviado para revisión",
      continueWhereLeftOff: "Continúa donde lo dejaste",
      storyStartsHere: "Tu historia empieza aquí",
      projectReadiness: "Preparación del proyecto",
      prerequisitesVerified: "Requisitos verificados",
      prerequisitesBefore: "Requisitos antes de la activación",
      projectDelivery: "Entrega del proyecto",
      awaitingProjectUpdate: "Esperando actualización del proyecto",
      latestProgress: "Último progreso de tu agencia",
      deliveryProgressHere: "El progreso de entrega de tu agencia aparece aquí",
      openQuestions: "Preguntas abiertas",
      workThroughThese: "Vamos a resolverlas",
      noFollowups: "Sin seguimientos marcados",
      detailsToRevisit: "Detalles que revisar juntos",
      clearerPicture: "Una imagen más clara de tu proyecto",
      briefBreakdown: "La finalización de tu resumen, desglosada por tema.",
      questionsComplete: "de preguntas completadas",
      completionByCategory: "Finalización de preguntas por categoría",
      insideYourBrief: "Dentro de tu resumen",
      viewAll: "Ver todo",
      detailsOrganized: "Tus datos, organizados. Abre un tema para verlo más de cerca.",
      answersRecorded: "respuestas registradas",
      readyForInput: "Listo para tu aportación",
      complete: "Completado",
      yourNextStep: "Tu siguiente paso",
      reviewProjectBrief: "Revisar el resumen de proyecto",
      completeProjectBrief: "Completar el resumen de proyecto",
      viewNextSteps: "Ver los siguientes pasos",
      beforeWeBegin: "Antes de empezar",
      viewAllPrereqsLabel: "Ver todos los requisitos de activación",
      verified: "Verificado",
      inProgress: "En curso",
      pending: "Pendiente",
      workspaceReadyForYou: "Tu espacio de trabajo está listo para ti",
      startBriefToSee: "Empieza tu resumen para ver tus datos guardados y tu progreso aquí.",
      viewJourney: "Ver recorrido",
      nextStepFallbacks: {
        oneSmallPhase: "Una fase pequeña cada vez.",
        readyNextChapter: "Listo para tu próximo capítulo.",
        getReady: "Vamos a preparar tu proyecto.",
        answerUpToFive: "Responde hasta cinco preguntas y vuelve aquí. Puedes pausar entre fases.",
        briefVerified: "Tu resumen y tus requisitos están verificados. Tu agencia puede organizar los siguientes pasos acordados.",
        confirmRemaining: "Tu agencia confirmará los requisitos restantes.",
      },
    },
    journey: {
      title: "Un paso más cerca, cada día.",
      description: "Una vista clara de la preparación de tu proyecto y del recorrido de entrega que viene.",
      currentCheckpoint: "Punto de control actual",
      yourProject: "Tu proyecto",
      targetDate: "Fecha objetivo: ",
      deliveryComplete: "entrega completada",
      preparationStagesComplete: "etapas de preparación completadas",
      fallbackStages: [
        { title: "Tu resumen de proyecto", description: "Comparte tu negocio, objetivos, contenido y requisitos. Tus respuestas ayudan a dar forma a la conversación del proyecto." },
        { title: "Acuerdo y activación", description: "Tu agencia verifica los datos de contacto, el acuerdo firmado, el anticipo del 40% y las dependencias del proyecto antes de la activación." },
        { title: "Investigación y dirección", description: "La investigación de negocio, mercado y competencia establece la dirección. El calendario y los entregables siguen tu alcance acordado." },
        { title: "Diseño y comentarios", description: "Explora el trabajo de diseño acordado, revisa los borradores y comparte comentarios. El número de variantes y revisiones sigue tu acuerdo." },
        { title: "Construir y conectar", description: "El sitio web, el contenido, los flujos de trabajo y las conexiones compatibles acordados toman forma. Los requisitos seleccionados se confirman en el alcance del proyecto." },
        { title: "Revisión y entrega", description: "Revisa los entregables acordados y prepárate para la entrega. Los requisitos de lanzamiento y el soporte continuo dependen de tu proyecto." },
      ],
      statusUpcoming: "Próximo",
      statusComplete: "Completado",
      statusInProgress: "En curso",
      statusVerified: "Verificado",
      statusNeedsVerification: "Necesita verificación",
      statusUpNext: "Siguiente",
      stageProgress: "Progreso de la etapa",
      reviewBrief: "Revisar resumen",
      continueBrief: "Continuar resumen",
      viewAllPending: "Ver todos los elementos pendientes de verificación",
      noDeliveryUpdate: "No se ha registrado ninguna actualización de entrega para esta etapa. Tu agencia confirmará el trabajo y el calendario aplicables tras la activación.",
      workspaceActivity: "Actividad del espacio de trabajo",
      activityEmpty: "Tu progreso guardado y las actualizaciones de envío aparecerán aquí cuando empieces tu resumen.",
      activityFootNote: "Estos son tus últimos registros guardados. Las fechas de entrega y la finalización las confirma tu agencia por separado.",
    },
    resources: {
      title: "Las piezas de tu marca.",
      description: "Mira la disponibilidad de contenido y los enlaces de referencia que compartiste en tu resumen de proyecto.",
      updateResources: "Actualizar recursos",
      brandContentReadiness: "Disponibilidad de marca y contenido",
      assetStatuses: "Los estados de recursos que registraste durante la incorporación.",
      gatherStartingPoints: "Vamos a reunir tus puntos de partida.",
      gatherStartingPointsDesc: "Añade tu logotipo, fotos, textos y disponibilidad de contenido a tu resumen. Los archivos finales pueden compartirse de forma segura con tu agencia.",
      contentContact: "Contacto de contenido",
      yourSharedLinks: "Tus enlaces compartidos",
      sharedLinksDesc: "Enlaces de sitio web, carpeta y referencia de tus respuestas.",
      opensNewTab: "Se abre en una pestaña nueva",
      noLinksYet: "Aún no hay enlaces de referencia compartidos. Puedes añadirlos al actualizar tu resumen.",
      secureShare: "Comparte archivos y accesos usando tu método seguro acordado. Las contraseñas de cuentas no deben estar en tu resumen de proyecto.",
      projectFiles: "Archivos del proyecto",
      projectFilesDesc: "Sube logotipos, textos, fotos o documentos de referencia. Cada archivo se guarda con tu espacio de trabajo y es visible para tu agencia.",
      file: "archivo",
      files: "archivos",
      previewNote: "El uso compartido de documentos está disponible en un espacio de trabajo de cliente autenticado.",
      noteForAgency: "Nota para tu agencia",
      notePlaceholder: "Contexto opcional para esta subida",
      category: "Categoría",
      chooseFilesLabel: "Elige archivos para subir",
      uploading: "Subiendo…",
      chooseFiles: "Elegir archivos",
      fileTypesHint: "PDF, imagen, Office, texto, CSV, JSON o ZIP · hasta ",
      uploadError: "No se pudo guardar la subida. Inténtalo de nuevo.",
      removeConfirm: "¿Eliminar este archivo de tu espacio de trabajo?",
      removeError: "No se pudo eliminar el archivo. Inténtalo de nuevo.",
      needsUpdate: "Necesita actualización",
      noFilesYet: "Aún no se han subido archivos.",
    },
    agreement: {
      title: "Alcance claro. Expectativas compartidas.",
      description: "El registro de proyecto confirmado, las tarifas y el estado de verificación de tu agencia.",
      yourEngagement: "Tu proyecto",
      setupFee: "Tarifa de configuración",
      asRecorded: "Según lo registrado en tu proyecto",
      ongoingFee: "Tarifa continua",
      notRecorded: "No registrado",
      perMonth: "Al mes, según el alcance acordado",
      ongoingFollows: "El trabajo continuo sigue tu acuerdo",
      whatsIncluded: "Qué incluye",
      exclusionsThirdParty: "Exclusiones y costes de terceros",
      seeExclusions: "Consulta tu acuerdo para ver las exclusiones.",
      verificationBilling: "Verificación y facturación",
      signedAgreement: "Acuerdo firmado",
      fortyPercentAdvance: "Anticipo del 40%",
      billingName: "Nombre de facturación",
      billingEmail: "Email de facturación",
      paymentStatusNote: "El estado del pago refleja la verificación de la agencia. Este espacio de trabajo no cobra pagos.",
      agreementComesNext: "Tu acuerdo viene a continuación.",
      agreementComesNextDesc: "Cuando tu agencia registre tu proyecto, verás aquí el alcance aprobado, las tarifas, los datos de facturación y el estado de verificación.",
      agreementAwaiting: "Acuerdo pendiente de confirmación",
      advanceAwaiting: "Anticipo del 40% pendiente de verificación",
    },
    brief: {
      title: "Tu resumen de proyecto",
      description: "Revisa tu progreso de incorporación, comprueba las respuestas que has compartido y completa lo que falte.",
      progressLabel: "El progreso de tu resumen",
      everyDetailCovered: "Cada detalle está cubierto",
      briefTakingShape: "Tu resumen está tomando forma",
      questionsAnswered: "preguntas respondidas",
      phasesComplete: "fases completadas",
      submittedToAgency: "Enviado a tu agencia",
      draftNotSubmitted: "Borrador · No enviado",
      reviewAndSend: "Revisar y enviar",
      updateReopens: "Puedes actualizar cualquier respuesta. Los cambios reabren tu resumen para revisión y envío.",
      completeSubmit: "Tus respuestas están completas. Revisa y envía tu resumen para terminar la incorporación.",
      completionNote: "La finalización cuenta las preguntas respondidas y las no aplicables. Los detalles guardados para más tarde siguen abiertos; puedes hablarlos con tu agencia.",
      percentComplete: "de preguntas completadas",
      statusComplete: "Completado",
      percentCompleteSuffix: "completado",
      filterLabel: "Filtrar preguntas del resumen",
      filters: [
        { label: "Todas las preguntas" },
        { label: "Por completar" },
        { label: "Seguimientos" },
        { label: "Respondidas" },
      ],
      searchLabel: "Buscar preguntas y respuestas",
      searchPlaceholder: "Buscar preguntas o respuestas",
      onboardingPhases: "Fases de incorporación",
      shown: "mostradas",
      chooseAPhase: "Elige una fase",
      noMatchingPhases: "No hay fases coincidentes",
      phase: "FASE",
      of: "DE",
      complete: "Completado",
      answered: "respondidas",
      notAnswered: "no respondidas",
      needAttention: "necesitan atención",
      forLater: "para más tarde",
      pickUpWhereLeft: "Retoma donde lo dejaste.",
      readyToRevisit: "¿Listo para revisar los detalles guardados para más tarde?",
      continuePhase: "Continuar fase",
      startPhase: "Empezar fase",
      showingPrefix: "Mostrando ",
      showingOfSuffix: " preguntas en esta fase",
      question: "Pregunta",
      followUpRequested: "Seguimiento solicitado",
      notApplicable: "No aplicable",
      noAnswerYet: "Aún no hay respuesta.",
      yourSavedAnswer: "Tu respuesta guardada",
      checkAnswerDefault: "Comprueba esta respuesta antes de terminar la fase.",
      editAnswer: "Editar respuesta",
      checkAnswer: "Comprobar respuesta",
      answerNow: "Responder ahora",
      updateNote: "Abre una pregunta para actualizarla. Tu respuesta guardada aparecerá precargada y podrás volver a esta fase tras guardar.",
      noMatchingQuestions: "No hay preguntas coincidentes",
      noUnansweredQuestions: "No hay preguntas sin responder",
      noDetailsForLater: "No hay detalles guardados para más tarde",
      noQuestionsToShow: "No hay preguntas que mostrar",
      tryAnotherSearch: "Prueba otra búsqueda o borra los filtros para ver tu resumen.",
      chooseAnotherFilter: "Elige otro filtro para revisar el resto de tu resumen.",
      showAllQuestions: "Mostrar todas las preguntas",
      noPhasesMatch: "Ninguna fase coincide con este filtro.",
      forLaterSuffix: "para más tarde",
      statusLabels: {
        answered: "Respondida",
        pending: "No respondida",
        later: "Para más tarde",
        attention: "Necesita atención",
        review: "Revisar",
      },
    },
    phases: {
      savedSuffix: " guardado. Revisa tu progreso abajo.",
      yourOnboarding: "TU INCORPORACIÓN",
      completeTitle: "Tu resumen de proyecto está completo.",
      incompleteTitle: "Vamos a completar tu resumen de proyecto.",
      completeSubmitted: "Tus respuestas se han enviado. Puedes revisar o actualizar cualquier detalle en tu resumen.",
      completeNotSubmitted: "Cada pregunta tiene respuesta. Revisa tu resumen y envíalo a tu agencia cuando estés listo.",
      incomplete: "Mira lo que has compartido, encuentra lo que falta y termina una fase cada vez.",
      reviewProjectBrief: "Revisar el resumen de proyecto",
      reviewAndSendBrief: "Revisar y enviar el resumen",
      continuePhase: "Continuar fase",
      startPhase: "Empezar fase",
      phasePrefix: "Fase ",
      briefCompletion: "Finalización del resumen",
      answeredSuffix: " respondidas",
      notAnswered: "no respondidas",
      needAttention: "necesitan atención",
      forLater: "para más tarde",
      phasesComplete: "fases completadas",
      laterStaysVisible: "Los detalles marcados para más tarde siguen visibles hasta que los resuelvas.",
      answersSavedAsYouGo: "Tus respuestas se guardan sobre la marcha. Puedes pausar en cualquier momento.",
      viewAllPhases: "Ver todas las fases",
      briefCompletionLabel: "Finalización del resumen de proyecto",
    },
  },

  onboarding: {
    privacyCopy: {
      purpose: "Starter Shifter usa los datos que compartes para entender tu negocio, preparar tu proyecto y entregar los servicios que acuerdes con nosotros.",
      responsibility: "La información de tu proyecto la gestiona Starter Shifter. No vendemos tus datos ni compartimos tu resumen con otros negocios para su propio uso.",
      safeSharing: "La información y los ejemplos de negocio bastan. Deja fuera las contraseñas, los datos de pago y la información privada sobre tus clientes o tu equipo.",
    },
    welcome: {
      storyLabel: "Tu próximo capítulo empieza aquí",
      storyTitleLines: ["Grandes ideas.", "Pequeños pasos."],
      storyFooterLines: ["Tú traes la historia.", "Nosotros te ayudamos a conectar los puntos."],
      greeting: "Bienvenido a Starter Shifter.",
      greetingNamePrefix: "Bienvenido, ",
      heading: "Vamos a conocer tu negocio.",
      descriptionPrefix: "Cuéntanos sobre tu negocio, una pregunta cada vez. Tu ruta actual tiene ",
      descriptionSuffix: " fases cortas, con hasta cinco preguntas cada una. Pueden aparecer seguimientos relevantes según elijas el trabajo que necesitas.",
      promises: [
        "Las estimaciones son bienvenidas. Pide ayuda cuando la necesites.",
        "Continúa con fluidez de una fase a la siguiente",
        "Guarda, tómate un descanso, vuelve cuando quieras",
      ],
      consentBefore: "He leído la ",
      consentLink: "información de privacidad",
      consentAfter: " y acepto que Starter Shifter use mis datos para preparar y entregar mi proyecto.",
      saving: "Guardando…",
      begin: "Empecemos",
      paused: "La incorporación está temporalmente en pausa. Vuelve cuando se reabra.",
      tryPreview: "Probar la vista previa",
      previewOnly: "Solo vista previa. Usa datos de ejemplo.",
      serviceTerms: "Términos del servicio",
    },
    journeyArtwork: {
      scenes: [
        { title: "Tu negocio", subtitle: "Hecho de buenas ideas y personas reales", tag: "Encantado de conocerte" },
        { title: "Tu dirección", subtitle: "Un poco de claridad. Mucha posibilidad.", tag: "Piensa en grande" },
        { title: "Tu firma", subtitle: "Los detalles que lo hacen tuyo", tag: "Deja tu marca" },
        { title: "Tu caja de herramientas", subtitle: "Conectando las piezas de tu proyecto", tag: "Pieza a pieza" },
        { title: "Tu próximo capítulo", subtitle: "Un resumen sobre el que construir, juntos", tag: "Todo encaja" },
      ],
      tagline: "Un poco más de ti",
    },
    wizard: {
      sessionEnded: "Tu sesión ha terminado.",
      signInAgain: "Inicia sesión de nuevo",
      reloadOnboarding: "Recargar incorporación",
      previewBanner: "Modo vista previa. Usa datos de negocio de ejemplo. Tu progreso se guarda para tu próxima visita.",
      customizedBanner: "Tu agencia preparó este cuestionario para tu proyecto. Revisa cualquier detalle nuevo solicitado.",
      oneQuestionAtATime: "Una pregunta cada vez",
      saveAndReturn: "Guardar y volver al resumen",
      saveAndExit: "Guardar y salir",
      phaseReview: "Revisión de fase",
      questionOf: "Pregunta ",
      of: " de ",
      reviewYourAnswers: "Revisa tus respuestas",
      answerBeforeFinish: "Puedes responder esto antes de terminar.",
      phaseSavedSuffix: " guardado. Sigamos.",
      beforeNextPhase: "Antes de la siguiente fase",
      fewDetailsForLater: "Algunos detalles para más tarde",
      phaseReady: "Esta fase está lista",
      answeredPrefix: "Has respondido ",
      answeredSuffix: " de ",
      answeredOfQuestions: " preguntas de esta fase. ",
      fillNowOrFlag: "Puedes completar estos detalles ahora, o dejarlos marcados para tu revisión final.",
      changesSavedContinue: "Tus cambios están guardados. Continúa cuando quieras.",
      answerNow: "Responder ahora",
      back: "Atrás",
      continueWithForLaterPrefix: "Continuar con ",
      continueWithForLaterSuffix: " para más tarde",
      continueToNextPhase: "Continuar a la siguiente fase",
      reviewTitle: "Aquí está tu resumen de proyecto. ¿Qué te parece?",
      remainingPrereqs: "Requisitos restantes del proyecto",
      prereqsNote: "Se comprueban contra los registros de la agencia. No se envían invitaciones desde este formulario.",
      reviewHelp: "Comprueba tus respuestas abajo. Puedes editar cualquier tema antes de las confirmaciones finales.",
      previewPrivacyHelp: "Revisa cómo se usan tus respuestas de ejemplo en esta vista previa antes de confirmar.",
      addProjectTopic: "¿Algo más? Añade un tema de proyecto",
      topicsAutoHelp: "Tus respuestas seleccionan los temas relevantes automáticamente. Añade un flujo de trabajo aquí si nos lo saltamos.",
      searchTopicsLabel: "Buscar temas de proyecto",
      searchTopicsPlaceholder: "Buscar temas…",
      selectedByAnswers: "seleccionado por tus respuestas",
      previouslyAnswered: "Temas respondidos anteriormente",
      previouslyAnsweredHelp: "Estas respuestas se guardan fuera de tu ruta actual. Restaura un tema o elimina sus respuestas.",
      restoreTopic: "Restaurar tema",
      removeSavedAnswers: "Eliminar respuestas guardadas",
      routeNotePrefix: " temas específicos del proyecto seleccionados. Tu progreso se adapta a medida que eliges.",
      backToMyReview: "Volver a mi revisión",
      retrySaving: "Reintentar guardado",
      saveAndReturnToBrief: "Guardar y volver al resumen",
      backToPhaseReview: "Volver a la revisión de fase",
      saveAndOpenDashboard: "Guardar y abrir el panel",
      submitOnboarding: "Enviar los datos de incorporación",
      looksGood: "Se ve bien",
      skipForNow: "Saltar por ahora",
      continue: "Continuar",
      pauseAnytime: "Pausa cuando quieras con Guardar y salir.",
      phaseOf: "Fase ",
      phaseOfSuffix: " de ",
      encouragement: {
        checkTogether: "Comprobemos esta respuesta juntos. El detalle de abajo ayudará.",
        briefComingTogether: "Tu resumen está tomando forma. Échale un vistazo antes de las confirmaciones finales.",
        flagForGuidance: "Lo marcaremos para orientación. Puedes seguir.",
        keepOpen: "Está bien. Lo dejaremos como pregunta abierta.",
        gotIt: "¡Entendido! Continúa cuando quieras.",
        startWithYou: "Empecemos contigo. Basta una respuesta corta.",
        multiSelect: "Puedes elegir más de una. Elige lo que encaje con tu proyecto.",
        select: "Elige la opción que te parezca adecuada.",
        optional: "Esta es opcional. Puedes volver más tarde.",
        oneSmallStep: "Un pequeño paso cada vez. Un poco de contexto basta.",
      },
      saveStates: {
        allSaved: "Todos los cambios guardados",
        readyToSave: "Listo para guardar",
        saving: "Guardando…",
        unsaved: "Cambios sin guardar",
        notSaved: "Cambios no guardados — reintenta abajo",
      },
      errors: {
        saveFailed: "No pudimos guardar tus últimos cambios. Mantén esta página abierta e inténtalo de nuevo.",
        draftMissing: "Falta tu sesión de borrador. Recarga esta página para reconectar.",
        unableToSave: "No se pudo guardar.",
        unableToSaveAnswer: "No se pudo guardar esta respuesta.",
        unableToSavePhase: "No se pudo guardar esta fase.",
        unableToSubmit: "No se pudo enviar.",
        unableToSaveAgreement: "No se pudo guardar tu acuerdo. Inténtalo de nuevo.",
        attentionBeforeSubmit: "Algunas respuestas aún necesitan tu atención antes del envío.",
        loadQuestionnaire: "No pudimos cargar tu cuestionario asignado. Recarga para intentarlo de nuevo o contacta con la agencia si el problema continúa.",
      },
      engagementSummary: {
        noneHeading: "Aún no hay ningún proyecto aprobado registrado",
        noneBody: "Tu acuerdo de proyecto, alcance, tarifas y registro de facturación aparecerán aquí cuando la agencia los registre. Aun así puedes enviar un resumen para revisión.",
        noneMeta: "Acuerdo: pendiente de confirmación · Anticipo del 40%: pendiente de verificación",
        approvedSuffix: " · Registro de proyecto aprobado",
        setupPrefix: "Configuración: ",
        recurringPrefix: " · Recurrente: ",
        perMonthSuffix: " / mes",
        scopePrefix: "Alcance: ",
        exclusionsPrefix: "Exclusiones: ",
        seeAgreement: "Ver tu acuerdo",
        thirdPartyPrefix: "Costes de terceros: ",
        agreementPrefix: "Acuerdo: ",
        verified: "Verificado",
        awaitingConfirmation: "Pendiente de confirmación",
        advancePrefix: " · Anticipo del 40%: ",
        awaitingVerification: "Pendiente de verificación",
      },
      reviewSummary: {
        groups: [
          { title: "Negocio y contacto" },
          { title: "Objetivos y proceso actual" },
          { title: "Trabajo seleccionado y requisitos" },
          { title: "Responsabilidades y proyecto" },
          { title: "Notas finales y comentarios de incorporación" },
        ],
        additionalTitle: "Detalles adicionales del proyecto",
        topicsToReview: " temas que revisar",
        edit: "Editar",
        editBrief: "Editar resumen",
        openQuestions: "Preguntas abiertas y seguimientos",
        noFollowups: "No hay marcas de seguimiento registradas. Los detalles opcionales sin responder pueden aportarse más tarde.",
      },
    },
    progress: {
      railLabel: "Progreso de incorporación",
      yourProjectBrief: "Tu resumen de proyecto",
      phasePrefix: "Fase ",
      phaseOfSuffix: " de ",
      answeredPercentSuffix: " respondidas",
      answeredLabel: "Preguntas respondidas",
      answeredValueText: "respondidas, ",
      forLaterValueText: " para más tarde, ",
      pendingValueText: " pendientes de ",
      questionsValueText: " preguntas",
      answered: "respondidas",
      forLater: "para más tarde",
      pending: "pendientes",
      yourPhases: "Tus fases",
      phaseNavLabel: "Fases y preguntas",
      questionsInPhase: "Preguntas de esta fase",
      selectToRevisit: "Selecciona una pregunta para volver a ella.",
      review: "Revisar",
      reviewYourAnswers: "Revisa tus respuestas",
      currentQuestionSuffix: ", pregunta actual",
      legendAnswered: "Respondida",
      legendForLater: "Para más tarde",
      legendPending: "Pendiente",
      railNote: "Tus fases se adaptan a tu proyecto. Puedes volver a cualquier pregunta.",
      currentPhaseLabel: "Fase actual",
    },
    privacyNotice: {
      ariaLabel: "Cómo usamos tu información",
      heading: "Tu información tiene un propósito.",
      howWeCare: "Cómo cuidamos tus datos",
      previewNote: "Esto es una vista previa. Tus respuestas de ejemplo se guardan para que puedas probar el recorrido y volver a él en este navegador. Usa datos de negocio de ejemplo.",
      retentionPrefix: "Cuánto tiempo conservamos tus datos: ",
      contactPrefix: "¿Preguntas sobre tu información? ",
      paused: "La incorporación está temporalmente en pausa. Revisa la información de privacidad actual cuando se reabra.",
      navLabel: "Información de incorporación",
      privacyInformation: "Información de privacidad",
      serviceTerms: "Términos del servicio",
    },
    portal: {
      myWorkspace: "Mi espacio de trabajo",
      signingOut: "Cerrando sesión…",
      signOut: "Cerrar sesión",
      yourProjectWorkspace: "El espacio de trabajo de tu proyecto",
      clientPortal: "Portal de cliente de Starter Shifter",
      signOutError: "No se pudo cerrar sesión. Inténtalo de nuevo.",
      saveProgressError: "No se pudo guardar tu progreso. Inténtalo de nuevo.",
      unableToSaveProgress: "No se pudo guardar tu progreso.",
    },
    questionField: {
      answerNow: "Responder ahora",
      notSureYet: "Aún no estoy seguro",
      notApplicable: "No aplicable",
      provideLater: "Proporcionar más tarde",
      requestHelp: "Pedir ayuda",
      preferNotToAnswer: "Prefiero no responder",
      required: "Obligatorio",
      optional: "Opcional",
      setEachStatus: "Establece el estado de cada elemento",
      chooseOne: "Elige uno",
      chooseUpToPrefix: "Elige hasta ",
      chooseAll: "Elige todos los que apliquen",
      chooseUpToSuffix: ".",
      pickWhatFits: "Elige lo que mejor encaje. Puedes añadir contexto abajo.",
      shortAnswer: "Basta una respuesta corta. Puedes añadir más detalle más tarde.",
      everydayWords: "Las palabras cotidianas son perfectas. Unas pocas frases bastan.",
      shareWhatYouKnow: "Comparte lo que sepas. Puedes pedir orientación abajo.",
      skipIfPrefer: "Saltar esto si prefieres proporcionarlo más tarde.",
      whyWeAsk: "Por qué preguntamos",
      savedChoicePrefix: "Tu elección guardada: ",
      savedChoiceSuffix: ". Estas opciones se eliminaron del formulario actualizado. Tu respuesta se conserva; revisa las opciones disponibles antes de confirmar.",
      confirmAccuracy: "Confirmo estos datos y mi autoridad para compartirlos.",
      confirmPrivacy: "He revisado la información de privacidad de incorporación.",
      yesIConfirm: "Sí, confirmo",
      requiredSuffix: " (obligatorio)",
      optionalSuffix: " (opcional)",
      chooseStatus: "Elegir estado",
      nothingYet: "Nada todavía",
      notSure: "No estoy seguro",
      ready: "Listo",
      needsUpdating: "Necesita actualización",
      needHelp: "Necesito ayuda",
      searchOptionsPrefix: "Buscar opciones para ",
      searchOptionsPlaceholder: "Buscar opciones…",
      noMatchingChoices: "No hay opciones coincidentes. Prueba otra palabra o borra la búsqueda.",
      somethingElse: "Algo más",
      addOwnOption: "Añade tu propia opción o explica",
      countryOrRegion: "País o región",
      searchCountry: "Busca o introduce un país / región",
      timezone: "Zona horaria",
      searchTimezone: "Busca una zona horaria, p. ej. Asia/Kolkata",
      forFirstLaunch: "Para el primer lanzamiento",
      canWaitUntilLater: "Puede esperar hasta más tarde",
      chooseOptionOrDescribe: "Elige una opción o describe abajo",
      startWithUpToThree: "Empieza con hasta tres prioridades",
      ideasForFuture: "Ideas para una fase futura",
      chooseApprox: "Elige un valor aproximado",
      enterExact: "Introduce un valor exacto",
      fewSentences: "Unas pocas frases bastan",
      oneExampleOrLink: "Un ejemplo o enlace a un documento",
      remove: "Eliminar",
      addAnother: "+ Añadir otro",
      quickAnswersLabel: "Respuestas rápidas",
      yourFirstPriority: "Tu primera prioridad",
      chooseMainPriority: "Elige tu prioridad principal",
      notSureSeeOther: "¿No estás seguro? Mira otras formas de responder",
      changeAnswerSuffix: " · Cambiar respuesta",
      addContactNote: "Añade un contacto, responsable o nota de seguimiento",
      addNoteLink: "Añade una nota corta o un enlace (opcional)",
      notePlaceholder: "Un enlace a un documento, aclaración, nombre de un compañero o disponibilidad",
      workspaceMemberPrefix: "Miembro del espacio de trabajo ",
      chooseAccess: "Elige el acceso solicitado",
      viewProject: "Ver proyecto",
      reviewAndComment: "Revisar y comentar",
      supplyInputs: "Aportar datos del proyecto",
      needGuidance: "Necesito orientación",
      removeMember: "Eliminar miembro",
      addAnotherPerson: "+ Añadir otra persona",
      quickChoicesPrefix: "Opciones rápidas para ",
      countries: [
        "Australia", "Bangladés", "Brasil", "Canadá", "China", "Francia", "Alemania",
        "India", "Indonesia", "Irlanda", "Italia", "Japón", "Kenia", "Malasia", "México",
        "Nepal", "Países Bajos", "Nueva Zelanda", "Nigeria", "Pakistán", "Filipinas",
        "Arabia Saudí", "Singapur", "Sudáfrica", "España", "Sri Lanka",
        "Emiratos Árabes Unidos", "Reino Unido", "Estados Unidos",
      ],
    },
    previewPending: [
      "Verifica el email de contacto del proyecto o del espacio de trabajo al crear tu cuenta de cliente.",
      "Acuerda el alcance del proyecto y completa el acuerdo firmado.",
      "Haz que la agencia verifique el anticipo del 40% contra tu factura acordada.",
    ],
  },

  projectBrief: {
    serviceOptions: [
      "Ecommerce y sitios web",
      "Investigación y diseño",
      "Marketing y campañas",
      "Automatización e integraciones",
      "Mantenimiento y rendimiento",
    ],
    headerLine: "Starter Shifter — Resumen de proyecto",
    nameLabel: "Tu nombre",
    emailLabel: "Email",
    companyLabel: "Empresa (opcional)",
    timingLabel: "Calendario (opcional)",
    timingPlaceholder: "Por ejemplo, antes de una fecha de lanzamiento",
    servicesLegend: "¿En qué podríamos ayudarte?",
    servicesDescription: "Selecciona los que encajen, o déjalo abierto.",
    goalsLabel: "¿Qué te gustaría hacer posible?",
    goalsPlaceholder: "Cuéntanos sobre tu negocio, qué necesitas y el resultado que tienes en mente.",
    currentSetupLabel: "¿Qué hay ya en marcha? (opcional)",
    currentSetupDescription: "Un sitio web, una tienda, páginas sociales o herramientas de negocio existentes.",
    currentSetupPlaceholder: "Comparte los sistemas, plataformas o cuentas que ya usas.",
    openEmailDraft: "Abrir borrador de email",
    downloadBrief: "Descargar resumen de proyecto",
    emailDraftReady: "Tu borrador de email está listo para abrir. Revísalo en tu app de correo y envíalo cuando estés listo.",
    downloadReady: "Tu resumen de proyecto está listo en tus descargas. No se ha enviado nada a Starter Shifter.",
    briefFields: {
      name: "Nombre: ",
      email: "Email: ",
      company: "Empresa: ",
      services: "Servicios: ",
      timing: "Calendario: ",
      notSpecified: "No especificado",
      exploreOptions: "Exploremos las opciones",
      projectGoals: "Objetivos del proyecto:",
      alreadyInPlace: "Qué hay ya en marcha:",
      disclaimer: "Este resumen es un punto de partida para la conversación, no un alcance ni un presupuesto acordados.",
    },
    emailSubjectPrefix: "Consulta de proyecto — ",
    downloadFileName: "starter-shifter-resumen-de-proyecto.txt",
  },

  projects: [
    {
      title: "Concepto de tienda",
      category: "Ecommerce",
      description: "Una disposición de tienda ilustrativa con una colección de productos y un camino claro hacia la compra.",
      imageAlt: "Tienda conceptual con una portada verde y bolsos cotidianos ilustrados",
      status: "Vista previa de concepto",
    },
    {
      title: "Concepto de espacio de operaciones",
      category: "Aplicación web",
      description: "Un espacio de trabajo ilustrativo que reúne pedidos, inventario y tareas de envío en una sola vista.",
      imageAlt: "Panel de operaciones conceptual que muestra una tabla de pedidos y paneles de flujo de trabajo",
      status: "Vista previa de concepto",
    },
    {
      title: "Concepto de sitio web creativo",
      category: "Diseño web",
      description: "Un sitio web editorial ilustrativo con tipografía marcada y una colección enfocada de trabajos.",
      imageAlt: "Sitio web creativo conceptual con tipografía grande y obras escultóricas abstractas",
      status: "Vista previa de concepto",
    },
    {
      title: "Concepto de soporte al cliente",
      category: "Flujo de trabajo con IA",
      description: "Una interfaz de soporte ilustrativa para conversaciones, preguntas comunes y traspasos al equipo.",
      imageAlt: "Espacio de soporte conceptual con una lista de conversaciones y un chat de cliente",
      status: "Vista previa de concepto",
    },
  ],

  shared: {
    deliveryStageStatusLabels: {
      upcoming: "Próximo",
      "in-progress": "En curso",
      complete: "Completado",
      blocked: "Necesita atención",
    },
    defaultDeliveryStages: [
      { title: "Tu resumen de proyecto", description: "Comparte tu negocio, objetivos, contenido y requisitos. Tus respuestas ayudan a dar forma a la conversación del proyecto." },
      { title: "Acuerdo y activación", description: "Tu agencia verifica los datos de contacto, el acuerdo firmado, el anticipo del 40% y las dependencias del proyecto antes de la activación." },
      { title: "Investigación y dirección", description: "La investigación de negocio, mercado y competencia establece la dirección. El calendario y los entregables siguen tu alcance acordado." },
      { title: "Diseño y comentarios", description: "Explora el trabajo de diseño acordado, revisa los borradores y comparte comentarios. El número de variantes y revisiones sigue tu acuerdo." },
      { title: "Construir y conectar", description: "El sitio web, el contenido, los flujos de trabajo y las conexiones compatibles acordados toman forma. Los requisitos seleccionados se confirman en el alcance del proyecto." },
      { title: "Revisión y entrega", description: "Revisa los entregables acordados y prepárate para la entrega. Los requisitos de lanzamiento y el soporte continuo dependen de tu proyecto." },
    ],
    workspaceViewNames: {
      overview: "Resumen",
      brief: "Resumen de proyecto",
      journey: "Recorrido del proyecto",
      resources: "Marca y recursos",
      agreement: "Acuerdo y facturación",
    },
    questionStatusLabels: {
      answered: "Respondida",
      later: "Para más tarde",
      pending: "No respondida",
      attention: "Necesita atención",
      review: "Revisar",
    },
    answerStateLabels: {
      answered: "Responder ahora",
      unknown: "Aún no estoy seguro",
      "not-applicable": "No aplicable",
      deferred: "Proporcionar más tarde",
      help: "Hablar con nosotros",
    },
    prerequisites: {
      briefLabel: "Resumen de proyecto",
      briefSubmitted: "Tu resumen se ha enviado.",
      briefDetail: "Completa y envía los datos de tu proyecto.",
      identityLabel: "Verificación de contacto",
      identityDetail: "Los emails de contacto de tu proyecto y espacio de trabajo.",
      agreementLabel: "Acuerdo firmado",
      agreementDetail: "Confirma el alcance con tu agencia.",
      advanceLabel: "Anticipo del 40%",
      advanceDetail: "Verificación de la agencia contra tu factura acordada.",
      responsiblePrefix: "Responsable: ",
    },
    activity: {
      briefSaved: "Resumen de proyecto guardado",
      briefSubmitted: "Resumen enviado",
      briefSubmittedDetail: "Los datos de tu proyecto están listos para revisión",
      engagementUpdated: "Registro de proyecto actualizado",
      engagementUpdatedDetail: "Alcance y requisitos registrados",
    },
    assetStatusLabels: {
      ready: "Listo",
      "needs-updating": "Necesita actualización",
      "needs-help": "Necesita ayuda",
      "not-available": "No disponible",
      recorded: "Registrado en el resumen",
    },
    workspaceFallback: {
      businessName: "Tu próximo capítulo",
      description: "Un espacio dedicado para tu negocio, tu resumen y todo lo que viene después.",
    },
    notAnswered: "No respondido",
    confirmed: "Confirmado",
    notConfirmed: "No confirmado",
    firstPriorityPrefix: "Primera prioridad: ",
  },
};
