import { createApp } from 'vue'
import App from './App.vue' 
import router from "./router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'devextreme/dist/css/dx.light.css';
import 'element-plus/es/components/date-picker/style/css'
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/vi'
import BaseToast from './components/base/BaseToast.vue'

const app = createApp(App);

app.component("base-toast",BaseToast)
app.use(router,VueAxios,axios).use(ElementPlus, {
    locale: locale,
}).mount('#app')

// createApp(App).use(router,VueAxios,axios).use(ElementPlus, {
//     locale: locale,
// }).mount('#app')