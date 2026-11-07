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

/** يحوّل الرقم إلى الصيغة الدولية E.164 مثل +966557906206 */
export function toE164(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (!digits) return '';
  if (digits.startsWith('00')) return `+${digits.slice(2)}`;
  if (digits.startsWith('0')) return `+966${digits.slice(1)}`;
  return `+${digits}`;
}

/** رقم للعرض في الصفحة بصيغة محلية مثل 0557906206 */
export function formatPhoneDisplay(raw: string): string {
  const e164 = toE164(raw);
  if (e164.startsWith('+966')) return `0${e164.slice(4)}`;
  return e164;
}

export function buildTelUrl(): string {
  if (!siteConfig.phoneNumber) {
    return '';
  }
  return `tel:${toE164(siteConfig.phoneNumber)}`;
}
