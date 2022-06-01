const path = require('path')
module.exports={
    entry: './src/index.js', // 入口文件 可以使用相对路径
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist')// 打包后的输出路径
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: [
                'style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1, // post-loader执行完了，但是这里要重新用一下postcss-loader
                    esModule: false,
                  }
                },
                // {
                //   loader: 'postcss-loader',
                //   options: {
                //     postcssOptions: {
                //       plugins: [
                //         require('autoprefixer'),
                //         require('postcss-preset-env')
                //       ]
                //     }
                //   }
                // }
                'postcss-loader'
                
              ]
            },
            {
              test: /\.less$/,
              use: [
                'style-loader',
                'css-loader',
                // {
                //   loader: 'postcss-loader',
                //   options: {
                //     postcssOptions: {
                //       plugins: [
                //         require('autoprefixer'),
                //         require('postcss-preset-env')
                //       ]
                //     }
                //   }
                // },
                'postcss-loader',
                'less-loader'
              ]
            },
            {
              test: /\.(png|svg|gif|jpe?g)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    // 1
                    // name: '[name].[hash:6].[ext]',
                    // outputPath: 'img' // 打包后的路径
                    // 2
                    name: 'img/[name].[hash:6].[ext]'
                  }
                }
              ]
            }
          ]
    }
    
}

/*
[ext]: 扩展名
[name]: 文件名
[hash] 文件内容
[contentHash]
[hash:<length>]
[path]
*/