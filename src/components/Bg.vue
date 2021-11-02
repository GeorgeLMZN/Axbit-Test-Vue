<template>
        <div class="bg fade" :style="this.background" :key="this.src"></div>
</template>
<script>
    export default {
        props:{
            src: String,
        },
        computed:{
            background() {
                return 'background: url(' + this.src + ')';
            }
        }
    }
</script>

<style scoped>
    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover !important;
    }
</style>