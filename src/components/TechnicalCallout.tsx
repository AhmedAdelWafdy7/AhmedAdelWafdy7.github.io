import { ReactNode } from 'react';
import { Bug, Wrench, Layers, Zap } from 'lucide-react';

interface TechnicalCalloutProps {
  type: 'bug' | 'feature' | 'architecture' | 'insight';
  title: string;
  children: ReactNode;
}

export default function TechnicalCallout({ type, title, children }: TechnicalCalloutProps) {
  const icons = {
    bug: Bug,
    feature: Zap,
    architecture: Layers,
    insight: Wrench
  };

  const colors = {
    bug: 'border-l-destructive bg-destructive/5',
    feature: 'border-l-chart-2 bg-chart-2/5',
    architecture: 'border-l-chart-3 bg-chart-3/5',
    insight: 'border-l-chart-4 bg-chart-4/5'
  };

  const Icon = icons[type];

  return (
    <div 
      className={`border-l-4 ${colors[type]} rounded-md p-6 my-8`}
      data-testid={`callout-${type}`}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-foreground mb-2">{title}</h4>
          <div className="text-sm text-foreground/80 space-y-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}