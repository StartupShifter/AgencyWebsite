import type { TranslationDictionary } from "../i18n";

/** German (Deutsch) localization. */
export const de: TranslationDictionary = {
  brand: {
    homeAriaLabel: "Startseite von Starter Shifter",
    tagline: "Ihr Unternehmen, verbunden",
    footerNote: "Von Ihrem ersten Onlineshop bis zu den Workflows dahinter. Rund um Ihr Unternehmen gebaut.",
    footerWorldwide: "Wir arbeiten mit Unternehmen weltweit.",
  },

  common: {
    skipToContent: "Zum Inhalt springen",
    backToHome: "Zurück zur Startseite",
    policyAwaitingApproval: "Richtlinie wartet auf Freigabe",
    prepareProjectBrief: "Projekt-Briefing vorbereiten",
    policyNavigationLabel: "Richtlinieninformationen",
    privacy: "Datenschutz",
    cookies: "Cookies",
    serviceTerms: "Nutzungsbedingungen",
    exploreServices: "Unsere Leistungen entdecken",
    planYourProject: "Ihr Projekt planen",
    supportAndCare: "Support & Betreuung",
    viewAllProducts: "Alle Produkte ansehen",
    getStarted: "Loslegen",
    resourceNoteDefault: "Starter Shifter · Ressourcen",
    openNavigation: "Navigation öffnen",
    closeNavigation: "Navigation schließen",
    loadingPage: "Seite wird geladen",
    explorePrefix: "Entdecken ",
    illustrationSuffix: " Illustration",
    loading: {
      site: "Starter Shifter wird geladen",
      signInOptions: "Anmeldeoptionen werden geladen",
      onboardingInformation: "Ihre Onboarding-Informationen werden geladen",
      workspace: "Ihr Arbeitsbereich wird geladen",
      projectBrief: "Ihr Projekt-Briefing wird geladen",
    },
    opensInNewTab: "öffnet in einem neuen Tab",
  },

  metadata: {
    home: {
      title: "Starter Shifter — Ihr Unternehmen, verbunden",
      description:
        "E-Commerce, kreative Leitung, Automatisierung und verbundene Abläufe. Starter Shifter hilft Unternehmen, ihr nächstes Kapitel online aufzubauen – mit einem auf ihre Bedürfnisse zugeschnittenen Umfang.",
    },
    about: {
      title: "Über uns — Starter Shifter",
      description:
        "Lernen Sie Starter Shifter kennen, eine Agentur, die Unternehmen weltweit hilft, ihre Websites, Social-Media-Präsenz und Abläufe durch Recherche, Design, Entwicklung und Automatisierung zu verbinden.",
    },
    faq: {
      title: "FAQs — Starter Shifter",
      description:
        "Antworten zu den Basic- und Pro-Plänen von Starter Shifter, zum Onboarding, zu den Lieferphasen, Websites, Integrationen, laufendem Support und zum Projektstart.",
    },
    howWeWork: {
      title: "So arbeiten wir — Starter Shifter",
      description:
        "Die Lieferphasen, die Starter Shifter von der Entdeckung und dem Umfang über Design, Aufbau und Start bis zum laufenden Support nutzt, einschließlich der Onboarding-Anforderungen und der ersten Recherche-Übergabe.",
    },
    products: {
      title: "Produkte & Vorlagen — Starter Shifter",
      description:
        "Entdecken Sie die Websites, Anwendungen und verbundenen Erlebnisse von Starter Shifter. Konzeptvorschauen werden getrennt von abgeschlossener Kundenarbeit gekennzeichnet.",
    },
    support: {
      title: "Support & Betreuung — Starter Shifter",
      description:
        "Wie Starter Shifter Wartung, Support und laufende Verbesserung nach dem Start handhabt, einschließlich der Abdeckungsgrenzen von Basic und Pro.",
    },
    privacy: { title: "Datenschutzinformationen — Starter Shifter" },
    cookies: { title: "Cookie-Informationen — Starter Shifter" },
    terms: { title: "Informationen zu den Nutzungsbedingungen — Starter Shifter" },
    onboardingPrivacy: { title: "Ihre Onboarding-Informationen — Starter Shifter" },
    login: { title: "Mitmachen | Starter Shifter" },
    dashboard: { title: "Kunden-Arbeitsbereich — Starter Shifter" },
    dashboardPreview: { title: "Ihr Arbeitsbereich — Starter Shifter" },
    onboarding: { title: "Ihr Projekt-Briefing — Starter Shifter" },
    onboardingPreview: { title: "Onboarding-Vorschau — Starter Shifter" },
  },

  navigation: {
    sections: [
      {
        label: "Leistungen",
        items: [
          { title: "E-Commerce-Websites", description: "Shops, gestaltet nach Ihrer Verkaufsweise.", href: "/services/ecommerce" },
          { title: "Social & Marketing", description: "SEO, E-Mail und Social-Präsenz, geplant und umgesetzt.", href: "/services/social-campaigns" },
          { title: "Chatbots & Automatisierung", description: "Häufige Fragen beantwortet, der Rest weitergeleitet.", href: "/services/chatbots-automation" },
          { title: "Bestandssysteme", description: "Ein klarer, verlässlicher Blick auf Ihren Bestand.", href: "/services/inventory" },
          { title: "Versand & Bestellungen", description: "Weniger manuelle Schritte zwischen Bestellung und Versand.", href: "/services/shipping-orders" },
          { title: "ERP- & CRM-Integrationen", description: "Ihre Geschäftstools, die zusammenarbeiten.", href: "/services/erp-crm-integrations" },
          { title: "Wartung & Support", description: "Laufende technische Betreuung nach dem Start.", href: "/services/maintenance-support" },
          { title: "Performance-Verbesserung", description: "Engpässe finden und beheben.", href: "/services/performance" },
          { title: "Recherche & kreative Leitung", description: "Markteinblicke und Figma-Designentwürfe.", href: "/services/research-creative-direction" },
          { title: "Präsentationen & Planung", description: "Ein gemeinsamer Blick auf Ihr Projekt – frühzeitig.", href: "/services/project-planning" },
        ],
        footer: {
          text: "Basic für einmalig 2.500 $. Pro für 2.500 $ plus 500 $/Monat.",
          linkLabel: "Preise ansehen",
          href: "#pricing",
        },
      },
      {
        label: "Ressourcen",
        items: [
          { title: "So arbeiten wir", description: "Lieferphasen von der Entdeckung bis zum Start.", href: "/how-we-work" },
          { title: "FAQs", description: "Häufige Fragen, klar beantwortet.", href: "/faq" },
          { title: "Produkte & Vorlagen", description: "Entdecken Sie unsere Websites und Anwendungen.", href: "/products" },
          { title: "Support & Betreuung", description: "Hilfe für Projekte nach dem Start.", href: "/support" },
        ],
      },
    ],
    directLinks: [
      { title: "Über uns", description: "Wer Starter Shifter ist und wie wir arbeiten.", href: "/about" },
      { title: "Preise", description: "Vergleichen Sie Basic-Setup und laufenden Pro-Support.", href: "/#pricing" },
    ],
    cta: "Loslegen",
    mainNavigationLabel: "Hauptnavigation",
    mobileNavigationLabel: "Mobile Navigation",
  },

  footer: {
    ariaLabel: "Fußzeile von Starter Shifter",
    socialProfilesLabel: "Social-Media-Profile",
    policyNote: "Richtlinienstatus und aktuelle Informationen.",
    navigation: [
      {
        key: "company",
        title: "Unternehmen",
        links: [
          ["Über uns", "/about"],
          ["So arbeiten wir", "/how-we-work"],
          ["Produkte & Vorlagen", "/products"],
          ["Pläne & Preise", "/#pricing"],
        ],
      },
      {
        key: "services",
        title: "Leistungen",
        links: [
          ["Webanwendungen", "/#services"],
          ["Social Media", "/#services"],
          ["KI-Workflows", "/#services"],
          ["Verbundene Abläufe", "/#process"],
          ["Wartung & Wachstum", "/#pricing"],
        ],
      },
      {
        key: "resources",
        title: "Ressourcen",
        links: [
          ["Kunden-Login", "/login"],
          ["So arbeiten wir", "/how-we-work"],
          ["FAQs", "/faq"],
          ["Projekt-Briefing", "/project-brief"],
          ["Support & Betreuung", "/support"],
        ],
      },
      {
        key: "information",
        title: "Informationen",
        links: [
          ["Datenschutz", "/policies/privacy"],
          ["Cookies", "/policies/cookies"],
          ["Nutzungsbedingungen", "/policies/terms"],
        ],
      },
    ],
  },

  landing: {
    hero: {
      eyebrow: "Ihre Agentur für E-Commerce & digitales Wachstum",
      titleLines: ["Ihr nächstes Kapitel", "beginnt mit einem besseren Shop."],
      description:
        "Von Ihrem ersten Onlineshop bis zu den Systemen dahinter. Wir verbinden Design, E-Commerce und verbundene Abläufe – rund um Ihr Unternehmen gebaut.",
      primaryCta: "Bauen wir Ihren Shop",
      secondaryCta: "Unsere Leistungen entdecken",
      note: "Ihr Unternehmen. Ihr Umfang. Wo immer Sie sind.",
    },
    services: {
      kicker: "Was wir tun",
      titleLines: ["Außen gut.", "Innen verbunden."],
      intro:
        "Ihre Online-Präsenz. Ihre Social-Stimme. Die Workflows dahinter. Drei verbundene Leistungen, zugeschnitten auf Ihr Unternehmen.",
      cards: [
        { title: "Webanwendung", text: "Websites und Webanwendungen, mit Design und Entwicklung zugeschnitten auf die Arbeitsweise Ihres Unternehmens." },
        { title: "Social Media & Marketing", text: "SEO-Management, E-Mail-Marketing und Social Media über WhatsApp, LinkedIn, Pinterest und mehr." },
        { title: "KI-Workflow", text: "Verbundene Tools, Aufgabenautomatisierung und Kunden-Chat-Abläufe, die Ihr Team bei Bedarf einbeziehen." },
      ],
      illustrationLabels: {
        web: "Illustration der Webanwendung entdecken",
        social: "Social-Media-Illustration entdecken",
        ai: "KI-Workflow-Illustration entdecken",
      },
    },
    projects: {
      kicker: "Produkte & Vorlagen",
      titleLines: ["Ein genauerer Blick", "auf das, was wir bauen."],
      intro:
        "Websites, Anwendungen und verbundene Erlebnisse. Entdecken Sie die Sammlung – Bildschirm für Bildschirm.",
      cta: "Alle Produkte ansehen",
      showcaseLabel: "Projekt-Showcase",
    },
    process: {
      kicker: "So bringen wir Sie online",
      titleLines: ["Vom Verstehen Ihres Unternehmens", "bis zur Online-Verbindung."],
      intro:
        "Fünf Phasen einer verbundenen digitalen Präsenz. Wir vereinbaren, welche Leistungen Ihr Projekt braucht, und bauen rund um diesen Umfang.",
      linkLabel: "Den vollständigen Lieferleitfaden lesen",
      steps: [
        {
          title: ["Recherche &", "Richtung"],
          description:
            "Wir lernen Ihr Unternehmen kennen, untersuchen Ihren Markt und analysieren den Wettbewerb. Diese Erkenntnisse prägen den Plan und eine erste Designrichtung für Ihre Prüfung.",
          details: ["Unternehmensrecherche", "Marktanalyse", "Wettbewerbserkenntnisse"],
          note: "Recherchetiefe und Designleistungen werden für Ihr Projekt vereinbart.",
          phase: "Verstehen",
        },
        {
          title: ["Ihr Unternehmen,", "online gebaut"],
          description:
            "Wir gestalten und bauen Ihre Website oder Webanwendung auf Shopify oder WordPress, mit WooCommerce, wenn Sie einen Shop brauchen. Plattform und Funktionen folgen Ihrer Arbeitsweise.",
          details: ["Shopify oder WordPress", "Design & Entwicklung", "Start & Übergabe"],
          note: "Sie liefern Geschäftsinhalte, Produktdetails, Kontozugänge und Freigaben.",
          phase: "Bauen",
        },
        {
          title: ["Eine Social-", "Präsenz"],
          description:
            "Wir richten Ihr digitales Marketing ein: SEO-Management, E-Mail-Marketing und Social Media über WhatsApp, LinkedIn, Pinterest und die weiteren Kanäle, die Ihr Unternehmen braucht. Im Fokus: Sie leichter auffindbar und verständlich machen.",
          details: ["SEO-Management", "E-Mail-Marketing", "WhatsApp, LinkedIn & Pinterest"],
          note: "Basic umfasst das komplette Marketing-Setup – SEO, E-Mail und Social Media – als einmalige Arbeit. Pro ergänzt Lead-Generierung und Wachstumsarbeit, ohne garantiertes Lead-Volumen.",
          phase: "Etablieren",
        },
        {
          title: ["KI, die Ihnen", "beim Antworten hilft"],
          description:
            "Wir richten Chatbots für häufige Kundenfragen und Support-Workflows ein, wo unterstützt mit Ihren Social-Kanälen verbunden. Gespräche, die Ihr Team brauchen, werden an eine Person übergeben.",
          details: ["Kunden-Chatbots", "Unterstützte Social-Kanäle", "Übergabe an Menschen"],
          note: "Kanalzugang, freigegebene FAQs und Software-Nutzungslimits prägen das Setup.",
          phase: "Automatisieren",
        },
        {
          title: ["Verbunden.", "Betreut."],
          description:
            "Wir warten und verbessern die vereinbarten Systeme und verbinden unterstützte Geschäftstools: ERP für Abläufe und CRM für Kundenbeziehungen. Versand- und Rechnungsworkflows können Teil dieser Integrationen sein.",
          details: ["Wartung & Performance", "ERP- & CRM-Anbindungen", "Versand & Rechnung"],
          note: "Integrationen hängen von Drittanbieter-Fähigkeiten ab. Laufende Betreuung wird monatlich abgerechnet; Drittanbieterkosten sind getrennt.",
          phase: "Verbinden & pflegen",
        },
      ],
    },
    about: {
      kicker: "Ein wenig über uns",
      titleLines: ["Ihr Unternehmen online.", "Alles arbeitet zusammen."],
      intro: "Wir sind Starter Shifter. Ihre Website, Ihre Social-Präsenz und Ihre Workflows – gebaut, um zusammenzuarbeiten.",
      benefits: [
        { title: "Klarheit vor dem Bauen", description: "Recherche, die Ihrem nächsten Schritt Richtung gibt." },
        { title: "Ihre Tools, verbunden", description: "Unterstützte Verbindungen. Weniger manuelle Schritte." },
        { title: "Ihr Unternehmen, online", description: "Eine Website oder ein Shop rund um Sie gestaltet." },
        { title: "Eine konsistente Social-Präsenz", description: "Ihre Marke, übertragen auf Seiten und Vorlagen." },
        { title: "Support mit menschlicher Note", description: "KI für die Routine. Ihr Team, wenn es zählt." },
        { title: "Sehen, was Aufmerksamkeit braucht", description: "Engpässe finden. Auf bessere Performance fokussieren." },
      ],
      ctaTitleLines: ["Machen wir Ihren", "nächsten Schritt digital."],
      ctaLabel: "Über Ihr Projekt sprechen",
    },
    pricing: {
      label: "Unsere Pläne",
      title: "Wählen Sie den Support, den Sie brauchen.",
      recommendedBadge: "Empfohlen",
      plans: [
        {
          name: "Basic-Plan",
          description: "Der komplette Aufbau und das digitale Marketing-Setup, einmalig geliefert.",
          price: "2.500 $",
          payment: "Einmalzahlung",
          billing: "Ihre Anwendung und Ihr Marketing, gebaut und übergeben.",
          includes: "Was enthalten ist",
          features: [
            "Unternehmens-, Markt- & Wettbewerbsrecherche",
            "Figma-Design & kreative Leitung",
            "Entwicklung der Website oder E-Commerce-Anwendung",
            "SEO-Management",
            "E-Mail-Marketing",
            "Social-Media-Marketing — WhatsApp, LinkedIn, Pinterest & mehr",
            "KI-Chatbot- & Support-Automatisierungs-Setup",
            "Setup von Bestands-, Versand- & Rechnungsworkflows",
            "Unterstützte ERP- & CRM-Integrationen",
            "Start & Übergabe",
          ],
          boundary:
            "Einmaliger Aufbau und Marketing-Setup. Wir versprechen keine Lead-Generierung und keinen laufenden Betrieb. Sie zahlen Hosting, Domains, Werbeausgaben und Zahlungsgebühren.",
          action: "Basic-Plan wählen",
        },
        {
          name: "Pro-Plan",
          description: "Alles aus Basic, plus ein Team für Wartung und Wachstum.",
          price: "2.500 $",
          payment: "Einmaliges Setup",
          monthly: "500 $",
          monthlyPeriod: "/ Monat",
          billing: "für Wartung & Lead-Generierung",
          includes: "Alles aus Basic, plus",
          features: [
            "Laufende Wartung & technischer Support",
            "Performance-Verbesserung & Monitoring",
            "Lead-Generierung & Kampagnenmanagement",
            "SEO & Marketing aktuell halten",
            "Wachstumsstrategie & -planung",
            "Kundenanfragen & Kundenbetreuung",
            "Chatbot- & Automatisierungsmanagement",
            "Laufende Workflow- & Integrationspflege",
          ],
          boundary:
            "Wir betreiben aktiv Lead-Generierung und helfen Ihrem Unternehmen zu wachsen. Lead-Volumina sind nicht garantiert – wenn ein Ansatz nicht funktioniert, strukturieren wir um und testen andere. Werbeausgaben sind getrennt.",
          action: "Pro-Plan wählen",
        },
      ],
      terms:
        "Leistungen, Mengen, unterstützte Tools und monatliche Abdeckung werden vor Arbeitsbeginn vereinbart. Sie liefern Geschäftsinhalte, Kontozugänge und Freigaben. Hosting, Domains, Software, Lizenzen, Nutzungsgebühren, Werbeausgaben und Zahlungs- oder Versandgebühren zahlen Sie und sind von den Agenturhonoraren getrennt. Zusätzliche Leistungen außerhalb der drei Gruppen werden separat kalkuliert.",
      footerLink: "Sehen, was laufender Support abdeckt",
    },
    faq: {
      kicker: "Etwas mehr Klarheit",
      titleLines: ["Gute Fragen.", "Klare Antworten."],
      intro: "Jedes Unternehmen startet woanders. Das sollten Sie wissen, bevor wir gemeinsam starten.",
      linkLabel: "Alle FAQs durchstöbern",
      questions: [
        {
          question: "Was ist genau enthalten?",
          answer:
            "Basic deckt den kompletten Aufbau und das digitale Marketing-Setup als einmalige Arbeit ab: Ihre Website oder E-Commerce-Anwendung, SEO-Management, E-Mail-Marketing und Social-Media-Marketing über WhatsApp, LinkedIn, Pinterest und weitere Kanäle nach Bedarf. Pro ergänzt alles aus Basic plus 500 $ pro Monat für laufende Wartung, Performance und Lead-Generierung. Leistungen außerhalb dieser drei Bereiche werden separat kalkuliert.",
        },
        {
          question: "Was ist der Unterschied zwischen Basic und Pro?",
          answer:
            "Basic kostet einmalig 2.500 $ und liefert den kompletten Anwendungsaufbau und das Marketing-Setup, danach Übergabe. Pro kostet 2.500 $ für dasselbe Setup plus 500 $ pro Monat für laufende Wartung, Performance-Verbesserung und Lead-Generierung. Basic umfasst keine Lead-Generierung und keine laufende Wartung. Lead-Volumina sind in beiden Plänen nicht garantiert.",
        },
        {
          question: "Gibt es zusätzliche oder versteckte Gebühren?",
          answer:
            "Hosting, Domains, Werbeausgaben, Zahlungsgebühren und andere Drittanbieterkosten zahlen Sie selbst, sie sind nicht in der Agenturgebühr enthalten. Wenn Sie Leistungen außerhalb der drei abgedeckten Bereiche oder Arbeit außerhalb des vereinbarten Umfangs brauchen, wird das separat kalkuliert.",
        },
        {
          question: "Was brauchen Sie von uns für den Start?",
          answer:
            "Einen unterschriebenen Vertrag, eine Anzahlung von 40 % und Ihre Unternehmens- und Projektdaten. Danach schließen Sie das Onboarding ab und liefern weitere Informationen oder Dokumente über Ihr Dashboard – einschließlich Katalogen und Produktbildern, damit wir präzise Mockups erstellen können.",
        },
        {
          question: "Wie lange dauert unser Projekt?",
          answer:
            "Die erste Übergabe von Recherche und einem Figma-Designentwurf ist innerhalb von maximal 3–4 Tagen nach Abschluss des Onboardings geplant. Danach planen wir zwei Google-Meet-Anrufe pro Woche, um Fortschritt und Updates zu teilen, bis Ihre Anwendung gebaut und übergeben ist.",
        },
        {
          question: "Können Sie die Tools verbinden, die wir bereits nutzen?",
          answer:
            "Wir bieten Integrationen zwischen Shops, Bestand, Versand und Geschäftssystemen wie ERP- und CRM-Tools an. Wir prüfen Ihre genauen Systeme, verfügbaren Zugänge und Plattformgrenzen, bevor wir Kompatibilität und Aufwand bestätigen.",
        },
        {
          question: "Können Sie nach dem Start helfen?",
          answer:
            "Ja. Pro umfasst 500 $ pro Monat für laufende Wartung und Support: Wir verbessern die Performance, halten SEO und Marketing aktuell und arbeiten auf bessere Verkäufe hin. Basic ist einmalig, aber jeder Einmalkunde wird den ganzen ersten Monat ab Onboarding unterstützt – wir übernehmen gewünschte Änderungen und Fehlerbehebungen. Nach diesem Monat wird weitere Hilfe, wenn Sie nicht mit Pro fortfahren, je nach Problem und benötigten Leistungen kalkuliert.",
        },
        {
          question: "Wem gehören Website und Konten nach der Übergabe?",
          answer:
            "Ihnen. Nach der Übergabe verwalten Sie die Website, ihre Konten und ihre Inhalte. Wir verlangen keine Fortsetzung unserer Leistungen, außer Sie möchten laufenden Support.",
        },
        {
          question: "Garantieren Sie Leads oder Verkäufe?",
          answer:
            "Wir können keine bestimmte Zahl versprechen, denn Ergebnisse hängen meist vom Markt ab. Was Pro-Kunden erhalten, ist aktive, laufende Lead-Generierung: Wir arbeiten daran, Leads und Verkäufe zu gewinnen, und wenn ein Ansatz nicht funktioniert, strukturieren wir um und testen andere, um zu finden, was zu Ihrem Unternehmen passt.",
        },
      ],
    },
    contact: {
      intro: "Ihr nächstes Kapitel",
      titleLines: ["Machen wir Ihren", "nächsten Schritt."],
      description:
        "Ein besserer Onlineshop, eine stärkere Social-Präsenz oder verbundene Workflows. Starten Sie mit dem, was Ihr Unternehmen braucht.",
      cta: "Ihr Projekt planen",
      dialogTitle: "Erzählen Sie uns, was Sie vorhaben.",
      dialogDescriptionWithEmail:
        "Erstellen Sie ein kurzes Projekt-Briefing und öffnen Sie es in Ihrer E-Mail-App, um es uns zu senden.",
      dialogDescriptionWithoutEmail:
        "Bringen Sie Ihre Ideen in ein kurzes Briefing, das Sie herunterladen und teilen können. Dieses Formular speichert eine Datei auf Ihrem Gerät; es sendet keine Anfrage.",
      secondaryLink: "Unsere Leistungen entdecken",
    },
  },

  pages: {
    about: {
      eyebrow: "Über Starter Shifter",
      note: "Wir arbeiten mit Unternehmen weltweit",
      titleLines: ["Ihr Unternehmen.", "Sein nächstes Kapitel"],
      titleMark: "online.",
      lede:
        "Wir sind Starter Shifter, eine Agentur, die Unternehmen hilft, ihre Produkte und Abläufe online zu bringen. Wir verbinden die Website, die Ihre Kunden sehen, mit den Tools und Workflows dahinter.",
      primaryCta: "Erzählen Sie uns von Ihrem Unternehmen",
      secondaryCta: "Unsere Pläne entdecken",
      facts: [
        { label: "Fokus", value: "Web, Social & KI-Workflows" },
        { label: "Reichweite", value: "Unternehmen weltweit" },
        { label: "Arbeitsweisen", value: "Basic-Setup oder Pro-Support" },
      ],
      statementEyebrow: "Die Kurzfassung",
      statementTitle:
        "Wir verbinden die Website, die Ihre Kunden sehen, mit den Workflows, auf die Ihr Team angewiesen ist.",
      statementParagraphs: [
        "Wir arbeiten mit Unternehmen weltweit und branchenübergreifend. Ob Sie eine Online-Präsenz aufbauen oder eine bestehende verbessern – der Ausgangspunkt ist Ihr Unternehmen und was es braucht.",
        "Unser Ansatz führt Recherche, Design, Entwicklung und unterstützte Integrationen in einem vereinbarten Plan zusammen, damit jeder Teil einen klaren Zweck hat.",
      ],
      workLabel: "Was wir tun",
      workTitleLines: ["Drei Bereiche.", "Ein verbundener Plan."],
      workAside:
        "Drei Arbeitsbereiche, zugeschnitten auf die Art, wie Ihr Unternehmen verkauft, kommuniziert und arbeitet.",
      workLink: "Unsere Leistungen entdecken",
      services: [
        {
          title: "Webanwendungen",
          description:
            "Websites und E-Commerce-Shops, gestaltet rund um Ihre Produkte und Kunden. Wir führen Recherche, kreative Leitung und Entwicklung auf Shopify oder WordPress mit WooCommerce zusammen, mit für Ihr Projekt vereinbarter Plattform und Funktionen.",
          tags: ["Shopify", "WordPress + WooCommerce", "Design & Aufbau"],
        },
        {
          title: "Social Media & digitales Marketing",
          description:
            "SEO-Management, E-Mail-Marketing und Social-Media-Marketing über WhatsApp, LinkedIn, Pinterest und weitere Kanäle nach Bedarf. Bei Pro-Projekten vereinbaren wir außerdem die laufenden Kampagnen und die Lead-Generierung, die Ihr Unternehmen braucht.",
          tags: ["SEO", "E-Mail-Marketing", "WhatsApp, LinkedIn & Pinterest"],
        },
        {
          title: "KI-Workflows",
          description:
            "Chatbots und unterstützte Automatisierungen, die helfen, häufige Fragen zu beantworten, Anfragen weiterzuleiten und repetitive Arbeit zu reduzieren. Wir können vereinbarte Bestands-, Versand-, Rechnungs- und Geschäftstools verbinden, wo die Plattformen es unterstützen.",
          tags: ["Chatbots", "Kundensupport", "Unterstützte Integrationen"],
        },
      ],
      processLabel: "So arbeiten wir",
      processTitleLines: ["Zuerst recherchieren.", "Ein klarer Weg."],
      processIntro:
        "Ihr Wissen über das Unternehmen und unsere Recherche leiten die Arbeit. Gemeinsame Entscheidungen halten Design, Aufbau und Übergabe ausgerichtet.",
      gateLabel: "Vor Arbeitsbeginn",
      gateItems: ["Unterschriebener Vertrag", "40 % Anzahlung", "Unternehmens- & Projektdaten"],
      steps: [
        {
          title: "Ihr Unternehmen verstehen",
          description:
            "Wir besprechen Ihre Ziele, Produkte, Kunden und bestehenden Systeme und vereinbaren dann Leistungen, Verantwortlichkeiten, Zeitplan und Kosten.",
        },
        {
          title: "Eine gemeinsame Richtung finden",
          description:
            "Unternehmens-, Markt- und Wettbewerbsrecherche fließt in einen grundlegenden Figma-Designentwurf ein. Sie prüfen die Richtung und geben Feedback, bevor wir in den vereinbarten Aufbau und die verbundenen Workflows gehen.",
        },
        {
          title: "Bauen, starten und planen, was folgt",
          description:
            "Wir implementieren und testen die gewählte Website und die Workflows mit Ihren Inhalten, Kontozugängen und Freigaben. Übergabe und jede laufende Wartungs- oder Wachstumsarbeit folgen der für Ihren Plan vereinbarten Abdeckung.",
        },
      ],
      scopeLabel: "Zusammenarbeit",
      scopeTitleLines: ["Klarer Umfang.", "Geteilte Erwartungen."],
      scopeIntro:
        "Vor Arbeitsbeginn definieren wir die gewählten Leistungen, was Sie liefern und was außerhalb der Agenturhonorare liegt.",
      scope: [
        {
          label: "Was Sie erhalten",
          description:
            "Basic deckt den kompletten Anwendungsaufbau plus digitales Marketing – SEO-Management, E-Mail-Marketing und Social-Media-Marketing – als einmalige Arbeit ab. Pro ergänzt laufende Wartung, Performance-Verbesserung und Lead-Generierung.",
        },
        {
          label: "Was Sie liefern",
          description:
            "Vereinbarte Inhalte, Geschäftsinformationen, Produktkataloge und -bilder, Kontozugänge und Freigaben. Zeitpläne hängen von diesen Eingaben und von Freigaben der Drittanbieter-Plattformen ab.",
        },
        {
          label: "Getrennt gehalten",
          description:
            "Plattform-Abos, Hosting, Domains, kostenpflichtige Apps, Nutzungsgebühren, Werbeausgaben und Zahlungsgebühren zahlen Sie, getrennt von den Agenturhonoraren.",
        },
      ],
      scopeCta: "Basic und Pro vergleichen",
      scopeFooter:
        "Leistungen, Mengen, unterstützte Tools, Überarbeitungen und Support-Abdeckung werden vor Arbeitsbeginn vereinbart.",
    },

    faq: {
      eyebrow: "Ressourcen / FAQs",
      note: "Die Details, klar beantwortet",
      titleLines: ["Gute Fragen.", "Klare Antworten."],
      titleMark: "Klare Antworten.",
      description:
        "Die praktischen Details zu Umfang, Preisen, Zeitplänen, Integrationen und Support – geschrieben, wie wir sie in einem ersten Gespräch erklären würden.",
      facts: [
        { label: "Pläne", value: "Basic & Pro" },
        { label: "Onboarding", value: "Vertrag, Anzahlung & Daten" },
        { label: "Abdeckung", value: "Pro Projekt vereinbart" },
      ],
      sectionIndex: "01",
      sectionLabel: "Häufige Fragen",
      sectionTitleLines: ["Direkte Antworten,", "ohne Kleingedrucktes."],
      sectionIntro:
        "Wenn Ihre Frage hier fehlt, starten Sie ein Projekt-Briefing und sagen Sie uns, was Sie lösen möchten. Wir antworten direkt.",
      jumpTo: "Springen zu",
      categoriesLabel: "FAQ-Kategorien",
      groups: [
        {
          id: "faq-plans",
          label: "Pläne & Umfang",
          questions: [
            {
              question: "Was ist Starter Shifter?",
              answer:
                "Starter Shifter ist eine Agentur, die Unternehmen hilft, ihre Produkte und Abläufe online zu bringen. Wir arbeiten an Websites und E-Commerce-Anwendungen, Social-Präsenz, Chatbots und Automatisierung, Integrationen und den Systemen dahinter. Kunden können überall ansässig sein, und jeder Umfang wird um das Unternehmen herum gestaltet.",
            },
            {
              question: "Was ist der Unterschied zwischen Basic und Pro?",
              answer:
                "Basic kostet einmalig 2.500 $. Es deckt den kompletten Anwendungsaufbau plus das digitale Marketing-Setup ab: Recherche und Design, Entwicklung der Website oder E-Commerce-Anwendung, SEO-Management, E-Mail-Marketing und Social-Media-Marketing über WhatsApp, LinkedIn, Pinterest und weitere Kanäle nach Bedarf, plus Chatbot- und Automatisierungs-Setup, unterstützte Betriebsintegrationen und den Start. Sie verwalten Lead-Generierung und laufende Arbeit nach der Übergabe. Pro kostet 2.500 $ für dasselbe Setup plus 500 $ pro Monat für laufende Wartung, Performance-Verbesserung, Lead-Generierung und das Aktualisieren von SEO und Marketing. Leistungen und Abdeckung werden vorab vereinbart; Lead-Volumina sind nicht garantiert und Drittanbieterkosten wie Hosting, Domains, Werbeausgaben und Zahlungsgebühren zahlen Sie.",
            },
            {
              question: "Können wir nur einen Teil eines Plans wählen?",
              answer:
                "Ja. Basic und Pro sind Ausgangspunkte für die häufigsten Umfänge. Wenn Sie ein kleineres, größeres oder anderes Projekt brauchen, können wir einen maßgeschneiderten Umfang besprechen. Die gewählte Arbeit, der Preis, der Zeitplan und die Verantwortlichkeiten werden vor Arbeitsbeginn vereinbart.",
            },
            {
              question: "Gibt es Kosten über den Planpreis hinaus?",
              answer:
                "Ja. Hosting, Domains, Werbeausgaben, Zahlungsabwicklungsgebühren und andere Drittanbieterkosten zahlen Sie, getrennt von den Agenturhonoraren. Plattform-Abos, Themes, Apps, Plugins und Lizenzen, ERP-, CRM-, Chatbot- und andere Software-Abos, Nutzungsgebühren, Asset-Lizenzierung sowie Versand- oder Fulfillment-Gebühren liegen ebenfalls in Ihrer Verantwortung. Leistungen außerhalb der drei abgedeckten Bereiche oder Arbeit außerhalb des vereinbarten Umfangs werden separat kalkuliert.",
            },
            {
              question: "Garantieren Sie Leads, Verkäufe oder Wachstum?",
              answer:
                "Wir können keine bestimmte Zahl an Leads oder Verkäufen versprechen – Ergebnisse hängen meist vom Markt und Faktoren außerhalb unserer Kontrolle ab. Was wir für Pro versprechen, ist die Arbeit selbst: Wir betreiben aktiv Lead-Generierung und helfen Ihrem Unternehmen zu wachsen, und wenn ein Ansatz keine Ergebnisse bringt, strukturieren wir um und testen andere, um zu finden, was passt. Wir arbeiten gemeinsam daran, nicht nur als Setup-Übergabe.",
            },
            {
              question: "Wie funktioniert die Zahlung?",
              answer:
                "Das Onboarding folgt einem unterschriebenen gemeinsamen Vertrag und einer Anzahlung von 40 % sowie Ihren Unternehmens- und Projektdaten. Der Zeitpunkt der Restzahlung und weitere kaufmännische Bedingungen sind in Ihrem Vertrag festgelegt. Basic ist eine Einmalgebühr; Pro kombiniert eine Setup-Gebühr mit einer monatlichen Gebühr. Weitere Zahlungs- oder Rechtsbedingungen werden individuell vereinbart.",
            },
          ],
        },
        {
          id: "faq-process",
          label: "Prozess & Zeitplan",
          questions: [
            {
              question: "Was brauchen Sie von uns für den Start?",
              answer:
                "Einen unterschriebenen gemeinsamen Vertrag, eine Anzahlung von 40 % und Ihre Unternehmens- und Projektdaten. Je nach Umfang brauchen wir möglicherweise auch Produktinformationen, Marken-Assets, Zugang zu bestehenden Tools, Richtlinien, Steuer- und Versandregeln und einen Kontakt, der Arbeit prüfen und freigeben kann.",
            },
            {
              question: "Wie lange dauert unser Projekt?",
              answer:
                "Die erste Übergabe von Recherche und einem Figma-Designentwurf ist innerhalb von maximal 3–4 Tagen nach Abschluss des Onboardings geplant. Der komplette Aufbau hängt danach vom Umfang, technischen Anforderungen, der Inhaltsbereitschaft, Drittanbieter-Freigaben und Prüfzyklen ab. Wir planen zwei Google-Meet-Anrufe pro Woche, um Fortschritt zu teilen, und vereinbaren Meilensteine und Zeitplan in Ihrem Angebot.",
            },
            {
              question: "Was ist die geplante frühe Übergabe?",
              answer:
                "Nach dem unterschriebenen Vertrag, der Anzahlung von 40 % und vollständigen Unternehmens-/Projektdaten planen wir eine erste Übergabe innerhalb von 3–4 Tagen mit Unternehmens-, Markt- und Wettbewerbsrecherche plus einem grundlegenden Figma-Designentwurf mit Varianten. Der genaue Zeitstart, die Recherchetiefe, die Variantenzahl und das Überarbeitungsbudget werden für Ihr Projekt bestätigt. Die Übergabe ist ein richtungsweisender Schritt, nicht die fertige Website oder alle Integrationen.",
            },
            {
              question: "Wie funktionieren Überarbeitungen?",
              answer:
                "Sie prüfen die vereinbarte Arbeit an den Entscheidungspunkten Ihres Umfangs und geben konsolidiertes Feedback. Das Überarbeitungsbudget wird vor Arbeitsbeginn vereinbart. Wenn eine Anfrage den vereinbarten Umfang ändert oder neue Arbeit hinzufügt, definieren wir Zusatzarbeit, Preis und Zeitplan, bevor wir fortfahren.",
            },
            {
              question: "Was passiert, wenn unsere Inhalte oder Zugänge verspätet kommen?",
              answer:
                "Zeitpläne hängen von den vereinbarten Eingaben ab. Wenn Inhalte, Kontozugänge, Freigaben oder Drittanbieter-Antworten verspätet eintreffen, kann sich der Plan verschieben. Wir markieren die Abhängigkeit und vereinbaren einen überarbeiteten Plan, statt die Verzögerung stillschweigend zu schlucken.",
            },
          ],
        },
        {
          id: "faq-build",
          label: "Websites & Integrationen",
          questions: [
            {
              question: "Auf welchen Plattformen bauen Sie?",
              answer:
                "Wir bauen Websites und E-Commerce-Anwendungen auf Shopify oder WordPress, mit WooCommerce, wenn ein Shop nötig ist. Wenn eine andere Plattform oder ein anderer Website-Builder besser passen könnte, prüfen wir Support und Machbarkeit, bevor wir uns festlegen. Der Plattformansatz wird in Ihrem Angebot bestätigt.",
            },
            {
              question: "Können Sie eine bestehende Website neu gestalten oder migrieren?",
              answer:
                "Wir können ein Redesign oder eine Migration besprechen, aber sie ist nicht automatisch in Basic oder Pro enthalten. Wir prüfen zuerst die aktuelle Website, Inhalte, Produkte, Integrationen und Weiterleitungen. Migrationsumfang, Risiken und Preis werden separat vereinbart.",
            },
            {
              question: "Können Sie die Tools verbinden, die wir bereits nutzen?",
              answer:
                "Wir bieten Integrationen zwischen Shops, Bestand, Versand, Rechnung und Geschäftssystemen wie ERP- und CRM-Tools an. Die Kompatibilität hängt von den genauen Systemen, Versionen, Zugängen, APIs und Plattformgrenzen ab. Wir prüfen diese, bevor wir bestätigen, was verbunden werden kann und was die Arbeit umfasst.",
            },
            {
              question: "Bauen Sie native Mobile-Apps?",
              answer:
                "Unsere bestätigte Arbeit sind Websites und Webanwendungen. Wenn Sie eine native Mobile-App erwägen, sprechen Sie es früh an, damit wir bestätigen können, ob sie zum Projekt passt. Sie wird nicht als Teil eines Website- oder E-Commerce-Aufbaus vorausgesetzt.",
            },
            {
              question: "Können Sie Chatbots und Social-Automatisierung einrichten?",
              answer:
                "Ja, als vereinbartes Setup. Wir gestalten die Anwendungsfälle, verbinden unterstützte Kanäle, nutzen freigegebene Wissensquellen, setzen Grenzen und organisieren bei Bedarf eine Übergabe an Menschen. Die genaue Kanalunterstützung, das Gesprächsvolumen, Berechtigungen und Nutzungskosten werden während der Machbarkeitsprüfung bestätigt. Wir versprechen keinen vollständig autonomen Support und nicht jedes soziale Netzwerk.",
            },
          ],
        },
        {
          id: "faq-after-launch",
          label: "Nach dem Start",
          questions: [
            {
              question: "Können Sie nach dem Start helfen?",
              answer:
                "Ja. Pro umfasst laufende Wartung und Support für 500 $ pro Monat zusätzlich zur Setup-Gebühr von 2.500 $. Wir verbessern die Performance, halten SEO und Marketing aktuell und arbeiten auf bessere Verkäufe hin. Basic ist ein einmaliges Setup, aber jeder Einmalkunde wird den ganzen ersten Monat ab Onboarding unterstützt – wir übernehmen gewünschte Änderungen und Fehlerbehebungen. Nach diesem ersten Monat wird weitere Hilfe, wenn Sie nicht mit Pro fortfahren, je nach Problem und benötigten Leistungen kalkuliert.",
            },
            {
              question: "Was deckt die Wartung ab?",
              answer:
                "Die typische Abdeckung kann Routineprüfungen, anwendbare Updates und Kompatibilitätsprüfungen, Fehlerbehebungen, Monitoring, wo vereinbart Backup- und Wiederherstellungsaufgaben sowie Support-Bearbeitung umfassen. Die genaue Liste hängt von Ihren Systemen und der gekauften Abdeckung ab. Neue Funktionen und Arbeit außerhalb dieser Abdeckung brauchen einen eigenen Umfang.",
            },
            {
              question: "Bieten Sie 24/7-Support oder eine garantierte Reaktionszeit?",
              answer:
                "Wir veröffentlichen kein universelles 24/7- oder Reaktionszeitversprechen. Supportzeiten, Kanäle, Kapazität, Reaktionsziele und Eskalation werden in Ihrem Support-Umfang vereinbart. Wenn Sie ein bestimmtes Service-Level brauchen, sprechen Sie es vor dem Projekt an, damit wir bestätigen können, ob es erfüllbar ist.",
            },
            {
              question: "Wem gehören Website und Konten nach der Übergabe?",
              answer:
                "Ihnen. Nach der Übergabe verwalten Sie die Website, ihre Konten und ihre Inhalte. Wir verlangen keine Fortsetzung unserer Leistungen, außer Sie möchten laufenden Support. Plattformkonten, Lizenzen und Drittanbieterdienste können ihren eigenen Bedingungen unterliegen.",
            },
            {
              question: "Können Sie unsere Anzeigen und Lead-Generierung betreiben?",
              answer:
                "Pro umfasst agenturgeführte Lead-Generierung und Kampagnenarbeit im vereinbarten Umfang. Basic schließt agenturgeführte Lead-Generierung aus. Wir arbeiten aktiv daran, Leads und Verkäufe zu gewinnen, und wenn ein Ansatz nicht funktioniert, strukturieren wir um und testen andere. Werbeausgaben zahlen immer Sie, getrennt von den Agenturhonoraren, und Lead-Volumina sind nicht garantiert – Ergebnisse hängen vom Markt ab. Kanäle, Kampagnenumfang, Inhaltsmengen und Berichtstakt werden vorab vereinbart.",
            },
          ],
        },
        {
          id: "faq-working",
          label: "Zusammenarbeit",
          questions: [
            {
              question: "Wie starten wir ein Projekt?",
              answer:
                "Beginnen Sie mit einem Projekt-Briefing auf dieser Website. Wir nutzen es, um Ihr Unternehmen und Ihre Ziele zu verstehen, und besprechen dann den passenden Umfang. Wenn es passt, erhalten Sie ein Angebot mit Leistungen, Ausschlüssen, Preisen, Zeitplan und Verantwortlichkeiten. Die Arbeit beginnt nach unterschriebenem Vertrag, Anzahlung von 40 % und Projektdaten.",
            },
            {
              question: "Arbeiten Sie mit Unternehmen außerhalb Ihres Landes?",
              answer:
                "Ja. Starter Shifter arbeitet mit Unternehmen weltweit. Wir beanspruchen keine lokale rechtliche, steuerliche oder Plattform-Abdeckung in jedem Markt, daher werden Anforderungen, die für Ihre Rechtsordnung spezifisch sind, für Ihr Projekt bestätigt.",
            },
            {
              question: "Wie gehen Sie mit unseren Informationen um?",
              answer: {
                before:
                  "Wir nutzen die von Ihnen geteilten Angaben, um Ihr Unternehmen zu verstehen und die vereinbarten Leistungen vorzubereiten oder zu liefern. Wir verkaufen Ihr Briefing nicht und teilen es nicht mit anderen Unternehmen für deren eigene Nutzung. Unsere ",
                linkLabel: "Datenschutzinformationen",
                linkHref: "/policies/privacy",
                after:
                  " erklären das aktuelle Projekt-Briefing und das Kundenportal und benennen, was noch auf Freigabe wartet.",
              },
            },
            {
              question: "Was, wenn wir nicht sicher sind, was wir brauchen?",
              answer:
                "Das ist ein normaler Ausgangspunkt. Teilen Sie das Geschäftsproblem und was bereits vorhanden ist. Wir helfen, den kleinsten sinnvollen Umfang zu finden, auch ob zuerst eine Recherche oder ein Discovery-Schritt erfolgen sollte. Sie müssen vor dem ersten Gespräch keinen Plan wählen.",
            },
            {
              question: "Ist das Projekt-Briefing ein Vertrag oder Angebot?",
              answer:
                "Nein. Das Projekt-Briefing ist ein Ausgangspunkt für die Diskussion. Es begründet keine Vereinbarung, reserviert keine Zeit und legt keinen Preis fest. Ein Angebot und ein unterschriebener Vertrag definieren Umfang und kaufmännische Bedingungen.",
            },
          ],
        },
      ],
    },

    howWeWork: {
      eyebrow: "Ressourcen / So arbeiten wir",
      note: "Lieferung, klar erklärt",
      titleLines: ["Ein klarer Weg vom ersten Gespräch bis zur"],
      titleMark: "laufenden Betreuung.",
      description:
        "Jedes Projekt ist anders, aber die Art, wie wir es durchlaufen, ist es nicht. Das sind die Phasen, mit denen wir Ihr Unternehmen verstehen, den Umfang vereinbaren, die Arbeit bauen und das Folgende begleiten.",
      facts: [
        { label: "Ausgangspunkt", value: "Vertrag, 40 % Anzahlung & Daten" },
        { label: "Erste Übergabe", value: "Recherche & Figma-Richtung" },
        { label: "Arbeitsweisen", value: "Basic-Setup oder Pro-Support" },
      ],
      prerequisitesTitleLines: ["Das Onboarding startet, wenn", "die Grundlagen klar sind."],
      prerequisitesLabel: "Der Ausgangspunkt",
      prerequisitesIntro:
        "Das Onboarding folgt drei Voraussetzungen. Sie schützen beide Seiten: Der Umfang ist verstanden, das Engagement ist real, und wir haben genug Kontext, um nützliche Arbeit zu beginnen.",
      prerequisites: [
        {
          title: "Ein unterschriebener gemeinsamer Vertrag",
          description:
            "Der Vertrag hält den vereinbarten Umfang, die Verantwortlichkeiten und die kaufmännischen Bedingungen fest. Die Arbeit beginnt erst nach der Unterschrift.",
        },
        {
          title: "Eine Anzahlung von 40 %",
          description:
            "Die Anzahlung bestätigt das Engagement und lässt uns Lieferzeit reservieren. Die restlichen Zahlungsbedingungen sind in Ihrem Vertrag festgelegt.",
        },
        {
          title: "Unternehmens- & Projektdaten",
          description:
            "Wir brauchen genug Kontext über Ihr Unternehmen, Ihre Ziele und Ihre bestehende Einrichtung, um Recherche und Onboarding zu beginnen.",
        },
      ],
      prerequisitesFootNote:
        "Vor der Zahlung legt Ihr Angebot die gewählten Leistungen, Leistungen, Ausschlüsse, den Zeitplan, die Verantwortlichkeiten und die Kosten fest. Weitere Arbeit erfordert eine explizite Entscheidung zu Umfang, Preis und Zeitplan.",
      stagesTitleLines: ["Acht Phasen, zugeschnitten auf", "die Arbeit, die Sie wirklich brauchen."],
      stagesLabel: "Der Lieferweg",
      stagesIntro:
        "Diese Phasen beschreiben, wie wir arbeiten. Ihr Angebot bestätigt, welche gelten, was enthalten ist und wie der Abschluss für Ihr Projekt aussieht.",
      stages: [
        {
          title: "Entdeckung & Qualifizierung",
          description:
            "Wir besprechen Ihre Ziele, aktuellen Systeme, Einschränkungen und wie Erfolg aussähe. Ziel ist, das Problem zu verstehen, bevor wir einen Aufbau vorschlagen.",
          bring: "Ziele, bestehende Einrichtung, Entscheidungsträger",
          output: "Eine Discovery-Zusammenfassung oder ein empfohlener nächster Schritt",
        },
        {
          title: "Umfang & Angebot",
          description:
            "Wir definieren Leistungen, Ausschlüsse, Plattformansatz, Preise, Zeitplan und Verantwortlichkeiten in einem schriftlichen Angebot.",
          bring: "Zugang zu Systemdetails und zeitnahe Machbarkeitsantworten",
          output: "Ein Angebot, das Sie prüfen und freigeben können",
        },
        {
          title: "Vereinbarung & Onboarding",
          description:
            "Sobald der Vertrag unterschrieben, die Anzahlung eingegangen und Ihre Projektdaten vollständig sind, beginnt das Onboarding und wir starten die vereinbarte Arbeit.",
          bring: "Unterschriebener Vertrag, 40 % Anzahlung, Unternehmensdaten",
          output: "Ein aktives Projekt und ein gemeinsamer Ausgangspunkt",
        },
        {
          title: "Erste Recherche & Figma-Entwurf",
          description:
            "Wir präsentieren Unternehmens-, Markt- und Wettbewerbsrecherche zusammen mit einem grundlegenden Figma-Designentwurf mit Varianten zur Prüfung.",
          bring: "Feedback zur Richtung und zu vereinbarten Überarbeitungen",
          output: "Eine gewählte Designrichtung für die Umsetzung",
        },
        {
          title: "Design & Umsetzung",
          description:
            "Wir bauen die vereinbarte Website, Anwendung, Kampagnen oder Integrationen. Plattformfähigkeiten und Drittanbieter-Antwortzeiten prägen das Machbare.",
          bring: "Inhalte, Produktdaten, Kontozugänge, Freigaben",
          output: "Die vereinbarte Arbeit, gebaut und prüfbereit",
        },
        {
          title: "Tests & Kundenprüfung",
          description:
            "Wir prüfen die vereinbarte Funktionalität und dokumentieren Probleme. Sie testen die relevanten Geschäftsabläufe und bestätigen die Abnahme oder eine begrenzte Überarbeitungsliste.",
          bring: "Testkonten, repräsentative Daten, Feedback",
          output: "Ein getesteter Build und eine klare Liste verbleibender Punkte",
        },
        {
          title: "Start & Übergabe",
          description:
            "Wir deployen oder aktivieren die freigegebene Arbeit und übergeben die vereinbarte Dokumentation, Zugänge und Schulung.",
          bring: "Startfreigabe und Bereitschaft von Domains und Konten",
          output: "Live-Arbeit und eine vereinbarte Übergabe",
        },
        {
          title: "Laufender Support & Verbesserung",
          description:
            "Wenn Sie laufende Abdeckung gekauft haben, warten, verwalten, berichten oder verbessern wir die vereinbarten Systeme. Basic umfasst keine laufende Verwaltung.",
          bring: "Kontakte, Entscheidungen und wiederkehrende Eingaben",
          output: "Die in Ihrem Support-Umfang definierte laufende Arbeit",
        },
      ],
      youBring: "Sie liefern",
      output: "Ergebnis",
      stagesFootNote:
        "Fehlerbehebung, Wartung und die Entwicklung neuer Funktionen sind unterschiedliche Arbeitskategorien. Jede wird unter dem dafür geltenden Umfang behandelt, statt als enthalten vorausgesetzt.",
      handoffTitleLines: ["Eine gemeinsame Richtung,", "bevor wir bauen."],
      handoffLabel: "Die erste Übergabe",
      handoffIntro:
        "Die frühe Übergabe soll Ihnen etwas Konkretes zum Reagieren geben: Recherche, die den Plan prägt, und ein Designentwurf mit Optionen.",
      handoffCards: [
        {
          title: "Unternehmens-, Markt- & Wettbewerbsrecherche",
          description:
            "Wir untersuchen Ihr Unternehmen, das Segment, in dem Sie tätig sind, und die Alternativen, die Ihre Kunden erwägen könnten. Die Erkenntnisse prägen Plan und Designrichtung.",
        },
        {
          title: "Ein grundlegender Figma-Designentwurf",
          description:
            "Der Entwurf präsentiert Varianten zur Prüfung, damit Sie eine Richtung wählen und fokussiertes Feedback geben können, bevor es in die Umsetzung geht.",
        },
        {
          title: "Ein Entscheidungspunkt, kein fertiger Build",
          description:
            "Sie wählen eine Richtung und fordern die vereinbarten Überarbeitungen an. Die folgende Umsetzung ist eine eigene Phase mit eigenen Prüf- und Freigabepunkten.",
        },
        {
          title: "Was sie nicht verspricht",
          description:
            "Diese Übergabe ist nicht die fertige Website, nicht alle Assets und nicht alle Integrationen. Recherchetiefe und Designumfang entsprechen der verfügbaren Zeit und Information.",
        },
      ],
      handoffNote:
        "Die erklärte Absicht ist eine erste Übergabe innerhalb von maximal 3–4 Tagen nach unterschriebenem Vertrag, Anzahlung von 40 % und vollständigen Unternehmens-/Projektdaten. Während des Aufbaus planen wir zwei Google-Meet-Anrufe pro Woche, um Fortschritt zu teilen. Der genaue Zeitstart, die Recherchetiefe, die Variantenzahl und das Überarbeitungsbudget werden in Ihrem Angebot bestätigt.",
      workingTitleLines: ["Klare Verantwortlichkeiten.", "Weniger Überraschungen."],
      workingLabel: "Zusammenarbeit",
      workingIntro:
        "Ein gutes Projekt handelt nicht nur davon, was wir bauen. Es geht auch darum, wer was liefert, wer es freigibt und welche Kosten außerhalb der Agenturgebühr liegen.",
      workingTogether: [
        {
          title: "Was Sie liefern",
          items: [
            "Ihre vollständigen Unternehmens- und Projektdaten, im Onboarding ausgefüllt",
            "Geschäftsinhalte, Produktdaten, Kataloge und Produktbilder",
            "Kontozugänge und technische Ansprechpartner",
            "Richtlinien, Steuerregeln, Versanddetails und Freigaben",
            "Einen Entscheidungsträger für Prüfungen und Abnahme",
          ],
        },
        {
          title: "Was wir verwalten",
          items: [
            "Die vereinbarte Recherche, das Design und die Umsetzung",
            "Unterstützte Integrationen und Tests",
            "Start, Dokumentation und Übergabe",
            "Jede separat gekaufte laufende Arbeit",
          ],
        },
        {
          title: "Getrennt gehalten",
          items: [
            "Hosting, Domains, Themes, Apps und Lizenzen",
            "ERP-, CRM-, Chatbot- und andere Software-Abos",
            "Zahlungsabwicklung, Nutzung und Versandgebühren",
            "Werbeausgaben und Drittanbieter-Asset-Lizenzierung",
          ],
        },
      ],
      workingFootNoteBefore:
        "Leistungen, Mengen, unterstützte Tools, Überarbeitungsgrenzen und Support-Kapazität werden vor Arbeitsbeginn vereinbart. Siehe ",
      workingFootNoteLink: "Support & Betreuung",
      workingFootNoteAfter: " für die Handhabung der laufenden Abdeckung.",
    },

    products: {
      eyebrow: "Ressourcen / Produkte & Vorlagen",
      note: "Websites, Anwendungen & Systeme",
      titleLines: ["Ein genauerer Blick", "auf das, was wir bauen."],
      titleMark: "bauen.",
      description:
        "Websites, Anwendungen und verbundene Erlebnisse. Entdecken Sie die Sammlung, die Arbeitskategorien dahinter und wie wir den Unterschied zwischen einem Konzept und abgeschlossener Kundenarbeit kennzeichnen.",
      facts: [
        { label: "Fokus", value: "Websites, Anwendungen & Systeme" },
        { label: "Sammlung", value: "Konzeptvorschauen" },
        { label: "Nachweis-Richtlinie", value: "Nur freigegebene Arbeit" },
      ],
      workTitleLines: ["Drei Bereiche.", "Ein verbundenes Erlebnis."],
      workLabel: "Die Arbeit",
      workIntro:
        "Die meisten Projekte berühren mehr als einen Bereich. Ein Shop braucht vielleicht eine Betriebsansicht; ein Support-Flow braucht vielleicht eine Website und eine CRM-Verbindung dahinter.",
      buildAreas: [
        {
          title: "Websites & E-Commerce",
          description:
            "Shops und Unternehmenswebsites, gestaltet nach Ihrer Verkaufsweise, mit Katalog, Checkout und Inhalt auf einer vereinbarten Plattform.",
          tags: ["Shopify", "WordPress + WooCommerce", "Design & Aufbau"],
        },
        {
          title: "Webanwendungen & Betrieb",
          description:
            "Interne Tools und kundenorientierte Anwendungen, die Bestellungen, Bestand und verbundene Geschäftssysteme in klarere Workflows bringen.",
          tags: ["Dashboards", "Workflows", "ERP- & CRM-Anbindungen"],
        },
        {
          title: "KI- & Automatisierungserlebnisse",
          description:
            "Chatbots, Support-Flows und unterstützte Automatisierungen, die häufige Fragen beantworten, Anfragen weiterleiten und repetitive Arbeit reduzieren.",
          tags: ["Chatbots", "Übergabe an Menschen", "Unterstützte Integrationen"],
        },
      ],
      collectionTitleLines: ["Konzepte heute.", "Nachweise, sobald freigegeben."],
      collectionLabel: "Die Sammlung",
      collectionIntroWithPreviews:
        "Die Sammlung zeigt derzeit Designkonzepte. Das sind illustrative Vorschauen; Details und Screenshots abgeschlossener Projekte erscheinen erst, wenn sie geliefert und freigegeben sind.",
      collectionIntroWithoutPreviews:
        "Entdecken Sie die Sammlung von Websites, Anwendungen und verbundenen Erlebnissen.",
      visitProject: "Projekt besuchen",
      collectionFootNote:
        "Konzeptvorschauen illustrieren eine Richtung; sie sind keine Kundenergebnisse oder veröffentlichte Fallstudien. Wir veröffentlichen keine Kundennamen, Logos, Testimonials oder Kennzahlen ohne Erlaubnis und Verifizierung.",
    },

    support: {
      eyebrow: "Ressourcen / Support & Betreuung",
      note: "Hilfe nach dem Start",
      titleLines: ["Support, der die Arbeit", "am Laufen hält."],
      titleMark: "am Laufen hält.",
      description:
        "Der Start ist ein Meilenstein, nicht die Ziellinie. So funktionieren laufende Betreuung, Wartung und Verbesserung, nachdem Ihr Projekt live ist – und was außerhalb eines vereinbarten Support-Umfangs liegt.",
      facts: [
        { label: "Basic", value: "Einmaliges Setup" },
        { label: "Pro", value: "2.500 $ + 500 $/Monat" },
        { label: "Abdeckung", value: "Pro Projekt vereinbart" },
      ],
      actionCta: "Ihr Projekt planen",
      actionSecondary: "Im Arbeitsbereich anmelden",
      plans: [
        {
          name: "Basic",
          price: "2.500 $",
          payment: "Einmaliges Setup",
          description:
            "Der komplette Aufbau und das digitale Marketing-Setup, einmalig geliefert und übergeben. Basic umfasst keine laufende Verwaltung.",
          items: [
            "Der komplette Anwendungsaufbau und der Start",
            "SEO-Management, E-Mail-Marketing und Social-Media-Marketing",
            "Chatbot- und Automatisierungs-Setup",
            "Übergabe der vereinbarten Zugänge und Dokumentation",
            "Support im ersten Monat für Änderungen und Fehlerbehebungen",
          ],
        },
        {
          name: "Pro",
          price: "2.500 $",
          payment: "Setup + 500 $ / Monat",
          description:
            "Die Basic-Basis plus laufende Wartung, Performance-Verbesserung, Lead-Generierung und das Aktualisieren von SEO und Marketing.",
          items: [
            "Laufende Wartung und technischer Support",
            "Performance-Verbesserung und Monitoring",
            "Lead-Generierung und Kampagnenmanagement",
            "SEO und Marketing aktuell halten",
            "Chatbot- und Workflow-Pflege",
          ],
        },
      ],
      waysTitleLines: ["Zwei Wege, um die Dinge", "in Bewegung zu halten."],
      waysLabel: "Nach dem Start",
      waysIntro:
        "Basic ist ein einmaliger Aufbau. Pro ergänzt eine laufende Beziehung. Keiner der Pläne bedeutet unbegrenzte Arbeit; die abgedeckten Systeme, die Kapazität und die Taktung werden vorab vereinbart.",
      waysFootNote:
        "Die monatliche Pro-Gebühr deckt die vereinbarte laufende Arbeit ab, einschließlich aktiver Lead-Generierung – wenn ein Ansatz keine Ergebnisse bringt, strukturieren wir um und testen andere. Werbeausgaben, Drittanbieter-Abos und Nutzungsgebühren zahlen Sie. Lead-Volumina und Wachstumsergebnisse sind nicht garantiert.",
      coverageTitleLines: ["Die Arbeit hinter", "„es am Laufen halten“."],
      coverageLabel: "Abdeckung",
      coverageIntro:
        "Support kann je nach beteiligten Systemen Unterschiedliches bedeuten. Das sind die Bereiche, die wir abdecken können, wenn sie in Ihren Support-Umfang geschrieben sind.",
      coverage: [
        {
          title: "Wartung & Updates",
          description:
            "Routineprüfungen, anwendbare Updates und Kompatibilitätsprüfungen für die vereinbarten Systeme. Die genaue Taktung ist in Ihrem Support-Umfang festgelegt.",
        },
        {
          title: "Fehlerbehebungen",
          description:
            "Korrektur von Fehlern im vereinbarten Build. Ein Fehler ist etwas anderes als eine neue Funktion oder eine Änderung des vereinbarten Umfangs.",
        },
        {
          title: "Performance",
          description:
            "Monitoring und vereinbarte Verbesserungen von Geschwindigkeit, Zuverlässigkeit oder der von Ihrem Plan abgedeckten Workflows. Ziele sind projektspezifisch.",
        },
        {
          title: "Integrationen & Daten",
          description:
            "Pflege der unterstützten ERP-, CRM-, Bestands-, Versand- und Rechnungsverbindungen, einschließlich vereinbartem Monitoring und Fehlerbehandlung.",
        },
        {
          title: "Backup & Wiederherstellung",
          description:
            "Backup- und Wiederherstellungsaufgaben, wo vereinbart und von der Plattform unterstützt. Verantwortlichkeiten und Wiederherstellungserwartungen sind dokumentiert.",
        },
        {
          title: "Support-Bearbeitung",
          description:
            "Ein klarer Weg für Fragen und Probleme, mit Triage, vereinbarten Reaktionszielen und Eskalation für die Systeme im Umfang.",
        },
      ],
      coverageFootNote:
        "Die genaue Liste hängt von Ihrer Plattform-Mischung, den Integrationen und der gekauften Abdeckung ab. Wartung, Fehlerbehebung und die Entwicklung neuer Funktionen werden als unterschiedliche Arbeitskategorien behandelt.",
      requestTitleLines: ["Ein klarer Weg", "zu einer echten Antwort."],
      requestLabel: "Wenn etwas Aufmerksamkeit braucht",
      requestStepLabel: "Anfrage",
      requestIntro:
        "Support funktioniert am besten, wenn die Anfrage präzise ist und am vereinbarten Ort ankommt. So sieht eine nützliche Anfrage aus.",
      requestSteps: [
        {
          title: "Den vereinbarten Kanal nutzen",
          description:
            "Senden Sie die Anfrage über den für Ihr Projekt bestätigten Support-Kanal, damit sie am richtigen Ort ankommt und nachverfolgt werden kann.",
        },
        {
          title: "Das nützliche Detail angeben",
          description:
            "Beschreiben Sie, was passiert ist, wo es passiert ist, was Sie erwartet haben und Schritte zur Reproduktion. Screenshots oder Links helfen.",
        },
        {
          title: "Wir triagieren und antworten",
          description:
            "Wir bestätigen, ob es ein Fehler, eine Wartung oder neue Arbeit ist, und vereinbaren dann den nächsten Schritt. Arbeit außerhalb des Umfangs erhält ein eigenes Angebot.",
        },
      ],
      upFrontTitle: "Was wir vorab vereinbaren",
      upFrontDescription:
        "Supportzeiten, Kanäle, Kapazität, Reaktionsziele und Eskalation werden in Ihrem Support-Umfang bestätigt. Wir veröffentlichen kein universelles 24/7- oder Reaktionszeitversprechen.",
      requestNote:
        "Wenn Sie bereits mit uns arbeiten, nutzen Sie den für Ihr Projekt vereinbarten Support-Kanal. Wenn Sie nicht sicher sind, welcher Kanal gilt, fragen Sie Ihren üblichen Projektkontakt, bevor Sie sensible Daten senden.",
      boundariesTitleLines: ["Was außerhalb", "eines vereinbarten Umfangs liegt."],
      boundariesLabel: "Grenzen",
      boundariesIntro:
        "Zu wissen, was nicht enthalten ist, ist ebenso nützlich wie zu wissen, was enthalten ist. Diese Punkte werden separat kalkuliert, statt in den Routinesupport aufgenommen.",
      separateLabel: "Getrennt",
      boundaries: [
        {
          title: "Neue Funktionen & Redesigns",
          description:
            "Neue Funktionalität, strukturelle Änderungen, Migrationen und Redesigns sind getrennt von der Routinewartung. Sie brauchen einen eigenen Umfang, Preis und Zeitplan.",
        },
        {
          title: "Drittanbieterkosten",
          description:
            "Hosting, Domains, Themes, Apps, Lizenzen, Software-Abos, Nutzungsgebühren, Werbeausgaben und Zahlungs- oder Versandgebühren zahlen Sie, getrennt von den Agenturhonoraren.",
        },
        {
          title: "Arbeit ohne Support-Umfang",
          description:
            "Basic ist ein einmaliges Setup mit Support im ersten Monat für gewünschte Änderungen und Fehlerbehebungen. Nach diesem Monat wird weitere Hilfe, wenn Sie nicht mit Pro fortfahren, je nach Problem und benötigten Leistungen kalkuliert.",
        },
      ],
      boundariesFootNoteBefore:
        "Leistungen, Kapazität, Reaktionsziele und abgedeckte Systeme werden vor Arbeitsbeginn bestätigt. Siehe ",
      boundariesLinkOneLabel: "So arbeiten wir",
      boundariesLinkOneHref: "/how-we-work",
      boundariesFootNoteMiddle: " oder lesen Sie die ",
      boundariesLinkTwoLabel: "Support-FAQs",
      boundariesLinkTwoHref: "/faq#faq-after-launch",
      boundariesFootNoteAfter: ".",
    },

    policies: {
      privacy: {
        title: "Datenschutzinformationen.",
        description:
          "Die vollständige Datenschutzrichtlinie von Starter Shifter wartet auf Freigabe. Die folgenden Informationen beschreiben die aktuelle Projekt-Briefing-Funktion; sie sind keine vollständige Datenschutzrichtlinie.",
        sections: [
          {
            heading: "Ihr Projekt-Briefing",
            paragraph:
              "Ihr Briefing wird in Ihrem Kundenkonto gespeichert, damit Sie pausieren, zurückkehren und Ihre Antworten aktualisieren können. Es wird nicht mit anderen Kundenkonten geteilt. Hochgeladene Projektdateien werden mit Ihrem Arbeitsbereich gespeichert und stehen Ihnen und Starter Shifter zur Verfügung. Sie können Ihre eigenen hochgeladenen Dateien aus dem Arbeitsbereich entfernen.",
          },
          {
            heading: "Kundenkonten und Onboarding",
            paragraphBefore:
              "Ihr Kundenkonto lässt Sie Ihre Projektinformationen speichern und später darauf zurückkommen. Die separate ",
            linkLabel: "Datenschutzinformation zum Onboarding",
            linkHref: "/policies/onboarding-privacy",
            paragraphAfter:
              " erklärt, wie Projektdaten verwendet werden. Sie akzeptieren diesen Hinweis, bevor Sie die Fragen beginnen.",
          },
          {
            heading: "Weitere Informationen",
            paragraph:
              "Informationen zum Daten-Hosting, zu einem künftigen Anfragedienst, zur Aufbewahrung und zu Datenschutzanfragen werden hinzugefügt, wenn die vollständige Richtlinie und die Kontaktdaten freigegeben sind.",
          },
        ],
      },
      cookies: {
        title: "Cookie-Informationen.",
        description:
          "Die Cookie-Richtlinie wartet auf Freigabe. Ein vollständiger Hinweis wird hinzugefügt, nachdem die Live-Hosting-Umgebung und etwaige Tracking-Tools geprüft wurden.",
        sections: [
          {
            heading: "Aktuelle Website-Funktionen",
            paragraph:
              "Es ist keine optionale Analyse- oder Werbeintegration auf dieser Website konfiguriert. Die aktuelle Projekt-Briefing-Funktion erstellt einen lokalen Download, ohne Ihre Daten zu senden.",
          },
          {
            heading: "Künftige Änderungen",
            paragraph:
              "Wenn Analyse-, Werbe- oder andere optionale Tracking-Funktionen eingeführt werden, müssen diese Informationen für die tatsächlichen Tools und Daten aktualisiert werden.",
          },
        ],
      },
      terms: {
        title: "Informationen zu den Nutzungsbedingungen.",
        description:
          "Die vollständigen Nutzungsbedingungen warten auf Freigabe. Diese Seite fasst bestätigte Vertragsinformationen zusammen; jedes Projekt erfordert einen vereinbarten Umfang und einen unterschriebenen Vertrag.",
        sections: [
          {
            heading: "Vor dem Onboarding",
            paragraph:
              "Das Onboarding folgt einem unterschriebenen Vertrag, einer Anzahlung von 40 % und den zum Start nötigen Unternehmens- und Projektdaten. Leistungen, unterstützte Tools, Zeitplan, Kundenverantwortlichkeiten und laufende Abdeckung werden für jedes Projekt vereinbart.",
          },
          {
            heading: "Setup und laufende Arbeit",
            paragraph:
              "Basic ist eine einmalige Gebühr von 2.500 $, die den kompletten Anwendungsaufbau und das digitale Marketing-Setup abdeckt (SEO-Management, E-Mail-Marketing und Social-Media-Marketing). Pro ergänzt 500 $ pro Monat für laufende Wartung, Performance-Verbesserung und Lead-Generierung. Keiner der Pläne begründet unbegrenzte Arbeit, garantierte Lead-Volumina oder garantierte Geschäftsergebnisse.",
          },
          {
            heading: "Drittanbieterkosten",
            paragraph:
              "Hosting, Domains, Werbeausgaben, Zahlungsabwicklungsgebühren, Plattform-Abos, kostenpflichtige Themes und Plugins, Software-Nutzung, Lizenzierung und Versandgebühren zahlen Sie, getrennt von den Agenturhonoraren. Leistungen außerhalb der drei Leistungsbereiche werden separat kalkuliert.",
          },
          {
            heading: "Noch zu veröffentlichende Bedingungen",
            paragraph:
              "Die verbleibenden Zahlungs-, Steuer-, Kündigungs-, Erstattungs-, Eigentums-, Lizenz- und Supportbedingungen werden nach Freigabe veröffentlicht. Bestätigen Sie diese Details in Ihrer Projektvereinbarung, bevor Sie fortfahren.",
          },
        ],
      },
      onboardingPrivacy: {
        title: "Ihre Informationen, mit einem Zweck.",
        shareHeading: "Was Sie mit uns teilen",
        shareParagraph:
          "Ihre Kontaktdaten, Unternehmensbeschreibung, Kunden und Märkte, Projektziele und die Leistungen, bei denen Sie Hilfe möchten. Sie können auch Geschäftsbeispiele und Links zu Materialien teilen, die uns helfen, Ihr Projekt zu verstehen. Wenn Sie Projektdateien über Ihren Arbeitsbereich hochladen, speichern wir die Datei und ihre Details mit Ihrem Projekt.",
        useHeading: "Wie wir sie verwenden",
        useParagraphs: [
          "Wir verwenden Ihre Antworten, um Ihr Projekt-Briefing vorzubereiten und zu prüfen, Ihr Unternehmen zu recherchieren, eine Designrichtung zu planen und die mit Ihnen vereinbarte Arbeit zu liefern. Ihr Fortschritt wird gespeichert, damit Sie zurückkehren, Änderungen vornehmen und Ihre Antworten prüfen können, bevor Sie Ihr Briefing an unser Team senden. Hochgeladene Dateien werden genutzt, um das Projekt zu prüfen und zu liefern, für das Sie sie geteilt haben.",
          "Das Senden eines Briefings unterschreibt keine Vereinbarung und bestätigt keine Zahlung. Ihre Vereinbarung legt die Leistungen, Gebühren und Verantwortlichkeiten Ihres Projekts fest.",
        ],
        responsibilityHeading: "Wer sich um Ihre Informationen kümmert",
        responsibilityParagraphAfter:
          "Sie können über Ihr Konto auf Ihr eigenes Briefing zugreifen. Andere Kundenkonten können nicht darauf zugreifen. Unser Portal nutzt Dienstleister für Kontoanmeldung und Informationsspeicherung; Starter Shifter ist für die Verwaltung Ihrer Projektinformationen verantwortlich.",
        noticeHeading: "Ihr Onboarding-Hinweis",
        keepingHeading: "Ihre Daten aufbewahren und Ihre Fragen beantworten",
        contactPrefix: "Bei Fragen oder Anfragen zu Ihren Informationen kontaktieren Sie ",
        pausedHeading: "Bevor Sie beginnen",
        pausedParagraphs: [
          "Das Onboarding ist vorübergehend pausiert. Sie können diese Informationen bei Wiedereröffnung erneut prüfen.",
          "Die Entwicklungsvorschau lässt Sie den Ablauf mit Beispiel-Geschäftsdaten ausprobieren. Ihre Beispielantworten und der Fortschritt werden getrennt gespeichert und können im selben Browser wiederhergestellt werden.",
        ],
        safeHeading: "Geschäftskontext sicher teilen",
        safeParagraphAfter:
          "Entfernen Sie private Angaben aus allen Beispielen, die Sie teilen. Wenn Ihr Projekt später Kontozugänge braucht, organisiert unser Team diese separat mit Ihnen.",
      },
    },
  },

  auth: {
    heading: "Machen Sie mit.",
    subheading: "Neu hier oder zurückkehrend? Weiter zu Ihrem Kunden-Arbeitsbereich.",
    socialGroupLabel: "Mit einem Social-Konto fortfahren",
    providers: { google: "Google", facebook: "Facebook" },
    connecting: "Verbinde…",
    continueWith: "Fortfahren mit ",
    socialHelpBoth: "Google- und Facebook-Anmeldung kommen bald. Sie können vorerst E-Mail nutzen.",
    socialHelpOneSuffix: " Anmeldung kommt bald.",
    or: "oder",
    continueWithEmail: "Mit E-Mail fortfahren",
    workspaceNote: "Teilen Sie Ihr Geschäfts-Briefing und verfolgen Sie Ihr Projekt an einem Ort.",
    privacyNoteBefore: "Lesen Sie, wie wir Ihr Konto und Ihre Projektdaten nutzen, in unseren ",
    privacyNoteLink: "Datenschutzinformationen",
    connectError: "Wir konnten Ihr Konto nicht verbinden. Versuchen Sie es erneut oder fahren Sie mit E-Mail fort.",
    socialSignInError: "Die Social-Anmeldung war nicht erfolgreich. Versuchen Sie es erneut oder fahren Sie mit E-Mail fort.",
    emailViewLabel: "Kontozugang per E-Mail",
    backToOptions: "Zurück zu allen Anmeldeoptionen",
    emailModeLabel: "Kontozugang per E-Mail",
    signIn: "Anmelden",
    createAccount: "Konto erstellen",
    createAccountEmailLabel: "Konto mit E-Mail erstellen",
    signInEmailLabel: "Mit E-Mail anmelden",
    emailLabel: "E-Mail-Adresse",
    emailPlaceholder: "sie@unternehmen.com",
    passwordLabel: "Passwort",
    passwordPlaceholderCreate: "Ein starkes Passwort erstellen",
    passwordPlaceholderSignin: "Ihr Passwort eingeben",
    showPassword: "Passwort anzeigen",
    hidePassword: "Passwort ausblenden",
    yourNameLabel: "Ihr Name",
    yourNamePlaceholder: "Alex Morgan",
    keepMeSignedIn: "Angemeldet bleiben",
    passwordHint: "Verwenden Sie mindestens 12 Zeichen für Ihr Passwort.",
    creatingAccount: "Ihr Konto wird erstellt…",
    signingIn: "Anmeldung…",
    enterNameError: "Bitte geben Sie Ihren Namen ein.",
    tooManyAttemptsError: "Zu viele Versuche. Bitte warten Sie einen Moment und versuchen Sie es erneut.",
    createAccountError: "Wir konnten Ihr Konto nicht erstellen. Versuchen Sie die Anmeldung oder eine andere E-Mail.",
    signInError: "Wir konnten Sie nicht anmelden. Prüfen Sie E-Mail und Passwort.",
    connectRetryError: "Wir konnten nicht verbinden. Bitte versuchen Sie es gleich erneut.",
    shell: {
      storyTag: "Ihr Unternehmen, verbunden",
      storyHeading: "Beginnen Sie Ihre Reise.",
      storyDescription: "Ein paar einfache Schritte, um Ihr Unternehmen zu fokussieren.",
      journeyLabel: "Ihre Arbeitsbereich-Reise",
      steps: ["Konto erstellen", "Erzählen Sie uns von Ihrem Unternehmen", "Formen Sie Ihr nächstes Kapitel"],
      formPanelLabel: "Starter Shifter beitreten",
      backToWebsite: "Zurück zur Website",
      copyrightPrefix: "© ",
      accountPoliciesLabel: "Kontorichtlinien",
    },
  },

  dashboard: {
    viewNames: {
      overview: "Übersicht",
      brief: "Projekt-Briefing",
      journey: "Projektverlauf",
      resources: "Marke & Ressourcen",
      agreement: "Vereinbarung & Abrechnung",
    },
    updates: {
      title: "Updates & Follow-ups",
      description: "Ihr letzter gespeicherter Fortschritt und zu prüfende Details.",
      empty: "Starten Sie Ihr Projekt-Briefing, um Ihre Updates hier zu sehen.",
      openQuestionsPrefix: "Offene Fragen (",
      openQuestionsSuffix: ")",
      revisitDefault: "Gehen Sie diese Antwort mit Ihrer Agentur durch.",
      noFollowups: "Keine Follow-ups in Ihrem Briefing markiert.",
      viewProjectJourney: "Projektverlauf ansehen",
      updateBrief: "Mein Briefing aktualisieren",
      startBrief: "Mein Briefing starten",
    },
    shell: {
      skipToDashboard: "Zum Dashboard springen",
      closeNavigation: "Navigation schließen",
      workspaceNavigationLabel: "Arbeitsbereich-Navigation",
      clientWorkspace: "Kunden-Arbeitsbereich",
      littleGuidance: "Etwas Orientierung?",
      littleGuidanceDesc: "Jeder nächste Schritt, erklärt.",
      workspaceGuide: "Arbeitsbereich-Leitfaden",
      developmentPreview: "Entwicklungsvorschau",
      signingOut: "Abmelden…",
      signOut: "Abmelden",
      workspace: "Arbeitsbereich",
      searchLabel: "Projekt-Briefing durchsuchen",
      searchPlaceholder: "Briefing durchsuchen…",
      viewUpdatesLabel: "Arbeitsbereich-Updates ansehen",
      openProfileLabel: "Ihr Profil öffnen",
      yourAccount: "Ihr Konto",
      dashboardContentLabel: "Inhalt des Dashboard-Tabs",
      footerBrand: "Starter Shifter · Ihr Unternehmen, verbunden.",
      projectPrivacy: "Projekt-Datenschutz",
      connecting: "Verbinden",
      connectedWorkspace: "Verbundener Arbeitsbereich",
      guideTitle: "Ihr Arbeitsbereich-Leitfaden",
      guideDescription: "Halten Sie Ihr Projekt in Bewegung, Schritt für Schritt.",
      guideParagraphs: [
        { strong: "Projekt-Briefing", text: " enthält jede Antwort, die Sie gespeichert haben. Wählen Sie ein Thema, um es zu prüfen, oder kehren Sie zum Onboarding zurück, um Änderungen vorzunehmen." },
        { strong: "Projektverlauf", text: " zeigt Ihre Einreichung und verifizierte Voraussetzungen. Lieferphasen werden nach der Aktivierung relevant und folgen Ihrem vereinbarten Umfang." },
        { strong: "Vereinbarung & Abrechnung", text: " zeigt den von der Agentur erfassten Umfang, die Gebühren, die Vereinbarung und die Anzahlungsprüfung." },
        { strong: "", text: "Nutzen Sie „Mit uns besprechen“ in Ihrem Briefing, um alles zu markieren, wobei Sie Hilfe brauchen. Ihre Markierungen erscheinen im Aktionszentrum des Dashboards." },
      ],
      exploreMyBrief: "Mein Briefing erkunden",
      profileTitle: "Ihr Profil",
      profilePreviewDesc: "Ihr gespeicherter Vorschau-Arbeitsbereich",
      profileDesc: "Ihr Kunden-Arbeitsbereich",
      nameLabel: "Name",
      notProvided: "Noch nicht angegeben",
      businessLabel: "Unternehmen",
      viewContactDetails: "Kontaktdaten ansehen",
      loadingBusinessName: "Ihr Projekt-Arbeitsbereich",
    },
    overview: {
      topicSections: [
        { label: "Unternehmen", color: "var(--commerce-deep)" },
        { label: "Ziele", color: "#439574" },
        { label: "Anforderungen", color: "var(--commerce-mint)" },
        { label: "Bestätigung", color: "#b4ae97" },
      ],
      eyebrow: "Etwas Klarheit. Viel Möglichkeit.",
      welcomeBack: "Willkommen zurück",
      projectAtAGlance: "Ihr Projekt auf einen Blick. Alles, was Sie zum Vorankommen brauchen.",
      viewProjectBrief: "Projekt-Briefing ansehen",
      preparingPdf: "PDF wird vorbereitet…",
      exportPdf: "PDF-Bericht exportieren",
      pdfError: "Das PDF konnte nicht erstellt werden. Bitte versuchen Sie den Export erneut.",
      pdfDownloaded: "Ihr PDF ist bereit. Prüfen Sie die Downloads Ihres Browsers.",
      pdfPreparing: "Ihre Antworten, Diagramme und Projekt-Updates werden hinzugefügt.",
      pdfIdle: "Antworten, Anforderungen und Lieferfortschritt.",
      yourProjectBrief: "Ihr Projekt-Briefing",
      phasesComplete: "Phasen abgeschlossen",
      submittedForReview: "Zur Prüfung eingereicht",
      continueWhereLeftOff: "Dort weitermachen, wo Sie aufgehört haben",
      storyStartsHere: "Ihre Geschichte beginnt hier",
      projectReadiness: "Projektbereitschaft",
      prerequisitesVerified: "Voraussetzungen verifiziert",
      prerequisitesBefore: "Voraussetzungen vor der Aktivierung",
      projectDelivery: "Projektlieferung",
      awaitingProjectUpdate: "Warte auf Projekt-Update",
      latestProgress: "Letzter Fortschritt Ihrer Agentur",
      deliveryProgressHere: "Der Lieferfortschritt Ihrer Agentur erscheint hier",
      openQuestions: "Offene Fragen",
      workThroughThese: "Arbeiten wir diese durch",
      noFollowups: "Keine Follow-ups markiert",
      detailsToRevisit: "Details, die gemeinsam zu prüfen sind",
      clearerPicture: "Ein klareres Bild Ihres Projekts",
      briefBreakdown: "Ihr Briefing-Abschluss, aufgeschlüsselt nach Thema.",
      questionsComplete: "der Fragen abgeschlossen",
      completionByCategory: "Fragenabschluss nach Kategorie",
      insideYourBrief: "In Ihrem Briefing",
      viewAll: "Alle ansehen",
      detailsOrganized: "Ihre Details, organisiert. Öffnen Sie ein Thema für einen genaueren Blick.",
      answersRecorded: "Antworten erfasst",
      readyForInput: "Bereit für Ihre Eingabe",
      complete: "Abgeschlossen",
      yourNextStep: "Ihr nächster Schritt",
      reviewProjectBrief: "Projekt-Briefing prüfen",
      completeProjectBrief: "Projekt-Briefing abschließen",
      viewNextSteps: "Nächste Schritte ansehen",
      beforeWeBegin: "Bevor wir beginnen",
      viewAllPrereqsLabel: "Alle Aktivierungsvoraussetzungen ansehen",
      verified: "Verifiziert",
      inProgress: "In Bearbeitung",
      pending: "Ausstehend",
      workspaceReadyForYou: "Ihr Arbeitsbereich ist bereit für Sie",
      startBriefToSee: "Starten Sie Ihr Briefing, um Ihre gespeicherten Details und Ihren Fortschritt hier zu sehen.",
      viewJourney: "Verlauf ansehen",
      nextStepFallbacks: {
        oneSmallPhase: "Eine kleine Phase nach der anderen.",
        readyNextChapter: "Bereit für Ihr nächstes Kapitel.",
        getReady: "Machen wir Ihr Projekt bereit.",
        answerUpToFive: "Beantworten Sie bis zu fünf Fragen und kehren Sie dann hierher zurück. Sie können zwischen jeder Phase pausieren.",
        briefVerified: "Ihr Briefing und Ihre Voraussetzungen sind verifiziert. Ihre Agentur kann nun die vereinbarten nächsten Schritte organisieren.",
        confirmRemaining: "Ihre Agentur bestätigt die verbleibenden Voraussetzungen.",
      },
    },
    journey: {
      title: "Jeden Tag einen Schritt näher.",
      description: "Ein klarer Blick auf die Vorbereitung Ihres Projekts und den bevorstehenden Lieferweg.",
      currentCheckpoint: "Aktueller Kontrollpunkt",
      yourProject: "Ihr Projekt",
      targetDate: "Zieldatum: ",
      deliveryComplete: "Lieferung abgeschlossen",
      preparationStagesComplete: "Vorbereitungsphasen abgeschlossen",
      fallbackStages: [
        { title: "Ihr Projekt-Briefing", description: "Teilen Sie Ihr Unternehmen, Ihre Ziele, Inhalte und Anforderungen. Ihre Antworten prägen die Projektdiskussion." },
        { title: "Vereinbarung & Aktivierung", description: "Ihre Agentur verifiziert Kontaktdaten, unterschriebene Vereinbarung, Anzahlung von 40 % und Projektabhängigkeiten vor der Aktivierung." },
        { title: "Recherche & Richtung", description: "Unternehmens-, Markt- und Wettbewerbsrecherche legt die Richtung fest. Zeitplan und Leistungen folgen Ihrem vereinbarten Umfang." },
        { title: "Design & Feedback", description: "Erkunden Sie die vereinbarte Designarbeit, prüfen Sie Entwürfe und geben Sie Feedback. Varianten- und Überarbeitungszahl folgt Ihrer Vereinbarung." },
        { title: "Bauen & verbinden", description: "Die vereinbarte Website, Inhalte, Workflows und unterstützten Verbindungen nehmen Form an. Gewählte Anforderungen werden im Umfang bestätigt." },
        { title: "Prüfung & Übergabe", description: "Prüfen Sie die vereinbarten Leistungen und bereiten Sie die Übergabe vor. Startanforderungen und laufender Support hängen von Ihrem Projekt ab." },
      ],
      statusUpcoming: "Bevorstehend",
      statusComplete: "Abgeschlossen",
      statusInProgress: "In Bearbeitung",
      statusVerified: "Verifiziert",
      statusNeedsVerification: "Verifizierung nötig",
      statusUpNext: "Als Nächstes",
      stageProgress: "Phasenfortschritt",
      reviewBrief: "Briefing prüfen",
      continueBrief: "Briefing fortsetzen",
      viewAllPending: "Alle ausstehenden Verifizierungspunkte ansehen",
      noDeliveryUpdate: "Für diese Phase wurde kein Lieferupdate erfasst. Ihre Agentur bestätigt die zutreffende Arbeit und den Zeitplan nach der Aktivierung.",
      workspaceActivity: "Arbeitsbereich-Aktivität",
      activityEmpty: "Ihr gespeicherter Fortschritt und Einreichungs-Updates erscheinen hier, sobald Sie Ihr Briefing starten.",
      activityFootNote: "Das sind Ihre letzten gespeicherten Einträge. Lieferdaten und Abschluss werden separat von Ihrer Agentur bestätigt.",
    },
    resources: {
      title: "Die Bausteine Ihrer Marke.",
      description: "Sehen Sie die Inhaltsbereitschaft und die Referenzlinks, die Sie in Ihrem Projekt-Briefing geteilt haben.",
      updateResources: "Ressourcen aktualisieren",
      brandContentReadiness: "Marken- & Inhaltsbereitschaft",
      assetStatuses: "Die Asset-Status, die Sie beim Onboarding erfasst haben.",
      gatherStartingPoints: "Sammeln wir Ihre Ausgangspunkte.",
      gatherStartingPointsDesc: "Fügen Sie Ihr Logo, Fotos, Texte und die Inhaltsbereitschaft zu Ihrem Briefing hinzu. Finale Dateien können sicher mit Ihrer Agentur geteilt werden.",
      contentContact: "Inhaltskontakt",
      yourSharedLinks: "Ihre geteilten Links",
      sharedLinksDesc: "Website-, Ordner- und Referenzlinks aus Ihren Antworten.",
      opensNewTab: "Öffnet in einem neuen Tab",
      noLinksYet: "Noch keine Referenzlinks geteilt. Sie können sie beim Aktualisieren Ihres Briefings hinzufügen.",
      secureShare: "Teilen Sie Dateien und Zugänge über Ihre vereinbarte sichere Methode. Kontopasswörter gehören nicht in Ihr Projekt-Briefing.",
      projectFiles: "Projektdateien",
      projectFilesDesc: "Laden Sie Logos, Texte, Fotos oder Referenzdokumente hoch. Jede Datei wird mit Ihrem Arbeitsbereich gespeichert und ist für Ihre Agentur sichtbar.",
      file: "Datei",
      files: "Dateien",
      previewNote: "Das Teilen von Dokumenten wird in einem authentifizierten Kunden-Arbeitsbereich verfügbar.",
      noteForAgency: "Notiz für Ihre Agentur",
      notePlaceholder: "Optionaler Kontext für diesen Upload",
      category: "Kategorie",
      chooseFilesLabel: "Dateien zum Hochladen wählen",
      uploading: "Wird hochgeladen…",
      chooseFiles: "Dateien wählen",
      fileTypesHint: "PDF, Bild, Office, Text, CSV, JSON oder ZIP · bis zu ",
      uploadError: "Der Upload konnte nicht gespeichert werden. Bitte versuchen Sie es erneut.",
      removeConfirm: "Diese Datei aus Ihrem Arbeitsbereich entfernen?",
      removeError: "Die Datei konnte nicht entfernt werden. Bitte versuchen Sie es erneut.",
      needsUpdate: "Update nötig",
      noFilesYet: "Noch keine Dateien hochgeladen.",
    },
    agreement: {
      title: "Klarer Umfang. Geteilte Erwartungen.",
      description: "Der bestätigte Projekt-Datensatz Ihrer Agentur, Gebühren und Verifizierungsstatus.",
      yourEngagement: "Ihr Projekt",
      setupFee: "Setup-Gebühr",
      asRecorded: "Wie in Ihrem Projekt erfasst",
      ongoingFee: "Laufende Gebühr",
      notRecorded: "Nicht erfasst",
      perMonth: "Pro Monat, gemäß vereinbartem Umfang",
      ongoingFollows: "Laufende Arbeit folgt Ihrer Vereinbarung",
      whatsIncluded: "Was enthalten ist",
      exclusionsThirdParty: "Ausschlüsse & Drittanbieterkosten",
      seeExclusions: "Siehe Ihre Vereinbarung für Ausschlüsse.",
      verificationBilling: "Verifizierung & Abrechnung",
      signedAgreement: "Unterschriebene Vereinbarung",
      fortyPercentAdvance: "40 % Anzahlung",
      billingName: "Rechnungsname",
      billingEmail: "Rechnungs-E-Mail",
      paymentStatusNote: "Der Zahlungsstatus spiegelt die Verifizierung der Agentur wider. Dieser Arbeitsbereich zieht keine Zahlungen ein.",
      agreementComesNext: "Ihre Vereinbarung kommt als Nächstes.",
      agreementComesNextDesc: "Sobald Ihre Agentur Ihr Projekt erfasst, sehen Sie hier den freigegebenen Umfang, Gebühren, Rechnungsdetails und Verifizierungsstatus.",
      agreementAwaiting: "Vereinbarung wartet auf Bestätigung",
      advanceAwaiting: "40 % Anzahlung wartet auf Verifizierung",
    },
    brief: {
      title: "Ihr Projekt-Briefing",
      description: "Prüfen Sie Ihren Onboarding-Fortschritt, kontrollieren Sie Ihre geteilten Antworten und ergänzen Sie Fehlendes.",
      progressLabel: "Ihr Briefing-Fortschritt",
      everyDetailCovered: "Jedes Detail ist abgedeckt",
      briefTakingShape: "Ihr Briefing nimmt Form an",
      questionsAnswered: "Fragen beantwortet",
      phasesComplete: "Phasen abgeschlossen",
      submittedToAgency: "An Ihre Agentur gesendet",
      draftNotSubmitted: "Entwurf · Nicht gesendet",
      reviewAndSend: "Prüfen und senden",
      updateReopens: "Sie können jede Antwort aktualisieren. Änderungen öffnen Ihr Briefing erneut für Prüfung und Einreichung.",
      completeSubmit: "Ihre Antworten sind vollständig. Prüfen und senden Sie Ihr Briefing, um das Onboarding abzuschließen.",
      completionNote: "Der Abschluss zählt beantwortete und nicht zutreffende Fragen. Für später gespeicherte Details bleiben offen; Sie können sie mit Ihrer Agentur besprechen.",
      percentComplete: "der Fragen abgeschlossen",
      statusComplete: "Abgeschlossen",
      percentCompleteSuffix: "abgeschlossen",
      filterLabel: "Briefing-Fragen filtern",
      filters: [
        { label: "Alle Fragen" },
        { label: "Zu erledigen" },
        { label: "Follow-ups" },
        { label: "Beantwortet" },
      ],
      searchLabel: "Fragen und Antworten durchsuchen",
      searchPlaceholder: "Fragen oder Antworten durchsuchen",
      onboardingPhases: "Onboarding-Phasen",
      shown: "angezeigt",
      chooseAPhase: "Eine Phase wählen",
      noMatchingPhases: "Keine passenden Phasen",
      phase: "PHASE",
      of: "VON",
      complete: "Abgeschlossen",
      answered: "beantwortet",
      notAnswered: "nicht beantwortet",
      needAttention: "brauchen Aufmerksamkeit",
      forLater: "für später",
      pickUpWhereLeft: "Machen Sie dort weiter, wo Sie aufgehört haben.",
      readyToRevisit: "Bereit, die für später gespeicherten Details zu prüfen?",
      continuePhase: "Phase fortsetzen",
      startPhase: "Phase starten",
      showingPrefix: "Zeige ",
      showingOfSuffix: " Fragen in dieser Phase",
      question: "Frage",
      followUpRequested: "Follow-up angefordert",
      notApplicable: "Nicht zutreffend",
      noAnswerYet: "Noch keine Antwort angegeben.",
      yourSavedAnswer: "Ihre gespeicherte Antwort",
      checkAnswerDefault: "Bitte prüfen Sie diese Antwort, bevor Sie die Phase beenden.",
      editAnswer: "Antwort bearbeiten",
      checkAnswer: "Antwort prüfen",
      answerNow: "Jetzt antworten",
      updateNote: "Öffnen Sie eine Frage, um sie zu aktualisieren. Ihre gespeicherte Antwort ist vorbefüllt, und Sie können nach dem Speichern zu dieser Phase zurückkehren.",
      noMatchingQuestions: "Keine passenden Fragen",
      noUnansweredQuestions: "Keine unbeantworteten Fragen",
      noDetailsForLater: "Keine Details für später gespeichert",
      noQuestionsToShow: "Keine Fragen anzuzeigen",
      tryAnotherSearch: "Versuchen Sie eine andere Suche oder löschen Sie die Filter, um Ihr Briefing zu sehen.",
      chooseAnotherFilter: "Wählen Sie einen anderen Filter, um den Rest Ihres Briefings zu prüfen.",
      showAllQuestions: "Alle Fragen anzeigen",
      noPhasesMatch: "Keine Phase passt zu diesem Filter.",
      forLaterSuffix: "für später",
      statusLabels: {
        answered: "Beantwortet",
        pending: "Nicht beantwortet",
        later: "Für später",
        attention: "Braucht Aufmerksamkeit",
        review: "Prüfen",
      },
    },
    phases: {
      savedSuffix: " gespeichert. Prüfen Sie Ihren Fortschritt unten.",
      yourOnboarding: "IHR ONBOARDING",
      completeTitle: "Ihr Projekt-Briefing ist abgeschlossen.",
      incompleteTitle: "Schließen wir Ihr Projekt-Briefing ab.",
      completeSubmitted: "Ihre Antworten wurden gesendet. Sie können jedes Detail in Ihrem Briefing prüfen oder aktualisieren.",
      completeNotSubmitted: "Jede Frage hat eine Antwort. Prüfen Sie Ihr Briefing und senden Sie es an Ihre Agentur, wenn Sie bereit sind.",
      incomplete: "Sehen Sie, was Sie geteilt haben, finden Sie die noch nötigen Details und beenden Sie eine Phase nach der anderen.",
      reviewProjectBrief: "Projekt-Briefing prüfen",
      reviewAndSendBrief: "Briefing prüfen und senden",
      continuePhase: "Phase fortsetzen",
      startPhase: "Phase starten",
      phasePrefix: "Phase ",
      briefCompletion: "Briefing-Abschluss",
      answeredSuffix: " beantwortet",
      notAnswered: "nicht beantwortet",
      needAttention: "brauchen Aufmerksamkeit",
      forLater: "für später",
      phasesComplete: "Phasen abgeschlossen",
      laterStaysVisible: "Für später markierte Details bleiben sichtbar, bis Sie sie auflösen.",
      answersSavedAsYouGo: "Ihre Antworten werden fortlaufend gespeichert. Sie können jederzeit pausieren.",
      viewAllPhases: "Alle Phasen ansehen",
      briefCompletionLabel: "Projekt-Briefing-Abschluss",
    },
  },

  onboarding: {
    privacyCopy: {
      purpose: "Starter Shifter nutzt die von Ihnen geteilten Angaben, um Ihr Unternehmen zu verstehen, Ihr Projekt vorzubereiten und die mit uns vereinbarten Leistungen zu liefern.",
      responsibility: "Ihre Projektinformationen werden von Starter Shifter verwaltet. Wir verkaufen Ihre Angaben nicht und teilen Ihr Briefing nicht mit anderen Unternehmen für deren eigene Nutzung.",
      safeSharing: "Geschäftsinformationen und Beispiele genügen. Bitte lassen Sie Passwörter, Zahlungsdaten und private Informationen über Ihre Kunden oder Ihr Team weg.",
    },
    welcome: {
      storyLabel: "Ihr nächstes Kapitel beginnt hier",
      storyTitleLines: ["Große Ideen.", "Kleine Schritte."],
      storyFooterLines: ["Sie bringen die Geschichte.", "Wir helfen, die Punkte zu verbinden."],
      greeting: "Willkommen bei Starter Shifter.",
      greetingNamePrefix: "Willkommen, ",
      heading: "Lernen wir Ihr Unternehmen kennen.",
      descriptionPrefix: "Erzählen Sie uns von Ihrem Unternehmen, eine Frage nach der anderen. Ihre aktuelle Route hat ",
      descriptionSuffix: " kurze Phasen mit jeweils bis zu fünf Fragen. Relevante Follow-ups können erscheinen, wenn Sie die benötigte Arbeit wählen.",
      promises: [
        "Schätzungen sind willkommen. Bitten Sie um Hilfe, wenn Sie sie brauchen.",
        "Reibungslos von einer Phase zur nächsten",
        "Speichern, Pause machen, jederzeit zurückkommen",
      ],
      consentBefore: "Ich habe die ",
      consentLink: "Datenschutzinformationen",
      consentAfter: " gelesen und stimme zu, dass Starter Shifter meine Angaben zur Vorbereitung und Lieferung meines Projekts nutzt.",
      saving: "Speichern…",
      begin: "Los geht's",
      paused: "Das Onboarding ist vorübergehend pausiert. Bitte kehren Sie zurück, wenn es wieder öffnet.",
      tryPreview: "Vorschau ausprobieren",
      previewOnly: "Nur Vorschau. Bitte Beispieldaten verwenden.",
      serviceTerms: "Nutzungsbedingungen",
    },
    journeyArtwork: {
      scenes: [
        { title: "Ihr Unternehmen", subtitle: "Aus guten Ideen & echten Menschen", tag: "Schön, Sie kennenzulernen" },
        { title: "Ihre Richtung", subtitle: "Etwas Klarheit. Viel Möglichkeit.", tag: "Groß denken" },
        { title: "Ihre Signatur", subtitle: "Die Details, die es zu Ihrem machen", tag: "Hinterlassen Sie Ihre Spur" },
        { title: "Ihr Werkzeugkasten", subtitle: "Die Bausteine Ihres Projekts verbinden", tag: "Stück für Stück" },
        { title: "Ihr nächstes Kapitel", subtitle: "Ein Briefing, auf dem wir gemeinsam aufbauen", tag: "Alles fügt sich" },
      ],
      tagline: "Ein bisschen mehr von Ihnen",
    },
    wizard: {
      sessionEnded: "Ihre Sitzung ist beendet.",
      signInAgain: "Erneut anmelden",
      reloadOnboarding: "Onboarding neu laden",
      previewBanner: "Vorschaumodus. Verwenden Sie Beispiel-Geschäftsdaten. Ihr Fortschritt wird für Ihren nächsten Besuch gespeichert.",
      customizedBanner: "Ihre Agentur hat diesen Fragebogen für Ihr Projekt vorbereitet. Bitte prüfen Sie neu angeforderte Details.",
      oneQuestionAtATime: "Eine Frage nach der anderen",
      saveAndReturn: "Speichern und zum Briefing zurück",
      saveAndExit: "Speichern und beenden",
      phaseReview: "Phasenprüfung",
      questionOf: "Frage ",
      of: " von ",
      reviewYourAnswers: "Ihre Antworten prüfen",
      answerBeforeFinish: "Sie können dies beantworten, bevor Sie fertig sind.",
      phaseSavedSuffix: " gespeichert. Weiter geht's.",
      beforeNextPhase: "Vor der nächsten Phase",
      fewDetailsForLater: "Ein paar Details für später",
      phaseReady: "Diese Phase ist bereit",
      answeredPrefix: "Sie haben ",
      answeredSuffix: " von ",
      answeredOfQuestions: " Fragen in dieser Phase beantwortet. ",
      fillNowOrFlag: "Sie können diese Details jetzt ausfüllen oder für Ihre Abschlussprüfung markiert lassen.",
      changesSavedContinue: "Ihre Änderungen sind gespeichert. Fahren Sie fort, wann Sie bereit sind.",
      answerNow: "Jetzt antworten",
      back: "Zurück",
      continueWithForLaterPrefix: "Mit ",
      continueWithForLaterSuffix: " für später fortfahren",
      continueToNextPhase: "Zur nächsten Phase",
      reviewTitle: "Hier ist Ihr Projekt-Briefing. Wie sieht es aus?",
      remainingPrereqs: "Verbleibende Projektvoraussetzungen",
      prereqsNote: "Diese werden gegen die Agentur-Einträge geprüft. Von diesem Formular werden keine Einladungen gesendet.",
      reviewHelp: "Prüfen Sie Ihre Antworten unten. Sie können jedes Thema vor den Abschlussbestätigungen bearbeiten.",
      previewPrivacyHelp: "Prüfen Sie, wie Ihre Beispielantworten in dieser Vorschau verwendet werden, bevor Sie bestätigen.",
      addProjectTopic: "Sonst noch etwas? Ein Projektthema hinzufügen",
      topicsAutoHelp: "Ihre Antworten wählen relevante Themen automatisch. Fügen Sie hier einen Workflow hinzu, falls wir einen übersehen haben.",
      searchTopicsLabel: "Projektthemen durchsuchen",
      searchTopicsPlaceholder: "Themen durchsuchen…",
      selectedByAnswers: "durch Ihre Antworten gewählt",
      previouslyAnswered: "Bereits beantwortete Themen",
      previouslyAnsweredHelp: "Diese Antworten bleiben außerhalb Ihrer aktuellen Route gespeichert. Stellen Sie ein Thema wieder her oder entfernen Sie seine Antworten.",
      restoreTopic: "Thema wiederherstellen",
      removeSavedAnswers: "Gespeicherte Antworten entfernen",
      routeNotePrefix: " projektspezifische Themen gewählt. Ihr Fortschritt passt sich Ihren Entscheidungen an.",
      backToMyReview: "Zurück zu meiner Prüfung",
      retrySaving: "Speichern erneut versuchen",
      saveAndReturnToBrief: "Speichern und zum Briefing zurück",
      backToPhaseReview: "Zurück zur Phasenprüfung",
      saveAndOpenDashboard: "Speichern und Dashboard öffnen",
      submitOnboarding: "Onboarding-Daten senden",
      looksGood: "Sieht gut aus",
      skipForNow: "Vorerst überspringen",
      continue: "Fortfahren",
      pauseAnytime: "Jederzeit mit Speichern und beenden pausieren.",
      phaseOf: "Phase ",
      phaseOfSuffix: " von ",
      encouragement: {
        checkTogether: "Prüfen wir diese Antwort gemeinsam. Das Detail unten hilft.",
        briefComingTogether: "Ihr Briefing nimmt Form an. Werfen Sie vor den Abschlussbestätigungen einen Blick darauf.",
        flagForGuidance: "Wir markieren dies zur Orientierung. Sie können fortfahren.",
        keepOpen: "Das ist okay. Wir halten dies als offene Frage.",
        gotIt: "Verstanden! Fahren Sie fort, wann Sie bereit sind.",
        startWithYou: "Beginnen wir mit Ihnen. Eine kurze Antwort genügt.",
        multiSelect: "Sie können mehr als eine wählen. Wählen Sie, was zu Ihrem Projekt passt.",
        select: "Wählen Sie die Option, die sich richtig anfühlt.",
        optional: "Diese ist optional. Sie können später darauf zurückkommen.",
        oneSmallStep: "Ein kleiner Schritt nach dem anderen. Etwas Kontext genügt.",
      },
      saveStates: {
        allSaved: "Alle Änderungen gespeichert",
        readyToSave: "Bereit zum Speichern",
        saving: "Speichern…",
        unsaved: "Ungespeicherte Änderungen",
        notSaved: "Änderungen nicht gespeichert — unten erneut versuchen",
      },
      errors: {
        saveFailed: "Wir konnten Ihre letzten Änderungen nicht speichern. Halten Sie diese Seite offen und versuchen Sie es erneut.",
        draftMissing: "Ihre Entwurfssitzung fehlt. Laden Sie diese Seite neu, um sich erneut zu verbinden.",
        unableToSave: "Speichern nicht möglich.",
        unableToSaveAnswer: "Diese Antwort kann nicht gespeichert werden.",
        unableToSavePhase: "Diese Phase kann nicht gespeichert werden.",
        unableToSubmit: "Senden nicht möglich.",
        unableToSaveAgreement: "Ihre Vereinbarung kann nicht gespeichert werden. Bitte versuchen Sie es erneut.",
        attentionBeforeSubmit: "Einige Antworten brauchen vor dem Senden noch Ihre Aufmerksamkeit.",
        loadQuestionnaire: "Wir konnten Ihren zugewiesenen Fragebogen nicht laden. Laden Sie neu, um es erneut zu versuchen, oder kontaktieren Sie die Agentur, falls das Problem fortbesteht.",
      },
      engagementSummary: {
        noneHeading: "Noch kein freigegebenes Projekt erfasst",
        noneBody: "Ihre Projektvereinbarung, der Umfang, die Gebühren und der Abrechnungsdatensatz erscheinen hier, sobald die Agentur sie erfasst. Sie können trotzdem ein Briefing zur Prüfung senden.",
        noneMeta: "Vereinbarung: wartet auf Bestätigung · 40 % Anzahlung: wartet auf Verifizierung",
        approvedSuffix: " · Freigegebener Projektdatensatz",
        setupPrefix: "Setup: ",
        recurringPrefix: " · Wiederkehrend: ",
        perMonthSuffix: " / Monat",
        scopePrefix: "Umfang: ",
        exclusionsPrefix: "Ausschlüsse: ",
        seeAgreement: "Ihre Vereinbarung ansehen",
        thirdPartyPrefix: "Drittanbieterkosten: ",
        agreementPrefix: "Vereinbarung: ",
        verified: "Verifiziert",
        awaitingConfirmation: "Wartet auf Bestätigung",
        advancePrefix: " · 40 % Anzahlung: ",
        awaitingVerification: "Wartet auf Verifizierung",
      },
      reviewSummary: {
        groups: [
          { title: "Unternehmen und Kontakt" },
          { title: "Ziele und aktueller Prozess" },
          { title: "Gewählte Arbeit und Anforderungen" },
          { title: "Verantwortlichkeiten und Projekt" },
          { title: "Abschließende Notizen und Onboarding-Feedback" },
        ],
        additionalTitle: "Zusätzliche Projektdetails",
        topicsToReview: " zu prüfende Themen",
        edit: "Bearbeiten",
        editBrief: "Briefing bearbeiten",
        openQuestions: "Offene Fragen und Follow-ups",
        noFollowups: "Keine Follow-up-Markierungen erfasst. Optionale unbeantwortete Details können später geliefert werden.",
      },
    },
    progress: {
      railLabel: "Onboarding-Fortschritt",
      yourProjectBrief: "Ihr Projekt-Briefing",
      phasePrefix: "Phase ",
      phaseOfSuffix: " von ",
      answeredPercentSuffix: " beantwortet",
      answeredLabel: "Beantwortete Fragen",
      answeredValueText: "beantwortet, ",
      forLaterValueText: " für später, ",
      pendingValueText: " ausstehend von ",
      questionsValueText: " Fragen",
      answered: "beantwortet",
      forLater: "für später",
      pending: "ausstehend",
      yourPhases: "Ihre Phasen",
      phaseNavLabel: "Phasen und Fragen",
      questionsInPhase: "Fragen in dieser Phase",
      selectToRevisit: "Wählen Sie eine Frage, um sie erneut zu besuchen.",
      review: "Prüfen",
      reviewYourAnswers: "Ihre Antworten prüfen",
      currentQuestionSuffix: ", aktuelle Frage",
      legendAnswered: "Beantwortet",
      legendForLater: "Für später",
      legendPending: "Ausstehend",
      railNote: "Ihre Phasen passen sich Ihrem Projekt an. Sie können jede Frage erneut besuchen.",
      currentPhaseLabel: "Aktuelle Phase",
    },
    privacyNotice: {
      ariaLabel: "Wie wir Ihre Informationen nutzen",
      heading: "Ihre Informationen haben einen Zweck.",
      howWeCare: "Wie wir mit Ihren Angaben umgehen",
      previewNote: "Dies ist eine Vorschau. Ihre Beispielantworten werden gespeichert, damit Sie den Ablauf ausprobieren und in diesem Browser darauf zurückkommen können. Verwenden Sie Beispiel-Geschäftsdaten.",
      retentionPrefix: "Wie lange wir Ihre Angaben aufbewahren: ",
      contactPrefix: "Fragen zu Ihren Informationen? ",
      paused: "Das Onboarding ist vorübergehend pausiert. Bitte prüfen Sie die aktuellen Datenschutzinformationen bei Wiedereröffnung.",
      navLabel: "Onboarding-Informationen",
      privacyInformation: "Datenschutzinformationen",
      serviceTerms: "Nutzungsbedingungen",
    },
    portal: {
      myWorkspace: "Mein Arbeitsbereich",
      signingOut: "Abmelden…",
      signOut: "Abmelden",
      yourProjectWorkspace: "Ihr Projekt-Arbeitsbereich",
      clientPortal: "Starter-Shifter-Kundenportal",
      signOutError: "Abmelden nicht möglich. Bitte versuchen Sie es erneut.",
      saveProgressError: "Ihr Fortschritt kann nicht gespeichert werden. Bitte versuchen Sie es erneut.",
      unableToSaveProgress: "Ihr Fortschritt kann nicht gespeichert werden.",
    },
    questionField: {
      answerNow: "Jetzt antworten",
      notSureYet: "Noch nicht sicher",
      notApplicable: "Nicht zutreffend",
      provideLater: "Später angeben",
      requestHelp: "Hilfe anfordern",
      preferNotToAnswer: "Möchte nicht antworten",
      required: "Erforderlich",
      optional: "Optional",
      setEachStatus: "Status jedes Elements festlegen",
      chooseOne: "Eine wählen",
      chooseUpToPrefix: "Bis zu ",
      chooseAll: "Alles Zutreffende wählen",
      chooseUpToSuffix: " wählen.",
      pickWhatFits: "Wählen Sie, was am besten passt. Sie können unten Kontext ergänzen.",
      shortAnswer: "Eine kurze Antwort genügt. Sie können später mehr Details ergänzen.",
      everydayWords: "Alltagsworte sind perfekt. Ein paar Sätze genügen.",
      shareWhatYouKnow: "Teilen Sie, was Sie wissen. Sie können unten um Orientierung bitten.",
      skipIfPrefer: "Überspringen Sie dies, wenn Sie es lieber später angeben möchten.",
      whyWeAsk: "Warum wir fragen",
      savedChoicePrefix: "Ihre gespeicherte Auswahl: ",
      savedChoiceSuffix: ". Diese Optionen wurden aus dem aktualisierten Formular entfernt. Ihre Antwort bleibt erhalten; prüfen Sie die verfügbaren Optionen vor der Bestätigung.",
      confirmAccuracy: "Ich bestätige diese Angaben und meine Berechtigung, sie zu teilen.",
      confirmPrivacy: "Ich habe die Datenschutzinformationen zum Onboarding geprüft.",
      yesIConfirm: "Ja, ich bestätige",
      requiredSuffix: " (erforderlich)",
      optionalSuffix: " (optional)",
      chooseStatus: "Status wählen",
      nothingYet: "Noch nichts",
      notSure: "Nicht sicher",
      ready: "Bereit",
      needsUpdating: "Update nötig",
      needHelp: "Hilfe nötig",
      searchOptionsPrefix: "Optionen durchsuchen für ",
      searchOptionsPlaceholder: "Optionen durchsuchen…",
      noMatchingChoices: "Keine passenden Optionen. Versuchen Sie ein anderes Wort oder löschen Sie die Suche.",
      somethingElse: "Etwas anderes",
      addOwnOption: "Eigene Option hinzufügen oder erklären",
      countryOrRegion: "Land oder Region",
      searchCountry: "Land / Region suchen oder eingeben",
      timezone: "Zeitzone",
      searchTimezone: "Zeitzone suchen, z. B. Europe/Berlin",
      forFirstLaunch: "Für den ersten Start",
      canWaitUntilLater: "Kann bis später warten",
      chooseOptionOrDescribe: "Option wählen oder unten beschreiben",
      startWithUpToThree: "Mit bis zu drei Prioritäten beginnen",
      ideasForFuture: "Ideen für eine spätere Phase",
      chooseApprox: "Einen Näherungswert wählen",
      enterExact: "Stattdessen einen exakten Wert eingeben",
      fewSentences: "Ein paar Sätze genügen",
      oneExampleOrLink: "Ein Beispiel oder Dokumentlink",
      remove: "Entfernen",
      addAnother: "+ Weitere hinzufügen",
      quickAnswersLabel: "Schnellantworten",
      yourFirstPriority: "Ihre erste Priorität",
      chooseMainPriority: "Ihre Hauptpriorität wählen",
      notSureSeeOther: "Nicht sicher? Andere Antwortmöglichkeiten ansehen",
      changeAnswerSuffix: " · Antwort ändern",
      addContactNote: "Kontakt, Verantwortlichen oder Follow-up-Notiz hinzufügen",
      addNoteLink: "Kurze Notiz oder Link hinzufügen (optional)",
      notePlaceholder: "Ein Dokumentlink, eine Klarstellung, der Name eines Kollegen oder die Verfügbarkeit",
      workspaceMemberPrefix: "Arbeitsbereich-Mitglied ",
      chooseAccess: "Angefragten Zugang wählen",
      viewProject: "Projekt ansehen",
      reviewAndComment: "Prüfen und kommentieren",
      supplyInputs: "Projekteingaben liefern",
      needGuidance: "Orientierung nötig",
      removeMember: "Mitglied entfernen",
      addAnotherPerson: "+ Weitere Person hinzufügen",
      quickChoicesPrefix: "Schnelloptionen für ",
      countries: [
        "Australien", "Bangladesch", "Brasilien", "Kanada", "China", "Frankreich", "Deutschland",
        "Indien", "Indonesien", "Irland", "Italien", "Japan", "Kenia", "Malaysia", "Mexiko",
        "Nepal", "Niederlande", "Neuseeland", "Nigeria", "Pakistan", "Philippinen",
        "Saudi-Arabien", "Singapur", "Südafrika", "Spanien", "Sri Lanka",
        "Vereinigte Arabische Emirate", "Vereinigtes Königreich", "Vereinigte Staaten",
      ],
    },
    previewPending: [
      "Verifizieren Sie die Projekt- oder Arbeitsbereich-Kontakt-E-Mail bei der Erstellung Ihres Kundenkontos.",
      "Vereinbaren Sie den Projektumfang und schließen Sie die unterschriebene Vereinbarung ab.",
      "Lassen Sie die Anzahlung von 40 % von der Agentur gegen Ihre vereinbarte Rechnung verifizieren.",
    ],
  },

  projectBrief: {
    serviceOptions: [
      "E-Commerce & Websites",
      "Recherche & Design",
      "Marketing & Kampagnen",
      "Automatisierung & Integrationen",
      "Wartung & Performance",
    ],
    headerLine: "Starter Shifter — Projekt-Briefing",
    nameLabel: "Ihr Name",
    emailLabel: "E-Mail",
    companyLabel: "Unternehmen (optional)",
    timingLabel: "Zeitplan (optional)",
    timingPlaceholder: "Zum Beispiel vor einem Startdatum",
    servicesLegend: "Wobei könnten wir helfen?",
    servicesDescription: "Wählen Sie, was passt, oder lassen Sie es offen.",
    goalsLabel: "Was möchten Sie möglich machen?",
    goalsPlaceholder: "Erzählen Sie uns von Ihrem Unternehmen, Ihren Bedürfnissen und dem angestrebten Ergebnis.",
    currentSetupLabel: "Was ist bereits vorhanden? (optional)",
    currentSetupDescription: "Eine bestehende Website, ein Shop, Social-Seiten oder Geschäftstools.",
    currentSetupPlaceholder: "Teilen Sie die Systeme, Plattformen oder Konten, die Sie bereits nutzen.",
    openEmailDraft: "E-Mail-Entwurf öffnen",
    downloadBrief: "Projekt-Briefing herunterladen",
    emailDraftReady: "Ihr E-Mail-Entwurf ist bereit zum Öffnen. Prüfen Sie ihn in Ihrer E-Mail-App und senden Sie ihn, wenn Sie bereit sind.",
    downloadReady: "Ihr Projekt-Briefing ist in Ihren Downloads bereit. Es wurde nichts an Starter Shifter gesendet.",
    briefFields: {
      name: "Name: ",
      email: "E-Mail: ",
      company: "Unternehmen: ",
      services: "Leistungen: ",
      timing: "Zeitplan: ",
      notSpecified: "Nicht angegeben",
      exploreOptions: "Lassen Sie uns die Optionen erkunden",
      projectGoals: "Projektziele:",
      alreadyInPlace: "Was bereits vorhanden ist:",
      disclaimer: "Dieses Briefing ist ein Ausgangspunkt für die Diskussion, kein vereinbarter Umfang oder Angebot.",
    },
    emailSubjectPrefix: "Projektanfrage — ",
    downloadFileName: "starter-shifter-projekt-briefing.txt",
  },

  projects: [
    {
      title: "Shop-Konzept",
      category: "E-Commerce",
      description: "Ein illustratives Shop-Layout mit einer Produktkollektion und einem klaren Weg zum Einkauf.",
      imageAlt: "Konzept-Shop mit grünem Hero und illustrierten Alltagstaschen",
      status: "Konzeptvorschau",
    },
    {
      title: "Betriebs-Arbeitsbereich-Konzept",
      category: "Webanwendung",
      description: "Ein illustrativer Arbeitsbereich, der Bestellungen, Bestand und Versandaufgaben in einer Ansicht bündelt.",
      imageAlt: "Konzept-Betriebs-Dashboard mit Bestelltabelle und Workflow-Panels",
      status: "Konzeptvorschau",
    },
    {
      title: "Kreatives Website-Konzept",
      category: "Webdesign",
      description: "Eine illustrative redaktionelle Website mit kräftiger Typografie und einer fokussierten Arbeitssammlung.",
      imageAlt: "Konzept-Kreativ-Website mit großer Schrift und abstrakter skulpturaler Kunst",
      status: "Konzeptvorschau",
    },
    {
      title: "Kundensupport-Konzept",
      category: "KI-Workflow",
      description: "Eine illustrative Support-Oberfläche für Gespräche, häufige Fragen und Team-Übergaben.",
      imageAlt: "Konzept-Support-Arbeitsbereich mit Gesprächsliste und Kundenchat",
      status: "Konzeptvorschau",
    },
  ],

  shared: {
    deliveryStageStatusLabels: {
      upcoming: "Bevorstehend",
      "in-progress": "In Bearbeitung",
      complete: "Abgeschlossen",
      blocked: "Braucht Aufmerksamkeit",
    },
    defaultDeliveryStages: [
      { title: "Ihr Projekt-Briefing", description: "Teilen Sie Ihr Unternehmen, Ihre Ziele, Inhalte und Anforderungen. Ihre Antworten prägen die Projektdiskussion." },
      { title: "Vereinbarung & Aktivierung", description: "Ihre Agentur verifiziert Kontaktdaten, unterschriebene Vereinbarung, Anzahlung von 40 % und Projektabhängigkeiten vor der Aktivierung." },
      { title: "Recherche & Richtung", description: "Unternehmens-, Markt- und Wettbewerbsrecherche legt die Richtung fest. Zeitplan und Leistungen folgen Ihrem vereinbarten Umfang." },
      { title: "Design & Feedback", description: "Erkunden Sie die vereinbarte Designarbeit, prüfen Sie Entwürfe und geben Sie Feedback. Varianten- und Überarbeitungszahl folgt Ihrer Vereinbarung." },
      { title: "Bauen & verbinden", description: "Die vereinbarte Website, Inhalte, Workflows und unterstützten Verbindungen nehmen Form an. Gewählte Anforderungen werden im Umfang bestätigt." },
      { title: "Prüfung & Übergabe", description: "Prüfen Sie die vereinbarten Leistungen und bereiten Sie die Übergabe vor. Startanforderungen und laufender Support hängen von Ihrem Projekt ab." },
    ],
    workspaceViewNames: {
      overview: "Übersicht",
      brief: "Projekt-Briefing",
      journey: "Projektverlauf",
      resources: "Marke & Ressourcen",
      agreement: "Vereinbarung & Abrechnung",
    },
    questionStatusLabels: {
      answered: "Beantwortet",
      later: "Für später",
      pending: "Nicht beantwortet",
      attention: "Braucht Aufmerksamkeit",
      review: "Prüfen",
    },
    answerStateLabels: {
      answered: "Jetzt antworten",
      unknown: "Noch nicht sicher",
      "not-applicable": "Nicht zutreffend",
      deferred: "Später angeben",
      help: "Mit uns besprechen",
    },
    prerequisites: {
      briefLabel: "Projekt-Briefing",
      briefSubmitted: "Ihr Briefing wurde gesendet.",
      briefDetail: "Vervollständigen und senden Sie Ihre Projektdetails.",
      identityLabel: "Kontaktverifizierung",
      identityDetail: "Die Kontakt-E-Mails Ihres Projekts und Arbeitsbereichs.",
      agreementLabel: "Unterschriebene Vereinbarung",
      agreementDetail: "Bestätigen Sie den Umfang mit Ihrer Agentur.",
      advanceLabel: "40 % Anzahlung",
      advanceDetail: "Verifizierung der Agentur gegen Ihre vereinbarte Rechnung.",
      responsiblePrefix: "Verantwortlich: ",
    },
    activity: {
      briefSaved: "Projekt-Briefing gespeichert",
      briefSubmitted: "Briefing gesendet",
      briefSubmittedDetail: "Ihre Projektdetails sind prüfbereit",
      engagementUpdated: "Projektdatensatz aktualisiert",
      engagementUpdatedDetail: "Umfang und Voraussetzungen erfasst",
    },
    assetStatusLabels: {
      ready: "Bereit",
      "needs-updating": "Update nötig",
      "needs-help": "Hilfe nötig",
      "not-available": "Nicht verfügbar",
      recorded: "Im Briefing erfasst",
    },
    workspaceFallback: {
      businessName: "Ihr nächstes Kapitel",
      description: "Ein eigener Raum für Ihr Unternehmen, Ihr Briefing und alles, was als Nächstes kommt.",
    },
    notAnswered: "Nicht beantwortet",
    confirmed: "Bestätigt",
    notConfirmed: "Nicht bestätigt",
    firstPriorityPrefix: "Erste Priorität: ",
  },
};
