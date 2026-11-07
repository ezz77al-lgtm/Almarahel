export const siteConfig = {
  name: 'شركة المراحل السريعة',
  shortName: 'المراحل السريعة',
  description:
    'شركة المراحل السريعة تقدم خدمات تنظيف احترافية وتركيب أرضيات ودهانات داخلية في جدة والرياض والمدينة المنورة والقصيم. تواصل معنا للحصول على عرض سعر مخصص.',
  // يُفضّل ضبط NEXT_PUBLIC_SITE_URL على النطاق النهائي المعتمد عند النشر.
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://almrahel.sa',

  // بيانات التواصل. رقم واتساب بالصيغة الدولية بدون + أو مسافات (مثال: 9665XXXXXXXX).
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '966557906206',
  phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER || '966557906206',
  email: process.env.NEXT_PUBLIC_EMAIL || '',

  contactConfigured: true,

  // روابط التواصل الاجتماعي: أضف الرابط الحقيقي فقط. الحقول الفارغة لا تظهر في الموقع.
  socialLinks: {
    twitter: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    snapchat: '',
    tiktok: '',
  },

  // بيانات الشركة الرسمية. أي حقل يُترك فارغاً لا يظهر في الموقع ولا في البيانات المنظمة.
  // املأ الحقول بالبيانات الحقيقية فقط.
  business: {
    streetAddress: '',
    locality: '',
    region: '',
    postalCode: '',
    commercialRegister: '',
    licenseNumber: '',
    foundedYear: '',
    openingHours: '',
  },

  // آخر تاريخ تم فيه تحديث محتوى الموقع الأساسي (يُستخدم في خريطة الموقع). حدّثه عند تعديل المحتوى.
  contentUpdatedAt: '2026-11-05',

  // Google Analytics
  gaId: process.env.NEXT_PUBLIC_GA_ID || 'G-692YS31ML8',
  // توكن التحقق من Google Search Console (اختياري)
  searchConsoleToken: process.env.NEXT_PUBLIC_SEARCH_CONSOLE_TOKEN || '',
};

export type SiteConfig = typeof siteConfig;
