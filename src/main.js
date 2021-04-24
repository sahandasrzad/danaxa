import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import { VueSvgIcon } from '@yzfe/vue-svgicon'
import '@yzfe/svgicon/lib/svgicon.css'

Vue.config.productionTip = false

Vue.component('icon', VueSvgIcon)

Vue.component('icon', VueSvgIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
