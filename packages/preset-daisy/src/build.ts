import path from 'path'
import fs from 'fs-extra'
import fg from 'fast-glob'
import type { Rule } from 'unocss'
import { stringify } from 'javascript-stringify'
import postcss from 'postcss'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import colorNames from '../../../daisyui/src/colors/colorNames'

function getDistCSSPath(filePath: string) {
  return `../../daisyui/dist/${filePath}/*.css`
}
async function build() {
  const entries = await fg([
    getDistCSSPath('components/unstyled'),
    getDistCSSPath('components/styled'),
    getDistCSSPath('utilities/unstyled'),
    getDistCSSPath('utilities/styled'),
  ], { dot: true })

  // merge unstyled and styled components;
  const componentMap = new Map<string, string[]>()
  for (const cssPath of entries) {
    const component = path.basename(cssPath, path.extname(cssPath))
    if (componentMap.has(component))
      componentMap.set(component, [...componentMap.get(component) || [], cssPath])
    else
      componentMap.set(component, [cssPath])
  }

  const rules: Rule[] = []
  Array.from(componentMap.entries()).forEach(([component, cssPaths]) => {
    let data = ''
    for (const cssPath of cssPaths) {
      data += fs.readFileSync(cssPath, { encoding: 'utf8' })
      data += '\r\n'
    }
    rules.push(generateComponentRule(component, data))
  })
  const resultPath = path.resolve(__dirname)

  fs.ensureDir(resultPath)
  const content = `export default ${stringify(rules) || '[]'}`
  fs.writeFileSync(path.resolve(resultPath, './rules.ts'), content)

  fs.writeFileSync(path.resolve(resultPath, './colorNames.ts'), `export default ${JSON.stringify(colorNames, null, 2)}`)

  const themeCss = fs.readFileSync(path.resolve(__dirname, '../../../daisyui/dist/themes.css'), 'utf8')
  const themeData = postcss.parse(themeCss)
  const themeContent: Record<string, Record<string, string>> = {}
  for (const node of themeData.nodes) {
    const selector = (node as any).selector
    if (!selector) continue
    const themeName = selector.match(/\[data-theme=(?<theme>.+)]/)?.groups?.theme
    if (!themeName) continue
    themeContent[themeName] = (node as any).nodes.reduce((result: any, cur: any) => {
      result[cur.prop] = cur.value
      return result
    }, {})
  }
  fs.writeFileSync(path.resolve(resultPath, './themes.ts'), `export default ${JSON.stringify(themeContent, null, 2)}`)
}

const componentSelectorAlias: Record<string, string> = {
  'bottom-navigation': 'btm-nav',
  'button': 'btn',
  'form': 'form-control',
  'typography': 'prose',
}
function generateComponentRule(component: string, code: string): Rule {
  const selector = componentSelectorAlias[component] ? componentSelectorAlias[component] : component
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  // eslint-disable-next-line no-new-func
  return [new RegExp(`^${selector}`), new Function(`return \`${code}\``)]
}

build()
