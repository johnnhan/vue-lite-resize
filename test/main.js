import Vue from 'vue'
import App from './index.vue'
import LiteResize from '../src/main.js'
import './index.less'

Vue.config.productionTip = false
Vue.use(LiteResize)

new Vue({
  render: h => h(App),
}).$mount('#app')
