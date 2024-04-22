import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const app = createApp(App);

axios.defaults.baseURL = "https://curso-vue-67e5a-default-rtdb.firebaseio.com/";

axios.defaults.headers.common["Authorization"] = "abc123";

axios.interceptors.request.use(
  (config) => {
    console.log(config.method);
    // if(config.method == 'post') {
    //     config.method = 'put'
    // }
    return config;
  },
  (error) => Promise.reject(error)
);


// axios.interceptors.response.use(
//   (response) => {
//     const array = [];
//     for (let chave in response.data) {
//       array.push({ id: chave, ...response.data[chave] });
//     }

//     response.data = array;
//     return response;
//   },
//   (error) => Promise.reject(error)
// );

app.config.globalProperties.$http = axios;

app.mount("#app");
