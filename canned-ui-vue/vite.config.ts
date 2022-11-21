import Markdown from 'vite-plugin-md';
import dts from 'vite-plugin-dts';
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      packages: resolve(__dirname, './packages'),
    },
  },
  build: {
    outDir: 'dist/docs',
  },
  plugins: [
    vue({include: [/\.vue$/, /\.md$/]}),
    Markdown(),
    dts()
  ]
})
