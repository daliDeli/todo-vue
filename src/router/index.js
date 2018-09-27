import Vue from 'vue';
import Router from 'vue-router';
import CreateTodo from '@/components/CreateTodo';
import LoginPage from '@/components/LoginPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CreateTodo',
      component: CreateTodo,
    },
    {
      path: 'login',
      name: 'LoginPage',
      component: LoginPage,
    },
  ],
});
