import { siteConfig } from '@/config/site';

export function buildWhatsAppUrl(message: string): string {
  if (!siteConfig.whatsappNumber) {
    return '';
  }
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
}

export function buildServiceMessage(
  serviceName: string,
  cityName?: string
): string {
  if (cityName) {
    return `السلام عليكم، أرغب في طلب خدمة ${serviceName} في ${cityName}. أرجو تزويدي بالتفاصيل وعرض السعر.`;
  }
  return `السلام عليكم، أرغب في طلب خدمة ${serviceName}. أرجو تزويدي بالتفاصيل وعرض السعر.`;
}

export function buildTelUrl(): string {
  if (!siteConfig.phoneNumber) {
    return '';
  }
  return `tel:${siteConfig.phoneNumber}`;
}
