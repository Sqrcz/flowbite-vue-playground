import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { flowbiteVuePlugin } from '@/plugins/flowbiteVuePlugin'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(flowbiteVuePlugin)

app.mount('#app')
