import { Breadcrumbs } from '@/components/sections/breadcrumbs';
import { SectionHeading } from '@/components/sections/section-heading';
import { CTASection } from '@/components/sections/cta-section';
import { ServiceCard, CardGrid } from '@/components/sections/image-card';
import { services } from '@/data/services';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'خدماتنا | تنظيف وتركيب ودهانات في جدة والمدينة المنورة',
  description:
    'تصفح جميع خدمات شركة المراحل السريعة في جدة والمدينة المنورة: تنظيف الزجاج والواجهات، تنظيف واجهات المحلات والمعارض والمطاعم والمقاهي والمباني، تركيب السيراميك والبورسلان والرخام والموزايكو، والدهانات الداخلية، مع توفير عقود تنظيف شهرية.',
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
            title="خدمات احترافية في جدة والمدينة المنورة"
            description="نقدم مجموعة متنوعة من خدمات تنظيف الزجاج والواجهات، وتركيب السيراميك والبورسلان والرخام والموزايكو، والدهانات الداخلية، مع توفير عقود تنظيف شهرية حسب احتياجات العملاء."
          />

          <CardGrid className="mt-14 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </CardGrid>
        </div>
      </section>

      <CTASection
        title="هل تحتاج إلى خدمة معينة؟"
        description="تواصل معنا للحصول على استشارة وعرض سعر مناسب لخدمتك في جدة أو المدينة المنورة."
        primaryLabel="احصل على استشارة"
      />
    </>
  );
}
