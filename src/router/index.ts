import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import viewsRouter from './views'
import pageRouter from './page'

// 对RouteRecordRaw类型进行扩展
export type AddRouteRecordRaw = RouteRecordRaw & {
    hidden?: boolean
}

const router = createRouter({
    history: createWebHashHistory(),
    routes: [...viewsRouter, ...pageRouter] as AddRouteRecordRaw[]
})

export default router
