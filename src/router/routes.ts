import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页'
    },
  }
]
export default routes