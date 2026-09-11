import { Breadcrumbs } from '@/components/sections/breadcrumbs';
import { SectionHeading } from '@/components/sections/section-heading';
import { CTASection } from '@/components/sections/cta-section';
import { ServiceCard, CardGrid } from '@/components/sections/image-card';
import { services } from '@/data/services';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'خدماتنا | تشطيبات وديكورات في جدة',
  description:
    'تصفح جميع خدمات شركة المراحل السريعة في جدة: تركيب السيراميك والبورسلان والرخام، أعمال الموزايكو، الدهانات والديكورات، التشطيبات الداخلية والخارجية، وتنظيف الواجهات الزجاجية.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'خدماتنا', path: '/services' }]} />

      <section className="section-pad">
        <div className="container-mw container-px">
          <SectionHeading
            eyebrow="خدماتنا"
            title="خدمات تشطيب وديكور احترافية في جدة"
            description="نقدم مجموعة شاملة من خدمات التشطيبات والديكورات والمقاولات في جدة بأعلى معايير الجودة والإتقان."
          />

          <CardGrid className="mt-14 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </CardGrid>
        </div>
      </section>

      <CTASection
        title="لا تجد الخدمة التي تبحث عنها؟"
        description="تواصل معنا وسنقدم لك الاستشارة المناسبة لمشروعك في جدة."
        primaryLabel="احصل على استشارة"
      />
    </>
  );
}
