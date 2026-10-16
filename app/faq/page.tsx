import { generateMetadata, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { SectionHeader } from '@/components/section-header';
import { WhatsAppCTA } from '@/components/layout/cta-buttons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs, faqCategories } from '@/data/faqs';

import { JsonLd } from '@/components/seo/json-ld';
export const metadata = generateMetadata({
  title: 'الأسئلة الشائعة',
  description: 'إجابات على الأسئلة الشائعة حول خدمات شركة المراحل السريعة والمدن التي نخدمها وكيفية طلب الخدمة.',
  path: '/faq',
});

export default function FAQPage() {
  const faqSchema = generateFAQSchema(faqs.map((faq) => ({ question: faq.question, answer: faq.answer })));
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema([{ name: 'الرئيسية', url: '/' }, { name: 'الأسئلة الشائعة', url: '/faq' }])} />
      <JsonLd data={faqSchema} />
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'الرئيسية', href: '/' },
            { label: 'الأسئلة الشائعة' },
          ]}
        />

        <div className="mt-6 max-w-3xl mx-auto">
          <SectionHeader
            title="الأسئلة الشائعة"
            description="إجابات على أكثر الأسئلة شيوعاً حول خدماتنا ومدن التغطية وكيفية طلب الخدمة."
            align="center"
          />

          <div className="space-y-8 mt-8">
            {faqCategories.map((category) => {
              const categoryFaqs = faqs.filter((f) => f.category === category);
              if (categoryFaqs.length === 0) return null;

              return (
                <div key={category}>
                  <h3 className="font-bold text-lg mb-4 text-primary">{category}</h3>
                  <Accordion type="single" collapsible className="space-y-3">
                    {categoryFaqs.map((faq) => (
                      <AccordionItem
                        key={faq.id}
                        value={faq.id}
                        className="rounded-lg bg-card px-4 shadow-sm border border-border/50"
                      >
                        <AccordionTrigger className="text-right text-sm font-bold hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              );
            })}
          </div>

          <div className="mt-12 p-6 rounded-xl bg-primary text-white text-center">
            <h3 className="font-bold text-lg mb-2">لم تجد إجابة لسؤالك؟</h3>
            <p className="text-sm text-white/80 mb-4">
              تواصل معنا مباشرة وسنجيب على جميع استفساراتك.
            </p>
            <WhatsAppCTA
              serviceName="استفسار"
              variant="whatsapp"
              label="تواصل معنا"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
