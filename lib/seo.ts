import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { toE164 } from '@/lib/whatsapp';

interface GenerateMetadataParams {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

export function generateMetadata({
  title,
  description,
  path = '/',
  image,
}: GenerateMetadataParams): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.name;
  const desc = description || siteConfig.description;
  const url = `${siteConfig.url}${path}`;
  const imageUrl = image
    ? image.startsWith('http')
      ? image
      : `${siteConfig.url}${image}`
    : undefined;

  return {
    // absolute يمنع تكرار اسم الشركة من قالب العنوان في layout.tsx
    title: { absolute: fullTitle },
    description: desc,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'ar_SA',
      url,
      title: fullTitle,
      description: desc,
      siteName: siteConfig.name,
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export function buildUrl(path: string): string {
  return `${siteConfig.url}${path}`;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: buildUrl(item.url),
    })),
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  areaServed?: string[];
}) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: { '@id': `${siteConfig.url}/#organization` },
    url: buildUrl(service.url),
  };
  if (service.areaServed && service.areaServed.length > 0) {
    schema.areaServed = service.areaServed.map((name) => ({
      '@type': 'City',
      name,
      containedInPlace: { '@type': 'Country', name: 'المملكة العربية السعودية' },
    }));
  }
  return schema;
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    url: buildUrl(article.url),
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
  };
}

export function generateOrganizationSchema() {
  const b = siteConfig.business;
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.jpeg`,
    image: `${siteConfig.url}/icon.jpeg`,
    inLanguage: 'ar-SA',
    areaServed: [
      'جدة',
      'الرياض',
      'المدينة المنورة',
      'منطقة القصيم',
    ].map((name) => ({ '@type': 'City', name })),
  };

  if (siteConfig.email) {
    schema.email = siteConfig.email;
  }
  if (siteConfig.phoneNumber) {
    schema.telephone = toE164(siteConfig.phoneNumber);
  }
  if (b.streetAddress || b.locality) {
    schema.address = {
      '@type': 'PostalAddress',
      ...(b.streetAddress && { streetAddress: b.streetAddress }),
      ...(b.locality && { addressLocality: b.locality }),
      ...(b.region && { addressRegion: b.region }),
      ...(b.postalCode && { postalCode: b.postalCode }),
      addressCountry: 'SA',
    };
  }
  if (b.foundedYear) {
    schema.foundingDate = b.foundedYear;
  }
  if (b.openingHours) {
    schema.openingHours = b.openingHours;
  }
  const sameAs = Object.values(siteConfig.socialLinks).filter(Boolean);
  if (sameAs.length > 0) {
    schema.sameAs = sameAs;
  }

  return schema;
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: 'ar-SA',
    publisher: { '@id': `${siteConfig.url}/#organization` },
  };
}


export function generateWebPageSchema(params: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: params.name,
    description: params.description,
    url: buildUrl(params.path),
    inLanguage: 'ar-SA',
    isPartOf: { '@type': 'WebSite', '@id': `${siteConfig.url}/#website` },
  };
}


export function generateItemListSchema(params: {
  name: string;
  path: string;
  items: Array<{ name: string; url: string }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: params.name,
    url: buildUrl(params.path),
    inLanguage: 'ar-SA',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: params.items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: buildUrl(item.url),
      })),
    },
  };
}
