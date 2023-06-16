import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import Vue from 'vue'

import '../src/assets/scss/main.scss'
import bootstrapBundle from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import jquery from 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap';


/*// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'*/

createApp(App)
    .use(jquery)
    .use(bootstrapBundle)
    .use(router)
    .mount('#app');