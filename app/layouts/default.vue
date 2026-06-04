<script setup>
import NavBar from '~/components/NavBar.vue';

</script>

<template>
  <div class="min-h-lvh bg-slate-900 text-white">
    <NavBar />
    <div class="p-2 md:p-4  lg:p-12">
      <slot />
    </div>
  </div>
</template>
