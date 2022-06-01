/*

// 循环体中的两个关键词
// continue：结束当前这轮循环（continue后面的代码不再执行），继续执行下一轮循环
// break: 强制结束整个循环（break后面代码也不再执行），而且整个循环啥也不干直接结束  



### JS中的数据类型检测
- typeof [val]：用来检测数据类型的运算符
- instanceof ：用来检测当前实例是否率属于某个类
- constructor ： 基于构造函数检测数据类型（也是基于类的方式）
- Object.prototype.toString.call() ：检测数据类型最好的办法


 * 基于typeof检测出来的结果
 *   1. 首先是一个字符串
 *   2. 字符串中包含对应的类型 
 * 局限性
 *   1. typeof null => "object"  但是null并不是对象
 *   2. 基于typeof无法细分出当前值是普通对象还是数组对象等，因为只要是对象数据类型，返回的结果都是"object"
 */
/* console.log(typeof 1);
let a = NaN;
console.log(typeof a); //=>'number' */

// console.log(typeof typeof typeof []);
//=> typeof [] => "object"
//=> typeof "object" => "string"
//因为typeof检测的结果都是字符串，所以只要两个及以上同时检测，最后结果必然是"string"


// 局限性
//  typeof null =>"object"
//  typeof '12' =>"string"
//  typeof true =>"boolean"
//  typeof undefined =>"undefined"
//  typeof 1 =>"number"
//  typeof NaN =>'number'
//  typeof function(){} =>"function"
//  typeof {} =>"object"
//  typeof [] =>"object"
//  typeof /^/ =>"object"