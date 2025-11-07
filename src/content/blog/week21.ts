import { BlogPostData } from '@/types/blog';

export const week21: BlogPostData = {
  week: 21,
  title: "Week 21: It's Merged! Core Functionality Complete and Yocto Integration Begins",
  date: "October 2025",
  author: "Ahmed Adel Wafdy",
  tags: ['GSoC 2025', 'Toyota Connected', "IVI", "Homescreen", "Flutter", "C++", "libflatpak", "Yocto", "AGL", "sdbus-c++"],
  published: true,
  excerpt: "A major milestone this week: the main pull request is closed! All core features are working, including the fix for complex apps, and the focus now shifts to Yocto integration for AGL.",
  content: `
    <h2>The Big News: The PR is Closed!</h2>
    <p>This was a fantastic week—a major milestone for the project! I’m thrilled to report that the main pull request for the Flatpak plugin is officially <strong>closed and merged</strong>. After all the deep dives and debugging from the past few weeks (especially with Steam), seeing this cross the finish line feels incredible.</p>
    <p>The test suite is fully green, which confirms all our core functionality is stable and working as expected. This includes:</p>
    <ul>
        <li>Running multiple applications simultaneously.</li>
        <li>Installing and uninstalling apps, complete with progress streaming back to the Flutter UI.</li>
        <li>Updating applications, also with full progress streaming.</li>
        <li>Querying the system to get a list of all apps that need to be updated.</li>
    </ul>
    <p>And most importantly, the big one: <strong>complex applications like Steam</strong>, which rely on conditional hardware extensions, now install and launch correctly! This critical fix is confirmed and merged. To support our D-Bus communication cleanly, I also successfully added <code>sdbus-c++</code> as a third-party dependency, which is now part of our build.</p>
    
    <h2>The Next Frontier: Yocto and AGL</h2>
    <p>With the plugin logic complete, my focus is now shifting from pure development to system integration. I’ve successfully built the base <strong>Yocto IVI QEMU image for AGL (Automotive Grade Linux)</strong>.</p>
    <p>The next major task is to write the Yocto recipes needed to package our new Flatpak Appstore plugin and all its dependencies (like <code>libflatpak</code> and <code>sdbus-c++</code>) into the AGL build. This is the work that will actually get our Appstore running on the target embedded system. I've started tracking this integration work over in the <a href="https://github.com/toyota-connected/tcna-packages/pull/58" target="_blank" rel="noopener noreferrer">tcna-packages repository (PR #58)</a>.</p>

    <h2>What's Next: Polishing and Production-Readiness</h2>
    <p>While the main PR is merged, there are still several features and clean-up tasks on my to-do list to make this plugin truly production-ready:</p>
    <ul>
        <li><strong>Repair Functionality:</strong> Add a "repair" function to fix broken installations.</li>
        <li><strong>Cleanup:</strong> Implement a feature to find and uninstall unused refs (old runtimes, etc.) to save disk space on the embedded device.</li>
        <li><strong>App Filtering:</strong> This is a key one. We need to filter apps from the remote (like Flathub) to only show those that are compatible with our embedded IVI system. We don't want to display desktop-only apps that won't work.</li>
        <li><strong>Refactoring:</strong> A bit of code cleanup to improve module separation and long-term maintainability.</li>
    </ul>
    <p>It’s a great feeling to have the core feature set locked in. Now, it's all about integrating it with the Yocto build and polishing the final features.</p>
  `,
  readTime: "7 min read",
  slug: "week-21"
};