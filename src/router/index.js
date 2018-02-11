import Vue from 'vue'
import Router from 'vue-router'
import employee from '@/components/employee/employee'
import addEmployee from '@/components/employee/addEmp'
import editEmployee from '@/components/employee/editEmp'
import dashboard from '@/components/dashboard'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/employee',
      name: 'employee',
      component: employee,
      props: true
    },
    {
      path: '/addEmployee',
      component: addEmployee
    },
    {
      path: '/editEmp',
      name: 'editEmp',
      props: true,
      component: editEmployee
    }
  ]
})
