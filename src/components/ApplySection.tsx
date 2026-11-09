/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageSection, MembershipTierId, ApplicationFormData, SubmittedApplication } from '../types';
import { MEMBERSHIP_TIERS } from '../data/clubData';
import { Check, ArrowRight, ArrowLeft, Download, CheckCircle2 } from 'lucide-react';
import { Language, translations } from '../i18n/translations';

interface ApplySectionProps {
  onNavigate: (section: PageSection) => void;
  initialTier?: MembershipTierId;
  lang: Language;
}

export const ApplySection: React.FC<ApplySectionProps> = ({
  onNavigate,
  initialTier = 'global',
  lang
}) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: '',
    preferredName: '',
    email: '',
    phone: '',
    city: 'Toronto',
    country: 'Canada',
    company: '',
    title: '',
    industry: 'Technology & Venture Capital',
    linkedInOrBio: '',
    selectedTier: initialTier,
    primaryMotivation: '',
    communityContribution: '',
    hasSponsor: true,
    sponsorOneName: '',
    sponsorOneEmail: '',
    sponsorTwoName: '',
    sponsorTwoEmail: '',
    committeeReviewRequested: false,
    areasOfInterest: ['Haute Gastronomy & Sommelier Allocations', 'Subterranean Thermal Sanctuary'],
    privateDiningFrequency: 'Monthly',
    dietaryOrAllergies: 'None',
    agreedToHouseRules: true,
    confidentialityAccepted: true,
    accuracyAffirmed: true
  });

  const [submittedApp, setSubmittedApp] = useState<SubmittedApplication | null>(null);
  const t = translations[lang].apply;

  // Sync initialTier if passed dynamically
  useEffect(() => {
    if (initialTier) {
      setFormData(prev => ({ ...prev, selectedTier: initialTier }));
    }
  }, [initialTier]);

  const toggleInterest = (interest: string) => {
    setFormData(prev => {
      const exists = prev.areasOfInterest.includes(interest);
      if (exists) {
        return { ...prev, areasOfInterest: prev.areasOfInterest.filter(i => i !== interest) };
      } else {
        return { ...prev, areasOfInterest: [...prev.areasOfInterest, interest] };
      }
    });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 5) {
      setStep(step + 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    } else {
      // Final submission
      const refNum = `MC-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + 14);

      const submission: SubmittedApplication = {
        referenceNumber: refNum,
        submittedAt: new Date().toLocaleDateString(lang === 'fr' ? 'fr-CA' : 'en-CA', { day: 'numeric', month: 'long', year: 'numeric' }),
        status: 'Pending Committee Review',
        data: formData,
        targetReviewDate: targetDate.toLocaleDateString(lang === 'fr' ? 'fr-CA' : 'en-CA', { day: 'numeric', month: 'long', year: 'numeric' })
      };

      try {
        const existing = JSON.parse(localStorage.getItem('meridian_applications') || '[]');
        existing.unshift(submission);
        localStorage.setItem('meridian_applications', JSON.stringify(existing));
        localStorage.setItem('meridian_active_ref', refNum);
      } catch (err) {
        console.error('LocalStorage error', err);
      }

      setSubmittedApp(submission);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const interestOptions = lang === 'fr' ? [
    'Haute Gastronomy & Allocations de Crus',
    'Sanctuaire Thermal Souterrain & Vitalité',
    'Colloques Exécutifs & Débats sous Chatham House',
    'Salons de Conseil d’Administration & Négociations',
    'Réciprocité avec les Clubs Partenaires Mondiaux',
    'Vernissages Privés d’Art & Architecture',
    'Terrasse Cigare & Cave de Spiritueux Rares'
  ] : [
    'Haute Gastronomy & Sommelier Allocations',
    'Subterranean Thermal Sanctuary',
    'Executive Salons & Chatham House Discourse',
    'Private Boardrooms & Confidential Deliberations',
    'International Reciprocal Sister Clubs',
    'Curated Private Art & Cultural Previews',
    'Cigar Terrace & Rare Spirits Vault'
  ];

  return (
    <div className="pt-24 pb-20 space-y-16 transition-colors duration-300">
      {/* 1. Chapter Header */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-4">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8C6B38] dark:text-[#C5A880] font-semibold">
          <span>{t.chapter}</span>
        </div>
        <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#1C1917] dark:text-[#F5F2EB] font-normal leading-tight">
          {t.title}
        </h1>
        <p className="text-sm sm:text-base text-[#57534E] dark:text-[#9E9991] font-light max-w-xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>
      </section>

      {/* 2. Step Progress Bar with rounded-full */}
      {!submittedApp && (
        <section className="max-w-3xl mx-auto px-6 sm:px-8">
          <div className="bg-white dark:bg-[#1A1816] border border-stone-200 dark:border-[#C5A880]/20 p-5 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between text-xs text-[#57534E] dark:text-[#9E9991] pb-2.5">
              <span className="text-[#8C6B38] dark:text-[#C5A880] uppercase tracking-wider font-semibold">
                {t.stepOf} 0{step} / 05
              </span>
              <span className="font-medium text-[#1C1917] dark:text-[#F5F2EB]">
                {t.steps[step - 1]}
              </span>
            </div>
            {/* Visual Step Progress Line */}
            <div className="w-full bg-stone-100 dark:bg-[#121110] h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#C5A880] h-full transition-all duration-300 rounded-full"
                style={{ width: `${(step / 5) * 100}%` }}
              />
            </div>
          </div>
        </section>
      )}

      {/* 3. Main Form Container */}
      <section className="max-w-3xl mx-auto px-6 sm:px-8">
        {!submittedApp ? (
          <div className="bg-white dark:bg-[#1A1816] border border-stone-200 dark:border-[#C5A880]/25 p-8 sm:p-12 rounded-2xl shadow-xl">
            <form onSubmit={handleNext} className="space-y-8">
              {/* STEP 1: Personal & Professional */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="border-b border-stone-100 dark:border-[#C5A880]/15 pb-4 space-y-1">
                    <h2 className="font-editorial text-2xl text-[#1C1917] dark:text-[#F5F2EB]">
                      01. {t.steps[0]}
                    </h2>
                    <p className="text-xs text-[#57534E] dark:text-[#9E9991]">
                      {lang === 'fr'
                        ? 'Veuillez renseigner votre état civil et vos fonctions de direction.'
                        : 'Please provide your legal and executive identification.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs text-[#57534E] dark:text-[#9E9991] block">
                        {lang === 'fr' ? 'Nom Légal Complet *' : 'Full Legal Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Me Jean-Luc Bouchard / Lord Alexander Wright"
                        className="w-full bg-stone-50 dark:bg-[#121110] border border-stone-300 dark:border-[#C5A880]/20 rounded-full px-5 py-2.5 text-xs text-[#1C1917] dark:text-[#F5F2EB] focus:outline-none focus:ring-2 focus:ring-[#8C6B38]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-[#57534E] dark:text-[#9E9991] block">
                        {lang === 'fr' ? 'Titre d’Usage / Prénom au Club' : 'Preferred Honorific / Club Name'}
                      </label>
                      <input
                        type="text"
                        value={formData.preferredName}
                        onChange={(e) => setFormData({ ...formData, preferredName: e.target.value })}
                        placeholder="e.g. Jean-Luc or Alex"
                        className="w-full bg-stone-50 dark:bg-[#121110] border border-stone-300 dark:border-[#C5A880]/20 rounded-full px-5 py-2.5 text-xs text-[#1C1917] dark:text-[#F5F2EB] focus:outline-none focus:ring-2 focus:ring-[#8C6B38]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs text-[#57534E] dark:text-[#9E9991] block">
                        {lang === 'fr' ? 'Courriel Confidentiel *' : 'Confidential Email *'}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="direction@enterprise.com"
                        className="w-full bg-stone-50 dark:bg-[#121110] border border-stone-300 dark:border-[#C5A880]/20 rounded-full px-5 py-2.5 text-xs text-[#1C1917] dark:text-[#F5F2EB] focus:outline-none focus:ring-2 focus:ring-[#8C6B38]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-[#57534E] dark:text-[#9E9991] block">
                        {lang === 'fr' ? 'Numéro de Téléphone Direct *' : 'Direct Telephone Number *'}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (416) or +1 (514) or +44 ..."
                        className="w-full bg-stone-50 dark:bg-[#121110] border border-stone-300 dark:border-[#C5A880]/20 rounded-full px-5 py-2.5 text-xs text-[#1C1917] dark:text-[#F5F2EB] focus:outline-none focus:ring-2 focus:ring-[#8C6B38]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs text-[#57534E] dark:text-[#9E9991] block">
                        {lang === 'fr' ? 'Entreprise / Firme Principale *' : 'Primary Enterprise / Venture *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Laurentian Strategic Capital / Sterling Autonomous"
                        className="w-full bg-stone-50 dark:bg-[#121110] border border-stone-300 dark:border-[#C5A880]/20 rounded-full px-5 py-2.5 text-xs text-[#1C1917] dark:text-[#F5F2EB] focus:outline-none focus:ring-2 focus:ring-[#8C6B38]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-[#57534E] dark:text-[#9E9991] block">
                        {lang === 'fr' ? 'Titre de Haute Direction *' : 'Current Executive Title *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="e.g. Chief Executive / Managing Partner / Fondateur"
                        className="w-full bg-stone-50 dark:bg-[#121110] border border-stone-300 dark:border-[#C5A880]/20 rounded-full px-5 py-2.5 text-xs text-[#1C1917] dark:text-[#F5F2EB] focus:outline-none focus:ring-2 focus:ring-[#8C6B38]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs text-[#57534E] dark:text-[#9E9991] block">
                        {lang === 'fr' ? 'Secteur d’Activité *' : 'Primary Industry *'}
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full bg-stone-50 dark:bg-[#121110] border border-stone-300 dark:border-[#C5A880]/20 rounded-full px-5 py-2.5 text-xs text-[#1C1917] dark:text-[#F5F2EB] focus:outline-none focus:ring-2 focus:ring-[#8C6B38]"
                      >
                        <option value="Technology & Venture Capital">Technology & Venture Capital</option>
                        <option value="Private Equity & Banking">Private Equity & Banking</option>
                        <option value="Energy & Natural Resources">Energy & Natural Resources</option>
                        <option value="Life Sciences & Biotechnology">Life Sciences & Biotechnology</option>
                        <option value="Architecture & Infrastructure">Architecture & Infrastructure</option>
                        <option value="Law & International Governance">Law & International Governance</option>
                        <option value="Arts & Philanthropy">Arts & Philanthropy</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-[#57534E] dark:text-[#9E9991] block">
                        {lang === 'fr' ? 'Ville de Résidence Principale *' : 'Primary Residence City *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Toronto, Montréal, Vancouver, Ottawa, London, New York"
                        className="w-full bg-stone-50 dark:bg-[#121110] border border-stone-300 dark:border-[#C5A880]/20 rounded-full px-5 py-2.5 text-xs text-[#1C1917] dark:text-[#F5F2EB] focus:outline-none focus:ring-2 focus:ring-[#8C6B38]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-[#57534E] dark:text-[#9E9991] block">
                      {lang === 'fr' ? 'Profil LinkedIn ou Biographie Officielle (Lien)' : 'LinkedIn Profile or Official Executive Biography URL'}
                    </label>
                    <input
                      type="url"
                      value={formData.linkedInOrBio}
                      onChange={(e) => setFormData({ ...formData, linkedInOrBio: e.target.value })}
                      placeholder="https://linkedin.com/in/..."
                      className="w-full bg-stone-50 dark:bg-[#121110] border border-stone-300 dark:border-[#C5A880]/20 rounded-full px-5 py-2.5 text-xs text-[#1C1917] dark:text-[#F5F2EB] focus:outline-none focus:ring-2 focus:ring-[#8C6B38]"
                    />
                  </div>
                </div>
              )}

              {/* STEP 2: Tier Selection & Statement of Intent */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="border-b border-stone-100 dark:border-[#C5A880]/15 pb-4 space-y-1">
                    <h2 className="font-editorial text-2xl text-[#1C1917] dark:text-[#F5F2EB]">
                      02. {t.steps[1]}
                    </h2>
                    <p className="text-xs text-[#57534E] dark:text-[#9E9991]">
                      {lang === 'fr'
                        ? 'Sélectionnez votre niveau d’adhésion et détaillez vos motivations.'
                        : 'Select your desired level of house stewardship and articulate your motivation.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {MEMBERSHIP_TIERS.map((tier) => (
                      <div
                        key={tier.id}
                        onClick={() => setFormData({ ...formData, selectedTier: tier.id })}
                        className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                          formData.selectedTier === tier.id
                            ? 'bg-stone-50 dark:bg-[#24211D] border-[#8C6B38] dark:border-[#C5A880] shadow-md'
                            : 'bg-white dark:bg-[#121110] border-stone-200 dark:border-[#C5A880]/15 hover:border-stone-400'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <h4 className="font-editorial text-lg text-[#1C1917] dark:text-[#F5F2EB] font-medium">{tier.name}</h4>
                          <span className="text-xs text-[#8C6B38] dark:text-[#C5A880] font-semibold tabular-nums">{tier.annualDues}</span>
                        </div>
                        <p className="text-[11px] text-[#57534E] dark:text-[#9E9991] mt-1.5 line-clamp-2">
                          {tier.tagline}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-[#57534E] dark:text-[#9E9991] block">
                      {lang === 'fr'
                        ? 'Pourquoi sollicitez-vous votre admission au Meridian Club ? *'
                        : 'Why are you seeking election to The Meridian Club? *'}
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.primaryMotivation}
                      onChange={(e) => setFormData({ ...formData, primaryMotivation: e.target.value })}
                      placeholder={lang === 'fr' ? 'Partagez ce qui vous attire dans nos valeurs et notre confraternité...' : 'Share what attracts you to our ethos, environment, and community of leaders...'}
                      className="w-full bg-stone-50 dark:bg-[#121110] border border-stone-300 dark:border-[#C5A880]/20 rounded-2xl px-5 py-3 text-xs text-[#1C1917] dark:text-[#F5F2EB] focus:outline-none focus:ring-2 focus:ring-[#8C6B38]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-[#57534E] dark:text-[#9E9991] block">
                      {lang === 'fr'
                        ? 'Comment enrichirez-vous la vie intellectuelle et confraternelle du club ? *'
                        : 'How will you contribute to the intellectual and cultural fabric of the club? *'}
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.communityContribution}
                      onChange={(e) => setFormData({ ...formData, communityContribution: e.target.value })}
                      placeholder={lang === 'fr' ? 'Ex. Participation aux cercles d’investissement, mécénat artistique...' : 'e.g. Participation in private venture roundtables, cultural patronage, mentorship...'}
                      className="w-full bg-stone-50 dark:bg-[#121110] border border-stone-300 dark:border-[#C5A880]/20 rounded-2xl px-5 py-3 text-xs text-[#1C1917] dark:text-[#F5F2EB] focus:outline-none focus:ring-2 focus:ring-[#8C6B38]"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: Sponsorship & Endorsements */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="border-b border-stone-100 dark:border-[#C5A880]/15 pb-4 space-y-1">
                    <h2 className="font-editorial text-2xl text-[#1C1917] dark:text-[#F5F2EB]">
                      03. {t.steps[2]}
                    </h2>
                    <p className="text-xs text-[#57534E] dark:text-[#9E9991]">
                      {lang === 'fr'
                        ? 'L’admission standard est appuyée par deux membres actifs. Les candidats indépendants peuvent demander un examen direct.'
                        : 'Traditional admission is supported by two current members. Non-sponsored candidates may request direct Committee review.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div
                      onClick={() => setFormData({ ...formData, hasSponsor: true, committeeReviewRequested: false })}
                      className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                        formData.hasSponsor
                          ? 'bg-stone-50 dark:bg-[#24211D] border-[#8C6B38] dark:border-[#C5A880]'
                          : 'bg-white dark:bg-[#121110] border-stone-200 dark:border-[#C5A880]/15'
                      }`}
                    >
                      <span className="text-xs font-semibold text-[#1C1917] dark:text-[#F5F2EB] block">
                        {lang === 'fr' ? 'Option A : Parrainage par Membres' : 'Option A: Member Proposers'}
                      </span>
                      <span className="text-[11px] text-[#57534E] dark:text-[#9E9991] mt-1 block">
                        {lang === 'fr' ? 'Je suis parrainé par deux membres actifs du Meridian.' : 'I am endorsed by two active Meridian Club members.'}
                      </span>
                    </div>

                    <div
                      onClick={() => setFormData({ ...formData, hasSponsor: false, committeeReviewRequested: true })}
                      className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                        !formData.hasSponsor
                          ? 'bg-stone-50 dark:bg-[#24211D] border-[#8C6B38] dark:border-[#C5A880]'
                          : 'bg-white dark:bg-[#121110] border-stone-200 dark:border-[#C5A880]/15'
                      }`}
                    >
                      <span className="text-xs font-semibold text-[#1C1917] dark:text-[#F5F2EB] block">
                        {lang === 'fr' ? 'Option B : Examen Direct par le Comité' : 'Option B: Committee Direct Review'}
                      </span>
                      <span className="text-[11px] text-[#57534E] dark:text-[#9E9991] mt-1 block">
                        {lang === 'fr' ? 'Candidature indépendante ; entretien avec un gouverneur.' : 'I am applying independently; request Governor interview.'}
                      </span>
                    </div>
                  </div>

                  {formData.hasSponsor ? (
                    <div className="space-y-4 pt-2">
                      <div className="p-5 bg-stone-50 dark:bg-[#121110] border border-stone-200 dark:border-[#C5A880]/15 rounded-2xl space-y-3">
                        <span className="text-xs font-semibold text-[#8C6B38] dark:text-[#C5A880] uppercase tracking-wider block">
                          {lang === 'fr' ? 'Premier Parrain / Proposant' : 'Primary Proposing Member'}
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <input
                            type="text"
                            required
                            value={formData.sponsorOneName}
                            onChange={(e) => setFormData({ ...formData, sponsorOneName: e.target.value })}
                            placeholder={lang === 'fr' ? 'Nom complet du membre' : 'Full Name of Member'}
                            className="bg-white dark:bg-[#1A1816] border border-stone-300 dark:border-[#C5A880]/20 rounded-full px-4 py-2 text-xs text-[#1C1917] dark:text-[#F5F2EB] focus:outline-none"
                          />
                          <input
                            type="email"
                            required
                            value={formData.sponsorOneEmail}
                            onChange={(e) => setFormData({ ...formData, sponsorOneEmail: e.target.value })}
                            placeholder={lang === 'fr' ? 'Courriel du membre' : 'Member’s Email Address'}
                            className="bg-white dark:bg-[#1A1816] border border-stone-300 dark:border-[#C5A880]/20 rounded-full px-4 py-2 text-xs text-[#1C1917] dark:text-[#F5F2EB] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="p-5 bg-stone-50 dark:bg-[#121110] border border-stone-200 dark:border-[#C5A880]/15 rounded-2xl space-y-3">
                        <span className="text-xs font-semibold text-[#8C6B38] dark:text-[#C5A880] uppercase tracking-wider block">
                          {lang === 'fr' ? 'Second Parrain' : 'Seconding Member'}
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <input
                            type="text"
                            required
                            value={formData.sponsorTwoName}
                            onChange={(e) => setFormData({ ...formData, sponsorTwoName: e.target.value })}
                            placeholder={lang === 'fr' ? 'Nom complet du membre' : 'Full Name of Member'}
                            className="bg-white dark:bg-[#1A1816] border border-stone-300 dark:border-[#C5A880]/20 rounded-full px-4 py-2 text-xs text-[#1C1917] dark:text-[#F5F2EB] focus:outline-none"
                          />
                          <input
                            type="email"
                            required
                            value={formData.sponsorTwoEmail}
                            onChange={(e) => setFormData({ ...formData, sponsorTwoEmail: e.target.value })}
                            placeholder={lang === 'fr' ? 'Courriel du membre' : 'Member’s Email Address'}
                            className="bg-white dark:bg-[#1A1816] border border-stone-300 dark:border-[#C5A880]/20 rounded-full px-4 py-2 text-xs text-[#1C1917] dark:text-[#F5F2EB] focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-5 bg-stone-50 dark:bg-[#24211D] border border-stone-200 dark:border-[#C5A880]/20 rounded-2xl space-y-2">
                      <span className="text-xs font-semibold text-[#8C6B38] dark:text-[#C5A880] block">
                        {lang === 'fr' ? 'Dispense de Parrainage Direct par le Comité' : 'Admissions Committee Sponsorship Exemption'}
                      </span>
                      <p className="text-xs text-[#57534E] dark:text-[#9E9991] leading-relaxed">
                        {lang === 'fr'
                          ? 'Votre dossier sera instruit directement par le Comité des Admissions. Si votre parcours concorde avec les places disponibles, vous serez invité à un entretien privé avec un Gouverneur.'
                          : 'Your dossier will be reviewed directly by the Admissions Committee. If your credentials align with our current roster openings, you will be invited for an informal conversation with a Club Governor.'}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* STEP 4: Lifestyle & Engagements */}
              {step === 4 && (
                <div className="space-y-6">
                  <div className="border-b border-stone-100 dark:border-[#C5A880]/15 pb-4 space-y-1">
                    <h2 className="font-editorial text-2xl text-[#1C1917] dark:text-[#F5F2EB]">
                      04. {t.steps[3]}
                    </h2>
                    <p className="text-xs text-[#57534E] dark:text-[#9E9991]">
                      {lang === 'fr'
                        ? 'Aidez notre conciergerie à personnaliser votre expérience au club.'
                        : 'Help our house concierge curate your future club experience.'}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs text-[#57534E] dark:text-[#9E9991] block">
                      {lang === 'fr' ? 'Espaces et Activités d’Intérêt Privilégié :' : 'Primary Areas of Interest in the Clubhouse:'}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {interestOptions.map((opt) => {
                        const isChecked = formData.areasOfInterest.includes(opt);
                        return (
                          <div
                            key={opt}
                            onClick={() => toggleInterest(opt)}
                            className={`p-3.5 rounded-full border cursor-pointer text-xs flex items-center justify-between transition-colors ${
                              isChecked
                                ? 'bg-stone-100 dark:bg-[#24211D] border-[#8C6B38] dark:border-[#C5A880] text-[#1C1917] dark:text-[#F5F2EB] font-medium'
                                : 'bg-white dark:bg-[#121110] border-stone-200 dark:border-[#C5A880]/15 text-[#57534E] dark:text-[#9E9991]'
                            }`}
                          >
                            <span>{opt}</span>
                            {isChecked && <Check className="w-3.5 h-3.5 text-[#8C6B38] dark:text-[#C5A880]" />}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    <div className="space-y-1.5">
                      <label className="text-xs text-[#57534E] dark:text-[#9E9991] block">
                        {lang === 'fr' ? 'Fréquence Anticipée de Restauration' : 'Anticipated Dining & Salon Usage'}
                      </label>
                      <select
                        value={formData.privateDiningFrequency}
                        onChange={(e) => setFormData({ ...formData, privateDiningFrequency: e.target.value })}
                        className="w-full bg-stone-50 dark:bg-[#121110] border border-stone-300 dark:border-[#C5A880]/20 rounded-full px-5 py-2.5 text-xs text-[#1C1917] dark:text-[#F5F2EB] focus:outline-none"
                      >
                        <option value="Weekly">{lang === 'fr' ? 'Hebdomadaire (Routine Résidente)' : 'Weekly (Resident Routine)'}</option>
                        <option value="Bi-Weekly">{lang === 'fr' ? 'Bi-mensuelle' : 'Bi-Weekly'}</option>
                        <option value="Monthly">{lang === 'fr' ? 'Mensuelle' : 'Monthly'}</option>
                        <option value="When in London / Transiting">{lang === 'fr' ? 'Lors de Passages / Séjours' : 'When in London / Transiting'}</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-[#57534E] dark:text-[#9E9991] block">
                        {lang === 'fr' ? 'Préférences Alimentaires ou Œnologiques' : 'Dietary Restrictions or Sommelier Notes'}
                      </label>
                      <input
                        type="text"
                        value={formData.dietaryOrAllergies}
                        onChange={(e) => setFormData({ ...formData, dietaryOrAllergies: e.target.value })}
                        placeholder="e.g. Pescatarian, Collector of Bordeaux & Burgundy..."
                        className="w-full bg-stone-50 dark:bg-[#121110] border border-stone-300 dark:border-[#C5A880]/20 rounded-full px-5 py-2.5 text-xs text-[#1C1917] dark:text-[#F5F2EB] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: Attestation & Review */}
              {step === 5 && (
                <div className="space-y-6">
                  <div className="border-b border-stone-100 dark:border-[#C5A880]/15 pb-4 space-y-1">
                    <h2 className="font-editorial text-2xl text-[#1C1917] dark:text-[#F5F2EB]">
                      05. {t.steps[4]}
                    </h2>
                    <p className="text-xs text-[#57534E] dark:text-[#9E9991]">
                      {lang === 'fr'
                        ? 'Vérification finale du dossier avant transmission au secrétariat.'
                        : 'Please verify your candidate dossier prior to final transmission.'}
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-6 bg-stone-50 dark:bg-[#121110] border border-stone-200 dark:border-[#C5A880]/20 rounded-2xl space-y-3 text-xs">
                    <div className="flex justify-between border-b border-stone-200 dark:border-[#C5A880]/10 pb-2">
                      <span className="text-[#57534E] dark:text-[#9E9991]">{lang === 'fr' ? 'Candidat :' : 'Candidate Name:'}</span>
                      <span className="text-[#1C1917] dark:text-[#F5F2EB] font-medium">{formData.fullName || '—'}</span>
                    </div>
                    <div className="flex justify-between border-b border-stone-200 dark:border-[#C5A880]/10 pb-2">
                      <span className="text-[#57534E] dark:text-[#9E9991]">{lang === 'fr' ? 'Fonction Professionnelle :' : 'Executive Standing:'}</span>
                      <span className="text-[#1C1917] dark:text-[#F5F2EB] font-medium">{formData.title} · {formData.company}</span>
                    </div>
                    <div className="flex justify-between border-b border-stone-200 dark:border-[#C5A880]/10 pb-2">
                      <span className="text-[#57534E] dark:text-[#9E9991]">{lang === 'fr' ? 'Niveau Sollicité :' : 'Selected Membership Tier:'}</span>
                      <span className="text-[#8C6B38] dark:text-[#C5A880] font-semibold uppercase tracking-wider">
                        {MEMBERSHIP_TIERS.find(t => t.id === formData.selectedTier)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-stone-200 dark:border-[#C5A880]/10 pb-2">
                      <span className="text-[#57534E] dark:text-[#9E9991]">{lang === 'fr' ? 'Voie d’Admission :' : 'Admissions Route:'}</span>
                      <span className="text-[#1C1917] dark:text-[#DFCAAA]">
                        {formData.hasSponsor
                          ? (lang === 'fr' ? 'Deux Membres Parrains' : 'Two Member Sponsors')
                          : (lang === 'fr' ? 'Examen Direct par le Comité' : 'Committee Direct Consideration')}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#57534E] dark:text-[#9E9991]">{lang === 'fr' ? 'Coordonnées :' : 'Contact Coordinates:'}</span>
                      <span className="text-[#1C1917] dark:text-[#F5F2EB]">{formData.email} · {formData.phone}</span>
                    </div>
                  </div>

                  {/* Attestations */}
                  <div className="space-y-3 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.agreedToHouseRules}
                        onChange={(e) => setFormData({ ...formData, agreedToHouseRules: e.target.checked })}
                        className="mt-0.5 accent-[#8C6B38] dark:accent-[#C5A880]"
                      />
                      <span className="text-xs text-[#57534E] dark:text-[#9E9991] leading-relaxed">
                        {lang === 'fr'
                          ? 'J’atteste avoir pris connaissance du Code de Bienséance du Club et m’engage à respecter la règle de non-sollicitation et la stricte confidentialité des salons.'
                          : 'I affirm that I have reviewed the Meridian House Etiquette and agree to strictly adhere to the non-solicitation, privacy, and photography restrictions.'}
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.confidentialityAccepted}
                        onChange={(e) => setFormData({ ...formData, confidentialityAccepted: e.target.checked })}
                        className="mt-0.5 accent-[#8C6B38] dark:accent-[#C5A880]"
                      />
                      <span className="text-xs text-[#57534E] dark:text-[#9E9991] leading-relaxed">
                        {lang === 'fr'
                          ? 'J’autorise la vérification confidentielle de mes références par le Secrétariat des Admissions.'
                          : 'I consent to confidential reference verification by the Admissions Committee Secretariat.'}
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.accuracyAffirmed}
                        onChange={(e) => setFormData({ ...formData, accuracyAffirmed: e.target.checked })}
                        className="mt-0.5 accent-[#8C6B38] dark:accent-[#C5A880]"
                      />
                      <span className="text-xs text-[#57534E] dark:text-[#9E9991] leading-relaxed">
                        {lang === 'fr'
                          ? 'Je déclare sur l’honneur que toutes les informations fournies dans ce dossier sont exactes et véridiques.'
                          : 'I affirm that all professional and personal details supplied herein are true and accurate.'}
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Controls with rounded-full */}
              <div className="pt-6 border-t border-stone-100 dark:border-[#C5A880]/15 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-6 py-3 text-xs tracking-wider uppercase font-medium text-[#57534E] dark:text-[#9E9991] hover:text-[#1C1917] dark:hover:text-[#F5F2EB] flex items-center gap-1.5 transition-colors rounded-full"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>{t.prevBtn}</span>
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="submit"
                  disabled={step === 5 && (!formData.agreedToHouseRules || !formData.confidentialityAccepted || !formData.accuracyAffirmed)}
                  className={`px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-semibold rounded-full transition-all flex items-center gap-2 shadow-md ${
                    step === 5 && (!formData.agreedToHouseRules || !formData.confidentialityAccepted || !formData.accuracyAffirmed)
                      ? 'bg-stone-200 dark:bg-[#24211D] text-[#57534E] dark:text-[#9E9991] cursor-not-allowed'
                      : 'bg-[#C5A880] text-[#121110] hover:bg-[#DFCAAA]'
                  }`}
                >
                  <span>{step === 5 ? t.submitBtn : t.nextBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Submission Complete View */
          <div className="bg-white dark:bg-[#1A1816] border border-stone-300 dark:border-[#C5A880]/40 p-8 sm:p-14 rounded-2xl text-center space-y-8 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-[#8C6B38]/20 dark:bg-[#C5A880]/20 border border-[#8C6B38] dark:border-[#C5A880] flex items-center justify-center mx-auto text-[#8C6B38] dark:text-[#C5A880]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.3em] text-[#8C6B38] dark:text-[#C5A880] font-semibold">
                {lang === 'fr' ? 'Dossier Reçu par le Secrétariat' : 'Dossier Received by Admissions Secretariat'}
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#1C1917] dark:text-[#F5F2EB]">
                {lang === 'fr' ? 'Candidature Enregistrée' : 'Application Formally Registered'}
              </h2>
              <div className="pt-2">
                <span className="text-xs text-[#57534E] dark:text-[#9E9991] block">
                  {lang === 'fr' ? 'Votre Référence Officielle de Dossier' : 'Your Official Candidate Dossier Reference'}
                </span>
                <span className="font-mono text-xl sm:text-2xl text-[#8C6B38] dark:text-[#C5A880] tracking-widest font-semibold">
                  {submittedApp.referenceNumber}
                </span>
              </div>
            </div>

            <div className="max-w-lg mx-auto p-6 bg-stone-50 dark:bg-[#121110] border border-stone-200 dark:border-[#C5A880]/20 rounded-2xl text-left space-y-3 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-[#C5A880]/10">
                <span className="text-[#57534E] dark:text-[#9E9991]">{lang === 'fr' ? 'Candidat :' : 'Candidate:'}</span>
                <span className="text-[#1C1917] dark:text-[#F5F2EB] font-medium">{submittedApp.data.fullName}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-[#C5A880]/10">
                <span className="text-[#57534E] dark:text-[#9E9991]">{lang === 'fr' ? 'Niveau d’Adhésion :' : 'Application Tier:'}</span>
                <span className="text-[#8C6B38] dark:text-[#DFCAAA] font-semibold uppercase tracking-wider">
                  {MEMBERSHIP_TIERS.find(t => t.id === submittedApp.data.selectedTier)?.name}
                </span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-[#C5A880]/10">
                <span className="text-[#57534E] dark:text-[#9E9991]">{lang === 'fr' ? 'Statut Actuel :' : 'Current Dossier Status:'}</span>
                <span className="text-[#8C6B38] dark:text-[#C5A880] font-semibold">{submittedApp.status}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#57534E] dark:text-[#9E9991]">{lang === 'fr' ? 'Session du Comité :' : 'Committee Review Target:'}</span>
                <span className="text-[#1C1917] dark:text-[#F5F2EB] font-medium">{submittedApp.targetReviewDate}</span>
              </div>
            </div>

            <div className="space-y-2 text-xs text-[#57534E] dark:text-[#9E9991] max-w-md mx-auto leading-relaxed">
              <p>
                {lang === 'fr'
                  ? `Un accusé de réception formel a été envoyé à ${submittedApp.data.email}. Le secrétariat prendra contact avec vos parrains.`
                  : `A formal acknowledgement packet has been dispatched to ${submittedApp.data.email}. The Secretariat will contact your proposers or arrange a Governor coffee date shortly.`}
              </p>
              <p className="text-[#8C6B38] dark:text-[#C5A880] font-medium">
                {lang === 'fr'
                  ? 'Vous pouvez suivre l’état d’avancement de votre dossier à tout moment grâce à votre code de référence dans la barre de navigation.'
                  : 'You can track your candidate status at any time using your dossier reference in the top navigation.'}
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => window.print()}
                className="w-full sm:w-auto px-7 py-3 text-xs tracking-wider uppercase font-semibold text-[#1C1917] dark:text-[#F5F2EB] bg-stone-100 dark:bg-[#24211D] hover:bg-stone-200 dark:hover:bg-[#121110] border border-stone-300 dark:border-[#C5A880]/30 rounded-full flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{lang === 'fr' ? 'Imprimer le Récépissé' : 'Save Dossier Receipt'}</span>
              </button>
              <button
                onClick={() => onNavigate('home')}
                className="w-full sm:w-auto px-8 py-3.5 text-xs tracking-[0.18em] uppercase font-semibold text-[#121110] bg-[#C5A880] hover:bg-[#DFCAAA] rounded-full transition-colors"
              >
                {lang === 'fr' ? 'Retour au Club' : 'Return to Club House'}
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
