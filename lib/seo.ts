import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

interface PageSEOInput {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path = '/',
  image = '/icon.jpeg',
  type = 'website',
  publishedTime,
  modifiedTime,
  noIndex = false,
}: PageSEOInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = title;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      locale: 'ar_SA',
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.nameEn,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/icon.jpeg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'جدة',
      addressRegion: 'مكة المكرمة',
      addressCountry: 'SA',
    },
    areaServed: {
      '@type': 'City',
      name: 'جدة',
    },
    description: siteConfig.description,
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: 'ar-SA',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/services?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: siteConfig.name,
    image: `${siteConfig.url}/icon.jpeg`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'جدة',
      addressRegion: 'مكة المكرمة',
      addressCountry: 'SA',
    },
    areaServed: 'جدة والمملكة العربية السعودية',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '08:00',
        closes: '22:00',
      },
    ],
    priceRange: '$$',
  };
}

export function serviceSchema(service: {
  name: string;
  shortDescription: string;
  slug: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.shortDescription,
    provider: {
      '@type': 'GeneralContractor',
      name: siteConfig.name,
      telephone: siteConfig.phone,
      areaServed: { '@type': 'City', name: 'جدة' },
    },
    areaServed: { '@type': 'City', name: 'جدة' },
    ...(service.image && { image: `${siteConfig.url}${service.image}` }),
    url: `${siteConfig.url}/services/${service.slug}`,
  };
}

export function articleSchema(article: {
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  date: string;
  author: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: `${siteConfig.url}${article.image}`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Organization',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${article.slug}`,
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
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
