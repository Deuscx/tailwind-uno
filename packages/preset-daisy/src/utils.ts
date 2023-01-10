import colorNames from './colorNames'

const colorAlias = Object.keys(colorNames)
export function generateThemeCss(themeName: string, variables: Record<string, string>) {
  return `
    .[data-theme=${themeName}]{
        ${Object.entries(variables).map(([key, value]) => {
            // find alias
            if (colorAlias.includes(key))
                key = (colorNames as any)[key]

            return `${key}: ${value};`
        }).join('\r\n')}
    } 
    `
}
