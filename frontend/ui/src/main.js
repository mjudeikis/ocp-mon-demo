// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuetify from 'vuetify'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(require('vue-resource'))


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
