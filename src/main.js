// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  store
} from './store/'
import VueCookies from 'vue-cookies'
import VuejsDialog from "vuejs-dialog"
// Tell Vue to install the plugin.
Vue.use(VuejsDialog, {
  html: true,
  okText: 'ตกลง',
  cancelText: 'ยกเลิก',
  animation: 'bounce',
  type: "soft"
})
Vue.config.productionTip = false
Vue.use(VueCookies)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('./assets/dashboard.css')
