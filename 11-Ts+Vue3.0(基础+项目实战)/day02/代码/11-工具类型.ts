export{}

interface PItf{
  name:string;
  age:number;
  height?:number
}

// type Partial<T> = { [P in keyof T]?: T[P] | undefined; }
/*
keyof T       'name'|'age'

{
  name?:string|undefined;
  age?:number|undefined
}
for(aaa in 对象)
// Partial 部分的
*/
// 作用： 把<>里面这个接口类型的属性设置为可缺省的属性
let obj:Partial<PItf>={
  name:"",
  age:undefined,
}


// type Required<T> = { [P in keyof T]-?: T[P]; }
/*
 keyof T  'name'|'age'|'height'
 -?号  抵消，去掉这个?号
{
  name:string;
  age:number;
  height:number;
}

*/
// 作用：把<>里面这个接口类型的属性设置为不可缺省的属性
let obj2:Required<PItf>={
  name:"",
  age:12,
  height:1.80
}