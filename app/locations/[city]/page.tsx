import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowUpLeft,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import type { Metadata } from 'next';

import { Breadcrumbs } from '@/components/sections/breadcrumbs';
import { SectionHeading } from '@/components/sections/section-heading';
import { ServiceCard, CardGrid } from '@/components/sections/image-card';
import { CTASection } from '@/components/sections/cta-section';
import { FaqSection } from '@/components/sections/faq-section';
import { Reveal } from '@/components/sections/reveal';

import { services } from '@/data/services';
import { siteConfig } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

type CityData = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
};

const cities: Record<string, CityData> = {
  jeddah: {
    slug: 'jeddah',
    name: 'جدة',
    shortName: 'جدة',
    description:
      'شركة المراحل السريعة تقدم خدمات تنظيف الزجاج والواجهات، تنظيف الواجهات التجارية، تركيب السيراميك والبورسلان والرخام والموزايكو، والدهانات الداخلية في جدة، مع توفير عقود تنظيف شهرية حسب احتياج المنشآت.',
    seoTitle:
      'خدمات تنظيف وتركيب ودهانات في جدة | شركة المراحل السريعة',
    seoDescription:
      'خدمات شركة المراحل السريعة في جدة: تنظيف زجاج المحلات والمعارض والمطاعم والكافيهات والمباني والواجهات التجارية، تركيب السيراميك والبورسلان والرخام والموزايكو والدهانات الداخلية، مع عقود تنظيف شهرية.',
  },

  madinah: {
    slug: 'madinah',
    name: 'المدينة المنورة',
    shortName: 'المدينة المنورة',
    description:
      'شركة المراحل السريعة تقدم خدمات تنظيف الزجاج والواجهات، تنظيف الواجهات التجارية، تركيب السيراميك والبورسلان والرخام والموزايكو، والدهانات الداخلية في المدينة المنورة، مع توفير عقود تنظيف شهرية حسب احتياج المنشآت.',
    seoTitle:
      'خدمات تنظيف وتركيب ودهانات في المدينة المنورة | شركة المراحل السريعة',
    seoDescription:
      'خدمات شركة المراحل السريعة في المدينة المنورة: تنظيف زجاج المحلات والمعارض والمطاعم والكافيهات والمباني والواجهات التجارية، تركيب السيراميك والبورسلان والرخام والموزايكو والدهانات الداخلية، مع عقود تنظيف شهرية.',
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(cities).map((city) => ({
    city,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { city: string };
}): Metadata {
  const city = cities[params.city];

  if (!city) return {};

  return buildMetadata({
    title: city.seoTitle,
    description: city.seoDescription,
    path: `/locations/${city.slug}`,
  });
}

export default function LocationPage({
  params,
}: {
  params: { city: string };
}) {
  const city = cities[params.city];

  if (!city) {
    notFound();
  }

  const cleaningServices = services.filter(
    (service) =>
      service.slug.includes('glass') ||
      service.slug.includes('facade')
  );

  const installationServices = services.filter(
    (service) =>
      service.slug.includes('ceramic') ||
      service.slug.includes('porcelain') ||
      service.slug.includes('marble') ||
      service.slug.includes('mosaic') ||
      service.slug.includes('painting')
  );

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'الرئيسية', path: '/' },
          { name: `خدماتنا في ${city.name}`, path: `/locations/${city.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary-dark/95 to-primary-dark" />

        <div className="container-mw container-px relative z-10 py-20 sm:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
              <MapPin className="h-4 w-4" />
              خدماتنا في {city.name}
            </span>

            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl text-balance">
              خدمات تنظيف وتركيب ودهانات احترافية في {city.name}
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/70 text-pretty">
              {city.description}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                  `السلام عليكم، أريد الاستفسار عن خدماتكم في ${city.name}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-base font-bold text-accent-foreground btn-press transition-all hover:brightness-95"
              >
                <MessageCircle className="h-5 w-5" />
                اطلب الخدمة الآن
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                اتصل بنا
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-pad">
        <div className="container-mw container-px">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="eyebrow">خدمات متكاملة</span>

              <h2 className="heading-2 mt-2 text-balance">
                جميع خدماتنا في {city.name}
              </h2>

              <p className="lead mt-5 text-pretty">
                نوفر مجموعة متكاملة من الخدمات للمحلات والمعارض والمطاعم
                والكافيهات والمباني والمنشآت التجارية، إضافة إلى أعمال تركيب
                السيراميك والبورسلان والرخام والموزايكو والدهانات الداخلية.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Cleaning Services */}
      <section className="section-pad bg-muted/30">
        <div className="container-mw container-px">
          <SectionHeading
            eyebrow="خدمات التنظيف"
            title={`خدمات تنظيف الزجاج والواجهات في ${city.name}`}
            description="خدمات متخصصة للمحلات والمعارض والمطاعم والكافيهات والمباني والمنشآت التجارية، مع إمكانية توفير عقود تنظيف شهرية حسب احتياج العميل."
          />

          <CardGrid className="mt-12 md:grid-cols-2 lg:grid-cols-3">
            {cleaningServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </CardGrid>
        </div>
      </section>

      {/* Installation & Painting Services */}
      <section className="section-pad">
        <div className="container-mw container-px">
          <SectionHeading
            eyebrow="خدمات التركيب والدهانات"
            title={`تركيب ودهانات في ${city.name}`}
            description="تنفيذ أعمال تركيب السيراميك والبورسلان والرخام والموزايكو والدهانات الداخلية وفق طبيعة المشروع ومتطلبات الموقع."
          />

          <CardGrid className="mt-12 md:grid-cols-2 lg:grid-cols-3">
            {installationServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </CardGrid>
        </div>
      </section>

      {/* Monthly Contracts */}
      <section className="section-pad bg-muted/30">
        <div className="container-mw container-px">
          <div className="overflow-hidden rounded-3xl border border-accent/20 bg-primary p-8 sm:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow text-accent">
                عقود تنظيف شهرية
              </span>

              <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                عقود تنظيف شهرية للمنشآت في {city.name}
              </h2>

              <p className="mt-5 text-base leading-relaxed text-white/70">
                نوفر حلول تنظيف دورية للمنشآت والمحلات والمعارض والمطاعم
                والكافيهات والمباني والواجهات التجارية، وفق جدول يتم الاتفاق
                عليه حسب طبيعة الموقع واحتياجاته.
              </p>

              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                  `السلام عليكم، أريد الاستفسار عن عقد تنظيف شهري في ${city.name}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground btn-press transition-all hover:brightness-95"
              >
                <MessageCircle className="h-5 w-5" />
                استفسر عن العقد الشهري
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-pad">
        <div className="container-mw container-px">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              eyebrow="نطاق الخدمة"
              title={`خدماتنا في ${city.name}`}
              description={`نستقبل طلبات الخدمات في ${city.name} ونحدد نطاق التنفيذ حسب موقع العميل وطبيعة الخدمة المطلوبة.`}
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                'المحلات التجارية',
                'المعارض وصالات العرض',
                'المطاعم والكافيهات',
                'المراكز والمنشآت التجارية',
                'المباني والواجهات',
                'المنشآت والمرافق',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-5"
                >
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        title={`أسئلة شائعة عن خدماتنا في ${city.name}`}
        faqs={[
          {
            question: `ما الخدمات التي تقدمونها في ${city.name}؟`,
            answer:
              `نقدم جميع الخدمات الموجودة في موقعنا، وتشمل تنظيف زجاج المحلات والمعارض والمطاعم والكافيهات والمباني والواجهات، وتنظيف الواجهات التجارية، إضافة إلى تركيب السيراميك والبورسلان والرخام والموزايكو والدهانات الداخلية.`,
          },
          {
            question: `هل توفرون عقود تنظيف شهرية في ${city.name}؟`,
            answer:
              `نعم، تتوفر عقود تنظيف شهرية للمنشآت حسب طبيعة الموقع وعدد الزيارات والمهام المطلوبة، ويتم تحديد التفاصيل بعد معرفة احتياج العميل.`,
          },
          {
            question: `كيف أطلب الخدمة في ${city.name}؟`,
            answer:
              `يمكنك التواصل معنا مباشرة عبر واتساب أو الهاتف وذكر نوع الخدمة وموقع المنشأة، وسنساعدك في تحديد المتطلبات والخطوات المناسبة.`,
          },
        ]}
      />

      {/* Final CTA */}
      <CTASection
        title={`تحتاج إلى خدمة في ${city.name}؟`}
        description={`تواصل مع شركة المراحل السريعة للحصول على تفاصيل الخدمة وعرض السعر المناسب في ${city.name}.`}
        primaryLabel="اطلب الخدمة الآن"
      />
    </>
  );
}