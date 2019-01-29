import Vue from 'vue';
import Router from 'vue-router';
import SearchPage from './views/SearchPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'search',
      component: SearchPage,
    },
  ],
});
