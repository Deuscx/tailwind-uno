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
        ${customThemes}
        `
    },
  },
]
