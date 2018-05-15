
<template>
    <div class="films page">
            <film-nav 
            :type="type"
            :change-type = "changeType"
           
            ></film-nav>
            <film-box :type="type"></film-box>
    </div>
</template>
<script>
import FilmBox from './FilmBox';
import FilmNav from './FilmNav';
export default {
    name:'Films',
    data(){
        return{
            type:'now-playing'
        }
    },
    methods:{
        changeType(type){
            this.type = type
        }
    },
    components:{
        FilmNav,FilmBox
    }
}
</script>
<style lang="scss" scoped>

</style>


