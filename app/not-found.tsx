import Link from 'next/link';
import { ArrowUpLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-muted/30 pt-20">
      <div className="container-mw container-px text-center">
        <p className="font-display text-8xl font-bold text-accent/20 sm:text-9xl">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl">الصفحة غير موجودة</h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
          عذرًا، الصفحة التي تبحث عنها غير موجودة أو تم نقلها. يمكنك العودة إلى الصفحة الرئيسية.
        </p>
        <Link href="/" className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-base font-bold text-accent-foreground btn-press transition-all hover:brightness-95">
          <Home className="h-5 w-5" />
          العودة للرئيسية
          <ArrowUpLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </section>
  );
}
