/*
 * @Author: your name
 * @Date: 2020-12-24 17:37:01
 * @LastEditTime: 2020-12-24 17:53:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \pro-manage\src\api\user.ts
 */
import http from "@/utils/http/axios";
import {
  LoginParams,
  LoginResultModel,
  GetUserInfoByUserIdParams,
  GetUserInfoByUserIdModel,
} from "./model/userModel";
enum Api {
  login = "/login",
  logout = "/login/logout",
  userlist = "/userlist",
}
/**
 * @description: 获取用户信息
 */
export function getUserInfo() {
  return http.request(
    {
      url: Api.login,
      method: "POST",
    },
    {
      isTransformRequestResult: false,
    }
  );
}

/**
 * @description: 用户登录
 */
export function login(params: LoginParams) {
  return http.request(
    {
      url: Api.login,
      method: "POST",
      params,
      // headers: {
      //   'Authorization': token
      // }
    },
    {
      isTransformRequestResult: false,
    }
  );
}

/**
 * @description: 用户列表数据
 */
export function userlist() {
  return http.request(
    {
      url: Api.userlist,
      method: "GET",
    },
    {
      isTransformRequestResult: false,
    }
  );
}

/**
 * @description: 用户修改密码
 */
// export function changePassword(params, uid) {
//   return http.request({
//     url: `/user/u${uid}/changepw`,
//     method: 'POST',
//     params,
//   }, {
//     isTransformRequestResult: false
//   });
// }

/**
 * @description: 用户登出
 */
// export function logout(params) {
//   return http.request({
//     url: Api.logout,
//     method: 'POST',
//     params,
//   });
// }
