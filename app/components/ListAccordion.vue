<script setup>

const props = defineProps(['title', 'list'])

const isOpened = ref(false)

const toggleAccordion = () => {
  isOpened.value = isOpened.value ? false : true
}
</script>

<template>
  <div
    class="px-1 py-3 flex items-center text-xl font-medium cursor-pointer hover:bg-cyan-900 rounded-md"
    @click="toggleAccordion"
  >
    {{ title }} <hr class="grow border-1 border-gray-700 mx-4">
  </div>
  <ul v-show="isOpened" class="list-disc ml-8 *:my-2 delay-500">
    <li v-for="value in props.list" v-html="value"></li>
  </ul>
</template>