import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/css/index.css'
import './assets/css/main.css'

createApp(App).use(router).use(VueAxios, axios).mount('#app')
