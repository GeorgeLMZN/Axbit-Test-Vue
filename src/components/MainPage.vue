<template>
 <div class="app-wrapper">
    <h1 class="main-heading top">Hello!</h1>
    <router-link to="/Axbit-Test-Vue/time" class="main-btn first left">Time</router-link>
    <router-link  to="/Axbit-Test-Vue/weather" class="main-btn second right">Weather</router-link>
  </div>
</template>

<script>

export default {
    data: function () {
        return {
            defaultCity: 'Samara',
            cities: []
        }
    },
    methods: {
        getData () {

        }
    }
}
</script>
<style scoped>
    .sidebar {
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 500px;
        background: #000;
        opacity: 0.5;
    }
    .sidebar-search {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        max-height: 50px;
        margin-top: 50px;
    }
    .sidebar-search input {
        padding: 10px;
        position: relative;
        z-index: 1;
        border: none;
        background: transparent;
        border-bottom: 1px solid #fff;
        color: #fff;
        font-size: 25px;
        cursor: pointer;
    }
    .sidebar-search img {
        max-width: 30px;
    }
    .sidebar-search button {
        position: relative;
        border: none;
        background: transparent;
        width: 50px;
        height: 50px;
        cursor: pointer;
    }
    .sidebar-search button img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>