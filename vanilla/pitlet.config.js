const { transformJsModule } = require('@pitlet/transform-js-module')
const { packageJs } = require('@pitlet/package-js')

const transformFunctionMap = {
  js: [transformJsModule],
}

const packageFunctions = [
  packageJs
]

module.exports = {
  transformFunctionMap,
  packageFunctions
}
