<script setup>
import NavBar from '~/components/NavBar.vue';

</script>

<template>
  <div class="min-h-lvh bg-slate-900 text-white">
    <NavBar />
    <div class="p-2 md:p-4  lg:p-12">
      <slot />
    </div>
    <footer class="my-12 py-4 flex flex-row justify-center items-center text-white border-t border-dashed">
      <hr class="grow border-1 border-gray-700 mx-4">
      <span>by Muhammad Izzatul Haq | Built with Nuxt.</span>
      <hr class="grow border-1 border-gray-700 mx-4">
    </footer>
  </div>
</template>
