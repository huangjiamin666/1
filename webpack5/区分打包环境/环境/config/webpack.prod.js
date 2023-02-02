
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { DefinePlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 在vue2中处理15版本及以上的vue-loader
// const  VueLoaderLibPlugin = require('vue-loader/lib/plugin')



module.exports={
    mode: 'production',
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