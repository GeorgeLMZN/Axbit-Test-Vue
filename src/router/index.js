import { createRouter, createWebHistory } from 'vue-router';

import MainPage from '../components/MainPage.vue'
import Time from '../components/Time.vue';
import Weather from '../components/Weather.vue';

const routes = [
    {path: '/Axbit-Test-Vue/', component: MainPage},
    {path: '/Axbit-Test-Vue/time', component: Time},
    {path: '/Axbit-Test-Vue/weather', component: Weather}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;