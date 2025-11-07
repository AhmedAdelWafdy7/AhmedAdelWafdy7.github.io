// This file exports all blog posts in a single array
import { week1 } from './week1';
import { week2 } from './week2';
import { week3 } from './week3';
import { week4 } from './week4';
import { week5 } from './week5';
import { week6 } from './week6';
import { week7 } from './week7';
import { week8 } from './week8';
import { week9 } from './week9';
import { week10 } from './week10';
import { week11 } from './week11';
import { week12 } from './week12';
import { week13 } from './week13';
import { week14 } from './week14';
import { week15 } from './week15';
import { week16 } from './week16';
import { week17 } from './week17';
import { week18 } from './week18';
import { week19 } from './week19';
import { week20 } from './week20';
import {week21} from './week21';
import { week22 } from './week22';

export const allBlogPosts = [
  week1,
  week2,
  week3,
  week4,
  week5,
  week6,
  week7,
  week8,
  week9,
  week10,
  week11,
  week12,
  week13,
  week14,
  week15,
  week16,
  week17,
  week18,
  week19,
  week20,
  week21,
  week22
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
