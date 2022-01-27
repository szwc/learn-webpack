const path = require("path");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const HotModuleReplacementPlugin = require('')
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  // context:path.resolve(__dirname,'app'),
  // JavaScript 执行入口文件
  mode: "development",
  entry: {
    pageMain: "./src/main.js",
    // pageApp: "./src/app.js",
  },
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    // filename: "index_bundle.js",
    filename: "[name][hash:5].bundle.js", //生成文件名称
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, "./dist"),
    clean: true,
  },
  resolve: {
    // 先尝试 ts 后缀的 TypeScript 源码文件
    extensions: [".ts", ".js"],
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        // use:[
        //     'style-loader',
        //     {
        //         loader:'css-loader',
        //         options:{
        //         }
        //     }
        // ]
        // use: ExtractTextPlugin.extract({
        //   fallback: "style-loader",
        //   use: "css-loader",
        // }),
      },

      // img
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      // font
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      // vue
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [
    // new ExtractTextPlugin({
    //   // 从 .js 文件中提取出来的 .css 文件的名称
    //   filename: `[name]_[contenthash:8].css`,
    //   // filename: `first.css`,
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "learn webpack",
      template: "./index.html",
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    // hot: true,
    // inline: true,
  },
  optimization: {
    //webpack4新增
    splitChunks: {
      //可以在这里直接设置抽离代码的参数，最后将符合条件的代码打包至一个公共文件
      cacheGroups: {
        //设置缓存组用来抽取满足不同规则的chunk,下面以生成common、vender为例
        // 根据不同的参数设置抽取不同条件的公共js
        common: {
          //
          name: "common",
          chunks: "all",
          minSize: 1,
          minChunks: 1,
          priority: 1, //设置匹配优先级，数字越小，优先级越低
        },
        vendor: {
          name: "vender",
          test: /[\\/]node_modules[\\/]/, //匹配node模块中匹配的的模块
          priority: 10, //设置匹配优先级，数字越大，优先级越高
          chunks: "all",
        },
      },
    },
  },
};
