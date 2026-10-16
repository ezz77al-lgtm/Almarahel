'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

import { navLinks } from '@/data/navigation';
import { siteConfig } from '@/config/site';
import {
  buildWhatsAppUrl,
  buildServiceMessage,
} from '@/lib/whatsapp';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isHome = pathname === '/';
  const showSolid = scrolled || !isHome || mobileOpen;

  const waUrl = buildWhatsAppUrl(
    buildServiceMessage('الخدمات')
  );

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50',
        'transition-all duration-300',
        showSolid
          ? 'bg-white/95 py-2 shadow-md backdrop-blur-md'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between gap-3">

          {/* شعار الشركة واسمها */}
          <Link
            href="/"
            aria-label={`${siteConfig.name} - الصفحة الرئيسية`}
            className="flex shrink-0 items-center gap-2.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            {/* إطار الشعار مع الظل الأزرق */}
            <span
              className={cn(
                'relative flex h-10 w-10 shrink-0',
                'items-center justify-center overflow-hidden',
                'rounded-xl border p-1',
                'transition-all duration-300',
                showSolid
                  ? [
                      'border-sky-200 bg-white',
                      'shadow-[0_0_10px_rgba(59,130,246,0.18)]',
                    ].join(' ')
                  : [
                      'border-white/40 bg-white/10',
                      'backdrop-blur-sm',
                      'shadow-[0_0_14px_rgba(56,189,248,0.28)]',
                    ].join(' ')
              )}
            >
              <Image
                src="/icon.jpeg"
                alt={`شعار ${siteConfig.name}`}
                width={44}
                height={44}
                priority
                sizes="44px"
                className="h-full w-full object-contain"
              />
            </span>

            {/* اسم الشركة */}
            <span
              className={cn(
                'max-w-[190px] text-sm font-extrabold',
                'leading-relaxed transition-colors duration-300',
                'sm:text-base lg:text-lg',
                showSolid ? 'text-primary' : 'text-white'
              )}
            >
              {siteConfig.name}
            </span>
          </Link>

          {/* روابط التنقل في الكمبيوتر */}
          <nav
            aria-label="القائمة الرئيسية"
            className="hidden items-center gap-1 lg:flex"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'rounded-md px-3 py-2',
                    'text-sm font-medium transition-colors',
                    showSolid
                      ? 'text-foreground hover:bg-primary/5 hover:text-primary'
                      : 'text-white/90 hover:bg-white/10 hover:text-white',
                    isActive &&
                      (showSolid
                        ? 'bg-primary/5 text-primary'
                        : 'bg-white/15 text-white')
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* زر الطلب والقائمة في الجوال */}
          <div className="flex shrink-0 items-center gap-2">

            {/* زر طلب الخدمة في الكمبيوتر والجوال المتوسط */}
            <a
              href={waUrl || '#'}
              target={waUrl ? '_blank' : undefined}
              rel={
                waUrl
                  ? 'noopener noreferrer'
                  : undefined
              }
              aria-label="اطلب الخدمة عبر واتساب"
              className={cn(
                'hidden items-center justify-center gap-2',
                'rounded-lg px-3 py-2 text-sm font-bold',
                'transition-all duration-300 sm:inline-flex',
                'lg:px-4',
                showSolid
                  ? 'bg-primary text-white hover:bg-primary/90'
                  : 'bg-accent text-accent-foreground hover:bg-accent/90'
              )}
            >
              <Phone className="h-4 w-4" />
              <span>اطلب الخدمة</span>
            </a>

            {/* زر فتح وإغلاق قائمة الجوال */}
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className={cn(
                'inline-flex items-center justify-center',
                'rounded-lg p-2 transition-colors lg:hidden',
                showSolid
                  ? 'text-foreground hover:bg-muted'
                  : 'text-white hover:bg-white/10'
              )}
              aria-label={
                mobileOpen
                  ? 'إغلاق القائمة'
                  : 'فتح القائمة'
              }
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* قائمة الجوال */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="mt-2 border-t border-border bg-white shadow-lg lg:hidden"
        >
          <nav
            aria-label="قائمة الجوال"
            className="container mx-auto flex flex-col gap-1 px-4 py-4"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'rounded-lg px-4 py-3',
                    'text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary/5 text-primary'
                      : 'text-foreground hover:bg-muted'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* زر واتساب داخل قائمة الجوال */}
            <a
              href={waUrl || '#'}
              target={waUrl ? '_blank' : undefined}
              rel={
                waUrl
                  ? 'noopener noreferrer'
                  : undefined
              }
              className={cn(
                'mt-2 inline-flex items-center',
                'justify-center gap-2 rounded-lg',
                'bg-primary px-4 py-3',
                'text-sm font-bold text-white',
                'transition-colors hover:bg-primary/90'
              )}
            >
              <Phone className="h-4 w-4" />
              اطلب الخدمة
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}