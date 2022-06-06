"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 加了export{}，这里就不是全局， 这里扩展的Window接口就失效了。 需要写到global.d.ts上。
// ts提供了Window类型,window就是这个Window类型的对象
function Person(name) {
    // 在ts的书写中，需要指明this指向。 在函数的第一个形参的位置注明
    // Window类型中没有myname这个属性，所以需要自己扩展这个属性
    this.myname = name;
}
// 加了export{}，这里就不是全局，Person不是window下的属性，需要我们赋到window.Person上
window.Person = Person;
window.Person("");
