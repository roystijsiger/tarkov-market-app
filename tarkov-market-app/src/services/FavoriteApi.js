import axios from 'axios';

var Axios = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
    }
})

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

export function RemoveFavorite(uid){
    return Axios.delete(`/favorites/${uid}`);
}