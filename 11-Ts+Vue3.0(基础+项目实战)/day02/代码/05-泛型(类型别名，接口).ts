export{}

// 泛型-类型别名
type StrOrNum = string|number;
// type ObjType = {name:string, getName:()=>string}
type ObjType<N, G=string> = {name:N, getName:()=>G}

let obj:ObjType<StrOrNum>={
  name:23,
  getName(){
    return "1"
  }
}

// 泛型-接口
// interface PersonItf{
//   name:string,
//   getName:()=>string
// }
// 可以设置默认的类型，在使用的时候就可以省略不传
interface PersonItf<N,G=number>{
  name:N,
  getName:()=>G
}
let obj2:PersonItf<StrOrNum, string> = {
  name:2,
  getName(){
    return "2"
  }
}