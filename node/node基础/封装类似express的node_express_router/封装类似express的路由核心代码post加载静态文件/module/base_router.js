
// 这个脚本执行完就生成了一个供外部传参调用的方法，如果这个方法存在则调用执行这个方法

let G = {}

let app = function (req, res) {
    if (G['/login']) {
        G['/login'](req, res)//执行方法
    }
}

app.get = function (str, cb) {

    // 注册方法
    G[str] = cb
}

app.get('/login', function (req, res) {
    // res.send('hello world')
    console.log(req, res)
})
module.exports = app