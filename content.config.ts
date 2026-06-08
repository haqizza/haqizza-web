import { defineCollection, defineContentConfig, property, z } from '@nuxt/content'

const postSchema = z.object({
  tags: z.array(z.string()).optional(),
  category: z.string(),
  date: z.date(),
  tagsDisplay: property(z.object({})).inherit('app/components/TagsDisplay.vue'),
  categoryTag: property(z.object({})).inherit('app/components/CategoryTag.vue')
});

export default defineContentConfig({
  collections: {
    content_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/**',
        prefix: '',
      },
      schema: postSchema,
    }),
    content_id: defineCollection({
      type: 'page',
      source: {
        include: 'id/**',
        prefix: '',
      },
      schema: postSchema,
    }),
    content_ja: defineCollection({
      type: 'page',
      source: {
        include: 'ja/**',
        prefix: '',
      },
      schema: postSchema
    }),
  },
})
