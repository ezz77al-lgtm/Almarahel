import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: 'right' | 'center';
  className?: string;
}

export function SectionHeader({
  title,
  description,
  align = 'right',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-8',
        align === 'center' ? 'text-center' : 'text-right',
        className
      )}
    >
      <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-sm lg:text-base text-muted-foreground leading-relaxed',
            align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-3xl'
          )}
        >
          {description}
        </p>
      )}
      <div
        className={cn(
          'h-1 w-20 bg-accent rounded-full mt-4',
          align === 'center' ? 'mx-auto' : ''
        )}
      />
    </div>
  );
}
