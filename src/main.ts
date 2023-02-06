import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createStore } from 'vuex'
import store from './store'
import App from './App.vue'
import router from './router'

import './assets/css/style.css'



const app = createApp(App)

app.use(store)

app.use(createPinia())
app.use(router)

app.mount('#app')
