<script setup>
// This component is for future possible refactoring

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true
  },
  rules: {
    type: Array,
    required: false,
    default: null
  },
  message: {
    type: String,
    required: false,
    default: ''
  }
})
</script>

<template>
  <v-select
    class="form-field"
    :label="props.label"
    :items="props.items"
    :rules="rules"
    :messages="message"
  ></v-select>
</template>
