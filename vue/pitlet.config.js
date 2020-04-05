const { transformJsModule } = require('@pitlet/transform-js-module')
const {
  transformVue,
  transformVuePostTransformBlock,
  transformVueTemplate,
} = require('@pitlet/transform-vue')
const path = require('path')

const transformFunctionMap = {
  vue: [transformVue, transformJsModule],
  'vue-html': [transformVueTemplate, transformJsModule],
  'vue-js': [transformJsModule, transformVuePostTransformBlock],
  js: [transformJsModule],
}

module.exports = {
  transformFunctionMap,
  alias: {
    vue: path.join(__dirname, 'web_modules', 'vue.js'),
  },
}
