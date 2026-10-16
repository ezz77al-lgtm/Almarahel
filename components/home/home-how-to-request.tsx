import { SectionHeader } from '@/components/section-header';
import { ClipboardList, MessagesSquare, FileText } from 'lucide-react';
import { WhatsAppCTA } from '@/components/layout/cta-buttons';

const steps = [
  {
    icon: ClipboardList,
    title: 'اختر الخدمة والمدينة',
    description: 'حدد نوع الخدمة التي تحتاجها والمدينة التي تتواجد فيها من قائمة خدماتنا.',
  },
  {
    icon: MessagesSquare,
    title: 'تواصل معنا عبر واتساب أو الهاتف',
    description: 'تواصل معنا مباشرة عبر واتساب أو الهاتف لمناقشة تفاصيل الخدمة.',
  },
  {
    icon: FileText,
    title: 'نسّق تفاصيل الخدمة واطلب عرض السعر',
    description: 'نساعدك على تنسيق التفاصيل ونزودك بعرض سعر مخصص بناءً على احتياجاتك.',
  },
];

export function HomeHowToRequest() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          title="كيف تطلب الخدمة؟"
          description="ثلاث خطوات بسيطة لطلب الخدمة التي تحتاجها."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative flex flex-col items-center text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white mb-4 relative">
                <step.icon className="h-7 w-7" />
                <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-bold">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-bold text-base mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <WhatsAppCTA
            serviceName="الخدمات"
            variant="primary"
            label="ابدأ طلب الخدمة"
          />
        </div>
      </div>
    </section>
  );
}
