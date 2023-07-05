import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base url of the website
  base: '/3D_PORTFOLIO',
  plugins: [react()],
})
