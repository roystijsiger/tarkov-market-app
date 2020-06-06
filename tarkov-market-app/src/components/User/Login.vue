<template>
    <div class="loginForm">
        <h1>Login</h1>
         <v-text-field
            v-model="user.email"
            label="Email"
            solo-inverted
          ></v-text-field>
         <v-text-field
            v-model="user.password"
            label="Password"
            solo-inverted
            type="password"
          ></v-text-field>
        <v-btn color="green" @click="Login()">Login</v-btn>
        
        <v-btn :to="{path: '/register'}">Register</v-btn>
    </div>
</template>

<script>
import {Login} from '../../services/FavoriteApi'

export default {
    data : () => ({
        user : {
            email: "",
            password: ""
        }
    }),
    methods : {
        Login(){
            Login(this.user.email, this.user.password).then(response => {
                localStorage.setItem('token', response.data.accessToken)
                this.$parent.$parent.$parent.loggedIn = true;
                this.$router.push({path: '/item/list'})
            }).catch((error) => {
                console.log(error);
            })
        }
    }
}
</script>
<style scoped>
    .loginForm{
        margin: 20px;

    }

    button{
        margin: 10px;
    }
</style>