import { createRouter, createWebHistory } from 'vue-router';
import inicio from '../Views/inicioViews.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'inicio',
      component:inicio
  },
  {
    path:'/favoritos',
    name:'favoritos',
    component:()=> import('../Views/favoritosViews.vue')
  }
],
})

export default router
