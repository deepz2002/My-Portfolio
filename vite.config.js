import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages serves the site at https://<user>.github.io/My-Portfolio/
export default defineConfig({
  base: '/My-Portfolio/',
  plugins: [react(), tailwindcss()],
});
