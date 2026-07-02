import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import CompositionComponents from './components/CompositionComponent.vue'

const app = createApp(App)

app.component('CompositionComponents', CompositionComponents)

app.mount('#app')