'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpLeft, Phone, MessageCircle, MapPin, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/data/site';

const features = [
  'تركيب السيراميك والبورسلان',
  'تركيب الرخام والموزايكو',
  'دهانات وديكورات احترافية',
  'تنظيف الواجهات الزجاجية',
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary-dark pt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src='/hero/hero1.webp'
          alt="مبانٍ حديثة في جدة"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 via-primary-dark/65 to-primary-dark/92" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent" />
      </div>

      <div className="container-mw container-px relative z-10 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90"
          >
            <MapPin className="h-4 w-4 text-accent" />
            {siteConfig.city}، {siteConfig.country}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-6xl text-balance"
          >
            مقاولات وتشطيبات وديكورات
            <span className="mt-2 block text-accent">
              احترافية في جدة
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl text-pretty"
          >
            شركة المراحل السريعة — متخصصون في تركيب السيراميك والبورسلان والرخام، أعمال الدهانات والديكورات، التشطيبات الداخلية والخارجية، وتنظيف الواجهات الزجاجية في جدة. جودة عالية والتزام بالمواعيد.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-base font-bold text-accent-foreground btn-press transition-all hover:brightness-95"
            >
              اطلب الخدمة الآن
              <ArrowUpLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-8 py-4 text-base font-bold text-accent transition-colors hover:bg-accent/20"
            >
              <MessageCircle className="h-5 w-5" />
              تواصل عبر واتساب
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-5 w-5" />
              اتصل الآن
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-medium text-white/60">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                {feature}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-white/50"
          />
        </div>
      </motion.div>
    </section>
  );
}
