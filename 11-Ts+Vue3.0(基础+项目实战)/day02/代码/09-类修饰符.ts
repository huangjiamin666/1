export{}
// 类里面，定义的属性，默认的修饰符就是public， public修饰的属性和方法都可以在类的内部，类的外部，子类也可以访问
// protected 受保护的。类里面，子类面都可以访问，类的外面不能访问
// private 私有的。在本类里面可以访问，子类和类的外面都不能访问

// readonly 设置属性只读，不能被修改
class Person{
  // public myName:string
  public readonly myName:string
  // protected myName:string
  // private myName:string
  static title:string="title的值"   // 静态属性/成员， 是给类去用的
  constructor(n:string){
    this.myName=n
  }
  public getName(){
    return this.myName
  }
}
console.log(Person.title);
Person.title="修改后的title的值"
console.log(Person.title);
let p = new Person("李四")
// console.log(p.title); 报错

class Male extends Person{
  age:number
  constructor(name:string,age:number){
    super(name)   // 调用回父类的constructor，并把参数传进去
    this.age=age
  }
  getName(){  // 重写 (子类方法名和父类方法名一致，成为重写了这个方法)
    // 返回的类型要和父类的返回类型一致。 Person也是一个接口。
    return "我叫："+this.myName
  }
}

let m = new Male("张三",17);
console.log(m.myName);
console.log(m.age);
console.log(m.getName());


// m.myName = "xx"