## export 或者export default導出，用import導入
## moudle.exports 導出，用require導入
## 五個模塊：entry,output,module,plugin,loader
## loader特定的模塊類型進行轉換
## plugin用於更加廣汎的任務，如打包優化，資源管理，環境變量注入等
1. postcss處理css兼容 babel處理js兼容（結合borwserslitrc)
2. assets代替file-loader url-loader
3. cleanWebpackPlugin 打包之前清除舊的包
4. 複製html模板
  new HtmlWebpackPlugin({
    title:'',
    template:'./public/index.html'
  })
5. DefinePlugin 定義全局常量
  new DefinePlugin({
    BASE_URL: '"./"'
  })

6. copy靜態文件到打包后的文件中
  new CopyWebpackPlugin({
    patterns:[
      {
        from:'public',
        <!-- to: //默認不用寫 -->
        globOptions:{
          ignore:[
            '**/index.html',
            "**/.DS_Store"
          ]
        }
      }
    ]
  })

7. ## sourceMap是從已轉換的代碼，映射到原始的源文件
   ## devtool開發調試   被babel處理過後的代碼用 devtool:'cheap-module-source-map'
   開發推薦 devtool:'cheap-module-source-map' 
   生產環境推薦 devtool:'false' 

8. ## babel的使用

9. ## webpack-dev-serve (任何變化都會重新打包顯示在頁面上)

  <!-- npm i webpack-dev-server -D

  script下新增
    "scripts": {
      "serve": "webpack serve --config lg.webpack.js"
    }, -->

  HMR(模塊熱換，修改指定模塊，指定模塊會重新更新，而不是所有的都更新)
  在webpack.config.js下添加
  <!-- devServer:{
    hot:true,
    hotOnly:true,// 當編譯出錯時，修改正確后不會刷新整個頁面，從而提高工作效率
    // 例如頁面中有個計數器已經計到100,，，，這樣
  } -->
  即可
  vue開發中，我們使用vue-loader,此loader支持vue組件的HMR,提供開箱即用的體驗
  react中使用react-refresh實現

10. ## publicPath
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist'), // 打包后的输出路径
        // 打包本地運行的時候才加'./',服務器讀取的時候還是'/',當然怎麽取值還要看具體情況
        publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
        // assetModuleFilename: 'img/[name].[hash:4][ext]' // asset模块打包图片路径
      },
    devServer: {
        // 只刷新当前报错的热更新
        hot: 'only',
        host:'localhost',
        <!-- 端口 -->
        port:'8080',
        <!-- 編譯完自動打開瀏覽器 -->
        open:'true'
        <!-- gzip壓縮 -->
        compress:true, 
        <!-- 添加本地服務的路徑 
        比如原來訪問是localhost:8080
        現在就要訪問是localhost:8080/abc -->
        publicPath: '/abc',
        proxy: {
          //  /api/users
          // 从 http://localhost:4000/api/users
          // 转换到 https://api.github.com/api/users
          '/api': {
            target: 'https://api.github.com',
            pathRewrite: { "^/api": "" },
            changeOrigin: true,
             <!-- 驗證證書 -->
          secure:false 
          }
        },
        <!-- historyApiFallback是開發中一個非常常見的屬性，它主要的作用是解決spa頁面在路由跳轉后，進行頁面刷新時，返回404的錯誤 -->
        historyApiFallback:true
      },
      <!-- 綜上，這兩個pubplicPath一般保持一致 -->
11. ## resolve(解析模塊)

    <!-- const path = require("path")
    const { resolve } = require("path")

    resolve: {
      extensions: ['.js', '.vue', '.json', '.css', '.scss', '.less'] // 寫這個可以省略文件名
      alias: {
        '@': path.resolve(__dirname, "./src"),  // 配置別名，在寫代碼時快速引入文件路徑
          "pages": path.resolve(__dirname, './src/pages')
      }
    } -->

12. 區分開發環境，生產環境 
   <!-- (因爲在開發和生產環境中設置了mode的值，所以可以直接打印process.env.NODE_ENV獲取當前是開發環境還是生產環境)
   mode為development時，會將DefinePlugin中的process.env.NODE_ENV設置為development
   mode為production時，會將DefinePlugin中的process.env.NODE_ENV設置為production -->


    <!-- "scripts": {
      "build": "webpack --config ./config/webpack.common.js --env production",
      "serve": "webpack serve --config ./config/webpack.common.js --env development"
    },
    module.eports=function(env){
      cosole.log(env)
      return {
        entry:'./src/index.js'
      }
    } -->

13. ## 打包優化
const TerserWebpackPlugin=require('terser-webpack-plugin)

optimization:{
  <!-- 對代碼進行壓縮 -->
  minimizer:[
    new TerserWebpackPlugin({
      extractComments:false
    })
  ],
  splitChunks:{
    <!-- async異步 initial同步 all都接受 異步引入的時候這裏的async才有效果 import動態函數加載一個庫-->
    <!-- import('loadsh').then((res)=>{}) -->
    cacheGroups:{
      'async-mock':{
        test:/[\\/]node_modules[\\/]mockjs[\\/]/,
        name:'async-mock',
        chunks:'all',
        priority:10
      }
    }
  }
}