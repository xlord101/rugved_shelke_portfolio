export interface SiteConfig {
  personName: string;
  professionalTitle: string;
  location: string;
  timezone: string;
  bioShort: string;
  availabilityStatus: string;
  resumeUrl: string;
  tools: ToolItem[];
}

export interface ToolItem {
  name: string;
  category: string;
  icon: string;
}

export interface AboutContent {
  heading: string;
  introBioWords: string[];
  introBioText: string;
  portraitImage: string;
  closingHeading: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  company: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  category: string;
  year: string;
  image: string;
  gallery?: string[];
  overview: string;
  challenge?: string;
  solution?: string;
  client?: string;
  role?: string;
  liveUrl?: string;
  linkLabel?: string;
  links?: { label: string; url: string }[];
  scope?: string[];
}

export interface SocialLink {
  label: string;
  handle: string;
  url: string;
}

export interface ContactContent {
  headline: string;
  email: string;
  phone: string;
  socials: SocialLink[];
  projectTypes: string[];
  budgetRanges: string[];
  availabilityNotice: string;
}
