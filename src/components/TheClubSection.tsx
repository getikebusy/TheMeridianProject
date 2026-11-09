/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageSection, Facility } from '../types';
import { CLUB_FACILITIES, CLUB_IMAGES } from '../data/clubData';
import { Clock, Users, ArrowRight, X } from 'lucide-react';
import { Language, translations } from '../i18n/translations';

interface TheClubSectionProps {
  onNavigate: (section: PageSection) => void;
  lang: Language;
}

export const TheClubSection: React.FC<TheClubSectionProps> = ({ onNavigate, lang }) => {
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const t = translations[lang].club;

  return (
    <div className="pt-24 pb-20 space-y-24 transition-colors duration-300">
      {/* 1. Chapter Header */}
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

      {/* 2. Historic Narrative & Philosophy (Two Column) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#1C1917] dark:text-[#F5F2EB]">
              {t.heritageTitle}
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#57534E] dark:text-[#9E9991] leading-relaxed">
              <p>{t.heritageP1}</p>
              <p>{t.heritageP2}</p>
            </div>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-[#1A1816] border border-stone-200 dark:border-[#C5A880]/15 rounded-xl shadow-sm">
                <span className="text-xs uppercase tracking-wider text-[#8C6B38] dark:text-[#C5A880] block font-semibold">
                  {t.discretionTitle}
                </span>
                <p className="text-xs text-[#57534E] dark:text-[#9E9991] mt-1.5 leading-relaxed">
                  {t.discretionDesc}
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-[#1A1816] border border-stone-200 dark:border-[#C5A880]/15 rounded-xl shadow-sm">
                <span className="text-xs uppercase tracking-wider text-[#8C6B38] dark:text-[#C5A880] block font-semibold">
                  {t.hospitalityTitle}
                </span>
                <p className="text-xs text-[#57534E] dark:text-[#9E9991] mt-1.5 leading-relaxed">
                  {t.hospitalityDesc}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-stone-200 dark:border-[#C5A880]/20 bg-white dark:bg-[#1A1816] shadow-xl">
              <img
                src={CLUB_IMAGES.hero}
                alt="Architectural exterior of The Meridian Club"
                referrerPolicy="no-referrer"
                className="w-full h-[480px] object-cover"
              />
              <div className="p-5 bg-white dark:bg-[#1A1816] border-t border-stone-200 dark:border-[#C5A880]/15 space-y-1">
                <p className="font-editorial text-base text-[#1C1917] dark:text-[#F5F2EB] font-medium">{t.facadeCaptionTitle}</p>
                <p className="text-xs text-[#57534E] dark:text-[#9E9991]">{t.facadeCaptionDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Facilities Directory & Interactive Explorer */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-stone-200 dark:border-[#C5A880]/15">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8C6B38] dark:text-[#C5A880] font-semibold">
              {t.facilitiesKicker}
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#1C1917] dark:text-[#F5F2EB]">
              {t.facilitiesTitle}
            </h2>
          </div>
          <p className="text-xs text-[#57534E] dark:text-[#9E9991] max-w-sm">
            {t.facilitiesSubtitle}
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CLUB_FACILITIES.map((facility) => (
            <div
              key={facility.id}
              onClick={() => setSelectedFacility(facility)}
              className="group bg-white dark:bg-[#1A1816] border border-stone-200 dark:border-[#C5A880]/20 hover:border-[#8C6B38] dark:hover:border-[#C5A880]/60 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between shadow-sm"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#DFCAAA]">
                  <span className="flex items-center gap-1.5 bg-[#121110]/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 text-white">
                    <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                    {facility.hours}
                  </span>
                  {facility.capacity && (
                    <span className="flex items-center gap-1.5 bg-[#121110]/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 text-white">
                      <Users className="w-3.5 h-3.5 text-[#C5A880]" />
                      {facility.capacity}
                    </span>
                  )}
                </div>
              </div>

              <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-editorial text-2xl text-[#1C1917] dark:text-[#F5F2EB] group-hover:text-[#8C6B38] dark:group-hover:text-[#C5A880] transition-colors">
                    {facility.name}
                  </h3>
                  <p className="text-xs text-[#8C6B38] dark:text-[#C5A880] tracking-wide font-medium">
                    {facility.subtitle}
                  </p>
                  <p className="text-xs text-[#57534E] dark:text-[#9E9991] leading-relaxed line-clamp-3">
                    {facility.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 dark:border-[#C5A880]/15 flex items-center justify-between text-xs">
                  <span className="text-[#57534E] dark:text-[#9E9991] italic truncate max-w-[240px]">
                    {facility.etiquette}
                  </span>
                  <span className="text-[#8C6B38] dark:text-[#C5A880] font-semibold flex items-center gap-1 shrink-0 group-hover:translate-x-1 transition-transform">
                    {t.viewSpecs} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. House Etiquette & Code of Fellowship */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="bg-white dark:bg-[#1A1816] border border-stone-200 dark:border-[#C5A880]/20 p-8 sm:p-12 rounded-2xl space-y-8 shadow-sm">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8C6B38] dark:text-[#C5A880] font-semibold">
              {t.houseRulesKicker}
            </span>
            <h2 className="font-editorial text-3xl text-[#1C1917] dark:text-[#F5F2EB]">
              {t.houseRulesTitle}
            </h2>
            <p className="text-xs text-[#57534E] dark:text-[#9E9991] leading-relaxed">
              {t.houseRulesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 bg-stone-50 dark:bg-[#24211D]/60 border border-stone-200/70 dark:border-[#C5A880]/10 rounded-xl space-y-2">
              <span className="text-xs font-semibold text-[#1C1917] dark:text-[#F5F2EB] uppercase tracking-wider block">
                {t.rule1Title}
              </span>
              <p className="text-xs text-[#57534E] dark:text-[#9E9991] leading-relaxed">
                {t.rule1Desc}
              </p>
            </div>

            <div className="p-6 bg-stone-50 dark:bg-[#24211D]/60 border border-stone-200/70 dark:border-[#C5A880]/10 rounded-xl space-y-2">
              <span className="text-xs font-semibold text-[#1C1917] dark:text-[#F5F2EB] uppercase tracking-wider block">
                {t.rule2Title}
              </span>
              <p className="text-xs text-[#57534E] dark:text-[#9E9991] leading-relaxed">
                {t.rule2Desc}
              </p>
            </div>

            <div className="p-6 bg-stone-50 dark:bg-[#24211D]/60 border border-stone-200/70 dark:border-[#C5A880]/10 rounded-xl space-y-2">
              <span className="text-xs font-semibold text-[#1C1917] dark:text-[#F5F2EB] uppercase tracking-wider block">
                {t.rule3Title}
              </span>
              <p className="text-xs text-[#57534E] dark:text-[#9E9991] leading-relaxed">
                {t.rule3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Transition to Membership Conversion with rounded-full button */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6">
        <h2 className="font-editorial text-3xl sm:text-4xl text-[#1C1917] dark:text-[#F5F2EB]">
          {t.experienceCtaTitle}
        </h2>
        <p className="text-sm text-[#57534E] dark:text-[#9E9991] max-w-lg mx-auto">
          {t.experienceCtaSubtitle}
        </p>
        <button
          onClick={() => onNavigate('membership')}
          className="px-8 py-4 text-xs tracking-[0.2em] uppercase font-semibold text-[#121110] bg-[#C5A880] hover:bg-[#DFCAAA] transition-colors rounded-full shadow-md"
        >
          {t.experienceCtaBtn}
        </button>
      </section>

      {/* Facility Detail Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white dark:bg-[#1A1816] text-[#1C1917] dark:text-[#F5F2EB] border border-stone-300 dark:border-[#C5A880]/40 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 relative text-left shadow-2xl">
            <button
              onClick={() => setSelectedFacility(null)}
              className="absolute top-6 right-6 text-[#57534E] dark:text-[#9E9991] hover:text-[#1C1917] dark:hover:text-[#F5F2EB] p-2 rounded-full hover:bg-stone-100 dark:hover:bg-[#24211D]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.2em] text-[#8C6B38] dark:text-[#C5A880] font-semibold">
                House Space Dossier
              </span>
              <h3 className="font-editorial text-3xl text-[#1C1917] dark:text-[#F5F2EB]">
                {selectedFacility.name}
              </h3>
              <p className="text-xs text-[#8C6B38] dark:text-[#DFCAAA]">{selectedFacility.subtitle}</p>
            </div>

            <div className="rounded-xl overflow-hidden h-56 sm:h-64 border border-stone-200 dark:border-[#C5A880]/20">
              <img
                src={selectedFacility.image}
                alt={selectedFacility.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm text-[#57534E] dark:text-[#9E9991] leading-relaxed">
              {selectedFacility.description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-[0.16em] text-[#1C1917] dark:text-[#F5F2EB] font-semibold">
                Room Architecture & Amenities
              </h4>
              <ul className="space-y-2 text-xs text-[#57534E] dark:text-[#9E9991]">
                {selectedFacility.specifications.map((spec, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#8C6B38] dark:text-[#C5A880] font-bold">·</span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-stone-50 dark:bg-[#24211D] border border-stone-200 dark:border-[#C5A880]/15 rounded-xl space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-[#57534E] dark:text-[#9E9991]">Operating Schedule:</span>
                <span className="text-[#1C1917] dark:text-[#F5F2EB] font-medium">{selectedFacility.hours}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#57534E] dark:text-[#9E9991]">Access Etiquette:</span>
                <span className="text-[#8C6B38] dark:text-[#DFCAAA] text-right max-w-xs">{selectedFacility.etiquette}</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                onClick={() => setSelectedFacility(null)}
                className="px-6 py-2.5 text-xs text-[#57534E] dark:text-[#9E9991] hover:text-[#1C1917] dark:hover:text-[#F5F2EB] transition-colors rounded-full"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedFacility(null);
                  onNavigate('apply');
                }}
                className="px-7 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#121110] bg-[#C5A880] hover:bg-[#DFCAAA] transition-colors rounded-full shadow-sm"
              >
                Apply for Access
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
