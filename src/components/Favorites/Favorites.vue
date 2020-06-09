<template>
    <div>
        <div v-if="showFavorites">
            <Item v-for="item in favorites" 
            :key="item.item" 
            :item="item"
            ></Item>
        </div>
    </div>
</template>

<script>
import {GetFavorites} from '../../services/FavoriteApi';
import {SearchItemByUid} from '../../services/TarkovMarketApi';
import Item from '../Item/Item';

export default {
    components: {
        Item
    },
    created(){
        this.$on('favorited', () =>{
            this.showFavorites = false;
            this.GetFavorites();
        })
        this.GetFavorites();

    },
    methods :{
        GetFavorites(){
            GetFavorites().then((response) => {
                this.favorites = response.data;

                var promises = [];
                this.favorites.forEach(element => {
                    promises.push(SearchItemByUid(element));
                });

                Promise.all(promises).then((results) => {
                    var index = 0;
                    results.forEach((result) =>{
                        this.favorites[index] = result.data[0];
                        this.favorites[index].favorite = true;
                        index++;
                    })
                }).finally(()=>{
                    console.log(this.favorites);
                    this.showFavorites = true;
                })
            })
        }
    },
    data : () => {
        return {
            favorites : [],
            showFavorites: false,
        }
    }
    
}
</script>