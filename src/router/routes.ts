import type { RouteRecordRaw } from 'vue-router'
import RootLayout from '@/components/layout/RootLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'RootLayout',
    component: RootLayout,
    children: [
      {
        path: '/',
        component: () => import('@/pages/main/Index.vue'),
        name: 'main',
        meta: {
          title: 'main page title',
        },
      },
      {
        path: '/js-binary',
        name: 'js-binary',
        component: () => import('@/pages/js-binary/Index.vue'),
        meta: {
          title: 'binary in js',
          homeList: true,
        },
      },
    ],
  },
]

export default routes
