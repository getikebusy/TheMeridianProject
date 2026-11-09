/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { Language, translations } from '../i18n/translations';

interface NewsletterSubscriptionProps {
  lang: Language;
}

export const NewsletterSubscription: React.FC<NewsletterSubscriptionProps> = ({ lang }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [subscriberRef, setSubscriberRef] = useState('');

  const t = translations[lang].newsletter;

  const interestsList = [
    { id: 'salons', label: t.interestOptions.salons },
    { id: 'gastronomy', label: t.interestOptions.gastronomy },
    { id: 'cultural', label: t.interestOptions.cultural },
    { id: 'wellness', label: t.interestOptions.wellness },
  ];

  const toggleInterest = (id: string) => {
    if (selectedInterests.includes(id)) {
      setSelectedInterests(selectedInterests.filter(i => i !== id));
    } else {
      setSelectedInterests([...selectedInterests, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    const ref = `GAZ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubscriberRef(ref);
    setIsSubmitted(true);

    try {
      const existing = JSON.parse(localStorage.getItem('meridian_subscribers') || '[]');
      existing.unshift({
        reference: ref,
        name,
        email,
        interests: selectedInterests,
        date: new Date().toISOString(),
        lang
      });
      localStorage.setItem('meridian_subscribers', JSON.stringify(existing));
    } catch (err) {
      console.error('Storage error', err);
    }
  };

  return (
    <div className="bg-[#171513] dark:bg-[#161412] text-[#F5F2EB] border border-[#C5A880]/25 rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
      {/* Subtle gold radial background glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

      {!isSubmitted ? (
        <div className="relative space-y-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A880] font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.kicker}</span>
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#F5F2EB] font-normal leading-snug">
              {t.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#DFCAAA]/80 leading-relaxed font-light">
              {t.description}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="newsletter-name" className="text-xs text-[#9E9991] block">
                  {lang === 'fr' ? 'Nom et Titre (Optionnel)' : 'Full Name (Optional)'}
                </label>
                <input
                  id="newsletter-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.placeholderName}
                  className="w-full bg-[#121110]/80 border border-[#C5A880]/30 rounded-full px-5 py-3 text-xs text-[#F5F2EB] placeholder-[#9E9991]/60 focus:outline-none focus:ring-2 focus:ring-[#C5A880]/50 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="newsletter-email" className="text-xs text-[#9E9991] block">
                  {lang === 'fr' ? 'Courriel Professionnel *' : 'Executive Email *'}
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.placeholderEmail}
                  className="w-full bg-[#121110]/80 border border-[#C5A880]/30 rounded-full px-5 py-3 text-xs text-[#F5F2EB] placeholder-[#9E9991]/60 focus:outline-none focus:ring-2 focus:ring-[#C5A880]/50 transition-all"
                />
              </div>
            </div>

            {/* Interest selection tags */}
            <div className="space-y-2 pt-1">
              <span className="text-xs text-[#9E9991] block">
                {t.selectInterest}
              </span>
              <div className="flex flex-wrap gap-2">
                {interestsList.map((item) => {
                  const isSelected = selectedInterests.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleInterest(item.id)}
                      className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                        isSelected
                          ? 'bg-[#C5A880] text-[#121110] shadow-sm font-semibold'
                          : 'bg-[#221F1C] text-[#DFCAAA]/80 hover:text-[#F5F2EB] hover:bg-[#2A2723] border border-[#C5A880]/20'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-[11px] text-[#9E9991]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{t.privacyNote}</span>
              </div>

              <button
                type="submit"
                className="px-8 py-3.5 text-xs tracking-[0.18em] uppercase font-semibold text-[#121110] bg-[#C5A880] hover:bg-[#DFCAAA] transition-all duration-200 rounded-full shadow-md hover:shadow-[#C5A880]/20 flex items-center justify-center gap-2 group whitespace-nowrap shrink-0"
              >
                <span>{t.subscribeBtn}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="text-center py-6 space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#C5A880]/20 border border-[#C5A880] flex items-center justify-center mx-auto text-[#C5A880]">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880]">
              {t.kicker}
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#F5F2EB]">
              {t.successTitle}
            </h3>
            <p className="font-mono text-xs text-[#DFCAAA]">
              {lang === 'fr' ? 'Numéro de Référence' : 'Dispatch Reference'}: {subscriberRef}
            </p>
          </div>
          <p className="text-xs text-[#DFCAAA]/90 max-w-md mx-auto leading-relaxed">
            {t.successMessage}
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                setIsSubmitted(false);
                setEmail('');
                setName('');
              }}
              className="text-xs text-[#C5A880] hover:underline"
            >
              {lang === 'fr' ? 'Enregistrer une autre adresse' : 'Register another recipient'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
