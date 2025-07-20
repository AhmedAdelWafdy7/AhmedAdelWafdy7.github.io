import { BlogPostData } from '@/types/blog';

export const week1: BlogPostData = {
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
};
