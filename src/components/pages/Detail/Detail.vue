<template>
    <div v-if = "film.name" class="page detail">
        <div class="img-background img-box">
        	<!--一开始film是空对象加载不出来会显示 undefined 解决：在div上加v-if-->
            <img width="100%" :src="film.cover.origin" alt="">
        </div>
        {{film.name}}
    </div>
</template>
<script>
import bus from '../../../modules/bus'
export default {
    name: 'Detail',
    props: ['id'],
    data () {
        return {//挂载数据 电影信息空对象
            film: {}
        }
    },
    methods: {
        getItem () {//找借口获取数据 加暗号 加item页传过来的id
            this.$http.get('/mz/v4/api/film/'+this.id, {//加上时间戳后获取的是最新的数据
                params: {__t: Date.now()}
            }).then(res => {
                this.film = res.data.data.film
                
            })
        }
    },
    created () {//在created函数中执行getItem方法
        bus.$emit('change-title',this.$route.query.name)
        this.getItem()
    }
}
</script>
<style lang="scss" scoped>
    .img-box {
        width: 100%;
        height: 2.1094rem;
    }
</style>


