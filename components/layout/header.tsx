'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';
import Image from 'next/image';


export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/60 bg-white backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <div className="container-mw container-px">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label={siteConfig.name}>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent overflow-hidden">
                <Image
                  src="/icon.jpeg"
                  alt={`شعار ${siteConfig.name}`}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-xl object-cover"
                />
              </div>

            <div className="hidden flex-col sm:flex">
              <span className={cn('font-display text-lg font-bold leading-tight', scrolled ? 'text-foreground' : 'text-white')}>
                {siteConfig.nameShort}
              </span>
              <span className={cn('text-xs leading-tight', scrolled ? 'text-muted-foreground' : 'text-white/60')}>
                {siteConfig.nameEn}
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="القائمة الرئيسية">
            {siteConfig.nav.map((item) => {
              const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative rounded-lg px-4 py-2 text-sm font-semibold transition-colors',
                    scrolled
                      ? active
                        ? 'text-primary'
                        : 'text-foreground/60 hover:text-foreground'
                      : active
                        ? 'text-accent'
                        : 'text-white/70 hover:text-white'
                  )}
                >
                  {item.label}
                  {active && (
                    <span className={cn(
                      'absolute inset-x-4 -bottom-px h-0.5 rounded-full',
                      scrolled ? 'bg-accent' : 'bg-accent'
                    )} />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${siteConfig.phone}`}
              className={cn(
                'flex items-center gap-2 rounded-lg border px-4 py-2 font-mono text-sm font-semibold transition-all btn-press',
                scrolled
                  ? 'border-border text-primary hover:bg-primary/5'
                  : 'border-white/20 text-white hover:bg-white/10'
              )}
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'rounded-lg px-5 py-2.5 text-sm font-bold btn-press transition-all',
                scrolled
                  ? 'bg-primary text-primary-foreground hover:bg-primary-dark'
                  : 'bg-accent text-accent-foreground hover:brightness-95'
              )}
            >
              اطلب الخدمة
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className={cn(
              'rounded-lg p-2 transition-colors lg:hidden',
              scrolled ? 'text-foreground' : 'text-white'
            )}
            aria-label="فتح القائمة"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-primary-dark/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 w-full max-w-sm border-l border-border bg-background shadow-2xl">
            <div className="flex h-20 items-center justify-between border-b border-border px-5">
              <span className="font-display text-lg font-bold">{siteConfig.nameShort}</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-lg p-2 text-muted-foreground hover:bg-muted"
                aria-label="إغلاق القائمة"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-5" aria-label="القائمة المتنقلة">
              {siteConfig.nav.map((item) => {
                const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'rounded-xl px-4 py-3 text-base font-semibold transition-colors',
                      active ? 'bg-accent/15 text-accent-foreground' : 'text-foreground/70 hover:bg-muted'
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-3 font-mono text-sm font-semibold text-primary"
                >
                  <Phone className="h-4 w-4" />
                  اتصل الآن
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-primary px-5 py-3 text-center text-sm font-bold text-primary-foreground btn-press"
                >
                  اطلب الخدمة
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
