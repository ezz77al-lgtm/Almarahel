import { SectionHeader } from '@/components/section-header';
import { WhatsAppCTA } from '@/components/layout/cta-buttons';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import {
  services,
  Service,
} from '@/data/services';
import { cities } from '@/data/cities';
import { cn } from '@/lib/utils';

const flooringServices = services.filter(
  (s) =>
    s.groupId === 'flooring' || s.groupId === 'finishing'
);

export function HomeFlooring() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          title="تركيب الأرضيات وجلي الرخام والدهانات الداخلية"
          description="خدمات تركيب السيراميك والبورسلان والرخام، جلي وتلميع الرخام، والدهانات الداخلية. متوفرة في جدة والرياض والمدينة المنورة."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {flooringServices.map((service: Service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 block"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 navy-gradient" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <h3 className="font-bold text-base mb-1">{service.shortName}</h3>
                <p className="text-xs text-white/80 line-clamp-2 mb-2">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] bg-white/15 backdrop-blur px-2 py-0.5 rounded-full">
                    جدة • الرياض • المدينة
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-accent">
                    التفاصيل
                    <ArrowLeft className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <WhatsAppCTA
            serviceName="تركيب الأرضيات والدهانات"
            variant="primary"
            label="اطلب الخدمة"
          />
        </div>
      </div>
    </section>
  );
}
