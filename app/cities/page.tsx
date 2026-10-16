import { generateMetadata, generateBreadcrumbSchema, generateItemListSchema } from '@/lib/seo';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { SectionHeader } from '@/components/section-header';
import { cities } from '@/data/cities';
import { getServicesByCity } from '@/data/services';
import Link from 'next/link';
import { MapPin, ArrowLeft } from 'lucide-react';

import { JsonLd } from '@/components/seo/json-ld';
export const metadata = generateMetadata({
  title: 'المدن',
  description: 'استعرض المدن التي تقدم فيها شركة المراحل السريعة خدماتها: جدة، الرياض، المدينة المنورة، والقصيم. اختر مدينتك لمعرفة الخدمات المتوفرة فيها.',
  path: '/cities',
});

export default function CitiesPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema([{ name: 'الرئيسية', url: '/' }, { name: 'المدن', url: '/cities' }])} />
      <JsonLd data={generateItemListSchema({ name: 'المدن التي نخدمها', path: '/cities', items: cities.map((c) => ({ name: c.name, url: `/cities/${c.slug}` })) })} />
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'الرئيسية', href: '/' },
            { label: 'المدن' },
          ]}
        />

        <div className="mt-6">
          <SectionHeader
            title="المدن التي نخدمها"
            description="نقدم خدماتنا في أربع مدن رئيسية في المملكة العربية السعودية. اختر مدينتك لمعرفة الخدمات المتوفرة فيها والروابط الخاصة بكل خدمة في مدينتك."
          />
        </div>

        <div className="mt-10 space-y-12">
          {cities.map((city) => {
            const cityServices = getServicesByCity(city.id);
            return (
              <section key={city.id} className="rounded-2xl overflow-hidden bg-card border border-border/50 shadow-sm">
                {/* City Header */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={city.image}
                    alt={city.imageAlt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 navy-gradient-strong" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span className="text-xs text-white/80">{city.region}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold">خدماتنا في {city.name}</h2>
                      <Link
                        href={`/cities/${city.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-white transition-colors"
                      >
                        صفحة المدينة
                        <ArrowLeft className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* City Intro */}
                <div className="p-5">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {city.longDescription}
                  </p>

                  {/* Service Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {cityServices.map((service) => (
                      <Link
                        key={service.id}
                        href={`/cities/${city.slug}/${service.slug}`}
                        className="group flex items-start gap-3 rounded-lg border border-border/50 p-3 hover:border-primary hover:bg-primary/5 transition-all"
                      >
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">
                            {service.shortName} في {city.name}
                          </h3>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {service.description}
                          </p>
                        </div>
                        <ArrowLeft className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
}
