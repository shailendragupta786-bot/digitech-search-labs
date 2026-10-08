import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    target: 'es2020',
    cssCodeSplit: true,
  },
  server: {
    port: 3000,
    open: true,
  }
})
