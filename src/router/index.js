import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //hace que se quede en azul el boton en la ventana en la q estas
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component: () => import('../views/PokemonsView.vue')
    },
    {
      path: '/pokemons/:name',
      name: 'poke',
      component: () => import('../views/PokeView.vue')
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: () => import('../views/FavoritosView.vue')
    },
    {/*HAcer que salga un error cuando el cliente escribe una ruta que no existe
    siempre tiene que ir al final */ 
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import('../views/NotFoundView.vue'),
    }
   
  ]
})

export default router
