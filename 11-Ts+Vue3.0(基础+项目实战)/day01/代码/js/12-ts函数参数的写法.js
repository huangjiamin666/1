"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 默认参数  参数名:number=3   这个参数的默认值是3
function fn(a, b = 3) {
    return a + b;
}
console.log(fn(1, 2));
console.log(fn(5));
console.log("----------------------");
// 缺省参数   参数名?  表示可以被缺省的参数
function fn1(a, b) {
    return 1;
}
fn1(1, 2);
fn1(1);
// 剩余参数
function fn2(a, b, ...arr) {
    console.log(a, b);
    console.log(arr);
}
fn2(1, 2, 3, 5, 4);
// let arr1 = [1,2,3];
// let arr2 = [...arr1];
// arr1[0] = 4;
// console.log(arr1);
// console.log(arr2);
console.log("----------------------");
let obj1 = { a: 1, b: 2, c: [1, 2, 3] };
let obj2 = Object.assign({}, obj1); // 浅拷贝
obj1.a = 100;
obj1.c[0] = 1000;
console.log(obj1);
console.log(obj2);
