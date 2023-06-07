<script setup>
import { computed } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    required: false,
    default: null
  }
})

const iconClass = computed(() => {
  if (!props.icon) {
    return null
  }
  return `mdi mdi-${props.icon}`
})
</script>

<template>
  <div class="d-flex">
    <div class="form-row-icon text-grey"><i :class="iconClass"></i></div>
    <div class="flex-1-0 pl-3 ml-3">
      <v-row class="mx-n3 my-0">
        <slot />
      </v-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form-row-icon {
  font-size: 24px;
  padding-top: 10px;
  i {
    display: block;
    width: 24px;
  }
}
</style>
