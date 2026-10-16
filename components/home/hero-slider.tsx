'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';
import { WhatsAppCTA, ServiceBrowseCTA } from '@/components/layout/cta-buttons';
import { images } from '@/data/images';
import { cn } from '@/lib/utils';

const slides = [
    {
    image: images.hero[0].url,
    alt: 'تنظيف الواجهات الزجاجية وواجهات المباني والمحلات التجارية',
    eyebrow: 'واجهات تعكس جمال منشأتك',
    title: 'تنظيف الواجهات الزجاجية وواجهات المحلات التجارية',
    description:
      'نعتني بنظافة الواجهات الزجاجية وواجهات المباني والمنشآت التجارية من الداخل والخارج، مع الاهتمام بالتفاصيل والمظهر العام بما يتناسب مع طبيعة كل موقع.',
    serviceName: 'تنظيف الواجهات الزجاجية',
  },
  {
    image: images.hero[1].url,
    alt: 'خدمات تنظيف المنازل والمباني والمكاتب والواجهات',
    eyebrow: 'حلول متكاملة للتنظيف والتشطيبات',
    title: 'خدمات تنظيف متكاملة للمنازل والمباني والمنشآت',
    description:
      'نقدم خدمات تنظيف المنازل والشقق والمكاتب والمباني والواجهات الزجاجية، إلى جانب جلي الرخام وتركيب الأرضيات وأعمال الدهانات الداخلية بحلول تناسب احتياجات الأفراد والمنشآت.',
    serviceName: 'خدمات التنظيف والتشطيبات',
  },
  {
    image: images.hero[2].url,
    alt: 'تركيب السيراميك والبورسلان وجلي الرخام والدهانات الداخلية',
    eyebrow: 'عناية بالتفاصيل من الأرضية إلى السقف',
    title: 'تركيب السيراميك والبورسلان وجلي الرخام والدهانات',
    description:
      'نوفر خدمات تركيب الأرضيات وجلي وتلميع الرخام وتنفيذ الدهانات الداخلية، مع الاهتمام بجودة التشطيب وتناسق المظهر النهائي وفق متطلبات المساحة.',
    serviceName: 'تركيب الأرضيات وجلي الرخام والدهانات',
  },
];

const cities = ['الرياض', 'جدة', 'المدينة المنورة', 'القصيم'];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(next, 6500);
    return () => clearInterval(interval);
  }, [next, isPaused]);

  const activeSlide = slides[current];

  return (
    <section
      dir="rtl"
      
className="relative isolate h-[min(1050px,100svh)] min-h-[950px] overflow-hidden bg-slate-950 text-right max-sm:min-h-[950px]"

      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
      aria-roledescription="carousel"
      aria-label="الخدمات الرئيسية للشركة"
    >
      {/* صور الخلفية */}
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          className={cn(
            'absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out',
            index === current
              ? 'opacity-100'
              : 'pointer-events-none opacity-0'
          )}
          aria-hidden="true"
        >
          <img
            src={slide.image}
            alt=""
            className="h-full w-full object-cover object-center"
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : 'auto'}
          />
        </div>
      ))}

      {/* تعتيم احترافي يحافظ على وضوح النص فوق الصور */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-slate-950/35"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-l from-slate-950/95 via-slate-950/80 to-slate-950/30"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/15"
        aria-hidden="true"
      />

      {/* المحتوى */}
      <div className="relative z-10 flex h-full items-center">
  <div className="container mx-auto w-full px-5 pb-16 pt-40 sm:px-8 sm:pb-20 sm:pt-40 lg:px-12 lg:pb-20 lg:pt-40">
          <div className="max-w-3xl">
            {/* شارة تعريفية */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-slate-950/55 px-4 py-2.5 text-sm font-semibold text-amber-300 shadow-lg backdrop-blur-md">
              <Sparkles className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>خدمات التنظيف والمقاولات </span>
            </div>

            {/* H1 ثابت في جميع الشرائح */}
            <h1 className="mb-6 max-w-3xl text-3xl font-extrabold leading-[1.5] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.4]">
              شركة تنظيف ومقاولات
              <span className="mt-1 block text-amber-300">
                لخدمات متكاملة باهتمام بالتفاصيل
              </span>
            </h1>

            {/* محتوى الشريحة المتغير */}
            <div
              key={current}
              className="motion-safe:animate-[heroFadeIn_500ms_ease-out]"
              aria-live="polite"
              aria-atomic="true"
            >
              <h2 className="mb-4 max-w-2xl text-xl font-bold leading-relaxed text-white sm:text-2xl lg:text-3xl">
                {activeSlide.title}
              </h2>

              <p className="mb-7 max-w-2xl text-base font-medium leading-8 text-slate-100 sm:text-lg sm:leading-9 lg:text-xl">
                {activeSlide.description}
              </p>

              {/* أزرار التواصل */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <WhatsAppCTA
                  serviceName={activeSlide.serviceName}
                  variant="whatsapp"
                  label="اطلب عرض سعر عبر واتساب"
                />

                <ServiceBrowseCTA />
              </div>
            </div>

            {/* نطاق الخدمة */}
            <div className="mt-8 border-t border-white/20 pt-5">
              <p className="mb-3 text-sm font-bold text-amber-300 sm:text-base">
                المدن المستهدفة بالخدمة
              </p>

              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-white sm:text-base">
                {cities.map((city) => (
                  <li key={city} className="flex items-center gap-2">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-amber-300"
                      aria-hidden="true"
                    />
                    <span>{city}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* التنقل بين الشرائح */}
      <button
        type="button"
        onClick={prev}
        aria-label="الشريحة السابقة"
        className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-slate-950/50 text-white shadow-lg backdrop-blur-md transition hover:border-amber-300 hover:bg-slate-950/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 sm:right-6 sm:h-12 sm:w-12"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <button
        type="button"
        onClick={next}
        aria-label="الشريحة التالية"
        className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-slate-950/50 text-white shadow-lg backdrop-blur-md transition hover:border-amber-300 hover:bg-slate-950/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 sm:left-6 sm:h-12 sm:w-12"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* مؤشرات الشرائح */}
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-7">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`عرض الشريحة ${index + 1}: ${slide.title}`}
            aria-current={index === current ? 'true' : undefined}
            className={cn(
              'h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
              index === current
                ? 'w-9 bg-amber-300'
                : 'w-2.5 bg-white/65 hover:bg-white'
            )}
          />
        ))}
      </div>

      {/* لمسة ذهبية أسفل الهيرو */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-px bg-gradient-to-l from-transparent via-amber-300/80 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
