export type Locale = "fr" | "en";

export const translations = {
  fr: {
    // Navbar
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      contact: "Contact",
      cta: "Demander un devis",
      tagline: "Voyagez l'esprit tranquille",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
    },

    // Hero
    hero: {
      badge: "Votre agence de voyage de confiance à Yaoundé",
      title: "Voyagez l'esprit tranquille",
      description:
        "EGEL TRAVEL SARL accompagne vos projets de voyage avec transparence et sérénité. Billetterie aérienne, assurance voyage, location de véhicules et accompagnement en immigration.",
      cta: "Demander un devis",
      stats: [
        { value: "100+", label: "Clients satisfaits" },
        { value: "10+", label: "Destinations" },
        { value: "2+", label: "Années d'expérience" },
        { value: "24/7", label: "Support client" },
      ],
    },

    // About
    about: {
      tag: "Qui sommes-nous ?",
      title: "Votre partenaire de voyage de confiance à Yaoundé",
      description1:
        "EGEL TRAVEL SARL est une agence de voyage basée à Yaoundé. Notre mission est de vous offrir un service professionnel et sécurisé pour tous vos projets de déplacement. Nous accompagnons particuliers, familles, étudiants et entreprises avec la même rigueur et le même dévouement.",
      description2:
        "Forts de notre expertise en billetterie aérienne, assurance voyage, location de véhicules et immigration, nous sommes votre guichet unique pour voyager l'esprit tranquille.",
      experience: "Années d'expérience",
      imageAlt: "Équipe EGEL TRAVEL",
      values: [
        {
          title: "Engagement",
          description:
            "Nous nous engageons à fournir un service d'excellence à chacun de nos clients.",
        },
        {
          title: "Qualité",
          description:
            "Chaque détail compte. Nous sélectionnons les meilleures options pour vos voyages.",
        },
        {
          title: "Éthique",
          description:
            "Transparence totale dans nos tarifs et nos démarches. Aucun frais caché.",
        },
      ],
    },

    // Services
    services: {
      tag: "Nos services",
      title: "Des solutions complètes pour tous vos voyages",
      description:
        "Découvrez notre gamme de services conçus pour rendre chaque aspect de votre voyage simple, sûr et agréable.",
      cta: "Demander un devis",
      items: [
        {
          title: "Billetterie aérienne",
          description:
            "Vente de billets pour toutes destinations avec accompagnement personnalisé. Nous comparons les meilleures offres pour vous garantir les tarifs les plus compétitifs.",
          features: [
            "Toutes compagnies aériennes",
            "Meilleurs tarifs garantis",
            "Accompagnement personnalisé",
          ],
        },
        {
          title: "Assurance voyage",
          description:
            "Couverture santé, annulation, bagages et assistance. Voyagez en toute sérénité avec nos solutions d'assurance complètes et adaptées.",
          features: [
            "Couverture santé internationale",
            "Assurance annulation",
            "Assistance 24h/24",
          ],
        },
        {
          title: "Location de véhicules",
          description:
            "Avec ou sans chauffeur pour déplacements professionnels ou personnels. Large gamme de véhicules adaptés à tous vos besoins.",
          features: [
            "Avec ou sans chauffeur",
            "Large gamme de véhicules",
            "Tarifs compétitifs",
          ],
        },
        {
          title: "Immigration & Assistance",
          description:
            "Accompagnement légal pour visas et démarches administratives, 100% conforme à la loi. Notre équipe d'experts simplifie vos procédures.",
          features: [
            "Demande de visa",
            "Démarches administratives",
            "100% conforme à la loi",
          ],
        },
        {
          title: "Service tourisme & Voyages",
          description:
            "Nous concevons des expériences de voyage sur mesure adaptées aux particuliers, entreprises et clients VIP.",
          features: [
            "Réservation de billets d'avion (national & international)",
            "Organisation des séjours personnalisés",
            "Voyages de groupe",
            "Assistance visa et formalités administratives",
            "Séjours VIP et premium",
          ],
        },
        {
          title: "Service Immobilier",
          description:
            "Nous accompagnons nos clients dans la recherche, l'acquisition, la location et la valorisation de biens immobiliers.",
          features: [
            "Vente et achat de biens immobiliers",
            "Location courte et longue durée",
            "Gestion locative",
            "Mise en relation avec investisseurs",
            "Conseil en investissement immobilier",
            "Recherche de biens sur mesure",
          ],
        },
        {
          title: "Service Événementiel",
          description:
            "Nous créons des événements élégants, impactants et parfaitement orchestrés.",
          features: [
            "Événements d'entreprise",
            "Lancements de produits",
            "Séminaires et conférences",
            "Soirées privées",
            "Mariages et célébrations",
            "Événements premium & VIP",
          ],
        },
      ],
    },

    // Contact
    contact: {
      tag: "Contact",
      title: "Restons en contact",
      description:
        "Notre équipe est à votre écoute pour répondre à vos questions et vous accompagner dans vos projets de voyage. N'hésitez pas à nous contacter.",
      whatsapp: "Contactez-nous sur WhatsApp",
      mapTitle: "Localisation EGEL TRAVEL à Yaoundé",
      info: {
        address: { title: "Adresse", details: ["Yaoundé, Cameroun"] },
        phone: { title: "Téléphone", details: ["+237 6XX XXX XXX"] },
        email: { title: "Email", details: ["contact@egel.cm"] },
        hours: {
          title: "Horaires",
          details: ["Lun - Ven : 8h - 18h", "Sam : 9h - 14h"],
        },
      },
    },

    // Footer
    footer: {
      tagline: "Voyagez l'esprit tranquille",
      description:
        "EGEL TRAVEL SARL accompagne vos projets de voyage avec transparence et sérénité. Votre agence de voyage de confiance à Yaoundé, Cameroun.",
      navigation: "Navigation",
      servicesTitle: "Services",
      copyright: "Tous droits réservés. Voyagez l'esprit tranquille.",
      serviceLinks: [
        "Billetterie aérienne",
        "Assurance voyage",
        "Location de véhicules",
        "Immigration",
      ],
    },

    // WhatsApp
    whatsapp: {
      ariaLabel: "Contactez-nous sur WhatsApp",
    },

    // Devis
    devis: {
      backLink: "< Retour à l'accueil",
      tag: "Demande de devis",
      title: "Obtenez votre devis personnalisé",
      description:
        "Remplissez le formulaire ci-dessous et notre équipe vous contactera rapidement à",
      descriptionEnd: "pour vous proposer la solution la plus adaptée à vos besoins.",
      steps: [
        {
          step: "01",
          title: "Remplissez le formulaire",
          desc: "Indiquez vos besoins et la destination souhaitée",
        },
        {
          step: "02",
          title: "Recevez votre devis",
          desc: "Notre équipe vous envoie une proposition adaptée",
        },
        {
          step: "03",
          title: "Confirmez et voyagez",
          desc: "Validez votre réservation et préparez votre voyage",
        },
      ],
      serviceOptions: [
        { value: "billetterie", label: "Billetterie aérienne" },
        { value: "assurance", label: "Assurance voyage" },
        { value: "location", label: "Location de véhicules" },
        { value: "immigration", label: "Immigration & Assistance" },
        { value: "tourisme", label: "Tourisme & Voyages" },
        { value: "immobilier", label: "Immobilier" },
        { value: "evenementiel", label: "Événementiel" },
      ],
      form: {
        nom: "Nom",
        prenom: "Prénom",
        telephone: "Téléphone",
        email: "Email",
        service: "Service souhaité",
        servicePlaceholder: "Choisissez un service",
        destination: "Destination",
        destinationPlaceholder: "Ex : Paris, Dubaï, New York...",
        dateDepart: "Date de départ",
        dateRetour: "Date de retour",
        passengers: "Nombre de passagers",
        message: "Message",
        messagePlaceholderTravel: "Décrivez votre projet de voyage...",
        messagePlaceholderOther: "Décrivez votre demande en détail...",
        submit: "Envoyer ma demande",
        submitting: "Envoi en cours...",
        requestSentTo: "Votre demande sera envoyée à",
        nomPlaceholder: "Votre nom",
        prenomPlaceholder: "Votre prénom",
      },
      success: {
        title: "Demande envoyée avec succès !",
        description:
          "Merci pour votre demande. Notre équipe vous contactera rapidement à",
        descriptionEnd: "pour vous proposer la meilleure solution.",
        newRequest: "Nouvelle demande",
        backHome: "Retour à l'accueil",
      },
    },
  },

  en: {
    // Navbar
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
      cta: "Get a Quote",
      tagline: "Travel with peace of mind",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },

    // Hero
    hero: {
      badge: "Your trusted travel agency in Yaounde",
      title: "Travel with peace of mind",
      description:
        "EGEL TRAVEL SARL supports your travel projects with transparency and serenity. Air ticketing, travel insurance, vehicle rental, and immigration assistance.",
      cta: "Get a Quote",
      stats: [
        { value: "100+", label: "Satisfied clients" },
        { value: "10+", label: "Destinations" },
        { value: "2+", label: "Years of experience" },
        { value: "24/7", label: "Customer support" },
      ],
    },

    // About
    about: {
      tag: "Who are we?",
      title: "Your trusted travel partner in Yaounde",
      description1:
        "EGEL TRAVEL SARL is a travel agency based in Yaounde. Our mission is to offer you a professional and secure service for all your travel projects. We support individuals, families, students, and businesses with the same rigor and dedication.",
      description2:
        "With our expertise in air ticketing, travel insurance, vehicle rental, and immigration, we are your one-stop shop for traveling with peace of mind.",
      experience: "Years of experience",
      imageAlt: "EGEL TRAVEL Team",
      values: [
        {
          title: "Commitment",
          description:
            "We are committed to providing excellent service to each of our clients.",
        },
        {
          title: "Quality",
          description:
            "Every detail matters. We select the best options for your trips.",
        },
        {
          title: "Ethics",
          description:
            "Total transparency in our rates and procedures. No hidden fees.",
        },
      ],
    },

    // Services
    services: {
      tag: "Our Services",
      title: "Complete solutions for all your travels",
      description:
        "Discover our range of services designed to make every aspect of your trip simple, safe, and enjoyable.",
      cta: "Get a Quote",
      items: [
        {
          title: "Air Ticketing",
          description:
            "Ticket sales for all destinations with personalized support. We compare the best offers to guarantee you the most competitive rates.",
          features: [
            "All airlines",
            "Best rates guaranteed",
            "Personalized support",
          ],
        },
        {
          title: "Travel Insurance",
          description:
            "Health coverage, cancellation, luggage, and assistance. Travel with complete peace of mind with our comprehensive and tailored insurance solutions.",
          features: [
            "International health coverage",
            "Cancellation insurance",
            "24/7 assistance",
          ],
        },
        {
          title: "Vehicle Rental",
          description:
            "With or without a driver for professional or personal travel. Wide range of vehicles adapted to all your needs.",
          features: [
            "With or without a driver",
            "Wide range of vehicles",
            "Competitive rates",
          ],
        },
        {
          title: "Immigration & Assistance",
          description:
            "Legal support for visas and administrative procedures, 100% compliant with the law. Our team of experts simplifies your procedures.",
          features: [
            "Visa application",
            "Administrative procedures",
            "100% law compliant",
          ],
        },
        {
          title: "Tourism & Travel",
          description:
            "We design custom travel experiences for individuals, businesses, and VIP clients.",
          features: [
            "Flight booking (national & international)",
            "Personalized stay organization",
            "Group travel",
            "Visa assistance and administrative formalities",
            "VIP and premium stays",
          ],
        },
        {
          title: "Real Estate",
          description:
            "We support our clients in the search, acquisition, rental, and enhancement of real estate properties.",
          features: [
            "Buying and selling real estate",
            "Short- and long-term rental",
            "Property management",
            "Investor matchmaking",
            "Real estate investment advice",
            "Custom property search",
          ],
        },
        {
          title: "Events",
          description:
            "We create elegant, impactful, and perfectly orchestrated events.",
          features: [
            "Corporate events",
            "Product launches",
            "Seminars and conferences",
            "Private parties",
            "Weddings and celebrations",
            "Premium & VIP events",
          ],
        },
      ],
    },

    // Contact
    contact: {
      tag: "Contact",
      title: "Let's stay in touch",
      description:
        "Our team is here to answer your questions and support you in your travel projects. Do not hesitate to contact us.",
      whatsapp: "Contact us on WhatsApp",
      mapTitle: "EGEL TRAVEL location in Yaounde",
      info: {
        address: { title: "Address", details: ["Yaounde, Cameroon"] },
        phone: { title: "Phone", details: ["+237 6XX XXX XXX"] },
        email: { title: "Email", details: ["contact@egel.cm"] },
        hours: {
          title: "Hours",
          details: ["Mon - Fri: 8am - 6pm", "Sat: 9am - 2pm"],
        },
      },
    },

    // Footer
    footer: {
      tagline: "Travel with peace of mind",
      description:
        "EGEL TRAVEL SARL supports your travel projects with transparency and serenity. Your trusted travel agency in Yaounde, Cameroon.",
      navigation: "Navigation",
      servicesTitle: "Services",
      copyright: "All rights reserved. Travel with peace of mind.",
      serviceLinks: [
        "Air Ticketing",
        "Travel Insurance",
        "Vehicle Rental",
        "Immigration",
      ],
    },

    // WhatsApp
    whatsapp: {
      ariaLabel: "Contact us on WhatsApp",
    },

    // Devis
    devis: {
      backLink: "< Back to home",
      tag: "Quote Request",
      title: "Get your personalized quote",
      description:
        "Fill out the form below and our team will contact you quickly at",
      descriptionEnd: "to offer you the most suitable solution for your needs.",
      steps: [
        {
          step: "01",
          title: "Fill out the form",
          desc: "Indicate your needs and desired destination",
        },
        {
          step: "02",
          title: "Receive your quote",
          desc: "Our team sends you a tailored proposal",
        },
        {
          step: "03",
          title: "Confirm and travel",
          desc: "Validate your booking and prepare your trip",
        },
      ],
      serviceOptions: [
        { value: "billetterie", label: "Air Ticketing" },
        { value: "assurance", label: "Travel Insurance" },
        { value: "location", label: "Vehicle Rental" },
        { value: "immigration", label: "Immigration & Assistance" },
        { value: "tourisme", label: "Tourism & Travel" },
        { value: "immobilier", label: "Real Estate" },
        { value: "evenementiel", label: "Events" },
      ],
      form: {
        nom: "Last Name",
        prenom: "First Name",
        telephone: "Phone",
        email: "Email",
        service: "Desired service",
        servicePlaceholder: "Choose a service",
        destination: "Destination",
        destinationPlaceholder: "E.g.: Paris, Dubai, New York...",
        dateDepart: "Departure date",
        dateRetour: "Return date",
        passengers: "Number of passengers",
        message: "Message",
        messagePlaceholderTravel: "Describe your travel project...",
        messagePlaceholderOther: "Describe your request in detail...",
        submit: "Send my request",
        submitting: "Sending...",
        requestSentTo: "Your request will be sent to",
        nomPlaceholder: "Your last name",
        prenomPlaceholder: "Your first name",
      },
      success: {
        title: "Request sent successfully!",
        description:
          "Thank you for your request. Our team will contact you quickly at",
        descriptionEnd: "to offer you the best solution.",
        newRequest: "New request",
        backHome: "Back to home",
      },
    },
  },
} as const;

export type Translations = (typeof translations)["fr"];
