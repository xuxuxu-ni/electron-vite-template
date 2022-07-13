/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2021/7/11
 * Description: 文件描述
 */
import path, {join} from 'path'
import { defineConfig } from 'vite'
import dotenv from 'dotenv'
import { createVuePlugin } from 'vite-plugin-vue2'
import {minifyHtml, injectHtml} from 'vite-plugin-html'
import pag from './package.json'
dotenv.config({ path: join(__dirname, '.env') })

export const PORT = process.env.PORT
export default defineConfig( {
    base: './',
    build:{
        outDir: './src/render/dist'
    },
    server: {
        port: Number(process.env.PORT),
    },
    plugins: [
        createVuePlugin({
            jsx: true,
        }),
        minifyHtml(),
        injectHtml({
            injectData: {
                title: pag.name,
                injectScript: '<script src="/src/render/main.js"></script>',
            },
        }),
    ],
    resolve: {
        alias: [
            { find: /^~/, replacement: '' },
            {
                find: '@',
                replacement: path.resolve(__dirname, 'src/render'),
            },
        ],
    },
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
    }
})
