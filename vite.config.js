import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [ react() ],
  build: {
    // Tell Rollup exactly which HTML to use as the entry:
    rollupOptions: {
      input: path.resolve(__dirname, 'public/index.html'),
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
});
