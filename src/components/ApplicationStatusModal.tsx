/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, Search, ShieldCheck, ArrowRight } from 'lucide-react';
import { SubmittedApplication } from '../types';
import { Language } from '../i18n/translations';

interface ApplicationStatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToApply: () => void;
  lang: Language;
}

export const ApplicationStatusModal: React.FC<ApplicationStatusModalProps> = ({
  isOpen,
  onClose,
  onNavigateToApply,
  lang
}) => {
  const [refInput, setRefInput] = useState('');
  const [searchedRecord, setSearchedRecord] = useState<SubmittedApplication | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const activeRef = localStorage.getItem('meridian_active_ref');
      if (activeRef) {
        setRefInput(activeRef);
        lookupApplication(activeRef);
      }
    }
  }, [isOpen]);

  const lookupApplication = (ref: string) => {
    setHasSearched(true);
    const trimmed = ref.trim().toUpperCase();
    try {
      const apps: SubmittedApplication[] = JSON.parse(localStorage.getItem('meridian_applications') || '[]');
      const match = apps.find(a => a.referenceNumber.toUpperCase() === trimmed);
      if (match) {
        setSearchedRecord(match);
      } else if (trimmed.startsWith('MC-')) {
        setSearchedRecord({
          referenceNumber: trimmed,
          submittedAt: lang === 'fr' ? '3 Novembre 2026' : '3 November 2026',
          status: 'Sponsorship Verification',
          targetReviewDate: lang === 'fr' ? '17 Novembre 2026' : '17 November 2026',
          data: {
            fullName: 'Me Jean-Luc Bouchard',
            preferredName: 'Jean-Luc',
            email: 'jl.bouchard@laurentiancap.ca',
            phone: '+1 (514) 840-0912',
            city: 'Montréal',
            country: 'Canada',
            company: 'Laurentian Strategic Capital',
            title: 'Managing Director & Founder',
            industry: 'Private Equity & Banking',
            linkedInOrBio: '',
            selectedTier: 'global',
            primaryMotivation: 'Seeking a confidential space for cross-border syndicates and quiet fireside thought.',
            communityContribution: 'Hosting sovereign tech investment salons and supporting club art acquisitions.',
            hasSponsor: true,
            sponsorOneName: 'Sir Jonathan Prescott',
            sponsorOneEmail: 'j.prescott@harringford.com',
            sponsorTwoName: 'Camilla Lindqvist',
            sponsorTwoEmail: 'c.lindqvist@nordicventures.com',
            committeeReviewRequested: false,
            areasOfInterest: ['Haute Gastronomy & Sommelier Allocations', 'Subterranean Thermal Sanctuary'],
            privateDiningFrequency: 'Weekly',
            dietaryOrAllergies: 'None',
            agreedToHouseRules: true,
            confidentialityAccepted: true,
            accuracyAffirmed: true
          }
        });
      } else {
        setSearchedRecord(null);
      }
    } catch (err) {
      setSearchedRecord(null);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    lookupApplication(refInput);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white dark:bg-[#1A1816] text-[#1C1917] dark:text-[#F5F2EB] border border-stone-300 dark:border-[#C5A880]/35 rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 relative text-left shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#57534E] dark:text-[#9E9991] hover:text-[#1C1917] dark:hover:text-[#F5F2EB] p-2 rounded-full"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8C6B38] dark:text-[#C5A880] font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{lang === 'fr' ? 'Recherche de Dossier Candidat' : 'Candidate Dossier Lookup'}</span>
          </div>
          <h3 className="font-editorial text-2xl sm:text-3xl text-[#1C1917] dark:text-[#F5F2EB]">
            {lang === 'fr' ? 'Suivre l’Avancement du Dossier' : 'Track Application Status'}
          </h3>
          <p className="text-xs text-[#57534E] dark:text-[#9E9991]">
            {lang === 'fr'
              ? 'Saisissez votre numéro officiel de référence (ex. MC-2026-XXXX).'
              : 'Enter your official Candidate Dossier Reference number (e.g., MC-2026-XXXX).'}
          </p>
        </div>

        {/* Search bar with rounded-full */}
        <form onSubmit={handleSearchSubmit} className="flex gap-2">
          <input
            type="text"
            required
            value={refInput}
            onChange={(e) => setRefInput(e.target.value)}
            placeholder="e.g. MC-2026-8842"
            className="flex-1 bg-stone-50 dark:bg-[#121110] border border-stone-300 dark:border-[#C5A880]/20 rounded-full px-5 py-2.5 text-xs text-[#1C1917] dark:text-[#F5F2EB] uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-[#8C6B38]"
          />
          <button
            type="submit"
            className="px-6 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#121110] bg-[#C5A880] hover:bg-[#DFCAAA] transition-colors rounded-full flex items-center gap-1.5 shadow-sm"
          >
            <Search className="w-3.5 h-3.5" />
            <span>{lang === 'fr' ? 'Consulter' : 'Lookup'}</span>
          </button>
        </form>

        {/* Results */}
        {hasSearched && searchedRecord && (
          <div className="space-y-6 pt-2">
            <div className="p-4 bg-stone-50 dark:bg-[#121110] border border-stone-200 dark:border-[#C5A880]/25 rounded-2xl space-y-2 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-stone-200 dark:border-[#C5A880]/15">
                <div>
                  <span className="text-[#57534E] dark:text-[#9E9991] text-[11px] block">
                    {lang === 'fr' ? 'Dossier du Candidat' : 'Candidate Dossier'}
                  </span>
                  <span className="font-editorial text-lg text-[#1C1917] dark:text-[#F5F2EB] font-medium">{searchedRecord.data.fullName}</span>
                </div>
                <div className="text-right">
                  <span className="text-[#57534E] dark:text-[#9E9991] text-[11px] block">
                    {lang === 'fr' ? 'Référence' : 'Reference'}
                  </span>
                  <span className="font-mono text-xs text-[#8C6B38] dark:text-[#C5A880] font-semibold">{searchedRecord.referenceNumber}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                <div>
                  <span className="text-[#57534E] dark:text-[#9E9991] block">
                    {lang === 'fr' ? 'Déposé le :' : 'Filed On:'}
                  </span>
                  <span className="text-[#8C6B38] dark:text-[#DFCAAA] font-medium">{searchedRecord.submittedAt}</span>
                </div>
                <div>
                  <span className="text-[#57534E] dark:text-[#9E9991] block">
                    {lang === 'fr' ? 'Délibération Prévue :' : 'Target Deliberation:'}
                  </span>
                  <span className="text-[#8C6B38] dark:text-[#DFCAAA] font-medium">{searchedRecord.targetReviewDate}</span>
                </div>
              </div>
            </div>

            {/* Admissions Progress Pipeline */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-[0.16em] text-[#1C1917] dark:text-[#F5F2EB] font-semibold">
                {lang === 'fr' ? 'Progression de l’Instruction du Dossier' : 'Admissions Governance Pipeline'}
              </h4>

              <div className="space-y-3 text-xs">
                {/* Step 1 */}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8C6B38] dark:bg-[#C5A880] text-white dark:text-[#121110] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <span className="font-semibold text-[#1C1917] dark:text-[#F5F2EB] block">
                      {lang === 'fr' ? 'Dossier Reçu et Vérifié' : 'Dossier Received & Verified'}
                    </span>
                    <span className="text-[#57534E] dark:text-[#9E9991] text-[11px]">
                      {lang === 'fr' ? 'Vérification préalable de sécurité et des coordonnées.' : 'Professional credentials and contact details authenticated.'}
                    </span>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8C6B38] dark:bg-[#C5A880] text-white dark:text-[#121110] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <span className="font-semibold text-[#1C1917] dark:text-[#F5F2EB] block">
                      {lang === 'fr' ? 'Prise de Contact avec les Parrains' : 'Peer Sponsorship Contact'}
                    </span>
                    <span className="text-[#57534E] dark:text-[#9E9991] text-[11px]">
                      {lang === 'fr' ? 'Confirmation d’avis auprès des membres proposants.' : 'Confidential inquiry transmitted to candidate proposers.'}
                    </span>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8C6B38]/20 dark:bg-[#C5A880]/20 border border-[#8C6B38] dark:border-[#C5A880] text-[#8C6B38] dark:text-[#C5A880] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <span className="font-semibold text-[#8C6B38] dark:text-[#C5A880] block">
                      {lang === 'fr' ? 'Délibération du Comité (En Cours)' : 'Committee Deliberation & Roster Review (In Progress)'}
                    </span>
                    <span className="text-[#57534E] dark:text-[#9E9991] text-[11px]">
                      {lang === 'fr' ? 'Examen bi-mensuel de l’équilibre confraternel du club.' : 'Admissions Committee bi-monthly seating evaluates roster balance.'}
                    </span>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start gap-3 opacity-50">
                  <div className="w-5 h-5 rounded-full bg-stone-200 dark:bg-[#24211D] text-[#57534E] dark:text-[#9E9991] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <span className="font-medium text-[#57534E] dark:text-[#9E9991] block">
                      {lang === 'fr' ? 'Entretien avec un Gouverneur' : 'Governor Private Coffee'}
                    </span>
                    <span className="text-[#57534E] dark:text-[#9E9991] text-[11px]">
                      {lang === 'fr' ? 'Rencontre informelle et visite privée de l’hôtel.' : 'Informal meeting and private house walkthrough.'}
                    </span>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex items-start gap-3 opacity-50">
                  <div className="w-5 h-5 rounded-full bg-stone-200 dark:bg-[#24211D] text-[#57534E] dark:text-[#9E9991] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    5
                  </div>
                  <div>
                    <span className="font-medium text-[#57534E] dark:text-[#9E9991] block">
                      {lang === 'fr' ? 'Élection et Remise des Clés' : 'Election & Key Card Presentation'}
                    </span>
                    <span className="text-[#57534E] dark:text-[#9E9991] text-[11px]">
                      {lang === 'fr' ? 'Inscription officielle au registre du Meridian.' : 'Formal accession to the Meridian membership roll.'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {hasSearched && !searchedRecord && (
          <div className="p-6 bg-stone-50 dark:bg-[#121110] border border-stone-200 dark:border-[#C5A880]/20 rounded-2xl text-center space-y-3">
            <p className="text-xs text-[#57534E] dark:text-[#9E9991]">
              {lang === 'fr'
                ? `Aucun dossier trouvé pour "${refInput}". Vérifiez votre référence ou débutez une nouvelle candidature.`
                : `No candidate dossier currently found matching "${refInput}". Please check your reference code or begin a new application.`}
            </p>
            <button
              onClick={() => {
                onClose();
                onNavigateToApply();
              }}
              className="text-xs uppercase tracking-wider text-[#8C6B38] dark:text-[#C5A880] hover:underline font-semibold inline-flex items-center gap-1"
            >
              <span>{lang === 'fr' ? 'Débuter une Nouvelle Candidature' : 'Begin New Application'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <div className="pt-2 flex justify-between items-center text-[11px] text-[#57534E] dark:text-[#9E9991] border-t border-stone-100 dark:border-[#C5A880]/15">
          <span>Admissions Secretariat: +44 (0) 20 7946 0890</span>
          <button
            onClick={onClose}
            className="hover:text-[#1C1917] dark:hover:text-[#F5F2EB] transition-colors"
          >
            {lang === 'fr' ? 'Fermer' : 'Dismiss'}
          </button>
        </div>
      </div>
    </div>
  );
};
