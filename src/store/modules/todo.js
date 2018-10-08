import { sendTodo, getAllTodos, deleteTodo } from '../../services/apiService';

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
  },

  mutations: {
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
