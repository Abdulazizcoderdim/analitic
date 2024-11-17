import { defineConfig } from 'vite';
import vercel from 'vite-plugin-vercel';

export default defineConfig({
  server: {
    port: import.meta.env.VITE_PUBLIC_PORT,
  },
  plugins: [vercel()],
});
