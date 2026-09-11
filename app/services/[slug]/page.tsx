import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowUpLeft,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Sparkles,
  MapPin,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { Breadcrumbs } from '@/components/sections/breadcrumbs';
import { SectionHeading } from '@/components/sections/section-heading';
import { CTASection } from '@/components/sections/cta-section';
import { FaqSection } from '@/components/sections/faq-section';
import { Reveal } from '@/components/sections/reveal';
import { RelatedServices, RelatedProjects, RelatedArticles } from '@/components/sections/related-items';
import { services, getService } from '@/data/services';
import { getRelatedServices, getRelatedProjects, getRelatedArticles } from '@/lib/internal-links';
import { buildMetadata, serviceSchema } from '@/lib/seo';
import { siteConfig } from '@/data/site';
import type { Metadata } from 'next';

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return buildMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const relatedServices = getRelatedServices(service.relatedServices);
  const relatedProjects = getRelatedProjects(service.relatedProjects);
  const relatedArticles = getRelatedArticles(service.relatedArticles);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(service)) }}
      />
      <Breadcrumbs items={[{ name: 'خدماتنا', path: '/services' }, { name: service.name, path: `/services/${service.slug}` }]} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary-dark pt-20">
        <div className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={service.image}
            alt={service.imageAlt}
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
              <MapPin className="h-4 w-4 text-accent" />
              {service.name} في جدة
            </span>

            <h1 className="font-display text-4xl font-bold leading-tight text-white drop-shadow-2xl sm:text-5xl text-balance">
              {service.heroTitle}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white drop-shadow-lg text-pretty">
              {service.heroDescription}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-base font-bold text-accent-foreground shadow-xl btn-press transition-all hover:brightness-95"
              >
              طلب الخدمة فوراً
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-black/35 px-7 py-3.5 text-base font-bold text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-black/50"
              >
                <MessageCircle className="h-5 w-5" />
                تواصل عبر واتساب
              </a>
            </div>

          </div>
        </div>
      </section>



      {/* Introduction */}
      <section className="section-pad">
        <div className="container-mw container-px">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <span className="eyebrow">مقدمة</span>
              <h2 className="heading-2 mt-2 text-balance">ما هي خدمة {service.name}؟</h2>
              <p className="lead mt-6 text-pretty">{service.longDescription}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-pad bg-muted/30">
        <div className="container-mw container-px">
          <SectionHeading
            eyebrow="المميزات"
            title={`مميزات خدمة ${service.name}`}
            description="نقدم خدمة احترافية بمميزات تضمن أفضل نتيجة لمشروعك."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((benefit, i) => (
              <Reveal key={i} delay={(i % 4) * 0.1}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-accent/40 hover:shadow-card">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                    <Sparkles className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Applications & Types */}
      <section className="section-pad">
        <div className="container-mw container-px">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <h2 className="heading-3 mb-6">أين تطبق هذه الخدمة؟</h2>
              <ul className="space-y-3">
                {service.applications.map((app, i) => (
                  <li key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-base">{app}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            {service.types && service.types.length > 0 && (
              <Reveal delay={0.15}>
                <h2 className="heading-3 mb-6">أنواع الخدمة</h2>
                <div className="space-y-4">
                  {service.types.map((type, i) => (
                    <div key={i} className="rounded-xl border border-border bg-card p-5">
                      <h3 className="mb-2 font-bold text-accent">{type.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{type.description}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-muted/30">
        <div className="container-mw container-px">
          <SectionHeading
            eyebrow="آلية العمل"
            title="كيف ننفذ الخدمة"
            description="نتبع خطوات واضحة لضمان جودة النتيجة."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <Reveal key={i} delay={(i % 4) * 0.1}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-7">
                  <div className="absolute -top-3 right-7 flex h-8 w-8 items-center justify-center rounded-lg bg-accent font-mono text-sm font-bold text-accent-foreground">
                    {i + 1}
                  </div>
                  <h3 className="mb-2 mt-3 font-display text-lg font-bold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      {service.materials && service.materials.length > 0 && (
        <section className="section-pad">
          <div className="container-mw container-px">
            <div className="mx-auto max-w-3xl">
              <SectionHeading
                eyebrow="المواد"
                title="المواد المستخدمة"
                description="نستخدم مواد عالية الجودة لضمان أفضل نتيجة."
                align="start"
              />
              <div className="mt-8 flex flex-wrap gap-3">
                {service.materials.map((material, i) => (
                  <span key={i} className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium">
                    {material}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Quality Considerations */}
      <section className="section-pad bg-muted/30">
        <div className="container-mw container-px">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="معايير الجودة"
              title="معايير الجودة لدينا"
              description="نلتزم بمعايير صارمة في كل مرحلة من مراحل العمل."
            />
            <div className="mt-8 space-y-4">
              {service.qualityConsiderations.map((item, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-success/10 text-success">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <p className="text-base leading-relaxed">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="section-pad">
        <div className="container-mw container-px">
          <SectionHeading
            eyebrow="مشاكل شائعة"
            title="مشاكل شائعة وحلولنا"
            description="نمتلك الخبرة في معالجة المشاكل الشائعة وتقديم حلول فعالة."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {service.commonProblems.map((item, i) => (
              <Reveal key={i} delay={(i % 2) * 0.1}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                      <AlertTriangle className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-base font-bold">{item.problem}</h3>
                  </div>
                  <div className="flex items-start gap-3 border-t border-border pt-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-success" />
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.solution}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-pad bg-muted/30">
        <div className="container-mw container-px">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="منهجيتنا"
              title="كيف نتعامل مع الخدمة"
              description="منهجية واضحة تضمن جودة النتيجة ورضا العميل."
            />
            <div className="mt-8 space-y-4">
              {service.approach.map((step, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent font-mono text-sm font-bold text-accent-foreground">
                      {i + 1}
                    </div>
                    <p className="pt-1.5 text-base leading-relaxed">{step}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Jeddah Section */}
      <section className="section-pad">
        <div className="container-mw container-px">
          <div className="overflow-hidden rounded-3xl border border-accent/20 bg-primary p-8 sm:p-12">
            <div className="grid items-center gap-8">
              <div className="mx-auto max-w-3xl text-center">
                <span className="mb-4 inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
                  <MapPin className="h-4 w-4 text-accent" />
                  تغطية محلية
                </span>
                <h2 className="font-display text-2xl font-bold text-white sm:text-3xl text-balance">
                  {service.name} في جميع أحياء جدة
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/70 text-pretty">
                  نقدم خدمة {service.name} في جميع مناطق وأحياء جدة. فريقنا جاهز للوصول إلى موقعك سواء كنت في الشمال أو الجنوب، شرق أو غرب المدينة. نلتزم بالمواعيد ونقدم خدمة احترافية في كل منطقة.
                </p>
                <Link href="/contact" className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-accent-foreground btn-press transition-all hover:brightness-95">
                  تحقق من تغطية منطقتك
                  <ArrowUpLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section-pad bg-muted/30">
          <div className="container-mw container-px">
            <SectionHeading eyebrow="خدمات ذات صلة" title="خدمات أخرى قد تهمك" />
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

      {/* FAQ */}
      <FaqSection faqs={service.faq} title={`أسئلة شائعة عن ${service.name}`} />

      {/* CTA */}
      <CTASection
        title={`جاهزون لتنفيذ ${service.name}؟`}
        description="تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك في جدة."
        primaryLabel="اطلب عرض سعر"
      />
    </>
  );
}
