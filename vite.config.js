import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/starsmaid/',
  publicDir: 'my-custom-folder-name' // Defaults to 'public'
});