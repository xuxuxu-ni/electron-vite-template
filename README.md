# electron-vite-template
## 命令说明
### 安装依赖
```
yarn install
```
### 启动项目
```
yarn dev
```
### 打包win 64位
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
### 打包linux
```
yarn build:linux
```
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
根据提示进行填写提交信息,此次提交的适用范围模板在`.cz-config.js`文件`scopes`属性中针对使用的项目自行修改
commit的时候会校验 commit信息是否规范,校验通过之后会校验提交代码是否规范,不规范的会自动修复,修复不了的会终止提交,并且指出不符合规范的代码所在文件的位置

### 版本发布
```
yarn release
```
需要发布版本的时候运行该命令会根据git提交记录,自动生成`CHANGELOG.md`文件并在里面记录当前版本说明和更改`package.json`文件的版本号,只会自动记录提交类型为`新功能`和`bug修复`的记录,所以git提交说明很重要,并且会打上该版本的`tag`,
不过并不会推送到远程仓库,需要手动推送`tag`
