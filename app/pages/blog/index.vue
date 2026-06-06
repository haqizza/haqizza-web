<script setup lang="ts">
import type { Collections } from '@nuxt/content'
const route = useRoute()

const { locale } = useI18n()

const { data: posts } = await useAsyncData(route.path, async () => {
  const collection = ('content_' + locale.value) as keyof Collections
  const content = await queryCollection(collection)
    .limit(15)
    .all()

  return content
}, {
  watch: [locale], // Refetch when locale changes
})

</script>

<template>
  <div class="my-12 text-center text-2xl font-bold">
    {{ $t('blog.title') }}
  </div>

  <div id="Featured">

  </div>

  <div class="px-12 grid grid-cols-3">
    <PostCard
      v-for="post in posts"
      :key="post.path"
      :title="post.title"
      :description="post.description"
      :path="post.path"
    />
  </div>
</template>