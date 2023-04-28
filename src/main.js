import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import loadingEffect from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { currency } from './methods/filters';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.config.globalProperties.$filters = {
  currency,
};
app.use(VueAxios, axios);
app.use(router);
app.component('loadingEffect', loadingEffect); // 全域註冊該套件，不同於 app.use 為安裝套件
app.mount('#app');
