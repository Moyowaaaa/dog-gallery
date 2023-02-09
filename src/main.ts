import { createApp } from 'vue'
import { createStore } from 'vuex'
import store from './store'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'

import './assets/css/style.css'



const app = createApp(App)

app.use(store)
app.use(VueLazyload)
app.use(router)

app.mount('#app')
