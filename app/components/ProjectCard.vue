<script setup lang="ts">
import { Icon, NuxtImg, NuxtLink } from "#components";
import { VueElement } from "vue";


defineProps<{
  title: string,
  description: string,
  url: string,
  displayImageUrl: string,
  imageAlt: string
}>()

</script>

<template>
  <div class="flex flex-col gap-6 items-start p-4 border border-blue-500 rounded-2xl overflow-hidden">
    <div class="text-3xl font-bold">
      {{ title }}
    </div>
    <slot name="description"></slot>
    <p v-if="description">{{ description }}</p>
    <div v-if="url" class="flex items-center gap-2">
      <Icon name="mdi:link-variant" size="24"/> Access here:
      <NuxtLink :to="url" external class="underline">{{ url }}</NuxtLink>
    </div>
    <NuxtImg
      v-if="displayImageUrl"
      class="w-full h-auto justify-self-end"
      :src="displayImageUrl"
      :alt="imageAlt"
    />
  </div>
</template>