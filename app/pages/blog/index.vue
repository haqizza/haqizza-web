<script setup lang="ts">
import type { Collections } from '@nuxt/content'
const route = useRoute()

const { locale } = useI18n()

useHead({
  title: 'Blog',
  meta: [
    { name: 'description', content: 'Main page of blog in haqizza web' },
    { property: 'og:title', content: 'Blog | haqizza' },
    { property: 'og:description', content: 'Main page of blog in haqizza web' },
  ],
  htmlAttrs: {
    lang: locale.value,
  },
})

const { data: posts } = await useAsyncData(route.path,
  async () => {
    const collection = ('content_' + locale.value) as keyof Collections
    const content = await queryCollection(collection)
      .limit(15)
      .all()

    return content
  }, {
    watch: [locale], // Refetch when locale changes
  }
)

const { data: featuredPost } = await useAsyncData(route.path + - 'featured',
  async () => {
    const collection = ('content_' + locale.value) as keyof Collections
    const content = await queryCollection(collection)
      .where('featured', '=', true)
      .first()

    return content
  }, {
    watch: [locale], // Refetch when locale changes
  }
)

</script>

<template>
  <main class="max-w-[70%] mx-auto">
    <div class="my-12 text-center text-2xl font-bold">
      {{ $t('blog.title') }}
    </div>
  
    <div v-if="featuredPost" id="Featured" class="mb-12">
      <FeaturedCard
        :title="featuredPost.title"
        :description="featuredPost.description"
        :path="featuredPost.path"
      />
    </div>
  
    <div class="grid grid-cols-3 gap-4">
      <PostCard
        v-for="post in posts"
        :key="post.path"
        :title="post.title"
        :description="post.description"
        :path="post.path"
      />
    </div>
  </main  >
</template>