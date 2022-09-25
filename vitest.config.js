import path from 'path'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue2-jsx'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import viteRequireContext from '@originjs/vite-plugin-require-context'

export default defineConfig({
  root: '.', // Define the root
  build: {
    ssr: false,
    transpile: ['element-ui'],
  },
  plugins: [
    vue(),
    viteCommonjs({
      skipPreBuild: true,
      // exclude: ['traitify-widgets', 'html2pdf_js'],
    }),
    viteRequireContext(),
    vueJsx(),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname) }],
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
