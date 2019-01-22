import request from '@/plugin/axios'
/**
 * @description 登录接口
 * @export
 * @param {*} data
 * @returns
 */
export function AccountLogin (data) {
  return request({
    url: '/auth',
    method: 'post',
    data
  })
}
