/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageSection } from '../types';
import { CLUB_IMAGES, CLUB_STATISTICS, MEMBER_TESTIMONIALS } from '../data/clubData';
import { ArrowRight, Utensils, Sparkles, Building2, Globe, Shield, Clock } from 'lucide-react';
import { Language, translations } from '../i18n/translations';

interface HomeSectionProps {
  onNavigate: (section: PageSection) => void;
  onSelectTierAndApply: (tierId: string) => void;
  lang: Language;
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  onNavigate,
  onSelectTierAndApply,
  lang
}) => {
  const t = translations[lang].home;

  return (
    <div className="pt-24 pb-20 space-y-28 transition-colors duration-300">
      {/* 1. Hero Section: Cinematic Focal Asset & Primary Conversion */}
      <section className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="relative rounded-2xl overflow-hidden border border-stone-200 dark:border-[#C5A880]/20 bg-[#1A1816] shadow-2xl">
          {/* Hero Image with Measured Scrim */}
          <div className="relative h-[560px] sm:h-[640px] lg:h-[700px] w-full overflow-hidden">
            <img
              src={CLUB_IMAGES.hero}
              alt="The Meridian Club St. James’s townhouse facade at dusk"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transform scale-[1.02] filter brightness-[0.88] contrast-[1.04]"
            />
            {/* Measured luxury scrim overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/60 to-transparent" />
            <div className="absolute inset-0 bg-radial from-transparent via-[#121110]/30 to-[#121110]/80" />

            {/* Hero Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-14 lg:p-16 max-w-4xl space-y-6">
              {/* Quiet unboxed kicker */}
              <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#DFCAAA] font-medium">
                <span>{t.heroKicker}</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] text-[#F5F2EB] [text-wrap:balance]">
                {t.heroTitle}
              </h1>

              {/* Value Proposition Deck */}
              <p className="text-base sm:text-lg text-[#DFCAAA]/90 max-w-2xl font-light leading-relaxed">
                {t.heroSubtitle}
              </p>

              {/* Primary & Secondary Conversion CTAs with rounded-full */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onNavigate('apply')}
                  className="px-8 py-4 text-xs tracking-[0.2em] uppercase font-semibold text-[#121110] bg-[#C5A880] hover:bg-[#DFCAAA] transition-all duration-200 rounded-full shadow-lg hover:shadow-[#C5A880]/30 flex items-center justify-center gap-3 whitespace-nowrap shrink-0 group"
                >
                  <span>{t.applyCta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('the-club')}
                  className="px-8 py-4 text-xs tracking-[0.2em] uppercase font-medium text-[#F5F2EB] bg-[#121110]/80 hover:bg-[#121110] border border-[#C5A880]/40 hover:border-[#C5A880] transition-colors rounded-full flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
                >
                  {t.exploreCta}
                </button>
              </div>

              {/* Subtle intake notification */}
              <div className="pt-2 flex items-center gap-2 text-xs text-[#DFCAAA]/80">
                <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{t.intakeNotice}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Proof of Standing / KPI Strip */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 bg-white dark:bg-[#1A1816]/70 border border-stone-200 dark:border-[#C5A880]/15 rounded-xl shadow-sm flex flex-col justify-between">
            <span className="font-editorial text-3xl sm:text-4xl text-[#8C6B38] dark:text-[#C5A880] font-normal tabular-nums">
              {t.stats.year}
            </span>
            <span className="text-xs uppercase tracking-[0.16em] text-[#57534E] dark:text-[#9E9991] mt-2 font-medium">
              {t.stats.yearLabel}
            </span>
          </div>

          <div className="p-6 bg-white dark:bg-[#1A1816]/70 border border-stone-200 dark:border-[#C5A880]/15 rounded-xl shadow-sm flex flex-col justify-between">
            <span className="font-editorial text-3xl sm:text-4xl text-[#8C6B38] dark:text-[#C5A880] font-normal tabular-nums">
              {t.stats.members}
            </span>
            <span className="text-xs uppercase tracking-[0.16em] text-[#57534E] dark:text-[#9E9991] mt-2 font-medium">
              {t.stats.membersLabel}
            </span>
          </div>

          <div className="p-6 bg-white dark:bg-[#1A1816]/70 border border-stone-200 dark:border-[#C5A880]/15 rounded-xl shadow-sm flex flex-col justify-between">
            <span className="font-editorial text-3xl sm:text-4xl text-[#8C6B38] dark:text-[#C5A880] font-normal tabular-nums">
              {t.stats.clubs}
            </span>
            <span className="text-xs uppercase tracking-[0.16em] text-[#57534E] dark:text-[#9E9991] mt-2 font-medium">
              {t.stats.clubsLabel}
            </span>
          </div>

          <div className="p-6 bg-white dark:bg-[#1A1816]/70 border border-stone-200 dark:border-[#C5A880]/15 rounded-xl shadow-sm flex flex-col justify-between">
            <span className="font-editorial text-3xl sm:text-4xl text-[#8C6B38] dark:text-[#C5A880] font-normal tabular-nums">
              {t.stats.cellar}
            </span>
            <span className="text-xs uppercase tracking-[0.16em] text-[#57534E] dark:text-[#9E9991] mt-2 font-medium">
              {t.stats.cellarLabel}
            </span>
          </div>
        </div>
      </section>

      {/* 2. Editorial Manifesto */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6">
        <span className="text-xs uppercase tracking-[0.3em] text-[#8C6B38] dark:text-[#C5A880] font-semibold block">
          {t.manifestoKicker}
        </span>
        <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] dark:text-[#F5F2EB] font-normal [text-wrap:balance]">
          {t.manifestoTitle}
        </h2>
        <div className="h-[1.5px] w-24 bg-[#8C6B38]/40 dark:bg-[#C5A880]/40 mx-auto rounded-full" />
        <p className="text-base sm:text-lg text-[#57534E] dark:text-[#9E9991] leading-relaxed [text-wrap:balance] max-w-2xl mx-auto font-light">
          {t.manifestoBody}
        </p>
      </section>

      {/* 3. Signature Pillars: The Quad Core Experiences */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200 dark:border-[#C5A880]/15">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8C6B38] dark:text-[#C5A880] font-semibold">
              {t.pillarsKicker}
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#1C1917] dark:text-[#F5F2EB]">
              {t.pillarsTitle}
            </h2>
          </div>
          <button
            onClick={() => onNavigate('experiences')}
            className="text-xs uppercase tracking-[0.2em] text-[#8C6B38] dark:text-[#C5A880] hover:text-[#B38F56] dark:hover:text-[#DFCAAA] flex items-center gap-2 font-semibold group transition-colors"
          >
            <span>{t.viewAllExperiences}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Pillar Cards with rounded-2xl */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <div className="bg-white dark:bg-[#1A1816] border border-stone-200 dark:border-[#C5A880]/15 rounded-2xl p-7 space-y-4 hover:border-[#8C6B38]/50 dark:hover:border-[#C5A880]/40 transition-all flex flex-col justify-between shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-stone-100 dark:bg-[#24211D] border border-stone-200 dark:border-[#C5A880]/20 flex items-center justify-center text-[#8C6B38] dark:text-[#C5A880]">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="font-editorial text-2xl text-[#1C1917] dark:text-[#F5F2EB]">
                {lang === 'fr' ? 'Haute Table & Cave de Réserve' : 'Haute Gastronomy & Reserve Cellar'}
              </h3>
              <p className="text-xs leading-relaxed text-[#57534E] dark:text-[#9E9991]">
                {lang === 'fr'
                  ? 'Menus dégustation de saison signés par le chef Édouard Laurent, accompagnés des crus de notre cave privée de 14 000 flacons.'
                  : 'Seasonal tasting menus orchestrated by Chef Édouard Laurent, accompanied by private sommelier pairings from our 14,000-bottle vault.'}
              </p>
            </div>
            <div className="pt-4 border-t border-stone-100 dark:border-[#C5A880]/10 text-xs text-[#8C6B38] dark:text-[#C5A880] flex items-center justify-between font-medium">
              <span>The Obsidian Dining Room</span>
              <span>· Daily</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white dark:bg-[#1A1816] border border-stone-200 dark:border-[#C5A880]/15 rounded-2xl p-7 space-y-4 hover:border-[#8C6B38]/50 dark:hover:border-[#C5A880]/40 transition-all flex flex-col justify-between shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-stone-100 dark:bg-[#24211D] border border-stone-200 dark:border-[#C5A880]/20 flex items-center justify-center text-[#8C6B38] dark:text-[#C5A880]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-editorial text-2xl text-[#1C1917] dark:text-[#F5F2EB]">
                {lang === 'fr' ? 'Sanctuaire Thermal Souterrain' : 'Subterranean Thermal Sanctuary'}
              </h3>
              <p className="text-xs leading-relaxed text-[#57534E] dark:text-[#9E9991]">
                {lang === 'fr'
                  ? 'Bassin de vitalité en basalte adouci, saunas de cèdre finlandais, cryothérapie et protocoles métaboliques de régénération.'
                  : 'Honed basalt vitality hydrotherapy baths, Finnish dry cedar saunas, cold plunge cisterns, and metabolic recovery suites for restoration.'}
              </p>
            </div>
            <div className="pt-4 border-t border-stone-100 dark:border-[#C5A880]/10 text-xs text-[#8C6B38] dark:text-[#C5A880] flex items-center justify-between font-medium">
              <span>Thermal Longevity Spa</span>
              <span>· 06:00–22:00</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white dark:bg-[#1A1816] border border-stone-200 dark:border-[#C5A880]/15 rounded-2xl p-7 space-y-4 hover:border-[#8C6B38]/50 dark:hover:border-[#C5A880]/40 transition-all flex flex-col justify-between shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-stone-100 dark:bg-[#24211D] border border-stone-200 dark:border-[#C5A880]/20 flex items-center justify-center text-[#8C6B38] dark:text-[#C5A880]">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-editorial text-2xl text-[#1C1917] dark:text-[#F5F2EB]">
                {lang === 'fr' ? 'Salons de Délibération & Bibliothèque' : 'Discreet Boardrooms & Library'}
              </h3>
              <p className="text-xs leading-relaxed text-[#57534E] dark:text-[#9E9991]">
                {lang === 'fr'
                  ? 'Salles de conférence sécurisées sur le plan acoustique, service de majordome privé et cheminée monumentale de la Grande Bibliothèque.'
                  : 'Acoustically isolated boardrooms with encrypted communications, private butler service, and the wood-burning hearth of the Grand Library.'}
              </p>
            </div>
            <div className="pt-4 border-t border-stone-100 dark:border-[#C5A880]/10 text-xs text-[#8C6B38] dark:text-[#C5A880] flex items-center justify-between font-medium">
              <span>Private Executive Salons</span>
              <span>· Confidential</span>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white dark:bg-[#1A1816] border border-stone-200 dark:border-[#C5A880]/15 rounded-2xl p-7 space-y-4 hover:border-[#8C6B38]/50 dark:hover:border-[#C5A880]/40 transition-all flex flex-col justify-between shadow-sm">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-stone-100 dark:bg-[#24211D] border border-stone-200 dark:border-[#C5A880]/20 flex items-center justify-center text-[#8C6B38] dark:text-[#C5A880]">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-editorial text-2xl text-[#1C1917] dark:text-[#F5F2EB]">
                {lang === 'fr' ? 'Privilèges Réciproques Internationaux' : 'International Reciprocal Privileges'}
              </h3>
              <p className="text-xs leading-relaxed text-[#57534E] dark:text-[#9E9991]">
                {lang === 'fr'
                  ? 'Accès étendu dans 24 clubs privés partenaires à Zurich, Toronto, New York, Tokyo, Milan et Singapour avec facturation unifiée.'
                  : 'Full house privileges extended across 24 affiliated private clubs in Zurich, London, New York, Tokyo, Milan, and Singapore with unified billing.'}
              </p>
            </div>
            <div className="pt-4 border-t border-stone-100 dark:border-[#C5A880]/10 text-xs text-[#8C6B38] dark:text-[#C5A880] flex items-center justify-between font-medium">
              <span>Global Founder Network</span>
              <span>· 24 Cities</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Visual Spotlight: Two-Column Architectural Feature */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch bg-white dark:bg-[#1A1816] border border-stone-200 dark:border-[#C5A880]/20 rounded-2xl overflow-hidden p-8 sm:p-12 shadow-sm">
          {/* Image Column */}
          <div className="relative rounded-xl overflow-hidden min-h-[360px] sm:min-h-[440px]">
            <img
              src={CLUB_IMAGES.library}
              alt="The Grand Library and Fireplace Lounge"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-xs font-serif italic text-[#DFCAAA]">
              {lang === 'fr'
                ? 'Fig. 1 — La Grande Bibliothèque : plus de 4 200 volumes d’exception et salons feutrés.'
                : 'Fig. 1 — The Grand Library: Over 4,200 curated volumes and private fireside seating.'}
            </div>
          </div>

          {/* Text Narrative Column */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#8C6B38] dark:text-[#C5A880] font-semibold">
                {t.curatorialKicker}
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#1C1917] dark:text-[#F5F2EB]">
                {t.curatorialTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#57534E] dark:text-[#9E9991] leading-relaxed">
                {t.curatorialBody}
              </p>
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-3 text-xs text-[#1C1917] dark:text-[#F5F2EB]">
                  <Shield className="w-4 h-4 text-[#8C6B38] dark:text-[#C5A880] shrink-0" />
                  <span>{t.chathamRule}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#1C1917] dark:text-[#F5F2EB]">
                  <Shield className="w-4 h-4 text-[#8C6B38] dark:text-[#C5A880] shrink-0" />
                  <span>{t.nonSolicitation}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#1C1917] dark:text-[#F5F2EB]">
                  <Shield className="w-4 h-4 text-[#8C6B38] dark:text-[#C5A880] shrink-0" />
                  <span>{t.discreetPrivacy}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 dark:border-[#C5A880]/15 flex items-center justify-between">
              <div>
                <span className="text-xs text-[#57534E] dark:text-[#9E9991] block">
                  {lang === 'fr' ? 'Examen des Candidatures' : 'Admissions Intake'}
                </span>
                <span className="text-sm text-[#1C1917] dark:text-[#F5F2EB] font-editorial">
                  {lang === 'fr' ? 'Session Trimestrielle' : 'Quarterly Committee Review'}
                </span>
              </div>
              <button
                onClick={() => onNavigate('the-club')}
                className="text-xs uppercase tracking-[0.18em] text-[#8C6B38] dark:text-[#C5A880] hover:text-[#B38F56] dark:hover:text-[#DFCAAA] flex items-center gap-1 font-semibold"
              >
                <span>{t.readHistory}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Attributable Social Proof / Member Voices */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C6B38] dark:text-[#C5A880] font-semibold">
            {t.testimonialsKicker}
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#1C1917] dark:text-[#F5F2EB]">
            {t.testimonialsTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MEMBER_TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#1A1816] border border-stone-200 dark:border-[#C5A880]/15 p-8 rounded-2xl flex flex-col justify-between space-y-6 shadow-sm"
            >
              <p className="font-serif italic text-base sm:text-lg text-[#1C1917] dark:text-[#DFCAAA] leading-relaxed">
                "{item.quote}"
              </p>
              <div className="pt-4 border-t border-stone-100 dark:border-[#C5A880]/10 space-y-1">
                <p className="font-editorial text-lg text-[#1C1917] dark:text-[#F5F2EB] font-medium">{item.author}</p>
                <p className="text-xs text-[#57534E] dark:text-[#9E9991]">{item.title}, {item.organization}</p>
                <div className="flex items-center gap-2 text-[11px] text-[#8C6B38] dark:text-[#C5A880] pt-1 font-medium">
                  <span>{item.tier}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.yearJoined}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Primary Conversion Banner with rounded-2xl & rounded-full buttons */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="bg-[#1C1917] dark:bg-[#1F1C18] text-[#F5F2EB] border border-stone-300 dark:border-[#C5A880]/30 rounded-2xl p-8 sm:p-14 text-center space-y-6 shadow-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-[#DFCAAA] dark:text-[#C5A880] font-medium">
            {t.bannerKicker}
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#F5F2EB] max-w-2xl mx-auto leading-tight [text-wrap:balance]">
            {t.bannerTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#DFCAAA]/90 max-w-xl mx-auto leading-relaxed font-light">
            {t.bannerBody}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('apply')}
              className="w-full sm:w-auto px-9 py-4 text-xs tracking-[0.2em] uppercase font-semibold text-[#121110] bg-[#C5A880] hover:bg-[#DFCAAA] transition-all rounded-full shadow-md hover:shadow-[#C5A880]/30"
            >
              {t.applyCta}
            </button>
            <button
              onClick={() => onNavigate('membership')}
              className="w-full sm:w-auto px-8 py-4 text-xs tracking-[0.2em] uppercase font-medium text-[#F5F2EB] bg-[#121110]/80 hover:bg-[#121110] border border-[#C5A880]/40 transition-colors rounded-full"
            >
              {t.compareTiers}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
