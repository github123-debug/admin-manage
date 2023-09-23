import {createApp} from 'vue'
import App from './App.vue'
import router from "./router"
import Antd from 'ant-design-vue'
import "lib-flexible-computer";
// 样式重置表
import 'normalize.css/normalize.css'
import '@/assets/reset.css'


const app = createApp(App)
app.use(router)
app.use(Antd)

app.mount('#app')
