import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/QueNeu/',   // 👈 اسم الريبو بالظبط
  plugins: [react()],
})
