import Vue from 'vue'
import Router from 'vue-router'
import employee from '@/components/employee/employee'
import addEmployee from '@/components/employee/addEmp'
import editEmployee from '@/components/employee/editEmp'

Vue.use(Router)

export default new Router({
  routes: [
    // dynamic segments start with a colon
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
