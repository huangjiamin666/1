"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let arr:object = [1,2,3];
// 数组的元素一般数据类型都一致，便于处理
// 第一种写法
let arr1 = [1, 2, 3];
arr1[0] = 10;
let arr4 = [{ a: 2, b: 4 }, { a: 3, b: 3 }];
// arr1[1]="10";   // 报错
// 第二种写法 泛型 类型参数化 (泛型后面学)
let arr2 = [10, 20, 30];
arr2[1] = 10;
// arr2[1]="10"  // 报错
// 元组  
let arr3 = [10, 20, true];
// let arr5:any[] = [1,2,"3"];
