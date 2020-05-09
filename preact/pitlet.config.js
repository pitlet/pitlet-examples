const { transformJsModule } = require('@pitlet/transform-js-module')
const { transformPreact } = require('@pitlet/transform-preact')
const { packageJs } = require('@pitlet/package-js')

module.exports = {
  entryPath: `${__dirname}/src/index.js`,
  transformFunctionMap: {
    js: [transformPreact, transformJsModule],
  },
  packageFunctions: [packageJs],
}
