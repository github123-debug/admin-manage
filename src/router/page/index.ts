import { AddRouteRecordRaw } from '../index'

export default [
    {
        path: '/login',
        name: 'login',
        hidden: false, // 自定义添加的属性
        meta: {
            title: '登录'
        },
        component: () => import('../../page/login.vue')
    },
    {
        path: '/:pathMatch(.*)', // 或者 /:pathMatch(.*)*
        name: '404',
        hidden: false, // 自定义添加的属性
        meta: {
            title: '404'
        },
        component: () => import('../../page/notFount.vue')
    }
] as AddRouteRecordRaw[]
