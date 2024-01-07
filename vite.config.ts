import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// 以下为按需导入，自动引入手动导入element plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
//手动导入element plus 时
// import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
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
})
