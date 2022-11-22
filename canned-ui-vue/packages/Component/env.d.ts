/// <reference types="vite/client" />

import {DefineComponent} from "vue";

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.md' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line
  const component: DefineComponent<{}, {}, any>
  export default component
}
