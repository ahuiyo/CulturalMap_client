import Vue from 'vue'
import Router from 'vue-router'

import UserManage from '../pages/Admin/UserManage/UserManage'
import ManageInfo from "../pages/Admin/ManageInfo/ManageInfo";
import Login from "../pages/Login/Login"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/usermanage',
      name: 'UserManage',
      component: UserManage,
      meta: {
        bcManage: true
      }
    },
    {
      path: '/manageinfo',
      name: 'manageinfo',
      component: ManageInfo,
      meta: {
        bcManage: true
      }
    }

  ]
})
