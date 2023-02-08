1.于是今天就针对这个分析了一下热更新慢的原因，步骤如下

首先先在package中的启动命令加上

--progress --watch --colors --profile
先解释一下这几个参数的含义

--progress 构建进度
--watch 实时监测
--profile 编译过程中的步骤耗时时间

npm install babel-plugin-dynamic-import-node --save-dev

{
    "env":{
        "development":{
            "plugins":["dynamic-import-node"]
        }
    }
}
vue项目大了之后,每次热更新都要10多秒的时间, 网上找了一大堆发现一个有用的办法 "env": { "development":{ "plugins": ["dynamic-import-node"] }}




2.npm install babel-plugin-dynamic-import-node --save-dev
1.在webpack中配置方案
module.exports = {
  presets: [
    '@vue/app'
  ],
  env: {
    development: {
      plugins: ['dynamic-import-node']
    }
  }
}
2.在vue.config.js中配置方案

const webpack = require('webpack');
module.exports = {
  configureWebpack: config => {
    if(process.env.NODE_ENV === 'production'){
      return{
          
      };
    }else{
      return {
        plugins: [
          new webpack.LoaderOptionsPlugin({
             plugins: ['dynamic-import-node'] 
          })
        ]
      };
    }
 }
};
3.提升运行速度
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
new HardSourceWebpackPlugin()