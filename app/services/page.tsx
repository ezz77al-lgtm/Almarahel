import { generateMetadata, generateBreadcrumbSchema, generateItemListSchema } from '@/lib/seo';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { SectionHeader } from '@/components/section-header';
import { ServiceCard } from '@/components/services/service-card';
import {
  services,
  serviceGroups,
  getServicesByGroup,
} from '@/data/services';

import { JsonLd } from '@/components/seo/json-ld';
export const metadata = generateMetadata({
  title: 'الخدمات',
  description: 'استعرض جميع خدمات شركة المراحل السريعة من تنظيف الواجهات الزجاجية وواجهات المحلات والمنازل والمباني والمكاتب وتنظيف ما بعد البناء وتركيب الأرضيات والدهانات الداخلية.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema([{ name: 'الرئيسية', url: '/' }, { name: 'الخدمات', url: '/services' }])} />
      <JsonLd data={generateItemListSchema({ name: 'خدمات شركة المراحل السريعة', path: '/services', items: services.map((s) => ({ name: s.name, url: `/services/${s.slug}` })) })} />
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'الرئيسية', href: '/' },
            { label: 'الخدمات' },
          ]}
        />

        <div className="mt-6">
          <SectionHeader
            title="جميع الخدمات"
            description="نقدم مجموعة متكاملة من خدمات التنظيف وتركيب الأرضيات والدهانات الداخلية، منظمة في مجموعات لتسهيل الوصول إلى ما تحتاجه."
          />
        </div>

        {serviceGroups.map((group) => {
          const groupServices = getServicesByGroup(group.id);
          if (groupServices.length === 0) return null;

          return (
            <div key={group.id} className="mb-12">
              <h3 className="text-xl font-bold mb-2">{group.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">
                {group.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}
