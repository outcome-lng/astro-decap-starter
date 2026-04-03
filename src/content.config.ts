import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
    hero_heading: z.string().optional(),
    hero_subheading: z.string().optional(),
    hero_image: z.string().optional(),
    hero_button_text: z.string().optional(),
    hero_button_url: z.string().optional(),
  }),
});

export const collections = { pages };
