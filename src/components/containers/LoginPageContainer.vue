<template>
    <section>
        <div class='container is-fluid'>

             <b-field label="Email">
                <b-input
                    type="is-success"
                    v-model= 'email'
                >
                </b-input>
            </b-field>
            <b-field label="Password">
                <b-input
                    type="password"
                    v-model= 'password'
                >
                </b-input>
            </b-field>
            <p class="control">
                <button
                class="button is-primary"
                @click= "login"
                >
                Login
                </button>
            </p>
        </div>
    </section>
</template>

<script>
import { loginUser } from '../../services/communication';
// import router from '../../router';

export default{
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      loginUser(this.email, this.password)
        .then((response) => {
          sessionStorage.setItem('access_token', response.data.access_token);
          this.$router.push('/todos');
        })
        .catch(error => console.warn(error));
    },
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

