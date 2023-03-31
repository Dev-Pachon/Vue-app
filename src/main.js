import {createApp} from 'vue'
import {createPinia} from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css'

import {createRouter, createWebHistory} from 'vue-router'
import routes from './config/routes'

// Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const router = createRouter({
	history: createWebHistory(),
	routes,
})

const vuetify = createVuetify({
	components,
	directives,
})

const pinia = createPinia()
pinia.use(piniaPersist)

const app = createApp(App)
app.use(vuetify).use(router).use(pinia)
app.mount('#app')
