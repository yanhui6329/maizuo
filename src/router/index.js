import Vue from 'vue';
import VueRouter from 'vue-router'

import bus from '../modules/bus'
Vue.use(VueRouter);


import Home from '../components/pages/Home/Home';
import Films from '../components/pages/Films/Films';
import NotFound from '../components/pages/NotFound/NotFound'


const router = new VueRouter({
    mode:"history",
    routes:[
        {path:'',redirect:'/home'},
        {path:'/home',name:'home',component:Home},
        {path:'/films',name:'films',component:Films},
        {path:'/not-found',name:'not-found',component:NotFound},
        {path:'**',redirect:'/not-found'}

     ]
})

//全局路由钩子，只要路由跳转就更改Header的isNavShow
// router.beforeEach((to,from,next)=>{

//     bus.$emit('close-nav')
//     next()
// })

export default router;