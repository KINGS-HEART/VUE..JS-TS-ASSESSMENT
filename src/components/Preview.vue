<template>
  <div class="p-4 overflow-y-auto prose max-w-none" v-html="parsedMarkdown"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { marked } from 'marked'

const props = defineProps<{
  content: string
}>()

const parsedMarkdown = computed(() => {
  return marked(props.content)
})
</script>
