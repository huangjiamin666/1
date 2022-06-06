export{}

// 2 定义类的同时，相当于定义了同名称的接口
class Person{
  // 1 定义属性前，应该先声明这个属性的类型，也可以同时设置默认值
  myName:string="默认名称";

  constructor(n:string){
    this.myName=n
  }
  getName(){
    return this.myName
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
let obj:Person={
  myName:"",
  getName(){
    return ""
  }
}