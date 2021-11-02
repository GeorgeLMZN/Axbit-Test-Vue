<template>
  <div class="app-wrapper">
    <back-btn></back-btn>
    <div class="clock right" >{{this.currentTime}}</div>
  </div>
</template>

<script>
import backBtn from './backBtn.vue';
export default {
  components: { backBtn },
  data() {
    return {
        currentTime: '',
    }
  },
  methods: {
  clock() {
            let date = new Date(),
                   hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
                   minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
                   seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
        
              this.currentTime = hours + ':' + minutes + ':' + seconds;
    }
  },
  created () {
    setInterval(this.clock, 1000)
    this.clock()
  }
}
</script>

<style scoped>
 @font-face {
    font-family: Clock; 
    src: url(../assets/fonts/clock.TTF);
   }
   .clock {
     font-family: 'Clock', sans-serif;
     font-size: 50px;
     color: #fff;
     margin-left: 120px;
      margin-top: -10px;
   }
   .app-wrapper .prev {
     left: 10px;
   }
</style>
