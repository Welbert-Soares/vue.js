import Vue from 'vue'
import App from './App.vue'
import ContadorComponent from './ContadorComponent.vue'

Vue.config.productionTip = false
Vue.component('app-contador', ContadorComponent)

new Vue({
  render: h => h(App),
}).$mount('#app')
