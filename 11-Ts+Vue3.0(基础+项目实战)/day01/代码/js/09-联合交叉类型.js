"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// |  & 
// &&优先于||
// console.log(1||(2&&3));  // 1
// & 优先于 |
let obj;
obj = {
    name: "zhangsan",
    age: 17
};
obj = {
    name: 2,
    age: "17"
};
