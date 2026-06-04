<script setup lang="ts">
import { Icon, NuxtImg, NuxtLink } from "#components";
import { VueElement } from "vue";


const props = defineProps({
  title: String,
  description: String,
  url: String,
  displayImageUrl: String,
  imageAlt: String
})

console.log(props.description == undefined)

</script>

<template>
  <div class="flex flex-col gap-6 items-start p-4 border border-blue-500 rounded-2xl overflow-hidden">
    <div class="text-3xl font-bold">
      {{ props.title }}
    </div>
    <slot name="description"></slot>
    <p v-if="props.description">{{ props.description }}</p>
    <div v-if="props.url" class="flex items-center gap-2">
      <Icon name="mdi:link-variant" size="24"/> Access here:
      <NuxtLink :to="props.url" external class="underline">{{ props.url }}</NuxtLink>
    </div>
    <NuxtImg
      v-if="props.displayImageUrl"
      class="w-full h-auto justify-self-end"
      :src="props.displayImageUrl"
      :alt="props.imageAlt"
    />
  </div>
</template>