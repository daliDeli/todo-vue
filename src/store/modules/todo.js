import { sendTodo, getAllTodos, deleteTodo, updateTodo } from '../../services/apiService';

export default{
  state: {
    todos: [],
    titleTodo: '',
    dataError: false,
  },

  getters: {
    titleGetter(state) {
      return state.titleTodo;
    },

    todosGetter(state) {
      return state.todos;
    },

    dataErrorGetter(state) {
      return state.dataError;
    },
  },

  actions: {
    createTodo(context) {
      sendTodo(context.getters.titleGetter, false)
        .then(() => context.commit('updateTitle', ''))
        .then(() => context.dispatch('showTodos'))
        .catch(error => context.commit('dataError', error));
    },

    showTodos(context) {
      return getAllTodos()
        .then(({ data }) => context.commit('updateTodos', data))
        .catch(error => context.commit('dataError', error));
    },

    removeTodo(context, id) {
      deleteTodo(id)
        .then(() => context.commit('removeTodo', id))
        .catch(error => context.commit('dataError', error));
    },

    updateTitle(context, payload) {
      context.commit('updateTitle', payload);
    },

    completedTodo(context, todo) {
      updateTodo(todo.id, todo)
        .then(() => context.dispatch('showTodos'))
        .catch(error => context.commit('dataError', error));
    },
  },

  mutations: {
    updateTitle(state, payload) {
      state.titleTodo = payload;
    },

    updateTodos(state, { data }) {
      state.todos = [];
      state.todos.push(...data);
    },

    removeTodo(state, id) {
      state.todos.forEach((todo, i) => {
        if (todo.id === id) {
          state.todos.splice(i, 1);
        }
      });
    },

    dataError(state) {
      state.dataError = true;
    },
  },

};
