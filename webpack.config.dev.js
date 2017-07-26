const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./base.js");

module.exports = function(env) {
  return webpackMerge(commonConfig(), {
    devtool: "cheap-module-inline-source-map",
    // devtool: "eval-source-map",
    // devtool: "inline-source-map",
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
