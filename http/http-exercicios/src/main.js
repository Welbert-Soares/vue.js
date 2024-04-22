import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'


const app = createApp(App)

axios.defaults.baseURL = 'https://curso-vue-67e5a-default-rtdb.firebaseio.com/'

app.config.globalProperties.$http = axios

app.mount('#app')
