<template>
    <div>
        <div class="footer">
            <ul class="footer-list">
                <li>电影</li>
                <li>音乐</li>
                <li>图书</li>
                <li>图片</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        
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
</style>