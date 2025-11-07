import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const heroImage = '/media/Mountain_summit_hero_image.png';

interface BlogHeroProps {
  title: string;
  subtitle: string;
  date: string;
  author: string;
  metrics: { label: string; value: string }[];
  onScrollToContent?: () => void;
}

export default function BlogHero({ 
  title, 
  subtitle, 
  date, 
  author, 
  metrics,
  onScrollToContent 
}: BlogHeroProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6">
          <div className="text-sm font-medium uppercase tracking-wider text-white/80" data-testid="text-date">
            {date}
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight" data-testid="text-title">
            {title}
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed" data-testid="text-subtitle">
            {subtitle}
          </p>
          
          <div className="text-base text-white/70 font-medium" data-testid="text-author">
            {author}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
            {metrics.map((metric, idx) => (
              <div 
                key={idx} 
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-md p-6"
                data-testid={`metric-${idx}`}
              >
                <div className="text-3xl font-bold text-white" data-testid={`metric-value-${idx}`}>
                  {metric.value}
                </div>
                <div className="text-sm uppercase tracking-wide text-white/70 mt-1" data-testid={`metric-label-${idx}`}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
          
          {onScrollToContent && (
            <div className="mt-16">
              <Button
                variant="outline"
                size="lg"
                onClick={onScrollToContent}
                className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
                data-testid="button-scroll-content"
              >
                <span>Begin the Journey</span>
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}