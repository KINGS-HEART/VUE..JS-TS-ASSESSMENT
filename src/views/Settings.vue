<template>
  <div class="p-6 max-w-xl mx-auto">
    <h2 class="text-2xl font-semibold mb-4">Settings</h2>

    <label class="flex items-center gap-3">
      <input
        type="checkbox"
        v-model="darkMode"
      />
      Enable Dark Mode (UI only)
    </label>

    <p class="text-sm text-gray-500 mt-4">
      This is a UI demo setting. Persist with localStorage if needed.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const darkMode = ref<boolean>(false)
</script>
