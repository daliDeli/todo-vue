<template>
    <section>
        <div class='container is-fluid'>

            <!-- <router-link
                v-bind:to="{ name: 'LoginPage'}"
            > 
                Login
            </router-link> -->
            <button
                class="button is-warning"
                v-on:click="logout"
                >
                    Logout
            </button>
             <b-field label="Title">
                <b-input
                    placeholder="Name of your task..."
                    type="search"
                    v-model='title'
                >
                </b-input>
            </b-field>
            <b-field label="Description">
                <b-input
                    maxlength="200"
                    type="textarea"
                    placeholder="What do you need to do exactly ..."
                    v-model='description'
                >
                </b-input>
            </b-field>
                <p class="control">
                    <button
                    class="button is-primary"
                    v-on:click="sendTodo"
                    >
                        Create
                    </button>
                </p>
                <p>
                    {{title}}
                </p>
                <p>
                    {{description}}
                </p>
        </div>
    </section>
</template>

<script>
import { createTodo } from '../services/communication';
import router from '../router';

export default{
  name: 'CreateTodo',
  data() {
    return {
      title: '',
      description: '',
    };
  },
  methods: {
    sendTodo() {
      createTodo(this.title, false)
        .then(response => console.log('created todo', response))
        .catch(console.log)
    },
    logout(){
        sessionStorage.removeItem('access_token');
        router.push('/');
    }
  },
};
</script>

<style scoped>

button{
    display: block;
    width: 80px;
    font-size: 1.2em;
    padding: 2px;
    margin: 10px auto;
}

</style>

