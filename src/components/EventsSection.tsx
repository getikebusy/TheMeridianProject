/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageSection, ClubEvent } from '../types';
import { UPCOMING_EVENTS } from '../data/clubData';
import { Calendar, Clock, MapPin, User, Shield, Check, X, ArrowRight } from 'lucide-react';
import { Language, translations } from '../i18n/translations';

interface EventsSectionProps {
  onNavigate: (section: PageSection) => void;
  lang: Language;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onNavigate, lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeRsvpEvent, setActiveRsvpEvent] = useState<ClubEvent | null>(null);
  const [rsvpSuccess, setRsvpSuccess] = useState(false);
  const [rsvpForm, setRsvpForm] = useState({
    name: '',
    email: '',
    memberId: '',
    guestCount: 1,
    notes: ''
  });

  const t = translations[lang].events;

  const categories = lang === 'fr' ? [
    'All',
    'Colloques & Débats',
    'Gastronomie & Vin',
    'Table Ronde Exécutive',
    'Vernissage Culturel',
    'Retraite Bien-Être'
  ] : [
    'All',
    'Executive Roundtable',
    'Gastronomy & Wine',
    'Salon & Discourse',
    'Cultural Preview',
    'Wellness Retreat'
  ];

  const filteredEvents = selectedCategory === 'All'
    ? UPCOMING_EVENTS
    : UPCOMING_EVENTS.filter(e => {
        if (selectedCategory === 'Executive Roundtable') return e.category === 'Executive Roundtable';
        if (selectedCategory === 'Gastronomy & Wine') return e.category === 'Gastronomy & Wine';
        if (selectedCategory === 'Salon & Discourse') return e.category === 'Salon & Discourse';
        if (selectedCategory === 'Cultural Preview') return e.category === 'Cultural Preview';
        if (selectedCategory === 'Wellness Retreat') return e.category === 'Wellness Retreat';
        return true;
      });

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRsvpSuccess(true);
  };

  const closeRsvpModal = () => {
    setActiveRsvpEvent(null);
    setRsvpSuccess(false);
    setRsvpForm({ name: '', email: '', memberId: '', guestCount: 1, notes: '' });
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

      {/* 2. Interactive Filter Bar with rounded-full */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 text-xs uppercase tracking-wider rounded-full transition-all whitespace-nowrap shrink-0 font-medium ${
                selectedCategory === cat
                  ? 'bg-[#C5A880] text-[#121110] font-semibold shadow-sm'
                  : 'bg-white dark:bg-[#1A1816] text-[#57534E] dark:text-[#9E9991] hover:text-[#1C1917] dark:hover:text-[#F5F2EB] border border-stone-200 dark:border-[#C5A880]/15'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-white dark:bg-[#1A1816] border border-stone-200 dark:border-[#C5A880]/20 hover:border-[#8C6B38] dark:hover:border-[#C5A880]/50 rounded-2xl p-7 flex flex-col justify-between space-y-6 transition-all duration-200 shadow-sm"
            >
              <div className="space-y-4">
                {/* Category & Status */}
                <div className="flex items-center justify-between text-xs text-[#57534E] dark:text-[#9E9991]">
                  <span className="text-[#8C6B38] dark:text-[#C5A880] tracking-wider uppercase font-semibold">
                    {evt.category}
                  </span>
                  <span className="tabular-nums font-medium">
                    {evt.capacityRemaining} {t.seatsLeft}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-editorial text-2xl text-[#1C1917] dark:text-[#F5F2EB] leading-snug">
                  {evt.title}
                </h3>

                {/* Host */}
                <div className="flex items-start gap-2.5 text-xs text-[#1C1917] dark:text-[#DFCAAA]">
                  <User className="w-3.5 h-3.5 text-[#8C6B38] dark:text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block">{evt.host}</span>
                    <span className="text-[#57534E] dark:text-[#9E9991]">{evt.hostTitle}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-[#57534E] dark:text-[#9E9991] leading-relaxed">
                  {evt.description}
                </p>

                {/* Logistics */}
                <div className="pt-2 space-y-2 text-xs text-[#57534E] dark:text-[#9E9991] border-t border-stone-100 dark:border-[#C5A880]/10">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#8C6B38] dark:text-[#C5A880]" />
                    <span className="text-[#1C1917] dark:text-[#F5F2EB] font-medium">{evt.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#8C6B38] dark:text-[#C5A880]" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#8C6B38] dark:text-[#C5A880]" />
                    <span>{evt.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-3.5 h-3.5 text-[#8C6B38] dark:text-[#C5A880]" />
                    <span className="italic">{evt.dressCode}</span>
                  </div>
                </div>
              </div>

              {/* Action Button with rounded-full */}
              <div className="pt-4 border-t border-stone-100 dark:border-[#C5A880]/15">
                <button
                  onClick={() => setActiveRsvpEvent(evt)}
                  className="w-full py-3.5 text-xs tracking-[0.16em] uppercase font-semibold text-[#121110] bg-[#C5A880] hover:bg-[#DFCAAA] transition-colors rounded-full flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>{t.requestSeat}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Non-Member Guest Policy Notice */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="p-8 bg-white dark:bg-[#1A1816] border border-stone-200 dark:border-[#C5A880]/20 rounded-2xl space-y-4 text-center shadow-sm">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C6B38] dark:text-[#C5A880] font-semibold block">
            {t.guestProtocolKicker}
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl text-[#1C1917] dark:text-[#F5F2EB]">
            {t.guestProtocolTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#57534E] dark:text-[#9E9991] leading-relaxed max-w-xl mx-auto">
            {t.guestProtocolSubtitle}
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('apply')}
              className="px-7 py-3 text-xs uppercase tracking-wider font-semibold text-[#121110] bg-[#C5A880] hover:bg-[#DFCAAA] transition-colors rounded-full shadow-md"
            >
              {t.guestProtocolBtn}
            </button>
          </div>
        </div>
      </section>

      {/* Reservation & RSVP Modal */}
      {activeRsvpEvent && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white dark:bg-[#1A1816] text-[#1C1917] dark:text-[#F5F2EB] border border-stone-300 dark:border-[#C5A880]/40 rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 relative text-left shadow-2xl">
            <button
              onClick={closeRsvpModal}
              className="absolute top-6 right-6 text-[#57534E] dark:text-[#9E9991] hover:text-[#1C1917] dark:hover:text-[#F5F2EB] p-2 rounded-full"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!rsvpSuccess ? (
              <>
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#8C6B38] dark:text-[#C5A880] font-semibold">
                    Seat Reservation Request
                  </span>
                  <h3 className="font-editorial text-2xl text-[#1C1917] dark:text-[#F5F2EB]">
                    {activeRsvpEvent.title}
                  </h3>
                  <p className="text-xs text-[#57534E] dark:text-[#9E9991]">
                    {activeRsvpEvent.date} · {activeRsvpEvent.time} · {activeRsvpEvent.location}
                  </p>
                </div>

                <form onSubmit={handleRsvpSubmit} className="space-y-4 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs text-[#57534E] dark:text-[#9E9991] block">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={rsvpForm.name}
                        onChange={(e) => setRsvpForm({ ...rsvpForm, name: e.target.value })}
                        placeholder="Sir/Lord/Dr/Ms..."
                        className="w-full bg-stone-50 dark:bg-[#121110] border border-stone-300 dark:border-[#C5A880]/20 rounded-full px-4 py-2.5 text-xs text-[#1C1917] dark:text-[#F5F2EB] focus:outline-none focus:ring-2 focus:ring-[#8C6B38]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs text-[#57534E] dark:text-[#9E9991] block">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={rsvpForm.email}
                        onChange={(e) => setRsvpForm({ ...rsvpForm, email: e.target.value })}
                        placeholder="name@organization.com"
                        className="w-full bg-stone-50 dark:bg-[#121110] border border-stone-300 dark:border-[#C5A880]/20 rounded-full px-4 py-2.5 text-xs text-[#1C1917] dark:text-[#F5F2EB] focus:outline-none focus:ring-2 focus:ring-[#8C6B38]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs text-[#57534E] dark:text-[#9E9991] block">Member Number or "Prospective"</label>
                      <input
                        type="text"
                        value={rsvpForm.memberId}
                        onChange={(e) => setRsvpForm({ ...rsvpForm, memberId: e.target.value })}
                        placeholder="e.g. MC-8824 or Candidate"
                        className="w-full bg-stone-50 dark:bg-[#121110] border border-stone-300 dark:border-[#C5A880]/20 rounded-full px-4 py-2.5 text-xs text-[#1C1917] dark:text-[#F5F2EB] focus:outline-none focus:ring-2 focus:ring-[#8C6B38]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs text-[#57534E] dark:text-[#9E9991] block">Seats Requested</label>
                      <select
                        value={rsvpForm.guestCount}
                        onChange={(e) => setRsvpForm({ ...rsvpForm, guestCount: parseInt(e.target.value) })}
                        className="w-full bg-stone-50 dark:bg-[#121110] border border-stone-300 dark:border-[#C5A880]/20 rounded-full px-4 py-2.5 text-xs text-[#1C1917] dark:text-[#F5F2EB] focus:outline-none focus:ring-2 focus:ring-[#8C6B38]"
                      >
                        <option value={1}>1 Seat (Member Only)</option>
                        <option value={2}>2 Seats (Member + 1 Guest)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-[#57534E] dark:text-[#9E9991] block">Special Dietary or Seating Notes</label>
                    <textarea
                      rows={2}
                      value={rsvpForm.notes}
                      onChange={(e) => setRsvpForm({ ...rsvpForm, notes: e.target.value })}
                      placeholder="Specify dietary preferences or arrival timing..."
                      className="w-full bg-stone-50 dark:bg-[#121110] border border-stone-300 dark:border-[#C5A880]/20 rounded-xl px-4 py-2 text-xs text-[#1C1917] dark:text-[#F5F2EB] focus:outline-none focus:ring-2 focus:ring-[#8C6B38]"
                    />
                  </div>

                  <div className="p-3.5 bg-stone-100 dark:bg-[#24211D] border border-stone-200 dark:border-[#C5A880]/15 rounded-xl text-[11px] text-[#57534E] dark:text-[#9E9991]">
                    <span className="text-[#8C6B38] dark:text-[#C5A880] font-semibold block">Chatham House Rule Acknowledgment</span>
                    Participants agree that neither the identity nor the affiliation of the speakers or participants may be revealed.
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={closeRsvpModal}
                      className="px-5 py-2.5 text-xs text-[#57534E] dark:text-[#9E9991] hover:text-[#1C1917] dark:hover:text-[#F5F2EB] rounded-full"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-7 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#121110] bg-[#C5A880] hover:bg-[#DFCAAA] transition-colors rounded-full shadow-sm"
                    >
                      Confirm Seat Request
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#8C6B38]/20 dark:bg-[#C5A880]/20 border border-[#8C6B38] dark:border-[#C5A880] flex items-center justify-center mx-auto text-[#8C6B38] dark:text-[#C5A880]">
                  <Check className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-editorial text-2xl text-[#1C1917] dark:text-[#F5F2EB]">
                    Reservation Placed on House Register
                  </h3>
                  <p className="text-xs text-[#8C6B38] dark:text-[#DFCAAA] font-mono">
                    Reference: RES-{Math.floor(100000 + Math.random() * 900000)}
                  </p>
                </div>
                <p className="text-xs text-[#57534E] dark:text-[#9E9991] max-w-sm mx-auto leading-relaxed">
                  Thank you, {rsvpForm.name}. A formal calendar invitation and security clearance slip for {activeRsvpEvent.title} has been transmitted to {rsvpForm.email}.
                </p>
                <div className="pt-4">
                  <button
                    onClick={closeRsvpModal}
                    className="px-7 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#121110] bg-[#C5A880] hover:bg-[#DFCAAA] transition-colors rounded-full"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
