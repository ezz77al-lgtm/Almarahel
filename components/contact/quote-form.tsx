'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { sendGAEvent } from '@next/third-parties/google';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

interface Option {
  id: string;
  name: string;
}

interface QuoteFormProps {
  services: Option[];
  cities: Option[];
  defaultServiceId?: string;
  defaultCityId?: string;
}

const fieldClass =
  'w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40';

export function QuoteForm({
  services,
  cities,
  defaultServiceId = '',
  defaultCityId = '',
}: QuoteFormProps) {
  const [name, setName] = useState('');
  const [serviceId, setServiceId] = useState(defaultServiceId);
  const [cityId, setCityId] = useState(defaultCityId);
  const [details, setDetails] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const service = services.find((s) => s.id === serviceId);
    const city = cities.find((c) => c.id === cityId);

    if (!service || !city) {
      setError('اختر الخدمة والمدينة أولاً.');
      return;
    }

    const lines = [
      'السلام عليكم، أرغب في طلب عرض سعر.',
      name.trim() ? `الاسم: ${name.trim()}` : '',
      `الخدمة: ${service.name}`,
      `المدينة: ${city.name}`,
      details.trim() ? `التفاصيل: ${details.trim()}` : '',
    ].filter(Boolean);

    const url = buildWhatsAppUrl(lines.join('\n'));
    if (!url) {
      setError('خدمة واتساب غير متاحة حالياً. يرجى الاتصال بنا مباشرة.');
      return;
    }

    setError('');
    try {
      sendGAEvent('event', 'quote_form_submit', {
        service_name: service.name,
        city_name: city.name,
      });
    } catch {
      // تجاهل أي خطأ في التتبع حتى لا يمنع إرسال الطلب
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="quote-name" className="mb-1.5 block text-sm font-bold">
          الاسم (اختياري)
        </label>
        <input
          id="quote-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="quote-service" className="mb-1.5 block text-sm font-bold">
          الخدمة المطلوبة
        </label>
        <select
          id="quote-service"
          value={serviceId}
          onChange={(e) => setServiceId(e.target.value)}
          className={fieldClass}
        >
          <option value="">اختر الخدمة</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="quote-city" className="mb-1.5 block text-sm font-bold">
          المدينة
        </label>
        <select
          id="quote-city"
          value={cityId}
          onChange={(e) => setCityId(e.target.value)}
          className={fieldClass}
        >
          <option value="">اختر المدينة</option>
          {cities.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="quote-details" className="mb-1.5 block text-sm font-bold">
          تفاصيل الطلب (اختياري)
        </label>
        <textarea
          id="quote-details"
          rows={3}
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="مثال: المساحة التقريبية، أو عدد الأدوار، أو الموعد المناسب"
          className={fieldClass}
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
      >
        <MessageCircle className="h-5 w-5" />
        إرسال الطلب عبر واتساب
      </button>
    </form>
  );
}
