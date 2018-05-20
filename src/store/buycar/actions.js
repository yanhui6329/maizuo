

import {SYNC_UPDATE} from './const'

//如何在组件中调用actions方法--》Cart组件 methods中用...mapActions["函数名"]辅助函数调用
export default{
    initCars({commit}){
        setTimeout(()=>{
            let cars = getCars()
            commit(SYNC_UPDATE, cars)
        },300)
    },
    addGoodInCar({commit},goodinfo){
        //在真正的项目中接收商品id和用户id就可以，这里添加商品到localStoreage中
        //500毫秒后发送到
        setTimeout(()=>{
            let cars = getCars();
            console.log(cars)
            let isHas = cars.some((item)=>{
                if(item.id===goodinfo.id){
                    item.num++
                    return true
                }
            })
            if(!isHas){
                goodinfo.num =1
                cars.push(goodinfo)
            }
            localStorage.cars = JSON.stringify(cars)
//同步vuex中的购物车数据
            commit(SYNC_UPDATE,cars)
        },500)
    }
}
function getCars () {
	return JSON.parse(localStorage.cars?localStorage.cars:'[]')
}
