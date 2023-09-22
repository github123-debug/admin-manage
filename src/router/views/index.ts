import { AddRouteRecordRaw } from '../index'
import Layout from '@/views/main.vue'

export default [
    {
        path: '/',
        component: Layout,
        name: 'main',
        meta: {
            title: '容器'
        },

    },
    {
        path: '/user',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'user',
                meta: {
                    title: '用户管理'
                },
                component: () => import('@/views/pages/user.vue')
            }
        ]
    }
] as AddRouteRecordRaw[]
