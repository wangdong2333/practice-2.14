<template>
  <div id="app">
    <div id="nav">

      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>|
      <router-link to="/a">a页面</router-link>
      <!-- <router-link to="/b">b页面</router-link> -->
      <router-link :to="{name:'b',params:{name:'zs',id:123}}">b页面</router-link>
      <router-link to="/c/666">c页面</router-link>
      <router-link to="/alias">别名alias</router-link>
      <router-link to="count">count</router-link>
      
    </div>

    <transition name='fade'>
    <router-view/>
    </transition>

  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


    .fade-enter{
      opacity: 0;
    }
    .fade-enter-active{
      transition: opacity  2s  ease;
    }
    .fade-enter-to{
      opacity:1;
    }
    .fade-leave{
      opacity:1;
    }
    .fade-leave-to{
      opacity: 0;
    }
    .fade-leave-active{
      transition: opacity  2s  ease;
    }
</style>

<script>
export default {

}
</script>
