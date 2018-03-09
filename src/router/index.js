import Vue from 'vue'
import Router from 'vue-router'
import employee from '@/components/employee/employee'
import addEmployee from '@/components/employee/addEmp'
import editEmployee from '@/components/employee/editEmp'
import dashboard from '@/components/dashboard'
import attend from '@/components/attend/attend'
import workPlace from '@/components/workPlace/workPlace'
import addWorkplace from '@/components/workPlace/addWorkplace'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/employee',
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
    },
    {
      path: '/attend',
      name: 'attend',
      component: attend
    },
    {
      path: '/workPlace',
      name: 'workPlace',
      component: workPlace
    },
    {
      path: '/addWorkplace',
      name: 'addWorkplace',
      component: addWorkplace
    }
  ]
})
