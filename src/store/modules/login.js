import { removeAccessToken, setAccessToken } from '../../services/authService';
import { loginUser } from '../../services/apiService';

import router from '../../router';

export default {
  state: {
    email: '',
    password: '',
  },

  getters: {
    emailGetter(state) {
      return state.email;
    },

    passwordGetter(state) {
      return state.password;
    },
  },
  actions: {
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

  mutations: {
    updateEmail(state, payload) {
      state.email = payload;
    },

    updatePassword(state, payload) {
      state.password = payload;
    },

    logout() {
      removeAccessToken();
      router.push({ name: 'LoginPage' });
    },

  },
};
