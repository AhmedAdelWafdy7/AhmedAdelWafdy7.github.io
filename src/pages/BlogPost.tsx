import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Blog post data structure
interface BlogPostData {
  week: number;
  title: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  published: boolean;
}

const BlogPost = () => {
  const { week } = useParams();
  
  // Debug logging
  console.log('BlogPost component rendered, week param:', week);
  console.log('All params:', useParams());
  
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
  console.log('Extracted week number:', weekNumber);
  
  // Blog post data - in a real app this would come from a CMS or API
  const getBlogPost = (weekNumber: string): BlogPostData => {
    const blogPosts: Record<string, BlogPostData> = {
      '1': {
        week: 1,
        title: 'Project Blueprint & Designing the AGL App Store Experience',
        content: `
          <h2>Introduction and Purpose</h2>
          <p>Week 1 marks the exciting beginning of my Google Summer of Code journey with the Automotive Grade Linux (AGL) project! This initial period built upon the foundation laid during Week 0, where I successfully cloned all AGL repositories, AppStream parser, and Flatpak repository components. The focus has now shifted from preparation to active design and architectural planning for what will become a revolutionary app store experience for In-Vehicle Infotainment systems.</p>

          <p>The Application Store API serves multiple critical purposes that drive our architectural decisions:</p>
          
          <ul>
            <li><strong>Enable an end user application store for a curated list of applications:</strong> Our UI architecture includes a comprehensive <code>CatalogScreen</code> for browsing curated apps and an <code>AppDetailsScreen</code> for detailed application views. The <code>FlatpakService</code> and <code>RepositoryClient</code> components handle querying and selecting applications from our cloud-based repository infrastructure.</li>
            <li><strong>Provide a user experience matching or exceeding mobile app store standards:</strong> Built with Flutter, our UI layer ensures a smooth, responsive interface that adapts to various automotive display configurations. Advanced features like the <code>RatingsWidget</code> for user reviews and <code>PermissionManagementWidget</code> for granular app permissions enhance the overall usability.</li>
            <li><strong>Establish and maintain required API patterns for root of trust:</strong> Security is paramount, enforced through our <code>TlsService</code> for secure connections, <code>SecretService</code> for secure credential storage, and <code>UpdateService</code> for cryptographic key revocation and mandatory security updates.</li>
            <li><strong>Directly support embedded Linux use cases:</strong> The architecture leverages Flatpak for application sandboxing and crosvm for virtualization, specifically tailored for embedded Linux automotive systems.</li>
          </ul>

          <h2>Scope and Architectural Objectives</h2>
          <p>Our comprehensive architectural design aligns with the clearly defined scope and objectives:</p>

          <ul>
            <li><strong>API to enable querying and selecting applications from cloud service:</strong> The <code>RepositoryClient</code> and <code>FlatpakService</code> provide robust APIs to fetch, filter, and select applications from cloud repositories with real-time synchronization capabilities.</li>
            <li><strong>API to enable viewing and publishing end user reviews:</strong> The <code>RatingService</code> and <code>RatingsBloc</code> manage comprehensive review retrieval, submission, and moderation workflows.</li>
            <li><strong>Cloud-side parameters control end user context:</strong> The <code>RepositoryClient</code> supports dynamic cloud-driven configurations including app availability, feature enablement, and content filtering based on device context such as SKU, serial number, and geographical location.</li>
            <li><strong>API agnostic configuration management:</strong> The abstraction layer in <code>RepositoryClient</code> ensures maximum flexibility, making our API completely independent of specific cloud provider configurations.</li>
          </ul>

          <h2>System Architecture Deep Dive</h2>
          <p>The system architecture provides a robust, scalable framework designed for automotive-grade reliability:</p>

          <h3>Component Overview and Interactions</h3>
          <p>Our architecture consists of three primary layers with clear separation of concerns:</p>

          <ul>
            <li><strong>UI Layer (Flutter-based):</strong>
              <ul>
                <li><code>CatalogScreen</code> - Main application browsing interface with grid and list views</li>
                <li><code>AppDetailsScreen</code> - Comprehensive application information display</li>
                <li><code>RatingsWidget</code> - Interactive rating and review system</li>
                <li><code>PermissionManagementWidget</code> - Granular permission control interface</li>
                <li><code>SplashScreen</code> - AGL-branded loading screen with data caching indicators</li>
              </ul>
            </li>
            <li><strong>Business Logic Layer (BLoC Pattern):</strong>
              <ul>
                <li><code>RepositoryBloc</code> - Application catalog state management</li>
                <li><code>InstallationBloc</code> - Application installation workflow coordination</li>
                <li><code>RatingsBloc</code> - User review and rating management</li>
                <li><code>UpdateBloc</code> - Application update lifecycle management</li>
              </ul>
            </li>
            <li><strong>Service Layer:</strong>
              <ul>
                <li><code>FlatpakService</code> - Complete Flatpak operation management</li>
                <li><code>RepositoryClient</code> - Cloud repository communication</li>
                <li><code>TlsService</code> - Secure connection management</li>
                <li><code>SecretService</code> - Encrypted credential storage</li>
                <li><code>UpdateService</code> - Security update and key management</li>
              </ul>
            </li>
          </ul>

          <h2>From Blueprint to Pixels: Comprehensive UI/UX Design</h2>
          <p>This week's primary focus was translating our architectural vision into a tangible, automotive-optimized user interface. The design process began with understanding the unique constraints and opportunities of automotive displays, ranging from compact 7-inch infotainment screens to large 17-inch dashboard displays.</p>

          <h3>Design Philosophy and Visual Language</h3>
          <p>The visual design features a clean, modern aesthetic with carefully chosen elements that ensure excellent readability across varying automotive lighting conditions. The interface welcomes users with a clear "Discover, Install, and Enjoy Apps on AGL Store" heading, immediately communicating the platform's purpose and value proposition.</p>

          <p>Our comprehensive design system, organized in <a href="https://www.figma.com/design/yFvzFAN6MGC6S1RXWFTVtW/App-Store?node-id=118-2&t=ExaSgEfAmIdIrPVs-1" target="_blank">Figma</a>, includes:</p>

          <h3>Key Design Elements and Components</h3>
          <ul>
            <li><strong>Application Cards:</strong> Prominent cards with 12px rounded corners that showcase applications with high-quality imagery, essential metadata, and clear action buttons. Each card includes app icon (96x96pt), name, developer, rating stars, and installation status.</li>
            <li><strong>Vibrant Green Accent (#33D17A):</strong> Strategic use of Flathub's signature green for primary actions like 'Install' and 'Explore Apps' buttons, creating intuitive calls to action that guide users through their application discovery journey.</li>
            <li><strong>AGL Branding Integration:</strong> Thoughtful integration of the AGL logo in our splash screen implementation, which appears during system initialization while fetching and caching repository data from servers.</li>
            <li><strong>Responsive Grid System:</strong> Adaptive layout that seamlessly transitions from 2-column mobile views to 6-column desktop displays, ensuring optimal content density across all screen sizes.</li>
          </ul>

          <h3>Advanced UI Components and Data Integration</h3>
          <p>The application details screen represents the pinnacle of our design work, featuring comprehensive information architecture parsed from AppStream XML data:</p>

          <h4>Available Data Structure Integration</h4>
          <p>Our UI leverages rich metadata from AppStream components including:</p>
          <ul>
            <li><strong>Basic Information:</strong> App ID, display name, summary, detailed HTML-formatted descriptions, and licensing information</li>
            <li><strong>Visual Assets:</strong> Multi-resolution icon support (cached, remote, local, stock) with automatic fallbacks and progressive loading</li>
            <li><strong>Developer Information:</strong> Developer profiles with contact links, organization details, and portfolio connections</li>
            <li><strong>Technical Metadata:</strong> Bundle types, architecture support, content ratings, categories, and keyword tags</li>
            <li><strong>Release Management:</strong> Complete version history with release notes, urgency indicators, and known issue tracking</li>
          </ul>

          <h4>Detailed Screen Specifications</h4>
          <p>The App Details page features comprehensive information architecture with intuitive navigation:</p>

          <ul>
            <li><strong>Navigation Tabs:</strong> "Overview," "Details," "Reviews," "Updates," and "Related" sections with smooth transitions and state persistence</li>
            <li><strong>Screenshot Carousel:</strong> Interactive media gallery with 800x450px primary display, thumbnail navigation strip, and zoom functionality</li>
            <li><strong>Release Timeline:</strong> Chronological version history with expandable release notes, security indicators, and update preferences</li>
            <li><strong>Interactive Elements:</strong> Rating system, review submission, developer contact, and social sharing capabilities</li>
          </ul>

          <h3>Technical Implementation Highlights</h3>
          <p>Our responsive design system ensures consistent experience across diverse automotive hardware:</p>

          <ul>
            <li><strong>Color Palette:</strong> Carefully selected colors ensuring excellent contrast ratios and readability in various lighting conditions (daylight, night mode, tunnel transitions)</li>
            <li><strong>Typography System:</strong> Montserrat for headers, Inter for body text, and Fira Code for technical details, all optimized for automotive display characteristics</li>
            <li><strong>Accessibility Features:</strong> High contrast mode support, keyboard navigation, screen reader compatibility, and clear focus indicators</li>
            <li><strong>Performance Optimization:</strong> Lazy loading for images, skeleton screens for content loading, and smooth state transitions</li>
          </ul>

          <h2>Community Integration and Development Process</h2>
          <p>Following the successful Week 0 preparation period, where I cloned all necessary AGL repositories and established the development environment, this week focused on community integration and design validation.</p>

          <p>As communicated to the AGL developer community mailing list, our approach emphasizes:</p>
          <ul>
            <li><strong>Comprehensive Repository Setup:</strong> Successfully integrated AGL repositories, AppStream parser, and Flatpak repository components</li>
            <li><strong>UI/UX Architecture Validation:</strong> Developed and documented UI architecture that fulfills core Application Store purposes</li>
            <li><strong>Responsive Design Implementation:</strong> Ensured UI adaptability across all automotive display aspect ratios and configurations</li>
            <li><strong>Structured Design Documentation:</strong> Organized all design work in Figma with clear component libraries and design systems</li>
          </ul>

          <h2>This Week's Achievements and Next Steps</h2>
          <p>Week 1 accomplishments include:</p>
          <ul>
            <li><strong>Complete Architectural Planning:</strong> Finalized system architecture with clear component separation and interaction patterns</li>
            <li><strong>Comprehensive UI/UX Design:</strong> Created detailed Figma designs with complete component library and responsive specifications</li>
            <li><strong>Design System Establishment:</strong> Developed visual design language, typography system, and accessibility guidelines</li>
            <li><strong>Technical Specification Documentation:</strong> Prepared detailed implementation specifications for development phase</li>
            <li><strong>Community Engagement Strategy:</strong> Established communication channels with AGL developer community</li>
          </ul>

          <p>Moving into Week 2, the critical next steps include:</p>
          <ul>
            <li><strong>Community Design Review:</strong> Present minimal viable UI version to the AGL developer community during the next AGL dev call</li>
            <li><strong>Architecture Validation:</strong> Gather feedback on our architectural decisions and ensure alignment with broader AGL ecosystem goals</li>
            <li><strong>Technical Feasibility Assessment:</strong> Validate design concepts against automotive hardware constraints and performance requirements</li>
            <li><strong>Development Environment Setup:</strong> Prepare Flutter development environment with AGL-specific configurations and dependencies</li>
          </ul>
          <p>Thank you for following along on this exciting journey! I look forward to sharing more updates as we progress through the GSoC 2025 program.</p>
          <p><em>View the complete design system and interactive prototypes in our <a href="https://www.figma.com/design/yFvzFAN6MGC6S1RXWFTVtW/App-Store?node-id=118-2&t=ExaSgEfAmIdIrPVs-1" target="_blank">Figma workspace</a>.</em></p>
        `,
        date: 'June 2025',
        readTime: '12 min read',
        author: 'Ahmed Adel Wafdy',
        tags: ['GSoC 2025', 'AGL', 'UI/UX Design', 'Flutter', 'Architecture', 'AppStream', 'Flatpak'],
        published: true
      },
      '2': {
        week: 2,
        title: 'Community Feedback & MVP Development',
        content: `<p>This post for Week 2 is coming soon! Stay tuned for updates on community feedback and MVP development.</p>`,
        date: 'June 2025',
        readTime: '6 min read',
        author: 'Ahmed Adel Wafdy',
        tags: ['GSoC 2025', 'AGL', 'MVP', 'Community'],
        published: false
      },
      '3': {
        week: 3,
        title: 'Flutter Implementation Begins',
        content: `<p>This post for Week 3 is coming soon! Stay tuned for updates on Flutter implementation.</p>`,
        date: 'June 2025',
        readTime: '7 min read',
        author: 'Ahmed Adel Wafdy',
        tags: ['GSoC 2025', 'AGL', 'Flutter', 'Implementation'],
        published: false
      }
    };

    return blogPosts[weekNumber] || {
      week: parseInt(weekNumber || '1'),
      title: `Week ${weekNumber} Development Update`,
      content: `<p>This post for Week ${weekNumber} is coming soon! Stay tuned for updates on my Google Summer of Code journey with the Automotive Grade Linux project.</p>`,
      date: 'Coming Soon',
      readTime: '5 min read',
      author: 'Ahmed Adel Wafdy',
      tags: ['GSoC 2025', 'AGL', 'Development'],
      published: false
    };
  };

  const getAllPosts = (): BlogPostData[] => {
    const posts: BlogPostData[] = [];
    for (let i = 1; i <= 22; i++) {
      posts.push(getBlogPost(i.toString()));
    }
    return posts;
  };

  const post = getBlogPost(weekNumber);
  const allPosts = getAllPosts();

  // Find previous and next published posts
  const currentWeek = post.week;
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
                Week {post.week}
              </Badge>
              <Badge variant="outline" className="border-primary/30 text-primary">
                GSoC 2025
              </Badge>
              {!post.published && (
                <Badge variant="outline" className="border-yellow-500/30 text-yellow-500">
                  Coming Soon
                </Badge>
              )}
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors duration-300">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          {/* Post Content */}
          <article className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }}
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
                postItem.week === post.week
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
