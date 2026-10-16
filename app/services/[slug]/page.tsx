import { notFound } from 'next/navigation';
import { generateMetadata as generatePageMetadata, generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema } from '@/lib/seo';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { WhatsAppCTA } from '@/components/layout/cta-buttons';
import { getService, getServicesByGroup, serviceGroups, getGroupById, getCitiesByService } from '@/data/services';
import { cities } from '@/data/cities';
import { getProjectsByService } from '@/data/projects';
import { ProjectCard } from '@/components/projects/project-card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import { CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';

interface PageProps {
  params: { slug: string };
}

import { JsonLd } from '@/components/seo/json-ld';
export function generateStaticParams() {
  return [{ slug: 'glass-facade-cleaning' }, { slug: 'storefront-cleaning' }, { slug: 'home-cleaning' }, { slug: 'building-cleaning' }, { slug: 'office-cleaning' }, { slug: 'post-construction-cleaning' }, { slug: 'ceramic-installation' }, { slug: 'porcelain-installation' }, { slug: 'marble-installation' }, { slug: 'marble-polishing' }, { slug: 'interior-painting' }];
}

export async function generateMetadata({ params }: PageProps) {
  const service = getService(params.slug);
  if (!service) return {};
  return generatePageMetadata({
    title: service.name,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = getService(params.slug);
  if (!service) notFound();

  const group = getGroupById(service.groupId);
  const relatedServices = getServicesByGroup(service.groupId).filter(
    (s) => s.id !== service.id
  );
  const availableCities = getCitiesByService(service.id);
  const serviceProjects = getProjectsByService(service.id);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'الرئيسية', url: '/' },
    { name: 'الخدمات', url: '/services' },
    { name: service.shortName, url: `/services/${service.slug}` },
  ]);
  const serviceSchema = generateServiceSchema({
    name: service.name,
    description: service.description,
    url: `/services/${service.slug}`,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      {service.faqs.length > 0 && <JsonLd data={generateFAQSchema(service.faqs.map((faq) => ({ question: faq.question, answer: faq.answer })))} />}
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'الرئيسية', href: '/' },
            { label: 'الخدمات', href: '/services' },
            { label: service.shortName },
          ]}
        />

        {/* Hero */}
        <div className="mt-6 relative rounded-2xl overflow-hidden h-72 lg:h-96 mb-8">
          <img
            src={service.image}
            alt={service.imageAlt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 navy-gradient-strong" />
          <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 text-white">
            <h1 className="text-2xl lg:text-3xl font-bold mb-2">{service.name}</h1>
            <p className="text-sm lg:text-base text-white/85 max-w-2xl">
              {service.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-xl font-bold mb-3">مقدمة عن الخدمة</h2>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                {service.longDescription}
              </p>
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

            {/* Scenarios */}
            <section>
              <h2 className="text-xl font-bold mb-4">حالات استخدام الخدمة</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.scenarios.map((scenario) => (
                  <div
                    key={scenario}
                    className="p-4 rounded-lg bg-muted/50 border border-border/50"
                  >
                    <p className="text-sm">{scenario}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing factors */}
            <section>
              <h2 className="text-xl font-bold mb-4">عوامل تؤثر على التسعير</h2>
              <p className="text-sm text-muted-foreground mb-4">
                تختلف أسعار الخدمة بناءً على عدة عوامل. تواصل معنا للحصول على عرض سعر مخصص.
              </p>
              <ul className="space-y-2">
                {service.pricingFactors.map((factor) => (
                  <li key={factor} className="flex items-start gap-2 text-sm">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent text-xs font-bold shrink-0">
                      •
                    </span>
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Considerations */}
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

            {/* FAQs */}
            {service.faqs.length > 0 && (
              <section>
                <h2 className="text-xl font-bold mb-4">الأسئلة الشائعة</h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {service.faqs.map((faq, index) => (
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
            )}

            {/* Projects */}
            {serviceProjects.length > 0 && (
              <section>
                <h2 className="text-xl font-bold mb-4">  مشاريع متعلقة بالخدمة</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {serviceProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA */}
            <div className="p-6 rounded-xl bg-primary text-white sticky top-24">
              <h3 className="font-bold text-lg mb-2">اطلب هذه الخدمة</h3>
              <p className="text-sm text-white/80 mb-4">
                تواصل معنا للحصول على عرض سعر مخصص.
              </p>
              <WhatsAppCTA
                serviceName={service.shortName}
                variant="whatsapp"
                label="تواصل عبر واتساب"
                className="w-full"
              />
            </div>

            {/* Available cities */}
            <div className="p-6 rounded-xl bg-card border border-border/50 shadow-sm">
              <h3 className="font-bold text-base mb-4">المدن المتوفرة فيها الخدمة</h3>
              <div className="flex flex-wrap gap-2">
                {availableCities.map((city) => (
                  <Link
                    key={city.id}
                    href={`/cities/${city.slug}`}
                    className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Related services */}
            {relatedServices.length > 0 && (
              <div className="p-6 rounded-xl bg-card border border-border/50 shadow-sm">
                <h3 className="font-bold text-base mb-4">خدمات ذات صلة</h3>
                <ul className="space-y-2">
                  {relatedServices.map((related) => (
                    <li key={related.id}>
                      <Link
                        href={`/services/${related.slug}`}
                        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ArrowLeft className="h-3 w-3" />
                        {related.shortName}
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
    </>
  );
}
