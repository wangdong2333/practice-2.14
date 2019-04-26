<template>
    <div>
        count
        <!-- {{ $store.state.count }} -->
        {{ count }}
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
            mapState(['count'])
        
    }
</script>

<style lang="scss" scoped>

</style>