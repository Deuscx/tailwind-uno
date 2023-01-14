# @deuscx/unocss-preset-daisy

The daisyui preset for [UnoCSS](https://github.com/unocss/unocss).

## Installation

```bash
 npm install @deuscx/unocss-preset-daisy -D
```

```ts
import { defineConfig } from 'unocss'
import { presetDaisy } from '@deuscx/unocss-preset-daisy'
export default defineConfig({
  presets: [
    presetDaisy(),
  ],
})
```

## Features

### Component Code Split

Base on the Unocss Rule, the daisyui component import dynamically.

### Theme

You can fully customize your theme property in your config, and UnoCSS will eventually deeply merge it to the default theme.

```js
export default defineConfig({
  presets: [
    presetDaisy(),
  ],
  theme: {
    themes: ['emerald'],
  },
})

```

To use a theme, add data-theme attribute to your html tag
```html
<html data-theme="emerald"></html>
```

- All Theme
  
```js
theme : {
  themes : ['light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black', 'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade', 'night', 'coffee', 'winter']
}
```

- Custom Theme

```js
theme: {
  themes: [
    {
      mytheme: {
        'primary': '#a991f7',
        'secondary': '#f6d860',
        'accent': '#37cdbe',
        'neutral': '#3d4451',
        'base-100': '#ffffff',
      },
    },
  ]
}
```

[More Theme](https://daisyui.com/docs/themes/)

## More Docs

[saadeghi/daisyui: ⭐️ ⭐️ ⭐️ ⭐️ ⭐️  The most popular, free and open-source Tailwind CSS component library](https://github.com/saadeghi/daisyui)
