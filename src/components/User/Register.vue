<template>
    <v-form class="loginForm" v-model="isFormValid">  
        <h1>Register</h1>
        <div  v-show="error" class='error-box'>
            <span class="error-message">{{errorMessage}}</span>
            <v-icon class="close" @click="error = !error">fas fa-times</v-icon>
        </div>
         <v-text-field
            v-model="user.email"
            :rules="emailRules"
            label="Email"
            solo-inverted
            required
          ></v-text-field>
         <v-text-field
            v-model="user.password"
            label="Password"
            :rules="passwordRules"
            solo-inverted
            type="password"
            required
          ></v-text-field>
          <v-text-field
            v-model="password2"
            label="Password"
            :rules="[passwordRules[0],passwordRules[1],passwordRules[2],this.passwordConfirmationRule]"
            solo-inverted
            type="password"
            required
          ></v-text-field>
        <v-btn :disabled="!isFormValid" color="green" @click="Register()">Register</v-btn>
        <v-btn :to="{path: '/login'}">Login</v-btn>
    </v-form>
</template>

<script>
import {Register} from '../../services/FavoriteApi'
export default {
    data : () => ({
        user: {
            email: "",
            password: ""
        },
        isFormValid: false,
        error: false,
        errorMessage: "",
        password2: "",
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
        Register(){
            Register(this.user.email, this.user.password).then(() =>{
                this.$router.push({path: '/login'});
            }).catch(error =>{
                this.errorMessage = error.response.data.message;
                this.error = true;
            })
        }
    },
    computed : {
        passwordConfirmationRule() {
            return () => (this.user.password === this.password2) || 'Password must match'
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