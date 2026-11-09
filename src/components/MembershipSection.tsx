/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageSection } from '../types';
import { MEMBERSHIP_TIERS, MEMBERSHIP_PROCESS_STEPS } from '../data/clubData';
import { Check, ShieldCheck, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Language, translations } from '../i18n/translations';

interface MembershipSectionProps {
  onNavigate: (section: PageSection) => void;
  onSelectTierAndApply: (tierId: string) => void;
  lang: Language;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({
  onNavigate,
  onSelectTierAndApply,
  lang
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const t = translations[lang].membership;

  const faqs = lang === 'fr' ? [
    {
      q: 'Quelles sont les qualifications évaluées par le Comité des Admissions ?',
      a: 'Le Comité des Admissions regarde au-delà des bilans comptables et des titres d’entreprise. Nous recherchons des personnes à l’esprit vif, d’une intégrité reconnue et d’une grande stature professionnelle qui souhaitent s’impliquer dans nos cercles intellectuels et mécénats culturels. Nous accueillons fondateurs, hauts dirigeants, chercheurs et bâtisseurs.'
    },
    {
      q: 'Que faire si je ne connais pas encore deux membres actifs pour parrainer ma candidature ?',
      a: 'Bien que le parrainage par deux membres accélère le processus, les candidats sans relations directes préalables peuvent déposer leur candidature de manière indépendante. Sélectionnez l’option « Examen Direct par le Comité ». Un Gouverneur du Club conviendra d’un entretien privé informel.'
    },
    {
      q: 'Comment s’articule la réciprocité internationale avec les clubs affiliés ?',
      a: 'Les membres Fondateur Mondial et Membre Bienfaiteur reçoivent des lettres d’introduction leur conférant un accès direct aux 24 clubs partenaires à Zurich, Toronto, New York, Tokyo, Paris et Singapour. Les notes de frais sont consolidées sur votre compte Meridian principal.'
    },
    {
      q: 'Des privilèges conjoints ou familiaux sont-ils inclus ?',
      a: 'Oui. Le niveau Membre Bienfaiteur inclut automatiquement une co-adhésion pour le conjoint. Pour les niveaux Exécutif Résident et Fondateur Mondial, un laissez-passer pour le conjoint peut être ajouté lors de l’admission.'
    },
    {
      q: 'Quel est l’effectif maximal et la fréquence des admissions ?',
      a: 'Pour préserver une atmosphère intimiste et garantir la disponibilité immédiate de nos espaces, l’effectif est strictement plafonné à 450 membres. Le Comité des Admissions siège tous les deux mois pour pourvoir les places vacantes.'
    }
  ] : [
    {
      q: 'What are the core qualifications the Admissions Committee evaluates?',
      a: 'The Admissions Committee looks beyond balance sheets and corporate titles. We seek individuals of intellectual vitality, proven character, and high professional standing who actively wish to contribute to our discussions and cultural programs. We value founders, enterprise executives, architects, scientific researchers, and creative leaders.'
    },
    {
      q: 'What if I do not currently have two club members to propose my application?',
      a: 'While candidate endorsement by two active members accelerates processing, candidates of exceptional merit without existing personal connections may apply independently. Select the “Admissions Committee Review” option in the application workflow. A Club Governor will conduct an introductory private conversation.'
    },
    {
      q: 'How does reciprocal access work across international partner clubs?',
      a: 'Global Founder and Patron Fellow members receive letters of introduction providing full member privileges across 24 sister clubs in cities including Zurich, Tokyo, Paris, New York, Milan, and Singapore. Charges are consolidated to your primary Meridian house account.'
    },
    {
      q: 'Are spousal or partner privileges available?',
      a: 'Yes. Patron Fellow membership includes full spousal co-membership automatically. For Resident Executive and Global Founder tiers, spousal access passes may be added during the onboarding process at preferred rates.'
    },
    {
      q: 'What is the roster limit and admissions frequency?',
      a: 'To guarantee an unhurried atmosphere where reservations are always available and privacy is preserved, the Resident Roster is permanently capped at 450 members. The Admissions Committee convenes bi-monthly to review vacancies as they arise.'
    }
  ];

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

      {/* 2. Tiers Comparison Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {MEMBERSHIP_TIERS.map((tier) => {
            const isHighlighted = tier.isHighlighted;
            return (
              <div
                key={tier.id}
                className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  isHighlighted
                    ? 'bg-[#FDFBF7] dark:bg-[#1F1C18] border-2 border-[#8C6B38] dark:border-[#C5A880] shadow-xl shadow-[#8C6B38]/10 dark:shadow-[#C5A880]/10'
                    : 'bg-white dark:bg-[#1A1816] border border-stone-200 dark:border-[#C5A880]/20 hover:border-[#8C6B38]/40 dark:hover:border-[#C5A880]/40 shadow-sm'
                }`}
              >
                {isHighlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#8C6B38] dark:bg-[#C5A880] text-white dark:text-[#121110] text-[10px] tracking-[0.2em] uppercase font-bold px-4 py-1 rounded-full whitespace-nowrap shadow-sm">
                    {t.popularBadge}
                  </div>
                )}

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-editorial text-2xl text-[#1C1917] dark:text-[#F5F2EB]">{tier.name}</h3>
                    <p className="text-xs text-[#57534E] dark:text-[#9E9991] leading-relaxed min-h-[40px]">
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Financial dues block */}
                  <div className="py-4 border-y border-stone-100 dark:border-[#C5A880]/15 space-y-1">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-[#57534E] dark:text-[#9E9991]">{t.annualDues}</span>
                      <span className="font-editorial text-2xl text-[#1C1917] dark:text-[#F5F2EB] font-medium tabular-nums">
                        {tier.annualDues}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between text-xs text-[#57534E]/80 dark:text-[#9E9991]/80">
                      <span>{t.initiationFee}</span>
                      <span className="tabular-nums">{tier.initiationFee}</span>
                    </div>
                  </div>

                  {/* Ideal Candidate Profile */}
                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-[#8C6B38] dark:text-[#C5A880] font-semibold block">
                      {t.candidateProfile}
                    </span>
                    <p className="text-xs text-[#57534E] dark:text-[#DFCAAA]/80 leading-relaxed">
                      {tier.idealFor}
                    </p>
                  </div>

                  {/* Key Privileges */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#1C1917] dark:text-[#F5F2EB] font-semibold block">
                      {t.corePrivileges}
                    </span>
                    <ul className="space-y-2 text-xs text-[#57534E] dark:text-[#9E9991]">
                      {tier.privileges.map((p, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#8C6B38] dark:text-[#C5A880] shrink-0 mt-0.5" />
                          <span className="leading-snug">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Exclusive Features */}
                  <div className="space-y-2 pt-2 border-t border-stone-100 dark:border-[#C5A880]/10">
                    <span className="text-[11px] uppercase tracking-wider text-[#8C6B38] dark:text-[#C5A880] font-semibold block">
                      {t.distinctiveAmenities}
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#1C1917] dark:text-[#DFCAAA]">
                      {tier.exclusiveFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#8C6B38] dark:text-[#C5A880]">·</span>
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => onSelectTierAndApply(tier.id)}
                    className={`w-full py-3.5 text-xs tracking-[0.18em] uppercase font-semibold rounded-full transition-all flex items-center justify-center gap-2 ${
                      isHighlighted
                        ? 'bg-[#C5A880] text-[#121110] hover:bg-[#DFCAAA] shadow-md'
                        : 'bg-stone-100 dark:bg-[#24211D] text-[#1C1917] dark:text-[#F5F2EB] hover:bg-[#C5A880] hover:text-[#121110] border border-stone-300 dark:border-[#C5A880]/20'
                    }`}
                  >
                    <span>{t.applyAs} {tier.name.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. The Admissions Process */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C6B38] dark:text-[#C5A880] font-semibold">
            {t.journeyKicker}
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#1C1917] dark:text-[#F5F2EB]">
            {t.journeyTitle}
          </h2>
          <p className="text-xs text-[#57534E] dark:text-[#9E9991] leading-relaxed">
            {t.journeySubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {MEMBERSHIP_PROCESS_STEPS.map((stepItem, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#1A1816] border border-stone-200 dark:border-[#C5A880]/15 p-6 rounded-2xl space-y-3 flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-2">
                <span className="font-editorial text-3xl text-[#8C6B38] dark:text-[#C5A880] font-normal tabular-nums block">
                  {stepItem.step}
                </span>
                <h4 className="font-editorial text-lg text-[#1C1917] dark:text-[#F5F2EB] font-medium leading-snug">
                  {stepItem.title}
                </h4>
                <p className="text-xs text-[#57534E] dark:text-[#9E9991] leading-relaxed">
                  {stepItem.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-stone-100 dark:border-[#C5A880]/10 flex items-center gap-1.5 text-[11px] text-[#8C6B38] dark:text-[#C5A880] font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t.confidentiality}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Frequently Addressed Enquiries (FAQ Accordion) */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C6B38] dark:text-[#C5A880] font-semibold">
            {t.faqKicker}
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#1C1917] dark:text-[#F5F2EB]">
            {t.faqTitle}
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#1A1816] border border-stone-200 dark:border-[#C5A880]/20 rounded-2xl overflow-hidden transition-colors shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-editorial text-lg text-[#1C1917] dark:text-[#F5F2EB] font-normal">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#8C6B38] dark:text-[#C5A880] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#57534E] dark:text-[#9E9991] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#57534E] dark:text-[#9E9991] leading-relaxed border-t border-stone-100 dark:border-[#C5A880]/10 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Direct Conversion Prompt with rounded-full buttons */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6">
        <h2 className="font-editorial text-3xl sm:text-4xl text-[#1C1917] dark:text-[#F5F2EB]">
          {t.readyTitle}
        </h2>
        <p className="text-sm text-[#57534E] dark:text-[#9E9991] max-w-lg mx-auto">
          {t.readySubtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('apply')}
            className="w-full sm:w-auto px-9 py-4 text-xs tracking-[0.2em] uppercase font-semibold text-[#121110] bg-[#C5A880] hover:bg-[#DFCAAA] transition-colors rounded-full shadow-md"
          >
            {t.startAppBtn}
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-8 py-4 text-xs tracking-[0.2em] uppercase font-medium text-[#1C1917] dark:text-[#F5F2EB] bg-stone-100 dark:bg-[#121110] hover:bg-stone-200 dark:hover:bg-[#1A1816] border border-stone-300 dark:border-[#C5A880]/30 transition-colors rounded-full"
          >
            {t.speakSecretaryBtn}
          </button>
        </div>
      </section>
    </div>
  );
};
