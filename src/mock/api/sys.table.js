const tableDB = [
  { username: 'admin', password: 'admin', uuid: 'admin-uuid', name: '管理员' },
  { username: 'editor', password: 'editor', uuid: 'editor-uuid', name: '编辑' },
  { username: 'user1', password: 'user1', uuid: 'user1-uuid', name: '用户1' }
]

export default [
  {
    path: '/api/tableData',
    method: 'get',
    handle ({ body }) {
      return {
        code: 0,
        msg: '获取数据成功',
        data: tableDB
      }
    }
  }
]
