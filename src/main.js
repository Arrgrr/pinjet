// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import {
  library
} from '@fortawesome/fontawesome-svg-core'

import {
  fal
} from '@fortawesome/pro-light-svg-icons'

import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(fal)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router,
})
