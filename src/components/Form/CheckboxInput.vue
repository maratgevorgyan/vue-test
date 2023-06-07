<script setup>
// This component is for future possible refactoring
import { computed } from 'vue'

const props = defineProps({
  rules: {
    type: Array,
    required: false,
    default: () => []
  },
  modelValue: {
    required: false,
    default: null
  },
  asterisk: {
    type: Boolean,
    required: false,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <v-checkbox :rules="props.rules" v-model="value" class="form-checkbox">
    <template #label>
      <span><slot /></span>
      <span v-if="props.asterisk" class="text-error">*</span>
    </template>
  </v-checkbox>
</template>
