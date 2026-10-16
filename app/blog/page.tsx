import { generateMetadata, generateBreadcrumbSchema, generateItemListSchema } from '@/lib/seo';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { SectionHeader } from '@/components/section-header';
import { ArticleCard } from '@/components/blog/article-card';
import { articles, articleCategories } from '@/data/articles';
import { HomeFinalCTA } from '@/components/home/home-final-cta';
import Link from 'next/link';

import { JsonLd } from '@/components/seo/json-ld';
export const metadata = generateMetadata({
  title: 'المقالات',
  description: 'مقالات إرشادية مفيدة حول خدمات التنظيف وتركيب الأرضيات والدهانات الداخلية.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema([{ name: 'الرئيسية', url: '/' }, { name: 'المقالات', url: '/blog' }])} />
      <JsonLd data={generateItemListSchema({ name: 'مقالات وإرشادات', path: '/blog', items: articles.map((a) => ({ name: a.title, url: `/blog/${a.slug}` })) })} />
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'الرئيسية', href: '/' },
            { label: 'المقالات' },
          ]}
        />

        <div className="mt-6">
          <SectionHeader
            title="المقالات"
            description="مقالات إرشادية مفيدة حول خدمات التنظيف وتركيب الأرضيات والدهانات الداخلية."
          />
        </div>

        {/* Category navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Link
            href="/blog"
            className="text-sm bg-primary text-white px-4 py-2 rounded-full"
          >
            جميع المقالات
          </Link>
          {articleCategories.map((cat) => (
            <span
              key={cat.id}
              className="text-sm bg-muted text-muted-foreground px-4 py-2 rounded-full"
            >
              {cat.name}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
      <HomeFinalCTA />
    </div>
    </>
  );
}
