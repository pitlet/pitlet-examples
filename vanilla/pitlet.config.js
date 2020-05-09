const { transformJsModule } = require('@pitlet/transform-js-module')
const { packageJs } = require('@pitlet/package-js')

module.exports = {
  transformFunctionMap: {
    js: [transformJsModule],
  },
  packageFunctions: [packageJs],
}
