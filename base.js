const path = require("path");
const webpack = require("webpack");
const root = __dirname;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function() {
  return {
    entry: [
      "react-hot-loader/patch",
      // 开启react代码的模块热替换（HMR）
      "webpack-dev-server/client?http://localhost:8080",
      // 为webpack-dev-server的环境打包好运行代码
      // 然后连接到指定服务器域名与端口
      "webpack/hot/only-dev-server",
      // 为热替换（HMR）打包好运行代码
      // only- 意味着只有成功更新运行代码才会执行热替换（HMR）

      path.resolve(root, "src/index.js")
    ],
    output: {
      path: path.resolve(root, "dist"),
      filename: "index_bundle.js",
      publicPath: "/"
      // 对于热替换（HMR）是必须的，让webpack知道在哪里载入热更新的模块（chunk）
    },
    module: {
      loaders: [
        { test: /\.(js|jsx)$/, use: "babel-loader", exclude: /node_modules/ },
        { test: /\.css$/, use: ["style-loader", "css-loader"] },
        {
          test: /\.svg$/,
          loader: "babel-loader!svg-react-loader"
        },
        {
          test: /\.jpe?g$|\.gif$|\.png$/,
          loader: "url"
        }
      ]
    },
    devServer: {
      hot: true,
      // 开启服务器的模块热替换（HMR）
      contentBase: path.resolve(root, "dist"),
      // 输出文件的路径
      publicPath: "/"
      // 和上文output的"publicPath"值保持一致
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "index.html",
        title: "Explorer React",
        inject: "body"
      }),
      new webpack.HotModuleReplacementPlugin(), // 热替换插件
      new webpack.NamedModulesPlugin() // 执行热替换时打印模块名字
    ]
  };
};
