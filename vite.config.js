// FILE: vite.config.js

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import path from 'path'

let outDir = './dist';
let base = '/';
// const env = loadEnv(mode, process.cwd(), '')
// https://vitejs.dev/config/
// @type {import('vite').UserConfig}

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),

    // @quasar/plugin-vite options list:
    // https://github.com/quasarframework/quasar/blob/dev/vite-plugin/index.d.ts
    quasar({
      sassVariables: 'src/quasar-variables.scss'
    })
  ],
  // base,
  // define: {
  //   // __APP_ENV__: JSON.stringify(env),
  // },
  build: {
    outDir,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks: false,
        inlineDynamicImports: true,
        entryFileNames: '[name].[hash].js',   // currently does not work for the legacy bundle
        assetFileNames: '[name].[hash].[ext]', // currently does not work for images
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
  
})
