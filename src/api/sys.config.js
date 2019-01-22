import request from '@/plugin/axios'
/**
 * @description 获取工作组的配置信息
 * @export
 * @param {*} params
 * @returns
 */
export function getGroupConfig (params) {
  return request({
    url: `/group/${params.group}/config/${params.config}`,
    method: 'get'
  })
}
/**
 * @description 创建工作组的配置信息(note: 配置名与工作组名相同)
 * @export
 * @param {*} params
 * @returns
 */
export function createGroupConfig (params) {
  return request({
    url: `/group/${params.group}/config/${params.config}`,
    method: 'post',
    data: params.data
  })
}
/**
 * @description 更新工作组的配置
 * @export
 * @param {*} params
 * @returns
 */
export function updateGroupConfig (params) {
  return request({
    url: `/group/${params.group}/config/${params.config}`,
    method: 'put',
    data: params.data
  })
}
/**
 * @description 删除或者重置工作组下的配置信息
 * @export
 * @param {*} params
 * @returns
 */
export function deleteGroupConfig (params) {
  return request({
    url: `/group/${params.group}/config/${params.config}`,
    method: 'delete'
  })
}
