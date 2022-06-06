"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 2 定义类的同时，相当于定义了同名称的接口
class Person {
    constructor(n) {
        // 1 定义属性前，应该先声明这个属性的类型，也可以同时设置默认值
        this.myName = "默认名称";
        this.myName = n;
    }
    getName() {
        return this.myName;
    }
}
let p = new Person("张三");
console.log(p.myName);
console.log(p.getName());
// 以上这个类，相当于下面这个接口
// interface Person{
//   myName:string;
//   getName:()=>string;
// }
let obj = {
    myName: "",
    getName() {
        return "";
    }
};
