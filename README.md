#  electron-vite-template
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D%206.0.0-blue.svg" />
  <img src="https://img.shields.io/badge/npm-%3E%3D%203.0.0-blue.svg" />
  <a href="https://github.com/xuxuxu-ni/vue-xuAdmin/blob/master/README.md">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/xuxuxu-ni/vue-xuAdmin/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

electron-vite-template 主进程使用rollup,渲染进程使用 vite 编译的一个electron项目模板,适用于 vue, react 等任何框架.
可以打包成window, liunx, macOS 等系统的安装包,减少项目初期构建工作, 提高工作效率。

### 🏠 [Homepage](https://xuxuxu-ni.github.io/vue-xuAdmin/dist/)
## Author

👤 **xuxuxu-ni**

* Github: [@xuxuxu-ni](https://github.com/xuxuxu-ni)
* QQ: 595485548
* QQ群: 157216616
* email: 595485548@qq.com

## 命令说明

### 启动项目
```
yarn dev
```
![image.png](https://s2.loli.net/2022/08/05/NdaDkQwuASlrexh.png)
### 默认打包适用于本机操作系统和位数的版本
```
yarn build
```
### 打包win 32位
```
yarn build:win32
```
### 打包mac
```
yarn build:mac
```
![_EE30210A-5465-547E-93EA-4CC0B5F62135_.jpg](https://s2.loli.net/2022/08/05/k1rZAW5Xv4Hhwg3.jpg)
### 打包linux
```
yarn build:linux
```
![image.png](https://s2.loli.net/2022/08/05/sgDUjxkboZpA4c9.png)
### 代码检查
```
yarn lint
```
### Run your unit tests
```
yarn test:unit
```
### Run your end-to-end tests
```
yarn test:e2e
```
### 代码提交
```
yarn commit
```
根据提示进行填写提交信息,此次提交的适用范围模板在`.cz-config.js`文件`scopes`属性中针对使用的项目自行修改,
commit的时候会校验 commit信息是否规范,校验通过之后会再次校验提交代码是否规范,不规范的代码框架会自动修复,修复不了的会终止提交,并且指出不符合规范的代码所在文件的位置和行数
![image.png](https://s2.loli.net/2022/08/05/i8nhKjzEgQdLauJ.png)

### 版本发布
```
yarn release
```
需要发布版本的时候运行该命令会根据git提交历史记录,自动生成`CHANGELOG.md`文件并在里面记录当前版本说明和更改`package.json`文件的版本号,只会自动记录提交类型为`新功能`和`bug修复`的记录,所以git提交说明很重要,并且会打上该版本的`tag`,
不过并不会推送到远程仓库,需要手动推送`tag`

### 根据不同的项目,识别对应项目的代码打对应的包
假如同一个程序,不同的客户有各自特定的需求,如果每个客户都创建一个仓库的话,一百个客户就有一百个仓库不便于管理,也不适合使用 Monorepo, 我们需要把不同的页面和组件单独抽离出来,在进行开发或者打包的时候让框架自动识别去找我们需要的页面和组件.
以`项目一`,`项目二`为例,只要在`views`和`components`目录下创建对应项目的文件夹,把各自项目的专属代码写在对应的文件夹中就可以了,
然后开发和打包的时候只要更改 `src/render/utils/getModules.js`文件中`import.meta.glob`和`import.meta.globEager`参数中目录名成就行可以,例如:`import.meta.glob('../views/项目一/*.vue')`改成`import.meta.glob('../views/项目二/*.vue')`(这里不允许字符串拼接,所以不能去读取配置文件只能手动去改),这样开发或者打包会自动的识别对应项目的代码

### 自动更新
目前使用的文件服务器是minio,配置信息在 `package.json`文件里`publish`属性,和`src/main/autoUpdater.js`文件
