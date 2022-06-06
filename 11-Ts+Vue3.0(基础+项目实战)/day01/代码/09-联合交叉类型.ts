export{}
// |  & 

// &&优先于||
// console.log(1||(2&&3));  // 1

// & 优先于 |
let obj:{name:string} & {age:number} | {name:number} & {age:string};

obj = {
  name:"zhangsan",
  age:17
}

obj = {
  name:2,
  age:"17"
}