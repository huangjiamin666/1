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
              use: [ 'style-loader', 'css-loader' ]
            },
            {
              test: /\.less$/,
              use: [ 'style-loader', 'css-loader', 'less-loader' ]
            }
          ]
    }
    
}