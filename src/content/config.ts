import { defineCollection, z } from 'astro:content';

const blogs = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Clarive Studio'),
    category: z.enum(['Business Growth', 'Marketing', 'Web Design']),
    image: image().refine((img) => img.width >= 1080, {
      message: 'Cover image must be at least 1080px wide',
    }),
    imageAlt: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    permalink: z.string(),
  }),
});

export const collections = { blogs };