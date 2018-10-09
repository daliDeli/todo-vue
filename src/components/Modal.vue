<template>
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
</template>

<script>
import { mapActions } from 'vuex';

export default {
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
};
</script>

<style scoped>
.modal-card{
    background: white;
    padding: 30px;
    border: 2px solid firebrick;

}
</style>
