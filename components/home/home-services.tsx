import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import { ServiceCarousel } from '@/components/services/service-carousel';
import { serviceGroups, getServicesByGroup } from '@/data/services';

export function HomeServices() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          title="خدماتنا"
          description="نقدم مجموعة متكاملة من خدمات التنظيف وتركيب الأرضيات والدهانات الداخلية بأعلى معايير الجودة والاحترافية."
          align="center"
        />

        {serviceGroups.map((group) => {
          const groupServices = getServicesByGroup(group.id);
          if (groupServices.length === 0) return null;

          return (
            <div key={group.id} className="mb-12 last:mb-0">
              <div className="flex items-end justify-between mb-6">
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                    {group.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
                    {group.description}
                  </p>
                </div>
              </div>

              <ServiceCarousel
                services={groupServices}
                groupName={group.name}
              />
            </div>
          );
        })}

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-primary-dark transition-all hover:scale-105"
          >
            عرض جميع الخدمات
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
