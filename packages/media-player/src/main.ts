import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import gloablComponent from './components/index'
import 'virtual:svg-icons-register'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(gloablComponent)

app.mount('#app')
