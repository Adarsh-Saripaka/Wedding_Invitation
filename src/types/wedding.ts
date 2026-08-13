/**
 * Core TypeScript types for the Wedding Invitation site.
 * Customize these interfaces to match your wedding details.
 */

export interface WeddingCouple {
  bride: PersonInfo;
  groom: PersonInfo;
}

export interface PersonInfo {
  firstName: string;
  lastName: string;
  fullName: string;
  parentNames?: string;
  photo?: string;
  bio?: string;
}

export interface WeddingEvent {
  id: string;
  name: string;
  date: Date;
  startTime: string;
  endTime?: string;
  venue: VenueInfo;
  description?: string;
  dressCode?: string;
  icon?: string;
}

export interface VenueInfo {
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode?: string;
  country: string;
  mapUrl?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  phone?: string;
  website?: string;
}

export interface RSVPFormData {
  guestName: string;
  email: string;
  phone?: string;
  attending: 'yes' | 'no' | 'maybe';
  numberOfGuests: number;
  dietaryRestrictions?: string;
  songRequest?: string;
  message?: string;
  events: string[]; // IDs of events they'll attend
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category?: 'engagement' | 'pre-wedding' | 'ceremony' | 'reception' | 'other';
  width?: number;
  height?: number;
}

export interface TimelineItem {
  id: string;
  title: string;
  date: string;
  description: string;
  image?: string;
  icon?: string;
}

export interface WeddingConfig {
  couple: WeddingCouple;
  weddingDate: Date;
  events: WeddingEvent[];
  gallery: GalleryImage[];
  timeline: TimelineItem[];
  theme: WeddingTheme;
  features: WeddingFeatures;
}

export interface WeddingTheme {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  fontFamily: string;
  headingFont: string;
  bodyFont: string;
}

export interface WeddingFeatures {
  rsvp: boolean;
  gallery: boolean;
  timeline: boolean;
  countdown: boolean;
  guestBook: boolean;
  registry: boolean;
  liveStream: boolean;
  directions: boolean;
}

export interface GuestBookEntry {
  id: string;
  name: string;
  message: string;
  timestamp: Date;
  avatar?: string;
}

export interface RegistryItem {
  id: string;
  name: string;
  store: string;
  url: string;
  logo?: string;
}
