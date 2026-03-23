import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const galleryImage = z.object({
  image: z.string(),
  caption: z.string().optional(),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().optional().default('Bab'),
    summary: z.string().optional(),
    categories: z.string().optional(),
    thumbnail: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    series: z.string().optional(),
    minutes: z.number().optional(),
  }),
});

const travel = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/travel' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    location: z.string().optional(),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    photos: z.array(z.string()).optional().default([]),
    gallery: z.array(galleryImage).optional(),
    thumbnail: z.string().optional(),
    featured: z.boolean().optional().default(false),
    category: z.string().optional(),
  }),
});

const kitesurf = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/kitesurf' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    location: z.string().optional(),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    gallery: z.array(galleryImage).optional(),
    thumbnail: z.string().optional(),
    featured: z.boolean().optional().default(false),
    category: z.string().optional(),
  }),
});

const videos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/videos' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    youtube_id: z.string(),
    series: z.string().optional(),
    duration: z.string().optional(),
    thumbnail: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    category: z.string().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

const social = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/social' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    location: z.string().optional(),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    gallery: z.array(galleryImage).optional(),
    thumbnail: z.string().optional(),
    featured: z.boolean().optional().default(false),
    category: z.string().optional(),
  }),
});

export const collections = { posts, travel, kitesurf, videos, social };
