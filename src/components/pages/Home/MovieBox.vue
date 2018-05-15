<template>
    <div class="home-movie-box">
        <ul class="movie-list">
            <movie-item
            v-for = " film in films "
             :key  = " film.id "
             :info = " film "
              :type = " type.url_type "
            >{{film}}</movie-item>
        </ul>
        <div class="more-button">更多{{type.title}}电影</div>
    </div>
</template>
<script>

import MovieItem from './MovieItem'
//__t:1526291937400  page:1   count:5

export default {
    name: "HomeMovieBox",
    props:["type"],
    data() {
         return {
             films: [],
             page: 1
        };
    },
    components:{
        MovieItem
    },
    methods:{
       getFilms () {
        //   https://m.maizuo.com
          let { page } = this
          let {count, url_type} = this.type;
          this.$http('/mz/v4/api/film/'+url_type,{
              params: {
                  page, count, __t: Date.now()
              }
          }).then (res => {
              this.films = res.data.data.films;
          })
      }
    },
    created(){
        this.getFilms()
    }
};
</script>
<style lang="scss" scoped>
.home-movie-box {
  .movie-list {
    padding-top: 18px;
    margin-bottom: 10px;
  }
  .more-button {
    width: 160px;
    height: 30px;
    border: 1px solid #aaa;
    border-radius: 15px;
    margin: 10px auto 30px;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    color: #616161;
    cursor: pointer;
  }
}
</style>


