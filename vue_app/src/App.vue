<template>
  <div id="app">
    <common-header :selectMenu="selectMenu"></common-header>
    <div id="content">
      <router-view></router-view>
    </div>

    <common-footer :menu="menu" :selectMenu="selectMenu" @change="fn"></common-footer>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";
import CommonFooter from "@/components/CommonFooter.vue";
export default {
  data() {
    return {
      menu: [
        {
          path: "/movie",
          name: "电影",
          background:'#f00',
        },
        {
          path: "/music",
          name: "音乐",
          background:'#0ff',
        },
        {
          path: "/book",
          name: "图书",
          background:'#aba',
        },
        {
          path: "/photo",
          name: "图片",
          background:'#fabbaa',
        }
      ],
        selectMenu:  {
          path: "/movie",
          name: "电影",
          background:'#f00',
        },
    };
  },
  components: {
    CommonHeader,
    CommonFooter
  },
  methods: {
    fn(index){
      console.log(index);
      this.selectMenu = this.menu[index];
    }
  },
};
</script>

<style  scoped>
#content {
  margin: 1rem 0;
}
</style>