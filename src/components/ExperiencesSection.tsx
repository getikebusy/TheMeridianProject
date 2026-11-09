/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageSection } from '../types';
import { CLUB_IMAGES } from '../data/clubData';
import { Utensils, Sparkles, Building2, ArrowRight, Check, Wine, Shield } from 'lucide-react';
import { Language, translations } from '../i18n/translations';

interface ExperiencesSectionProps {
  onNavigate: (section: PageSection) => void;
  lang: Language;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({ onNavigate, lang }) => {
  const [activeTab, setActiveTab] = useState<'dining' | 'wellness' | 'gatherings'>('dining');
  const t = translations[lang].experiences;

  return (
    <div className="pt-24 pb-20 space-y-24 transition-colors duration-300">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8C6B38] dark:text-[#C5A880] font-semibold">
            <span>{t.chapter}</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#1C1917] dark:text-[#F5F2EB] font-normal leading-tight">
            {t.title}
          </h1>
          <p className="text-base sm:text-lg text-[#57534E] dark:text-[#9E9991] font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Interactive Experience Switcher with rounded-full */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Tab Controls (Functional Buttons conforming to §1.A) */}
        <div className="flex items-center gap-2 p-1.5 bg-stone-100 dark:bg-[#1A1816] border border-stone-200 dark:border-[#C5A880]/20 rounded-full max-w-xl mx-auto shadow-inner">
          <button
            onClick={() => setActiveTab('dining')}
            className={`flex-1 py-3 px-5 text-xs uppercase tracking-[0.16em] font-medium rounded-full transition-all flex items-center justify-center gap-2 ${
              activeTab === 'dining'
                ? 'bg-[#C5A880] text-[#121110] font-semibold shadow-md'
                : 'text-[#57534E] dark:text-[#9E9991] hover:text-[#1C1917] dark:hover:text-[#F5F2EB]'
            }`}
          >
            <Utensils className="w-3.5 h-3.5" />
            <span>{t.tabDining}</span>
          </button>
          <button
            onClick={() => setActiveTab('wellness')}
            className={`flex-1 py-3 px-5 text-xs uppercase tracking-[0.16em] font-medium rounded-full transition-all flex items-center justify-center gap-2 ${
              activeTab === 'wellness'
                ? 'bg-[#C5A880] text-[#121110] font-semibold shadow-md'
                : 'text-[#57534E] dark:text-[#9E9991] hover:text-[#1C1917] dark:hover:text-[#F5F2EB]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.tabWellness}</span>
          </button>
          <button
            onClick={() => setActiveTab('gatherings')}
            className={`flex-1 py-3 px-5 text-xs uppercase tracking-[0.16em] font-medium rounded-full transition-all flex items-center justify-center gap-2 ${
              activeTab === 'gatherings'
                ? 'bg-[#C5A880] text-[#121110] font-semibold shadow-md'
                : 'text-[#57534E] dark:text-[#9E9991] hover:text-[#1C1917] dark:hover:text-[#F5F2EB]'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>{t.tabGatherings}</span>
          </button>
        </div>

        {/* Tab 1: Fine Dining & Cellar */}
        {activeTab === 'dining' && (
          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-white dark:bg-[#1A1816] border border-stone-200 dark:border-[#C5A880]/20 rounded-2xl p-8 sm:p-12 shadow-sm">
              <div className="lg:col-span-6 relative min-h-[400px] rounded-xl overflow-hidden border border-stone-200 dark:border-[#C5A880]/15">
                <img
                  src={CLUB_IMAGES.dining}
                  alt="Fine dining table setting at The Meridian Club"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs font-serif italic text-[#DFCAAA]">
                  The Obsidian Dining Room — Belgian linens, silver service, and candlelit privacy.
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#8C6B38] dark:text-[#C5A880] font-semibold">
                    Gastronomic Direction
                  </span>
                  <h2 className="font-editorial text-3xl sm:text-4xl text-[#1C1917] dark:text-[#F5F2EB]">
                    The Culinary Philosophy of Chef Édouard Laurent
                  </h2>
                  <p className="text-sm text-[#57534E] dark:text-[#9E9991] leading-relaxed">
                    Prior to joining The Meridian Club, Chef Laurent earned three Michelin stars across Paris and Tokyo. At Meridian, he has stripped away theatrical pretension in favor of pure culinary provenance: Highland wild venison, hand-dived Scallops from the Western Isles, and heirloom organic produce cultivated exclusively on our partner estate.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-start gap-2 text-xs text-[#1C1917] dark:text-[#DFCAAA]">
                      <Wine className="w-4 h-4 text-[#8C6B38] dark:text-[#C5A880] shrink-0 mt-0.5" />
                      <span>14,000-bottle subterranean temperature-controlled cellar overseen by Master Sommelier Margaux De la Tour</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-[#1C1917] dark:text-[#DFCAAA]">
                      <Shield className="w-4 h-4 text-[#8C6B38] dark:text-[#C5A880] shrink-0 mt-0.5" />
                      <span>Dedicated private member cellar lockers with personalized inventory reporting</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-stone-200 dark:border-[#C5A880]/15 flex items-center justify-between">
                  <div className="text-xs">
                    <span className="text-[#57534E] dark:text-[#9E9991] block">Service Hours</span>
                    <span className="text-[#1C1917] dark:text-[#F5F2EB] font-medium">Lunch 12:00–15:00 · Dinner 18:30–23:00</span>
                  </div>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-6 py-2.5 text-xs uppercase tracking-wider text-[#121110] bg-[#C5A880] hover:bg-[#DFCAAA] font-semibold flex items-center gap-2 rounded-full shadow-sm transition-all"
                  >
                    <span>{t.reserveTasting}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Degustation Menu Card Preview */}
            <div className="max-w-3xl mx-auto bg-stone-50 dark:bg-[#1F1C18] border border-stone-200 dark:border-[#C5A880]/25 p-8 sm:p-12 rounded-2xl text-center space-y-8 shadow-sm">
              <div className="space-y-1">
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#8C6B38] dark:text-[#C5A880] font-semibold">
                  Autumn Tasting Carte Blanche
                </span>
                <h3 className="font-editorial text-3xl text-[#1C1917] dark:text-[#F5F2EB]">
                  {t.sampleMenuTitle}
                </h3>
                <p className="text-xs font-serif italic text-[#57534E] dark:text-[#9E9991]">
                  {t.sampleMenuSubtitle}
                </p>
              </div>

              <div className="space-y-6 max-w-lg mx-auto text-left divide-y divide-stone-200 dark:divide-[#C5A880]/10">
                <div className="pt-4 first:pt-0 space-y-1">
                  <div className="flex justify-between text-xs sm:text-sm font-medium text-[#1C1917] dark:text-[#F5F2EB]">
                    <span>Imperial Ossetra Caviar & Smoked Bone Marrow Tartlet</span>
                    <span className="text-[#8C6B38] dark:text-[#C5A880] font-semibold">I</span>
                  </div>
                  <p className="text-xs text-[#57534E] dark:text-[#9E9991]">Krug Grande Cuvée 171ème Édition</p>
                </div>

                <div className="pt-4 space-y-1">
                  <div className="flex justify-between text-xs sm:text-sm font-medium text-[#1C1917] dark:text-[#F5F2EB]">
                    <span>Hand-Dived Orkney Scallop & White Truffle Velouté</span>
                    <span className="text-[#8C6B38] dark:text-[#C5A880] font-semibold">II</span>
                  </div>
                  <p className="text-xs text-[#57534E] dark:text-[#9E9991]">2020 Domaine Leflaive Puligny-Montrachet</p>
                </div>

                <div className="pt-4 space-y-1">
                  <div className="flex justify-between text-xs sm:text-sm font-medium text-[#1C1917] dark:text-[#F5F2EB]">
                    <span>Roast Balmoral Estate Roe Deer with Fermented Blackberry</span>
                    <span className="text-[#8C6B38] dark:text-[#C5A880] font-semibold">III</span>
                  </div>
                  <p className="text-xs text-[#57534E] dark:text-[#9E9991]">2010 Château Pichon Longueville Comtesse de Lalande</p>
                </div>

                <div className="pt-4 space-y-1">
                  <div className="flex justify-between text-xs sm:text-sm font-medium text-[#1C1917] dark:text-[#F5F2EB]">
                    <span>Aged Comté Grand Cru Reserve with Wild Thyme Honeycomb</span>
                    <span className="text-[#8C6B38] dark:text-[#C5A880] font-semibold">IV</span>
                  </div>
                  <p className="text-xs text-[#57534E] dark:text-[#9E9991]">1997 Château d’Yquem Sauternes</p>
                </div>
              </div>

              <div className="pt-4 text-xs text-[#57534E] dark:text-[#9E9991]/80 italic">
                {lang === 'fr'
                  ? 'Toutes exigences alimentaires intégrées avec prévenance sur simple notification au concierge.'
                  : 'Dietary requirements accommodated seamlessly with prior notice to the private concierge.'}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Thermal Wellness */}
        {activeTab === 'wellness' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-white dark:bg-[#1A1816] border border-stone-200 dark:border-[#C5A880]/20 rounded-2xl p-8 sm:p-12 shadow-sm">
            <div className="lg:col-span-6 relative min-h-[400px] rounded-xl overflow-hidden border border-stone-200 dark:border-[#C5A880]/15">
              <img
                src={CLUB_IMAGES.wellness}
                alt="Subterranean basalt wellness sanctuary"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-serif italic text-[#DFCAAA]">
                The Basalt Vitality Pool — 38°C mineral waters and serene subterranean silence.
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.25em] text-[#8C6B38] dark:text-[#C5A880] font-semibold">
                  Somatic Restoration
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl text-[#1C1917] dark:text-[#F5F2EB]">
                  Subterranean Longevity & Thermal Sanctuary
                </h2>
                <p className="text-sm text-[#57534E] dark:text-[#9E9991] leading-relaxed">
                  Engineered into the deep limestone substructure of the clubhouse, the Sanctuary offers an oasis from screen fatigue, chronic stress, and cognitive overload. Designed alongside sports physiologists and neuroscientists, our thermal hydrotherapy sequence restores autonomic nervous system balance.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 bg-stone-50 dark:bg-[#24211D] border border-stone-200 dark:border-[#C5A880]/15 rounded-xl">
                    <span className="text-xs font-semibold text-[#1C1917] dark:text-[#F5F2EB] block">Contrast Hydrotherapy</span>
                    <span className="text-[11px] text-[#57534E] dark:text-[#9E9991]">38°C Vitality Bath paired with 9°C Cold Cistern Plunge</span>
                  </div>
                  <div className="p-4 bg-stone-50 dark:bg-[#24211D] border border-stone-200 dark:border-[#C5A880]/15 rounded-xl">
                    <span className="text-xs font-semibold text-[#1C1917] dark:text-[#F5F2EB] block">Finnish Cedar Sauna</span>
                    <span className="text-[11px] text-[#57534E] dark:text-[#9E9991]">Dry ambient 90°C thermal exposure with eucalyptus infusion</span>
                  </div>
                  <div className="p-4 bg-stone-50 dark:bg-[#24211D] border border-stone-200 dark:border-[#C5A880]/15 rounded-xl">
                    <span className="text-xs font-semibold text-[#1C1917] dark:text-[#F5F2EB] block">Infrared & Cryo Suites</span>
                    <span className="text-[11px] text-[#57534E] dark:text-[#9E9991]">Full-spectrum cellular regeneration and muscle recovery</span>
                  </div>
                  <div className="p-4 bg-stone-50 dark:bg-[#24211D] border border-stone-200 dark:border-[#C5A880]/15 rounded-xl">
                    <span className="text-xs font-semibold text-[#1C1917] dark:text-[#F5F2EB] block">Executive Physio</span>
                    <span className="text-[11px] text-[#57534E] dark:text-[#9E9991]">Bespoke lymphatic drainage and sports rehabilitation</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-200 dark:border-[#C5A880]/15 flex items-center justify-between">
                <div className="text-xs">
                  <span className="text-[#57534E] dark:text-[#9E9991] block">Guest Policy</span>
                  <span className="text-[#1C1917] dark:text-[#F5F2EB] font-medium">Complimentary Robes, Towels & Herbals</span>
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-2.5 text-xs uppercase tracking-wider text-[#121110] bg-[#C5A880] hover:bg-[#DFCAAA] font-semibold flex items-center gap-2 rounded-full shadow-sm transition-all"
                >
                  <span>{t.bookSpa}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Private Salons & Gatherings */}
        {activeTab === 'gatherings' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-white dark:bg-[#1A1816] border border-stone-200 dark:border-[#C5A880]/20 rounded-2xl p-8 sm:p-12 shadow-sm">
            <div className="lg:col-span-6 relative min-h-[400px] rounded-xl overflow-hidden border border-stone-200 dark:border-[#C5A880]/15">
              <img
                src={CLUB_IMAGES.library}
                alt="Executive salon and private boardrooms"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-serif italic text-[#DFCAAA]">
                The Private Salons — Tailored for high-stakes deliberations and confidential retreats.
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.25em] text-[#8C6B38] dark:text-[#C5A880] font-semibold">
                  Confidential Assembly
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl text-[#1C1917] dark:text-[#F5F2EB]">
                  Boardroom Convenings & Private Banquets
                </h2>
                <p className="text-sm text-[#57534E] dark:text-[#9E9991] leading-relaxed">
                  When delicate negotiations, board meetings, or celebratory family banquets demand complete seclusion, our private rooms provide discreet service and state-of-the-art technological security. Every room features acoustic insulation, private elevator access, and dedicated personal butler attendants.
                </p>

                <div className="space-y-2.5 pt-2 text-xs text-[#1C1917] dark:text-[#DFCAAA]">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#8C6B38] dark:text-[#C5A880] shrink-0 mt-0.5" />
                    <span>The Arthur Meridian Boardroom: Seating for up to 18 with 4K cryptographic video teleconferencing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#8C6B38] dark:text-[#C5A880] shrink-0 mt-0.5" />
                    <span>The Alcove Dining Room: Intimate dinners for 8 to 16 with custom menus and dedicated sommelier</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#8C6B38] dark:text-[#C5A880] shrink-0 mt-0.5" />
                    <span>The Grand Library Buyout: Evening private receptions for up to 60 distinguished guests</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-200 dark:border-[#C5A880]/15 flex items-center justify-between">
                <div className="text-xs">
                  <span className="text-[#57534E] dark:text-[#9E9991] block">Event Directorship</span>
                  <span className="text-[#1C1917] dark:text-[#F5F2EB] font-medium">Bespoke Catering & Sommelier Curated</span>
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-2.5 text-xs uppercase tracking-wider text-[#121110] bg-[#C5A880] hover:bg-[#DFCAAA] font-semibold flex items-center gap-2 rounded-full shadow-sm transition-all"
                >
                  <span>{t.enquireEvent}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 3. Conversion Hook with rounded-full */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6">
        <h2 className="font-editorial text-3xl sm:text-4xl text-[#1C1917] dark:text-[#F5F2EB]">
          {lang === 'fr' ? 'Faites l’Expérience du Meridian en Tant que Membre' : 'Experience Meridian Firsthand'}
        </h2>
        <p className="text-sm text-[#57534E] dark:text-[#9E9991] max-w-lg mx-auto">
          {lang === 'fr'
            ? 'Les membres bénéficient d’un accès sans restriction aux réservations de tables, aux bains thermaux et aux salons de réunion.'
            : 'Members enjoy unrestricted access to dining tables, thermal facilities, and private salon bookings.'}
        </p>
        <button
          onClick={() => onNavigate('apply')}
          className="px-9 py-4 text-xs tracking-[0.2em] uppercase font-semibold text-[#121110] bg-[#C5A880] hover:bg-[#DFCAAA] transition-colors rounded-full shadow-md"
        >
          {lang === 'fr' ? 'Déposer une Candidature d’Adhésion' : 'Begin Membership Application'}
        </button>
      </section>
    </div>
  );
};
