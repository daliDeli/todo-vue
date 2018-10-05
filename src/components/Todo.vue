<template>
    <div class='container is-fluid'>
        <p class='todo-title'>{{ title }}</p>
        <button
            v-if='!completed'
            class='button is-danger'
            @click='isComponentModalActive = true'
        >
            Delete
        </button>

        <b-checkbox
            v-if='!completed'
            v-model='isCompleted'
            @input='completedTodo(id, todo)'
            true-value= true
            false-value= false
        >
            Done
        </b-checkbox>

        <b-modal :active.sync='isComponentModalActive' has-modal-card>
            <modal-form  v-bind='formProps'></modal-form>
        </b-modal>

    </div>
</template>

<script>
const ModalForm = {
  props: ['removeTodo', 'id', 'index'],
  template: `
        <div class='modal-card' style='width: auto'>
            <p class='modal-card-title'>
                Do you really want to delete this Todo?
            </p>

            <button
            class='button is-danger'
            @click='removeTodo(id, index)'
            >
                Delete
            </button>
        </div>        
        `,
};

export default {
  props: [
    'title', 'removeTodo', 'id', 'index', 'completedTodo', 'completed', 'todo',
  ],
  components: {
    ModalForm,
  },
  data() {
    return {
      isCompleted: this.completed,
      isComponentModalActive: false,
      formProps: {
        removeTodo: this.removeTodo,
        id: this.id,
        index: this.index,
      },
    };
  },
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
.checkbox{
    float: right;
    clear: both;
}
.modal-card{
    background: white;
    padding: 30px;
    border: 2px solid firebrick;

}
</style>

