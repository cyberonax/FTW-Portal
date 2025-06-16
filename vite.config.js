// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      // Tell Rollup “here’s your HTML entry” and name it `index`
      input: {
        index: path.resolve(__dirname, 'public/index.html')
      }
    }
  }
})
