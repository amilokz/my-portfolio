import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/personal_portfolio/', // your repo name
  plugins: [react()],
})
