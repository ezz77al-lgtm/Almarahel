import {
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  Phone,
} from 'lucide-react';

import {
  WhatsAppCTA,
  PhoneCTA,
  ServiceBrowseCTA,
} from '@/components/layout/cta-buttons';

export function HomeFinalCTA() {
  return (
    <section
      dir="rtl"
      aria-labelledby="home-final-cta-title"
      className="relative isolate overflow-hidden bg-slate-950 py-16 text-white sm:py-20 lg:py-24"
    >
      {/* خلفية زخرفية */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-32 -top-40 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-amber-300/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] px-5 py-10 text-center shadow-2xl shadow-black/20 backdrop-blur-sm sm:px-10 sm:py-14 lg:px-16 lg:py-16">

          {/* شارة علوية */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-300">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            <span>نحن هنا لمساعدتك</span>
          </div>

          {/* العنوان */}
          <h2
            id="home-final-cta-title"
            className="mx-auto mb-5 max-w-3xl text-3xl font-extrabold leading-relaxed tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            هل تبحث عن خدمات تنظيف
            <span className="block text-amber-300">
              ومقاولات بمستوى احترافي؟
            </span>
          </h2>

          {/* الوصف */}
          <p className="mx-auto mb-8 max-w-2xl text-base font-medium leading-8 text-slate-200 sm:text-lg sm:leading-9">
            سواء كنت تحتاج إلى تنظيف الواجهات الزجاجية أو المباني
            أو المنازل والمكاتب، أو تركيب الأرضيات وجلي الرخام،
            تواصل معنا لمناقشة احتياجاتك وطلب عرض سعر مناسب لخدمتك.
          </p>

          {/* نقاط توضيحية */}
          <ul className="mb-9 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-200 sm:text-base">
            <li className="flex items-center gap-2">
              <CheckCircle2
                className="h-5 w-5 shrink-0 text-amber-300"
                aria-hidden="true"
              />
              <span>خدمات متنوعة</span>
            </li>

            <li className="flex items-center gap-2">
              <CheckCircle2
                className="h-5 w-5 shrink-0 text-amber-300"
                aria-hidden="true"
              />
              <span>طلب عرض سعر بسهولة</span>
            </li>

            <li className="flex items-center gap-2">
              <CheckCircle2
                className="h-5 w-5 shrink-0 text-amber-300"
                aria-hidden="true"
              />
              <span>تواصل مباشر</span>
            </li>
          </ul>

          {/* أزرار التواصل */}
          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <WhatsAppCTA
              serviceName="الخدمات"
              variant="whatsapp"
              label="اطلب عرض سعر عبر واتساب"
            />

            <PhoneCTA />

            <ServiceBrowseCTA />
          </div>

          {/* تذييل بسيط */}
          <div className="mx-auto mt-9 flex max-w-xl items-center justify-center gap-3 text-sm text-slate-400">
            <span className="h-px flex-1 bg-white/10" />
            <span>ابدأ بالتواصل معنا لمعرفة الخدمة المناسبة</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
