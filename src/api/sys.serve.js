import request from '@/plugin/axios'
/**
 * @description 获取工作组下的所有服务端信息
 * @export
 * @param {*} params
 * @returns
 */
export function getGroupAllServer (params) {
  return request({
    url: `/group/${params.group}/server`,
    method: 'get'
  })
}
/**
 * @description 获取工作组下的某个服务端信息
 * @export
 * @param {*} params
 * @returns
 */
export function getGroupServer (params) {
  return request({
    url: `/group/${params.group}/server/${params.server}`,
    method: 'get'
  })
}
/**
 * @description 创建工作组下的服务端信息
 * @export
 * @param {*} params
 * @returns
 */
export function createGroupServer (params) {
  return request({
    url: `/group/${params.group}/server/${params.server}`,
    method: 'post',
    data: params.data
  })
}
/**
 * @description 更新工作组下的服务端信息
 * @export
 * @param {*} params
 * @returns
 */
export function updateGroupServer (params) {
  return request({
    url: `/group/${params.group}/server/${params.server}`,
    method: 'put',
    data: params.data
  })
}
/**
 * @description 删除工作组下的服务端信息
 * @export
 * @param {*} params
 * @returns
 */
export function deleteGroupServer (params) {
  return request({
    url: `/group/${params.group}/server/${params.server}`,
    method: 'delete'
  })
}
