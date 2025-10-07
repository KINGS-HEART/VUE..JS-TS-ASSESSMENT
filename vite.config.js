import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/', // ✅ Absolute base path (recommended for Netlify)
  build: {
    chunkSizeWarningLimit: 2000, // ⬆️ increase limit to avoid unnecessary warnings
    outDir: 'dist', // ✅ ensure correct output folder
    assetsDir: 'assets', // organize static assets
  },
})
