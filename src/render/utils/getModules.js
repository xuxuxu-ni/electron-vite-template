/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2021/10/9
 * Description: 文件描述
 */
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const letterToLowerCase = (name) => `${name[0].toLowerCase()}${name.slice(1)}`
const letterToUpperCase = (name) => `${name[0].toUpperCase()}${name.slice(1)}`

function getComponentsGlob() {
  return import.meta.glob('../components/项目一/*.vue')
}
function getComponentsGlobEager() {
  return import.meta.globEager('../components/项目一/*.vue')
}
function getModulesGlob() {
  return import.meta.glob('../views/项目一/*.vue')
}
function getModulesGlobEager() {
  return import.meta.globEager('../views/项目一/*.vue')
}
// 自动注册组件
export const asyncComponent = function (app) {
  const modules = getComponentsGlob()
  const components = getComponentsGlobEager()

  Object.keys(modules).forEach((key) => {
    const viewSrc = components[key]
    const file = viewSrc.default || viewSrc

    const componentName = upperFirst(
      camelCase(
        key
          .split('/')
          .pop()
          .replace(/\.\w+$/, '')
      )
    )

    app.component(componentName, file)
  })
}

// 自动注册路由
export const vueRouters = function () {
  let routerList = []
  const modules = getModulesGlob()
  const components = getModulesGlobEager()

  Object.keys(modules).forEach(key => {
    const viewSrc = components[key]
    const file = viewSrc.default || viewSrc

    if (!file.isRouter) return
    // 首字母转小写 letterToLowerCase 首字母转大写 letterToUpperCase
    routerList.push({
      path: `/${letterToLowerCase(file.name)}`,
      name: `${letterToUpperCase(file.name)}`,
      component: modules[key]
    })
  })
  return routerList
}
