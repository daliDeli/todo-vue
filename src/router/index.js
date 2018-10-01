import Vue from 'vue';
import Router from 'vue-router';
import CreateTodo from '@/components/CreateTodo';
import LoginPage from '@/components/LoginPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/create',
      name: 'CreateTodo',
      component: CreateTodo,
      beforeEnter: (to, from, next) => {
        if (sessionStorage.getItem('access_token')) {
          next();
        } else {
          next(from.fullPath);
        }
      },
    },
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage,
      beforeEnter: (to, from, next) => {
        if (sessionStorage.getItem('access_token')) {
          next(from.fullPath);
        } else {
          next();
        }
      },
    },
  ],
  mode: 'history',
});
