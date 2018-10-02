<template>
    <div class="container is-fluid">
            <p class="todo-title">{{ title }}</p>
            <button
                class="button is-danger"
                v-on:click="removeTodo(id, index)"
            >
                Delete
            </button>

            <button
                class="button is-primary"
                v-on:click="completedTodo(id, todo)"
            >
                Done
            </button>
    </div>
</template>

<script>
export default {
  props: ['title', 'removeTodo', 'id', 'index', 'completedTodo', 'todo'],
};
</script>

<style scoped>

button{
    width: 80px;
    font-size: 1.2em;
    padding: 2px;
    margin: 15px 5px;
}
.todo-title{
    font-weight: bolder;
    font-size: 30px;
}

</style>

