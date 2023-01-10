import path from 'path'
import fs from 'fs-extra'
import fg from 'fast-glob'
import type { Rule } from 'unocss'
import { stringify } from 'javascript-stringify'
// @ts-expect-error
import colorNames from '../../../daisyui/src/colors/colorNames'
// @ts-expect-error
import themes from '../../../daisyui/src/colors/themes'
async function build() {
  const entries = await fg(['../../daisyui/dist/components/styled/*.css'], { dot: true })

  const rules: Rule[] = []
  entries.forEach((file) => {
    const data = fs.readFileSync(file, { encoding: 'utf8' })
    const component = path.basename(file, path.extname(file))
    rules.push(generateComponentRule(component, data))
  })
  const resultPath = path.resolve(__dirname)

  fs.ensureDir(resultPath)
  const content = `export default ${stringify(rules) || '[]'}`
  fs.writeFileSync(path.resolve(resultPath, './rules.ts'), content)

  fs.writeFileSync(path.resolve(resultPath, './colorNames.ts'), `export default ${JSON.stringify(colorNames, null, 2)}`)

  const themeContent = Object.entries(themes).reduce<Record<string, any>>((obj, [name, values]) => {
    const themeName = name.match(/\[data-theme=(?<theme>.+)]/)?.groups?.theme
    if (!themeName) return obj

    obj[themeName] = values
    return obj
  }, {})
  fs.writeFileSync(path.resolve(resultPath, './themes.ts'), `export default ${JSON.stringify(themeContent, null, 2)}`)
}

function generateComponentRule(component: string, code: string): Rule {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  // eslint-disable-next-line no-new-func
  return [new RegExp(`^${component}$`), new Function(`return \`${code}\``)]
}

build()
