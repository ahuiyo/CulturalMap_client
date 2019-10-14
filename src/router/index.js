import Vue from 'vue'
import Router from 'vue-router'

import UserManage from '../pages/admin/UserManage/UserManage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/usermanage'
    },
    {
      path: '/usermanage',
      name: 'UserManage',
      component: UserManage
    }
  ]
})
