<script setup>
// This component is for future possible refactoring

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  rules: {
    type: Array,
    required: false,
    default: () => []
  },
  message: {
    type: String,
    required: false,
    default: ''
  }
})
</script>

<template>
  <v-text-field
    class="form-field"
    :label="props.label"
    :rules="rules"
    :messages="message"
  ></v-text-field>
</template>
