import { generateMetadata, generateBreadcrumbSchema, generateWebPageSchema } from '@/lib/seo';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { SectionHeader } from '@/components/section-header';
import { WhatsAppCTA } from '@/components/layout/cta-buttons';
import { siteConfig } from '@/config/site';
import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { Sparkles, MapPin, CheckCircle } from 'lucide-react';

import { JsonLd } from '@/components/seo/json-ld';
export const metadata = generateMetadata({
  title: 'من نحن',
  description: 'تعرف على شركة المراحل السريعة وخدماتها في تنظيف الواجهات الزجاجية والمنازل والمباني وتركيب الأرضيات والدهانات الداخلية في المملكة العربية السعودية.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema([{ name: 'الرئيسية', url: '/' }, { name: 'من نحن', url: '/about' }])} />
      <JsonLd data={generateWebPageSchema({ name: 'من نحن', description: 'تعرف على شركة المراحل السريعة وخدماتها ومدن التغطية.', path: '/about' })} />
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'الرئيسية', href: '/' },
            { label: 'من نحن' },
          ]}
        />

        <div className="mt-6 max-w-4xl mx-auto">
          <SectionHeader
            title="من نحن"
            description="شركة المراحل السريعة شركة متخصصة في تقديم خدمات التنظيف وتركيب الأرضيات والدهانات الداخلية."
            align="center"
          />

          <div className="space-y-8 mt-8">
            <section>
              <h2 className="text-xl font-bold mb-3">مجال نشاطنا</h2>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                تقدم {siteConfig.name} خدمات احترافية في مجال التنظيف وتركيب الأرضيات والدهانات الداخلية.
                نغطي مجموعة متنوعة من الخدمات تشمل تنظيف الواجهات الزجاجية للمباني والمنشآت، تنظيف واجهات المحلات،
                تنظيف المنازل والشقق والفلل، تنظيف المباني والمنشآت، تنظيف المكاتب والشركات، تنظيف ما بعد البناء،
                تركيب السيراميك والبورسلان والرخام، جلي وتلميع الرخام، والدهانات الداخلية.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">نطاق التغطية</h2>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-4">
                نقدم خدماتنا في أربع مدن رئيسية في المملكة العربية السعودية:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cities.map((city) => (
                  <div
                    key={city.id}
                    className="flex items-center gap-2 p-4 rounded-lg bg-muted/50 border border-border/50"
                  >
                    <MapPin className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <p className="font-medium text-sm">{city.name}</p>
                      <p className="text-xs text-muted-foreground">{city.region}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">خدماتنا</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service) => (
                  <div key={service.id} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <span>{service.name}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3">مبدأ عملنا</h2>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                نحرص على تقديم خدمات احترافية تركز على الجودة والوضوح وسهولة الوصول. نؤمن بأهمية التواصل
                الشفاف مع عملائنا وتقديم خدمات تلبية احتياجاتهم. نهتم بتنظيم خدماتنا حسب المدن لتسهيل وصول
                العملاء إلى الخدمات المتوفرة في مناطقهم.
              </p>
            </section>

            <div className="p-8 rounded-xl bg-primary text-white text-center">
              <Sparkles className="h-8 w-8 mx-auto mb-4 text-accent" />
              <h3 className="font-bold text-lg mb-2">جاهز لطلب الخدمة؟</h3>
              <p className="text-sm text-white/80 mb-4">
                تواصل معنا الآن للحصول على خدمة احترافية مخصصة لاحتياجاتك.
              </p>
              <WhatsAppCTA
                serviceName="الخدمات"
                variant="whatsapp"
                label="تواصل عبر واتساب"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
