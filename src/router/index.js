import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from '../components/LoginPage';
import ShowAllTodosContainer from '../components/containers/ShowAllTodosContainer';
import { isAuthenticated } from '../services/authService';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/todos',
      name: 'ShowAllTodos',
      component: ShowAllTodosContainer,
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
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
        if (isAuthenticated()) {
          next(from.fullPath);
        } else {
          next();
        }
      },
    },
  ],
  mode: 'history',
});
// TODO meta field, add to global guard, bad logic for Login
// router.beforeEach((to, from, next) => {
//   // ...
// });

export default router;
