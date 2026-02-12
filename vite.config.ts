import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensures assets use relative paths, essential for GitHub Pages custom domains or subpaths
  base: './', 
})