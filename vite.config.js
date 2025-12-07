import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ⚠️ Use relative path instead of '/personal_portfolio/'
  plugins: [react()],
})
