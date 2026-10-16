import { notFound } from 'next/navigation';
import { generateMetadata as generatePageMetadata, generateBreadcrumbSchema, generateFAQSchema, generateWebPageSchema } from '@/lib/seo';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { SectionHeader } from '@/components/section-header';
import { ServiceCard } from '@/components/services/service-card';
import { WhatsAppCTA } from '@/components/layout/cta-buttons';
import { getCity, getCityById } from '@/data/cities';
import { getServicesByCity } from '@/data/services';
import { getProjectsByCity } from '@/data/projects';
import { ProjectCard } from '@/components/projects/project-card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/data/faqs';
import Link from 'next/link';
import { MapPin, ArrowLeft } from 'lucide-react';

interface PageProps {
  params: { slug: string };
}

import { JsonLd } from '@/components/seo/json-ld';
export function generateStaticParams() {
  return [{ slug: 'jeddah' }, { slug: 'riyadh' }, { slug: 'madinah' }, { slug: 'qassim' }];
}

export async function generateMetadata({ params }: PageProps) {
  const city = getCity(params.slug);
  if (!city) return {};
  return generatePageMetadata({
    title: `خدماتنا في ${city.name}`,
    description: city.description,
    path: `/cities/${city.slug}`,
  });
}

export default function CityPage({ params }: PageProps) {
  const city = getCity(params.slug);
  if (!city) notFound();

  const cityServices = getServicesByCity(city.id);
  const cityProjects = getProjectsByCity(city.id);
  const cityFaqs = faqs.filter(
    (f) => f.category === 'المدن' || f.category === 'الخدمات'
  ).slice(0, 5);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'الرئيسية', url: '/' },
    { name: 'المدن', url: '/cities' },
    { name: city.name, url: `/cities/${city.slug}` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={generateWebPageSchema({ name: `خدماتنا في ${city.name}`, description: city.description, path: `/cities/${city.slug}` })} />
      <JsonLd data={generateFAQSchema(cityFaqs.map((faq) => ({ question: faq.question, answer: faq.answer })))} />
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'الرئيسية', href: '/' },
            { label: 'المدن', href: '/cities' },
            { label: city.name },
          ]}
        />

        {/* Hero */}
        <div className="mt-6 relative rounded-2xl overflow-hidden h-72 lg:h-96 mb-8">
          <img
            src={city.image}
            alt={city.imageAlt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 navy-gradient-strong" />
          <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 text-white">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="text-sm text-white/80">{city.region}</span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold mb-2">
              خدماتنا في {city.name}
            </h1>
            <p className="text-sm lg:text-base text-white/85 max-w-2xl">
              {city.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Long description */}
            <section>
              <h2 className="text-xl font-bold mb-3">عن خدماتنا في {city.name}</h2>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                {city.longDescription}
              </p>
            </section>

            {/* Services with city-service links */}
            <section>
              <SectionHeader
                title={`الخدمات المتوفرة في ${city.name}`}
                description={`${cityServices.length} خدمة متوفرة في ${city.name}. انقر على أي خدمة لمعرفة التفاصيل الخاصة بها في ${city.name}.`}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                {cityServices.map((service) => (
                  <div key={service.id} className="space-y-2">
                    <ServiceCard service={service} cityName={city.name} />
                    <Link
                      href={`/cities/${city.slug}/${service.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:gap-2 transition-all"
                    >
                      <ArrowLeft className="h-3 w-3" />
                      {service.shortName} في {city.name} - صفحة مفصلة
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            {cityProjects.length > 0 && (
              <section>
                <SectionHeader
                  title={`نماذج تصورية في ${city.name}`}
                  description="نماذج تصورية توضح أنواع الأعمال التي نقوم بها في هذه المدينة."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  {cityProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </section>
            )}

            {/* FAQs */}
            <section>
              <h2 className="text-xl font-bold mb-4">أسئلة شائعة</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {cityFaqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
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
            <div className="p-6 rounded-xl bg-primary text-white sticky top-24">
              <h3 className="font-bold text-lg mb-2">اطلب الخدمة في {city.name}</h3>
              <p className="text-sm text-white/80 mb-4">
                تواصل معنا للحصول على عرض سعر مخصص لخدمتك في {city.name}.
              </p>
              <WhatsAppCTA
                serviceName="الخدمات"
                cityName={city.name}
                variant="whatsapp"
                label="تواصل عبر واتساب"
                className="w-full"
              />
            </div>

            <div className="p-6 rounded-xl bg-card border border-border/50 shadow-sm">
              <h3 className="font-bold text-base mb-4">مدن أخرى</h3>
              <ul className="space-y-2">
                {getCityById('jeddah') && city.id !== 'jeddah' && (
                  <li><Link href="/cities/jeddah" className="text-sm text-muted-foreground hover:text-primary">جدة</Link></li>
                )}
                {getCityById('riyadh') && city.id !== 'riyadh' && (
                  <li><Link href="/cities/riyadh" className="text-sm text-muted-foreground hover:text-primary">الرياض</Link></li>
                )}
                {getCityById('madinah') && city.id !== 'madinah' && (
                  <li><Link href="/cities/madinah" className="text-sm text-muted-foreground hover:text-primary">المدينة المنورة</Link></li>
                )}
                {getCityById('qassim') && city.id !== 'qassim' && (
                  <li><Link href="/cities/qassim" className="text-sm text-muted-foreground hover:text-primary">القصيم</Link></li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
