<script setup lang="ts"> 


defineProps<{
  buttonTitle?: string,
  buttonTitleClass?: string,
  dropdownItems?: Array<string>,
  dropdownItemsClass?: string
}>()

const isOpened = ref(false)

const toggleDropdown = () => {
  isOpened.value = isOpened.value ? false : true
}

defineExpose({ toggleDropdown })

</script>

<template>
  <div class="relative" @click="toggleDropdown">
    {{ buttonTitle }}
    <slot name="button">

    </slot>
    <div
      v-show="isOpened"
      class="
        absolute left-0 bg-slate-900 *:py-2 *:px-4
        w-full hover:*:bg-slate-700
        hover:*:text-cyan-200
      "
    >
      <div
        v-if="dropdownItems && dropdownItems?.length > 0"
        v-for="item in dropdownItems"
        :class="dropdownItemsClass"
      >
        {{ item }}
      </div>
      <slot v-else></slot>
    </div>
  </div>

</template>