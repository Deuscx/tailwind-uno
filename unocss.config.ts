import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetDaisy } from '@deuscx/unocss-preset-daisy'
export default defineConfig({
  theme: {
    fontFamily: {
      sans: '\'Inter\', sans-serif',
      mono: '\'Fira Code\', monospace',
    },
    themes: ['cupcake'],
  },
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons(),
    presetDaisy(),
  ],
  transformers: [
    transformerCompileClass(),
    transformerVariantGroup(),
    transformerDirectives(),
  ],
})
