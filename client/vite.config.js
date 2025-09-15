import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
   base: "/My_Page/",  // 👈 use your repo name
  plugins: [react()],
  server: { port: 5173 },
  preview: { port: 5173 }
})
