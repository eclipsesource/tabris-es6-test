// See https://github.com/AngularClass/angular2-webpack-starter/

var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
var OccurenceOrderPlugin = require('webpack/lib/optimize/OccurenceOrderPlugin');

module.exports = {
  entry: "./src/polyfill.js",
  output: {
    filename: "dist/polyfill.js",
    library: "polyfill",
    libraryTarget: "commonjs2"
  }
};
