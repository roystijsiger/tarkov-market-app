<template>
    <v-form class="loginForm" v-model="isFormValid">  
        
        <h1>Login</h1>
        <div  v-show="error" class='error-box'>
            <span class="error-message">{{errorMessage}}</span>
            <v-icon class="close" @click="error = !error">fas fa-times</v-icon>
        </div>
         <v-text-field
            v-model="user.email"
            :rules="emailRules"
            label="Email"
            solo-inverted
          ></v-text-field>
         <v-text-field
            v-model="user.password"
            :rules="passwordRules"
            label="Password"
            solo-inverted
            type="password"
          ></v-text-field>
        <v-btn :disabled="!isFormValid" color="green" @click="Login()">Login</v-btn>
        
        <v-btn :to="{path: '/register'}">Register</v-btn>
    </v-form>
</template>

<script>
import {Login, SetToken} from '../../services/FavoriteApi'

export default {
    data : () => ({
        user : {
            email: "",
            password: ""
        },
        errorMessage: "",
        error: false,
           emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        passwordRules: [
            v => v.length >= 8 || 'Password is too short',
            v => /.*[^a-zA-Z].*/.test(v) || 'Password should contain a number',
            v => /.*[^0-9].*/.test(v) || 'Password should contain a letter'
        ]
    }),
    methods : {
        Login(){
            Login(this.user.email, this.user.password).then(response => {
                SetToken(response.data.accessToken);
                this.$parent.$parent.$parent.loggedIn = true;
                this.$router.push({path: '/item/list'})
            }).catch((error) => {
                console.log(error);
                if(error.response.data.message == "Unauthorized"){
                    this.errorMessage = "No user found with the filled in credentials";
                }
                else{
                    this.errorMessage =  error.response.data.message;
                }
                //
                console.log(error.response.data)
                this.error = true;
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

       .error-box{ 
        background-color: rgb(218, 80, 80);
        border: 1px solid rgb(250, 80, 80);
        border-radius: 5px;
        height: 50px;
        margin-bottom: 10px;
        padding: 10px;
    }

    .error-message{
        font-size: 16px;
        vertical-align: middle;
    }
    
    .close{
        margin-top: 0px;
        float: right;
    }
</style>