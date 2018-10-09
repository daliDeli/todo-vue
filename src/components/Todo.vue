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
            <Modal  v-bind='formProps'></Modal>
        </b-modal>

    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Modal from './Modal';

export default {
  props: {
    todo:
    {
      type: Object,
      required: true,
    },
  },
  components: {
    Modal,
  },
  methods: {
    ...mapActions(['completedTodo']),
  },

  data() {
    return {
      isCompleted: this.todo.completed,
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
    margin: 1% 0% 1% 4%;
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

