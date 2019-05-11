<template>
    <div>
        详情
        <!-- {{ $route.params.url}} -->
        <img :src=" url " alt="">
        <!-- {{ url }} -->
    </div>
</template>

<script>
    export default {
        computed: {
            url(){
                // console.log(this.$route.params.url)
                // console.log(decodeURIComponent(this.$route.params.url))
                return decodeURIComponent(this.$route.params.url);
            }
            
        },
        
    }
</script>

<style lang="scss" scoped>

</style>