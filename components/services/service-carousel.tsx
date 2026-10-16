'use client';

import { useRef, useCallback, useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import type { Service } from '@/data/services';
import { ServiceCard } from './service-card';
import { cn } from '@/lib/utils';

interface ServiceCarouselProps {
  services: Service[];
  groupName: string;
}

export function ServiceCarousel({ services, groupName }: ServiceCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    // In RTL, scrollLeft works differently across browsers
    const maxScroll = el.scrollWidth - el.clientWidth;
    const currentScroll = Math.abs(el.scrollLeft);
    setCanScrollLeft(currentScroll < maxScroll - 10);
    setCanScrollRight(currentScroll > 10);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollState);
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('[data-card]')?.getBoundingClientRect().width || 320;
    const scrollAmount = cardWidth + 16;
    // In RTL, scrolling right means positive direction visually
    if (direction === 'right') {
      el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
        dir="rtl"
      >
        {services.map((service) => (
          <div
            key={service.id}
            data-card
            className="snap-start shrink-0 w-[280px] sm:w-[320px] lg:w-[340px]"
          >
            <ServiceCard service={service} className="h-full" />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-4">
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollLeft}
          aria-label="السابق"
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all',
            canScrollLeft
              ? 'border-primary text-primary hover:bg-primary hover:text-white'
              : 'border-muted text-muted-foreground cursor-not-allowed'
          )}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollRight}
          aria-label="التالي"
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all',
            canScrollRight
              ? 'border-primary text-primary hover:bg-primary hover:text-white'
              : 'border-muted text-muted-foreground cursor-not-allowed'
          )}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
