1.
output:{
  <!-- 自己編寫的代碼 名字從這裏來optimization.chunkIds -->
  filename:"[name].bundle.js",
  <!-- 異步加載的文件 名字從這裏來webpackChunName -->
  chunkFilename:"[name].chunk.js"

}
const TerserWebpackPlugin=require('terser-webpack-plugin')
optimization:{  
  <!-- // usedExports:目的是標注出來哪些函數是沒有被使用 （treeshaking） -->
  usedExports：true // 生產環境默認是開啓的，結合TerserWebpackPlugin從代碼中刪除 例如刪除console.log
  <!-- 這個設為true下面才能實現 -->
  minimize:true,
  minimizer:[
    new TerserWebpackPlugin({
      terserOptions:{
        compress:{
          drop_console: true,
          drop_debugger: true,
          pure_funcs:["console.log","console.error"]
        }
      }
    })
  ]}
  <!-- // natural:使用自然數（不推薦）
  // named: 使用包括所在目錄作爲包名
  // deterministic 生成id,針對相同文件生成的id是不變 -->
  <!-- 打包文件的前綴名 這個屬性在開發環境和生產環境會自動配置，不需要手動配置-->
  chunkIds:"named",
  <!-- runtimeChunk將異步加載的代碼單獨打包  -->
  <!-- runtimeChunk://是否將被依賴的子組件單獨打包，不放入主模塊中  //重要 -->
  runtimeChunk:true,single,{name:'runtime'}


  output中如何定義異步打包產生的包名 
  chunkFilename:"[name].[chunkhash:6].chunk.js"
2. import魔法函數 
只要是異步導入的代碼，webpack都會進行代碼分離
<!-- // 瀏覽器有空閑了再提前下載好 webpackPrefetch: true -->
<!-- 這裏的webpackChunName:就是設置打包后的js名字 -->
import(/* webpackChunName:"foo" */ /* webpackPrefetch: true */ './foo.js').then(res=>{
  console.log(res)
})
3. babel預設設置按需引入useBuitIns:usage,刪除入口文件的兩個import文件
4. 按需引入自定義element
5. css文件代碼抽取到css文件  
 MiniCssExtractPlugin可以幫助我們將css提取到一個獨立的css文件中，該插件需要在webpack4+才可以使用
   安裝mini-css-extract-plugin 
   生產環境中的配置
   const MiniCssExtractPlugin = require('mini_css-extract-plugin')
   plugins:[
     new MiniCssExtractPlugin({
       filename:"css/[name].[chunkhash:6].css",
       chunkFilename:"css/[name].[contenthash].css"
     })
   ]
   <!-- 結合loader處的配置 -->
   {
     test:/\.css/i,  
     <!-- style-loader=>development -->
     use: [
       isProduction?MiniCssExtractPlugin.loader:'style-loader',
       "css-loader"
       ]
   }
6. 若有兩個入口文件
   hash, 改變一個另外一個一起變，不希望這樣
   chunkhash和普通的hash不一样，它根据不同的入口文件(Entry)进行依赖文件解析，构建对应的chunk，生成对应的哈希值。我们在生产环境里把一些公共库和程序入口文件（主入口文件Index.js及其对应的依赖文件Index.css）区分开，单独打包构建，接着我们采用chunkhash的方式进行哈希值，那么只要我们不改动公共库得到代码，就可以保证其哈希值不会受影响。

但是chunkhash也有弊端，就是程序入口文件内容发生改变，那么就算css文件就算内容没有任何改变，由于是该模块发生了改变，css也会重复构建。此时我们可以使用extra-text-webpack-plugin里的contenthash值，保证即使css文件所处的模块里的文件内容发生改变，只要css文件内容不变，就不会重复构建
7. gzip壓縮
npm install compression-webpack-plugin -D
const CompressionPlugin=require('compression-webpack-plugin')
new CompressionPlugin({
  threshold:0,//多大壓縮
  test:/\.(css|js)$/i,
  minRation:0.8//壓縮比例 多大比例才開始壓縮
  //exclude
  //include
})

8. html文件壓縮 生產環境默認壓縮的
new HtmlWebpackPlugin({
  template:'./index.html',
  inject:'body',false,true,
  cache: true //儅文件沒有發生改變時，使用之前的文件 
  minify:isProduction?{
    removeComments: true// 移除注釋
  }:false
})



9. speed-measure-webpack-plugin分析打包速度

能够列出输出、loader和plugins的耗时,过长将会使用黄色和红色显示
1、下载
	cnpm install -D speed-measure-webpack-plugin
	
2、使用
	const SpeedMeasurePlugin=require('speed-measure-webpack-plugin')
	
	const smp = new SpeedMeasurePlugin();
	smp.wrap({生產配置config})

10. 打包視圖插件（npm run build --report)
 或者使用插件 bundleAnalyzerPlugin 執行npm run build


11. 打包後的所有資源都放到cdn服務器上，可以直接在output内的publicPath下添加該cdn

12.css壓縮(生產)
  npm install css-minimizer-webpack-plugin -D
  const  CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

  plugins:[
    new CssMinimizerPlugin()
  ]

