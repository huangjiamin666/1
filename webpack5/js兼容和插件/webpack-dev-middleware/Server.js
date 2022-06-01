const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')
const app = express()

// 获取配置文件
const config= require('./webpack.config.js')
const complier = webpack(config)
app.use(webpackDevMiddleware(complier))

// 开启服务
app.listen(3000, ()=>{
    console.log('服务运行在3000端口上')
})
