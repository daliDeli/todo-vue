<template>
    <section>
        <div class='container is-fluid'>
                
             <b-field label="Email">
                <b-input 
                    type="is-success"
                    v-model='email'
                >
                </b-input>
            </b-field>
            <b-field label="Password">
                <b-input 
                    type="password"
                    v-model='password'
                >
                </b-input>
            </b-field>     
                <p class="control">
                    <button 
                    type='submit' 
                    class="button is-primary"
                    v-on:click="login"
                    >
                    Login
                    </button>
                </p>
                <p>{{title}}</p>
                <p>{{description}}</p>
        </div>
    </section>
</template>

<script>

export default{
    name: 'LoginPage',
    data(){
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        login: function(){
            alert('radi login');
        }
    }
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

