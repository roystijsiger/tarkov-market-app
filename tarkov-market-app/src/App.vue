<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      height="75px"
    >
      <h1>Tarkov Market App</h1>
      
      <div class="searchBar">
      <v-text-field
            v-model="searchValue"
            label="Search"
            solo-inverted
            @keyup="Search()"
          ></v-text-field>
      </div>
    </v-app-bar>

    <v-content class="contentBox">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  methods : {
    Search(){
      if(this.searchValue.length >= 3){
        if(!this.loggedIn){
          alert('Please login first');
          return;
        }
        console.log();
        if(this.$router.currentRoute.fullPath !== '/item/list'){
          this.$router.push({path: '/item/list'})
        }

        this.$emit('search', this.searchValue);
       
      }
    }
  },
  mounted(){
   
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
  top: 10px;
  right: 10px;
}

.searchField {
  border: 1px solid #fff !important;
  height: 56px;
}
</style>