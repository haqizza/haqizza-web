<script setup lang="ts">
import { NuxtImg, NuxtLink } from "#components";

const props = defineProps({
  title: String,
  description: String,
  path: String,
  displayImageUrl: String
})

console.log()
</script>

<template>
  <NuxtLink class="p-4 flex flex-col gap-3 items-start border border-blue-500 rounded-xl overflow-hidden" :to="props.path">
    <NuxtImg :src="props.displayImageUrl || '/logo.png'" alt="Default post picture" class="h-24 w-auto self-center" />
    <h1 class="mb-3 text-xl font-medium">{{ props.title }}</h1>
    <p>{{ props.description }}</p>
  </NuxtLink>
</template>