import { sendTodo, getAllTodos, deleteTodo } from '../../services/apiService';

export default{
  state: {
    todos: [],
    titleTodo: '',
  },

  getters: {
    titleGetter(state) {
      return state.titleTodo;
    },

    todosGetter(state) {
      return state.todos;
    },
  },

  actions: {
    createTodo(context) {
      sendTodo(context.getters.titleGetter, false)
        .then(() => context.commit('updateTitle', ''))
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
  },

};
