import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getBlogPostByWeek, getAllBlogPostsWithPlaceholders, BlogPostData } from '@/lib/blogData';

const BlogPost = () => {
  const { week } = useParams();
  
  // Extract week number from parameter (handle both "week-1" and "1" formats)
  const getWeekNumber = (weekParam: string | undefined): string => {
    if (!weekParam) return '1';
    
    // If it starts with "week-", extract the number
    if (weekParam.startsWith('week-')) {
      return weekParam.replace('week-', '');
    }
    
    // Otherwise, use as is
    return weekParam;
  };
  
  const weekNumber = getWeekNumber(week);
  
  // Get blog post from static data
  const post = getBlogPostByWeek(parseInt(weekNumber));
  const allPosts = getAllBlogPostsWithPlaceholders();

  // If no post found, create a default one
  const currentPost = post || {
    week: parseInt(weekNumber),
    title: `Week ${weekNumber} Development Update`,
    content: `<p>This post for Week ${weekNumber} is coming soon! Stay tuned for updates on my Google Summer of Code journey with the Automotive Grade Linux project.</p>`,
    date: 'Coming Soon',
    readTime: '5 min read',
    author: 'Ahmed Adel Wafdy',
    tags: ['GSoC 2025', 'AGL', 'Development'],
    published: false,
    excerpt: `Week ${weekNumber} development updates coming soon.`,
    slug: `week-${weekNumber}`
  };

  // Find previous and next published posts
  const currentWeek = currentPost.week;
  const previousPost = allPosts.find(p => p.week < currentWeek && p.published);
  const nextPost = allPosts.find(p => p.week > currentWeek && p.published);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-20 lg:pt-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
          {/* Back to Blog */}
          <Link 
            to="/#blog" 
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Blog
          </Link>

          {/* Post Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                Week {currentPost.week}
              </Badge>
              <Badge variant="outline" className="border-primary/30 text-primary">
                GSoC 2025
              </Badge>
              {!currentPost.published && (
                <Badge variant="outline" className="border-yellow-500/30 text-yellow-500">
                  Coming Soon
                </Badge>
              )}
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text leading-tight">
              {currentPost.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{currentPost.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{currentPost.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{currentPost.readTime}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {currentPost.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors duration-300">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          {/* Post Content */}
          <article className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: currentPost.content }}
              className="blog-content [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4 [&>h2]:text-foreground [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3 [&>h3]:text-foreground [&>p]:mb-4 [&>p]:leading-relaxed [&>ul]:mb-4 [&>li]:mb-2 [&>li]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-foreground [&_em]:italic [&_em]:text-primary"
            />
          </article>

          {/* Navigation */}
          <nav className="mt-16 pt-8 border-t border-border">
            <div className="flex justify-between items-center">
              {previousPost ? (
                <Link 
                  to={`/blog/week-${previousPost.week}`}
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 group"
                >
                  <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                  <div className="text-left">
                    <div className="text-xs uppercase tracking-wide">Previous</div>
                    <div className="font-medium">Week {previousPost.week}</div>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              
              {nextPost ? (
                <Link 
                  to={`/blog/week-${nextPost.week}`}
                  className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 ml-auto group"
                >
                  <div className="text-right">
                    <div className="text-xs uppercase tracking-wide">Next</div>
                    <div className="font-medium">Week {nextPost.week}</div>
                  </div>
                  <ArrowLeft size={20} className="ml-2 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </nav>

          {/* Series Navigation */}
          <div className="mt-12 p-6 bg-muted/30 rounded-lg border border-border/50">
            <h3 className="text-lg font-semibold mb-4 text-foreground">GSoC 2025 Blog Series</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {allPosts.slice(0, 22).map((postItem) => (
                <Link
                  key={postItem.week}
                  to={`/blog/week-${postItem.week}`}
                  className={`px-3 py-2 text-sm rounded border transition-colors duration-300 text-center ${
                    postItem.week === currentPost.week
                      ? 'bg-primary text-primary-foreground border-primary'
                      : postItem.published
                      ? 'border-border hover:border-primary hover:text-primary'
                      : 'border-border/30 text-muted-foreground cursor-not-allowed'
                  }`}
                >
                  Week {postItem.week}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
