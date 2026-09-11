import Link from 'next/link';
import { ChevronLeft, Home } from 'lucide-react';
import { breadcrumbSchema } from '@/lib/seo';
import { siteConfig } from '@/data/site';

interface BreadcrumbItem {
  name: string;
  path: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems: BreadcrumbItem[] = [{ name: 'الرئيسية', path: '/' }, ...items];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema(
              allItems.map((item) => ({
                name: item.name,
                path: item.path,
              }))
            )
          ),
        }}
      />
      <nav aria-label="مسار التنقل" className="container-mw container-px pt-28">
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {index === 0 ? (
                  <Home className="h-4 w-4 text-muted-foreground" />
                ) : null}
                {isLast ? (
                  <span className="font-semibold text-primary">{item.name}</span>
                ) : (
                  <Link
                    href={item.path}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                )}
                {!isLast && (
                  <ChevronLeft className="h-4 w-4 text-muted-foreground/50" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
