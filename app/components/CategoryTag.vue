<script setup lang="ts">

const props = defineProps({
  category: String
})
</script>

<template>
  <span class="px-1 py-0.25 mx-1 border border-green-500 bg-green-800/50 rounded-md capitalize">
    {{ props.category }}
  </span>
</template>