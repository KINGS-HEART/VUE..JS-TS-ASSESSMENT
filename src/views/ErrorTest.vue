<template>
  <div>
    This component will throw an error.
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  throw new Error('Intentional error for testing Error Boundaries')
})
</script>
