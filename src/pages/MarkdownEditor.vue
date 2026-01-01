<script setup lang="ts">
import { ref } from "vue";
import { marked } from "marked";

const markdownText = ref("# Hello Markdown!");
const htmlContent = ref("");

const updatePreview = () => {
  htmlContent.value = marked.parse(markdownText.value);
};
</script>

<template>
  <div class="p-6 max-w-2xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">Markdown Editor</h1>
    <textarea
      v-model="markdownText"
      @input="updatePreview"
      class="w-full h-48 p-2 border rounded mb-4"
    ></textarea>
    <div class="prose" v-html="htmlContent"></div>
  </div>
</template>
