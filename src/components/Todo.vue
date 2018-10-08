<template>
    <div class='container is-fluid'>
        <p class='todo-title'>{{ todo.title }}</p>
        <button
            v-if='!todo.completed'
            class='button is-danger'
            @click='isComponentModalActive = true'
        >
            Delete
        </button>

        <b-checkbox
            v-if='!todo.completed'
            v-model='isCompleted'
            @input='completedTodo(todo)'
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
import { mapActions } from 'vuex';

const ModalForm = {
  methods: {
    ...mapActions(['removeTodo']),
  },
  props: {
    id:
    {
      type: Number,
      required: true,
    },
  },
  template: `
        <div class='modal-card' style='width: auto'>
            <p class='modal-card-title'>
                Do you really want to delete this Todo?
            </p>

            <button
            class='button is-danger'
            @click='removeTodo(id)'
            >
                Delete
            </button>
        </div>        
        `,
};

export default {

  props: {
    todo:
    {
      type: Object,
      required: true,
    },
    // completedTodo:
    // {
    //   type: Function,
    //   required: true,
    // },
  },
  components: {
    ModalForm,
  },
  methods: {
    ...mapActions(['completedTodo']),
  },

  data() {
    return {
      isCompleted: this.completed,
      isComponentModalActive: false,
      formProps: {
        removeTodo: this.removeTodo,
        id: this.todo.id,
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

