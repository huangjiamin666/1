## export 或者export default導出，用import導入
## moudle.exports 導出，用require導入
## 五個模塊：entry,output,module,plugin,loader
## loader特定的模塊類型進行轉換
## plugin用於更加廣汎的任務，如打包優化，資源管理，環境變量注入等
1. postcss處理css兼容 （結合borwserslitrc)
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

7. sourceMap是從已轉換的代碼，映射到原始的源文件