import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/trailsync-prototype/',
  plugins: [tailwindcss()],
})
