import { createRouter, createWebHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue';

const MainPage =  defineAsyncComponent(() => import(/* webpackChunkName: 'MainPage'*/'../components/MainPage.vue'));
const Time =  defineAsyncComponent(() => import(/* webpackChunkName: 'Time'*/'../components/Time.vue'));
const Weather =  defineAsyncComponent(() => import(/* webpackChunkName: 'Weather'*/'../components/Weather.vue'));

const routes = [
    {path: '/', component: MainPage},
    {path: '/time', component: Time},
    {path: '/weather', component: Weather}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;