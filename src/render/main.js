// import devtools from '@vue/devtools'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 单独启动 vue-tools
// if (process.env.NODE_ENV === 'development') {
//   devtools.connect(/* host, port */)
// }
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
