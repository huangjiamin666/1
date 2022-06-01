const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { DefinePlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 在vue2中处理15版本及以上的vue-loader
// const  VueLoaderLibPlugin = require('vue-loader/lib/plugin')
module.exports={
    mode: 'development',
    devtool: false,
    entry: './src/index.js', // 入口文件 可以使用相对路径
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname,'dist'), // 打包后的输出路径
        publicPath: '/'
        // assetModuleFilename: 'img/[name].[hash:4][ext]' // asset模块打包图片路径
    },
    devServer: {
      // 只刷新当前报错的热更新
      hot: 'only',
      proxy: {
        //  /api/users
        // 从 http://localhost:4000/api/users
        // 转换到 https://api.github.com/api/users
        '/api': {
          target: 'https://api.github.com',
          pathRewrite: { "^/api": "" },
          changeOrigin: true
        }
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