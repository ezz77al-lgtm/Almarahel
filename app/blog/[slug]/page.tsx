import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpLeft, Clock, Calendar, User, MessageCircle } from 'lucide-react';
import { Breadcrumbs } from '@/components/sections/breadcrumbs';
import { SectionHeading } from '@/components/sections/section-heading';
import { CTASection } from '@/components/sections/cta-section';
import { Reveal } from '@/components/sections/reveal';
import { RelatedServices, RelatedProjects, RelatedArticles } from '@/components/sections/related-items';
import { blogPosts, getArticle } from '@/data/blog';
import { getRelatedServices, getRelatedProjects, getRelatedArticles } from '@/lib/internal-links';
import { buildMetadata, articleSchema } from '@/lib/seo';
import { siteConfig } from '@/data/site';
import type { Metadata } from 'next';

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  return buildMetadata({
    title: article.seoTitle,
    description: article.seoDescription,
    path: `/blog/${article.slug}`,
    image: article.image,
    type: 'article',
    publishedTime: article.date,
  });
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const relatedServices = getRelatedServices([article.relatedService]);
  const relatedProjects = getRelatedProjects(article.relatedProjects);
  const relatedArticles = getRelatedArticles(article.relatedArticles);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(article)) }}
      />
      <Breadcrumbs items={[{ name: 'المدونة', path: '/blog' }, { name: article.title, path: `/blog/${article.slug}` }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-dark pt-20"> 
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={article.image} alt={article.imageAlt} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/80" />
        </div>
        <div className="container-mw container-px relative z-10 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
              {article.category}
            </span>
            <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl text-balance">
              {article.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70 text-pretty">
              {article.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 font-mono text-sm text-white/60">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4 text-accent" />
                {article.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-accent" />
                {article.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-pad">
        <div className="container-mw container-px">
          <article className="mx-auto max-w-3xl">
            {article.content.map((section, i) => (
              <Reveal key={i}>
                <h2 className="mt-12 font-display text-2xl font-bold first:mt-0">{section.heading}</h2>
                <p className="mt-4 text-lg leading-relaxed text-foreground/80 text-pretty">{section.body}</p>
              </Reveal>
            ))}

            {/* Inline CTA */}
            <div className="mt-12 rounded-2xl border border-border bg-primary p-6 text-center">
              <p className="text-white font-semibold">هل تحتاج هذه الخدمة في جدة؟</p>
              <p className="mt-2 text-sm text-white/70">تواصل معنا اليوم للحصول على استشارة مجانية.</p>
              <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-accent-foreground btn-press transition-all hover:brightness-95">
                  اطلب الخدمة
                  <ArrowUpLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
                </Link>
                <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-6 py-3 text-base font-bold text-accent transition-colors hover:bg-accent/20">
                  <MessageCircle className="h-4 w-4" />
                  واتساب
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section-pad bg-muted/30">
          <div className="container-mw container-px">
            <SectionHeading eyebrow="خدمة ذات صلة" title="الخدمة المرتبطة بهذا المقال" />
            <div className="mt-12">
              <RelatedServices services={relatedServices} />
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section-pad">
          <div className="container-mw container-px">
            <SectionHeading eyebrow="مشاريع ذات صلة" title="مشاريع نفخر بها" />
            <div className="mt-12">
              <RelatedProjects projects={relatedProjects} />
            </div>
          </div>
        </section>
      )}

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="section-pad bg-muted/30">
          <div className="container-mw container-px">
            <SectionHeading eyebrow="مقالات ذات صلة" title="اقرأ المزيد" />
            <div className="mt-12">
              <RelatedArticles articles={relatedArticles} />
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
