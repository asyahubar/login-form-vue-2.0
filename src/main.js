import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.prototype.axios = axios

import Login from './components/Login.vue'
import Home_Page from './components/Home_Page.vue'
import App from './App.vue'

const routes = [
    { path: '/login', component: Login },
    { path: '/asya', component: Home_Page }
]

const router = new VueRouter({
    routes: routes
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')


