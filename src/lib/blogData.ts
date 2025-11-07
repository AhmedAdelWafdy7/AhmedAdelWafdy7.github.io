// Re-export types and functions from the new blog posts module
export type { BlogPostData } from '@/types/blog';
import { allBlogPosts, getPublishedPosts, getPostBySlug, getPostByWeek } from '@/content/blog';

// For backward compatibility
export const blogPosts = allBlogPosts;

// Helper functions for blog data
export function getAllBlogPosts() {
  return allBlogPosts;
}

export function getPublishedBlogPosts() {
  return getPublishedPosts();
}

export function getBlogPostBySlug(slug: string) {
  return getPostBySlug(slug);
}

export function getBlogPostByWeek(week: number) {
  return getPostByWeek(week);
}

// Generate placeholder posts for remaining weeks (up to 22 total)
export function getAllBlogPostsWithPlaceholders() {
  const allPosts = [...allBlogPosts];
  const maxWeek = Math.max(...allBlogPosts.map(post => post.week), 0);
  
  for (let week = 1; week <= Math.max(22, maxWeek); week++) {
    if (!allPosts.some(post => post.week === week)) {
      allPosts.push({
        week,
        title: `Week ${week} Development Update`,
        date: new Date(2025, 5 + Math.floor((week - 1) / 4), 1 + ((week - 1) * 7) % 28).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        author: "Ahmed Adel Wafdy",
        tags: ["GSoC 2025", "AGL", "In Progress"],
        published: false,
        excerpt: `This post for Week ${week} is coming soon! Stay tuned for updates on my Google Summer of Code journey with the Automotive Grade Linux project.`,
        content: `<p>This post for Week ${week} is coming soon! Check back later for updates on my Google Summer of Code journey with the Automotive Grade Linux project.</p>`,
        readTime: "Coming soon",
        slug: `week-${week}`
      });
    }
  }
  
  return allPosts.sort((a, b) => b.week - a.week);
}
