import request from '@/plugin/axios'
/**
 * @description 获取所有用户信息
 * @export
 * @param {*} params
 * @returns
 */
export function getGroupAllUser (params) {
  return request({
    url: `/user`,
    method: 'get'
  })
}
/**
 * @description 获取某个用户信息
 * @export
 * @param {*} params
 * @returns
 */
export function getGroupUser (params) {
  return request({
    url: `/user/${params.user}`,
    method: 'get'
  })
}
/**
 * @description 创建用户信息
 * @export
 * @param {*} params
 * @returns
 */
export function createUser (params) {
  return request({
    url: `/${params.user}`,
    method: 'post',
    data: params.data
  })
}
/**
 * @description 更新某个用户信息
 * @export
 * @param {*} params
 * @returns
 */
export function updateGroupServer (params) {
  return request({
    url: `/user/${params.user}`,
    method: 'put',
    data: params.data
  })
}
/**
 * @description 删除某个用户信息
 * @export
 * @param {*} params
 * @returns
 */
export function deleteUser (params) {
  return request({
    url: `/user/${params.user}`,
    method: 'delete'
  })
}
