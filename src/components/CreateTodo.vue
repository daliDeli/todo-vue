<template>
    <section>
        <div class="container is-fluid task-container">
            <b-field label="What do you need to do?"
                type="is-success"
            >
                <b-input
                    class='todo-title'
                    placeholder="Name of your task..."
                    type="search"
                    required
                    v-model= 'titleTodo'
                >
                </b-input>
            </b-field>
            <button
            class="button is-primary"
            v-on:click= "createTodo(titleTodo)"
            >
                Create
            </button>
        </div>
    </section>
</template>

<script>

export default{
  props: ['title', 'createTodo'],
  data() {
    return {
    // titleTodo because of I cant mutate props
      titleTodo: this.title,
    };
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

