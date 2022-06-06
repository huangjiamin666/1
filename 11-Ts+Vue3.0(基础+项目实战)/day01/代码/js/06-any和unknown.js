"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 不推荐使用any,  any绕过类型校验
// let a:any = 1;
// a="10";
// a=[10];
// a={b:10};
// a.toFixed(2);   //没有报错  绕过了，不检测
let n;
n = 1;
n = "10";
n = [10];
// n.toFixed(2); //报错  有做类型校验，除非上面写number，才不会有报错
if (typeof n === 'number') {
    n.toFixed(2);
}
else if (typeof n === 'string') {
    n.concat();
}
// any类型和unknown类型区别：  unknown会进行类型校验，any不会进行类型校验
