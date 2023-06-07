<script setup>
import HeaderLayout from '@/layouts/HeaderLayout.vue'
</script>

<template>
  <v-layout>
    <header-layout />
    <v-main>
      <slot />
    </v-main>
  </v-layout>
</template>
