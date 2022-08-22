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
// const {URL} = require('url');
const {checkUpdate} = require('../autoUpdater')

// electron > 12 以后使用remote
require('@electron/remote/main').initialize()
// 渲染进程使用 remote 示例
// const { BrowserWindow } = require('@electron/remote')

const newUrl = path.join(process.cwd(),'/resources')
const publicPath = isDev ? path.join(path.resolve('./'), '/public').replace(/\\/g, '\\\\'):newUrl // 根据当前代码的js相对static文件夹路径


process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = String(true)

// eslint-disable-next-line no-undef
let win: Electron.CrossProcessExports.BrowserWindow | null = null

function createWindow () {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: publicPath  + '/icons/icon.ico',
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
    app.dock.setIcon(publicPath + '/icons/icon.png')
  }

  const pageUrl = isDev
    ? `http://localhost:${process.env.PORT}`: `file://${path.join(__dirname, '../../render/dist/index.html')}`
  // : new URL('../render/dist/index.html', 'file://' + __dirname).toString();

  win.loadURL(pageUrl).then(() => {
    console.log(chalk.green(`electron 启动完成,当前访问: http://localhost:${process.env.PORT}`))
    console.log(chalk.green(startLog))
  })

  if (isDev) win.webContents.openDevTools({mode: 'bottom'})
  win.on('ready-to-show', function () {
    // @ts-ignore
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
  if (isDev) session.defaultSession.loadExtension(path.resolve('./public/devTool')).then(() =>{})
})
app.on('ready', () => {
  if (!isDev) checkUpdate()
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

