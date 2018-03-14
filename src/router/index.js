import Vue from 'vue'
import Router from 'vue-router'
import employee from '@/components/employee/employee'
import addEmployee from '@/components/employee/addEmp'
import editEmployee from '@/components/employee/editEmp'
import dashboard from '@/components/dashboard'
import attend from '@/components/attend/attend'
import workPlace from '@/components/workPlace/workPlace'
import addWorkplace from '@/components/workPlace/addWorkplace'
import checkOut from '@/components/attend/checkOut'

Vue.use(Router)
const Default = {
  template: '<div>default</div>'
}
export default new Router({
  mode: 'history',
  base: '/',
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
    },
    {
      path: '/attend',
      name: 'attend',
      component: attend
    },
    {
      path: '/checkOut',
      name: 'checkOut',
      component: checkOut
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
