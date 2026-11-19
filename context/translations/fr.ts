import type { TranslationDictionary } from "../i18n";

/** French (Français) localization. */
export const fr: TranslationDictionary = {
  brand: {
    homeAriaLabel: "Accueil Starter Shifter",
    tagline: "Votre entreprise, connectée",
    footerNote: "De votre première boutique en ligne aux flux de travail qui la soutiennent. Construit autour de votre entreprise.",
    footerWorldwide: "Nous travaillons avec des entreprises du monde entier.",
  },

  common: {
    skipToContent: "Aller au contenu",
    backToHome: "Retour à l'accueil",
    policyAwaitingApproval: "Politique en attente d'approbation",
    prepareProjectBrief: "Préparer un brief de projet",
    policyNavigationLabel: "Informations sur les politiques",
    privacy: "Confidentialité",
    cookies: "Cookies",
    serviceTerms: "Conditions de service",
    exploreServices: "Découvrir nos services",
    planYourProject: "Planifier votre projet",
    supportAndCare: "Assistance et suivi",
    viewAllProducts: "Voir tous les produits",
    getStarted: "Commencer",
    resourceNoteDefault: "Starter Shifter · Ressources",
    openNavigation: "Ouvrir la navigation",
    closeNavigation: "Fermer la navigation",
    loadingPage: "Chargement de la page",
    explorePrefix: "Explorer ",
    illustrationSuffix: " illustration",
    loading: {
      site: "Chargement de Starter Shifter",
      signInOptions: "Chargement des options de connexion",
      onboardingInformation: "Chargement de vos informations d'intégration",
      workspace: "Chargement de votre espace de travail",
      projectBrief: "Chargement de votre brief de projet",
    },
    opensInNewTab: "s'ouvre dans un nouvel onglet",
  },

  metadata: {
    home: {
      title: "Starter Shifter — Votre entreprise, connectée",
      description:
        "E-commerce, direction créative, automatisation et opérations connectées. Starter Shifter aide les entreprises à construire leur prochain chapitre en ligne, avec un périmètre défini selon leurs besoins.",
    },
    about: {
      title: "À propos — Starter Shifter",
      description:
        "Découvrez Starter Shifter, une agence qui aide les entreprises du monde entier à connecter leurs sites web, leur présence sociale et leurs opérations grâce à la recherche, au design, au développement et à l'automatisation.",
    },
    faq: {
      title: "FAQ — Starter Shifter",
      description:
        "Réponses sur les offres Basic et Pro de Starter Shifter, l'intégration, les étapes de livraison, les sites web, les intégrations, le suivi continu et la façon de démarrer un projet.",
    },
    howWeWork: {
      title: "Notre méthode — Starter Shifter",
      description:
        "Les étapes de livraison utilisées par Starter Shifter, de la découverte et du cadrage au design, à la construction, au lancement et au suivi continu, y compris les prérequis d'intégration et la première remise de recherche.",
    },
    products: {
      title: "Produits et modèles — Starter Shifter",
      description:
        "Découvrez les sites web, applications et expériences connectées de Starter Shifter. Les aperçus de concept sont étiquetés séparément du travail client terminé.",
    },
    support: {
      title: "Assistance et suivi — Starter Shifter",
      description:
        "Comment Starter Shifter gère la maintenance, l'assistance et l'amélioration continue après le lancement, y compris les limites de couverture de Basic et Pro.",
    },
    privacy: { title: "Informations de confidentialité — Starter Shifter" },
    cookies: { title: "Informations sur les cookies — Starter Shifter" },
    terms: { title: "Informations sur les conditions de service — Starter Shifter" },
    onboardingPrivacy: { title: "Vos informations d'intégration — Starter Shifter" },
    login: { title: "Rejoignez-nous | Starter Shifter" },
    dashboard: { title: "Espace client — Starter Shifter" },
    dashboardPreview: { title: "Votre espace de travail — Starter Shifter" },
    onboarding: { title: "Votre brief de projet — Starter Shifter" },
    onboardingPreview: { title: "Aperçu de l'intégration — Starter Shifter" },
  },

  navigation: {
    sections: [
      {
        label: "Services",
        items: [
          { title: "Sites e-commerce", description: "Des boutiques en ligne façonnées selon votre façon de vendre.", href: "/services/ecommerce" },
          { title: "Social et marketing", description: "SEO, e-mail et présence sociale, planifiés et livrés.", href: "/services/social-campaigns" },
          { title: "Chatbots et automatisation", description: "Les questions courantes trouvent réponse, le reste est orienté.", href: "/services/chatbots-automation" },
          { title: "Systèmes d'inventaire", description: "Une vue claire et fiable de votre stock.", href: "/services/inventory" },
          { title: "Expédition et commandes", description: "Moins d'étapes manuelles entre la commande et l'expédition.", href: "/services/shipping-orders" },
          { title: "Intégrations ERP et CRM", description: "Vos outils métier, qui fonctionnent ensemble.", href: "/services/erp-crm-integrations" },
          { title: "Maintenance et assistance", description: "Un suivi technique continu après le lancement.", href: "/services/maintenance-support" },
          { title: "Amélioration des performances", description: "Trouvez et traitez les goulets d'étranglement.", href: "/services/performance" },
          { title: "Recherche et direction créative", description: "Analyse du marché et maquettes Figma.", href: "/services/research-creative-direction" },
          { title: "Présentations et planification", description: "Une vue partagée de votre projet, très tôt.", href: "/services/project-planning" },
        ],
        footer: {
          text: "Basic à 2 500 $ en une fois. Pro à 2 500 $ plus 500 $/mois.",
          linkLabel: "Voir les tarifs",
          href: "#pricing",
        },
      },
      {
        label: "Ressources",
        items: [
          { title: "Notre méthode", description: "Les étapes de livraison, de la découverte au lancement.", href: "/how-we-work" },
          { title: "FAQ", description: "Les questions courantes, avec des réponses claires.", href: "/faq" },
          { title: "Produits et modèles", description: "Découvrez nos sites web et applications.", href: "/products" },
          { title: "Assistance et suivi", description: "De l'aide pour les projets après le lancement.", href: "/support" },
        ],
      },
    ],
    directLinks: [
      { title: "À propos", description: "Qui est Starter Shifter et comment nous travaillons.", href: "/about" },
      { title: "Tarifs", description: "Comparez la mise en place Basic et le suivi continu Pro.", href: "/#pricing" },
    ],
    cta: "Commencer",
    mainNavigationLabel: "Navigation principale",
    mobileNavigationLabel: "Navigation mobile",
  },

  footer: {
    ariaLabel: "Pied de page Starter Shifter",
    socialProfilesLabel: "Profils sociaux",
    policyNote: "Statut des politiques et informations actuelles.",
    navigation: [
      {
        key: "company",
        title: "Entreprise",
        links: [
          ["À propos", "/about"],
          ["Notre méthode", "/how-we-work"],
          ["Produits et modèles", "/products"],
          ["Offres et tarifs", "/#pricing"],
        ],
      },
      {
        key: "services",
        title: "Services",
        links: [
          ["Applications web", "/#services"],
          ["Réseaux sociaux", "/#services"],
          ["Flux de travail IA", "/#services"],
          ["Opérations connectées", "/#process"],
          ["Maintenance et croissance", "/#pricing"],
        ],
      },
      {
        key: "resources",
        title: "Ressources",
        links: [
          ["Connexion client", "/login"],
          ["Notre méthode", "/how-we-work"],
          ["FAQ", "/faq"],
          ["Brief de projet", "/project-brief"],
          ["Assistance et suivi", "/support"],
        ],
      },
      {
        key: "information",
        title: "Informations",
        links: [
          ["Confidentialité", "/policies/privacy"],
          ["Cookies", "/policies/cookies"],
          ["Conditions de service", "/policies/terms"],
        ],
      },
    ],
  },

  landing: {
    hero: {
      eyebrow: "Votre agence e-commerce et croissance digitale",
      titleLines: ["Votre prochain chapitre", "commence par une meilleure boutique."],
      description:
        "De votre première boutique en ligne aux systèmes qui la soutiennent. Nous réunissons design, e-commerce et opérations connectées, construits autour de votre entreprise.",
      primaryCta: "Construisons votre boutique",
      secondaryCta: "Découvrir nos services",
      note: "Votre entreprise. Votre périmètre. Où que vous soyez.",
    },
    services: {
      kicker: "Ce que nous faisons",
      titleLines: ["Beau à l'extérieur.", "Connecté à l'intérieur."],
      intro:
        "Votre présence en ligne. Votre voix sociale. Les flux de travail derrière. Trois services connectés, façonnés autour de votre entreprise.",
      cards: [
        { title: "Application web", text: "Sites et applications web, avec un design et un développement façonnés selon le fonctionnement de votre entreprise." },
        { title: "Réseaux sociaux et marketing", text: "Gestion du SEO, e-mail marketing et réseaux sociaux sur WhatsApp, LinkedIn, Pinterest et plus encore." },
        { title: "Flux de travail IA", text: "Outils connectés, automatisation des tâches et parcours de chat client qui font intervenir votre équipe quand il le faut." },
      ],
      illustrationLabels: {
        web: "Explorer l'illustration de l'application web",
        social: "Explorer l'illustration des réseaux sociaux",
        ai: "Explorer l'illustration du flux de travail IA",
      },
    },
    projects: {
      kicker: "Produits et modèles",
      titleLines: ["Un regard plus précis", "sur ce que nous construisons."],
      intro:
        "Sites web, applications et expériences connectées. Explorez la collection, un écran à la fois.",
      cta: "Voir tous les produits",
      showcaseLabel: "Vitrine des projets",
    },
    process: {
      kicker: "Comment nous vous mettons en ligne",
      titleLines: ["De la compréhension de votre entreprise", "à sa connexion en ligne."],
      intro:
        "Cinq étapes d'une présence numérique connectée. Nous convenons des services dont votre projet a besoin, puis nous construisons autour de ce périmètre.",
      linkLabel: "Lire le guide de livraison complet",
      steps: [
        {
          title: ["Recherche et", "direction"],
          description:
            "Nous apprenons à connaître votre entreprise, étudions votre marché et analysons la concurrence. Ces enseignements façonnent le plan et une première direction de design pour votre validation.",
          details: ["Recherche sur l'entreprise", "Analyse du marché", "Enseignements concurrentiels"],
          note: "La profondeur de la recherche et les livrables de design sont convenus pour votre projet.",
          phase: "Comprendre",
        },
        {
          title: ["Votre entreprise,", "construite en ligne"],
          description:
            "Nous concevons et construisons votre site ou application web sur Shopify ou WordPress, avec WooCommerce quand vous avez besoin d'une boutique. La plateforme et les fonctionnalités suivent le fonctionnement de votre entreprise.",
          details: ["Shopify ou WordPress", "Design et développement", "Lancement et remise"],
          note: "Vous fournissez le contenu métier, les détails produits, les accès aux comptes et les validations.",
          phase: "Construire",
        },
        {
          title: ["Une présence", "sociale"],
          description:
            "Nous mettons en place votre marketing digital : gestion du SEO, e-mail marketing et réseaux sociaux sur WhatsApp, LinkedIn, Pinterest et les autres canaux dont votre entreprise a besoin. L'objectif est de vous rendre plus facile à trouver et à comprendre.",
          details: ["Gestion du SEO", "E-mail marketing", "WhatsApp, LinkedIn et Pinterest"],
          note: "Basic inclut la mise en place marketing complète — SEO, e-mail et réseaux sociaux — comme travail ponctuel. Pro ajoute la génération de leads et le travail de croissance, sans volume de leads garanti.",
          phase: "Établir",
        },
        {
          title: ["Une IA qui vous aide", "à répondre"],
          description:
            "Nous configurons des chatbots pour les questions courantes des clients et des flux de support, connectés à vos canaux sociaux lorsque c'est possible. Les conversations qui nécessitent votre équipe sont transmises à une personne.",
          details: ["Chatbots clients", "Canaux sociaux pris en charge", "Passage à un humain"],
          note: "L'accès aux canaux, les FAQ validées et les limites d'utilisation du logiciel façonnent la configuration.",
          phase: "Automatiser",
        },
        {
          title: ["Connecté.", "Suivi."],
          description:
            "Nous maintenons et améliorons les systèmes convenus, et connectons les outils métier pris en charge : ERP pour les opérations et CRM pour les relations clients. Les flux d'expédition et de facturation peuvent faire partie de ces intégrations.",
          details: ["Maintenance et performance", "Connexions ERP et CRM", "Expédition et facturation"],
          note: "Les intégrations dépendent des capacités tierces. Le suivi continu est facturé mensuellement ; les frais tiers sont séparés.",
          phase: "Connecter et maintenir",
        },
      ],
    },
    about: {
      kicker: "Un peu à notre sujet",
      titleLines: ["Votre entreprise en ligne.", "Tout fonctionne ensemble."],
      intro: "Nous sommes Starter Shifter. Votre site web, votre présence sociale et vos flux de travail, construits pour fonctionner ensemble.",
      benefits: [
        { title: "De la clarté avant de construire", description: "Une recherche qui donne une direction à votre prochaine étape." },
        { title: "Vos outils, connectés", description: "Des connexions prises en charge. Moins d'étapes manuelles." },
        { title: "Votre entreprise, en ligne", description: "Un site web ou une boutique façonné autour de vous." },
        { title: "Une présence sociale cohérente", description: "Votre marque, portée dans les pages et les modèles." },
        { title: "Un support à visage humain", description: "L'IA pour la routine. Votre équipe quand ça compte." },
        { title: "Voir ce qui demande attention", description: "Trouvez les goulets d'étranglement. Concentrez-vous sur de meilleures performances." },
      ],
      ctaTitleLines: ["Rendons votre", "prochaine étape digitale."],
      ctaLabel: "Parler de votre projet",
    },
    pricing: {
      label: "Nos offres",
      title: "Choisissez le support dont vous avez besoin.",
      recommendedBadge: "Recommandé",
      plans: [
        {
          name: "Offre Basic",
          description: "La construction complète et la mise en place du marketing digital, livrées une seule fois.",
          price: "2 500 $",
          payment: "Paiement unique",
          billing: "Votre application et votre marketing, construits et remis.",
          includes: "Ce qui est inclus",
          features: [
            "Recherche entreprise, marché et concurrence",
            "Design Figma et direction créative",
            "Développement du site web ou de l'application e-commerce",
            "Gestion du SEO",
            "E-mail marketing",
            "Marketing réseaux sociaux — WhatsApp, LinkedIn, Pinterest et plus",
            "Mise en place du chatbot IA et de l'automatisation du support",
            "Mise en place des flux d'inventaire, d'expédition et de facturation",
            "Intégrations ERP et CRM prises en charge",
            "Lancement et remise",
          ],
          boundary:
            "Construction et mise en place marketing ponctuelles. Nous ne promettons pas de génération de leads ni de maintenance continue. Vous payez l'hébergement, les domaines, les dépenses publicitaires et les frais de paiement.",
          action: "Choisir l'offre Basic",
        },
        {
          name: "Offre Pro",
          description: "Tout Basic, plus une équipe pour le maintenir et le faire grandir.",
          price: "2 500 $",
          payment: "Mise en place unique",
          monthly: "500 $",
          monthlyPeriod: "/ mois",
          billing: "pour la maintenance et la génération de leads",
          includes: "Tout Basic, plus",
          features: [
            "Maintenance et support technique continus",
            "Amélioration et suivi des performances",
            "Génération de leads et gestion des campagnes",
            "Maintenir le SEO et le marketing à jour",
            "Stratégie et planification de croissance",
            "Traitement des demandes clients",
            "Gestion des chatbots et de l'automatisation",
            "Entretien continu des flux et des intégrations",
          ],
          boundary:
            "Nous gérons activement la génération de leads et aidons votre entreprise à grandir. Les volumes de leads ne sont pas garantis — si une approche ne fonctionne pas, nous la restructurons et en testons d'autres. Les dépenses publicitaires sont séparées.",
          action: "Choisir l'offre Pro",
        },
      ],
      terms:
        "Les livrables, quantités, outils pris en charge et la couverture mensuelle sont convenus avant le début du travail. Vous fournissez le contenu métier, les accès aux comptes et les validations. L'hébergement, les domaines, les logiciels, les licences, les frais d'utilisation, les dépenses publicitaires et les frais de paiement ou d'expédition sont à votre charge et distincts des honoraires de l'agence. Les services supplémentaires hors des trois groupes sont facturés séparément.",
      footerLink: "Voir ce que couvre le suivi continu",
    },
    faq: {
      kicker: "Un peu plus de clarté",
      titleLines: ["De bonnes questions.", "Des réponses claires."],
      intro: "Chaque entreprise part d'un point différent. Voici ce qu'il faut savoir avant de commencer ensemble.",
      linkLabel: "Parcourir toutes les FAQ",
      questions: [
        {
          question: "Qu'est-ce qui est inclus exactement ?",
          answer:
            "Basic couvre la construction complète et la mise en place du marketing digital comme travail ponctuel : votre site web ou application e-commerce, la gestion du SEO, l'e-mail marketing et le marketing réseaux sociaux sur WhatsApp, LinkedIn, Pinterest et d'autres canaux selon vos besoins. Pro ajoute tout Basic, plus 500 $ par mois pour la maintenance continue, les performances et la génération de leads. Les services hors de ces trois domaines sont facturés séparément.",
        },
        {
          question: "Quelle est la différence entre Basic et Pro ?",
          answer:
            "Basic coûte 2 500 $ en une fois et livre la construction complète de l'application et la mise en place marketing, puis la remise. Pro coûte 2 500 $ pour la même mise en place plus 500 $ par mois pour la maintenance continue, l'amélioration des performances et la génération de leads. Basic n'inclut ni la génération de leads ni la maintenance continue. Les volumes de leads ne sont garantis dans aucune des deux offres.",
        },
        {
          question: "Y a-t-il des frais supplémentaires ou cachés ?",
          answer:
            "L'hébergement, les domaines, les dépenses publicitaires, les frais de paiement et les autres dépenses tierces sont à votre charge, non inclus dans les honoraires de l'agence. Si vous avez besoin de services au-delà des trois domaines couverts, ou d'un travail hors du périmètre convenu, cela est facturé séparément.",
        },
        {
          question: "De quoi avez-vous besoin de notre part pour commencer ?",
          answer:
            "Un contrat signé, une avance de 40 % et les informations sur votre entreprise et votre projet. Vous complétez ensuite l'intégration et fournissez toute information ou document supplémentaire via votre tableau de bord — y compris les catalogues et images produits pour que nous puissions créer des maquettes précises.",
        },
        {
          question: "Combien de temps prendra notre projet ?",
          answer:
            "La première remise de recherche et d'une maquette Figma est visée sous 3 à 4 jours maximum après la fin de l'intégration. Ensuite, nous planifions deux appels Google Meet par semaine pour partager l'avancement jusqu'à ce que votre application soit construite et remise.",
        },
        {
          question: "Pouvez-vous connecter les outils que nous utilisons déjà ?",
          answer:
            "Nous proposons des intégrations entre boutiques, inventaire, expédition et systèmes métier comme les outils ERP et CRM. Nous examinons vos systèmes exacts, les accès disponibles et les limites de la plateforme avant de confirmer la compatibilité et le travail impliqué.",
        },
        {
          question: "Pouvez-vous nous aider après le lancement ?",
          answer:
            "Oui. Pro inclut 500 $ par mois pour la maintenance et le support continus : nous améliorons les performances, maintenons votre SEO et votre marketing à jour et travaillons à de meilleures ventes. Basic est ponctuel, mais chaque client ponctuel reste accompagné pendant tout le premier mois après l'intégration — nous gérons les modifications demandées et les corrections de bugs. Passé ce mois, si vous ne continuez pas avec Pro, une aide supplémentaire est facturée selon le problème et les services dont vous avez besoin.",
        },
        {
          question: "À qui appartiennent le site web et les comptes après la remise ?",
          answer:
            "À vous. Après la remise, vous gérez le site web, ses comptes et son contenu. Nous ne vous obligeons pas à poursuivre nos services, sauf si vous souhaitez un support continu.",
        },
        {
          question: "Garantissez-vous des leads ou des ventes ?",
          answer:
            "Nous ne pouvons pas promettre un chiffre précis, car les résultats dépendent surtout du marché. Ce que les clients Pro obtiennent, c'est une génération de leads active et continue : nous travaillons à obtenir des leads et des ventes, et si une approche ne fonctionne pas, nous la restructurons et en testons d'autres pour trouver ce qui convient à votre entreprise.",
        },
      ],
    },
    contact: {
      intro: "Votre prochain chapitre",
      titleLines: ["Faisons votre", "prochaine étape."],
      description:
        "Une meilleure boutique en ligne, une présence sociale plus forte ou des flux de travail connectés. Commencez par ce dont votre entreprise a besoin.",
      cta: "Planifier votre projet",
      dialogTitle: "Dites-nous ce que vous avez en tête.",
      dialogDescriptionWithEmail:
        "Créez un brief de projet court, puis ouvrez-le dans votre application de messagerie pour nous l'envoyer.",
      dialogDescriptionWithoutEmail:
        "Mettez vos idées dans un brief court que vous pouvez télécharger et partager. Ce formulaire enregistre un fichier sur votre appareil ; il n'envoie pas de demande.",
      secondaryLink: "Découvrir nos services",
    },
  },

  pages: {
    about: {
      eyebrow: "À propos de Starter Shifter",
      note: "Nous travaillons avec des entreprises du monde entier",
      titleLines: ["Votre entreprise.", "Son prochain chapitre"],
      titleMark: "en ligne.",
      lede:
        "Nous sommes Starter Shifter, une agence qui aide les entreprises à mettre leurs produits et opérations en ligne. Nous connectons le site web que voient vos clients aux outils et flux de travail qui se cachent derrière.",
      primaryCta: "Parlez-nous de votre entreprise",
      secondaryCta: "Découvrir nos offres",
      facts: [
        { label: "Focus", value: "Web, social et flux de travail IA" },
        { label: "Portée", value: "Entreprises du monde entier" },
        { label: "Façons de travailler", value: "Mise en place Basic ou support Pro" },
      ],
      statementEyebrow: "La version courte",
      statementTitle:
        "Nous connectons le site web que voient vos clients aux flux de travail sur lesquels s'appuie votre équipe.",
      statementParagraphs: [
        "Nous travaillons avec des entreprises du monde entier, dans tous les secteurs. Que vous établissiez une présence en ligne ou amélioriez une configuration existante, le point de départ est votre entreprise et ses besoins.",
        "Notre approche réunit recherche, design, développement et intégrations prises en charge dans un plan unique convenu, afin que chaque partie ait un objectif clair.",
      ],
      workLabel: "Ce que nous faisons",
      workTitleLines: ["Trois domaines.", "Un plan connecté."],
      workAside:
        "Trois domaines de travail, façonnés selon la façon dont votre entreprise vend, communique et opère.",
      workLink: "Découvrir nos services",
      services: [
        {
          title: "Applications web",
          description:
            "Sites web et boutiques e-commerce façonnés autour de vos produits et clients. Nous réunissons recherche, direction créative et développement sur Shopify ou WordPress avec WooCommerce, avec la plateforme et les fonctionnalités convenues pour votre projet.",
          tags: ["Shopify", "WordPress + WooCommerce", "Design et construction"],
        },
        {
          title: "Réseaux sociaux et marketing digital",
          description:
            "Gestion du SEO, e-mail marketing et marketing réseaux sociaux sur WhatsApp, LinkedIn, Pinterest et d'autres canaux selon vos besoins. Pour les projets Pro, nous convenons aussi des campagnes et de la génération de leads dont votre entreprise a besoin.",
          tags: ["SEO", "E-mail marketing", "WhatsApp, LinkedIn et Pinterest"],
        },
        {
          title: "Flux de travail IA",
          description:
            "Chatbots et automatisations prises en charge qui aident à répondre aux questions courantes, à orienter les demandes et à réduire le travail répétitif. Nous pouvons connecter l'inventaire, l'expédition, la facturation et les outils métier convenus lorsque les plateformes le permettent.",
          tags: ["Chatbots", "Support client", "Intégrations prises en charge"],
        },
      ],
      processLabel: "Notre méthode",
      processTitleLines: ["La recherche d'abord.", "Une voie claire."],
      processIntro:
        "Votre connaissance de l'entreprise et notre recherche guident le travail. Les décisions partagées maintiennent l'alignement du design, de la construction et de la remise.",
      gateLabel: "Avant le début du travail",
      gateItems: ["Contrat signé", "Avance de 40 %", "Informations entreprise et projet"],
      steps: [
        {
          title: "Comprendre votre entreprise",
          description:
            "Nous discutons de vos objectifs, produits, clients et systèmes existants, puis nous convenons des livrables, responsabilités, délais et coûts.",
        },
        {
          title: "Trouver une direction partagée",
          description:
            "La recherche entreprise, marché et concurrence alimente une maquette Figma de base. Vous validez la direction et partagez vos retours avant de passer à la construction et aux flux connectés convenus.",
        },
        {
          title: "Construire, lancer et planifier la suite",
          description:
            "Nous implémentons et testons le site web et les flux sélectionnés, avec votre contenu, vos accès et vos validations. La remise et tout travail de maintenance ou de croissance suivent la couverture convenue pour votre offre.",
        },
      ],
      scopeLabel: "Travailler ensemble",
      scopeTitleLines: ["Un périmètre clair.", "Des attentes partagées."],
      scopeIntro:
        "Avant le début du travail, nous définissons les services sélectionnés, ce que vous fournissez et ce qui reste hors des honoraires de l'agence.",
      scope: [
        {
          label: "Ce que vous recevez",
          description:
            "Basic couvre la construction complète de l'application plus le marketing digital — gestion du SEO, e-mail marketing et marketing réseaux sociaux — comme travail ponctuel. Pro ajoute la maintenance continue, l'amélioration des performances et la génération de leads.",
        },
        {
          label: "Ce que vous fournissez",
          description:
            "Le contenu convenu, les informations métier, les catalogues et images produits, les accès aux comptes et les validations. Les délais dépendent de ces éléments et des validations des plateformes tierces.",
        },
        {
          label: "Tenus à part",
          description:
            "Les abonnements de plateforme, l'hébergement, les domaines, les applications payantes, les frais d'utilisation, les dépenses publicitaires et les frais de paiement sont à votre charge, distincts des honoraires de l'agence.",
        },
      ],
      scopeCta: "Comparer Basic et Pro",
      scopeFooter:
        "Les livrables, quantités, outils pris en charge, révisions et la couverture de support sont convenus avant le début du travail.",
    },

    faq: {
      eyebrow: "Ressources / FAQ",
      note: "Les détails, avec des réponses claires",
      titleLines: ["De bonnes questions.", "Des réponses claires."],
      titleMark: "Des réponses claires.",
      description:
        "Les détails pratiques sur le périmètre, les tarifs, les délais, les intégrations et le support — écrits comme nous les expliquerions lors d'une première conversation.",
      facts: [
        { label: "Offres", value: "Basic et Pro" },
        { label: "Intégration", value: "Contrat, avance et informations" },
        { label: "Couverture", value: "Convenue par projet" },
      ],
      sectionIndex: "01",
      sectionLabel: "Questions courantes",
      sectionTitleLines: ["Des réponses directes,", "sans petits caractères."],
      sectionIntro:
        "Si votre question n'est pas ici, démarrez un brief de projet et dites-nous ce que vous cherchez à résoudre. Nous répondrons directement.",
      jumpTo: "Aller à",
      categoriesLabel: "Catégories de FAQ",
      groups: [
        {
          id: "faq-plans",
          label: "Offres et périmètre",
          questions: [
            {
              question: "Qu'est-ce que Starter Shifter ?",
              answer:
                "Starter Shifter est une agence qui aide les entreprises à mettre leurs produits et opérations en ligne. Nous travaillons sur les sites web et applications e-commerce, la présence sociale, les chatbots et l'automatisation, les intégrations et les systèmes qui se cachent derrière. Les clients peuvent être basés n'importe où, et chaque périmètre est façonné autour de l'entreprise.",
            },
            {
              question: "Quelle est la différence entre Basic et Pro ?",
              answer:
                "Basic coûte 2 500 $ en une fois. Il couvre la construction complète de l'application plus la mise en place du marketing digital : recherche et design, développement du site ou de l'application e-commerce, gestion du SEO, e-mail marketing et marketing réseaux sociaux sur WhatsApp, LinkedIn, Pinterest et d'autres canaux selon les besoins, plus la mise en place du chatbot et de l'automatisation, les intégrations opérationnelles prises en charge et le lancement. Vous gérez la génération de leads et le travail continu après la remise. Pro coûte 2 500 $ pour la même mise en place plus 500 $ par mois pour la maintenance continue, l'amélioration des performances, la génération de leads et le maintien à jour du SEO et du marketing. Les livrables et la couverture sont convenus à l'avance ; les volumes de leads ne sont pas garantis et les coûts tiers comme l'hébergement, les domaines, les dépenses publicitaires et les frais de paiement sont à votre charge.",
            },
            {
              question: "Pouvons-nous choisir seulement une partie d'une offre ?",
              answer:
                "Oui. Basic et Pro sont des points de départ pour les périmètres les plus courants. Si vous avez besoin d'un projet plus petit, plus grand ou différent, nous pouvons discuter d'un périmètre sur mesure. Le travail, le prix, les délais et les responsabilités sélectionnés sont convenus avant le début du travail.",
            },
            {
              question: "Y a-t-il des coûts au-delà du prix de l'offre ?",
              answer:
                "Oui. L'hébergement, les domaines, les dépenses publicitaires, les frais de traitement des paiements et les autres dépenses tierces sont à votre charge, distincts des honoraires de l'agence. Les abonnements de plateforme, les thèmes, les applications, les plugins et licences, les abonnements ERP, CRM, chatbot et autres logiciels, les frais d'utilisation, la licence des ressources et les frais d'expédition ou de traitement sont aussi de votre responsabilité. Les services hors des trois domaines couverts, ou le travail hors du périmètre convenu, sont facturés séparément.",
            },
            {
              question: "Garantissez-vous des leads, des ventes ou de la croissance ?",
              answer:
                "Nous ne pouvons pas promettre un nombre précis de leads ou de ventes — les résultats dépendent surtout du marché et de facteurs hors de notre contrôle. Ce que nous promettons pour Pro, c'est le travail lui-même : nous gérons activement la génération de leads et aidons votre entreprise à grandir, et si une approche ne produit pas de résultats, nous la restructurons et en testons d'autres pour trouver ce qui convient. Nous y travaillerons avec vous, pas seulement en vous remettant une configuration.",
            },
            {
              question: "Comment fonctionne le paiement ?",
              answer:
                "L'intégration suit un contrat commun signé et une avance de 40 %, ainsi que les informations sur votre entreprise et votre projet. Le calendrier du paiement restant et les autres conditions commerciales sont définis dans votre contrat. Basic est un paiement unique ; Pro combine des frais de mise en place et un abonnement mensuel. Les autres conditions de paiement ou légales sont convenues individuellement.",
            },
          ],
        },
        {
          id: "faq-process",
          label: "Processus et délais",
          questions: [
            {
              question: "De quoi avez-vous besoin de notre part pour commencer ?",
              answer:
                "Un contrat commun signé, une avance de 40 % et les informations sur votre entreprise et votre projet. Selon le périmètre, nous pouvons aussi avoir besoin d'informations produits, de ressources de marque, d'accès aux outils existants, de politiques, de règles fiscales et d'expédition, et d'un contact capable de valider et d'approuver le travail.",
            },
            {
              question: "Combien de temps prendra notre projet ?",
              answer:
                "La première remise de recherche et d'une maquette Figma est visée sous 3 à 4 jours maximum après la fin de l'intégration. La construction complète dépend ensuite du périmètre, des exigences techniques, de la disponibilité du contenu, des validations tierces et des cycles de relecture. Nous planifions deux appels Google Meet par semaine pour partager l'avancement, et nous convenons des jalons et des délais dans votre proposition.",
            },
            {
              question: "Quelle est la première remise prévue ?",
              answer:
                "Après le contrat signé, l'avance de 40 % et les informations entreprise/projet complètes, nous visons une première remise sous 3 à 4 jours avec une recherche entreprise, marché et concurrence, plus une maquette Figma de base avec des variantes. Le point de départ exact du délai, la profondeur de la recherche, le nombre de variantes et le quota de révisions sont confirmés pour votre projet. La remise est une étape de définition de la direction, pas le site terminé ni toutes les intégrations.",
            },
            {
              question: "Comment fonctionnent les révisions ?",
              answer:
                "Vous relisez le travail convenu aux points de décision de votre périmètre et partagez des retours consolidés. Le quota de révisions est convenu avant le début du travail. Si une demande change le périmètre convenu ou ajoute du travail, nous définissons le travail, le prix et les délais supplémentaires avant de continuer.",
            },
            {
              question: "Que se passe-t-il si notre contenu ou nos accès arrivent en retard ?",
              answer:
                "Les délais dépendent des éléments que nous convenons. Si le contenu, les accès aux comptes, les validations ou les réponses tierces arrivent en retard, le calendrier peut changer. Nous signalons la dépendance et convenons d'un plan révisé plutôt que d'absorber le retard en silence.",
            },
          ],
        },
        {
          id: "faq-build",
          label: "Sites web et intégrations",
          questions: [
            {
              question: "Sur quelles plateformes construisez-vous ?",
              answer:
                "Nous construisons des sites web et applications e-commerce sur Shopify ou WordPress, avec WooCommerce lorsqu'une boutique est nécessaire. Si une autre plateforme ou un autre créateur de site convenait mieux, nous examinons le support et la faisabilité avant de nous engager. L'approche de plateforme est confirmée dans votre proposition.",
            },
            {
              question: "Pouvez-vous refondre ou migrer un site existant ?",
              answer:
                "Nous pouvons discuter d'une refonte ou d'une migration, mais elle n'est pas automatiquement incluse dans Basic ou Pro. Nous examinons d'abord le site, le contenu, les produits, les intégrations et les redirections actuels. Le périmètre, les risques et le prix de la migration sont convenus séparément.",
            },
            {
              question: "Pouvez-vous connecter les outils que nous utilisons déjà ?",
              answer:
                "Nous proposons des intégrations entre boutiques, inventaire, expédition, facturation et systèmes métier comme les outils ERP et CRM. La compatibilité dépend des systèmes, versions, accès, API et limites de plateforme exacts. Nous les examinons avant de confirmer ce qui peut être connecté et ce que le travail implique.",
            },
            {
              question: "Construisez-vous des applications mobiles natives ?",
              answer:
                "Notre travail confirmé concerne les sites web et applications web. Si vous envisagez une application mobile native, signalez-le tôt pour que nous puissions confirmer si elle s'intègre au projet. Elle n'est pas supposée faire partie d'une construction web ou e-commerce.",
            },
            {
              question: "Pouvez-vous configurer des chatbots et l'automatisation sociale ?",
              answer:
                "Oui, comme configuration convenue. Nous concevons les cas d'usage, connectons les canaux pris en charge, utilisons des sources de connaissance validées, fixons des limites et organisons un passage à un humain quand c'est nécessaire. Le support exact des canaux, le volume de conversations, les autorisations et les coûts d'utilisation sont confirmés pendant la faisabilité. Nous ne promettons pas un support entièrement autonome ni tous les réseaux sociaux.",
            },
          ],
        },
        {
          id: "faq-after-launch",
          label: "Après le lancement",
          questions: [
            {
              question: "Pouvez-vous nous aider après le lancement ?",
              answer:
                "Oui. Pro inclut la maintenance et le support continus pour 500 $ par mois, en plus de ses frais de mise en place de 2 500 $. Nous améliorons les performances, maintenons votre SEO et votre marketing à jour et travaillons à de meilleures ventes. Basic est une mise en place ponctuelle, mais chaque client ponctuel reste accompagné pendant tout le premier mois après l'intégration — nous gérons les modifications demandées et les corrections de bugs. Passé ce premier mois, si vous ne continuez pas avec Pro, une aide supplémentaire est facturée selon le problème et les services dont vous avez besoin.",
            },
            {
              question: "Que couvre la maintenance ?",
              answer:
                "La couverture typique peut inclure des contrôles de routine, les mises à jour applicables et les contrôles de compatibilité, les corrections de bugs, la surveillance, les tâches de sauvegarde et de récupération lorsque convenues, et le traitement du support. La liste exacte dépend de vos systèmes et de la couverture que vous achetez. Les nouvelles fonctionnalités et le travail hors de cette couverture nécessitent leur propre périmètre.",
            },
            {
              question: "Proposez-vous un support 24/7 ou un délai de réponse garanti ?",
              answer:
                "Nous ne publions pas de promesse universelle de 24/7 ni de délai de réponse. Les horaires, canaux, capacités, objectifs de réponse et l'escalade sont convenus dans votre périmètre de support. Si vous avez besoin d'un niveau de service précis, signalez-le avant le projet afin que nous puissions confirmer s'il peut être tenu.",
            },
            {
              question: "À qui appartiennent le site web et les comptes après la remise ?",
              answer:
                "À vous. Après la remise, vous gérez le site web, ses comptes et son contenu. Nous ne vous obligeons pas à poursuivre nos services, sauf si vous souhaitez un support continu. Les comptes de plateforme, les licences et les services tiers peuvent rester soumis à leurs propres conditions.",
            },
            {
              question: "Pouvez-vous gérer nos publicités et la génération de leads ?",
              answer:
                "Pro inclut la génération de leads et le travail de campagne gérés par l'agence dans le périmètre convenu. Basic exclut la génération de leads gérée par l'agence. Nous travaillons activement à obtenir des leads et des ventes, et si une approche ne fonctionne pas, nous la restructurons et en testons d'autres. Les dépenses publicitaires sont toujours à votre charge, distinctes des honoraires de l'agence, et les volumes de leads ne sont pas garantis — les résultats dépendent du marché. Les canaux, le périmètre de campagne, les quantités de contenu et la fréquence des rapports sont convenus à l'avance.",
            },
          ],
        },
        {
          id: "faq-working",
          label: "Travailler ensemble",
          questions: [
            {
              question: "Comment démarrer un projet ?",
              answer:
                "Commencez par un brief de projet sur ce site. Nous l'utilisons pour comprendre votre entreprise et vos objectifs, puis nous discutons du bon périmètre. Si c'est adapté, vous recevez une proposition avec les livrables, les exclusions, les tarifs, les délais et les responsabilités. Le travail commence après le contrat signé, l'avance de 40 % et les informations du projet.",
            },
            {
              question: "Travaillez-vous avec des entreprises hors de votre pays ?",
              answer:
                "Oui. Starter Shifter travaille avec des entreprises du monde entier. Nous ne revendiquons pas de couverture légale, fiscale ou de plateforme locale sur tous les marchés, donc les exigences propres à votre juridiction sont confirmées pour votre projet.",
            },
            {
              question: "Comment gérez-vous nos informations ?",
              answer: {
                before:
                  "Nous utilisons les informations que vous partagez pour comprendre votre entreprise et préparer ou livrer les services convenus. Nous ne vendons pas votre brief et ne le partageons pas avec d'autres entreprises pour leur propre usage. Notre ",
                linkLabel: "politique de confidentialité",
                linkHref: "/policies/privacy",
                after:
                  " explique le brief de projet et le portail client actuels, et identifie ce qui est encore en attente d'approbation.",
              },
            },
            {
              question: "Et si nous ne savons pas ce dont nous avons besoin ?",
              answer:
                "C'est un point de départ normal. Partagez le problème métier et ce qui est déjà en place. Nous pouvons aider à identifier le plus petit périmètre raisonnable, y compris si la recherche ou une étape de découverte devrait venir en premier. Vous n'avez pas besoin de choisir une offre avant la première conversation.",
            },
            {
              question: "Le brief de projet est-il un contrat ou un devis ?",
              answer:
                "Non. Le brief de projet est un point de départ pour la discussion. Il ne crée pas d'accord, ne réserve pas de temps et ne fixe pas de prix. Une proposition et un contrat signé définissent le périmètre et les conditions commerciales.",
            },
          ],
        },
      ],
    },

    howWeWork: {
      eyebrow: "Ressources / Notre méthode",
      note: "La livraison, expliquée clairement",
      titleLines: ["Une voie claire de la première conversation jusqu'au"],
      titleMark: "suivi continu.",
      description:
        "Chaque projet est différent, mais la façon de le traverser ne l'est pas. Voici les étapes que nous utilisons pour comprendre votre entreprise, convenir du périmètre, construire le travail et soutenir la suite.",
      facts: [
        { label: "Point de départ", value: "Contrat, avance de 40 % et informations" },
        { label: "Première remise", value: "Recherche et direction Figma" },
        { label: "Façons de travailler", value: "Mise en place Basic ou support Pro" },
      ],
      prerequisitesTitleLines: ["L'intégration commence quand", "les fondations sont claires."],
      prerequisitesLabel: "Le point de départ",
      prerequisitesIntro:
        "L'intégration suit trois prérequis. Ils protègent les deux parties : le périmètre est compris, l'engagement est réel et nous avons assez de contexte pour commencer un travail utile.",
      prerequisites: [
        {
          title: "Un contrat commun signé",
          description:
            "Le contrat consigne le périmètre, les responsabilités et les conditions commerciales convenus. Le travail ne commence qu'après sa signature.",
        },
        {
          title: "Une avance de 40 %",
          description:
            "L'avance confirme le projet et nous permet de réserver du temps de livraison. Les conditions du paiement restant sont définies dans votre contrat.",
        },
        {
          title: "Informations entreprise et projet",
          description:
            "Nous avons besoin d'assez de contexte sur votre entreprise, vos objectifs et votre configuration existante pour démarrer la recherche et l'intégration.",
        },
      ],
      prerequisitesFootNote:
        "Avant le paiement, votre proposition définit les services sélectionnés, les livrables, les exclusions, les délais, les responsabilités et les coûts. Un travail supplémentaire nécessite une décision explicite sur le périmètre, le prix et les délais.",
      stagesTitleLines: ["Huit étapes, façonnées selon", "le travail dont vous avez réellement besoin."],
      stagesLabel: "Le parcours de livraison",
      stagesIntro:
        "Ces étapes décrivent notre fonctionnement. Votre proposition confirme lesquelles s'appliquent, ce qui est inclus et à quoi ressemble l'achèvement pour votre projet.",
      stages: [
        {
          title: "Découverte et qualification",
          description:
            "Nous discutons de vos objectifs, systèmes actuels, contraintes et de ce à quoi ressemblerait le succès. L'objectif est de comprendre le problème avant de proposer une construction.",
          bring: "Objectifs, configuration existante, décideurs",
          output: "Un résumé de découverte ou une prochaine étape recommandée",
        },
        {
          title: "Périmètre et proposition",
          description:
            "Nous définissons les livrables, les exclusions, l'approche de plateforme, les tarifs, les délais et les responsabilités dans une proposition écrite.",
          bring: "Accès aux détails du système et réponses de faisabilité à temps",
          output: "Une proposition que vous pouvez relire et approuver",
        },
        {
          title: "Accord et intégration",
          description:
            "Une fois le contrat signé, l'avance reçue et les informations du projet complètes, l'intégration commence et nous démarrons le travail convenu.",
          bring: "Contrat signé, avance de 40 %, informations entreprise",
          output: "Un projet actif et un point de départ partagé",
        },
        {
          title: "Recherche initiale et maquette Figma",
          description:
            "Nous présentons une recherche entreprise, marché et concurrence avec une maquette Figma de base et des variantes à relire.",
          bring: "Retours sur la direction et les révisions convenues",
          output: "Une direction de design sélectionnée à porter en implémentation",
        },
        {
          title: "Design et implémentation",
          description:
            "Nous construisons le site, l'application, les campagnes ou les intégrations convenus. Les capacités de la plateforme et les délais de réponse tiers façonnent ce qui est possible.",
          bring: "Contenu, données produit, accès aux comptes, validations",
          output: "Le travail convenu, construit et prêt à relire",
        },
        {
          title: "Tests et relecture client",
          description:
            "Nous vérifions la fonctionnalité convenue et documentons les problèmes. Vous testez les parcours métier importants et confirmez l'acceptation ou une liste de révisions bornée.",
          bring: "Comptes de test, données représentatives, retours",
          output: "Une construction testée et une liste claire d'éléments restants",
        },
        {
          title: "Lancement et remise",
          description:
            "Nous déployons ou activons le travail approuvé et transférons la documentation, les accès et la formation convenus.",
          bring: "Validation du lancement et disponibilité des domaines et comptes",
          output: "Un travail en production et une remise convenue",
        },
        {
          title: "Support et amélioration continus",
          description:
            "Si vous avez acheté une couverture continue, nous maintenons, gérons, rapportons ou améliorons les systèmes convenus. Basic n'inclut pas la gestion continue.",
          bring: "Contacts, décisions et apports récurrents",
          output: "Le travail continu défini dans votre périmètre de support",
        },
      ],
      youBring: "Vous fournissez",
      output: "Résultat",
      stagesFootNote:
        "La correction des défauts, la maintenance et le développement de nouvelles fonctionnalités sont des catégories de travail distinctes. Chacune est traitée selon le périmètre qui s'y applique, plutôt que supposée incluse.",
      handoffTitleLines: ["Une direction partagée,", "avant de construire."],
      handoffLabel: "La première remise",
      handoffIntro:
        "La remise initiale vise à vous donner quelque chose de concret auquel réagir : une recherche qui alimente le plan et une maquette de design avec des options.",
      handoffCards: [
        {
          title: "Recherche entreprise, marché et concurrence",
          description:
            "Nous étudions votre entreprise, le segment où vous opérez et les alternatives que vos clients peuvent envisager. Les conclusions façonnent le plan et la direction de design.",
        },
        {
          title: "Une maquette Figma de base",
          description:
            "La maquette présente des variantes à relire, pour que vous puissiez choisir une direction et donner des retours ciblés avant l'implémentation.",
        },
        {
          title: "Un point de décision, pas une construction finie",
          description:
            "Vous sélectionnez une direction et demandez les révisions convenues. L'implémentation qui suit est une étape séparée avec ses propres points de relecture et d'approbation.",
        },
        {
          title: "Ce qu'elle ne promet pas",
          description:
            "Cette remise n'est pas le site terminé, ni tous les éléments, ni toutes les intégrations. La profondeur de la recherche et le périmètre du design correspondent au temps et aux informations disponibles.",
        },
      ],
      handoffNote:
        "L'intention déclarée est une première remise sous 3 à 4 jours maximum après le contrat signé, l'avance de 40 % et les informations entreprise/projet complètes. Pendant la construction, nous planifions deux appels Google Meet par semaine pour partager l'avancement. Le point de départ exact du délai, la profondeur de la recherche, le nombre de variantes et le quota de révisions sont confirmés dans votre proposition.",
      workingTitleLines: ["Des responsabilités claires.", "Moins de surprises."],
      workingLabel: "Travailler ensemble",
      workingIntro:
        "Un bon projet ne concerne pas seulement ce que nous construisons. Il s'agit aussi de qui fournit quoi, qui l'approuve et quels coûts restent hors des honoraires de l'agence.",
      workingTogether: [
        {
          title: "Ce que vous fournissez",
          items: [
            "Les informations complètes sur votre entreprise et votre projet, complétées pendant l'intégration",
            "Contenu métier, données produit, catalogues et images produit",
            "Accès aux comptes et contacts techniques",
            "Politiques, règles fiscales, détails d'expédition et validations",
            "Un décideur pour les relectures et l'approbation finale",
          ],
        },
        {
          title: "Ce que nous gérons",
          items: [
            "La recherche, le design et l'implémentation convenus",
            "Les intégrations et les tests pris en charge",
            "Le lancement, la documentation et la remise",
            "Tout travail continu acheté séparément",
          ],
        },
        {
          title: "Tenus à part",
          items: [
            "Hébergement, domaines, thèmes, applications et licences",
            "Abonnements ERP, CRM, chatbot et autres logiciels",
            "Traitement des paiements, usage et frais d'expédition",
            "Dépenses publicitaires et licence des ressources tierces",
          ],
        },
      ],
      workingFootNoteBefore:
        "Les livrables, quantités, outils pris en charge, limites de révision et la capacité de support sont convenus avant le début du travail. Voir ",
      workingFootNoteLink: "Assistance et suivi",
      workingFootNoteAfter: " pour savoir comment la couverture continue est gérée.",
    },

    products: {
      eyebrow: "Ressources / Produits et modèles",
      note: "Sites web, applications et systèmes",
      titleLines: ["Un regard plus précis", "sur ce que nous construisons."],
      titleMark: "construisons.",
      description:
        "Sites web, applications et expériences connectées. Explorez la collection, les catégories de travail qui la sous-tendent et comment nous étiquetons la différence entre un concept et un travail client terminé.",
      facts: [
        { label: "Focus", value: "Sites web, applications et systèmes" },
        { label: "Collection", value: "Aperçus de concept" },
        { label: "Politique de preuve", value: "Travail approuvé uniquement" },
      ],
      workTitleLines: ["Trois domaines.", "Une expérience connectée."],
      workLabel: "Le travail",
      workIntro:
        "La plupart des projets touchent plus d'un domaine. Une boutique peut avoir besoin d'une vue opérations ; un flux de support peut avoir besoin d'un site web et d'une connexion CRM derrière.",
      buildAreas: [
        {
          title: "Sites web et e-commerce",
          description:
            "Des boutiques et sites métier façonnés selon votre façon de vendre, avec catalogue, paiement et contenu construits sur une plateforme convenue.",
          tags: ["Shopify", "WordPress + WooCommerce", "Design et construction"],
        },
        {
          title: "Applications web et opérations",
          description:
            "Des outils internes et des applications client qui transforment commandes, inventaire et systèmes métier connectés en flux de travail plus clairs.",
          tags: ["Tableaux de bord", "Flux de travail", "Connexions ERP et CRM"],
        },
        {
          title: "Expériences IA et automatisation",
          description:
            "Chatbots, flux de support et automatisations prises en charge qui répondent aux questions courantes, orientent les demandes et réduisent le travail répétitif.",
          tags: ["Chatbots", "Passage à un humain", "Intégrations prises en charge"],
        },
      ],
      collectionTitleLines: ["Des concepts aujourd'hui.", "Des preuves une fois approuvées."],
      collectionLabel: "La collection",
      collectionIntroWithPreviews:
        "La collection montre actuellement des concepts de design. Ce sont des aperçus illustratifs ; les détails et captures des projets terminés n'apparaîtront que lorsqu'ils seront fournis et approuvés.",
      collectionIntroWithoutPreviews:
        "Explorez la collection de sites web, d'applications et d'expériences connectées.",
      visitProject: "Visiter le projet",
      collectionFootNote:
        "Les aperçus de concept illustrent une direction ; ce ne sont pas des résultats clients ni des études de cas publiées. Nous ne publions pas de noms de clients, logos, témoignages ou métriques sans autorisation et vérification.",
    },

    support: {
      eyebrow: "Ressources / Assistance et suivi",
      note: "De l'aide après le lancement",
      titleLines: ["Un support qui maintient", "le travail en état de marche."],
      titleMark: "en état de marche.",
      description:
        "Le lancement est un jalon, pas la ligne d'arrivée. Voici comment fonctionnent le suivi, la maintenance et l'amélioration continus après la mise en production de votre projet — et ce qui reste hors d'un périmètre de support convenu.",
      facts: [
        { label: "Basic", value: "Mise en place unique" },
        { label: "Pro", value: "2 500 $ + 500 $/mois" },
        { label: "Couverture", value: "Convenue par projet" },
      ],
      actionCta: "Planifier votre projet",
      actionSecondary: "Connexion à votre espace de travail",
      plans: [
        {
          name: "Basic",
          price: "2 500 $",
          payment: "Mise en place unique",
          description:
            "La construction complète et la mise en place du marketing digital, livrées une fois et remises. Basic n'inclut pas la gestion continue.",
          items: [
            "La construction complète de l'application et le lancement",
            "Gestion du SEO, e-mail marketing et marketing réseaux sociaux",
            "Mise en place du chatbot et de l'automatisation",
            "Remise des accès et de la documentation convenus",
            "Support du premier mois pour les modifications et corrections de bugs",
          ],
        },
        {
          name: "Pro",
          price: "2 500 $",
          payment: "Mise en place + 500 $ / mois",
          description:
            "La base Basic plus la maintenance continue, l'amélioration des performances, la génération de leads et le maintien à jour du SEO et du marketing.",
          items: [
            "Maintenance et support technique continus",
            "Amélioration et suivi des performances",
            "Génération de leads et gestion des campagnes",
            "Maintien à jour du SEO et du marketing",
            "Entretien des chatbots et des flux de travail",
          ],
        },
      ],
      waysTitleLines: ["Deux façons de maintenir", "les choses en mouvement."],
      waysLabel: "Après le lancement",
      waysIntro:
        "Basic est une construction ponctuelle. Pro ajoute une relation continue. Aucune des deux offres ne signifie un travail illimité ; les systèmes couverts, la capacité et la cadence sont convenus à l'avance.",
      waysFootNote:
        "Le forfait mensuel de Pro couvre le travail continu convenu, y compris la génération active de leads — lorsqu'une approche ne produit pas de résultats, nous la restructurons et en testons d'autres. Les dépenses publicitaires, les abonnements tiers et les frais d'usage sont à votre charge. Les volumes de leads et les résultats de croissance ne sont pas garantis.",
      coverageTitleLines: ["Le travail derrière", "« le maintenir en marche »."],
      coverageLabel: "Couverture",
      coverageIntro:
        "Le support peut signifier des choses différentes selon les systèmes impliqués. Voici les domaines que nous pouvons couvrir lorsqu'ils sont inscrits dans votre périmètre de support.",
      coverage: [
        {
          title: "Maintenance et mises à jour",
          description:
            "Contrôles de routine, mises à jour applicables et contrôles de compatibilité pour les systèmes convenus. La cadence exacte est fixée dans votre périmètre de support.",
        },
        {
          title: "Corrections de bugs",
          description:
            "Correction des défauts de la construction convenue. Un défaut est différent d'une nouvelle fonctionnalité ou d'un changement du périmètre convenu.",
        },
        {
          title: "Performance",
          description:
            "Surveillance et améliorations convenues de la vitesse, de la fiabilité ou des flux couverts par votre offre. Les objectifs sont propres à chaque projet.",
        },
        {
          title: "Intégrations et données",
          description:
            "Entretien des connexions ERP, CRM, inventaire, expédition et facturation prises en charge, y compris la surveillance et la gestion des erreurs convenues.",
        },
        {
          title: "Sauvegarde et récupération",
          description:
            "Tâches de sauvegarde et de récupération lorsque convenues et prises en charge par la plateforme. Les responsabilités et attentes de récupération sont documentées.",
        },
        {
          title: "Traitement du support",
          description:
            "Une voie claire pour les questions et problèmes, avec tri, objectifs de réponse convenus et escalade pour les systèmes du périmètre.",
        },
      ],
      coverageFootNote:
        "La liste exacte dépend de votre combinaison de plateformes, d'intégrations et de la couverture achetée. La maintenance, la correction des défauts et le développement de nouvelles fonctionnalités sont traités comme des catégories de travail distinctes.",
      requestTitleLines: ["Une voie claire", "vers une vraie réponse."],
      requestLabel: "Quand quelque chose demande attention",
      requestStepLabel: "Demande",
      requestIntro:
        "Le support fonctionne mieux quand la demande est précise et arrive au bon endroit. Voici la forme d'une demande utile.",
      requestSteps: [
        {
          title: "Utilisez le canal convenu",
          description:
            "Envoyez la demande par le canal de support confirmé pour votre projet, afin qu'elle arrive au bon endroit et puisse être suivie.",
        },
        {
          title: "Incluez le détail utile",
          description:
            "Décrivez ce qui s'est passé, où, ce que vous attendiez et les étapes pour le reproduire. Les captures ou les liens aident.",
        },
        {
          title: "Nous trions et répondons",
          description:
            "Nous confirmons s'il s'agit d'un défaut, d'une maintenance ou d'un nouveau travail, puis convenons de la prochaine étape. Le travail hors périmètre reçoit son propre devis.",
        },
      ],
      upFrontTitle: "Ce que nous convenons à l'avance",
      upFrontDescription:
        "Les horaires, canaux, capacités, objectifs de réponse et l'escalade sont confirmés dans votre périmètre de support. Nous ne publions pas de promesse universelle de 24/7 ni de délai de réponse.",
      requestNote:
        "Si vous travaillez déjà avec nous, utilisez le canal de support convenu pour votre projet. Si vous ne savez pas quel canal s'applique, demandez à votre contact habituel avant d'envoyer des informations sensibles.",
      boundariesTitleLines: ["Ce qui reste hors", "d'un périmètre convenu."],
      boundariesLabel: "Limites",
      boundariesIntro:
        "Savoir ce qui n'est pas inclus est aussi utile que savoir ce qui l'est. Ces éléments sont facturés séparément plutôt qu'absorbés dans le support de routine.",
      separateLabel: "Séparé",
      boundaries: [
        {
          title: "Nouvelles fonctionnalités et refontes",
          description:
            "Les nouvelles fonctionnalités, changements structurels, migrations et refontes sont séparés de la maintenance de routine. Ils nécessitent leur propre périmètre, prix et délais.",
        },
        {
          title: "Coûts tiers",
          description:
            "L'hébergement, les domaines, les thèmes, les applications, les licences, les abonnements logiciels, les frais d'usage, les dépenses publicitaires et les frais de paiement ou d'expédition sont à votre charge, distincts des honoraires de l'agence.",
        },
        {
          title: "Travail sans périmètre de support",
          description:
            "Basic est une mise en place unique avec un support du premier mois pour les modifications demandées et les corrections de bugs. Passé ce mois, si vous ne continuez pas avec Pro, une aide supplémentaire est facturée selon le problème et les services dont vous avez besoin.",
        },
      ],
      boundariesFootNoteBefore:
        "Les livrables, la capacité, les objectifs de réponse et les systèmes couverts sont confirmés avant le début du travail. Voir ",
      boundariesLinkOneLabel: "notre méthode",
      boundariesLinkOneHref: "/how-we-work",
      boundariesFootNoteMiddle: " ou lire la ",
      boundariesLinkTwoLabel: "FAQ support",
      boundariesLinkTwoHref: "/faq#faq-after-launch",
      boundariesFootNoteAfter: ".",
    },

    policies: {
      privacy: {
        title: "Informations de confidentialité.",
        description:
          "La politique de confidentialité complète de Starter Shifter est en attente d'approbation. Les informations ci-dessous décrivent la fonctionnalité actuelle de brief de projet ; il ne s'agit pas d'une politique de confidentialité complète.",
        sections: [
          {
            heading: "Votre brief de projet",
            paragraph:
              "Votre brief est enregistré dans votre compte client pour que vous puissiez mettre en pause, revenir et mettre à jour vos réponses. Il n'est pas partagé avec d'autres comptes clients. Les fichiers de projet importés sont stockés avec votre espace de travail et sont disponibles pour vous et Starter Shifter. Vous pouvez supprimer vos propres fichiers importés de l'espace de travail.",
          },
          {
            heading: "Comptes clients et intégration",
            paragraphBefore:
              "Votre compte client vous permet d'enregistrer les informations de votre projet et d'y revenir plus tard. Ses ",
            linkLabel: "informations de confidentialité d'intégration",
            linkHref: "/policies/onboarding-privacy",
            paragraphAfter:
              " expliquent comment les détails du projet sont utilisés. Vous acceptez cet avis avant de commencer les questions.",
          },
          {
            heading: "Informations complémentaires",
            paragraph:
              "Les informations sur l'hébergement des données, tout futur service de demande, la conservation et les demandes de confidentialité seront ajoutées une fois la politique complète et les coordonnées approuvées.",
          },
        ],
      },
      cookies: {
        title: "Informations sur les cookies.",
        description:
          "La politique de cookies est en attente d'approbation. Un avis complet sera ajouté après examen de l'environnement d'hébergement en production et de tout outil de suivi.",
        sections: [
          {
            heading: "Fonctionnalités actuelles du site",
            paragraph:
              "Aucune intégration optionnelle d'analyse ou de publicité n'est configurée sur ce site. La fonctionnalité actuelle de brief de projet crée un téléchargement local sans envoyer vos informations.",
          },
          {
            heading: "Changements futurs",
            paragraph:
              "Si des fonctionnalités d'analyse, de publicité ou d'autre suivi optionnel sont introduites, ces informations devront être mises à jour pour les outils et données réels impliqués.",
          },
        ],
      },
      terms: {
        title: "Informations sur les conditions de service.",
        description:
          "Les conditions de service complètes sont en attente d'approbation. Cette page résume les informations d'engagement confirmées ; chaque projet nécessite un périmètre convenu et un contrat signé.",
        sections: [
          {
            heading: "Avant l'intégration",
            paragraph:
              "L'intégration suit un contrat signé, une avance de 40 % et les informations entreprise et projet nécessaires pour démarrer. Les livrables, outils pris en charge, délais, responsabilités client et la couverture continue sont convenus pour chaque projet.",
          },
          {
            heading: "Mise en place et travail continu",
            paragraph:
              "Basic est un paiement unique de 2 500 $ couvrant la construction complète de l'application et la mise en place du marketing digital (gestion du SEO, e-mail marketing et marketing réseaux sociaux). Pro ajoute 500 $ par mois pour la maintenance continue, l'amélioration des performances et la génération de leads. Aucune des deux offres n'établit un travail illimité, des volumes de leads garantis ni des résultats métier garantis.",
          },
          {
            heading: "Coûts tiers",
            paragraph:
              "L'hébergement, les domaines, les dépenses publicitaires, les frais de traitement des paiements, les abonnements de plateforme, les thèmes et plugins payants, l'usage logiciel, les licences et les frais d'expédition sont à votre charge, distincts des honoraires de l'agence. Les services hors des trois domaines de service sont facturés séparément.",
          },
          {
            heading: "Conditions encore à publier",
            paragraph:
              "Les conditions restantes de paiement, fiscalité, annulation, remboursement, propriété, licence et support seront publiées une fois approuvées. Confirmez ces détails dans votre accord de projet avant de poursuivre.",
          },
        ],
      },
      onboardingPrivacy: {
        title: "Vos informations, avec un but.",
        shareHeading: "Ce que vous partagez avec nous",
        shareParagraph:
          "Vos coordonnées, la description de votre entreprise, vos clients et marchés, les objectifs du projet et les services pour lesquels vous souhaitez de l'aide. Vous pouvez aussi partager des exemples métier et des liens vers des documents qui nous aident à comprendre votre projet. Si vous importez des fichiers de projet via votre espace de travail, nous stockons le fichier et ses détails avec votre projet.",
        useHeading: "Comment nous les utilisons",
        useParagraphs: [
          "Nous utilisons vos réponses pour préparer et relire votre brief de projet, rechercher votre entreprise, planifier une direction de design et livrer le travail convenu avec vous. Votre progression est enregistrée pour que vous puissiez revenir, faire des changements et vérifier vos réponses avant d'envoyer votre brief à notre équipe. Les fichiers importés sont utilisés pour relire et livrer le projet pour lequel vous les avez partagés.",
          "Envoyer un brief ne signe pas un accord ni ne confirme un paiement. Votre accord définit les services, les frais et les responsabilités de votre projet.",
        ],
        responsibilityHeading: "Qui s'occupe de vos informations",
        responsibilityParagraphAfter:
          "Vous pouvez accéder à votre propre brief via votre compte. Les autres comptes clients ne peuvent pas y accéder. Notre portail utilise des prestataires pour la connexion au compte et le stockage des informations ; Starter Shifter est responsable de la gestion des informations de votre projet.",
        noticeHeading: "Votre avis d'intégration",
        keepingHeading: "Conserver vos informations et répondre à vos questions",
        contactPrefix: "Pour toute question ou demande concernant vos informations, contactez ",
        pausedHeading: "Avant de commencer",
        pausedParagraphs: [
          "L'intégration est temporairement en pause. Vous pourrez revoir ces informations à sa réouverture.",
          "L'aperçu de développement vous permet d'essayer le parcours avec des exemples de données métier. Ses réponses et sa progression d'exemple sont enregistrées séparément et peuvent être restaurées dans le même navigateur.",
        ],
        safeHeading: "Partagez le contexte métier, en toute sécurité",
        safeParagraphAfter:
          "Retirez les informations privées des exemples que vous partagez. Si votre projet nécessite plus tard des accès aux comptes, notre équipe les organisera avec vous séparément.",
      },
    },
  },

  auth: {
    heading: "Rejoignez-nous.",
    subheading: "Nouveau ici ou déjà client ? Continuez vers votre espace client.",
    socialGroupLabel: "Continuer avec un compte social",
    providers: { google: "Google", facebook: "Facebook" },
    connecting: "Connexion…",
    continueWith: "Continuer avec ",
    socialHelpBoth: "La connexion Google et Facebook arrive bientôt. Vous pouvez utiliser l'e-mail pour le moment.",
    socialHelpOneSuffix: " arrive bientôt.",
    or: "ou",
    continueWithEmail: "Continuer avec l'e-mail",
    workspaceNote: "Partagez votre brief métier et suivez votre projet au même endroit.",
    privacyNoteBefore: "Découvrez comment nous utilisons votre compte et les détails du projet dans notre ",
    privacyNoteLink: "politique de confidentialité",
    connectError: "Nous n'avons pas pu connecter votre compte. Réessayez ou continuez avec l'e-mail.",
    socialSignInError: "La connexion sociale a échoué. Réessayez ou continuez avec l'e-mail.",
    emailViewLabel: "Accès au compte par e-mail",
    backToOptions: "Retour à toutes les options de connexion",
    emailModeLabel: "Accès au compte par e-mail",
    signIn: "Se connecter",
    createAccount: "Créer un compte",
    createAccountEmailLabel: "Créer un compte avec l'e-mail",
    signInEmailLabel: "Se connecter avec l'e-mail",
    emailLabel: "Adresse e-mail",
    emailPlaceholder: "vous@entreprise.com",
    passwordLabel: "Mot de passe",
    passwordPlaceholderCreate: "Créez un mot de passe robuste",
    passwordPlaceholderSignin: "Saisissez votre mot de passe",
    showPassword: "Afficher le mot de passe",
    hidePassword: "Masquer le mot de passe",
    yourNameLabel: "Votre nom",
    yourNamePlaceholder: "Alex Morgan",
    keepMeSignedIn: "Rester connecté",
    passwordHint: "Utilisez au moins 12 caractères pour votre mot de passe.",
    creatingAccount: "Création de votre compte…",
    signingIn: "Connexion…",
    enterNameError: "Veuillez saisir votre nom.",
    tooManyAttemptsError: "Trop de tentatives. Patientez un instant puis réessayez.",
    createAccountError: "Nous n'avons pas pu créer votre compte. Essayez de vous connecter ou utilisez un autre e-mail.",
    signInError: "Nous n'avons pas pu vous connecter. Vérifiez votre e-mail et votre mot de passe.",
    connectRetryError: "Nous n'avons pas pu vous connecter. Réessayez dans un instant.",
    shell: {
      storyTag: "Votre entreprise, connectée",
      storyHeading: "Commencez votre parcours.",
      storyDescription: "Quelques étapes simples pour mettre votre entreprise au point.",
      journeyLabel: "Le parcours de votre espace de travail",
      steps: ["Créez votre compte", "Parlez-nous de votre entreprise", "Donnez forme à votre prochain chapitre"],
      formPanelLabel: "Rejoindre Starter Shifter",
      backToWebsite: "Retour au site",
      copyrightPrefix: "© ",
      accountPoliciesLabel: "Politiques du compte",
    },
  },

  dashboard: {
    viewNames: {
      overview: "Aperçu",
      brief: "Brief de projet",
      journey: "Parcours du projet",
      resources: "Marque et ressources",
      agreement: "Accord et facturation",
    },
    updates: {
      title: "Nouveautés et suivis",
      description: "Votre dernière progression enregistrée et les détails à revoir.",
      empty: "Commencez votre brief de projet pour voir vos nouveautés ici.",
      openQuestionsPrefix: "Questions ouvertes (",
      openQuestionsSuffix: ")",
      revisitDefault: "Revenez sur cette réponse avec votre agence.",
      noFollowups: "Aucun suivi signalé dans votre brief.",
      viewProjectJourney: "Voir le parcours du projet",
      updateBrief: "Mettre à jour mon brief",
      startBrief: "Commencer mon brief",
    },
    shell: {
      skipToDashboard: "Aller au tableau de bord",
      closeNavigation: "Fermer la navigation",
      workspaceNavigationLabel: "Navigation de l'espace de travail",
      clientWorkspace: "Espace client",
      littleGuidance: "Un peu d'orientation ?",
      littleGuidanceDesc: "Chaque prochaine étape, expliquée.",
      workspaceGuide: "Guide de l'espace de travail",
      developmentPreview: "Aperçu de développement",
      signingOut: "Déconnexion…",
      signOut: "Se déconnecter",
      workspace: "Espace de travail",
      searchLabel: "Rechercher dans votre brief de projet",
      searchPlaceholder: "Rechercher dans votre brief…",
      viewUpdatesLabel: "Voir les nouveautés de l'espace de travail",
      openProfileLabel: "Ouvrir votre profil",
      yourAccount: "Votre compte",
      dashboardContentLabel: "Contenu de l'onglet du tableau de bord",
      footerBrand: "Starter Shifter · Votre entreprise, connectée.",
      projectPrivacy: "Confidentialité du projet",
      connecting: "Connexion",
      connectedWorkspace: "Espace de travail connecté",
      guideTitle: "Votre guide de l'espace de travail",
      guideDescription: "Faites avancer votre projet, une étape à la fois.",
      guideParagraphs: [
        { strong: "Brief de projet", text: " conserve chaque réponse que vous avez enregistrée. Choisissez un sujet pour le relire ou revenez à l'intégration pour faire des changements." },
        { strong: "Parcours du projet", text: " montre votre envoi et les prérequis vérifiés. Les étapes de livraison deviennent pertinentes après l'activation et suivent votre périmètre convenu." },
        { strong: "Accord et facturation", text: " montre le périmètre, les frais, l'accord et la vérification de l'avance enregistrés par l'agence." },
        { strong: "", text: "Utilisez « Discuter avec nous » dans votre brief pour signaler ce dont vous avez besoin. Vos signalements apparaissent dans le centre d'actions du tableau de bord." },
      ],
      exploreMyBrief: "Explorer mon brief",
      profileTitle: "Votre profil",
      profilePreviewDesc: "Votre espace de travail d'aperçu enregistré",
      profileDesc: "Votre espace client",
      nameLabel: "Nom",
      notProvided: "Pas encore fourni",
      businessLabel: "Entreprise",
      viewContactDetails: "Voir les coordonnées",
      loadingBusinessName: "Votre espace de travail de projet",
    },
    overview: {
      topicSections: [
        { label: "Entreprise", color: "var(--commerce-deep)" },
        { label: "Objectifs", color: "#439574" },
        { label: "Exigences", color: "var(--commerce-mint)" },
        { label: "Confirmation", color: "#b4ae97" },
      ],
      eyebrow: "Un peu de clarté. Beaucoup de possibilités.",
      welcomeBack: "Bon retour",
      projectAtAGlance: "Votre projet, en un coup d'œil. Tout ce dont vous avez besoin pour avancer.",
      viewProjectBrief: "Voir le brief de projet",
      preparingPdf: "Préparation du PDF…",
      exportPdf: "Exporter le rapport PDF",
      pdfError: "Le PDF n'a pas pu être créé. Réessayez l'export.",
      pdfDownloaded: "Votre PDF est prêt. Vérifiez les téléchargements de votre navigateur.",
      pdfPreparing: "Ajout de vos réponses, graphiques et nouveautés du projet.",
      pdfIdle: "Réponses, exigences et progression de la livraison.",
      yourProjectBrief: "Votre brief de projet",
      phasesComplete: "Phases terminées",
      submittedForReview: "Envoyé pour relecture",
      continueWhereLeftOff: "Reprenez où vous en étiez",
      storyStartsHere: "Votre histoire commence ici",
      projectReadiness: "Préparation du projet",
      prerequisitesVerified: "Prérequis vérifiés",
      prerequisitesBefore: "Prérequis avant activation",
      projectDelivery: "Livraison du projet",
      awaitingProjectUpdate: "En attente de mise à jour du projet",
      latestProgress: "Dernière avancée de votre agence",
      deliveryProgressHere: "La progression de livraison de votre agence apparaît ici",
      openQuestions: "Questions ouvertes",
      workThroughThese: "Travaillons-les",
      noFollowups: "Aucun suivi signalé",
      detailsToRevisit: "Détails à revoir ensemble",
      clearerPicture: "Une image plus claire de votre projet",
      briefBreakdown: "L'achèvement de votre brief, détaillé par sujet.",
      questionsComplete: "des questions terminées",
      completionByCategory: "Achèvement des questions par catégorie",
      insideYourBrief: "Dans votre brief",
      viewAll: "Tout voir",
      detailsOrganized: "Vos informations, organisées. Ouvrez un sujet pour regarder de plus près.",
      answersRecorded: "réponses enregistrées",
      readyForInput: "Prêt pour votre contribution",
      complete: "Terminé",
      yourNextStep: "Votre prochaine étape",
      reviewProjectBrief: "Relire le brief de projet",
      completeProjectBrief: "Terminer le brief de projet",
      viewNextSteps: "Voir les prochaines étapes",
      beforeWeBegin: "Avant de commencer",
      viewAllPrereqsLabel: "Voir tous les prérequis d'activation",
      verified: "Vérifié",
      inProgress: "En cours",
      pending: "En attente",
      workspaceReadyForYou: "Votre espace de travail est prêt pour vous",
      startBriefToSee: "Commencez votre brief pour voir vos informations enregistrées et votre progression ici.",
      viewJourney: "Voir le parcours",
      nextStepFallbacks: {
        oneSmallPhase: "Une petite phase à la fois.",
        readyNextChapter: "Prêt pour votre prochain chapitre.",
        getReady: "Préparons votre projet.",
        answerUpToFive: "Répondez à jusqu'à cinq questions, puis revenez ici. Vous pouvez faire une pause entre chaque phase.",
        briefVerified: "Votre brief et vos prérequis sont vérifiés. Votre agence peut organiser les prochaines étapes convenues.",
        confirmRemaining: "Votre agence confirmera les prérequis restants.",
      },
    },
    journey: {
      title: "Un pas plus près, chaque jour.",
      description: "Une vue claire de la préparation de votre projet et du parcours de livraison à venir.",
      currentCheckpoint: "Point de contrôle actuel",
      yourProject: "Votre projet",
      targetDate: "Date cible : ",
      deliveryComplete: "livraison terminée",
      preparationStagesComplete: "étapes de préparation terminées",
      fallbackStages: [
        { title: "Votre brief de projet", description: "Partagez votre entreprise, vos objectifs, votre contenu et vos exigences. Vos réponses aident à façonner la discussion du projet." },
        { title: "Accord et activation", description: "Votre agence vérifie les coordonnées, l'accord signé, l'avance de 40 % et les dépendances du projet avant l'activation." },
        { title: "Recherche et direction", description: "La recherche entreprise, marché et concurrence établit la direction. Les délais et livrables suivent votre périmètre convenu." },
        { title: "Design et retours", description: "Explorez le travail de design convenu, relisez les maquettes et partagez vos retours. Le nombre de variantes et de révisions suit votre accord." },
        { title: "Construire et connecter", description: "Le site, le contenu, les flux de travail et les connexions prises en charge convenus prennent forme. Les exigences sélectionnées sont confirmées dans le périmètre." },
        { title: "Relecture et remise", description: "Relisez les livrables convenus et préparez la remise. Les exigences de lancement et le support continu dépendent de votre projet." },
      ],
      statusUpcoming: "À venir",
      statusComplete: "Terminé",
      statusInProgress: "En cours",
      statusVerified: "Vérifié",
      statusNeedsVerification: "Vérification nécessaire",
      statusUpNext: "Prochain",
      stageProgress: "Progression de l'étape",
      reviewBrief: "Relire le brief",
      continueBrief: "Continuer le brief",
      viewAllPending: "Voir tous les éléments en attente de vérification",
      noDeliveryUpdate: "Aucune mise à jour de livraison n'a été enregistrée pour cette étape. Votre agence confirmera le travail et les délais applicables après l'activation.",
      workspaceActivity: "Activité de l'espace de travail",
      activityEmpty: "Votre progression enregistrée et les mises à jour d'envoi apparaîtront ici une fois votre brief commencé.",
      activityFootNote: "Ce sont vos derniers enregistrements. Les dates de livraison et l'achèvement sont confirmés séparément par votre agence.",
    },
    resources: {
      title: "Les pièces de votre marque.",
      description: "Voyez la disponibilité du contenu et les liens de référence que vous avez partagés dans votre brief de projet.",
      updateResources: "Mettre à jour les ressources",
      brandContentReadiness: "Disponibilité de la marque et du contenu",
      assetStatuses: "Les statuts de ressources que vous avez enregistrés pendant l'intégration.",
      gatherStartingPoints: "Rassemblons vos points de départ.",
      gatherStartingPointsDesc: "Ajoutez votre logo, vos photos, vos textes et la disponibilité du contenu à votre brief. Les fichiers finaux peuvent être partagés en toute sécurité avec votre agence.",
      contentContact: "Contact contenu",
      yourSharedLinks: "Vos liens partagés",
      sharedLinksDesc: "Liens de site, de dossier et de référence issus de vos réponses.",
      opensNewTab: "S'ouvre dans un nouvel onglet",
      noLinksYet: "Aucun lien de référence partagé pour le moment. Vous pouvez en ajouter en mettant à jour votre brief.",
      secureShare: "Partagez fichiers et accès via votre méthode sécurisée convenue. Les mots de passe de compte n'ont pas leur place dans votre brief de projet.",
      projectFiles: "Fichiers du projet",
      projectFilesDesc: "Importez des logos, textes, photos ou documents de référence. Chaque fichier est stocké avec votre espace de travail et visible par votre agence.",
      file: "fichier",
      files: "fichiers",
      previewNote: "Le partage de documents devient disponible dans un espace client authentifié.",
      noteForAgency: "Note pour votre agence",
      notePlaceholder: "Contexte optionnel pour cet import",
      category: "Catégorie",
      chooseFilesLabel: "Choisir des fichiers à importer",
      uploading: "Import…",
      chooseFiles: "Choisir des fichiers",
      fileTypesHint: "PDF, image, Office, texte, CSV, JSON ou ZIP · jusqu'à ",
      uploadError: "L'import n'a pas pu être enregistré. Réessayez.",
      removeConfirm: "Retirer ce fichier de votre espace de travail ?",
      removeError: "Le fichier n'a pas pu être retiré. Réessayez.",
      needsUpdate: "Mise à jour nécessaire",
      noFilesYet: "Aucun fichier importé pour le moment.",
    },
    agreement: {
      title: "Périmètre clair. Attentes partagées.",
      description: "L'enregistrement d'engagement confirmé de votre agence, les frais et le statut de vérification.",
      yourEngagement: "Votre engagement",
      setupFee: "Frais de mise en place",
      asRecorded: "Tel qu'enregistré dans votre engagement",
      ongoingFee: "Frais continus",
      notRecorded: "Non enregistré",
      perMonth: "Par mois, selon le périmètre convenu",
      ongoingFollows: "Le travail continu suit votre accord",
      whatsIncluded: "Ce qui est inclus",
      exclusionsThirdParty: "Exclusions et coûts tiers",
      seeExclusions: "Consultez votre accord pour les exclusions.",
      verificationBilling: "Vérification et facturation",
      signedAgreement: "Accord signé",
      fortyPercentAdvance: "Avance de 40 %",
      billingName: "Nom de facturation",
      billingEmail: "E-mail de facturation",
      paymentStatusNote: "Le statut du paiement reflète la vérification de l'agence. Cet espace de travail n'encaisse pas de paiements.",
      agreementComesNext: "Votre accord vient ensuite.",
      agreementComesNextDesc: "Une fois que votre agence aura enregistré votre engagement, vous verrez ici le périmètre approuvé, les frais, les détails de facturation et le statut de vérification.",
      agreementAwaiting: "Accord en attente de confirmation",
      advanceAwaiting: "Avance de 40 % en attente de vérification",
    },
    brief: {
      title: "Votre brief de projet",
      description: "Relisez votre progression d'intégration, vérifiez les réponses partagées et complétez ce qui manque.",
      progressLabel: "La progression de votre brief",
      everyDetailCovered: "Chaque détail est couvert",
      briefTakingShape: "Votre brief prend forme",
      questionsAnswered: "questions répondues",
      phasesComplete: "phases terminées",
      submittedToAgency: "Envoyé à votre agence",
      draftNotSubmitted: "Brouillon · Non envoyé",
      reviewAndSend: "Relire et envoyer",
      updateReopens: "Vous pouvez mettre à jour toute réponse. Les changements rouvrent votre brief pour relecture et envoi.",
      completeSubmit: "Vos réponses sont complètes. Relisez et envoyez votre brief pour terminer l'intégration.",
      completionNote: "L'achèvement compte les questions répondues et non applicables. Les détails enregistrés pour plus tard restent ouverts ; vous pouvez en discuter avec votre agence.",
      percentComplete: "des questions terminées",
      statusComplete: "Terminé",
      percentCompleteSuffix: "terminé",
      filterLabel: "Filtrer les questions du brief",
      filters: [
        { label: "Toutes les questions" },
        { label: "À compléter" },
        { label: "Suivis" },
        { label: "Répondues" },
      ],
      searchLabel: "Rechercher questions et réponses",
      searchPlaceholder: "Rechercher questions ou réponses",
      onboardingPhases: "Phases d'intégration",
      shown: "affichées",
      chooseAPhase: "Choisir une phase",
      noMatchingPhases: "Aucune phase correspondante",
      phase: "PHASE",
      of: "SUR",
      complete: "Terminé",
      answered: "répondues",
      notAnswered: "non répondues",
      needAttention: "nécessitent attention",
      forLater: "pour plus tard",
      pickUpWhereLeft: "Reprenez où vous en étiez.",
      readyToRevisit: "Prêt à revoir les détails enregistrés pour plus tard ?",
      continuePhase: "Continuer la phase",
      startPhase: "Commencer la phase",
      showingPrefix: "Affichage de ",
      showingOfSuffix: " questions dans cette phase",
      question: "Question",
      followUpRequested: "Suivi demandé",
      notApplicable: "Non applicable",
      noAnswerYet: "Aucune réponse fournie pour le moment.",
      yourSavedAnswer: "Votre réponse enregistrée",
      checkAnswerDefault: "Veuillez vérifier cette réponse avant de terminer la phase.",
      editAnswer: "Modifier la réponse",
      checkAnswer: "Vérifier la réponse",
      answerNow: "Répondre maintenant",
      updateNote: "Ouvrez une question pour la mettre à jour. Votre réponse enregistrée sera préremplie, et vous pourrez revenir à cette phase après l'enregistrement.",
      noMatchingQuestions: "Aucune question correspondante",
      noUnansweredQuestions: "Aucune question sans réponse",
      noDetailsForLater: "Aucun détail enregistré pour plus tard",
      noQuestionsToShow: "Aucune question à afficher",
      tryAnotherSearch: "Essayez une autre recherche ou effacez les filtres pour voir votre brief.",
      chooseAnotherFilter: "Choisissez un autre filtre pour relire le reste de votre brief.",
      showAllQuestions: "Afficher toutes les questions",
      noPhasesMatch: "Aucune phase ne correspond à ce filtre.",
      forLaterSuffix: "pour plus tard",
      statusLabels: {
        answered: "Répondu",
        pending: "Non répondu",
        later: "Pour plus tard",
        attention: "Nécessite attention",
        review: "Relecture",
      },
    },
    phases: {
      savedSuffix: " enregistré. Relisez votre progression ci-dessous.",
      yourOnboarding: "VOTRE INTÉGRATION",
      completeTitle: "Votre brief de projet est terminé.",
      incompleteTitle: "Terminons votre brief de projet.",
      completeSubmitted: "Vos réponses ont été envoyées. Vous pouvez relire ou mettre à jour tout détail dans votre brief.",
      completeNotSubmitted: "Chaque question a une réponse. Relisez votre brief et envoyez-le à votre agence quand vous êtes prêt.",
      incomplete: "Voyez ce que vous avez partagé, trouvez les détails encore nécessaires et terminez une phase à la fois.",
      reviewProjectBrief: "Relire le brief de projet",
      reviewAndSendBrief: "Relire et envoyer le brief",
      continuePhase: "Continuer la phase",
      startPhase: "Commencer la phase",
      phasePrefix: "Phase ",
      briefCompletion: "Achèvement du brief",
      answeredSuffix: " répondues",
      notAnswered: "non répondues",
      needAttention: "nécessitent attention",
      forLater: "pour plus tard",
      phasesComplete: "phases terminées",
      laterStaysVisible: "Les détails marqués pour plus tard restent visibles jusqu'à leur résolution.",
      answersSavedAsYouGo: "Vos réponses sont enregistrées au fil de l'eau. Vous pouvez faire une pause à tout moment.",
      viewAllPhases: "Voir toutes les phases",
      briefCompletionLabel: "Achèvement du brief de projet",
    },
  },

  onboarding: {
    privacyCopy: {
      purpose: "Starter Shifter utilise les informations que vous partagez pour comprendre votre entreprise, préparer votre projet et livrer les services convenus avec nous.",
      responsibility: "Les informations de votre projet sont gérées par Starter Shifter. Nous ne vendons pas vos informations ni ne partageons votre brief avec d'autres entreprises pour leur propre usage.",
      safeSharing: "Les informations et exemples métier suffisent. Laissez de côté les mots de passe, les données de paiement et les informations privées sur vos clients ou votre équipe.",
    },
    welcome: {
      storyLabel: "Votre prochain chapitre commence ici",
      storyTitleLines: ["De grandes idées.", "De petits pas."],
      storyFooterLines: ["Vous apportez l'histoire.", "Nous vous aidons à relier les points."],
      greeting: "Bienvenue chez Starter Shifter.",
      greetingNamePrefix: "Bienvenue, ",
      heading: "Faisons connaissance avec votre entreprise.",
      descriptionPrefix: "Parlez-nous de votre entreprise, une question à la fois. Votre parcours actuel compte ",
      descriptionSuffix: " courtes phases, avec jusqu'à cinq questions chacune. Des suivis pertinents peuvent apparaître selon le travail que vous choisissez.",
      promises: [
        "Les estimations sont les bienvenues. Demandez de l'aide quand vous en avez besoin.",
        "Passez en douceur d'une phase à l'autre",
        "Enregistrez, faites une pause, revenez quand vous voulez",
      ],
      consentBefore: "J'ai lu la ",
      consentLink: "politique de confidentialité",
      consentAfter: " et j'accepte que Starter Shifter utilise mes informations pour préparer et livrer mon projet.",
      saving: "Enregistrement…",
      begin: "Commençons",
      paused: "L'intégration est temporairement en pause. Revenez à sa réouverture.",
      tryPreview: "Essayer l'aperçu",
      previewOnly: "Aperçu uniquement. Veuillez utiliser des exemples de données.",
      serviceTerms: "Conditions de service",
    },
    journeyArtwork: {
      scenes: [
        { title: "Votre entreprise", subtitle: "Faite de bonnes idées et de vraies personnes", tag: "Ravi de vous rencontrer" },
        { title: "Votre direction", subtitle: "Un peu de clarté. Beaucoup de possibilités.", tag: "Voyez grand" },
        { title: "Votre signature", subtitle: "Les détails qui la rendent vôtre", tag: "Laissez votre marque" },
        { title: "Votre boîte à outils", subtitle: "Relier les pièces de votre projet", tag: "Pièce par pièce" },
        { title: "Votre prochain chapitre", subtitle: "Un brief sur lequel construire, ensemble", tag: "Tout s'assemble" },
      ],
      tagline: "Un peu plus de vous",
    },
    wizard: {
      sessionEnded: "Votre session est terminée.",
      signInAgain: "Se reconnecter",
      reloadOnboarding: "Recharger l'intégration",
      previewBanner: "Mode aperçu. Utilisez des exemples de données métier. Votre progression est enregistrée pour votre prochaine visite.",
      customizedBanner: "Votre agence a préparé ce questionnaire pour votre projet. Veuillez relire tout détail nouvellement demandé.",
      oneQuestionAtATime: "Une question à la fois",
      saveAndReturn: "Enregistrer et revenir au brief",
      saveAndExit: "Enregistrer et quitter",
      phaseReview: "Relecture de phase",
      questionOf: "Question ",
      of: " sur ",
      reviewYourAnswers: "Relire vos réponses",
      answerBeforeFinish: "Vous pouvez répondre à cela avant de terminer.",
      phaseSavedSuffix: " enregistré. Continuons.",
      beforeNextPhase: "Avant la phase suivante",
      fewDetailsForLater: "Quelques détails pour plus tard",
      phaseReady: "Cette phase est prête",
      answeredPrefix: "Vous avez répondu à ",
      answeredSuffix: " sur ",
      answeredOfQuestions: " questions de cette phase. ",
      fillNowOrFlag: "Vous pouvez compléter ces détails maintenant, ou les laisser signalés pour votre relecture finale.",
      changesSavedContinue: "Vos changements sont enregistrés. Continuez quand vous le souhaitez.",
      answerNow: "Répondre maintenant",
      back: "Retour",
      continueWithForLaterPrefix: "Continuer avec ",
      continueWithForLaterSuffix: " pour plus tard",
      continueToNextPhase: "Continuer vers la phase suivante",
      reviewTitle: "Voici votre brief de projet. Qu'en pensez-vous ?",
      remainingPrereqs: "Prérequis restants du projet",
      prereqsNote: "Ils sont vérifiés par rapport aux enregistrements de l'agence. Aucune invitation n'est envoyée depuis ce formulaire.",
      reviewHelp: "Vérifiez vos réponses ci-dessous. Vous pouvez modifier tout sujet avant les confirmations finales.",
      previewPrivacyHelp: "Relisez comment vos réponses d'exemple sont utilisées dans cet aperçu avant de confirmer.",
      addProjectTopic: "Autre chose ? Ajoutez un sujet de projet",
      topicsAutoHelp: "Vos réponses sélectionnent automatiquement les sujets pertinents. Ajoutez un flux de travail ici si nous l'avons manqué.",
      searchTopicsLabel: "Rechercher des sujets de projet",
      searchTopicsPlaceholder: "Rechercher des sujets…",
      selectedByAnswers: "sélectionné par vos réponses",
      previouslyAnswered: "Sujets déjà répondus",
      previouslyAnsweredHelp: "Ces réponses restent enregistrées hors de votre parcours actuel. Restaurez un sujet ou supprimez ses réponses.",
      restoreTopic: "Restaurer le sujet",
      removeSavedAnswers: "Supprimer les réponses enregistrées",
      routeNotePrefix: " sujets spécifiques au projet sélectionnés. Votre progression s'adapte à vos choix.",
      backToMyReview: "Retour à ma relecture",
      retrySaving: "Réessayer l'enregistrement",
      saveAndReturnToBrief: "Enregistrer et revenir au brief",
      backToPhaseReview: "Retour à la relecture de phase",
      saveAndOpenDashboard: "Enregistrer et ouvrir le tableau de bord",
      submitOnboarding: "Envoyer les informations d'intégration",
      looksGood: "Ça a l'air bien",
      skipForNow: "Passer pour le moment",
      continue: "Continuer",
      pauseAnytime: "Faites une pause à tout moment avec Enregistrer et quitter.",
      phaseOf: "Phase ",
      phaseOfSuffix: " sur ",
      encouragement: {
        checkTogether: "Vérifions cette réponse ensemble. Le détail ci-dessous vous aidera.",
        briefComingTogether: "Votre brief prend forme. Jetez-y un œil avant les confirmations finales.",
        flagForGuidance: "Nous le signalerons pour orientation. Vous pouvez continuer.",
        keepOpen: "C'est très bien. Nous garderons cela comme question ouverte.",
        gotIt: "Compris ! Continuez quand vous le souhaitez.",
        startWithYou: "Commençons par vous. Une réponse courte suffit.",
        multiSelect: "Vous pouvez en choisir plusieurs. Choisissez ce qui convient à votre projet.",
        select: "Choisissez l'option qui vous semble juste.",
        optional: "Celle-ci est optionnelle. Vous pourrez y revenir plus tard.",
        oneSmallStep: "Un petit pas à la fois. Un peu de contexte suffit.",
      },
      saveStates: {
        allSaved: "Tous les changements sont enregistrés",
        readyToSave: "Prêt à enregistrer",
        saving: "Enregistrement…",
        unsaved: "Changements non enregistrés",
        notSaved: "Changements non enregistrés — réessayez ci-dessous",
      },
      errors: {
        saveFailed: "Nous n'avons pas pu enregistrer vos derniers changements. Gardez cette page ouverte et réessayez.",
        draftMissing: "Votre session de brouillon est introuvable. Rechargez cette page pour vous reconnecter.",
        unableToSave: "Impossible d'enregistrer.",
        unableToSaveAnswer: "Impossible d'enregistrer cette réponse.",
        unableToSavePhase: "Impossible d'enregistrer cette phase.",
        unableToSubmit: "Impossible d'envoyer.",
        unableToSaveAgreement: "Impossible d'enregistrer votre accord. Réessayez.",
        attentionBeforeSubmit: "Quelques réponses nécessitent encore votre attention avant l'envoi.",
        loadQuestionnaire: "Nous n'avons pas pu charger votre questionnaire attribué. Rechargez pour réessayer, ou contactez l'agence si le problème persiste.",
      },
      engagementSummary: {
        noneHeading: "Aucun engagement approuvé enregistré pour le moment",
        noneBody: "Votre accord de projet, votre périmètre, vos frais et votre enregistrement de facturation apparaîtront ici une fois que l'agence les aura enregistrés. Vous pouvez quand même envoyer un brief pour relecture.",
        noneMeta: "Accord : en attente de confirmation · Avance de 40 % : en attente de vérification",
        approvedSuffix: " · Enregistrement de projet approuvé",
        setupPrefix: "Mise en place : ",
        recurringPrefix: " · Récurrent : ",
        perMonthSuffix: " / mois",
        scopePrefix: "Périmètre : ",
        exclusionsPrefix: "Exclusions : ",
        seeAgreement: "Voir votre accord",
        thirdPartyPrefix: "Coûts tiers : ",
        agreementPrefix: "Accord : ",
        verified: "Vérifié",
        awaitingConfirmation: "En attente de confirmation",
        advancePrefix: " · Avance de 40 % : ",
        awaitingVerification: "En attente de vérification",
      },
      reviewSummary: {
        groups: [
          { title: "Entreprise et contact" },
          { title: "Objectifs et processus actuel" },
          { title: "Travail sélectionné et exigences" },
          { title: "Responsabilités et engagement" },
          { title: "Notes finales et retours d'intégration" },
        ],
        additionalTitle: "Détails supplémentaires du projet",
        topicsToReview: " sujets à relire",
        edit: "Modifier",
        editBrief: "Modifier le brief",
        openQuestions: "Questions ouvertes et suivis",
        noFollowups: "Aucun signalement de suivi enregistré. Les détails optionnels sans réponse peuvent être fournis plus tard.",
      },
    },
    progress: {
      railLabel: "Progression de l'intégration",
      yourProjectBrief: "Votre brief de projet",
      phasePrefix: "Phase ",
      phaseOfSuffix: " sur ",
      answeredPercentSuffix: " répondues",
      answeredLabel: "Questions répondues",
      answeredValueText: "répondues, ",
      forLaterValueText: " pour plus tard, ",
      pendingValueText: " en attente sur ",
      questionsValueText: " questions",
      answered: "répondues",
      forLater: "pour plus tard",
      pending: "en attente",
      yourPhases: "Vos phases",
      phaseNavLabel: "Phases et questions",
      questionsInPhase: "Questions de cette phase",
      selectToRevisit: "Sélectionnez une question pour y revenir.",
      review: "Relecture",
      reviewYourAnswers: "Relire vos réponses",
      currentQuestionSuffix: ", question actuelle",
      legendAnswered: "Répondu",
      legendForLater: "Pour plus tard",
      legendPending: "En attente",
      railNote: "Vos phases s'adaptent à votre projet. Vous pouvez revenir à toute question.",
      currentPhaseLabel: "Phase actuelle",
    },
    privacyNotice: {
      ariaLabel: "Comment nous utilisons vos informations",
      heading: "Vos informations ont un but.",
      howWeCare: "Comment nous prenons soin de vos informations",
      previewNote: "Ceci est un aperçu. Vos réponses d'exemple sont enregistrées pour que vous puissiez essayer le parcours et y revenir dans ce navigateur. Utilisez des exemples de données métier.",
      retentionPrefix: "Combien de temps nous conservons vos informations : ",
      contactPrefix: "Des questions sur vos informations ? ",
      paused: "L'intégration est temporairement en pause. Veuillez relire les informations de confidentialité actuelles à sa réouverture.",
      navLabel: "Informations d'intégration",
      privacyInformation: "Politique de confidentialité",
      serviceTerms: "Conditions de service",
    },
    portal: {
      myWorkspace: "Mon espace de travail",
      signingOut: "Déconnexion…",
      signOut: "Se déconnecter",
      yourProjectWorkspace: "L'espace de travail de votre projet",
      clientPortal: "Portail client Starter Shifter",
      signOutError: "Impossible de vous déconnecter. Réessayez.",
      saveProgressError: "Impossible d'enregistrer votre progression. Réessayez.",
      unableToSaveProgress: "Impossible d'enregistrer votre progression.",
    },
    questionField: {
      answerNow: "Répondre maintenant",
      notSureYet: "Pas encore sûr",
      notApplicable: "Non applicable",
      provideLater: "Fournir plus tard",
      requestHelp: "Demander de l'aide",
      preferNotToAnswer: "Préfère ne pas répondre",
      required: "Obligatoire",
      optional: "Optionnel",
      setEachStatus: "Définissez le statut de chaque élément",
      chooseOne: "Choisissez-en un",
      chooseUpToPrefix: "Choisissez jusqu'à ",
      chooseAll: "Choisissez tout ce qui s'applique",
      chooseUpToSuffix: ".",
      pickWhatFits: "Choisissez ce qui convient le mieux. Vous pouvez ajouter du contexte ci-dessous.",
      shortAnswer: "Une réponse courte suffit. Vous pourrez ajouter plus de détails plus tard.",
      everydayWords: "Des mots simples sont parfaits. Quelques phrases suffisent.",
      shareWhatYouKnow: "Partagez ce que vous savez. Vous pouvez demander de l'aide ci-dessous.",
      skipIfPrefer: "Passez ceci si vous préférez le fournir plus tard.",
      whyWeAsk: "Pourquoi nous demandons",
      savedChoicePrefix: "Votre choix enregistré : ",
      savedChoiceSuffix: ". Ces options ont été retirées du formulaire mis à jour. Votre réponse est conservée ; relisez les options disponibles avant de confirmer.",
      confirmAccuracy: "Je confirme ces informations et mon autorité à les partager.",
      confirmPrivacy: "J'ai relu les informations de confidentialité d'intégration.",
      yesIConfirm: "Oui, je confirme",
      requiredSuffix: " (obligatoire)",
      optionalSuffix: " (optionnel)",
      chooseStatus: "Choisir le statut",
      nothingYet: "Rien pour le moment",
      notSure: "Pas sûr",
      ready: "Prêt",
      needsUpdating: "Mise à jour nécessaire",
      needHelp: "Besoin d'aide",
      searchOptionsPrefix: "Rechercher des options pour ",
      searchOptionsPlaceholder: "Rechercher des options…",
      noMatchingChoices: "Aucun choix correspondant. Essayez un autre mot ou effacez votre recherche.",
      somethingElse: "Autre chose",
      addOwnOption: "Ajoutez votre propre option ou expliquez",
      countryOrRegion: "Pays ou région",
      searchCountry: "Recherchez ou saisissez un pays / une région",
      timezone: "Fuseau horaire",
      searchTimezone: "Recherchez un fuseau, ex. Europe/Paris",
      forFirstLaunch: "Pour le premier lancement",
      canWaitUntilLater: "Peut attendre plus tard",
      chooseOptionOrDescribe: "Choisissez une option ou décrivez ci-dessous",
      startWithUpToThree: "Commencez par jusqu'à trois priorités",
      ideasForFuture: "Idées pour une phase future",
      chooseApprox: "Choisissez une valeur approximative",
      enterExact: "Saisissez une valeur exacte",
      fewSentences: "Quelques phrases suffisent",
      oneExampleOrLink: "Un exemple ou un lien vers un document",
      remove: "Supprimer",
      addAnother: "+ Ajouter un autre",
      quickAnswersLabel: "Réponses rapides",
      yourFirstPriority: "Votre première priorité",
      chooseMainPriority: "Choisissez votre priorité principale",
      notSureSeeOther: "Pas sûr ? Voyez d'autres façons de répondre",
      changeAnswerSuffix: " · Modifier la réponse",
      addContactNote: "Ajoutez un contact, un responsable ou une note de suivi",
      addNoteLink: "Ajoutez une note courte ou un lien (optionnel)",
      notePlaceholder: "Un lien vers un document, une précision, le nom d'un collègue ou une disponibilité",
      workspaceMemberPrefix: "Membre de l'espace de travail ",
      chooseAccess: "Choisissez l'accès demandé",
      viewProject: "Voir le projet",
      reviewAndComment: "Relire et commenter",
      supplyInputs: "Fournir les éléments du projet",
      needGuidance: "Besoin d'orientation",
      removeMember: "Retirer le membre",
      addAnotherPerson: "+ Ajouter une autre personne",
      quickChoicesPrefix: "Choix rapides pour ",
      countries: [
        "Australie", "Bangladesh", "Brésil", "Canada", "Chine", "France", "Allemagne",
        "Inde", "Indonésie", "Irlande", "Italie", "Japon", "Kenya", "Malaisie", "Mexique",
        "Népal", "Pays-Bas", "Nouvelle-Zélande", "Nigeria", "Pakistan", "Philippines",
        "Arabie saoudite", "Singapour", "Afrique du Sud", "Espagne", "Sri Lanka",
        "Émirats arabes unis", "Royaume-Uni", "États-Unis",
      ],
    },
    previewPending: [
      "Vérifiez l'e-mail de contact du projet ou de l'espace de travail lors de la création de votre compte client.",
      "Convenez du périmètre du projet et complétez l'accord signé.",
      "Faites vérifier l'avance de 40 % par l'agence par rapport à votre facture convenue.",
    ],
  },

  projectBrief: {
    serviceOptions: [
      "E-commerce et sites web",
      "Recherche et design",
      "Marketing et campagnes",
      "Automatisation et intégrations",
      "Maintenance et performance",
    ],
    headerLine: "Starter Shifter — Brief de projet",
    nameLabel: "Votre nom",
    emailLabel: "E-mail",
    companyLabel: "Entreprise (optionnel)",
    timingLabel: "Calendrier (optionnel)",
    timingPlaceholder: "Par exemple, avant une date de lancement",
    servicesLegend: "Pour quoi pourrions-nous vous aider ?",
    servicesDescription: "Sélectionnez ce qui convient, ou laissez ouvert.",
    goalsLabel: "Que souhaitez-vous rendre possible ?",
    goalsPlaceholder: "Parlez-nous de votre entreprise, de vos besoins et du résultat envisagé.",
    currentSetupLabel: "Qu'est-ce qui est déjà en place ? (optionnel)",
    currentSetupDescription: "Un site, une boutique, des pages sociales ou des outils métier existants.",
    currentSetupPlaceholder: "Partagez les systèmes, plateformes ou comptes que vous utilisez déjà.",
    openEmailDraft: "Ouvrir le brouillon d'e-mail",
    downloadBrief: "Télécharger le brief de projet",
    emailDraftReady: "Votre brouillon d'e-mail est prêt à ouvrir. Relisez-le dans votre application de messagerie et envoyez-le quand vous êtes prêt.",
    downloadReady: "Votre brief de projet est prêt dans vos téléchargements. Rien n'a été envoyé à Starter Shifter.",
    briefFields: {
      name: "Nom : ",
      email: "E-mail : ",
      company: "Entreprise : ",
      services: "Services : ",
      timing: "Calendrier : ",
      notSpecified: "Non précisé",
      exploreOptions: "Explorons les options",
      projectGoals: "Objectifs du projet :",
      alreadyInPlace: "Ce qui est déjà en place :",
      disclaimer: "Ce brief est un point de départ pour la discussion, pas un périmètre ni un devis convenus.",
    },
    emailSubjectPrefix: "Demande de projet — ",
    downloadFileName: "starter-shifter-brief-de-projet.txt",
  },

  projects: [
    {
      title: "Concept de boutique",
      category: "E-commerce",
      description: "Une mise en page de boutique illustrative avec une collection de produits et un chemin clair vers l'achat.",
      imageAlt: "Boutique conceptuelle avec une bannière verte et des sacs du quotidien illustrés",
      status: "Aperçu de concept",
    },
    {
      title: "Concept d'espace d'opérations",
      category: "Application web",
      description: "Un espace de travail illustratif qui rassemble commandes, inventaire et tâches d'expédition dans une seule vue.",
      imageAlt: "Tableau de bord d'opérations conceptuel montrant un tableau de commandes et des panneaux de flux de travail",
      status: "Aperçu de concept",
    },
    {
      title: "Concept de site web créatif",
      category: "Design web",
      description: "Un site éditorial illustratif avec une typographie affirmée et une collection de travaux ciblée.",
      imageAlt: "Site web créatif conceptuel avec une grande typographie et des œuvres sculpturales abstraites",
      status: "Aperçu de concept",
    },
    {
      title: "Concept de support client",
      category: "Flux de travail IA",
      description: "Une interface de support illustrative pour les conversations, les questions courantes et les passages à l'équipe.",
      imageAlt: "Espace de support conceptuel avec une liste de conversations et un chat client",
      status: "Aperçu de concept",
    },
  ],

  shared: {
    deliveryStageStatusLabels: {
      upcoming: "À venir",
      "in-progress": "En cours",
      complete: "Terminé",
      blocked: "Nécessite attention",
    },
    defaultDeliveryStages: [
      { title: "Votre brief de projet", description: "Partagez votre entreprise, vos objectifs, votre contenu et vos exigences. Vos réponses aident à façonner la discussion du projet." },
      { title: "Accord et activation", description: "Votre agence vérifie les coordonnées, l'accord signé, l'avance de 40 % et les dépendances du projet avant l'activation." },
      { title: "Recherche et direction", description: "La recherche entreprise, marché et concurrence établit la direction. Les délais et livrables suivent votre périmètre convenu." },
      { title: "Design et retours", description: "Explorez le travail de design convenu, relisez les maquettes et partagez vos retours. Le nombre de variantes et de révisions suit votre accord." },
      { title: "Construire et connecter", description: "Le site, le contenu, les flux de travail et les connexions prises en charge convenus prennent forme. Les exigences sélectionnées sont confirmées dans le périmètre." },
      { title: "Relecture et remise", description: "Relisez les livrables convenus et préparez la remise. Les exigences de lancement et le support continu dépendent de votre projet." },
    ],
    workspaceViewNames: {
      overview: "Aperçu",
      brief: "Brief de projet",
      journey: "Parcours du projet",
      resources: "Marque et ressources",
      agreement: "Accord et facturation",
    },
    questionStatusLabels: {
      answered: "Répondu",
      later: "Pour plus tard",
      pending: "Non répondu",
      attention: "Nécessite attention",
      review: "Relecture",
    },
    answerStateLabels: {
      answered: "Répondre maintenant",
      unknown: "Pas encore sûr",
      "not-applicable": "Non applicable",
      deferred: "Fournir plus tard",
      help: "Discuter avec nous",
    },
    prerequisites: {
      briefLabel: "Brief de projet",
      briefSubmitted: "Votre brief a été envoyé.",
      briefDetail: "Complétez et envoyez les informations de votre projet.",
      identityLabel: "Vérification du contact",
      identityDetail: "Les e-mails de contact de votre projet et de votre espace de travail.",
      agreementLabel: "Accord signé",
      agreementDetail: "Confirmez le périmètre avec votre agence.",
      advanceLabel: "Avance de 40 %",
      advanceDetail: "Vérification de l'agence par rapport à votre facture convenue.",
      responsiblePrefix: "Responsable : ",
    },
    activity: {
      briefSaved: "Brief de projet enregistré",
      briefSubmitted: "Brief envoyé",
      briefSubmittedDetail: "Les informations de votre projet sont prêtes pour relecture",
      engagementUpdated: "Enregistrement d'engagement mis à jour",
      engagementUpdatedDetail: "Périmètre et prérequis enregistrés",
    },
    assetStatusLabels: {
      ready: "Prêt",
      "needs-updating": "Mise à jour nécessaire",
      "needs-help": "Besoin d'aide",
      "not-available": "Non disponible",
      recorded: "Enregistré dans le brief",
    },
    workspaceFallback: {
      businessName: "Votre prochain chapitre",
      description: "Un espace dédié à votre entreprise, à votre brief et à tout ce qui vient ensuite.",
    },
    notAnswered: "Non répondu",
    confirmed: "Confirmé",
    notConfirmed: "Non confirmé",
    firstPriorityPrefix: "Première priorité : ",
  },
};
