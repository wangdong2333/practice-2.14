<template>
    <div >
        <div class="header" :style={background:selectMenu.background}>
            <span >首页</span>
            <span class="header-title">{{ selectMenu.name }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props:["selectMenu"]
    }
</script>

<style scoped>
    .header{
        height: 1rem;
        background: #ff0000;
        line-height: 1rem;
        color: aliceblue;
        position: fixed;
        top: 0;
        width: 100%;
    }
    .header-title{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }

</style>