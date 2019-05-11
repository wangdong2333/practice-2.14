<template>
    <div>
        <img v-for="(obj,index) in photoData" :key="index" :src="obj.src" alt="" @click="godetail(obj.src)">
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                photoData:[],
            }
        },
        created() {
            axios.get("/data/photodata.json")
            .then((result) =>{
                this.photoData = result.data.photoData
            })
        },
        methods: {
            godetail(url){
               
                  this.$router.push('/photoDetail/'+encodeURIComponent(url));
                // console.log(url)
                // console.log(encodeURIComponent(url))
                // console.log(decodeURIComponent(url))
            
            }
        },
    }
</script>

<style scoped>
    img {
        width: 50%;
    }
</style>