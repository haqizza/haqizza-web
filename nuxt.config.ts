// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss'
  ],
  i18n: {
    locales: [
      { code: 'en', name: 'English', language: 'en-US', file: 'en.json' },
      { code: 'id', name: 'Bahasa Indonesia', language: 'id-ID', file: 'id.json' },
      { code: 'ja', name: '日本語', language: 'ja-JP', file: 'ja.json' },
    ],
    strategy: 'no_prefix',
    defaultLocale: 'en',
  },
  content: {
    build: {
      markdown: {
        toc: {
          depth: 3
        },
        highlight: {
          theme: 'github-dark',
          langs: [
            'c',
            'cpp',
            'python'
          ]
        }
      }
    }
  }

})