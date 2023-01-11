<p align="center">
<img src="https://github.com/Deuscx/tailwind-uno/blob/main/playground/public/logo.png?raw=true" style="width:200px;" />
</p>


# Tailwind Uno

A Collection of Unocss components transform from tailwindcss 

Supported CSS Components:
- [saadeghi/daisyui: ⭐️ ⭐️ ⭐️ ⭐️ ⭐️  The most popular, free and open-source Tailwind CSS component library](https://github.com/saadeghi/daisyui)


## Installation


```bash
  npm install @deuscx/unocss-preset-daisy
```

```js
import { defineConfig } from 'unocss'
import { presetDaisy } from '@deuscx/unocss-preset-daisy'
export default defineConfig({
  presets: [
    presetDaisy(),
  ],
})

```
    
## Usage/Examples

```html
 <button type="button" class="btn btn-primary">Hello World</button>
```

## Alternative

This Project is inspired by [unocss-preset-daisy](https://github.com/kidonng/unocss-preset-daisy)
  
## License

[MIT](./LICENSE)

