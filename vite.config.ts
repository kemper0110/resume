import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/resume/",
  plugins: [react()],
  build: {
      minify: false,
  },
  ssr: {
    noExternal: "react-icons"
  }
})
