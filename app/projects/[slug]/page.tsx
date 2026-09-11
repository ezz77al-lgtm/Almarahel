import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpLeft, MapPin, Calendar, Clock, CheckCircle2, MessageCircle } from 'lucide-react';
import { Breadcrumbs } from '@/components/sections/breadcrumbs';
import { SectionHeading } from '@/components/sections/section-heading';
import { CTASection } from '@/components/sections/cta-section';
import { Reveal } from '@/components/sections/reveal';
import { RelatedServices, RelatedArticles } from '@/components/sections/related-items';
import { projects, getProject } from '@/data/projects';
import { getRelatedServices, getRelatedArticles } from '@/lib/internal-links';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/data/site';
import type { Metadata } from 'next';

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return buildMetadata({
    title: project.seoTitle,
    description: project.seoDescription,
    path: `/projects/${project.slug}`,
    image: project.image,
  });
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const relatedServices = getRelatedServices(project.relatedServices);
  const relatedArticles = getRelatedArticles(project.relatedArticles);

  return (
    <>
      <Breadcrumbs items={[{ name: 'مشاريعنا', path: '/projects' }, { name: project.title, path: `/projects/${project.slug}` }]} />

      {/* Hero */}
{/* Hero */}
<section className="relative isolate overflow-hidden bg-primary-dark pt-20">
  <div className="absolute inset-0 -z-10">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={project.image}
      alt={project.imageAlt}
      className="h-full w-full object-cover"
    />

    {/* طبقة داكنة لتحسين وضوح النص */}
    <div className="absolute inset-0 bg-black/65" />

    {/* تدرج إضافي من الأسفل */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/80" />
  </div>

  <div className="container-mw container-px relative z-10 py-20">
    <div className="mx-auto max-w-3xl text-center">

      <span className="mb-5 inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-black/40 px-4 py-1.5 text-sm font-semibold text-accent shadow-lg backdrop-blur-sm">
        {project.category}
      </span>

      <h1 className="font-display text-4xl font-bold leading-tight text-white drop-shadow-2xl sm:text-5xl text-balance">
        {project.title}
      </h1>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-6 font-mono text-sm text-white drop-shadow-lg">
        <span className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-accent" />
          {project.location}
        </span>

        <span className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-accent" />
          {project.year}
        </span>

        {project.duration && (
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-accent" />
            {project.duration}
          </span>
        )}
      </div>

    </div>
  </div>
</section>

      {/* Content */}
      <section className="section-pad">
        <div className="container-mw container-px">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <span className="eyebrow">نبذة عن المشروع</span>
              <h2 className="heading-2 mt-2 text-balance">تفاصيل المشروع</h2>
              <p className="lead mt-6 text-pretty">{project.longDescription}</p>
            </Reveal>

            <Reveal delay={0.15}>
              <h3 className="mt-12 font-display text-xl font-bold">نطاق العمل</h3>
              <ul className="mt-6 space-y-3">
                {project.scope.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-muted/30">
        <div className="container-mw container-px">
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 text-center shadow-soft sm:p-12">
            <h2 className="font-display text-2xl font-bold sm:text-3xl text-balance">هل ترغب في مشروع مماثل؟</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              تواصل معنا اليوم لمناقشة متطلبات مشروعك والحصول على عرض سعر مخصص في جدة.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-base font-bold text-accent-foreground btn-press transition-all hover:brightness-95">
                اطلب عرض سعر
                <ArrowUpLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-border px-7 py-3.5 text-base font-bold transition-colors hover:bg-muted">
                <MessageCircle className="h-5 w-5" />
                تواصل عبر واتساب
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section-pad">
          <div className="container-mw container-px">
            <SectionHeading eyebrow="خدمات ذات صلة" title="الخدمات المتعلقة بهذا المشروع" />
            <div className="mt-12">
              <RelatedServices services={relatedServices} />
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
