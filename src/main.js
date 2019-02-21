import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
window.$ = window.jQuery = require('jquery');
window.axios = require('axios');
window.moment = require('moment');

Vue.config.productionTip = false


router.beforeEach((to, from,next) => {
    if (to.name == "login" && window.localStorage.getItem("wdoa_token")) {
        next('/console')
    }
    if (!localStorage.getItem("wdoa_token") && to.name != "login") {
        next("/");
    }
    next();
})

let app = new Vue({
  router,
  render: h => h(App)
});


window.baseURL = 'http://192.168.1.112:5757' //localhost
// window.baseURL = 'http://192.168.1.240:8083/pmis_api' //online
axios.defaults.baseURL = window.baseURL + '/index.php/api' //localhost
axios.interceptors.request.use(function(config){
	if (localStorage.hasOwnProperty('wdoa_token')) {
		config.headers.Token = 'Bearer ' + localStorage.getItem("wdoa_token");
	}
	return config;
	},function(error){
		return Promise.reject(error);
	}
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      console.log(error.response);
      switch (error.response.status) {
        case 400:
            app.$alert('还没有登录', '请登录', {
				confirmButtonText: '登录',
				callback: action => {
                    window.top.location.replace("/")
				}
			});
            break;
        case 401:
            app.$alert('您的认证信息错误，请重新登录!', '认证失败', {
				confirmButtonText: '重新登录',
				callback: action => {
                    window.top.location.replace("/")
				}
			});
            break;
        case 402:
            app.$alert('您的认证信息已失效，请重新登录!', '认证失效', {
				confirmButtonText: '重新登录',
				callback: action => {
                    window.top.location.replace("/")
				}
			});
            break;
		case 403:
            // this.$alert('您的认证信息已失效，请重新登录!', '没有权限');
			app.$msgbox({
				message: '没有执行该操作的权限',
				type: 'warning',
				duration : 1000
	        });
            break;
		case 404:
            // this.$alert('您的认证信息已失效，请重新登录!', '没有权限');
			app.$msgbox({
				message: '没有执行该操作的权限',
				type: 'warning',
				duration : 1000
	        });
            break;
        }
    }
    return Promise.reject(error);   // 返回接口返回的错误信息
});
Vue.filter("dateText",(time) => {
    return moment(time* 1000).format("YYYY-MM-DD");
})
Vue.filter("tofixed",(value) => {
    return value.toFixed(2);
})
app.$mount('#app')
