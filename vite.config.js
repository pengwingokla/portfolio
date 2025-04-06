import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/port-web/', // repo name
  plugins: [react()],
});