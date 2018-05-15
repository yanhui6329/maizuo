<template>
    <div class="swiper-container app-banner">
        <div class="swiper-wrapper  img-background">
            <div class="swiper-slide img-background"
                v-for = " banner in banners "
                :key  = " banner.id "
            >
                <img width="100%" :src="banner.imageUrl" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
       
    </div>
</template>
<script>
//background-size:100%;background-image:url(//static.m.maizuo.com/v4/static/app/asset/1598cc489be15707b86e501996a81c6d.png);
import Swiper from 'swiper'
import '../../../../node_modules/swiper/dist/css/swiper.min.css'

import Vue from 'vue'

export default {
    name: 'AppBanner',
    data () {
        return {
            banners: []
        }
    },
    mounted () {
        this.$http.get( '/mz/v4/api/billboard/home', {
            params:{__t: Date.now() }
        }).then (res => {
            this.banners = res.data.data.billboards
            Vue.nextTick(() => {
                new Swiper('.app-banner', {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    autoplay:true,
                })
            })
        })
    }
}
</script>
<style lang="scss" scoped>
    .swiper-slide ,.swiper-wrapper{
        height: 2.1094rem;
    }
</style>

