1. 
<!-- webpack实现tree Shaking采用了两种不同的方案
usedExpots:通过标记某些函数是否被调用，之后通过Terser来进行优化的
sideEffects:跳过整个模块/文件，直接查看该文件是否有副作用
有副作用的要打包，
production模式下自动加入了 -->
mode:'development',
optimization:{
    <!-- userExports：目的是标注出来哪些函数是没有被使用的 
    结合terser将未使用的函数，从代买中删除
     production模式下自动加入了userExports:true, -->
    userExports:true,
    minimize：true,
    minimizer:[
        new TerserPluginWebpack({
            terserOptions:{
                compress:{
                    dead_code:true
                }
            }
        })
    ]
}

所以实现tree Shangking需要usedExports和terser结合

2. 开发时最好写纯模块
sideEffects用于告知webpack compiler哪些模块是有副作用的（副作用的意思是有其他的作用）
package.json里加上
{
    sideEffects:false
}
这样相当于说明这些代码中没有副作用的代码,
(例如import一个format.js但是并没有使用，这样就不会去给他打包，)
这样写的话如果存在有副作用的代码那就会被删除掉不打包
所以
一般这样写
{
    "sideEffects":[
        './src/format.js',
        <!-- 所有的css -->
        '**.css' 
    ]
}
这样打包虽然这个模块有副作用，但是打包时不会被删除


但是如果只涉及css时这样写有点浪费 所以
{
    “sideEffects":false
}

[
    test:/\.css/i,
    use:[
        isporduction?minicssExtractPlugin.loader:'style-loader','css-loader'],
        sideEffects:true
    ]
]



3. css的tree Shaking  结合PurgeCss
npm install purgecss-webpack-plugin -D
const PurgeCssPlugin=require('purgecss-webpack-plugin')
const glob=require('glob')
plugins:[
    new PurgeCssPlugin({
        <!-- 找src下所有的文件 -->
        paths:glob.sync(`${resolveApp('./src/')}/**/*`,{nodir:true})，
<!-- 哪个是安全的不做tree Shaking -->
        salelist:function(){
            return {
                standard:['body','html']
            }
        }
    })
]


webpack代码压缩
npm install compression-webpack-plugin -D
const CompressionPlugin = require('compression-webpack-plugin')
plugins:[
    new CompressionPlugin({
        <!-- 多大压缩 -->
        threshold:0,
        test:/\.(css|js)$/i,

        minRatio:0.8,
        algorithm:'gzip'
    })
]

html文件压缩
plugins:[
    new HtmlWebpackPlugin({
      template:'./index.html',
      <!-- 注入css,js文件<script> -->
      inject:true,  
      <!-- 当文件没有发生任何改变时，直接使用之前的缓存 -->
      cache:true,
      minify:isProduction?{
        <!-- 移除注释 -->
        removeComments:true,
        <!-- 是否移除多余的属性 -->
        removeRedundantAttributes:true，
        <!-- 是否移除空属性 -->
        removeEmptyAttributes:true，
        <!-- 折叠空格 -->
        collapseWhitespace:false,
      }:false,
    })
]

