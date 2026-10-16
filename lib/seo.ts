import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

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

  return {
    title: fullTitle,
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
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
      images: image ? [image] : undefined,
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
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    url: buildUrl(service.url),
  };
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
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
  };

  if (siteConfig.email) {
    schema.email = siteConfig.email;
  }
  if (siteConfig.phoneNumber) {
    schema.telephone = siteConfig.phoneNumber;
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
