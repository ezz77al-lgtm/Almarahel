import { notFound } from 'next/navigation';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateFAQSchema,
} from '@/lib/seo';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { SectionHeader } from '@/components/section-header';
import { WhatsAppCTA } from '@/components/layout/cta-buttons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { getCity, getCityById } from '@/data/cities';
import { getService, getServiceById, getServicesByCity } from '@/data/services';
import { getCityServiceData, getCityServiceCombinations } from '@/data/city-services';
import { getProjectsByService } from '@/data/projects';
import { ProjectCard } from '@/components/projects/project-card';
import Link from 'next/link';
import { MapPin, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';

interface PageProps {
  params: { slug: string; serviceSlug: string };
}

export function generateStaticParams() {
  return getCityServiceCombinations().map(({ cityId, serviceId }) => {
    const city = getCityById(cityId);
    const service = getServiceById(serviceId);
    if (!city || !service) return null;
    return { slug: city.slug, serviceSlug: service.slug };
  }).filter(Boolean) as { slug: string; serviceSlug: string }[];
}

export async function generateMetadata({ params }: PageProps) {
  const city = getCity(params.slug);
  const service = getService(params.serviceSlug);
  if (!city || !service) return {};

  const data = getCityServiceData(city.id, service.id);
  if (!data) return {};

  return generatePageMetadata({
    title: data.seoTitle,
    description: data.seoDescription,
    path: `/cities/${city.slug}/${service.slug}`,
    image: service.image,
  });
}

export default function CityServicePage({ params }: PageProps) {
  const city = getCity(params.slug);
  const service = getService(params.serviceSlug);
  if (!city || !service) notFound();

  const data = getCityServiceData(city.id, service.id);
  if (!data) notFound();

  const otherServicesInCity = getServicesByCity(city.id).filter(
    (s) => s.id !== service.id
  );
  const serviceProjects = getProjectsByService(service.id).filter(
    (p) => p.cityId === city.id
  );

  const breadcrumbItems = [
    { label: 'الرئيسية', href: '/' },
    { label: 'المدن', href: '/cities' },
    { label: city.name, href: `/cities/${city.slug}` },
    { label: service.shortName },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(
    breadcrumbItems.map((item) => ({
      name: item.label,
      url: item.href || `/cities/${city.slug}/${service.slug}`,
    }))
  );

  const serviceSchema = generateServiceSchema({
    name: `${service.shortName} في ${city.name}`,
    description: data.description,
    url: `/cities/${city.slug}/${service.slug}`,
  });

  const faqSchema = generateFAQSchema(data.faqs);

  return (
    <div className="pt-24 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero */}
        <div className="mt-6 relative rounded-2xl overflow-hidden h-72 lg:h-96 mb-8">
          <img
            src={service.image}
            alt={`${service.imageAlt} في ${city.name}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 navy-gradient-strong" />
          <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 text-white">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="text-sm text-white/80">{city.region}</span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold mb-2">
              {service.shortName} في {city.name}
            </h1>
            <p className="text-sm lg:text-base text-white/85 max-w-2xl">
              {data.intro}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-xl font-bold mb-3">
                {service.shortName} في {city.name}
              </h2>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                {data.description}
              </p>
            </section>

            {/* Importance */}
            <section>
              <h2 className="text-xl font-bold mb-3">
                أهمية الخدمة في {city.name}
              </h2>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                {data.importance}
              </p>
            </section>

            {/* Suitable For */}
            <section>
              <h2 className="text-xl font-bold mb-4">
                أنواع المباني والمنشآت المناسبة للخدمة
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.suitableFor.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* What it covers */}
            <section>
              <h2 className="text-xl font-bold mb-4">ماذا تشمل الخدمة؟</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.whatItCovers.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Pricing Factors */}
            <section>
              <h2 className="text-xl font-bold mb-4">
                عوامل تؤثر على أسعار {service.shortName} في {city.name}
              </h2>
              <ul className="space-y-2">
                {data.pricingFactors.map((factor) => (
                  <li key={factor} className="flex items-start gap-2 text-sm">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent text-xs font-bold shrink-0">
                      •
                    </span>
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Why Request Quote */}
            <section>
              <h2 className="text-xl font-bold mb-4">
                لماذا تطلب عرض سعر لـ{service.shortName} في {city.name}؟
              </h2>
              <ul className="space-y-2">
                {data.whyRequestQuote.map((reason) => (
                  <li key={reason} className="flex items-start gap-2 text-sm">
                    <AlertCircle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Considerations */}
            {service.considerations.length > 0 && (
              <section>
                <h2 className="text-xl font-bold mb-4">اعتبارات وملاحظات</h2>
                <ul className="space-y-2">
                  {service.considerations.map((consideration) => (
                    <li key={consideration} className="flex items-start gap-2 text-sm">
                      <AlertCircle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
                      <span>{consideration}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Projects */}
            {serviceProjects.length > 0 && (
              <section>
                <h2 className="text-xl font-bold mb-4">
                  نماذج تصورية لـ{service.shortName} في {city.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {serviceProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </section>
            )}

            {/* FAQs */}
            <section>
              <h2 className="text-xl font-bold mb-4">
                أسئلة شائعة عن {service.shortName} في {city.name}
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {data.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="rounded-lg bg-card px-4 shadow-sm border border-border/50"
                  >
                    <AccordionTrigger className="text-right text-sm font-bold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA */}
            <div className="p-6 rounded-xl bg-primary text-white sticky top-24">
              <h3 className="font-bold text-lg mb-2">
                اطلب {service.shortName} في {city.name}
              </h3>
              <p className="text-sm text-white/80 mb-4">
                تواصل معنا للحصول على عرض سعر مخصص لـ{service.shortName} في {city.name}.
              </p>
              <WhatsAppCTA
                serviceName={service.shortName}
                cityName={city.name}
                variant="whatsapp"
                label="اطلب الخدمة عبر واتساب"
                className="w-full"
              />
            </div>

            {/* Links */}
            <div className="p-6 rounded-xl bg-card border border-border/50 shadow-sm space-y-4">
              <div>
                <h3 className="font-bold text-base mb-2">روابط ذات صلة</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href={`/cities/${city.slug}`}
                      className="inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all"
                    >
                      <ArrowLeft className="h-3 w-3" />
                      جميع خدمات {city.name}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all"
                    >
                      <ArrowLeft className="h-3 w-3" />
                      {service.shortName} - صفحة الخدمة
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all"
                    >
                      <ArrowLeft className="h-3 w-3" />
                      تواصل معنا
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Other Services in City */}
            {otherServicesInCity.length > 0 && (
              <div className="p-6 rounded-xl bg-card border border-border/50 shadow-sm">
                <h3 className="font-bold text-base mb-4">خدمات أخرى في {city.name}</h3>
                <ul className="space-y-2">
                  {otherServicesInCity.map((otherService) => (
                    <li key={otherService.id}>
                      <Link
                        href={`/cities/${city.slug}/${otherService.slug}`}
                        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ArrowLeft className="h-3 w-3" />
                        {otherService.shortName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}