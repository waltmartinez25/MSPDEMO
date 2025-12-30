
export interface NavItem {
  label: string;
  path: string;
  dropdown?: NavItem[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  fullDescription?: string;
  benefits?: string[];
  pricing?: ServiceTier[];
  faqs?: FAQItem[];
}

export interface ServiceTier {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  certifications: string[];
}

export interface Project {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  description: string;
  results: string[];
  image: string;
}
