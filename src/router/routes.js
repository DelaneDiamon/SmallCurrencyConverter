const routes = [
  {
    path: '/',
    component: () => import('pages/SmallCurrencyConverter.vue'),
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
