<template>
  <div id="app">
    
    <app-header></app-header>
    
    <router-view></router-view>
    
  </div>
</template>

<script>
import AppHeader from './components/commons/Header/Header'


export default {
  name: 'App',
  components: {
   AppHeader
  },
  created(){
    //保证每个页面组件都有购物车信息
    //怎样调用actions方法？dispatch
    this.$store.dispatch("initCars")
  }
}
</script>

<style lang = "scss">


</style>
