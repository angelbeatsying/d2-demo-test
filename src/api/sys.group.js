import request from '@/plugin/axios'
/**
 * @description 获取工作组
 * @export
 * @param {*} params
 * @returns
 */
export function getGroups (params) {
  return request({
    url: `/group?offset=${params.offset}&limit=${params.limit}`,
    method: 'get'
  })
}
/**
 * @description 创建工作组
 * @export
 * @param {*} data
 * @returns
 */
export function createGroup (data) {
  return request({
    url: '/group',
    method: 'post',
    data
  })
}
/**
 * @description 删除某个工作组
 * @export
 * @param {*} params
 * @returns
 */
export function deleteGroup (params) {
  return request({
    url: `/group/${params.group}`,
    method: 'delete'
  })
}
/**
 * @description 更新某个工作组
 * @export
 * @param {*} params
 * @returns
 */
export function updateGroup (params) {
  return request({
    url: `/group/${params.group}`,
    method: 'post',
    data: params.data
  })
}
