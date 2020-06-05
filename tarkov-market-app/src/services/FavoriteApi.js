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
export function Register(user){
    return Axios.post('/auth/register', {
        "username": user.Email,
        "password": user.Password
    });
}

export function Login(user){
    return Axios.post('/auth/login', {
        "username": user.Email,
        "password": user.Password
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