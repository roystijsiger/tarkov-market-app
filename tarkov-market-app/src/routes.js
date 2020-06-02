import login from './components/User/Login'
import itemList from './components/Item/ItemList'

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
        path: '/item/list',
        component: itemList
    }
]