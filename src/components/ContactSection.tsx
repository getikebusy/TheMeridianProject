/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageSection } from '../types';
import { MapPin, Phone, Clock, ShieldCheck, Check, Send } from 'lucide-react';
import { Language, translations } from '../i18n/translations';

interface ContactSectionProps {
  onNavigate: (section: PageSection) => void;
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigate, lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Membership Admissions Committee',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketRef, setTicketRef] = useState('');

  const t = translations[lang].contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `ENQ-${Math.floor(10000 + Math.random() * 90000)}`;
    setTicketRef(ref);
    setIsSubmitted(true);
  };

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

      {/* 2. Location & Enquiries Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: House Contacts & Arrival Protocol */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white dark:bg-[#1A1816] border border-stone-200 dark:border-[#C5A880]/20 p-8 rounded-2xl space-y-6 shadow-sm">
              <h2 className="font-editorial text-2xl text-[#1C1917] dark:text-[#F5F2EB]">
                {t.addressTitle}
              </h2>
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#8C6B38] dark:text-[#C5A880] shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-[#1C1917] dark:text-[#F5F2EB] font-semibold block">The Meridian Club House</span>
                    <span className="text-[#57534E] dark:text-[#9E9991] block">14 St. James’s Crescent</span>
                    <span className="text-[#57534E] dark:text-[#9E9991] block">West End Enclave, SW1A 1EA, London</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <Clock className="w-4 h-4 text-[#8C6B38] dark:text-[#C5A880] shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-[#1C1917] dark:text-[#F5F2EB] font-semibold block">{t.houseHours}</span>
                    <span className="text-[#57534E] dark:text-[#9E9991] block">Monday – Friday: 07:00 — 01:00</span>
                    <span className="text-[#57534E] dark:text-[#9E9991] block">Saturday – Sunday: 08:00 — 00:00</span>
                    <span className="text-[#8C6B38] dark:text-[#DFCAAA] block pt-1 font-medium">Private Concierge: 24/7 Global Line</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <Phone className="w-4 h-4 text-[#8C6B38] dark:text-[#C5A880] shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-[#1C1917] dark:text-[#F5F2EB] font-semibold block">{t.conciergeDesk}</span>
                    <span className="text-[#57534E] dark:text-[#9E9991] block">+44 (0) 20 7946 0890</span>
                    <span className="text-[#57534E] dark:text-[#9E9991] block">admissions@meridianclub.com</span>
                  </div>
                </div>
              </div>

              {/* Private Valet Protocol */}
              <div className="p-4 bg-stone-50 dark:bg-[#24211D] border border-stone-200 dark:border-[#C5A880]/15 rounded-xl space-y-1 text-xs">
                <span className="text-[#8C6B38] dark:text-[#C5A880] font-semibold block">{t.valetTitle}</span>
                <p className="text-[#57534E] dark:text-[#9E9991] leading-relaxed">
                  {t.valetDesc}
                </p>
              </div>
            </div>

            {/* Department Extensions */}
            <div className="bg-white dark:bg-[#1A1816] border border-stone-200 dark:border-[#C5A880]/20 p-8 rounded-2xl space-y-4 shadow-sm">
              <h3 className="font-editorial text-xl text-[#1C1917] dark:text-[#F5F2EB]">
                {t.secretariatTitle}
              </h3>
              <div className="space-y-3 text-xs divide-y divide-stone-100 dark:divide-[#C5A880]/10">
                <div className="pt-2 first:pt-0 flex justify-between">
                  <span className="text-[#57534E] dark:text-[#9E9991]">Admissions Secretary</span>
                  <span className="text-[#8C6B38] dark:text-[#DFCAAA] font-medium">admissions@meridianclub.com</span>
                </div>
                <div className="pt-3 flex justify-between">
                  <span className="text-[#57534E] dark:text-[#9E9991]">Director of Private Events</span>
                  <span className="text-[#8C6B38] dark:text-[#DFCAAA] font-medium">events@meridianclub.com</span>
                </div>
                <div className="pt-3 flex justify-between">
                  <span className="text-[#57534E] dark:text-[#9E9991]">Head Sommelier & Cellar</span>
                  <span className="text-[#8C6B38] dark:text-[#DFCAAA] font-medium">cellar@meridianclub.com</span>
                </div>
                <div className="pt-3 flex justify-between">
                  <span className="text-[#57534E] dark:text-[#9E9991]">Thermal Spa Reception</span>
                  <span className="text-[#8C6B38] dark:text-[#DFCAAA] font-medium">spa@meridianclub.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Confidential Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-[#1A1816] border border-stone-200 dark:border-[#C5A880]/25 p-8 sm:p-12 rounded-2xl space-y-6 shadow-sm">
              {!isSubmitted ? (
                <>
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.25em] text-[#8C6B38] dark:text-[#C5A880] font-semibold">
                      {t.formKicker}
                    </span>
                    <h2 className="font-editorial text-3xl text-[#1C1917] dark:text-[#F5F2EB]">
                      {t.formTitle}
                    </h2>
                    <p className="text-xs text-[#57534E] dark:text-[#9E9991]">
                      {t.formSubtitle}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs text-[#57534E] dark:text-[#9E9991] block">{t.fullName} *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Eleanor Vance / M. Jean Tremblay"
                          className="w-full bg-stone-50 dark:bg-[#121110] border border-stone-300 dark:border-[#C5A880]/20 rounded-full px-5 py-2.5 text-xs text-[#1C1917] dark:text-[#F5F2EB] focus:outline-none focus:ring-2 focus:ring-[#8C6B38]"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs text-[#57534E] dark:text-[#9E9991] block">{t.email} *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full bg-stone-50 dark:bg-[#121110] border border-stone-300 dark:border-[#C5A880]/20 rounded-full px-5 py-2.5 text-xs text-[#1C1917] dark:text-[#F5F2EB] focus:outline-none focus:ring-2 focus:ring-[#8C6B38]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs text-[#57534E] dark:text-[#9E9991] block">{t.phone}</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 or +44 ..."
                          className="w-full bg-stone-50 dark:bg-[#121110] border border-stone-300 dark:border-[#C5A880]/20 rounded-full px-5 py-2.5 text-xs text-[#1C1917] dark:text-[#F5F2EB] focus:outline-none focus:ring-2 focus:ring-[#8C6B38]"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs text-[#57534E] dark:text-[#9E9991] block">{t.department} *</label>
                        <select
                          value={formData.department}
                          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                          className="w-full bg-stone-50 dark:bg-[#121110] border border-stone-300 dark:border-[#C5A880]/20 rounded-full px-5 py-2.5 text-xs text-[#1C1917] dark:text-[#F5F2EB] focus:outline-none focus:ring-2 focus:ring-[#8C6B38]"
                        >
                          <option value="Membership Admissions Committee">
                            {lang === 'fr' ? 'Comité des Admissions' : 'Membership Admissions Committee'}
                          </option>
                          <option value="Private Event & Salon Hire">
                            {lang === 'fr' ? 'Privatisation d’Événements et Salons' : 'Private Event & Salon Hire'}
                          </option>
                          <option value="Fine Dining & Sommelier Reservations">
                            {lang === 'fr' ? 'Réservations Haute Table & Sommelier' : 'Fine Dining & Sommelier Reservations'}
                          </option>
                          <option value="Thermal Spa & Wellness Bookings">
                            {lang === 'fr' ? 'Soins Thermaux & Espace Bien-Être' : 'Thermal Spa & Wellness Bookings'}
                          </option>
                          <option value="Reciprocal Club Privileges">
                            {lang === 'fr' ? 'Réciprocité Internationale des Clubs' : 'Reciprocal Club Privileges'}
                          </option>
                          <option value="General Secretariat">
                            {lang === 'fr' ? 'Secrétariat Général' : 'General Secretariat'}
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-[#57534E] dark:text-[#9E9991] block">{t.subject} *</label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder={lang === 'fr' ? 'Ex. Consultation d’adhésion ou dîner privé' : 'e.g. Prospective candidate inquiry or private dinner date'}
                        className="w-full bg-stone-50 dark:bg-[#121110] border border-stone-300 dark:border-[#C5A880]/20 rounded-full px-5 py-2.5 text-xs text-[#1C1917] dark:text-[#F5F2EB] focus:outline-none focus:ring-2 focus:ring-[#8C6B38]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-[#57534E] dark:text-[#9E9991] block">{t.message} *</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={lang === 'fr' ? 'Veuillez préciser la nature de votre demande...' : 'Please convey the details of your inquiry...'}
                        className="w-full bg-stone-50 dark:bg-[#121110] border border-stone-300 dark:border-[#C5A880]/20 rounded-2xl px-5 py-3 text-xs text-[#1C1917] dark:text-[#F5F2EB] focus:outline-none focus:ring-2 focus:ring-[#8C6B38]"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-[11px] text-[#57534E] dark:text-[#9E9991]">
                        <ShieldCheck className="w-4 h-4 text-[#8C6B38] dark:text-[#C5A880]" />
                        <span>{t.confidentialGuaranteed}</span>
                      </div>
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3.5 text-xs tracking-[0.18em] uppercase font-semibold text-[#121110] bg-[#C5A880] hover:bg-[#DFCAAA] transition-colors rounded-full flex items-center justify-center gap-2 shadow-sm"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>{t.sendBtn}</span>
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-12 space-y-5">
                  <div className="w-14 h-14 rounded-full bg-[#8C6B38]/20 dark:bg-[#C5A880]/20 border border-[#8C6B38] dark:border-[#C5A880] flex items-center justify-center mx-auto text-[#8C6B38] dark:text-[#C5A880]">
                    <Check className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-[0.25em] text-[#8C6B38] dark:text-[#C5A880] font-semibold">
                      Transmission Acknowledged
                    </span>
                    <h3 className="font-editorial text-3xl text-[#1C1917] dark:text-[#F5F2EB]">
                      Enquiry Registered
                    </h3>
                    <p className="text-xs text-[#8C6B38] dark:text-[#DFCAAA] font-mono tabular-nums">
                      Reference Number: {ticketRef}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-[#57534E] dark:text-[#9E9991] max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Your communication has been dispatched to the {formData.department}. A secretary will respond to {formData.email} within 24 hours.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 text-xs text-[#57534E] dark:text-[#9E9991] hover:text-[#1C1917] dark:hover:text-[#F5F2EB] rounded-full"
                    >
                      Send Another Message
                    </button>
                    <button
                      onClick={() => onNavigate('apply')}
                      className="px-7 py-3 text-xs uppercase tracking-wider font-semibold text-[#121110] bg-[#C5A880] hover:bg-[#DFCAAA] transition-colors rounded-full shadow-sm"
                    >
                      Begin Membership Application
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
