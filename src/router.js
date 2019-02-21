import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
        },
        {
            path: '/console',
            name: 'base',
			redirect : '/console/home',
            component: () => import(/* webpackChunkName: "base" */ './Base.vue'),
            children:[
                {
                    path: 'home',
                    name: 'home',
                    component: Home
                },
                {
                    path: 'about',
                    name: 'about',
                    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
                },

				{
					path: 'inventory',
					name: 'inventory',
					component: () => import(/* webpackChunkName: "inventory" */ './views/repository/Index.vue')
				},
                {
                    path: 'inventoryrecycle',
                    name: 'inventoryrecycle',
                    component: () => import(/* webpackChunkName: "inventoryrecycle" */ './views/repository/Index.vue')
                },
				{
                    path: 'repository',
                    name: 'repository',
                    component: () => import(/* webpackChunkName: "repository" */ './views/repository/List.vue')
                },

				{
                    path: 'user/list',
                    name: 'userList',
                    component: () => import(/* webpackChunkName: "userList" */ './views/user/List.vue')
                },
            ]
        }
    ]
})
