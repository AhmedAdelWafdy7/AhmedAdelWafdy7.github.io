// Static blog data - no dynamic imports or markdown processing
export interface BlogPostData {
  week: number;
  title: string;
  date: string;
  author: string;
  tags: string[];
  published: boolean;
  excerpt: string;
  content: string;
  readTime: string;
  slug: string;
}

// Static blog posts data
export const blogPosts: BlogPostData[] = [
  {
    week: 1,
    title: "Project Blueprint & Designing the AGL App Store Experience",
    date: "June 2025",
    author: "Ahmed Adel Wafdy",
    tags: ["GSoC 2025", "AGL", "UI/UX Design", "Flutter", "Architecture", "AppStream", "Flatpak"],
    published: true,
    excerpt: "Week 1 marks the exciting beginning of my Google Summer of Code journey with the Automotive Grade Linux (AGL) project! This initial period built upon the foundation laid during Week 0, where I successfully cloned all AGL repositories, AppStream parser, and Flatpak repository components.",
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

      <h2>Architectural Foundation</h2>
      <p>The technical architecture follows a layered approach with clear separation of concerns:</p>
      
      <ul>
        <li><strong>Presentation Layer (Flutter UI):</strong>
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
      <p>Our design system embraces AGL's commitment to functional elegance while introducing modern app store conventions that users expect from contemporary mobile experiences:</p>

      <ul>
        <li><strong>Dark Theme Foundation (#1A1A1A):</strong> Essential for automotive environments to reduce eye strain during night driving and provide optimal contrast against exterior lighting conditions.</li>
        <li><strong>Vibrant Green Accent (#33D17A):</strong> Strategic use of Flathub's signature green for primary actions like 'Install' and 'Explore Apps' buttons, creating intuitive calls to action that guide users through their application discovery journey.</li>
        <li><strong>AGL Branding Integration:</strong> Thoughtful integration of the AGL logo in our splash screen implementation, which appears during system initialization while fetching and caching repository data from servers.</li>
        <li><strong>Responsive Grid System:</strong> Adaptive layout that seamlessly transitions from 2-column mobile views to 6-column desktop displays, ensuring optimal content density across all screen sizes.</li>
      </ul>

      <p>Thank you for following along on this exciting journey! I look forward to sharing more updates as we progress through the GSoC 2025 program.</p>
      <p><em>View the complete design system and interactive prototypes in our <a href="https://www.figma.com/design/yFvzFAN6MGC6S1RXWFTVtW/App-Store?node-id=118-2&t=ExaSgEfAmIdIrPVs-1" target="_blank">Figma workspace</a>.</em></p>
    `,
    readTime: "8 min read",
    slug: "week-1"
  },
  // Placeholder posts for upcoming weeks
  {
    week: 2,
    title: "Community Feedback & MVP Development", 
    date: "June 2025",
    author: "Ahmed Adel Wafdy",
    tags: ["GSoC 2025", "AGL", "MVP", "Community"],
    published: false,
    excerpt: "This week focuses on incorporating community feedback and beginning MVP development.",
    content: "<p>This post for Week 2 is coming soon! Stay tuned for updates on community feedback and MVP development.</p>",
    readTime: "6 min read",
    slug: "week-2"
  },
  {
    week: 3,
    title: "Flutter Implementation Begins",
    date: "June 2025", 
    author: "Ahmed Adel Wafdy",
    tags: ["GSoC 2025", "AGL", "Flutter", "Implementation"],
    published: false,
    excerpt: "Starting the Flutter implementation of the AGL App Store with core architecture setup.",
    content: "<p>This post for Week 3 is coming soon! Stay tuned for updates on Flutter implementation.</p>",
    readTime: "7 min read",
    slug: "week-3"
  }
];

// Helper functions for static blog data
export function getAllBlogPosts(): BlogPostData[] {
  return blogPosts;
}

export function getPublishedBlogPosts(): BlogPostData[] {
  return blogPosts.filter(post => post.published);
}

export function getBlogPostBySlug(slug: string): BlogPostData | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getBlogPostByWeek(week: number): BlogPostData | undefined {
  return blogPosts.find(post => post.week === week);
}

// Generate placeholder posts for remaining weeks (up to 22 total)
export function getAllBlogPostsWithPlaceholders(): BlogPostData[] {
  const existingWeeks = new Set(blogPosts.map(post => post.week));
  const allPosts = [...blogPosts];
  
  // Add placeholder posts for weeks 4-22
  for (let week = 4; week <= 22; week++) {
    if (!existingWeeks.has(week)) {
      allPosts.push({
        week,
        title: `Week ${week} Development Update`,
        date: "Coming Soon",
        author: "Ahmed Adel Wafdy", 
        tags: ["GSoC 2025", "AGL", "Development"],
        published: false,
        excerpt: `Week ${week} development updates will be published soon as part of the GSoC 2025 journey.`,
        content: `<p>This post for Week ${week} is coming soon! Stay tuned for updates on my Google Summer of Code journey with the Automotive Grade Linux project.</p>`,
        readTime: "5 min read",
        slug: `week-${week}`
      });
    }
  }
  
  return allPosts.sort((a, b) => a.week - b.week);
}
