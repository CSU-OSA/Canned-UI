# Canned-Theme

## Basic setup
1. define your theme color by the `createTheme` function.

if not all colors are defined, remaning colors will be generated automatically by our algorithem based on material3 color system, you can also define your own color algorithm by the `createTheme` function's second parameters.

```js

   import { createTheme } from 'canned-theme'
   export const yourTheme = createTheme({
     primary: '#ff0000',
     secondary: '#00ff00',
     tertiary: '#0000ff',
   }) 
```

### Rx.js usage

2. use our `Canned-Component`, our register callback to use theme config by the `theme` Observable in your components.

```js
   import { theme } from 'canned-theme/rxjs'
    theme.subscribe((themeConfig) => {
      // do something with themeConfig
    });
```

3. you can easily switch theme by the `switchTheme` function, or enable the night mode by the `switchMode` function.

```js
   import { switchTheme } from 'canned-theme/rxjs'
   export const YourComponent = () => {
     return (
       <div>
         <button onClick={() => switchTheme('yourTheme')}>switch theme</button>
       </div>
     )
   }
```

```js
    import { switchMode } from 'canned-theme/rxjs'
    export const YourComponent = () => {
      return (
         <div>
            <button onClick={() => switchMode('night')}>switch mode</button>
         </div>
      )
    }
    ```
```

## Vue usage

2. use our `Canned-Component`, our create your own component based on our `useTheme` hook.

```js
   import { useTheme } from 'canned-theme'
   export const YourComponent = () => {
     const theme = useTheme()
     return (
       <div style={{ color: theme.primary }}>
         <h1>your component</h1>
       </div>
     )
   }
```

3. import your theme and use it in your component

```js
   import { yourTheme } from './your-theme'
   import { ThemeProvider } from 'canned-theme'
   export const App = () => {
     return (
       <ThemeProvider theme={yourTheme}>
         <YourComponent />
       </ThemeProvider>
     )
   }
```

4. you can easily switch theme by the `useThemeSwitcher` hook, or enable the night mode by the `useMode` hook.

```js
   import { useThemeSwitcher } from 'canned-theme/vue'
   export const YourComponent = () => {
     const { switchTheme } = useThemeSwitcher()
     return (
       <div>
         <button onClick={() => switchTheme('yourTheme')}>switch theme</button>
       </div>
     )
   }
```

```js
    import { useMode } from 'canned-theme/vue'
    export const YourComponent = () => {
      const { mode, switchMode } = useMode()
      return (
         <div>
            <button onClick={() => switchMode('night')}>switch mode</button>
         </div>
      )
    }
    ```
```

