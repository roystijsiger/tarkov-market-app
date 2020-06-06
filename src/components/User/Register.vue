<template>
    <div class="loginForm">
        <h1>Register</h1>
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
        <v-btn color="green" @click="Register()">Register</v-btn>
        <v-btn :to="{path: '/login'}">Login</v-btn>
    </div>
</template>

<script>
import {Register} from '../../services/FavoriteApi'
export default {
    data : () => ({
        user: {
            email: "",
            password: ""
        }
      
    }),
    methods : {
        Register(){
            Register(this.user.email, this.user.password).then(() =>{
                this.$router.push({path: '/login'});
            }).catch(error =>{
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