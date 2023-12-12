import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/fcc-25-5-clock/',
  build: {
    outDir: 'docs',
    assetsDir: '',
    // sourcemap: false,
    // minify: true,
  }
})
