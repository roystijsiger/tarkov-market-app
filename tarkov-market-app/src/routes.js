import login from './components/User/Login'
import itemList from './components/Item/ItemList'
import register from './components/User/Register'
import favorites from './components/User/Favorites';

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
    }
]