// import devtools from '@vue/devtools'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 自动注册组件
import { asyncComponent } from './utils/getModules'

asyncComponent(Vue)
// 单独启动 vue-tools index.html里面注释记得放开 同时运行 dev:tools
// if (process.env.NODE_ENV === 'development') {
//   devtools.connect(/* host, port */)
// }
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
