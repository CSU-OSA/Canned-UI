// Index file of theme config.
// If you want to add a new theme, please edit this file and add a new theme json file in the theme folder.


import default_light from './default/default.light.json';
import default_dark from './default/default.dark.json';
// Add new theme json import here

const default_theme = [default_light, default_dark];
// Add new theme mode pair here

export default {
    "default": default_theme,
    // Add new theme here
}