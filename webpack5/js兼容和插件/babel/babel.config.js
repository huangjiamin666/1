module.exports = {
  // plugins: [
  //   '@babel/plugin-transform-arrow-functions',
  //   '@babel/plugin-transform-block-scoping'
  // ] 麻烦

  // 设置要兼容的浏览器 一般在 .browserslistrc里面有，这里不用加
  // presets: [
  //   [
  //   '@babel/preset-env',
  //   {
  //     targets: 'chrome 91' 
  //   }
  //   ]
  // ]
  // presets: ['@babel/preset-env']
  presets: [
    [
      '@babel/preset-env',
      {
        // false 不对当前js处理做polyfill填充
        // entry  依据.browserslistrc进行填充
        // usage 依据用户源代码所使用到的新语法进行填充
        useBuiltIns: 'usage',
        corejs: 3 // 当前corejs版本
      }
    ],
//     当使用babel-loader编译typescript时
// npm install @babel/preset-typescript -D
    ['@babel/preset-typescript']
  ]
}