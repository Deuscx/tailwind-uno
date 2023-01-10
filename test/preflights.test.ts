import { describe, expect, it } from 'vitest'
import { createGenerator } from '@unocss/core'
import { presetDaisy } from '../packages/preset-daisy/src/index'
import { generateThemeCss } from '../packages/preset-daisy/src/utils'

describe('preflights', () => {
  it('variable css', () => {
    expect(generateThemeCss('test', {
      'color-scheme': 'dark',
      'primary': '#09ecf3',
      'primary-content': '#005355',
      'secondary': '#966fb3',
      'accent': '#ffe999',
      'neutral': '#3b8ac4',
      'base-100': '#345da7',
      'info': '#2563eb',
      'success': '#16a34a',
      'warning': '#d97706',
      'error': '#dc2626',
    })).toMatchSnapshot()
  })
  it('basic', async () => {
    const uno = createGenerator({
      presets: [presetDaisy()],
      theme: {
        themes: ['emerald'],
      },
    })
    const { css } = await uno.generate('')
    expect(css).toMatchSnapshot()
  })
})
