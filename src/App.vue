<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow p-4 flex space-x-4">
      <RouterLink to="/" class="text-blue-600 hover:underline">Home</RouterLink>
      <RouterLink to="/editor" class="text-blue-600 hover:underline">Markdown Editor</RouterLink>
    </nav>

    <main class="p-6">
      <RouterView />
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: system-ui, sans-serif;
}
</style>
