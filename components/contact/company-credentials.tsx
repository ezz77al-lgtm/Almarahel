import { BadgeCheck, Clock, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';

/**
 * يعرض بيانات الشركة الرسمية (سجل تجاري، ترخيص، عنوان...) إن كانت مضبوطة في config/site.ts.
 * إذا كانت كل الحقول فارغة لا يعرض شيئاً.
 */
export function CompanyCredentials() {
  const b = siteConfig.business;
  const address = [b.streetAddress, b.locality, b.region].filter(Boolean).join('، ');

  const items: { icon: typeof BadgeCheck; label: string; value: string }[] = [];
  if (b.commercialRegister) {
    items.push({ icon: BadgeCheck, label: 'السجل التجاري', value: b.commercialRegister });
  }
  if (b.licenseNumber) {
    items.push({ icon: BadgeCheck, label: 'رقم الترخيص', value: b.licenseNumber });
  }
  if (b.foundedYear) {
    items.push({ icon: BadgeCheck, label: 'سنة التأسيس', value: b.foundedYear });
  }
  if (address) {
    items.push({ icon: MapPin, label: 'العنوان', value: address });
  }
  if (b.openingHours) {
    items.push({ icon: Clock, label: 'ساعات العمل', value: b.openingHours });
  }

  if (items.length === 0) return null;

  return (
    <div className="rounded-xl border border-border/50 bg-card p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-bold">بيانات الشركة</h2>
      <ul className="space-y-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.label} className="flex items-start gap-3 text-sm">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>
                <span className="font-bold">{item.label}: </span>
                <span className="text-muted-foreground">{item.value}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
