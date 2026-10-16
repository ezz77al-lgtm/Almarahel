import Link from 'next/link';
import { MessageCircle, ArrowLeft } from 'lucide-react';
import type { Service } from '@/data/services';
import { buildWhatsAppUrl, buildServiceMessage } from '@/lib/whatsapp';
import { cities } from '@/data/cities';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  className?: string;
  cityName?: string;
}

export function ServiceCard({
  service,
  className,
  cityName,
}: ServiceCardProps) {
  const waUrl = buildWhatsAppUrl(
    buildServiceMessage(service.shortName, cityName)
  );

  const availableCityNames = service.availableCities
    .map((id) => cities.find((c) => c.id === id)?.name)
    .filter(Boolean);

  return (
    <article
      className={cn(
        'group relative isolate min-h-[390px] overflow-hidden rounded-2xl bg-slate-900 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl',
        className
      )}
    >
      {/* صورة الخلفية: تغطي البطاقة بالكامل */}
      <img
        src={service.image}
        alt={service.imageAlt}
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* طبقة تدرج فوق الصورة لزيادة وضوح المحتوى */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-900/10 transition-colors duration-500 group-hover:from-slate-950 group-hover:via-slate-950/75" />

      {/* رابط يغطي البطاقة بالكامل */}
      <Link
        href={`/services/${service.slug}`}
        aria-label={`التعرف على خدمة ${service.shortName}`}
        className="absolute inset-0 z-0 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      />

      {/* محتوى البطاقة فوق الصورة */}
      <div className="relative z-10 flex min-h-[390px] flex-col justify-end p-5 text-white pointer-events-none">
        <div className="mb-3">
          <span className="inline-flex rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
            خدمات التنظيف والتشطيبات
          </span>
        </div>

        <h3 className="mb-2 text-xl font-extrabold leading-snug text-white transition-colors group-hover:text-amber-300">
          {service.shortName}
        </h3>

        <p className="mb-4 line-clamp-3 text-sm leading-7 text-white/85">
          {service.description}
        </p>

        {/* المدن المتاحة */}
        {availableCityNames.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2">
            {availableCityNames.slice(0, 4).map((name) => (
              <span
                key={name}
                className="rounded-full border border-white/20 bg-black/25 px-2.5 py-1 text-[11px] text-white/90 backdrop-blur-sm"
              >
                {name}
              </span>
            ))}
          </div>
        )}

        {/* الأزرار: تظل قابلة للنقر فوق رابط البطاقة */}
        <div className="pointer-events-auto relative z-20 flex flex-wrap items-center gap-3">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 rounded-lg border border-white/40 bg-white/10 px-3 py-2.5 text-xs font-bold text-white backdrop-blur-md transition-all hover:border-amber-300 hover:bg-white/20"
          >
            المزيد عن الخدمة
            <ArrowLeft className="h-3.5 w-3.5" />
          </Link>

          {waUrl ? (
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-auto inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-3 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:scale-105 hover:bg-[#1da851]"
            >
              <MessageCircle className="h-4 w-4" />
              اطلب عبر واتساب
            </a>
          ) : (
            <span className="mr-auto inline-flex items-center gap-2 rounded-lg bg-white/15 px-3 py-2.5 text-xs font-bold text-white/70">
              <MessageCircle className="h-4 w-4" />
              اطلب عبر واتساب
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
