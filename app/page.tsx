import Link from 'next/link';
import {
  ShieldCheck,
  Clock,
  Award,
  Users,
  HardHat,
  Ruler,
  Sparkles,
  MapPin,
  ArrowUpLeft,
  CheckCircle2,
  Star,
} from 'lucide-react';
import { Hero } from '@/components/sections/hero';
import { SectionHeading } from '@/components/sections/section-heading';
import { ServiceCard, ProjectCard, BlogCard, CardGrid } from '@/components/sections/image-card';
import { CTASection } from '@/components/sections/cta-section';
import { FaqSection } from '@/components/sections/faq-section';
import { Reveal } from '@/components/sections/reveal';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { blogPosts } from '@/data/blog';
import { testimonials, generalFaqs } from '@/data/testimonials';
import { siteConfig } from '@/data/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: '/',
});

const whyChooseUs = [
  { icon: ShieldCheck, title: 'جودة مضمونة', description: 'نستخدم مواد عالية الجودة ونلتزم بمعايير صارمة في جميع أعمالنا.' },
  { icon: Clock, title: 'الالتزام بالمواعيد', description: 'نحترم وقتك ونلتزم بالجدول الزمني المتفق عليه لكل مشروع.' },
  { icon: Award, title: 'خبرة احترافية', description: 'فريق متخصص في كل مجال من التشطيبات والديكورات.' },
  { icon: Users, title: 'فريق مدرّب', description: 'فنيون ومتخصصون مدرّبون على أحدث التقنيات والمواد.' },
];

const processSteps = [
  { icon: Ruler, title: 'المعاينة والتقييم', description: 'نقوم بمعاينة الموقع وتقييم المتطلبات لتقديم عرض سعر دقيق.' },
  { icon: HardHat, title: 'التنفيذ', description: 'ننفذ العمل بفريق متخصص ومواد عالية الجودة تحت إشراف هندسي.' },
  { icon: Sparkles, title: 'التشطيب النهائي', description: 'نضيف اللمسات النهائية ونتأكد من جودة العمل قبل التسليم.' },
  { icon: CheckCircle2, title: 'التسليم', description: 'نسلم المشروع في الموعد المتفق عليه بأعلى معايير الجودة.' },
];

const benefits = [
  'معاينة مجانية وتقدير دقيق للتكلفة',
  'فريق متخصص لكل نوع من الأعمال',
  'مواد معتمدة وعالية الجودة',
  'إشراف هندسي مستمر',
  'التزام بالجدول الزمني',
  'تنظيف الموقع بعد الانتهاء',
];

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const featuredBlogPosts = blogPosts.filter((b) => b.featured);

  return (
    <>
      <Hero />

      {/* Services Cards */}
      <section className="bg-muted/30 py-20 sm:py-24">
        <div className="container-mw container-px">
          <SectionHeading
            eyebrow="خدماتنا"
            title="خدمات تشطيب وديكور احترافية في جدة"
            description="نقدم مجموعة شاملة من خدمات التشطيبات والديكورات بأعلى معايير الجودة والإتقان."
          />
          <CardGrid className="mt-12 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </CardGrid>
          <div className="mt-12 text-center">
            <Link href="/services" className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground btn-press transition-all hover:bg-primary-dark">
              عرض جميع الخدمات
              <ArrowUpLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </section>

            {/* Company Introduction */}
      <section className="section-pad">
        <div className="container-mw container-px">
          <div className="grid items-center gap-12 lg:grid-cols-2 text-center">
            <Reveal>
              <span className="eyebrow ">من نحن</span>
              <h2 className="heading-2 mt-2 text-balance">
                شركة المراحل السريعة  خبرة في التشطيبات والديكورات في جدة
              </h2>
              <p className="lead mt-5 text-pretty">
                شركة المراحل السريعة شركة متخصصة في مقاولات التشطيبات والديكورات في جدة، نقدم مجموعة شاملة من الخدمات تشمل تركيب السيراميك والبورسلان والرخام، أعمال الموزايكو، الدهانات والديكورات، التشطيبات الداخلية والخارجية، وتنظيف الواجهات الزجاجية.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
                نعمل بفريق متخصص في كل مجال، ونلتزم بأعلى معايير الجودة والالتزام بالمواعيد. هدفنا تقديم نتائج تفوق توقعات عملائنا في كل مشروع.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/about" className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground btn-press transition-all hover:bg-primary-dark">
                  تعرف علينا أكثر
                  <ArrowUpLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
                </Link>
                <Link href="/services" className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-bold transition-colors hover:bg-muted">
                  تصفح خدماتنا
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: ShieldCheck, label: 'جودة عالية', value: 'مضمونة' },
                  { icon: Clock, label: 'الالتزام بالمواعيد', value: 'دائم' },
                  { icon: Users, label: 'فريق متخصص', value: 'محترف' },
                  { icon: MapPin, label: 'منطقة الخدمة', value: 'جدة' },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-accent/40 hover:shadow-card">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <p className="font-display text-lg font-bold">{item.value}</p>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

           {/* Featured Projects Cards */}
      <section className="bg-primary-dark py-20 sm:py-24">
        <div className="container-mw container-px mb-12 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
            مشاريعنا
          </span>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-balance">
            مشاريع نفخر بتنفيذها في جدة
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/60 text-pretty">
            نماذج من مشاريعنا المنجزة بأعلى معايير الجودة في مختلف أنواع التشطيبات.
          </p>
        </div>
        <div className="container-mw container-px">
          <CardGrid className="md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.slice(0, 6).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </CardGrid>
        </div>
        <div className="container-mw container-px mt-12 text-center">
          <Link href="/projects" className="group inline-flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-7 py-3.5 text-base font-bold text-accent transition-colors hover:bg-accent/20">
            عرض جميع المشاريع
            <ArrowUpLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="section-pad">
        <div className="container-mw container-px">
          <SectionHeading
            eyebrow="لماذا نحن"
            title="لماذا تختار شركة المراحل السريعة؟"
            description="نلتزم بمعايير عالية في كل مشروع لضمان رضا عملائنا."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-accent/40 hover:shadow-card">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

 
      {/* Process */}
      <section className="section-pad">
        <div className="container-mw container-px">
          <SectionHeading
            eyebrow="كيف نعمل"
            title="من المعاينة إلى التسليم"
            description="نتبع منهجية واضحة في كل مشروع لضمان جودة النتيجة ورضا العميل."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-accent/40 hover:shadow-card">
                  <div className="absolute -top-3 right-7 flex h-8 w-8 items-center justify-center rounded-lg bg-accent font-mono text-sm font-bold text-accent-foreground">
                    {i + 1}
                  </div>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                    <step.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Jeddah Coverage */}
      <section className="section-pad bg-muted/30">
        <div className="container-mw container-px">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow"><MapPin className="h-4 w-4" /> تغطية محلية</span>
              <h2 className="heading-2 mt-2 text-balance">نخدم جميع أحياء جدة</h2>
              <p className="lead mt-5 text-pretty">
                شركة المراحل السريعة تقدم خدماتها في جميع أحياء ومناطق جدة. سواء كنت في الشمال أو الجنوب، شرق أو غرب المدينة، فريقنا جاهز للوصول إليك وتقديم الخدمة.
              </p>
              
              <Link href="/contact" className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground btn-press transition-all hover:bg-primary-dark">
                تحقق من تغطيتك
                <ArrowUpLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
                <h3 className="font-display text-xl font-bold">أبرز مزايا الخدمة</h3>
                <ul className="mt-6 space-y-4">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                      <span className="text-base text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad">
        <div className="container-mw container-px">
          <SectionHeading
            eyebrow="آراء عملائنا"
            title="ماذا يقول عملاؤنا"
            description="رضا عملائنا هو أهم مؤشر على جودة خدماتنا."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-accent/40 hover:shadow-card">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, idx) => (
                      <Star key={idx} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="mb-6 text-base leading-relaxed text-foreground/80">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3 border-t border-border pt-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 font-display text-sm font-bold text-accent">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role} · {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection faqs={generalFaqs} title="أسئلة شائعة عن خدماتنا" />

      {/* Blog Cards */}
      <section className="bg-muted/30 py-20 sm:py-24">
        <div className="container-mw container-px">
          <SectionHeading
            eyebrow="المدونة"
            title="مقالات ونصائح مفيدة"
            description="مقالات إرشادية لمساعدتك في فهم خدمات التشطيب والديكور."
          />
          <CardGrid className="mt-12 md:grid-cols-2 lg:grid-cols-3">
            {featuredBlogPosts.slice(0, 6).map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </CardGrid>
          <div className="mt-12 text-center">
            <Link href="/blog" className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground btn-press transition-all hover:bg-primary-dark">
              عرض جميع المقالات
              <ArrowUpLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
