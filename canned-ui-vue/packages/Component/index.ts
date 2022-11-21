import { App, Plugin } from 'vue';

import { CanButtonPlugin } from './components/Button';

const CanComponentsPlugin: Plugin = {
  install(app: App) {
    CanButtonPlugin.install?.(app);
  },
};

export default CanComponentsPlugin;

export * from './components/Button';