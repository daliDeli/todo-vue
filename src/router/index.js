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
        next();
      },
    },
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage,
      beforeEnter: (to, from, next) => {
        // before enter it checks if it is a ulogovan user
        const user = true;
        console.log(to);
        if (user) {
          next();
        } else {
          next(from.fullPath);
        }
      },
    },
  ],
  mode: 'history',
});
