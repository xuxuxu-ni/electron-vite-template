/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2021/7/22
 * Description: 文件描述
 */
module.exports = [
    {
        type: 'input',
        name: 'name',
        message: 'project name',
        default: 'zy-vue-template-cli',
    },
    {
        type: 'input',
        name: 'description',
        message: 'description',
        default: '通过zyjk-cli可以定制化编译成项目需要的专属模板',
    },
    {
        type: 'input',
        name: 'author',
        message: 'author',
        default: 'zyjk',
    },
    {
        type: 'confirm',
        name: 'router',
        message: '是否安装router',
        default: true,
    },
    {
        type: 'confirm',
        name: 'eslint',
        message: '是否安装eslint',
        default: true,
    },
    {
        type: 'confirm',
        name: 'typescript',
        message: '是否使用typescript',
        default: true,
    },
];
