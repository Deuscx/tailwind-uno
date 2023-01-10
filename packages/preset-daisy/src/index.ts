import type { DynamicRule, Preset } from 'unocss'
import { preflights } from './preflights'
import rules from './rules'

export function presetDaisy(): Preset {
  return {
    name: '@deuscx/unocss-preset-daisy',
    rules: rules as DynamicRule[],
    preflights,
  }
}
