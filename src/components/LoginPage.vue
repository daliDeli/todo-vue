<template>
    <section>
        <div class='container is-fluid'>

            <b-message v-if="error" title="Danger" type="is-danger">
            This is invalid data, please try again
            </b-message>
             <b-field label='Email'>
                <b-input
                    type='is-success'
                    :value='email'
                    @input='updateEmail'
                >
                </b-input>
            </b-field>
            <b-field label='Password'>
                <b-input
                    type='password'
                    :value='password'
                    @input='updatePassword'
                >
                </b-input>
            </b-field>
            <p class='control'>
                <button
                class='button is-primary'
                @click='login'
                >
                Login
                </button>
            </p>
        </div>
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default{
  name: 'LoginPage',
  computed: {
    ...mapGetters({
      email: 'emailGetter',
      password: 'passwordGetter',
      error: 'loginErrorGetter',
    }),
  },
  methods: {
    ...mapActions(['updateEmail', 'updatePassword', 'login']),
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

