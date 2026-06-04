<script setup>

// interface Props{
//   buttonTitle?: string,
//   buttonTitleClass?: string,
//   dropdownItems?: string[],
//   dropdownItemsClass?: string
// }

const props = defineProps({
  buttonTitle: String,
  buttonTitleClass: String,
  dropdownItems: Array,
  dropdownItemsClass: String
})

const isOpened = ref(false)

const toggleDropdown = () => {
  isOpened.value = isOpened.value ? false : true
}

defineExpose({ toggleDropdown })

</script>

<template>
  <div class="relative" @click="toggleDropdown">
    {{ props.buttonTitle }}
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
        v-if="props.dropdownItems && props.dropdownItems?.length > 0"
        v-for="item in props.dropdownItems"
        :class="props.dropdownItemsClass"
      >
        {{ item }}
      </div>
      <slot v-else></slot>
    </div>
  </div>

</template>