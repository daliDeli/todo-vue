import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    titleTodo: '123',
  },
  getters: {
    titleGetter(state) {
      return state.titleTodo;
    },
  },
  mutations: {
    titleInput(state, payload) {
      return state;
    },
  },
});
