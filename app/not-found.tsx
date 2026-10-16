import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 pt-20">
      <div className="text-center px-4">
        <h1 className="text-6xl lg:text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-xl lg:text-2xl font-bold mb-3">الصفحة غير موجودة</h2>
        <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
          عذراً، الصفحة التي تبحث عنها غير موجودة. قد تكون قد انتقلت أو لم تكن متوفرة أصلاً.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-primary-dark transition-all"
        >
          <Home className="h-4 w-4" />
          العودة إلى الرئيسية
        </Link>
      </div>
    </div>
  );
}
