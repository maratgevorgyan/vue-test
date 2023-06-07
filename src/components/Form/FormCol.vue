<script setup>
import { computed } from 'vue'

const props = defineProps({
  fullSize: {
    type: Boolean,
    required: false,
    default: false
  }
})

const mdSize = computed(() => {
  return props.fullSize ? 12 : 6
})
</script>

<template>
  <v-col cols="12" :md="mdSize" class="px-3 py-1">
    <slot />
  </v-col>
</template>
