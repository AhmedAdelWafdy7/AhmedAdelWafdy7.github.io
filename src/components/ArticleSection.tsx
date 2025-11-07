import { ReactNode } from 'react';

interface ArticleSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function ArticleSection({ id, title, subtitle, children, className = '' }: ArticleSectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 ${className}`} data-testid={`section-${id}`}>
      <div className="mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2" data-testid={`section-title-${id}`}>
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-muted-foreground" data-testid={`section-subtitle-${id}`}>
            {subtitle}
          </p>
        )}
      </div>
      <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed space-y-6">
        {children}
      </div>
    </section>
  );
}