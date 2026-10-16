import { notFound } from 'next/navigation';
import { generateMetadata as generatePageMetadata, generateArticleSchema, generateBreadcrumbSchema, buildUrl } from '@/lib/seo';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { ArticleCard } from '@/components/blog/article-card';
import { getArticle, getRelatedArticles } from '@/data/articles';
import { getServiceById } from '@/data/services';
import { getCityById } from '@/data/cities';
import { WhatsAppCTA } from '@/components/layout/cta-buttons';
import Link from 'next/link';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';

interface PageProps {
  params: { slug: string };
}

import { JsonLd } from '@/components/seo/json-ld';
export function generateStaticParams() {
  return [
    { slug: 'glass-facade-maintenance-tips' },
    { slug: 'interior-vs-exterior-glass-cleaning' },
    { slug: 'ceramic-vs-porcelain-differences' },
    { slug: 'marble-care-maintenance' },
    { slug: 'interior-painting-preparation' },
    { slug: 'choosing-flooring-guide' },
    { slug: 'office-cleaning-importance' },
    { slug: 'post-construction-cleaning-guide' },
  ];
}

export async function generateMetadata({ params }: PageProps) {
  const article = getArticle(params.slug);
  if (!article) return {};
  return generatePageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/blog/${article.slug}`,
  });
}

function renderContent(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = (key: number) => {
    if (listItems.length === 0) return;
    elements.push(
      <ul key={`ul-${key}`} className="space-y-2 my-4 pr-6">
        {listItems.map((item, i) => (
          <li key={i} className="text-sm lg:text-base text-muted-foreground flex items-start gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs shrink-0 mt-0.5">•</span>
            <span>{item.replace(/^- /, '')}</span>
          </li>
        ))}
      </ul>
    );
    listItems = [];
  };

  lines.forEach((line, index) => {
    if (line.startsWith('## ')) {
      flushList(index);
      elements.push(
        <h2 key={index} className="text-xl font-bold mt-6 mb-3">
          {line.replace('## ', '')}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      flushList(index);
      elements.push(
        <h3 key={index} className="text-lg font-bold mt-4 mb-2">
          {line.replace('### ', '')}
        </h3>
      );
    } else if (line.startsWith('- ')) {
      listItems.push(line);
    } else if (line.match(/^\d+\. /)) {
      listItems.push(line.replace(/^\d+\. /, ''));
    } else if (line.trim() === '') {
      flushList(index);
    } else {
      flushList(index);
      elements.push(
        <p key={index} className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-3">
          {line}
        </p>
      );
    }
  });
  flushList(9999);

  return elements;
}

export default function ArticlePage({ params }: PageProps) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const relatedArticles = getRelatedArticles(article);
  const date = new Date(article.publishedAt).toLocaleDateString('ar-SA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const articleSchema = {
    ...generateArticleSchema({
      title: article.title,
      description: article.excerpt,
      url: `/blog/${article.slug}`,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
    }),
    image: buildUrl(article.image),
    inLanguage: 'ar-SA',
    mainEntityOfPage: buildUrl(`/blog/${article.slug}`),
  };
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'الرئيسية', url: '/' },
    { name: 'المقالات', url: '/blog' },
    { name: article.title, url: `/blog/${article.slug}` },
  ]);

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'الرئيسية', href: '/' },
            { label: 'المقالات', href: '/blog' },
            { label: article.title },
          ]}
        />

        <div className="mt-6 max-w-3xl mx-auto">
          {/* Hero image */}
          <div className="relative rounded-2xl overflow-hidden h-64 lg:h-80 mb-6">
            <img
              src={article.image}
              alt={article.imageAlt}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Meta */}
          <div className="flex items-center gap-4 mb-4">
            <span className="inline-flex items-center gap-1 text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
              <Tag className="h-3 w-3" />
              {article.category}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              {date}
            </span>
          </div>

          <h1 className="text-2xl lg:text-3xl font-bold mb-4">{article.title}</h1>
          <p className="text-base text-muted-foreground mb-8 leading-relaxed">
            {article.excerpt}
          </p>

          {/* Content */}
          <div className="space-y-2">
            {renderContent(article.content)}
          </div>

          {/* Related services */}
          {article.relatedServiceIds.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-bold text-lg mb-4">خدمات ذات صلة</h3>
              <div className="flex flex-wrap gap-2">
                {article.relatedServiceIds.map((id) => {
                  const service = getServiceById(id);
                  if (!service) return null;
                  return (
                    <Link
                      key={id}
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1 text-sm bg-primary/10 text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors"
                    >
                      <ArrowLeft className="h-3 w-3" />
                      {service.shortName}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Related cities */}
          {article.relatedCityIds.length > 0 && (
            <div className="mt-6">
              <h3 className="font-bold text-lg mb-4">المدن المتوفرة فيها الخدمة</h3>
              <div className="flex flex-wrap gap-2">
                {article.relatedCityIds.map((id) => {
                  const city = getCityById(id);
                  if (!city) return null;
                  return (
                    <Link
                      key={id}
                      href={`/cities/${city.slug}`}
                      className="inline-flex items-center gap-1 text-sm bg-muted text-muted-foreground px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors"
                    >
                      <ArrowLeft className="h-3 w-3" />
                      {city.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 p-6 rounded-xl bg-primary text-white text-center">
            <h3 className="font-bold text-lg mb-2">هل تحتاج إلى هذه الخدمة؟</h3>
            <p className="text-sm text-white/80 mb-4">
              تواصل معنا للحصول على عرض سعر مخصص.
            </p>
            <WhatsAppCTA
              serviceName="الخدمات"
              variant="whatsapp"
              label="اطلب الخدمة"
            />
          </div>
        </div>

        {/* Related articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-16 max-w-5xl mx-auto">
            <h2 className="text-xl font-bold mb-6">مقالات ذات صلة</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((relArticle) => (
                <ArticleCard key={relArticle.id} article={relArticle} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
