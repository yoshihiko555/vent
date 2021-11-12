import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import lint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [
    vue(),
    lint(),
  ],
  server: {
    host: true,
    watch: {
      usePolling: true,
    }
  },
  resolve: {
    alias: [
      { find: '~', replacement: `${__dirname}/src` }
    ]
  }
})
