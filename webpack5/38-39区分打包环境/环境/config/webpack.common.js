const resolveApp = require('./paths')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { DefinePlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 在vue2中处理15版本及以上的vue-loader
// const  VueLoaderLibPlugin = require('vue-loader/lib/plugin')
const {merge} = require('webpack-merge')
// 导入其他配置
const prodConfig = require('./webpack.prod')
const devConfig = require('./webpack.dev')




//定义读写保存base信息
const commonConfig = {
    entry: './src/index.js', // 入口文件 可以使用相对路径
    output: {
        filename: 'js/main.js',
        path: resolveApp('./dist'), // 打包后的输出路径
        publicPath: '/',
        // assetModuleFilename: 'img/[name].[hash:4][ext]' // asset模块打包图片路径
    },
    // 解析
    resolve: {
      extensions: [".js", ".json", ".ts", ".jsx", ".vue"],
      alias: {
        "@": resolveApp('./src')
      }
    },
    module: {
        rules: [
            {
              test: /\.vue$/,
              use: ['vue-loader']

            }
          ]
    },
    // 插件
    plugins: [
      new CleanWebpackPlugin(), // 自动清空原来的打包文件
      new HtmlWebpackPlugin({
        title: 'html-webpack-plugin', // 修改html里的title
        template: './public/index.html'
      }),
      // DefinePlugin webpack内置的所以不需要安装
      new DefinePlugin({
        BASE_URL: '"./"'
      }),
      new CopyWebpackPlugin({
        patterns: [
          { 
             from: 'public',
             globOptions: {
               ignore: ['**/index.html']
             }
          }
        ]
      }),
      // 在vue2中处理15版本及以上的vue-loader
      // new VueLoaderLibPlugin()
    ]
}


module.exports = (env) => {
    console.log(env, '----------------')
    const isProduction = env.production
    // 依据当前的打包模式合并配置
    const  config = isProduction ? prodConfig: devConfig
    const mergeConfig = merge(commonConfig,config)
    return mergeConfig
}