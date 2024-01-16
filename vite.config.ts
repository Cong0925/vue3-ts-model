import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// 以下为按需导入，自动引入手动导入element plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ignore from 'rollup-plugin-ignore'
//手动导入element plus 时
// import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [
    ignore(['/src/views/other_pro_bak/**']),
    vue(),
    // ElementPlus({

    // } ),//手动导入element plus 时

    // 以下为按需导入，自动引入手动导入element plus
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    extensions: ['.vue', '.ts'],
    alias: {
      "@": path.resolve(__dirname, "src"),
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8888,
    open: true,
    proxy: {
      '/api': {
        target: 'https://www.fastmock.site/mock/b9536a1dea3fe4daeec18bc365e14a18/api',
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].${new Date().getTime()}.js`,
        chunkFileNames: `assets/[name].${new Date().getTime()}.js`,
        assetFileNames: `assets/[name].${new Date().getTime()}.[ext]`,
        compact: true,
        manualChunks: {
          vue: ['vue', 'vue-router', 'pinia'],
        },
      },
    },
  },
  css: { preprocessorOptions: { css: { charset: false } } },
})
