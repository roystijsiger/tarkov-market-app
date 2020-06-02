<template>
    <div class="loginForm">
         <v-text-field
            v-model="email"
            label="Email"
            solo-inverted
            @keyup="Search()"
          ></v-text-field>
         <v-text-field
            v-model="password"
            label="Password"
            solo-inverted
            type="password"
            @keyup="Search()"
          ></v-text-field>
        <v-btn>Login</v-btn>
    </div>
</template>

<script>
export default {
    data : () => ({
        email: "",
        password: ""
    })
}
</script>
<style scoped>
    .loginForm{
        margin: 20px;

    }
</style>