import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import TermsOfService from '@/views/TermsOfService.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/privacy-policy', name: 'PrivacyPolicy', component: PrivacyPolicy },
  { path: '/terms-of-service', name: 'TermsOfService', component: TermsOfService }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
