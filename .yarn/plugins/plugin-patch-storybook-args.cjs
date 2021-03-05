const fs = require(`fs`);
const util = require(`util`);
const path = require('path')

const patch = '/^[a-zA-Z0-9 (),_-]*$/'
const replacement = '/^[a-zA-Z0-9 _-]*$/'

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
           const clientPackages = unplugged.filter(package => package.startsWith('@storybook-core-client'))

           const paths = []

           for (const routerPackage of routerPackages) {
            paths.push(path.join(process.cwd(), '.yarn/unplugged', routerPackage, 'node_modules/@storybook/router/dist/esm/utils.js')) 
            paths.push(path.join(process.cwd(), '.yarn/unplugged', routerPackage, 'node_modules/@storybook/router/dist/cjs/utils.js')) 
           }

           for (const clientPackage of clientPackages) {
            paths.push(path.join(process.cwd(), '.yarn/unplugged', clientPackage, 'node_modules/@storybook/core-client/dist/cjs/preview/parseArgsParam.js'))
            paths.push(path.join(process.cwd(), '.yarn/unplugged', clientPackage, 'node_modules/@storybook/core-client/dist/esm/preview/parseArgsParam.js'))
           }

           for (const filePath of paths) {
            const content = fs.readFileSync(filePath).toString()

            fs.writeFileSync(filePath, content.replace(replacement, patch))
           }
          }
        }
      }
    }
  }
}
