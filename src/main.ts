import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'preline/preline'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
