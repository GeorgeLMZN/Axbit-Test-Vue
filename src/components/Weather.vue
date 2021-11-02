<template>
    <div class="app-wrapper">
        <back-btn :class="{'hide': opened}"></back-btn>
        <Sidebar @getWeather="getWeather" @open="hideBackBtn"/>
        <template v-if="this.weatherData">
        <Bg :src="this.weatherData.bg"/>
        <div class="weather-info bottom" :class="{'under': opened}">
            <h1 class="top">{{this.weatherData.city}}</h1>
            <div class="d-flex align-items">
                <img :src="this.weatherData.ico" alt="" class="weather-ico left">
                <div class="temp right">{{this.weatherData.temp}}</div>
            </div>
        </div>
        </template>
    </div>
</template>

<script>
import backBtn from './backBtn.vue';
import Sidebar from './Sidebar.vue';
import Bg from './Bg.vue';
export default {
  components: { Sidebar, backBtn, Bg },
  data() {
    return {
        weatherData: null,
        opened: false,
    }
  },
  methods: {
       getWeather(obj) {
          return this.weatherData = obj;
      },
      hideBackBtn(open){
        this.opened = open;
      }   
  },
}
</script>
<style>
    .app-wrapper {
        width: 100%;
        overflow: hidden;
    }
    .weather-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: absolute;
        bottom: 0px;
        color: #fff;
        width: 100%;
        padding: 50px 50px;
        box-sizing: border-box;
        z-index: 9999;
    }
    .weather-info h1 {
        font-size: 50px;
        letter-spacing: 5px;
        font-weight: 400;
        margin: 0;
    }
    .weather-info .temp {
        font-size: 50px;
    }
    .weather-data {
        position: relative;
        z-index: 2;
        color: #fff;
        width: 90%;
    }
    .weather-data .weather-data__item {
        display: flex;
        justify-content: space-between;
        width: 100%;
        color: #fff;
        padding: 20px 0;
    }
  
    .prev {
        display: block;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content:   center;
        transition: all .5s;
    }
    .prev img {
        position: relative;
        z-index: 1;
    }
    .fade {
        animation: fade 2s 1;
    }
    ul {
        position: relative;
    }
    ul {
        overflow-y: scroll;
        overflow-x: hidden;
        max-height: 300px;
          position: relative;
    }
    ul::-webkit-scrollbar {
    width: 5px;
}

ul::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
}

ul::-webkit-scrollbar-thumb {
   background: darkgrey;
   height: 20px;
}
    @keyframes fade {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }
    @keyframes sidebarLeft {
        0% {transform: translateX(100%); opacity: 1;}
        100% {transform: translateX(90%); opacity: 1;}
    }
    @media  screen and (max-width: 475px) {
        .sidebar-search {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 20px;
            width: 100%;
        }
        .sidebar-search input {
            font-size: 16px;
        }
         .sidebar-search .prev {
             justify-content: center;
             margin-left: -10px;
         }
         .sidebar-search img {
             max-width: 20px;
         }
         .weather-info {
             padding: 20px;
         }
         .weather-info.under {
             font-size: 25px;
                background-color: rgba(0, 0, 0, 0.9);
               transition: all .5s;
         }
    }
    @media  screen and (max-width: 768px) {
        ul {
            max-height: 150px;
        }
    }
</style>


