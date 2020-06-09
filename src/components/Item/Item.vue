<template>
<div>
    <v-card class="item">
        <v-card-title>{{item.name}} </v-card-title>
        <v-card-text>
            <v-row>
                <v-col><img class="img" :src="item.img" /></v-col>
                <v-col>
                    <table>
                        <tbody>

                            <tr>
                                <td>Price</td>
                                <td>:</td>
                                <td>&#8381;  {{item.price}}</td>
                            </tr>
                            <tr>
                                <td>Growth</td>
                                <td>:</td>
                                <td ><span :class="item.diff24h > 0 ? 'green--text' : 'red--text'">{{item.diff24h}}</span></td>
                            </tr>
                            <tr>
                                <td>wiki</td>
                                <td>:</td>
                                <td><a :href="item.wiki">Go</a></td>
                            </tr>
                            <tr>
                                <td>Trader</td>
                                <td>:</td>
                                <td>{{item.traderName}}</td>
                            </tr>
                            <tr>
                                <td>Trader price</td>
                                <td>:</td>
                                <td>{{item.traderPriceCur}} {{item.traderPrice}}</td>
                            </tr>
                                
                        </tbody>
                    </table>
                </v-col>
                <v-col>
                    <button flat  @click="toggleFavorite()"><v-icon size="70" color="red" x-large>{{favorite ? "fas" : "far"}} fa-heart</v-icon></button>
                </v-col>
            </v-row>
            
        </v-card-text>
    </v-card>
</div>
</template>

<script>
import {AddFavorite, RemoveFavorite, GetFavorite} from '../../services/FavoriteApi';
export default {
    
  name: 'item',
  props: ['uid','item'],
  data: () => ({
      favorite: false
  }),
  created(){
    GetFavorite(this.item.uid).then(response => {
        this.favorite = response.data == this.item.uid ?? false;
    })
    this.favorite = this.item.favorite;
  },
  methods : {
      toggleFavorite(){
          var promise = !this.favorite ? AddFavorite(this.item.uid) : RemoveFavorite(this.item.uid);
          promise.then(() => {
             this.favorite = !this.favorite
             this.$parent.$emit('favorited')
          })
      }
  }
}
</script>

<style scoped>
    .item{
        margin: 10px 10px 0 10px;
    }
    
    button{
        outline: none;
    }

    td{
        padding: 5px;
    }

    .img{
        height: 100px;
    }
    
    .green--text{
        color: green;
    }

    .red--text{
        color: red;
    }
</style>