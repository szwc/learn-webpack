const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const HotModuleReplacementPlugin = require('')
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // context:path.resolve(__dirname,'app'),
  // JavaScript 执行入口文件
  entry: "./src/main.js",
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: "index_bundle.js",
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, "./dist"),
  },
  resolve: {
    // 先尝试 ts 后缀的 TypeScript 源码文件
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use:['style-loader','css-loader']
        // use:[
        //     'style-loader',
        //     {
        //         loader:'css-loader',
        //         options:{
        //         }
        //     }
        // ]
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
        }),
      },
      {
        test: /\.js/,
        exclude: "/(node_modules)/",
        // use:['babel-loader'],
        loader: "babel-loader",
        // Module build failed: Error: Couldn't find preset "@babel/preset-env" relative to directory "D:\\myown\\learn-webpack\\node_modules\\css-loader"
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      // 从 .js 文件中提取出来的 .css 文件的名称
      filename: `[name]_[contenthash:8].css`,
      // filename: `first.css`,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "learn webpack",
      template: "./index.html",
    }),
  ],
  devServer: {
    hot: true,
    inline: true,
  },
};
