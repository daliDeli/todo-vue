import Vue from 'vue';
import Router from 'vue-router';
import CreateTodo from '../components/CreateTodo';
import LoginPage from '../components/containers/LoginPageContainer';
import ShowAllTodos from '../components/containers/ShowAllTodosContainer';


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
      path: '/todos',
      name: 'ShowAllTodos',
      component: ShowAllTodos,
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
