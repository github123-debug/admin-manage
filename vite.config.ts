import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import px2rem from "postcss-px2rem"
import {resolve} from 'path'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        },
        extensions: ['.js', '.json', '.ts', '.vue'],
    },
    css: {
        // 自适应配置
        postcss: {
            plugins: [
                px2rem({
                    remUnit: 192
                })
            ]
        }
    }
})
