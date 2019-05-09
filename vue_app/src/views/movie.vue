<template>
  <div>
    <ul >
      <li class="movie-list">
        <img class="movie-img" src="xx.jpg" alt>

        <div class="movie-text">
          <h4>复仇者联盟4：终极之战</h4>
          <p>小罗伯特.唐尼/克里斯.埃文斯</p>
          <p>590630人已观看</p>
          <p>年份：2019</p>
          <span>动作/科幻/奇幻/</span>
        </div>
      </li>
      <li class="movie-list">
        <img class="movie-img" src="xx.jpg" alt>

        <div class="movie-text">
          <h4>复仇者联盟4：终极之战</h4>
          <p>小罗伯特.唐尼/克里斯.埃文斯</p>
          <p>590630人已观看</p>
          <p>年份：2019</p>
          <span>动作/科幻/奇幻/</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
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
</style>