<template>
<div 
     v-scroll-hide="isShow"
    class="back-top-box"
     scroll-hide-distance = "500"
>

    <transition enter-active-class="fadeIn" leave-active-class="fadeOut">
    
        <div v-if = "isShow" class="back-top animated">
            <i class="fa fa-arrow-up"></i>
        </div>
    </transition>
    
</div>
</template>
 
<script>
//监听滚动条控制显示隐藏，可以在BackTop.Vue 组件mounted钩子函数中监听，mounted(){window.scroll=function(){}}但是不便于复用,像很多项目中头部在滚动到某一位置显示，所以封装独立出来，自定义指定。
export default{
    name:'BackTop',
    data(){
        return {
            isShow:false
        }
    }
    
}
</script>
<style lang="sass" scoped>
@import './index.scss'
</style>
