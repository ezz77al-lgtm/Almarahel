import { SectionHeader } from '@/components/section-header';
import { WhatsAppCTA } from '@/components/layout/cta-buttons';
import { CheckCircle } from 'lucide-react';
import { cities } from '@/data/cities';
import Link from 'next/link';

export function HomeGlassFeature() {
  return (
    <section className="py-16 lg:py-24 bg-navy text-white relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold bg-accent text-accent-foreground px-4 py-1.5 rounded-full mb-4">
              خدمة مميزة
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              تنظيف واجهات المباني والمنشآت الزجاجية
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              نقدم خدمة تنظيف احترافية للواجهات الزجاجية للمباني والمنشآت تشمل
              التنظيف الداخلي والخارجي للزجاج. خدمتنا متوفرة في جميع مدن الخدمة
              الأربع، ونستخدم أدوات ومواد آمنة وفعالة للحصول على نتائج ممتازة.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'تنظيف الزجاج الخارجي للواجهات',
                'تنظيف الزجاج الداخلي للواجهات',
                'تنظيف الواجهات للمباني التجارية والسكنية',
                'تنظيف واجهات المكاتب والشركات والمحلات',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 mb-6">
              <WhatsAppCTA
                serviceName="تنظيف الواجهات الزجاجية"
                variant="whatsapp"
                label="اطلب الخدمة"
              />
              <Link
                href="/services/glass-facade-cleaning"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-5 py-3 text-sm font-bold text-white hover:bg-white/10 transition-all"
              >
                المزيد عن الخدمة
              </Link>
            </div>

            <div className="flex flex-wrap gap-2">
              {cities.map((city) => (
                <Link
                  key={city.id}
                  href={`/cities/${city.slug}`}
                  className="text-xs bg-white/10 backdrop-blur px-3 py-1.5 rounded-full text-white/80 hover:bg-white/20 transition-colors"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="/services/glass-facades.webp"
              alt="تنظيف واجهة زجاجية لمبنى"
              className="rounded-xl shadow-2xl w-full h-[400px] object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-4 rounded-xl shadow-xl hidden sm:block">
              <p className="text-2xl font-bold">4 مدن</p>
              <p className="text-xs">تتوفر فيها الخدمة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
