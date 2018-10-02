<template>
    <section>
        <div class='container is-fluid'>

            <button
                class="button is-warning"
                v-on:click= "logout"
            >
                    Logout
            </button>
             <router-link
                    v-bind:to= "{ name: 'ShowAllTodos'}"
                >
                    <button
                    class="button is-success"
                    >
                    All Todos
                    </button>
                </router-link>

            <div class="container is-fluid task-container">
                <b-switch
                    id='high-priority'
                    v-model= "priority"
                >
                    {{ highPriority }}
                </b-switch>
                    <b-input
                        class='todo-title'
                        placeholder="Name of your task..."
                        type="search"
                        required
                        v-model= 'title'
                    >
                    </b-input>

                <button
                class="button is-primary"
                v-on:click="createTodo"
                >
                    Create
                </button>
            </div>
        </div>
    </section>
</template>

<script>
import { sendTodo } from '../../services/communication';
import router from '../../router';

export default{
  name: 'CreateTodo',
  data() {
    return {
      title: '',
      description: '',
      priority: false,
      highPriority: 'High priority',
    };
  },
  methods: {
    createTodo() {
      sendTodo(this.title, false)
        .then(() => { this.title = ''; })
        .catch(() => console.log);
    },
    logout() {
      sessionStorage.removeItem('access_token');
      router.push('/');
    },
  },
};
</script>

<style scoped>

button{
    display: block;
    width: 100px;
    font-size: 1.2em;
    padding: 2px;
    margin: 10px 45%;
}
.task-container{
    border: 3px solid teal;
    padding: 5px;
    text-align: center;
}
.todo-title{
    padding: 5px;
    margin: 5px;
    font-size: 20px;

}

</style>

