import Link from 'next/link';
import { ArrowLeft, Calendar } from 'lucide-react';
import type { Article } from '@/data/articles';

export function ArticleCard({ article }: { article: Article }) {
  const date = new Date(article.publishedAt).toLocaleDateString('ar-SA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-card shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.image}
          alt={article.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
            {article.category}
          </span>
        </div>

        <h3 className="font-bold text-base mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {article.title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-border">
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            {date}
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
            اقرأ المقال
            <ArrowLeft className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
