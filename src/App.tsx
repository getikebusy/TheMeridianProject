/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageSection, MembershipTierId } from './types';
import { Language } from './i18n/translations';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeSection } from './components/HomeSection';
import { TheClubSection } from './components/TheClubSection';
import { MembershipSection } from './components/MembershipSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { EventsSection } from './components/EventsSection';
import { ContactSection } from './components/ContactSection';
import { ApplySection } from './components/ApplySection';
import { ApplicationStatusModal } from './components/ApplicationStatusModal';

export default function App() {
  const [currentSection, setCurrentSection] = useState<PageSection>('home');
  const [selectedTierForApply, setSelectedTierForApply] = useState<MembershipTierId>('global');
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);

  // Language state (EN / FR for Canadian and international members)
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('meridian_lang');
    return (saved === 'fr' || saved === 'en') ? saved : 'en';
  });

  // Theme state (Dark / Light)
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('meridian_theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    // Default to dark theme for private club aesthetic
    return true;
  });

  // Sync theme with HTML class
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('meridian_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('meridian_theme', 'light');
    }
  }, [isDark]);

  // Sync language with localStorage
  const toggleLanguage = () => {
    const nextLang: Language = lang === 'en' ? 'fr' : 'en';
    setLang(nextLang);
    localStorage.setItem('meridian_lang', nextLang);
  };

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const handleNavigate = (section: PageSection) => {
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTierAndApply = (tierId: string) => {
    setSelectedTierForApply(tierId as MembershipTierId);
    setCurrentSection('apply');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] dark:bg-[#121110] text-[#1C1917] dark:text-[#E8E4DF] flex flex-col justify-between selection:bg-[#C5A880]/30 selection:text-[#121110] dark:selection:text-white transition-colors duration-300">
      {/* Top Bar adhering to Top Bar Contract */}
      <Navbar
        currentSection={currentSection}
        onNavigate={handleNavigate}
        onOpenStatusModal={() => setIsStatusModalOpen(true)}
        lang={lang}
        onToggleLang={toggleLanguage}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Main Section Content */}
      <main className="flex-1">
        {currentSection === 'home' && (
          <HomeSection
            onNavigate={handleNavigate}
            onSelectTierAndApply={handleSelectTierAndApply}
            lang={lang}
          />
        )}
        {currentSection === 'the-club' && (
          <TheClubSection onNavigate={handleNavigate} lang={lang} />
        )}
        {currentSection === 'membership' && (
          <MembershipSection
            onNavigate={handleNavigate}
            onSelectTierAndApply={handleSelectTierAndApply}
            lang={lang}
          />
        )}
        {currentSection === 'experiences' && (
          <ExperiencesSection onNavigate={handleNavigate} lang={lang} />
        )}
        {currentSection === 'events' && (
          <EventsSection onNavigate={handleNavigate} lang={lang} />
        )}
        {currentSection === 'contact' && (
          <ContactSection onNavigate={handleNavigate} lang={lang} />
        )}
        {currentSection === 'apply' && (
          <ApplySection
            onNavigate={handleNavigate}
            initialTier={selectedTierForApply}
            lang={lang}
          />
        )}
      </main>

      {/* Quiet Footer with Newsletter Lead Capture */}
      <Footer
        onNavigate={handleNavigate}
        onOpenStatusModal={() => setIsStatusModalOpen(true)}
        lang={lang}
      />

      {/* Candidate Dossier Status Modal */}
      <ApplicationStatusModal
        isOpen={isStatusModalOpen}
        onClose={() => setIsStatusModalOpen(false)}
        onNavigateToApply={() => handleNavigate('apply')}
        lang={lang}
      />
    </div>
  );
}
