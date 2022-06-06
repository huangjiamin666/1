export {}

type FnType<P> = P extends string|number ? P[] : P;

let obj:FnType<number> = [1,2];
let obj2:FnType<boolean> = false;
let obj3:FnType<string> = ['xx'];


// infer  类型推断
// infer N 取值为name:后面的这个string
type ObjType<T> = T extends {name: infer N, age: infer A} ? [N,A] : null;
let obj4:ObjType<{name:string, age:number}> = ["xx",1]
let obj5:ObjType<number> = null;
let obj6:ObjType<{name:"张三", age:18}> = ["张三",18];