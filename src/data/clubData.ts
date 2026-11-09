/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MembershipTier, Facility, ClubEvent, MemberTestimonial } from '../types';

export const CLUB_IMAGES = {
  hero: '/src/assets/images/hero_meridian_club_1794183754268.jpg',
  dining: '/src/assets/images/club_fine_dining_1794183754576.jpg',
  wellness: '/src/assets/images/club_wellness_spa_1794183755143.jpg',
  library: '/src/assets/images/club_private_library_salon_1794183755860.jpg',
};

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: 'resident',
    name: 'Resident Executive',
    tagline: 'The daily metropolitan sanctuary for senior leaders and enterprise founders.',
    idealFor: 'Senior corporate officers, managing partners, and resident founders based in the capital.',
    initiationFee: '$5,000',
    annualDues: '$7,200',
    privileges: [
      'Unrestricted daily access to all club houses, drawing rooms, and work salons',
      'Priority reservations for The Obsidian Dining Room and private dining salons',
      'Unlimited access to the Subterranean Thermal Spa and Longevity Suite',
      'Invitation to all private member salons, dinners, and closed-door symposiums',
      'Access for up to 3 accompanied guests per visit across all social salons'
    ],
    exclusiveFeatures: [
      'House charge account with monthly ledger reconciliation',
      'Complimentary valet parking and chauffeured airport transfers (4x annually)',
      'Digital keycard with biometric private entry'
    ]
  },
  {
    id: 'global',
    name: 'Global Founder',
    tagline: 'Seamless prestige and hospitality across leading international financial capitals.',
    idealFor: 'Cross-border entrepreneurs, venture capitalists, and executives maintaining multi-city residencies.',
    initiationFee: '$6,500',
    annualDues: '$9,800',
    isHighlighted: true,
    privileges: [
      'Full resident privileges plus reciprocal access to 24 premier sister clubs worldwide (London, Zurich, Tokyo, New York, Singapore)',
      'Guaranteed boardroom reservations with encrypted private connectivity within 2 hours notice',
      'Dedicated 24/7 House Concierge for travel, charter, and cultural access',
      'Access for up to 5 accompanied guests per visit in private meeting suites',
      'Priority booking for the Club’s four overnight residential guest suites'
    ],
    exclusiveFeatures: [
      'Global reciprocal billing privilege across all partner private clubs',
      'Private cellar storage locker allocation (up to 24 bottles)',
      'Complimentary boardroom allocation: 20 hours per calendar quarter'
    ]
  },
  {
    id: 'patron',
    name: 'Patron Fellow',
    tagline: 'The pinnacle of club stewardship, cultural patronage, and legacy privileges.',
    idealFor: 'Philanthropists, distinguished institutional leaders, and multi-generational patrons.',
    initiationFee: '$12,000',
    annualDues: '$15,000',
    privileges: [
      'Lifetime membership equity status with voting privileges on arts and acquisitions',
      'Permanent spousal / partner co-membership included with identical access rights',
      'Private Sommelier consultation and permanent reserve cellar locker (up to 60 bottles)',
      'Direct invitations to annual Private Governors’ Dinner and International Fellows Weekend',
      'Guaranteed private table at The Obsidian Dining Room with zero advance reservation required'
    ],
    exclusiveFeatures: [
      'Annual private event hosting fee waiver in The Library Salon (1x annually)',
      'Permanent private dining locker & personalized crystal glassware service',
      'Named benefactor acknowledgement in the Club’s Private Heritage Register'
    ]
  },
  {
    id: 'emerging',
    name: 'Emerging Leader',
    tagline: 'An intentional pathway for trailblazing innovators and founders under 35.',
    idealFor: 'High-trajectory founders, technology architects, and creative pioneers under the age of 35.',
    initiationFee: '$2,500',
    annualDues: '$3,800',
    privileges: [
      'Complete house and wellness access across all operating hours',
      'Direct pairing with the Meridian Mentorship Circle of veteran industry patrons',
      'Access to quarterly venture showcase dinners and private investor salons',
      'Access for up to 2 accompanied guests per visit',
      'Guaranteed transition to Resident Executive status upon turning 35 without re-initiation'
    ],
    exclusiveFeatures: [
      'Flexible quarterly dues payment structure',
      'Curated emerging fellows discussion roundtable monthly',
      'Access to private coworking salons with ultra-high bandwidth'
    ]
  }
];

export const CLUB_FACILITIES: Facility[] = [
  {
    id: 'library',
    name: 'The Grand Library & Hearth Salon',
    subtitle: 'Quiet contemplation, intellectual exchange, and curated literature',
    description: 'Lined with over four thousand first editions and rare architectural folios, the Grand Library offers a sanctuary from the relentless momentum of the city. A wood-burning limestone fireplace anchors the room, framed by hand-waxed English mahogany and bespoke velvet wingbacks designed for discreet conversation.',
    specifications: [
      'Over 4,200 curated volumes spanning history, philosophy, and political economy',
      'Active wood-burning open hearth fireplace with evening hearthside service',
      'Strict audio-call prohibition to protect serene reading atmosphere',
      'Afternoon loose-leaf tea service paired with house patisserie'
    ],
    image: CLUB_IMAGES.library,
    hours: '07:00 — 00:00 Daily',
    capacity: '45 Seats',
    etiquette: 'Discreet conversational tones; laptop use permitted strictly prior to 18:00.'
  },
  {
    id: 'dining',
    name: 'The Obsidian Dining Room',
    subtitle: 'Seasonal gastronomy orchestrated by Chef Édouard Laurent',
    description: 'Under the direction of Michelin-honored Executive Chef Édouard Laurent, The Obsidian celebrates regenerative provenance, heritage game, and delicate coastal foraging. Tables are swathed in Belgian linen and positioned with generous spatial privacy to ensure every dinner remains strictly confidential.',
    specifications: [
      'Six- and eight-course seasonal degustations paired with rare cellar vintages',
      'A la carte breakfast, executive luncheon, and evening private dining',
      'Two secluded private dining alcoves accommodating 8 and 16 seated guests',
      'Dedicated tableside guerdon service and bespoke caviar cart'
    ],
    image: CLUB_IMAGES.dining,
    hours: 'Breakfast 07:00–10:30 · Lunch 12:00–15:00 · Dinner 18:30–23:00',
    capacity: '60 Seats',
    etiquette: 'Tailored jacket required for gentlemen after 18:00. No athletic footwear.'
  },
  {
    id: 'wellness',
    name: 'The Subterranean Thermal Sanctuary',
    subtitle: 'Holistic rejuvenation, contrast hydrotherapy, and longevity medicine',
    description: 'Carved into the foundational bedrock beneath the club house, the Thermal Sanctuary is a stone-hewn refuge designed for somatic recovery and mental stillness. Featuring a basalt vitality pool kept at thirty-eight degrees Celsius, Finnish dry timber saunas, eucalyptus steam, and private cryo-recovery suites.',
    specifications: [
      'Basalt vitality hydrotherapy bath with automated micro-bubble effervescence',
      'Finnish dry heat timber sauna and Italian terrazzo steam room',
      'Cold plunge cistern maintained at a precise 9°C for metabolic reset',
      'Private treatment suites offering executive sports therapy and lymphatic drainage'
    ],
    image: CLUB_IMAGES.wellness,
    hours: '06:00 — 22:00 Daily',
    capacity: 'Limited to 15 concurrent guests',
    etiquette: 'Complimentary organic linen robes and Italian slippers provided upon arrival.'
  },
  {
    id: 'facade',
    name: 'The St. James Clubhouse & Private Atrium',
    subtitle: 'A landmark neoclassical residence restored with discreet modern luxury',
    description: 'Originally commissioned in 1894 by civic patron Lord Arthur Meridian, this five-story Portland limestone townhouse stands as an architectural bastion in the heart of the district. Beyond the discreet brass-embossed carriage entry lies a soaring glass-crowned courtyard atrium filled with mature olive trees and ambient natural light.',
    specifications: [
      'Discreet private porte-cochère with 24-hour private valet attendants',
      'Climate-controlled subterranean fine wine vault housing over 14,000 bottles',
      'Three acoustically isolated executive conference boardrooms',
      'Four residential guest suites reserved exclusively for members and international fellows'
    ],
    image: CLUB_IMAGES.hero,
    hours: '24 Hours Daily (Concierge & Security)',
    capacity: 'Five floors of private club amenities',
    etiquette: 'Private club admittance strictly restricted to vetted members and invited guests.'
  }
];

export const UPCOMING_EVENTS: ClubEvent[] = [
  {
    id: 'evt-1',
    title: 'The Sovereign AI & Geopolitics Salon',
    category: 'Executive Roundtable',
    date: 'Thursday, November 19, 2026',
    time: '18:30 — 21:30',
    location: 'The Library Salon',
    host: 'Dr. Alistair Vance',
    hostTitle: 'Senior Fellow, Cambridge Centre for Global Strategic Studies',
    description: 'A Chatham House Rule dinner and closed-door dialogue exploring technological autarky, next-generation semiconductor supply corridors, and strategic sovereign compute initiatives.',
    dressCode: 'Business Attire / Jacket Required',
    capacityRemaining: 6
  },
  {
    id: 'evt-2',
    title: 'Autumn Bordeaux Retrospective: 1982 & 1996 Vintages',
    category: 'Gastronomy & Wine',
    date: 'Saturday, November 28, 2026',
    time: '19:00 — 22:30',
    location: 'The Obsidian Cellar Vault',
    host: 'Margaux De la Tour',
    hostTitle: 'Master Sommelier & Cellar Custodian',
    description: 'An intimate eight-seat vertical tasting examining legendary Left Bank premier crus paired with a game dinner prepared by Executive Chef Édouard Laurent.',
    dressCode: 'Black Tie Optional / Formal Evening Wear',
    capacityRemaining: 2
  },
  {
    id: 'evt-3',
    title: 'Contemporary Private Collecting in an Era of Illiquidity',
    category: 'Cultural Preview',
    date: 'Wednesday, December 4, 2026',
    time: '18:00 — 20:30',
    location: 'The Courtyard Atrium',
    host: 'Elena Rostova',
    hostTitle: 'Former Chief Curator, European Contemporary Foundation',
    description: 'An insider preview of upcoming auction consignments and discussion on private foundations, institutional museum loans, and emerging sculptural masters.',
    dressCode: 'Smart Casual / Tailored Separates',
    capacityRemaining: 14
  },
  {
    id: 'evt-4',
    title: 'Winter Solstice Longevity & Hydrothermal Retreat',
    category: 'Wellness Retreat',
    date: 'Sunday, December 13, 2026',
    time: '08:30 — 13:00',
    location: 'The Thermal Sanctuary',
    host: 'Dr. Julian Thorne',
    hostTitle: 'Director of Human Performance & Metabolic Medicine',
    description: 'A morning dedicated to guided thermal shock protocols, metabolic bio-impedance assessments, breathwork, and nutritional adaptation for senior executives.',
    dressCode: 'Sanctuary Loungewear Provided',
    capacityRemaining: 5
  },
  {
    id: 'evt-5',
    title: 'Cross-Border Venture Capital & The Next Industrial Cycle',
    category: 'Salon & Discourse',
    date: 'Tuesday, January 12, 2027',
    time: '18:30 — 21:00',
    location: 'The Executive Boardroom Suite',
    host: 'Marcus Chen & Sarah Sterling',
    hostTitle: 'Managing Partners, Sterling Meridian Capital & Alpine Ventures',
    description: 'A confidential briefing examining European industrial autonomy, nuclear small modular reactors, and defense-adjacent infrastructure investment.',
    dressCode: 'Smart Business Attire',
    capacityRemaining: 8
  }
];

export const MEMBER_TESTIMONIALS: MemberTestimonial[] = [
  {
    quote: 'The Meridian Club has returned to the quintessential ideal of private membership: a place of absolute discretion where ideas can be debated without performative rhetoric, and where hospitality is practiced as an art form.',
    author: 'Sir Jonathan Prescott',
    title: 'Chief Executive Officer',
    organization: 'Prescott & Harringford Global',
    tier: 'Patron Fellow',
    yearJoined: 'Member since 2018'
  },
  {
    quote: 'As someone who splits time between London, Zurich, and Singapore, the Global Founder membership has replaced hotel lounges and sterile conference centers with a community of peers that feels like home in every capital.',
    author: 'Camilla Lindqvist',
    title: 'Founding Partner',
    organization: 'Nordic DeepTech Ventures',
    tier: 'Global Founder',
    yearJoined: 'Member since 2021'
  },
  {
    quote: 'The Thermal Sanctuary alone is worth the annual dues. After a grueling cross-border M&A closing, disappearing into the subterranean basalt bath with no screens and complete silence restores equilibrium instantly.',
    author: 'Devon K. Vance',
    title: 'Managing Director, Head of Private Capital',
    organization: 'Vance Capital Partners',
    tier: 'Resident Executive',
    yearJoined: 'Member since 2023'
  }
];

export const CLUB_STATISTICS = [
  { value: '1894', label: 'Club Foundation Year' },
  { value: '450', label: 'Maximum Resident Roster Cap' },
  { value: '24', label: 'Reciprocal Sister Clubs Worldwide' },
  { value: '14,000+', label: 'Reserve Cellar Vintages' }
];

export const MEMBERSHIP_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Confidential Application Submission',
    desc: 'Prospective members submit an application detailing professional trajectory, civic contributions, and personal resonance with club ethos.'
  },
  {
    step: '02',
    title: 'Sponsorship Verification',
    desc: 'Applications are validated through two existing club sponsors or slated for direct Admissions Committee review for non-sponsored applicants.'
  },
  {
    step: '03',
    title: 'Admissions Committee Review',
    desc: 'The Committee meets bi-monthly to review candidate dossiers, ensuring an intellectually diverse, respectful, and accomplished membership balance.'
  },
  {
    step: '04',
    title: 'Governor Conversation & Election',
    desc: 'Shortlisted candidates are invited to an informal coffee with a Club Governor prior to formal election and presentation of club key credentials.'
  }
];
