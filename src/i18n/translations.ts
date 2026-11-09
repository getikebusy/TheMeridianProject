/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'fr';

export interface Translations {
  nav: {
    theClub: string;
    membership: string;
    experiences: string;
    events: string;
    contact: string;
    apply: string;
    status: string;
    applyForMembership: string;
    overview: string;
    trackStatus: string;
    appointmentOnly: string;
    themeToggle: string;
    langToggle: string;
  };
  home: {
    heroKicker: string;
    heroTitle: string;
    heroSubtitle: string;
    applyCta: string;
    exploreCta: string;
    intakeNotice: string;
    stats: {
      year: string;
      yearLabel: string;
      members: string;
      membersLabel: string;
      clubs: string;
      clubsLabel: string;
      cellar: string;
      cellarLabel: string;
    };
    manifestoKicker: string;
    manifestoTitle: string;
    manifestoBody: string;
    pillarsKicker: string;
    pillarsTitle: string;
    viewAllExperiences: string;
    curatorialKicker: string;
    curatorialTitle: string;
    curatorialBody: string;
    chathamRule: string;
    nonSolicitation: string;
    discreetPrivacy: string;
    readHistory: string;
    testimonialsKicker: string;
    testimonialsTitle: string;
    bannerKicker: string;
    bannerTitle: string;
    bannerBody: string;
    compareTiers: string;
  };
  club: {
    chapter: string;
    title: string;
    subtitle: string;
    heritageTitle: string;
    heritageP1: string;
    heritageP2: string;
    discretionTitle: string;
    discretionDesc: string;
    hospitalityTitle: string;
    hospitalityDesc: string;
    facadeCaptionTitle: string;
    facadeCaptionDesc: string;
    facilitiesKicker: string;
    facilitiesTitle: string;
    facilitiesSubtitle: string;
    viewSpecs: string;
    houseRulesKicker: string;
    houseRulesTitle: string;
    houseRulesSubtitle: string;
    rule1Title: string;
    rule1Desc: string;
    rule2Title: string;
    rule2Desc: string;
    rule3Title: string;
    rule3Desc: string;
    experienceCtaTitle: string;
    experienceCtaSubtitle: string;
    experienceCtaBtn: string;
  };
  membership: {
    chapter: string;
    title: string;
    subtitle: string;
    popularBadge: string;
    annualDues: string;
    initiationFee: string;
    candidateProfile: string;
    corePrivileges: string;
    distinctiveAmenities: string;
    applyAs: string;
    journeyKicker: string;
    journeyTitle: string;
    journeySubtitle: string;
    confidentiality: string;
    faqKicker: string;
    faqTitle: string;
    readyTitle: string;
    readySubtitle: string;
    startAppBtn: string;
    speakSecretaryBtn: string;
  };
  experiences: {
    chapter: string;
    title: string;
    subtitle: string;
    tabDining: string;
    tabWellness: string;
    tabGatherings: string;
    reserveTasting: string;
    bookSpa: string;
    enquireEvent: string;
    sampleMenuTitle: string;
    sampleMenuSubtitle: string;
    sampleMovement: string;
  };
  events: {
    chapter: string;
    title: string;
    subtitle: string;
    seatsLeft: string;
    requestSeat: string;
    guestProtocolKicker: string;
    guestProtocolTitle: string;
    guestProtocolSubtitle: string;
    guestProtocolBtn: string;
  };
  contact: {
    chapter: string;
    title: string;
    subtitle: string;
    addressTitle: string;
    houseHours: string;
    conciergeDesk: string;
    valetTitle: string;
    valetDesc: string;
    secretariatTitle: string;
    formKicker: string;
    formTitle: string;
    formSubtitle: string;
    fullName: string;
    email: string;
    phone: string;
    department: string;
    subject: string;
    message: string;
    sendBtn: string;
    confidentialGuaranteed: string;
  };
  newsletter: {
    kicker: string;
    title: string;
    description: string;
    placeholderName: string;
    placeholderEmail: string;
    selectInterest: string;
    subscribeBtn: string;
    privacyNote: string;
    successTitle: string;
    successMessage: string;
    interestOptions: {
      salons: string;
      gastronomy: string;
      cultural: string;
      wellness: string;
    };
  };
  apply: {
    chapter: string;
    title: string;
    subtitle: string;
    stepOf: string;
    steps: string[];
    nextBtn: string;
    prevBtn: string;
    submitBtn: string;
  };
  footer: {
    brandDesc: string;
    district: string;
    clubDirectory: string;
    admissions: string;
    secretariat: string;
    allRightsReserved: string;
    appointmentNotice: string;
    discretionNotice: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      theClub: 'The Club',
      membership: 'Membership',
      experiences: 'Experiences',
      events: 'Events',
      contact: 'Contact',
      apply: 'Apply',
      status: 'Status',
      applyForMembership: 'Apply for Membership',
      overview: 'Overview',
      trackStatus: 'Track Application Status',
      appointmentOnly: 'By Appointment & Member Access',
      themeToggle: 'Switch Theme',
      langToggle: 'Français',
    },
    home: {
      heroKicker: 'Private Members Sanctuary · Est. 1894 · London, Toronto & Global Reciprocal',
      heroTitle: 'A Sanctuary for Discerning Minds, Enterprise & Influence.',
      heroSubtitle: 'The Meridian Club convenes visionary founders, chief executives, and cultural stewards in an environment of understated distinction. Exceptional gastronomy, subterranean wellness, and confidential fellowship.',
      applyCta: 'Apply for Membership',
      exploreCta: 'Explore The Club',
      intakeNotice: 'Winter 2026/2027 Admissions Register is currently reviewing dossiers · Roster strictly capped at 450 members',
      stats: {
        year: '1894',
        yearLabel: 'Club Foundation Year',
        members: '450',
        membersLabel: 'Maximum Resident Cap',
        clubs: '24',
        clubsLabel: 'Reciprocal Sister Clubs',
        cellar: '14,000+',
        cellarLabel: 'Reserve Cellar Vintages',
      },
      manifestoKicker: 'The Meridian Manifesto',
      manifestoTitle: 'Where Ambition Finds Repose, and Discretion Is Sovereign.',
      manifestoBody: 'In a world increasingly driven by performative visibility and perpetual distraction, The Meridian Club provides the antithesis: an intimate enclave for unhurried thought, genuine conversation, and hospitality tailored to the highest standard.',
      pillarsKicker: 'The Four Pillars of Meridian',
      pillarsTitle: 'Curated for Modern Statesmanship & Living Well',
      viewAllExperiences: 'View All Experiences',
      curatorialKicker: 'The Curatorial Philosophy',
      curatorialTitle: 'Curating People, Ideas & Enduring Atmosphere',
      curatorialBody: 'The Meridian Club was founded on a simple conviction: the greatest work is born when brilliant, independent minds convene without pretense or transaction. Our rooms are intentionally proportioned to encourage serendipitous encounters between seasoned enterprise builders and vanguard thinkers.',
      chathamRule: 'Strict Chatham House Rule observed in all club salons',
      nonSolicitation: 'Absolute prohibition of commercial solicitation among members',
      discreetPrivacy: 'Discreet photographic policy to preserve member privacy',
      readHistory: 'Read Full History',
      testimonialsKicker: 'Member Reflections',
      testimonialsTitle: 'In the Words of Our Fellows',
      bannerKicker: 'Candidate Register',
      bannerTitle: 'Take Your Place Among Leaders, Founders & Patrons',
      bannerBody: 'Membership is granted via candidate dossier review by the Admissions Committee. Begin your confidential application or explore the membership privileges.',
      compareTiers: 'Compare Membership Tiers',
    },
    club: {
      chapter: 'Chapter 01 · Heritage & Architectural Identity',
      title: 'The St. James’s Enclave: An Enduring Architectural Sanctuary.',
      subtitle: 'Founded in 1894 by Lord Arthur Meridian as an intellectual antidote to the transactional clubs of Victorian London, The Meridian Club was conceived as a private home of quiet distinction where political economists, industrial pioneers, and patrons of the arts gathered in candid fellowship.',
      heritageTitle: 'Restoring the Soul of the Private Club',
      heritageP1: 'In 2019, the Grade II listed townhouse underwent a meticulous three-year preservation and contemporary restoration under the stewardship of master stone masons, acoustic architects, and leading interior curators. The objective was clear: honor the 1894 classical proportions while equipping the house with modern thermal hydrotherapy, whisper-quiet cryptographic digital infrastructure, and bespoke culinary suites.',
      heritageP2: 'Today, The Meridian Club stands as a confidential sanctuary for over four hundred leading founders, managing partners, and cultural architects. Within our walls, mobile phone conversations and public photography are strictly forbidden; relationships are forged through genuine conversation rather than business card exchanges.',
      discretionTitle: 'The Principle of Discretion',
      discretionDesc: 'All discussions fall under strict Chatham House Rule. Member rosters are never commercialized or published publicly.',
      hospitalityTitle: 'Unhurried Hospitality',
      hospitalityDesc: 'Staff members possess career tenure and anticipate individual preferences, from personal cellar selections to favorite drawing room seating.',
      facadeCaptionTitle: 'The Portland Limestone Facade',
      facadeCaptionDesc: 'Restored 1894 neoclassical entry with private carriage porte-cochère.',
      facilitiesKicker: 'House Directory',
      facilitiesTitle: 'The Club Facilities & Private Salons',
      facilitiesSubtitle: 'Select any room to review dedicated operational hours, reservation requirements, capacity, and house etiquette.',
      viewSpecs: 'View Specifications',
      houseRulesKicker: 'House Regulations',
      houseRulesTitle: 'The Code of Fellowship & Decorum',
      houseRulesSubtitle: 'To preserve the calm dignity and confidentiality of our members, all guests and members are bound by our standing house protocols.',
      rule1Title: '01. Photography & Devices',
      rule1Desc: 'Photography, video recording, and social media posting are strictly prohibited inside all club spaces. Mobile phones must remain on silent at all times.',
      rule2Title: '02. Attire & Sartorial Decorum',
      rule2Desc: 'Smart tailored attire is required throughout the clubhouse. In The Obsidian Dining Room, tailored jackets are mandatory for gentlemen after 18:00.',
      rule3Title: '03. Non-Solicitation Policy',
      rule3Desc: 'Members may never commercially pitch, fundraise, or solicit fellow members without prior invitation. Fellowship is founded upon mutual intellectual respect.',
      experienceCtaTitle: 'Experience The Club as a Member',
      experienceCtaSubtitle: 'Our roster is curated to maintain an intimate atmosphere where every member is known by name. Review our membership tiers and candidate criteria.',
      experienceCtaBtn: 'View Membership Tiers & Privileges',
    },
    membership: {
      chapter: 'Chapter 02 · Admissions & Privileges',
      title: 'Curated Membership Tiers & House Privileges.',
      subtitle: 'Membership at The Meridian Club is an investment in discretion, thoughtful community, and uncompromised hospitality. We maintain an intentional cross-generational roster of entrepreneurs, enterprise chiefs, and cultural stewards.',
      popularBadge: 'Preferred by Global Founders',
      annualDues: 'Annual Dues',
      initiationFee: 'Initiation Fee',
      candidateProfile: 'Candidate Profile',
      corePrivileges: 'Core House Privileges',
      distinctiveAmenities: 'Distinctive Amenities',
      applyAs: 'Apply for',
      journeyKicker: 'The Admissions Journey',
      journeyTitle: 'From Candidate Dossier to Election',
      journeySubtitle: 'The admissions workflow is designed to be rigorous yet discreet, respectful of candidate schedules, and unencumbered by bureaucratic delay.',
      confidentiality: 'Strict Confidentiality Observed',
      faqKicker: 'Clarifications',
      faqTitle: 'Admissions Governance & Questions',
      readyTitle: 'Ready to Submit Your Candidate Dossier?',
      readySubtitle: 'The application takes approximately 8 minutes to complete and is reviewed with absolute confidentiality by the admissions secretariat.',
      startAppBtn: 'Start Membership Application',
      speakSecretaryBtn: 'Speak with Admissions Secretary',
    },
    experiences: {
      chapter: 'Chapter 03 · Hospitality & Wellness',
      title: 'Curated Experiences of Exceptional Distinction.',
      subtitle: 'From Michelin-pedigree dining and cellar vintages to subterranean restorative hydrotherapy and confidential boardroom convenings, every touchpoint is tailored for uncompromised privacy and pleasure.',
      tabDining: 'Fine Dining & Cellar',
      tabWellness: 'Thermal Wellness',
      tabGatherings: 'Private Salons',
      reserveTasting: 'Reserve Tasting Table',
      bookSpa: 'Book Private Spa Suite',
      enquireEvent: 'Enquire for Private Event',
      sampleMenuTitle: 'Sample Degustation Menu',
      sampleMenuSubtitle: 'Served in seven movements with sommelier reserve pairings',
      sampleMovement: 'Movement',
    },
    events: {
      chapter: 'Chapter 04 · House Gatherings & Calendar',
      title: 'Curated Member Salons, Tastings & Symposia.',
      subtitle: 'Every gathering at The Meridian Club is strictly confidential and closed to the press. We convene global decision-makers, scientific pioneers, and master craftsmen in candid, unscripted discourse.',
      seatsLeft: 'seats remaining',
      requestSeat: 'Request Seat Reservation',
      guestProtocolKicker: 'Guest Protocol',
      guestProtocolTitle: 'Attendance as an Invited Guest',
      guestProtocolSubtitle: 'Select salons and retrospectives permit attendance by vetted non-member guests through member sponsorship or direct invitation by the Admissions Committee. Prospective members may request candidate guest privileges.',
      guestProtocolBtn: 'Apply to Gain Unrestricted Event Access',
    },
    contact: {
      chapter: 'Chapter 05 · Secretariat & Location',
      title: 'Enquiries, Location & Private Concierge.',
      subtitle: 'Situated within the historic St. James’s district, The Meridian Club operates with discreet arrival protocols. Contact our secretariat for private appointments, prospective member consultations, or event hosting.',
      addressTitle: 'House Address & Arrival',
      houseHours: 'House Operating Hours',
      conciergeDesk: 'Direct Concierge Desk',
      valetTitle: 'Private Porte-Cochère & Valet',
      valetDesc: 'Chauffeured arrivals may enter via the private cobblestone mews. Complimentary valet attendants attend to member vehicles around the clock.',
      secretariatTitle: 'Secretariat Contacts',
      formKicker: 'Confidential Transmission',
      formTitle: 'Direct Enquiry to Secretariat',
      formSubtitle: 'Your enquiry will be routed directly to the designated department governor. Response is provided within 24 business hours.',
      fullName: 'Full Name',
      email: 'Email Address',
      phone: 'Telephone Number',
      department: 'Department / Subject',
      subject: 'Subject Line',
      message: 'Confidential Message',
      sendBtn: 'Send Transmission',
      confidentialGuaranteed: 'Confidentiality Guaranteed',
    },
    newsletter: {
      kicker: 'The Meridian Gazette',
      title: 'Exclusive Event Invitations & Private Dispatches',
      description: 'Subscribe to receive discreet quarterly dispatches detailing forthcoming Chatham House symposia, reserve cellar allocations, and invitation-only guest salons in London, Toronto, and Montréal.',
      placeholderName: 'Your Full Name (e.g. Lord Wright, Mme. Tremblay)',
      placeholderEmail: 'executive@enterprise.com',
      selectInterest: 'Primary Areas of Interest (Optional):',
      subscribeBtn: 'Request Invitations',
      privacyNote: 'Strictly confidential. No commercial lists. Unsubscribe at any time with one click.',
      successTitle: 'Privilege Register Confirmed',
      successMessage: 'Thank you for your interest. You have been added to our private dispatch registry. An introductory prospectus has been transmitted to your email.',
      interestOptions: {
        salons: 'Executive Salons & Geopolitical Briefings',
        gastronomy: 'Wine Cellar Retrospectives & Degustations',
        cultural: 'Private Art & Architectural Previews',
        wellness: 'Thermal Longevity & Bio-Recovery Days',
      },
    },
    apply: {
      chapter: 'Chapter 06 · Admissions Candidate Workflow',
      title: 'Confidential Application for Membership.',
      subtitle: 'The Meridian Club welcomes applications from leaders and innovators of proven character. All candidate dossiers are preserved under strict institutional privacy.',
      stepOf: 'Step',
      steps: [
        'Candidate Standing & Credentials',
        'Tier Selection & Intent',
        'Sponsorship & Endorsements',
        'House Engagements & Lifestyle',
        'Attestation & Final Review',
      ],
      nextBtn: 'Continue to Next Step',
      prevBtn: 'Previous Step',
      submitBtn: 'Transmit Candidate Dossier',
    },
    footer: {
      brandDesc: 'A private members sanctuary established in 1894 for discerning leaders, founders, and executives. Discretion, fine dining, and enduring fellowship.',
      district: 'St. James’s Enclave · London & Canadian Affiliates',
      clubDirectory: 'The Club House',
      admissions: 'Admissions & Governance',
      secretariat: 'Private Secretariat',
      allRightsReserved: 'The Meridian Club Limited. All rights reserved.',
      appointmentNotice: 'By Appointment Only',
      discretionNotice: 'Strict Discretion Observed',
    },
  },
  fr: {
    nav: {
      theClub: 'Le Club',
      membership: 'Adhésion',
      experiences: 'Expériences',
      events: 'Événements',
      contact: 'Contact',
      apply: 'Postuler',
      status: 'Statut',
      applyForMembership: 'Postuler à l’Adhésion',
      overview: 'Aperçu',
      trackStatus: 'Suivre mon Dossier',
      appointmentOnly: 'Sur Rendez-vous et Accès Membre',
      themeToggle: 'Changer le Thème',
      langToggle: 'English',
    },
    home: {
      heroKicker: 'Sanctuaire Privé des Membres · Fondé en 1894 · Londres, Toronto et Réciprocité Mondiale',
      heroTitle: 'Un Sanctuaire pour les Esprits Éclairés, l’Entreprise et l’Influence.',
      heroSubtitle: 'Le Meridian Club réunit fondateurs visionnaires, hauts dirigeants et mécènes culturels dans un cadre d’une distinction feutrée. Haute gastronomie, bien-être thermal souterrain et confraternité confidentielle.',
      applyCta: 'Postuler à l’Adhésion',
      exploreCta: 'Explorer le Club',
      intakeNotice: 'Le registre d’admissions Hiver 2026/2027 examine actuellement les dossiers · Effectif strictement plafonné à 450 membres',
      stats: {
        year: '1894',
        yearLabel: 'Année de Fondation',
        members: '450',
        membersLabel: 'Plafond Maximal de Membres',
        clubs: '24',
        clubsLabel: 'Clubs Partenaires Réciproques',
        cellar: '14 000+',
        cellarLabel: 'Bouteilles en Cave de Réserve',
      },
      manifestoKicker: 'Le Manifeste Meridian',
      manifestoTitle: 'Où l’Ambition Trouve le Repos, et la Discrétion Règne.',
      manifestoBody: 'Dans un monde dominé par la visibilité théâtrale et la distraction perpétuelle, le Meridian Club offre l’antithèse parfaite : une enclave propice à la réflexion posée, aux échanges authentiques et à une hospitalité raffinée.',
      pillarsKicker: 'Les Quatre Piliers du Meridian',
      pillarsTitle: 'Conçu pour la Haute Direction et l’Art de Vivre',
      viewAllExperiences: 'Découvrir Toutes les Expériences',
      curatorialKicker: 'La Philosophie Curatoire',
      curatorialTitle: 'Fédérer les Talents, les Idées et l’Élégance Pérenne',
      curatorialBody: 'Le Meridian Club repose sur une conviction immuable : les plus grandes réalisations naissent lorsque des esprits brillants et indépendants se réunissent sans artifice ni transaction commerciale. Nos salons favorisent les rencontres impromptues entre bâtisseurs chevronnés et esprits d’avant-garde.',
      chathamRule: 'Règle stricte de Chatham House observée dans tous nos salons',
      nonSolicitation: 'Interdiction absolue de démarchage commercial entre membres',
      discreetPrivacy: 'Politique photographique stricte préservant la vie privée',
      readHistory: 'Lire Notre Histoire Complète',
      testimonialsKicker: 'Témoignages de Membres',
      testimonialsTitle: 'Dans les Mots de Nos Pairs',
      bannerKicker: 'Registre des Candidats',
      bannerTitle: 'Prenez Place Parmi les Dirigeants, Fondateurs et Mécènes',
      bannerBody: 'L’admission s’effectue sur examen confidentiel du dossier par le Comité des Admissions. Débutez votre candidature ou découvrez les privilèges du club.',
      compareTiers: 'Comparer les Niveaux d’Adhésion',
    },
    club: {
      chapter: 'Chapitre 01 · Patrimoine et Identité Architecturale',
      title: 'L’Enclave de St. James : Un Sanctuaire Architectural Pérenne.',
      subtitle: 'Fondé en 1894 par Lord Arthur Meridian comme un refuge intellectuel face aux clubs mercantiles du Londres victorien, le Meridian Club est une demeure privée où économistes, pionniers de l’industrie et mécènes des arts se réunissent en toute franchise.',
      heritageTitle: 'Restaurer l’Âme du Club Privé',
      heritageP1: 'En 2019, cet hôtel particulier classé Grade II a fait l’objet d’une restauration minutieuse de trois ans menée par des maîtres tailleurs de pierre, des acousticiens et des designers renommés. L’objectif : sublimer les volumes classiques de 1894 tout en intégrant un sanctuaire d’hydrothérapie moderne et une infrastructure numérique sécurisée.',
      heritageP2: 'Aujourd’hui, le Meridian Club accueille plus de quatre cents fondateurs, associés gérants et créateurs de premier plan. Entre nos murs, les appels téléphoniques et les photographies publiques sont strictement prohibés afin de préserver une sérénité absolue.',
      discretionTitle: 'Le Principe de Discrétion',
      discretionDesc: 'Tous les échanges sont régis par la règle de Chatham House. La liste des membres demeure strictement confidentielle.',
      hospitalityTitle: 'Une Hospitalité Attentionnée',
      hospitalityDesc: 'Notre personnel de carrière anticipe chaque préférence, des allocations en cave privée aux emplacements favoris dans nos salons de lecture.',
      facadeCaptionTitle: 'La Façade en Pierre de Portland',
      facadeCaptionDesc: 'Entrée néoclassique restaurée de 1894 avec porte-cochère privée.',
      facilitiesKicker: 'Annuaire des Espaces',
      facilitiesTitle: 'Les Espaces du Club et Salons Privés',
      facilitiesSubtitle: 'Sélectionnez une pièce pour consulter les horaires d’ouverture, les exigences de réservation et l’étiquette de la maison.',
      viewSpecs: 'Voir les Spécifications',
      houseRulesKicker: 'Règlements Intérieurs',
      houseRulesTitle: 'Le Code de Confraternité et de Bienséance',
      houseRulesSubtitle: 'Afin de préserver le calme et la confidentialité, chaque membre et invité s’engage à respecter nos protocoles.',
      rule1Title: '01. Photographies et Appareils',
      rule1Desc: 'Les photos, vidéos et publications sur les réseaux sociaux sont interdites dans l’enceinte du club. Les téléphones doivent demeurer sous silence.',
      rule2Title: '02. Tenue et Élégance Vestimentaire',
      rule2Desc: 'Une tenue de ville soignée est de rigueur. Dans la Salle Obsidian, le port de la veste est obligatoire en soirée pour les messieurs.',
      rule3Title: '03. Absence de Sollicitation Commerciale',
      rule3Desc: 'Il est strictement interdit de démarcher ou de solliciter financièrement d’autres membres sans invitation préalable.',
      experienceCtaTitle: 'Vivez l’Expérience en Tant que Membre',
      experienceCtaSubtitle: 'Notre effectif est sélectionné pour préserver une intimité où chaque membre est accueilli par son nom.',
      experienceCtaBtn: 'Découvrir les Niveaux d’Adhésion',
    },
    membership: {
      chapter: 'Chapitre 02 · Admissions et Privilèges',
      title: 'Niveaux d’Adhésion Sélectifs et Privilèges de Maison.',
      subtitle: 'L’adhésion au Meridian Club constitue un investissement dans la discrétion, une communauté bienveillante et une hospitalité d’exception. Nous rassemblons des entrepreneurs, des dirigeants et des bâtisseurs de culture.',
      popularBadge: 'Plébiscité par les Fondateurs Internationaux',
      annualDues: 'Cotisation Annuelle',
      initiationFee: 'Droit d’Entrée',
      candidateProfile: 'Profil du Candidat',
      corePrivileges: 'Privilèges Clés',
      distinctiveAmenities: 'Avantages Distinctifs',
      applyAs: 'Postuler pour',
      journeyKicker: 'Le Parcours d’Admission',
      journeyTitle: 'Du Dossier de Candidature à l’Élection',
      journeySubtitle: 'Un processus rigoureux, respectueux de votre emploi du temps et exempt de lourdeurs administratives.',
      confidentiality: 'Confidentialité Absolue Garantie',
      faqKicker: 'Éclaircissements',
      faqTitle: 'Gouvernance et Questions Fréquentes',
      readyTitle: 'Prêt à Déposer Votre Candidature ?',
      readySubtitle: 'Le formulaire requiert environ 8 minutes et fait l’objet d’un traitement strictement confidentiel par le secrétariat.',
      startAppBtn: 'Débuter la Candidature',
      speakSecretaryBtn: 'Contacter le Secrétaire aux Admissions',
    },
    experiences: {
      chapter: 'Chapitre 03 · Gastronomie et Mieux-Être',
      title: 'Des Expériences d’une Exceptionnelle Distinction.',
      subtitle: 'De la haute gastronomie étoilée et nos allocations de grands crus à l’hydrothérapie thermale souterraine et nos conseils d’administration privés, chaque détail est orchestré pour votre confort absolu.',
      tabDining: 'Haute Table & Cave',
      tabWellness: 'Bien-Être Thermal',
      tabGatherings: 'Salons Privés',
      reserveTasting: 'Réserver une Table de Dégustation',
      bookSpa: 'Réserver une Suite Thermale',
      enquireEvent: 'Privatiser pour un Événement',
      sampleMenuTitle: 'Exemple de Menu Dégustation',
      sampleMenuSubtitle: 'Servi en sept mouvements avec accords de grands crus du sommelier',
      sampleMovement: 'Mouvement',
    },
    events: {
      chapter: 'Chapitre 04 · Salons et Calendrier Privé',
      title: 'Salons Privés, Dégustations et Colloques.',
      subtitle: 'Toutes les rencontres au Meridian Club se déroulent sous le sceau de la confidentialité et à l’abri de la presse. Nous réunissons décideurs mondiaux, scientifiques et maîtres artisans pour des dialogues libres et stimulants.',
      seatsLeft: 'places disponibles',
      requestSeat: 'Demander une Réservation',
      guestProtocolKicker: 'Protocole des Invités',
      guestProtocolTitle: 'Participer en Tant qu’Invité',
      guestProtocolSubtitle: 'Certains colloques permettent la participation d’invités parrainés par un membre ou directement invités par le Comité des Admissions.',
      guestProtocolBtn: 'Postuler pour Accéder à Tous les Événements',
    },
    contact: {
      chapter: 'Chapitre 05 · Secrétariat et Coordonnées',
      title: 'Renseignements, Emplacement et Conciergerie Privée.',
      subtitle: 'Niché au cœur de l’enclave de St. James, le Meridian Club applique des protocoles d’arrivée discrets. Contactez notre secrétariat pour toute demande ou visite privée.',
      addressTitle: 'Adresse du Club et Accès',
      houseHours: 'Horaires d’Ouverture',
      conciergeDesk: 'Bureau Direct de Conciergerie',
      valetTitle: 'Porte-Cochère Privée et Voiturier',
      valetDesc: 'Les arrivées avec chauffeur se font via l’allée pavée privée. Un service de voiturier courtois est disponible jour et nuit.',
      secretariatTitle: 'Contacts du Secrétariat',
      formKicker: 'Transmission Confidentielle',
      formTitle: 'Demande Directe au Secrétariat',
      formSubtitle: 'Votre message sera transmis au gouverneur de département concerné. Une réponse vous parviendra sous 24 heures ouvrables.',
      fullName: 'Nom Complet',
      email: 'Adresse Courriel',
      phone: 'Numéro de Téléphone',
      department: 'Département / Objet',
      subject: 'Objet du Message',
      message: 'Message Confidentiel',
      sendBtn: 'Envoyer la Transmission',
      confidentialGuaranteed: 'Confidentialité Garantie',
    },
    newsletter: {
      kicker: 'La Gazette Meridian',
      title: 'Invitations Exclusives et Correspondances Privées',
      description: 'Abonnez-vous pour recevoir discrètement nos correspondances trimestrielles sur les colloques à huis clos, les sorties de grands crus et les salons privés à Londres, Toronto et Montréal.',
      placeholderName: 'Votre Nom Complet (ex. Me Tremblay, M. Bouchard)',
      placeholderEmail: 'direction@entreprise.ca',
      selectInterest: 'Centres d’Intérêt Principaux (Optionnel) :',
      subscribeBtn: 'Demander les Invitations',
      privacyNote: 'Strictement confidentiel. Aucune liste commerciale. Désabonnement d’un simple clic.',
      successTitle: 'Inscription au Registre Privilège Confirmée',
      successMessage: 'Nous vous remercions de votre intérêt. Vous avez été ajouté à notre registre de correspondance privée. Un prospectus d’introduction vous a été transmis par courriel.',
      interestOptions: {
        salons: 'Colloques de Direction et Analyses Géopolitiques',
        gastronomy: 'Rétrospectives de Grands Crus et Dégustations',
        cultural: 'Vernissages Privés et Visites Architecturales',
        wellness: 'Journées de Récupération Thermale et Longévité',
      },
    },
    apply: {
      chapter: 'Chapitre 06 · Parcours de Candidature',
      title: 'Candidature Confidentielle à l’Adhésion.',
      subtitle: 'Le Meridian Club accueille les candidatures de dirigeants et d’innovateurs d’une intégrité reconnue. Tous les dossiers sont protégés par le secret institutionnel.',
      stepOf: 'Étape',
      steps: [
        'Identité et Titres Professionnels',
        'Choix du Niveau et Motivation',
        'Parrainages et Références',
        'Engagements et Art de Vivre',
        'Déclaration sur l’Honneur et Validation',
      ],
      nextBtn: 'Étape Suivante',
      prevBtn: 'Étape Précédente',
      submitBtn: 'Transmettre le Dossier de Candidature',
    },
    footer: {
      brandDesc: 'Un sanctuaire privé fondé en 1894 pour dirigeants, fondateurs et esprits d’exception. Discrétion, haute table et confraternité durable.',
      district: 'Enclave de St. James · Londres et Affiliés Canadiens',
      clubDirectory: 'Le Club',
      admissions: 'Admissions et Gouvernance',
      secretariat: 'Secrétariat Privé',
      allRightsReserved: 'The Meridian Club Limited. Tous droits réservés.',
      appointmentNotice: 'Sur Rendez-Vous Uniquement',
      discretionNotice: 'Stricte Discrétion Observée',
    },
  },
};
