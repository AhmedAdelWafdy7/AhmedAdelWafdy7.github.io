import { BlogPostData } from '@/types/blog';

export const week9: BlogPostData = {
  week: 9,
  title: "Week 9: Overhauling Flatpak with Advanced Caching, Installation APIs, and Remote Management",
  date: "August 2025",
  author: "Ahmed Adel Wafdy",
  tags: ['GSoC 2025', 'Toyota Connected', "IVI", "Homescreen", "Flutter", "Flatpak", "Caching", "Serialization", "API Design", "C++"],
    published: true,
    excerpt: "This week marks a massive leap forward for the Flatpak plugin! I'm thrilled to share details on a huge pull request that introduces application installation/uninstallation, remote repository management, and a completely new caching infrastructure designed for performance and reliability, eliminating race conditions and paving the way for a more robust application ecosystem.",
    content: `
       <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 20px; margin: 24px 0;">
          <h3 style="margin-top: 0; color: rgb(139, 92, 246); display: flex; align-items: center; gap: 8px;">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
              <path d="M5 3.254V3.25v.005a.75.75 0 110-.005v.004zm.787 1.44c.18-.14.403-.25.663-.25.138 0 .27.027.393.077.364.148.594.52.594.923 0 .608-.481 1.101-1.125 1.101-.645 0-1.125-.493-1.125-1.101 0-.403.23-.775.594-.923.123-.05.255-.077.393-.077.26 0 .483.11.663.25zm2.176 0c.18-.14.403-.25.663-.25.138 0 .27.027.393.077.364.148.594.52.594.923 0 .608-.481 1.101-1.125 1.101-.645 0-1.125-.493-1.125-1.101 0-.403.23-.775.594-.923.123-.05.255-.077.393-.077.26 0 .483.11.663.25zM8 1C3.58 1 0 4.58 0 9c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 9c0-4.42-3.58-8-8-8z"></path>
            </svg>
            <span style="background: rgb(139, 92, 246); color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 600;">Merged</span>
            Pull Request #141
          </h3>
          <p style="position:relative;z-index:1;"><strong>Add Application Installation/Uninstallation, Remote management And improve infrastructure for caching (Part of Feature #123)</strong></p>
          <a href="https://github.com/toyota-connected/ivi-homescreen-plugins/pull/141" target="_blank" rel="noopener noreferrer" 
             style="display: inline-flex; align-items: center; gap: 8px; background: rgb(139, 92, 246); color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: all 0.2s; position:relative;z-index:1;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10,17 15,12 10,7"></polyline>
              <line x1="15" x2="3" y1="12" y2="12"></line>
            </svg>
            View PR on GitHub
          </a>
        </div>

        <h2>A Giant Leap for Application Management</h2>
        <p>This week was all about building the core engine for a powerful, reliable, and maintainable Flatpak experience in the IVI Homescreen. The centerpiece of this effort is the massive <strong><a href="https://github.com/toyota-connected/ivi-homescreen-plugins/pull/141" target="_blank" rel="noopener noreferrer" style="color: rgb(139, 92, 246); text-decoration: none; font-weight: 500; border-bottom: 1px solid rgba(139, 92, 246, 0.3);">Pull Request #141</a></strong>. This isn't just an incremental update; it's a foundational overhaul that introduces a suite of critical features for managing applications and their sources.</p>
        
        <h2>Technical Deep Dive: What's Inside the New Flatpak Plugin?</h2>
        <p>This PR is packed with improvements. Let's break down the key architectural enhancements that make this update so significant.</p>

        <div style="background: rgba(59, 130, 246, 0.05); border-left: 4px solid rgb(59, 130, 246); padding: 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
            <h4 style="margin-top: 0; color: rgb(59, 130, 246);">1. All-New Caching Infrastructure</h4>
            <p>Performance and data integrity are paramount. I've engineered a new caching system from the ground up to be incredibly robust. The key achievement here is the complete <strong>avoidance of race conditions</strong>, even under heavy, concurrent testing. This ensures the cache is always in a predictable and stable state.</p>
            <p>Furthermore, a manual, <strong>type-safe serialization layer</strong> (<code>cache_serializers.cc/.h</code>) was developed. This provides:</p>
            <ul>
                <li>Reliable serialization for core Flatpak objects: <code>Application</code>, <code>Installation</code>, and <code>Remote</code>.</li>
                <li>Seamless compatibility with the Flutter frontend via <code>EncodableList</code> support.</li>
            </ul>
        </div>

        <div style="background: rgba(34, 197, 94, 0.05); border-left: 4px solid rgb(34, 197, 94); padding: 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <h4 style="margin-top: 0; color: rgb(34, 197, 94);">2. A Comprehensive Suite of Management APIs</h4>
          <p>To expose this new power, a rich set of APIs has been introduced:</p>
          <ul>
            <li><strong>Installation Management APIs</strong>: The core functionality to install and uninstall applications.</li>
            <li><strong>Remote Repository APIs</strong>: Programmatically add, remove, and manage application sources.</li>
            <li><strong>Application Management & Discovery APIs</strong>: A flexible interface for finding and managing applications.</li>
          </ul>
        </div>
        
        <h3>Smarter, Faster Application Discovery</h3>
        <p>Finding applications is now more flexible and efficient than ever before:</p>
        <ul>
            <li><strong>Priority-Based Remote Search</strong>: The system intelligently searches for applications across a prioritized list of remotes, with automatic fallbacks to major repositories like Flathub, Fedora, and GNOME-Nightly.</li>
            <li><strong>Flexible Application ID Matching</strong>: Support for both full refs (<code>app/org.gnome.Calculator/x86_64/stable</code>) and partial IDs (<code>org.gnome.Calculator</code>) makes searching more user-friendly.</li>
            <li><strong>Optimized Batch Processing</strong>: When dealing with large remote catalogs, the system uses batch processing with an early-exit optimization to ensure the UI remains responsive.</li>
        </ul>
        
        <h2>Ensuring Quality: The Testing Strategy</h2>
        <p>A change of this magnitude requires a rigorous testing strategy. A <strong>comprehensive native test suite</strong> has been built for the new cache manager to validate its logic and guarantee its resilience against race conditions and edge cases. This provides a strong foundation of quality for the entire plugin. Dart-level tests are next on the agenda to ensure end-to-end reliability.</p>

        <div style="
            background: linear-gradient(145deg, 
                rgba(245, 158, 11, 0.08) 0%, 
                rgba(239, 68, 68, 0.08) 25%,
                rgba(168, 85, 247, 0.08) 50%,
                rgba(59, 130, 246, 0.08) 75%,
                rgba(34, 197, 94, 0.08) 100%);
            backdrop-filter: blur(20px);
            border: 2px solid;
            border-image: linear-gradient(135deg, 
                rgba(245, 158, 11, 0.4), 
                rgba(239, 68, 68, 0.4), 
                rgba(168, 85, 247, 0.4),
                rgba(59, 130, 246, 0.4),
                rgba(34, 197, 94, 0.4)) 1;
            border-radius: 20px;
            padding: 32px;
            margin: 24px 0;
            position: relative;
            overflow: hidden;
            box-shadow: 
                0 25px 50px -12px rgba(0, 0, 0, 0.12),
                0 0 0 1px rgba(255, 255, 255, 0.9),
                inset 0 1px 0 rgba(255, 255, 255, 0.9);
        ">
            <h3 style="
              margin-top:0;
              background:linear-gradient(135deg,
                rgb(245,158,11) 0%,
                rgb(239,68,68) 25%,
                rgb(168,85,247) 50%,
                rgb(59,130,246) 75%,
                rgb(34,197,94) 100%);
              -webkit-background-clip:text;
              -webkit-text-fill-color:transparent;
              background-clip:text;
              display:flex;align-items:center;gap:12px;
              font-size:1.5rem;font-weight:800;
              text-shadow:0 2px 4px rgba(0,0,0,0.1);
              position:relative;z-index:1;">
            <div style="
                background:linear-gradient(135deg,rgb(245,158,11),rgb(239,68,68));
                padding:8px;border-radius:12px;display:flex;align-items:center;justify-content:center;
                box-shadow:0 4px 15px rgba(245,158,11,0.3);">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
            </div>
            The Road Ahead: Upcoming Work
          </h3>
            <p style="position:relative; z-index: 1; color: #333;">With this foundational work merged, the path is clear for the next phase of development. Here is what I'm focused on next:</p>
            <ul style="position:relative; z-index: 1; color: #333; list-style-type: '→ '; padding-left: 20px;">
                <li><strong>Add Dart Tests:</strong> Finalizing the testing suite with comprehensive Dart tests in the <a href="https://github.com/meta-flutter/flatpak_flutter/issues/4" target="_blank" rel="noopener noreferrer" style="color: rgb(139, 92, 246);">meta-flutter/flatpak_flutter#4</a> repository.</li>
                <li><strong>Application Lifecycle Methods:</strong> Implementing proper lifecycle methods to handle application updates and state changes gracefully.</li>
                <li><strong>Flutter Progress Stream:</strong> Providing real-time feedback to the user by adding a progress stream for installation and update operations.</li>
            </ul>
        </div>

        <h2>Conclusion: Building a Resilient Future</h2>
        <p>This week's work lays a critical foundation for a production-ready automotive application store. By focusing on a robust, race-condition-free caching model and a comprehensive set of management APIs, we are ensuring the Flatpak plugin is not only feature-rich but also performant, reliable, and maintainable for the long term. I'm incredibly excited to build upon this work in the coming weeks!</p>
      `,
    readTime: "6 min read",
    slug: "week-9"
};