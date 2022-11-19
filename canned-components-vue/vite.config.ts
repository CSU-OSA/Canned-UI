import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    lib: {
      entry: path.resolve(__dirname,'src/index.ts'),
      name: 'cc-vue',
      fileName: (format) => `cc.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        }
      }
    }
  },
  plugins: [vue()]
})
