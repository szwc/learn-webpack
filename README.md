# learn-webpack

# 安装

安装最新稳定版
npm i -D webpack

npm i -D webpack-cli

安装指定版本
npm i -D webpack@<version>

安装最新体验版本
npm i -D webpack@beta

## loader
- use 属性的值需要是一个由 Loader 名称组成的数组，Loader 的执行顺序是由后到前的；
- 每一个 Loader 都可以通过 URL querystring 的方式传入参数，例如 css-loader?minimize 中的 minimize 告诉 css-loader 要开启 CSS 压缩。

除了在 webpack.config.js 配置文件中配置 Loader 外，还可以在源码中指定用什么 Loader 去处理文件。 以加载 CSS 文件为例，修改上面例子中的 main.js 如下：

`require('style-loader!css-loader?minimize!./main.css');`
## Plugin

Plugin 是用来扩展 Webpack 功能的，通过在构建流程里注入钩子实现，它给 Webpack 带来了很大的灵活性。

## 参考

