const path = require('path')
module.exports = {
  entry: './src/index.js', // 入口文件 可以使用相对路径
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'), // 打包后的输出路径
    // assetModuleFilename: 'img/[name].[hash:4][ext]' // asset模块打包图片路径
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
      // {
      //   test: /\.(png|svg|gif|jpe?g)$/,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: 'img/[name].[hash:4][ext]'
      //   }
      // },
      // {
      //   test: /\.(png|svg|gif|jpe?g)$/,
      //   type: 'asset/inline'
      // }
      { // 这一块的代码 30kb一下打包成base64,30kb以上打包copy成图片并在特定文件内
        test: /\.(png|svg|gif|jpe?g)$/,
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:4][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024
          }
        }
      },
      {
        test: /\.(ttf|woff2?|eot|otf)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name].[hash:3][ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset/resource',
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024
          }
        },
        generator: {
          filename: 'media/[name].[hash:3][ext]'
        }
      }
    ]
  }

}