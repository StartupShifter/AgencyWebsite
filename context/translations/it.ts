import type { TranslationDictionary } from "../i18n";

/** Italian (Italiano) localization. */
export const it: TranslationDictionary = {
  brand: {
    homeAriaLabel: "Home Starter Shifter",
    tagline: "La tua azienda, connessa",
    footerNote: "Dal tuo primo negozio online ai flussi di lavoro che lo sostengono. Costruito attorno alla tua azienda.",
    footerWorldwide: "Lavoriamo con aziende in tutto il mondo.",
  },

  common: {
    skipToContent: "Vai al contenuto",
    backToHome: "Torna alla home",
    policyAwaitingApproval: "Informativa in attesa di approvazione",
    prepareProjectBrief: "Prepara un brief di progetto",
    policyNavigationLabel: "Informazioni sulle informative",
    privacy: "Privacy",
    cookies: "Cookie",
    serviceTerms: "Termini di servizio",
    exploreServices: "Esplora i nostri servizi",
    planYourProject: "Pianifica il tuo progetto",
    supportAndCare: "Assistenza e supporto",
    viewAllProducts: "Vedi tutti i prodotti",
    getStarted: "Inizia",
    resourceNoteDefault: "Starter Shifter · Risorse",
    openNavigation: "Apri la navigazione",
    closeNavigation: "Chiudi la navigazione",
    loadingPage: "Caricamento della pagina",
    explorePrefix: "Esplora ",
    illustrationSuffix: " illustrazione",
    loading: {
      site: "Caricamento di Starter Shifter",
      signInOptions: "Caricamento delle opzioni di accesso",
      onboardingInformation: "Caricamento delle informazioni di onboarding",
      workspace: "Caricamento del tuo spazio di lavoro",
      projectBrief: "Caricamento del tuo brief di progetto",
    },
    opensInNewTab: "si apre in una nuova scheda",
  },

  metadata: {
    home: {
      title: "Starter Shifter — La tua azienda, connessa",
      description:
        "E-commerce, direzione creativa, automazione e operazioni connesse. Starter Shifter aiuta le aziende a costruire il prossimo capitolo online, con un perimetro definito in base alle loro esigenze.",
    },
    about: {
      title: "Chi siamo — Starter Shifter",
      description:
        "Scopri Starter Shifter, un'agenzia che aiuta le aziende di tutto il mondo a connettere siti web, presenza social e operazioni attraverso ricerca, design, sviluppo e automazione.",
    },
    faq: {
      title: "FAQ — Starter Shifter",
      description:
        "Risposte sui piani Basic e Pro di Starter Shifter, onboarding, fasi di consegna, siti web, integrazioni, supporto continuo e come avviare un progetto.",
    },
    howWeWork: {
      title: "Come lavoriamo — Starter Shifter",
      description:
        "Le fasi di consegna usate da Starter Shifter dalla scoperta e dal perimetro fino a design, sviluppo, lancio e supporto continuo, inclusi i prerequisiti di onboarding e la prima consegna di ricerca.",
    },
    products: {
      title: "Prodotti e modelli — Starter Shifter",
      description:
        "Esplora i siti web, le applicazioni e le esperienze connesse di Starter Shifter. Le anteprime dei concept sono etichettate separatamente dal lavoro clienti completato.",
    },
    support: {
      title: "Assistenza e supporto — Starter Shifter",
      description:
        "Come Starter Shifter gestisce manutenzione, supporto e miglioramento continuo dopo il lancio, inclusi i confini di copertura di Basic e Pro.",
    },
    privacy: { title: "Informazioni sulla privacy — Starter Shifter" },
    cookies: { title: "Informazioni sui cookie — Starter Shifter" },
    terms: { title: "Informazioni sui termini di servizio — Starter Shifter" },
    onboardingPrivacy: { title: "Le informazioni del tuo onboarding — Starter Shifter" },
    login: { title: "Unisciti a noi | Starter Shifter" },
    dashboard: { title: "Spazio di lavoro clienti — Starter Shifter" },
    dashboardPreview: { title: "Il tuo spazio di lavoro — Starter Shifter" },
    onboarding: { title: "Il tuo brief di progetto — Starter Shifter" },
    onboardingPreview: { title: "Anteprima onboarding — Starter Shifter" },
  },

  navigation: {
    sections: [
      {
        label: "Servizi",
        items: [
          { title: "Siti e-commerce", description: "Negozi online modellati sul tuo modo di vendere.", href: "/services/ecommerce" },
          { title: "Social e marketing", description: "SEO, email e presenza social, pianificati e consegnati.", href: "/services/social-campaigns" },
          { title: "Chatbot e automazione", description: "Le domande comuni trovano risposta, il resto viene smistato.", href: "/services/chatbots-automation" },
          { title: "Sistemi di inventario", description: "Una visione chiara e affidabile del tuo magazzino.", href: "/services/inventory" },
          { title: "Spedizioni e ordini", description: "Meno passaggi manuali tra ordine e spedizione.", href: "/services/shipping-orders" },
          { title: "Integrazioni ERP e CRM", description: "I tuoi strumenti aziendali, che lavorano insieme.", href: "/services/erp-crm-integrations" },
          { title: "Manutenzione e supporto", description: "Assistenza tecnica continua dopo il lancio.", href: "/services/maintenance-support" },
          { title: "Miglioramento delle prestazioni", description: "Trova e risolvi i colli di bottiglia.", href: "/services/performance" },
          { title: "Ricerca e direzione creativa", description: "Analisi di mercato e bozze di design Figma.", href: "/services/research-creative-direction" },
          { title: "Presentazioni e pianificazione", description: "Una visione condivisa del tuo progetto, fin da subito.", href: "/services/project-planning" },
        ],
        footer: {
          text: "Basic a 2.500 $ una tantum. Pro a 2.500 $ più 500 $/mese.",
          linkLabel: "Vedi i prezzi",
          href: "#pricing",
        },
      },
      {
        label: "Risorse",
        items: [
          { title: "Come lavoriamo", description: "Fasi di consegna dalla scoperta al lancio.", href: "/how-we-work" },
          { title: "FAQ", description: "Domande comuni, con risposte chiare.", href: "/faq" },
          { title: "Prodotti e modelli", description: "Esplora i nostri siti web e le applicazioni.", href: "/products" },
          { title: "Assistenza e supporto", description: "Aiuto per i progetti dopo il lancio.", href: "/support" },
        ],
      },
    ],
    directLinks: [
      { title: "Chi siamo", description: "Chi è Starter Shifter e come lavoriamo.", href: "/about" },
      { title: "Prezzi", description: "Confronta l'avvio Basic e il supporto continuo Pro.", href: "/#pricing" },
    ],
    cta: "Inizia",
    mainNavigationLabel: "Navigazione principale",
    mobileNavigationLabel: "Navigazione mobile",
  },

  footer: {
    ariaLabel: "Footer di Starter Shifter",
    socialProfilesLabel: "Profili social",
    policyNote: "Stato delle informative e informazioni attuali.",
    navigation: [
      {
        key: "company",
        title: "Azienda",
        links: [
          ["Chi siamo", "/about"],
          ["Come lavoriamo", "/how-we-work"],
          ["Prodotti e modelli", "/products"],
          ["Piani e prezzi", "/#pricing"],
        ],
      },
      {
        key: "services",
        title: "Servizi",
        links: [
          ["Applicazioni web", "/#services"],
          ["Social media", "/#services"],
          ["Flussi di lavoro IA", "/#services"],
          ["Operazioni connesse", "/#process"],
          ["Manutenzione e crescita", "/#pricing"],
        ],
      },
      {
        key: "resources",
        title: "Risorse",
        links: [
          ["Accesso clienti", "/login"],
          ["Come lavoriamo", "/how-we-work"],
          ["FAQ", "/faq"],
          ["Brief di progetto", "/project-brief"],
          ["Assistenza e supporto", "/support"],
        ],
      },
      {
        key: "information",
        title: "Informazioni",
        links: [
          ["Privacy", "/policies/privacy"],
          ["Cookie", "/policies/cookies"],
          ["Termini di servizio", "/policies/terms"],
        ],
      },
    ],
  },

  landing: {
    hero: {
      eyebrow: "La tua agenzia per e-commerce e crescita digitale",
      titleLines: ["Il tuo prossimo capitolo", "inizia con un negozio migliore."],
      description:
        "Dal tuo primo negozio online ai sistemi che lo sostengono. Uniamo design, e-commerce e operazioni connesse, costruiti attorno alla tua azienda.",
      primaryCta: "Costruiamo il tuo negozio",
      secondaryCta: "Esplora i nostri servizi",
      note: "La tua azienda. Il tuo perimetro. Ovunque tu sia.",
    },
    services: {
      kicker: "Cosa facciamo",
      titleLines: ["Bello fuori.", "Connesso dentro."],
      intro:
        "La tua presenza online. La tua voce social. I flussi di lavoro dietro. Tre servizi connessi, modellati attorno alla tua azienda.",
      cards: [
        { title: "Applicazione web", text: "Siti e applicazioni web, con design e sviluppo modellati sul funzionamento della tua azienda." },
        { title: "Social media e marketing", text: "Gestione SEO, email marketing e social media su WhatsApp, LinkedIn, Pinterest e oltre." },
        { title: "Flusso di lavoro IA", text: "Strumenti connessi, automazione delle attività e percorsi di chat con i clienti che coinvolgono il tuo team quando serve." },
      ],
      illustrationLabels: {
        web: "Esplora l'illustrazione dell'applicazione web",
        social: "Esplora l'illustrazione dei social media",
        ai: "Esplora l'illustrazione del flusso di lavoro IA",
      },
    },
    projects: {
      kicker: "Prodotti e modelli",
      titleLines: ["Uno sguardo più da vicino", "a ciò che costruiamo."],
      intro:
        "Siti web, applicazioni ed esperienze connesse. Esplora la collezione, una schermata alla volta.",
      cta: "Vedi tutti i prodotti",
      showcaseLabel: "Vetrina dei progetti",
    },
    process: {
      kicker: "Come ti portiamo online",
      titleLines: ["Dal comprendere la tua azienda", "al connetterla online."],
      intro:
        "Cinque fasi di una presenza digitale connessa. Concordiamo quali servizi servono al tuo progetto, poi costruiamo attorno a quel perimetro.",
      linkLabel: "Leggi la guida completa alla consegna",
      steps: [
        {
          title: ["Ricerca e", "direzione"],
          description:
            "Conosciamo la tua azienda, studiamo il tuo mercato e analizziamo la concorrenza. Queste informazioni modellano il piano e una prima direzione di design per la tua revisione.",
          details: ["Ricerca aziendale", "Analisi di mercato", "Analisi della concorrenza"],
          note: "La profondità della ricerca e i deliverable di design sono concordati per il tuo progetto.",
          phase: "Comprendere",
        },
        {
          title: ["La tua azienda,", "costruita online"],
          description:
            "Progettiamo e costruiamo il tuo sito o applicazione web su Shopify o WordPress, con WooCommerce quando serve un negozio. La piattaforma e le funzionalità seguono il funzionamento della tua azienda.",
          details: ["Shopify o WordPress", "Design e sviluppo", "Lancio e consegna"],
          note: "Fornisci contenuti aziendali, dettagli dei prodotti, accessi agli account e approvazioni.",
          phase: "Costruire",
        },
        {
          title: ["Una presenza", "social"],
          description:
            "Impostiamo il tuo marketing digitale: gestione SEO, email marketing e social media su WhatsApp, LinkedIn, Pinterest e gli altri canali di cui ha bisogno la tua azienda. L'obiettivo è renderti più facile da trovare e da capire.",
          details: ["Gestione SEO", "Email marketing", "WhatsApp, LinkedIn e Pinterest"],
          note: "Basic include la configurazione marketing completa — SEO, email e social media — come lavoro una tantum. Pro aggiunge generazione di lead e lavoro di crescita, senza volumi di lead garantiti.",
          phase: "Stabilire",
        },
        {
          title: ["Un'IA che ti aiuta", "a rispondere"],
          description:
            "Configuriamo chatbot per le domande comuni dei clienti e flussi di supporto, connessi ai tuoi canali social dove supportato. Le conversazioni che richiedono il tuo team vengono passate a una persona.",
          details: ["Chatbot per i clienti", "Canali social supportati", "Passaggio a un operatore"],
          note: "L'accesso ai canali, le FAQ approvate e i limiti di utilizzo del software modellano la configurazione.",
          phase: "Automatizzare",
        },
        {
          title: ["Connesso.", "Curato."],
          description:
            "Manteniamo e miglioriamo i sistemi concordati, e connettiamo gli strumenti aziendali supportati: ERP per le operazioni e CRM per le relazioni con i clienti. I flussi di spedizione e fatturazione possono far parte di queste integrazioni.",
          details: ["Manutenzione e prestazioni", "Connessioni ERP e CRM", "Spedizioni e fatturazione"],
          note: "Le integrazioni dipendono dalle capacità di terze parti. L'assistenza continua è fatturata mensilmente; i costi di terze parti sono separati.",
          phase: "Connettere e mantenere",
        },
      ],
    },
    about: {
      kicker: "Un po' di noi",
      titleLines: ["La tua azienda online.", "Tutto funziona insieme."],
      intro: "Siamo Starter Shifter. Il tuo sito web, la tua presenza social e i tuoi flussi di lavoro, costruiti per funzionare insieme.",
      benefits: [
        { title: "Chiarezza prima di costruire", description: "Una ricerca che dà una direzione alla tua prossima mossa." },
        { title: "I tuoi strumenti, connessi", description: "Connessioni supportate. Meno passaggi manuali." },
        { title: "La tua azienda, online", description: "Un sito web o un negozio modellato attorno a te." },
        { title: "Una presenza social coerente", description: "Il tuo brand, portato in pagine e modelli." },
        { title: "Un supporto dal tocco umano", description: "L'IA per la routine. Il tuo team quando conta." },
        { title: "Vedere cosa richiede attenzione", description: "Trova i colli di bottiglia. Concentrati su prestazioni migliori." },
      ],
      ctaTitleLines: ["Rendiamo digitale la", "tua prossima mossa."],
      ctaLabel: "Parla del tuo progetto",
    },
    pricing: {
      label: "I nostri piani",
      title: "Scegli il supporto di cui hai bisogno.",
      recommendedBadge: "Consigliato",
      plans: [
        {
          name: "Piano Basic",
          description: "La costruzione completa e la configurazione del marketing digitale, consegnate una sola volta.",
          price: "2.500 $",
          payment: "Pagamento una tantum",
          billing: "La tua applicazione e il tuo marketing, costruiti e consegnati.",
          includes: "Cosa è incluso",
          features: [
            "Ricerca aziendale, di mercato e sulla concorrenza",
            "Design Figma e direzione creativa",
            "Sviluppo del sito web o dell'applicazione e-commerce",
            "Gestione SEO",
            "Email marketing",
            "Marketing sui social media — WhatsApp, LinkedIn, Pinterest e oltre",
            "Configurazione del chatbot IA e dell'automazione dell'assistenza",
            "Configurazione dei flussi di inventario, spedizione e fatturazione",
            "Integrazioni ERP e CRM supportate",
            "Lancio e consegna",
          ],
          boundary:
            "Costruzione e configurazione marketing una tantum. Non promettiamo generazione di lead né gestiamo manutenzione continua. Paghi hosting, domini, spesa pubblicitaria e commissioni di pagamento.",
          action: "Scegli il piano Basic",
        },
        {
          name: "Piano Pro",
          description: "Tutto Basic, più un team per mantenerlo e farlo crescere.",
          price: "2.500 $",
          payment: "Configurazione una tantum",
          monthly: "500 $",
          monthlyPeriod: "/ mese",
          billing: "per manutenzione e generazione di lead",
          includes: "Tutto Basic, più",
          features: [
            "Manutenzione e supporto tecnico continui",
            "Miglioramento e monitoraggio delle prestazioni",
            "Generazione di lead e gestione delle campagne",
            "Mantenere SEO e marketing aggiornati",
            "Strategia e pianificazione della crescita",
            "Gestione delle richieste dei clienti",
            "Gestione di chatbot e automazione",
            "Cura continua di flussi e integrazioni",
          ],
          boundary:
            "Gestiamo attivamente la generazione di lead e aiutiamo la tua azienda a crescere. I volumi di lead non sono garantiti — se un approccio non funziona, lo ristrutturiamo e ne testiamo altri. La spesa pubblicitaria è separata.",
          action: "Scegli il piano Pro",
        },
      ],
      terms:
        "I deliverable, le quantità, gli strumenti supportati e la copertura mensile sono concordati prima dell'inizio del lavoro. Fornisci contenuti aziendali, accessi agli account e approvazioni. Hosting, domini, software, licenze, costi di utilizzo, spesa pubblicitaria e commissioni di pagamento o spedizione sono a tuo carico e separati dagli onorari dell'agenzia. I servizi aggiuntivi al di fuori dei tre gruppi sono quotati separatamente.",
      footerLink: "Vedi cosa copre il supporto continuo",
    },
    faq: {
      kicker: "Un po' più di chiarezza",
      titleLines: ["Buone domande.", "Risposte chiare."],
      intro: "Ogni azienda parte da un punto diverso. Ecco cosa sapere prima di iniziare insieme.",
      linkLabel: "Sfoglia tutte le FAQ",
      questions: [
        {
          question: "Cosa è incluso esattamente?",
          answer:
            "Basic copre la costruzione completa e la configurazione del marketing digitale come lavoro una tantum: il tuo sito web o applicazione e-commerce, la gestione SEO, l'email marketing e il marketing sui social media su WhatsApp, LinkedIn, Pinterest e altri canali secondo le tue esigenze. Pro aggiunge tutto Basic, più 500 $ al mese per manutenzione continua, prestazioni e generazione di lead. I servizi al di fuori di queste tre aree sono quotati separatamente.",
        },
        {
          question: "Qual è la differenza tra Basic e Pro?",
          answer:
            "Basic costa 2.500 $ una tantum e consegna la costruzione completa dell'applicazione e la configurazione marketing, poi la consegna. Pro costa 2.500 $ per la stessa configurazione più 500 $ al mese per manutenzione continua, miglioramento delle prestazioni e generazione di lead. Basic non include generazione di lead né manutenzione continua. I volumi di lead non sono garantiti in nessuno dei due piani.",
        },
        {
          question: "Ci sono costi aggiuntivi o nascosti?",
          answer:
            "Hosting, domini, spesa pubblicitaria, commissioni di pagamento e altre spese di terze parti sono a tuo carico, non incluse nell'onorario dell'agenzia. Se hai bisogno di servizi oltre le tre aree coperte, o di lavoro fuori dal perimetro concordato, questo è quotato separatamente.",
        },
        {
          question: "Di cosa avete bisogno da noi per iniziare?",
          answer:
            "Un contratto firmato, un anticipo del 40% e i dettagli della tua azienda e del tuo progetto. Completi poi l'onboarding e fornisci qualsiasi informazione o documento aggiuntivo tramite la tua dashboard — inclusi cataloghi e immagini dei prodotti, così da poter creare mockup accurati.",
        },
        {
          question: "Quanto tempo richiederà il nostro progetto?",
          answer:
            "La prima consegna di ricerca e di una bozza di design Figma è prevista entro un massimo di 3–4 giorni dal completamento dell'onboarding. Successivamente programmiamo due chiamate Google Meet a settimana per condividere progressi e aggiornamenti fino alla costruzione e consegna della tua applicazione.",
        },
        {
          question: "Potete connettere gli strumenti che già usiamo?",
          answer:
            "Offriamo integrazioni tra negozi, inventario, spedizioni e sistemi aziendali come gli strumenti ERP e CRM. Esaminiamo i tuoi sistemi esatti, gli accessi disponibili e i limiti della piattaforma prima di confermare la compatibilità e il lavoro necessario.",
        },
        {
          question: "Potete aiutarci dopo il lancio?",
          answer:
            "Sì. Pro include 500 $ al mese per manutenzione e supporto continui: miglioriamo le prestazioni, manteniamo SEO e marketing aggiornati e lavoriamo per vendite migliori. Basic è una tantum, ma ogni cliente una tantum è comunque supportato per l'intero primo mese dall'onboarding — gestiamo le modifiche richieste e le correzioni dei bug. Dopo quel mese, se non continui con Pro, ulteriore aiuto è quotato in base al problema e ai servizi di cui hai bisogno.",
        },
        {
          question: "Chi possiede il sito web e gli account dopo la consegna?",
          answer:
            "Tu. Dopo la consegna gestisci il sito web, i suoi account e i suoi contenuti. Non ti obblighiamo a continuare con i nostri servizi, a meno che tu non voglia un supporto continuo.",
        },
        {
          question: "Garantite lead o vendite?",
          answer:
            "Non possiamo promettere un numero preciso, perché i risultati dipendono soprattutto dal mercato. Ciò che ottengono i clienti Pro è una generazione di lead attiva e continua: lavoriamo per portare lead e vendite, e se un approccio non funziona, lo ristrutturiamo e ne testiamo altri per trovare ciò che si adatta alla tua azienda.",
        },
      ],
    },
    contact: {
      intro: "Il tuo prossimo capitolo",
      titleLines: ["Realizziamo la tua", "prossima mossa."],
      description:
        "Un negozio online migliore, una presenza social più forte o flussi di lavoro connessi. Inizia da ciò di cui ha bisogno la tua azienda.",
      cta: "Pianifica il tuo progetto",
      dialogTitle: "Raccontaci cosa hai in mente.",
      dialogDescriptionWithEmail:
        "Crea un breve brief di progetto, poi aprilo nella tua app di posta per inviarcelo.",
      dialogDescriptionWithoutEmail:
        "Metti le tue idee in un breve brief che puoi scaricare e condividere. Questo modulo salva un file sul tuo dispositivo; non invia una richiesta.",
      secondaryLink: "Esplora i nostri servizi",
    },
  },

  pages: {
    about: {
      eyebrow: "Chi è Starter Shifter",
      note: "Lavoriamo con aziende in tutto il mondo",
      titleLines: ["La tua azienda.", "Il suo prossimo capitolo"],
      titleMark: "online.",
      lede:
        "Siamo Starter Shifter, un'agenzia che aiuta le aziende a portare online prodotti e operazioni. Colleghiamo il sito web che vedono i tuoi clienti con gli strumenti e i flussi di lavoro che ci stanno dietro.",
      primaryCta: "Raccontaci della tua azienda",
      secondaryCta: "Esplora i nostri piani",
      facts: [
        { label: "Focus", value: "Web, social e flussi di lavoro IA" },
        { label: "Portata", value: "Aziende in tutto il mondo" },
        { label: "Modi di lavorare", value: "Avvio Basic o supporto Pro" },
      ],
      statementEyebrow: "La versione breve",
      statementTitle:
        "Colleghiamo il sito web che vedono i tuoi clienti con i flussi di lavoro su cui si basa il tuo team.",
      statementParagraphs: [
        "Lavoriamo con aziende di tutto il mondo, in ogni settore. Che tu stia creando una presenza online o migliorando una configurazione esistente, il punto di partenza è la tua azienda e ciò di cui ha bisogno.",
        "Il nostro approccio riunisce ricerca, design, sviluppo e integrazioni supportate in un unico piano concordato, così che ogni parte abbia uno scopo chiaro.",
      ],
      workLabel: "Cosa facciamo",
      workTitleLines: ["Tre aree.", "Un piano connesso."],
      workAside:
        "Tre aree di lavoro, modellate sul modo in cui la tua azienda vende, comunica e opera.",
      workLink: "Esplora i nostri servizi",
      services: [
        {
          title: "Applicazioni web",
          description:
            "Siti web e negozi e-commerce modellati sui tuoi prodotti e clienti. Riuniamo ricerca, direzione creativa e sviluppo su Shopify o WordPress con WooCommerce, con piattaforma e funzionalità concordate per il tuo progetto.",
          tags: ["Shopify", "WordPress + WooCommerce", "Design e costruzione"],
        },
        {
          title: "Social media e marketing digitale",
          description:
            "Gestione SEO, email marketing e marketing sui social media su WhatsApp, LinkedIn, Pinterest e altri canali secondo le tue esigenze. Per gli incarichi Pro concordiamo anche le campagne continuative e la generazione di lead di cui ha bisogno la tua azienda.",
          tags: ["SEO", "Email marketing", "WhatsApp, LinkedIn e Pinterest"],
        },
        {
          title: "Flussi di lavoro IA",
          description:
            "Chatbot e automazioni supportate che aiutano a rispondere alle domande comuni, smistare le richieste e ridurre il lavoro ripetitivo. Possiamo connettere inventario, spedizioni, fatturazione e strumenti aziendali concordati dove le piattaforme lo supportano.",
          tags: ["Chatbot", "Assistenza clienti", "Integrazioni supportate"],
        },
      ],
      processLabel: "Come lavoriamo",
      processTitleLines: ["Prima la ricerca.", "Un percorso chiaro."],
      processIntro:
        "La tua conoscenza dell'azienda e la nostra ricerca guidano il lavoro. Le decisioni condivise mantengono allineati design, costruzione e consegna.",
      gateLabel: "Prima dell'inizio del lavoro",
      gateItems: ["Contratto firmato", "Anticipo del 40%", "Dettagli azienda e progetto"],
      steps: [
        {
          title: "Comprendere la tua azienda",
          description:
            "Discutiamo obiettivi, prodotti, clienti e sistemi esistenti, poi concordiamo deliverable, responsabilità, tempistiche e costi.",
        },
        {
          title: "Trovare una direzione condivisa",
          description:
            "La ricerca su azienda, mercato e concorrenza alimenta una bozza di design Figma di base. Rivedi la direzione e condividi feedback prima di passare alla costruzione e ai flussi connessi concordati.",
        },
        {
          title: "Costruire, lanciare e pianificare il seguito",
          description:
            "Implementiamo e testiamo il sito web e i flussi selezionati, con i tuoi contenuti, accessi agli account e approvazioni. La consegna e qualsiasi lavoro di manutenzione o crescita seguono la copertura concordata per il tuo piano.",
        },
      ],
      scopeLabel: "Lavorare insieme",
      scopeTitleLines: ["Perimetro chiaro.", "Aspettative condivise."],
      scopeIntro:
        "Prima dell'inizio del lavoro, definiamo i servizi selezionati, cosa fornisci tu e cosa resta fuori dagli onorari dell'agenzia.",
      scope: [
        {
          label: "Cosa ricevi",
          description:
            "Basic copre la costruzione completa dell'applicazione più il marketing digitale — gestione SEO, email marketing e marketing sui social media — come lavoro una tantum. Pro aggiunge manutenzione continua, miglioramento delle prestazioni e generazione di lead.",
        },
        {
          label: "Cosa fornisci",
          description:
            "Contenuti concordati, informazioni aziendali, cataloghi e immagini dei prodotti, accessi agli account e approvazioni. Le tempistiche dipendono da questi elementi e dalle approvazioni delle piattaforme di terze parti.",
        },
        {
          label: "Tenuti separati",
          description:
            "Abbonamenti alle piattaforme, hosting, domini, app a pagamento, costi di utilizzo, spesa pubblicitaria e commissioni di pagamento sono a tuo carico, separati dagli onorari dell'agenzia.",
        },
      ],
      scopeCta: "Confronta Basic e Pro",
      scopeFooter:
        "Deliverable, quantità, strumenti supportati, revisioni e copertura del supporto sono concordati prima dell'inizio del lavoro.",
    },

    faq: {
      eyebrow: "Risorse / FAQ",
      note: "I dettagli, con risposte chiare",
      titleLines: ["Buone domande.", "Risposte chiare."],
      titleMark: "Risposte chiare.",
      description:
        "I dettagli pratici su perimetro, prezzi, tempistiche, integrazioni e supporto — scritti come li spiegheremmo in una prima conversazione.",
      facts: [
        { label: "Piani", value: "Basic e Pro" },
        { label: "Onboarding", value: "Contratto, anticipo e dettagli" },
        { label: "Copertura", value: "Concordata per progetto" },
      ],
      sectionIndex: "01",
      sectionLabel: "Domande comuni",
      sectionTitleLines: ["Risposte dirette,", "senza il carattere piccolo."],
      sectionIntro:
        "Se la tua domanda non è qui, avvia un brief di progetto e raccontaci cosa cerchi di risolvere. Risponderemo direttamente.",
      jumpTo: "Vai a",
      categoriesLabel: "Categorie di FAQ",
      groups: [
        {
          id: "faq-plans",
          label: "Piani e perimetro",
          questions: [
            {
              question: "Cos'è Starter Shifter?",
              answer:
                "Starter Shifter è un'agenzia che aiuta le aziende a portare online prodotti e operazioni. Lavoriamo su siti web e applicazioni e-commerce, presenza social, chatbot e automazione, integrazioni e i sistemi che ci stanno dietro. I clienti possono avere sede ovunque, e ogni perimetro è modellato attorno all'azienda.",
            },
            {
              question: "Qual è la differenza tra Basic e Pro?",
              answer:
                "Basic costa 2.500 $ una tantum. Copre la costruzione completa dell'applicazione più la configurazione del marketing digitale: ricerca e design, sviluppo del sito o dell'applicazione e-commerce, gestione SEO, email marketing e marketing sui social media su WhatsApp, LinkedIn, Pinterest e altri canali come richiesto, più la configurazione di chatbot e automazione, le integrazioni operative supportate e il lancio. Gestisci tu la generazione di lead e il lavoro continuo dopo la consegna. Pro costa 2.500 $ per la stessa configurazione più 500 $ al mese per manutenzione continua, miglioramento delle prestazioni, generazione di lead e mantenimento di SEO e marketing aggiornati. Deliverable e copertura sono concordati in anticipo; i volumi di lead non sono garantiti e i costi di terze parti come hosting, domini, spesa pubblicitaria e commissioni di pagamento sono a tuo carico.",
            },
            {
              question: "Possiamo scegliere solo una parte di un piano?",
              answer:
                "Sì. Basic e Pro sono punti di partenza per i perimetri più comuni. Se hai bisogno di un incarico più piccolo, più grande o diverso, possiamo discutere un perimetro su misura. Il lavoro, il prezzo, le tempistiche e le responsabilità selezionati sono concordati prima dell'inizio del lavoro.",
            },
            {
              question: "Ci sono costi oltre il prezzo del piano?",
              answer:
                "Sì. Hosting, domini, spesa pubblicitaria, commissioni di elaborazione dei pagamenti e altre spese di terze parti sono a tuo carico, separate dagli onorari dell'agenzia. Abbonamenti alle piattaforme, temi, app, plugin e licenze, abbonamenti a ERP, CRM, chatbot e altri software, costi di utilizzo, licenze degli asset e costi di spedizione o evasione sono anch'essi di tua responsabilità. I servizi al di fuori delle tre aree coperte, o il lavoro fuori dal perimetro concordato, sono quotati separatamente.",
            },
            {
              question: "Garantite lead, vendite o crescita?",
              answer:
                "Non possiamo promettere un numero preciso di lead o vendite — i risultati dipendono soprattutto dal mercato e da fattori fuori dal nostro controllo. Ciò che promettiamo per Pro è il lavoro stesso: gestiamo attivamente la generazione di lead e aiutiamo la tua azienda a crescere, e se un approccio non produce risultati, lo ristrutturiamo e ne testiamo altri per trovare ciò che funziona. Ci lavoreremo insieme a te, non solo consegnandoti una configurazione.",
            },
            {
              question: "Come funziona il pagamento?",
              answer:
                "L'onboarding segue un contratto condiviso firmato e un anticipo del 40%, insieme ai dettagli della tua azienda e del tuo progetto. I tempi del pagamento residuo e le altre condizioni commerciali sono stabiliti nel tuo contratto. Basic è una tariffa una tantum; Pro combina una tariffa di configurazione con un addebito mensile. Le altre condizioni di pagamento o legali sono concordate individualmente.",
            },
          ],
        },
        {
          id: "faq-process",
          label: "Processo e tempistiche",
          questions: [
            {
              question: "Di cosa avete bisogno da noi per iniziare?",
              answer:
                "Un contratto condiviso firmato, un anticipo del 40% e i dettagli della tua azienda e del tuo progetto. A seconda del perimetro, potremmo anche aver bisogno di informazioni sui prodotti, asset del brand, accesso agli strumenti esistenti, politiche, regole fiscali e di spedizione, e un contatto che possa revisionare e approvare il lavoro.",
            },
            {
              question: "Quanto tempo richiederà il nostro progetto?",
              answer:
                "La prima consegna di ricerca e di una bozza di design Figma è prevista entro un massimo di 3–4 giorni dal completamento dell'onboarding. La costruzione completa dipende poi dal perimetro, dai requisiti tecnici, dalla disponibilità dei contenuti, dalle approvazioni di terze parti e dai cicli di revisione. Programmiamo due chiamate Google Meet a settimana per condividere i progressi, e concordiamo milestone e tempistiche nella tua proposta.",
            },
            {
              question: "Qual è la prima consegna prevista?",
              answer:
                "Dopo il contratto firmato, l'anticipo del 40% e i dettagli azienda/progetto completi, puntiamo a una prima consegna entro 3–4 giorni con ricerca su azienda, mercato e concorrenza, più una bozza di design Figma di base con varianti. L'avvio esatto del conteggio, la profondità della ricerca, il numero di varianti e il limite di revisioni sono confermati per il tuo progetto. La consegna è un passo di definizione della direzione, non il sito finito né tutte le integrazioni.",
            },
            {
              question: "Come funzionano le revisioni?",
              answer:
                "Rivedi il lavoro concordato ai punti di decisione del tuo perimetro e condividi feedback consolidati. Il limite di revisioni è concordato prima dell'inizio del lavoro. Se una richiesta cambia il perimetro concordato o aggiunge lavoro, definiamo lavoro, prezzo e tempistiche aggiuntivi prima di procedere.",
            },
            {
              question: "Cosa succede se i nostri contenuti o accessi arrivano in ritardo?",
              answer:
                "Le tempistiche dipendono dagli elementi che concordiamo. Se contenuti, accessi agli account, approvazioni o risposte di terze parti arrivano in ritardo, il programma può cambiare. Segnaliamo la dipendenza e concordiamo un piano rivisto, invece di assorbire il ritardo in silenzio.",
            },
          ],
        },
        {
          id: "faq-build",
          label: "Siti web e integrazioni",
          questions: [
            {
              question: "Su quali piattaforme costruite?",
              answer:
                "Costruiamo siti web e applicazioni e-commerce su Shopify o WordPress, usando WooCommerce quando serve un negozio. Se un'altra piattaforma o un altro builder potesse essere più adatto, esaminiamo supporto e fattibilità prima di impegnarci. L'approccio di piattaforma è confermato nella tua proposta.",
            },
            {
              question: "Potete ridisegnare o migrare un sito esistente?",
              answer:
                "Possiamo discutere un restyling o una migrazione, ma non è automaticamente incluso in Basic o Pro. Esaminiamo prima il sito, i contenuti, i prodotti, le integrazioni e i reindirizzamenti attuali. Il perimetro, i rischi e il prezzo della migrazione sono concordati separatamente.",
            },
            {
              question: "Potete connettere gli strumenti che già usiamo?",
              answer:
                "Offriamo integrazioni tra negozi, inventario, spedizioni, fatturazione e sistemi aziendali come gli strumenti ERP e CRM. La compatibilità dipende dai sistemi, versioni, accessi, API e limiti della piattaforma esatti. Li esaminiamo prima di confermare cosa può essere connesso e cosa comporta il lavoro.",
            },
            {
              question: "Costruite app mobili native?",
              answer:
                "Il nostro lavoro confermato riguarda siti web e applicazioni web. Se stai considerando un'app mobile nativa, segnalalo presto così da confermare se rientra nell'incarico. Non è considerata parte di una costruzione web o e-commerce.",
            },
            {
              question: "Potete configurare chatbot e automazione social?",
              answer:
                "Sì, come configurazione concordata. Progettiamo i casi d'uso, colleghiamo i canali supportati, usiamo fonti di conoscenza approvate, fissiamo i limiti e organizziamo un passaggio a un operatore umano dove serve. Il supporto esatto dei canali, il volume di conversazioni, i permessi e i costi di utilizzo sono confermati durante la fattibilità. Non promettiamo un supporto completamente autonomo né tutti i social network.",
            },
          ],
        },
        {
          id: "faq-after-launch",
          label: "Dopo il lancio",
          questions: [
            {
              question: "Potete aiutarci dopo il lancio?",
              answer:
                "Sì. Pro include manutenzione e supporto continui per 500 $ al mese, oltre alla tariffa di configurazione di 2.500 $. Miglioriamo le prestazioni, manteniamo SEO e marketing aggiornati e lavoriamo per vendite migliori. Basic è una configurazione una tantum, ma ogni cliente una tantum è comunque supportato per l'intero primo mese dall'onboarding — gestiamo le modifiche richieste e le correzioni dei bug. Dopo quel primo mese, se non continui con Pro, ulteriore aiuto è quotato in base al problema e ai servizi di cui hai bisogno.",
            },
            {
              question: "Cosa copre la manutenzione?",
              answer:
                "La copertura tipica può includere controlli di routine, aggiornamenti applicabili e verifiche di compatibilità, correzioni di bug, monitoraggio, attività di backup e ripristino dove concordate, e gestione del supporto. L'elenco esatto dipende dai tuoi sistemi e dalla copertura che acquisti. Nuove funzionalità e lavoro fuori da quella copertura richiedono un proprio perimetro.",
            },
            {
              question: "Offrite supporto 24/7 o un tempo di risposta garantito?",
              answer:
                "Non pubblichiamo una promessa universale di 24/7 né di tempi di risposta. Orari, canali, capacità, obiettivi di risposta ed escalation sono concordati nel tuo perimetro di supporto. Se hai bisogno di un livello di servizio specifico, segnalalo prima dell'incarico così da confermare se può essere soddisfatto.",
            },
            {
              question: "Chi possiede il sito web e gli account dopo la consegna?",
              answer:
                "Tu. Dopo la consegna gestisci il sito web, i suoi account e i suoi contenuti. Non ti obblighiamo a continuare con i nostri servizi, a meno che tu non voglia un supporto continuo. Gli account delle piattaforme, le licenze e i servizi di terze parti possono restare soggetti ai propri termini.",
            },
            {
              question: "Potete gestire le nostre inserzioni e la generazione di lead?",
              answer:
                "Pro include la generazione di lead e il lavoro di campagna gestiti dall'agenzia nel perimetro concordato. Basic esclude la generazione di lead gestita dall'agenzia. Lavoriamo attivamente per portare lead e vendite, e se un approccio non funziona lo ristrutturiamo e ne testiamo altri. La spesa pubblicitaria è sempre a tuo carico, separata dagli onorari dell'agenzia, e i volumi di lead non sono garantiti — i risultati dipendono dal mercato. Canali, perimetro della campagna, quantità di contenuti e frequenza dei report sono concordati in anticipo.",
            },
          ],
        },
        {
          id: "faq-working",
          label: "Lavorare insieme",
          questions: [
            {
              question: "Come avviamo un progetto?",
              answer:
                "Inizia con un brief di progetto su questo sito. Lo usiamo per capire la tua azienda e i tuoi obiettivi, poi discutiamo il perimetro giusto. Se c'è adattamento, ricevi una proposta con deliverable, esclusioni, prezzi, tempistiche e responsabilità. Il lavoro inizia dopo il contratto firmato, l'anticipo del 40% e i dettagli del progetto.",
            },
            {
              question: "Lavorate con aziende fuori dal vostro Paese?",
              answer:
                "Sì. Starter Shifter lavora con aziende in tutto il mondo. Non rivendichiamo copertura legale, fiscale o di piattaforma locale in ogni mercato, quindi i requisiti specifici della tua giurisdizione sono confermati per il tuo progetto.",
            },
            {
              question: "Come gestite le nostre informazioni?",
              answer: {
                before:
                  "Usiamo i dettagli che condividi per capire la tua azienda e preparare o consegnare i servizi concordati. Non vendiamo il tuo brief né lo condividiamo con altre aziende per il loro uso. La nostra ",
                linkLabel: "informativa sulla privacy",
                linkHref: "/policies/privacy",
                after:
                  " spiega l'attuale brief di progetto e il portale clienti, e identifica ciò che è ancora in attesa di approvazione.",
              },
            },
            {
              question: "E se non sappiamo di cosa abbiamo bisogno?",
              answer:
                "È un punto di partenza normale. Condividi il problema aziendale e ciò che è già in atto. Possiamo aiutarti a identificare il perimetro ragionevole più piccolo, incluso se la ricerca o un passo di scoperta dovrebbe venire prima. Non devi scegliere un piano prima della prima conversazione.",
            },
            {
              question: "Il brief di progetto è un contratto o un preventivo?",
              answer:
                "No. Il brief di progetto è un punto di partenza per la discussione. Non crea un accordo, non riserva tempo e non fissa un prezzo. Una proposta e un contratto firmato definiscono il perimetro e le condizioni commerciali.",
            },
          ],
        },
      ],
    },

    howWeWork: {
      eyebrow: "Risorse / Come lavoriamo",
      note: "La consegna, spiegata chiaramente",
      titleLines: ["Un percorso chiaro dalla prima conversazione alla"],
      titleMark: "cura continua.",
      description:
        "Ogni progetto è diverso, ma il modo in cui lo attraversiamo no. Queste sono le fasi che usiamo per capire la tua azienda, concordare il perimetro, costruire il lavoro e sostenere ciò che viene dopo.",
      facts: [
        { label: "Punto di partenza", value: "Contratto, anticipo del 40% e dettagli" },
        { label: "Prima consegna", value: "Ricerca e direzione Figma" },
        { label: "Modi di lavorare", value: "Avvio Basic o supporto Pro" },
      ],
      prerequisitesTitleLines: ["L'onboarding inizia quando", "le fondamenta sono chiare."],
      prerequisitesLabel: "Il punto di partenza",
      prerequisitesIntro:
        "L'onboarding segue tre prerequisiti. Proteggono entrambe le parti: il perimetro è compreso, l'impegno è reale e abbiamo abbastanza contesto per iniziare un lavoro utile.",
      prerequisites: [
        {
          title: "Un contratto condiviso firmato",
          description:
            "Il contratto registra perimetro, responsabilità e condizioni commerciali concordati. Il lavoro inizia solo dopo la firma.",
        },
        {
          title: "Un anticipo del 40%",
          description:
            "L'anticipo conferma l'incarico e ci permette di riservare tempo di consegna. I termini del pagamento residuo sono stabiliti nel tuo contratto.",
        },
        {
          title: "Dettagli azienda e progetto",
          description:
            "Abbiamo bisogno di abbastanza contesto sulla tua azienda, i tuoi obiettivi e la configurazione esistente per avviare ricerca e onboarding.",
        },
      ],
      prerequisitesFootNote:
        "Prima del pagamento, la tua proposta definisce servizi selezionati, deliverable, esclusioni, tempistiche, responsabilità e costi. Un lavoro aggiuntivo richiede una decisione esplicita su perimetro, prezzo e tempistiche.",
      stagesTitleLines: ["Otto fasi, modellate sul", "lavoro di cui hai davvero bisogno."],
      stagesLabel: "Il percorso di consegna",
      stagesIntro:
        "Queste fasi descrivono come operiamo. La tua proposta conferma quali si applicano, cosa è incluso e come appare il completamento per il tuo progetto.",
      stages: [
        {
          title: "Scoperta e qualificazione",
          description:
            "Discutiamo obiettivi, sistemi attuali, vincoli e come sarebbe il successo. L'obiettivo è capire il problema prima di proporre una costruzione.",
          bring: "Obiettivi, configurazione esistente, decisori",
          output: "Un riepilogo di scoperta o un passo successivo consigliato",
        },
        {
          title: "Perimetro e proposta",
          description:
            "Definiamo deliverable, esclusioni, approccio di piattaforma, prezzi, tempistiche e responsabilità in una proposta scritta.",
          bring: "Accesso ai dettagli dei sistemi e risposte di fattibilità tempestive",
          output: "Una proposta che puoi revisionare e approvare",
        },
        {
          title: "Accordo e onboarding",
          description:
            "Una volta firmato il contratto, ricevuto l'anticipo e completati i dettagli del progetto, l'onboarding inizia e avviamo il lavoro concordato.",
          bring: "Contratto firmato, anticipo del 40%, dettagli azienda",
          output: "Un progetto attivo e un punto di partenza condiviso",
        },
        {
          title: "Ricerca iniziale e bozza Figma",
          description:
            "Presentiamo la ricerca su azienda, mercato e concorrenza insieme a una bozza di design Figma di base con varianti da revisionare.",
          bring: "Feedback sulla direzione e le eventuali revisioni concordate",
          output: "Una direzione di design selezionata da portare in implementazione",
        },
        {
          title: "Design e implementazione",
          description:
            "Costruiamo il sito, l'applicazione, le campagne o le integrazioni concordati. Le capacità della piattaforma e i tempi di risposta di terze parti modellano ciò che è possibile.",
          bring: "Contenuti, dati prodotto, accessi agli account, approvazioni",
          output: "Il lavoro concordato, costruito e pronto per la revisione",
        },
        {
          title: "Test e revisione clienti",
          description:
            "Verifichiamo la funzionalità concordata e documentiamo i problemi. Testi i flussi aziendali che contano e confermi l'accettazione o una lista di revisioni delimitata.",
          bring: "Account di test, dati rappresentativi, feedback",
          output: "Una costruzione testata e una lista chiara di elementi rimanenti",
        },
        {
          title: "Lancio e consegna",
          description:
            "Distribuiamo o attiviamo il lavoro approvato e trasferiamo la documentazione, gli accessi e la formazione concordati.",
          bring: "Approvazione del lancio e disponibilità di domini e account",
          output: "Lavoro in produzione e una consegna concordata",
        },
        {
          title: "Supporto e miglioramento continui",
          description:
            "Se hai acquistato una copertura continua, manteniamo, gestiamo, rendicontiamo o miglioriamo i sistemi concordati. Basic non include la gestione continua.",
          bring: "Contatti, decisioni e input ricorrenti",
          output: "Il lavoro continuo definito nel tuo perimetro di supporto",
        },
      ],
      youBring: "Tu fornisci",
      output: "Risultato",
      stagesFootNote:
        "La correzione dei difetti, la manutenzione e lo sviluppo di nuove funzionalità sono categorie di lavoro distinte. Ognuna è gestita secondo il perimetro che le si applica, invece di essere considerata inclusa.",
      handoffTitleLines: ["Una direzione condivisa,", "prima di costruire."],
      handoffLabel: "La prima consegna",
      handoffIntro:
        "La consegna iniziale mira a darti qualcosa di concreto a cui reagire: una ricerca che alimenta il piano e una bozza di design con opzioni.",
      handoffCards: [
        {
          title: "Ricerca su azienda, mercato e concorrenza",
          description:
            "Studiamo la tua azienda, il segmento in cui operi e le alternative che i tuoi clienti potrebbero considerare. I risultati modellano il piano e la direzione di design.",
        },
        {
          title: "Una bozza di design Figma di base",
          description:
            "La bozza presenta varianti da revisionare, così puoi scegliere una direzione e dare feedback mirati prima dell'implementazione.",
        },
        {
          title: "Un punto di decisione, non una costruzione finita",
          description:
            "Selezioni una direzione e richiedi le revisioni concordate. L'implementazione che segue è una fase separata con i propri punti di revisione e approvazione.",
        },
        {
          title: "Cosa non promette",
          description:
            "Questa consegna non è il sito finito, né tutti gli asset, né tutte le integrazioni. La profondità della ricerca e il perimetro del design corrispondono al tempo e alle informazioni disponibili.",
        },
      ],
      handoffNote:
        "L'intenzione dichiarata è una prima consegna entro un massimo di 3–4 giorni dopo contratto firmato, anticipo del 40% e dettagli azienda/progetto completi. Durante la costruzione programmiamo due chiamate Google Meet a settimana per condividere i progressi. L'avvio esatto del conteggio, la profondità della ricerca, il numero di varianti e il limite di revisioni sono confermati nella tua proposta.",
      workingTitleLines: ["Responsabilità chiare.", "Meno sorprese."],
      workingLabel: "Lavorare insieme",
      workingIntro:
        "Un buon incarico non riguarda solo cosa costruiamo. Riguarda anche chi fornisce cosa, chi lo approva e quali costi restano fuori dall'onorario dell'agenzia.",
      workingTogether: [
        {
          title: "Cosa fornisci tu",
          items: [
            "Le informazioni complete sulla tua azienda e sul progetto, completate durante l'onboarding",
            "Contenuti aziendali, dati prodotto, cataloghi e immagini prodotto",
            "Accessi agli account e contatti tecnici",
            "Politiche, regole fiscali, dettagli di spedizione e approvazioni",
            "Un decisore per revisioni e approvazione finale",
          ],
        },
        {
          title: "Cosa gestiamo noi",
          items: [
            "La ricerca, il design e l'implementazione concordati",
            "Le integrazioni e i test supportati",
            "Il lancio, la documentazione e la consegna",
            "Qualsiasi lavoro continuo acquistato separatamente",
          ],
        },
        {
          title: "Tenuti separati",
          items: [
            "Hosting, domini, temi, app e licenze",
            "Abbonamenti a ERP, CRM, chatbot e altri software",
            "Elaborazione dei pagamenti, utilizzo e costi di spedizione",
            "Spesa pubblicitaria e licenze di asset di terze parti",
          ],
        },
      ],
      workingFootNoteBefore:
        "Deliverable, quantità, strumenti supportati, limiti di revisione e capacità di supporto sono concordati prima dell'inizio del lavoro. Vedi ",
      workingFootNoteLink: "Assistenza e supporto",
      workingFootNoteAfter: " per come viene gestita la copertura continua.",
    },

    products: {
      eyebrow: "Risorse / Prodotti e modelli",
      note: "Siti web, applicazioni e sistemi",
      titleLines: ["Uno sguardo più da vicino", "a ciò che costruiamo."],
      titleMark: "costruiamo.",
      description:
        "Siti web, applicazioni ed esperienze connesse. Esplora la collezione, le categorie di lavoro che la sostengono e come etichettiamo la differenza tra un concept e un lavoro clienti completato.",
      facts: [
        { label: "Focus", value: "Siti web, applicazioni e sistemi" },
        { label: "Collezione", value: "Anteprime di concept" },
        { label: "Politica di prova", value: "Solo lavoro approvato" },
      ],
      workTitleLines: ["Tre aree.", "Un'esperienza connessa."],
      workLabel: "Il lavoro",
      workIntro:
        "La maggior parte dei progetti tocca più di un'area. Un negozio può aver bisogno di una vista operazioni; un flusso di supporto può aver bisogno di un sito web e di una connessione CRM dietro.",
      buildAreas: [
        {
          title: "Siti web ed e-commerce",
          description:
            "Negozi e siti aziendali modellati sul tuo modo di vendere, con catalogo, checkout e contenuti costruiti su una piattaforma concordata.",
          tags: ["Shopify", "WordPress + WooCommerce", "Design e costruzione"],
        },
        {
          title: "Applicazioni web e operazioni",
          description:
            "Strumenti interni e applicazioni rivolte ai clienti che trasformano ordini, inventario e sistemi aziendali connessi in flussi di lavoro più chiari.",
          tags: ["Dashboard", "Flussi di lavoro", "Connessioni ERP e CRM"],
        },
        {
          title: "Esperienze IA e automazione",
          description:
            "Chatbot, flussi di supporto e automazioni supportate che rispondono alle domande comuni, smistano le richieste e riducono il lavoro ripetitivo.",
          tags: ["Chatbot", "Passaggio a un operatore", "Integrazioni supportate"],
        },
      ],
      collectionTitleLines: ["Concept oggi.", "Prove quando approvate."],
      collectionLabel: "La collezione",
      collectionIntroWithPreviews:
        "La collezione mostra attualmente concept di design. Sono anteprime illustrative; i dettagli e gli screenshot dei progetti completati appariranno solo quando forniti e approvati.",
      collectionIntroWithoutPreviews:
        "Esplora la collezione di siti web, applicazioni ed esperienze connesse.",
      visitProject: "Visita il progetto",
      collectionFootNote:
        "Le anteprime di concept illustrano una direzione; non sono risultati clienti né case study pubblicati. Non pubblichiamo nomi di clienti, loghi, testimonianze o metriche senza autorizzazione e verifica.",
    },

    support: {
      eyebrow: "Risorse / Assistenza e supporto",
      note: "Aiuto dopo il lancio",
      titleLines: ["Un supporto che mantiene", "il lavoro funzionante."],
      titleMark: "funzionante.",
      description:
        "Il lancio è una milestone, non il traguardo. Ecco come funzionano cura, manutenzione e miglioramento continui dopo che il tuo progetto va in produzione — e cosa resta fuori da un perimetro di supporto concordato.",
      facts: [
        { label: "Basic", value: "Configurazione una tantum" },
        { label: "Pro", value: "2.500 $ + 500 $/mese" },
        { label: "Copertura", value: "Concordata per progetto" },
      ],
      actionCta: "Pianifica il tuo progetto",
      actionSecondary: "Accedi al tuo spazio di lavoro",
      plans: [
        {
          name: "Basic",
          price: "2.500 $",
          payment: "Configurazione una tantum",
          description:
            "La costruzione completa e la configurazione del marketing digitale, consegnate una volta e cedute. Basic non include la gestione continua.",
          items: [
            "La costruzione completa dell'applicazione e il lancio",
            "Gestione SEO, email marketing e marketing sui social media",
            "Configurazione di chatbot e automazione",
            "Consegna di accessi e documentazione concordati",
            "Supporto del primo mese per modifiche e correzioni di bug",
          ],
        },
        {
          name: "Pro",
          price: "2.500 $",
          payment: "Configurazione + 500 $ / mese",
          description:
            "La base Basic più manutenzione continua, miglioramento delle prestazioni, generazione di lead e mantenimento di SEO e marketing aggiornati.",
          items: [
            "Manutenzione e supporto tecnico continui",
            "Miglioramento e monitoraggio delle prestazioni",
            "Generazione di lead e gestione delle campagne",
            "Mantenimento di SEO e marketing aggiornati",
            "Cura di chatbot e flussi di lavoro",
          ],
        },
      ],
      waysTitleLines: ["Due modi per mantenere", "le cose in movimento."],
      waysLabel: "Dopo il lancio",
      waysIntro:
        "Basic è una costruzione una tantum. Pro aggiunge una relazione continua. Nessuno dei due piani significa lavoro illimitato; i sistemi coperti, la capacità e la cadenza sono concordati in anticipo.",
      waysFootNote:
        "La tariffa mensile di Pro copre il lavoro continuo concordato, inclusa la generazione attiva di lead — quando un approccio non produce risultati, lo ristrutturiamo e ne testiamo altri. Spesa pubblicitaria, abbonamenti di terze parti e costi di utilizzo sono a tuo carico. I volumi di lead e i risultati di crescita non sono garantiti.",
      coverageTitleLines: ["Il lavoro dietro", "«mantenerlo in funzione»."],
      coverageLabel: "Copertura",
      coverageIntro:
        "Il supporto può significare cose diverse a seconda dei sistemi coinvolti. Queste sono le aree che possiamo coprire quando sono scritte nel tuo perimetro di supporto.",
      coverage: [
        {
          title: "Manutenzione e aggiornamenti",
          description:
            "Controlli di routine, aggiornamenti applicabili e verifiche di compatibilità per i sistemi concordati. La cadenza esatta è stabilita nel tuo perimetro di supporto.",
        },
        {
          title: "Correzioni di bug",
          description:
            "Correzione dei difetti nella costruzione concordata. Un difetto è diverso da una nuova funzionalità o da una modifica al perimetro concordato.",
        },
        {
          title: "Prestazioni",
          description:
            "Monitoraggio e miglioramenti concordati di velocità, affidabilità o dei flussi coperti dal tuo piano. Gli obiettivi sono specifici per progetto.",
        },
        {
          title: "Integrazioni e dati",
          description:
            "Cura delle connessioni ERP, CRM, inventario, spedizione e fatturazione supportate, inclusi monitoraggio e gestione degli errori concordati.",
        },
        {
          title: "Backup e ripristino",
          description:
            "Attività di backup e ripristino dove concordate e supportate dalla piattaforma. Responsabilità e aspettative di ripristino sono documentate.",
        },
        {
          title: "Gestione del supporto",
          description:
            "Un percorso chiaro per domande e problemi, con triage, obiettivi di risposta concordati ed escalation per i sistemi nel perimetro.",
        },
      ],
      coverageFootNote:
        "L'elenco esatto dipende dal tuo mix di piattaforme, integrazioni e copertura acquistata. Manutenzione, correzione dei difetti e sviluppo di nuove funzionalità sono gestiti come categorie di lavoro distinte.",
      requestTitleLines: ["Un percorso chiaro", "verso una risposta reale."],
      requestLabel: "Quando qualcosa richiede attenzione",
      requestStepLabel: "Richiesta",
      requestIntro:
        "Il supporto funziona meglio quando la richiesta è specifica e arriva al posto giusto. Ecco la forma di una richiesta utile.",
      requestSteps: [
        {
          title: "Usa il canale concordato",
          description:
            "Invia la richiesta tramite il canale di supporto confermato per il tuo progetto, così arriva al posto giusto e può essere tracciata.",
        },
        {
          title: "Includi il dettaglio utile",
          description:
            "Descrivi cosa è successo, dove, cosa ti aspettavi e i passaggi per riprodurlo. Screenshot o link aiutano.",
        },
        {
          title: "Facciamo triage e rispondiamo",
          description:
            "Confermiamo se è un difetto, una manutenzione o un nuovo lavoro, poi concordiamo il passo successivo. Il lavoro fuori perimetro riceve un proprio preventivo.",
        },
      ],
      upFrontTitle: "Cosa concordiamo in anticipo",
      upFrontDescription:
        "Orari, canali, capacità, obiettivi di risposta ed escalation sono confermati nel tuo perimetro di supporto. Non pubblichiamo una promessa universale di 24/7 né di tempi di risposta.",
      requestNote:
        "Se lavori già con noi, usa il canale di supporto concordato per il tuo progetto. Se non sei sicuro di quale canale si applichi, chiedi al tuo solito contatto di progetto prima di inviare dettagli sensibili.",
      boundariesTitleLines: ["Cosa resta fuori", "da un perimetro concordato."],
      boundariesLabel: "Confini",
      boundariesIntro:
        "Sapere cosa non è incluso è utile quanto sapere cosa lo è. Questi elementi sono quotati separatamente invece di essere assorbiti nel supporto di routine.",
      separateLabel: "Separato",
      boundaries: [
        {
          title: "Nuove funzionalità e restyling",
          description:
            "Nuove funzionalità, modifiche strutturali, migrazioni e restyling sono separati dalla manutenzione di routine. Richiedono un proprio perimetro, prezzo e tempistiche.",
        },
        {
          title: "Costi di terze parti",
          description:
            "Hosting, domini, temi, app, licenze, abbonamenti software, costi di utilizzo, spesa pubblicitaria e commissioni di pagamento o spedizione sono a tuo carico, separati dagli onorari dell'agenzia.",
        },
        {
          title: "Lavoro senza un perimetro di supporto",
          description:
            "Basic è una configurazione una tantum con supporto del primo mese per modifiche richieste e correzioni di bug. Dopo quel mese, se non continui con Pro, ulteriore aiuto è quotato in base al problema e ai servizi di cui hai bisogno.",
        },
      ],
      boundariesFootNoteBefore:
        "Deliverable, capacità, obiettivi di risposta e sistemi coperti sono confermati prima dell'inizio del lavoro. Vedi ",
      boundariesLinkOneLabel: "come lavoriamo",
      boundariesLinkOneHref: "/how-we-work",
      boundariesFootNoteMiddle: " o leggi le ",
      boundariesLinkTwoLabel: "FAQ sul supporto",
      boundariesLinkTwoHref: "/faq#faq-after-launch",
      boundariesFootNoteAfter: ".",
    },

    policies: {
      privacy: {
        title: "Informazioni sulla privacy.",
        description:
          "La politica sulla privacy completa di Starter Shifter è in attesa di approvazione. Le informazioni sotto descrivono l'attuale funzionalità di brief di progetto; non sono una politica sulla privacy completa.",
        sections: [
          {
            heading: "Il tuo brief di progetto",
            paragraph:
              "Il tuo brief è salvato nel tuo account cliente, così puoi mettere in pausa, tornare e aggiornare le tue risposte. Non è condiviso con altri account cliente. I file di progetto caricati sono archiviati con il tuo spazio di lavoro e sono disponibili per te e Starter Shifter. Puoi rimuovere i tuoi file caricati dallo spazio di lavoro.",
          },
          {
            heading: "Account cliente e onboarding",
            paragraphBefore:
              "Il tuo account cliente ti permette di salvare le informazioni del tuo progetto e di tornarci in seguito. Le sue ",
            linkLabel: "informazioni sulla privacy dell'onboarding",
            linkHref: "/policies/onboarding-privacy",
            paragraphAfter:
              " spiegano come vengono usati i dettagli del progetto. Accetti questo avviso prima di iniziare le domande.",
          },
          {
            heading: "Ulteriori informazioni",
            paragraph:
              "Le informazioni sull'hosting dei dati, su qualsiasi futuro servizio di richiesta, sulla conservazione e sulle richieste di privacy saranno aggiunte quando la politica completa e i recapiti saranno approvati.",
          },
        ],
      },
      cookies: {
        title: "Informazioni sui cookie.",
        description:
          "La politica sui cookie è in attesa di approvazione. Un avviso completo sarà aggiunto dopo l'esame dell'ambiente di hosting in produzione e di eventuali strumenti di tracciamento.",
        sections: [
          {
            heading: "Funzionalità attuali del sito",
            paragraph:
              "Nessuna integrazione opzionale di analisi o pubblicità è configurata in questo sito. L'attuale funzionalità di brief di progetto crea un download locale senza inviare i tuoi dati.",
          },
          {
            heading: "Modifiche future",
            paragraph:
              "Se verranno introdotte funzionalità di analisi, pubblicità o altro tracciamento opzionale, queste informazioni dovranno essere aggiornate per gli strumenti e i dati effettivi coinvolti.",
          },
        ],
      },
      terms: {
        title: "Informazioni sui termini di servizio.",
        description:
          "I termini di servizio completi sono in attesa di approvazione. Questa pagina riassume le informazioni di incarico confermate; ogni progetto richiede un perimetro concordato e un contratto firmato.",
        sections: [
          {
            heading: "Prima dell'onboarding",
            paragraph:
              "L'onboarding segue un contratto firmato, un anticipo del 40% e i dettagli di azienda e progetto necessari per iniziare. Deliverable, strumenti supportati, tempistiche, responsabilità del cliente e copertura continua sono concordati per ogni incarico.",
          },
          {
            heading: "Configurazione e lavoro continuo",
            paragraph:
              "Basic è una tariffa una tantum di 2.500 $ che copre la costruzione completa dell'applicazione e la configurazione del marketing digitale (gestione SEO, email marketing e marketing sui social media). Pro aggiunge 500 $ al mese per manutenzione continua, miglioramento delle prestazioni e generazione di lead. Nessuno dei due piani stabilisce lavoro illimitato, volumi di lead garantiti o risultati aziendali garantiti.",
          },
          {
            heading: "Costi di terze parti",
            paragraph:
              "Hosting, domini, spesa pubblicitaria, commissioni di elaborazione dei pagamenti, abbonamenti alle piattaforme, temi e plugin a pagamento, utilizzo software, licenze e costi di spedizione sono a tuo carico, separati dagli onorari dell'agenzia. I servizi al di fuori delle tre aree di servizio sono quotati separatamente.",
          },
          {
            heading: "Termini ancora da pubblicare",
            paragraph:
              "I restanti termini di pagamento, fiscalità, cancellazione, rimborso, proprietà, licenza e supporto saranno pubblicati una volta approvati. Conferma questi dettagli nel tuo accordo di progetto prima di procedere.",
          },
        ],
      },
      onboardingPrivacy: {
        title: "Le tue informazioni, con uno scopo.",
        shareHeading: "Cosa condividi con noi",
        shareParagraph:
          "I tuoi recapiti, la descrizione della tua azienda, clienti e mercati, gli obiettivi del progetto e i servizi per cui vorresti aiuto. Puoi anche condividere esempi aziendali e link a materiali che ci aiutano a capire il tuo progetto. Se carichi file di progetto tramite il tuo spazio di lavoro, archiviamo il file e i suoi dettagli con il tuo progetto.",
        useHeading: "Come li usiamo",
        useParagraphs: [
          "Usiamo le tue risposte per preparare e revisionare il tuo brief di progetto, fare ricerche sulla tua azienda, pianificare una direzione di design e consegnare il lavoro concordato con te. I tuoi progressi sono salvati così puoi tornare, fare modifiche e verificare le tue risposte prima di inviare il brief al nostro team. I file caricati sono usati per revisionare e consegnare il progetto per cui li hai condivisi.",
          "Inviare un brief non firma un accordo né conferma un pagamento. Il tuo accordo definisce servizi, tariffe e responsabilità per il tuo progetto.",
        ],
        responsibilityHeading: "Chi si occupa delle tue informazioni",
        responsibilityParagraphAfter:
          "Puoi accedere al tuo brief tramite il tuo account. Gli altri account cliente non possono accedervi. Il nostro portale usa fornitori di servizi per supportare l'accesso all'account e l'archiviazione delle informazioni; Starter Shifter è responsabile della gestione delle informazioni del tuo progetto.",
        noticeHeading: "Il tuo avviso di onboarding",
        keepingHeading: "Conservare i tuoi dati e rispondere alle tue domande",
        contactPrefix: "Per domande o richieste sulle tue informazioni, contatta ",
        pausedHeading: "Prima di iniziare",
        pausedParagraphs: [
          "L'onboarding è temporaneamente in pausa. Potrai rivedere queste informazioni alla riapertura.",
          "L'anteprima di sviluppo ti permette di provare il percorso con dati aziendali di esempio. Le risposte e i progressi di esempio sono salvati separatamente e possono essere ripristinati nello stesso browser.",
        ],
        safeHeading: "Condividi il contesto aziendale, in sicurezza",
        safeParagraphAfter:
          "Rimuovi i dettagli privati da qualsiasi esempio che condividi. Se il tuo progetto avrà bisogno in seguito di accessi agli account, il nostro team li organizzerà con te separatamente.",
      },
    },
  },

  auth: {
    heading: "Unisciti a noi.",
    subheading: "Nuovo qui o di ritorno? Continua verso il tuo spazio di lavoro clienti.",
    socialGroupLabel: "Continua con un account social",
    providers: { google: "Google", facebook: "Facebook" },
    connecting: "Connessione…",
    continueWith: "Continua con ",
    socialHelpBoth: "L'accesso con Google e Facebook arriverà presto. Per ora puoi usare l'email.",
    socialHelpOneSuffix: " arriverà presto.",
    or: "oppure",
    continueWithEmail: "Continua con l'email",
    workspaceNote: "Condividi il tuo brief aziendale e segui il tuo progetto in un unico posto.",
    privacyNoteBefore: "Leggi come usiamo il tuo account e i dettagli del progetto nella nostra ",
    privacyNoteLink: "informativa sulla privacy",
    connectError: "Non siamo riusciti a connettere il tuo account. Riprova o continua con l'email.",
    socialSignInError: "L'accesso social non è riuscito. Riprova o continua con l'email.",
    emailViewLabel: "Accesso all'account con email",
    backToOptions: "Torna a tutte le opzioni di accesso",
    emailModeLabel: "Accesso all'account con email",
    signIn: "Accedi",
    createAccount: "Crea un account",
    createAccountEmailLabel: "Crea un account con l'email",
    signInEmailLabel: "Accedi con l'email",
    emailLabel: "Indirizzo email",
    emailPlaceholder: "tu@azienda.com",
    passwordLabel: "Password",
    passwordPlaceholderCreate: "Crea una password sicura",
    passwordPlaceholderSignin: "Inserisci la tua password",
    showPassword: "Mostra password",
    hidePassword: "Nascondi password",
    yourNameLabel: "Il tuo nome",
    yourNamePlaceholder: "Alex Morgan",
    keepMeSignedIn: "Resta connesso",
    passwordHint: "Usa almeno 12 caratteri per la tua password.",
    creatingAccount: "Creazione del tuo account…",
    signingIn: "Accesso…",
    enterNameError: "Inserisci il tuo nome.",
    tooManyAttemptsError: "Troppi tentativi. Attendi un momento e riprova.",
    createAccountError: "Non siamo riusciti a creare il tuo account. Prova ad accedere o usa un'altra email.",
    signInError: "Non siamo riusciti ad accedere. Controlla email e password.",
    connectRetryError: "Non siamo riusciti a connetterti. Riprova tra un momento.",
    shell: {
      storyTag: "La tua azienda, connessa",
      storyHeading: "Inizia il tuo percorso.",
      storyDescription: "Alcuni semplici passaggi per mettere a fuoco la tua azienda.",
      journeyLabel: "Il percorso del tuo spazio di lavoro",
      steps: ["Crea il tuo account", "Raccontaci della tua azienda", "Dai forma al tuo prossimo capitolo"],
      formPanelLabel: "Unisciti a Starter Shifter",
      backToWebsite: "Torna al sito",
      copyrightPrefix: "© ",
      accountPoliciesLabel: "Politiche dell'account",
    },
  },

  dashboard: {
    viewNames: {
      overview: "Panoramica",
      brief: "Brief di progetto",
      journey: "Percorso del progetto",
      resources: "Brand e risorse",
      agreement: "Accordo e fatturazione",
    },
    updates: {
      title: "Aggiornamenti e follow-up",
      description: "I tuoi ultimi progressi salvati e i dettagli da rivedere.",
      empty: "Inizia il tuo brief di progetto per vedere qui i tuoi aggiornamenti.",
      openQuestionsPrefix: "Domande aperte (",
      openQuestionsSuffix: ")",
      revisitDefault: "Rivedi questa risposta con la tua agenzia.",
      noFollowups: "Nessun follow-up segnalato nel tuo brief.",
      viewProjectJourney: "Vedi il percorso del progetto",
      updateBrief: "Aggiorna il mio brief",
      startBrief: "Inizia il mio brief",
    },
    shell: {
      skipToDashboard: "Vai alla dashboard",
      closeNavigation: "Chiudi la navigazione",
      workspaceNavigationLabel: "Navigazione dello spazio di lavoro",
      clientWorkspace: "Spazio di lavoro clienti",
      littleGuidance: "Un po' di orientamento?",
      littleGuidanceDesc: "Ogni passo successivo, spiegato.",
      workspaceGuide: "Guida allo spazio di lavoro",
      developmentPreview: "Anteprima di sviluppo",
      signingOut: "Disconnessione…",
      signOut: "Esci",
      workspace: "Spazio di lavoro",
      searchLabel: "Cerca nel tuo brief di progetto",
      searchPlaceholder: "Cerca nel tuo brief…",
      viewUpdatesLabel: "Vedi gli aggiornamenti dello spazio di lavoro",
      openProfileLabel: "Apri il tuo profilo",
      yourAccount: "Il tuo account",
      dashboardContentLabel: "Contenuto della scheda dashboard",
      footerBrand: "Starter Shifter · La tua azienda, connessa.",
      projectPrivacy: "Privacy del progetto",
      connecting: "Connessione",
      connectedWorkspace: "Spazio di lavoro connesso",
      guideTitle: "La guida al tuo spazio di lavoro",
      guideDescription: "Fai avanzare il tuo progetto, un passo alla volta.",
      guideParagraphs: [
        { strong: "Brief di progetto", text: " conserva ogni risposta che hai salvato. Scegli un argomento per rivederlo o torna all'onboarding per fare modifiche." },
        { strong: "Percorso del progetto", text: " mostra il tuo invio e i prerequisiti verificati. Le fasi di consegna diventano rilevanti dopo l'attivazione e seguono il tuo perimetro concordato." },
        { strong: "Accordo e fatturazione", text: " mostra perimetro, tariffe, accordo e verifica dell'anticipo registrati dall'agenzia." },
        { strong: "", text: "Usa «Discuti con noi» nel tuo brief per segnalare qualsiasi cosa per cui hai bisogno di aiuto. I tuoi segnali appaiono nel centro azioni della dashboard." },
      ],
      exploreMyBrief: "Esplora il mio brief",
      profileTitle: "Il tuo profilo",
      profilePreviewDesc: "Il tuo spazio di lavoro di anteprima salvato",
      profileDesc: "Il tuo spazio di lavoro clienti",
      nameLabel: "Nome",
      notProvided: "Non ancora fornito",
      businessLabel: "Azienda",
      viewContactDetails: "Vedi i recapiti",
      loadingBusinessName: "Lo spazio di lavoro del tuo progetto",
    },
    overview: {
      topicSections: [
        { label: "Azienda", color: "var(--commerce-deep)" },
        { label: "Obiettivi", color: "#439574" },
        { label: "Requisiti", color: "var(--commerce-mint)" },
        { label: "Conferma", color: "#b4ae97" },
      ],
      eyebrow: "Un po' di chiarezza. Tante possibilità.",
      welcomeBack: "Bentornato",
      projectAtAGlance: "Il tuo progetto, a colpo d'occhio. Tutto ciò che ti serve per avanzare.",
      viewProjectBrief: "Vedi il brief di progetto",
      preparingPdf: "Preparazione del PDF…",
      exportPdf: "Esporta il report PDF",
      pdfError: "Il PDF non è stato creato. Riprova l'esportazione.",
      pdfDownloaded: "Il tuo PDF è pronto. Controlla i download del browser.",
      pdfPreparing: "Aggiunta delle tue risposte, dei grafici e degli aggiornamenti del progetto.",
      pdfIdle: "Risposte, requisiti e progressi di consegna.",
      yourProjectBrief: "Il tuo brief di progetto",
      phasesComplete: "Fasi completate",
      submittedForReview: "Inviato per revisione",
      continueWhereLeftOff: "Riprendi da dove avevi lasciato",
      storyStartsHere: "La tua storia inizia qui",
      projectReadiness: "Prontezza del progetto",
      prerequisitesVerified: "Prerequisiti verificati",
      prerequisitesBefore: "Prerequisiti prima dell'attivazione",
      projectDelivery: "Consegna del progetto",
      awaitingProjectUpdate: "In attesa di aggiornamento del progetto",
      latestProgress: "Ultimi progressi dalla tua agenzia",
      deliveryProgressHere: "I progressi di consegna della tua agenzia appaiono qui",
      openQuestions: "Domande aperte",
      workThroughThese: "Affrontiamole",
      noFollowups: "Nessun follow-up segnalato",
      detailsToRevisit: "Dettagli da rivedere insieme",
      clearerPicture: "Un'immagine più chiara del tuo progetto",
      briefBreakdown: "Il completamento del tuo brief, suddiviso per argomento.",
      questionsComplete: "delle domande completate",
      completionByCategory: "Completamento delle domande per categoria",
      insideYourBrief: "Dentro il tuo brief",
      viewAll: "Vedi tutto",
      detailsOrganized: "I tuoi dettagli, organizzati. Apri un argomento per guardare più da vicino.",
      answersRecorded: "risposte registrate",
      readyForInput: "Pronto per il tuo contributo",
      complete: "Completo",
      yourNextStep: "Il tuo prossimo passo",
      reviewProjectBrief: "Rivedi il brief di progetto",
      completeProjectBrief: "Completa il brief di progetto",
      viewNextSteps: "Vedi i prossimi passi",
      beforeWeBegin: "Prima di iniziare",
      viewAllPrereqsLabel: "Vedi tutti i prerequisiti di attivazione",
      verified: "Verificato",
      inProgress: "In corso",
      pending: "In attesa",
      workspaceReadyForYou: "Il tuo spazio di lavoro è pronto per te",
      startBriefToSee: "Inizia il tuo brief per vedere qui i dettagli salvati e i progressi.",
      viewJourney: "Vedi il percorso",
      nextStepFallbacks: {
        oneSmallPhase: "Una piccola fase alla volta.",
        readyNextChapter: "Pronto per il tuo prossimo capitolo.",
        getReady: "Prepariamo il tuo progetto.",
        answerUpToFive:
          "Rispondi a fino a cinque domande, poi torna qui. Puoi mettere in pausa tra ogni fase.",
        briefVerified:
          "Il tuo brief e i prerequisiti sono verificati. La tua agenzia può ora organizzare i prossimi passi concordati.",
        confirmRemaining: "La tua agenzia confermerà i prerequisiti rimanenti.",
      },
    },
    journey: {
      title: "Un passo più vicino, ogni giorno.",
      description:
        "Una visione chiara della preparazione del tuo progetto e del percorso di consegna che ti attende.",
      currentCheckpoint: "Punto di controllo attuale",
      yourProject: "Il tuo progetto",
      targetDate: "Data obiettivo: ",
      deliveryComplete: "consegna completata",
      preparationStagesComplete: "fasi di preparazione completate",
      fallbackStages: [
        { title: "Il tuo brief di progetto", description: "Condividi azienda, obiettivi, contenuti e requisiti. Le tue risposte aiutano a modellare la discussione del progetto." },
        { title: "Accordo e attivazione", description: "La tua agenzia verifica i recapiti, l'accordo firmato, l'anticipo del 40% e le dipendenze del progetto prima dell'attivazione." },
        { title: "Ricerca e direzione", description: "La ricerca su azienda, mercato e concorrenza stabilisce la direzione. Tempistiche e deliverable seguono il tuo perimetro concordato." },
        { title: "Design e feedback", description: "Esplora il lavoro di design concordato, rivedi le bozze e condividi feedback. Il numero di varianti e revisioni segue il tuo accordo." },
        { title: "Costruisci e connetti", description: "Il sito, i contenuti, i flussi di lavoro e le connessioni supportate concordati prendono forma. I requisiti selezionati sono confermati nel perimetro del progetto." },
        { title: "Revisione e consegna", description: "Rivedi i deliverable concordati e preparati alla consegna. I requisiti di lancio e il supporto continuo dipendono dal tuo incarico." },
      ],
      statusUpcoming: "In arrivo",
      statusComplete: "Completo",
      statusInProgress: "In corso",
      statusVerified: "Verificato",
      statusNeedsVerification: "Richiede verifica",
      statusUpNext: "Prossimo",
      stageProgress: "Progresso della fase",
      reviewBrief: "Rivedi il brief",
      continueBrief: "Continua il brief",
      viewAllPending: "Vedi tutti gli elementi in attesa di verifica",
      noDeliveryUpdate:
        "Non è stato registrato alcun aggiornamento di consegna per questa fase. La tua agenzia confermerà il lavoro e le tempistiche applicabili dopo l'attivazione.",
      workspaceActivity: "Attività dello spazio di lavoro",
      activityEmpty:
        "I tuoi progressi salvati e gli aggiornamenti di invio appariranno qui una volta iniziato il brief.",
      activityFootNote:
        "Questi sono i tuoi ultimi record salvati. Le date di consegna e il completamento sono confermati separatamente dalla tua agenzia.",
    },
    resources: {
      title: "I pezzi del tuo brand.",
      description:
        "Vedi la disponibilità dei contenuti e i link di riferimento che hai condiviso nel tuo brief di progetto.",
      updateResources: "Aggiorna le risorse",
      brandContentReadiness: "Disponibilità di brand e contenuti",
      assetStatuses: "Gli stati degli asset che hai registrato durante l'onboarding.",
      gatherStartingPoints: "Raccogliamo i tuoi punti di partenza.",
      gatherStartingPointsDesc:
        "Aggiungi logo, foto, testi e disponibilità dei contenuti al tuo brief. I file finali possono essere condivisi in sicurezza con la tua agenzia.",
      contentContact: "Contatto contenuti",
      yourSharedLinks: "I tuoi link condivisi",
      sharedLinksDesc: "Link di siti, cartelle e riferimenti dalle tue risposte.",
      opensNewTab: "Si apre in una nuova scheda",
      noLinksYet:
        "Nessun link di riferimento condiviso per ora. Puoi aggiungerli aggiornando il tuo brief.",
      secureShare:
        "Condividi file e accessi con il tuo metodo sicuro concordato. Le password degli account non appartengono al tuo brief di progetto.",
      projectFiles: "File del progetto",
      projectFilesDesc:
        "Carica loghi, testi, foto o documenti di riferimento. Ogni file è archiviato con il tuo spazio di lavoro ed è visibile alla tua agenzia.",
      file: "file",
      files: "file",
      previewNote:
        "La condivisione di documenti diventa disponibile in uno spazio di lavoro clienti autenticato.",
      noteForAgency: "Nota per la tua agenzia",
      notePlaceholder: "Contesto opzionale per questo caricamento",
      category: "Categoria",
      chooseFilesLabel: "Scegli i file da caricare",
      uploading: "Caricamento…",
      chooseFiles: "Scegli i file",
      fileTypesHint: "PDF, immagine, Office, testo, CSV, JSON o ZIP · fino a ",
      uploadError: "Il caricamento non è stato salvato. Riprova.",
      removeConfirm: "Rimuovere questo file dal tuo spazio di lavoro?",
      removeError: "Il file non è stato rimosso. Riprova.",
      needsUpdate: "Richiede aggiornamento",
      noFilesYet: "Nessun file caricato per ora.",
    },
    agreement: {
      title: "Perimetro chiaro. Aspettative condivise.",
      description:
        "Il record di incarico confermato dalla tua agenzia, le tariffe e lo stato di verifica.",
      yourEngagement: "Il tuo incarico",
      setupFee: "Tariffa di configurazione",
      asRecorded: "Come registrato nel tuo incarico",
      ongoingFee: "Tariffa continuativa",
      notRecorded: "Non registrato",
      perMonth: "Al mese, secondo il perimetro concordato",
      ongoingFollows: "Il lavoro continuo segue il tuo accordo",
      whatsIncluded: "Cosa è incluso",
      exclusionsThirdParty: "Esclusioni e costi di terze parti",
      seeExclusions: "Vedi il tuo accordo per le esclusioni.",
      verificationBilling: "Verifica e fatturazione",
      signedAgreement: "Accordo firmato",
      fortyPercentAdvance: "Anticipo del 40%",
      billingName: "Nome di fatturazione",
      billingEmail: "Email di fatturazione",
      paymentStatusNote:
        "Lo stato del pagamento riflette la verifica dell'agenzia. Questo spazio di lavoro non incassa pagamenti.",
      agreementComesNext: "Il tuo accordo arriva dopo.",
      agreementComesNextDesc:
        "Una volta che la tua agenzia avrà registrato il tuo incarico, vedrai qui perimetro approvato, tariffe, dettagli di fatturazione e stato di verifica.",
      agreementAwaiting: "Accordo in attesa di conferma",
      advanceAwaiting: "Anticipo del 40% in attesa di verifica",
    },
    brief: {
      title: "Il tuo brief di progetto",
      description:
        "Rivedi i progressi dell'onboarding, controlla le risposte che hai condiviso e completa i dettagli mancanti.",
      progressLabel: "I progressi del tuo brief",
      everyDetailCovered: "Ogni dettaglio è coperto",
      briefTakingShape: "Il tuo brief sta prendendo forma",
      questionsAnswered: "domande risposte",
      phasesComplete: "fasi completate",
      submittedToAgency: "Inviato alla tua agenzia",
      draftNotSubmitted: "Bozza · Non inviata",
      reviewAndSend: "Rivedi e invia",
      updateReopens:
        "Puoi aggiornare qualsiasi risposta. Le modifiche riaprono il tuo brief per revisione e invio.",
      completeSubmit:
        "Le tue risposte sono complete. Rivedi e invia il tuo brief per completare l'onboarding.",
      completionNote:
        "Il completamento conta le domande risposte e non applicabili. I dettagli salvati per dopo restano aperti; puoi comunque discuterli con la tua agenzia.",
      percentComplete: "delle domande completate",
      statusComplete: "Completo",
      percentCompleteSuffix: "completo",
      filterLabel: "Filtra le domande del brief",
      filters: [
        { label: "Tutte le domande" },
        { label: "Da completare" },
        { label: "Follow-up" },
        { label: "Risposte" },
      ],
      searchLabel: "Cerca domande e risposte",
      searchPlaceholder: "Cerca domande o risposte",
      onboardingPhases: "Fasi di onboarding",
      shown: "mostrate",
      chooseAPhase: "Scegli una fase",
      noMatchingPhases: "Nessuna fase corrispondente",
      phase: "FASE",
      of: "DI",
      complete: "Completo",
      answered: "risposte",
      notAnswered: "non risposte",
      needAttention: "richiedono attenzione",
      forLater: "per dopo",
      pickUpWhereLeft: "Riprendi da dove avevi lasciato.",
      readyToRevisit: "Pronto a rivedere i dettagli salvati per dopo?",
      continuePhase: "Continua la fase",
      startPhase: "Inizia la fase",
      showingPrefix: "Mostra ",
      showingOfSuffix: " domande in questa fase",
      question: "Domanda",
      followUpRequested: "Follow-up richiesto",
      notApplicable: "Non applicabile",
      noAnswerYet: "Nessuna risposta fornita per ora.",
      yourSavedAnswer: "La tua risposta salvata",
      checkAnswerDefault: "Controlla questa risposta prima di terminare la fase.",
      editAnswer: "Modifica risposta",
      checkAnswer: "Controlla risposta",
      answerNow: "Rispondi ora",
      updateNote:
        "Apri una domanda per aggiornarla. La tua risposta salvata sarà precompilata, e potrai tornare a questa fase dopo il salvataggio.",
      noMatchingQuestions: "Nessuna domanda corrispondente",
      noUnansweredQuestions: "Nessuna domanda senza risposta",
      noDetailsForLater: "Nessun dettaglio salvato per dopo",
      noQuestionsToShow: "Nessuna domanda da mostrare",
      tryAnotherSearch: "Prova un'altra ricerca o azzera i filtri per vedere il tuo brief.",
      chooseAnotherFilter: "Scegli un altro filtro per rivedere il resto del tuo brief.",
      showAllQuestions: "Mostra tutte le domande",
      noPhasesMatch: "Nessuna fase corrisponde a questo filtro.",
      forLaterSuffix: "per dopo",
      statusLabels: {
        answered: "Risposta",
        pending: "Non risposta",
        later: "Per dopo",
        attention: "Richiede attenzione",
        review: "Revisione",
      },
    },
    phases: {
      savedSuffix: " salvato. Rivedi i progressi qui sotto.",
      yourOnboarding: "IL TUO ONBOARDING",
      completeTitle: "Il tuo brief di progetto è completo.",
      incompleteTitle: "Completiamo il tuo brief di progetto.",
      completeSubmitted:
        "Le tue risposte sono state inviate. Puoi rivedere o aggiornare qualsiasi dettaglio nel tuo brief.",
      completeNotSubmitted:
        "Ogni domanda ha una risposta. Rivedi il tuo brief e invialo alla tua agenzia quando sei pronto.",
      incomplete:
        "Vedi cosa hai condiviso, trova i dettagli ancora necessari e termina una fase alla volta.",
      reviewProjectBrief: "Rivedi il brief di progetto",
      reviewAndSendBrief: "Rivedi e invia il brief",
      continuePhase: "Continua la fase",
      startPhase: "Inizia la fase",
      phasePrefix: "Fase ",
      briefCompletion: "Completamento del brief",
      answeredSuffix: " risposte",
      notAnswered: "non risposte",
      needAttention: "richiedono attenzione",
      forLater: "per dopo",
      phasesComplete: "fasi completate",
      laterStaysVisible: "I dettagli marcati per dopo restano visibili finché non li risolvi.",
      answersSavedAsYouGo: "Le tue risposte sono salvate man mano. Puoi mettere in pausa in qualsiasi momento.",
      viewAllPhases: "Vedi tutte le fasi",
      briefCompletionLabel: "Completamento del brief di progetto",
    },
  },

  onboarding: {
    privacyCopy: {
      purpose:
        "Starter Shifter usa i dettagli che condividi per capire la tua azienda, preparare il tuo progetto e consegnare i servizi che concordi con noi.",
      responsibility:
        "Le informazioni del tuo progetto sono gestite da Starter Shifter. Non vendiamo i tuoi dati né condividiamo il tuo brief con altre aziende per il loro uso.",
      safeSharing:
        "Bastano informazioni ed esempi aziendali. Lascia fuori password, dati di pagamento e informazioni private sui tuoi clienti o sul tuo team.",
    },
    welcome: {
      storyLabel: "Il tuo prossimo capitolo inizia qui",
      storyTitleLines: ["Grandi idee.", "Piccoli passi."],
      storyFooterLines: ["Tu porti la storia.", "Ti aiutiamo a unire i punti."],
      greeting: "Benvenuto in Starter Shifter.",
      greetingNamePrefix: "Benvenuto, ",
      heading: "Conosciamo la tua azienda.",
      descriptionPrefix:
        "Raccontaci della tua azienda, una domanda alla volta. Il tuo percorso attuale ha ",
      descriptionSuffix:
        " fasi brevi, con fino a cinque domande ciascuna. I follow-up pertinenti possono apparire man mano che scegli il lavoro che ti serve.",
      promises: [
        "Le stime sono benvenute. Chiedi aiuto quando ne hai bisogno.",
        "Passa senza intoppi da una fase all'altra",
        "Salva, fai una pausa, torna quando vuoi",
      ],
      consentBefore: "Ho letto la ",
      consentLink: "informativa sulla privacy",
      consentAfter:
        " e accetto che Starter Shifter usi i miei dati per preparare e consegnare il mio progetto.",
      saving: "Salvataggio…",
      begin: "Iniziamo",
      paused:
        "L'onboarding è temporaneamente in pausa. Torna quando riapre.",
      tryPreview: "Prova l'anteprima",
      previewOnly: "Solo anteprima. Usa dati di esempio.",
      serviceTerms: "Termini di servizio",
    },
    journeyArtwork: {
      scenes: [
        { title: "La tua azienda", subtitle: "Fatta di buone idee e persone vere", tag: "Piacere di conoscerti" },
        { title: "La tua direzione", subtitle: "Un po' di chiarezza. Tante possibilità.", tag: "Pensa in grande" },
        { title: "La tua firma", subtitle: "I dettagli che la rendono tua", tag: "Lascia il tuo segno" },
        { title: "Il tuo kit di strumenti", subtitle: "Collegare i pezzi del tuo progetto", tag: "Pezzo per pezzo" },
        { title: "Il tuo prossimo capitolo", subtitle: "Un brief su cui costruire, insieme", tag: "Tutto si unisce" },
      ],
      tagline: "Un po' più di te",
    },
    wizard: {
      sessionEnded: "La tua sessione è terminata.",
      signInAgain: "Accedi di nuovo",
      reloadOnboarding: "Ricarica l'onboarding",
      previewBanner:
        "Modalità anteprima. Usa dati aziendali di esempio. I tuoi progressi sono salvati per la prossima visita.",
      customizedBanner:
        "La tua agenzia ha preparato questo questionario per il tuo progetto. Rivedi eventuali dettagli appena richiesti.",
      oneQuestionAtATime: "Una domanda alla volta",
      saveAndReturn: "Salva e torna al brief",
      saveAndExit: "Salva ed esci",
      phaseReview: "Revisione della fase",
      questionOf: "Domanda ",
      of: " di ",
      reviewYourAnswers: "Rivedi le tue risposte",
      answerBeforeFinish: "Puoi rispondere a questo prima di terminare.",
      phaseSavedSuffix: " salvato. Continuiamo.",
      beforeNextPhase: "Prima della fase successiva",
      fewDetailsForLater: "Alcuni dettagli per dopo",
      phaseReady: "Questa fase è pronta",
      answeredPrefix: "Hai risposto a ",
      answeredSuffix: " di ",
      answeredOfQuestions: " domande di questa fase. ",
      fillNowOrFlag:
        "Puoi completare questi dettagli ora, o lasciarli segnalati per la revisione finale.",
      changesSavedContinue:
        "Le modifiche sono salvate. Continua quando vuoi.",
      answerNow: "Rispondi ora",
      back: "Indietro",
      continueWithForLaterPrefix: "Continua con ",
      continueWithForLaterSuffix: " per dopo",
      continueToNextPhase: "Continua alla fase successiva",
      reviewTitle: "Ecco il tuo brief di progetto. Come ti sembra?",
      remainingPrereqs: "Prerequisiti rimanenti del progetto",
      prereqsNote:
        "Sono verificati rispetto ai record dell'agenzia. Nessun invito viene inviato da questo modulo.",
      reviewHelp:
        "Controlla le tue risposte qui sotto. Puoi modificare qualsiasi argomento prima delle conferme finali.",
      previewPrivacyHelp:
        "Rivedi come vengono usate le tue risposte di esempio in questa anteprima prima di confermare.",
      addProjectTopic: "Altro? Aggiungi un argomento di progetto",
      topicsAutoHelp:
        "Le tue risposte selezionano automaticamente gli argomenti pertinenti. Aggiungi un flusso di lavoro qui se l'abbiamo perso.",
      searchTopicsLabel: "Cerca argomenti di progetto",
      searchTopicsPlaceholder: "Cerca argomenti…",
      selectedByAnswers: "selezionato dalle tue risposte",
      previouslyAnswered: "Argomenti già risposti",
      previouslyAnsweredHelp:
        "Queste risposte restano salvate fuori dal tuo percorso attuale. Ripristina un argomento o rimuovi le sue risposte.",
      restoreTopic: "Ripristina argomento",
      removeSavedAnswers: "Rimuovi le risposte salvate",
      routeNotePrefix: " argomenti specifici del progetto selezionati. I tuoi progressi si adattano alle tue scelte.",
      backToMyReview: "Torna alla mia revisione",
      retrySaving: "Riprova il salvataggio",
      saveAndReturnToBrief: "Salva e torna al brief",
      backToPhaseReview: "Torna alla revisione della fase",
      saveAndOpenDashboard: "Salva e apri la dashboard",
      submitOnboarding: "Invia i dettagli di onboarding",
      looksGood: "Va bene",
      skipForNow: "Salta per ora",
      continue: "Continua",
      pauseAnytime: "Metti in pausa in qualsiasi momento con Salva ed esci.",
      phaseOf: "Fase ",
      phaseOfSuffix: " di ",
      encouragement: {
        checkTogether: "Controlliamo insieme questa risposta. Il dettaglio qui sotto aiuterà.",
        briefComingTogether:
          "Il tuo brief sta prendendo forma. Dai un'occhiata prima delle conferme finali.",
        flagForGuidance: "Lo segnaleremo per orientamento. Puoi continuare.",
        keepOpen: "Va bene. Lo terremo come domanda aperta.",
        gotIt: "Perfetto! Continua quando vuoi.",
        startWithYou: "Iniziamo da te. Basta una risposta breve.",
        multiSelect: "Puoi sceglierne più di una. Scegli ciò che si adatta al tuo progetto.",
        select: "Scegli l'opzione che ti sembra giusta.",
        optional: "Questa è opzionale. Puoi tornarci più tardi.",
        oneSmallStep: "Un piccolo passo alla volta. Basta un po' di contesto.",
      },
      saveStates: {
        allSaved: "Tutte le modifiche salvate",
        readyToSave: "Pronto per il salvataggio",
        saving: "Salvataggio…",
        unsaved: "Modifiche non salvate",
        notSaved: "Modifiche non salvate — riprova qui sotto",
      },
      errors: {
        saveFailed:
          "Non siamo riusciti a salvare le ultime modifiche. Tieni aperta questa pagina e riprova.",
        draftMissing: "La tua sessione bozza non è disponibile. Ricarica questa pagina per riconnetterti.",
        unableToSave: "Impossibile salvare.",
        unableToSaveAnswer: "Impossibile salvare questa risposta.",
        unableToSavePhase: "Impossibile salvare questa fase.",
        unableToSubmit: "Impossibile inviare.",
        unableToSaveAgreement: "Impossibile salvare il tuo accordo. Riprova.",
        attentionBeforeSubmit:
          "Alcune risposte richiedono ancora la tua attenzione prima dell'invio.",
        loadQuestionnaire:
          "Non siamo riusciti a caricare il questionario assegnato. Ricarica per riprovare, o contatta l'agenzia se il problema persiste.",
      },
      engagementSummary: {
        noneHeading: "Nessun incarico approvato registrato per ora",
        noneBody:
          "Il tuo accordo di progetto, il perimetro, le tariffe e il record di fatturazione appariranno qui una volta che l'agenzia li avrà registrati. Puoi comunque inviare un brief per revisione.",
        noneMeta: "Accordo: in attesa di conferma · Anticipo del 40%: in attesa di verifica",
        approvedSuffix: " · Record di progetto approvato",
        setupPrefix: "Configurazione: ",
        recurringPrefix: " · Ricorrente: ",
        perMonthSuffix: " / mese",
        scopePrefix: "Perimetro: ",
        exclusionsPrefix: "Esclusioni: ",
        seeAgreement: "Vedi il tuo accordo",
        thirdPartyPrefix: "Costi di terze parti: ",
        agreementPrefix: "Accordo: ",
        verified: "Verificato",
        awaitingConfirmation: "In attesa di conferma",
        advancePrefix: " · Anticipo del 40%: ",
        awaitingVerification: "In attesa di verifica",
      },
      reviewSummary: {
        groups: [
          { title: "Azienda e contatti" },
          { title: "Obiettivi e processo attuale" },
          { title: "Lavoro selezionato e requisiti" },
          { title: "Responsabilità e incarico" },
          { title: "Note finali e feedback sull'onboarding" },
        ],
        additionalTitle: "Dettagli aggiuntivi del progetto",
        topicsToReview: " argomenti da rivedere",
        edit: "Modifica",
        editBrief: "Modifica il brief",
        openQuestions: "Domande aperte e follow-up",
        noFollowups:
          "Nessun segnale di follow-up registrato. I dettagli opzionali senza risposta possono essere forniti in seguito.",
      },
    },
    progress: {
      railLabel: "Progressi dell'onboarding",
      yourProjectBrief: "Il tuo brief di progetto",
      phasePrefix: "Fase ",
      phaseOfSuffix: " di ",
      answeredPercentSuffix: " risposte",
      answeredLabel: "Domande risposte",
      answeredValueText: "risposte, ",
      forLaterValueText: " per dopo, ",
      pendingValueText: " in attesa su ",
      questionsValueText: " domande",
      answered: "risposte",
      forLater: "per dopo",
      pending: "in attesa",
      yourPhases: "Le tue fasi",
      phaseNavLabel: "Fasi e domande",
      questionsInPhase: "Domande in questa fase",
      selectToRevisit: "Seleziona una domanda per tornarci.",
      review: "Revisione",
      reviewYourAnswers: "Rivedi le tue risposte",
      currentQuestionSuffix: ", domanda attuale",
      legendAnswered: "Risposta",
      legendForLater: "Per dopo",
      legendPending: "In attesa",
      railNote: "Le tue fasi si adattano al tuo progetto. Puoi tornare a qualsiasi domanda.",
      currentPhaseLabel: "Fase attuale",
    },
    privacyNotice: {
      ariaLabel: "Come usiamo le tue informazioni",
      heading: "Le tue informazioni hanno uno scopo.",
      howWeCare: "Come ci prendiamo cura dei tuoi dati",
      previewNote:
        "Questa è un'anteprima. Le tue risposte di esempio sono salvate così puoi provare il percorso e tornarci in questo browser. Usa dati aziendali di esempio.",
      retentionPrefix: "Per quanto tempo conserviamo i tuoi dati: ",
      contactPrefix: "Domande sulle tue informazioni? ",
      paused:
        "L'onboarding è temporaneamente in pausa. Rivedi le attuali informazioni sulla privacy alla riapertura.",
      navLabel: "Informazioni di onboarding",
      privacyInformation: "Informativa sulla privacy",
      serviceTerms: "Termini di servizio",
    },
    portal: {
      myWorkspace: "Il mio spazio di lavoro",
      signingOut: "Disconnessione…",
      signOut: "Esci",
      yourProjectWorkspace: "Lo spazio di lavoro del tuo progetto",
      clientPortal: "Portale clienti Starter Shifter",
      signOutError: "Impossibile disconnettersi. Riprova.",
      saveProgressError: "Impossibile salvare i tuoi progressi. Riprova.",
      unableToSaveProgress: "Impossibile salvare i tuoi progressi.",
    },
    questionField: {
      answerNow: "Rispondi ora",
      notSureYet: "Non ancora sicuro",
      notApplicable: "Non applicabile",
      provideLater: "Fornisci più tardi",
      requestHelp: "Richiedi aiuto",
      preferNotToAnswer: "Preferisco non rispondere",
      required: "Obbligatorio",
      optional: "Opzionale",
      setEachStatus: "Imposta lo stato di ogni elemento",
      chooseOne: "Scegline uno",
      chooseUpToPrefix: "Scegli fino a ",
      chooseAll: "Scegli tutto ciò che si applica",
      chooseUpToSuffix: ".",
      pickWhatFits: "Scegli ciò che si adatta meglio. Puoi aggiungere contesto qui sotto.",
      shortAnswer: "Basta una risposta breve. Puoi aggiungere più dettagli in seguito.",
      everydayWords: "Parole semplici vanno benissimo. Bastano poche frasi.",
      shareWhatYouKnow: "Condividi ciò che sai. Puoi chiedere orientamento qui sotto.",
      skipIfPrefer: "Salta questo se preferisci fornirlo più tardi.",
      whyWeAsk: "Perché chiediamo",
      savedChoicePrefix: "La tua scelta salvata: ",
      savedChoiceSuffix:
        ". Queste opzioni sono state rimosse dal modulo aggiornato. La tua risposta è conservata; rivedi le opzioni disponibili prima di confermare.",
      confirmAccuracy: "Confermo questi dettagli e la mia autorità a condividerli.",
      confirmPrivacy: "Ho letto le informazioni sulla privacy dell'onboarding.",
      yesIConfirm: "Sì, confermo",
      requiredSuffix: " (obbligatorio)",
      optionalSuffix: " (opzionale)",
      chooseStatus: "Scegli lo stato",
      nothingYet: "Niente per ora",
      notSure: "Non sicuro",
      ready: "Pronto",
      needsUpdating: "Richiede aggiornamento",
      needHelp: "Serve aiuto",
      searchOptionsPrefix: "Cerca opzioni per ",
      searchOptionsPlaceholder: "Cerca opzioni…",
      noMatchingChoices: "Nessuna scelta corrispondente. Prova un'altra parola o azzera la ricerca.",
      somethingElse: "Altro",
      addOwnOption: "Aggiungi la tua opzione o spiega",
      countryOrRegion: "Paese o regione",
      searchCountry: "Cerca o inserisci un paese / una regione",
      timezone: "Fuso orario",
      searchTimezone: "Cerca un fuso orario, es. Europe/Rome",
      forFirstLaunch: "Per il primo lancio",
      canWaitUntilLater: "Può aspettare più tardi",
      chooseOptionOrDescribe: "Scegli un'opzione o descrivi qui sotto",
      startWithUpToThree: "Inizia con fino a tre priorità",
      ideasForFuture: "Idee per una fase futura",
      chooseApprox: "Scegli un valore approssimativo",
      enterExact: "Inserisci invece un valore esatto",
      fewSentences: "Bastano poche frasi",
      oneExampleOrLink: "Un esempio o un link a un documento",
      remove: "Rimuovi",
      addAnother: "+ Aggiungi un altro",
      quickAnswersLabel: "Risposte rapide",
      yourFirstPriority: "La tua prima priorità",
      chooseMainPriority: "Scegli la tua priorità principale",
      notSureSeeOther: "Non sei sicuro? Vedi altri modi di rispondere",
      changeAnswerSuffix: " · Cambia risposta",
      addContactNote: "Aggiungi un contatto, un responsabile o una nota di follow-up",
      addNoteLink: "Aggiungi una breve nota o un link (opzionale)",
      notePlaceholder:
        "Un link a un documento, una precisazione, il nome di un collega o una disponibilità",
      workspaceMemberPrefix: "Membro dello spazio di lavoro ",
      chooseAccess: "Scegli l'accesso richiesto",
      viewProject: "Vedi il progetto",
      reviewAndComment: "Rivedi e commenta",
      supplyInputs: "Fornisci gli elementi del progetto",
      needGuidance: "Serve orientamento",
      removeMember: "Rimuovi membro",
      addAnotherPerson: "+ Aggiungi un'altra persona",
      quickChoicesPrefix: "Scelte rapide per ",
      countries: [
        "Australia", "Bangladesh", "Brasile", "Canada", "Cina", "Francia", "Germania",
        "India", "Indonesia", "Irlanda", "Italia", "Giappone", "Kenya", "Malesia", "Messico",
        "Nepal", "Paesi Bassi", "Nuova Zelanda", "Nigeria", "Pakistan", "Filippine",
        "Arabia Saudita", "Singapore", "Sudafrica", "Spagna", "Sri Lanka",
        "Emirati Arabi Uniti", "Regno Unito", "Stati Uniti",
      ],
    },
    previewPending: [
      "Verifica l'email di contatto del progetto o dello spazio di lavoro quando crei il tuo account cliente.",
      "Concorda il perimetro del progetto e completa l'accordo firmato.",
      "Fai verificare dall'agenzia l'anticipo del 40% rispetto alla fattura concordata.",
    ],
  },

  projectBrief: {
    serviceOptions: [
      "E-commerce e siti web",
      "Ricerca e design",
      "Marketing e campagne",
      "Automazione e integrazioni",
      "Manutenzione e prestazioni",
    ],
    headerLine: "Starter Shifter — Brief di progetto",
    nameLabel: "Il tuo nome",
    emailLabel: "Email",
    companyLabel: "Azienda (opzionale)",
    timingLabel: "Tempistiche (opzionale)",
    timingPlaceholder: "Per esempio, prima di una data di lancio",
    servicesLegend: "Con cosa potremmo aiutarti?",
    servicesDescription: "Seleziona ciò che si adatta, o lascia aperto.",
    goalsLabel: "Cosa vorresti rendere possibile?",
    goalsPlaceholder:
      "Raccontaci della tua azienda, di cosa hai bisogno e del risultato che hai in mente.",
    currentSetupLabel: "Cosa è già in atto? (opzionale)",
    currentSetupDescription:
      "Un sito, un negozio, pagine social o strumenti aziendali esistenti.",
    currentSetupPlaceholder:
      "Condividi i sistemi, le piattaforme o gli account che già usi.",
    openEmailDraft: "Apri la bozza email",
    downloadBrief: "Scarica il brief di progetto",
    emailDraftReady:
      "La tua bozza email è pronta da aprire. Rivedila nella tua app di posta e inviala quando sei pronto.",
    downloadReady:
      "Il tuo brief di progetto è pronto nei download. Non è stato inviato nulla a Starter Shifter.",
    briefFields: {
      name: "Nome: ",
      email: "Email: ",
      company: "Azienda: ",
      services: "Servizi: ",
      timing: "Tempistiche: ",
      notSpecified: "Non specificato",
      exploreOptions: "Esploriamo le opzioni",
      projectGoals: "Obiettivi del progetto:",
      alreadyInPlace: "Cosa è già in atto:",
      disclaimer:
        "Questo brief è un punto di partenza per la discussione, non un perimetro concordato né un preventivo.",
    },
    emailSubjectPrefix: "Richiesta di progetto — ",
    downloadFileName: "starter-shifter-brief-di-progetto.txt",
  },

  projects: [
    {
      title: "Concept di negozio",
      category: "E-commerce",
      description: "Un layout di negozio illustrativo con una collezione di prodotti e un percorso chiaro verso lo shopping.",
      imageAlt: "Negozio concept con una hero verde e borse di uso quotidiano illustrate",
      status: "Anteprima del concetto",
    },
    {
      title: "Concept di spazio operativo",
      category: "Applicazione web",
      description: "Uno spazio di lavoro illustrativo che riunisce ordini, inventario e attività di spedizione in un'unica vista.",
      imageAlt: "Dashboard operativa concept con una tabella ordini e pannelli di flusso di lavoro",
      status: "Anteprima del concetto",
    },
    {
      title: "Concept di sito web creativo",
      category: "Design di siti web",
      description: "Un sito editoriale illustrativo con una tipografia decisa e una collezione di lavori mirata.",
      imageAlt: "Sito web creativo concept con tipografia grande e opere scultoree astratte",
      status: "Anteprima del concetto",
    },
    {
      title: "Concept di assistenza clienti",
      category: "Flusso di lavoro IA",
      description: "Un'interfaccia di supporto illustrativa per conversazioni, domande comuni e passaggi al team.",
      imageAlt: "Spazio di supporto concept con un elenco di conversazioni e una chat clienti",
      status: "Anteprima del concetto",
    },
  ],

  shared: {
    deliveryStageStatusLabels: {
      upcoming: "In arrivo",
      "in-progress": "In corso",
      complete: "Completo",
      blocked: "Richiede attenzione",
    },
    defaultDeliveryStages: [
      { title: "Il tuo brief di progetto", description: "Condividi azienda, obiettivi, contenuti e requisiti. Le tue risposte aiutano a modellare la discussione del progetto." },
      { title: "Accordo e attivazione", description: "La tua agenzia verifica i recapiti, l'accordo firmato, l'anticipo del 40% e le dipendenze del progetto prima dell'attivazione." },
      { title: "Ricerca e direzione", description: "La ricerca su azienda, mercato e concorrenza stabilisce la direzione. Tempistiche e deliverable seguono il tuo perimetro concordato." },
      { title: "Design e feedback", description: "Esplora il lavoro di design concordato, rivedi le bozze e condividi feedback. Il numero di varianti e revisioni segue il tuo accordo." },
      { title: "Costruisci e connetti", description: "Il sito, i contenuti, i flussi di lavoro e le connessioni supportate concordati prendono forma. I requisiti selezionati sono confermati nel perimetro del progetto." },
      { title: "Revisione e consegna", description: "Rivedi i deliverable concordati e preparati alla consegna. I requisiti di lancio e il supporto continuo dipendono dal tuo incarico." },
    ],
    workspaceViewNames: {
      overview: "Panoramica",
      brief: "Brief di progetto",
      journey: "Percorso del progetto",
      resources: "Brand e risorse",
      agreement: "Accordo e fatturazione",
    },
    questionStatusLabels: {
      answered: "Risposta",
      later: "Per dopo",
      pending: "Non risposta",
      attention: "Richiede attenzione",
      review: "Revisione",
    },
    answerStateLabels: {
      answered: "Rispondi ora",
      unknown: "Non ancora sicuro",
      "not-applicable": "Non applicabile",
      deferred: "Fornisci più tardi",
      help: "Discuti con noi",
    },
    prerequisites: {
      briefLabel: "Brief di progetto",
      briefSubmitted: "Il tuo brief è stato inviato.",
      briefDetail: "Completa e invia i dettagli del tuo progetto.",
      identityLabel: "Verifica del contatto",
      identityDetail: "Le email di contatto del progetto e dello spazio di lavoro.",
      agreementLabel: "Accordo firmato",
      agreementDetail: "Conferma il perimetro con la tua agenzia.",
      advanceLabel: "Anticipo del 40%",
      advanceDetail: "Verifica dell'agenzia rispetto alla fattura concordata.",
      responsiblePrefix: "Responsabile: ",
    },
    activity: {
      briefSaved: "Brief di progetto salvato",
      briefSubmitted: "Brief inviato",
      briefSubmittedDetail: "I dettagli del tuo progetto sono pronti per la revisione",
      engagementUpdated: "Record di incarico aggiornato",
      engagementUpdatedDetail: "Perimetro e prerequisiti registrati",
    },
    assetStatusLabels: {
      ready: "Pronto",
      "needs-updating": "Richiede aggiornamento",
      "needs-help": "Serve aiuto",
      "not-available": "Non disponibile",
      recorded: "Registrato nel brief",
    },
    workspaceFallback: {
      businessName: "Il tuo prossimo capitolo",
      description:
        "Uno spazio dedicato alla tua azienda, al tuo brief e a tutto ciò che viene dopo.",
    },
    notAnswered: "Non risposta",
    confirmed: "Confermato",
    notConfirmed: "Non confermato",
    firstPriorityPrefix: "Prima priorità: ",
  },
};
