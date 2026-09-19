'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { services } from '@/data/services';
import { cn } from '@/lib/utils';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
    preferredContact: 'phone',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-success/10 text-success">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="font-display text-xl font-bold">تم إرسال طلبك بنجاح</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          شكرًا لتواصلك معنا. سيتواصل معك فريقنا في أقرب وقت ممكن للرد على استفسارك.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: '', phone: '', service: '', message: '', preferredContact: 'phone' });
          }}
          className="mt-6 rounded-xl border border-border px-6 py-2.5 text-sm font-bold transition-colors hover:bg-muted"
        >
          إرسال طلب آخر
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold">
            الاسم الكامل
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
            placeholder="أدخل اسمك"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold">
            رقم الهاتف
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 font-mono text-base outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
            placeholder="05xxxxxxxx"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-semibold">
          الخدمة المطلوبة
        </label>
        <select
          id="service"
          required
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
        >
          <option value="">اختر الخدمة</option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.name}
            </option>
          ))}
          <option value="other">أخرى</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold">
          تفاصيل المشروع
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
          placeholder="اكتب تفاصيل مشروعك أو استفسارك..."
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold">طريقة التواصل المفضلة</label>
        <div className="flex gap-3">
          {[
            { value: 'phone', label: 'اتصال هاتفي' },
            { value: 'whatsapp', label: 'واتساب' },
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setForm({ ...form, preferredContact: option.value })}
              className={cn(
                'flex-1 rounded-xl border px-4 py-3 text-sm font-semibold transition-colors btn-press',
                form.preferredContact === option.value
                  ? 'border-accent bg-accent/15 text-accent-foreground'
                  : 'border-border text-muted-foreground hover:bg-muted'
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-7 py-4 text-base font-bold text-accent-foreground btn-press transition-all hover:brightness-95"
      >
        إرسال الطلب
        <Send className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
      </button>
    </form>
  );
}

export function ContactInfo() {
  const contactItems = [
    { icon: Phone, label: 'الهاتف', value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phone}` },
    { icon: MessageCircle, label: 'واتساب', value: 'تواصل عبر واتساب', href: `https://wa.me/${siteConfig.whatsapp}` },
    { icon: Mail, label: 'البريد الإلكتروني', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: MapPin, label: 'العنوان', value: siteConfig.address },
    { icon: Clock, label: 'ساعات العمل', value: siteConfig.workingHours },
  ];

  return (
    <div className="space-y-4">
      {contactItems.map((item, i) => {
        const content = (
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-card">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <item.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-muted-foreground">{item.label}</p>
              <p className="mt-1 font-mono text-base font-bold">{item.value}</p>
            </div>
          </div>
        );
        return item.href ? (
          <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="block">
            {content}
          </a>
        ) : (
          <div key={i}>{content}</div>
        );
      })}
    </div>
  );
}
