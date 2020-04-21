const { transformJsModule } = require("@pitlet/transform-js-module");
const {
  transformVue,
  transformVuePostTransformBlock,
  transformVueTemplate,
} = require("@pitlet/transform-vue");
const { validateWithEslint } = require("@pitlet/validate-with-eslint");

const validateWithEslintOptions = {
  baseConfig: require("./.eslintrc.js"),
};

const transformFunctionMap = {
  vue: [
    validateWithEslint(validateWithEslintOptions),
    transformVue,
    transformJsModule,
  ],
  "vue-html": [transformVueTemplate, transformJsModule],
  "vue-js": [
    validateWithEslint(validateWithEslintOptions),
    transformJsModule,
    transformVuePostTransformBlock,
  ],
  js: [validateWithEslint(validateWithEslintOptions), transformJsModule],
};

module.exports = {
  transformFunctionMap,
};
