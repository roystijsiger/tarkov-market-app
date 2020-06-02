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
      <ItemList :itemsFound="itemsFound"/>
    </v-content>
  </v-app>
</template>

<script>
import ItemList from './components/Item/ItemList';
import {SearchItem} from './services/TarkovMarketApi';

export default {
  name: 'App',

  components: {
   ItemList,
  },
  methods : {
    Search(){
      if(this.searchValue.length >= 3){
        if(!this.loggedIn){
          alert('Please login first');
        }
        this.$router.push({path: '/item/list'})
        SearchItem(this.searchValue).then(response => {
          this.itemsFound = response.data
        })
      }
    }
  },
  mounted(){
   
  },
  data: () => ({
    searchValue: "",
    itemsFound: [],
    loggedIn: true
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