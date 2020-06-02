<template>
  <div>
    <Item v-for="item in itemsFound" :key="item.uid" :uid="item.uid" :name="item.name" :price="item.price" :img="item.img" :wiki="item.link" :diff24h="item.diff24h" :trader="SetTrader(item)"></Item>
  </div>
</template>

<script>
import Item from './Item';

export default {
  name: 'ItemList',
  props: ['itemsFound'],
  components: {
   Item,
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
  }),
};
</script>

<style scoped>
  
</style>