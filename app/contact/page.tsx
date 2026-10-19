import { generateMetadata, generateBreadcrumbSchema, generateWebPageSchema } from '@/lib/seo';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { SectionHeader } from '@/components/section-header';
import { WhatsAppCTA, PhoneCTA } from '@/components/layout/cta-buttons';
import { siteConfig } from '@/config/site';
import { buildWhatsAppUrl, buildServiceMessage, buildTelUrl } from '@/lib/whatsapp';
import { MessageCircle, Phone, Mail } from 'lucide-react';

import { JsonLd } from '@/components/seo/json-ld';
export const metadata = generateMetadata({
  title: 'تواصل معنا',
  description: 'تواصل مع شركة المراحل السريعة عبر واتساب أو الهاتف لطلب الخدمة أو الاستفسار.',
  path: '/contact',
});

export default function ContactPage() {
  const waUrl = buildWhatsAppUrl(buildServiceMessage('الخدمات'));
  const telUrl = buildTelUrl();

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema([{ name: 'الرئيسية', url: '/' }, { name: 'تواصل معنا', url: '/contact' }])} />
      <JsonLd data={generateWebPageSchema({ name: 'تواصل معنا', description: 'طرق التواصل مع شركة المراحل السريعة للاستفسار عن خدمات التنظيف وتركيب الارضيات.', path: '/contact' })} />
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'الرئيسية', href: '/' },
            { label: 'تواصل معنا' },
          ]}
        />

        <div className="mt-6 max-w-3xl mx-auto">
          <SectionHeader
            title="تواصل معنا"
            description="نحن هنا لمساعدتك. تواصل معنا عبر واتساب أو الهاتف لطلب الخدمة أو الاستفسار."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {/* WhatsApp */}
            <div className="flex flex-col items-center text-center p-8 rounded-xl bg-card border border-border/50 shadow-md">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#25D366]/10 text-[#25D366] mb-4">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">واتساب</h3>
              <p className="text-sm text-muted-foreground mb-6">
                تواصل معنا عبر واتساب لطلب الخدمة أو الاستفسار. نرد عليك بسرعة.
              </p>
              {waUrl && (
                <WhatsAppCTA
                  serviceName="الخدمات"
                  variant="whatsapp"
                  label="فتح محادثة واتساب"
                  className="w-full"
                />
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center text-center p-8 rounded-xl bg-card border border-border/50 shadow-md">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">الهاتف</h3>
              <p className="text-sm text-muted-foreground mb-6">
                اتصل بنا مباشرة لمناقشة احتياجاتك والحصول على عرض سعر.
              </p>
              {telUrl && (
                <PhoneCTA className="w-full" label="اتصل بنا الآن" />
              )}
            </div>
          </div>

          {/* Email */}
          {siteConfig.email && (
            <div className="flex flex-col items-center text-center p-8 rounded-xl bg-card border border-border/50 shadow-md mt-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent mb-3">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-base mb-1">البريد الإلكتروني</h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-primary hover:underline"
              >
                {siteConfig.email}
              </a>
            </div>
          )}

          {/* Note */}
          <div className="mt-8 p-4 rounded-lg bg-muted/50 border border-border/50 text-center">
            <p className="text-sm text-muted-foreground">
              يمكنك التواصل معنا في أي وقت لطلب الخدمة أو الاستفسار. نخدم عملاءنا في
              جدة والرياض والمدينة المنورة والقصيم.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
