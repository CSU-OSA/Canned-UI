import { createApp } from 'vue'
import App from './App.vue'
import CanComponents from "../packages/Component";
import router from "./router";

createApp(App)
    .use(router)
    .use(CanComponents)
    .mount('#app')
