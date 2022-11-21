import { createApp } from 'vue'
import App from './App.vue'
import CanComponentsPlugin from "cc-vue";
import router from "./router";

createApp(App)
    .use(router)
    .use(CanComponentsPlugin)
    .mount('#app')
