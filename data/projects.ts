export interface Project {
  id: string;
  slug: string;
  title: string;
  serviceId: string;
  cityName: string;
  cityId: 'jeddah' | 'riyadh' | 'madinah' | 'qassim';
  description: string;
  fullDescription: string;
  scope: string[];
  image: string;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    id: 'p1',
    slug: 'glass-facade-cleaning-commercial-building-jeddah',
    title: 'تنظيف واجهات زجاجية للمباني التجارية في جدة',
    serviceId: 'glass-facade-cleaning',
    cityName: 'جدة',
    cityId: 'jeddah',
    description: 'خدمة تنظيف الواجهات الزجاجية للمباني التجارية في جدة، مع الاهتمام بالزجاج الداخلي والخارجي والإطارات بحسب طبيعة الواجهة.',
    fullDescription:
      'تساعد خدمة تنظيف الواجهات الزجاجية في جدة على تحسين مظهر واجهات المباني التجارية والعناية بالزجاج من آثار الأتربة والرطوبة والبقع. ويمكن أن يشمل نطاق الخدمة الزجاج الداخلي والخارجي والإطارات المعدنية، مع تحديد طريقة التنفيذ والجدول المناسب وفق ارتفاع المبنى وطبيعة الموقع.',
    scope: [
      'تنظيف الزجاج الخارجي للواجهة',
      'تنظيف الزجاج الداخلي للواجهة',
      'تنظيف وتلميع الإطارات المعدنية',
      'إزالة البقع وبقايا المواد اللاصقة',
    ],
    image: '/projects/glass-commercial-building-qassim.webp',
    imageAlt: 'تنظيف واجهات زجاجية للمباني التجارية في جدة',
  },
  {
    id: 'p2',
    slug: 'marble-polishing-villa-riyadh',
    title: 'جلي وتلميع الرخام في الرياض',
    serviceId: 'marble-polishing',
    cityName: 'الرياض',
    cityId: 'riyadh',
    description: 'خدمة جلي وتلميع الرخام في الرياض للعقارات السكنية والتجارية، وفق نوع الرخام وحالة الأرضية.',
    fullDescription:
      'تُحدد طريقة جلي وتلميع الرخام في الرياض بحسب نوع الحجر وحالة السطح ودرجة الخدوش أو البهتان. وقد تشمل الخدمة معالجة سطحية مناسبة، وتلميعًا تدريجيًا، وتنظيف الفواصل، بعد تقييم حالة الأرضية وتحديد الإجراء الملائم.',
    scope: [
      'جلي سطح الرخام',
      'تلميع تدريجي بدرجات مختلفة',
      'تنظيف الفواصل',
      'تلميع نهائي للحماية',
    ],
    image: '/projects/marble-lobby-polishing-riyadh.webp',
    imageAlt: 'جلي وتلميع الرخام في الرياض',
  },
  {
    id: 'p3',
    slug: 'post-construction-cleaning-apartment-madinah',
    title: 'تنظيف ما بعد البناء في المدينة المنورة',
    serviceId: 'post-construction-cleaning',
    cityName: 'المدينة المنورة',
    cityId: 'madinah',
    description: 'خدمة تنظيف ما بعد البناء والتشطيب في المدينة المنورة للشقق والوحدات السكنية، وفق حالة الموقع ونطاق التنظيف المطلوب.',
    fullDescription:
      'تساعد خدمة تنظيف ما بعد البناء في المدينة المنورة على تجهيز العقار بعد انتهاء أعمال الإنشاء أو التشطيب. ويُحدد نطاق العمل بحسب حالة الموقع، وقد يشمل إزالة الغبار وبقايا مواد التشطيب وتنظيف الأرضيات والنوافذ والأبواب والمطابخ والحمامات.',
    scope: [
      'إزالة بقايا مواد البناء',
      'تنظيف الأرضيات والبلاط',
      'تنظيف الجدران والأسقف',
      'تنظيف النوافذ والأبواب',
      'تنظيف الحمامات والمطابخ',
    ],
    image: '/projects/post-construction-apartments-madinah.webp',
    imageAlt: 'تنظيف ما بعد البناء في المدينة المنورة',
  },
  {
    id: 'p4',
    slug: 'storefront-cleaning-mall-jeddah',
    title: 'تنظيف واجهات المحلات التجارية في جدة',
    serviceId: 'storefront-cleaning',
    cityName: 'جدة',
    cityId: 'jeddah',
    description: 'خدمة تنظيف واجهات المحلات التجارية في جدة، بما يشمل الزجاج والمداخل والإطارات بحسب احتياجات الموقع.',
    fullDescription:
      'يساعد تنظيف واجهات المحلات في جدة على إبقاء الزجاج والمداخل والإطارات بمظهر مرتب. ويمكن تنظيم موعد الخدمة بما يتناسب مع ساعات تشغيل المحل وحركة الزوار، وفق الاتفاق مع العميل.',
    scope: [
      'تنظيف زجاج الواجهات',
      'تنظيف المداخل والأبواب',
      'تنظيف الإطارات',
      'إزالة البقع والآثار',
    ],
    image: '/projects/storefront-glass-riyadh.webp',
    imageAlt: 'تنظيف واجهات المحلات التجارية في جدة',
  },
  {
    id: 'p5',
    slug: 'porcelain-installation-office-riyadh',
    title: 'تركيب البورسلان في الرياض',
    serviceId: 'porcelain-installation',
    cityName: 'الرياض',
    cityId: 'riyadh',
    description: 'خدمة تركيب البورسلان في الرياض للمساحات الإدارية وغيرها، مع مراعاة تجهيز السطح واستواء البلاط وتناسق الفواصل.',
    fullDescription:
      'تختلف متطلبات تركيب البورسلان في الرياض بحسب نوع البلاط ومساحة المكان وحالة السطح. وتشمل اعتبارات التنفيذ تجهيز القاعدة وضبط الاستواء وتوزيع البلاط وتنسيق الفواصل بما يناسب الاستخدام.',
    scope: [
      'تجهيز السطح',
      'تركيب بورسلان الأرضيات',
      'ضبط المستوى',
      'تعبئة الفواصل',
    ],
    image: '/projects/porcelain-living-hall-jeddah.webp',
    imageAlt: 'تركيب البورسلان في الرياض',
  },
  {
    id: 'p6',
    slug: 'interior-painting-villa-jeddah',
    title: 'الدهانات الداخلية في جدة',
    serviceId: 'interior-painting',
    cityName: 'جدة',
    cityId: 'jeddah',
    description: 'خدمات الدهانات الداخلية في جدة للمنازل والفلل والمساحات المختلفة، وفق حالة الأسطح واختيار الدهان.',
    fullDescription:
      'تبدأ أعمال الدهانات الداخلية في جدة بتقييم حالة الجدران والأسقف، ثم تحديد احتياجات تجهيز السطح ومعالجة العيوب واختيار الدهان المناسب. ويتحدد نطاق العمل والألوان والمواد بعد الاتفاق على متطلبات المكان.',
    scope: [
      'تجهيز الجدران والأسقف',
      'معالجة الشقوق',
      'دهان أساس',
      'دهان نهائي',
    ],
    image: '/projects/interior-painting-apartment-madinah.webp',
    imageAlt: 'الدهانات الداخلية في جدة',
  },
  {
    id: 'p7',
    slug: 'office-cleaning-company-riyadh',
    title: 'تنظيف دوري لمكاتب شركة في الرياض',
    serviceId: 'office-cleaning',
    cityName: 'الرياض',
    cityId: 'riyadh',
    description: 'خدمة تنظيف المكاتب في الرياض بجدول دوري أو حسب الطلب، وفق مساحة الموقع وساعات العمل ونطاق الخدمة.',
    fullDescription:
      'يمكن ترتيب تنظيف المكاتب في الرياض وفق جدول يناسب طبيعة النشاط، مع تحديد المناطق المطلوبة مثل أسطح المكاتب وقاعات الاجتماعات والأرضيات والمرافق المشتركة. ويُحدد توقيت الزيارة ونطاقها بالتنسيق مع العميل.',
    scope: [
      'تنظيف المكاتب والأسطح',
      'تنظيف قاعات الاجتماعات',
      'تنظيف الحمامات والمطابخ',
      'تنظيف الأرضيات',
    ],
    image: '/projects/glass-office-building-jeddah.webp',
    imageAlt: 'تنظيف المكاتب في الرياض',
  },
  {
    id: 'p8',
    slug: 'ceramic-installation-kitchen-madinah',
    title: 'تركيب سيراميك لمطبخ في المدينة المنورة',
    serviceId: 'ceramic-installation',
    cityName: 'المدينة المنورة',
    cityId: 'madinah',
    description: 'خدمة تركيب السيراميك في المدينة المنورة للأرضيات والجدران، وفق نوع البلاط ومساحة المكان وتجهيز السطح.',
    fullDescription:
      'تتطلب أعمال تركيب سيراميك المطابخ في المدينة المنورة مراعاة نوع البلاط وطبيعة السطح ومناطق التعرض للرطوبة. ويشمل التخطيط للعمل ضبط الاستواء وتوزيع البلاط وتناسق الفواصل وفق متطلبات الموقع.',
    scope: [
      'تركيب سيراميك الأرضيات',
      'تركيب سيراميك الجدران',
      'ضبط المستوى',
      'تعبئة الفواصل',
    ],
    image: '/projects/ceramic-kitchen-bathroom-jeddah.webp',
    imageAlt: 'تركيب السيراميك في المدينة المنورة',
  },
  {
    id: 'p9',
    slug: 'glass-facade-cleaning-qassim',
    title: 'تنظيف الواجهات الزجاجية في القصيم',
    serviceId: 'glass-facade-cleaning',
    cityName: 'القصيم',
    cityId: 'qassim',
    description: 'خدمة تنظيف الواجهات الزجاجية في القصيم للمحلات والمنشآت، مع تحديد نطاق التنظيف وفق نوع الواجهة وحالتها.',
    fullDescription:
      'تستهدف خدمة تنظيف الواجهات الزجاجية في القصيم إزالة الأتربة والبقع الظاهرة والعناية بالزجاج والإطارات. ويُحدد نطاق الخدمة وفق نوع الواجهة وارتفاعها وحالة الموقع. تُتاح خدمات التنظيف في القصيم، أما خدمات التركيب والإنشاء فيجب التحقق من نطاق تغطيتها قبل الإعلان عنها.',
    scope: [
      'تنظيف الزجاج الخارجي',
      'تنظيف الزجاج الداخلي',
      'تنظيف الإطارات',
      'إزالة البقع',
    ],
    image: '/projects/glass-facade-cleaning.webp',
    imageAlt: 'تنظيف الواجهات الزجاجية في القصيم',
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByService(serviceId: string): Project[] {
  return projects.filter((p) => p.serviceId === serviceId);
}

export function getProjectsByCity(cityId: string): Project[] {
  return projects.filter((p) => p.cityId === cityId);
}
