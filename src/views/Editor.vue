<template>
  <div class="grid grid-cols-1 md:grid-cols-2 h-screen">
    <textarea
      class="p-4 outline-none resize-none border-r"
      v-model="markdown"
    />
    <Preview :content="markdown" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Preview from '@/components/Preview.vue'

const markdown = ref<string>('# Hello Markdown\n\nStart typing...')
</script>
