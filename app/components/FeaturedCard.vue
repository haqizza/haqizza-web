<script setup lang="ts">
import { NuxtImg, NuxtLink } from "#components";

defineProps<{
  title: string,
  description: string,
  path: string,
  displayImageUrl?: string
}>()

</script>

<template>
  <NuxtLink class="p-4 flex flex-row gap-8 items-start border border-blue-500 rounded-xl overflow-hidden" :to="path">
    <NuxtImg :src="displayImageUrl ?? '/logo.png'" alt="Default post picture" class="h-44 w-auto self-center" />
    <div>
      <h1 class="mb-3 text-xl font-medium">{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
  </NuxtLink>
</template>