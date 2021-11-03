<template>
         <div :class="{'close' : opened}" class="sidebar rightBar">
            <form class="sidebar-search" @submit.prevent="add">
                 <a class="arrow" :class="{'open' : !opened }" @click="controllBar($event)">
                    <img src="../assets/img/prev.svg" alt="">
                 </a>
                 <input v-model="this.city" type="text" placeholder="Type city here...">
                 <button type="submit">
                     <img src="../assets/img/search.svg" alt=""/>
                 </button>
            </form>
            <cities-list :city="this.currentCityWeather.city" @choose="chooseCity"/>
            <div class="weather-data right">
                <div class="weather-data__item" v-if="this.currentCityWeather.weather">
                    <span>Today</span>
                    <span>{{this.currentCityWeather.weather}}</span>
                </div>
                <div class="weather-data__item" v-if="this.currentCityWeather.temp">
                    <span>Temperature</span>
                    <span>{{this.currentCityWeather.temp + 'C'}}</span>
                </div>
                <div class="weather-data__item" v-if="this.currentCityWeather.windSpeed">
                    <span>Wind speed</span>
                    <span>{{this.currentCityWeather.windSpeed + ' m/s'}}</span>
                </div>
        </div>
         </div>
</template>


<script>
import { filteredData } from '../api/weatherApi';
import CitiesList from './CitiesList.vue';
export default {
  components: { CitiesList },
  emits: ['getWeather', 'open'],
    data () {
        return {
            opened: false,
            city: null,
            currentCityWeather: '',
        }
    },
    methods: {
        add(city) {
            filteredData(this.city || city)
            .then(res => {
                if(res === undefined){
                    return;
                }
                this.currentCityWeather = res;
            })
            .then(() => {
            this.city = null;
            const obj = {
                ico: this.currentCityWeather.ico,
                city: this.currentCityWeather.city,
                temp: this.currentCityWeather.temp,
                bg: this.currentCityWeather.bg
            }
            this.$emit('getWeather', obj)
            })
        },
        controllBar() {
            this.opened = !this.opened;
            this.$emit('open', !this.opened)
        },
        chooseCity(item) {
            if(item === undefined) {
                return  this.$emit('getWeather',this.currentCityWeather = {});
            }
            this.add(item);
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
        max-width: 100%;
        transform: translateX(0%);
        background: rgba(0, 0 , 0, 0.5);
        animation: sidebarLeft 1s 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: transform .5s;
        overflow: hidden;
        z-index: 9999;
    }
    .sidebar.close {
     transform: translateX(90%);
     transition: all 1s;
    }
    .open {
        transform: rotate(180deg);
        margin-left: 0px;
        transition: all .5s;
    }
    
    .sidebar-search {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        max-height: 50px;
        margin-top: 50px;
        width: 450px;
    }
    .sidebar-search a.arrow {
        display: block;
        width: 40px;
        height: 40px;display: flex;
        align-items: center;
        justify-content: center;
        margin-left: -25px;
        transition: all .5s;
    }
    .sidebar-search input {
        padding: 10px 0;
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
        width: 30px;
    }
    .sidebar-search button {
        position: relative;
        border: none;
        background: transparent;
        width: 40px;
        height: 40px;
        cursor: pointer;
    }
    .sidebar-search button img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .border-line {
        width: 90%;
        height: 1px;
        background: #fff;
        display: flex;
        justify-content: center;
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
    @media  screen and (max-width: 500px) {
    .sidebar-search {
        max-width: 100%;
        margin-top: 20px;
    }
    .sidebar-search a.arrow {
        margin-left: 15px;
        width: 30px;
        height: 30px;

    }
     .sidebar-search input {
         font-size: 18px;
     }
     .sidebar ul {
         margin-top: 10px;
     }
     .sidebar-search button[data-v-7d622f5c] {
        width: 30px;
        height: 30px;
        margin-right: 15px;
      }
    }
</style>