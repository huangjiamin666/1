"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 抽象类 是普通类的描述, 指定一个类的规范，给普通的类去继承。
// 继承之后，普通类里面就必须定义抽象类里面的抽象属性和抽象方法。 抽象类里面的普通方法直接继承，在普通类里面可以不用实现
// 抽象类不能被实例化！！！
class Person {
    getAge() {
        return 11;
    }
}
// 普通类(我们以前学习的类)
class Male extends Person {
    constructor() {
        super(...arguments);
        this.name = "xxx";
    }
    getName() {
        return this.name;
    }
}
let m1 = new Male();
console.log(m1.getName());
console.log(m1.getAge());
class M {
    constructor() {
        this.name = "";
    }
    // age:number=14;
    getName() {
    }
}
let m = new M();
// m.name = "xxx"
