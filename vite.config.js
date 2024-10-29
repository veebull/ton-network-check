import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ton-network-check/', // Добавьте эту строку
  define: {
    global: 'window',
  },
});
