<template>
  <section>
    <div class='container is-fluid'>

      <button
      class="button is-warning"
      @click= "logout"
      >
          Logout
      </button>

      <app-create-todo
        :title= 'title'
        :createTodo= 'createTodo'
      />

      <div
      class="container is-fluid todo-container"
      :key= 'todo.id' v-for= '(todo, i) in todos'
      >

      <app-todo
          :title= 'todo.title'
          :id= 'todo.id'
          :index= 'i'
          :removeTodo= 'removeTodo'
          :completedTodo= 'completedTodo'
          :completed= 'todo.completed'
          :todo= 'todo'
      />
      </div>
    </div>
  </section>
</template>

<script>
import { sendTodo, getAllTodos, updateTodo, deleteTodo } from '../../services/communication';
import Todo from '../Todo';
import CreateTodo from '../CreateTodo';

export default{
  name: 'ShowAllTodos',
  data() {
    return {
      todos: [],
      title: '',
    };
  },
  components: {
    'app-todo': Todo,
    'app-create-todo': CreateTodo,
  },
  methods: {
    createTodo(title) {
      sendTodo(title, false)
        .then(() => { this.title = ''; })
        .catch(console.log);
    },

    showTodos() {
      return getAllTodos()
        .then(({ data }) => console.log(data.data) || this.todos.push(...data.data))
        .catch(console.log);
    },

    completedTodo(id, todo) {
      updateTodo(id, todo)
        .then(console.log)
        .catch(console.log);
    },

    removeTodo(id, i) {
      deleteTodo(id)
        .then(console.log)
        .then(() => this.todos.splice(i, 1))
        .catch(console.log);
    },

    logout() {
      sessionStorage.removeItem('access_token');
      this.$router.push('/');
    },

  },

  beforeRouteEnter(to, from, next) {
    if (sessionStorage.getItem('access_token')) {
      next((vm) => {
        vm.showTodos();
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

