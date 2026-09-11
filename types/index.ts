export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
  icon?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName?: string;
  shortDescription: string;
  longDescription: string;
  heroTitle: string;
  heroDescription: string;
  keywords: string[];
  secondaryKeywords: string[];
  image: string;
  imageAlt: string;
  gallery?: string[];
  benefits: ServiceBenefit[];
  process: ProcessStep[];
  applications: string[];
  types?: { title: string; description: string }[];
  materials?: string[];
  qualityConsiderations: string[];
  commonProblems: { problem: string; solution: string }[];
  approach: string[];
  faq: ServiceFaq[];
  relatedServices: string[];
  relatedProjects: string[];
  relatedArticles: string[];
  seoTitle: string;
  seoDescription: string;
  featured?: boolean;
  icon?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  imageAlt: string;
  gallery?: string[];
  scope: string[];
  duration?: string;
  service: string;
  relatedServices: string[];
  relatedArticles: string[];
  seoTitle: string;
  seoDescription: string;
  featured?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: { heading: string; body: string }[];
  category: string;
  image: string;
  imageAlt: string;
  date: string;
  readTime: string;
  author: string;
  relatedService: string;
  relatedArticles: string[];
  relatedProjects: string[];
  seoTitle: string;
  seoDescription: string;
  featured?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}
