const fs = require('fs');
const path = require('path');
const url = require('url');

//私有方法
let getFileMime = function (extname) {

    var data = fs.readFileSync('./data/mime.json'); //同步方法
    let mimeObj = JSON.parse(data.toString());
    return mimeObj[extname];

}

exports.static = function (req, res, staticPath) {

    //1、获取地址
    let pathname = url.parse(req.url).pathname;
    let extname = path.extname(pathname);
    // 这里的服务最好是同步的，才能正确的执行完这里的路由再执行
    // app.js页面routes.static(req,res,'static')后面添加的业务路由
    if (extname) {  //如果有后缀名让静态web处理 否则路由处理
        //2、通过fs模块读取文件
        if (pathname != '/favicon.ico') {
            try {
                let data = fs.readFileSync('./' + staticPath + pathname);
                if (data) {
                    let mime = getFileMime(extname);
                    res.writeHead(200, { 'Content-Type': '' + mime + ';charset="utf-8"' });
                    res.end(data);
                }
            } catch (error) {
                console.log(error)
            }

            // fs.readFileSync('./'+'staticPath'+pathname, (err,data)=>{
            //     // 这里面把404去掉了，因为其他的时候要匹配业务逻辑路由，但若不删除这样匹配都是404不合理
            //     if(err){                
            //         res.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});  
            //         res.end('404这个页面不存在');               
            //     }
            // let mime=common.getFileMime(extname);
            // res.writeHead(200, {'Content-Type': ''+mime+';charset="utf-8"'});  
            // res.end(data);             
            // })
        }
    }

}



