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
    },
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage,
      meta: {
        guest: true,
      },
    },
  ],
  mode: 'history',
});
// TODO meta field, add to global guard, bad logic for Login
router.beforeEach((to, from, next) => {
  if (!to.meta.guest && !isAuthenticated()) {
    next({ name: 'LoginPage' });
  }
  next();
});

export default router;
