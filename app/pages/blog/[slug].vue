<script setup lang="ts">
import { withLeadingSlash } from 'ufo'
import type { Collections } from '@nuxt/content'

const route = useRoute()
const { locale } = useI18n()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))

const { data: page } = await useAsyncData('page-' + route.path,
  async () => {
    // Build collection name based on current locale
    const collection = ('content_' + locale.value) as keyof Collections
    const content = await queryCollection(collection).path(route.path).first()

    // Optional: fallback to default locale if content is missing
    if (!content && locale.value !== 'en') {
      return await queryCollection('content_en').path(route.path).first()
    }

    return content
  }, {
    watch: [locale], // Refetch when locale changes
  }
)

const { data: surround } = await useAsyncData('surrounding-' + route.path,
  async () => {
    const collection = ('content_' + locale.value) as keyof Collections
    const content = await queryCollectionItemSurroundings(collection, route.path)

    return content
  }, {
    watch: [locale], // Refetch when locale changes
  }
)


</script>

<template>
  <div class="max-w-[50%] mx-auto mb-4 text-center text-lg">
    {{ $t('blog.title') }}<br>
    <span class="text-sm text-gray-400">{{ page?.date }}</span>
  </div>
  <main v-if="page" class="max-w-[50%] m-auto">
    <article
      class="
        prose-lg dark:prose-invert
        prose-h1:text-center prose-a:text-blue-400 hover:prose-a:text-blue-600
      "
    >
      <ContentRenderer
        :value="page"
        :prose="true"
        :data="{ tags: page.tags }"
      />
    </article>
    <div class="w-full flex gap-2 items-center">
      <hr class="w-full border-0.5 border-white">
      ⚡
    </div>
    <div class="w-full flex justify-between gap-12">
      <NavigationCard
        v-if="surround?.[0]"
        text="Previous Post"
        :title="surround[0].title"
        :path="surround[0].path"
      />
      <NavigationCard
        v-if="surround?.[1]"
        text="Next Post"
        :title="surround[1].title"
        :path="surround[1].path"
      />
    </div>
  </main>
  <div v-else class="text-center">
    <h1 class="text-2xl font-bold">Page not found</h1>
    <p>This page doesn't exist in {{ $t('language.name') }} language.</p>
  </div>
</template>
