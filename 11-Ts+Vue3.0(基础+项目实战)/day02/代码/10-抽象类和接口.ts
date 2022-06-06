export {}

// 抽象类 是普通类的描述, 指定一个类的规范，给普通的类去继承。
// 继承之后，普通类里面就必须定义抽象类里面的抽象属性和抽象方法。 抽象类里面的普通方法直接继承，在普通类里面可以不用实现
// 抽象类不能被实例化！！！
abstract class Person{
  abstract name:string;
  abstract getName():string;
  getAge(){
    return 11
  }
}

// 普通类(我们以前学习的类)
class Male extends Person{
  name:string="xxx";
  getName(){
    return this.name
  }
}

let m1 = new Male();
console.log(m1.getName());
console.log(m1.getAge());

// 抽象类不能被实例化！！！
// let p1 = new Person()

// 书写接口，给类使用
interface PerItf{
  name:string;
  age?:number;
  getName:()=>void
}
class M implements PerItf{
  readonly name:string="";
  // age:number=14;
  getName(){
    
  }
}
let m = new M();
// m.name = "xxx"