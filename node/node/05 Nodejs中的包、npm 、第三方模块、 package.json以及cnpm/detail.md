1. 包Nodejs 中除了它自己提供的核心模块外，
   我们可以自定义模块，也可以使用第三方的 模块。
   Nodejs 中第三方模块由包组成，可以通过包来对一组具有相互依赖关系的模块进行 统一管理。
2. 完全符合 CommonJs 规范的包目录一般包含如下这些文件。
 • package.json :包描述文件。 
 • bin :用于存放可执行二进制文件的目录。
 • lib :用于存放 JavaScript 代码的目录。 
 • doc :用于存放文档的目录。
3. 安装模块并把模块写入 package.json(依赖)
  npm install 模块 --save 
  npm install 模块 --save-dev 
4. dependencies 与 devDependencies 之间的区别?
 使用 npm install xxx –save 自动更新 dependencies 字段值; 
 使用 npm install xxx –save-dev 自动更新 devDependencies 字段值;
 dependencie 配置当前程序所依赖的其他包。
 devDependencie 配置当前程序所依赖的其他包，
 比如一些工具之类的配置在这里 "dependencies": { "ejs": "^2.3.4", "express": "^4.13.3", "formidable": "^1.0.17" }
 ^表示第一位版本号不变，后面两位取最新的
 ~表示前两位不变，最后一个取最新 
 *表示全部取最新
 5.cnpm镜像
  npm install -g cnpm --registry=https://registry.npm.taobao.org
  这样就可以在国内快速的使用cnpm i 了

如何找到想要的第三方包，1 gitHub搜索，2 npmjs.com搜索


项目下查看所有的包 npm list