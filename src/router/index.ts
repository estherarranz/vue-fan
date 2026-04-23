import { createRouter, createWebHashHistory } from "vue-router";
import Domus from "../paginae/domus/Domus.vue";
import Batman from "../paginae/batman/Batman.vue";
import Primus from "../paginae/simpsons/Primus.vue";
import Responsum from "../paginae/responsum/Responsum.vue";
import Layout from "@/paginae/simpsons/Layout.vue";
import Circa from "@/paginae/simpsons/Circa.vue";
import Collectione from "@/paginae/simpsons/Collectione.vue";
import Characters from "@/paginae/simpsons/Characters.vue";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Domus
    },
    {
      path: '/batman',
      name: 'batman',
      component: Batman
    },
    {
      path: '/',
      name: 'home',
      component: Domus
    },
    {
      path: '/simpsons',
      children: [
        {
          path:'',
          name: 'simpsons',
          component: Primus,
        },

        {
          path:'about', 
          component: Layout,
          children: [
            {
              path:'', //#/simpons/about
             name:'simpons-about',
             component: Circa,

            }
            
          ]
        },

        {
          path: 'gallery',
          component:Layout,
          children: [
            {

             path:'', //#/simpons/gallery
             name:'simpons-characters',
             component: Collectione,
            },

            {

             path: ':id'
             name:'simpons-detail',
             component: Characters,


            }
          ]
        }

      ]
      
    },
    {
      path: '/indecision',
      name: 'indecision',
      component: Responsum
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/'
    }
  ]
})