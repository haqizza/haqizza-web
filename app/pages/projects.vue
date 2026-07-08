<script setup>
const { locale } = useI18n()

useHead({
  title: 'Projects',
  meta: [
    { name: 'description', content: 'haqizza\'s projects showcase' },
    { property: 'og:title', content: 'Projects | haqizza' },
    { property: 'og:description', content: 'haqizza\'s projects showcase' },
  ],
  htmlAttrs: {
    lang: locale.value,
  },
})
</script>

<template>
  <div class="my-12 text-center text-2xl font-bold">
    {{ $t('projects.title') }}
  </div>

  <div class="grid grid-cols-2">
    <ProjectCard
      title="Collaborative Problem Solving Web Application (Joint Research of UPI and IPB)"
      url="https://github.com/haqizza/cps-v2"
      displayImageUrl="https://media.licdn.com/dms/image/v2/D5616AQFOxvzbQvIlBQ/profile-displaybackgroundimage-shrink_200_800/B56Zwys9m1IcAU-/0/1770377187242?e=1782345600&v=beta&t=aItIxFapp7__D8s79fa05RRxbYIPk_OqRKd7CxQnp0w"
      imageAlt="CPS Web sample image"
    >
      <template #description>
        <p>
          The project is to create a web application to test some unique questions for Collaborative Problem-Solving type questions for middle-high school and high school, and it is automatically graded a student's cognitive and collaborative ability based on Natural Language Processing.
        </p>
        <p>I am currently working on it again</p>
      </template>
    </ProjectCard>
  </div>
</template>