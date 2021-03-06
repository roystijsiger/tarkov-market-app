import login from './components/User/Login'
import itemList from './components/Item/ItemList'
import register from './components/User/Register'
import favorites from './components/Favorites/Favorites';
import boodschappenlijst from './components/Shoppinglist/List'
export const routes = [
    {
        path: '/',
        component: login
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/register',
        component: register
    },
    {
        path: '/item/list',
        component: itemList
    },
    {
        path: '/favorites',
        component: favorites
    },
    {
        path: '/boodschappenlijst',
        component: boodschappenlijst
    }
]