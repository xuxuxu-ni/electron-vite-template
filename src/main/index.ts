/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2021/7/11
 * Description: 文件描述
 */
import chalk from "chalk";
import {startLog} from "../../script/utils";
const {app, BrowserWindow, session} = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = String(true)
function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, '../../preload/index.js')
        },
        show: false // 先隐藏
    })

    const URL = isDev
        ? `http://localhost:${process.env.PORT}`
        : `file://${path.join(__dirname, '../../render/dist/index.html')}`
    win.loadURL(URL).then(() => {
        console.log(chalk.green(`electron 启动完成,当前访问: http://localhost:${process.env.PORT}`))
        console.log(chalk.green(startLog))
    })

    console.log('isDev',isDev);
    if (isDev) win.webContents.openDevTools({mode:'bottom'});
    win.on('ready-to-show', function () {
        win.show()
    })
}
app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
    if (isDev) session.defaultSession.loadExtension(path.resolve(__dirname, '../../../public/devTool')).then(() =>{})
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

