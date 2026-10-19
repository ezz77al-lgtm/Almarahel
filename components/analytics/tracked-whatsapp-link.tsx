
'use client';

import { sendGAEvent } from '@next/third-parties/google';
import type { ReactNode } from 'react';

interface TrackedWhatsAppLinkProps {
  href: string;
  serviceName: string;
  cityName?: string;
  className?: string;
  children: ReactNode;
}

export function TrackedWhatsAppLink({
  href,
  serviceName,
  cityName,
  className,
  children,
}: TrackedWhatsAppLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => {
        sendGAEvent('event', 'whatsapp_click', {
          service_name: serviceName,
          city_name: cityName || 'unspecified',
        });
      }}
    >
      {children}
    </a>
  );
}
