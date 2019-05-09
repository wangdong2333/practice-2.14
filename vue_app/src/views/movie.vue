<template>
  <div>
    <ul class="movie-container">
      <li class="movie-list" v-for="(obj,index) in movieList" :key="index">
        <img class="movie-img" :src="obj.images.medium" alt>

        <div class="movie-text">
          <h4>{{ obj.title }}</h4>
          <p>
              <span v-for="(actor,index) in obj.casts" :key="index">{{ actor.name }} </span>
          </p>
          <p>{{ obj.collect_count}}人已观看</p>
          <p>年份：2019</p>
          <p>
            <span v-for="(type,index) in obj.genres" :key="index">{{ type }} /</span>
          </p>
        
        </div>
      </li>
     
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    
    data(){
        return {
            movieList:[]
        }
    },
    created() {
        axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?city=广州&start='+'&count=10')
        .then((result) => {
            // console.log(result.data.subjects);
            this.movieList = result.data.subjects;
            console.log(this.movieList);
        })
    },
    methods: {

    },
};
</script>

<style  scoped>
    .movie-list{
        display: flex;
        border-bottom: 1px solid #000;
        padding:0.2rem 0;
    }
    .movie-img{
        width: 100px;
        height: 150px;
        margin-right: 0.2rem;
    }
    .movie-text{
        flex:1;

    }
    .movie-container{
        padding: 0 10px;
    }
</style>