webpack 4 入口出口的零配置
新建一目录webpack-4
运行npm init -y
运行命令npm i webpack wepback-cli -D
修改package.json文件，加入
        "scripts":{
            "build":"webpack"
        }
运行命令npm run build
出现入口文件模块没找到的错误的提示(webpack会自动查找入口目录./src，通过编译入口文件内容来产生bundle文件)
之前的webpack版本入口指向通常在webpack.config.js中进行配置
但在webpack 4中入口文件的配置操作不是一定必须的，它会默认指向./src/index.js文件
创建src目录，新建index.js文件，输入代码console.log('这是webpack 4入口文件');
运行命令npm run build
将在根目录下产生一目标目录dist以及main.js文件
webpack 4也不需要定义出口文件？是的！webpack 4出口文件的配置也不是必须的。我们甚至不需要配置任何的配置文件webpack.config.js就可以进行项目的编译打包操作，而默认的入口文件是./src/index.js，默认的出口文件则是./dist/main.js。

webpack 4 开发模式及产品模式
    以往webpack的配置文件通常有两种常用类型：
开发模式，主要定义本地服务器等内容；
产品模式，可以定义UglifyJSPlugin插件，sourcemaps等内容；
    虽然大型项目可能仍需要2个文件，但一般情况在webpack 4中可以实现不配置任何一个文件任何一行代码就可以进行项目管理。
    查看之前npm run build的编译输出，就可以看到一些警告信息：

模式选项没有设置，模式选项可以设置为development或者是production不同的环境模式。
打开package.json，修改该文件：
"scripts": {
    "dev": "webpack --mode development",
    "build": "webpack --mode production"
}
将模式参数加入到webpack中去。
运行命令npm run dev，然后查看./dist/main.js，是的，该文件是没有压缩的代码文件；
运行命令npm run build，然后查看./dist/main.js，是的，该文件是已经压缩的代码文件；
webpack 4 提供了development开发及production产品模式，而只需要设置--mode参数即可，不需要配置文件操作。

webpack 4 重置入口及出口文件
修改package.json文件
"scripts": {
  "dev": "webpack --mode development ./foo/src/js/index.js --output ./foo/main.js",
  "build": "webpack --mode production ./foo/src/js/index.js --output ./foo/main.js"
}
可以直接设置入口及--output出口文件的路径及文件名

webpack 4 利用Babel进行ES6语法转换
    现代javascript通常都用ES6语法格式编写，但却不是所有的浏览器都完全支持ES6语法解析，所以需要进行代码转换，得想办法将ES6代码语法转换成ES5。
    实现代码语法转换通常会使用loaders加载器进行操作，需要安装一些依赖模块进行操作：
babel-core
babel-loader
babel-preset-env

    npm i babel-core babel-loader babel-preset-env --save-dev
    在项目根目录创建一文件.babelrc
{
    "presets": [
        "env"
    ]
}
    这里有两种方法可以进行babel-loader的处理：
使用一个配置文件协助webpack实现
在npm scripts配置中使用--module-bind实现

    也许你想webpack 4不是0配置工具吗？为什么又需要编写配置文件呢？
    而webpack 4零配置的方面主要涉及：
入口文件，默认./src/index.js
出口文件，默认./dist/main.js
产品模式及开发模式
    
    如果你想在webpack 4中使用loaders加载器，你还是必须配置配置文件。
    新建立webpack.config.js配置文件：
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
在配置文件中并有设置入口及出口文件内容，除非你想自定义自己的出入口文件。

打开./src/index.js文件，编写代码：
const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;
运行命令npm run build，然后打开./dist/main.js进行编译代码的查看。

无配置模式使用babel-loader（使用--module-bind模块绑定操作）
通过--module-bind可以在代码行中使用babel-loader解析工具，而该操作在webpack 3中就已经出现，所以并非webpack 4新特性
修改package.json文件：
"scripts": {
    "dev": "webpack --mode development --module-bind js=babel-loader",
    "build": "webpack --mode production --module-bind js=babel-loader"
  }
这样就在命令行模式下直接使用babel-loader的解析操作。

webpack 4：利用webpack 4构建react项目
安装react模块：npm i react react-dom -S
安装react的解析模块：npm i babel-preset-react -D
修改.babelrc配置文件：
{
  "presets": ["env", "react"]
}
这样其实就已经好了的！

不过一般会建议利用babel-loader进行js与jsx文件的解析操作，这需要在webpack.config.js进行相关配置
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

新建文件./src/App.js
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <p>React here!</p>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));

修改入口文件：
    import App from "./App";
    再进行运行

webpack 4：HTML操作插件

    模块安装 ：npm i html-webpack-plugin html-loader -D
修改配置：
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
在入口目录创建index.html文件：./src/index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>webpack 4 quickstart</title>
</head>
<body>
    <div id="app">
    </div>
</body>
</html>
运行命令npm run build，在./dist/目录下你可以查看到生成的html文件，注意：在html文件中并不需要引入main.js文件内容，它将会自动注入到html文件中去，你只需打开./dist/index.html文件就可以查看到React的组件内容了。


webpack 4：分离CSS到单独文件
webpack并不知道如何将CSS代码进行拆分操作，以往操作通常使用extract-text-webpack-plugin插件进行实现。
然后不幸的是，该插件在webpack 4中并不适用。
所以这时就需要使用mini-css-extract-plugin插件来进行问题的解决。
插件的安装：npm i mini-css-extract-plugin css-loader -D
新建CSS文件./src/main.css
body{
    line-height:2;
}

修改webpack.config.js配置文件：

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};

在Js中引入CSS文件，./src/index.js
import style from './main.css'
运行命令npm run build，在./dist目录下你可以查看到对应的CSS文件。

webpack 4：创建本地服务
之前一直使用webpack-dev-server进行本地服务的构建，现在同样还是可以使用该插件进行操作
安装插件：npm i webpack-dev-server --save-dev
修改package.json配置文件
"scripts": {
  "start": "webpack-dev-server --mode development --open",
  "build": "webpack --mode production"
}
运行命令：npm run start，可以看到服务已经将你的应用进行启动操作了，并显示在了浏览器中。
