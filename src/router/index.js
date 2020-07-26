import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '@/views/Landing.vue';
import Me from '@/views/Me.vue';
import Portfolio from '@/views/Portfolio.vue';
import Services from '@/views/Services.vue';
import Games from '@/views/Games.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/me',
    name: 'Me',
    component: Me
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/games',
    name: 'Games',
    component: Games
  },
  {
    path: '*',
    redirect: { name: 'Home Screen' }
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
