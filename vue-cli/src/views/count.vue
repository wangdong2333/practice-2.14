<template>
    <div>
        count
        <!-- {{ $store.state.count }} -->
        {{ count }}
        <button @click="fn(8)">+++</button>//通过下面的方法进行调用 
    </div>
</template>

<script>
  import {mapState} from 'Vuex'
    export default {
        // computed: {
        //     count(){
        //         return this.$store.state.count;
        //     }
        // },
        computed: 
            mapState(['count']),
        methods: {
              fn(num){
                this.$store.commit('add',num);
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>