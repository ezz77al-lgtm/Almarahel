import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { City } from '@/data/cities';
import { getServicesByCity } from '@/data/services';

export function CityCard({ city }: { city: City }) {
  const serviceCount = getServicesByCity(city.id).length;

  return (
    <Link
      href={`/cities/${city.slug}`}
      className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 block"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={city.image}
          alt={city.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 navy-gradient-strong" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <h3 className="font-bold text-xl mb-1">{city.name}</h3>
        <p className="text-sm text-white/80 line-clamp-2 mb-3">
          {city.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs bg-white/15 backdrop-blur px-3 py-1 rounded-full">
            {serviceCount} خدمة متوفرة
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
            استعرض خدمات المدينة
            <ArrowLeft className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
