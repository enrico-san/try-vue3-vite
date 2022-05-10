import { createRouter, createWebHistory } from 'vue-router'
import Page1 from '@/views/Page1.vue'
import { useCounterStore } from "@/stores/counter"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Page1
    },
    {
      path: '/page2',
      name: 'page2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Page2.vue')
    }
  ]
})

router.beforeEach( (to, from) => {
  const counterStore = useCounterStore()
  counterStore.increment()
})

export default router
