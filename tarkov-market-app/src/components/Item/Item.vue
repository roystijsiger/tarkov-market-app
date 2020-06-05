<template>
    <v-card class="item">
        <v-card-title>{{name}} </v-card-title>
        <v-card-text>
            <v-row>
                <v-col><img class="img" :src="img" /></v-col>
                <v-col>
                    <table>
                        <tbody>

                            <tr>
                                <td>Price</td>
                                <td>:</td>
                                <td>&#8381;  {{price}}</td>
                            </tr>
                            <tr>
                                <td>Growth</td>
                                <td>:</td>
                                <td ><span :class="diff24h > 0 ? 'green--text' : 'red--text'">{{diff24h}}</span></td>
                            </tr>
                            <tr>
                                <td>wiki</td>
                                <td>:</td>
                                <td><a :href="wiki">Go</a></td>
                            </tr>
                            <tr v-if="trader.name.length > 0">
                                <td>Trader</td>
                                <td>:</td>
                                <td>{{trader.name}}</td>
                            </tr>
                            <tr v-if="trader.name.length > 0">
                                <td>Trader price</td>
                                <td>:</td>
                                <td>{{trader.currency}} {{trader.price}}</td>
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
</template>

<script>
import {AddFavorite, RemoveFavorite} from '../../services/FavoriteApi';
export default {
    
  name: 'item',
  props: ['uid','price','img','wiki','name','diff24h','trader'],
  data: () => ({
      favorite: false
  }),
  methods : {
      toggleFavorite(){
          var promise = !this.favorite ? AddFavorite(this.uid) : RemoveFavorite(this.uid);
          promise.then(() => {
             this.favorite = !this.favorite
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