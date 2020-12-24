/*
 * @Author: your name
 * @Date: 2020-12-24 18:01:28
 * @LastEditTime: 2020-12-24 18:01:54
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \pro-manage\src\api\model\menuModel.ts
 */
// import { Meta } from '@/router/types';
export interface MenuItem {
  icon: string | null;
  id: number;
  name: string;
  parentId: number;
  sort: number;
  url: string;
}

/**
 * @description: 获取菜单接口
 */
export interface GetByUserIdParams {
  userId: number | string;
}

/**
 * @description: 获取菜单返回值
 */
export type GetMenuListByUserIdResult = MenuItem[];

/**
 * 角色code返回值
 */
export type GetAuthCodeByUserIdResult = string[];
