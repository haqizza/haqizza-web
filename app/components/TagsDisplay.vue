<script setup lang="ts">

defineProps<{
  tags: Array<String>
}>()
</script>

<template>
  <div>
    <span v-for="tag in tags" class="px-1 py-0.25 mx-1 border border-blue-500 bg-blue-800/50 rounded-md">
      {{ tag }}
    </span>
  </div>
</template>