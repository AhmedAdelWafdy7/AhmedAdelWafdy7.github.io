// This file exports all blog posts in a single array
import { week1 } from './week1';
import { week2 } from './week2';
import { week3 } from './week3';
import { week4 } from './week4';
import { week5 } from './week5';
import { week6 } from './week6';
import { week7 } from './week7';

export const allBlogPosts = [
  week1,
  week2,
  week3,
  week4,
  week5,
  week6,
  week7
];

// Helper function to get all published posts
export function getPublishedPosts() {
  return allBlogPosts.filter(post => post.published);
}

// Helper function to get a post by slug
export function getPostBySlug(slug: string) {
  return allBlogPosts.find(post => post.slug === slug);
}

// Helper function to get a post by week number
export function getPostByWeek(week: number) {
  return allBlogPosts.find(post => post.week === week);
}
