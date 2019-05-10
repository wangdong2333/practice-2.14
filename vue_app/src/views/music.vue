<template>
    <div>
        <img :src="obj.bg" v-for="(obj,index) in musicList" :key="index" @click="golist()" />
        
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
                console.log(result.data.albums);
                this.musicList = result.data.albums;
            })
        },
        methods: {
            golist(){
                this.$router.push('musiclist');
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>