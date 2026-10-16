import { notFound } from 'next/navigation';
import { generateMetadata as generatePageMetadata, generateBreadcrumbSchema, buildUrl } from '@/lib/seo';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { WhatsAppCTA } from '@/components/layout/cta-buttons';
import { getProject } from '@/data/projects';
import { getServiceById } from '@/data/services';
import { getCityById } from '@/data/cities';
import Link from 'next/link';
import { MapPin, ArrowLeft, CheckCircle } from 'lucide-react';

interface PageProps {
  params: { slug: string };
}

import { JsonLd } from '@/components/seo/json-ld';
export function generateStaticParams() {
  return [
    { slug: 'glass-facade-cleaning-commercial-building-jeddah' },
    { slug: 'marble-polishing-villa-riyadh' },
    { slug: 'post-construction-cleaning-apartment-madinah' },
    { slug: 'storefront-cleaning-mall-jeddah' },
    { slug: 'porcelain-installation-office-riyadh' },
    { slug: 'interior-painting-villa-jeddah' },
    { slug: 'office-cleaning-company-riyadh' },
    { slug: 'ceramic-installation-kitchen-madinah' },
    { slug: 'glass-facade-cleaning-qassim' },
  ];
}

export async function generateMetadata({ params }: PageProps) {
  const project = getProject(params.slug);
  if (!project) return {};
  return generatePageMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
  });
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const service = getServiceById(project.serviceId);
  const city = getCityById(project.cityId);
  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: buildUrl(`/projects/${project.slug}`),
    image: buildUrl(project.image),
    inLanguage: 'ar-SA',
    about: service ? { '@type': 'Service', name: service.name } : undefined,
    spatialCoverage: city ? { '@type': 'Place', name: city.name } : undefined,
  };
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'الرئيسية', url: '/' },
    { name: 'المشاريع', url: '/projects' },
    { name: project.title, url: `/projects/${project.slug}` },
  ]);

  return (
    <>
      <JsonLd data={projectSchema} />
      <JsonLd data={breadcrumbSchema} />
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'الرئيسية', href: '/' },
            { label: 'المشاريع', href: '/projects' },
            { label: project.title },
          ]}
        />

        {/* Hero */}
        <div className="mt-6 relative rounded-2xl overflow-hidden h-72 lg:h-96 mb-8">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 navy-gradient-strong" />
          <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 text-white">
            <div className="flex items-center gap-2 mb-3">
              {city && (
                <span className="inline-flex items-center gap-1 text-sm text-white/80">
                  <MapPin className="h-4 w-4" />
                  {city.name}
                </span>
              )}
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold mb-2">{project.title}</h1>
            <p className="text-sm lg:text-base text-white/85 max-w-2xl">
              {project.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-3">تفاصيل الخدمة</h2>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">الخدمات والأعمال المشمولة</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.scope.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-primary text-white sticky top-24">
              <h3 className="font-bold text-lg mb-2">اطلب هذه الخدمة</h3>
              <p className="text-sm text-white/80 mb-4">
                تواصل معنا لمعرفة تفاصيل الخدمة وطلب عرض سعر في مدينتك.
              </p>
              <WhatsAppCTA
                serviceName={service?.shortName || 'الخدمات'}
                cityName={city?.name}
                variant="whatsapp"
                label="تواصل عبر واتساب"
                className="w-full"
              />
            </div>

            {service && (
              <div className="p-6 rounded-xl bg-card border border-border/50 shadow-sm">
                <h3 className="font-bold text-base mb-3">الخدمة المرتبطة</h3>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all"
                >
                  <ArrowLeft className="h-4 w-4" />
                  {service.name}
                </Link>
              </div>
            )}

            {city && (
              <div className="p-6 rounded-xl bg-card border border-border/50 shadow-sm">
                <h3 className="font-bold text-base mb-3">المدينة</h3>
                <Link
                  href={`/cities/${city.slug}`}
                  className="inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all"
                >
                  <ArrowLeft className="h-4 w-4" />
                  {city.name}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
