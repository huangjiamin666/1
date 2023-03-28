const http = require('http');
const ejs = require('ejs')
// module.export导出的引入可以取其他名字也可以用导出的名字,这里用导出的
const app = require('./module/router')

//用routes替换http.createServer内的方法
// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
//   response.end('Hello World');
// }).listen(3000);
http.createServer(app).listen(3000)
console.log('Server running at http://127.0.0.1:3000/');

// 配置路由 返回数据
app.get('/', (req, res) => {
  // res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' })
  // res.end('执行登录操作')

  //用ejs渲染html
  // ejs.renderFile('./views/form.ejs', {}, (err, data) => {
  //   res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' })
  //   res.end(data)
  // })

   //封装下面这两句话
    // res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' })
    // res.end(data)
    res.send('首页')
})
// 配置路由 返回数据
app.get('/login', (req, res) => {
  ejs.renderFile('./views/form.ejs', {}, (err, data) => {
    // res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' })
    // res.end(data)
    res.send(data)
  })
})

app.post('/doLogin', (req, res) => {
  console.log(req.body)
  // res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' })
  // res.end(req.body)
  res.send(req.body)
})
