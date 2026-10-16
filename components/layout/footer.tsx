import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { footerLinks } from '@/data/navigation';
import { services } from '@/data/services';
import { cities } from '@/data/cities';
import {
  buildWhatsAppUrl,
  buildServiceMessage,
  buildTelUrl,
} from '@/lib/whatsapp';

export function Footer() {
  const year = new Date().getFullYear();
  const waUrl = buildWhatsAppUrl(buildServiceMessage('الخدمات'));
  const telUrl = buildTelUrl();

  return (
    <footer dir="rtl" className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* شعار الشركة ومعلومات التواصل */}
          <div>
            <Link
              href="/"
              aria-label={`${siteConfig.name} - الصفحة الرئيسية`}
              className="mb-5 inline-flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              {/* إطار الشعار مع توهج أزرق */}
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-sky-300/50 bg-white p-1.5 shadow-[0_0_12px_rgba(56,189,248,0.25),0_0_28px_rgba(59,130,246,0.15)] transition duration-300 hover:shadow-[0_0_18px_rgba(56,189,248,0.45),0_0_36px_rgba(59,130,246,0.25)]">
                <Image
                  src="/icon.jpeg"
                  alt={`شعار ${siteConfig.name}`}
                  width={56}
                  height={56}
                  className="h-full w-full object-contain"
                  sizes="56px"
                />
              </span>

              <span className="max-w-[220px] text-lg font-extrabold leading-relaxed text-white sm:text-xl">
                {siteConfig.name}
              </span>
            </Link>

            <p className="mb-5 text-sm leading-7 text-white/75">
              {siteConfig.description}
            </p>

            <div className="flex flex-col gap-3">
              {waUrl && (
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-sky-300"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  واتساب
                </a>
              )}

              {telUrl && (
                <a
                  href={telUrl}
                  className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-sky-300"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  اتصال هاتفي
                </a>
              )}

              {siteConfig.email && (
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 break-all text-sm text-white/80 transition-colors hover:text-sky-300"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {siteConfig.email}
                </a>
              )}
            </div>
          </div>

          {/* روابط سريعة */}
          <div>
            <h3 className="mb-4 font-bold text-base text-accent">
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* الخدمات */}
          <div>
            <h3 className="mb-4 font-bold text-base text-accent">
              خدماتنا
            </h3>
            <ul className="space-y-3">
              {services.slice(0, 8).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {service.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* المدن */}
          <div>
            <h3 className="mb-4 font-bold text-base text-accent">
              مدن الخدمة
            </h3>
            <ul className="space-y-3">
              {cities.map((city) => (
                <li key={city.id}>
                  <Link
                    href={`/cities/${city.slug}`}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* حقوق النشر */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-sm text-white/60">
            &copy; {year} {siteConfig.name}. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
