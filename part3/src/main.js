import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import CompositionComponents from './components/CompotitionComponent.vue'

const app = createApp(App)

app.component('CompositionComponents', CompositionComponents)

createApp(App).mount('#app')
