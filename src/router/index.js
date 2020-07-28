import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '@/views/Landing.vue';
import Experience from '@/views/Experience.vue';
import Skills from '@/views/Skills.vue';
import Games from '@/views/Games.vue';
import ContactMe from '@/views/ContactMe.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/games',
    name: 'Games',
    component: Games
  },
  {
    path: '/contact-me',
    name: 'Contact Me',
    component: ContactMe
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
