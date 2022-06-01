const path = require('path')
module.exports={
    entry: './src/index.js', // 入口文件 可以使用相对路径
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname,'dist')// 打包后的输出路径
    }
    
}