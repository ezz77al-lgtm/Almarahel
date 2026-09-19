import { Breadcrumbs } from '@/components/sections/breadcrumbs';
import { SectionHeading } from '@/components/sections/section-heading';
import { ContactForm, ContactInfo } from '@/components/sections/contact-form';
import { Reveal } from '@/components/sections/reveal';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'اتصل بنا | شركة المراحل السريعة في جدة والمدينة المنورة',
  description:
    'تواصل مع شركة المراحل السريعة في جدة والمدينة المنورة. اطلب خدمة تنظيف الزجاج والواجهات، تركيب السيراميك والبورسلان والرخام والموزايكو، أو الدهانات الداخلية، واحصل على استشارة مجانية عبر الهاتف أو واتساب.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'اتصل بنا', path: '/contact' }]} />

      <section className="section-pad">
        <div className="container-mw container-px">
          <SectionHeading
            eyebrow="تواصل معنا"
            title="نحن هنا لمساعدتك"
            description="تواصل معنا اليوم لطلب خدمة أو الحصول على استشارة مجانية لمشروعك في جدة أو المدينة المنورة. فريقنا جاهز للرد على استفساراتك ومساعدتك في اختيار الخدمة المناسبة."
          />

          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <Reveal>
              <div>
                <h2 className="mb-6 font-display text-2xl font-bold">
                  معلومات التواصل
                </h2>

                <ContactInfo />

                <div className="mt-8 rounded-2xl border border-accent/20 bg-primary p-6 text-primary-foreground">
                  <h3 className="font-display text-lg font-bold">
                    منطقة الخدمة
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                    نقدم خدماتنا في جدة والمدينة المنورة، المملكة العربية
                    السعودية، ونصل إلى مختلف الأحياء والمناطق حسب نطاق الخدمة.
                    تواصل معنا للتأكد من تغطية منطقتك.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Contact Form */}
            <Reveal delay={0.15}>
              <div>
                <h2 className="mb-6 font-display text-2xl font-bold">
                  أرسل طلبك
                </h2>

                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}