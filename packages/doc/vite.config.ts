import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [
    vue(),
    // eslint(),
  ],
  server: {
    host: true,
    watch: {
      usePolling: true,
    }
  },
  resolve: {
    alias: [
      { find: '~/', replacement: './src/' }
    ]
  }
})
