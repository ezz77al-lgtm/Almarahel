import Link from 'next/link';
import { ArrowUpLeft, MapPin } from 'lucide-react';

const cities = [
  {
    slug: 'jeddah',
    name: 'جدة',
    description:
      'خدمات تنظيف وتركيب ودهانات احترافية للمحلات والمعارض والمطاعم والمباني والمنشآت التجارية في جدة.',
  },
  {
    slug: 'madinah',
    name: 'المدينة المنورة',
    description:
      'خدمات تنظيف وتركيب ودهانات احترافية للمحلات والمعارض والمطاعم والمباني والمنشآت التجارية في المدينة المنورة.',
  },
];

export default function LocationsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary-dark/95 to-primary-dark" />

        <div className="container-mw container-px relative z-10 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
              <MapPin className="h-4 w-4" />
              المدن التي نخدمها
            </span>

            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              خدماتنا في المدن
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              نقدم خدمات التنظيف والتركيب والدهانات للمنشآت والمحلات والمباني
              في جدة والمدينة المنورة.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-mw container-px">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-2">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locations/${city.slug}`}
                  className="group rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-accent/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <MapPin className="h-6 w-6" />
                  </div>

                  <h2 className="mt-6 text-2xl font-bold">
                    خدماتنا في {city.name}
                  </h2>

                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {city.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 font-semibold text-accent">
                    استكشف خدمات {city.name}
                    <ArrowUpLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}