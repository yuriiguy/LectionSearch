import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },

  plugins: [vue()],

  build: {
    sourcemap: true,
    emptyOutDir: true,
    outDir: '../frontend-dist',
    target: ['es2020', 'chrome106', 'edge106', 'firefox104', 'safari15'],
    chunkSizeWarningLimit: '2000k'
  }
});
