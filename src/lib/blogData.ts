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
  {
    week: 2,
    title: "AppStream Parser & Backend Architecture Design",
    date: "June 2025",
    author: "Ahmed Adel Wafdy",
    tags: ["GSoC 2025", "AGL", "AppStream", "C++", "Architecture", "System Design", "userver", "MongoDB"],
    published: true,
    excerpt: "Deep dive into AppStream parser optimization, backend architecture decisions, and comprehensive system design for the AGL App Store cloud infrastructure.",
    content: `
      <h2>AppStream Parser Optimization</h2>
      <p>This week marked a significant milestone in developing a high-performance AppStream parser specifically optimized for automotive embedded systems. The parser architecture prioritizes memory efficiency and zero-copy operations, crucial for resource-constrained automotive environments.</p>

      <h3>Design Approach</h3>
      <p>Our AppStream parser follows six core principles designed for embedded automotive systems:</p>
      
      <ul>
        <li><strong>Good data locality:</strong> Nodes linked in the tree are positioned as close as possible to minimize cache/page misses, essential when working with memory-mapped files in automotive systems with limited RAM.</li>
        <li><strong>Immutable trees:</strong> While not strictly immutable, the design emphasizes large immutable tree structures with small patches/annotations on top, reducing memory fragmentation and improving predictability.</li>
        <li><strong>Position independent:</strong> All pointers are relative, allowing binary structures to be kept as memory-mapped files. Iterators are relocatable, enabling easy serialization and sharing in distributed contexts.</li>
        <li><strong>Zero heap allocations:</strong> Extensive use of span/views with a split model for data ownership and operations, keeping core features agnostic to memory management strategies.</li>
      </ul>

      <h3>Technical Implementation</h3>
      <p>The parser leverages advanced C++ techniques for optimal performance:</p>
      
      <ol>
        <li><strong>Memory-mapped file access</strong> with <code>mmap()</code> for efficient file I/O</li>
        <li><strong>Zero-copy string operations</strong> using <code>std::string_view</code></li>
        <li><strong>Stack-based object pools</strong> avoiding heap allocations</li>
        <li><strong>Streaming SAX parsing</strong> with fixed-size buffers</li>
        <li><strong>Relative pointer arithmetic</strong> for efficient tree navigation</li>
        <li><strong>External memory management</strong> with custom allocators</li>
      </ol>

      <h2>Backend Architecture Decision Matrix</h2>
      <p>A critical decision this week involved choosing between extending the existing flat-manager (Rust) versus building a custom C++ server optimized for embedded automotive systems.</p>

      <table>
        <thead>
          <tr>
            <th>Factor</th>
            <th>Extending Flat-Manager</th>
            <th>Custom C++ Server</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Development Speed</strong></td>
            <td>🟡 Medium (Rust learning curve)</td>
            <td>🟢 Fast (existing C++ expertise)</td>
          </tr>
          <tr>
            <td><strong>Memory Efficiency</strong></td>
            <td>🟡 Good (Rust safety overhead)</td>
            <td>🟢 Excellent (fine-grained control)</td>
          </tr>
          <tr>
            <td><strong>Maintenance</strong></td>
            <td>🟢 Leverage existing ecosystem</td>
            <td>🟡 Full ownership responsibility</td>
          </tr>
          <tr>
            <td><strong>Feature Flexibility</strong></td>
            <td>🟡 Limited by flat-manager design</td>
            <td>🟢 Complete control</td>
          </tr>
          <tr>
            <td><strong>Security</strong></td>
            <td>🟢 Rust memory safety</td>
            <td>🟡 Requires careful C++ practices</td>
          </tr>
          <tr>
            <td><strong>Embedded Optimization</strong></td>
            <td>🔴 Generic design</td>
            <td>🟢 Purpose-built for embedded</td>
          </tr>
        </tbody>
      </table>

      <p><strong>Decision:</strong> We chose the custom C++ server approach using the userver framework, optimized specifically for embedded automotive requirements while maintaining the flexibility for future scaling.</p>
      <p><strong>Evaluation Result:</strong> The custom C++ server approach using the userver framework shows promise for embedded automotive requirements while maintaining flexibility for future scaling. Further evaluation needed against Go and Java (Spring Boot) alternatives.</p>

      <h2>Datastore Selection Strategy</h2>
      <p>We're exploring NoSQL solutions based on:</p>
      
      <ul>
        <li><strong>No relational data:</strong> Application metadata is hierarchical and document-based</li>
        <li><strong>Schema flexibility:</strong> AppStream metadata varies significantly between applications</li>
        <li><strong>Embedded deployment:</strong> Must support resource-constrained automotive environments</li>
      </ul>

      <p><strong>Under Consideration:</strong> MongoDB with official drivers, alongside other document stores that provide embedded support and flexible document storage for AppStream metadata.</p>

      <h2>System Architecture Exploration</h2>
      <p>We're exploring a <strong>modular monolith</strong> approach, designed for embedded systems while maintaining microservices scalability:</p>

      <pre><code>Client ↔ HTTP/2 + gRPC ↔ Server Framework ↔ Database Driver ↔ Database</code></pre>

      <h3>Technology Stack Considerations</h3>
      <ul>
        <li><strong>Server Frameworks:</strong> userver (C++), Go frameworks, Java Spring Boot - evaluating performance vs development velocity</li>
        <li><strong>Database Options:</strong> MongoDB, other document stores - assessing embedded optimization capabilities</li>
        <li><strong>Serialization:</strong> Protobuf/nanopb for efficient message serialization in automotive constraints</li>
        <li><strong>Communication:</strong> gRPC for high-performance RPC, HTTP/2 for modern transport with multiplexing</li>
      </ul>

      <h2>Core Service Modules</h2>

      <h3>1. Catalog Service Module</h3>
      <p>Handles AppStream parsing, metadata extraction, and app discovery:</p>
      
      <pre><code>service CatalogService {
    rpc GetAppCatalog(CatalogRequest) returns (CatalogResponse);
    rpc SearchApps(SearchRequest) returns (SearchResponse);
    rpc GetAppDetails(AppDetailsRequest) returns (AppDetailsResponse);
    rpc CheckAppAvailability(AvailabilityRequest) returns (AvailabilityResponse);
}</code></pre>

      <h3>2. Reviews & Ratings Module</h3>
      <p>Manages user reviews, rating aggregation, and content moderation:</p>
      
      <pre><code>service ReviewsService {
    rpc SubmitReview(ReviewSubmissionRequest) returns (ReviewSubmissionResponse);
    rpc GetAppReviews(AppReviewsRequest) returns (AppReviewsResponse);
    rpc GetAggregatedRatings(RatingsRequest) returns (RatingsResponse);
    rpc ModerateReview(ModerationRequest) returns (ModerationResponse);
}</code></pre>

      <h3>3. Statistics Module</h3>
      <p>Tracks usage analytics and performance metrics:</p>
      
      <pre><code>service StatisticsService {
    rpc RecordUsage(UsageEvent) returns (UsageResponse);
    rpc GetUsageReport(ReportRequest) returns (ReportResponse);
    rpc RecordLoginSequence(LoginEvent) returns (LoginResponse);
    rpc GetAnalytics(AnalyticsRequest) returns (AnalyticsResponse);
}</code></pre>

      <h3>4. Upgrade Service Module</h3>
      <p>Manages application updates, Flatpak lifecycle, and security key management:</p>
      
      <pre><code>service UpgradeService {
    rpc CheckForUpdates(UpdateCheckRequest) returns (UpdateCheckResponse);
    rpc InitiateMandatoryUpdate(MandatoryUpdateRequest) returns (UpdateResponse);
    rpc InitiateVoluntaryUpdate(VoluntaryUpdateRequest) returns (UpdateResponse);
    rpc GetUpdateStatus(UpdateStatusRequest) returns (UpdateStatusResponse);
    rpc RevokeKey(KeyRevocationRequest) returns (KeyRevocationResponse);
}</code></pre>

      <h2>Implementation Phases</h2>

      <h3>Phase 1: Architecture Foundation</h3>
      <p>Exploring modular designs within single applications, optimized for embedded deployment with shared memory and efficient inter-module communication.</p>

      <h3>Phase 2: Interface Design</h3>
      <p>Designing common interface patterns with dependency injection, preparing for future modularity while maintaining performance benefits.</p>

      <h3>Phase 3: Scalability Planning</h3>
      <p>Planning network layer abstractions to enable seamless transitions to microservices when scaling requirements demand it.</p>

      <h2>Next Week Objectives</h2>
      <ul>
        <li>Begin Flutter database integration research for client-side caching</li>
        <li>Research scalability and cost solutions</li>
        <li>Consider frameworks with Go and Java (Spring Boot)</li>
        <li>Evaluate testing infrastructure approaches for automotive environments</li>
        <li>Continue architecture pattern analysis and comparison</li>
      </ul>

      <p>This week focused on exploring technical foundations for a high-performance, embedded-optimized app store backend. The combination of AppStream parsing research, architecture stack evaluation, and modular design thinking provides multiple pathways for the development phases ahead.</p>

      <h2>References</h2>
      <p><em>System design principles and architecture patterns referenced from Martin Kleppmann's <a href="https://www.amazon.in/dp/9352135245" target="_blank">"Designing Data-Intensive Applications"</a> - an essential resource for understanding distributed systems and data architecture at scale.</em></p>
      
      <p><em>Complete system design diagrams and technical specifications are available in our <a href="https://drive.google.com/file/d/10IMuD4tQl9kBwJ9TR5Snjj3vQRmSUv9W/view?usp=drive_link" target="_blank">design documentation</a>.</em></p>
    `,
    readTime: "12 min read",
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
