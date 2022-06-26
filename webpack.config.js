/**
 * webpack.config.js
 */

const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  // 环境模式
  mode: "development",
  // 打包入口
  entry: path.resolve(__dirname, "./src/main.js"),
  output: {
    // 打包出口
    path: path.resolve(__dirname, "dist"),
    // 打包完的静态资源文件名
    filename: "js/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
      filename: "index.html",
      title: "Strong to Stop",
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    port: 36100,
  },
};
