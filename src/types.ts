/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageSection = 
  | 'home' 
  | 'the-club' 
  | 'membership' 
  | 'experiences' 
  | 'events' 
  | 'contact' 
  | 'apply';

export type MembershipTierId = 'resident' | 'global' | 'patron' | 'emerging';

export interface MembershipTier {
  id: MembershipTierId;
  name: string;
  tagline: string;
  idealFor: string;
  initiationFee: string;
  annualDues: string;
  privileges: string[];
  exclusiveFeatures: string[];
  isHighlighted?: boolean;
}

export interface Facility {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  specifications: string[];
  image: string;
  hours: string;
  capacity?: string;
  etiquette: string;
}

export interface ClubEvent {
  id: string;
  title: string;
  category: 'Salon & Discourse' | 'Gastronomy & Wine' | 'Executive Roundtable' | 'Cultural Preview' | 'Wellness Retreat';
  date: string;
  time: string;
  location: string;
  host: string;
  hostTitle: string;
  description: string;
  dressCode: string;
  capacityRemaining: number;
}

export interface MemberTestimonial {
  quote: string;
  author: string;
  title: string;
  organization: string;
  tier: string;
  yearJoined: string;
}

export interface ApplicationFormData {
  // Step 1: Personal & Professional
  fullName: string;
  preferredName: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  company: string;
  title: string;
  industry: string;
  linkedInOrBio: string;
  
  // Step 2: Membership Tier & Intent
  selectedTier: MembershipTierId;
  primaryMotivation: string;
  communityContribution: string;

  // Step 3: Sponsorship
  hasSponsor: boolean;
  sponsorOneName: string;
  sponsorOneEmail: string;
  sponsorTwoName: string;
  sponsorTwoEmail: string;
  committeeReviewRequested: boolean;

  // Step 4: Engagement & Lifestyle
  areasOfInterest: string[];
  privateDiningFrequency: string;
  dietaryOrAllergies: string;

  // Step 5: Ethics & Declaration
  agreedToHouseRules: boolean;
  confidentialityAccepted: boolean;
  accuracyAffirmed: boolean;
}

export interface SubmittedApplication {
  referenceNumber: string;
  submittedAt: string;
  status: 'Pending Committee Review' | 'Sponsorship Verification' | 'Governor Interview Slated' | 'Elected';
  data: ApplicationFormData;
  targetReviewDate: string;
}
