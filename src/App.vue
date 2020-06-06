<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      height="75px"
    >
      <h1>Tarkov Market App</h1>
      
      
      <div class="searchBar" v-show="loggedIn">
        <v-text-field 
          class="searchField"
          v-model="searchValue"
          label="Search"
          solo-inverted
          @keyup="Search()"
        ></v-text-field>
        
        <v-btn :to="{path: '/favorites'}" fab color="red" class="favorites"><v-icon>fas fa-heart</v-icon></v-btn>

        <v-btn @click="Logout()" fab color="red" class="logout"><v-icon>fas fa-sign-out-alt</v-icon></v-btn>
      </div>
    </v-app-bar>

    <v-content class="contentBox">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import {SetToken} from './services/FavoriteApi'
export default {
  name: 'App',
  methods : {
    Search(){
      if(this.searchValue.length >= 3){
        if(!this.loggedIn){
          alert('Please login first');
          return;
        }
        if(this.$router.currentRoute.fullPath !== '/item/list'){
          this.$router.push({path: '/item/list'})
        }

        this.$emit('search', this.searchValue);
       
      }
    },
    Logout(){
      SetToken(null);
      this.loggedIn = false;
      this.$router.push({path: '/login'});
    }
  },
  data: () => ({
    searchValue: "",
    itemsFound: [],
    loggedIn: localStorage.getItem('token') ?? false
  }),
};
</script>

<style scoped>
.contentBox {
  padding: 10px;
}

.searchBar{
  position: absolute;
  top: 0px;
  right: 0px;
  height: 80px;
  width: 350px;
}

.searchField{
  position: relative;
  top: 12.5px;
  left: 0;
  width: 200px;
}

.logout{
  position: absolute;
  top: 10px;
  right: 10px;
}

.favorites{
  position: absolute;
  top: 10px;
  right: 80px;
}
.searchField {
  height: 56px;
}

</style>