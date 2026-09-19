'use client';

import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import { siteConfig } from '@/data/site';

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 left-5 z-40 flex flex-col gap-3 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-8 opacity-0'
      }`}
    >
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب"
        className="group relative flex h-12 w-12 items-center justify-center rounded-xl bg-whatsapp text-white shadow-card transition-transform hover:scale-105 active:scale-95 sm:h-14 sm:w-14"
      >
        <FaWhatsapp className="h-6 w-6 sm:h-7 sm:w-7" />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-semibold opacity-0 shadow-soft transition-opacity group-hover:opacity-100">
          تواصل عبر واتساب
        </span>
      </a>
      <a
        href={`tel:${siteConfig.phone}`}
        aria-label="اتصل الآن"
        className="group relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-card transition-transform hover:scale-105 active:scale-95 sm:h-14 sm:w-14"
      >
        <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-semibold opacity-0 shadow-soft transition-opacity group-hover:opacity-100">
          اتصل الآن
        </span>
      </a>
    </div>
  );
}
