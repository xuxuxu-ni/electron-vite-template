/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2021/7/27
 * Description: 文件描述
 */
const {app, dialog} = require('electron');
const { autoUpdater } = require('electron-updater')
module.exports = {
 checkUpdate: function (){

    if(process.platform == 'darwin'){
        autoUpdater.setFeedURL('http://minio.shennong.sn:9000/minio/shennong/client/')
    }else{
        autoUpdater.setFeedURL('http://minio.shennong.sn:9000/shennong/client/')
    }
     autoUpdater.channel="latest";
    //检测更新
    autoUpdater.checkForUpdates()

    //监听'error'事件
    autoUpdater.on('error', (err) => {
        console.log('err',err)
    })

    //监听'update-available'事件，发现有新版本时触发
    autoUpdater.on('update-available', () => {
        console.log('found new version')
    })

    //默认会自动下载新版本，如果不想自动下载，设置autoUpdater.autoDownload = false

    //监听'update-downloaded'事件，新版本下载完成时触发
    autoUpdater.on('update-downloaded', () => {
        dialog.showMessageBox({
            type: 'info',
            title: '应用更新',
            message: '发现新版本，是否更新？',
            buttons: ['是', '否']
        }).then((buttonIndex) => {
            if(buttonIndex.response == 0) {  //选择是，则退出程序，安装新版本
                autoUpdater.quitAndInstall()
                app.quit()
            }
        })
    })
}
}
