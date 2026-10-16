import { SectionHeader } from '@/components/section-header';
import { Sparkles, Eye, MousePointerClick, MessagesSquare, MapPinned } from 'lucide-react';

const benefits = [
  {
    icon: Sparkles,
    title: 'تنوع الخدمات',
    description: 'نقدم مجموعة متنوعة من خدمات التنظيف وتركيب الأرضيات والدهانات الداخلية لتلبية احتياجاتك.',
  },
  {
    icon: Eye,
    title: 'الاهتمام بالتفاصيل',
    description: 'نهتم بأدق التفاصيل في كل خدمة نقدمها لضمان رضا العملاء وجودة النتائج.',
  },
  {
    icon: MousePointerClick,
    title: 'سهولة طلب الخدمة',
    description: 'يمكنك طلب الخدمة بسهولة عبر واتساب أو الهاتف، وستحصل على رد سريع وعرض سعر مخصص.',
  },
  {
    icon: MessagesSquare,
    title: 'وضوح التواصل',
    description: 'نحرص على تواصل واضح وشفاف مع عملائنا في جميع مراحل الخدمة.',
  },
  {
    icon: MapPinned,
    title: 'تنظيم الخدمات حسب المدينة',
    description: 'نظم خدماتنا حسب المدن لتسهيل الوصول إلى الخدمات المتوفرة في منطقتك.',
  },
];

export function HomeWhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          title="لماذا تختارنا؟"
          description="نحرص على تقديم خدمات احترافية تركز على الجودة والوضوح وسهولة الوصول."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col items-start p-6 rounded-xl bg-card shadow-md hover:shadow-lg transition-shadow border border-border/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-base mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
