import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages serves the site at https://<user>.github.io/My-Portfolio/
export default defineConfig({
  base: '/My-Portfolio/',
  plugins: [react(), tailwindcss()],
  build: {
    rolldownOptions: {
      // two pages: the portfolio and the capability deck (/My-Portfolio/deck/)
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        deck: resolve(import.meta.dirname, 'deck/index.html'),
      },
    },
  },
});
