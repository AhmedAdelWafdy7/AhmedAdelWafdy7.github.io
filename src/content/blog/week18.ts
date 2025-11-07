import { BlogPostData } from '@/types/blog';

export const week18: BlogPostData = {
  week: 18,
  title: "Week 18: Optimizing Application Launching with XDG Desktop Portals and Enhancing User Experience",
  date: "October 2025",
  author: "Ahmed Adel Wafdy",
  tags: ['GSoC 2025', 'Toyota Connected', "IVI", "Homescreen", "Flutter", "UI/UX", "C++", "D-Bus", "Figma", "Portals"],
  published: true,
  excerpt: "This week focused on optimizing application launching using XDG Desktop Portals and enhancing user experience through improved UI/UX design, including a plan to refactor D-Bus handling and permissions.",
  content: `
    <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1)); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 12px; padding: 20px; margin: 24px 0;">
      <h3 style="margin-top: 0; color: rgb(34, 197, 94); display: flex; align-items: center; gap: 8px;">
        <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
          <path d="M5 3.254V3.25v.005a.75.75 0 110-.005v.004zm.787 1.44c.18-.14.403-.25.663-.25.138 0 .27.027.393.077.364.148.594.52.594.923 0 .608-.481 1.101-1.125 1.101-.645 0-1.125-.493-1.125-1.101 0-.403.23-.775.594-.923.123-.05.255-.077.393-.077.26 0 .483.11.663.25zm2.176 0c.18-.14.403-.25.663-.25.138 0 .27.027.393.077.364.148.594.52.594.923 0 .608-.481 1.101-1.125 1.101-.645 0-1.125-.493-1.125-1.101 0-.403.23-.775.594-.923.123-.05.255-.077.393-.077.26 0 .483.11.663.25zM8 1C3.58 1 0 4.58 0 9c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 9c0-4.42-3.58-8-8-8z"></path>
        </svg>
        <span style="background: rgb(34, 197, 94); color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 600;">Pending</span>
        Pull Request: Application Lifecycle
      </h3>
      <p style="position:relative;z-index:1;"><strong>Enhancing Application Lifecycle for Flatpak Apps</strong></p>
      <a href="https://github.com/toyota-connected/ivi-homescreen-plugins/pull/6" target="_blank" rel="noopener noreferrer" 
         style="display: inline-flex; align-items: center; gap: 8px; background: rgb(34, 197, 94); color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: 500; transition: all 0.2s; position:relative;z-index:1;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
          <polyline points="10,17 15,12 10,7"></polyline>
          <line x1="15" x2="3" y1="12" y2="12"></line>
        </svg>
        View Pending PR on GitHub
      </a>
    </div>

    <h2>Revamping the Core: My Plan for Flatpak App Lifecycle</h2>
    <p>This week, I've been focused on enhancing the application lifecycle for Flatpak apps to make our system more robust and efficient. I have a few key changes planned that I'm excited to share.</p>

    <h3>1. Upgrading to sdbus-cpp</h3>
    <p>First, I'm replacing our <code>GDBus</code> implementation with <code>sdbus-cpp</code>. The goal here is to modernize our D-Bus communication layer. While it provides the same functionality, <code>sdbus-cpp</code> offers a much cleaner, more intuitive C++ API. This will improve code maintainability without disrupting the existing workflow. I've been referencing <a href="https://github.com/jwinarske/sdbus-cpp-examples" target="_blank" rel="noopener noreferrer">jwinarske's sdbus-cpp-examples</a>, which has been a fantastic resource.</p>

    <h3>2. Removing the GTK Dependency</h3>
    <p>The second major change is to decouple our C++ backend from GTK by replacing the GTK permission dialog with a Flutter <code>EventChannel</code>. This is a big step towards a cleaner architecture. The new flow will work like this:</p>
    <ul>
        <li>The C++ backend will emit an event whenever permission is needed.</li>
        <li>The Dart front-end will listen for this event and display a dialog.</li>
        <li>The user's response (allow/deny) will be sent back to the C++ side through the channel.</li>
    </ul>

    <h3>3. Native Flutter Permission Dialogs</h3>
    <p>To complete this new flow, I'll be building the permission dialog UI directly in Flutter. We can use native widgets like <code>AlertDialog</code> or create a fully custom widget that aligns perfectly with our app's design system. This gives us more control over the user experience and ensures a seamless look and feel.</p>

    <h2>Proposed Architecture for D-Bus Management</h2>
    <p>To tie all this together, I've designed a new architecture to manage our D-Bus interactions cleanly. The core of this design is a component called the <code>InterfaceAccessManager</code>, which will act as a central entry point—a façade—for all D-Bus operations.</p>
    <p>This manager is responsible for orchestrating several key components. It owns a <code>BusConnectionPool</code> to handle connections to both the session and system buses. For efficiency, it also manages a <code>SharedProxyPool</code>, which uses the Flyweight design pattern to reuse D-Bus proxy objects across multiple applications instead of creating new ones every time. For handling signals, a <code>SignalMultiplexer</code> prevents redundant work by ensuring we only have one subscription per signal, broadcasting it internally to any part of the system that's listening. Finally, the manager tracks all application-specific resources using a map that links each app's ID to its own <code>AppContext</code>, ensuring every app's state is neatly contained.</p>
    
    <h4>Interaction Flow:</h4>
    <ol>
        <li>An app registers, which creates an <code>AppContext</code> with its own dedicated processing strand.</li>
        <li>When the app calls a method, it gets a shared proxy from the pool, preventing resource duplication.</li>
        <li>If the app subscribes to a signal, the multiplexer ensures we only have one subscription per signal.</li>
        <li>When the app unregisters, the <code>AppContext</code> handles all the cleanup automatically.</li>
    </ol>
  `,
  readTime: "7 min read",
  slug: "week-18"
};