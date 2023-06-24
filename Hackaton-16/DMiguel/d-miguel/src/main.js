import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { setupStore } from './stores'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
setupStore(app)
app.mount('#app')
