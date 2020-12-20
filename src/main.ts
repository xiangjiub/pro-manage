import { createApp } from 'vue'
import App from './App.vue'
import {setupRouter} from './router/'
import store from './store'
import Antd from 'ant-design-vue';
import Axios from 'axios';
import Api from './api'
import './assets/css/tailwind.css'
// createApp.prototype.axios = Axios;
// createApp.prototype.api = Api;
import   './axios/axios'

// import { Button } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// const http = Axios.create({
//     baseURL : 'http://localhost:3000'
//     })
const app = createApp(App);

app.use(store);

// 挂载路由
setupRouter(app);

app.use(Antd);

app.mount('#app')
