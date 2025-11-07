import { ExternalLink, GitPullRequest, GitMerge, AlertCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ContributionCardProps {
  type: 'pr' | 'issue';
  number: number;
  title: string;
  repo: string;
  status: 'merged' | 'open' | 'closed';
  date?: string;
  url: string;
  description?: string;
}

export default function ContributionCard({ 
  type, 
  number, 
  title, 
  repo, 
  status, 
  date,
  url, 
  description 
}: ContributionCardProps) {
  const statusColors = {
    merged: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20',
    open: 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20',
    closed: 'bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20'
  };

  const StatusIcon = status === 'merged' ? GitMerge : type === 'pr' ? GitPullRequest : AlertCircle;

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block"
      data-testid={`contribution-card-${number}`}
    >
      <Card className="hover-elevate active-elevate-2 transition-shadow h-full">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <StatusIcon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <CardTitle className="text-sm font-mono text-muted-foreground truncate">
                {repo}#{number}
              </CardTitle>
            </div>
            <ExternalLink className="h-3 w-3 text-muted-foreground flex-shrink-0" />
          </div>
          <CardDescription className="text-base font-semibold text-foreground line-clamp-2">
            {title}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {description && (
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {description}
            </p>
          )}
          <div className="flex items-center gap-2">
            <Badge variant="outline" className={statusColors[status]}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
            {date && (
              <span className="text-xs text-muted-foreground">{date}</span>
            )}
          </div>
        </CardContent>
      </Card>
    </a>
  );
}