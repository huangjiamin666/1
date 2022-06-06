export {}

interface NameItf{
  readonly name:string   // readonly 属性名   表示这个属性只允许读取，修改就报错
}
interface AgeItf{
  age?:number  // 属性名? 表示这个属性可以缺省。（定义数据的时候不写也没问题）
}
// 接口继承的格式， 特点是，具有父接口的属性类型
interface PersonItf extends NameItf,AgeItf{
  height:number
}
let p:PersonItf;
p={
  name:"张三",
  height:1.80
}
// p.name="lisi"

// 接口可以同名  特点是，合并了(都具有)所有属性类型
interface AItf{
  a:number
}
interface AItf{
  b:string
}
let obj:AItf={
  a:1,
  b:"b"
}