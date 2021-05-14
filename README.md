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

## DevServer
npm i -D webpack-dev-server

## Entry
    entry是配置模块的入口，可抽象成输入，Webpack 执行构建的第一步将从入口开始搜寻及递归解析出所有入口依赖的模块。

    entry 配置是必填的，若不填则将导致 Webpack 报错退出

    ```
    entry:{
        
    }
    ```

## Output
```
output:{
    filename:'[name].js',
    chunkFilename:'', // chunkFilename 只用于指定在运行过程中生成的 Chunk 在输出时的文件名称。 常见的会在运行时生成 Chunk 场景有在使用 CommonChunkPlugin、使用 import('path/to/module') 动态加载等时
    path:'', // 配置输出文件存放在本地的目录，必须是 string 类型的绝对路径
    publicPath:'',//配置发布到线上资源的 URL 前缀，为string 类型。 默认值是空字符串 ''，即使用相对路径
    crossOriginLoading:'anonymous/use-credentials'//用于配置这个异步插入的标签的 crossorigin 值
}
```

## module

## devServer

只有在通过 DevServer 去启动 Webpack 时配置文件里 devServer 才会生效，因为这些参数所对应的功能都是 DevServer 提供的，Webpack 本身并不认识 devServer 配置项。

DevServer 的实时预览功能依赖一个注入到页面里的代理客户端去接受来自 DevServer 的命令和负责刷新网页的工作。 devServer.inline 用于配置是否自动注入这个代理客户端到将运行在页面里的 Chunk 里去，默认是会自动注入。 DevServer 会根据你是否开启 inline 来调整它的自动刷新策略

```
devServer {
    hot：true,  // 是否启用模块热替换功能
    inline: true,
}
```
# 实战

# 问题
关于webpack不同版本对应 loader plugin等版本问题，如何查找 参考[这里](https://juejin.cn/post/6898889812741210125)

## 参考

