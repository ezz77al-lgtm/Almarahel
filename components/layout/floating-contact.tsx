
'use client';

import { MessageCircle, Phone } from 'lucide-react';
import { sendGAEvent } from '@next/third-parties/google';
import {
  buildWhatsAppUrl,
  buildServiceMessage,
  buildTelUrl,
} from '@/lib/whatsapp';

export function FloatingContact() {
  const waUrl = buildWhatsAppUrl(buildServiceMessage('الخدمات'));
  const telUrl = buildTelUrl();

  return (
    <div
      className="fixed bottom-6 left-6 z-50 flex flex-col gap-3"
      aria-label="روابط التواصل السريع"
    >
      {waUrl && (
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="تواصل عبر واتساب"
          onClick={() => {
            sendGAEvent('event', 'whatsapp_click', {
              source: 'floating_contact',
              service_name: 'الخدمات',
            });
          }}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-[#1da851] active:scale-95"
        >
          <MessageCircle className="h-7 w-7" />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-card px-3 py-1.5 text-sm font-medium text-card-foreground opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
            تواصل عبر واتساب
          </span>
        </a>
      )}

      {telUrl && (
        <a
          href={telUrl}
          aria-label="اتصل بنا"
          onClick={() => {
            sendGAEvent('event', 'phone_click', {
              source: 'floating_contact',
            });
          }}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95"
        >
          <Phone className="h-6 w-6" />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-card px-3 py-1.5 text-sm font-medium text-card-foreground opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
            اتصل بنا
          </span>
        </a>
      )}
    </div>
  );
}
