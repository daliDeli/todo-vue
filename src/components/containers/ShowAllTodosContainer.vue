<template>
    <section>
        <div class='container is-fluid'>

                <router-link
                    v-bind:to= "{ name: 'CreateTodo'}"
                >
                    <button
                    class="button is-success"
                    >
                    Create
                    </button>
                </router-link>
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
            >
            </app-todo>
            </div>

        </div>
    </section>
</template>

<script>
import { getAllTodos, updateTodo, deleteTodo } from '../../services/communication';
import Todo from '../Todo';

export default{
  name: 'ShowAllTodos',
  data() {
    return {
      todos: [],
    };
  },
  components: {
    'app-todo': Todo,
  },
  methods: {
    showTodos() {
      return getAllTodos()
        .then(({ data }) => this.todos.push(...data.data))
        .catch(error => console.log(error));
    },

    completedTodo(id, todo) {
      updateTodo(id, todo)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    },

    removeTodo(id, i) {
      deleteTodo(id)
        .then(res => console.log(res))
        .then(() => this.todos.splice(i, 1))
        .catch(err => console.log(err));
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

