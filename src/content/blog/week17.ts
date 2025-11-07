import { BlogPostData } from '@/types/blog';

export const week17: BlogPostData = {
  week: 17,
  title: "Week 17: Navigating Flatpak Permissions and Portal-Based Dialogs",
  date: "September 2025",
  author: "Ahmed Adel Wafdy",
  tags: ['GSoC 2025', 'Toyota Connected', "IVI", "Homescreen", "Flatpak", "Permissions", "Portals", "GTK", "Yocto"],
  published: true,
  excerpt: "This week was a deep dive into the Flatpak security model, replacing insecure dialog methods with XDG Desktop Portals and planning for our Yocto build.",
  content: `
    <p>This week was all about navigating the complexities of Flatpak permissions and ensuring our IVI applications interact securely with the host system. A key focus was replacing insecure dialog methods with XDG Desktop Portals to maintain the integrity of the Flatpak sandbox.</p>

    <h2>Tackling the Flatpak Security Model</h2>
    <p>This week was all about getting permissions right. When dealing with sandboxed applications like Flatpaks, securely asking the user for permissions is critical. My initial exploration involved using tools like <code>Zenity</code> to display dialogs, but I quickly ran into a fundamental security issue.</p>
    <p>The problem is that <strong><code>Zenity</code> runs outside the Flatpak sandbox</strong>. This means it has no context of the application's permissions, effectively bypassing the entire security model we rely on. It's a non-starter for a secure system.</p>

    <h3>The Right Way: XDG Desktop Portals</h3>
    <p>The correct solution is to use XDG Desktop Portals. Portals act as a secure middleman between the sandboxed app and the host system. When an app needs permission, it doesn't pop up a dialog itself. Instead, it makes a request to the portal. The portal's backend implementation (in our case, provided by GNOME/GTK) then renders a native dialog to the user.</p>
    <p>This is all handled through the <code>org.freedesktop.portal.Request</code> D-Bus pattern, which securely manages the user's response and passes it back to the application. This way, the host system remains in full control, and the sandbox is never compromised.</p>

    <h3>Auditing App Permissions</h3>
    <p>While working on this, I also audited the permissions of some existing Flatpak applications. Many of them contain metadata with permissions that are far too permissive for an embedded IVI system, such as:</p>
    <ul>
      <li><code>"devices=all"</code>: Grants unrestricted access to all devices.</li>
      <li><code>"filesystems=host"</code>: Exposes the entire host filesystem to the app.</li>
    </ul>
    <p>Part of my work this week was implementing the logic for starting and stopping applications while keeping these permissions in check, referencing the permissions we have stored in our documentation.</p>

    <h3>Next Steps: Yocto Integration</h3>
    <p>Now that the permission flow is correctly handled by XDG portals and native GTK dialogs, the next critical step is to ensure this functionality is included in our IVI build. This means we need to identify and add the necessary Yocto recipes to our image to package the portal dependencies. This will be a key focus moving forward.</p>
  `,
  readTime: "6 min read",
  slug: "week-17"
};