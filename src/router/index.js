import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/rest',
      component: ProductsView
    }
  ],
})

export default router
