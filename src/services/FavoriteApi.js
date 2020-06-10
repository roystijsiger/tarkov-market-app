import axios from 'axios';
var a = "asdfsdfa";
var Axios = axios.create({
    //baseURL: "https://tarkov-favorite-api.herokuapp.com",'
    baseURL: "http://localhost:3000",
    headers: {
    }
})
console.log(`favorite api url`, process.env.FAVORITE_API_URL)

Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

export function SetToken(token){
    if(token){
        localStorage.setItem('token', token);
        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        var jwtParsed = parseJwt(token);
        localStorage.setItem("userId", jwtParsed.userId);
    }
    else{
        
    Axios.defaults.headers.common['Authorization'] = null;
        localStorage.removeItem('token');
    }
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
    return Axios.post(`/users/${localStorage.getItem('userId')}/favorites`,{
        "item": uid
    });
}

export function GetFavorites(){
    return Axios.get(`/users/${localStorage.getItem('userId')}/favorites`);
}

export function GetFavorite(itemId){
    return Axios.get(`/users/${localStorage.getItem('userId')}/favorites/${itemId}`);
}

export function RemoveFavorite(uid){
    return Axios.delete(`/users/${localStorage.getItem('userId')}/favorites/${uid}`);
}

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    var jwtParsed = JSON.parse(jsonPayload);
    return jwtParsed;
}