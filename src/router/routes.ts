import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{
      path: '',
      component: () => import('pages/HomePage.vue')
    }, {
      path: 'ride-search',
      component: () => import('pages/RideSearchPage.vue')
    },
    {
      path: 'search-results',
      component: () => import('pages/RideSearchResultsPage.vue')
    },
    {
      path: 'ride-details',
      component: () => import('pages/RideDetailsPage.vue')
    }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes