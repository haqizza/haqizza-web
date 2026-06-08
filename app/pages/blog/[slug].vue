<script setup lang="ts">
import { withLeadingSlash } from 'ufo'
import type { Collections } from '@nuxt/content'

const route = useRoute()
const { locale } = useI18n()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))

const { data: page } = await useAsyncData('page-' + route.path, async () => {
  // Build collection name based on current locale
  const collection = ('content_' + locale.value) as keyof Collections
  const content = await queryCollection(collection).path(route.path).first()

  console.log(content)

  // Optional: fallback to default locale if content is missing
  if (!content && locale.value !== 'en') {
    return await queryCollection('content_en').path(route.path).first()
  }

  return content
}, {
  watch: [locale], // Refetch when locale changes
})
</script>

<template>
  <div class="text-center mb-4">
    <span class="text-lg">{{ $t('blog.title') }}</span>
    
  </div>
  <article v-if="page" class="max-w-3/4 m-auto prose dark:prose-invert prose-h1:text-center">
    <ContentRenderer :value="page" :prose="true" class=""/>
  </article>
  <div v-else class="text-center">
    <h1 class="text-2xl font-bold">Page not found</h1>
    <p>This page doesn't exist in {{ $t('language.name') }} language.</p>
  </div>
</template>
