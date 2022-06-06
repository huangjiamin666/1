export {}

// function fn(a:number,b:number):number{
//   return a+b
// }

// 接口定义函数类型
interface FnItf{
  // 形参类型:返回值类型
  (p:string):number
}
// let fn:FnItf = (p:string)=>{
//   return 1
// }
// fn("")

// 类型别名定义函数类型
// type FnType = (p:string)=>void
// let fn2:FnType = (p:string):void=>{}
// fn2("")

// ------------------------------------------------------------
// 函数作为对象的属性出现的时候
// interface ObjItf{
//   fn:FnItf
// }
// let obj:ObjItf ={
//   fn:(str)=>{
//     return 1
//   }
// }
// obj.fn("")

type ObjType = {fn:(p:string)=>number}
let obj:ObjType ={
  fn:(str)=>{
    return 1
  }
}
obj.fn("")