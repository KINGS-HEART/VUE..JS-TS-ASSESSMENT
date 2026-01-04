<template>
  <slot v-if="!hasError"></slot>
  <div v-else class="p-6 text-center">
    <h2 class="text-xl font-bold text-red-600">Something went wrong</h2>
    <p class="text-gray-600">Check the console for details.</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue'

const hasError = ref(false)

onErrorCaptured(() => {
  hasError.value = true
  return true
})
</script>
