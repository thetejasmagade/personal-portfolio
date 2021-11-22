import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Particles from "particles.vue3";
import { gsap } from "gsap";
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@/assets/styles/index.css'


createApp(App).use(store).use(router).use(Particles).use(VueAxios, axios).use(gsap).mount('#app')
