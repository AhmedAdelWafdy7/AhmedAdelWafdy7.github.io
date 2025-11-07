import { Mail, ExternalLink } from 'lucide-react';

interface TimelineEntry {
  title: string;
  date: string;
  url: string;
}

interface CommunityTimelineProps {
  entries: TimelineEntry[];
}

export default function CommunityTimeline({ entries }: CommunityTimelineProps) {
  return (
    <div className="space-y-6" data-testid="community-timeline">
      {entries.map((entry, idx) => (
        <div key={idx} className="relative pl-8 pb-6 border-l-2 border-border last:border-transparent last:pb-0">
          <div className="absolute left-0 top-0 -translate-x-1/2 bg-primary rounded-full p-2">
            <Mail className="h-3 w-3 text-primary-foreground" />
          </div>
          
          <a
            href={entry.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
            data-testid={`timeline-entry-${idx}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {entry.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{entry.date}</p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}