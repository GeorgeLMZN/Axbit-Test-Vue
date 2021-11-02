<template>
    <transition name="fade">
        <img class="bg" :src="this.src" :key="this.src">
    </transition>
</template>
<script>
    export default {
        props:{
            src: String,
        },
    }
</script>

<style scoped>
    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 1920px;
        height: 100%;
        background-size: cover !important;
        animation: fade 1s 1;
        z-index: -1;
    }
    

</style>