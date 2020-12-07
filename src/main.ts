import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import Axios from 'axios';
import Api from './api'
// createApp.prototype.axios = Axios;
// createApp.prototype.api = Api;
import   './axios/axios'

// import { Button } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// const http = Axios.create({
//     baseURL : 'http://localhost:3000'
//     })
createApp(App).use(store).use(router).use(Antd).mount('#app')
