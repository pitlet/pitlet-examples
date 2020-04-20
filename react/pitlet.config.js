// const { transformCss } = require('../../../../../bundler3/packages/transform/transform-css/dist/transformCss')
const { transformJsModule } = require("@pitlet/transform-js-module");
const { transformReact } = require("@pitlet/transform-react");
const path = require("path");

const transformFunctionMap = {
  js: [transformReact, transformJsModule],
  // css: [transformCss],
};

module.exports = {
  transformFunctionMap,
};
