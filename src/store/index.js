import Vue from 'vue';
import Vuex from 'vuex';
import todo from './modules/todo';
import login from './modules/login';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    todo,
    login,
  },
});
