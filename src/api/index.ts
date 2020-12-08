// import Vue from 'vue'
import axios from 'axios';
import {LoginForm} from './model/LoginForm';
axios.defaults.baseURL = 'http://localhost:3000'
// axios.defaults.headers.common['Authorization'] = 'Bearer '+ localStorage.getItem('token');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export default {
 
  // 登陆
  denglu: (data: LoginForm) => {
    console.log("请求中。。");
    return axios.post('/login', data)
  },
  // 验证token
  homes: () => {
    return axios.get('/home');
  },
  // 列表
  lists: () => {
    return axios.get('/lists');
  },
//   // 添加用户
//   adduser: (data) => {
//     return axios.post('/adduser', data)
//   },
//   // 获取新闻
//   news: () => {
//     return axios.get('/news');
//   },
//   //  图形化数据
//   hchar: () => {
//     return axios.get('/hchar');
//   },
//   // 编辑用户
//   edit: (data) => {
//     return axios.post('/edit', data)
//   },
//   // 删除用户
//   dalete:(data) => {
//     return axios.delete('/delete',{data})
//   },
// //  批量删除用户
//   removeall:(data) => {
//     return axios.post('/rmall',data)
//   }
}
