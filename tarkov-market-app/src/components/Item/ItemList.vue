<template>
  <div>
    <span v-if="itemsFound.length == 0">
      Geen items gevonden :)
    </span>
    <Item v-for="item in itemsFound" 
      :key="item.uid" 
      :uid="item.uid" 
      :name="item.name" 
      :price="item.price" 
      :img="item.img" 
      :wiki="item.link" 
      :diff24h="item.diff24h" 
      :trader="SetTrader(item)"
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
  methods: { 
    SetTrader(item){
      return {
        "name": item.traderName,
        "price": item.traderPrice,
        "currency" : item.traderPriceCur
      }
    }
  },
  data: () => ({
    itemsFound: []
  }),
};
</script>

<style scoped>
  
</style>