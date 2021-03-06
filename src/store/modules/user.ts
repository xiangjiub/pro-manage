import {Module} from 'vuex'
import {createStorage} from '@/utils/Storage'
import {login, getUserInfo,userlist} from '@/api/user'
// import {logout} from '@/api/user'

import {ACCESS_TOKEN, CURRENT_USER} from '@/store/mutation-types'
// import { welcome } from '@/utils/util'

const Storage = createStorage({storage: localStorage})

const state = {
    token: Storage.get(ACCESS_TOKEN, ''),
    name: '',
    welcome: '',
    avatar: '',
    roles: [],
    info: Storage.get(CURRENT_USER, {})
}

type UserStateType  = typeof state

const user: Module<UserStateType, any> = {
    namespaced: true,
    state,
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
            console.log(`token的值${token}`);
        },
        SET_NAME: (state, {name, welcome}) => {
            state.name = name
            state.welcome = welcome
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        },
        SET_INFO: (state, info) => {
            state.info = info
        }
    },

    actions: {
        // 登录
        Login({commit}, userInfo) {
            console.log(userInfo);
            return new Promise((resolve, reject) => {
                
                login(userInfo).then(response => {
                    const {code, message} = response
                    if (code == 200) {

                        console.log(`Loginact的${response.token}`)
                        Storage.set(ACCESS_TOKEN, response.token, 7 * 24 * 60 * 60 * 1000)
                        // Storage.set(CURRENT_USER, result, 7 * 24 * 60 * 60 * 1000)
                        commit('SET_TOKEN', response.token)
                        // todo
                        // commit('SET_INFO', result)
                    }
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 获取用户信息
        GetInfo({commit}) {
            return new Promise((resolve, reject) => {
                getUserInfo().then(response => {
                    const result = response.result

                    if (result.role && result.role.permissions.length > 0) {
                        const role = result.role
                        role.permissions = result.role.permissions
                        role.permissions.map( per => {
                            if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
                                const action = per.actionEntitySet.map( action => {
                                    return action.action
                                })
                                per.actionList = action
                            }
                        })
                        role.permissionList = role.permissions.map( permission => {
                            return permission.permissionId
                        })
                        commit('SET_ROLES', result.role)
                        commit('SET_INFO', result)
                    } else {
                        reject(new Error('getInfo: roles must be a non-null array !'))
                    }

                    // commit('SET_NAME', { name: result.name, welcome: welcome() })
                    commit('SET_AVATAR', result.avatar)

                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 获取列表数据
        Userlist({commit, state}){
            return new Promise((resolve,reject) => {
                userlist().then(response => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 登出
        Logout({commit, state}) {
            return new Promise((resolve) => {
                commit('SET_ROLES', '')
                commit('SET_INFO', '')
                Storage.remove(ACCESS_TOKEN)
                Storage.remove(CURRENT_USER)
                resolve('')
                // logout(state.token).then(() => {
                //     commit('SET_TOKEN', '')
                //     commit('SET_ROLES', [])
                //     Storage.remove(ACCESS_TOKEN)
                //     resolve()
                // }).catch(() => {
                //     resolve()
                // })
            })
        }

    }
}

export {UserStateType, state}
export default user
