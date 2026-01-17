import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/components/layout/DefaultLayout.vue'


import HomeView from '@/views/HomeView.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import TermsOfService from '@/views/TermsOfService.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomeView
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('@/views/ContactView.vue')
      },
      {
        path: 'privacy-policy',
        name: 'PrivacyPolicy',
        component: PrivacyPolicy
      },
      {
        path: 'terms-of-service',
        name: 'TermsOfService',
        component: TermsOfService
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

