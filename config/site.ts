export const siteConfig = {
  name: 'شركة المراحل السريعة',
  shortName: 'المراحل السريعة',
  description:
    'شركة المراحل السريعة تقدم خدمات تنظيف احترافية وتركيب أرضيات ودهانات داخلية في جدة والرياض والمدينة المنورة والقصيم. تواصل معنا للحصول على عرض سعر مخصص.',
  // IMPORTANT: Set NEXT_PUBLIC_SITE_URL to the verified production domain before deployment.
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://almrahel.sa',
  // Contact configuration
  // TODO: Replace these placeholder numbers with the real company WhatsApp and phone numbers.
  // The WhatsApp number must be in international format without + or spaces (e.g. 9665XXXXXXXX).

  // Contact configuration
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '966557906206',
  phoneNumber:
    process.env.NEXT_PUBLIC_PHONE_NUMBER || '966557906206',
  email: process.env.NEXT_PUBLIC_EMAIL || '',

  // Set to true when real contact details are configured
  contactConfigured: true,

  // Social links — only set when verified
  socialLinks: {
    twitter: '',
    facebook: '',
    instagram: '',
    linkedin: '',
  },
// Analytics
gaId: process.env.NEXT_PUBLIC_GA_ID || 'G-692YS31ML8',
  // Search console verification
  searchConsoleToken: process.env.NEXT_PUBLIC_SEARCH_CONSOLE_TOKEN || '',
};

export type SiteConfig = typeof siteConfig;
