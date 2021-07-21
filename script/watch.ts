/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2021/7/11
 * Description: 文件描述
 */
import {join} from 'path'
import {spawn, ChildProcess} from 'child_process'
import {watch} from 'rollup'
import minimist from 'minimist'
import electron from 'electron'
import options from '../rollup.config'
import {main} from '../package.json'
import {PORT} from '../vite.config'
import chalk from "chalk";
const net = require('net')

function portInUse(port: unknown){
    return new Promise((resolve:  (value: unknown) => void)=>{
        let server = net.createServer().listen(port, 'localhost');
        server.on('listening',function(){
            server.close();
            resolve(port);
        });
        server.on('error',function(err:any){
            if(err.code == 'EADDRINUSE'){
                resolve(err);
            }
        });
    });
}

const tryUsePort = async function(port: unknown, portAvailableCallback:  (port: unknown) => void){
    let res = await portInUse(port);
    if(res instanceof Error){
        if (port !== '3000') console.log(chalk.yellow(`端口：${port} 已被占用,检测是否可连接...`));
        await tryUsePort(++(port as number), portAvailableCallback);
    }else{
        portAvailableCallback(port);
    }
}
console.log(chalk.green(`****** Vite 服务启动完成 ******`))
console.log(chalk.green(`****** 正在唤起 electron *****`))
tryUsePort(PORT, function (port: unknown) {
    port = <number>port  -1
    process.env.PORT = <string>port
}).then(() => {
    if (process.env.PORT !== '3000') console.log(chalk.green(`端口：${process.env.PORT} 可连接,尝试连接...`));
    // 解析 npm script 的命令行参数
    const argv = minimist(process.argv.slice(2))
// 加载 rollup 配置
    const opts = options(argv.env)

    // Vite 启动后以监听模式开启 Rollup 编译 Electron 主进程代码
    const watcher = watch(opts)

    let child: ChildProcess

    watcher.on('event', ev => {
        if (ev.code === 'END') {
            // 保证只启动一个 Electron 个程序
            if (child) child.kill()

            // 使用 NodeJs 子进程能力拉起 Electron 程序
            child = spawn(
                // 这里 electron 本质上只是一个字符串；指向 Electron 可执行程序的绝对路径
                electron as any,

                // 指定 Electron 主进程入口文件；既 Rollup 编译后输出文件的路径
                [join(__dirname, `../${main}`)], { stdio: 'inherit' }
            )
        }
    })


});
