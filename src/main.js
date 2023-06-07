import { createApp } from 'vue'

import './sass/main.scss'

import App from './App.vue'
import router from './router'
import vuetify from '@/modules/vuetify'

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
