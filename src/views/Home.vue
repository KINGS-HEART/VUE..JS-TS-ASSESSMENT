<template>
  <div class="min-h-screen flex flex-col items-center justify-center text-center p-6">
    <h1 class="text-3xl font-bold mb-4">Markdown Previewer</h1>
    <p class="text-gray-600 mb-6">
      Write Markdown on the left, preview it live on the right.
    </p>
    <router-link
      to="/editor"
      class="px-6 py-3 rounded-2xl bg-black text-white shadow"
    >
      Open Editor
    </router-link>
  </div>
</template>

<script setup lang="ts">
// No script logic needed for this component
</script>
