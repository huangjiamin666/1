"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fn(n) {
    return n;
}
fn(100);
fn(true);
// 泛型 可以理解为类型的形参， T是一个标识符,可以自定义， T表示某种类型
// 类型参数化
function fn1(n, m) {
    return n;
}
fn1(100, 'x');
fn1(true, 10);
fn1('hello', 's');
// let arr:Array<number> = [1]
