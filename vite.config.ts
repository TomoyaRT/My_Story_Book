import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: '../public', // rewrite public folder path
  root: 'src', // Project root directory (where index.html is located)
  base: 'My_Story_Book', // Base public path when served in development or production.
  server: {
    port: 3000
  },
  preview: {
    port: 3001
  },
  resolve: {
    alias: { // configuring resolve to alias for src folder path
      '@': path.resolve(__dirname, './src'),
    },
  },
})
