<script setup lang="ts">
import { NuxtImg, NuxtLink } from "#components";

const props = defineProps({
  title: String,
  text: String,
  path: String,
})

</script>

<template>
  <div>
    <div class="mb-2 font-bold text-gray-400">{{ props.text }}</div>
    <NuxtLink
      class="
        p-4 flex flex-row gap-4 items-center
        border border-blue-500 rounded-xl
      "
      :to="props.path"
      >
      <NuxtImg
        src="/logo.png"
        alt="Default post picture"
        class="h-12 w-auto self-center"
      />
      <h1 class="text-xl font-medium">{{ props.title }}</h1>
    </NuxtLink>
  </div>
</template>