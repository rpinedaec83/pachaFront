import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import helper from './helper'
import YouTube from 'vue3-youtube'

import '../src/assets/scss/main.scss'
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap';

const app = createApp(App);

app.component('YouTube', YouTube);
app.use(router);
app.use(helper);
app.mount('#app');