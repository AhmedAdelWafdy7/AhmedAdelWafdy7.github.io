import { cn } from '@/lib/utils';

interface JourneySection {
  id: string;
  title: string;
  weeks: string;
}

interface JourneyNavProps {
  sections: JourneySection[];
  activeSection?: string;
  onSectionClick?: (id: string) => void;
}

export default function JourneyNav({ sections, activeSection, onSectionClick }: JourneyNavProps) {
  return (
    <nav className="space-y-1" data-testid="nav-journey">
      <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 px-4">
        Journey Map
      </div>
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onSectionClick?.(section.id)}
          className={cn(
            "w-full text-left px-4 py-3 rounded-md transition-colors hover-elevate",
            activeSection === section.id
              ? "bg-primary/10 border-l-4 border-primary font-semibold text-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-accent"
          )}
          data-testid={`nav-section-${section.id}`}
        >
          <div className="text-sm font-medium">{section.title}</div>
          <div className="text-xs text-muted-foreground mt-1">{section.weeks}</div>
        </button>
      ))}
    </nav>
  );
}