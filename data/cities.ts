export type CityId = 'jeddah' | 'riyadh' | 'madinah' | 'qassim';

export interface City {
  id: CityId;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  imageAlt: string;
  region: string;
}

export const cities: City[] = [
  {
    id: 'jeddah',
    name: 'جدة',
    slug: 'jeddah',
    description: 'خدمات تنظيف وتركيب أرضيات ودهانات داخلية في جدة لجميع أنحاء المدينة.',
    longDescription:
      'نقدم خدماتنا الاحترافية في تنظيف الواجهات الزجاجية وواجهات المحلات والمنازل والمباني والمكاتب وتنظيف ما بعد البناء، بالإضافة إلى تركيب السيراميك والبورسلان والرخام وجلي وتلميع الرخام والدهانات الداخلية في جميع أحياء جدة.',
    image: '/cities/jeddah.jpg',
    imageAlt: 'مدينة جدة',
    region: 'منطقة مكة المكرمة',
  },
  {
    id: 'riyadh',
    name: 'الرياض',
    slug: 'riyadh',
    description: 'خدمات تنظيف وتركيب أرضيات ودهانات داخلية في الرياض لجميع أحياء المدينة.',
    longDescription:
      'نقدم خدماتنا الاحترافية في تنظيف الواجهات الزجاجية وواجهات المحلات والمنازل والمباني والمكاتب وتنظيف ما بعد البناء، بالإضافة إلى تركيب السيراميك والبورسلان والرخام وجلي وتلميع الرخام والدهانات الداخلية في جميع أحياء الرياض.',
    image: '/cities/riyad.jpg',
    imageAlt: 'مدينة الرياض',
    region: 'منطقة الرياض',
  },
  {
    id: 'madinah',
    name: 'المدينة المنورة',
    slug: 'madinah',
    description: 'خدمات تنظيف وتركيب أرضيات ودهانات داخلية في المدينة المنورة لجميع أنحاء المدينة.',
    longDescription:
      'نقدم خدماتنا الاحترافية في تنظيف الواجهات الزجاجية وواجهات المحلات والمنازل والمباني والمكاتب وتنظيف ما بعد البناء، بالإضافة إلى تركيب السيراميك والبورسلان والرخام وجلي وتلميع الرخام والدهانات الداخلية في جميع أحياء المدينة المنورة.',
    image: '/cities/madina.jpg',
    imageAlt: 'المدينة المنورة',
    region: 'منطقة المدينة المنورة',
  },
  {
    id: 'qassim',
    name: 'القصيم',
    slug: 'qassim',
    description: 'خدمات تنظيف احترافية في القصيم تشمل الواجهات الزجاجية والمنازل والمباني والمكاتب.',
    longDescription:
      'نقدم خدماتنا الاحترافية في تنظيف الواجهات الزجاجية وواجهات المحلات والمنازل والمباني والمكاتب وتنظيف ما بعد البناء في جميع مدن منطقة القصيم. الخدمات الإنشائية مثل تركيب الأرضيات والدهانات غير متوفرة حالياً في القصيم.',
    image: '/cities/qassim.jpg',
    imageAlt: 'منطقة القصيم',
    region: 'منطقة القصيم',
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getCityById(id: CityId): City | undefined {
  return cities.find((c) => c.id === id);
}
