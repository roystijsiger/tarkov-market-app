<template>
  <div class="wrapper">
    <span v-if="itemsFound.length == 0">
      Geen items gevonden :)
    </span>
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
</style>