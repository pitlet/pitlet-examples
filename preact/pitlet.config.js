const { transformJsModule } = require('@pitlet/transform-js-module')
const { transformPreact } = require('@pitlet/transform-preact')
const path = require('path')

const transformFunctionMap = {
  js: [transformPreact, transformJsModule],
}

module.exports = {
  transformFunctionMap,
  alias: {
    preact: path.join(__dirname, 'web_modules', 'preact.js'),
  },
}
