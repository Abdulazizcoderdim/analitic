import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Build natijasi uchun papka
  },
  server: {
    port: 3000, // Lokal server porti
  },
});
