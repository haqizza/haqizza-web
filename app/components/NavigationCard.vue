<script setup lang="ts">
import { NuxtImg, NuxtLink } from "#components";

defineProps<{
  title: String,
  text: String,
  path: String,
}>()

</script>

<template>
  <div>
    <div class="mb-2 font-bold text-gray-400">{{ text }}</div>
    <NuxtLink
      class="
        p-4 flex flex-row gap-4 items-center
        border border-blue-500 rounded-xl
      "
      :to="path"
      >
      <NuxtImg
        src="/logo.png"
        alt="Default post picture"
        class="h-12 w-auto self-center"
      />
      <h1 class="text-xl font-medium">{{ title }}</h1>
    </NuxtLink>
  </div>
</template>