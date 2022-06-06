export{}
type ObjType = {myname:string,Person:(m:string)=>void}


let obj:ObjType = {
  myname:"zhangsan",
  Person:()=>{}
}

// 定义函数的时候，this的类型，必须和调用的时候的类型一致
// this:Window|ObjType  可以给多种类型所对应的对象，让this去指向
function Person(this:Window|ObjType,name:string){
  this.myname=name
}

obj.Person = Person
obj.Person("xxx")

window.Person = Person
window.Person("")