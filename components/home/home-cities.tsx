import { SectionHeader } from '@/components/section-header';
import { CityCard } from '@/components/cities/city-card';
import { cities } from '@/data/cities';

export function HomeCities() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          title="المدن التي نخدمها"
          description="نقدم خدماتنا في أربع مدن رئيسية في المملكة العربية السعودية. اختر مدينتك لاستعراض الخدمات المتوفرة فيها."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>
      </div>
    </section>
  );
}
