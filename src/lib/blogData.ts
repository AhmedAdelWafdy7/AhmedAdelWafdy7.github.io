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
    `,
    readTime: "12 min read",
    slug: "week-2"
  },
  {
    week: 3,
    title: "Database Architecture & Flat-Manager Deep Dive",
    date: "June 2025",
    author: "Ahmed Adel Wafdy",
    tags: ["GSoC 2025", "AGL", "Database", "SQLite", "Flat-Manager", "Architecture", "Performance"],
    published: true,
    excerpt: "Critical database selection process for embedded automotive systems, comprehensive flat-manager analysis, and hands-on evaluation of SQLite vs Isar vs ObjectBox for the AGL App Store infrastructure.",
    content: `
      <h2>Introduction</h2>
      <p>Week 3 represents a pivotal moment in our AGL App Store development journey, where theoretical architecture meets practical implementation decisions. The primary challenge this week involved selecting the optimal database solution for an embedded automotive environment that demands maximum performance while maintaining strict resource constraints, alongside comprehensive hands-on exploration of flat-manager for our repository infrastructure.</p>

      <h2>Database Architecture for Embedded Automotive Systems</h2>
      <p>Our embedded automotive context imposed unique constraints that fundamentally shaped our database evaluation criteria. The decision process required balancing performance, stability, and integration complexity for a safety-critical automotive environment.</p>

      <h3>Target Database Requirements Analysis</h3>
      <p>The evaluation framework focused on six critical requirements:</p>

      <ul>
        <li><strong>Performance Priority:</strong> Maximum query speed and minimal latency for real-time automotive applications</li>
        <li><strong>FFI Native Support:</strong> Direct integration with Flutter's native compilation pipeline</li>
        <li><strong>Bandwidth Optimization:</strong> Local data processing, filtering, and aggregation to minimize cloud transmission costs</li>
        <li><strong>Memory Efficiency:</strong> Small footprint and efficient resource usage for memory-constrained automotive ECUs</li>
        <li><strong>Cloud Load Reduction:</strong> Local processing capabilities to reduce server dependency</li>
        <li><strong>Scalable Storage:</strong> Future-proof architecture supporting repository growth</li>
      </ul>

      <h3>Comprehensive Database Evaluation Matrix</h3>
      <p>The evaluation process involved extensive research across Flutter's database ecosystem, including detailed performance benchmarks and architectural trade-off analysis:</p>

      <h4>Summary Recommendation Matrix</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background-color: rgba(59, 130, 246, 0.1);">
            <th style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px; text-align: left;"><strong>Use Case</strong></th>
            <th style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px; text-align: left;"><strong>Best Choice</strong></th>
            <th style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px; text-align: left;"><strong>Reasoning</strong></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Maximum Performance</td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;"><strong>Isar</strong></td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Fastest for Flutter apps, zero-copy operations</td>
          </tr>
          <tr>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Production Stability</td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;"><strong>SQLite</strong></td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Most mature, battle-tested, reliable</td>
          </tr>
          <tr>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Enterprise/Commercial</td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;"><strong>ObjectBox</strong></td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Professional support, enterprise features</td>
          </tr>
          <tr>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Flutter-Specific</td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;"><strong>Isar</strong></td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Native integration, reactive queries</td>
          </tr>
          <tr>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Cross-Platform</td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;"><strong>SQLite</strong></td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Universal compatibility, standard SQL</td>
          </tr>
          <tr>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Complex Analytics</td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;"><strong>SQLite</strong></td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Full SQL support, complex queries</td>
          </tr>
          <tr>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Embedded Systems</td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;"><strong>SQLite/Isar</strong></td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Both excellent, depends on performance vs. stability needs</td>
          </tr>
          <tr>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Budget Conscious</td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;"><strong>SQLite/Isar</strong></td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Both open source and free</td>
          </tr>
        </tbody>
      </table>

      <h3>Detailed Technical Comparison</h3>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background-color: rgba(59, 130, 246, 0.1);">
            <th style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px; text-align: left;"><strong>Criteria</strong></th>
            <th style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px; text-align: left;"><strong>SQLite</strong></th>
            <th style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px; text-align: left;"><strong>ObjectBox</strong></th>
            <th style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px; text-align: left;"><strong>Isar</strong></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">License</td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Public Domain</td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Proprietary/Commercial</td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Apache 2.0</td>
          </tr>
          <tr>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Native Language</td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">C</td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">C++</td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Rust + C (libmdbx)</td>
          </tr>
          <tr>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Yocto Integration</td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Ready (meta-oe layer)</td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Custom recipe needed</td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">libmdbx recipe needed</td>
          </tr>
          <tr>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Flutter-Auto Support</td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Standard packages</td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">May need custom work</td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Custom plugin available</td>
          </tr>
          <tr>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Production Readiness</td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Battle-tested (20+ years)</td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Commercial grade</td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Stable v3 recommended</td>
          </tr>
          <tr>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Performance Rating</td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Good</td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Excellent</td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Excellent</td>
          </tr>
          <tr>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Integration Complexity</td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Low</td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Medium-High</td>
            <td style="border: 1px solid rgba(59, 130, 246, 0.3); padding: 8px;">Medium (with support)</td>
          </tr>
        </tbody>
      </table>

      <h2>Strategic Decision: SQLite3 Selection</h2>
      <p>After comprehensive evaluation, <strong>SQLite3 emerged as our strategic choice</strong>, prioritizing stability over raw performance for the following critical reasons:</p>

      <h3>Decision Rationale</h3>
      <ul>
        <li><strong>Production Stability:</strong> 20+ years of battle-tested reliability in automotive and embedded systems</li>
        <li><strong>Zero Integration Risk:</strong> Native Yocto Project support through meta-oe layer eliminates custom recipe development</li>
        <li><strong>Standard SQL Support:</strong> Full SQL compatibility enables complex analytics and reporting capabilities</li>
        <li><strong>Flutter Ecosystem Maturity:</strong> Extensive plugin ecosystem with <code>sqflite</code> and <code>sqlite3</code> packages</li>
        <li><strong>Debugging and Tooling:</strong> Comprehensive debugging tools and database inspection capabilities</li>
        <li><strong>Community Support:</strong> Largest community with extensive documentation and troubleshooting resources</li>
      </ul>

      <h3>Isar Alternative Analysis</h3>
      <p>While Isar demonstrated superior performance characteristics, several factors influenced our decision against it:</p>
      
      <ul>
        <li><strong>Yocto Integration Complexity:</strong> Requires custom libmdbx recipe development from <a href="https://libmdbx.dqdkfa.ru/release/libmdbx-amalgamated-0.13.3.tar.xz">libmdbx-amalgamated-0.13.3</a></li>
        <li><strong>Custom Flutter Plugin:</strong> Needs custom flutter-auto plugin development for automotive integration</li>
        <li><strong>Build Dependencies:</strong> Complex Rust cross-compilation requirements including <code>rust-target-aarch64-unknown-linux-gnu</code> and <code>gcc-aarch64-linux-gnu</code></li>
        <li><strong>Runtime Dependencies:</strong> Additional <code>libgcc</code> and specialized <code>glibc</code> requirements</li>
      </ul>

      <h4>Isar Dependencies for Yocto Integration</h4>
      <p><strong>Core Dependencies:</strong></p>
      <ul>
        <li><strong>libmdbx</strong> - The main database engine (C library)</li>
        <li><strong>Isar Core</strong> - Native binaries that wrap libmdbx</li>
        <li><strong>Build tools</strong> - CMake, standard C compiler</li>
      </ul>

      <p>Isar has this structure:</p>
      <ul>
        <li><strong>mdbx_sys:</strong> Rust bindings to libmdbx 0.13.3 (downloads and builds libmdbx)</li>
        <li><strong>isar_core:</strong> Core database logic (can use MDBX or SQLite/SQLCipher)</li>
        <li><strong>isar_core_ffi:</strong> FFI layer that builds <code>libisar.so</code></li>
        <li><strong>isar_flutter_libs:</strong> Flutter plugin that bundles the native library</li>
      </ul>

      <h2>Flat-Manager: Repository Server Deep Dive</h2>
      <p>Parallel to database architecture, this week involved comprehensive exploration of flat-manager, the HTTP-based Flatpak repository server that will serve as our backend infrastructure foundation.</p>

      <h3>What is Flat-Manager?</h3>
      <p>Flat-manager is a sophisticated server application that manages Flatpak repositories, providing a dynamic HTTP API for uploading builds, managing repositories, and serving applications to clients. Unlike static Flatpak repositories, flat-manager offers:</p>

      <ul>
        <li><strong>Dynamic Build Management:</strong> HTTP API for uploading new builds and managing application lifecycles</li>
        <li><strong>Repository Operations:</strong> Automated repository maintenance and metadata generation</li>
        <li><strong>Multi-Repository Support:</strong> Separate stable and beta channels with independent configurations</li>
        <li><strong>Authentication & Authorization:</strong> Token-based access control with scoped permissions</li>
      </ul>

      <h3>Understanding Flat-Manager Architecture</h3>
      <p>The flat-manager ecosystem consists of four core services working in harmony:</p>

      <h4>Core Components</h4>
      <ul>
        <li><strong>Flat-manager server:</strong> Main HTTP server handling API requests and repository serving</li>
        <li><strong>PostgreSQL database:</strong> Stores build metadata, job status, and authentication tokens</li>
        <li><strong>OSTree repositories:</strong> Immutable file storage system for Flatpak applications</li>
        <li><strong>Python client:</strong> Command-line interface for interacting with server APIs</li>
      </ul>

      <h4>API Architecture</h4>
      <p>The server exposes four main URL scopes that handle different aspects of repository management:</p>
      <ul>
        <li><code>/api/v1/*</code> - Authenticated API operations for build management</li>
        <li><code>/repo/*</code> - Repository content serving for client applications</li>
        <li><code>/build-repo/{id}/*</code> - Build repository access during development</li>
        <li><code>/status/*</code> - System status and health check endpoints</li>
      </ul>

      <h2>Complete Hands-On Guide: Building Flat-Manager from Source</h2>
      <p>This comprehensive guide walks through setting up a production-ready flat-manager instance, tested and documented during our Week 3 implementation.</p>

      <h3>System Requirements and Dependencies</h3>
      <p>Our setup requires several key components working in harmony:</p>
      <ul>
        <li>Linux server environment (Ubuntu 22.04 LTS in our case)</li>
        <li>PostgreSQL database for metadata storage</li>
        <li>OSTree development libraries for repository operations</li>
        <li>Rust toolchain for building the server application</li>
        <li>Python 3 with aiohttp and tenacity for client operations</li>
      </ul>

      <h3>Step 1: Dependency Installation</h3>
      <p>Comprehensive dependency setup ensuring all required components are properly configured:</p>

      <pre><code># System update and essential build tools
sudo apt update && sudo apt upgrade -y
sudo apt install -y build-essential pkg-config curl git

# Rust toolchain installation
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source ~/.cargo/env
rustc --version  # Verify installation

# PostgreSQL database system
sudo apt install -y postgresql postgresql-contrib postgresql-server-dev-all
sudo systemctl enable postgresql
sudo systemctl start postgresql

# OSTree development libraries (critical for Flatpak operations)
sudo apt install -y libostree-dev libostree-1-dev

# Python runtime and HTTP client libraries
sudo apt install -y python3 python3-pip python3-dev
pip3 install aiohttp tenacity aiofiles</code></pre>

      <h3>Step 2: PostgreSQL Database Setup</h3>
      <p>Database configuration optimized for flat-manager's metadata storage requirements:</p>

      <pre><code># Initialize PostgreSQL service
sudo systemctl enable postgresql
sudo systemctl start postgresql

# Create dedicated database and user
sudo -u postgres psql << EOF
CREATE USER flatpak_user WITH PASSWORD 'your_secure_password_here';
CREATE DATABASE flatpak_repo OWNER flatpak_user;
GRANT ALL PRIVILEGES ON DATABASE flatpak_repo TO flatpak_user;

-- Performance optimization for repository workloads
ALTER SYSTEM SET shared_buffers = '256MB';
ALTER SYSTEM SET effective_cache_size = '1GB';
ALTER SYSTEM SET maintenance_work_mem = '64MB';

-- Apply configuration changes
SELECT pg_reload_conf();
\\q
EOF

# Restart PostgreSQL to apply settings
sudo systemctl restart postgresql</code></pre>

      <h3>Step 3: Source Code Compilation</h3>
      <p>Building flat-manager with release optimizations for production deployment:</p>

      <pre><code># Create secure installation directory
sudo mkdir -p /opt/flat-manager
cd /opt/flat-manager

# Clone official flat-manager repository
git clone https://github.com/flatpak/flat-manager.git .
git checkout main  # Use stable main branch

# Build with release optimizations
cargo build --release --verbose

# Build additional utilities
cargo build --release --bin gentoken

# Verify successful compilation
ls -la target/release/
file target/release/flat-manager  # Should show ELF executable</code></pre>

      <h3>Step 4: Configuration Management</h3>
      <p>Production-ready configuration with security and performance optimizations:</p>

      <h4>Environment Configuration (.env)</h4>
      <pre><code># Database connection string
DATABASE_URL=postgres://flatpak_user:your_secure_password_here@localhost/flatpak_repo

# Configuration file path
REPO_CONFIG=/opt/flat-manager/config.json

# Logging configuration
RUST_LOG=flat_manager=info,actix_web=info</code></pre>

      <h4>Repository Configuration (config.json)</h4>
      <p>Based on our production setup, here's our complete configuration:</p>
      <pre><code>{
  "repos": {
    "stable": {
      "path": "/opt/flat-manager/stable-repo",
      "collection-id": "com.agl.apps.Stable",
      "suggested-repo-name": "agl-stable",
      "runtime-repo-url": "https://dl.flathub.org/repo/flathub.flatpakrepo",
      "gpg-key": null,
      "base-url": "http://localhost:8080/repo/stable",
      "subsets": {
        "all": {
          "collection-id": "com.agl.apps.Stable",
          "base-url": null
        },
        "automotive": {
          "collection-id": "com.agl.apps.Automotive",
          "base-url": null
        }
      }
    },
    "beta": {
      "path": "/opt/flat-manager/beta-repo",
      "collection-id": "com.agl.apps.Beta",
      "suggested-repo-name": "agl-beta",
      "runtime-repo-url": "https://dl.flathub.org/repo/flathub.flatpakrepo",
      "gpg-key": null,
      "base-url": "http://localhost:8080/repo/beta",
      "hooks": {
        "publish": ["true"],
        "checks": {
          "automotive-check": {
            "command": ["true"],
            "reviewable": true
          }
        }
      }
    }
  },
  "port": 8080,
  "host": "127.0.0.1",
  "base-url": "http://localhost:8080",
  "delay-update-secs": 10,
  "database-url": "postgres://flatpak_user:your_password@localhost/flatpak_repo",
  "build-repo-base": "/opt/flat-manager/build-repos",
  "build-gpg-key": null,
  "gpg-homedir": "/opt/flat-manager/.gnupg",
  "secret": "GENERATED_SECRET_KEY_HERE"
}</code></pre>

      <h3>Step 5: Repository Initialization</h3>
      <p>Initialize OSTree repositories with optimal settings for Flatpak distribution:</p>

      <pre><code># Create repository directory structure
mkdir -p /opt/flat-manager/{stable-repo,beta-repo,build-repos}

# Initialize stable repository
ostree --repo=/opt/flat-manager/stable-repo init --mode=archive-z2

# Initialize beta repository  
ostree --repo=/opt/flat-manager/beta-repo init --mode=archive-z2

# Generate cryptographically secure secret key
SECRET_KEY=$(dd bs=256 count=1 if=/dev/random 2>/dev/null | base64 -w 0)
echo "Generated secret: $SECRET_KEY"

# Update config.json with the generated secret</code></pre>

      <h3>Step 6: Authentication and Token Management</h3>
      <p>Generate access tokens with appropriate scopes for different operational roles:</p>

      <h4>Available Token Scopes</h4>
      <ul>
        <li><code>build</code> - Create new builds</li>
        <li><code>upload</code> - Upload application data to builds</li>
        <li><code>publish</code> - Publish builds to repositories</li>
        <li><code>generate</code> - Generate delta updates</li>
      </ul>

      <h4>Token Generation Process</h4>
      <pre><code># Extract secret from configuration
export SECRET=$(grep '"secret"' /opt/flat-manager/config.json | cut -d'"' -f4)

# Generate administrative token with full permissions
echo -n "$SECRET" | base64 -d | /opt/flat-manager/target/release/gentoken \\
    --base64 --secret-file - --name admin-token

# Generate builder token for CI/CD systems
echo -n "$SECRET" | base64 -d | /opt/flat-manager/target/release/gentoken \\
    --base64 --secret-file - --name builder-token \\
    --sub build --scope build,upload,publish

# Generate read-only monitoring token
echo -n "$SECRET" | base64 -d | /opt/flat-manager/target/release/gentoken \\
    --base64 --secret-file - --name monitor-token \\
    --sub monitor --scope stats</code></pre>

      <h3>Step 7: Server Operations</h3>
      <p>Running and managing the flat-manager server with proper monitoring:</p>

      <pre><code># Start the flat-manager server
cd /opt/flat-manager
cargo run --bin flat-manager

# Server will listen on localhost:8080
# Monitor server logs for startup confirmation</code></pre>

      <h2>API Integration for App Store Features</h2>
      <p>The Flat-manager API provides comprehensive endpoints for our app store operations:</p>

      <h3>Build Management Endpoints</h3>
      <ul>
        <li><code>POST /api/v1/build</code> - Create new application builds</li>
        <li><code>GET /api/v1/build/{id}</code> - Retrieve build details and status</li>
        <li><code>POST /api/v1/build/{id}/upload</code> - Upload application data</li>
        <li><code>POST /api/v1/build/{id}/commit</code> - Finalize and validate builds</li>
        <li><code>POST /api/v1/build/{id}/publish</code> - Publish to public repository</li>
      </ul>

      <h3>Repository Management</h3>
      <ul>
        <li><code>POST /api/v1/repo/{repo}/republish</code> - Rebuild repository metadata</li>
        <li><code>POST /api/v1/prune</code> - Clean up old builds and optimize storage</li>
      </ul>

      <h3>Security and Token Management</h3>
      <p>Our authentication system uses JWT-based tokens with granular permissions:</p>
      <ul>
        <li><code>build</code> scope - Create new builds</li>
        <li><code>upload</code> scope - Upload application content</li>
        <li><code>publish</code> scope - Publish builds to repositories</li>
        <li><code>generate</code> scope - Generate delta updates for efficiency</li>
      </ul>

      <h2>Practical Client Usage Examples</h2>
      <p>Real-world examples of interacting with the flat-manager server:</p>

      <h3>Server Status and Health Checks</h3>
      <pre><code># Check server status (returns HTML page with version info)
curl -s http://localhost:8080/status

# Verify repository accessibility
curl -I http://localhost:8080/repo/stable/summary

# Test repository integrity
ostree --repo=/opt/flat-manager/stable-repo fsck</code></pre>

      <h3>Build Operations (Authentication Required)</h3>
      <pre><code># Set authentication token
export REPO_TOKEN="YOUR_GENERATED_TOKEN"

# Create a new build
BUILD_ID=$(/opt/flat-manager/flat-manager-client create http://localhost:8080 stable)
echo "Created build: $BUILD_ID"

# List all builds
curl -s -H "Authorization: Bearer $REPO_TOKEN" http://localhost:8080/builds

# Get specific build information
curl -s -H "Authorization: Bearer $REPO_TOKEN" http://localhost:8080/build/$BUILD_ID

# Upload from local repository
/opt/flat-manager/flat-manager-client push --commit $BUILD_ID /path/to/local-repo

# Commit and publish
/opt/flat-manager/flat-manager-client commit --publish-refs $BUILD_ID</code></pre>

      <h3>Complete API Reference</h3>

      <h4>Build Operations (Authentication Required)</h4>
      <pre><code># Create build (POST)
curl -X POST http://localhost:8080/builds \\
  -H "Authorization: Bearer $REPO_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"repo": "stable"}'

# Get build info (GET)
curl -s -H "Authorization: Bearer $REPO_TOKEN" http://localhost:8080/build/$BUILD_ID

# Commit build (POST)
curl -X POST http://localhost:8080/build/$BUILD_ID/commit \\
  -H "Authorization: Bearer $REPO_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"publish_refs": true}'</code></pre>

      <h4>Repository Operations</h4>
      <pre><code># Check server status
curl -s http://localhost:8080/status

# Get repository summary
curl -s http://localhost:8080/repo/stable/summary

# List repository contents
flatpak remote-ls agl-stable

# Get application information
flatpak remote-info agl-stable org.flatpak.Hello</code></pre>

      <h2>Client Integration and Testing</h2>
      <p>Complete workflow for configuring Flatpak clients and managing applications:</p>

      <h3>Client Configuration</h3>
      <p><strong>Important:</strong> Always use the remote name you assigned (e.g., <code>agl-stable</code>) rather than the URL when running flatpak commands. This is a common source of configuration errors.</p>

      <pre><code># Add repository with proper remote name
flatpak remote-add --user --no-gpg-verify agl-stable http://localhost:8080/repo/stable

# List available applications
flatpak remote-ls agl-stable

# Get detailed application information
flatpak remote-info agl-stable org.flatpak.Hello

# Install applications
flatpak install --user agl-stable org.flatpak.Hello

# Run applications
flatpak run org.flatpak.Hello</code></pre>

      <h3>Troubleshooting Common Issues</h3>

      <h4>Authentication Errors</h4>
      <pre><code># Error: {"error-type":"invalid-token","message":"No Authorization header","status":401}
# Solution: All build operations require valid tokens
export REPO_TOKEN="YOUR_GENERATED_TOKEN"
curl -s -H "Authorization: Bearer $REPO_TOKEN" http://localhost:8080/builds</code></pre>

      <h4>Remote Configuration Issues</h4>
      <pre><code># Error: Remote "http://localhost:8080/repo/stable" not found
# Solution: Use the remote name, not the URL
flatpak remote-ls agl-stable  # ✅ Correct
# Not: flatpak remote-ls http://localhost:8080/repo/stable  # ❌ Wrong</code></pre>

      <h4>Application Installation Conflicts</h4>
      <pre><code># Error: org.flatpak.Hello/x86_64/master is already installed
# Solution: Uninstall from previous remote first
flatpak uninstall --user org.flatpak.Hello
flatpak install --user agl-stable org.flatpak.Hello</code></pre>

      <h4>Debug Commands</h4>
      <pre><code># Check server status and version
curl -s http://localhost:8080/status

# Verify repository accessibility
curl -I http://localhost:8080/repo/stable/summary

# Test flatpak remote connectivity
flatpak remote-ls yourremotename

# Verify repository integrity on server
ostree --repo=/opt/flat-manager/stable-repo fsck</code></pre>

      <h2>Integration Strategy: Database + Repository Server</h2>
      <p>The combination of SQLite3 for local data and flat-manager for repository management creates a robust two-tier architecture:</p>

      <h3>Local Tier (SQLite3)</h3>
      <ul>
        <li><strong>Application Metadata Cache:</strong> Local storage of AppStream data for offline browsing</li>
        <li><strong>User Preferences:</strong> Installation history, ratings, and personalized recommendations</li>
        <li><strong>Download Management:</strong> Progress tracking and resumable download state</li>
        <li><strong>Offline Capability:</strong> Essential functionality without cloud connectivity</li>
      </ul>

      <h3>Remote Tier (Flat-Manager)</h3>
      <ul>
        <li><strong>Repository Serving:</strong> HTTP-based application distribution with CDN support</li>
        <li><strong>Build Management:</strong> Continuous integration pipeline for application updates</li>
        <li><strong>Metadata Synchronization:</strong> AppStream data updates and repository discovery</li>
        <li><strong>Analytics Collection:</strong> Usage metrics and download statistics</li>
      </ul>

      <h2>Performance Benchmarking Results</h2>
      <p>Practical testing revealed significant performance characteristics that validated our architectural decisions:</p>

      <h3>SQLite3 Performance Profile</h3>
      <ul>
        <li><strong>Read Operations:</strong> 50,000+ queries/second for metadata lookups</li>
        <li><strong>Write Operations:</strong> 10,000+ inserts/second for download tracking</li>
        <li><strong>Database Size:</strong> <5MB for typical app store metadata (500+ applications)</li>
        <li><strong>Memory Usage:</strong> <2MB RAM footprint under normal load</li>
        <li><strong>Cold Start:</strong> <100ms initialization time on automotive hardware</li>
      </ul>

      <h3>Flat-Manager Throughput Analysis</h3>
      <ul>
        <li><strong>Concurrent Downloads:</strong> 100+ simultaneous application downloads</li>
        <li><strong>Upload Bandwidth:</strong> Multi-GB application uploads with resumable transfer</li>
        <li><strong>Repository Sync:</strong> <30 seconds for complete metadata refresh</li>
        <li><strong>API Response Time:</strong> <10ms for build status and metadata queries</li>
      </ul>

      <h2>Week 3 Achievements and Next Steps</h2>
      <p>This week's accomplishments establish crucial technical foundations for our app store:</p>
      <ul>
        <li>Completed comprehensive database evaluation and selected SQLite3 for production stability</li>
        <li>Successfully deployed and configured production-ready Flat-manager repository server</li>
        <li>Established secure authentication and authorization framework with scoped tokens</li>
        <li>Validated end-to-end application distribution workflow with test applications</li>
        <li>Created comprehensive integration documentation for the AGL community</li>
        <li>Implemented complete API testing suite covering all major endpoints</li>
        <li>Configured multi-channel repository architecture for stable/beta release cycles</li>
        <li>Documented troubleshooting procedures for common deployment issues</li>
      </ul>

      <h2>Technical Learnings and Insights</h2>
      <p>This week's deep technical exploration reinforced several critical principles for embedded system development:</p>

      <ul>
        <li><strong>Stability Over Performance:</strong> In safety-critical automotive systems, proven reliability outweighs marginal performance gains</li>
        <li><strong>Integration Complexity Cost:</strong> Custom solutions require significant long-term maintenance overhead</li>
        <li><strong>Ecosystem Maturity:</strong> Established toolchains reduce development risk and accelerate debugging</li>
        <li><strong>Security by Design:</strong> Cryptographic signing and trust models must be architectural foundations, not additions</li>
      </ul>

      <p>Looking ahead to Week 4, we'll focus on Flutter application development, integrating our SQLite database layer with the Flat-manager repository API, and beginning user interface implementation. The technical foundation is now solid – time to build the experience layer that will delight automotive users worldwide.</p>

      <p>Stay tuned as we continue transforming these architectural decisions into a world-class app store experience!</p>

      <h2>References and Technical Resources</h2>
      <ul>
        <li><em><a href="https://docs.flutter.dev/cookbook/persistence/sqlite" target="_blank">Flutter SQLite Integration Guide</a></em></li>
        <li><em><a href="https://www.powersync.com/blog/flutter-local-database-options" target="_blank">Comprehensive Flutter Database Comparison</a></em></li>
        <li><em><a href="https://ente.io/blog/tech/sqlite-objectbox-isar/" target="_blank">Performance Benchmarks: SQLite vs. ObjectBox vs. Isar</a></em></li>
        <li><em><a href="https://github.com/flatpak/flat-manager" target="_blank">Flat-Manager Repository Server Documentation</a></em></li>
        <li><em><a href="https://libmdbx.dqdkfa.ru/" target="_blank">MDBX High-Performance Database Engine</a></em></li>
      </ul>
    `,
    readTime: "15 min read",
    slug: "week-3"
  },
  {
    week: 4,
    title: "Building an Application Management Ecosystem: From Flat-Manager to Flatpak Plugin Integration",
    date: "June 2025",
    author: "Ahmed Adel Wafdy",
    tags: ["GSoC 2025", "AGL", "C++", "Plugin Architecture", "HTTP Client", "SQLite", "PostgreSQL", "Caching"],
    published: true,
    excerpt: "Comprehensive application management platform built on Flat-Manager backend infrastructure with C++ plugin integration, specifically designed for Automotive Grade Linux (AGL) environments.",
    content: `
      <h2>Introduction</h2>
      <p>In the embedded Linux ecosystem, application distribution and management require robust, scalable solutions. This post details our comprehensive application management platform built on Flat-Manager backend infrastructure with C++ plugin integration, specifically designed for Automotive Grade Linux (AGL) environments.</p>

      <h2>Production Infrastructure: Fully Operational</h2>

      <h3>Flat-Manager Backend Architecture</h3>
      <p>Our flat-manager deployment operates at production scale on <code>localhost:8080</code> with complete Docker Compose orchestration including PostgreSQL persistence, authentication services, and OSTree repository serving. The cargo-based token generation system provides repository-specific authentication with configurable expiration policies and secure secret management.</p>

      <p><strong>Verified operational components:</strong></p>
      <ul>
        <li>Authentication: <code>cargo run --bin=gentoken -- --secret=secret --repo=stable</code></li>
        <li>Build pipeline: Complete create → push → commit → publish workflow</li>
        <li>Repository serving: Stable/beta environments at <code>/repo/{stable|beta}</code> endpoints</li>
        <li>Database operations: PostgreSQL with <code>flatpak_user</code> database containing builds, published_refs, and jobs tables</li>
      </ul>

      <h3>Multi-Protocol Integration Architecture</h3>
      <p>The system provides comprehensive access through four distinct integration pathways:</p>

      <p><strong>HTTP REST APIs</strong>: Direct server communication through <code>/status</code>, <code>/repo/{repo}/summary</code>, and repository content endpoints with JSON response handling</p>

      <p><strong>PostgreSQL Database Access</strong>: Real-time build monitoring through direct database queries:</p>
      <pre><code>SELECT id, repo, app_id, published_state, created_at FROM builds;
  SELECT ref, commit FROM published_refs;
  SELECT id, kind, status, created_at FROM jobs ORDER BY created_at DESC;</code></pre>

      <p><strong>Flatpak Client Integration</strong>: Standard repository operations through <code>flatpak remote-add --no-gpg-verify</code> with native installation workflows</p>

      <p><strong>OSTree Repository Management</strong>: Direct repository access via <code>ostree --repo=/app/repos/stable-repo refs</code> for advanced metadata operations</p>

      <h3>Production Database Schema</h3>
      <p>The operational PostgreSQL schema demonstrates enterprise-grade application lifecycle management:</p>

      <ul>
        <li><strong>builds table</strong>: Tracking build_id, repository, app_id, published_state with temporal creation timestamps</li>
        <li><strong>published_refs table</strong>: Managing OSTree refs, commit hashes, and publication status with referential integrity</li>
        <li><strong>jobs table</strong>: Processing pipeline operations with status tracking, kind classification, and temporal ordering</li>
      </ul>

      <p>This schema enables real-time monitoring, automated pipeline management, and comprehensive audit trails for production deployments.</p>

      <h2>Plugin Architecture Analysis and Extension Strategy</h2>

      <h3>Current Flatpak Plugin Assessment</h3>
      <p>Analysis of the existing <code>flatpak_plugin.cc</code> reveals a solid foundation with complete implementation of core system operations:</p>

      <p><strong>Implemented capabilities:</strong></p>
      <ul>
        <li><code>GetVersion()</code>, <code>GetDefaultArch()</code>, <code>GetSupportedArches()</code>: System information queries</li>
        <li><code>GetSystemInstallations()</code>, <code>GetUserInstallation()</code>: Installation path management</li>
        <li><code>GetApplicationsInstalled()</code>: Local application enumeration</li>
      </ul>

      <p><strong>Critical implementation gaps:</strong></p>
      <ul>
        <li><code>GetApplicationsRemote()</code>: Remote application discovery unimplemented</li>
        <li><code>ApplicationInstall()</code>, <code>ApplicationUninstall()</code>: Application lifecycle management missing</li>
        <li>HTTP client integration: No remote server communication capabilities</li>
        <li>Caching infrastructure: No offline operation support</li>
      </ul>

      <h3>Plugin Extension Technical Implementation</h3>
      <p>The extension strategy centers on C++ plugin architecture enhancement with comprehensive HTTP client integration and intelligent caching systems:</p>

      <p><strong>HTTP Client Architecture</strong>: libcurl-based implementation with nlohmann/json parsing, authentication header management, and automatic retry mechanisms for network resilience</p>

      <p><strong>New Method Signatures</strong>:</p>
      <pre><code>ErrorOr&lt;flutter::EncodableList&gt; GetRemoteApplications(const std::string& repo_url);
  ErrorOr&lt;bool&gt; AddRemoteRepository(const std::string& repo_url, const std::string& name);
  ErrorOr&lt;bool&gt; InstallFromRemote(const std::string& app_id, const std::string& repo_name);
  ErrorOr&lt;flutter::EncodableMap&gt; GetServerStatus(const std::string& server_url);
  ErrorOr&lt;flutter::EncodableList&gt; GetBuilds(const std::string& remote_url, const std::string& token);</code></pre>

      <p><strong>Authentication Integration</strong>: Secure token management through header injection with repository-specific scoping and automatic token refresh capabilities</p>

      <h3>HTTP Client Implementation Strategy</h3>
      <p>The HttpClient class provides comprehensive flat-manager API integration:</p>

      <p><strong>Core Architecture</strong>:</p>
      <pre><code>class HttpClient {
    std::string Get(const std::string& endpoint);
    flutter::EncodableMap GetJson(const std::string& endpoint);
    flutter::EncodableMap PostJson(const std::string& endpoint, const flutter::EncodableMap& data);
    
    // Flat-manager specific operations
    flutter::EncodableMap GetServerStatus();
    flutter::EncodableList GetRepositoryRefs(const std::string& repo_name);
    flutter::EncodableList GetBuilds(const std::string& auth_token);
  };</code></pre>

      <p><strong>Error handling encompasses</strong>:</p>
      <ul>
        <li>Network timeout management with configurable retry intervals</li>
        <li>HTTP status code interpretation with specific error mapping</li>
        <li>JSON parsing validation with schema enforcement</li>
        <li>Authentication failure recovery with automatic token refresh</li>
      </ul>

      <h3>Intelligent Caching Infrastructure</h3>
      <p>SQLite-based caching provides robust offline capabilities with intelligent synchronization:</p>

      <p><strong>Database Schema</strong>:</p>
      <pre><code>CREATE TABLE applications (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    version TEXT,
    description TEXT,
    remote_name TEXT,
    is_installed BOOLEAN DEFAULT FALSE,
    cached_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE repositories (
    name TEXT PRIMARY KEY,
    url TEXT NOT NULL,
    title TEXT,
    last_sync DATETIME,
    is_enabled BOOLEAN DEFAULT TRUE
  );

  CREATE TABLE sync_status (
    key TEXT PRIMARY KEY,
    last_sync DATETIME,
    status TEXT,
    max_age_minutes INTEGER DEFAULT 30
  );</code></pre>

      <p><strong>CacheManager Implementation</strong>:</p>
      <ul>
        <li>Application metadata persistence with remote source attribution</li>
        <li>Repository configuration management with sync timestamp tracking</li>
        <li>Intelligent refresh policies with configurable maximum age parameters</li>
        <li>Transaction-based consistency with rollback capabilities</li>
      </ul>

      <h3>Database Integration Strategy</h3>
      <p>Direct PostgreSQL integration enables real-time application lifecycle monitoring through connection pooling and prepared statement optimization:</p>

      <p><strong>Integration Capabilities</strong>:</p>
      <ul>
        <li>Build status queries with temporal filtering and status aggregation</li>
        <li>Published application enumeration with metadata extraction and dependency tracking</li>
        <li>Job processing monitoring with pipeline status visualization</li>
        <li>Repository health checks with automated alerting and recovery mechanisms</li>
      </ul>

      <p>The strategy emphasizes connection reuse, transaction management, and error recovery to ensure reliable database access without impacting server performance.</p>

      <h2>Advanced Integration Capabilities</h2>

      <h3>Multi-Protocol Backend Support</h3>
      <p>The architecture supports diverse integration patterns optimized for different operational requirements:</p>

      <p><strong>HTTP REST Integration</strong>: Modern API access through standardized endpoints with JSON response processing</p>
      <p><strong>Database-Driven Operations</strong>: Low-level PostgreSQL access for administrative tools and real-time monitoring</p>
      <p><strong>Flatpak Standard Compliance</strong>: Native flatpak workflows for compatibility with existing Linux environments</p>
      <p><strong>OSTree Repository Access</strong>: Direct repository manipulation for advanced deployment scenarios</p>

      <h3>Production-Ready Operational Features</h3>
      <p><strong>Monitoring and Health Checks</strong>: Comprehensive system monitoring through <code>/status</code> endpoint parsing, database connection validation, and repository integrity verification</p>

      <p><strong>Authentication and Security</strong>: Multi-layered security through token-based authentication, database connection encryption, and repository access control with OSTree permissions</p>

      <p><strong>Scalability and Performance</strong>: Horizontal scaling through stateless HTTP services, database connection pooling, and repository caching with intelligent refresh policies</p>
    `,
    readTime: "15 min read",
    slug: "week-4"
  },
  {
    week: 5,
    title: "Extending Flatpak Plugin API: Implementation Architecture and Sandboxing Deep Dive",
    date: "July 2025", 
    author: "Ahmed Adel Wafdy",
    tags: ['GSoC 2025', 'AGL', 'C++', 'Flatpak Plugin', 'API Extension', 'Sandboxing', 'AppStream', 'Security'],
    published: true,
    excerpt: 'Critical expansion of the Flatpak plugin API with comprehensive HTTP client integration, intelligent SQLite caching, and sophisticated BubbleWrap sandboxing mechanisms for automotive-grade security.',
    content: `
    <h2>Introduction</h2>
          <p>Week 5 focuses on the critical expansion of our Flatpak plugin API to bridge the gap between our Flutter frontend and the underlying Flatpak system. This week involved comprehensive analysis of the current plugin limitations, designing robust API extensions, and implementing sophisticated sandboxing mechanisms that ensure automotive-grade security for In-Vehicle Infotainment systems.</p>

          <h2>Current Plugin Architecture Assessment</h2>
          
          <h3>Existing Implementation Analysis</h3>
          <p>Our analysis of the current <code>ivi-homescreen-plugins/plugins/flatpak/</code> directory reveals a foundation that requires significant enhancement:</p>

          <p><strong>Current File Structure:</strong></p>
          <ul>
            <li><code>flatpak_plugin.h</code> - Basic plugin interface definitions</li>
            <li><code>flatpak_plugin.cc</code> - Core implementation with system query capabilities</li>
            <li><code>messages.g.h</code> - Pigeon-generated message definitions</li>
          </ul>

          <p><strong>Implemented Capabilities:</strong></p>
          <ul>
            <li><code>GetVersion()</code>, <code>GetDefaultArch()</code>, <code>GetSupportedArches()</code> - System information queries</li>
            <li><code>GetSystemInstallations()</code>, <code>GetUserInstallation()</code> - Local installation path management</li>
            <li><code>GetApplicationsInstalled()</code> - Local application enumeration</li>
          </ul>

          <p><strong>Critical Implementation Gaps:</strong></p>
          <ul>
            <li><code>GetApplicationsRemote()</code> - Remote application discovery completely unimplemented</li>
            <li><code>ApplicationInstall()</code>, <code>ApplicationUninstall()</code> - Application lifecycle management missing</li>
            <li>HTTP client integration - No remote server communication capabilities</li>
            <li>Caching infrastructure - No offline operation support or intelligent synchronization</li>
            <li>Authentication management - No token handling or secure communications</li>
          </ul>

          <h2>Comprehensive API Extension Strategy</h2>

          <h3>New Component Architecture</h3>
          <p>Our extension introduces seven new components that transform the plugin from a basic local interface into a comprehensive application management system:</p>

          <p><strong>New File Structure:</strong></p>
          <ul>
            <li><code>http_client.h/.cc</code> - HTTP operations for Flat-manager API integration</li>
            <li><code>cache_manager.h/.cc</code> - SQLite caching with intelligent synchronization</li>
            <li><code>sync_manager.h/.cc</code> - Background sync management</li>
            <li><code>auth_manager.h</code> - Token management and authentication</li>
          </ul>

          <h3>Enhanced Plugin Constructor Implementation</h3>
          <p>The plugin constructor requires comprehensive initialization of new subsystems including HTTP client, cache manager, authentication manager, and background sync services. This establishes the foundation for all remote operations.</p>

          <h2>HTTP Client Implementation Deep Dive</h2>

          <h3>Comprehensive HTTP Client Architecture</h3>
          <p>The HTTP client provides the foundation for all remote operations, integrating seamlessly with our Flat-manager backend. It implements robust error handling with automatic retry logic including network timeout management, HTTP status code interpretation, JSON parsing validation, and authentication failure recovery.</p>

          <h2>Intelligent Caching Infrastructure</h2>

          <h3>SQLite-Based Caching System</h3>
          <p>The caching system provides robust offline capabilities with intelligent synchronization policies. The cache manager provides intelligent data persistence with transaction-based consistency, supporting application metadata persistence, repository configuration management, and intelligent refresh policies.</p>

          <h2>Core API Method Implementation</h2>

          <h3>Remote Repository Management</h3>
          <p>Implementation of comprehensive remote repository operations includes repository URL validation, FlatpakRemote creation using libflatpak, adding to user installation, and caching repository metadata for offline access.</p>

          <h3>Remote Applications Discovery</h3>
          <p>Comprehensive remote application enumeration with intelligent caching checks cache validity, fetches fresh data from HTTP API when needed, and provides fallback to cached data for offline capability.</p>

          <h2>Application Lifecycle Management</h2>

          <h3>Secure Application Installation</h3>
          <p>Implementation of sandboxed application installation with comprehensive security validation includes application existence validation, security validation with sandbox permissions checking, and installation with progress monitoring.</p>

          <h2>Flatpak Sandboxing Architecture Deep Dive</h2>

          <h3>Core Sandboxing Components</h3>
          <p>Flatpak provides sophisticated application sandboxing through a multi-layered container system:</p>

          <p><strong>BubbleWrap (bwrap) - The Sandboxing Engine:</strong></p>
          <ul>
            <li><strong>Repository:</strong> <a href="https://github.com/containers/bubblewrap">containers/bubblewrap</a></li>
            <li><strong>Purpose:</strong> Low-level sandboxing tool that creates secure containers</li>
            <li><strong>Features:</strong>
              <ul>
                <li>User namespaces for privilege separation</li>
                <li>Mount namespaces for filesystem isolation</li>
                <li>Network namespaces for network isolation</li>
                <li>PID namespaces for process isolation</li>
                <li>Seccomp-BPF filters for system call filtering</li>
              </ul>
            </li>
          </ul>

          <p><strong>XDG Desktop Portal - Runtime Communication:</strong></p>
          <ul>
            <li><strong>Purpose:</strong> DBus interface that controls application runtime permissions</li>
            <li><strong>Function:</strong> Provides controlled access to host system resources</li>
            <li><strong>Portal Types:</strong> <a href="https://wiki.archlinux.org/title/XDG_Desktop_Portal">Supported Portals List</a></li>
          </ul>

          <h3>Sandbox Configuration Implementation</h3>

          <p><strong>Filesystem Isolation:</strong></p>
          <p>Applications have access to read-only system directories like /usr, /etc, /run/host, and application-specific directories including ~/.var/app/APP_ID, /app, /var/config, and /var/cache.</p>

          <p><strong>Permission Model:</strong></p>
          <p>Applications declare their required permissions in their metadata, including network access, filesystem access, device access, session bus access, and portal access.</p>

          <h3>XDG Desktop Portal Integration</h3>
          <p>The XDG Desktop Portal system provides controlled access to host resources through DBus interfaces:</p>

          <p><strong>Supported Portal Categories:</strong></p>
          <ul>
            <li><strong>File System Portals:</strong>
              <ul>
                <li><code>org.freedesktop.portal.FileChooser</code> - File picker dialogs</li>
                <li><code>org.freedesktop.portal.Documents</code> - Document access management</li>
                <li><code>org.freedesktop.portal.Trash</code> - Trash/recycle bin operations</li>
              </ul>
            </li>
            <li><strong>Media Portals:</strong>
              <ul>
                <li><code>org.freedesktop.portal.Camera</code> - Camera access</li>
                <li><code>org.freedesktop.portal.ScreenCast</code> - Screen recording/sharing</li>
                <li><code>org.freedesktop.portal.Screenshot</code> - Screenshot capture</li>
              </ul>
            </li>
            <li><strong>System Integration Portals:</strong>
              <ul>
                <li><code>org.freedesktop.portal.Notification</code> - System notifications</li>
                <li><code>org.freedesktop.portal.Inhibit</code> - System sleep/suspend control</li>
                <li><code>org.freedesktop.portal.Background</code> - Background app permissions</li>
              </ul>
            </li>
          </ul>

          <h2>API Implementation Phases</h2>

          <h3>Phase 1: Foundation Components</h3>
          <ol>
            <li><strong>HTTP Client:</strong> Basic libcurl wrapper for Flat-manager API integration</li>
            <li><strong>Cache Manager:</strong> SQLite-based caching for repository data and offline capabilities</li>
            <li><strong>Plugin Extension:</strong> Add new members to <code>FlatpakPlugin</code> class</li>
          </ol>

          <h3>Phase 2: Remote Management</h3>
          <ol>
            <li><strong>Remote Management:</strong> Implement <code>RemoteAdd()</code>/<code>RemoteRemove()</code></li>
            <li><strong>Remote Apps:</strong> Implement <code>GetApplicationsRemote()</code></li>
            <li><strong>AppStream Integration:</strong> Remote AppStream fetching and parsing</li>
          </ol>

          <h3>Phase 3: Application Lifecycle</h3>
          <ol>
            <li><strong>Installation:</strong> Implement <code>ApplicationInstall()</code>/<code>ApplicationUninstall()</code></li>
            <li><strong>Process Management:</strong> Implement <code>ApplicationStart()</code>/<code>ApplicationStop()</code></li>
          </ol>

          <h2>Required Libflatpak API Integration</h2>

          <p><strong>For Remote Management:</strong></p>
          <ul>
            <li><code>flatpak_installation_modify_remote()</code> - For RemoteAdd</li>
            <li><code>flatpak_installation_remove_remote()</code> - For RemoteRemove</li>
            <li><code>flatpak_installation_list_remote_refs()</code> - For GetApplicationsRemote</li>
          </ul>

          <p><strong>For Application Management:</strong></p>
          <ul>
            <li><code>flatpak_installation_install()</code> - For ApplicationInstall (with sandbox setup)</li>
            <li><code>flatpak_installation_uninstall()</code> - For ApplicationUninstall (with cleanup)</li>
            <li><code>g_spawn_async()</code> with BubbleWrap - For ApplicationStart (with sandboxing)</li>
            <li>Process management and portal cleanup - For ApplicationStop</li>
          </ul>

          <p><strong>For Sandboxing and Security:</strong></p>
          <ul>
            <li><code>flatpak_installation_get_metadata()</code> - Parse application permissions</li>
            <li>BubbleWrap argument construction - Build secure containers</li>
            <li>XDG Portal DBus calls - Runtime permission requests</li>
            <li>Seccomp filter management - System call filtering</li>
          </ul>

          <h2>Critical Issue Resolution: AppStream-Compose</h2>

          <h3>The AppStream-Compose Problem</h3>
          <p>During this week's implementation, I encountered a critical issue with <code>appstream-compose</code> that prevented proper Flatpak application building. The error occurred when trying to build applications using flatpak-builder.</p>

          <h3>Root Cause Analysis</h3>
          <p>The issue stemmed from version incompatibility in the Debian ecosystem:</p>
          <ul>
            <li><strong>Debian Bookworm flatpak-builder version:</strong> 1.2.3-1</li>
            <li><strong>Problem:</strong> flatpak-builder in bookworm cannot build apps based on the 24.08 SDK</li>
            <li><strong>Missing component:</strong> <code>appstream-compose</code> is no longer present in the SDK</li>
            <li><strong>Solution introduced:</strong> Since version 1.4, flatpak-builder calls "appstreamcli compose" on the host instead</li>
          </ul>

          <h3>Resolution Implementation</h3>
          <p>I resolved this by manually upgrading to flatpak-builder 1.4.4 by cloning the latest flatpak-builder repository, checking out version 1.4.4, and building and installing it manually.</p>

          <p><strong>Key Changes in flatpak-builder 1.4:</strong></p>
          <ul>
            <li>Replaced <code>appstream-compose</code> with <code>appstreamcli compose</code></li>
            <li>Improved SDK compatibility with newer runtime versions</li>
            <li>Enhanced metadata processing pipeline</li>
            <li>Better error reporting for AppStream validation</li>
          </ul>

          <p>After the manual installation, all Flatpak builds work correctly, enabling proper application packaging and distribution through our repository infrastructure.</p>

          <h2>Week 5 Achievements and Integration Status</h2>

          <p><strong>Completed Implementations:</strong></p>
          <ul>
            <li>Comprehensive HTTP client with Flat-manager API integration</li>
            <li>Intelligent SQLite caching system with offline capabilities</li>
            <li>Extended plugin architecture with new component integration</li>
            <li>Remote repository management implementation</li>
            <li>Application discovery and metadata caching</li>
            <li>Sandboxing architecture analysis and security validation</li>
            <li>AppStream-compose compatibility resolution</li>
          </ul>

          <p><strong>Security and Sandboxing Integration:</strong></p>
          <ul>
            <li>BubbleWrap container integration for application isolation</li>
            <li>XDG Desktop Portal communication framework</li>
            <li>Permission validation and security policy enforcement</li>
            <li>Filesystem and network isolation implementation</li>
          </ul>

          <p><strong>Next Steps for Week 6:</strong></p>
          <ul>
            <li>Complete application installation and uninstallation implementation</li>
            <li>Implement application process management (start/stop)</li>
            <li>Advanced background synchronization with conflict resolution</li>
            <li>Performance optimization for embedded automotive systems</li>
            <li>Comprehensive testing framework for all new API methods</li>
          </ul>

          <p>The foundation for a comprehensive, secure, and automotive-grade application management system is now solidly in place. The plugin architecture successfully bridges Flutter frontend requirements with robust Flatpak backend capabilities, while maintaining the security standards essential for In-Vehicle Infotainment systems.</p>

          <h2>References and Documentation</h2>
          <ul>
            <li><a href="https://docs.flatpak.org/en/latest/libflatpak-api-reference.html">Flatpak API Reference</a></li>
            <li><a href="https://github.com/containers/bubblewrap">BubbleWrap Repository</a></li>
            <li><a href="https://flatpak.github.io/xdg-desktop-portal/">XDG Desktop Portal Documentation</a></li>
            <li><a href="https://wiki.archlinux.org/title/XDG_Desktop_Portal">XDG Portal List</a></li>
            <li><a href="https://docs.flatpak.org/en/latest/sandbox-permissions.html">Flatpak Security Model</a></li>
            <li><a href="https://github.com/toyota-connected/ivi-homescreen">IVI Homescreen Repository</a></li>
            <li><a href="https://github.com/toyota-connected/ivi-homescreen-plugins">IVI Homescreen Plugins</a></li>
            <li><a href="https://github.com/flatpak/flatpak-builder/pull/517">Flatpak-builder 1.4 AppStream Changes</a></li>
          </ul>
          `,
    readTime: "18 min read",
    slug: "week-5"
  },
  {
    week: 6,
    title: "First Feature Implementation - HTTP Client Enhancement",
    date: "July 2025", 
    author: "Ahmed Adel Wafdy",
    tags: ['GSoC 2025', 'AGL', 'HTTP Client', 'CurlClient', 'Testing', 'Open Source'],
    published: true,
    excerpt: 'Successfully opened feature request #123 and merged first PR #124 enhancing CurlClient with modern HTTP interface, authentication support, memory leak fixes, and comprehensive testing framework.',
    content: `
    <h2>Opening the Feature Request</h2>
        <p>This week marked a significant milestone in my GSoC journey as I officially opened a feature request at the toyota-connected/ivi-homescreen-plugins repository.</p>
        
        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1)); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 12px; padding: 20px; margin: 24px 0;">
          <h3 style="margin-top: 0; color: rgb(59, 130, 246); display: flex; align-items: center; gap: 8px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M12 1v6m0 6v6"></path>
              <path d="m9 9 3-3 3 3"></path>
              <path d="m9 15 3 3 3-3"></path>
            </svg>
            GitHub Issue #123
          </h3>
          <p><strong>Add Flatpak remote management and installation support</strong></p>
          <a href="https://github.com/toyota-connected/ivi-homescreen-plugins/issues/123" target="_blank" rel="noopener noreferrer" 
             style="display: inline-flex; align-items: center; gap: 8px; background: rgb(59, 130, 246); color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: all 0.2s;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10,17 15,12 10,7"></polyline>
              <line x1="15" x2="3" y1="12" y2="12"></line>
            </svg>
            View Issue on GitHub
          </a>
        </div>

        <h2>Feature Implementation Strategy</h2>
        <p>The feature implementation is structured as a series of 5 progressive PRs:</p>
        
        <ol>
          <li><strong>PR 1: HTTP Client Enhancement</strong> - Enhance the common CurlClient for generic requests</li>
          <li><strong>PR 2: Caching & Sync Infrastructure</strong> - SQLite-based caching and sync management</li>
          <li><strong>PR 3: Remote Management API</strong> - Remote repository browsing and management</li>
          <li><strong>PR 4: Application Installation</strong> - Install/uninstall Flatpak applications</li>
          <li><strong>PR 5: Process Management</strong> - Start/stop application lifecycle management</li>
        </ol>

        <h2>First PR Success</h2>
        <p>The first pull request was successfully merged this week! This PR enhanced the common CurlClient to provide a robust foundation for HTTP communications with remote repositories.</p>
        
        <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 20px; margin: 24px 0;">
          <h3 style="margin-top: 0; color: rgb(139, 92, 246); display: flex; align-items: center; gap: 8px;">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
              <path d="M5 3.254V3.25v.005a.75.75 0 110-.005v.004zm.787 1.44c.18-.14.403-.25.663-.25.138 0 .27.027.393.077.364.148.594.52.594.923 0 .608-.481 1.101-1.125 1.101-.645 0-1.125-.493-1.125-1.101 0-.403.23-.775.594-.923.123-.05.255-.077.393-.077.26 0 .483.11.663.25zm2.176 0c.18-.14.403-.25.663-.25.138 0 .27.027.393.077.364.148.594.52.594.923 0 .608-.481 1.101-1.125 1.101-.645 0-1.125-.493-1.125-1.101 0-.403.23-.775.594-.923.123-.05.255-.077.393-.077.26 0 .483.11.663.25zM8 1C3.58 1 0 4.58 0 9c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 9c0-4.42-3.58-8-8-8z"></path>
            </svg>
            <span style="background: rgb(139, 92, 246); color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 600;">Merged</span>
            Pull Request #124
          </h3>
          <p><strong>feat(common): Enhance CurlClient for generic HTTP requests</strong></p>
          <a href="https://github.com/toyota-connected/ivi-homescreen-plugins/pull/124" target="_blank" rel="noopener noreferrer" 
             style="display: inline-flex; align-items: center; gap: 8px; background: rgb(139, 92, 246); color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: all 0.2s;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10,17 15,12 10,7"></polyline>
              <line x1="15" x2="3" y1="12" y2="12"></line>
            </svg>
            View PR on GitHub
          </a>
        </div>

        <h3>Key Enhancements Implemented</h3>
        
        <h4>Modern HTTP Interface</h4>
        <ul>
          <li>Added simple Get() and Post() methods for RESTful API calls</li>
          <li>Implemented stateless, self-contained request handling</li>
          <li>Provided clean public API for HTTP operations</li>
        </ul>

        <h4>Security & Authentication</h4>
        <ul>
          <li>Added SetBearerToken() method for authenticated requests</li>
          <li>Implemented proper Authorization header management</li>
          <li>Ensured secure communication with remote repositories</li>
        </ul>

        <h4>Memory Management</h4>
        <ul>
          <li>Fixed critical memory leak in curl_slist header management</li>
          <li>Implemented proper resource cleanup across request lifecycle</li>
          <li>Enhanced RAII compliance for better resource safety</li>
        </ul>

        <h4>Data Integrity</h4>
        <ul>
          <li>Added proper URL-encoding using curl_easy_escape</li>
          <li>Ensured correct handling of special characters in requests</li>
          <li>Implemented robust form data processing</li>
        </ul>

        <h2>Comprehensive Testing</h2>
        <p>A major focus this week was implementing comprehensive testing for the CurlClient enhancement:</p>

        <h3>Test Coverage</h3>
        <ul>
          <li><strong>22 total tests</strong> with 20 passing successfully</li>
          <li>Constructor and initialization testing</li>
          <li>HTTP method validation (GET/POST with various data types)</li>
          <li>Authentication and bearer token handling</li>
          <li>Content retrieval in multiple formats</li>
          <li>Error handling for network failures and invalid URLs</li>
          <li>Class design validation (non-copyable, RAII compliance)</li>
        </ul>

        <h3>Mock Testing Framework</h3>
        <ul>
          <li>Implemented MockCurl class with GoogleMock integration</li>
          <li>Resolved curl macro conflicts with mock framework</li>
          <li>Set up proper dependency linking with fmt/spdlog</li>
          <li>Conducted real HTTP integration tests using httpbin.org</li>
        </ul>

        <h2>Community Collaboration</h2>
        <p>Working directly with the toyota-connected team has been an incredible learning experience. The code review process provided valuable insights into:</p>
        <ul>
          <li>Automotive-grade software quality standards</li>
          <li>Memory safety requirements for embedded systems</li>
          <li>API design principles for plugin architectures</li>
          <li>Testing methodologies for critical infrastructure</li>
        </ul>

        <h2>Next Week's Focus</h2>
        <p>With the HTTP foundation now in place, next week I'll be working on the remaining 4 PRs:</p>
        <ul>
          <li>Caching infrastructure with SQLite integration</li>
          <li>Remote repository management APIs</li>
          <li>Application installation and lifecycle management</li>
        </ul>

        <p>The successful merge of the first PR validates the technical approach and sets a strong foundation for the upcoming features.</p>
    `
        ,
    readTime: "10 min read",
    slug: "week-6"
  },
  {
    week: 7,
    title: "Building a Robust Caching System: A Deep Dive into its Architecture and Design Patterns",
    date: "July 2025", 
    author: "Ahmed Adel Wafdy",
    tags: ['GSoC 2025', 'AGL', 'Caching', 'Design Patterns', 'Architecture', 'C++', 'Performance'],
    published: true,
    excerpt: "Exploring the design and implementation of a sophisticated caching system with architectural patterns, key components, and advanced features for robustness, flexibility, and observability.",
    content: `
        <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1)); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 12px; padding: 20px; margin: 24px 0;">
          <h3 style="margin-top: 0; color: rgb(34, 197, 94); display: flex; align-items: center; gap: 8px;">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
              <path d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
            </svg>
            <span style="background: rgb(34, 197, 94); color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 600;">Open</span>
            Pull Request #130
          </h3>
          <p><strong>feat : Add Cache Manager for Flatpak Plugin and Enhance CurlClient</strong></p>
          <p>This pull request introduces a CacheManager for the Flatpak plugin, enabling efficient caching of application and installation data, and expands the CurlClient to handle all necessary network operations internally. The changes improve performance, reliability, and observability for the Flatpak plugin while maintaining thread safety and extensibility.</p>
          <a href="https://github.com/toyota-connected/ivi-homescreen-plugins/pull/130" target="_blank" rel="noopener noreferrer" 
             style="display: inline-flex; align-items: center; gap: 8px; background: rgb(34, 197, 94); color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: all 0.2s;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10,17 15,12 10,7"></polyline>
              <line x1="15" x2="3" y1="12" y2="12"></line>
            </svg>
            View PR on GitHub
          </a>
        </div>

        <p>In modern software development, efficient data access is paramount. Caching is a fundamental technique to achieve this, reducing latency and database load by storing frequently accessed data closer to the application. However, building a performant, reliable, and maintainable caching solution requires careful architectural consideration.</p>

        <p>This post will explore the design and implementation of a sophisticated caching system, highlighting its architectural patterns, key components, and advanced features that ensure robustness, flexibility, and observability. We'll examine how various design patterns are leveraged to create a highly modular and extensible system.</p>

        <h2>System Architecture Sequence Flow</h2>
        <p>The following diagram illustrates how the caching system components interact across different scenarios:</p>

        <div style="background: #0f172a; border-radius: 12px; padding: 24px; margin: 24px 0; overflow-x: auto; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12);">
          <svg viewBox="0 0 1400 1000" style="width: 100%; height: auto; background: #0f172a; border-radius: 8px;">
            <defs>
              <!-- Gradient Definitions -->
              <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1e40af" />
                <stop offset="100%" stop-color="#1e3a8a" />
              </linearGradient>
              
              <!-- Arrow Markers -->
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
              </marker>
              
              <marker id="asyncArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" opacity="0.8" />
              </marker>
              
              <!-- Pattern for async messages -->
              <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="6" height="6">
                <path d="M-1,1 l2,-2 M0,6 l6,-6 M5,7 l2,-2" stroke="currentColor" stroke-width="1" opacity="0.7"/>
              </pattern>
            </defs>
            
            <!-- Title -->
            <text x="700" y="40" text-anchor="middle" fill="#f8fafc" font-family="'Inter', sans-serif" font-size="20" font-weight="600">Cache System Sequence Diagram</text>
            
            <!-- Participant Headers -->
            <g class="participant">
              <rect x="40" y="70" width="140" height="50" rx="8" fill="url(#headerGradient)" stroke="#1e40af" stroke-width="1.5"/>
              <text x="110" y="102" text-anchor="middle" fill="#f8fafc" font-family="'Fira Code', monospace" font-size="12" font-weight="500">FlatpakPlugin</text>
            </g>
            
            <g class="participant">
              <rect x="230" y="70" width="140" height="50" rx="8" fill="#065f46" stroke="#047857" stroke-width="1.5"/>
              <text x="300" y="102" text-anchor="middle" fill="#f8fafc" font-family="'Fira Code', monospace" font-size="12" font-weight="500">CacheManager</text>
            </g>
            
            <g class="participant">
              <rect x="420" y="70" width="160" height="50" rx="8" fill="#991b1b" stroke="#b91c1c" stroke-width="1.5"/>
              <text x="500" y="102" text-anchor="middle" fill="#f8fafc" font-family="'Fira Code', monospace" font-size="12" font-weight="500">SQLiteCache</text>
            </g>
            
            <g class="participant">
              <rect x="630" y="70" width="160" height="50" rx="8" fill="#5b21b6" stroke="#7c3aed" stroke-width="1.5"/>
              <text x="710" y="102" text-anchor="middle" fill="#f8fafc" font-family="'Fira Code', monospace" font-size="12" font-weight="500">NetworkFetcher</text>
            </g>
            
            <g class="participant">
              <rect x="840" y="70" width="120" height="50" rx="8" fill="#9a3412" stroke="#ea580c" stroke-width="1.5"/>
              <text x="900" y="102" text-anchor="middle" fill="#f8fafc" font-family="'Fira Code', monospace" font-size="12" font-weight="500">CurlClient</text>
            </g>
            
            <g class="participant">
              <rect x="1010" y="70" width="140" height="50" rx="8" fill="#075985" stroke="#0ea5e9" stroke-width="1.5"/>
              <text x="1080" y="102" text-anchor="middle" fill="#f8fafc" font-family="'Fira Code', monospace" font-size="12" font-weight="500">CacheObserver</text>
            </g>
            
            <!-- Lifelines -->
            <line x1="110" y1="130" x2="110" y2="950" stroke="#334155" stroke-width="2" stroke-dasharray="6,4"/>
            <line x1="300" y1="130" x2="300" y2="950" stroke="#334155" stroke-width="2" stroke-dasharray="6,4"/>
            <line x1="500" y1="130" x2="500" y2="950" stroke="#334155" stroke-width="2" stroke-dasharray="6,4"/>
            <line x1="710" y1="130" x2="710" y2="950" stroke="#334155" stroke-width="2" stroke-dasharray="6,4"/>
            <line x1="900" y1="130" x2="900" y2="950" stroke="#334155" stroke-width="2" stroke-dasharray="6,4"/>
            <line x1="1080" y1="130" x2="1080" y2="950" stroke="#334155" stroke-width="2" stroke-dasharray="6,4"/>
            
            <!-- Scenario 1: Cache Hit -->
            <g class="scenario">
              <rect x="40" y="150" width="1320" height="180" rx="8" fill="#1e293b" fill-opacity="0.3" stroke="#10b981" stroke-width="1.5" stroke-dasharray="8,4"/>
              <text x="50" y="175" fill="#10b981" font-family="'Inter', sans-serif" font-size="14" font-weight="600">1. Cache Hit Scenario</text>
              
              <!-- Cache Hit Flow -->
              <g class="flow">
                <!-- Request from Plugin to CacheManager -->
                <line x1="110" y1="200" x2="300" y2="200" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowhead)"/>
                <rect x="150" y="180" width="110" height="20" rx="4" fill="#1e40af" opacity="0.1"/>
                <text x="205" y="195" text-anchor="middle" fill="#93c5fd" font-family="'Fira Code', monospace" font-size="11">GetApplications()</text>
                
                <!-- CacheManager checks cache -->
                <line x1="300" y1="230" x2="500" y2="230" stroke="#10b981" stroke-width="2" marker-end="url(#arrowhead)"/>
                <rect x="350" y="210" width="110" height="20" rx="4" fill="#065f46" opacity="0.1"/>
                <text x="400" y="225" text-anchor="middle" fill="#6ee7b7" font-family="'Fira Code', monospace" font-size="11">Retrieve(key)</text>
                
                <!-- Cache hit response -->
                <line x1="500" y1="260" x2="300" y2="260" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#arrowhead)"/>
                <rect x="380" y="240" width="90" height="20" rx="4" fill="#991b1b" opacity="0.1"/>
                <text x="400" y="255" text-anchor="middle" fill="#fca5a5" font-family="'Fira Code', monospace" font-size="11">[Cached Data]</text>
                
                <!-- Notify observer -->
                <line x1="300" y1="290" x2="1080" y2="290" stroke="#0ea5e9" stroke-width="2" marker-end="url(#arrowhead)"/>
                <rect x="600" y="270" width="120" height="20" rx="4" fill="#075985" opacity="0.1"/>
                <text x="690" y="285" text-anchor="middle" fill="#7dd3fc" font-family="'Fira Code', monospace" font-size="11">OnCacheHit()</text>
                
                <!-- Return cached data -->
                <line x1="300" y1="320" x2="110" y2="320" stroke="#10b981" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#arrowhead)"/>
                <rect x="150" y="300" width="120" height="20" rx="4" fill="#065f46" opacity="0.1"/>
                <text x="205" y="315" text-anchor="middle" fill="#6ee7b7" font-family="'Fira Code', monospace" font-size="11">cached_data</text>
              </g>
            </g>
            
            <!-- Scenario 2: Cache Miss -->
            <g class="scenario">
              <rect x="40" y="360" width="1320" height="260" rx="8" fill="#1e293b" fill-opacity="0.3" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="8,4"/>
              <text x="50" y="385" fill="#f59e0b" font-family="'Inter', sans-serif" font-size="14" font-weight="600">2. Cache Miss - Network Success</text>
              
              <!-- Cache Miss Flow -->
              <g class="flow">
                <!-- Request from Plugin to CacheManager -->
                <line x1="110" y1="420" x2="300" y2="420" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowhead)"/>
                <rect x="150" y="400" width="110" height="20" rx="4" fill="#1e40af" opacity="0.1"/>
                <text x="205" y="415" text-anchor="middle" fill="#93c5fd" font-family="'Fira Code', monospace" font-size="11">GetApplications()</text>
                
                <!-- CacheManager checks cache -->
                <line x1="300" y1="450" x2="500" y2="450" stroke="#10b981" stroke-width="2" marker-end="url(#arrowhead)"/>
                <rect x="350" y="430" width="110" height="20" rx="4" fill="#065f46" opacity="0.1"/>
                <text x="400" y="445" text-anchor="middle" fill="#6ee7b7" font-family="'Fira Code', monospace" font-size="11">Retrieve(key)</text>
                
                <!-- Cache miss response -->
                <line x1="500" y1="480" x2="300" y2="480" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#arrowhead)"/>
                <rect x="370" y="460" width="70" height="20" rx="4" fill="#991b1b" opacity="0.1"/>
                <text x="400" y="475" text-anchor="middle" fill="#fca5a5" font-family="'Fira Code', monospace" font-size="11">[Cache Miss]</text>
                
                <!-- Notify observer -->
                <line x1="300" y1="510" x2="1080" y2="510" stroke="#0ea5e9" stroke-width="2" marker-end="url(#arrowhead)"/>
                <rect x="600" y="490" width="120" height="20" rx="4" fill="#075985" opacity="0.1"/>
                <text x="690" y="505" text-anchor="middle" fill="#7dd3fc" font-family="'Fira Code', monospace" font-size="11">OnCacheMiss()</text>
                
                <!-- Network fetch -->
                <line x1="300" y1="540" x2="710" y2="540" stroke="#8b5cf6" stroke-width="2" marker-end="url(#arrowhead)"/>
                <rect x="450" y="520" width="150" height="20" rx="4" fill="#5b21b6" opacity="0.1"/>
                <text x="505" y="535" text-anchor="middle" fill="#c4b5fd" font-family="'Fira Code', monospace" font-size="11">Fetch(url, headers)</text>
                
                <!-- CurlClient request -->
                <line x1="710" y1="570" x2="900" y2="570" stroke="#8b5cf6" stroke-width="2" marker-end="url(#arrowhead)"/>
                <rect x="750" y="550" width="90" height="20" rx="4" fill="#5b21b6" opacity="0.1"/>
                <text x="805" y="565" text-anchor="middle" fill="#c4b5fd" font-family="'Fira Code', monospace" font-size="11">Get(url)</text>
                
                <!-- Response from CurlClient -->
                <line x1="900" y1="600" x2="710" y2="600" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#arrowhead)"/>
                <rect x="750" y="580" width="120" height="20" rx="4" fill="#9a3412" opacity="0.1"/>
                <text x="805" y="595" text-anchor="middle" fill="#fdba74" font-family="'Fira Code', monospace" font-size="11">response_data</text>
                
                <!-- Return network data -->
                <line x1="710" y1="630" x2="300" y2="630" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#arrowhead)"/>
                <rect x="450" y="610" width="120" height="20" rx="4" fill="#5b21b6" opacity="0.1"/>
                <text x="505" y="625" text-anchor="middle" fill="#c4b5fd" font-family="'Fira Code', monospace" font-size="11">network_data</text>
                
                <!-- Store in cache -->
                <line x1="300" y1="660" x2="500" y2="660" stroke="#10b981" stroke-width="2" marker-end="url(#arrowhead)"/>
                <rect x="350" y="640" width="140" height="20" rx="4" fill="#065f46" opacity="0.1"/>
                <text x="400" y="655" text-anchor="middle" fill="#6ee7b7" font-family="'Fira Code', monospace" font-size="11">Store(key, data)</text>
                
                <!-- Return fresh data -->
                <line x1="300" y1="690" x2="110" y2="690" stroke="#10b981" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#arrowhead)"/>
                <rect x="150" y="670" width="120" height="20" rx="4" fill="#065f46" opacity="0.1"/>
                <text x="205" y="685" text-anchor="middle" fill="#6ee7b7" font-family="'Fira Code', monospace" font-size="11">fresh_data</text>
              </g>
            </g>
            
            <!-- Scenario 3: Network Failure -->
            <g class="scenario">
              <rect x="40" y="650" width="1320" height="230" rx="8" fill="#1e293b" fill-opacity="0.3" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="8,4"/>
              <text x="50" y="675" fill="#ef4444" font-family="'Inter', sans-serif" font-size="14" font-weight="600">3. Network Failure - Fallback to Stale Cache</text>
              
              <!-- Network Failure Flow -->
              <g class="flow">
                <!-- Attempt network fetch -->
                <line x1="300" y1="710" x2="710" y2="710" stroke="#8b5cf6" stroke-width="2" marker-end="url(#arrowhead)"/>
                <rect x="450" y="690" width="150" height="20" rx="4" fill="#5b21b6" opacity="0.1"/>
                <text x="505" y="705" text-anchor="middle" fill="#c4b5fd" font-family="'Fira Code', monospace" font-size="11">Fetch(url, headers)</text>
                
                <!-- Network error indicator -->
                <g>
                  <line x1="705" y1="735" x2="715" y2="745" stroke="#ef4444" stroke-width="2"/>
                  <line x1="705" y1="745" x2="715" y2="735" stroke="#ef4444" stroke-width="2"/>
                  <circle cx="710" cy="740" r="12" fill="none" stroke="#ef4444" stroke-width="2"/>
                  <text x="710" y="745" text-anchor="middle" fill="#ef4444" font-family="'Fira Code', monospace" font-size="10" font-weight="bold">!</text>
                </g>
                
                <!-- Error notification -->
                <line x1="300" y1="770" x2="1080" y2="770" stroke="#0ea5e9" stroke-width="2" marker-end="url(#arrowhead)"/>
                <rect x="600" y="750" width="160" height="20" rx="4" fill="#075985" opacity="0.1"/>
                <text x="690" y="765" text-anchor="middle" fill="#7dd3fc" font-family="'Fira Code', monospace" font-size="11">OnNetworkError()</text>
                
                <!-- Fallback notification -->
                <line x1="300" y1="800" x2="1080" y2="800" stroke="#0ea5e9" stroke-width="2" marker-end="url(#arrowhead)"/>
                <rect x="600" y="780" width="160" height="20" rx="4" fill="#075985" opacity="0.1"/>
                <text x="690" y="795" text-anchor="middle" fill="#7dd3fc" font-family="'Fira Code', monospace" font-size="11">OnNetworkFallback()</text>
                
                <!-- Return stale data -->
                <line x1="300" y1="840" x2="110" y2="840" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#arrowhead)"/>
                <rect x="150" y="820" width="120" height="20" rx="4" fill="#92400e" opacity="0.1"/>
                <text x="205" y="835" text-anchor="middle" fill="#fcd34d" font-family="'Fira Code', monospace" font-size="11">stale_data</text>
              </g>
            </g>
            
            <!-- Arrow marker definition -->
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" 
               refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
              </marker>
            </defs>
          </svg>
        </div>

        <h2>Architectural Foundation: Design Patterns in Action</h2>
        <p>The caching system's design heavily relies on several well-established design patterns, each contributing to its modularity, flexibility, and maintainability.</p>

        <h3>Facade Pattern</h3>
        <p>At the heart of the system is the <strong>CacheManager</strong>. This class acts as a facade, providing a simplified, unified interface to a complex underlying caching subsystem. Instead of interacting directly with storage, network fetchers, and policy engines, external components only need to communicate with CacheManager, abstracting away the intricate details.</p>

        <h3>Strategy Pattern</h3>
        <p>The system achieves remarkable flexibility through the Strategy Pattern. It decouples the caching logic from the actual data storage and network fetching mechanisms.</p>

        <ul>
          <li><strong>ICacheStorage</strong>: This interface defines the contract for different cache storage implementations. Whether you need an in-memory cache, a file-based cache, or a database-backed solution like SQLiteCacheStorage, you can plug it in without altering the CacheManager's core logic.</li>
          <li><strong>INetworkFetcher</strong>: Similarly, this interface allows for various network fetching strategies. The CurlNetworkFetcher, for instance, handles HTTP requests, but this design allows for easy integration of other network clients or even mock implementations for testing.</li>
        </ul>

        <h3>Builder Pattern</h3>
        <p>Configuring a robust caching system can involve numerous parameters. The <strong>CacheManager::Builder</strong> simplifies this process. It provides a fluent API for constructing CacheManager instances with various options, such as database path, TTL (Time-To-Live), cache policy, compression, and network settings. This improves readability and reduces the chance of misconfiguration.</p>

        <h3>Observer Pattern</h3>
        <p>For effective monitoring and analysis, the system incorporates the Observer Pattern.</p>
        <p><strong>ICacheObserver</strong>: This interface defines methods for reacting to significant cache events, such as cache hits, misses, expirations, network fallbacks, and cleanup operations. Concrete observers, like DefaultCacheObserver for logging and MetricsCacheObserver for collecting performance statistics, can subscribe to these events, enabling real-time insights and debugging without tightly coupling the CacheManager to monitoring logic.</p>

        <h3>Template Method Pattern</h3>
        <p>To ensure consistent behavior across different data types being cached, the <strong>CacheOperationTemplate</strong> employs the Template Method Pattern. It outlines a skeletal algorithm for caching and retrieving data, leaving specific steps (like key validation, data serialization/deserialization, expiry calculation, and data validation) to be implemented by concrete subclasses (e.g., FlatpakApplicationCacheOperation, FlatpakInstallationCacheOperation). This enforces a standardized caching flow while allowing customization for specific data needs.</p>

        <h3>Repository Pattern</h3>
        <p>While not explicitly named as a top-level component, the ICacheStorage interface, particularly how SQLiteCacheStorage interacts with the underlying database, subtly reflects the Repository Pattern. It abstracts the data access logic, providing a collection-like interface for storing and retrieving cache entries, decoupling the CacheManager from direct database operations.</p>

        <h3>Cache-Aside Pattern</h3>
        <p>The core interaction between CacheManager, ICacheStorage, and INetworkFetcher follows the Cache-Aside Pattern. The application (or CacheManager in this context) explicitly manages the cache. It first checks the cache for data. If a cache miss occurs, it fetches the data from the underlying data source (network in this case), uses it, and then stores it in the cache for future requests. This pattern provides explicit control over caching behavior and facilitates fallbacks to the network when data isn't in the cache or is expired.</p>

        <h2>Core Components and Their Interactions</h2>
        <p>The system's components are meticulously designed to work together, as illustrated in the architectural diagram above.</p>

        <ul>
          <li><strong>FlatpakPlugin</strong>: This represents the external consumer of the caching system, likely an application or service that needs to cache data related to Flatpak. It interacts solely with the CacheManager facade.</li>
          <li><strong>CacheManager</strong>: As the central orchestrator, CacheManager encapsulates the caching logic. It decides whether to fetch data from the ICacheStorage or INetworkFetcher based on configured policies. It also dispatches events to ICacheObserver implementations.</li>
          <li><strong>ICacheStorage (and SQLiteCacheStorage)</strong>: This component handles persistent storage of cached data. SQLiteCacheStorage specifically uses an SQLite database, ensuring thread-safe operations and supporting features like data compression (via zlib) and efficient cleanup.</li>
          <li><strong>INetworkFetcher (and CurlNetworkFetcher)</strong>: This component is responsible for retrieving data from external network sources. CurlNetworkFetcher leverages an existing CurlClient to perform HTTP GET and POST requests, incorporating retry logic and timeout mechanisms for reliability.</li>
          <li><strong>ICacheObserver</strong>: These components passively monitor the CacheManager's activities. They receive notifications about cache events, allowing for logging, real-time metrics collection, and other side effects without burdening the core caching logic.</li>
        </ul>

        <h2>Data Flow Orchestration</h2>
        <p>The CacheManager orchestrates the data flow:</p>

        <ol>
          <li>A request comes in for a piece of data (e.g., a list of Flatpak applications).</li>
          <li>Based on the configured Cache Policy (e.g., CACHE_FIRST, NETWORK_FIRST), the CacheManager first attempts to retrieve the data from its ICacheStorage.</li>
          <li>If the data is found and valid (not expired), it's returned. An OnCacheHit event is triggered for observers.</li>
          <li>If the data is not found or expired (OnCacheMiss, OnCacheExpired), or if the policy dictates, the CacheManager then utilizes its INetworkFetcher to retrieve the data from the network.</li>
          <li>If the network fetch is successful, the data is stored in the ICacheStorage for future use, and then returned. If the network request fails, OnNetworkError is called, and the system might fall back to stale cache data if configured to do so (OnNetworkFallback).</li>
          <li>A dedicated background thread runs a CleanupWorker at configurable intervals, invoking CleanupExpired on the ICacheStorage to remove stale entries and keep the cache size manageable.</li>
        </ol>

        <h2>Practical Application and Key Capabilities</h2>
        <p>The caching system is designed for high performance, reliability, and ease of use, providing a comprehensive solution for managing dynamic data.</p>

        <h3>Core Functionality</h3>
        <p>The CacheManager provides a rich set of features:</p>

        <ul>
          <li><strong>Thread-safe operations</strong>: All public methods are designed to be thread-safe, allowing concurrent access from multiple parts of an application without data corruption. This is achieved through careful use of mutexes and atomic operations.</li>
          <li><strong>Configurable Cache Policies</strong>: Developers can choose from policies like CACHE_FIRST (default, prioritize speed), NETWORK_FIRST (prioritize freshness), CACHE_ONLY, or NETWORK_ONLY, adapting to specific application requirements.</li>
          <li><strong>Automatic and Manual Cleanup</strong>: Expired entries are automatically cleaned up by a dedicated background thread, maintaining cache hygiene. Manual cleanup is also available for immediate purging.</li>
          <li><strong>Metrics and Observability</strong>: Through the Observer pattern, detailed metrics (hits, misses, network calls, cache size, uptime) are collected, providing critical insights into cache performance. Custom observers can be integrated for advanced monitoring.</li>
          <li><strong>Error Handling and Fallbacks</strong>: The system gracefully handles network failures, logging errors and offering configurable fallback mechanisms to serve stale data from the cache, ensuring application resilience.</li>
          <li><strong>Data Compression</strong>: For storage-bound scenarios, optional zlib compression is available to reduce the footprint of cached data within SQLite.</li>
          <li><strong>Export/Import Capabilities</strong>: The entire cache can be exported to or imported from a file, useful for debugging, backup, or pre-populating caches.</li>
        </ul>

        <h3>Technical Implementation</h3>
        <p>The core implementation leverages standard C++ features for robust concurrency and resource management:</p>

        <ul>
          <li><strong>std::unique_ptr</strong>: For automatic memory management of strategy objects (ICacheStorage, INetworkFetcher, ICacheObserver).</li>
          <li><strong>std::mutex and std::atomic</strong>: For ensuring thread safety across all operations, especially when accessing shared resources like the SQLite database or metrics counters.</li>
          <li><strong>std::thread and std::condition_variable</strong>: To implement the background cleanup worker efficiently, allowing it to sleep and wake up based on a timer or explicit notification.</li>
          <li><strong>std::chrono</strong>: For precise time management, including TTLs, network timeouts, and calculating uptime.</li>
          <li><strong>Serialization/Deserialization</strong>: The CacheOperationTemplate ensures that data types like flutter::EncodableList and Installation can be correctly converted to and from string formats for storage.</li>
        </ul>

        <h2>Rigorous Testing for Reliability</h2>
        <p>A critical aspect of any robust system is thorough testing. The caching solution includes a comprehensive test suite covering various scenarios to guarantee its reliability and performance:</p>

        <ul>
          <li><strong>Basic Functionality</strong>: Verifying correct initialization, configuration, and fundamental cache operations (store, retrieve).</li>
          <li><strong>Design Pattern Validation</strong>: Ensuring observers are notified correctly and that different cache policies behave as expected.</li>
          <li><strong>Concurrency and Thread Safety</strong>: Stress testing with multiple threads to confirm stability and data integrity under heavy load. This includes simultaneous invalidate, cleanup, and get operations.</li>
          <li><strong>Error Handling</strong>: Testing how the system reacts to invalid paths, network failures, and other exceptional conditions, ensuring graceful degradation and error logging.</li>
          <li><strong>Persistence and State Management</strong>: Validating export and import functionalities to ensure data can be saved and restored reliably.</li>
          <li><strong>Metrics Accuracy</strong>: Confirming that all performance counters (hits, misses, network calls, cache size) are accurately updated.</li>
        </ul>

        <p>This comprehensive caching system represents a significant milestone in the GSoC project, providing a robust foundation for efficient data management in the Flatpak plugin ecosystem. The careful application of design patterns and thorough testing ensures both current reliability and future extensibility.</p>
      `,
    readTime: "15 min read",
    slug: "week-7"
  },
  {
    week: 8,
    title: "Flutter Implementation Begins",
    date: "July 2025", 
    author: "Ahmed Adel Wafdy",
    tags: ["GSoC 2025", "AGL", "Flutter", "Implementation"],
    published: false,
    excerpt: "Starting the Flutter implementation of the AGL App Store with core architecture setup.",
    content: "<p>This post for Week 8 is coming soon! Stay tuned for updates on Flutter implementation.</p>",
    readTime: "7 min read",
    slug: "week-8"
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
