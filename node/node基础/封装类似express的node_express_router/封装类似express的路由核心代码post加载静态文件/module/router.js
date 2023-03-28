
// 这个脚本执行完就生成了一个供外部传参调用的方法，如果这个方法存在则调用执行这个方法
const url = require('url')
const fs = require('fs');
const path = require('path');
//私有方法
let getFileMime = function (extname) {

    var data = fs.readFileSync('./data/mime.json'); //同步方法
    let mimeObj = JSON.parse(data.toString());
    return mimeObj[extname];

}
function initstatic(req, res, staticPath) {
    //1、获取地址
    let pathname = url.parse(req.url).pathname;
    let extname = path.extname(pathname);

    //2、通过fs模块读取文件
    if (pathname != '/favicon.ico' && extname) {
        try {
            let data = fs.readFileSync('./' + staticPath + pathname);
            if (data) {
                let mime = getFileMime(extname);
                res.writeHead(200, { 'Content-Type': '' + mime + ';charset="utf-8"' });
                res.end(data);
            }
        } catch (error) {

        }
    }

}
// 
function changeRes(res) {
    res.send = (data) => {
        res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' })
        res.end(data)
    }
}
let server = () => {
    let G = {
        _get: {},
        _post: {},
        staticPath: 'static' //静态web目录
    }
    //http://127.0.0.1:3000/login  

    //req请求参数,res响应参数,pathame请求路径 
    // G['_' + method][pathname](req, res) 返回数据
    let app = function (req, res) {
        // 扩展res方法
        changeRes(res)

        //配置静态web服务
        initstatic(req, res, G.staticPath)

        let pathname = url.parse(req.url).pathname

        // 获取请求类型
        let method = req.method.toLowerCase()
        console.log(method)
        if (G['_' + method][pathname]) {
            if (method == 'get') {
                G['_' + method][pathname](req, res)//执行方法
            } else {
                //post 获取post的数据把它绑定到req.body
                let postData = '';
                req.on('data', (chunk) => {
                    postData += chunk;
                })
                req.on('end', () => {
                    console.log(postData);
                    // res.end(postData);
                    req.body = postData
                    G['_' + method][pathname](req, res)//执行方法
                })
            }
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' })
            res.end('页面不存在')
        }
    }
    //get请求
    app.get = function (str, cb) {

        // 注册方法
        G._get[str] = cb
    }
    //post请求
    app.post = function (str, cb) {

        // 注册方法
        G._post[str] = cb
    }
    // 配置静态web目录
    app.static = function (staticPath) {
        G.staticPath = staticPath
    }
    return app
}
module.exports = server()