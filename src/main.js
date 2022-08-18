import { createApp } from 'vue'
import App from './App.vue' 
import router from "./router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'devextreme/dist/css/dx.light.css';

 
createApp(App).use(router,VueAxios,axios).mount('#app')