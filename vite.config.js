import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/personal_portfolio/',   // correct for GitHub Pages
  plugins: [react()],
})
