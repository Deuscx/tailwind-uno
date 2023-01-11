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
theme: {
  themes: ['emerald']
}
```

[More Theme](https://daisyui.com/docs/themes/)

## More Docs

[saadeghi/daisyui: ⭐️ ⭐️ ⭐️ ⭐️ ⭐️  The most popular, free and open-source Tailwind CSS component library](https://github.com/saadeghi/daisyui)