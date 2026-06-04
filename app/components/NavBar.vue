<script setup>
import { NuxtLink, NuxtImg } from '#components';
import Dropdown from './Dropdown.vue';

const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

const dropdownRef = ref()

const changeLanguage = (languageCode) => {
  if(languageCode != locale.value) {
    setLocale(languageCode)
    dropdownRef.toggleDropdown()
  }
}

</script>

<template>
  <div class="py-2 width-full flex flex-row justify-between">
    <div class="mx-4 flex flex-row gap-8 items-center">
      <NuxtLink to="/" class="px-6">
        <NuxtImg class="w-12" src="/logo.png" alt="Tatsuya logo"></NuxtImg>
      </NuxtLink>
      <div class="mx-4 flex flex-row gap-4 items-center">
        <NuxtLink to="https://github.com/haqizza/" external class="flex flex-col justify-center">
          <Icon name="mdi:github" size="1.35em" class="text-white hover:text-cyan-200" />
        </NuxtLink>
        <NuxtLink to="https://x.com/haqizza_" external class="flex flex-col justify-center">
          <Icon name="simple-icons:x" size="1.25em" class="text-white hover:text-cyan-200" />
        </NuxtLink>
        <NuxtLink to="https://www.instagram.com/haqizza/" external class="flex flex-col justify-center">
          <Icon name="mdi:instagram" size="1.35em" class="text-white hover:text-cyan-200" />
        </NuxtLink>
        <NuxtLink to="mailto:haqizza@gmail.com" external class="flex flex-col justify-center">
          <Icon name="mdi:email" size="1.35em" class="text-white hover:text-cyan-200" />
        </NuxtLink>
      </div>
    </div>
    <div class="mx-4 flex flex-row gap-4 items-center">
      <NuxtLink
        class="px-4 py-2 hover:bg-white/10 text-white rounded-md "
        to="/"
      >
        Home
      </NuxtLink>
      <NuxtLink
        class="px-4 py-2 hover:bg-white/10 text-white rounded-md "
        to="/about"
      >
        About
      </NuxtLink>
      <NuxtLink
        class="px-4 py-2 hover:bg-white/10 text-white rounded-md "
        to="/projects"
      >
        Projects
      </NuxtLink>
      <NuxtLink
        class="px-4 py-2 hover:bg-white/10 text-white rounded-md "
        to="/blog"
      >
        Blog
      </NuxtLink>
      <Dropdown ref="dropdownRef">
        <template v-slot:button>
          <div
            class="px-4 py-2 flex items-center gap-2 hover:text-cyan-200 cursor-pointer border border-white/75 rounded-md">
            <Icon name="mdi:web" size="1.25em"/>
            <span class="">{{ $t('language.name') }}</span>
          </div>
        </template>
        <div
          v-for="locale in availableLocales"
          :key="locale.code"
          class="cursor-pointer"
          @click="() => changeLanguage(locale.code)"
        >
          {{ locale.name }}
        </div>
      </Dropdown>
    </div>
  </div>
</template>