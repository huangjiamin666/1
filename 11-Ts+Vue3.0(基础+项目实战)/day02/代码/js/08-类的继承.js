"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(n) {
        this.myName = n;
    }
    getName() {
        return this.myName;
    }
}
class Male extends Person {
    constructor(name, age) {
        super(name); // 调用回父类的constructor，并把参数传进去
        this.age = age;
    }
    getName() {
        // 返回的类型要和父类的返回类型一致。 Person也是一个接口。
        return "我叫：" + this.myName;
    }
}
let m = new Male("张三", 17);
console.log(m.myName);
console.log(m.age);
console.log(m.getName());
