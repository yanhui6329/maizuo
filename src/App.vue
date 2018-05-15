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
  }
}
</script>

<style lang = "scss">


</style>
