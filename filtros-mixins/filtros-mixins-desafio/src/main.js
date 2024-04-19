import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contarLetras', function (valor) {
  return valor.split(' ').map(palavra => `${palavra} (${palavra.length})`).join(' ')
})

new Vue({
  render: h => h(App),
}).$mount('#app')
