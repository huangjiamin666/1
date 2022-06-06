declare function $(n:string):any;
declare namespace ${
  function ajax():void;
}


// npm i --save-dev @type/jquery
// @type/jquery 市面上已经写好了的这些针对jquery的ts类型声明
// --save-dev    jquery 是项目依赖， 不是开发环境依赖
// -D  如果是开发环境依赖   npm i -D @type/库名

// 做这种Ts项目，我在安装第三方库/框架的时候，需要考虑这个库是否基于Ts的，如果不是基于Ts的，就需要安装针对它的Ts类型声明的插件，写代码的时候才不会有错误提示