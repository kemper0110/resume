import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import image from 'vite-image'


// https://vitejs.dev/config/
export default defineConfig({
  base: "/resume/",
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  plugins: [react({
    babel: {
      plugins: [
        'babel-plugin-macros',
        [
          '@emotion/babel-plugin-jsx-pragmatic',
          {
            export: 'jsx',
            import: '__cssprop',
            module: '@emotion/react',
          },
        ],
        [
          '@babel/plugin-transform-react-jsx',
          { pragma: '__cssprop' },
          'twin.macro',
        ],
      ]
    }
  }), image()],
})
