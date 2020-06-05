<template>
    <div class="loginForm">
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
        <v-btn @click="Register()">Register</v-btn>
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
            Register(this.user.email, this.user.password).then(response =>{
                console.log(response);
                this.$router.push({path: '/item/list'});
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
</style>