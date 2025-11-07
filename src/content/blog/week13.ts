import { BlogPostData } from '@/types/blog';

export const week13: BlogPostData = {
  week: 13,
  title: "Week 13: Flutter UI Development & Midterm Demonstration - Rich Metadata Visualization",
  date: "August 2025",
  author: "Ahmed Adel Wafdy",
  tags: ['GSoC 2025', 'Toyota Connected', "IVI", "Homescreen", "Flutter", "UI/UX", "Demo", "AppStream", "Figma", "Categories"],
  published: true,
  excerpt: "This week focused on comprehensive Flutter UI development and creating a compelling midterm demonstration video. The semi-functional interface showcases rich application metadata visualization, intuitive category browsing, and detailed application views based on professional design patterns.",
  content: `
    <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1)); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 12px; padding: 20px; margin: 24px 0;">
      <h3 style="margin-top: 0; color: rgb(34, 197, 94); display: flex; align-items: center; gap: 8px;">
        <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
          <path d="M5 3.254V3.25v.005a.75.75 0 110-.005v.004zm.787 1.44c.18-.14.403-.25.663-.25.138 0 .27.027.393.077.364.148.594.52.594.923 0 .608-.481 1.101-1.125 1.101-.645 0-1.125-.493-1.125-1.101 0-.403.23-.775.594-.923.123-.05.255-.077.393-.077.26 0 .483.11.663.25zm2.176 0c.18-.14.403-.25.663-.25.138 0 .27.027.393.077.364.148.594.52.594.923 0 .608-.481 1.101-1.125 1.101-.645 0-1.125-.493-1.125-1.101 0-.403.23-.775.594-.923.123-.05.255-.077.393-.077.26 0 .483.11.663.25zM8 1C3.58 1 0 4.58 0 9c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 9c0-4.42-3.58-8-8-8z"></path>
        </svg>
        <span style="background: rgb(34, 197, 94); color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 600;">Open</span>
        Pull Request #6
      </h3>
      <p style="position:relative;z-index:1;"><strong>Flutter UI Development with Rich Metadata Integration</strong></p>
      <a href="https://github.com/meta-flutter/flatpak_flutter/pull/6" target="_blank" rel="noopener noreferrer" 
         style="display: inline-flex; align-items: center; gap: 8px; background: rgb(34, 197, 94); color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: all 0.2s; position:relative;z-index:1;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
          <polyline points="10,17 15,12 10,7"></polyline>
          <line x1="15" x2="3" y1="12" y2="12"></line>
        </svg>
        View PR on GitHub
      </a>
    </div>

    <h2>Midterm Demonstration: Showcasing Project Excellence</h2>
    <p>This week culminated in the creation of a comprehensive demonstration video highlighting the significant progress achieved in our Flutter UI development. The midterm presentation showcases a sophisticated, semi-functional interface that effectively demonstrates the power and potential of our application lifecycle management system.</p>

    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(147, 51, 234, 0.1)); border: 1px solid rgba(168, 85, 247, 0.3); border-radius: 12px; padding: 24px; margin: 24px 0; position: relative;">
      <h3 style="margin-top: 0; color: rgb(168, 85, 247); display: flex; align-items: center; gap: 8px;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="23,7 16,12 23,17 23,7"></polygon>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
        </svg>
        Midterm Demonstration Video
      </h3>
      <p style="margin-bottom: 16px;">Experience the comprehensive Flutter UI in action, showcasing rich application metadata and intuitive navigation patterns designed for automotive environments.</p>
      
      <div style="background: rgba(0, 0, 0, 0.8); border-radius: 12px; padding: 4px; margin: 16px 0;">
        <video 
          controls 
          style="width: 100%; height: auto; border-radius: 8px; display: block;"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%23000'/%3E%3Ctext x='400' y='225' text-anchor='middle' fill='%23fff' font-size='24' font-family='Arial'%3ELoading Demo Video...%3C/text%3E%3C/svg%3E"
        >
          <source src="/media/demo.webm" type="video/webm">
          Your browser does not support the video tag.
        </video>
      </div>
      
      <p style="font-size: 14px; color: rgb(100, 116, 139); margin-top: 12px;">
        <strong>Demo Highlights:</strong> Rich application metadata visualization, category-based navigation, detailed application views, and seamless AppStream integration.
      </p>
    </div>

    <h2>Semi-Functional UI: A Foundation for Excellence</h2>
    <p>The demonstration showcases a sophisticated semi-functional user interface that presents the complete application discovery and management experience. This implementation represents a significant milestone in translating our architectural vision into tangible, interactive user experiences.</p>

    <h3>Intuitive Home Screen Experience</h3>
    <p>The home screen serves as the central hub for application discovery, featuring an elegantly organized category system that presents applications with comprehensive metadata extracted from our AppStream integration. This design approach ensures users can quickly identify and explore applications that meet their specific needs.</p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin: 24px 0;">
      <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1)); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 12px; padding: 20px; text-align: center;">
        <div style="background: linear-gradient(135deg, rgb(59, 130, 246), rgb(99, 102, 241)); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9,22 9,12 15,12 15,22"></polyline>
          </svg>
        </div>
        <h4 style="margin: 0 0 8px 0; color: rgb(59, 130, 246); font-weight: 600;">Category Organization</h4>
        <p style="margin: 0; font-size: 14px; color: rgb(100, 116, 139); line-height: 1.4;">Intelligent application grouping with rich metadata display</p>
      </div>
      
      <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1)); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 12px; padding: 20px; text-align: center;">
        <div style="background: linear-gradient(135deg, rgb(34, 197, 94), rgb(16, 185, 129)); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <rect x="9" y="9" width="6" height="6"></rect>
          </svg>
        </div>
        <h4 style="margin: 0 0 8px 0; color: rgb(34, 197, 94); font-weight: 600;">Rich Metadata</h4>
        <p style="margin: 0; font-size: 14px; color: rgb(100, 116, 139); line-height: 1.4;">Comprehensive application information and visual elements</p>
      </div>
      
      <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(251, 191, 36, 0.1)); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 12px; padding: 20px; text-align: center;">
        <div style="background: linear-gradient(135deg, rgb(245, 158, 11), rgb(251, 191, 36)); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </div>
        <h4 style="margin: 0 0 8px 0; color: rgb(245, 158, 11); font-weight: 600;">Discovery Flow</h4>
        <p style="margin: 0; font-size: 14px; color: rgb(100, 116, 139); line-height: 1.4;">Intuitive navigation and application exploration</p>
      </div>
    </div>

    <h3>Comprehensive Application Detail Views</h3>
    <p>The application screen provides detailed information presentation, showcasing the complete spectrum of metadata extracted from our AppStream integration. This comprehensive view enables users to make informed decisions about application installation and usage, crucial for automotive environments where application selection impacts overall system performance and user experience.</p>

    <h2>Professional Design Foundation: Figma Integration</h2>
    <p>The user interface development is grounded in professional design principles, leveraging a comprehensive <strong><a href="https://www.figma.com/design/yFvzFAN6MGC6S1RXWFTVtW/App-Store?node-id=148-376&t=RORNZYycxXu981gK-1" target="_blank" rel="noopener noreferrer" style="color: rgb(168, 85, 247); text-decoration: none; font-weight: 500; border-bottom: 1px solid rgba(168, 85, 247, 0.3);">Figma design system</a></strong> that establishes consistent visual patterns and user experience flows optimized for automotive applications.</p>

    <div style="background: rgba(168, 85, 247, 0.05); border-left: 4px solid rgb(168, 85, 247); padding: 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
      <h4 style="margin-top: 0; color: rgb(168, 85, 247);">Design System Integration</h4>
      <p>The Figma design system provides comprehensive guidelines for component behavior, interaction patterns, and visual hierarchy. This systematic approach ensures consistency across all user interface elements while maintaining the flexibility needed for automotive-specific requirements.</p>
    </div>

    <h3>Automotive-Optimized Interface Patterns</h3>
    <p>The design implementation specifically considers automotive use cases, including large touch targets for in-vehicle interaction, high contrast elements for various lighting conditions, and intuitive navigation patterns that minimize driver distraction while maintaining functionality.</p>

    <h2>Development Roadmap: Future Enhancements</h2>
    <p>While the current implementation demonstrates significant progress, several key enhancements are planned to complete the full application lifecycle management experience:</p>

    <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1)); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 20px; margin: 24px 0;">
      <h3 style="margin-top: 0; color: rgb(139, 92, 246); display: flex; align-items: center; gap: 8px;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 12l2 2 4-4"></path>
          <circle cx="12" cy="12" r="9"></circle>
        </svg>
        Upcoming Development Priorities
      </h3>
      <div style="display: grid; grid-template-columns: 1fr; gap: 12px; margin-top: 16px;">
        <div style="background: rgba(255, 255, 255, 0.8); border: 1px solid rgba(139, 92, 246, 0.2); border-radius: 8px; padding: 16px; display: flex; align-items: center; gap: 12px;">
          <div style="background: rgba(139, 92, 246, 0.2); width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;"></div>
          <div>
            <div style="font-weight: 600; color: rgb(139, 92, 246); margin-bottom: 4px;">Enhanced Category System</div>
            <div style="font-size: 14px; color: rgb(100, 116, 139);">Complete category integration with dynamic filtering and sorting capabilities</div>
          </div>
        </div>
        
        <div style="background: rgba(255, 255, 255, 0.8); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 8px; padding: 16px; display: flex; align-items: center; gap: 12px;">
          <div style="background: rgba(59, 130, 246, 0.2); width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;"></div>
          <div>
            <div style="font-weight: 600; color: rgb(59, 130, 246); margin-bottom: 4px;">Advanced State Management</div>
            <div style="font-size: 14px; color: rgb(100, 116, 139);">Robust state management architecture for complex application interactions</div>
          </div>
        </div>
        
        <div style="background: rgba(255, 255, 255, 0.8); border: 1px solid rgba(34, 197, 94, 0.2); border-radius: 8px; padding: 16px; display: flex; align-items: center; gap: 12px;">
          <div style="background: rgba(34, 197, 94, 0.2); width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;"></div>
          <div>
            <div style="font-weight: 600; color: rgb(34, 197, 94); margin-bottom: 4px;">Intelligent Search Integration</div>
            <div style="font-size: 14px; color: rgb(100, 116, 139);">Comprehensive search functionality across applications and categories from AppStream catalog</div>
          </div>
        </div>
        
        <div style="background: rgba(255, 255, 255, 0.8); border: 1px solid rgba(245, 158, 11, 0.2); border-radius: 8px; padding: 16px; display: flex; align-items: center; gap: 12px;">
          <div style="background: rgba(245, 158, 11, 0.2); width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;"></div>
          <div>
            <div style="font-weight: 600; color: rgb(245, 158, 11); margin-bottom: 4px;">Enhanced UI/UX Implementation</div>
            <div style="font-size: 14px; color: rgb(100, 116, 139);">Refined animations, interactions, and accessibility features for optimal user experience</div>
          </div>
        </div>
      </div>
    </div>

    <h2>Demonstrating Project Maturity</h2>
    <p>The midterm demonstration effectively showcases the project's evolution from conceptual architecture to functional user interface. The semi-functional implementation provides a compelling preview of the complete application lifecycle management system, highlighting both current capabilities and future potential.</p>

    <p>This week's achievements represent a significant milestone in user experience development, transforming complex backend functionality into intuitive, accessible interfaces that automotive users can navigate with confidence and efficiency. The foundation established through this UI development work sets the stage for the comprehensive enhancements planned in the upcoming development phases.</p>
`,
  readTime: "7 min read",
  slug: "week-13"
};