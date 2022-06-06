export{}

// 自定义一个类型
type StrOrNum = string | number

let str:StrOrNum = "1";
str=10;

type ObjType = {a:number&2, b:string}
// type ObjType = {c:string}
let obj:ObjType = {
  a:2,
  b:"bbb"
}

// interface和type区别：
// 都可以用来自定义类型
// 类型别名支持联合和交叉类型定义
// 类型别名不支持重复定义， 接口可以

interface AItf{
  a:string
}
// 用类型别名保存接口上的某个属性类型
type Atype = AItf['a'];   // string
let str2:Atype = "10";

type color='red' | 'blue' |'green'| string & {}
let c:color = 'red'
