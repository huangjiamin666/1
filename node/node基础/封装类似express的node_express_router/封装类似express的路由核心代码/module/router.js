
// 这个脚本执行完就生成了一个供外部传参调用的方法，如果这个方法存在则调用执行这个方法
const url = require('url')
let G = {}
//http://127.0.0.1:3000/login
let app = function (req, res) {
    let pathname = url.parse(req.url).pathname
    if (G[pathname]) {
        G[pathname](req, res)//执行方法
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' })
        res.end('页面不存在')
    }
}

app.get = function (str, cb) {

    // 注册方法
    G[str] = cb
}
module.exports = app