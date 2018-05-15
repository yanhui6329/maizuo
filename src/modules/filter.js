

import Vue from 'vue'

//事件过滤器
Vue.filter('timer',(value)=>{
    let date = new Date(value);
    return (date.getMonth()+1)+'月'+date.getDate()+'日'

})