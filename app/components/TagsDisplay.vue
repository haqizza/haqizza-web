<script setup lang="ts">

defineProps<{
  tags: Array<String>
}>()
</script>

<template>
  <div>
    <Tag v-for="tag in tags" :text="tag" />
  </div>
</template>