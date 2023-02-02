const path = require('path')
// 獲取啓動目錄
// "build": "webpack --config ./config/webpack.common.js --env production",
// "serve": "webpack --config ./config/webpack.common.js --env development serve"
const appDir = process.cwd()
const resolveApp = (relativePath) => {
  return path.resolve(appDir, relativePath)
}
module.exports = resolveApp