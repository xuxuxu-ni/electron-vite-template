/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2021/7/11
 * Description: 文件描述
 */
import chalk from 'chalk'
import {startLog} from '../../script/utils'
const {app, BrowserWindow, session} = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')

const {checkUpdate} = require('../autoUpdater')


const newUrl = path.join(process.cwd(),'/resources')
const staticPath = isDev ? path.join(path.resolve('./'), '/static').replace(/\\/g, '\\\\'):newUrl // 根据当前代码的js相对static文件夹路径

console.log(staticPath)

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = String(true)

let win:any = null

function createWindow () {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: staticPath  + '/icons/icon.ico',
    webPreferences: {
      preload: path.join(__dirname, '../../preload/index.js'),
      nodeIntegration: true,
      webviewTag: true,
      contextIsolation: false,
      webSecurity: false
    },
    show: isDev
  })
  if (process.platform === 'darwin') {
    app.dock.setIcon(staticPath + '/icons/icon.png')
  }

  const pageUrl = isDev
    ? `http://localhost:${process.env.PORT}`: `file://${path.join(__dirname, '../../render/dist/index.html')}`

  win.loadURL(pageUrl).then(() => {
    console.log(chalk.green(`electron 启动完成,当前访问: http://localhost:${process.env.PORT}`))
    console.log(chalk.green(startLog))
  })

  if (isDev) win.webContents.openDevTools({mode: 'bottom'})
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
  if (isDev) session.defaultSession.loadExtension(path.resolve('./static/devTool')).then(() =>{})
})
app.on('ready', () => {
  if (!isDev) checkUpdate()
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

