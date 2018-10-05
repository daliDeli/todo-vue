import Vue from 'vue';
import Vuex from 'vuex';
import { sendTodo, getAllTodos } from './services/apiService';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
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

  },

  mutations: {
    updateTitle(state, payload) {
      state.titleTodo = payload;
    },
    updateTodos(state, payload) {
      state.todos.push(...payload.data);
    },
  },
  actions: {
    createTodo() {
      sendTodo(this.getters.titleGetter, false)
        .then(console.log)
        .catch(console.log);
    },

    showTodos({ context }) {
      return getAllTodos()
        .then(({ data }) => context.commit('updateTodos', data))
        .catch(console.log);
    },

    updateTitle(context, payload) {
      context.commit('updateTitle', payload);
    },
  },
});
