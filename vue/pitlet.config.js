const { transformJsModule } = require("@pitlet/transform-js-module");
const {
  transformVue,
  transformVuePostTransformBlock,
  transformVueTemplate,
} = require("@pitlet/transform-vue");

const transformFunctionMap = {
  vue: [transformVue, transformJsModule],
  "vue-html": [transformVueTemplate, transformJsModule],
  "vue-js": [transformJsModule, transformVuePostTransformBlock],
  js: [transformJsModule],
};

module.exports = {
  transformFunctionMap,
};
