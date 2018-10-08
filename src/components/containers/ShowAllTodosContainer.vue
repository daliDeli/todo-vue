<template>
  <section>
    <div class='container is-fluid'>

      <b-message v-if="error" title="Danger" type="is-danger">
      An error occurred
      </b-message>

      <button
      class='button is-warning'
      @click='logout'
      >
          Logout
      </button>

      <CreateTodo/>

      <Todo
          class='container is-fluid todo-container'
          :key='todo.id' v-for='todo in todos'
          :todo='todo'
      />
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Todo from '../Todo';
import CreateTodo from '../CreateTodo';
import { updateTodo } from '../../services/apiService';
import { isAuthenticated } from '../../services/authService';
import { store } from '../../store';

export default{
  name: 'ShowAllTodos',
  components: {
    Todo,
    CreateTodo,
  },
  computed: {
    ...mapGetters({
      todos: 'todosGetter',
      error: 'dataErrorGetter',
    }),
  },
  methods: {
    ...mapActions(['showTodos', 'logout']),

    completedTodo(id, todo) {
      updateTodo(id, todo);
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
  padding: 5px;
  margin: 5px;
}
button{
  width: 80px;
  font-size: 1.2em;
  padding: 2px;
  margin: 15px 5px;
}

</style>

