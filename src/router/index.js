import Vue from 'vue'

import VueRouter from  'vue-router'

import Login from '@/views/Login.vue'

Vue.use(VueRouter)

var router =new VueRouter({
    router:[
        {   name:'login',
        path: '/login',
        component:Login
        
    }
    ]
})

export default router