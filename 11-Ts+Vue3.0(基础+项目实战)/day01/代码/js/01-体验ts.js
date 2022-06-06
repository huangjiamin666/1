"use strict";
let str = "3"; // 根据初始的赋值来推导出变量的类型。 以后str的类型不能改了
// str = 2; // 报错 原因：变量在定义的时候，类型已经确定下来了，不能修改
const num = 1; // 常量不能改变指向(不能被修改)， 所以它的值 就是它的类型
// num="2";  // 报错 原因：常量不能改变指向(不能被修改)
// const num1 = true; 
// ts原始类型有哪些？    js基础数据类型： number  string boolean undefined null symbol
// ts原始类型就是 js基础数据类型 这些
let str1 = "1";
let bool = false;
let num1 = 10;
num1.toFixed(2);
// str1.toFixed(2);   报错
let und = undefined;
let nul = null;
let sy = Symbol("123");
let vo = undefined;
function a() { }
// function c():undefined{}  // 报错
function b() { return undefined; }
// 在ts中函数没有写返回值，函数类型就是void
a();
