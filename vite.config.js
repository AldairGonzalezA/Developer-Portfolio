import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  preview: {
    host: true,
    allowedHosts: ['developer-portfolio-1-k82w.onrender.com']
  }
})
