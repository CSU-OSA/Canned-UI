import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  build: {
    outDir: '../../dist/lib-component',
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: 'CannedComponentVue',
      fileName: (format) => `cc-vue.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'vue-router'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [
    vue({ include: [/\.vue$/] }),
    dts(),
  ]
});