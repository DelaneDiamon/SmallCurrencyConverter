
const routes = [
  {
    path: '/',
    component: () => import('pages/SmallCurrencyConverter.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
