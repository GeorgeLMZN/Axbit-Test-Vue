<template>
        <router-link to="/" class="prev left">
                    <img src="../assets/img/prev.svg" alt="">
        </router-link>
</template>

<script>
export default {
    
}
</script>
<style scoped>
a.prev {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50px;
    top: 40px;
    z-index: 999;
    border: 1px solid #fff;
    padding: 10px;
    border-radius: 50%;
    }
.prev img {
    max-width: 30px;
}
@media  screen and ( max-width: 650px) {
       .hide {
            opacity: 0;
            transition: opacity .5s;
        }
}
</style>