<template>
  <div class="films page">
        <film-nav 
            :type = " type "
            :change-type = "changeType"
        ></film-nav>

        <films-box :type = " type "></films-box>
        <!-- size是用来控制样式的类名 -->
        <!-- 在组件上加指令和类名相当于加在了组件的第一个div上 -->
        <!-- v-back-top:click等同于v-back-top="click" -->
        <back-top 
          size='small'
          v-back-top:click
         ></back-top>
  </div>
</template>

<script>
//自定义组件已经全局注册过，所以不需要引入
import FilmNav from './FilmNav'
import FilmsBox from './FilmsBox'

export default {
  name: 'Films',
  data () {
      return {
          type: 'now-playing'
      }
  },
  methods: {
      changeType (type) {
          this.type = type
      }
  },
  components: {FilmNav, FilmsBox}
}
</script>

<style lang="scss" scoped>
    .films{
        background: #f9f9f9;
        min-height: 100vh;
        padding-left:15px; 
        padding-right:15px; 
    }
</style>


