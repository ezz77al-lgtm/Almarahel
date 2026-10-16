'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import { faqs } from '@/data/faqs';

export function HomeFAQ() {
  const homeFaqs = faqs.slice(0, 7);

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          title="الأسئلة الشائعة"
          description="إجابات على أكثر الأسئلة شيوعاً حول خدماتنا ومدن التغطية."
          align="center"
        />

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {homeFaqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="rounded-lg bg-card px-4 shadow-sm border border-border/50"
              >
                <AccordionTrigger className="text-right text-base font-bold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-primary px-6 py-3 text-sm font-bold text-primary hover:bg-primary hover:text-white transition-all"
          >
            عرض جميع الأسئلة
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
