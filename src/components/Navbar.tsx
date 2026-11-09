/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageSection } from '../types';
import { Menu, X, ShieldCheck, Sun, Moon, Globe } from 'lucide-react';
import { Language, translations } from '../i18n/translations';

interface NavbarProps {
  currentSection: PageSection;
  onNavigate: (section: PageSection) => void;
  onOpenStatusModal: () => void;
  lang: Language;
  onToggleLang: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentSection,
  onNavigate,
  onOpenStatusModal,
  lang,
  onToggleLang,
  isDark,
  onToggleTheme
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; section: PageSection }[] = [
    { label: t.theClub, section: 'the-club' },
    { label: t.membership, section: 'membership' },
    { label: t.experiences, section: 'experiences' },
    { label: t.events, section: 'events' },
    { label: t.contact, section: 'contact' },
  ];

  const handleLinkClick = (section: PageSection) => {
    onNavigate(section);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FBF9F5]/95 dark:bg-[#121110]/95 backdrop-blur-md border-b border-stone-200 dark:border-[#C5A880]/15 py-3 shadow-md'
            : 'bg-[#FBF9F5]/85 dark:bg-[#121110]/75 backdrop-blur-sm border-b border-stone-200/60 dark:border-[#C5A880]/10 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand title, one line */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6B38] dark:focus-visible:ring-[#C5A880] rounded-full"
            aria-label="The Meridian Club Home"
          >
            <span className="font-editorial text-xl sm:text-2xl tracking-[0.2em] font-medium text-[#1C1917] dark:text-[#F5F2EB] group-hover:text-[#8C6B38] dark:group-hover:text-[#C5A880] transition-colors whitespace-nowrap shrink-0">
              THE MERIDIAN
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#8C6B38] dark:text-[#C5A880] border-l border-stone-300 dark:border-[#C5A880]/30 pl-2 hidden sm:inline whitespace-nowrap shrink-0">
              Club
            </span>
          </button>

          {/* Zone 2: 4–5 nav links, 1–2 word labels, single-line */}
          <nav className="hidden lg:flex items-center gap-7 text-xs tracking-[0.18em] uppercase font-medium">
            {navLinks.map((item) => {
              const isActive = currentSection === item.section;
              return (
                <button
                  key={item.section}
                  onClick={() => handleLinkClick(item.section)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-[#8C6B38] dark:text-[#C5A880] font-semibold'
                      : 'text-[#57534E] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-[#F5F2EB]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8C6B38] dark:bg-[#C5A880] rounded-full" />
                  )}
                </button>
              );
            })}
            <button
              onClick={onOpenStatusModal}
              className="text-[#57534E] dark:text-[#A8A29E] hover:text-[#8C6B38] dark:hover:text-[#C5A880] transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
              title={t.trackStatus}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#8C6B38] dark:text-[#C5A880]" />
              <span>{t.status}</span>
            </button>
          </nav>

          {/* Zone 3: 1 primary action + compact utility controls */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Bilingual EN / FR Switcher with rounded edges */}
            <button
              onClick={onToggleLang}
              className="px-2.5 py-1.5 text-xs font-semibold rounded-full border border-stone-300 dark:border-[#C5A880]/25 text-[#1C1917] dark:text-[#F5F2EB] hover:bg-stone-100 dark:hover:bg-[#1F1C18] transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-[#8C6B38]"
              title={lang === 'en' ? 'Passer en Français' : 'Switch to English'}
              aria-label="Toggle language between English and French"
            >
              <Globe className="w-3.5 h-3.5 text-[#8C6B38] dark:text-[#C5A880]" />
              <span className="tracking-wider">{lang === 'en' ? 'FR' : 'EN'}</span>
            </button>

            {/* Light / Dark Mode Toggle with rounded edges */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-full border border-stone-300 dark:border-[#C5A880]/25 text-[#1C1917] dark:text-[#F5F2EB] hover:bg-stone-100 dark:hover:bg-[#1F1C18] transition-colors flex items-center justify-center shrink-0 focus-visible:ring-2 focus-visible:ring-[#8C6B38]"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-[#C5A880]" />
              ) : (
                <Moon className="w-4 h-4 text-[#8C6B38]" />
              )}
            </button>

            {/* Primary Action Button with rounded edges */}
            <button
              onClick={() => handleLinkClick('apply')}
              className="hidden sm:inline-flex px-6 py-2.5 text-xs tracking-[0.16em] uppercase font-semibold text-[#121110] bg-[#C5A880] hover:bg-[#DFCAAA] transition-all duration-200 rounded-full shadow-sm hover:shadow-[#C5A880]/25 whitespace-nowrap shrink-0"
            >
              {t.applyForMembership}
            </button>

            {/* Mobile menu hamburger toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#57534E] dark:text-[#A8A29E] hover:text-[#1C1917] dark:hover:text-[#F5F2EB] focus:outline-none rounded-full"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FBF9F5]/98 dark:bg-[#121110]/98 backdrop-blur-xl pt-24 px-8 pb-12 flex flex-col justify-between lg:hidden border-b border-stone-200 dark:border-[#C5A880]/20">
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-[#C5A880]/15">
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#8C6B38] dark:text-[#C5A880]/80">
                The Meridian Club
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={onToggleLang}
                  className="px-3 py-1 rounded-full text-xs font-semibold border border-stone-300 dark:border-[#C5A880]/30 text-[#1C1917] dark:text-[#F5F2EB]"
                >
                  {lang === 'en' ? 'FRANÇAIS' : 'ENGLISH'}
                </button>
                <button
                  onClick={onToggleTheme}
                  className="p-1.5 rounded-full border border-stone-300 dark:border-[#C5A880]/30 text-[#1C1917] dark:text-[#F5F2EB]"
                >
                  {isDark ? <Sun className="w-4 h-4 text-[#C5A880]" /> : <Moon className="w-4 h-4 text-[#8C6B38]" />}
                </button>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleLinkClick('home')}
                className={`text-left font-editorial text-2xl tracking-wide ${
                  currentSection === 'home' ? 'text-[#8C6B38] dark:text-[#C5A880]' : 'text-[#1C1917] dark:text-[#F5F2EB]'
                }`}
              >
                {t.overview}
              </button>
              {navLinks.map((item) => (
                <button
                  key={item.section}
                  onClick={() => handleLinkClick(item.section)}
                  className={`text-left font-editorial text-2xl tracking-wide ${
                    currentSection === item.section ? 'text-[#8C6B38] dark:text-[#C5A880]' : 'text-[#1C1917] dark:text-[#F5F2EB]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStatusModal();
                }}
                className="text-left font-editorial text-2xl tracking-wide text-[#57534E] dark:text-[#A8A29E] hover:text-[#8C6B38] dark:hover:text-[#C5A880] flex items-center gap-2 pt-2"
              >
                <ShieldCheck className="w-5 h-5 text-[#8C6B38] dark:text-[#C5A880]" />
                {t.trackStatus}
              </button>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-200 dark:border-[#C5A880]/15 space-y-3">
            <button
              onClick={() => handleLinkClick('apply')}
              className="w-full py-4 text-center text-xs tracking-[0.2em] uppercase font-semibold text-[#121110] bg-[#C5A880] rounded-full shadow-md"
            >
              {t.applyForMembership}
            </button>
            <p className="text-center text-xs text-[#57534E] dark:text-[#9E9991]/70">
              {t.appointmentOnly}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
