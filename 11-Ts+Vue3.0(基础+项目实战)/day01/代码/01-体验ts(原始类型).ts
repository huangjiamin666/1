export{}
let str = "3";   // 根据初始的赋值来推导出变量的类型。 以后str的类型不能改了
// str = 2; // 报错 原因：变量在定义的时候，类型已经确定下来了，不能修改
const num = 1;   // 常量不能改变指向(不能被修改)， 所以它的值 就是它的类型
// num="2";  // 报错 原因：常量不能改变指向(不能被修改)

// const num1 = true; 

// ts原始类型有哪些？    js基础数据类型： number  string boolean undefined null symbol
// ts原始类型就是 js基础数据类型 这些
let str1:string =  "1";
let bool:boolean =  false;
let num1:number = 10;
num1.toFixed(2);
// str1.toFixed(2);   报错  在编写代码的阶段就给你报错，不用等到执行
let und:undefined = undefined;
let nul:null = null;
let sy:symbol = Symbol("123");
let vo:void = undefined;

function a():void{}
// function c():undefined{}  // 报错
function b():undefined{ return undefined}
// 在ts中函数没有写返回值，函数类型就是void
a();