import { App, Plugin } from 'vue';

const CanThemePlugin: Plugin = {
  install(app: App) {
    // ThemeProviderPlugin.install?.(app);
  },
};

export default CanThemePlugin;

export * from './model/themeName.type';
export * from './model/colorName.type';
export * from './util/colorSelector';
export * from './util/colorSpaceConverter';