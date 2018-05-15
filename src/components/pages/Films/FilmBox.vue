<template>

    <div class="film-box">
        {{type}}
        <ul>
            <li v-for="film in films" :key="film.id">{{film.name}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'FilmBox',
    props:['type'],
    data(){
        return {
            films:[],
            page:1,
            count:7
        }
    },
    methods:{
        getFilms(){
            let {type,page,count} = this
            this.$http.get('/mz/v4/api/film/'+this.type,{
                params:{page,count}
            }).then(res=>{
                this.films = res.data.data.films
              
            })
        }
    },
    // created(){
    //     this.getFilms()
    // },
    watch:{
        type:{
            immediate:true,//初始会执行一次
            handler(val){//val即type内容 
                this.getFilms()
            }
        }
    }
}
</script>
<style lang="scss" scoped>

</style>


