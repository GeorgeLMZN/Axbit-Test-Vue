import * as Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import './assets/styles/main.css'

const app = Vue.createApp(App);

app.use(router)

window.vm = app.mount('#app')


