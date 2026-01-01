<script setup lang="ts">
import { ref, computed } from "vue"
import { marked } from "marked"

const text = ref(`# Hello Markdown 

Type **Markdown** here and see it live!

- Vue 3
- TypeScript
- Vite
`)

const html = computed(() => marked.parse(text.value))
</script>

<template>
  <div class="grid md:grid-cols-2 gap-4">
    <!-- Editor -->
    <textarea
      v-model="text"
      class="w-full h-64 p-4 border rounded font-mono"
    />

    <!-- Preview -->
    <div
      class="prose max-w-none border rounded p-4 bg-white"
      v-html="html"
    />
  </div>
</template>
