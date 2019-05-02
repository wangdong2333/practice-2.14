<template>
    <div>
        <div class="footer" :style={background:selectMenu.background}>
            <ul class="footer-list" >
                <li v-for="(obj,index) in menu" :key="index" @click="$emit('change',index)">
                    <router-link :to="obj.path">{{ obj.name }}</router-link>                    
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props:["menu","selectMenu"]
    }
</script>

<style scoped>
    .footer{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        background: #f00;
    }
    .footer-list{
        display: flex;
    }
    .footer-list li{
        flex: 1;
        text-align: center;
    }
    .footer-list a{
        color: #000;
        /* 把点击时候的虚框弄没 */
        outline:none;
    }
    .footer-list a.router-link-active{
        color:aliceblue;
    }
</style>