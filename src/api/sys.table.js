import request from '@/plugin/axios'

export function TableData (data) {
  return request({
    url: '/auth',
    method: 'post',
    data
  })
}
