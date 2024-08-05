import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import UsersView from '@/views/UsersView.vue'
import UserFormView from '@/views/UserFormView.vue'
import EditUserFormView from '@/views/EditUserFormView.vue'
import UserDetailsView from '@/views/UserDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
      {
        path: '/',
        name: 'Login',
        component: LoginView
      },
      {
        path: '/usuarios',
        name: 'Lista Usuarios',
        component: UsersView
      },
      {
        path: '/crear',
        name: 'Creando nuevo usuario',
        component: UserFormView
      },
      {
        path: '/editar/:id',
        name: 'Editando usuario',
        component: EditUserFormView
      },
      {
        path: '/detalle/:id',
        name: 'Información del usuario',
        component: UserDetailsView
      },
    ]
})

export default router
