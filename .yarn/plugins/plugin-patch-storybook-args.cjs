const fs = require(`fs`);
const util = require(`util`);
const path = require('path')

const patch = `if (typeof value === 'string' && value.startsWith('rgba(')) return true;`
const replacement = `if (typeof value === 'string') return VALIDATION_REGEXP.test(value);`

module.exports = {
  name: `plugin-patch-storybook-args`,
  factory: require => {
    const {structUtils} = require(`@yarnpkg/core`);

    return {
      default: {
        hooks: {
          afterAllInstalled(project) {
           const unplugged = fs.readdirSync(path.join(process.cwd(), '.yarn/unplugged'))
           
           const routerPackages = unplugged.filter(package => package.startsWith('@storybook-router'))

           for (const routerPackage of routerPackages) {
             const utilsPath = path.join(path.join(process.cwd(), '.yarn/unplugged', routerPackage, 'node_modules/@storybook/router/dist/esm/utils.js'))
             const utilsContent = fs.readFileSync(utilsPath).toString()

             if (!utilsContent.includes(patch)) {
               fs.writeFileSync(utilsPath,
                utilsContent.replace(replacement, `${patch}\n  ${replacement}`)
               )
             }
           }

           const clientPackages = unplugged.filter(package => package.startsWith('@storybook-core-client'))

           for (const clientPackage of clientPackages) {
            const parseArgsParamPath = path.join(path.join(process.cwd(), '.yarn/unplugged', clientPackage, 'node_modules/@storybook/core-client/dist/cjs/preview/parseArgsParam.js'))
            const parseArgsParamContent = fs.readFileSync(parseArgsParamPath).toString()

            if (!parseArgsParamContent.includes(patch)) {
              fs.writeFileSync(parseArgsParamPath,
                parseArgsParamContent.replace(replacement, `${patch}\n  ${replacement}`)
              )
            }
           }
          }
        }
      }
    }
  }
}
