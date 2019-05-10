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
    <div>
      <img class="lading" src="@/assets/imgs/loading.gif" v-if="isShow" alt="">
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    
    data(){
        return {
            movieList:[],
            isShow:true,
            isBottom:false,
        }
    },
    created() {
        this.getMovie();
        window.onscroll = () =>{
          let scrollTop = document.documentElement.scrollTop;//滚动条距离顶部的距离
          let clinetHeight = document.documentElement.clientHeight;//屏幕的高度
          let height = document.documentElement.scrollHeight;//数据总共的高度
          // console.log(scrollTop,clinetHeight,height);
          if(scrollTop + clinetHeight == height && this.isBottom != true){
              // 加载下一屏
            this.isShow = true;
            this.getMovie();
          }
        }

    },
    methods: {
        getMovie(){
             axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?city=广州&start='+this.movieList.length+'&count=10')
            .then((result) => {
            // console.log(result.data.subjects);
            this.isShow = false;
            this.movieList = [...this.movieList,...result.data.subjects];
            if(this.movieList.length == result.data.tatal){
              this.isBottom = true;
            }
            console.log(this.movieList);
        })
        }
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
    .lading{
      position: fixed;
      left:50%;
      top:50%;
      transform: translate(-50%,-50%);
      width: 1rem;
      height: 1rem;
      /* background: rgba(0,0,0,0.2); */
    }
</style>