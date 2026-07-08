<script setup>
const { locale } = useI18n()

useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'Home page of haqizza web' },
    { property: 'og:title', content: 'Home | haqizza' },
    { property: 'og:description', content: 'Home page of haqizza web' },
  ],
  htmlAttrs: {
    lang: locale.value,
  },
})
</script>

<template>
  <div class="my-12 text-center text-2xl font-bold">
    {{ $t('welcome') }}
    <br>
    <br>
    {{$t('welcome_greeting')}}
  </div>
</template>