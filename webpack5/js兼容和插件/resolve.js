const path = require("path")
const { resolve } = require("path")

resolve: {
  extensions: ['.js', '.vue', '.json', '.css', '.scss', '.less'] // 寫這個可以省略文件名
  alias: {
    '@': path.resolve(__dirname, "./src"),  // 配置別名，在寫代碼時快速引入文件路徑
      "pages": path.resolve(__dirname, './src/pages')
  }
}