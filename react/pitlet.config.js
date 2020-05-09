const { transformJsModule } = require('@pitlet/transform-js-module')
const { transformReact } = require('@pitlet/transform-react')
const { packageJs } = require('@pitlet/package-js')

module.exports = {
  entryPath: `${__dirname}/src/index.js`,
  transformFunctionMap: {
    js: [transformReact, transformJsModule],
  },
  packageFunctions: [packageJs],
}
