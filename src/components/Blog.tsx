import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  // Generate 22 weeks of blog posts for GSoC
  const generateWeeklyPosts = () => {
    const posts = [];
    const weeklyTopics = [
      'Project Introduction & Community Bonding',
      'Understanding AGL Architecture',
      'Flatpak Technology Deep Dive',
      'Security Framework Design',
      'Development Environment Setup',
      'Core App Store Backend Development',
      'User Interface Design & Prototyping',
      'Authentication & Authorization System',
      'Package Management Implementation',
      'Testing Framework & CI/CD Pipeline',
      'Integration with AGL Platform',
      'Security Hardening & Sandboxing',
      'Performance Optimization',
      'User Experience Testing',
      'Documentation & API Design',
      'Community Feedback Integration',
      'Advanced Features Implementation',
      'Cross-platform Compatibility',
      'Final Testing & Bug Fixes',
      'Project Documentation',
      'Presentation Preparation',
      'Project Completion & Reflection'
    ];

    for (let i = 1; i <= 22; i++) {
      posts.push({
        id: i,
        week: i,
        title: weeklyTopics[i - 1] || `Development Milestone ${i}`,
        excerpt: `Week ${i} of my GSoC journey developing a Flatpak App Store for Automotive Grade Linux. This week focuses on ${weeklyTopics[i - 1]?.toLowerCase() || 'key development milestones'}.`,
        date: `Week ${i} - Coming Soon`,
        readTime: '8 min read',
        category: 'GSoC 2025',
        status: i <= 3 ? 'published' : 'upcoming'
      });
    }
    return posts;
  };

  const posts = generateWeeklyPosts();

  return (
    <section id="blog" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text">
            Google Summer of Code 2025 Journey
          </h2>
          <h3 className="text-2xl lg:text-3xl font-serif font-semibold mb-6 text-foreground">
            Building an App Store for Automotive Grade Linux
          </h3>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            This 22-week series documents my experience as a contributor to the Automotive Grade Linux (AGL) project during Google Summer of Code 2025. I am developing a secure, user-friendly Flatpak App Store for embedded Linux In-Vehicle Infotainment (IVI) systems, mentored by experts from The Linux Foundation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link 
              key={post.id}
              to={`/blog/week-${post.week}`}
              className={`block ${post.status === 'upcoming' ? 'pointer-events-none' : ''}`}
            >
              <Card 
                className={`group cursor-pointer hover-lift overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 ${
                  post.status === 'upcoming' ? 'opacity-70' : ''
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
                      variant={post.status === 'published' ? 'default' : 'outline'}
                      className={post.status === 'published' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'border-muted-foreground/30 text-muted-foreground'}
                    >
                      {post.status === 'published' ? 'Published' : 'Coming Soon'}
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
                    <span className={`${post.status === 'published' ? 'group-hover:underline' : 'text-muted-foreground'}`}>
                      {post.status === 'published' ? 'Read More' : 'Stay Tuned'}
                    </span>
                    {post.status === 'published' && (
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
              New posts will be published weekly throughout the Google Summer of Code 2025 program. Each post will dive deep into the technical challenges, solutions, and insights gained while building this innovative app store for automotive systems.
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
  );
};

export default Blog;
