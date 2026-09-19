import Link from 'next/link';
import { Phone, MessageCircle, ArrowUpLeft } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  variant?: 'default' | 'compact';
  className?: string;
}

export function CTASection({
  title = 'جاهزون لبدء مشروعك؟',
  description = 'تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك في جدة.',
  primaryLabel = 'اطلب الخدمة الآن',
  primaryHref = '/contact',
  variant = 'default',
  className,
}: CTASectionProps) {
  return (
    <section className={cn('section-pad', className)}>
      <div className="container-mw container-px">
        <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-primary px-6 py-16 text-center shadow-soft sm:px-12 sm:py-20">
          <div className="absolute inset-0 bg-grid opacity-[0.05]" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="heading-2 text-white text-balance">{title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70 text-pretty">{description}</p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={primaryHref}
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-base font-bold text-accent-foreground btn-press transition-all hover:brightness-95"
              >
                {primaryLabel}
                <ArrowUpLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-7 py-3.5 text-base font-bold text-accent transition-colors hover:bg-accent/20"
              >
                <MessageCircle className="h-5 w-5" />
                تواصل عبر واتساب
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-7 py-3.5 text-base font-bold text-accent transition-colors hover:bg-accent/20"
              >
                <Phone className="h-5 w-5" />
                اتصل الآن
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
