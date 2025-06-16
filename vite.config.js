// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Look for index.html inside the 'public' folder
  root: 'public',

  // When building, output into ../dist so Netlify can pick it up
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },

  plugins: [react()],

  // Ensure all imports resolve from project root
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
