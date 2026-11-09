/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PageSection } from '../types';
import { Language, translations } from '../i18n/translations';
import { NewsletterSubscription } from './NewsletterSubscription';

interface FooterProps {
  onNavigate: (section: PageSection) => void;
  onOpenStatusModal: () => void;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenStatusModal, lang }) => {
  const t = translations[lang].footer;
  const navT = translations[lang].nav;

  return (
    <footer className="bg-[#0C0B0A] dark:bg-[#0C0B0A] text-[#9E9991] dark:text-[#A8A29E] border-t border-[#C5A880]/20 pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Newsletter Subscription Component in Footer */}
        <NewsletterSubscription lang={lang} />

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-[#C5A880]/15">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <span className="font-editorial text-2xl tracking-[0.2em] font-medium text-[#F5F2EB] block">
              THE MERIDIAN
            </span>
            <p className="text-xs leading-relaxed text-[#DFCAAA]/80 max-w-xs font-light">
              {t.brandDesc}
            </p>
            <div className="pt-2 text-[11px] uppercase tracking-widest text-[#C5A880]">
              {t.district}
            </div>
          </div>

          {/* House Directory */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5F2EB]">
              {t.clubDirectory}
            </p>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => {
                    onNavigate('the-club');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#C5A880] transition-colors text-left"
                >
                  {lang === 'fr' ? 'Histoire et Espaces' : 'History & Facilities'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('experiences');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#C5A880] transition-colors text-left"
                >
                  {lang === 'fr' ? 'Haute Table et Cave' : 'Dining & The Cellar'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('experiences');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#C5A880] transition-colors text-left"
                >
                  {lang === 'fr' ? 'Sanctuaire Thermal et Soins' : 'Thermal Sanctuary & Spa'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('events');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#C5A880] transition-colors text-left"
                >
                  {lang === 'fr' ? 'Salons Privés et Colloques' : 'Curated Events & Salons'}
                </button>
              </li>
            </ul>
          </div>

          {/* Membership & Governance */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5F2EB]">
              {t.admissions}
            </p>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => {
                    onNavigate('membership');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#C5A880] transition-colors text-left"
                >
                  {lang === 'fr' ? 'Niveaux et Privilèges' : 'Tiers & Privileges'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('apply');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#C5A880] transition-colors text-left"
                >
                  {lang === 'fr' ? 'Formulaire de Candidature' : 'Membership Application'}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenStatusModal}
                  className="hover:text-[#C5A880] transition-colors text-[#C5A880] text-left font-medium"
                >
                  {lang === 'fr' ? 'Suivi du Dossier de Candidat' : 'Track Dossier Status'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('the-club');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#C5A880] transition-colors text-left"
                >
                  {lang === 'fr' ? 'Code de Bienséance' : 'House Rules & Protocol'}
                </button>
              </li>
            </ul>
          </div>

          {/* House Address & Etiquette */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5F2EB]">
              {t.secretariat}
            </p>
            <div className="text-xs space-y-1.5 leading-relaxed">
              <p className="text-[#F5F2EB]">14 St. James’s Crescent</p>
              <p>SW1A 1EA · London & Affiliates</p>
              <p className="pt-2 text-[#DFCAAA]">
                admissions@meridianclub.com
              </p>
              <p>+44 (0) 20 7946 0890</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#9E9991]/80">
          <p>© {new Date().getFullYear()} {t.allRightsReserved}</p>
          <div className="flex items-center gap-6">
            <span>{t.appointmentNotice}</span>
            <span aria-hidden="true">·</span>
            <span>{t.discretionNotice}</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#C5A880] transition-colors"
            >
              {navT.contact}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
