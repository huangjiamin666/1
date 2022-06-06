export {}

interface Person{
  name:string;
  age:number;
  [idx:number]:number|string;
  [idx:string]:number|string;
}
// keyof 后面一般跟接口， 表示接口的这些属性名之一 (实际上就是 ":" 前面的这些)
type Ptype = keyof Person;  // "name" |  "age" | number | string  
let p1:Ptype;
p1 = "name"
p1 = "age"
p1 = 1
p1 = "123"

// interface PerItf{
//   [idx:string]:number|string;
// }
// let p2:PerItf ={
//   "aa":1
// } 

type StrOrNum = string | number;
type PItf = {
  [k in StrOrNum]:string
} 
let obj:PItf = {
  a:"",
  10:""
}

// typeof  提取变量或者对象的类型
let str = "123";
type StrType = typeof str;  // string
let aaa:StrType = "xx"

let obj2={
  name:1,
  age:"",
  height:10
}
type OType = typeof obj2;
let obj3:Partial<OType> = {
  name:11,
  age:"x"
}