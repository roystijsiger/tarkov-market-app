import axios from 'axios';
var a = "asdfsdfa";
var Axios = axios.create({
    baseURL: process.env.FAVORITE_API_URL,
    headers: {
    }
})

Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

export function SetToken(token){
    token ? localStorage.setItem('token', token) 
        : localStorage.removeItem('token');
                
    Axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}
/*
* User section :)
*/
export function Register(username, password){
    return Axios.post('/auth/register', {
        "username": username,
        "password": password
    });
}

export function Login(username, password)
    {
    console.log(a);
    return Axios.post('/auth/login', {
        "username": username,
        "password": password
    });
}

/*
* Favorite section (:
*/
export function AddFavorite(uid){
    return Axios.post('/favorites',{
        "item": uid
    });
}

export function GetFavorites(){
    return Axios.get('/favorites');
}

export function GetFavorite(itemId){
    return Axios.get(`/favorites/${itemId}`);
}

export function RemoveFavorite(uid){
    return Axios.delete(`/favorites/${uid}`);
}