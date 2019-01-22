import request from '@/plugin/axios'
/**
 * @description 获取工作组下的所有用户信息
 * @export
 * @param {*} params
 * @returns
 */
export function getUsersInGroup (params) {
  return request({
    url: `/group/${params.group}/user`,
    method: 'get'
  })
}
/**
 * @description 工作组下创建用户
 * @export
 * @param {*} params
 * @returns
 */
export function createUserInGroup (params) {
  return request({
    url: `/group/${params.group}/user`,
    method: 'post',
    data: params.data
  })
}
/**
 * @description 绑定一个用户在工作组下
 * @export
 * @param {*} params
 * @returns
 */
export function bindUserToGroup (params) {
  return request({
    url: `/group/${params.group}/user/${params.user}`,
    method: 'post'
  })
}
/**
 * @description 删除一个用户在工作组下的绑定
 * @export
 * @param {*} params
 * @returns
 */
export function deleteUserToGroup (params) {
  return request({
    url: `/group/${params.group}/user/${params.user}`,
    method: 'delete'
  })
}
