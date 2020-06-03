import axios from 'axios';

var Axios = axios.create({
    baseURL: 'https://tarkov-market.com/api/v1/',
    headers: {
        'x-api-key':  '4jaKa2rAHW4lZzlM'
    }
})

export function SearchItem(item){
    return Axios.get('/item?q=' + item);
}