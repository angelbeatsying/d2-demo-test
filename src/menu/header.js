// 菜单 顶栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '演示页面',
    icon: 'folder-o',
    children: [
      { path: '/demo/page1', title: '工作组' },
      { path: '/demo/page2', title: '用户组' },
      { path: '/demo/page3', title: '页面 3' }
    ]
  }
]
