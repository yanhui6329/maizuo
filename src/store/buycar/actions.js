

export default{
    addGoodInCar({commit},goodinfo){
        setTimeout(()=>{
            let cars = getCars();
            let isHas = cars.some((item)=>{
                if(item.id===goodinfo.id){
                    item.num++
                    return true
                }
            })
        })
    }
}
function getCars(){
    return JSON.parse(localStorage.cars?localStorage.cars:'[]')
}