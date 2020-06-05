<template>
    <div>
        {{favorites}}
    </div>
</template>

<script>
import {GetFavorites} from '../../services/FavoriteApi'

export default {
    created(){
        GetFavorites().then((response) => {
            this.favorites = response.data;
        })
    },
    data : () => {
        return {
            "favorites" : []
        }
    }
    
}
</script>