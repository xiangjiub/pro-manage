import http from '@/utils/http/axios/index'
import {RequestEnum} from '@/enums/httpEnum'

enum Api{
  adminRole = '/role/list',
  adminRoleAccess = '/admin/role_access',
  RoleDetail = '/role/:id'
}

/**
 * 获取角色列表
 * @param params
 */
export function getAdminRole(params) {
    return http.request({
      url: Api.adminRole,
      method: RequestEnum.GET,
      params,
    },
    {
      isTransformRequestResult: false,
    }
    );
}

/**
 * 获取角色明细
 * @param params
 */
export function getRoleDetail(params) {
  return http.request({
    url: Api.RoleDetail,
    method: RequestEnum.GET,
    params,
  },
  {
    isTransformRequestResult: false,
  }
  );
}

