<template>
    <section>
        <div class='container is-fluid task-container'>
            <b-field label='What do you need to do?'
                type='is-success'
            >
                <b-input
                    class='todo-title'
                    placeholder='Name of your task...'
                    type='search'
                    required
                    v-model='titleTodo'
                    @input='updateTitle'
                >
                </b-input>
            </b-field>
            <button
            class='button is-primary'
            @click='createTodo(titleTodo)'
            >
                Create
            </button>
        </div>
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default{
  computed: {
    ...mapGetters({ titleTodo: 'titleGetter' }),
  },
  methods: {
    ...mapActions(['updateTitle', 'createTodo']),
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

