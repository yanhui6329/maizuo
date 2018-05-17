<template>
    <div class="goods-box page">
       <cell 
       v-for = "good in goods"
       :key = "good.id"
       :title = "good.commodityName"
       :label = "good.commodityPrice+good.commoditySpec"
       :src = "good.pictureUrl"
      >
       <mz-button @click = "addGoodInCar(good)" type="primary" size="small">加入购物车</mz-button></cell>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    name:'GoodsBox',
    data(){
        return {
            goods:[]
        }
    },
    methods:{
        getGoods(){
           this.$http.get('./static/json/goods.json').then(res=>{
               this.goods = res.data;
               console.log(this.goods)
           })
        }
    },
    created(){
        this.getGoods()
    }
    
}
</script>
<style lang="scss" scoped>

</style>


