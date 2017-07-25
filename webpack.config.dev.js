const path = require("path");
const webpack = require("webpack");
const root = __dirname;
const webpackMerge = require("webpack-merge");
const commonConfig = require("./base.js");

module.exports = function(env) {
  return webpackMerge(commonConfig(), {
    devtool: "cheap-module-eval-source-map",
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(env)
        }
      })
    ]
  });
};
