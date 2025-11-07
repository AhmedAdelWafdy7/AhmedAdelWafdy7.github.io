import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogHero from '@/components/BlogHero';
import JourneyNav from '@/components/JourneyNav';
import ArticleSection from '@/components/ArticleSection';
import ContributionCard from '@/components/ContributionCard';
import CommunityTimeline from '@/components/CommunityTimeline';
import TechnicalCallout from '@/components/TechnicalCallout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUp, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAllBlogPostsWithPlaceholders, BlogPostData } from '@/lib/blogData';

export default function BlogSummary() {
  const [activeSection, setActiveSection] = useState('blueprint');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Get blog posts data
  const posts: BlogPostData[] = getAllBlogPostsWithPlaceholders();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 1000);
      
      const sections = ['blueprint', 'bricks', 'steam', 'battles'];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContent = () => {
    const contentElement = document.getElementById('content-start');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const journeySections = [
    { id: 'blueprint', title: 'The Blueprint', weeks: 'Weeks 1-3' },
    { id: 'bricks', title: 'First Bricks & Quicksand', weeks: 'Weeks 4-15' },
    { id: 'steam', title: 'The Great Steam Saga', weeks: 'Weeks 16-20' },
    { id: 'battles', title: 'The Final Battles', weeks: 'Weeks 21-22' }
  ];

  const contributions = [
    {
      type: 'issue' as const,
      number: 123,
      title: '[Feature] Add Flatpak remote management and installation support',
      repo: 'ivi-homescreen-plugins',
      status: 'open' as const,
      date: 'Jul 7, 2025',
      url: 'https://github.com/toyota-connected/ivi-homescreen-plugins/issues/123',
      description: 'Proposal to add support for browsing, adding, removing, and installing applications from remote Flatpak repositories'
    },
    {
      type: 'pr' as const,
      number: 124,
      title: 'feat(common): Enhance CurlClient for generic HTTP requests',
      repo: 'ivi-homescreen-plugins',
      status: 'merged' as const,
      date: 'Jul 11, 2025',
      url: 'https://github.com/toyota-connected/ivi-homescreen-plugins/pull/124',
      description: 'Added Get/Post methods, Bearer auth, memory leak fixes, and proper URL encoding'
    },
    {
      type: 'pr' as const,
      number: 131,
      title: 'Add Curl Client Tests (Part of Feature #123)',
      repo: 'ivi-homescreen-plugins',
      status: 'merged' as const,
      date: 'Jul 25, 2025',
      url: 'https://github.com/toyota-connected/ivi-homescreen-plugins/pull/131',
      description: 'Comprehensive test suite for CurlClient functionality'
    },
    {
      type: 'pr' as const,
      number: 141,
      title: 'feat(flatpak): Add Application Installation/Uninstallation & Remote management',
      repo: 'ivi-homescreen-plugins',
      status: 'merged' as const,
      date: 'Aug 13, 2025',
      url: 'https://github.com/toyota-connected/ivi-homescreen-plugins/pull/141',
      description: 'Improved caching infrastructure with SQLite, priority-based remote search, and batch processing'
    },
    {
      type: 'pr' as const,
      number: 4,
      title: 'Add flatpak flutter tests',
      repo: 'flatpak_flutter',
      status: 'merged' as const,
      date: 'Aug 7, 2025',
      url: 'https://github.com/meta-flutter/flatpak_flutter/pull/4',
      description: 'Comprehensive Dart test suite for Flutter plugin'
    },
    {
      type: 'pr' as const,
      number: 5,
      title: 'Add Example Flutter App for Flatpak Plugin',
      repo: 'flatpak_flutter',
      status: 'merged' as const,
      date: 'Aug 17, 2025',
      url: 'https://github.com/meta-flutter/flatpak_flutter/pull/5',
      description: 'Reference implementation demonstrating plugin usage'
    },
    {
      type: 'pr' as const,
      number: 159,
      title: 'feat(Flatpak): Extract rich metadata/appdata to serialize to UI',
      repo: 'ivi-homescreen-plugins',
      status: 'merged' as const,
      date: 'Aug 27, 2025',
      url: 'https://github.com/toyota-connected/ivi-homescreen-plugins/pull/159',
      description: 'Implemented AppStream metadata extraction for Flutter UI'
    },
    {
      type: 'pr' as const,
      number: 6,
      title: 'feat(example): Add UI with full metadata',
      repo: 'flatpak_flutter',
      status: 'merged' as const,
      date: 'Aug 27, 2025',
      url: 'https://github.com/meta-flutter/flatpak_flutter/pull/6',
      description: 'Enhanced example app with complete metadata display'
    },
    {
      type: 'pr' as const,
      number: 7,
      title: 'Add Provider State Management and Integrate native cache',
      repo: 'flatpak_flutter',
      status: 'merged' as const,
      date: 'Sep 14, 2025',
      url: 'https://github.com/meta-flutter/flatpak_flutter/pull/7',
      description: 'Implemented BLoC pattern for state management'
    },
    {
      type: 'pr' as const,
      number: 165,
      title: 'Integrate Cache to flutter',
      repo: 'ivi-homescreen-plugins',
      status: 'merged' as const,
      date: 'Sep 14, 2025',
      url: 'https://github.com/meta-flutter/flatpak_flutter/pull/165',
      description: 'Connected native cache to Flutter UI'
    },
    {
      type: 'pr' as const,
      number: 8,
      title: 'feat: Starting Applications',
      repo: 'flatpak_flutter',
      status: 'merged' as const,
      date: 'Oct 1, 2025',
      url: 'https://github.com/meta-flutter/flatpak_flutter/pull/8',
      description: 'Application lifecycle management implementation'
    },
    {
      type: 'pr' as const,
      number: 173,
      title: 'feat(flatpak): Start and Stop Flatpak applications',
      repo: 'ivi-homescreen-plugins',
      status: 'merged' as const,
      date: 'Oct 24, 2025',
      url: 'https://github.com/toyota-connected/ivi-homescreen-plugins/pull/173',
      description: 'D-Bus communication with xdg-desktop-portal, permission dialogs, and sdbus-cpp integration'
    },
    {
      type: 'pr' as const,
      number: 58,
      title: 'TCNA Packages Contribution',
      repo: 'tcna-packages',
      status: 'merged' as const,
      url: 'https://github.com/toyota-connected/tcna-packages/pull/58',
      description: 'Package management contributions'
    },
    {
      type: 'pr' as const,
      number: 61,
      title: 'TCNA Packages Update',
      repo: 'tcna-packages',
      status: 'merged' as const,
      url: 'https://github.com/toyota-connected/tcna-packages/pull/61',
      description: 'Additional package updates and fixes'
    },
    {
      type: 'pr' as const,
      number: 189,
      title: 'Final AGL App Store Plugin Updates',
      repo: 'ivi-homescreen-plugins',
      status: 'merged' as const,
      url: 'https://github.com/toyota-connected/ivi-homescreen-plugins/pull/189',
      description: 'Final refinements and production readiness'
    }
  ];

  const communityUpdates = [
    { title: "GSoC Week 1: Project Kickoff and Initial Design", date: "Week 1", url: "https://lists.automotivelinux.org/g/agl-dev-community/message/11534" },
    { title: "GSoC Week 2: Backend Architecture Planning", date: "Week 2", url: "https://lists.automotivelinux.org/g/agl-dev-community/message/11547" },
    { title: "GSoC Week 3: Major Pivot to flat-manager", date: "Week 3", url: "https://lists.automotivelinux.org/g/agl-dev-community/message/11559" },
    { title: "GSoC Week 4: Building Foundation Components", date: "Week 4", url: "https://lists.automotivelinux.org/g/agl-dev-community/message/11563" },
    { title: "GSoC Week 5: Deep Dive into libflatpak API", date: "Week 5", url: "https://lists.automotivelinux.org/g/agl-dev-community/message/11572" },
    { title: "GSoC Week 6-7: CurlClient Implementation", date: "Week 6-7", url: "https://lists.automotivelinux.org/g/agl-dev-community/message/11579" },
    { title: "GSoC Week 8-9: CacheManager Development", date: "Week 8-9", url: "https://lists.automotivelinux.org/g/agl-dev-community/message/11586" },
    { title: "GSoC Week 10: First Integration Tests", date: "Week 10", url: "https://lists.automotivelinux.org/g/agl-dev-community/message/11599" },
    { title: "GSoC Week 11-12: Remote Management APIs", date: "Week 11-12", url: "https://lists.automotivelinux.org/g/agl-dev-community/message/11606" },
    { title: "GSoC Week 13-14: Metadata Extraction", date: "Week 13-14", url: "https://lists.automotivelinux.org/g/agl-dev-community/message/11611" },
    { title: "GSoC Week 15: Testing Simple Apps", date: "Week 15", url: "https://lists.automotivelinux.org/g/agl-dev-community/message/11614" },
    { title: "GSoC Week 16: Steam Installation Attempt", date: "Week 16", url: "https://lists.automotivelinux.org/g/agl-dev-community/message/11618" },
    { title: "GSoC Week 17: Security Model Deep Dive", date: "Week 17", url: "https://lists.automotivelinux.org/g/agl-dev-community/message/11625" },
    { title: "GSoC Week 18: XDG Portals Implementation", date: "Week 18", url: "https://lists.automotivelinux.org/g/agl-dev-community/message/11629" },
    { title: "GSoC Week 19: Conditional Extensions Discovery", date: "Week 19", url: "https://lists.automotivelinux.org/g/agl-dev-community/message/11636" },
    { title: "GSoC Week 20: Steam Success!", date: "Week 20", url: "https://lists.automotivelinux.org/g/agl-dev-community/message/11645" },
    { title: "GSoC Week 21: Yocto/AGL Image Building", date: "Week 21", url: "https://lists.automotivelinux.org/g/agl-dev-community/message/11655" },
    { title: "GSoC Week 22: Threading Deadlock Debugging", date: "Week 22", url: "https://lists.automotivelinux.org/g/agl-dev-community/message/11659" },
    { title: "GSoC Final: Four Critical Bugs Fixed", date: "Final Week", url: "https://lists.automotivelinux.org/g/agl-dev-community/message/11665" },
    { title: "GSoC Completion: Async Architecture Rewrite", date: "Completion", url: "https://lists.automotivelinux.org/g/agl-dev-community/message/11668" },
    { title: "Post-GSoC: BLoC Integration", date: "Post-GSoC", url: "https://lists.automotivelinux.org/g/agl-dev-community/message/11678" },
    { title: "Final Status: Production Ready", date: "Final", url: "https://lists.automotivelinux.org/g/agl-dev-community/message/11683" },
    { title: "Project Reflection and Lessons Learned", date: "Retrospective", url: "https://lists.automotivelinux.org/g/agl-dev-community/message/11704" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <BlogHero
        title="From Blueprint to Bulletproof"
        subtitle="Looking back, it's amazing to see how far this project has come. What began as a set of blueprints and a vision for an in-car app store has evolved into a bulletproof, complex, and fully functional system. This is the story of how we built the AGL App Store."
        date="Google Summer of Code 2025"
        author="The Linux Foundation • Automotive Grade Linux"
        metrics={[
          { label: "Duration", value: "22 Weeks" },
          { label: "Pull Requests", value: "16 PRs" },
          { label: "Status Updates", value: "23 Posts" }
        ]}
        onScrollToContent={scrollToContent}
      />

      <div id="content-start" className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12">
          <aside className="hidden lg:block sticky top-20 self-start">
            <JourneyNav
              sections={journeySections}
              activeSection={activeSection}
              onSectionClick={scrollToSection}
            />
          </aside>

          <main className="max-w-4xl">
            <ArticleSection id="blueprint" title="Part 1: The Blueprint" subtitle="Weeks 1-3">
              <p>
                The project kicked off with a clear vision: a mobile-grade app store experience for Automotive Grade Linux. Week 1 was all about design. I lived in Figma, translating that vision into a tangible UI/UX. We established the dark theme, the AGL branding, and the responsive layouts—all backed by a clean Flutter BLoC architecture.
              </p>
              <p>
                Week 2 took me to the backend. The core problem was: how do we get app metadata? I started by building a high-performance C++ parser for AppStream files, focusing on zero-copy operations for the embedded world. I explored a custom userver backend, thinking we'd have to build everything from scratch.
              </p>
              <TechnicalCallout type="architecture" title="Major Pivot Decision">
                <p>
                  By Week 3, the true path became clear. The flat-manager (a Rust-based server) was already a solid, production-grade tool. The real challenge wasn't to replace it, but to build a C++ plugin for our Flutter homescreen that could talk to it.
                </p>
                <p>
                  I scrapped the custom server idea and began designing the C++ HttpClient and a SQLite-based CacheManager that would live inside our plugin. The mission was set: bridge the gap between our Flutter UI and the flat-manager backend.
                </p>
              </TechnicalCallout>
            </ArticleSection>

            <ArticleSection id="bricks" title="Part 2: The First Bricks and a Hidden Quicksand" subtitle="Weeks 4-15" className="mt-20">
              <p>
                With a plan in place, it was time to build. This long "heads-down" period was all about laying the foundation.
              </p>
              <p>
                In Week 5, I dived into the libflatpak API, designing the new components for our plugin: the http_client, cache_manager, and auth_manager. This was also my first look into the real complexity of Flatpak: the security model. I started researching BubbleWrap (the sandbox) and XDG Portals (the secure "gatekeeper" for permissions). This week also threw me my first major blocker: appstream-compose was broken in the build environment, and I had to manually upgrade flatpak-builder just to move forward.
              </p>
              <p>
                Weeks 6-10 were a development montage. The main PR was opened, and I built the first version of the CurlClient and CacheManager. I implemented the first pass at Install, Uninstall, and Remote management, and successfully extracted all AppStream metadata for the Flutter UI. It felt like we were 90% of the way there. (Oh, how wrong I was.)
              </p>
              <p>
                The next several weeks were a blur of testing and integration, where a terrifying new reality began to surface.
              </p>
            </ArticleSection>

            <ArticleSection id="steam" title="Part 3: The Great Steam Saga" subtitle="Weeks 16-20" className="mt-20">
              <p>
                The simple apps worked. But when I tried to install something complex, like Steam, the entire system fell apart. This kicked off a five-week deep-dive that would redefine the entire project.
              </p>
              <p>
                <strong>Week 16:</strong> I went back to the research from Week 5. I had to truly understand the security model. I learned to see BubbleWrap as the "fortress" and XDG Portals as the "secure gatekeepers."
              </p>
              <p>
                <strong>Week 17:</strong> I hit the permissions problem. My initial idea for dialogs was Zenity, but I realized it was a massive security hole that bypassed the sandbox. It became clear: XDG Portals weren't just an option; they were the only correct way.
              </p>
              <p>
                <strong>Week 18:</strong> Based on this, I started a major refactor. I planned to replace the old D-Bus library with sdbus-cpp and, crucially, architect a flow where the C++ backend could ask Flutter to show a permission dialog via an EventChannel, completely removing any GTK dependency.
              </p>
              <TechnicalCallout type="bug" title="Week 19: The Final Boss">
                <p>
                  This was the climax. I installed Steam. The logs said "success." The app "launched." But it was silently broken, complaining about missing 32-bit components. This was the "final boss": Conditional Extensions.
                </p>
                <p>
                  Our logic was only installing the base runtime, not the .i386 compatibility layers or the .GL32 graphics drivers.
                </p>
              </TechnicalCallout>
              <TechnicalCallout type="insight" title="Week 20: The Resolution">
                <p>
                  I decoded Flatpak's "brain," learning why extensions are conditional. It checks your hardware (active-gl-driver, have-intel-gpu) before downloading anything.
                </p>
                <p>
                  I rewrote our entire installation logic using the libflatpak C++ API. The new flow lets libflatpak's "brain" evaluate the system and then adds all required extensions to a single, atomic transaction.
                </p>
                <p>
                  The reward? A demo video of Steam launching perfectly.
                </p>
              </TechnicalCallout>
            </ArticleSection>

            <ArticleSection id="battles" title="Part 4: The Final Battles" subtitle="Weeks 21-22" className="mt-20">
              <p>
                Week 21 was a victory lap. The "Great Steam Saga" PR was merged. All tests passed. The core functionality was, at long last, done. I immediately shifted focus to the next mountain: building the Yocto/AGL image and writing the recipes to get our plugin into the final OS build.
              </p>
              <p>
                But one final boss remained.
              </p>
              <p>
                Week 22 was a "developer's tale" I'll never forget. The plugin was still buggy and unreliable. The EventChannel was silent. This kicked off one of the deepest debugging sessions of my life, where I untangled a web of threading deadlocks. I found and fixed four separate, insidious bugs:
              </p>

              <div className="space-y-4 my-8">
                <TechnicalCallout type="bug" title="The Missing Power Socket">
                  <p>The GLib main loop was never initialized, so libflatpak's async callbacks were never processed.</p>
                </TechnicalCallout>

                <TechnicalCallout type="bug" title="The Closed Post Office">
                  <p>The EventChannel was created before Flutter was ready to receive it, so our event "sink" was null.</p>
                </TechnicalCallout>

                <TechnicalCallout type="bug" title="The Strand Deadlock">
                  <p>I was using asio::post when I should have used asio::dispatch, causing the thread to wait for a task that was already in its own queue.</p>
                </TechnicalCallout>

                <TechnicalCallout type="bug" title="The Asynchronous Deadlock">
                  <p>I was using a synchronous std::promise on an async thread, blocking the very thread that was supposed to fulfill the promise.</p>
                </TechnicalCallout>
              </div>

              <p>
                I rewrote the entire flow to be 100% asynchronous, using callback chains. I also rewrote the Flutter UI with BLoC to properly manage the new, event-driven state.
              </p>
              <p className="text-lg font-semibold mt-8">
                The 22-week journey was a transformation. It started as a UI/UX project and became a deep-dive into system architecture, security models, and the treacherous world of multi-threaded programming. The plugin that emerged wasn't just the simple one I designed in Week 3; it was a battle-hardened, thread-safe, and truly bulletproof system ready for production.
              </p>
            </ArticleSection>

            <section className="mt-24">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">Code Contributions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contributions.map((contrib, idx) => (
                  <ContributionCard key={idx} {...contrib} />
                ))}
              </div>
            </section>

            <section className="mt-24">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">Community Engagement</h2>
              <p className="text-muted-foreground mb-8">
                Throughout the 22-week journey, I maintained active communication with the AGL community through weekly status updates on the mailing list.
              </p>
              <CommunityTimeline entries={communityUpdates} />
            </section>

            <section className="mt-24 pt-12 border-t">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Thank You</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Special thanks to The Linux Foundation, the Automotive Grade Linux community, my mentors, and everyone who supported this journey. What started as blueprints became a production-ready system through collaboration, perseverance, and countless hours of debugging.
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Weekly Blog Posts Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text">
              Dive Into the Details
            </h2>
            <h3 className="text-2xl lg:text-3xl font-serif font-semibold mb-6 text-foreground">
              22 Weeks of Discovery, Challenges, and Breakthroughs
            </h3>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Explore the week-by-week journey through detailed blog posts covering technical implementations, debugging sessions, architectural decisions, and lessons learned.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link 
                key={post.week}
                to={`/blog/${post.slug}`}
                className={`block ${!post.published ? 'pointer-events-none' : ''}`}
              >
                <Card 
                  className={`group cursor-pointer hover-lift overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 ${
                    !post.published ? 'opacity-70' : ''
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge 
                        variant="secondary" 
                        className="bg-primary/20 text-primary border-primary/30"
                      >
                        Week {post.week}
                      </Badge>
                      <Badge 
                        variant={post.published ? 'default' : 'outline'}
                        className={post.published ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'border-muted-foreground/30 text-muted-foreground'}
                      >
                        {post.published ? 'Published' : 'Coming Soon'}
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-serif font-semibold mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-xs text-muted-foreground mb-4 space-x-4">
                      <div className="flex items-center">
                        <Calendar size={12} className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={12} className="mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-primary">
                      <span className={`${post.published ? 'group-hover:underline' : 'text-muted-foreground'}`}>
                        {post.published ? 'Read More' : 'Stay Tuned'}
                      </span>
                      {post.published && (
                        <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-6 max-w-2xl mx-auto">
              <h4 className="text-lg font-serif font-semibold mb-3 gradient-text">
                Follow My GSoC Journey
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Each post dives deep into the technical challenges, solutions, and insights gained while building this innovative app store for automotive systems.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="border-primary/30 text-primary">AGL Project</Badge>
                <Badge variant="outline" className="border-primary/30 text-primary">Flatpak</Badge>
                <Badge variant="outline" className="border-primary/30 text-primary">Embedded Linux</Badge>
                <Badge variant="outline" className="border-primary/30 text-primary">IVI Systems</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 rounded-full shadow-lg"
          data-testid="button-scroll-top"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}

      <Footer />
    </div>
  );
}
