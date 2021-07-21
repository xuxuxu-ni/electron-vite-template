/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2021/7/11
 * Description: 文件描述
 */
import { builtinModules } from 'module'
import { join } from 'path'
import { RollupOptions } from 'rollup'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'

export default (env = 'production') => {
    const options: RollupOptions = {
        input: join(__dirname, './src/main/index.ts'),
        output: {
            file: join(__dirname, './src/main/dist/index.js'),
            format: 'commonjs', // 使用 CommonJs 模块化
        },
        plugins: [
            nodeResolve(), // 支持 node_modules 下面的包查找
            commonjs(), // 支持 CommonJs 模块
            json(), // 支持引入 json 文件
            typescript({
                module: 'ESNext', // 支持 typescript
            }),
        ]
    }

    return options
}
