
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '',
        name: 'UserList',
        component: () => import('pages/UserList')
      },
      { path: 'newUser',
        name: 'NewUser',
        component: () => import('pages/NewUser')
      },
      {
        path: '/update/:id',
        name: 'UpdateUser',
        component: () => import('pages/UpdateUser')
      },
      {
        path: '/error/:errorMsg',
        name: 'Error',
        component: () => import('pages/Error')
      }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
