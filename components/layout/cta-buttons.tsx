import { MessageCircle, Phone } from 'lucide-react';
import { buildWhatsAppUrl, buildServiceMessage, buildTelUrl } from '@/lib/whatsapp';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  serviceName: string;
  cityName?: string;
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'outline';
  className?: string;
  label?: string;
}

export function WhatsAppCTA({
  serviceName,
  cityName,
  variant = 'whatsapp',
  className,
  label = 'اطلب الخدمة عبر واتساب',
}: CTAButtonProps) {
  const url = buildWhatsAppUrl(buildServiceMessage(serviceName, cityName));

  if (!url) {
  return (
      <span
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold bg-muted text-muted-foreground cursor-not-allowed',
          className
        )}
      >
        <MessageCircle className="h-4 w-4" />
        {label}
      </span>
    );
  }

  const variantClasses = {
    whatsapp: 'bg-[#25D366] text-white hover:bg-[#1da851] shadow-md shadow-green-500/20',
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-md shadow-primary/20',
    secondary: 'bg-accent text-accent-foreground hover:bg-accent/90 shadow-md',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition-all hover:scale-105',
        variantClasses[variant],
        className
      )}
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  );
}

export function PhoneCTA({
  className,
  label = 'اتصل بنا',
}: {
  className?: string;
  label?: string;
}) {
  const url = buildTelUrl();

  if (!url) return null;

  return (
    <a
      href={url}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary px-5 py-3 text-sm font-bold text-primary hover:bg-primary hover:text-white transition-all',
        className
      )}
    >
      <Phone className="h-4 w-4" />
      {label}
    </a>
  );
}

export function ServiceBrowseCTA({
  className,
  label = 'تصفح الخدمات',
}: {
  className?: string;
  label?: string;
}) {
  return (
    <Link
      href="/services"
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur px-5 py-3 text-sm font-bold text-white hover:bg-white/20 transition-all',
        className
      )}
    >
      {label}
    </Link>
  );
}
