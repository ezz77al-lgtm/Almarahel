import Link from 'next/link';
import {
  ArrowUpLeft,
  ShieldCheck,
  Clock,
  Users,
  MapPin,
  Target,
  Eye,
  Sparkles,
} from 'lucide-react';
import { Breadcrumbs } from '@/components/sections/breadcrumbs';
import { SectionHeading } from '@/components/sections/section-heading';
import { CTASection } from '@/components/sections/cta-section';
import { Reveal } from '@/components/sections/reveal';
import { services } from '@/data/services';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'من نحن | شركة المراحل السريعة في جدة والمدينة المنورة',
  description:
    'تعرف على شركة المراحل السريعة، المتخصصة في تنظيف الزجاج والواجهات، تركيب السيراميك والبورسلان والرخام والموزايكو، والدهانات الداخلية، مع توفير عقود تنظيف شهرية في جدة والمدينة المنورة.',
  path: '/about',
});

const values = [
  {
    icon: ShieldCheck,
    title: 'الجودة',
    description:
      'نلتزم بأعلى معايير الجودة في كل مشروع، من اختيار المواد إلى التنفيذ والتسليم.',
  },
  {
    icon: Clock,
    title: 'الالتزام بالمواعيد',
    description:
      'نحترم وقت عملائنا ونلتزم بالجدول الزمني المتفق عليه لكل مشروع.',
  },
  {
    icon: Users,
    title: 'الاحترافية',
    description:
      'فريق متخصص ومدرّب على أساليب التنفيذ المناسبة لكل خدمة، من تنظيف الزجاج والواجهات إلى تركيب السيراميك والرخام والدهانات الداخلية.',
  },
  {
    icon: Sparkles,
    title: 'التميز',
    description:
      'نسعى دائمًا لتقديم نتائج تفوق توقعات عملائنا في كل مشروع.',
  },
];

const stats = [
  { label: 'خدمات متنوعة', value: `${services.length}+` },
  { label: 'مناطق الخدمة', value: 'جدة والمدينة' },
  { label: 'تخصصات', value: 'متعددة' },
  { label: 'التزام', value: 'كامل' },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'من نحن', path: '/about' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-dark pt-20">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero/hero1.webp"
            alt="خدمات تنظيف وتركيب ودهانات داخلية في جدة والمدينة المنورة"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/80" />
        </div>

        <div className="container-mw container-px relative z-10 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
              من نحن
            </span>

            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl text-balance">
              شركة المراحل السريعة — خدمات احترافية في جدة والمدينة المنورة
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 text-pretty">
              شركة متخصصة في تنظيف الزجاج والواجهات، وتركيب السيراميك
              والبورسلان والرخام والموزايكو، والدهانات الداخلية، مع خدمات
              التنظيف بعقود شهرية في جدة والمدينة المنورة.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-pad">
        <div className="container-mw container-px">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <span className="eyebrow">معلومات عن الشركة</span>

              <h2 className="heading-2 mt-2 text-balance">
                من نحن
              </h2>

              <p className="lead mt-6 text-pretty">
                شركة المراحل السريعة شركة متخصصة في تقديم خدمات تنظيف الزجاج
                والواجهات، وتركيب السيراميك والبورسلان والرخام والموزايكو،
                والدهانات الداخلية. كما نوفر خدمات التنظيف بعقود شهرية حسب
                احتياجات العملاء في جدة والمدينة المنورة.
              </p>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
                نعمل بفريق متخصص في كل مجال، ونلتزم بأعلى معايير الجودة
                والالتزام بالمواعيد. نؤمن بأن كل مشروع يستحق أفضل تنفيذ ممكن،
                ونسعى لتقديم نتائج تفوق توقعات عملائنا.
              </p>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
                نخدم عملاءنا في جدة والمدينة المنورة ونقدم خدماتنا للقطاعين
                السكني والتجاري. سواء كان الموقع منزلًا، فيلا، شقة، مكتبًا،
                معرضًا، مطعمًا، مقهى، مبنى تجاريًا أو واجهة زجاجية، نقدم الخدمة
                وفق طبيعة الموقع ومتطلبات العمل.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary-dark py-16">
        <div className="container-mw container-px">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <p className="font-display text-4xl font-bold text-accent sm:text-5xl">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-sm font-medium text-white/60">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad">
        <div className="container-mw container-px">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-border bg-card p-8">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                  <Target className="h-7 w-7" />
                </div>

                <h2 className="mb-4 font-display text-2xl font-bold">
                  رسالتنا
                </h2>

                <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                  تقديم خدمات احترافية في تنظيف الزجاج والواجهات، وتركيب
                  السيراميك والبورسلان والرخام والموزايكو، والدهانات الداخلية
                  في جدة والمدينة المنورة، مع الالتزام بالجودة والمواعيد
                  وتقديم حلول مناسبة لاحتياجات كل عميل.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="h-full rounded-3xl border border-border bg-card p-8">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                  <Eye className="h-7 w-7" />
                </div>

                <h2 className="mb-4 font-display text-2xl font-bold">
                  رؤيتنا
                </h2>

                <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                  أن نكون من الشركات المتخصصة في خدمات التنظيف والتركيب
                  والدهانات الداخلية في جدة والمدينة المنورة، من خلال تقديم
                  خدمات متنوعة بجودة عالية، والاهتمام بتجربة العميل وبناء
                  علاقات طويلة الأمد قائمة على الثقة والالتزام.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-muted/30">
        <div className="container-mw container-px">
          <SectionHeading
            eyebrow="قيمنا"
            title="ما الذي يميزنا"
            description="قيم نلتزم بها في كل مشروع."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={i} delay={(i % 4) * 0.1}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-accent/40 hover:shadow-card">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                    <value.icon className="h-7 w-7" />
                  </div>

                  <h3 className="mb-2 font-display text-lg font-bold">
                    {value.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-pad">
        <div className="container-mw container-px">
          <SectionHeading
            eyebrow="خدماتنا"
            title="خدماتنا المتنوعة"
            description="نقدم مجموعة متنوعة من خدمات التنظيف والتركيب والدهانات الداخلية في جدة والمدينة المنورة."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.1}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full"
                >
                  <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-card">
                    <h3 className="mb-2 font-display text-lg font-bold transition-colors group-hover:text-accent">
                      {service.name}
                    </h3>

                    <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {service.shortDescription}
                    </p>

                    <span className="inline-flex items-center gap-2 text-sm font-bold text-accent transition-colors">
                      عرض التفاصيل

                      <ArrowUpLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section-pad bg-muted/30">
        <div className="container-mw container-px">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="eyebrow">
                <MapPin className="h-4 w-4" />
                منطقة الخدمة
              </span>

              <h2 className="heading-2 mt-2 text-balance">
                نخدم جدة والمدينة المنورة
              </h2>

              <p className="lead mt-5 text-pretty">
                شركة المراحل السريعة تقدم خدماتها في جدة والمدينة المنورة،
                ويعمل فريقنا على الوصول إلى موقعك حسب نطاق الخدمة وطبيعة
                الموقع واحتياجات العمل.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="تواصل معنا اليوم"
        description="فريقنا جاهز للإجابة على استفساراتك وتقديم عرض سعر مناسب لخدمتك في جدة أو المدينة المنورة."
        primaryLabel="احصل على استشارة"
      />
    </>
  );
}