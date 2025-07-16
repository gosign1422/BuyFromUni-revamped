import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/accommodations',
      name: 'accommodations',
      component: () => import('../views/rent/Accommodations.vue')
    },
    {
      path: '/accommodations/:id',
      name: 'accommodation-detail',
      component: () => import('../views/rent/AccommodationDetail.vue')
    },
    {
      path: '/rent/accommodations/product1',
      name: 'accommodation-product1',
      component: () => import('../views/rent/accommodations/product1.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/exchange',
      name: 'exchange',
      component: () => import('../views/Exchange.vue')
    },
    {
      path: '/exchange/:id',
      name: 'exchange-detail',
      component: () => import('../views/Exchange.vue'),
      props: true
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../views/policies/PrivacyPolicy.vue')
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: () => import('../views/policies/TermsOfService.vue')
    },
    {
      path: '/shipping-policy',
      name: 'shipping-policy',
      component: () => import('../views/policies/ShippingPolicy.vue')
    },
    {
      path: '/refund-policy',
      name: 'refund-policy',
      component: () => import('../views/policies/RefundPolicy.vue')
    }
  ],
  // Add scrollBehavior to scroll to top on every route navigation
  scrollBehavior(_to, _from, savedPosition) {
    // If the user is using the browser's back/forward buttons and has a saved position, use that
    if (savedPosition) {
      return savedPosition;
    }
    // Otherwise, scroll to the top of the page
    return { top: 0 };
  }
})

export default router