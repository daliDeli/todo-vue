<template>
  <section>
    <div class='container is-fluid'>

      <button
      class='button is-warning'
      @click='logout'
      >
          Logout
      </button>

      <app-create-todo/>
      <div
      class='container is-fluid todo-container'
      :key='todo.id' v-for='(todo, i) in todos'
      >

      <app-todo
          :title='todo.title'
          :id='todo.id'
          :index='i'
          :removeTodo='removeTodo'
          :completedTodo='completedTodo'
          :completed='todo.completed'
          :todo='todo'
      />
      </div>
    </div>
  </section>
</template>

<script>
// nema loopa tako da mogu u samom TODO da pozovem svaki properti
import { mapActions, mapGetters } from 'vuex';
import Todo from '../Todo';
import CreateTodo from '../CreateTodo';
import { updateTodo, deleteTodo } from '../../services/apiService';
import { isAuthenticated } from '../../services/authService';
import { store } from '../../store';

export default{
  name: 'ShowAllTodos',
  components: {
    'app-todo': Todo,
    'app-create-todo': CreateTodo,
  },
  computed: {
    ...mapGetters({ todos: 'todosGetter' }),
  },
  methods: {
    ...mapActions(['showTodos', 'logout']),

    completedTodo(id, todo) {
      updateTodo(id, todo)
        .then(console.log)
        .catch(console.log);
    },

    removeTodo(id, i) {
      deleteTodo(id)
        .then(() => this.todos.splice(i, 1))
        .catch(console.log);
    },
  },

  beforeRouteEnter(to, from, next) {
    if (isAuthenticated()) {
      store.dispatch('showTodos')
        .then(() => {
          next();
        });
    } else {
      next(from.fullPath);
    }
  },
};
</script>

<style scoped>
.todo-container{
  border:2px solid teal;
  margin: 5px;
}
button{
  width: 80px;
  font-size: 1.2em;
  padding: 2px;
  margin: 15px 5px;
}

</style>

