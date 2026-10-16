import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import { ArticleCard } from '@/components/blog/article-card';
import { getLatestArticles } from '@/data/articles';

export function HomeArticles() {
  const articles = getLatestArticles(4);

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          title="أحدث المقالات"
          description="مقالات إرشادية مفيدة حول خدمات التنظيف وتركيب الأرضيات والدهانات الداخلية."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-primary-dark transition-all hover:scale-105"
          >
            عرض جميع المقالات
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
