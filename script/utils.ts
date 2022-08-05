/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2021/7/12
 * Description: 文件描述
 */
const figlet = require('figlet');
let startLog = ''
figlet.text('electron-vite', {
    font: 'Big Money-nw',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 'default',
    whitespaceBreak: true
}, function(err: any, data: string) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    startLog = data;
});

export {startLog}
