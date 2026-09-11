'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqSchema } from '@/lib/seo';
import type { ServiceFaq, FaqItem } from '@/types';

interface FaqSectionProps {
  faqs: ServiceFaq[] | FaqItem[];
  title?: string;
  description?: string;
  generateSchema?: boolean;
}

export function FaqSection({
  faqs,
  title = 'الأسئلة الشائعة',
  description = 'إجابات على أكثر الأسئلة شيوعًا حول هذه الخدمة.',
  generateSchema = true,
}: FaqSectionProps) {
  const faqList = faqs.map((f) => ({
    question: f.question,
    answer: f.answer,
  }));

  return (
    <section className="section-pad bg-muted/30">
      <div className="container-mw container-px">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow">أسئلة وأجوبة</span>
          <h2 className="heading-2 mt-2">{title}</h2>
          <p className="lead mt-4">{description}</p>
        </div>

        {generateSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqList)) }}
          />
        )}

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqList.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="overflow-hidden rounded-2xl border border-border bg-card px-6 transition-colors hover:border-accent/30"
              >
                <AccordionTrigger className="text-start font-display text-base font-bold transition-all hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:transition-transform [&>svg]:duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
