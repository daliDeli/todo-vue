import Vue from 'vue';
import Vuex from 'vuex';
import { sendTodo, getAllTodos, loginUser, deleteTodo } from './services/apiService';
import { setAccessToken, removeAccessToken } from './services/authService';

import router from './router';

Vue.use(Vuex);
// adding todo doesnt render the page
export const store = new Vuex.Store({
  state: {
    email: '',
    password: '',
    todos: [],
    titleTodo: '',
    isCompleted: this.completed,
  },
  getters: {
    titleGetter(state) {
      return state.titleTodo;
    },

    todosGetter(state) {
      return state.todos;
    },

    emailGetter(state) {
      return state.email;
    },

    passwordGetter(state) {
      return state.password;
    },

  },

  mutations: {
    updateEmail(state, payload) {
      state.email = payload;
    },

    updatePassword(state, payload) {
      state.password = payload;
    },

    updateTitle(state, payload) {
      state.titleTodo = payload;
    },

    updateTodos(state, { data }) {
      state.todos.push(...data);
    },

    addTodo(state) {
      state.todos = state.todos;
    },

    removeTodo(state, id) {
      console.log('delete');
      state.todos.forEach((todo, i) => {
        if (todo.id === id) {
          console.log('delete index', i);
          state.todos.splice(i, 1);
        }
      });
    },

    logout() {
      removeAccessToken();
      router.push({ name: 'LoginPage' });
    },

  },
  actions: {
    createTodo(context) {
      sendTodo(context.getters.titleGetter, false)
        .then(() => context.commit('updateTitle', ''))
        .then(() => context.commit('addTodo'))
        .catch(console.log);
    },

    showTodos(context) {
      return getAllTodos()
        .then(({ data }) => context.commit('updateTodos', data))
        .catch(console.log);
    },

    removeTodo(context, id) {
      deleteTodo(id)
        .then(() => context.commit('removeTodo', id))
        .catch(console.log);
    },

    updateTitle(context, payload) {
      context.commit('updateTitle', payload);
    },

    logout(context) {
      context.commit('logout');
    },

    login(context) {
      loginUser(context.getters.emailGetter,
        context.getters.passwordGetter)
        .then((data) => {
          setAccessToken(data.access_token);
          router.push({ name: 'ShowAllTodos' });
        })
        .catch(error => console.warn(error));
    },

    updateEmail(context, payload) {
      context.commit('updateEmail', payload);
    },

    updatePassword(context, payload) {
      context.commit('updatePassword', payload);
    },
  },
});
