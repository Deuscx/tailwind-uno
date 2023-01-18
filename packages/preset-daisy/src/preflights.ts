import fs from 'fs'
import path from 'path'
import type { Preflight } from '@unocss/core'
import defaultThemes from './themes'
import { generateThemeCss } from './utils'
type ThemeConfig = string | Record<string, Record<string, string>>
const defaultThemeNames = Object.keys(defaultThemes)
export const preflights: Preflight[] = [
  {
    layer: 'preflights',
    getCSS(ctx) {
      const themes = (ctx.theme as any)?.themes

      let customThemes = ''
      if (themes) {
        themes.forEach((theme: ThemeConfig) => {
          if (typeof theme === 'string' && defaultThemeNames.includes(theme))
            customThemes += generateThemeCss(theme, defaultThemes[theme])

          if (typeof theme === 'object') {
            Object.entries(theme).map(([themeName, themeValue]) => {
              customThemes += generateThemeCss(themeName, themeValue)
            })
          }
        })
      }
      return `
        :root {
            color-scheme: light;
            --pf: 259 94% 41%;
            --sf: 314 100% 38%;
            --af: 174 60% 41%;
            --nf: 219 14% 22%;
            --in: 198 93% 60%;
            --su: 158 64% 52%;
            --wa: 43 96% 56%;
            --er: 0 91% 71%;
            --inc: 198 100% 12%;
            --suc: 158 100% 10%;
            --wac: 43 100% 11%;
            --erc: 0 100% 14%;
            --rounded-box: 1rem;
            --rounded-btn: 0.5rem;
            --rounded-badge: 1.9rem;
            --animation-btn: 0.25s;
            --animation-input: .2s;
            --btn-text-case: uppercase;
            --btn-focus-scale: 0.95;
            --border-btn: 1px;
            --tab-border: 1px;
            --tab-radius: 0.5rem;
            --p: 259 94% 51%;
            --pc: 0 0% 100%;
            --s: 314 100% 47%;
            --sc: 0 0% 100%;
            --a: 174 60% 51%;
            --ac: 175 44% 15%;
            --n: 219 14% 28%;
            --nc: 0 0% 100%;
            --b1: 0 0% 100%;
            --b2: 0 0% 95%;
            --b3: 180 2% 90%;
            --bc: 215 28% 17%
        }
        @media (prefers-color-scheme: dark) {
            :root {
                color-scheme: dark;
                --pf: 262 80% 40%;
                --sf: 316 70% 40%;
                --af: 175 70% 33%;
                --in: 198 93% 60%;
                --su: 158 64% 52%;
                --wa: 43 96% 56%;
                --er: 0 91% 71%;
                --inc: 198 100% 12%;
                --suc: 158 100% 10%;
                --wac: 43 100% 11%;
                --erc: 0 100% 14%;
                --rounded-box: 1rem;
                --rounded-btn: 0.5rem;
                --rounded-badge: 1.9rem;
                --animation-btn: 0.25s;
                --animation-input: .2s;
                --btn-text-case: uppercase;
                --btn-focus-scale: 0.95;
                --border-btn: 1px;
                --tab-border: 1px;
                --tab-radius: 0.5rem;
                --p: 262 80% 50%;
                --pc: 0 0% 100%;
                --s: 316 70% 50%;
                --sc: 0 0% 100%;
                --a: 175 70% 41%;
                --ac: 0 0% 100%;
                --n: 218 18% 12%;
                --nf: 223 17% 8%;
                --nc: 220 13% 69%;
                --b1: 220 18% 20%;
                --b2: 220 17% 17%;
                --b3: 219 18% 15%;
                --bc: 220 13% 69%
            }
        }
        *, ::before, ::after {
          --tw-border-spacing-x: 0;
          --tw-border-spacing-y: 0;
          --tw-translate-x: 0;
          --tw-translate-y: 0;
          --tw-rotate: 0;
          --tw-skew-x: 0;
          --tw-skew-y: 0;
          --tw-scale-x: 1;
          --tw-scale-y: 1;
          --tw-pan-x:  ;
          --tw-pan-y:  ;
          --tw-pinch-zoom:  ;
          --tw-scroll-snap-strictness: proximity;
          --tw-ordinal:  ;
          --tw-slashed-zero:  ;
          --tw-numeric-figure:  ;
          --tw-numeric-spacing:  ;
          --tw-numeric-fraction:  ;
          --tw-ring-inset:  ;
          --tw-ring-offset-width: 0px;
          --tw-ring-offset-color: #fff;
          --tw-ring-color: rgb(59 130 246 / 0.5);
          --tw-ring-offset-shadow: 0 0 #0000;
          --tw-ring-shadow: 0 0 #0000;
          --tw-shadow: 0 0 #0000;
          --tw-shadow-colored: 0 0 #0000;
          --tw-blur:  ;
          --tw-brightness:  ;
          --tw-contrast:  ;
          --tw-grayscale:  ;
          --tw-hue-rotate:  ;
          --tw-invert:  ;
          --tw-saturate:  ;
          --tw-sepia:  ;
          --tw-drop-shadow:  ;
          --tw-backdrop-blur:  ;
          --tw-backdrop-brightness:  ;
          --tw-backdrop-contrast:  ;
          --tw-backdrop-grayscale:  ;
          --tw-backdrop-hue-rotate:  ;
          --tw-backdrop-invert:  ;
          --tw-backdrop-opacity:  ;
          --tw-backdrop-saturate:  ;
          --tw-backdrop-sepia:  
      }
      ::backdrop {
          --tw-border-spacing-x: 0;
          --tw-border-spacing-y: 0;
          --tw-translate-x: 0;
          --tw-translate-y: 0;
          --tw-rotate: 0;
          --tw-skew-x: 0;
          --tw-skew-y: 0;
          --tw-scale-x: 1;
          --tw-scale-y: 1;
          --tw-pan-x:  ;
          --tw-pan-y:  ;
          --tw-pinch-zoom:  ;
          --tw-scroll-snap-strictness: proximity;
          --tw-ordinal:  ;
          --tw-slashed-zero:  ;
          --tw-numeric-figure:  ;
          --tw-numeric-spacing:  ;
          --tw-numeric-fraction:  ;
          --tw-ring-inset:  ;
          --tw-ring-offset-width: 0px;
          --tw-ring-offset-color: #fff;
          --tw-ring-color: rgb(59 130 246 / 0.5);
          --tw-ring-offset-shadow: 0 0 #0000;
          --tw-ring-shadow: 0 0 #0000;
          --tw-shadow: 0 0 #0000;
          --tw-shadow-colored: 0 0 #0000;
          --tw-blur:  ;
          --tw-brightness:  ;
          --tw-contrast:  ;
          --tw-grayscale:  ;
          --tw-hue-rotate:  ;
          --tw-invert:  ;
          --tw-saturate:  ;
          --tw-sepia:  ;
          --tw-drop-shadow:  ;
          --tw-backdrop-blur:  ;
          --tw-backdrop-brightness:  ;
          --tw-backdrop-contrast:  ;
          --tw-backdrop-grayscale:  ;
          --tw-backdrop-hue-rotate:  ;
          --tw-backdrop-invert:  ;
          --tw-backdrop-opacity:  ;
          --tw-backdrop-saturate:  ;
          --tw-backdrop-sepia:  
      }
        ${customThemes}
        `
    },
  },
  {
    layer: 'reset',
    getCSS: () => {
      const data = fs.readFileSync(path.resolve(__dirname, './tailwind.css'), 'utf8')
      return data
    },
  },
]
