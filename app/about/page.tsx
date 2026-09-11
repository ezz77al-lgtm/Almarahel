import Link from 'next/link';
import { ArrowUpLeft, ShieldCheck, Clock, Users, MapPin, Target, Eye, Sparkles, CheckCircle2 } from 'lucide-react';
import { Breadcrumbs } from '@/components/sections/breadcrumbs';
import { SectionHeading } from '@/components/sections/section-heading';
import { CTASection } from '@/components/sections/cta-section';
import { Reveal } from '@/components/sections/reveal';
import { services } from '@/data/services';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'من نحن | شركة المراحل السريعة في جدة',
  description:
    'تعرف على شركة المراحل السريعة — شركة متخصصة في مقاولات التشطيبات والديكورات في جدة. نقدم خدمات تركيب السيراميك والبورسلان والرخام والدهانات وتنظيف الواجهات الزجاجية.',
  path: '/about',
});

const values = [
  { icon: ShieldCheck, title: 'الجودة', description: 'نلتزم بأعلى معايير الجودة في كل مشروع، من اختيار المواد إلى التنفيذ والتسليم.' },
  { icon: Clock, title: 'الالتزام بالمواعيد', description: 'نحترم وقت عملائنا ونلتزم بالجدول الزمني المتفق عليه لكل مشروع.' },
  { icon: Users, title: 'الاحترافية', description: 'فريق متخصص ومدرّب على أحدث التقنيات والمواد في كل مجال من مجالات التشطيب.' },
  { icon: Sparkles, title: 'التميز', description: 'نسعى دائمًا لتقديم نتائج تفوق توقعات عملائنا في كل مشروع.' },
];

const stats = [
  { label: 'خدمات متنوعة', value: `${services.length}+` },
  { label: 'منطقة الخدمة', value: 'جدة' },
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
            src='/hero/hero1.webp'
            alt="أعمال تشطيب احترافية في جدة"
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
              شركة المراحل السريعة — خبرة في التشطيبات والديكورات
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 text-pretty">
              شركة متخصصة في مقاولات التشطيبات والديكورات في جدة، نقدم مجموعة شاملة من الخدمات الاحترافية بجودة عالية والالتزام بالمواعيد.
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
              <h2 className="heading-2 mt-2 text-balance">من نحن</h2>
              <p className="lead mt-6 text-pretty">
                شركة المراحل السريعة شركة متخصصة في مقاولات التشطيبات والديكورات في جدة. نقدم مجموعة شاملة من الخدمات تشمل تركيب السيراميك والبورسلان والرخام، أعمال الموزايكو، الدهانات والديكورات، التشطيبات الداخلية والخارجية، وتنظيف الواجهات الزجاجية.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
                نعمل بفريق متخصص في كل مجال، ونلتزم بأعلى معايير الجودة والالتزام بالمواعيد. نؤمن بأن كل مشروع يستحق أفضل تنفيذ ممكن، ونسعى لتقديم نتائج تفوق توقعات عملائنا.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
                نخدم عملاءنا في جميع أحياء ومناطق جدة، ونقدم خدماتنا للقطاعين السكني والتجاري. سواء كان المشروع شقة سكنية، فيلا، مكتب، أو مبنى تجاري، لدينا الخبرة والفريق لتنفيذه بأعلى مستوى من الجودة.
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
                  <p className="font-display text-4xl font-bold text-accent sm:text-5xl">{stat.value}</p>
                  <p className="mt-2 text-sm font-medium text-white/60">{stat.label}</p>
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
                <h2 className="mb-4 font-display text-2xl font-bold">رسالتنا</h2>
                <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                  تقديم خدمات تشطيب وديكور احترافية بأعلى معايير الجودة في جدة، مع الالتزام بالمواعيد وتقديم نتائج تفوق توقعات عملائنا. نسعى لأن نكون الخيار الأول لكل من يبحث عن جودة واحترافية في التشطيبات والديكورات.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="h-full rounded-3xl border border-border bg-card p-8">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                  <Eye className="h-7 w-7" />
                </div>
                <h2 className="mb-4 font-display text-2xl font-bold">رؤيتنا</h2>
                <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                  أن نكون الشركة الرائدة في مجال التشطيبات والديكورات في جدة، من خلال تقديم خدمات متنوعة بجودة عالية واستخدام أحدث المواد والتقنيات، وبناء علاقات طويلة الأمد مع عملائنا قائمة على الثقة والجودة.
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
                  <h3 className="mb-2 font-display text-lg font-bold">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
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
            description="نقدم مجموعة شاملة من خدمات التشطيب والديكور في جدة."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.1}>
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-card">
                    <h3 className="mb-2 font-display text-lg font-bold transition-colors group-hover:text-accent">{service.name}</h3>
                    <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{service.shortDescription}</p>
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
              <span className="eyebrow"><MapPin className="h-4 w-4" /> منطقة الخدمة</span>
              <h2 className="heading-2 mt-2 text-balance">نخدم جميع أحياء جدة</h2>
              <p className="lead mt-5 text-pretty">
                شركة المراحل السريعة تقدم خدماتها في جميع مناطق وأحياء جدة. فريقنا جاهز للوصول إلى موقعك أينما كنت في المدينة.
              </p>
              
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        title="تواصل معنا اليوم"
        description="فريقنا جاهز للإجابة على استفساراتك وتقديم عرض سعر لمشروعك في جدة."
        primaryLabel="احصل على استشارة"
      />
    </>
  );
}
