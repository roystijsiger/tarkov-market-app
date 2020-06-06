<template>
  <div class="wrapper">
    <v-card v-if="itemsFound.length == 0" class="text-center">
      <v-card-text>
        <h1>No items found :(</h1>
        <p>Maybe type in less blabla and more existing stuff?</p>
      </v-card-text>
    </v-card>
  
    <Item v-for="item in itemsFound" 
      :key="item.uid" 
      :item="item"
    ></Item>
  </div>
</template>

<script>
import {SearchItem} from '../../services/TarkovMarketApi';
import Item from './Item';

export default {
  name: 'ItemList',
  components: {
   Item,
  },
  created(){
    this.$parent.$parent.$parent.$on('search', (searchValue) => {
       SearchItem(searchValue).then(response => {
          this.itemsFound = response.data
        })
    })
  },
  data: () => ({
    itemsFound: []
  }),
};
</script>

<style scoped>
  .wrapper{
    margin: 10px;
  }

  p{
    padding: 10px;
  }
</style>