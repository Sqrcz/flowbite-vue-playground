import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: DashboardView,
      children: [
        {
          path: 'child',
          name: 'DashboardChild',
          component: () => import('../views/DashboardChildView.vue'),
          meta: {
            requiresAuth: false,
            layout: 'AuthLayout',
          },
        },
      ],
    },
    {
      path: '/playground',
      name: 'Playground',
      component: () => import('../views/PlaygroundView.vue'),
    },
  ],
  linkActiveClass: 'link-active',
})

export default router
