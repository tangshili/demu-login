import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
window.$ = window.jQuery = require('jquery');
window.axios = require('axios');
window.moment = require('moment');

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
