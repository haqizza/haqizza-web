<script setup lang="ts">

defineProps<{
  text: String
}>()
</script>

<template>
  <span class="px-1 py-0.25 mx-1 border border-blue-500 bg-blue-800/50 rounded-md">
    {{ text }}
  </span>
</template>