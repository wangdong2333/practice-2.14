<template>
    <div>
        <img v-for="(obj,index) in musicList" :key="index" :src="obj.bg" alt="">
        <img :src="obj.bg" v-for="(obj,index) in musicList" :key="index" @click="goList()"/>

    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {        
                musicList:[],

            }
        },
         created() {
            axios.get('/data/musiclist.json')
            .then((result)=>{
                this.musicList = result.data.albums;
            })
        },
    }
</script>

<style lang="scss" scoped>

</style>