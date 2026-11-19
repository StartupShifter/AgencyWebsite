import type { TranslationDictionary } from "../i18n";

/** Portuguese (Português) localization. */
export const pt: TranslationDictionary = {
  brand: {
    homeAriaLabel: "Início Starter Shifter",
    tagline: "O seu negócio, conectado",
    footerNote: "Da sua primeira loja online aos fluxos de trabalho que a suportam. Construído em torno do seu negócio.",
    footerWorldwide: "Trabalhamos com empresas em todo o mundo.",
  },

  common: {
    skipToContent: "Saltar para o conteúdo",
    backToHome: "Voltar ao início",
    policyAwaitingApproval: "Política a aguardar aprovação",
    prepareProjectBrief: "Preparar um brief de projeto",
    policyNavigationLabel: "Informações sobre políticas",
    privacy: "Privacidade",
    cookies: "Cookies",
    serviceTerms: "Condições de serviço",
    exploreServices: "Explorar os nossos serviços",
    planYourProject: "Planear o seu projeto",
    supportAndCare: "Apoio e assistência",
    viewAllProducts: "Ver todos os produtos",
    getStarted: "Começar",
    resourceNoteDefault: "Starter Shifter · Recursos",
    openNavigation: "Abrir a navegação",
    closeNavigation: "Fechar a navegação",
    loadingPage: "A carregar a página",
    explorePrefix: "Explorar ",
    illustrationSuffix: " ilustração",
    loading: {
      site: "A carregar Starter Shifter",
      signInOptions: "A carregar as opções de início de sessão",
      onboardingInformation: "A carregar as suas informações de integração",
      workspace: "A carregar o seu espaço de trabalho",
      projectBrief: "A carregar o seu brief de projeto",
    },
    opensInNewTab: "abre num novo separador",
  },

  metadata: {
    home: {
      title: "Starter Shifter — O seu negócio, conectado",
      description:
        "E-commerce, direção criativa, automação e operações conectadas. A Starter Shifter ajuda as empresas a construir o seu próximo capítulo online, com um âmbito definido em torno das suas necessidades.",
    },
    about: {
      title: "Sobre nós — Starter Shifter",
      description:
        "Conheça a Starter Shifter, uma agência que ajuda empresas em todo o mundo a ligar os seus sites, a sua presença social e as suas operações através de investigação, design, desenvolvimento e automação.",
    },
    faq: {
      title: "FAQ — Starter Shifter",
      description:
        "Respostas sobre os planos Basic e Pro da Starter Shifter, a integração, as etapas de entrega, os sites, as integrações, o apoio contínuo e como iniciar um projeto.",
    },
    howWeWork: {
      title: "Como trabalhamos — Starter Shifter",
      description:
        "As etapas de entrega que a Starter Shifter utiliza, desde a descoberta e o âmbito ao design, à construção, ao lançamento e ao apoio contínuo, incluindo os requisitos de integração e a primeira entrega de investigação.",
    },
    products: {
      title: "Produtos e modelos — Starter Shifter",
      description:
        "Explore os sites, as aplicações e as experiências conectadas da Starter Shifter. As pré-visualizações de conceito são identificadas à parte do trabalho concluído para clientes.",
    },
    support: {
      title: "Apoio e assistência — Starter Shifter",
      description:
        "Como a Starter Shifter trata a manutenção, o apoio e a melhoria contínua após o lançamento, incluindo os limites de cobertura do Basic e do Pro.",
    },
    privacy: { title: "Informações de privacidade — Starter Shifter" },
    cookies: { title: "Informações sobre cookies — Starter Shifter" },
    terms: { title: "Informações sobre as condições de serviço — Starter Shifter" },
    onboardingPrivacy: { title: "As suas informações de integração — Starter Shifter" },
    login: { title: "Junte-se a nós | Starter Shifter" },
    dashboard: { title: "Área de cliente — Starter Shifter" },
    dashboardPreview: { title: "O seu espaço de trabalho — Starter Shifter" },
    onboarding: { title: "O seu brief de projeto — Starter Shifter" },
    onboardingPreview: { title: "Pré-visualização da integração — Starter Shifter" },
  },

  navigation: {
    sections: [
      {
        label: "Serviços",
        items: [
          { title: "Sites de e-commerce", description: "Lojas online moldadas em torno da forma como vende.", href: "/services/ecommerce" },
          { title: "Social e marketing", description: "SEO, e-mail e presença social, planeados e entregues.", href: "/services/social-campaigns" },
          { title: "Chatbots e automação", description: "As perguntas comuns são respondidas, o resto é encaminhado.", href: "/services/chatbots-automation" },
          { title: "Sistemas de inventário", description: "Uma visão clara e fiável do seu stock.", href: "/services/inventory" },
          { title: "Envios e encomendas", description: "Menos passos manuais entre a encomenda e a expedição.", href: "/services/shipping-orders" },
          { title: "Integrações ERP e CRM", description: "As suas ferramentas de negócio, a trabalhar em conjunto.", href: "/services/erp-crm-integrations" },
          { title: "Manutenção e apoio", description: "Acompanhamento técnico contínuo após o lançamento.", href: "/services/maintenance-support" },
          { title: "Melhoria do desempenho", description: "Encontre e resolva os pontos de estrangulamento.", href: "/services/performance" },
          { title: "Investigação e direção criativa", description: "Análise de mercado e rascunhos de design em Figma.", href: "/services/research-creative-direction" },
          { title: "Apresentações e planeamento", description: "Uma visão partilhada do seu projeto, desde cedo.", href: "/services/project-planning" },
        ],
        footer: {
          text: "Basic por 2 500 $ uma única vez. Pro por 2 500 $ mais 500 $/mês.",
          linkLabel: "Ver preços",
          href: "#pricing",
        },
      },
      {
        label: "Recursos",
        items: [
          { title: "Como trabalhamos", description: "Etapas de entrega, da descoberta ao lançamento.", href: "/how-we-work" },
          { title: "FAQ", description: "Perguntas comuns, com respostas claras.", href: "/faq" },
          { title: "Produtos e modelos", description: "Explore os nossos sites e aplicações.", href: "/products" },
          { title: "Apoio e assistência", description: "Ajuda para projetos após o lançamento.", href: "/support" },
        ],
      },
    ],
    directLinks: [
      { title: "Sobre nós", description: "Quem é a Starter Shifter e como trabalhamos.", href: "/about" },
      { title: "Preços", description: "Compare a configuração Basic com o apoio contínuo Pro.", href: "/#pricing" },
    ],
    cta: "Começar",
    mainNavigationLabel: "Navegação principal",
    mobileNavigationLabel: "Navegação móvel",
  },

  footer: {
    ariaLabel: "Rodapé Starter Shifter",
    socialProfilesLabel: "Perfis sociais",
    policyNote: "Estado das políticas e informações atuais.",
    navigation: [
      {
        key: "company",
        title: "Empresa",
        links: [
          ["Sobre nós", "/about"],
          ["Como trabalhamos", "/how-we-work"],
          ["Produtos e modelos", "/products"],
          ["Planos e preços", "/#pricing"],
        ],
      },
      {
        key: "services",
        title: "Serviços",
        links: [
          ["Aplicações web", "/#services"],
          ["Redes sociais", "/#services"],
          ["Fluxos de trabalho com IA", "/#services"],
          ["Operações conectadas", "/#process"],
          ["Manutenção e crescimento", "/#pricing"],
        ],
      },
      {
        key: "resources",
        title: "Recursos",
        links: [
          ["Início de sessão do cliente", "/login"],
          ["Como trabalhamos", "/how-we-work"],
          ["FAQ", "/faq"],
          ["Brief de projeto", "/project-brief"],
          ["Apoio e assistência", "/support"],
        ],
      },
      {
        key: "information",
        title: "Informações",
        links: [
          ["Privacidade", "/policies/privacy"],
          ["Cookies", "/policies/cookies"],
          ["Condições de serviço", "/policies/terms"],
        ],
      },
    ],
  },

  landing: {
    hero: {
      eyebrow: "A sua agência de e-commerce e crescimento digital",
      titleLines: ["O seu próximo capítulo", "começa com uma loja melhor."],
      description:
        "Da sua primeira loja online aos sistemas por trás dela. Reunimos design, e-commerce e operações conectadas, construídos em torno do seu negócio.",
      primaryCta: "Vamos construir a sua loja",
      secondaryCta: "Explorar os nossos serviços",
      note: "O seu negócio. O seu âmbito. Onde quer que esteja.",
    },
    services: {
      kicker: "O que fazemos",
      titleLines: ["Bom por fora.", "Conectado por dentro."],
      intro:
        "A sua presença online. A sua voz social. Os fluxos de trabalho por trás. Três serviços conectados, moldados em torno do seu negócio.",
      cards: [
        { title: "Aplicação web", text: "Sites e aplicações web, com design e desenvolvimento moldados em torno de como o seu negócio funciona." },
        { title: "Redes sociais e marketing", text: "Gestão de SEO, marketing por e-mail e redes sociais no WhatsApp, LinkedIn, Pinterest e mais." },
        { title: "Fluxo de trabalho com IA", text: "Ferramentas conectadas, automação de tarefas e fluxos de chat com clientes que envolvem a sua equipa quando necessário." },
      ],
      illustrationLabels: {
        web: "Explorar a ilustração da aplicação web",
        social: "Explorar a ilustração das redes sociais",
        ai: "Explorar a ilustração do fluxo de trabalho com IA",
      },
    },
    projects: {
      kicker: "Produtos e modelos",
      titleLines: ["Um olhar mais atento", "sobre o que construímos."],
      intro:
        "Sites, aplicações e experiências conectadas. Explore a coleção, um ecrã de cada vez.",
      cta: "Ver todos os produtos",
      showcaseLabel: "Mostra de projetos",
    },
    process: {
      kicker: "Como o colocamos online",
      titleLines: ["De compreender o seu negócio", "a ligá-lo online."],
      intro:
        "Cinco etapas de uma presença digital conectada. Acordamos quais os serviços de que o seu projeto precisa e depois construímos em torno desse âmbito.",
      linkLabel: "Ler o guia de entrega completo",
      steps: [
        {
          title: ["Investigação e", "direção"],
          description:
            "Conhecemos o seu negócio, estudamos o seu mercado e analisamos a concorrência. Esses conhecimentos moldam o plano e uma direção de design inicial para a sua análise.",
          details: ["Investigação do negócio", "Análise de mercado", "Perspetivas sobre a concorrência"],
          note: "A profundidade da investigação e os entregáveis de design são acordados para o seu projeto.",
          phase: "Compreender",
        },
        {
          title: ["O seu negócio,", "construído online"],
          description:
            "Concebemos e construímos o seu site ou aplicação web no Shopify ou no WordPress, com WooCommerce quando precisa de uma loja. A plataforma e as funcionalidades seguem a forma como o seu negócio funciona.",
          details: ["Shopify ou WordPress", "Design e desenvolvimento", "Lançamento e entrega"],
          note: "Fornece o conteúdo do negócio, os detalhes dos produtos, o acesso às contas e as aprovações.",
          phase: "Construir",
        },
        {
          title: ["Uma presença", "social"],
          description:
            "Configuramos o seu marketing digital: gestão de SEO, marketing por e-mail e redes sociais no WhatsApp, LinkedIn, Pinterest e nos outros canais de que o seu negócio precisa. O objetivo é torná-lo mais fácil de encontrar e compreender.",
          details: ["Gestão de SEO", "Marketing por e-mail", "WhatsApp, LinkedIn e Pinterest"],
          note: "O Basic inclui a configuração completa de marketing — SEO, e-mail e redes sociais — como trabalho único. O Pro acrescenta a geração de leads e o trabalho de crescimento, sem volume de leads garantido.",
          phase: "Estabelecer",
        },
        {
          title: ["IA que o ajuda", "a responder"],
          description:
            "Configuramos chatbots para as perguntas comuns dos clientes e fluxos de apoio, ligados aos seus canais sociais quando suportado. As conversas que precisam da sua equipa são transferidas para uma pessoa.",
          details: ["Chatbots de clientes", "Canais sociais suportados", "Transferência para uma pessoa"],
          note: "O acesso aos canais, as FAQ aprovadas e os limites de utilização do software moldam a configuração.",
          phase: "Automatizar",
        },
        {
          title: ["Conectado.", "Acompanhado."],
          description:
            "Mantemos e melhoramos os sistemas acordados e ligamos as ferramentas de negócio suportadas: ERP para as operações e CRM para as relações com clientes. Os fluxos de envio e faturação podem fazer parte dessas integrações.",
          details: ["Manutenção e desempenho", "Ligações ERP e CRM", "Envios e faturação"],
          note: "As integrações dependem das capacidades de terceiros. O acompanhamento contínuo é faturado mensalmente; os custos de terceiros são à parte.",
          phase: "Ligar e manter",
        },
      ],
    },
    about: {
      kicker: "Um pouco sobre nós",
      titleLines: ["O seu negócio online.", "Tudo a funcionar em conjunto."],
      intro: "Somos a Starter Shifter. O seu site, a sua presença social e os seus fluxos de trabalho, construídos para funcionar em conjunto.",
      benefits: [
        { title: "Clareza antes de construir", description: "Investigação que dá direção ao seu próximo passo." },
        { title: "As suas ferramentas, conectadas", description: "Ligações suportadas. Menos passos manuais." },
        { title: "O seu negócio, online", description: "Um site ou loja moldado em torno de si." },
        { title: "Uma presença social consistente", description: "A sua marca, levada para páginas e modelos." },
        { title: "Apoio com um toque humano", description: "IA para a rotina. A sua equipa quando é importante." },
        { title: "Ver o que precisa de atenção", description: "Encontre os pontos de estrangulamento. Concentre-se num melhor desempenho." },
      ],
      ctaTitleLines: ["Vamos tornar a sua", "próxima etapa digital."],
      ctaLabel: "Falar sobre o seu projeto",
    },
    pricing: {
      label: "Os nossos planos",
      title: "Escolha o apoio de que precisa.",
      recommendedBadge: "Recomendado",
      plans: [
        {
          name: "Plano Basic",
          description: "A construção completa e a configuração de marketing digital, entregues uma única vez.",
          price: "2 500 $",
          payment: "Pagamento único",
          billing: "A sua aplicação e o seu marketing, construídos e entregues.",
          includes: "O que está incluído",
          features: [
            "Investigação do negócio, mercado e concorrência",
            "Design em Figma e direção criativa",
            "Desenvolvimento do site ou da aplicação de e-commerce",
            "Gestão de SEO",
            "Marketing por e-mail",
            "Marketing nas redes sociais — WhatsApp, LinkedIn, Pinterest e mais",
            "Configuração de chatbot com IA e automação do apoio ao cliente",
            "Configuração dos fluxos de inventário, envio e faturação",
            "Integrações ERP e CRM suportadas",
            "Lançamento e entrega",
          ],
          boundary:
            "Construção e configuração de marketing únicas. Não prometemos geração de leads nem manutenção contínua. Paga o alojamento, os domínios, a despesa publicitária e as taxas de pagamento.",
          action: "Obter o plano Basic",
        },
        {
          name: "Plano Pro",
          description: "Tudo o que o Basic inclui, mais uma equipa para o manter e fazer crescer.",
          price: "2 500 $",
          payment: "Configuração única",
          monthly: "500 $",
          monthlyPeriod: "/ mês",
          billing: "para a manutenção e a geração de leads",
          includes: "Tudo o que o Basic inclui, mais",
          features: [
            "Manutenção e apoio técnico contínuos",
            "Melhoria e monitorização do desempenho",
            "Geração de leads e gestão de campanhas",
            "Manter o SEO e o marketing atualizados",
            "Estratégia e planeamento de crescimento",
            "Tratamento de pedidos e contactos de clientes",
            "Gestão de chatbots e automação",
            "Manutenção contínua de fluxos e integrações",
          ],
          boundary:
            "Gerimos ativamente a geração de leads e ajudamos o seu negócio a crescer. Os volumes de leads não são garantidos — se uma abordagem não resultar, reestruturamo-la e testamos outras. A despesa publicitária é à parte.",
          action: "Obter o plano Pro",
        },
      ],
      terms:
        "Os entregáveis, as quantidades, as ferramentas suportadas e a cobertura mensal são acordados antes do início do trabalho. Fornece o conteúdo do negócio, o acesso às contas e as aprovações. O alojamento, os domínios, o software, as licenças, as taxas de utilização, a despesa publicitária e as taxas de pagamento ou envio são pagos por si e são distintos dos honorários da agência. Os serviços adicionais fora dos três grupos são cotados à parte.",
      footerLink: "Ver o que o apoio contínuo cobre",
    },
    faq: {
      kicker: "Um pouco mais de clareza",
      titleLines: ["Boas perguntas.", "Respostas claras."],
      intro: "Cada negócio começa num ponto diferente. Eis o que saber antes de começarmos juntos.",
      linkLabel: "Ver todas as FAQ",
      questions: [
        {
          question: "O que está incluído, exatamente?",
          answer:
            "O Basic cobre a construção completa e a configuração de marketing digital como trabalho único: o seu site ou aplicação de e-commerce, a gestão de SEO, o marketing por e-mail e o marketing nas redes sociais no WhatsApp, LinkedIn, Pinterest e noutros canais conforme as suas necessidades. O Pro acrescenta tudo o que o Basic inclui, mais 500 $ por mês para a manutenção contínua, o desempenho e a geração de leads. Os serviços fora destas três áreas são cotados à parte.",
        },
        {
          question: "Qual é a diferença entre o Basic e o Pro?",
          answer:
            "O Basic custa 2 500 $ uma única vez e entrega a construção completa da aplicação e a configuração de marketing, seguida da entrega. O Pro custa 2 500 $ pela mesma configuração, mais 500 $ por mês para a manutenção contínua, a melhoria do desempenho e a geração de leads. O Basic não inclui a geração de leads nem a manutenção contínua. Os volumes de leads não são garantidos em nenhum dos planos.",
        },
        {
          question: "Há taxas extra ou ocultas?",
          answer:
            "O alojamento, os domínios, a despesa publicitária, as taxas de pagamento e outras despesas de terceiros são pagos por si, não incluídos nos honorários da agência. Se precisar de serviços além das três áreas que cobrimos, ou de trabalho fora do âmbito acordado, isso é cotado à parte.",
        },
        {
          question: "O que precisa de nós para começar?",
          answer:
            "Um contrato assinado, um adiantamento de 40% e os detalhes da sua empresa e do seu projeto. Depois conclui a integração e fornece quaisquer informações ou documentos adicionais através do seu painel — incluindo catálogos e imagens de produtos para podermos criar maquetes precisas.",
        },
        {
          question: "Quanto tempo demorará o nosso projeto?",
          answer:
            "A primeira entrega de investigação e de um rascunho de design em Figma tem como objetivo um máximo de 3 a 4 dias após a conclusão da integração. Depois disso, agendamos duas chamadas Google Meet por semana para partilhar o progresso e as atualizações até a sua aplicação estar construída e entregue.",
        },
        {
          question: "Podem ligar as ferramentas que já usamos?",
          answer:
            "Oferecemos integrações entre lojas, inventário, envios e sistemas de negócio, como ferramentas ERP e CRM. Analisamos os seus sistemas exatos, o acesso disponível e as limitações da plataforma antes de confirmar a compatibilidade e o trabalho envolvido.",
        },
        {
          question: "Podem ajudar após o lançamento?",
          answer:
            "Sim. O Pro inclui 500 $ por mês para a manutenção e o apoio contínuos: melhoramos o desempenho, mantemos o seu SEO e o seu marketing atualizados e trabalhamos para melhores vendas. O Basic é único, mas cada cliente de pagamento único continua apoiado durante todo o primeiro mês após a integração — tratamos das alterações pedidas e das correções de erros. Após esse mês, se não continuar com o Pro, a ajuda adicional é cotada com base no problema e nos serviços de que precisa.",
        },
        {
          question: "Quem é o proprietário do site e das contas após a entrega?",
          answer:
            "Você. Após a entrega, gere o site, as suas contas e o seu conteúdo. Não o obrigamos a continuar com os nossos serviços, a menos que queira apoio contínuo.",
        },
        {
          question: "Garantem leads ou vendas?",
          answer:
            "Não podemos prometer um número específico, porque os resultados dependem sobretudo do mercado. O que os clientes Pro recebem é uma geração de leads ativa e contínua: trabalhamos para trazer leads e vendas e, se uma abordagem não resultar, reestruturamo-la e testamos outras para encontrar o que se adequa ao seu negócio.",
        },
      ],
    },
    contact: {
      intro: "O seu próximo capítulo",
      titleLines: ["Vamos fazer a sua", "próxima etapa."],
      description:
        "Uma loja online melhor, uma presença social mais forte ou fluxos de trabalho conectados. Comece pelo que o seu negócio precisa.",
      cta: "Planear o seu projeto",
      dialogTitle: "Diga-nos o que tem em mente.",
      dialogDescriptionWithEmail:
        "Crie um brief de projeto curto e abra-o na sua aplicação de e-mail para nos enviar.",
      dialogDescriptionWithoutEmail:
        "Coloque as suas ideias num brief curto que pode transferir e partilhar. Este formulário guarda um ficheiro no seu dispositivo; não envia um pedido.",
      secondaryLink: "Explorar os nossos serviços",
    },
  },

  pages: {
    about: {
      eyebrow: "Sobre a Starter Shifter",
      note: "Trabalhamos com empresas em todo o mundo",
      titleLines: ["O seu negócio.", "O seu próximo capítulo"],
      titleMark: "online.",
      lede:
        "Somos a Starter Shifter, uma agência que ajuda as empresas a colocar os seus produtos e operações online. Ligamos o site que os seus clientes veem às ferramentas e aos fluxos de trabalho por trás dele.",
      primaryCta: "Fale-nos do seu negócio",
      secondaryCta: "Explorar os nossos planos",
      facts: [
        { label: "Foco", value: "Web, social e fluxos de trabalho com IA" },
        { label: "Alcance", value: "Empresas em todo o mundo" },
        { label: "Formas de trabalhar", value: "Configuração Basic ou apoio Pro" },
      ],
      statementEyebrow: "A versão curta",
      statementTitle:
        "Ligamos o site que os seus clientes veem aos fluxos de trabalho em que a sua equipa confia.",
      statementParagraphs: [
        "Trabalhamos com empresas em todo o mundo, em vários setores. Quer esteja a estabelecer uma presença online ou a melhorar uma configuração existente, o ponto de partida é o seu negócio e aquilo de que precisa.",
        "A nossa abordagem reúne investigação, design, desenvolvimento e integrações suportadas num único plano acordado, para que cada parte tenha um propósito claro.",
      ],
      workLabel: "O que fazemos",
      workTitleLines: ["Três áreas.", "Um plano conectado."],
      workAside:
        "Três áreas de trabalho, moldadas em torno da forma como o seu negócio vende, comunica e opera.",
      workLink: "Explorar os nossos serviços",
      services: [
        {
          title: "Aplicações web",
          description:
            "Sites e lojas de e-commerce moldados em torno dos seus produtos e clientes. Reunimos investigação, direção criativa e desenvolvimento no Shopify ou no WordPress com WooCommerce, com a plataforma e as funcionalidades acordadas para o seu projeto.",
          tags: ["Shopify", "WordPress + WooCommerce", "Design e construção"],
        },
        {
          title: "Redes sociais e marketing digital",
          description:
            "Gestão de SEO, marketing por e-mail e marketing nas redes sociais no WhatsApp, LinkedIn, Pinterest e noutros canais conforme as suas necessidades. Nos projetos Pro, acordamos também as campanhas contínuas e a geração de leads de que o seu negócio precisa.",
          tags: ["SEO", "Marketing por e-mail", "WhatsApp, LinkedIn e Pinterest"],
        },
        {
          title: "Fluxos de trabalho com IA",
          description:
            "Chatbots e automações suportadas que ajudam a responder a perguntas comuns, a encaminhar pedidos e a reduzir o trabalho repetitivo. Podemos ligar o inventário, os envios, a faturação e as ferramentas de negócio acordadas quando as plataformas o suportam.",
          tags: ["Chatbots", "Apoio ao cliente", "Integrações suportadas"],
        },
      ],
      processLabel: "Como trabalhamos",
      processTitleLines: ["Primeiro a investigação.", "Um caminho claro."],
      processIntro:
        "O seu conhecimento do negócio e a nossa investigação orientam o trabalho. As decisões partilhadas mantêm o alinhamento do design, da construção e da entrega.",
      gateLabel: "Antes do início do trabalho",
      gateItems: ["Contrato assinado", "Adiantamento de 40%", "Detalhes da empresa e do projeto"],
      steps: [
        {
          title: "Compreender o seu negócio",
          description:
            "Discutimos os seus objetivos, produtos, clientes e sistemas existentes e depois acordamos os entregáveis, as responsabilidades, os prazos e os custos.",
        },
        {
          title: "Encontrar uma direção partilhada",
          description:
            "A investigação da empresa, do mercado e da concorrência alimenta um rascunho de design em Figma. Analisa a direção e partilha o seu feedback antes de avançarmos para a construção e os fluxos conectados acordados.",
        },
        {
          title: "Construir, lançar e planear o que se segue",
          description:
            "Implementamos e testamos o site e os fluxos selecionados, com o seu conteúdo, o acesso às contas e as aprovações. A entrega e qualquer trabalho contínuo de manutenção ou crescimento seguem a cobertura acordada para o seu plano.",
        },
      ],
      scopeLabel: "Trabalhar em conjunto",
      scopeTitleLines: ["Âmbito claro.", "Expectativas partilhadas."],
      scopeIntro:
        "Antes do início do trabalho, definimos os serviços selecionados, o que fornece e o que fica fora dos honorários da agência.",
      scope: [
        {
          label: "O que recebe",
          description:
            "O Basic cobre a construção completa da aplicação mais o marketing digital — gestão de SEO, marketing por e-mail e marketing nas redes sociais — como trabalho único. O Pro acrescenta a manutenção contínua, a melhoria do desempenho e a geração de leads.",
        },
        {
          label: "O que fornece",
          description:
            "O conteúdo acordado, as informações do negócio, os catálogos e as imagens de produtos, o acesso às contas e as aprovações. Os prazos dependem destes elementos e das aprovações das plataformas de terceiros.",
        },
        {
          label: "Mantido à parte",
          description:
            "As subscrições de plataformas, o alojamento, os domínios, as aplicações pagas, as taxas de utilização, a despesa publicitária e as taxas de pagamento são pagos por si, à parte dos honorários da agência.",
        },
      ],
      scopeCta: "Comparar o Basic e o Pro",
      scopeFooter:
        "Os entregáveis, as quantidades, as ferramentas suportadas, as revisões e a cobertura de apoio são acordados antes do início do trabalho.",
    },

    faq: {
      eyebrow: "Recursos / FAQ",
      note: "Os detalhes, respondidos de forma clara",
      titleLines: ["Boas perguntas.", "Respostas claras."],
      titleMark: "Respostas claras.",
      description:
        "Os detalhes práticos sobre o âmbito, os preços, os prazos, as integrações e o apoio — escritos como os explicaríamos numa primeira conversa.",
      facts: [
        { label: "Planos", value: "Basic e Pro" },
        { label: "Integração", value: "Contrato, adiantamento e detalhes" },
        { label: "Cobertura", value: "Acordada por projeto" },
      ],
      sectionIndex: "01",
      sectionLabel: "Perguntas comuns",
      sectionTitleLines: ["Respostas diretas,", "sem letras pequenas."],
      sectionIntro:
        "Se a sua pergunta não estiver aqui, inicie um brief de projeto e diga-nos o que está a tentar resolver. Responderemos diretamente.",
      jumpTo: "Ir para",
      categoriesLabel: "Categorias de FAQ",
      groups: [
        {
          id: "faq-plans",
          label: "Planos e âmbito",
          questions: [
            {
              question: "O que é a Starter Shifter?",
              answer:
                "A Starter Shifter é uma agência que ajuda as empresas a colocar os seus produtos e operações online. Trabalhamos em sites e aplicações de e-commerce, presença social, chatbots e automação, integrações e nos sistemas por trás deles. Os clientes podem estar sediados em qualquer lugar, e cada âmbito é moldado em torno do negócio.",
            },
            {
              question: "Qual é a diferença entre o Basic e o Pro?",
              answer:
                "O Basic custa 2 500 $ uma única vez. Cobre a construção completa da aplicação mais a configuração de marketing digital: investigação e design, desenvolvimento do site ou da aplicação de e-commerce, gestão de SEO, marketing por e-mail e marketing nas redes sociais no WhatsApp, LinkedIn, Pinterest e noutros canais conforme necessário, mais a configuração do chatbot e da automação, as integrações operacionais suportadas e o lançamento. Gere a geração de leads e o trabalho contínuo após a entrega. O Pro custa 2 500 $ pela mesma configuração, mais 500 $ por mês para a manutenção contínua, a melhoria do desempenho, a geração de leads e a manutenção do SEO e do marketing atualizados. Os entregáveis e a cobertura são acordados antecipadamente; os volumes de leads não são garantidos e os custos de terceiros, como o alojamento, os domínios, a despesa publicitária e as taxas de pagamento, são pagos por si.",
            },
            {
              question: "Podemos escolher apenas parte de um plano?",
              answer:
                "Sim. O Basic e o Pro são pontos de partida para os âmbitos mais comuns. Se precisar de um projeto mais pequeno, maior ou diferente, podemos discutir um âmbito à medida. O trabalho, o preço, os prazos e as responsabilidades selecionados são acordados antes do início do trabalho.",
            },
            {
              question: "Há custos para além do preço do plano?",
              answer:
                "Sim. O alojamento, os domínios, a despesa publicitária, as taxas de processamento de pagamentos e outras despesas de terceiros são pagos por si, à parte dos honorários da agência. As subscrições de plataformas, os temas, as aplicações, os plugins e as licenças, as subscrições de ERP, CRM, chatbot e outro software, as taxas de utilização, o licenciamento de recursos e as taxas de envio ou de processamento são também da sua responsabilidade. Os serviços fora das três áreas que cobrimos, ou o trabalho fora do âmbito acordado, são cotados à parte.",
            },
            {
              question: "Garantem leads, vendas ou crescimento?",
              answer:
                "Não podemos prometer um número específico de leads ou vendas — os resultados dependem sobretudo do mercado e de fatores fora do nosso controlo. O que prometemos para o Pro é o trabalho em si: gerimos ativamente a geração de leads e ajudamos o seu negócio a crescer e, se uma abordagem não estiver a produzir resultados, reestruturamo-la e testamos outras para encontrar o que se adequa. Estaremos a trabalhar nisso consigo, e não apenas a entregar-lhe uma configuração.",
            },
            {
              question: "Como funciona o pagamento?",
              answer:
                "A integração segue um contrato partilhado assinado e um adiantamento de 40%, juntamente com os detalhes da sua empresa e do seu projeto. O calendário do pagamento restante e as outras condições comerciais são definidos no seu contrato. O Basic é uma taxa única; o Pro combina uma taxa de configuração com uma mensalidade. As outras condições de pagamento ou legais são acordadas individualmente.",
            },
          ],
        },
        {
          id: "faq-process",
          label: "Processo e prazos",
          questions: [
            {
              question: "O que precisa de nós para começar?",
              answer:
                "Um contrato partilhado assinado, um adiantamento de 40% e os detalhes da sua empresa e do seu projeto. Dependendo do âmbito, podemos também precisar de informações de produtos, recursos de marca, acesso a ferramentas existentes, políticas, regras fiscais e de envio e um contacto que possa rever e aprovar o trabalho.",
            },
            {
              question: "Quanto tempo demorará o nosso projeto?",
              answer:
                "A primeira entrega de investigação e de um rascunho de design em Figma tem como objetivo um máximo de 3 a 4 dias após a conclusão da integração. A construção completa depende depois do âmbito, dos requisitos técnicos, da disponibilidade do conteúdo, das aprovações de terceiros e dos ciclos de revisão. Agendamos duas chamadas Google Meet por semana para partilhar o progresso e acordamos os marcos e os prazos na sua proposta.",
            },
            {
              question: "Qual é a primeira entrega prevista?",
              answer:
                "Após o contrato assinado, o adiantamento de 40% e os detalhes da empresa/projeto estarem completos, visamos uma primeira entrega em 3 a 4 dias, com investigação da empresa, do mercado e da concorrência, mais um rascunho de design em Figma com variantes. O início exato do prazo, a profundidade da investigação, o número de variantes e o limite de revisões são confirmados para o seu projeto. A entrega é uma etapa de definição da direção, não o site concluído nem todas as integrações.",
            },
            {
              question: "Como funcionam as revisões?",
              answer:
                "Rever o trabalho acordado nos pontos de decisão do seu âmbito e partilha feedback consolidado. O limite de revisões é acordado antes do início do trabalho. Se um pedido alterar o âmbito acordado ou acrescentar trabalho, definimos o trabalho, o preço e o prazo adicionais antes de avançar.",
            },
            {
              question: "O que acontece se o nosso conteúdo ou acesso se atrasar?",
              answer:
                "Os prazos dependem dos elementos que acordamos. Se o conteúdo, o acesso às contas, as aprovações ou as respostas de terceiros chegarem com atraso, o calendário pode mudar. Sinalizamos a dependência e acordamos um plano revisto em vez de absorver o atraso em silêncio.",
            },
          ],
        },
        {
          id: "faq-build",
          label: "Sites e integrações",
          questions: [
            {
              question: "Em que plataformas constroem?",
              answer:
                "Construímos sites e aplicações de e-commerce no Shopify ou no WordPress, usando o WooCommerce quando é necessária uma loja. Se outra plataforma ou criador de sites puder servir melhor, analisamos o suporte e a viabilidade antes de nos comprometermos. A abordagem de plataforma é confirmada na sua proposta.",
            },
            {
              question: "Podem reformular ou migrar um site existente?",
              answer:
                "Podemos discutir uma reformulação ou migração, mas não está automaticamente incluída no Basic ou no Pro. Primeiro analisamos o site, o conteúdo, os produtos, as integrações e os redirecionamentos atuais. O âmbito, os riscos e o preço da migração são acordados à parte.",
            },
            {
              question: "Podem ligar as ferramentas que já usamos?",
              answer:
                "Oferecemos integrações entre lojas, inventário, envios, faturação e sistemas de negócio, como ferramentas ERP e CRM. A compatibilidade depende dos sistemas, versões, acessos, APIs e limites de plataforma exatos. Analisamo-los antes de confirmar o que pode ser ligado e o que o trabalho envolve.",
            },
            {
              question: "Constroem aplicações móveis nativas?",
              answer:
                "O nosso trabalho confirmado são sites e aplicações web. Se estiver a considerar uma aplicação móvel nativa, mencione-o cedo para podermos confirmar se se enquadra no projeto. Não se assume que faça parte de uma construção de site ou de e-commerce.",
            },
            {
              question: "Podem configurar chatbots e automação social?",
              answer:
                "Sim, como uma configuração acordada. Concebemos os casos de uso, ligamos os canais suportados, usamos fontes de conhecimento aprovadas, definimos limites e organizamos uma transferência para uma pessoa quando necessário. O suporte exato de canais, o volume de conversas, as permissões e os custos de utilização são confirmados durante a viabilidade. Não prometemos um apoio totalmente autónomo nem todas as redes sociais.",
            },
          ],
        },
        {
          id: "faq-after-launch",
          label: "Após o lançamento",
          questions: [
            {
              question: "Podem ajudar após o lançamento?",
              answer:
                "Sim. O Pro inclui a manutenção e o apoio contínuos por 500 $ por mês, além da sua taxa de configuração de 2 500 $. Melhoramos o desempenho, mantemos o seu SEO e o seu marketing atualizados e trabalhamos para melhores vendas. O Basic é uma configuração única, mas cada cliente de pagamento único continua apoiado durante todo o primeiro mês após a integração — tratamos das alterações pedidas e das correções de erros. Após esse primeiro mês, se não continuar com o Pro, a ajuda adicional é cotada com base no problema e nos serviços de que precisa.",
            },
            {
              question: "O que cobre a manutenção?",
              answer:
                "A cobertura típica pode incluir verificações de rotina, atualizações aplicáveis e verificações de compatibilidade, correções de erros, monitorização, tarefas de cópia de segurança e recuperação quando acordadas e o tratamento do apoio. A lista exata depende dos seus sistemas e da cobertura que adquire. As novas funcionalidades e o trabalho fora dessa cobertura precisam do seu próprio âmbito.",
            },
            {
              question: "Oferecem apoio 24/7 ou um tempo de resposta garantido?",
              answer:
                "Não publicamos uma promessa universal de 24/7 nem de tempo de resposta. Os horários, os canais, a capacidade, os objetivos de resposta e a escalação do apoio são acordados no seu âmbito de apoio. Se precisar de um nível de serviço específico, mencione-o antes do projeto para podermos confirmar se pode ser cumprido.",
            },
            {
              question: "Quem é o proprietário do site e das contas após a entrega?",
              answer:
                "Você. Após a entrega, gere o site, as suas contas e o seu conteúdo. Não o obrigamos a continuar com os nossos serviços, a menos que queira apoio contínuo. As contas de plataformas, as licenças e os serviços de terceiros podem continuar sujeitos às suas próprias condições.",
            },
            {
              question: "Podem gerir os nossos anúncios e a geração de leads?",
              answer:
                "O Pro inclui a geração de leads e o trabalho de campanhas geridos pela agência dentro do âmbito acordado. O Basic exclui a geração de leads gerida pela agência. Trabalhamos ativamente para trazer leads e vendas e, se uma abordagem não resultar, reestruturamo-la e testamos outras. A despesa publicitária é sempre paga por si, à parte dos honorários da agência, e os volumes de leads não são garantidos — os resultados dependem do mercado. Os canais, o âmbito das campanhas, as quantidades de conteúdo e a cadência dos relatórios são acordados antecipadamente.",
            },
          ],
        },
        {
          id: "faq-working",
          label: "Trabalhar em conjunto",
          questions: [
            {
              question: "Como iniciamos um projeto?",
              answer:
                "Comece com um brief de projeto neste site. Usamo-lo para compreender o seu negócio e os seus objetivos e depois discutimos o âmbito adequado. Se for adequado, recebe uma proposta com os entregáveis, as exclusões, os preços, os prazos e as responsabilidades. O trabalho começa após o contrato assinado, o adiantamento de 40% e os detalhes do projeto.",
            },
            {
              question: "Trabalham com empresas fora do vosso país?",
              answer:
                "Sim. A Starter Shifter trabalha com empresas em todo o mundo. Não reivindicamos cobertura legal, fiscal ou de plataforma local em todos os mercados, pelo que os requisitos específicos da sua jurisdição são confirmados para o seu projeto.",
            },
            {
              question: "Como tratam as nossas informações?",
              answer: {
                before:
                  "Usamos os detalhes que partilha para compreender o seu negócio e preparar ou entregar os serviços acordados. Não vendemos o seu brief nem o partilhamos com outras empresas para uso próprio. As nossas ",
                linkLabel: "informações de privacidade",
                linkHref: "/policies/privacy",
                after:
                  " explicam o brief de projeto e o portal de cliente atuais e identificam o que ainda aguarda aprovação.",
              },
            },
            {
              question: "E se não tivermos a certeza do que precisamos?",
              answer:
                "É um ponto de partida normal. Partilhe o problema de negócio e o que já está em vigor. Podemos ajudar a identificar o âmbito razoável mais pequeno, incluindo se a investigação ou uma etapa de descoberta deve vir primeiro. Não precisa de escolher um plano antes da primeira conversa.",
            },
            {
              question: "O brief de projeto é um contrato ou um orçamento?",
              answer:
                "Não. O brief de projeto é um ponto de partida para a discussão. Não cria um acordo, não reserva tempo nem define um preço. Uma proposta e um contrato assinado definem o âmbito e as condições comerciais.",
            },
          ],
        },
      ],
    },

    howWeWork: {
      eyebrow: "Recursos / Como trabalhamos",
      note: "A entrega, explicada de forma clara",
      titleLines: ["Um caminho claro da primeira conversa até ao"],
      titleMark: "acompanhamento contínuo.",
      description:
        "Cada projeto é diferente, mas a forma como o percorremos não é. Estas são as etapas que usamos para compreender o seu negócio, acordar o âmbito, construir o trabalho e apoiar o que vem a seguir.",
      facts: [
        { label: "Ponto de partida", value: "Contrato, adiantamento de 40% e detalhes" },
        { label: "Primeira entrega", value: "Investigação e direção em Figma" },
        { label: "Formas de trabalhar", value: "Configuração Basic ou apoio Pro" },
      ],
      prerequisitesTitleLines: ["A integração começa quando", "as bases estão claras."],
      prerequisitesLabel: "O ponto de partida",
      prerequisitesIntro:
        "A integração segue três pré-requisitos. Protegem ambas as partes: o âmbito é compreendido, o compromisso é real e temos contexto suficiente para iniciar um trabalho útil.",
      prerequisites: [
        {
          title: "Um contrato partilhado assinado",
          description:
            "O contrato regista o âmbito, as responsabilidades e as condições comerciais acordados. O trabalho só começa após a sua assinatura.",
        },
        {
          title: "Um adiantamento de 40%",
          description:
            "O adiantamento confirma o projeto e permite-nos reservar tempo de entrega. As condições do pagamento restante são definidas no seu contrato.",
        },
        {
          title: "Detalhes da empresa e do projeto",
          description:
            "Precisamos de contexto suficiente sobre o seu negócio, os seus objetivos e a configuração existente para iniciar a investigação e a integração.",
        },
      ],
      prerequisitesFootNote:
        "Antes do pagamento, a sua proposta define os serviços selecionados, os entregáveis, as exclusões, os prazos, as responsabilidades e os custos. O trabalho adicional requer uma decisão explícita sobre o âmbito, o preço e os prazos.",
      stagesTitleLines: ["Oito etapas, moldadas em torno", "do trabalho de que realmente precisa."],
      stagesLabel: "O percurso de entrega",
      stagesIntro:
        "Estas etapas descrevem como operamos. A sua proposta confirma quais se aplicam, o que está incluído e como é a conclusão para o seu projeto.",
      stages: [
        {
          title: "Descoberta e qualificação",
          description:
            "Discutimos os seus objetivos, os sistemas atuais, as restrições e como seria o sucesso. O objetivo é compreender o problema antes de propor uma construção.",
          bring: "Objetivos, configuração existente, decisores",
          output: "Um resumo da descoberta ou um próximo passo recomendado",
        },
        {
          title: "Âmbito e proposta",
          description:
            "Definimos os entregáveis, as exclusões, a abordagem de plataforma, os preços, os prazos e as responsabilidades numa proposta escrita.",
          bring: "Acesso aos detalhes do sistema e respostas de viabilidade atempadas",
          output: "Uma proposta que pode rever e aprovar",
        },
        {
          title: "Acordo e integração",
          description:
            "Uma vez assinado o contrato, recebido o adiantamento e completos os detalhes do projeto, a integração começa e iniciamos o trabalho acordado.",
          bring: "Contrato assinado, adiantamento de 40%, detalhes da empresa",
          output: "Um projeto ativo e um ponto de partida partilhado",
        },
        {
          title: "Investigação inicial e rascunho em Figma",
          description:
            "Apresentamos a investigação da empresa, do mercado e da concorrência, juntamente com um rascunho de design em Figma com variantes para rever.",
          bring: "Feedback sobre a direção e quaisquer revisões acordadas",
          output: "Uma direção de design selecionada para levar à implementação",
        },
        {
          title: "Design e implementação",
          description:
            "Construímos o site, a aplicação, as campanhas ou as integrações acordados. As capacidades da plataforma e os tempos de resposta de terceiros moldam o que é possível.",
          bring: "Conteúdo, dados de produtos, acesso às contas, aprovações",
          output: "O trabalho acordado, construído e pronto a rever",
        },
        {
          title: "Testes e revisão do cliente",
          description:
            "Verificamos a funcionalidade acordada e documentamos os problemas. Testa os fluxos de negócio que importam e confirma a aceitação ou uma lista limitada de revisões.",
          bring: "Contas de teste, dados representativos, feedback",
          output: "Uma construção testada e uma lista clara de elementos restantes",
        },
        {
          title: "Lançamento e entrega",
          description:
            "Implementamos ou ativamos o trabalho aprovado e transferimos a documentação, o acesso e a formação acordados.",
          bring: "Aprovação do lançamento e disponibilidade dos domínios e contas",
          output: "Trabalho em produção e uma entrega acordada",
        },
        {
          title: "Apoio e melhoria contínuos",
          description:
            "Se adquiriu cobertura contínua, mantemos, gerimos, reportamos ou melhoramos os sistemas acordados. O Basic não inclui a gestão contínua.",
          bring: "Contactos, decisões e contributos recorrentes",
          output: "O trabalho contínuo definido no seu âmbito de apoio",
        },
      ],
      youBring: "Você fornece",
      output: "Resultado",
      stagesFootNote:
        "A correção de defeitos, a manutenção e o desenvolvimento de novas funcionalidades são categorias de trabalho diferentes. Cada uma é tratada ao abrigo do âmbito que se lhe aplica, em vez de ser assumida como incluída.",
      handoffTitleLines: ["Uma direção partilhada,", "antes de construirmos."],
      handoffLabel: "A primeira entrega",
      handoffIntro:
        "A entrega inicial destina-se a dar-lhe algo concreto a que reagir: investigação que alimenta o plano e um rascunho de design com opções.",
      handoffCards: [
        {
          title: "Investigação da empresa, do mercado e da concorrência",
          description:
            "Estudamos o seu negócio, o segmento em que opera e as alternativas que os seus clientes podem considerar. As conclusões moldam o plano e a direção de design.",
        },
        {
          title: "Um rascunho de design em Figma",
          description:
            "O rascunho apresenta variantes para a sua análise, para que possa escolher uma direção e dar feedback focado antes da implementação.",
        },
        {
          title: "Um ponto de decisão, não uma construção concluída",
          description:
            "Seleciona uma direção e pede as revisões acordadas. A implementação que se segue é uma etapa separada, com os seus próprios pontos de revisão e aprovação.",
        },
        {
          title: "O que não promete",
          description:
            "Esta entrega não é o site concluído, nem todos os recursos, nem todas as integrações. A profundidade da investigação e o âmbito do design correspondem ao tempo e às informações disponíveis.",
        },
      ],
      handoffNote:
        "A intenção declarada é uma primeira entrega num máximo de 3 a 4 dias após o contrato assinado, o adiantamento de 40% e os detalhes completos da empresa/projeto. Durante a construção, agendamos duas chamadas Google Meet por semana para partilhar o progresso. O início exato do prazo, a profundidade da investigação, o número de variantes e o limite de revisões são confirmados na sua proposta.",
      workingTitleLines: ["Responsabilidades claras.", "Menos surpresas."],
      workingLabel: "Trabalhar em conjunto",
      workingIntro:
        "Um bom projeto não diz respeito apenas ao que construímos. Trata-se também de quem fornece o quê, quem o aprova e que custos ficam fora dos honorários da agência.",
      workingTogether: [
        {
          title: "O que fornece",
          items: [
            "Os detalhes completos da sua empresa e do seu projeto, preenchidos durante a integração",
            "Conteúdo do negócio, dados de produtos, catálogos e imagens de produtos",
            "Acesso às contas e contactos técnicos",
            "Políticas, regras fiscais, detalhes de envio e aprovações",
            "Um decisor para as revisões e a aprovação final",
          ],
        },
        {
          title: "O que gerimos",
          items: [
            "A investigação, o design e a implementação acordados",
            "As integrações e os testes suportados",
            "O lançamento, a documentação e a entrega",
            "Qualquer trabalho contínuo adquirido à parte",
          ],
        },
        {
          title: "Mantido à parte",
          items: [
            "Alojamento, domínios, temas, aplicações e licenças",
            "Subscrições de ERP, CRM, chatbot e outro software",
            "Processamento de pagamentos, utilização e taxas de envio",
            "Despesa publicitária e licenciamento de recursos de terceiros",
          ],
        },
      ],
      workingFootNoteBefore:
        "Os entregáveis, as quantidades, as ferramentas suportadas, os limites de revisão e a capacidade de apoio são acordados antes do início do trabalho. Ver ",
      workingFootNoteLink: "Apoio e assistência",
      workingFootNoteAfter: " para saber como a cobertura contínua é tratada.",
    },

    products: {
      eyebrow: "Recursos / Produtos e modelos",
      note: "Sites, aplicações e sistemas",
      titleLines: ["Um olhar mais atento", "sobre o que construímos."],
      titleMark: "construímos.",
      description:
        "Sites, aplicações e experiências conectadas. Explore a coleção, as categorias de trabalho por trás dela e como distinguimos a diferença entre um conceito e o trabalho concluído para clientes.",
      facts: [
        { label: "Foco", value: "Sites, aplicações e sistemas" },
        { label: "Coleção", value: "Pré-visualizações de conceito" },
        { label: "Política de provas", value: "Apenas trabalho aprovado" },
      ],
      workTitleLines: ["Três áreas.", "Uma experiência conectada."],
      workLabel: "O trabalho",
      workIntro:
        "A maioria dos projetos toca mais do que uma área. Uma loja pode precisar de uma vista de operações; um fluxo de apoio pode precisar de um site e de uma ligação CRM por trás.",
      buildAreas: [
        {
          title: "Sites e e-commerce",
          description:
            "Lojas e sites de negócio moldados em torno da forma como vende, com catálogo, checkout e conteúdo construídos numa plataforma acordada.",
          tags: ["Shopify", "WordPress + WooCommerce", "Design e construção"],
        },
        {
          title: "Aplicações web e operações",
          description:
            "Ferramentas internas e aplicações viradas para o cliente que transformam encomendas, inventário e sistemas de negócio conectados em fluxos de trabalho mais claros.",
          tags: ["Painéis", "Fluxos de trabalho", "Ligações ERP e CRM"],
        },
        {
          title: "Experiências de IA e automação",
          description:
            "Chatbots, fluxos de apoio e automações suportadas que respondem a perguntas comuns, encaminham pedidos e reduzem o trabalho repetitivo.",
          tags: ["Chatbots", "Transferência para uma pessoa", "Integrações suportadas"],
        },
      ],
      collectionTitleLines: ["Conceitos hoje.", "Provas à medida que são aprovadas."],
      collectionLabel: "A coleção",
      collectionIntroWithPreviews:
        "A coleção mostra atualmente conceitos de design. São pré-visualizações ilustrativas; os detalhes e as capturas dos projetos concluídos só aparecerão quando forem fornecidos e aprovados.",
      collectionIntroWithoutPreviews:
        "Explore a coleção de sites, aplicações e experiências conectadas.",
      visitProject: "Visitar o projeto",
      collectionFootNote:
        "As pré-visualizações de conceito ilustram uma direção; não são resultados de clientes nem estudos de caso publicados. Não publicamos nomes de clientes, logótipos, testemunhos ou métricas sem autorização e verificação.",
    },

    support: {
      eyebrow: "Recursos / Apoio e assistência",
      note: "Ajuda após o lançamento",
      titleLines: ["Apoio que mantém", "o trabalho a funcionar."],
      titleMark: "a funcionar.",
      description:
        "O lançamento é um marco, não a linha de chegada. Eis como funcionam o acompanhamento, a manutenção e a melhoria contínuos após o seu projeto entrar em produção — e o que fica fora de um âmbito de apoio acordado.",
      facts: [
        { label: "Basic", value: "Configuração única" },
        { label: "Pro", value: "2 500 $ + 500 $/mês" },
        { label: "Cobertura", value: "Acordada por projeto" },
      ],
      actionCta: "Planear o seu projeto",
      actionSecondary: "Iniciar sessão no seu espaço de trabalho",
      plans: [
        {
          name: "Basic",
          price: "2 500 $",
          payment: "Configuração única",
          description:
            "A construção completa e a configuração de marketing digital, entregues uma vez e transferidas. O Basic não inclui a gestão contínua.",
          items: [
            "A construção completa da aplicação e o lançamento",
            "Gestão de SEO, marketing por e-mail e marketing nas redes sociais",
            "Configuração do chatbot e da automação",
            "Entrega do acesso e da documentação acordados",
            "Apoio no primeiro mês para alterações e correções de erros",
          ],
        },
        {
          name: "Pro",
          price: "2 500 $",
          payment: "Configuração + 500 $ / mês",
          description:
            "A base Basic, mais a manutenção contínua, a melhoria do desempenho, a geração de leads e a manutenção do SEO e do marketing atualizados.",
          items: [
            "Manutenção e apoio técnico contínuos",
            "Melhoria e monitorização do desempenho",
            "Geração de leads e gestão de campanhas",
            "Manutenção do SEO e do marketing atualizados",
            "Manutenção dos chatbots e dos fluxos de trabalho",
          ],
        },
      ],
      waysTitleLines: ["Duas formas de manter", "as coisas em movimento."],
      waysLabel: "Após o lançamento",
      waysIntro:
        "O Basic é uma construção única. O Pro acrescenta uma relação contínua. Nenhum dos planos significa trabalho ilimitado; os sistemas cobertos, a capacidade e a cadência são acordados antecipadamente.",
      waysFootNote:
        "A mensalidade do Pro cobre o trabalho contínuo acordado, incluindo a geração ativa de leads — quando uma abordagem não está a produzir resultados, reestruturamo-la e testamos outras. A despesa publicitária, as subscrições de terceiros e as taxas de utilização são pagas por si. Os volumes de leads e os resultados de crescimento não são garantidos.",
      coverageTitleLines: ["O trabalho por trás de", "«manter tudo a funcionar»."],
      coverageLabel: "Cobertura",
      coverageIntro:
        "O apoio pode significar coisas diferentes consoante os sistemas envolvidos. Estas são as áreas que podemos cobrir quando estão inscritas no seu âmbito de apoio.",
      coverage: [
        {
          title: "Manutenção e atualizações",
          description:
            "Verificações de rotina, atualizações aplicáveis e verificações de compatibilidade para os sistemas acordados. A cadência exata é definida no seu âmbito de apoio.",
        },
        {
          title: "Correções de erros",
          description:
            "Correção de defeitos na construção acordada. Um defeito é diferente de uma nova funcionalidade ou de uma alteração ao âmbito acordado.",
        },
        {
          title: "Desempenho",
          description:
            "Monitorização e melhorias acordadas da velocidade, da fiabilidade ou dos fluxos cobertos pelo seu plano. Os objetivos são específicos de cada projeto.",
        },
        {
          title: "Integrações e dados",
          description:
            "Manutenção das ligações ERP, CRM, inventário, envios e faturação suportadas, incluindo a monitorização e o tratamento de erros acordados.",
        },
        {
          title: "Cópias de segurança e recuperação",
          description:
            "Tarefas de cópia de segurança e recuperação quando acordadas e suportadas pela plataforma. As responsabilidades e as expectativas de recuperação são documentadas.",
        },
        {
          title: "Tratamento do apoio",
          description:
            "Um caminho claro para perguntas e problemas, com triagem, objetivos de resposta acordados e escalação para os sistemas em âmbito.",
        },
      ],
      coverageFootNote:
        "A lista exata depende da sua combinação de plataformas, integrações e cobertura adquirida. A manutenção, a correção de defeitos e o desenvolvimento de novas funcionalidades são tratados como categorias de trabalho diferentes.",
      requestTitleLines: ["Um caminho claro", "para uma resposta real."],
      requestLabel: "Quando algo precisa de atenção",
      requestStepLabel: "Pedido",
      requestIntro:
        "O apoio funciona melhor quando o pedido é específico e chega ao local acordado. Eis a forma de um pedido útil.",
      requestSteps: [
        {
          title: "Use o canal acordado",
          description:
            "Envie o pedido através do canal de apoio confirmado para o seu projeto, para que chegue ao local certo e possa ser acompanhado.",
        },
        {
          title: "Inclua o detalhe útil",
          description:
            "Descreva o que aconteceu, onde aconteceu, o que esperava e os passos para o reproduzir. Capturas de ecrã ou ligações ajudam.",
        },
        {
          title: "Fazemos a triagem e respondemos",
          description:
            "Confirmamos se é um defeito, manutenção ou trabalho novo e depois acordamos o próximo passo. O trabalho fora do âmbito recebe o seu próprio orçamento.",
        },
      ],
      upFrontTitle: "O que acordamos antecipadamente",
      upFrontDescription:
        "Os horários, os canais, a capacidade, os objetivos de resposta e a escalação do apoio são confirmados no seu âmbito de apoio. Não publicamos uma promessa universal de 24/7 nem de tempo de resposta.",
      requestNote:
        "Se já trabalha connosco, use o canal de apoio acordado para o seu projeto. Se não tiver a certeza de qual o canal aplicável, pergunte ao seu contacto habitual antes de enviar detalhes sensíveis.",
      boundariesTitleLines: ["O que fica fora", "de um âmbito acordado."],
      boundariesLabel: "Limites",
      boundariesIntro:
        "Saber o que não está incluído é tão útil como saber o que está. Estes itens são cotados à parte em vez de serem absorvidos no apoio de rotina.",
      separateLabel: "À parte",
      boundaries: [
        {
          title: "Novas funcionalidades e reformulações",
          description:
            "As novas funcionalidades, as alterações estruturais, as migrações e as reformulações são separadas da manutenção de rotina. Precisam do seu próprio âmbito, preço e prazo.",
        },
        {
          title: "Custos de terceiros",
          description:
            "O alojamento, os domínios, os temas, as aplicações, as licenças, as subscrições de software, as taxas de utilização, a despesa publicitária e as taxas de pagamento ou envio são pagos por si, à parte dos honorários da agência.",
        },
        {
          title: "Trabalho sem um âmbito de apoio",
          description:
            "O Basic é uma configuração única com apoio no primeiro mês para alterações pedidas e correções de erros. Após esse mês, se não continuar com o Pro, a ajuda adicional é cotada com base no problema e nos serviços de que precisa.",
        },
      ],
      boundariesFootNoteBefore:
        "Os entregáveis, a capacidade, os objetivos de resposta e os sistemas cobertos são confirmados antes do início do trabalho. Ver ",
      boundariesLinkOneLabel: "como trabalhamos",
      boundariesLinkOneHref: "/how-we-work",
      boundariesFootNoteMiddle: " ou ler as ",
      boundariesLinkTwoLabel: "FAQ de apoio",
      boundariesLinkTwoHref: "/faq#faq-after-launch",
      boundariesFootNoteAfter: ".",
    },

    policies: {
      privacy: {
        title: "Informações de privacidade.",
        description:
          "A política de privacidade completa da Starter Shifter está a aguardar aprovação. As informações abaixo descrevem a funcionalidade atual de brief de projeto; não constituem uma política de privacidade completa.",
        sections: [
          {
            heading: "O seu brief de projeto",
            paragraph:
              "O seu brief é guardado na sua conta de cliente para que possa fazer uma pausa, voltar e atualizar as suas respostas. Não é partilhado com outras contas de cliente. Os ficheiros de projeto carregados são armazenados com o seu espaço de trabalho e estão disponíveis para si e para a Starter Shifter. Pode remover os seus próprios ficheiros carregados do espaço de trabalho.",
          },
          {
            heading: "Contas de cliente e integração",
            paragraphBefore:
              "A sua conta de cliente permite-lhe guardar as informações do seu projeto e voltar a elas mais tarde. As suas ",
            linkLabel: "informações de privacidade da integração",
            linkHref: "/policies/onboarding-privacy",
            paragraphAfter:
              " explicam como os detalhes do projeto são usados. Aceita esse aviso antes de começar as perguntas.",
          },
          {
            heading: "Informações adicionais",
            paragraph:
              "As informações sobre o alojamento de dados, qualquer futuro serviço de pedidos, a conservação e os pedidos de privacidade serão adicionadas quando a política completa e os contactos forem aprovados.",
          },
        ],
      },
      cookies: {
        title: "Informações sobre cookies.",
        description:
          "A política de cookies está a aguardar aprovação. Será adicionado um aviso completo após a revisão do ambiente de alojamento em produção e de quaisquer ferramentas de rastreio.",
        sections: [
          {
            heading: "Funcionalidades atuais do site",
            paragraph:
              "Não está configurada nenhuma integração opcional de análise ou publicidade neste site. A funcionalidade atual de brief de projeto cria uma transferência local sem enviar os seus dados.",
          },
          {
            heading: "Alterações futuras",
            paragraph:
              "Se forem introduzidas funcionalidades de análise, publicidade ou outro rastreio opcional, estas informações terão de ser atualizadas para as ferramentas e os dados reais envolvidos.",
          },
        ],
      },
      terms: {
        title: "Informações sobre as condições de serviço.",
        description:
          "As condições de serviço completas estão a aguardar aprovação. Esta página resume as informações de compromisso confirmadas; cada projeto requer um âmbito acordado e um contrato assinado.",
        sections: [
          {
            heading: "Antes da integração",
            paragraph:
              "A integração segue um contrato assinado, um adiantamento de 40% e os detalhes da empresa e do projeto necessários para começar. Os entregáveis, as ferramentas suportadas, os prazos, as responsabilidades do cliente e a cobertura contínua são acordados para cada projeto.",
          },
          {
            heading: "Configuração e trabalho contínuo",
            paragraph:
              "O Basic é uma taxa única de 2 500 $ que cobre a construção completa da aplicação e a configuração de marketing digital (gestão de SEO, marketing por e-mail e marketing nas redes sociais). O Pro acrescenta 500 $ por mês para a manutenção contínua, a melhoria do desempenho e a geração de leads. Nenhum dos planos estabelece trabalho ilimitado, volumes de leads garantidos ou resultados de negócio garantidos.",
          },
          {
            heading: "Custos de terceiros",
            paragraph:
              "O alojamento, os domínios, a despesa publicitária, as taxas de processamento de pagamentos, as subscrições de plataformas, os temas e plugins pagos, a utilização de software, as licenças e as taxas de envio são pagos por si, à parte dos honorários da agência. Os serviços fora das três áreas de serviço são cotados à parte.",
          },
          {
            heading: "Condições ainda por publicar",
            paragraph:
              "As condições restantes de pagamento, impostos, cancelamento, reembolso, propriedade, licenciamento e apoio serão publicadas quando aprovadas. Confirme estes detalhes no seu acordo de projeto antes de avançar.",
          },
        ],
      },
      onboardingPrivacy: {
        title: "As suas informações, com um propósito.",
        shareHeading: "O que partilha connosco",
        shareParagraph:
          "Os seus dados de contacto, a descrição do negócio, os clientes e mercados, os objetivos do projeto e os serviços com os quais gostaria de receber ajuda. Pode também partilhar exemplos de negócio e ligações para materiais que nos ajudem a compreender o seu projeto. Se carregar ficheiros de projeto através do seu espaço de trabalho, armazenamos o ficheiro e os seus detalhes com o seu projeto.",
        useHeading: "Como os usamos",
        useParagraphs: [
          "Usamos as suas respostas para preparar e rever o seu brief de projeto, investigar o seu negócio, planear uma direção de design e entregar o trabalho acordado consigo. O seu progresso é guardado para que possa voltar, fazer alterações e verificar as suas respostas antes de enviar o seu brief à nossa equipa. Os ficheiros carregados são usados para rever e entregar o projeto para o qual os partilhou.",
          "Enviar um brief não assina um acordo nem confirma um pagamento. O seu acordo define os serviços, as taxas e as responsabilidades do seu projeto.",
        ],
        responsibilityHeading: "Quem cuida das suas informações",
        responsibilityParagraphAfter:
          "Pode aceder ao seu próprio brief através da sua conta. As outras contas de cliente não lhe podem aceder. O nosso portal usa prestadores de serviços para apoiar o início de sessão na conta e o armazenamento de informações; a Starter Shifter é responsável pela gestão das informações do seu projeto.",
        noticeHeading: "O seu aviso de integração",
        keepingHeading: "Conservar os seus dados e responder às suas perguntas",
        contactPrefix: "Para perguntas ou pedidos sobre as suas informações, contacte ",
        pausedHeading: "Antes de começar",
        pausedParagraphs: [
          "A integração está temporariamente em pausa. Pode rever estas informações novamente quando a integração reabrir.",
          "A pré-visualização de desenvolvimento permite-lhe experimentar o percurso com dados de negócio de exemplo. As suas respostas de exemplo e o progresso são guardados à parte e podem ser restaurados no mesmo navegador.",
        ],
        safeHeading: "Partilhe o contexto do negócio, em segurança",
        safeParagraphAfter:
          "Remova os detalhes privados de quaisquer exemplos que partilhe. Se o seu projeto precisar mais tarde de acesso a contas, a nossa equipa tratará disso consigo à parte.",
      },
    },
  },

  auth: {
    heading: "Junte-se a nós.",
    subheading: "Novo por aqui ou de regresso? Continue para a sua área de cliente.",
    socialGroupLabel: "Continuar com uma conta social",
    providers: { google: "Google", facebook: "Facebook" },
    connecting: "A ligar…",
    continueWith: "Continuar com ",
    socialHelpBoth: "O início de sessão com o Google e o Facebook chega em breve. Por agora, pode usar o e-mail.",
    socialHelpOneSuffix: " chega em breve.",
    or: "ou",
    continueWithEmail: "Continuar com o e-mail",
    workspaceNote: "Partilhe o seu brief de negócio e acompanhe o seu projeto num só lugar.",
    privacyNoteBefore: "Leia como usamos a sua conta e os detalhes do projeto nas nossas ",
    privacyNoteLink: "informações de privacidade",
    connectError: "Não conseguimos ligar a sua conta. Tente novamente ou continue com o e-mail.",
    socialSignInError: "O início de sessão social não teve sucesso. Tente novamente ou continue com o e-mail.",
    emailViewLabel: "Acesso à conta por e-mail",
    backToOptions: "Voltar a todas as opções de início de sessão",
    emailModeLabel: "Acesso à conta por e-mail",
    signIn: "Iniciar sessão",
    createAccount: "Criar conta",
    createAccountEmailLabel: "Criar uma conta com o e-mail",
    signInEmailLabel: "Iniciar sessão com o e-mail",
    emailLabel: "Endereço de e-mail",
    emailPlaceholder: "voce@empresa.com",
    passwordLabel: "Palavra-passe",
    passwordPlaceholderCreate: "Crie uma palavra-passe forte",
    passwordPlaceholderSignin: "Introduza a sua palavra-passe",
    showPassword: "Mostrar palavra-passe",
    hidePassword: "Ocultar palavra-passe",
    yourNameLabel: "O seu nome",
    yourNamePlaceholder: "Alex Morgan",
    keepMeSignedIn: "Manter sessão iniciada",
    passwordHint: "Use pelo menos 12 caracteres para a sua palavra-passe.",
    creatingAccount: "A criar a sua conta…",
    signingIn: "A iniciar sessão…",
    enterNameError: "Introduza o seu nome.",
    tooManyAttemptsError: "Demasiadas tentativas. Aguarde um momento e tente novamente.",
    createAccountError: "Não conseguimos criar a sua conta. Tente iniciar sessão ou use outro e-mail.",
    signInError: "Não conseguimos iniciar sessão. Verifique o seu e-mail e a sua palavra-passe.",
    connectRetryError: "Não conseguimos ligar. Tente novamente dentro de momentos.",
    shell: {
      storyTag: "O seu negócio, conectado",
      storyHeading: "Comece a sua jornada.",
      storyDescription: "Alguns passos simples para colocar o seu negócio em foco.",
      journeyLabel: "A jornada do seu espaço de trabalho",
      steps: ["Crie a sua conta", "Fale-nos do seu negócio", "Dê forma ao seu próximo capítulo"],
      formPanelLabel: "Junte-se à Starter Shifter",
      backToWebsite: "Voltar ao site",
      copyrightPrefix: "© ",
      accountPoliciesLabel: "Políticas da conta",
    },
  },

  dashboard: {
    viewNames: {
      overview: "Visão geral",
      brief: "Brief de projeto",
      journey: "Jornada do projeto",
      resources: "Marca e recursos",
      agreement: "Acordo e faturação",
    },
    updates: {
      title: "Novidades e acompanhamentos",
      description: "O seu progresso guardado mais recente e os detalhes a rever.",
      empty: "Comece o seu brief de projeto para ver as suas novidades aqui.",
      openQuestionsPrefix: "Perguntas em aberto (",
      openQuestionsSuffix: ")",
      revisitDefault: "Volte a esta resposta com a sua agência.",
      noFollowups: "Nenhum acompanhamento sinalizado no seu brief.",
      viewProjectJourney: "Ver a jornada do projeto",
      updateBrief: "Atualizar o meu brief",
      startBrief: "Começar o meu brief",
    },
    shell: {
      skipToDashboard: "Saltar para o painel",
      closeNavigation: "Fechar a navegação",
      workspaceNavigationLabel: "Navegação do espaço de trabalho",
      clientWorkspace: "Área de cliente",
      littleGuidance: "Uma pequena orientação?",
      littleGuidanceDesc: "Cada passo seguinte, explicado.",
      workspaceGuide: "Guia do espaço de trabalho",
      developmentPreview: "Pré-visualização de desenvolvimento",
      signingOut: "A terminar sessão…",
      signOut: "Terminar sessão",
      workspace: "Espaço de trabalho",
      searchLabel: "Pesquisar no seu brief de projeto",
      searchPlaceholder: "Pesquisar no seu brief…",
      viewUpdatesLabel: "Ver as novidades do espaço de trabalho",
      openProfileLabel: "Abrir o seu perfil",
      yourAccount: "A sua conta",
      dashboardContentLabel: "Conteúdo do separador do painel",
      footerBrand: "Starter Shifter · O seu negócio, conectado.",
      projectPrivacy: "Privacidade do projeto",
      connecting: "A ligar",
      connectedWorkspace: "Espaço de trabalho ligado",
      guideTitle: "O guia do seu espaço de trabalho",
      guideDescription: "Mantenha o seu projeto em andamento, um passo de cada vez.",
      guideParagraphs: [
        { strong: "Brief de projeto", text: " guarda todas as respostas que guardou. Escolha um tópico para o rever ou volte à integração para fazer alterações." },
        { strong: "Jornada do projeto", text: " mostra o seu envio e os pré-requisitos verificados. As etapas de entrega tornam-se relevantes após a ativação e seguem o seu âmbito acordado." },
        { strong: "Acordo e faturação", text: " mostra o âmbito, as taxas, o acordo e a verificação do adiantamento registados pela agência." },
        { strong: "", text: "Use «Fale connosco» no seu brief para sinalizar qualquer coisa em que precise de ajuda. As suas sinalizações aparecem no centro de ações do painel." },
      ],
      exploreMyBrief: "Explorar o meu brief",
      profileTitle: "O seu perfil",
      profilePreviewDesc: "O seu espaço de trabalho de pré-visualização guardado",
      profileDesc: "A sua área de cliente",
      nameLabel: "Nome",
      notProvided: "Ainda não fornecido",
      businessLabel: "Empresa",
      viewContactDetails: "Ver os dados de contacto",
      loadingBusinessName: "O espaço de trabalho do seu projeto",
    },
    overview: {
      topicSections: [
        { label: "Empresa", color: "var(--commerce-deep)" },
        { label: "Objetivos", color: "#439574" },
        { label: "Requisitos", color: "var(--commerce-mint)" },
        { label: "Confirmação", color: "#b4ae97" },
      ],
      eyebrow: "Um pouco de clareza. Muita possibilidade.",
      welcomeBack: "Bem-vindo de volta",
      projectAtAGlance: "O seu projeto, de relance. Tudo o que precisa para avançar.",
      viewProjectBrief: "Ver o brief de projeto",
      preparingPdf: "A preparar o PDF…",
      exportPdf: "Exportar relatório em PDF",
      pdfError: "Não foi possível criar o PDF. Tente exportar novamente.",
      pdfDownloaded: "O seu PDF está pronto. Verifique as transferências do seu navegador.",
      pdfPreparing: "A adicionar as suas respostas, gráficos e novidades do projeto.",
      pdfIdle: "Respostas, requisitos e progresso da entrega.",
      yourProjectBrief: "O seu brief de projeto",
      phasesComplete: "Fases concluídas",
      submittedForReview: "Enviado para revisão",
      continueWhereLeftOff: "Continue onde ficou",
      storyStartsHere: "A sua história começa aqui",
      projectReadiness: "Preparação do projeto",
      prerequisitesVerified: "Pré-requisitos verificados",
      prerequisitesBefore: "Pré-requisitos antes da ativação",
      projectDelivery: "Entrega do projeto",
      awaitingProjectUpdate: "A aguardar atualização do projeto",
      latestProgress: "Progresso mais recente da sua agência",
      deliveryProgressHere: "O progresso de entrega da sua agência aparece aqui",
      openQuestions: "Perguntas em aberto",
      workThroughThese: "Vamos trabalhar nestas",
      noFollowups: "Nenhum acompanhamento sinalizado",
      detailsToRevisit: "Detalhes a rever em conjunto",
      clearerPicture: "Uma imagem mais clara do seu projeto",
      briefBreakdown: "A conclusão do seu brief, detalhada por tópico.",
      questionsComplete: "das perguntas concluídas",
      completionByCategory: "Conclusão das perguntas por categoria",
      insideYourBrief: "Dentro do seu brief",
      viewAll: "Ver tudo",
      detailsOrganized: "Os seus detalhes, organizados. Abra um tópico para ver mais de perto.",
      answersRecorded: "respostas registadas",
      readyForInput: "Pronto para a sua contribuição",
      complete: "Concluído",
      yourNextStep: "O seu próximo passo",
      reviewProjectBrief: "Rever o brief de projeto",
      completeProjectBrief: "Concluir o brief de projeto",
      viewNextSteps: "Ver os próximos passos",
      beforeWeBegin: "Antes de começarmos",
      viewAllPrereqsLabel: "Ver todos os pré-requisitos de ativação",
      verified: "Verificado",
      inProgress: "Em curso",
      pending: "Pendente",
      workspaceReadyForYou: "O seu espaço de trabalho está pronto para si",
      startBriefToSee: "Comece o seu brief para ver os seus detalhes guardados e o progresso aqui.",
      viewJourney: "Ver a jornada",
      nextStepFallbacks: {
        oneSmallPhase: "Uma pequena fase de cada vez.",
        readyNextChapter: "Pronto para o seu próximo capítulo.",
        getReady: "Vamos preparar o seu projeto.",
        answerUpToFive: "Responda a até cinco perguntas e depois volte aqui. Pode fazer uma pausa entre cada fase.",
        briefVerified: "O seu brief e os pré-requisitos estão verificados. A sua agência pode agora organizar os próximos passos acordados.",
        confirmRemaining: "A sua agência confirmará os pré-requisitos restantes.",
      },
    },
    journey: {
      title: "Um passo mais perto, todos os dias.",
      description: "Uma visão clara da preparação do seu projeto e da jornada de entrega pela frente.",
      currentCheckpoint: "Ponto de controlo atual",
      yourProject: "O seu projeto",
      targetDate: "Data-alvo: ",
      deliveryComplete: "entrega concluída",
      preparationStagesComplete: "etapas de preparação concluídas",
      fallbackStages: [
        { title: "O seu brief de projeto", description: "Partilhe o seu negócio, objetivos, conteúdo e requisitos. As suas respostas ajudam a moldar a discussão do projeto." },
        { title: "Acordo e ativação", description: "A sua agência verifica os dados de contacto, o acordo assinado, o adiantamento de 40% e as dependências do projeto antes da ativação." },
        { title: "Investigação e direção", description: "A investigação do negócio, do mercado e da concorrência estabelece a direção. Os prazos e os entregáveis seguem o seu âmbito acordado." },
        { title: "Design e feedback", description: "Explore o trabalho de design acordado, reveja os rascunhos e partilhe o seu feedback. O número de variantes e revisões segue o seu acordo." },
        { title: "Construir e ligar", description: "O site, o conteúdo, os fluxos de trabalho e as ligações suportadas acordados ganham forma. Os requisitos selecionados são confirmados no âmbito do projeto." },
        { title: "Rever e entregar", description: "Reveja os entregáveis acordados e prepare-se para a entrega. Os requisitos de lançamento e o apoio contínuo dependem do seu projeto." },
      ],
      statusUpcoming: "Próximo",
      statusComplete: "Concluído",
      statusInProgress: "Em curso",
      statusVerified: "Verificado",
      statusNeedsVerification: "Necessita de verificação",
      statusUpNext: "A seguir",
      stageProgress: "Progresso da etapa",
      reviewBrief: "Rever o brief",
      continueBrief: "Continuar o brief",
      viewAllPending: "Ver todos os itens pendentes de verificação",
      noDeliveryUpdate: "Não foi registada nenhuma atualização de entrega para esta etapa. A sua agência confirmará o trabalho e os prazos aplicáveis após a ativação.",
      workspaceActivity: "Atividade do espaço de trabalho",
      activityEmpty: "O seu progresso guardado e as atualizações de envio aparecerão aqui assim que começar o seu brief.",
      activityFootNote: "Estes são os seus registos mais recentes. As datas de entrega e a conclusão são confirmadas à parte pela sua agência.",
    },
    resources: {
      title: "As peças da sua marca.",
      description: "Veja a disponibilidade do conteúdo e as ligações de referência que partilhou no seu brief de projeto.",
      updateResources: "Atualizar recursos",
      brandContentReadiness: "Disponibilidade da marca e do conteúdo",
      assetStatuses: "Os estados dos recursos que registou durante a integração.",
      gatherStartingPoints: "Vamos reunir os seus pontos de partida.",
      gatherStartingPointsDesc: "Adicione o seu logótipo, fotografias, textos e a disponibilidade do conteúdo ao seu brief. Os ficheiros finais podem ser partilhados em segurança com a sua agência.",
      contentContact: "Contacto de conteúdo",
      yourSharedLinks: "As suas ligações partilhadas",
      sharedLinksDesc: "Ligações de site, pasta e referência das suas respostas.",
      opensNewTab: "Abre num novo separador",
      noLinksYet: "Ainda não partilhou ligações de referência. Pode adicioná-las ao atualizar o seu brief.",
      secureShare: "Partilhe ficheiros e acessos através do seu método seguro acordado. As palavras-passe de contas não pertencem ao seu brief de projeto.",
      projectFiles: "Ficheiros do projeto",
      projectFilesDesc: "Carregue logótipos, textos, fotografias ou documentos de referência. Cada ficheiro é armazenado com o seu espaço de trabalho e fica visível para a sua agência.",
      file: "ficheiro",
      files: "ficheiros",
      previewNote: "A partilha de documentos fica disponível numa área de cliente autenticada.",
      noteForAgency: "Nota para a sua agência",
      notePlaceholder: "Contexto opcional para este carregamento",
      category: "Categoria",
      chooseFilesLabel: "Escolher ficheiros para carregar",
      uploading: "A carregar…",
      chooseFiles: "Escolher ficheiros",
      fileTypesHint: "PDF, imagem, Office, texto, CSV, JSON ou ZIP · até ",
      uploadError: "Não foi possível guardar o carregamento. Tente novamente.",
      removeConfirm: "Remover este ficheiro do seu espaço de trabalho?",
      removeError: "Não foi possível remover o ficheiro. Tente novamente.",
      needsUpdate: "Necessita de atualização",
      noFilesYet: "Ainda não carregou ficheiros.",
    },
    agreement: {
      title: "Âmbito claro. Expectativas partilhadas.",
      description: "O registo de compromisso confirmado da sua agência, as taxas e o estado de verificação.",
      yourEngagement: "O seu compromisso",
      setupFee: "Taxa de configuração",
      asRecorded: "Conforme registado no seu compromisso",
      ongoingFee: "Taxa contínua",
      notRecorded: "Não registado",
      perMonth: "Por mês, de acordo com o âmbito acordado",
      ongoingFollows: "O trabalho contínuo segue o seu acordo",
      whatsIncluded: "O que está incluído",
      exclusionsThirdParty: "Exclusões e custos de terceiros",
      seeExclusions: "Consulte o seu acordo para as exclusões.",
      verificationBilling: "Verificação e faturação",
      signedAgreement: "Acordo assinado",
      fortyPercentAdvance: "Adiantamento de 40%",
      billingName: "Nome de faturação",
      billingEmail: "E-mail de faturação",
      paymentStatusNote: "O estado do pagamento reflete a verificação da agência. Este espaço de trabalho não cobra pagamentos.",
      agreementComesNext: "O seu acordo vem a seguir.",
      agreementComesNextDesc: "Assim que a sua agência registar o seu compromisso, verá aqui o âmbito aprovado, as taxas, os detalhes de faturação e o estado de verificação.",
      agreementAwaiting: "Acordo a aguardar confirmação",
      advanceAwaiting: "Adiantamento de 40% a aguardar verificação",
    },
    brief: {
      title: "O seu brief de projeto",
      description: "Rever o seu progresso de integração, verificar as respostas que partilhou e preencher os detalhes em falta.",
      progressLabel: "O progresso do seu brief",
      everyDetailCovered: "Todos os detalhes estão cobertos",
      briefTakingShape: "O seu brief está a ganhar forma",
      questionsAnswered: "perguntas respondidas",
      phasesComplete: "fases concluídas",
      submittedToAgency: "Enviado à sua agência",
      draftNotSubmitted: "Rascunho · Não enviado",
      reviewAndSend: "Rever e enviar",
      updateReopens: "Pode atualizar qualquer resposta. As alterações reabrem o seu brief para revisão e envio.",
      completeSubmit: "As suas respostas estão completas. Reveja e envie o seu brief para concluir a integração.",
      completionNote: "A conclusão conta as perguntas respondidas e as não aplicáveis. Os detalhes guardados para mais tarde permanecem em aberto; pode ainda discuti-los com a sua agência.",
      percentComplete: "das perguntas concluídas",
      statusComplete: "Concluído",
      percentCompleteSuffix: "concluído",
      filterLabel: "Filtrar as perguntas do brief",
      filters: [
        { label: "Todas as perguntas" },
        { label: "Por concluir" },
        { label: "Acompanhamentos" },
        { label: "Respondidas" },
      ],
      searchLabel: "Pesquisar perguntas e respostas",
      searchPlaceholder: "Pesquisar perguntas ou respostas",
      onboardingPhases: "Fases de integração",
      shown: "mostradas",
      chooseAPhase: "Escolher uma fase",
      noMatchingPhases: "Nenhuma fase correspondente",
      phase: "FASE",
      of: "DE",
      complete: "Concluído",
      answered: "respondidas",
      notAnswered: "não respondidas",
      needAttention: "necessitam de atenção",
      forLater: "para mais tarde",
      pickUpWhereLeft: "Continue onde ficou.",
      readyToRevisit: "Pronto para rever os detalhes guardados para mais tarde?",
      continuePhase: "Continuar a fase",
      startPhase: "Começar a fase",
      showingPrefix: "A mostrar ",
      showingOfSuffix: " perguntas nesta fase",
      question: "Pergunta",
      followUpRequested: "Acompanhamento pedido",
      notApplicable: "Não aplicável",
      noAnswerYet: "Ainda não foi fornecida nenhuma resposta.",
      yourSavedAnswer: "A sua resposta guardada",
      checkAnswerDefault: "Verifique esta resposta antes de terminar a fase.",
      editAnswer: "Editar a resposta",
      checkAnswer: "Verificar a resposta",
      answerNow: "Responder agora",
      updateNote: "Abra uma pergunta para a atualizar. A sua resposta guardada será pré-preenchida e pode voltar a esta fase depois de guardar.",
      noMatchingQuestions: "Nenhuma pergunta correspondente",
      noUnansweredQuestions: "Nenhuma pergunta por responder",
      noDetailsForLater: "Nenhum detalhe guardado para mais tarde",
      noQuestionsToShow: "Nenhuma pergunta para mostrar",
      tryAnotherSearch: "Tente outra pesquisa ou limpe os filtros para ver o seu brief.",
      chooseAnotherFilter: "Escolha outro filtro para rever o resto do seu brief.",
      showAllQuestions: "Mostrar todas as perguntas",
      noPhasesMatch: "Nenhuma fase corresponde a este filtro.",
      forLaterSuffix: "para mais tarde",
      statusLabels: {
        answered: "Respondida",
        pending: "Não respondida",
        later: "Para mais tarde",
        attention: "Necessita de atenção",
        review: "Revisão",
      },
    },
    phases: {
      savedSuffix: " guardado. Reveja o seu progresso abaixo.",
      yourOnboarding: "A SUA INTEGRAÇÃO",
      completeTitle: "O seu brief de projeto está concluído.",
      incompleteTitle: "Vamos concluir o seu brief de projeto.",
      completeSubmitted: "As suas respostas foram enviadas. Pode rever ou atualizar qualquer detalhe no seu brief.",
      completeNotSubmitted: "Cada pergunta tem uma resposta. Reveja o seu brief e envie-o à sua agência quando estiver pronto.",
      incomplete: "Veja o que partilhou, encontre os detalhes que ainda faltam e conclua uma fase de cada vez.",
      reviewProjectBrief: "Rever o brief de projeto",
      reviewAndSendBrief: "Rever e enviar o brief",
      continuePhase: "Continuar a fase",
      startPhase: "Começar a fase",
      phasePrefix: "Fase ",
      briefCompletion: "Conclusão do brief",
      answeredSuffix: " respondidas",
      notAnswered: "não respondidas",
      needAttention: "necessitam de atenção",
      forLater: "para mais tarde",
      phasesComplete: "fases concluídas",
      laterStaysVisible: "Os detalhes marcados para mais tarde permanecem visíveis até os resolver.",
      answersSavedAsYouGo: "As suas respostas são guardadas à medida que avança. Pode fazer uma pausa a qualquer momento.",
      viewAllPhases: "Ver todas as fases",
      briefCompletionLabel: "Conclusão do brief de projeto",
    },
  },

  onboarding: {
    privacyCopy: {
      purpose: "A Starter Shifter usa os detalhes que partilha para compreender o seu negócio, preparar o seu projeto e entregar os serviços que acordar connosco.",
      responsibility: "As informações do seu projeto são geridas pela Starter Shifter. Não vendemos os seus dados nem partilhamos o seu brief com outras empresas para uso próprio.",
      safeSharing: "Informações e exemplos de negócio são suficientes. Deixe de fora palavras-passe, dados de pagamento e informações privadas sobre os seus clientes ou a sua equipa.",
    },
    welcome: {
      storyLabel: "O seu próximo capítulo começa aqui",
      storyTitleLines: ["Grandes ideias.", "Pequenos passos."],
      storyFooterLines: ["Você traz a história.", "Ajudamos a ligar os pontos."],
      greeting: "Bem-vindo à Starter Shifter.",
      greetingNamePrefix: "Bem-vindo, ",
      heading: "Vamos conhecer o seu negócio.",
      descriptionPrefix: "Fale-nos do seu negócio, uma pergunta de cada vez. O seu percurso atual tem ",
      descriptionSuffix: " fases curtas, com até cinco perguntas cada. Podem aparecer acompanhamentos relevantes à medida que escolhe o trabalho de que precisa.",
      promises: [
        "As estimativas são bem-vindas. Peça ajuda quando precisar.",
        "Continue suavemente de uma fase para a outra",
        "Guarde, faça uma pausa, volte quando quiser",
      ],
      consentBefore: "Li as ",
      consentLink: "informações de privacidade",
      consentAfter: " e aceito que a Starter Shifter use os meus dados para preparar e entregar o meu projeto.",
      saving: "A guardar…",
      begin: "Vamos começar",
      paused: "A integração está temporariamente em pausa. Volte quando reabrir.",
      tryPreview: "Experimentar a pré-visualização",
      previewOnly: "Apenas pré-visualização. Use dados de exemplo.",
      serviceTerms: "Condições de serviço",
    },
    journeyArtwork: {
      scenes: [
        { title: "O seu negócio", subtitle: "Feito de boas ideias e pessoas reais", tag: "Prazer em conhecê-lo" },
        { title: "A sua direção", subtitle: "Um pouco de clareza. Muita possibilidade.", tag: "Pense em grande" },
        { title: "A sua assinatura", subtitle: "Os detalhes que o tornam seu", tag: "Deixe a sua marca" },
        { title: "A sua caixa de ferramentas", subtitle: "A ligar as peças do seu projeto", tag: "Peça a peça" },
        { title: "O seu próximo capítulo", subtitle: "Um brief sobre o qual construir, em conjunto", tag: "Tudo a juntar-se" },
      ],
      tagline: "Um pouco mais de si",
    },
    wizard: {
      sessionEnded: "A sua sessão terminou.",
      signInAgain: "Iniciar sessão novamente",
      reloadOnboarding: "Recarregar a integração",
      previewBanner: "Modo de pré-visualização. Use dados de negócio de exemplo. O seu progresso é guardado para a sua próxima visita.",
      customizedBanner: "A sua agência preparou este questionário para o seu projeto. Reveja quaisquer detalhes pedidos recentemente.",
      oneQuestionAtATime: "Uma pergunta de cada vez",
      saveAndReturn: "Guardar e voltar ao brief",
      saveAndExit: "Guardar e sair",
      phaseReview: "Revisão da fase",
      questionOf: "Pergunta ",
      of: " de ",
      reviewYourAnswers: "Rever as suas respostas",
      answerBeforeFinish: "Pode responder a isto antes de terminar.",
      phaseSavedSuffix: " guardado. Vamos continuar.",
      beforeNextPhase: "Antes da próxima fase",
      fewDetailsForLater: "Alguns detalhes para mais tarde",
      phaseReady: "Esta fase está pronta",
      answeredPrefix: "Respondeu a ",
      answeredSuffix: " de ",
      answeredOfQuestions: " perguntas nesta fase. ",
      fillNowOrFlag: "Pode preencher estes detalhes agora ou mantê-los sinalizados para a sua revisão final.",
      changesSavedContinue: "As suas alterações estão guardadas. Continue quando quiser.",
      answerNow: "Responder agora",
      back: "Voltar",
      continueWithForLaterPrefix: "Continuar com ",
      continueWithForLaterSuffix: " para mais tarde",
      continueToNextPhase: "Continuar para a próxima fase",
      reviewTitle: "Aqui está o seu brief de projeto. O que acha?",
      remainingPrereqs: "Pré-requisitos restantes do projeto",
      prereqsNote: "Estes são verificados em relação aos registos da agência. Não são enviados convites a partir deste formulário.",
      reviewHelp: "Verifique as suas respostas abaixo. Pode editar qualquer tópico antes das confirmações finais.",
      previewPrivacyHelp: "Rever como as suas respostas de exemplo são usadas nesta pré-visualização antes de confirmar.",
      addProjectTopic: "Mais alguma coisa? Adicione um tópico de projeto",
      topicsAutoHelp: "As suas respostas selecionam automaticamente os tópicos relevantes. Adicione aqui um fluxo de trabalho se o perdemos.",
      searchTopicsLabel: "Pesquisar tópicos de projeto",
      searchTopicsPlaceholder: "Pesquisar tópicos…",
      selectedByAnswers: "selecionado pelas suas respostas",
      previouslyAnswered: "Tópicos respondidos anteriormente",
      previouslyAnsweredHelp: "Estas respostas permanecem guardadas fora do seu percurso atual. Restaure um tópico ou remova as suas respostas.",
      restoreTopic: "Restaurar o tópico",
      removeSavedAnswers: "Remover as respostas guardadas",
      routeNotePrefix: " tópicos específicos do projeto selecionados. O seu progresso adapta-se à medida que escolhe.",
      backToMyReview: "Voltar à minha revisão",
      retrySaving: "Tentar guardar novamente",
      saveAndReturnToBrief: "Guardar e voltar ao brief",
      backToPhaseReview: "Voltar à revisão da fase",
      saveAndOpenDashboard: "Guardar e abrir o painel",
      submitOnboarding: "Enviar os dados de integração",
      looksGood: "Parece bem",
      skipForNow: "Saltar por agora",
      continue: "Continuar",
      pauseAnytime: "Faça uma pausa a qualquer momento com Guardar e sair.",
      phaseOf: "Fase ",
      phaseOfSuffix: " de ",
      encouragement: {
        checkTogether: "Vamos verificar esta resposta em conjunto. O detalhe abaixo ajudará.",
        briefComingTogether: "O seu brief está a ganhar forma. Dê uma vista de olhos antes das confirmações finais.",
        flagForGuidance: "Vamos sinalizar isto para orientação. Pode continuar.",
        keepOpen: "Tudo bem. Vamos manter isto como uma pergunta em aberto.",
        gotIt: "Percebido! Continue quando quiser.",
        startWithYou: "Vamos começar por si. Uma resposta curta é tudo o que precisamos.",
        multiSelect: "Pode escolher mais do que uma opção. Escolha o que se adequa ao seu projeto.",
        select: "Escolha a opção que lhe parece certa.",
        optional: "Esta é opcional. Pode voltar a ela mais tarde.",
        oneSmallStep: "Um pequeno passo de cada vez. Um pouco de contexto é suficiente.",
      },
      saveStates: {
        allSaved: "Todas as alterações guardadas",
        readyToSave: "Pronto a guardar",
        saving: "A guardar…",
        unsaved: "Alterações não guardadas",
        notSaved: "Alterações não guardadas — tente novamente abaixo",
      },
      errors: {
        saveFailed: "Não conseguimos guardar as suas últimas alterações. Mantenha esta página aberta e tente novamente.",
        draftMissing: "A sua sessão de rascunho está em falta. Recarregue esta página para se voltar a ligar.",
        unableToSave: "Não foi possível guardar.",
        unableToSaveAnswer: "Não foi possível guardar esta resposta.",
        unableToSavePhase: "Não foi possível guardar esta fase.",
        unableToSubmit: "Não foi possível enviar.",
        unableToSaveAgreement: "Não foi possível guardar o seu acordo. Tente novamente.",
        attentionBeforeSubmit: "Algumas respostas ainda precisam da sua atenção antes do envio.",
        loadQuestionnaire: "Não conseguimos carregar o questionário que lhe foi atribuído. Recarregue para tentar novamente ou contacte a agência se o problema persistir.",
      },
      engagementSummary: {
        noneHeading: "Ainda não foi registado nenhum compromisso aprovado",
        noneBody: "O seu acordo de projeto, o âmbito, as taxas e o registo de faturação aparecerão aqui assim que a agência os registar. Pode ainda assim enviar um brief para revisão.",
        noneMeta: "Acordo: a aguardar confirmação · Adiantamento de 40%: a aguardar verificação",
        approvedSuffix: " · Registo de projeto aprovado",
        setupPrefix: "Configuração: ",
        recurringPrefix: " · Recorrente: ",
        perMonthSuffix: " / mês",
        scopePrefix: "Âmbito: ",
        exclusionsPrefix: "Exclusões: ",
        seeAgreement: "Ver o seu acordo",
        thirdPartyPrefix: "Custos de terceiros: ",
        agreementPrefix: "Acordo: ",
        verified: "Verificado",
        awaitingConfirmation: "A aguardar confirmação",
        advancePrefix: " · Adiantamento de 40%: ",
        awaitingVerification: "A aguardar verificação",
      },
      reviewSummary: {
        groups: [
          { title: "Negócio e contacto" },
          { title: "Objetivos e processo atual" },
          { title: "Trabalho selecionado e requisitos" },
          { title: "Responsabilidades e compromisso" },
          { title: "Notas finais e feedback da integração" },
        ],
        additionalTitle: "Detalhes adicionais do projeto",
        topicsToReview: " tópicos a rever",
        edit: "Editar",
        editBrief: "Editar o brief",
        openQuestions: "Perguntas em aberto e acompanhamentos",
        noFollowups: "Nenhuma sinalização de acompanhamento registada. Os detalhes opcionais sem resposta podem ser fornecidos mais tarde.",
      },
    },
    progress: {
      railLabel: "Progresso da integração",
      yourProjectBrief: "O seu brief de projeto",
      phasePrefix: "Fase ",
      phaseOfSuffix: " de ",
      answeredPercentSuffix: " respondidas",
      answeredLabel: "Perguntas respondidas",
      answeredValueText: "respondidas, ",
      forLaterValueText: " para mais tarde, ",
      pendingValueText: " pendentes de ",
      questionsValueText: " perguntas",
      answered: "respondidas",
      forLater: "para mais tarde",
      pending: "pendentes",
      yourPhases: "As suas fases",
      phaseNavLabel: "Fases e perguntas",
      questionsInPhase: "Perguntas nesta fase",
      selectToRevisit: "Selecione uma pergunta para voltar a ela.",
      review: "Revisão",
      reviewYourAnswers: "Rever as suas respostas",
      currentQuestionSuffix: ", pergunta atual",
      legendAnswered: "Respondida",
      legendForLater: "Para mais tarde",
      legendPending: "Pendente",
      railNote: "As suas fases adaptam-se ao seu projeto. Pode voltar a qualquer pergunta.",
      currentPhaseLabel: "Fase atual",
    },
    privacyNotice: {
      ariaLabel: "Como usamos as suas informações",
      heading: "As suas informações têm um propósito.",
      howWeCare: "Como cuidamos dos seus dados",
      previewNote: "Isto é uma pré-visualização. As suas respostas de exemplo são guardadas para poder experimentar o percurso e voltar a ele neste navegador. Use dados de negócio de exemplo.",
      retentionPrefix: "Durante quanto tempo guardamos os seus dados: ",
      contactPrefix: "Perguntas sobre as suas informações? ",
      paused: "A integração está temporariamente em pausa. Reveja as informações de privacidade atuais quando reabrir.",
      navLabel: "Informações de integração",
      privacyInformation: "Informações de privacidade",
      serviceTerms: "Condições de serviço",
    },
    portal: {
      myWorkspace: "O meu espaço de trabalho",
      signingOut: "A terminar sessão…",
      signOut: "Terminar sessão",
      yourProjectWorkspace: "O espaço de trabalho do seu projeto",
      clientPortal: "Portal de cliente Starter Shifter",
      signOutError: "Não foi possível terminar sessão. Tente novamente.",
      saveProgressError: "Não foi possível guardar o seu progresso. Tente novamente.",
      unableToSaveProgress: "Não foi possível guardar o seu progresso.",
    },
    questionField: {
      answerNow: "Responder agora",
      notSureYet: "Ainda não tenho a certeza",
      notApplicable: "Não aplicável",
      provideLater: "Fornecer mais tarde",
      requestHelp: "Pedir ajuda",
      preferNotToAnswer: "Prefiro não responder",
      required: "Obrigatório",
      optional: "Opcional",
      setEachStatus: "Defina o estado de cada item",
      chooseOne: "Escolha uma",
      chooseUpToPrefix: "Escolha até ",
      chooseAll: "Escolha todas as que se aplicam",
      chooseUpToSuffix: ".",
      pickWhatFits: "Escolha o que se adequa melhor. Pode adicionar contexto abaixo.",
      shortAnswer: "Uma resposta curta é suficiente. Pode adicionar mais detalhe mais tarde.",
      everydayWords: "Palavras simples são perfeitas. Algumas frases são suficientes.",
      shareWhatYouKnow: "Partilhe o que sabe. Pode pedir orientação abaixo.",
      skipIfPrefer: "Salte isto se preferir fornecê-lo mais tarde.",
      whyWeAsk: "Porque perguntamos",
      savedChoicePrefix: "A sua escolha guardada: ",
      savedChoiceSuffix: ". Estas opções foram removidas do formulário atualizado. A sua resposta é mantida; reveja as opções disponíveis antes de confirmar.",
      confirmAccuracy: "Confirmo estes detalhes e a minha autoridade para os partilhar.",
      confirmPrivacy: "Rever as informações de privacidade da integração.",
      yesIConfirm: "Sim, confirmo",
      requiredSuffix: " (obrigatório)",
      optionalSuffix: " (opcional)",
      chooseStatus: "Escolher o estado",
      nothingYet: "Nada ainda",
      notSure: "Sem certeza",
      ready: "Pronto",
      needsUpdating: "Necessita de atualização",
      needHelp: "Preciso de ajuda",
      searchOptionsPrefix: "Pesquisar opções para ",
      searchOptionsPlaceholder: "Pesquisar opções…",
      noMatchingChoices: "Nenhuma escolha correspondente. Tente outra palavra ou limpe a sua pesquisa.",
      somethingElse: "Outra coisa",
      addOwnOption: "Adicione a sua própria opção ou explique",
      countryOrRegion: "País ou região",
      searchCountry: "Pesquise ou introduza um país / uma região",
      timezone: "Fuso horário",
      searchTimezone: "Pesquise um fuso horário, ex. Europa/Lisboa",
      forFirstLaunch: "Para o primeiro lançamento",
      canWaitUntilLater: "Pode esperar até mais tarde",
      chooseOptionOrDescribe: "Escolha uma opção ou descreva abaixo",
      startWithUpToThree: "Comece com até três prioridades",
      ideasForFuture: "Ideias para uma fase futura",
      chooseApprox: "Escolha um valor aproximado",
      enterExact: "Introduza um valor exato",
      fewSentences: "Algumas frases são suficientes",
      oneExampleOrLink: "Um exemplo ou uma ligação para um documento",
      remove: "Remover",
      addAnother: "+ Adicionar outro",
      quickAnswersLabel: "Respostas rápidas",
      yourFirstPriority: "A sua primeira prioridade",
      chooseMainPriority: "Escolha a sua prioridade principal",
      notSureSeeOther: "Sem certeza? Veja outras formas de responder",
      changeAnswerSuffix: " · Alterar a resposta",
      addContactNote: "Adicione um contacto, um responsável ou uma nota de acompanhamento",
      addNoteLink: "Adicione uma nota curta ou uma ligação (opcional)",
      notePlaceholder: "Uma ligação para um documento, um esclarecimento, o nome de um colega ou a disponibilidade",
      workspaceMemberPrefix: "Membro do espaço de trabalho ",
      chooseAccess: "Escolha o acesso pedido",
      viewProject: "Ver o projeto",
      reviewAndComment: "Rever e comentar",
      supplyInputs: "Fornecer os elementos do projeto",
      needGuidance: "Preciso de orientação",
      removeMember: "Remover o membro",
      addAnotherPerson: "+ Adicionar outra pessoa",
      quickChoicesPrefix: "Escolhas rápidas para ",
      countries: [
        "Austrália", "Bangladesh", "Brasil", "Canadá", "China", "França", "Alemanha",
        "Índia", "Indonésia", "Irlanda", "Itália", "Japão", "Quénia", "Malásia", "México",
        "Nepal", "Países Baixos", "Nova Zelândia", "Nigéria", "Paquistão", "Filipinas",
        "Arábia Saudita", "Singapura", "África do Sul", "Espanha", "Sri Lanka",
        "Emirados Árabes Unidos", "Reino Unido", "Estados Unidos",
      ],
    },
    previewPending: [
      "Verifique o e-mail de contacto do projeto ou do espaço de trabalho quando criar a sua conta de cliente.",
      "Acorde o âmbito do projeto e conclua o acordo assinado.",
      "Peça à agência que verifique o adiantamento de 40% em relação à sua fatura acordada.",
    ],
  },

  projectBrief: {
    serviceOptions: [
      "E-commerce e sites",
      "Investigação e design",
      "Marketing e campanhas",
      "Automação e integrações",
      "Manutenção e desempenho",
    ],
    headerLine: "Starter Shifter — Brief de projeto",
    nameLabel: "O seu nome",
    emailLabel: "E-mail",
    companyLabel: "Empresa (opcional)",
    timingLabel: "Calendário (opcional)",
    timingPlaceholder: "Por exemplo, antes de uma data de lançamento",
    servicesLegend: "Em que poderíamos ajudar?",
    servicesDescription: "Selecione o que se adequa, ou deixe em aberto.",
    goalsLabel: "O que gostaria de tornar possível?",
    goalsPlaceholder: "Fale-nos do seu negócio, do que precisa e do resultado que tem em mente.",
    currentSetupLabel: "O que já está em vigor? (opcional)",
    currentSetupDescription: "Um site, uma loja, páginas sociais ou ferramentas de negócio existentes.",
    currentSetupPlaceholder: "Partilhe os sistemas, as plataformas ou as contas que já usa.",
    openEmailDraft: "Abrir o rascunho do e-mail",
    downloadBrief: "Transferir o brief de projeto",
    emailDraftReady: "O rascunho do seu e-mail está pronto a abrir. Reveja-o na sua aplicação de e-mail e envie-o quando estiver pronto.",
    downloadReady: "O seu brief de projeto está pronto nas suas transferências. Nada foi enviado à Starter Shifter.",
    briefFields: {
      name: "Nome: ",
      email: "E-mail: ",
      company: "Empresa: ",
      services: "Serviços: ",
      timing: "Calendário: ",
      notSpecified: "Não especificado",
      exploreOptions: "Vamos explorar as opções",
      projectGoals: "Objetivos do projeto:",
      alreadyInPlace: "O que já está em vigor:",
      disclaimer: "Este brief é um ponto de partida para a discussão, não um âmbito nem um orçamento acordados.",
    },
    emailSubjectPrefix: "Pedido de projeto — ",
    downloadFileName: "starter-shifter-brief-de-projeto.txt",
  },

  projects: [
    {
      title: "Conceito de loja",
      category: "E-commerce",
      description: "Um layout de loja ilustrativo com uma coleção de produtos e um caminho claro para a compra.",
      imageAlt: "Loja conceptual com uma faixa verde e sacos do quotidiano ilustrados",
      status: "Pré-visualização de conceito",
    },
    {
      title: "Conceito de espaço de operações",
      category: "Aplicação web",
      description: "Um espaço de trabalho ilustrativo que reúne encomendas, inventário e tarefas de expedição numa única vista.",
      imageAlt: "Painel de operações conceptual a mostrar uma tabela de encomendas e painéis de fluxo de trabalho",
      status: "Pré-visualização de conceito",
    },
    {
      title: "Conceito de site criativo",
      category: "Design de sites",
      description: "Um site editorial ilustrativo com tipografia arrojada e uma coleção de trabalhos focada.",
      imageAlt: "Site criativo conceptual com tipografia grande e obras escultóricas abstratas",
      status: "Pré-visualização de conceito",
    },
    {
      title: "Conceito de apoio ao cliente",
      category: "Fluxo de trabalho com IA",
      description: "Uma interface de apoio ilustrativa para conversas, perguntas comuns e transferências para a equipa.",
      imageAlt: "Espaço de apoio conceptual com uma lista de conversas e um chat de cliente",
      status: "Pré-visualização de conceito",
    },
  ],

  shared: {
    deliveryStageStatusLabels: {
      upcoming: "Próximo",
      "in-progress": "Em curso",
      complete: "Concluído",
      blocked: "Necessita de atenção",
    },
    defaultDeliveryStages: [
      { title: "O seu brief de projeto", description: "Partilhe o seu negócio, objetivos, conteúdo e requisitos. As suas respostas ajudam a moldar a discussão do projeto." },
      { title: "Acordo e ativação", description: "A sua agência verifica os dados de contacto, o acordo assinado, o adiantamento de 40% e as dependências do projeto antes da ativação." },
      { title: "Investigação e direção", description: "A investigação do negócio, do mercado e da concorrência estabelece a direção. Os prazos e os entregáveis seguem o seu âmbito acordado." },
      { title: "Design e feedback", description: "Explore o trabalho de design acordado, reveja os rascunhos e partilhe o seu feedback. O número de variantes e revisões segue o seu acordo." },
      { title: "Construir e ligar", description: "O site, o conteúdo, os fluxos de trabalho e as ligações suportadas acordados ganham forma. Os requisitos selecionados são confirmados no âmbito do projeto." },
      { title: "Rever e entregar", description: "Reveja os entregáveis acordados e prepare-se para a entrega. Os requisitos de lançamento e o apoio contínuo dependem do seu projeto." },
    ],
    workspaceViewNames: {
      overview: "Visão geral",
      brief: "Brief de projeto",
      journey: "Jornada do projeto",
      resources: "Marca e recursos",
      agreement: "Acordo e faturação",
    },
    questionStatusLabels: {
      answered: "Respondida",
      later: "Para mais tarde",
      pending: "Não respondida",
      attention: "Necessita de atenção",
      review: "Revisão",
    },
    answerStateLabels: {
      answered: "Responder agora",
      unknown: "Ainda não tenho a certeza",
      "not-applicable": "Não aplicável",
      deferred: "Fornecer mais tarde",
      help: "Fale connosco",
    },
    prerequisites: {
      briefLabel: "Brief de projeto",
      briefSubmitted: "O seu brief foi enviado.",
      briefDetail: "Conclua e envie os detalhes do seu projeto.",
      identityLabel: "Verificação do contacto",
      identityDetail: "Os e-mails de contacto do seu projeto e do espaço de trabalho.",
      agreementLabel: "Acordo assinado",
      agreementDetail: "Confirme o âmbito com a sua agência.",
      advanceLabel: "Adiantamento de 40%",
      advanceDetail: "Verificação da agência em relação à sua fatura acordada.",
      responsiblePrefix: "Responsável: ",
    },
    activity: {
      briefSaved: "Brief de projeto guardado",
      briefSubmitted: "Brief enviado",
      briefSubmittedDetail: "Os detalhes do seu projeto estão prontos para revisão",
      engagementUpdated: "Registo de compromisso atualizado",
      engagementUpdatedDetail: "Âmbito e pré-requisitos registados",
    },
    assetStatusLabels: {
      ready: "Pronto",
      "needs-updating": "Necessita de atualização",
      "needs-help": "Precisa de ajuda",
      "not-available": "Não disponível",
      recorded: "Registado no brief",
    },
    workspaceFallback: {
      businessName: "O seu próximo capítulo",
      description: "Um espaço dedicado ao seu negócio, ao seu brief e a tudo o que vem a seguir.",
    },
    notAnswered: "Não respondida",
    confirmed: "Confirmado",
    notConfirmed: "Não confirmado",
    firstPriorityPrefix: "Primeira prioridade: ",
  },
};
