const { transformJsModule } = require('@pitlet/transform-js-module')

const transformFunctionMap = {
  js: [transformJsModule],
}

module.exports = {
  transformFunctionMap,
}
