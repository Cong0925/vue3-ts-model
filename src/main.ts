import { createApp } from 'vue'
import '@/assets/style/style.css'
import App from './App.vue'

// 以下是 完整引入 element plus 时使用
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'


// 引入图标库，如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
app.mount('#app')

// 以下是 完整引入 element plus 时使用
// app.use(ElementPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

