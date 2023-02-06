import { App, Plugin } from 'vue';
import CanButton from './src/CanButton.vue';

export const CanButtonPlugin: Plugin = {
  install(app: App) {
    app.component('can-button', CanButton);
  },
};

export { CanButton };