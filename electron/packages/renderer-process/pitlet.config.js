const { transformJsModule } = require('@pitlet/transform-js-module')
const { packageJs } = require('@pitlet/package-js')

module.exports = {
  transformFunctionMap: {
    js: [transformJsModule],
  },
  entryPath: `${__dirname}/src/rendererProcess.js`,
  packageFunctions: [packageJs],
}
